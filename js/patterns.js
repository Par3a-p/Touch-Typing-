/** Error-pattern detection from key stats + history */

/**
 * Detect clusters of mistakes:
 * - weak fingers (group by finger)
 * - neighbor confusion (adjacent keys often swapped)
 * - row bias (top/bottom weaker)
 */
export function analyzeErrorPatterns(keyStats, history = []) {
  const patterns = [];

  // Weak keys ranked
  const ranked = Object.entries(keyStats || {})
    .map(([ch, v]) => {
      const total = (v.hits || 0) + (v.misses || 0);
      const acc = total ? (v.hits || 0) / total : 1;
      return { ch, total, misses: v.misses || 0, acc };
    })
    .filter((k) => k.total >= 3)
    .sort((a, b) => a.acc - b.acc);

  const veryWeak = ranked.filter((k) => k.acc < 0.85);
  if (veryWeak.length >= 1) {
    patterns.push({
      id: "weak-keys",
      severity: veryWeak.length >= 4 ? "high" : "medium",
      chars: veryWeak.slice(0, 6).map((k) => k.ch),
      fa: "روی این کلیدها خطای زیادی داری — تمرین اختصاصی پیشنهاد می‌شود.",
      en: "You miss these keys often — dedicated drills recommended.",
    });
  }

  // QWERTY neighbor pairs (common confusions)
  const neighbors = [
    ["q", "w"], ["w", "e"], ["e", "r"], ["r", "t"], ["t", "y"],
    ["a", "s"], ["s", "d"], ["d", "f"], ["f", "g"], ["g", "h"],
    ["z", "x"], ["x", "c"], ["c", "v"], ["v", "b"], ["b", "n"],
    ["o", "p"], ["l", ";"], ["k", "l"], ["i", "o"],
  ];
  const faNeighbors = [
    ["ض", "ص"], ["ص", "ث"], ["ث", "ق"], ["ق", "ف"], ["ف", "غ"],
    ["ش", "س"], ["س", "ی"], ["ی", "ب"], ["ب", "ل"], ["ل", "ا"],
    ["ظ", "ط"], ["ط", "ز"], ["ز", "ر"], ["ر", "ذ"], ["ذ", "د"],
    ["ت", "ن"], ["ن", "م"], ["م", "ک"], ["ک", "گ"],
  ];

  function pairWeakness(pairs) {
    return pairs
      .map(([a, b]) => {
        const ka = keyStats?.[a];
        const kb = keyStats?.[b];
        if (!ka || !kb) return null;
        const ta = (ka.hits || 0) + (ka.misses || 0);
        const tb = (kb.hits || 0) + (kb.misses || 0);
        if (ta < 2 || tb < 2) return null;
        const accA = ka.hits / ta;
        const accB = kb.hits / tb;
        if (accA < 0.9 && accB < 0.9) return { pair: [a, b], avg: (accA + accB) / 2 };
        return null;
      })
      .filter(Boolean)
      .sort((x, y) => x.avg - y.avg)
      .slice(0, 3);
  }

  const weakPairs = [...pairWeakness(neighbors), ...pairWeakness(faNeighbors)];
  if (weakPairs.length) {
    patterns.push({
      id: "neighbor-confusion",
      severity: "medium",
      pairs: weakPairs.map((p) => p.pair),
      fa: "کلیدهای همسایه را با هم اشتباه می‌گیری — آرام‌تر و دقیق‌تر تایپ کن.",
      en: "You confuse neighboring keys — slow down and aim carefully.",
    });
  }

  // Accuracy trend: last 5 vs previous 5
  if (history.length >= 10) {
    const last5 = history.slice(-5);
    const prev5 = history.slice(-10, -5);
    const avg = (arr) => arr.reduce((s, r) => s + (r.accuracy || 0), 0) / arr.length;
    const delta = avg(last5) - avg(prev5);
    if (delta < -3) {
      patterns.push({
        id: "acc-dropping",
        severity: "high",
        fa: "دقتت نسبت به جلسات قبل افت کرده — سرعت را کم کن.",
        en: "Accuracy dropped vs earlier sessions — slow down.",
      });
    } else if (delta > 3) {
      patterns.push({
        id: "acc-rising",
        severity: "info",
        fa: "دقتت دارد بهتر می‌شود! همین روند را نگه دار.",
        en: "Accuracy is improving — keep it up!",
      });
    }
  }

  return patterns;
}
