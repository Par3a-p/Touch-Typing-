/** Free practice setup — modes, session styles, smart field visibility */

import { state, updateSettings } from "../state.js";
import { t } from "../config.js";
import { navigate } from "../router.js";
import { FA_SENTENCES, pickRandomFa } from "../../data/sentences/fa.js";
import { EN_SENTENCES, pickRandom } from "../../data/sentences/en.js";
import { QUOTES, CODE_SNIPPETS, pickRandomFrom } from "../../data/quotes.js";
import { FA_PROVERBS, pickProverbs } from "../../data/proverbs.js";

/** Detect if text is mostly Persian */
export function isPersianText(text) {
  if (!text) return false;
  const fa = (text.match(/[؀-ۿ]/g) || []).length;
  const latin = (text.match(/[A-Za-z]/g) || []).length;
  return fa > latin;
}

/** Keyboard/layout language for a given practice source + text */
export function resolveContentLang(source, practiceLang, text) {
  if (source === "code") return "en";
  if (source === "proverbs") return "fa";
  if (source === "custom" || source === "weak") {
    return isPersianText(text) ? "fa" : "en";
  }
  return practiceLang === "en" ? "en" : "fa";
}

export function resolveContentDir(source, practiceLang, text) {
  const lang = resolveContentLang(source, practiceLang, text);
  return lang === "fa" ? "rtl" : "ltr";
}

export function renderPractice(root) {
  const lang = state.lang;
  const L = (k) => t(lang, k);
  const s = state.settings;
  const dur0 = Number(s.practiceDuration) || 0;

  const sourceLabels = {
    sentences: L("sentences"),
    words: L("words"),
    random: L("randomChars"),
    quotes: lang === "fa" ? "نقل‌قول" : "Quotes",
    proverbs: "ضرب‌المثل",
    code: lang === "fa" ? "کد" : "Code",
    custom: lang === "fa" ? "متن دلخواه" : "Custom text",
  };

  // Proverbs only in Persian track
  const allSources = lang === "fa"
    ? ["sentences", "words", "random", "quotes", "proverbs", "code", "custom"]
    : ["sentences", "words", "random", "quotes", "code", "custom"];

  // If saved source is no longer available (e.g. proverbs in EN), fall back
  let initialSource = s.practiceSource || "sentences";
  if (!allSources.includes(initialSource)) initialSource = "sentences";

  root.innerHTML = `
    <div class="page page-practice fade-in">
      <header class="page-header">
        <div>
          <h1 class="page-title">${L("practice")}</h1>
          <p class="page-sub">${lang === "fa" ? "نوع تمرین را انتخاب کن؛ گزینه‌های غیرمرتبط خودکار مخفی می‌شوند" : "Pick a mode — unrelated options hide automatically"}</p>
        </div>
        <div class="header-actions">
          <button type="button" class="btn btn-ghost" data-go="home">← ${L("back")}</button>
        </div>
      </header>

      <form class="practice-form card" id="practice-form">
        <div class="form-row">
          <label class="form-label">${lang === "fa" ? "نوع تمرین" : "Practice type"}</label>
          <div class="seg seg-wrap" data-group="practiceSource">
            ${allSources.map((v) => `
              <button type="button" class="seg-btn ${initialSource === v ? "is-active" : ""}" data-value="${v}">${sourceLabels[v]}</button>
            `).join("")}
          </div>
          <p class="field-hint" id="source-hint"></p>
        </div>

        <div class="form-row" id="custom-text-row" hidden>
          <label class="form-label" for="custom-text">${lang === "fa" ? "متن خودت را بنویس" : "Your text"}</label>
          <textarea id="custom-text" class="input textarea" rows="5"
            placeholder="${lang === "fa" ? "متن دلخواهت را اینجا بنویس…" : "Type or paste your text here…"}">${(s.customText || "").replace(/</g, "&lt;")}</textarea>
        </div>

        <div class="form-row" id="level-row">
          <label class="form-label">${L("level")}</label>
          <div class="seg" data-group="level">
            <button type="button" class="seg-btn ${(s.practiceLevel || "easy") === "easy" ? "is-active" : ""}" data-value="easy">${L("easy")}</button>
            <button type="button" class="seg-btn ${s.practiceLevel === "medium" ? "is-active" : ""}" data-value="medium">${L("medium")}</button>
            <button type="button" class="seg-btn ${s.practiceLevel === "hard" ? "is-active" : ""}" data-value="hard">${L("hard")}</button>
          </div>
        </div>

        <div class="form-row" id="length-row">
          <label class="form-label">${L("length")}</label>
          <div class="seg" data-group="practiceLength">
            <button type="button" class="seg-btn ${s.practiceLength === "short" ? "is-active" : ""}" data-value="short">${L("short")}</button>
            <button type="button" class="seg-btn ${!s.practiceLength || s.practiceLength === "medium" ? "is-active" : ""}" data-value="medium">${L("medium")}</button>
            <button type="button" class="seg-btn ${s.practiceLength === "long" ? "is-active" : ""}" data-value="long">${L("long")}</button>
          </div>
          <p class="field-hint" id="length-hint"></p>
        </div>

        <div class="form-row" id="duration-row" hidden>
          <label class="form-label">${L("duration")}</label>
          <div class="seg" data-group="practiceDuration">
            <button type="button" class="seg-btn ${dur0 === 30 ? "is-active" : ""}" data-value="30">30s</button>
            <button type="button" class="seg-btn ${!dur0 || dur0 === 60 ? "is-active" : ""}" data-value="60">1 ${L("minute")}</button>
            <button type="button" class="seg-btn ${dur0 === 120 ? "is-active" : ""}" data-value="120">2 ${L("minute")}</button>
            <button type="button" class="seg-btn ${dur0 === 300 ? "is-active" : ""}" data-value="300">5 ${L("minute")}</button>
          </div>
          <p class="field-hint" id="duration-hint">${lang === "fa" ? "فقط در حالت چالش زمانی" : "Timed challenge only"}</p>
        </div>

        <div class="form-row">
          <label class="form-label">${lang === "fa" ? "حالت جلسه" : "Session style"}</label>
          <div class="session-style-grid" data-group="sessionMode">
            <button type="button" class="style-card is-active" data-value="normal">
              <strong>${lang === "fa" ? "تمرین معمولی" : "Standard"}</strong>
              <span>${lang === "fa" ? "صفحه‌کلید مجازی، آمار زنده و راهنمای انگشت" : "Virtual keyboard, live stats, finger guide"}</span>
            </button>
            <button type="button" class="style-card" data-value="zen">
              <strong>${lang === "fa" ? "تمرکز محض" : "Focus / Zen"}</strong>
              <span>${lang === "fa" ? "فقط متن — بدون صفحه‌کلید، بدون آمار، حواس‌پرتی صفر" : "Text only — no keyboard, no stats, zero distraction"}</span>
            </button>
            <button type="button" class="style-card" data-value="boss">
              <strong>${lang === "fa" ? "چالش زمانی" : "Timed challenge"}</strong>
              <span>${lang === "fa" ? "تایمر معکوس — قبل از پایان وقت متن را تمام کن" : "Countdown — finish before time runs out"}</span>
            </button>
          </div>
        </div>

        <div class="form-actions">
          <button type="submit" class="btn btn-primary btn-lg">${L("start")}</button>
        </div>
      </form>
    </div>
  `;

  const form = root.querySelector("#practice-form");
  const customRow = root.querySelector("#custom-text-row");
  const levelRow = root.querySelector("#level-row");
  const lengthRow = root.querySelector("#length-row");
  const durationRow = root.querySelector("#duration-row");
  const sourceHint = root.querySelector("#source-hint");
  const lengthHint = root.querySelector("#length-hint");

  const draft = {
    practiceLang: lang, // follows sidebar language track — no separate picker
    level: s.practiceLevel || "easy",
    practiceSource: initialSource,
    practiceLength: s.practiceLength || "medium",
    practiceDuration: dur0 || 60,
    sessionMode: "normal",
  };

  const HINTS = {
    fa: {
      sentences: "جمله‌های معنادار از بانک متن",
      words: "کلمات پرتکرار",
      random: "حروف تصادفی برای تمرین جایگاه انگشت",
      quotes: "نقل‌قول‌های کوتاه و الهام‌بخش",
      proverbs: "ضرب‌المثل‌های کهن فارسی",
      code: "قطعه‌کد — چیدمان کیبورد انگلیسی و LTR",
      custom: "متن دلخواه خودت را تایپ کن",
      lengthSentences: "تعداد جمله‌ها",
      lengthWords: "تعداد کلمات",
      lengthGeneric: "تعداد آیتم‌ها",
    },
    en: {
      sentences: "Meaningful sentences from the bank",
      words: "High-frequency words",
      random: "Random letters for finger drills",
      quotes: "Short inspirational quotes",
      proverbs: "Classic Persian proverbs",
      code: "Code snippets — English layout, LTR",
      custom: "Type your own text",
      lengthSentences: "Number of sentences",
      lengthWords: "Number of words",
      lengthGeneric: "Number of items",
    },
  };

  function syncFieldVisibility() {
    const src = draft.practiceSource;
    const H = HINTS[lang] || HINTS.en;

    if (customRow) customRow.hidden = src !== "custom";
    if (levelRow) levelRow.hidden = !["sentences", "words"].includes(src);
    if (lengthRow) lengthRow.hidden = src === "custom";
    if (durationRow) durationRow.hidden = draft.sessionMode !== "boss";

    if (sourceHint) sourceHint.textContent = H[src] || "";
    if (lengthHint && lengthRow && !lengthRow.hidden) {
      if (src === "sentences") lengthHint.textContent = H.lengthSentences;
      else if (src === "words") lengthHint.textContent = H.lengthWords;
      else lengthHint.textContent = H.lengthGeneric;
    }
  }
  syncFieldVisibility();

  // segmented controls
  root.querySelectorAll(".seg[data-group]").forEach((seg) => {
    seg.addEventListener("click", (e) => {
      const btn = e.target.closest(".seg-btn");
      if (!btn) return;
      seg.querySelectorAll(".seg-btn").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      const group = seg.dataset.group;
      let val = btn.dataset.value;
      if (group === "practiceDuration") val = Number(val);
      draft[group] = val;
      if (group === "practiceSource") syncFieldVisibility();
    });
  });

  // session style cards
  const styleGrid = root.querySelector('[data-group="sessionMode"]');
  styleGrid?.addEventListener("click", (e) => {
    const btn = e.target.closest(".style-card");
    if (!btn) return;
    styleGrid.querySelectorAll(".style-card").forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    draft.sessionMode = btn.dataset.value;
    syncFieldVisibility();
  });

  root.querySelector('[data-go="home"]')?.addEventListener("click", () => navigate("home"));

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let source = draft.practiceSource;
    const weakRequested = typeof sessionStorage !== "undefined"
      && sessionStorage.getItem("ttt.weakDrill") === "1"
      && sessionStorage.getItem("ttt.weakChars");
    if (weakRequested) {
      source = "weak";
      sessionStorage.removeItem("ttt.weakDrill");
    }

    if (draft.practiceSource === "custom") {
      const custom = root.querySelector("#custom-text")?.value?.replace(/\r\n/g, "\n").trim();
      if (!custom) {
        root.querySelector("#custom-text")?.focus();
        return;
      }
      updateSettings({ customText: custom });
    }

    let dur = draft.practiceDuration;
    if (draft.sessionMode === "boss") {
      if (!dur) dur = 60;
    } else {
      dur = 0; // normal/zen: no time limit
    }

    updateSettings({
      practiceLevel: draft.level,
      practiceSource: draft.practiceSource,
      practiceLength: draft.practiceLength,
      practiceDuration: draft.practiceDuration,
    });

    navigate("practice-run", [
      draft.practiceLang,
      draft.level,
      source,
      draft.practiceLength,
      String(dur),
      draft.sessionMode,
    ]);
  });
}

export function buildPracticeText({ practiceLang, level, practiceSource, practiceLength, customText }) {
  if (practiceSource === "weak") {
    const weak = typeof sessionStorage !== "undefined" ? sessionStorage.getItem("ttt.weakChars") : null;
    if (weak) {
      const chars = Array.from(weak).filter((c) => c && c !== " ");
      if (chars.length) {
        const len = practiceLength === "short" ? 40 : practiceLength === "long" ? 120 : 70;
        let out = "";
        for (let i = 0; i < len; i++) out += chars[Math.floor(Math.random() * chars.length)];
        if (typeof sessionStorage !== "undefined") sessionStorage.removeItem("ttt.weakChars");
        return out;
      }
    }
    practiceSource = "sentences";
  }

  if (practiceSource === "custom") {
    const custom = customText || state.settings.customText || "";
    if (custom.trim()) return custom.replace(/\r\n/g, "\n").trim();
    // fallback if empty
    practiceSource = "sentences";
  }

  if (practiceSource === "quotes") {
    const bank = QUOTES[practiceLang] || QUOTES.en;
    const n = practiceLength === "short" ? 1 : practiceLength === "long" ? 4 : 2;
    return pickRandomFrom(bank, n).join(" ");
  }

  if (practiceSource === "proverbs") {
    const n = practiceLength === "short" ? 1 : practiceLength === "long" ? 4 : 2;
    return pickProverbs(n).join(" ");
  }

  if (practiceSource === "code") {
    // Always English code snippets + English keyboard
    const bank = CODE_SNIPPETS.en;
    const n = practiceLength === "short" ? 2 : practiceLength === "long" ? 8 : 4;
    return pickRandomFrom(bank, n).join("\n");
  }

  const bank = practiceLang === "fa" ? FA_SENTENCES : EN_SENTENCES;
  const pick = practiceLang === "fa" ? pickRandomFa : pickRandom;
  const lengthMap = { short: 1, medium: 3, long: 6 };
  const n = lengthMap[practiceLength] || 3;

  if (practiceSource === "words") {
    const wLen = practiceLength === "short" ? 8 : practiceLength === "long" ? 24 : 12;
    return pick(bank.words, wLen).join(" ");
  }
  if (practiceSource === "random") {
    const pool = practiceLang === "fa"
      ? "ضصثقفغعهخحجچشسیبلاتنمکگظطزرذدپو"
      : "abcdefghijklmnopqrstuvwxyz";
    const len = practiceLength === "short" ? 40 : practiceLength === "long" ? 160 : 80;
    let out = "";
    for (let i = 0; i < len; i++) out += pool[Math.floor(Math.random() * pool.length)];
    return out;
  }
  const pool = bank[level] || bank.easy;
  return pick(pool, n).join(" ");
}
