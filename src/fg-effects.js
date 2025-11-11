// FundingGauge effects: parallax, pulse glow, particles, liquid-glass Start
import './fg-effects.css';

/* ---------- Parallax ---------- */
const root = document.documentElement;
function onMove(e) {
  const x = (e.clientX / window.innerWidth) * 2 - 1;
  const y = (e.clientY / window.innerHeight) * 2 - 1;
  root.style.setProperty('--tiltX', (x * 6).toFixed(3) + 'deg');
  root.style.setProperty('--tiltY', (y * -6).toFixed(3) + 'deg');
}
window.addEventListener('pointermove', onMove, { passive: true });

/* ---------- Pulse glow ---------- */
function raf(t) {
  const k = 0.6 + 0.4 * Math.sin(t / 600);
  root.style.setProperty('--pulse', k.toFixed(3));
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

/* ---------- Particle system ---------- */
const STAR_LIMIT = 150;
let canvas = document.getElementById('fg-stars');
if (!canvas) {
  canvas = Object.assign(document.createElement('canvas'), { id: 'fg-stars' });
  document.body.appendChild(canvas);
}
const ctx = canvas.getContext('2d', { alpha: true });
const DPR = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
function resize() {
  canvas.width = Math.floor(innerWidth * DPR);
  canvas.height = Math.floor(innerHeight * DPR);
}
addEventListener('resize', resize);
resize();

const stars = new Array(STAR_LIMIT).fill(0).map(() => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: (0.6 + Math.random() * 1.8) * DPR,
  vx: (Math.random() * 0.4 - 0.2) * DPR,
  vy: (Math.random() * 0.4 - 0.2) * DPR,
  a: 0
}));

let speedBoost = 1;
addEventListener('pointerdown', () => (speedBoost = 1.8));
addEventListener('pointerup', () => (speedBoost = 1));

function step() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.save();
  ctx.globalCompositeOperation = 'lighter';
  for (const s of stars) {
    s.x += s.vx * speedBoost;
    s.y += s.vy * speedBoost;
    if (s.x < -5) s.x = canvas.width + 5;
    if (s.x > canvas.width + 5) s.x = -5;
    if (s.y < -5) s.y = canvas.height + 5;
    if (s.y > canvas.height + 5) s.y = -5;

    s.a += 0.02;
    const flicker = 0.7 + 0.3 * Math.sin(s.a + performance.now() / 900);
    const neon = getComputedStyle(root).getPropertyValue('--fg-accent').trim() || '#28f0a0';
    ctx.fillStyle = hexToRgba(neon, 0.35 * flicker);
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
  requestAnimationFrame(step);
}
requestAnimationFrame(step);

function hexToRgba(hex, a) {
  const h = hex.replace('#', '');
  const b =
    h.length === 3
      ? h.split('').map((c) => parseInt(c + c, 16))
      : [h.slice(0, 2), h.slice(2, 4), h.slice(4, 6)].map((x) => parseInt(x, 16));
  return `rgba(${b[0]},${b[1]},${b[2]},${a})`;
}

/* ---------- Liquid Start button ---------- */
function ensureStartButton() {
  const host = document.querySelector('.gauge,[data-gauge]') || document.body;
  if (document.querySelector('.fg-start')) return;
  const btn = document.createElement('button');
  btn.className = 'fg-start';
  btn.setAttribute('aria-label', 'Start');
  btn.innerHTML = '<span class="fg-start__inner">START</span>';
  host.appendChild(btn);

  btn.addEventListener('click', () => {
    const ev = new CustomEvent('fundinggauge:start', { bubbles: true });
    btn.dispatchEvent(ev);
  });
}
document.addEventListener('DOMContentLoaded', ensureStartButton);