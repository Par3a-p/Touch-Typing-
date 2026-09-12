/** Home dashboard — pro overview */

import { state, setLang, firstUnfinishedIndex, getProgress, getLessons } from "../state.js";
import { t } from "../config.js";
import { summarizeHistory, formatDuration } from "../scoring.js";
import { navigate } from "../router.js";
import { computeStreak, weakKeys, sessionsToday } from "../streak.js";
import { ACHIEVEMENTS, achievementLabel } from "../achievements.js";
import { levelFromXp, titleForLevel } from "../xp.js";

function ringHtml(pct, label, value, size = 88) {
  const r = (size - 10) / 2;
  const c = 2 * Math.PI * r;
  const off = c * (1 - Math.max(0, Math.min(100, pct)) / 100);
  return `
    <div class="ring" style="--size:${size}px">
      <svg viewBox="0 0 ${size} ${size}" width="${size}" height="${size}">
        <circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="var(--surface-3)" stroke-width="7"/>
        <circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="var(--accent)" stroke-width="7"
          stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="${off}"
          transform="rotate(-90 ${size / 2} ${size / 2})"/>
      </svg>
      <div class="ring-center">
        <strong>${value}</strong>
        <span>${label}</span>
      </div>
    </div>`;
}

export function renderHome(root) {
  const lang = state.lang;
  const L = (k) => t(lang, k);
  const faLessons = getLessons("fa");
  const enLessons = getLessons("en");
  const faProg = getProgress("fa");
  const enProg = getProgress("en");
  const faPassed = Object.values(faProg.scores).filter((s) => s.passed).length;
  const enPassed = Object.values(enProg.scores).filter((s) => s.passed).length;
  const faDone = faLessons.length > 0 && faLessons.every((l) => faProg.scores[l.id]?.passed);
  const enDone = enLessons.length > 0 && enLessons.every((l) => enProg.scores[l.id]?.passed);
  const faIdx = firstUnfinishedIndex("fa");
  const enIdx = firstUnfinishedIndex("en");
  const summary = summarizeHistory(state.history);
  const { streak, todayDone, activeDays } = computeStreak(state.history);
  const todayCount = sessionsToday(state.history);
  const dailyGoal = state.settings.dailyGoal || 3;
  const goalPct = Math.min(100, Math.round((todayCount / dailyGoal) * 100));
  const weak = weakKeys(state.keyStats, 8);
  const unlockedAch = new Set(state.achievements);
  const recentAch = ACHIEVEMENTS.filter((a) => unlockedAch.has(a.id)).slice(-6).reverse();
  const last = state.history[state.history.length - 1];
  const lvl = levelFromXp(state.xp || 0);

  root.innerHTML = `
    <div class="page page-home fade-in">
      <header class="page-header home-top">
        <div>
          <h1 class="page-title">${L("appName")}</h1>
          <p class="page-sub">${lang === "fa" ? "تایپ ده انگشتی را گام‌به‌گام یاد بگیرید" : "Learn touch typing step by step"}</p>
        </div>
        <div class="home-badges">
          <div class="pill pill-xp" title="XP">
            <span class="pill-icon">⭐</span>
            <strong>Lv ${lvl.level}</strong>
            <span>${titleForLevel(lvl.level, lang)}</span>
          </div>
          <div class="pill ${todayDone ? "is-done" : ""}" title="${lang === "fa" ? "روزهای پیاپی" : "Streak"}">
            <span class="pill-icon">🔥</span>
            <strong>${streak}</strong>
            <span>${lang === "fa" ? "روز" : "d"}</span>
          </div>
          <div class="pill" title="${lang === "fa" ? "تمرین امروز" : "Today"}">
            <span class="pill-icon">📅</span>
            <strong>${todayCount}/${dailyGoal}</strong>
          </div>
        </div>
      </header>

      <section class="dash-grid">
        ${ringHtml(summary.bestWpm ? Math.min(100, (summary.bestWpm / 80) * 100) : 0, L("bestWpm"), summary.bestWpm)}
        ${ringHtml(summary.avgAccuracy, L("accuracy"), `${summary.avgAccuracy}%`)}
        ${ringHtml(goalPct, lang === "fa" ? "هدف امروز" : "Daily goal", `${todayCount}/${dailyGoal}`)}
        <div class="ring-stat">
          <strong>${summary.sessions}</strong>
          <span>${L("sessions")}</span>
          <small>${formatDuration(summary.totalTimeMs)}</small>
        </div>
      </section>

      <section class="continue-card card">
        <div>
          <div class="continue-label">${todayDone ? (lang === "fa" ? "عالی! امروز تمرین کردی" : "Nice — you practiced today") : (lang === "fa" ? "امروز تمرین نکردی" : "No practice yet today")}</div>
          <div class="continue-title">${lang === "fa" ? "ادامه بده" : "Keep going"}</div>
        </div>
        <div class="continue-actions">
          <button type="button" class="btn btn-primary" data-go-fa>
            ${faProg.unlocked > 0 || faPassed > 0 ? L("continue") : L("start")} · فارسی
          </button>
          <button type="button" class="btn btn-secondary" data-go-en>
            ${enProg.unlocked > 0 || enPassed > 0 ? L("continue") : L("start")} · English
          </button>
          <button type="button" class="btn btn-ghost" data-go-practice>${L("practice")}</button>
        </div>
      </section>

      <section class="hero-card card">
        <div class="hero-text">
          <h2>${L("selectPath")}</h2>
          <p class="muted">${lang === "fa"
            ? "دو مسیر مستقل: فارسی (چیدمان استاندارد) و انگلیسی (QWERTY)."
            : "Two independent tracks: Persian (standard) and English (QWERTY)."}</p>
        </div>
        <div class="track-grid">
          <button type="button" class="track-card" data-track="fa">
            <div class="track-flag">فارسی</div>
            <div class="track-title">${lang === "fa" ? "مسیر فارسی" : "Persian track"}</div>
            <div class="track-meta">
              <span>${faLessons.length} ${L("level")}</span>
              <span>${faPassed}/${faLessons.length}</span>
            </div>
            <div class="progress-bar"><i style="width:${Math.round((faPassed / Math.max(faLessons.length, 1)) * 100)}%"></i></div>
            <span class="track-cta">${faDone ? L("done") : (faPassed > 0 ? L("continue") : L("start"))} →</span>
          </button>
          <button type="button" class="track-card" data-track="en">
            <div class="track-flag">English</div>
            <div class="track-title">${lang === "fa" ? "مسیر انگلیسی" : "English track"}</div>
            <div class="track-meta">
              <span>${enLessons.length} ${L("level")}</span>
              <span>${enPassed}/${enLessons.length}</span>
            </div>
            <div class="progress-bar"><i style="width:${Math.round((enPassed / Math.max(enLessons.length, 1)) * 100)}%"></i></div>
            <span class="track-cta">${enDone ? L("done") : (enPassed > 0 ? L("continue") : L("start"))} →</span>
          </button>
        </div>
      </section>

      <section class="quick-grid">
        <button type="button" class="action-card" data-action="practice">
          <span class="action-icon">⌨</span>
          <span class="action-title">${L("practice")}</span>
          <span class="action-sub">${lang === "fa" ? "تمرین آزاد" : "Free typing"}</span>
        </button>
        <button type="button" class="action-card" data-action="stats">
          <span class="action-icon">↗</span>
          <span class="action-title">${L("stats")}</span>
          <span class="action-sub">${summary.sessions} ${L("sessions")}</span>
        </button>
        <button type="button" class="action-card" data-action="achievements">
          <span class="action-icon">🏅</span>
          <span class="action-title">${lang === "fa" ? "دستاوردها" : "Achievements"}</span>
          <span class="action-sub">${unlockedAch.size}/${ACHIEVEMENTS.length}</span>
        </button>
        <button type="button" class="action-card" data-action="settings">
          <span class="action-icon">⚙</span>
          <span class="action-title">${L("settings")}</span>
          <span class="action-sub">${lang === "fa" ? "شخصی‌سازی" : "Customize"}</span>
        </button>
      </section>

      <div class="home-split">
        <section class="card">
          <h3 class="card-h">${lang === "fa" ? "دستاوردهای اخیر" : "Recent achievements"}</h3>
          ${recentAch.length === 0
            ? `<p class="muted">${lang === "fa" ? "هنوز دستاوردی نداری — اولین جلسه را شروع کن!" : "No badges yet — start your first session!"}</p>`
            : `<div class="ach-row">${recentAch.map((a) => `
                <div class="ach-chip" title="${achievementLabel(a, lang)}">
                  <span>${a.icon}</span>
                  <span>${achievementLabel(a, lang)}</span>
                </div>`).join("")}</div>`}
        </section>

        <section class="card">
          <h3 class="card-h">${lang === "fa" ? "کلیدهای ضعیف" : "Weak keys"}</h3>
          ${weak.length === 0
            ? `<p class="muted">${lang === "fa" ? "هنوز داده کافی نیست. تمرین کن تا نقاط ضعف پیدا شوند." : "Not enough data yet. Practice to discover weak keys."}</p>`
            : `<div class="weak-row">${weak.map((k) => `
                <span class="weak-chip" style="--acc:${k.acc}">
                  <b>${k.ch === " " ? "␣" : k.ch}</b>
                  <i>${k.acc}%</i>
                </span>`).join("")}</div>
              <button type="button" class="btn btn-ghost btn-sm" data-weak-practice style="margin-top:var(--sp-3)">
                ${lang === "fa" ? "تمرین کلیدهای ضعیف" : "Practice weak keys"}
              </button>`}
        </section>
      </div>

      ${last ? `
      <section class="card last-session">
        <h3 class="card-h">${lang === "fa" ? "آخرین جلسه" : "Last session"}</h3>
        <div class="last-grid">
          <div><span>${L("wpm")}</span><strong>${last.wpm}</strong></div>
          <div><span>${L("accuracy")}</span><strong>${last.accuracy}%</strong></div>
          <div><span>${L("time")}</span><strong>${formatDuration(last.durationMs)}</strong></div>
          <div><span>${L("score")}</span><strong>${last.score}</strong></div>
        </div>
      </section>` : ""}
    </div>
  `;

  root.querySelectorAll(".track-card").forEach((btn) => {
    btn.addEventListener("click", () => {
      setLang(btn.dataset.track);
      navigate("curriculum");
    });
  });
  root.querySelector("[data-go-fa]")?.addEventListener("click", () => {
    setLang("fa");
    const i = firstUnfinishedIndex("fa");
    navigate("lesson", ["fa", String(i)]);
  });
  root.querySelector("[data-go-en]")?.addEventListener("click", () => {
    setLang("en");
    const i = firstUnfinishedIndex("en");
    navigate("lesson", ["en", String(i)]);
  });
  root.querySelector('[data-action="practice"]')?.addEventListener("click", () => navigate("practice"));
  root.querySelector("[data-go-practice]")?.addEventListener("click", () => navigate("practice"));
  root.querySelector('[data-action="stats"]')?.addEventListener("click", () => navigate("stats"));
  root.querySelector('[data-action="achievements"]')?.addEventListener("click", () => navigate("stats"));
  root.querySelector('[data-action="settings"]')?.addEventListener("click", () => navigate("settings"));
  root.querySelector("[data-weak-practice]")?.addEventListener("click", () => {
    const chars = weak.map((k) => k.ch).join("");
    if (!chars) return;
    sessionStorage.setItem("ttt.weakChars", chars);
    sessionStorage.setItem("ttt.weakDrill", "1"); // one-shot: only this start uses weak
    navigate("practice-run", [lang, "easy", "weak", "medium", "0", "normal"]);
  });
}
