/** Scoring: WPM, CPM, accuracy, session score, stars */

/**
 * Standard WPM: (correct chars / 5) / minutes
 * CPM: correct chars / minutes
 */
export function computeMetrics({
  correctChars,
  totalTyped,
  incorrectChars,
  durationMs,
  correctedErrors = 0,
}) {
  const minutes = Math.max(durationMs / 60000, 1 / 60000);
  const wpm = Math.round((correctChars / 5) / minutes);
  const cpm = Math.round(correctChars / minutes);
  const accuracy =
    totalTyped === 0
      ? 100
      : Math.round((correctChars / Math.max(totalTyped, 1)) * 1000) / 10;

  const remainingErrors = incorrectChars;
  const totalErrors = remainingErrors + correctedErrors;

  // Weighted score 0–100: 55% speed factor, 45% accuracy
  // speedFactor saturates around 40 WPM for full marks
  const speedFactor = Math.min(wpm / 40, 1);
  const accFactor = accuracy / 100;
  const rawScore = speedFactor * 55 + accFactor * 45;
  const score = Math.round(Math.max(0, Math.min(100, rawScore)));

  return {
    wpm,
    cpm,
    accuracy,
    correctChars,
    incorrectChars: remainingErrors,
    correctedErrors,
    totalErrors,
    durationMs,
    score,
  };
}

export function starsFor({ wpm, accuracy, minWpm, minAccuracy }) {
  const meetsSpeed = wpm >= minWpm;
  const meetsAcc = accuracy >= minAccuracy;
  if (!meetsSpeed || !meetsAcc) return 0;
  // Extra stars for exceeding thresholds
  let stars = 1;
  if (accuracy >= Math.min(100, minAccuracy + 3) && wpm >= minWpm * 1.1) stars = 2;
  if (accuracy >= Math.min(100, minAccuracy + 5) && wpm >= minWpm * 1.25) stars = 3;
  return stars;
}

export function passedStage({ wpm, accuracy, minWpm, minAccuracy }) {
  return wpm >= minWpm && accuracy >= minAccuracy;
}

export function formatDuration(ms) {
  const totalSec = Math.max(0, Math.round(ms / 1000));
  const m = Math.floor(totalSec / 60);
  const s = totalSec % 60;
  if (m === 0) return `${s}s`;
  return `${m}:${String(s).padStart(2, "0")}`;
}

export function summarizeHistory(history, langFilter = null) {
  const rows = langFilter ? history.filter((h) => h.lang === langFilter) : history;
  if (rows.length === 0) {
    return { sessions: 0, bestWpm: 0, avgAccuracy: 0, totalTimeMs: 0, avgWpm: 0 };
  }
  const bestWpm = Math.max(...rows.map((r) => r.wpm || 0));
  const avgAccuracy =
    Math.round((rows.reduce((s, r) => s + (r.accuracy || 0), 0) / rows.length) * 10) / 10;
  const totalTimeMs = rows.reduce((s, r) => s + (r.durationMs || 0), 0);
  const avgWpm = Math.round(rows.reduce((s, r) => s + (r.wpm || 0), 0) / rows.length);
  return { sessions: rows.length, bestWpm, avgAccuracy, totalTimeMs, avgWpm };
}
