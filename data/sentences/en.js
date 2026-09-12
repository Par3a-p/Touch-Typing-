/** Free-practice sentence banks (English) — expanded */

export const EN_SENTENCES = {
  easy: [
    "The cat sat on the mat.",
    "A dog ran to the park.",
    "She can type very fast.",
    "He likes green apples.",
    "We go home at five.",
    "The sun is very warm.",
    "I see a big red bus.",
    "They play in the yard.",
    "My bag is on the desk.",
    "Please open the door.",
    "Birds fly in the sky.",
    "Water is clear and cold.",
    "I read a short book.",
    "The door is open now.",
    "She writes every day.",
  ],
  medium: [
    "Practice makes perfect, but only if you focus on accuracy first.",
    "The keyboard is your instrument; learn every key without looking.",
    "Good typists keep their wrists floating and fingers curved.",
    "Speed follows accuracy — never the other way around.",
    "Set aside ten quiet minutes each day for deliberate practice.",
    "The quick brown fox jumps over the lazy dog near the river.",
    "Reading the text aloud in your head can help you type smoothly.",
    "Errors are feedback, not failures; correct them and keep going.",
    "Touch typing frees your eyes for the screen, not the keys.",
    "Consistency beats intensity when building muscle memory.",
    "Keep your shoulders relaxed and your back straight while typing.",
    "If your hands get tired, shake them out for a few seconds.",
    "Typing real sentences is more effective than random letter drills.",
    "True speed comes when accuracy stays above ninety-five percent.",
    "Ten focused minutes a day beats one exhausting hour once a week.",
  ],
  hard: [
    "In 2023, researchers found that deliberate practice improved typing speed by an average of 27% over eight weeks.",
    "Modern keyboards still follow the QWERTY layout designed in the 1870s for mechanical typewriters — a compromise between jamming prevention and finger travel.",
    "Professional transcribers often sustain 80–100 WPM with accuracy above 98%, using specialized key mappings and years of targeted drills.",
    "When you type, your brain predicts the next keystroke; slow typists wait for visual confirmation, while experts rely on proprioception and pattern recognition.",
    "The home row is the anchor: F and J carry tactile bumps so your index fingers can re-center without looking, even after a long reach to the number row.",
    "In 2024, more than 60% of knowledge workers said typing speed affected their daily productivity.",
    "The best keyboard layouts minimize finger travel; QWERTY was designed for typewriters, not modern efficiency — yet it remains the global standard.",
    "Practice tip: set a timer for 5 minutes, type a paragraph you enjoy, and note your WPM and accuracy. Compare tomorrow's numbers with today's.",
    "Learning touch typing is like learning to ride a bicycle: it feels awkward at first, but once it clicks, the skill stays with you forever.",
    "To increase speed, first fix bad habits — typing fast with incorrect finger placement is a path to a permanent plateau.",
  ],
  words: [
    "the", "be", "to", "of", "and", "a", "in", "that", "have", "I",
    "it", "for", "not", "on", "with", "he", "as", "you", "do", "at",
    "this", "but", "his", "by", "from", "they", "we", "say", "her", "she",
    "or", "an", "will", "my", "one", "all", "would", "there", "their", "what",
    "so", "up", "out", "if", "about", "who", "get", "which", "go", "me",
    "when", "make", "can", "like", "time", "no", "just", "him", "know", "take",
    "people", "into", "year", "your", "good", "some", "could", "them", "see", "other",
    "than", "then", "now", "look", "only", "come", "its", "over", "think", "also",
    "keyboard", "typing", "practice", "accuracy", "speed", "finger", "lesson", "master",
  ],
};

export function pickRandom(arr, count = 5) {
  const pool = [...arr];
  const out = [];
  const n = Math.min(count, pool.length);
  for (let i = 0; i < n; i++) {
    const idx = Math.floor(Math.random() * pool.length);
    out.push(pool.splice(idx, 1)[0]);
  }
  return out;
}
