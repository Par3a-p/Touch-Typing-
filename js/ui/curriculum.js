/** Curriculum stage map */

import { state, getLessons, getProgress, isLessonUnlocked } from "../state.js";
import { t } from "../config.js";
import { navigate } from "../router.js";

export function renderCurriculum(root) {
  const lang = state.lang;
  const L = (k) => t(lang, k);
  const lessons = getLessons(lang);
  const track = getProgress(lang);

  root.innerHTML = `
    <div class="page page-curriculum fade-in">
      <header class="page-header">
        <div>
          <h1 class="page-title">${L("curriculum")}</h1>
          <p class="page-sub">${lang === "fa" ? "گام‌به‌گام از ردیف خانه تا تسلط کامل" : "From home row to full mastery"}</p>
        </div>
        <div class="header-actions">
          <button type="button" class="btn btn-ghost" data-go="home">← ${L("back")}</button>
        </div>
      </header>

      <div class="stage-map">
        ${lessons.map((lesson, i) => {
          const unlocked = isLessonUnlocked(lang, i);
          const score = track.scores[lesson.id];
          const passed = !!score?.passed;
          const stars = score?.stars || 0;
          const status = passed ? "done" : unlocked ? "open" : "locked";
          const starsHtml = passed
            ? `<span class="stars" aria-label="${stars} ${L("stars")}">${"★".repeat(stars)}${"☆".repeat(3 - stars)}</span>`
            : "";
          return `
            <button type="button"
              class="stage-card status-${status}"
              data-index="${i}"
              ${!unlocked ? "disabled" : ""}
              style="--i:${i}">
              <div class="stage-num">${i + 1}</div>
              <div class="stage-body">
                <div class="stage-title">${lesson.title}</div>
                <div class="stage-desc">${lesson.desc || ""}</div>
                <div class="stage-meta">
                  ${passed ? starsHtml : unlocked ? `<span class="badge badge-ok">${L("available")}</span>` : `<span class="badge">${L("locked")}</span>`}
                  ${lesson.minWpm ? `<span class="badge">${L("minSpeed")} ${lesson.minWpm}</span>` : ""}
                  ${lesson.minAccuracy ? `<span class="badge">${L("minAcc")} ${lesson.minAccuracy}%</span>` : ""}
                </div>
              </div>
              <div class="stage-go" aria-hidden="true">${unlocked ? "→" : "🔒"}</div>
            </button>
          `;
        }).join("")}
      </div>
    </div>
  `;

  root.querySelector('[data-go="home"]')?.addEventListener("click", () => navigate("home"));
  root.querySelectorAll(".stage-card:not([disabled])").forEach((btn) => {
    btn.addEventListener("click", () => {
      navigate("lesson", [lang, btn.dataset.index]);
    });
  });
}
