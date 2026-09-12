/** Progress / stats dashboard + achievements + weekly report + patterns */

import { state } from "../state.js";
import { t } from "../config.js";
import { summarizeHistory, formatDuration } from "../scoring.js";
import { navigate } from "../router.js";
import { computeStreak, weakKeys } from "../streak.js";
import { ACHIEVEMENTS, achievementLabel, achievementDesc } from "../achievements.js";
import { analyzeErrorPatterns } from "../patterns.js";
import { levelFromXp, titleForLevel } from "../xp.js";

function weeklyReport(history) {
  const now = Date.now();
  const weekMs = 7 * 24 * 3600 * 1000;
  const week = history.filter((h) => now - (h.ts || 0) <= weekMs);
  const prev = history.filter((h) => {
    const age = now - (h.ts || 0);
    return age > weekMs && age <= weekMs * 2;
  });
  const avg = (arr, k) => (arr.length ? Math.round(arr.reduce((s, r) => s + (r[k] || 0), 0) / arr.length) : 0);
  return {
    sessions: week.length,
    avgWpm: avg(week, "wpm"),
    avgAcc: avg(week, "accuracy"),
    prevAvgWpm: avg(prev, "wpm"),
    prevAvgAcc: avg(prev, "accuracy"),
    totalTimeMs: week.reduce((s, r) => s + (r.durationMs || 0), 0),
  };
}

export function renderStats(root) {
  const lang = state.lang;
  const L = (k) => t(lang, k);
  const all = summarizeHistory(state.history);
  const fa = summarizeHistory(state.history, "fa");
  const en = summarizeHistory(state.history, "en");
  const recent = [...state.history].slice(-25).reverse();
  const { streak, activeDays } = computeStreak(state.history);
  const unlocked = new Set(state.achievements);
  const weak = weakKeys(state.keyStats, 16);
  const patterns = analyzeErrorPatterns(state.keyStats, state.history);
  const week = weeklyReport(state.history);
  const lvl = levelFromXp(state.xp || 0);
  const wpmDelta = week.avgWpm - week.prevAvgWpm;
  const accDelta = Math.round((week.avgAcc - week.prevAvgAcc) * 10) / 10;

  root.innerHTML = `
    <div class="page page-stats fade-in">
      <header class="page-header">
        <div>
          <h1 class="page-title">${L("stats")}</h1>
          <p class="page-sub">${lang === "fa" ? "نمای کلی پیشرفت شما" : "Your overall progress"}</p>
        </div>
        <div class="header-actions">
          <button type="button" class="btn btn-ghost" data-go="home">← ${L("back")}</button>
        </div>
      </header>

      <section class="stats-grid">
        <div class="stat-card card"><span class="stat-label">${lang === "fa" ? "سطح" : "Level"}</span><span class="stat-value">⭐${lvl.level}</span><small class="muted">${titleForLevel(lvl.level, lang)}</small></div>
        <div class="stat-card card"><span class="stat-label">${L("sessions")}</span><span class="stat-value">${all.sessions}</span></div>
        <div class="stat-card card"><span class="stat-label">${L("bestWpm")}</span><span class="stat-value">${all.bestWpm}</span></div>
        <div class="stat-card card"><span class="stat-label">${L("avgAcc")}</span><span class="stat-value">${all.avgAccuracy}%</span></div>
        <div class="stat-card card"><span class="stat-label">${L("totalTime")}</span><span class="stat-value">${formatDuration(all.totalTimeMs)}</span></div>
        <div class="stat-card card"><span class="stat-label">${lang === "fa" ? "استریک" : "Streak"}</span><span class="stat-value">🔥${streak}</span></div>
      </section>

      <section class="card week-card">
        <h3>${lang === "fa" ? "گزارش این هفته" : "This week"}</h3>
        <div class="week-grid">
          <div><span>${L("sessions")}</span><strong>${week.sessions}</strong></div>
          <div><span>${L("wpm")}</span><strong>${week.avgWpm}
            ${week.prevAvgWpm ? `<em class="${wpmDelta >= 0 ? "up" : "down"}">${wpmDelta >= 0 ? "▲" : "▼"} ${Math.abs(wpmDelta)}</em>` : ""}
          </strong></div>
          <div><span>${L("accuracy")}</span><strong>${week.avgAcc}%
            ${week.prevAvgAcc ? `<em class="${accDelta >= 0 ? "up" : "down"}">${accDelta >= 0 ? "▲" : "▼"} ${Math.abs(accDelta)}</em>` : ""}
          </strong></div>
          <div><span>${L("totalTime")}</span><strong>${formatDuration(week.totalTimeMs)}</strong></div>
        </div>
      </section>

      ${patterns.length ? `
      <section class="card">
        <h3>${lang === "fa" ? "تحلیل الگوی خطا" : "Error pattern analysis"}</h3>
        <div class="pattern-list">
          ${patterns.map((p) => `
            <div class="pattern-item sev-${p.severity}">
              <div class="pattern-msg">${lang === "fa" ? p.fa : p.en}</div>
              ${p.chars ? `<div class="pattern-keys">${p.chars.map((c) => `<span>${c === " " ? "␣" : c}</span>`).join("")}</div>` : ""}
              ${p.pairs ? `<div class="pattern-keys">${p.pairs.map((pair) => `<span>${pair[0]}↔${pair[1]}</span>`).join("")}</div>` : ""}
            </div>
          `).join("")}
        </div>
      </section>` : ""}

      <section class="card ach-section">
        <h3>${lang === "fa" ? `دستاوردها (${unlocked.size}/${ACHIEVEMENTS.length})` : `Achievements (${unlocked.size}/${ACHIEVEMENTS.length})`}</h3>
        <div class="ach-grid">
          ${ACHIEVEMENTS.map((a) => {
            const on = unlocked.has(a.id);
            return `<div class="ach-card ${on ? "is-on" : "is-off"}" title="${achievementDesc(a, lang)}">
              <span class="ach-big">${on ? a.icon : "🔒"}</span>
              <strong>${achievementLabel(a, lang)}</strong>
              <span>${achievementDesc(a, lang)}</span>
            </div>`;
          }).join("")}
        </div>
      </section>

      <section class="split-stats">
        <div class="card">
          <h3>${L("progressFa")}</h3>
          <div class="mini-stats">
            <div><span>${L("sessions")}</span><strong>${fa.sessions}</strong></div>
            <div><span>${L("bestWpm")}</span><strong>${fa.bestWpm}</strong></div>
            <div><span>${L("avgAcc")}</span><strong>${fa.avgAccuracy}%</strong></div>
          </div>
        </div>
        <div class="card">
          <h3>${L("progressEn")}</h3>
          <div class="mini-stats">
            <div><span>${L("sessions")}</span><strong>${en.sessions}</strong></div>
            <div><span>${L("bestWpm")}</span><strong>${en.bestWpm}</strong></div>
            <div><span>${L("avgAcc")}</span><strong>${en.avgAccuracy}%</strong></div>
          </div>
        </div>
      </section>

      <section class="card chart-card">
        <h3>${L("chartWpm")}</h3>
        <canvas id="wpm-chart" width="800" height="220"></canvas>
      </section>

      <section class="card chart-card">
        <h3>${L("chartAcc")}</h3>
        <canvas id="acc-chart" width="800" height="220"></canvas>
      </section>

      ${weak.length ? `
      <section class="card">
        <h3>${lang === "fa" ? "نقشه کلیدهای ضعیف" : "Weak key map"}</h3>
        <div class="heatmap">
          ${weak.map((k) => {
            const hue = Math.round((k.acc / 100) * 120); // 0=red, 120=green
            return `<div class="heat-cell" style="background:hsla(${hue},70%,45%,0.25);border-color:hsla(${hue},70%,50%,0.55)">
              <b>${k.ch === " " ? "␣" : k.ch}</b>
              <i>${k.acc}%</i>
              <small>${k.misses}×</small>
            </div>`;
          }).join("")}
        </div>
      </section>` : ""}

      <section class="card">
        <h3>${L("recentSessions")}</h3>
        ${recent.length === 0
          ? `<p class="muted">${L("noHistory")}</p>`
          : `<div class="table-wrap"><table class="session-table">
              <thead><tr>
                <th>${L("language")}</th>
                <th>${L("wpm")}</th>
                <th>${L("accuracy")}</th>
                <th>${L("time")}</th>
                <th>${L("errors")}</th>
                <th>${L("score")}</th>
              </tr></thead>
              <tbody>
                ${recent.map((r) => `
                  <tr>
                    <td>${r.lang === "fa" ? "فارسی" : "EN"}</td>
                    <td>${r.wpm}</td>
                    <td>${r.accuracy}%</td>
                    <td>${formatDuration(r.durationMs)}</td>
                    <td>${r.totalErrors}</td>
                    <td>${r.score}</td>
                  </tr>
                `).join("")}
              </tbody>
            </table></div>`}
      </section>
    </div>
  `;

  root.querySelector('[data-go="home"]')?.addEventListener("click", () => navigate("home"));

  drawChart(root.querySelector("#wpm-chart"), state.history.map((h) => h.wpm || 0), L("wpm"));
  drawChart(root.querySelector("#acc-chart"), state.history.map((h) => h.accuracy || 0), L("accuracy"));
}

function drawChart(canvas, values, label) {
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  const cssW = canvas.clientWidth || 800;
  const cssH = 220;
  canvas.width = cssW * dpr;
  canvas.height = cssH * dpr;
  ctx.scale(dpr, dpr);

  const styles = getComputedStyle(document.body);
  const accent = styles.getPropertyValue("--accent").trim() || "#2dd4bf";
  const inkMuted = styles.getPropertyValue("--ink-muted").trim() || "#8fa0b8";
  const border = styles.getPropertyValue("--border").trim() || "#2a3854";

  ctx.clearRect(0, 0, cssW, cssH);

  const data = values.slice(-30);
  if (data.length === 0) {
    ctx.fillStyle = inkMuted;
    ctx.font = "14px system-ui";
    ctx.textAlign = "center";
    ctx.fillText("—", cssW / 2, cssH / 2);
    return;
  }

  const pad = { t: 16, r: 16, b: 28, l: 40 };
  const w = cssW - pad.l - pad.r;
  const h = cssH - pad.t - pad.b;
  const max = Math.max(...data, 10);
  const min = 0;

  ctx.strokeStyle = border;
  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) {
    const y = pad.t + (h * i) / 4;
    ctx.beginPath();
    ctx.moveTo(pad.l, y);
    ctx.lineTo(pad.l + w, y);
    ctx.stroke();
    ctx.fillStyle = inkMuted;
    ctx.font = "11px system-ui";
    ctx.textAlign = "right";
    ctx.fillText(String(Math.round(max - ((max - min) * i) / 4)), pad.l - 6, y + 3);
  }

  // area fill
  const grad = ctx.createLinearGradient(0, pad.t, 0, pad.t + h);
  grad.addColorStop(0, accent + "44");
  grad.addColorStop(1, accent + "00");
  ctx.beginPath();
  data.forEach((v, i) => {
    const x = pad.l + (data.length === 1 ? w / 2 : (w * i) / (data.length - 1));
    const y = pad.t + h - ((v - min) / (max - min)) * h;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.lineTo(pad.l + (data.length === 1 ? w / 2 : w), pad.t + h);
  ctx.lineTo(pad.l, pad.t + h);
  ctx.closePath();
  ctx.fillStyle = grad;
  ctx.fill();

  ctx.strokeStyle = accent;
  ctx.lineWidth = 2;
  ctx.beginPath();
  data.forEach((v, i) => {
    const x = pad.l + (data.length === 1 ? w / 2 : (w * i) / (data.length - 1));
    const y = pad.t + h - ((v - min) / (max - min)) * h;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();

  ctx.fillStyle = accent;
  data.forEach((v, i) => {
    const x = pad.l + (data.length === 1 ? w / 2 : (w * i) / (data.length - 1));
    const y = pad.t + h - ((v - min) / (max - min)) * h;
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, Math.PI * 2);
    ctx.fill();
  });
}
