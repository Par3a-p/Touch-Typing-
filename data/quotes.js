/** Quote banks + code snippets for advanced practice */

export const QUOTES = {
  fa: [
    "راه هزار فرسنگی با یک قدم آغاز می‌شود.",
    "دانش قدرت است و تمرین کلید مهارت.",
    "هر سفر بزرگ با یک گام کوچک شروع می‌شود.",
    "صبر تلخ است، اما میوه‌اش شیرین.",
    "آنچه می‌آموزیم انجام می‌دهیم؛ آنچه انجام می‌دهیم می‌شویم.",
    "بهترین زمان برای کاشتن یک درخت بیست سال پیش بود. دومین بهترین زمان، همین حالاست.",
    "اگر می‌خواهی دنیا را تغییر دهی، ابتدا بستر خودت را مرتب کن.",
    "موفقیت مجموعه تلاش‌های کوچک و تکرارشونده است.",
    "ذهن انسان مانند چتر است؛ وقتی باز می‌شود کار می‌کند.",
    "تفاوت میان انسان‌های موفق و ناموفق در اراده و پشتکار است.",
    "کتاب بهترین دوستی است که هرگز خیانت نمی‌کند.",
    "نوشتن، اندیشیدن بر روی کاغذ است.",
  ],
  en: [
    "The only way to do great work is to love what you do.",
    "Simplicity is the ultimate sophistication.",
    "In the middle of difficulty lies opportunity.",
    "Well done is better than well said.",
    "The best time to plant a tree was twenty years ago. The second best time is now.",
    "Success is the sum of small efforts repeated day in and day out.",
    "Your mind is like a parachute — it works best when it is open.",
    "We are what we repeatedly do. Excellence is a habit.",
    "The journey of a thousand miles begins with a single step.",
    "Don't watch the clock; do what it does. Keep going.",
    "Quality is not an act, it is a habit.",
    "Everything you've ever wanted is on the other side of fear.",
  ],
};

export const CODE_SNIPPETS = {
  en: [
    "const sum = (a, b) => a + b;",
    "if (user.isActive) { login(user); }",
    "for (let i = 0; i < arr.length; i++) {",
    "return items.filter(x => x.id > 0);",
    "function greet(name) { return `Hi, ${name}`; }",
    "const [first, ...rest] = list;",
    "await fetch(url).then(r => r.json());",
    "class Player { constructor(n) { this.name = n; } }",
    "export default function App() {}",
    "let count = 0; count += 1;",
    "document.querySelector('#app').innerHTML = html;",
    "const map = new Map([['a', 1], ['b', 2]]);",
    "try { parse(data) } catch (e) { console.error(e); }",
    "arr.reduce((acc, n) => acc + n, 0);",
    "if (x !== null && typeof x === 'object') {}",
  ],
  fa: [
    "const sum = (a, b) => a + b;",
    "if (user.isActive) { login(user); }",
    "for (let i = 0; i < n; i++) {",
    "return items.filter(x => x.id > 0);",
    "function greet(name) { return name; }",
    "const [first, ...rest] = list;",
    "await fetch(url).then(r => r.json());",
    "let count = 0; count += 1;",
    "export default function App() {}",
    "try { parse(data) } catch (e) {}",
  ],
};

/** Speed-reading micro drills — short, punchy lines */
export const SPEED_DRILLS = {
  fa: [
    "سریع بخوان، آرام تایپ کن.",
    "دقت مهم‌تر از سرعت است.",
    "انگشتان را به خانه برگردان.",
    "به صفحه‌کلید نگاه نکن.",
    "نفس بکش و ادامه بده.",
    "هر روز ده دقیقه کافی است.",
  ],
  en: [
    "Read fast, type calmly.",
    "Accuracy beats speed.",
    "Return fingers home.",
    "Do not look at keys.",
    "Breathe and continue.",
    "Ten minutes a day is enough.",
  ],
};

export function pickRandomFrom(arr, n = 1) {
  const pool = [...arr];
  const out = [];
  const k = Math.min(n, pool.length);
  for (let i = 0; i < k; i++) {
    out.push(pool.splice(Math.floor(Math.random() * pool.length), 1)[0]);
  }
  return out;
}
