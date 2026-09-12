/** Settings page — themes, fonts, sound, content, backup */

import { state, updateSettings } from "../state.js";
import { t, THEMES, FONTS_FA, FONTS_EN } from "../config.js";
import { navigate } from "../router.js";
import { resetAllProgress, resetEverything, exportAllData, importAllData } from "../storage.js";
import { setVolume, playKeyCorrect, playKeyWrong } from "../audio.js";

const THEME_LABELS = {
  dark: { fa: "تیره", en: "Dark" },
  light: { fa: "روشن", en: "Light" },
  sand: { fa: "شنی (روشن)", en: "Sand (light)" },
  sky: { fa: "آسمانی (روشن)", en: "Sky (light)" },
  forest: { fa: "جنگلی", en: "Forest" },
  indigo: { fa: "نیلی", en: "Indigo" },
};

export function renderSettings(root) {
  const lang = state.lang;
  const L = (k) => t(lang, k);
  const s = state.settings;

  root.innerHTML = `
    <div class="page page-settings fade-in">
      <header class="page-header">
        <div>
          <h1 class="page-title">${L("settings")}</h1>
          <p class="page-sub">${lang === "fa" ? "شخصی‌سازی کامل تجربه تمرین" : "Fully personalize your practice"}</p>
        </div>
        <div class="header-actions">
          <button type="button" class="btn btn-ghost" data-go="home">← ${L("back")}</button>
        </div>
      </header>

      <section class="card settings-block">
        <h3>${L("theme")}</h3>
        <div class="theme-grid">
          ${THEMES.map((th) => `
            <button type="button" class="theme-swatch ${s.theme === th ? "is-active" : ""}" data-theme-pick="${th}">
              <span class="swatch-preview" data-th="${th}"></span>
              <span>${THEME_LABELS[th]?.[lang] || th}</span>
            </button>
          `).join("")}
        </div>
      </section>

      <section class="card settings-block">
        <h3>${lang === "fa" ? "فونت فارسی" : "Persian font"}</h3>
        <div class="font-grid" data-setting="fontFa">
          ${FONTS_FA.map((f) => `
            <button type="button" class="font-card ${s.fontFa === f.id ? "is-active" : ""}" data-value="${f.id}" style="font-family:${f.stack}">
              <span class="font-sample">تایپ</span>
              <span class="font-name">${f.label}</span>
            </button>
          `).join("")}
        </div>
      </section>

      <section class="card settings-block">
        <h3>${lang === "fa" ? "فونت انگلیسی" : "English font"}</h3>
        <div class="font-grid" data-setting="fontEn">
          ${FONTS_EN.map((f) => `
            <button type="button" class="font-card ${s.fontEn === f.id ? "is-active" : ""}" data-value="${f.id}" style="font-family:${f.stack}">
              <span class="font-sample">Type</span>
              <span class="font-name">${f.label}</span>
            </button>
          `).join("")}
        </div>
      </section>

      <section class="card settings-block">
        <h3>${L("fontSize")}</h3>
        <div class="seg" data-setting="fontSize">
          ${[["small", lang === "fa" ? "کوچک" : "S"], ["medium", lang === "fa" ? "متوسط" : "M"], ["large", lang === "fa" ? "بزرگ" : "L"]].map(([v, lab]) => `
            <button type="button" class="seg-btn ${s.fontSize === v ? "is-active" : ""}" data-value="${v}">${lab}</button>
          `).join("")}
        </div>
      </section>

      <section class="card settings-block">
        <h3>${L("sound")}</h3>
        <label class="toggle-row">
          <span>${lang === "fa" ? "صدای کلید درست" : "Correct key sound"}</span>
          <input type="checkbox" id="key-sound" ${s.keySound !== false ? "checked" : ""} />
        </label>
        <label class="toggle-row">
          <span>${lang === "fa" ? "صدای خطا" : "Error sound"}</span>
          <input type="checkbox" id="error-sound" ${s.errorSound !== false ? "checked" : ""} />
        </label>
        <label class="toggle-row">
          <span>${lang === "fa" ? "صدای تکمیل مرحله" : "Stage complete sound"}</span>
          <input type="checkbox" id="complete-sound" ${s.completeSound !== false ? "checked" : ""} />
        </label>
        <label class="slider-row">
          <span>${L("volume")}</span>
          <input type="range" id="sound-volume" min="0" max="100" value="${Math.round((s.soundVolume || 0.55) * 100)}" />
          <span id="vol-val">${Math.round((s.soundVolume || 0.55) * 100)}%</span>
        </label>
        <button type="button" class="btn btn-ghost btn-sm" id="test-sound">${lang === "fa" ? "آزمایش صدا" : "Test sound"}</button>
      </section>

      <section class="card settings-block">
        <h3>${lang === "fa" ? "نمایش هنگام تایپ" : "Typing display"}</h3>
        <label class="toggle-row">
          <span>${L("showKeyboard")}</span>
          <input type="checkbox" id="show-keyboard" ${s.showKeyboard !== false ? "checked" : ""} />
        </label>
        <label class="toggle-row">
          <span>${lang === "fa" ? "دیاگرام دست‌ها" : "Hands diagram"}</span>
          <input type="checkbox" id="show-hands" ${s.showHandsDiagram !== false ? "checked" : ""} />
        </label>
        <label class="toggle-row">
          <span>${L("fingerHint")}</span>
          <input type="checkbox" id="show-finger" ${s.showFingerHint !== false ? "checked" : ""} />
        </label>
        <label class="toggle-row">
          <span>${L("showFingerIcon")}</span>
          <input type="checkbox" id="show-finger-icon" ${s.showFingerIcon !== false ? "checked" : ""} />
        </label>
        <label class="toggle-row">
          <span>${lang === "fa" ? "حالت سخت‌گیرانه (حرف درست الزامی)" : "Strict mode (correct key required)"}</span>
          <input type="checkbox" id="strict-mode" ${s.strictMode !== false ? "checked" : ""} />
        </label>
        <label class="toggle-row">
          <span>${L("caseSensitive")}</span>
          <input type="checkbox" id="case-sensitive" ${s.caseSensitive !== false ? "checked" : ""} />
        </label>
      </section>

      <section class="card settings-block">
        <h3>${lang === "fa" ? "هدف روزانه" : "Daily goal"}</h3>
        <div class="seg" data-setting="dailyGoal">
          ${[1, 2, 3, 5, 10].map((v) => `
            <button type="button" class="seg-btn ${(s.dailyGoal || 3) === v ? "is-active" : ""}" data-value="${v}">${v}</button>
          `).join("")}
        </div>
      </section>

      <section class="card settings-block">
        <h3>${lang === "fa" ? "پشتیبان‌گیری" : "Backup"}</h3>
        <p class="muted" style="margin-bottom:var(--sp-3)">${lang === "fa" ? "خروجی پیشرفت را ذخیره کن یا از فایل قبلی بازیابی کن." : "Export your progress or restore from a backup file."}</p>
        <div class="danger-actions">
          <button type="button" class="btn btn-secondary" id="export-data">${lang === "fa" ? "خروجی JSON" : "Export JSON"}</button>
          <button type="button" class="btn btn-secondary" id="import-data">${lang === "fa" ? "ورودی JSON" : "Import JSON"}</button>
          <input type="file" id="import-file" accept="application/json,.json" hidden />
        </div>
      </section>

      <section class="card settings-block danger">
        <h3>${L("resetTitle")}</h3>
        <div class="reset-options">
          <div class="reset-option">
            <div>
              <strong>${L("resetConfirm")}</strong>
              <p class="muted">${L("resetBody")}</p>
            </div>
            <button type="button" class="btn btn-danger btn-sm" id="reset-progress">${lang === "fa" ? "حذف پیشرفت" : "Reset progress"}</button>
          </div>
          <div class="reset-option">
            <div>
              <strong>${L("wipeAll")}</strong>
              <p class="muted">${L("wipeBody")}</p>
            </div>
            <button type="button" class="btn btn-danger btn-sm" id="reset-all">${lang === "fa" ? "حذف کامل" : "Wipe all"}</button>
          </div>
        </div>
      </section>
    </div>
  `;

  root.querySelector('[data-go="home"]')?.addEventListener("click", () => navigate("home"));

  // theme
  root.querySelectorAll("[data-theme-pick]").forEach((btn) => {
    btn.addEventListener("click", () => {
      updateSettings({ theme: btn.dataset.themePick });
      root.querySelectorAll("[data-theme-pick]").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
    });
  });

  // fonts
  root.querySelectorAll(".font-grid").forEach((grid) => {
    grid.addEventListener("click", (e) => {
      const btn = e.target.closest(".font-card");
      if (!btn) return;
      grid.querySelectorAll(".font-card").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      updateSettings({ [grid.dataset.setting]: btn.dataset.value });
    });
  });

  // font size
  root.querySelector('[data-setting="fontSize"]')?.addEventListener("click", (e) => {
    const btn = e.target.closest(".seg-btn");
    if (!btn) return;
    updateSettings({ fontSize: btn.dataset.value });
    btn.parentElement.querySelectorAll(".seg-btn").forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    document.body.dataset.fontSize = btn.dataset.value;
  });

  // daily goal
  root.querySelector('[data-setting="dailyGoal"]')?.addEventListener("click", (e) => {
    const btn = e.target.closest(".seg-btn");
    if (!btn) return;
    updateSettings({ dailyGoal: Number(btn.dataset.value) });
    btn.parentElement.querySelectorAll(".seg-btn").forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
  });

  // sounds
  root.querySelector("#sound-volume")?.addEventListener("input", (e) => {
    const v = Number(e.target.value) / 100;
    root.querySelector("#vol-val").textContent = `${e.target.value}%`;
    updateSettings({ soundVolume: v });
    setVolume(state.settings.soundEnabled === false ? 0 : v);
  });
  root.querySelector("#test-sound")?.addEventListener("click", () => {
    setVolume(state.settings.soundVolume || 0.55);
    playKeyCorrect();
    setTimeout(() => playKeyWrong(), 180);
  });

  const bindToggle = (id, key) => {
    const el = root.querySelector(id);
    el?.addEventListener("change", () => updateSettings({ [key]: el.checked }));
  };
  bindToggle("#key-sound", "keySound");
  bindToggle("#error-sound", "errorSound");
  bindToggle("#complete-sound", "completeSound");
  bindToggle("#show-keyboard", "showKeyboard");
  bindToggle("#show-hands", "showHandsDiagram");
  bindToggle("#show-finger", "showFingerHint");
  bindToggle("#show-finger-icon", "showFingerIcon");
  bindToggle("#strict-mode", "strictMode");
  bindToggle("#case-sensitive", "caseSensitive");

  // backup
  root.querySelector("#export-data")?.addEventListener("click", () => {
    const data = exportAllData();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `typing-trainer-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(a.href);
  });
  root.querySelector("#import-data")?.addEventListener("click", () => root.querySelector("#import-file")?.click());
  root.querySelector("#import-file")?.addEventListener("change", async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      importAllData(JSON.parse(await file.text()));
      location.reload();
    } catch {
      alert(lang === "fa" ? "فایل نامعتبر است" : "Invalid file");
    }
  });

  // reset
  root.querySelector("#reset-progress")?.addEventListener("click", () => {
    if (confirm(L("resetBody"))) {
      resetAllProgress();
      location.reload();
    }
  });
  root.querySelector("#reset-all")?.addEventListener("click", () => {
    if (confirm(L("wipeBody"))) {
      resetEverything();
      location.reload();
    }
  });
}
