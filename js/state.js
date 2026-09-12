/** Central app state + pub/sub */

import {
  loadSettings, saveSettings, loadProgress, saveProgress,
  loadHistory, saveHistory, loadUi, saveUi,
  loadKeyStats, saveKeyStats, loadAchievements, saveAchievements,
} from "./storage.js";
import { setVolume, unlockAudio, setSoundFlags } from "./audio.js";
import { mergeKeyStats, computeStreak } from "./streak.js";
import { evaluateAchievements } from "./achievements.js";

const listeners = new Set();

export const state = {
  route: "home",
  lang: "fa",
  settings: loadSettings(),
  progress: loadProgress(),
  history: loadHistory(),
  ui: loadUi(),
  keyStats: loadKeyStats(),
  achievements: loadAchievements(),
  xp: Number(localStorage.getItem("ttt.xp.v1") || 0),
  session: null,
};

state.lang = state.ui.lang || "fa";

export function subscribe(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export function notify(type = "any") {
  listeners.forEach((fn) => {
    try { fn(type, state); } catch { /* ignore */ }
  });
}

export function setLang(lang) {
  state.lang = lang === "en" ? "en" : "fa";
  state.ui.lang = state.lang;
  saveUi(state.ui);
  applyDocumentLang();
  notify("lang");
}

export function applyDocumentLang() {
  document.documentElement.lang = state.lang;
  document.documentElement.dir = state.lang === "fa" ? "rtl" : "ltr";
  document.body.dataset.lang = state.lang;
}

export function applyTheme() {
  document.body.dataset.theme = state.settings.theme || "dark";
}

export function applyFonts() {
  const { FONTS_FA, FONTS_EN } = window.__TTT_FONTS__ || {};
  const fa = FONTS_FA?.find((f) => f.id === state.settings.fontFa) || FONTS_FA?.[0];
  const en = FONTS_EN?.find((f) => f.id === state.settings.fontEn) || FONTS_EN?.[0];
  if (fa) document.documentElement.style.setProperty("--font-fa", fa.stack);
  if (en) document.documentElement.style.setProperty("--font-en", en.stack);
  document.documentElement.style.setProperty("--font-ui", fa?.stack || "");
}

export function applySettings() {
  applyTheme();
  applyDocumentLang();
  applyFonts();
  setVolume(state.settings.soundEnabled === false ? 0 : (state.settings.soundVolume || 0.55));
  setSoundFlags({
    key: state.settings.keySound !== false,
    error: state.settings.errorSound !== false,
    complete: state.settings.completeSound !== false,
  });
}

export function updateSettings(partial) {
  state.settings = { ...state.settings, ...partial };
  saveSettings(state.settings);
  applySettings();
  notify("settings");
}

export function getLessons(lang = state.lang) {
  return window.__TTT_LESSONS__?.[lang] || [];
}

export function getProgress(lang = state.lang) {
  return state.progress[lang] || { unlocked: 0, scores: {} };
}

export function saveLessonResult(lang, lessonIndex, result) {
  const track = state.progress[lang] || (state.progress[lang] = { unlocked: 0, scores: {} });
  const lessons = getLessons(lang);
  const lesson = lessons[lessonIndex];
  if (!lesson) return;

  const prev = track.scores[lesson.id];
  const improved = {
    stars: Math.max(prev?.stars || 0, result.stars || 0),
    wpm: Math.max(prev?.wpm || 0, result.wpm || 0),
    accuracy: Math.max(prev?.accuracy || 0, result.accuracy || 0),
    score: Math.max(prev?.score || 0, result.score || 0),
    completedAt: Date.now(),
    passed: true,
  };
  track.scores[lesson.id] = improved;

  if (result.passed && lessonIndex + 1 > track.unlocked) {
    track.unlocked = Math.min(lessonIndex + 1, lessons.length);
  }
  saveProgress(state.progress);
  notify("progress");
}

export function appendSessionRecord(record) {
  state.history.push(record);
  saveHistory(state.history);
  notify("history");
  return checkNewAchievements();
}

export function recordKeyStats(sessionKeyStats) {
  if (!sessionKeyStats || !Object.keys(sessionKeyStats).length) return;
  state.keyStats = mergeKeyStats(state.keyStats, sessionKeyStats);
  saveKeyStats(state.keyStats);
  notify("keyStats");
}

/** Build aggregate stats for achievement checks */
export function buildAchievementStats() {
  const rows = state.history;
  const bestWpm = rows.length ? Math.max(...rows.map((r) => r.wpm || 0)) : 0;
  const bestAccuracy = rows.length ? Math.max(...rows.map((r) => r.accuracy || 0)) : 0;
  const totalTimeMs = rows.reduce((s, r) => s + (r.durationMs || 0), 0);
  const { streak } = computeStreak(rows);
  const faLessons = getLessons("fa");
  const enLessons = getLessons("en");
  const faProg = getProgress("fa");
  const enProg = getProgress("en");
  const faComplete = faLessons.length > 0 && faLessons.every((l) => faProg.scores[l.id]?.passed);
  const enComplete = enLessons.length > 0 && enLessons.every((l) => enProg.scores[l.id]?.passed);
  const perfectLessons = rows.filter((r) => r.accuracy === 100 && r.stars >= 3).length;

  return {
    sessions: rows.length,
    bestWpm,
    bestAccuracy,
    totalTimeMs,
    streak,
    faComplete,
    enComplete,
    perfectLessons,
  };
}

export function checkNewAchievements() {
  const stats = buildAchievementStats();
  const newly = evaluateAchievements(stats, state.achievements);
  if (newly.length) {
    state.achievements = [...state.achievements, ...newly];
    saveAchievements(state.achievements);
    notify("achievements");
  }
  return newly;
}

export function startSession(payload) {
  state.session = payload;
  notify("session");
}

export function endSession() {
  state.session = null;
  notify("session");
}

export function isLessonUnlocked(lang, index) {
  const track = getProgress(lang);
  if (index === 0) return true;
  return index <= track.unlocked;
}

export function firstUnfinishedIndex(lang) {
  const track = getProgress(lang);
  const lessons = getLessons(lang);
  for (let i = 0; i < lessons.length; i++) {
    if (!track.scores[lessons[i].id]?.passed) return i;
  }
  return lessons.length - 1;
}

export function unlockAudioOnGesture() {
  unlockAudio();
  document.removeEventListener("pointerdown", unlockAudioOnGesture);
  document.removeEventListener("keydown", unlockAudioOnGesture);
}

export function bindAudioUnlock() {
  document.addEventListener("pointerdown", unlockAudioOnGesture, { once: true });
  document.addEventListener("keydown", unlockAudioOnGesture, { once: true });
}
