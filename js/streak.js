/** Streak / daily-practice tracking */

function dayKey(ts = Date.now()) {
  const d = new Date(ts);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function yesterdayKey() {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return dayKey(d.getTime());
}

export function computeStreak(history) {
  if (!history || history.length === 0) return { streak: 0, todayDone: false, lastDay: null };

  const days = new Set(history.map((h) => dayKey(h.ts || Date.now())));
  const today = dayKey();
  const todayDone = days.has(today);

  // walk back from today (or yesterday if today not done yet)
  let cursor = todayDone ? today : yesterdayKey();
  let streak = 0;
  // limit lookback
  for (let i = 0; i < 400; i++) {
    if (days.has(cursor)) {
      streak += 1;
      const [y, m, d] = cursor.split("-").map(Number);
      const dt = new Date(y, m - 1, d);
      dt.setDate(dt.getDate() - 1);
      cursor = dayKey(dt.getTime());
    } else {
      break;
    }
  }

  return {
    streak,
    todayDone,
    lastDay: [...days].sort().pop() || null,
    activeDays: days.size,
  };
}

export function sessionsToday(history) {
  const today = dayKey();
  return history.filter((h) => dayKey(h.ts || Date.now()) === today).length;
}

/** Weak keys: map char → { hits, misses } from session error maps */
export function mergeKeyStats(existing = {}, sessionKeyStats = {}) {
  const out = { ...existing };
  for (const [ch, v] of Object.entries(sessionKeyStats)) {
    const prev = out[ch] || { hits: 0, misses: 0 };
    out[ch] = {
      hits: prev.hits + (v.hits || 0),
      misses: prev.misses + (v.misses || 0),
    };
  }
  return out;
}

export function weakKeys(keyStats, limit = 12, minSamples = 3) {
  return Object.entries(keyStats)
    .map(([ch, v]) => {
      const total = (v.hits || 0) + (v.misses || 0);
      const acc = total ? (v.hits || 0) / total : 1;
      return { ch, total, misses: v.misses || 0, acc: Math.round(acc * 1000) / 10 };
    })
    .filter((k) => k.total >= minSamples && k.acc < 95)
    .sort((a, b) => a.acc - b.acc || b.misses - a.misses)
    .slice(0, limit);
}
