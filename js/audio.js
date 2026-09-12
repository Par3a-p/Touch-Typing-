/** Web Audio API sound effects — no external files */

let ctx = null;
let master = null;
let flags = { key: true, error: true, complete: true };

export function setSoundFlags(partial) {
  flags = { ...flags, ...partial };
}

function ensureCtx() {
  if (!ctx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
    master = ctx.createGain();
    master.connect(ctx.destination);
  }
  if (ctx.state === "suspended") {
    ctx.resume().catch(() => {});
  }
  return ctx;
}

export function setVolume(v) {
  ensureCtx();
  if (master) master.gain.value = Math.max(0, Math.min(1, v));
}

function blip({ freq = 440, type = "square", dur = 0.05, gain = 0.12, when = 0 }) {
  const c = ensureCtx();
  if (!c || !master) return;
  const t0 = c.currentTime + when;
  const osc = c.createOscillator();
  const g = c.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, t0);
  g.gain.setValueAtTime(0.0001, t0);
  g.gain.exponentialRampToValueAtTime(gain, t0 + 0.008);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  osc.connect(g);
  g.connect(master);
  osc.start(t0);
  osc.stop(t0 + dur + 0.02);
}

export function playKeyCorrect() {
  if (!flags.key) return;
  blip({ freq: 880, type: "sine", dur: 0.04, gain: 0.08 });
}

export function playKeyWrong() {
  if (!flags.error) return;
  blip({ freq: 160, type: "sawtooth", dur: 0.12, gain: 0.1 });
}

export function playKeySpace() {
  if (!flags.key) return;
  blip({ freq: 660, type: "triangle", dur: 0.03, gain: 0.06 });
}

export function playStageComplete() {
  if (!flags.complete) return;
  const notes = [523.25, 659.25, 783.99, 1046.5];
  notes.forEach((f, i) => {
    blip({ freq: f, type: "sine", dur: 0.18, gain: 0.12, when: i * 0.09 });
  });
}

export function playStageFail() {
  blip({ freq: 220, type: "sine", dur: 0.2, gain: 0.1 });
  blip({ freq: 175, type: "sine", dur: 0.28, gain: 0.1, when: 0.12 });
}

export function playUnlock() {
  blip({ freq: 392, type: "sine", dur: 0.1, gain: 0.1 });
  blip({ freq: 523.25, type: "sine", dur: 0.12, gain: 0.1, when: 0.08 });
  blip({ freq: 659.25, type: "sine", dur: 0.16, gain: 0.12, when: 0.16 });
}

/** Call once on first user gesture to unlock AudioContext on strict browsers */
export function unlockAudio() {
  ensureCtx();
}
