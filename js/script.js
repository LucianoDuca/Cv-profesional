// ─── CURSOR ───────────────────────────────
const dot  = document.querySelector('.cursor-dot');
const ring = document.querySelector('.cursor-ring');

if (dot && ring) {
  let rx = 0, ry = 0, tx = 0, ty = 0;

  window.addEventListener('mousemove', e => {
    tx = e.clientX; ty = e.clientY;
    dot.style.left = tx + 'px';
    dot.style.top  = ty + 'px';
  });

  (function loop() {
    rx += (tx - rx) * 0.1;
    ry += (ty - ry) * 0.1;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(loop);
  })();

  document.querySelectorAll('a, button, .proj-row, .stack-col li').forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('on'));
    el.addEventListener('mouseleave', () => ring.classList.remove('on'));
  });
}

// ─── NAV + SCROLL PROGRESS ───────────────
const nav = document.getElementById('nav');
const bar = document.getElementById('progressBar');

window.addEventListener('scroll', () => {
  nav.classList.toggle('stuck', window.scrollY > 20);
  if (bar) {
    const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    bar.style.width = (pct * 100) + '%';
  }
});

// ─── FADE REVEAL ─────────────────────────
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.fade').forEach(el => obs.observe(el));

// ─── MOBILE MENU ─────────────────────────
const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');

if (menuBtn && navMenu) {
  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    navMenu.classList.toggle('open');
  });
  navMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menuBtn.classList.remove('open');
      navMenu.classList.remove('open');
    });
  });
}
