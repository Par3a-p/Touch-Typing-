# ⌨️ Touch Typing Trainer

<p align="center">
  <strong>Learn touch typing step by step — Persian & English</strong><br/>
  No server · Double-click to run · Local storage · Fully offline
</p>

<p align="center">
  <a href="https://github.com/Par3a-p/Touch-Typing-/blob/main/README.fa.md"><img src="https://img.shields.io/badge/فارسی-README-0d9488?style=for-the-badge" alt="فارسی"/></a>
  &nbsp;
  <a href="https://github.com/Par3a-p/Touch-Typing-/releases/download/download/Touch.Typing.setup.exe"><img src="https://img.shields.io/badge/⬇%20Download-Setup.exe-2ea44f?style=for-the-badge" alt="Download Setup"/></a>
  &nbsp;
  <a href="https://github.com/Par3a-p/Touch-Typing-/releases/download/download/Touch.Typing.protable.exe"><img src="https://img.shields.io/badge/⬇%20Download-Portable.exe-1f6feb?style=for-the-badge" alt="Download Portable"/></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/status-stable-brightgreen" alt="status"/>
  <img src="https://img.shields.io/badge/vanilla--js-ES2020-blue" alt="js"/>
  <img src="https://img.shields.io/badge/license-MIT-yellow" alt="license"/>
  <img src="https://img.shields.io/badge/offline-100%25-orange" alt="offline"/>
  <img src="https://img.shields.io/badge/UI-RTL%20%2B%20LTR-purple" alt="rtl"/>
</p>

---

## ✨ Features

| Area | What you get |
|------|----------------|
| **Curriculum** | 30 progressive stages per language (Persian + English) |
| **Free practice** | Sentences, words, random letters, quotes, proverbs, code, custom text |
| **Session styles** | Standard · Focus/Zen (no keyboard) · Timed challenge |
| **Virtual keyboard** | Next-key highlight · finger icon · hand diagram |
| **Strict mode** | Can't advance until you type the correct key |
| **Analytics** | WPM / CPM / accuracy · live sparkline · weak-key heatmap |
| **Gamification** | XP & levels · combo counter · achievements · daily streak · confetti |
| **Settings** | 6 themes · 12 fonts · separate sound toggles · daily goal |
| **Data** | localStorage · JSON export/import · no backend |

---

## 🚀 Run it

### ⭐ Option 1 — Download the Windows app (recommended)

| Build | Link |
|-------|------|
| **Installer** (recommended) | [Touch.Typing.setup.exe](https://github.com/Par3a-p/Touch-Typing-/releases/download/download/Touch.Typing.setup.exe) |
| **Portable** (no install) | [Touch.Typing.protable.exe](https://github.com/Par3a-p/Touch-Typing-/releases/download/download/Touch.Typing.protable.exe) |

Download, run, and start typing — no browser or server needed.

### Option 2 — Double-click `index.html`

Open `index.html` in your browser. That's it.

### Option 3 — Local server

```bash
# Python
python -m http.server 8080

# or Node
npx serve .
```

Then open `http://localhost:8080`.

> 💡 No `npm install` or build step required — `bundle.js` is pre-built.

---

## 📁 Project structure

```
touch-typing-trainer/
├── index.html              # Entry point
├── favicon.svg
├── build.js                # Bundle ES modules → bundle.js
├── css/
│   ├── tokens.css          # Themes, fonts, design tokens
│   ├── base.css            # Reset & app shell
│   ├── components.css      # Buttons, cards, keyboard, modal
│   └── pages.css           # Page-specific styles
├── data/
│   ├── lessons/            # 30+30 curriculum stages (fa/en)
│   ├── sentences/          # Sentence banks
│   ├── proverbs.js         # 30 Persian proverbs
│   └── quotes.js           # Quotes & code snippets
└── js/
    ├── app.js              # Boot & routing
    ├── bundle.js           # Built output (ready to run)
    ├── state.js            # Central state
    ├── typing-engine.js    # Typing engine
    ├── scoring.js          # WPM, accuracy, score
    ├── normalize-text.js   # ZWNJ strip & text normalization
    ├── achievements.js     # 16 achievements
    ├── streak.js           # Streaks & weak keys
    ├── xp.js               # XP / Level system
    ├── confetti.js         # Celebration animation
    ├── patterns.js         # Error-pattern analysis
    ├── audio.js            # Web Audio SFX
    ├── storage.js          # localStorage helpers
    ├── router.js           # Hash-based router
    └── ui/                 # Home, curriculum, practice, session, stats, settings
```

---

## 🎯 Curriculum (30 stages per language)

```
1–4     Home Row
5       Home-row words
6–8     Top row + combinations
9–10    Bottom row + all three rows
11      Common words
12–13   Numbers & punctuation
14–16   Sentences, paragraphs, mastery
17–21   Focused letter drills
22–25   Numbers in sentences, punctuation flow
26–28   Speed, accuracy, full mix
29      Proverbs (Persian track)
30      Final mastery ⭐
```

Each stage has **speed & accuracy thresholds**. The next stage unlocks only after you pass.

---

## ⌨️ Shortcuts

| Key | Action |
|-----|--------|
| `Esc` | Exit session |
| `R` | Retry session (after finish) |
| `Backspace` | Delete previous character |
| `Enter` | New line (multi-line text) |
| `Space` | Space (ZWNJ is auto-stripped) |

---

## 🎨 Themes

| Theme | Type |
|-------|------|
| 🌑 Dark | Default |
| ☀️ Light | Light |
| 🏜️ Sand | Warm light |
| 🌊 Sky | Cool light |
| 🌲 Forest | Dark |
| 💜 Indigo | Dark |

---

## 🔤 Fonts

**Persian:** Vazirmatn · Noto Naskh · Noto Kufi · Amiri · Baloo · Lalezar · Markazi

**English:** System · Inter · Roboto · Georgia · Monospace

---

## 🛠️ Development

```bash
# After editing sources under js/ and data/
node build.js
```

Output: `js/bundle.js`

---

## 📦 Package as desktop app

The app is fully client-side and ready for Electron / Tauri:

```js
// main.js (Electron)
const { app, BrowserWindow } = require("electron");
app.whenReady().then(() => {
  const win = new BrowserWindow({ width: 1200, height: 800 });
  win.loadFile("index.html");
});
```

---

## 🌐 Support

| Capability | Status |
|------------|--------|
| Persian (RTL) | ✅ |
| English (LTR) | ✅ |
| Mobile | ✅ |
| Tablet | ✅ |
| Desktop | ✅ |
| Offline | ✅ |
| No cookies/tracking | ✅ |

---

## 📄 License

MIT — free to use, modify, and distribute.

---

<p align="center">
  Built with ❤️ for learning touch typing<br/>
  <sub>If you find it useful, please leave a ⭐</sub>
</p>
