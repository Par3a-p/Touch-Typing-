/**
 * Normalize practice text so typing only needs a regular space key.
 * - Removes ZWNJ (نیم‌فاصله U+200C), ZWJ, tatweel, BOM
 * - Converts exotic Unicode spaces (NBSP, thin space, etc.) to normal space
 * - Collapses runs of spaces
 * - Normalizes Arabic yeh/kaf to Persian
 */

// ZWNJ, ZWJ, LRM/RLM, BOM, tatweel
const ZERO_WIDTH = /[​-‏﻿ـ]/g;
// NBSP, en/em/thin spaces, ideographic space, etc.
const EXOTIC_SPACES = /[   -   　]/g;
const ARABIC_YEH = /[يى]/g;
const ARABIC_KAF = /ك/g;

export function normalizeTypingText(text) {
  if (!text) return "";
  let out = String(text);
  out = out.replace(ZERO_WIDTH, "");
  out = out.replace(EXOTIC_SPACES, " ");
  out = out.replace(ARABIC_YEH, "ی");
  out = out.replace(ARABIC_KAF, "ک");
  out = out
    .split("\n")
    .map((line) => line.replace(/ {2,}/g, " ").trim())
    .join("\n");
  out = out.replace(/\n{3,}/g, "\n\n");
  return out.trim();
}

/** Char-level: map space-like codepoints to regular space; drop zero-widths */
export function normalizeTypingChar(ch) {
  if (ch == null) return ch;
  if (ch === " " || ch === "\t") return " ";
  if (ch === " ") return " ";
  const code = ch.codePointAt(0);
  // zero-width / directional marks / BOM / tatweel → drop
  if (
    code === 0x200b || code === 0x200c || code === 0x200d ||
    code === 0x200e || code === 0x200f || code === 0xfeff ||
    code === 0x0640
  ) return "";
  // exotic spaces → normal space
  if (
    code === 0x00a0 || code === 0x1680 ||
    (code >= 0x2000 && code <= 0x200a) ||
    code === 0x202f || code === 0x205f || code === 0x3000
  ) return " ";
  return ch;
}

export function isSpaceLike(ch) {
  if (ch == null) return false;
  if (ch === " ") return true;
  const code = ch.codePointAt(0);
  return (
    code === 0x00a0 || code === 0x1680 ||
    (code >= 0x2000 && code <= 0x200a) ||
    code === 0x202f || code === 0x205f || code === 0x3000
  );
}
