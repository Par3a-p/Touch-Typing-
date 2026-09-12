/** Achievement definitions + evaluation */

export const ACHIEVEMENTS = [
  { id: "first-session", icon: "🎯", fa: "اولین قدم", en: "First Steps", descFa: "اولین جلسه تمرین را کامل کن", descEn: "Complete your first session", check: (s) => s.sessions >= 1 },
  { id: "ten-sessions", icon: "🔥", fa: "منظم", en: "Consistent", descFa: "۱۰ جلسه تمرین", descEn: "10 practice sessions", check: (s) => s.sessions >= 10 },
  { id: "fifty-sessions", icon: "💎", fa: "متعهد", en: "Dedicated", descFa: "۵۰ جلسه تمرین", descEn: "50 practice sessions", check: (s) => s.sessions >= 50 },
  { id: "wpm-20", icon: "🚶", fa: "راه‌افتاد", en: "Walking", descFa: "سرعت ۲۰ WPM", descEn: "Reach 20 WPM", check: (s) => s.bestWpm >= 20 },
  { id: "wpm-40", icon: "🏃", fa: "دونده", en: "Runner", descFa: "سرعت ۴۰ WPM", descEn: "Reach 40 WPM", check: (s) => s.bestWpm >= 40 },
  { id: "wpm-60", icon: "⚡", fa: "برق‌آسا", en: "Lightning", descFa: "سرعت ۶۰ WPM", descEn: "Reach 60 WPM", check: (s) => s.bestWpm >= 60 },
  { id: "wpm-80", icon: "🚀", fa: "موشکی", en: "Rocket", descFa: "سرعت ۸۰ WPM", descEn: "Reach 80 WPM", check: (s) => s.bestWpm >= 80 },
  { id: "acc-95", icon: "🎯", fa: "تیرانداز", en: "Sharpshooter", descFa: "دقت ۹۵٪", descEn: "95% accuracy", check: (s) => s.bestAccuracy >= 95 },
  { id: "acc-99", icon: "👑", fa: "بی‌نقص", en: "Flawless", descFa: "دقت ۹۹٪", descEn: "99% accuracy", check: (s) => s.bestAccuracy >= 99 },
  { id: "streak-3", icon: "📅", fa: "سه‌روزه", en: "3-Day Streak", descFa: "۳ روز پیاپی تمرین", descEn: "3-day practice streak", check: (s) => s.streak >= 3 },
  { id: "streak-7", icon: "🗓️", fa: "هفته‌مند", en: "Weekly Hero", descFa: "۷ روز پیاپی تمرین", descEn: "7-day practice streak", check: (s) => s.streak >= 7 },
  { id: "streak-30", icon: "🏆", fa: "ماه‌افشان", en: "Monthly Master", descFa: "۳۰ روز پیاپی تمرین", descEn: "30-day practice streak", check: (s) => s.streak >= 30 },
  { id: "fa-complete", icon: "🇮🇷", fa: "استاد فارسی", en: "Persian Master", descFa: "تکمیل مسیر فارسی", descEn: "Complete Persian track", check: (s) => s.faComplete },
  { id: "en-complete", icon: "🌐", fa: "استاد انگلیسی", en: "English Master", descFa: "تکمیل مسیر انگلیسی", descEn: "Complete English track", check: (s) => s.enComplete },
  { id: "hour-practice", icon: "⏱️", fa: "یک‌ساعته", en: "One Hour", descFa: "مجموع ۱ ساعت تمرین", descEn: "1 hour total practice", check: (s) => s.totalTimeMs >= 3600000 },
  { id: "perfect-lesson", icon: "🌟", fa: "کامل‌بی‌نقص", en: "Perfect Run", descFa: "مرحله‌ای با دقت ۱۰۰٪ و سه ستاره", descEn: "3-star 100% accuracy lesson", check: (s) => s.perfectLessons >= 1 },
];

export function evaluateAchievements(stats, alreadyUnlocked = []) {
  const unlocked = new Set(alreadyUnlocked);
  const newly = [];
  for (const a of ACHIEVEMENTS) {
    if (unlocked.has(a.id)) continue;
    try {
      if (a.check(stats)) newly.push(a.id);
    } catch { /* ignore */ }
  }
  return newly;
}

export function achievementLabel(a, lang) {
  return lang === "fa" ? a.fa : a.en;
}

export function achievementDesc(a, lang) {
  return lang === "fa" ? a.descFa : a.descEn;
}
