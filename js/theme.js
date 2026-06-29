// ─── THEME TOGGLE ─────────────────────────────────
(function () {
  const html = document.documentElement;
  const btn  = document.getElementById('themeBtn');

  function isDark() {
    return html.getAttribute('data-theme') === 'dark';
  }

  function applyTheme(dark) {
    html.setAttribute('data-theme', dark ? 'dark' : 'light');
    localStorage.setItem('theme', dark ? 'dark' : 'light');
    if (btn) btn.classList.toggle('is-dark', dark);
  }

  // Sync button with current state (set by the anti-FOUC inline script in <head>)
  if (btn) btn.classList.toggle('is-dark', isDark());

  if (btn) {
    btn.addEventListener('click', () => applyTheme(!isDark()));
  }
})();
