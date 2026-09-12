/** Typing engine: tracks per-char status, metrics, completion */

import { computeMetrics, starsFor, passedStage } from "./scoring.js";
import { playKeyCorrect, playKeyWrong, playStageComplete } from "./audio.js";

export class TypingEngine {
  /**
   * @param {object} opts
   * @param {string} opts.text
   * @param {'fa'|'en'} opts.lang
   * @param {boolean} [opts.caseSensitive]
   * @param {boolean} [opts.soundEnabled]
   * @param {boolean} [opts.strictMode] — wrong key does not advance
   * @param {number} [opts.minWpm]
   * @param {number} [opts.minAccuracy]
   * @param {number} [opts.timeLimitMs]
   * @param {(state) => void} [opts.onUpdate]
   * @param {(result) => void} [opts.onComplete]
   */
  constructor(opts) {
    this.text = opts.text || "";
    this.chars = Array.from(this.text);
    this.lang = opts.lang || "en";
    this.caseSensitive = opts.caseSensitive !== false;
    this.soundEnabled = opts.soundEnabled !== false;
    this.strictMode = opts.strictMode === true;
    this.minWpm = opts.minWpm || 0;
    this.minAccuracy = opts.minAccuracy || 0;
    this.timeLimitMs = opts.timeLimitMs || 0;
    this.onUpdate = opts.onUpdate || (() => {});
    this.onComplete = opts.onComplete || (() => {});

    this.status = this.chars.map(() => "pending");
    this.index = 0;
    this.correctChars = 0;
    this.totalTyped = 0;
    this.incorrectChars = 0;
    this.correctedErrors = 0;
    this.rejectedKeys = 0; // strict-mode wrong attempts that did not advance
    this.keyStats = {}; // per-expected-char { hits, misses }
    this.startedAt = null;
    this.endedAt = null;
    this.finished = false;
    this.destroyed = false;
    this._raf = null;
  }

  get progressRatio() {
    if (!this.chars.length) return 0;
    return this.index / this.chars.length;
  }

  get remainingMs() {
    if (!this.timeLimitMs || !this.startedAt) return this.timeLimitMs || 0;
    return Math.max(0, this.timeLimitMs - (performance.now() - this.startedAt));
  }

  get elapsedMs() {
    if (this.startedAt == null) return 0;
    const end = this.endedAt != null ? this.endedAt : performance.now();
    return Math.max(0, end - this.startedAt);
  }

  get nextChar() {
    return this.chars[this.index] || null;
  }

  start() {
    this.startedAt = performance.now();
    this._tick();
    this._emit();
  }

  abort() {
    this._stopRaf();
    if (!this.finished) {
      this.finished = true;
      this.endedAt = performance.now();
      this._emit();
    }
  }

  destroy() {
    this.destroyed = true;
    this._stopRaf();
  }

  _bumpKey(ch, ok) {
    if (!ch || ch === " ") return;
    const k = this.keyStats[ch] || (this.keyStats[ch] = { hits: 0, misses: 0 });
    if (ok) k.hits += 1;
    else k.misses += 1;
  }

  _norm(ch) {
    if (ch == null) return ch;
    let out = ch;
    if (!this.caseSensitive && this.lang === "en") out = out.toLowerCase();
    // Drop zero-width / tatweel
    const code = out.codePointAt(0);
    if (
      code === 0x200b || code === 0x200c || code === 0x200d ||
      code === 0x200e || code === 0x200f || code === 0xfeff ||
      code === 0x0640
    ) return "";
    // All exotic spaces → regular space
    if (
      code === 0x00a0 || code === 0x1680 ||
      (code >= 0x2000 && code <= 0x200a) ||
      code === 0x202f || code === 0x205f || code === 0x3000 ||
      out === "\t"
    ) return " ";
    out = out.replace(/ـ/g, "");
    out = out.replace(/ي/g, "ی").replace(/ى/g, "ی");
    out = out.replace(/ك/g, "ک");
    return out;
  }

  handleKey(key) {
    if (this.finished) return { handled: false };

    if (this.startedAt == null) this.start();

    if (key === "Escape") {
      this.abort();
      return { handled: true, aborted: true };
    }

    if (key === "Backspace") {
      if (this.index <= 0) return { handled: true, noop: true };
      this.index -= 1;
      if (this.status[this.index] === "correct") {
        this.correctChars = Math.max(0, this.correctChars - 1);
        this.correctedErrors += 1;
      } else if (this.status[this.index] === "incorrect") {
        this.incorrectChars = Math.max(0, this.incorrectChars - 1);
      }
      this.totalTyped = Math.max(0, this.totalTyped - 1);
      this.status[this.index] = "pending";
      this._emit();
      return { handled: true, backspace: true };
    }

    if (key === "Enter") {
      return this._typeChar("\n");
    }

    if (key == null || key.length !== 1) return { handled: false };
    return this._typeChar(key);
  }

  _typeChar(key) {
    if (this.finished) return { handled: false };
    if (this.startedAt == null) this.start();
    if (this.index >= this.chars.length) return { handled: true, done: true };

    // Skip any leftover invisible chars in the target
    while (this.index < this.chars.length) {
      const peek = this._norm(this.chars[this.index]);
      if (peek === "" && this.chars[this.index] !== " ") {
        this.status[this.index] = "correct";
        this.index += 1;
        continue;
      }
      break;
    }
    if (this.index >= this.chars.length) {
      this._finish();
      return { handled: true, ok: true, completed: true };
    }

    const expected = this._norm(this.chars[this.index]);
    const actual = this._norm(key);
    // Space-like input always matches a space target
    const ok = expected === actual || (expected === " " && actual === " ");

    if (this.strictMode && !ok) {
      this.rejectedKeys += 1;
      this.incorrectChars += 1;
      this._bumpKey(expected, false);
      if (this.soundEnabled) playKeyWrong();
      this._emit({ rejected: true, expected: this.chars[this.index] });
      return { handled: true, ok: false, rejected: true };
    }

    this.totalTyped += 1;
    if (ok) {
      this.status[this.index] = "correct";
      this.correctChars += 1;
      this._bumpKey(expected, true);
      if (this.soundEnabled) playKeyCorrect();
    } else {
      this.status[this.index] = "incorrect";
      this.incorrectChars += 1;
      this._bumpKey(expected, false);
      if (this.soundEnabled) playKeyWrong();
    }

    this.index += 1;

    if (this.index >= this.chars.length) {
      this._finish();
      return { handled: true, ok, completed: true };
    }

    this._emit();
    return { handled: true, ok };
  }

  _tick() {
    if (this.finished || this.destroyed) return;
    if (this.timeLimitMs > 0 && this.startedAt && performance.now() - this.startedAt >= this.timeLimitMs) {
      this._finish(true);
      return;
    }
    this._emit();
    this._raf = requestAnimationFrame(() => this._tick());
  }

  _stopRaf() {
    if (this._raf != null) {
      cancelAnimationFrame(this._raf);
      this._raf = null;
    }
  }

  _buildResult(timedOut = false) {
    // In strict mode, rejected wrong keys count toward accuracy denominator
    const attempts = this.totalTyped + this.rejectedKeys;
    const metrics = computeMetrics({
      correctChars: this.correctChars,
      totalTyped: Math.max(attempts, this.totalTyped),
      incorrectChars: this.incorrectChars,
      durationMs: this.elapsedMs,
      correctedErrors: this.correctedErrors,
    });

    const stars = starsFor({
      wpm: metrics.wpm,
      accuracy: metrics.accuracy,
      minWpm: this.minWpm,
      minAccuracy: this.minAccuracy,
    });

    const completed = this.progressRatio >= 0.999;
    // Untimed: must finish the text. Timed: pass on solid metrics even if text not fully done.
    let passed;
    if (this.timeLimitMs > 0) {
      const minProgress = this.strictMode ? 0.4 : 0.25;
      const minAcc = Math.max(this.minAccuracy, 85);
      passed = this.progressRatio >= minProgress
        && metrics.accuracy >= minAcc
        && metrics.wpm >= this.minWpm
        && this.correctChars > 0;
    } else {
      passed = completed && passedStage({
        wpm: metrics.wpm,
        accuracy: metrics.accuracy,
        minWpm: this.minWpm,
        minAccuracy: this.minAccuracy,
      });
    }

    const errorChars = Object.entries(this.keyStats)
      .filter(([, v]) => v.misses > 0)
      .sort((a, b) => b[1].misses - a[1].misses)
      .slice(0, 8)
      .map(([ch, v]) => ({ ch, misses: v.misses, hits: v.hits }));

    return {
      ...metrics,
      stars: passed ? stars : 0,
      passed,
      timedOut,
      completed,
      progress: Math.round(this.progressRatio * 1000) / 10,
      lang: this.lang,
      textLength: this.chars.length,
      rejectedKeys: this.rejectedKeys,
      keyStats: this.keyStats,
      errorChars,
    };
  }

  _finish(timedOut = false) {
    this._stopRaf();
    this.finished = true;
    this.endedAt = performance.now();
    const result = this._buildResult(timedOut);
    if (this.soundEnabled && result.passed) playStageComplete();
    this._emit();
    this.onComplete(result);
  }

  _emit(extra = null) {
    if (this.destroyed) return;
    const result = this._buildResult(false);
    this.onUpdate({
      index: this.index,
      status: this.status,
      chars: this.chars,
      remainingMs: this.remainingMs,
      progress: this.progressRatio,
      result,
      finished: this.finished,
      nextChar: this.nextChar,
      ...(extra || {}),
    });
  }
}
