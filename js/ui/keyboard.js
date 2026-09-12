/** Virtual keyboard renderer + hand diagram */

import {
  PHYSICAL_ROWS,
  CODE_FINGER,
  FINGER_COLOR,
  FINGER_LABELS,
  FINGER,
  charToCode,
  fingerForChar,
  needsShift,
} from "../data/keyboard-layouts.js";

/** Finger ids in visual order left→right for each hand */
const LEFT_FINGERS = [FINGER.L_PINKY, FINGER.L_RING, FINGER.L_MIDDLE, FINGER.L_INDEX, FINGER.L_THUMB];
const RIGHT_FINGERS = [FINGER.R_THUMB, FINGER.R_INDEX, FINGER.R_MIDDLE, FINGER.R_RING, FINGER.R_PINKY];

function fingerTipPositions(hand) {
  // x offsets for 4 fingers + thumb, relative to palm center
  if (hand === "left") {
    return [
      { x: 18, h: 52 },  // pinky
      { x: 38, h: 68 },  // ring
      { x: 58, h: 74 },  // middle
      { x: 78, h: 68 },  // index
      { x: 100, h: 36, thumb: true }, // thumb
    ];
  }
  return [
    { x: 100, h: 36, thumb: true },
    { x: 78, h: 68 },
    { x: 58, h: 74 },
    { x: 38, h: 68 },
    { x: 18, h: 52 },
  ];
}

function handSvg(hand, activeFinger) {
  const fingers = hand === "left" ? LEFT_FINGERS : RIGHT_FINGERS;
  const tips = fingerTipPositions(hand);
  const palmY = 100;
  const baseX = hand === "left" ? 10 : 10;

  let fingerEls = "";
  fingers.forEach((fid, i) => {
    const tip = tips[i];
    const color = FINGER_COLOR[fid];
    const isActive = activeFinger === fid;
    const w = tip.thumb ? 22 : 16;
    const h = tip.h;
    const x = baseX + tip.x - w / 2;
    const y = palmY - h;
    const lift = isActive ? -6 : 0;
    const opacity = activeFinger && !isActive ? 0.35 : 1;
    fingerEls += `
      <rect
        class="hfinger ${isActive ? "is-active" : ""}"
        data-finger="${fid}"
        x="${x}" y="${y + lift}" width="${w}" height="${h}"
        rx="${w / 2}"
        fill="${color}"
        opacity="${opacity}"
      />
    `;
    if (isActive) {
      fingerEls += `
        <circle class="hpulse" cx="${x + w / 2}" cy="${y + lift + 8}" r="6" fill="${color}" />
      `;
    }
  });

  const label = hand === "left" ? "L" : "R";
  return `
    <svg class="hand-svg" viewBox="0 0 130 130" aria-hidden="true">
      <!-- palm -->
      <rect x="${hand === "left" ? 12 : 18}" y="${palmY - 4}" width="100" height="42" rx="16"
        fill="var(--surface-3)" stroke="var(--border)" stroke-width="1.5" opacity="${activeFinger ? 1 : 0.55}" />
      <!-- wrist -->
      <rect x="${hand === "left" ? 30 : 36}" y="${palmY + 34}" width="64" height="18" rx="8"
        fill="var(--surface-2)" stroke="var(--border)" stroke-width="1" opacity="0.5" />
      ${fingerEls}
      <text x="65" y="128" text-anchor="middle" font-size="10" fill="var(--ink-faint)" font-family="system-ui">${label}</text>
    </svg>
  `;
}

export function renderHands(container, { nextChar = null, lang = "fa" } = {}) {
  if (!container) return;
  const finger = nextChar ? fingerForChar(nextChar, lang) : null;
  const isLeft = finger && finger.startsWith("l-");
  const isRight = finger && finger.startsWith("r-");
  const leftActive = isLeft ? finger : null;
  const rightActive = isRight ? finger : null;

  container.innerHTML = `
    <div class="hands-diagram" aria-hidden="true">
      <div class="hand-col ${isLeft ? "is-active-hand" : ""}">${handSvg("left", leftActive)}</div>
      <div class="hand-col ${isRight ? "is-active-hand" : ""}">${handSvg("right", rightActive)}</div>
    </div>
  `;
}

export function updateHands(container, { nextChar, lang }) {
  renderHands(container, { nextChar, lang });
}

/** Tiny finger-shape SVG used on the next key */
function fingerIconSvg(finger) {
  const color = FINGER_COLOR[finger] || "var(--accent)";
  const isThumb = finger === FINGER.L_THUMB || finger === FINGER.R_THUMB;
  const isLeft = finger.startsWith("l-");
  // Simple pointing-finger silhouette; thumb is squatter
  if (isThumb) {
    return `
      <svg class="key-finger-icon" viewBox="0 0 24 24" aria-hidden="true">
        <ellipse cx="12" cy="14" rx="7" ry="8" fill="${color}" opacity="0.95"/>
        <ellipse cx="12" cy="7" rx="4.5" ry="5" fill="${color}"/>
      </svg>`;
  }
  // Finger pointing down toward the key
  const tipX = 12;
  return `
    <svg class="key-finger-icon" viewBox="0 0 24 24" aria-hidden="true" style="${isLeft ? "" : ""}">
      <rect x="${tipX - 4}" y="2" width="8" height="12" rx="4" fill="${color}"/>
      <rect x="${tipX - 7}" y="10" width="14" height="11" rx="5" fill="${color}" opacity="0.85"/>
      <circle cx="${tipX}" cy="4" r="2.2" fill="#fff" opacity="0.35"/>
    </svg>`;
}

export function renderKeyboard(container, { lang = "fa", nextChar = null, shift = false, showFingerIcon = true } = {}) {
  container.innerHTML = "";
  container.className = "keyboard";
  container.setAttribute("aria-hidden", "true");

  const nextCode = nextChar ? charToCode(nextChar, lang) : null;
  const nextFinger = nextChar ? fingerForChar(nextChar, lang) : null;

  PHYSICAL_ROWS.forEach((row) => {
    const rowEl = document.createElement("div");
    rowEl.className = "kb-row";
    row.forEach((key) => {
      const keyEl = document.createElement("div");
      keyEl.className = "key";
      keyEl.dataset.code = key.code;
      if (key.space) keyEl.classList.add("is-space");
      if (key.wide) keyEl.classList.add("is-wide");

      const labels = key.labels[lang] || key.labels.en;
      const main = document.createElement("span");
      main.className = "key-main";
      main.textContent = key.space ? "␣" : (shift ? labels[1] || labels[0] : labels[0] || "");
      keyEl.appendChild(main);

      if (!key.space && labels[1] && labels[1] !== labels[0]) {
        const sub = document.createElement("span");
        sub.className = "key-sub";
        sub.textContent = labels[1];
        keyEl.appendChild(sub);
      }

      const finger = CODE_FINGER[key.code];
      if (finger) {
        keyEl.style.borderColor = "var(--key-border)";
        keyEl.dataset.finger = finger;
        // muted finger underline — target key is highlighted separately
        keyEl.style.boxShadow = `inset 0 -2px 0 0 ${FINGER_COLOR[finger]}55`;
        const badge = document.createElement("span");
        badge.className = "key-finger-dot";
        badge.style.background = FINGER_COLOR[finger];
        keyEl.appendChild(badge);
      }

      // large finger-shape icon on the next target key
      if (nextCode && key.code === nextCode) {
        keyEl.classList.add("is-next");
        if (nextFinger && showFingerIcon) {
          const iconWrap = document.createElement("span");
          iconWrap.className = "key-finger-wrap";
          iconWrap.innerHTML = fingerIconSvg(nextFinger);
          keyEl.appendChild(iconWrap);
        }
      }

      rowEl.appendChild(keyEl);
    });
    container.appendChild(rowEl);
  });
}

export function updateNextKey(container, { lang, nextChar, showFingerIcon = true }) {
  container.querySelectorAll(".key.is-next").forEach((el) => {
    el.classList.remove("is-next");
    el.querySelectorAll(".key-finger-wrap").forEach((n) => n.remove());
    // restore muted underline for the previously-next key
    const fid = el.dataset.finger;
    if (fid && FINGER_COLOR[fid]) {
      el.style.boxShadow = `inset 0 -2px 0 0 ${FINGER_COLOR[fid]}55`;
    }
  });
  if (!nextChar) return;
  const code = charToCode(nextChar, lang);
  if (!code) return;
  const el = container.querySelector(`.key[data-code="${code}"]`);
  if (!el) return;
  el.classList.add("is-next");
  const finger = fingerForChar(nextChar, lang);
  if (finger) {
    // stronger underline on target key
    el.style.boxShadow = `inset 0 -3px 0 0 ${FINGER_COLOR[finger]}`;
    if (showFingerIcon) {
      const wrap = document.createElement("span");
      wrap.className = "key-finger-wrap";
      wrap.innerHTML = fingerIconSvg(finger);
      el.appendChild(wrap);
    }
  }
}

export function flashKey(container, code, ok) {
  const el = container.querySelector(`.key[data-code="${code}"]`);
  if (!el) return;
  const cls = ok ? "is-correct" : "is-wrong";
  el.classList.add(cls);
  setTimeout(() => el.classList.remove(cls), 160);
}

export function pressKey(container, code, pressed) {
  const el = container.querySelector(`.key[data-code="${code}"]`);
  if (!el) return;
  el.classList.toggle("is-pressed", !!pressed);
}

export function handHintHtml(nextChar, lang) {
  if (!nextChar) return "";
  const finger = fingerForChar(nextChar, lang);
  if (!finger) {
    return `<span class="muted">${nextChar === " " ? "Space" : nextChar}</span>`;
  }
  const color = FINGER_COLOR[finger];
  const label = FINGER_LABELS[lang]?.[finger] || finger;
  const side = finger.startsWith("l") ? "L" : "R";
  const sideLabel = lang === "fa" ? (side === "L" ? "دست چپ" : "دست راست") : side === "L" ? "Left" : "Right";
  const shift = nextChar && needsShift(nextChar, lang);
  return `
    <span class="hand-side">${sideLabel}</span>
    <span class="hand-finger" style="background:${color}">${label}</span>
    ${shift ? `<span class="badge badge-accent">Shift</span>` : ""}
    <span class="badge badge-accent">${nextChar === " " ? "␣" : nextChar}</span>
  `;
}

export function fingerLegendHtml(lang) {
  const order = [
    "l-pinky", "l-ring", "l-middle", "l-index",
    "r-index", "r-middle", "r-ring", "r-pinky",
  ];
  return order
    .map((f) => {
      const label = FINGER_LABELS[lang]?.[f] || f;
      const color = FINGER_COLOR[f];
      return `<span><span class="finger-dot" style="background:${color}"></span>${label}</span>`;
    })
    .join("");
}
