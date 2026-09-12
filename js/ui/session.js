/** Typing session UI — lesson / practice, zen, boss, combo, live sparkline */

import {
  state, saveLessonResult, appendSessionRecord, getLessons, recordKeyStats,
} from "../state.js";
import { t } from "../config.js";
import { navigate } from "../router.js";
import { TypingEngine } from "../typing-engine.js";
import { formatDuration } from "../scoring.js";
import { renderKeyboard, updateNextKey, handHintHtml, renderHands, updateHands } from "./keyboard.js";
import { buildPracticeText, resolveContentLang, resolveContentDir } from "./practice.js";
import { normalizeTypingText } from "../normalize-text.js";
import { burstConfetti } from "../confetti.js";
import { ACHIEVEMENTS, achievementLabel, achievementDesc } from "../achievements.js";
import { computeSessionXp, levelFromXp, titleForLevel } from "../xp.js";

let engine = null;
let keyHandler = null;

export function destroySession() {
  if (engine) {
    engine.destroy();
    engine = null;
  }
  if (keyHandler) {
    document.removeEventListener("keydown", keyHandler);
    keyHandler = null;
  }
}

/**
 * params:
 *  lesson:       [lang, index]
 *  practice-run: [lang, level, source, length, durationSec, sessionMode?]
 */
export function renderSession(root, routeName, params) {
  destroySession();

  const lang = params[0] === "en" || params[0] === "fa" ? params[0] : state.lang;
  const L = (k) => t(lang, k);

  let text = "";
  let title = "";
  let desc = "";
  let minWpm = 0;
  let minAccuracy = 0;
  let lessonIndex = -1;
  let mode = "practice";
  let timeLimitMs = 0;
  let sessionMode = "normal";
  let source = "sentences";

  if (routeName === "lesson") {
    mode = "lesson";
    const idxRaw = (params[0] === "en" || params[0] === "fa") ? params[1] : params[0];
    lessonIndex = Number(idxRaw || 0);
    const lessons = getLessons(lang);
    const lesson = lessons[lessonIndex];
    if (!lesson) {
      navigate("curriculum");
      return;
    }
    title = lesson.title;
    desc = lesson.desc || "";
    minWpm = lesson.minWpm || 0;
    minAccuracy = lesson.minAccuracy || 0;
    text = normalizeTypingText(buildLessonText(lesson));
    source = "lesson";
  } else {
    const [, level = "easy", src = "sentences", length = "medium", dur = "0", sm = "normal"] = params;
    source = src;
    sessionMode = sm === "zen" || sm === "boss" ? sm : "normal";
    timeLimitMs = Number(dur) * 1000 || 0;
    if (sessionMode === "boss" && !timeLimitMs) timeLimitMs = 60000;
    title = sessionMode === "boss"
      ? (lang === "fa" ? "چالش زمانی" : "Timed Challenge")
      : sessionMode === "zen"
        ? (lang === "fa" ? "تمرکز محض" : "Focus Session")
        : L("freePractice");
    desc = sessionMode === "boss"
      ? (lang === "fa" ? "قبل از پایان زمان، متن را تمام کن!" : "Finish the text before time runs out!")
      : sessionMode === "zen"
        ? (lang === "fa" ? "فقط متن — بدون صفحه‌کلید و آمار" : "Text only — no keyboard, no stats")
        : "";
    text = normalizeTypingText(buildPracticeText({
      practiceLang: lang,
      level,
      practiceSource: source,
      practiceLength: length,
      customText: state.settings.customText,
    }));
  }

  // Safety: never leave empty or zero-width-only text
  if (!text || !Array.from(text).some((c) => c !== " " && c !== "\n")) {
    text = lang === "fa" ? "تمرین تایپ" : "typing practice";
  }

  // Content-driven keyboard language & direction (code/custom may differ from practiceLang)
  const kbLang = mode === "lesson" ? lang : resolveContentLang(source, lang, text);
  const contentDir = mode === "lesson"
    ? (lang === "fa" ? "rtl" : "ltr")
    : resolveContentDir(source, lang, text);

  const caseSensitive = mode === "lesson"
    ? (getLessons(lang)[lessonIndex]?.caseSensitive ?? state.settings.caseSensitive)
    : (source === "code" ? true : state.settings.caseSensitive);

  const isZen = sessionMode === "zen";
  const isBoss = sessionMode === "boss";
  const showKb = !isZen && state.settings.showKeyboard !== false;
  const showHands = !isZen && state.settings.showFingerHint !== false && state.settings.showHandsDiagram !== false;
  const showLive = !isZen;

  root.innerHTML = `
    <div class="page page-session fade-in ${isZen ? "is-zen" : ""} ${isBoss ? "is-boss" : ""}"
         data-lang="${kbLang}" dir="${contentDir}">
      <header class="session-header">
        <div class="session-title-block">
          <button type="button" class="btn btn-ghost btn-icon" data-exit title="${L("exit")} (Esc)">✕</button>
          <div>
            <h1 class="session-title">${title}</h1>
            ${desc ? `<p class="session-desc">${desc}</p>` : ""}
          </div>
        </div>
        ${showLive ? `
        <div class="session-live" id="session-live">
          <div class="live-stat"><span class="live-label">${L("wpm")}</span><span class="live-value" data-m="wpm">0</span></div>
          <div class="live-stat"><span class="live-label">${L("accuracy")}</span><span class="live-value" data-m="acc">100%</span></div>
          <div class="live-stat"><span class="live-label">${L("time")}</span><span class="live-value" data-m="time">0:00</span></div>
          <div class="live-stat"><span class="live-label">${L("errors")}</span><span class="live-value" data-m="err">0</span></div>
          <div class="live-stat combo-stat"><span class="live-label">Combo</span><span class="live-value" data-m="combo">0</span></div>
        </div>` : ""}
      </header>

      ${isBoss ? `<div class="boss-bar"><i id="boss-fill" style="width:100%"></i><span id="boss-time"></span></div>` : ""}

      <div class="session-progress"><i id="session-bar" style="width:0%"></i></div>

      <div class="typing-area" id="typing-area" tabindex="0" role="textbox" aria-label="${L("startTyping")}">
        <div class="char-stream" id="char-stream" dir="${contentDir}"></div>
        <div class="typing-hint" id="typing-hint">${L("startTyping")}</div>
        <div class="combo-pop" id="combo-pop" hidden></div>
      </div>

      ${showHands ? `<div class="hand-hint" id="hand-hint" aria-live="polite"></div>` : ""}

      ${showKb ? `
      <div class="kb-guide" id="kb-guide">
        <div class="hands-slot" id="hands-slot"></div>
        <div class="keyboard-wrap" id="keyboard-wrap">
          <div id="vkeyboard"></div>
        </div>
      </div>` : ""}

      ${showLive ? `<div class="live-spark"><canvas id="spark-canvas" width="600" height="48" aria-hidden="true"></canvas></div>` : ""}

      <div class="result-panel card" id="result-panel" hidden></div>
      <canvas id="confetti-canvas" class="confetti-canvas" aria-hidden="true"></canvas>
    </div>
  `;

  const streamEl = root.querySelector("#char-stream");
  const hintEl = root.querySelector("#typing-hint");
  const liveEl = root.querySelector("#session-live");
  const barEl = root.querySelector("#session-bar");
  const kbEl = root.querySelector("#vkeyboard");
  const handEl = root.querySelector("#hand-hint");
  const handsSlot = root.querySelector("#hands-slot");
  const resultEl = root.querySelector("#result-panel");
  const areaEl = root.querySelector("#typing-area");
  const comboPop = root.querySelector("#combo-pop");
  const sparkCanvas = root.querySelector("#spark-canvas");
  const bossFill = root.querySelector("#boss-fill");
  const bossTime = root.querySelector("#boss-time");

  if (showKb && kbEl) {
    renderKeyboard(kbEl, {
      lang: kbLang,
      nextChar: text[0] || null,
      showFingerIcon: state.settings.showFingerIcon !== false,
    });
  }
  if (showHands && handsSlot) renderHands(handsSlot, { nextChar: text[0] || null, lang: kbLang });
  if (text[0] && handEl) handEl.innerHTML = handHintHtml(text[0], kbLang);

  // live sparkline samples
  const wpmSamples = [];

  function paintStream(chars, status, index) {
    const frag = document.createDocumentFragment();
    chars.forEach((ch, i) => {
      const span = document.createElement("span");
      span.className = "ch";
      if (status[i] === "correct") span.classList.add("is-correct");
      else if (status[i] === "incorrect") span.classList.add("is-wrong");
      else if (i === index) span.classList.add("is-current");
      if (ch === "\n") {
        span.textContent = "↵";
        span.dataset.nl = "1";
        span.classList.add("is-nl");
      } else if (ch === " ") {
        span.textContent = "␣";
        span.dataset.space = "1";
      } else {
        span.textContent = ch;
      }
      frag.appendChild(span);
    });
    streamEl.innerHTML = "";
    streamEl.appendChild(frag);
    const cur = streamEl.querySelector(".is-current");
    if (cur) cur.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  }

  function paintLive(result, combo = 0) {
    if (!liveEl) return;
    const set = (k, v) => {
      const el = liveEl.querySelector(`[data-m="${k}"]`);
      if (el) el.textContent = v;
    };
    set("wpm", result.wpm);
    set("acc", `${result.accuracy}%`);
    set("time", formatDuration(result.durationMs));
    set("err", result.totalErrors);
    const comboEl = liveEl.querySelector('[data-m="combo"]');
    if (comboEl) {
      comboEl.textContent = combo;
      comboEl.parentElement.classList.toggle("is-hot", combo >= 10);
    }
  }

  function paintSpark(wpm) {
    if (!sparkCanvas) return;
    wpmSamples.push(wpm);
    if (wpmSamples.length > 60) wpmSamples.shift();
    const ctx = sparkCanvas.getContext("2d");
    if (!ctx) return;
    const dpr = window.devicePixelRatio || 1;
    const w = sparkCanvas.clientWidth || 600;
    const h = 48;
    sparkCanvas.width = w * dpr;
    sparkCanvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);
    if (wpmSamples.length < 2) return;
    const max = Math.max(...wpmSamples, 10);
    const accent = getComputedStyle(document.body).getPropertyValue("--accent").trim() || "#2dd4bf";
    ctx.strokeStyle = accent;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    wpmSamples.forEach((v, i) => {
      const x = (w * i) / Math.max(wpmSamples.length - 1, 1);
      const y = h - (v / max) * (h - 6) - 3;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();
  }

  function paintBoss(remainingMs, totalMs) {
    if (!bossFill) return;
    const pct = Math.max(0, Math.min(100, (remainingMs / Math.max(totalMs, 1)) * 100));
    bossFill.style.width = `${pct}%`;
    bossFill.classList.toggle("is-low", pct < 25);
    if (bossTime) {
      bossTime.textContent = formatDuration(remainingMs);
    }
  }

  function flashReject() {
    areaEl.classList.remove("is-reject");
    void areaEl.offsetWidth;
    areaEl.classList.add("is-reject");
  }

  let combo = 0;
  let maxCombo = 0;

  function showComboPop(n) {
    if (!comboPop || n < 5) return;
    comboPop.hidden = false;
    comboPop.textContent = `×${n}`;
    comboPop.classList.remove("is-show");
    void comboPop.offsetWidth;
    comboPop.classList.add("is-show");
    setTimeout(() => { comboPop.hidden = true; }, 600);
  }

  engine = new TypingEngine({
    text,
    lang: kbLang,
    caseSensitive,
    soundEnabled: state.settings.soundEnabled,
    strictMode: state.settings.strictMode !== false,
    minWpm,
    minAccuracy,
    timeLimitMs,
    onUpdate(u) {
      paintStream(u.chars, u.status, u.index);
      paintLive(u.result, combo);
      barEl.style.width = `${Math.round(u.progress * 100)}%`;
      if (showKb && kbEl) {
        updateNextKey(kbEl, {
          lang: kbLang,
          nextChar: u.nextChar,
          showFingerIcon: state.settings.showFingerIcon !== false,
        });
      }
      if (showHands && handsSlot) updateHands(handsSlot, { nextChar: u.nextChar, lang: kbLang });
      if (u.nextChar && handEl) handEl.innerHTML = handHintHtml(u.nextChar, kbLang);
      if (u.index > 0) hintEl.hidden = true;
      if (u.rejected) flashReject();
      paintSpark(u.result.wpm);
      if (isBoss) paintBoss(u.remainingMs, timeLimitMs);
    },
    onComplete(result) {
      result._maxCombo = maxCombo;
      showResult(result);
    },
  });

  paintStream(engine.chars, engine.status, 0);
  paintLive(engine._buildResult(false), 0);
  if (isBoss) paintBoss(timeLimitMs, timeLimitMs);

  keyHandler = (e) => {
    // shortcuts after finish
    if (resultEl.hidden === false) {
      if (e.key === "r" || e.key === "R") {
        e.preventDefault();
        renderSession(root, routeName, params);
      }
      if (e.key === "Escape") {
        e.preventDefault();
        navigate(mode === "lesson" ? "curriculum" : "practice");
      }
      return;
    }
    if (e.key === "Escape") {
      e.preventDefault();
      destroySession();
      navigate(mode === "lesson" ? "curriculum" : "practice");
      return;
    }
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.key === "Tab") return;

    // Space: accept by key or by physical code (layout-safe)
    const isSpace = e.key === " " || e.code === "Space";
    if (isSpace) {
      e.preventDefault();
      if (!engine) return;
      const res = engine.handleKey(" ");
      if (res.handled && !res.backspace && !res.aborted) {
        if (res.ok) {
          combo += 1;
          if (combo > maxCombo) maxCombo = combo;
        } else {
          combo = 0;
        }
        if (engine) paintLive(engine._buildResult(false), combo);
      }
      return;
    }

    if (e.key === "Enter") {
      e.preventDefault();
      if (!engine) return;
      const res = engine.handleKey("Enter");
      if (res.handled && !res.backspace && !res.aborted) {
        if (res.ok) {
          combo += 1;
          if (combo > maxCombo) maxCombo = combo;
        } else {
          combo = 0;
        }
        if (engine) paintLive(engine._buildResult(false), combo);
      }
      return;
    }

    if (e.key === "Backspace" || e.key.length === 1) {
      e.preventDefault();
      if (!engine) return;
      const res = engine.handleKey(e.key);
      if (res.handled && !res.backspace && !res.aborted) {
        if (res.ok) {
          combo += 1;
          if (combo > maxCombo) maxCombo = combo;
          if (combo % 10 === 0) showComboPop(combo);
        } else {
          combo = 0;
        }
        if (engine) paintLive(engine._buildResult(false), combo);
      }
    }
  };
  document.addEventListener("keydown", keyHandler);
  areaEl.addEventListener("click", () => areaEl.focus());
  areaEl.focus();

  root.querySelector("[data-exit]")?.addEventListener("click", () => {
    destroySession();
    navigate(mode === "lesson" ? "curriculum" : "practice");
  });

  function showResult(result) {
    destroySession();
    resultEl.hidden = false;
    const passed = result.passed;
    const isLesson = mode === "lesson";
    const mx = result._maxCombo || maxCombo || 0;

    if (isLesson && passed) {
      saveLessonResult(lang, lessonIndex, result);
    }
    if (result.keyStats) recordKeyStats(result.keyStats);

    const prevBest = state.history
      .filter((h) => h.lang === lang)
      .reduce((m, h) => Math.max(m, h.wpm || 0), 0);
    const isPb = result.wpm > prevBest && result.wpm > 0;

    const newAchievements = appendSessionRecord({
      ts: Date.now(),
      lang,
      mode: mode === "lesson" ? "lesson" : sessionMode,
      lessonId: isLesson ? getLessons(lang)[lessonIndex]?.id : null,
      wpm: result.wpm,
      cpm: result.cpm,
      accuracy: result.accuracy,
      score: result.score,
      stars: result.stars,
      durationMs: result.durationMs,
      totalErrors: result.totalErrors,
      correctedErrors: result.correctedErrors,
      passed: result.passed,
      maxCombo: mx,
    }) || [];

    const xpGain = computeSessionXp(result, mx);
    // persist xp
    const prevXp = Number(localStorage.getItem("ttt.xp.v1") || 0);
    const newXp = prevXp + xpGain;
    localStorage.setItem("ttt.xp.v1", String(newXp));
    const lvl = levelFromXp(newXp);

    if (passed) {
      const canvas = root.querySelector("#confetti-canvas");
      burstConfetti(canvas, { count: result.stars >= 3 ? 120 : 70 });
    }

    const L2 = (k) => t(lang, k);
    const errKeys = (result.errorChars || []).slice(0, 6);
    const achHtml = (newAchievements || []).map((id) => {
      const a = ACHIEVEMENTS.find((x) => x.id === id);
      if (!a) return "";
      return `<div class="ach-toast"><span class="ach-icon">${a.icon}</span><div><strong>${achievementLabel(a, lang)}</strong><span>${achievementDesc(a, lang)}</span></div></div>`;
    }).join("");

    resultEl.innerHTML = `
      <div class="result-inner ${passed ? "is-pass" : "is-fail"}">
        <div class="result-badge">${passed ? L2("pass") : L2("fail")}</div>
        <h2 class="result-title">${L2("sessionDone")}</h2>
        ${isPb ? `<div class="pb-banner">🏆 ${lang === "fa" ? "رکورد جدید سرعت!" : "New speed record!"}</div>` : ""}
        ${result.stars ? `<div class="result-stars">${"★".repeat(result.stars)}${"☆".repeat(3 - result.stars)}</div>` : ""}

        <div class="xp-line">
          <span class="xp-badge">+${xpGain} XP</span>
          <span class="xp-level">Lv ${lvl.level} · ${titleForLevel(lvl.level, lang)}</span>
          <div class="xp-bar"><i style="width:${Math.round(lvl.progress * 100)}%"></i></div>
        </div>

        <div class="result-grid">
          <div class="result-cell is-hero"><span>${L2("wpm")}</span><strong>${result.wpm}</strong></div>
          <div class="result-cell"><span>${L2("accuracy")}</span><strong>${result.accuracy}%</strong></div>
          <div class="result-cell"><span>Combo</span><strong>×${mx}</strong></div>
          <div class="result-cell"><span>${L2("cpm")}</span><strong>${result.cpm}</strong></div>
          <div class="result-cell"><span>${L2("time")}</span><strong>${formatDuration(result.durationMs)}</strong></div>
          <div class="result-cell"><span>${L2("corrected")}</span><strong>${result.correctedErrors}</strong></div>
          <div class="result-cell"><span>${L2("remaining")}</span><strong>${result.incorrectChars}</strong></div>
          <div class="result-cell"><span>${L2("score")}</span><strong>${result.score}</strong></div>
        </div>

        ${errKeys.length ? `
          <div class="error-keys">
            <span class="error-keys-label">${lang === "fa" ? "کلیدهای پرخطا" : "Most missed keys"}</span>
            ${errKeys.map((e) => `<span class="error-key-chip" title="${e.misses}×">${e.ch === " " ? "␣" : e.ch}</span>`).join("")}
          </div>` : ""}
        ${achHtml ? `<div class="ach-list">${achHtml}</div>` : ""}

        <div class="result-actions">
          <button type="button" class="btn btn-primary" data-again>${L2("practiceAgain")} <kbd>R</kbd></button>
          ${isLesson && passed ? `<button type="button" class="btn btn-accent" data-next>${L2("goToNext")}</button>` : ""}
          <button type="button" class="btn btn-ghost" data-exit2>${isLesson ? L2("curriculum") : L2("practice")}</button>
        </div>
      </div>
    `;

    resultEl.querySelector("[data-again]")?.addEventListener("click", () => {
      renderSession(root, routeName, params);
    });
    resultEl.querySelector("[data-next]")?.addEventListener("click", () => {
      const lessons = getLessons(lang);
      const next = lessonIndex + 1;
      if (next < lessons.length) navigate("lesson", [lang, String(next)]);
      else navigate("curriculum");
    });
    resultEl.querySelector("[data-exit2]")?.addEventListener("click", () => {
      navigate(isLesson ? "curriculum" : "practice");
    });

    resultEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

function buildLessonText(lesson) {
  if (lesson.type === "intro") {
    const chars = lesson.chars || "";
    return (chars + " " + chars + " " + chars).trim();
  }
  if (lesson.type === "chars") {
    const chars = Array.from(lesson.chars || "");
    if (!chars.length) return "asdf";
    const groups = [];
    for (let g = 0; g < 8; g++) {
      const shuffled = [...chars].sort(() => Math.random() - 0.5);
      groups.push(shuffled.join(""));
    }
    return groups.join(" ");
  }
  if (lesson.type === "words") {
    const words = lesson.words || [];
    if (!words.length) return "hello world";
    const out = [];
    for (let i = 0; i < 12; i++) {
      out.push(words[Math.floor(Math.random() * words.length)]);
    }
    return out.join(" ");
  }
  if (lesson.type === "sentences") {
    const list = lesson.sentences || [];
    if (!list.length) return "Practice makes perfect.";
    return list[Math.floor(Math.random() * list.length)];
  }
  return lesson.chars || "asdf";
}
