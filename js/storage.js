/** localStorage helpers with safe JSON + fallbacks */

import { STORAGE_KEYS, DEFAULT_SETTINGS } from "./config.js";

function safeParse(raw, fallback) {
  if (raw == null || raw === "") return fallback;
  try {
    const val = JSON.parse(raw);
    return val == null ? fallback : val;
  } catch {
    return fallback;
  }
}

export function loadSettings() {
  try {
    const saved = safeParse(localStorage.getItem(STORAGE_KEYS.settings), {});
    return { ...DEFAULT_SETTINGS, ...saved };
  } catch {
    return { ...DEFAULT_SETTINGS };
  }
}

export function saveSettings(settings) {
  try {
    localStorage.setItem(STORAGE_KEYS.settings, JSON.stringify(settings));
  } catch {
    /* quota / private mode — ignore */
  }
}

/**
 * Progress shape:
 * {
 *   fa: { unlocked: number (index of next available),
 *         scores: { [lessonId]: { stars, wpm, accuracy, score, completedAt } } },
 *   en: { ... }
 * }
 */
export function loadProgress() {
  const empty = {
    fa: { unlocked: 0, scores: {} },
    en: { unlocked: 0, scores: {} },
  };
  try {
    const saved = safeParse(localStorage.getItem(STORAGE_KEYS.progress), null);
    if (!saved || typeof saved !== "object") return empty;
    return {
      fa: { ...empty.fa, ...(saved.fa || {}) },
      en: { ...empty.en, ...(saved.en || {}) },
    };
  } catch {
    return empty;
  }
}

export function saveProgress(progress) {
  try {
    localStorage.setItem(STORAGE_KEYS.progress, JSON.stringify(progress));
  } catch {
    /* ignore */
  }
}

/** History: array of session records (newest last, capped) */
export function loadHistory() {
  try {
    const arr = safeParse(localStorage.getItem(STORAGE_KEYS.history), []);
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
}

export function saveHistory(history) {
  try {
    const capped = history.slice(-200);
    localStorage.setItem(STORAGE_KEYS.history, JSON.stringify(capped));
  } catch {
    /* ignore */
  }
}

export function appendSession(record) {
  const history = loadHistory();
  history.push(record);
  saveHistory(history);
  return history;
}

export function loadUi() {
  try {
    return safeParse(localStorage.getItem(STORAGE_KEYS.ui), { lang: "fa" });
  } catch {
    return { lang: "fa" };
  }
}

export function saveUi(ui) {
  try {
    localStorage.setItem(STORAGE_KEYS.ui, JSON.stringify(ui));
  } catch {
    /* ignore */
  }
}

export function resetAllProgress() {
  try {
    localStorage.removeItem(STORAGE_KEYS.progress);
    localStorage.removeItem(STORAGE_KEYS.history);
    localStorage.removeItem(STORAGE_KEYS.keyStats);
    localStorage.removeItem(STORAGE_KEYS.achievements);
  } catch {
    /* ignore */
  }
}

export function resetEverything() {
  try {
    Object.values(STORAGE_KEYS).forEach((k) => localStorage.removeItem(k));
  } catch {
    /* ignore */
  }
}

/** Per-key accuracy stats: { [char]: { hits, misses } } */
export function loadKeyStats() {
  try {
    const saved = safeParse(localStorage.getItem(STORAGE_KEYS.keyStats), {});
    return saved && typeof saved === "object" ? saved : {};
  } catch {
    return {};
  }
}

export function saveKeyStats(stats) {
  try {
    localStorage.setItem(STORAGE_KEYS.keyStats, JSON.stringify(stats));
  } catch { /* ignore */ }
}

/** Unlocked achievement ids */
export function loadAchievements() {
  try {
    const arr = safeParse(localStorage.getItem(STORAGE_KEYS.achievements), []);
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
}

export function saveAchievements(ids) {
  try {
    localStorage.setItem(STORAGE_KEYS.achievements, JSON.stringify(ids));
  } catch { /* ignore */ }
}

/** Full data export for backup */
export function exportAllData() {
  const out = { version: 1, exportedAt: new Date().toISOString() };
  for (const [k, key] of Object.entries(STORAGE_KEYS)) {
    try {
      const raw = localStorage.getItem(key);
      out[k] = raw ? JSON.parse(raw) : null;
    } catch {
      out[k] = null;
    }
  }
  return out;
}

export function importAllData(payload) {
  if (!payload || typeof payload !== "object") throw new Error("invalid");
  for (const key of Object.values(STORAGE_KEYS)) {
    if (key in payload && payload[key] != null) {
      localStorage.setItem(key, JSON.stringify(payload[key]));
    }
  }
}
