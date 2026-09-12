/** App entry — boot, route wiring, sidebar */

import { FA_LESSONS } from "../data/lessons/fa.js";
import { EN_LESSONS } from "../data/lessons/en.js";
import {
  state,
  applySettings,
  setLang,
  bindAudioUnlock,
  notify,
  applyDocumentLang,
} from "./state.js";
import { t, FONTS_FA, FONTS_EN } from "./config.js";
import { registerRoute, setRouteChangeHandler, startRouter, navigate } from "./router.js";
import { renderHome } from "./ui/home.js";
import { renderCurriculum } from "./ui/curriculum.js";
import { renderPractice } from "./ui/practice.js";
import { renderSession, destroySession } from "./ui/session.js";
import { renderStats } from "./ui/stats.js";
import { renderSettings } from "./ui/settings.js";

window.__TTT_LESSONS__ = { fa: FA_LESSONS, en: EN_LESSONS };
window.__TTT_FONTS__ = { FONTS_FA, FONTS_EN };

const pageRoot = document.getElementById("page-root");
const navEl = document.getElementById("main-nav");

function updateNav(route) {
  navEl.querySelectorAll(".nav-item").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.route === route);
  });
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.setLang === state.lang);
  });
}

function refreshSidebarLabels() {
  const lang = state.lang;
  const map = {
    home: t(lang, "home"),
    curriculum: t(lang, "curriculum"),
    practice: t(lang, "practice"),
    stats: t(lang, "stats"),
    settings: t(lang, "settings"),
  };
  navEl.querySelectorAll(".nav-item").forEach((btn) => {
    const label = btn.querySelector("span:last-child");
    if (label && map[btn.dataset.route]) label.textContent = map[btn.dataset.route];
  });
}

function boot() {
  applySettings();
  document.body.dataset.fontSize = state.settings.fontSize || "medium";
  refreshSidebarLabels();

  registerRoute("home", () => {
    destroySession();
    renderHome(pageRoot);
  });
  registerRoute("curriculum", () => {
    destroySession();
    renderCurriculum(pageRoot);
  });
  registerRoute("practice", () => {
    destroySession();
    renderPractice(pageRoot);
  });
  registerRoute("lesson", (params) => {
    renderSession(pageRoot, "lesson", params);
  });
  registerRoute("practice-run", (params) => {
    renderSession(pageRoot, "practice-run", params);
  });
  registerRoute("stats", () => {
    destroySession();
    renderStats(pageRoot);
  });
  registerRoute("settings", () => {
    destroySession();
    renderSettings(pageRoot);
  });

  setRouteChangeHandler((name) => {
    updateNav(name === "lesson" ? "curriculum" : name === "practice-run" ? "practice" : name);
  });

  navEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".nav-item");
    if (!btn) return;
    navigate(btn.dataset.route);
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      setLang(btn.dataset.setLang);
      refreshSidebarLabels();
      updateNav(state.route);
      // re-render current page
      const { name, params } = location.hash
        ? { name: location.hash.replace(/^#\/?/, "").split("/")[0], params: location.hash.replace(/^#\/?/, "").split("/").slice(1) }
        : { name: "home", params: [] };
      navigate(name || "home", params);
    });
  });

  subscribeUi();
  bindAudioUnlock();
  startRouter();
}

function subscribeUi() {
  // re-apply theme if settings change elsewhere
  // (settings page already notifies; nothing heavy needed)
}

// Sidebar brand click → home
document.querySelector(".sidebar-brand")?.addEventListener("click", () => navigate("home"));

boot();
