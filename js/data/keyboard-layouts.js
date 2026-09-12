/** Physical keyboard layouts + finger mapping (event.code based) */

export const FINGER = {
  L_PINKY: "l-pinky",
  L_RING: "l-ring",
  L_MIDDLE: "l-middle",
  L_INDEX: "l-index",
  L_THUMB: "l-thumb",
  R_THUMB: "r-thumb",
  R_INDEX: "r-index",
  R_MIDDLE: "r-middle",
  R_RING: "r-ring",
  R_PINKY: "r-pinky",
};

export const FINGER_LABELS = {
  fa: {
    [FINGER.L_PINKY]: "انگشت کوچک چپ",
    [FINGER.L_RING]: "انگشت حلقه چپ",
    [FINGER.L_MIDDLE]: "انگشت میانی چپ",
    [FINGER.L_INDEX]: "انگشت اشاره چپ",
    [FINGER.L_THUMB]: "شست چپ",
    [FINGER.R_THUMB]: "شست راست",
    [FINGER.R_INDEX]: "انگشت اشاره راست",
    [FINGER.R_MIDDLE]: "انگشت میانی راست",
    [FINGER.R_RING]: "انگشت حلقه راست",
    [FINGER.R_PINKY]: "انگشت کوچک راست",
  },
  en: {
    [FINGER.L_PINKY]: "Left pinky",
    [FINGER.L_RING]: "Left ring",
    [FINGER.L_MIDDLE]: "Left middle",
    [FINGER.L_INDEX]: "Left index",
    [FINGER.L_THUMB]: "Left thumb",
    [FINGER.R_THUMB]: "Right thumb",
    [FINGER.R_INDEX]: "Right index",
    [FINGER.R_MIDDLE]: "Right middle",
    [FINGER.R_RING]: "Right ring",
    [FINGER.R_PINKY]: "Right pinky",
  },
};

export const FINGER_COLOR = {
  [FINGER.L_PINKY]: "var(--finger-l-pinky)",
  [FINGER.L_RING]: "var(--finger-l-ring)",
  [FINGER.L_MIDDLE]: "var(--finger-l-middle)",
  [FINGER.L_INDEX]: "var(--finger-l-index)",
  [FINGER.L_THUMB]: "var(--finger-l-thumb)",
  [FINGER.R_THUMB]: "var(--finger-r-thumb)",
  [FINGER.R_INDEX]: "var(--finger-r-index)",
  [FINGER.R_MIDDLE]: "var(--finger-r-middle)",
  [FINGER.R_RING]: "var(--finger-r-ring)",
  [FINGER.R_PINKY]: "var(--finger-r-pinky)",
};

/** Standard finger assignment by physical key code */
export const CODE_FINGER = {
  Backquote: FINGER.L_PINKY,
  Digit1: FINGER.L_PINKY,
  Digit2: FINGER.L_RING,
  Digit3: FINGER.L_MIDDLE,
  Digit4: FINGER.L_INDEX,
  Digit5: FINGER.L_INDEX,
  Digit6: FINGER.R_INDEX,
  Digit7: FINGER.R_INDEX,
  Digit8: FINGER.R_MIDDLE,
  Digit9: FINGER.R_RING,
  Digit0: FINGER.R_PINKY,
  Minus: FINGER.R_PINKY,
  Equal: FINGER.R_PINKY,

  KeyQ: FINGER.L_PINKY,
  KeyW: FINGER.L_RING,
  KeyE: FINGER.L_MIDDLE,
  KeyR: FINGER.L_INDEX,
  KeyT: FINGER.L_INDEX,
  KeyY: FINGER.R_INDEX,
  KeyU: FINGER.R_INDEX,
  KeyI: FINGER.R_MIDDLE,
  KeyO: FINGER.R_RING,
  KeyP: FINGER.R_PINKY,
  BracketLeft: FINGER.R_PINKY,
  BracketRight: FINGER.R_PINKY,
  Backslash: FINGER.R_PINKY,

  KeyA: FINGER.L_PINKY,
  KeyS: FINGER.L_RING,
  KeyD: FINGER.L_MIDDLE,
  KeyF: FINGER.L_INDEX,
  KeyG: FINGER.L_INDEX,
  KeyH: FINGER.R_INDEX,
  KeyJ: FINGER.R_INDEX,
  KeyK: FINGER.R_MIDDLE,
  KeyL: FINGER.R_RING,
  Semicolon: FINGER.R_PINKY,
  Quote: FINGER.R_PINKY,

  KeyZ: FINGER.L_PINKY,
  KeyX: FINGER.L_RING,
  KeyC: FINGER.L_MIDDLE,
  KeyV: FINGER.L_INDEX,
  KeyB: FINGER.L_INDEX,
  KeyN: FINGER.R_INDEX,
  KeyM: FINGER.R_INDEX,
  Comma: FINGER.R_MIDDLE,
  Period: FINGER.R_RING,
  Slash: FINGER.R_PINKY,

  Space: FINGER.R_THUMB,
};

/** Physical rows for on-screen keyboard (always LTR physical) */
export const PHYSICAL_ROWS = [
  [
    { code: "Backquote", labels: { en: ["`", "~"], fa: ["÷", "ُ"] } },
    { code: "Digit1", labels: { en: ["1", "!"], fa: ["۱", "!"] } },
    { code: "Digit2", labels: { en: ["2", "@"], fa: ["۲", "٬"] } },
    { code: "Digit3", labels: { en: ["3", "#"], fa: ["۳", "٫"] } },
    { code: "Digit4", labels: { en: ["4", "$"], fa: ["۴", "﷼"] } },
    { code: "Digit5", labels: { en: ["5", "%"], fa: ["۵", "٪"] } },
    { code: "Digit6", labels: { en: ["6", "^"], fa: ["۶", "×"] } },
    { code: "Digit7", labels: { en: ["7", "&"], fa: ["۷", "،"] } },
    { code: "Digit8", labels: { en: ["8", "*"], fa: ["۸", "*"] } },
    { code: "Digit9", labels: { en: ["9", "("], fa: ["۹", ")"] } },
    { code: "Digit0", labels: { en: ["0", ")"], fa: ["۰", "("] } },
    { code: "Minus", labels: { en: ["-", "_"], fa: ["-", "_"] } },
    { code: "Equal", labels: { en: ["=", "+"], fa: ["=", "+"] } },
  ],
  [
    { code: "KeyQ", labels: { en: ["q", "Q"], fa: ["ض", "ْ"] } },
    { code: "KeyW", labels: { en: ["w", "W"], fa: ["ص", "ٌ"] } },
    { code: "KeyE", labels: { en: ["e", "E"], fa: ["ث", "ٍ"] } },
    { code: "KeyR", labels: { en: ["r", "R"], fa: ["ق", "َ"] } },
    { code: "KeyT", labels: { en: ["t", "T"], fa: ["ف", "ُ"] } },
    { code: "KeyY", labels: { en: ["y", "Y"], fa: ["غ", "ِ"] } },
    { code: "KeyU", labels: { en: ["u", "U"], fa: ["ع", "ّ"] } },
    { code: "KeyI", labels: { en: ["i", "I"], fa: ["ه", "ْ"] } },
    { code: "KeyO", labels: { en: ["o", "O"], fa: ["خ", "ٔ"] } },
    { code: "KeyP", labels: { en: ["p", "P"], fa: ["ح", "ٰ"] } },
    { code: "BracketLeft", labels: { en: ["[", "{"], fa: ["ج", ""] } },
    { code: "BracketRight", labels: { en: ["]", "}"], fa: ["چ", ""] } },
    { code: "Backslash", labels: { en: ["\\", "|"], fa: ["\\", "|"] }, wide: true },
  ],
  [
    { code: "KeyA", labels: { en: ["a", "A"], fa: ["ش", "ً"] } },
    { code: "KeyS", labels: { en: ["s", "S"], fa: ["س", "ء"] } },
    { code: "KeyD", labels: { en: ["d", "D"], fa: ["ی", "ي"] } },
    { code: "KeyF", labels: { en: ["f", "F"], fa: ["ب", ""] } },
    { code: "KeyG", labels: { en: ["g", "G"], fa: ["ل", ""] } },
    { code: "KeyH", labels: { en: ["h", "H"], fa: ["ا", "آ"] } },
    { code: "KeyJ", labels: { en: ["j", "J"], fa: ["ت", ""] } },
    { code: "KeyK", labels: { en: ["k", "K"], fa: ["ن", ""] } },
    { code: "KeyL", labels: { en: ["l", "L"], fa: ["م", ""] } },
    { code: "Semicolon", labels: { en: [";", ":"], fa: ["ک", ""] } },
    { code: "Quote", labels: { en: ["'", '"'], fa: ["گ", ""] } },
  ],
  [
    { code: "KeyZ", labels: { en: ["z", "Z"], fa: ["ظ", ""] } },
    { code: "KeyX", labels: { en: ["x", "X"], fa: ["ط", ""] } },
    { code: "KeyC", labels: { en: ["c", "C"], fa: ["ز", "ژ"] } },
    { code: "KeyV", labels: { en: ["v", "V"], fa: ["ر", ""] } },
    { code: "KeyB", labels: { en: ["b", "B"], fa: ["ذ", ""] } },
    { code: "KeyN", labels: { en: ["n", "N"], fa: ["د", ""] } },
    { code: "KeyM", labels: { en: ["m", "M"], fa: ["پ", ""] } },
    { code: "Comma", labels: { en: [",", "<"], fa: ["و", ""] } },
    { code: "Period", labels: { en: [".", ">"], fa: [".", ""] } },
    { code: "Slash", labels: { en: ["/", "?"], fa: ["/", "؟"] } },
  ],
  [
    { code: "Space", labels: { en: ["", ""], fa: ["", ""] }, space: true },
  ],
];

/** Map typed character → preferred physical code for that language track */
const CHAR_TO_CODE_EN = {
  "`": "Backquote", "~": "Backquote",
  "1": "Digit1", "!": "Digit1",
  "2": "Digit2", "@": "Digit2",
  "3": "Digit3", "#": "Digit3",
  "4": "Digit4", "$": "Digit4",
  "5": "Digit5", "%": "Digit5",
  "6": "Digit6", "^": "Digit6",
  "7": "Digit7", "&": "Digit7",
  "8": "Digit8", "*": "Digit8",
  "9": "Digit9", "(": "Digit9",
  "0": "Digit0", ")": "Digit0",
  "-": "Minus", "_": "Minus",
  "=": "Equal", "+": "Equal",
  q: "KeyQ", w: "KeyW", e: "KeyE", r: "KeyR", t: "KeyT",
  y: "KeyY", u: "KeyU", i: "KeyI", o: "KeyO", p: "KeyP",
  "[": "BracketLeft", "{": "BracketLeft",
  "]": "BracketRight", "}": "BracketRight",
  "\\": "Backslash", "|": "Backslash",
  a: "KeyA", s: "KeyS", d: "KeyD", f: "KeyF", g: "KeyG",
  h: "KeyH", j: "KeyJ", k: "KeyK", l: "KeyL", ";": "Semicolon",
  "'": "Quote", '"': "Quote",
  z: "KeyZ", x: "KeyX", c: "KeyC", v: "KeyV", b: "KeyB",
  n: "KeyN", m: "KeyM", ",": "Comma", "<": "Comma",
  ".": "Period", ">": "Period", "/": "Slash", "?": "Slash",
  " ": "Space",
};

const CHAR_TO_CODE_FA = {
  "÷": "Backquote", "ُ": "Backquote",
  "1": "Digit1", "۱": "Digit1", "!": "Digit1",
  "2": "Digit2", "۲": "Digit2", "٬": "Digit2",
  "3": "Digit3", "۳": "Digit3", "٫": "Digit3",
  "4": "Digit4", "۴": "Digit4", "﷼": "Digit4",
  "5": "Digit5", "۵": "Digit5", "٪": "Digit5",
  "6": "Digit6", "۶": "Digit6", "×": "Digit6",
  "7": "Digit7", "۷": "Digit7", "،": "Digit7",
  "8": "Digit8", "۸": "Digit8", "*": "Digit8",
  "9": "Digit9", "۹": "Digit9", ")": "Digit9",
  "0": "Digit0", "۰": "Digit0", "(": "Digit0",
  "-": "Minus", "_": "Minus",
  "=": "Equal", "+": "Equal",
  ض: "KeyQ", ص: "KeyW", ث: "KeyE", ق: "KeyR", ف: "KeyT",
  غ: "KeyY", ع: "KeyU", ه: "KeyI", خ: "KeyO", ح: "KeyP",
  ج: "BracketLeft", چ: "BracketRight",
  "\\": "Backslash", "|": "Backslash",
  ش: "KeyA", س: "KeyS", ی: "KeyD", ي: "KeyD",
  ب: "KeyF", ل: "KeyG", ا: "KeyH", آ: "KeyH",
  ت: "KeyJ", ن: "KeyK", م: "KeyL",
  ک: "Semicolon", گ: "Quote",
  ظ: "KeyZ", ط: "KeyX", ز: "KeyC", ژ: "KeyC",
  ر: "KeyV", ذ: "KeyB", د: "KeyN", پ: "KeyM",
  و: "Comma", ".": "Period", "/": "Slash", "؟": "Slash",
  " ": "Space",
};

export function charToCode(char, lang) {
  if (!char) return null;
  if (char === " ") return "Space";
  const map = lang === "fa" ? CHAR_TO_CODE_FA : CHAR_TO_CODE_EN;
  if (map[char]) return map[char];
  const lower = char.toLowerCase();
  if (map[lower]) return map[lower];
  // fallback: try physical English map
  if (CHAR_TO_CODE_EN[lower]) return CHAR_TO_CODE_EN[lower];
  return null;
}

export function fingerForChar(char, lang) {
  const code = charToCode(char, lang);
  if (!code) return null;
  return CODE_FINGER[code] || null;
}

export function fingerForCode(code) {
  return CODE_FINGER[code] || null;
}

export function needsShift(char, lang) {
  if (!char || char.length === 0) return false;
  if (lang === "en") {
    if (/[A-Z]/.test(char)) return true;
    if (/[!@#$%^&*()_+{}|:"<>?~]/.test(char)) return true;
    return false;
  }
  // Persian: shifted symbols (rough)
  const shiftedFa = "ٌٍَُِّْٰءئؤ،؛؟ـ«»ۀٔژٓ";
  return shiftedFa.includes(char);
}

export const HOME_ROW = {
  en: "asdfghjkl;",
  fa: "شسیبلاتنمکگ",
};

export function homeRowCodes() {
  return [
    "KeyA", "KeyS", "KeyD", "KeyF", "KeyG",
    "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon",
  ];
}
