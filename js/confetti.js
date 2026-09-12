/** Lightweight canvas confetti for stage-pass celebrations */

export function burstConfetti(canvas, { duration = 1800, count = 90 } = {}) {
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const dpr = window.devicePixelRatio || 1;
  const w = canvas.clientWidth || 320;
  const h = canvas.clientHeight || 200;
  canvas.width = w * dpr;
  canvas.height = h * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  const colors = ["#2dd4bf", "#34d399", "#fbbf24", "#818cf8", "#f472b6", "#60a5fa", "#e879f9"];
  const parts = [];
  for (let i = 0; i < count; i++) {
    parts.push({
      x: w * 0.5 + (Math.random() - 0.5) * w * 0.4,
      y: h * 0.35 + (Math.random() - 0.5) * 20,
      vx: (Math.random() - 0.5) * 8,
      vy: -Math.random() * 7 - 2,
      g: 0.14 + Math.random() * 0.08,
      size: 4 + Math.random() * 5,
      color: colors[i % colors.length],
      rot: Math.random() * Math.PI,
      vr: (Math.random() - 0.5) * 0.3,
      life: 1,
    });
  }

  const t0 = performance.now();
  function frame(now) {
    const elapsed = now - t0;
    ctx.clearRect(0, 0, w, h);
    for (const p of parts) {
      p.vy += p.g;
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.vr;
      p.life = Math.max(0, 1 - elapsed / duration);
      if (p.life <= 0) continue;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.globalAlpha = p.life;
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      ctx.restore();
    }
    if (elapsed < duration) requestAnimationFrame(frame);
    else ctx.clearRect(0, 0, w, h);
  }
  requestAnimationFrame(frame);
}
