/** XP / Level system */

export const XP_RULES = {
  perCorrectChar: 1,
  perWpmPoint: 2,
  accuracyBonus: (acc) => (acc >= 99 ? 50 : acc >= 95 ? 25 : acc >= 90 ? 10 : 0),
  perfectBonus: 100,
  threeStarBonus: 40,
  comboBonusPer10: 5, // every 10 combo adds 5 XP
};

/** Level curve: XP needed to reach level N from N-1 */
export function xpForLevel(level) {
  return Math.round(80 * Math.pow(level, 1.35));
}

export function levelFromXp(xp) {
  let level = 1;
  let remaining = Math.max(0, xp);
  while (remaining >= xpForLevel(level + 1) && level < 99) {
    remaining -= xpForLevel(level + 1);
    level += 1;
  }
  const nextNeed = xpForLevel(level + 1);
  const progress = nextNeed ? Math.min(1, remaining / nextNeed) : 1;
  return { level, intoLevel: remaining, nextNeed, progress };
}

export function computeSessionXp(result, maxCombo = 0) {
  let xp = 0;
  xp += (result.correctChars || 0) * XP_RULES.perCorrectChar;
  xp += (result.wpm || 0) * XP_RULES.perWpmPoint;
  xp += XP_RULES.accuracyBonus(result.accuracy || 0);
  if (result.accuracy === 100 && result.completed) xp += XP_RULES.perfectBonus;
  if (result.stars >= 3) xp += XP_RULES.threeStarBonus;
  xp += Math.floor((maxCombo || 0) / 10) * XP_RULES.comboBonusPer10;
  return Math.round(xp);
}

export const TITLES = [
  { min: 1, fa: "مبتدی", en: "Beginner" },
  { min: 3, fa: "آموزش‌دیده", en: "Trainee" },
  { min: 5, fa: "تایپیست", en: "Typist" },
  { min: 8, fa: "ماهر", en: "Skilled" },
  { min: 12, fa: "حرفه‌ای", en: "Pro" },
  { min: 16, fa: "استاد", en: "Master" },
  { min: 22, fa: "افسانه", en: "Legend" },
];

export function titleForLevel(level, lang) {
  let t = TITLES[0];
  for (const item of TITLES) if (level >= item.min) t = item;
  return lang === "fa" ? t.fa : t.en;
}
