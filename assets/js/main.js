// ── Component loader ──────────────────────────────────────────
// Determines the root path relative to current page depth
function getRootPath() {
  const depth = window.location.pathname.split('/').filter(Boolean).length;
  // On GitHub Pages with custom domain, root pages have depth 0-1
  // Subpages (blog/, services/, training/) have depth 2
  if (depth >= 2) return '../../';
  return '/';
}

function loadComponent(id, file) {
  const root = getRootPath();
  const el = document.getElementById(id);
  if (!el) return;
  fetch(root + 'components/' + file)
    .then(r => r.text())
    .then(html => {
      el.innerHTML = html;
      // After header loads, wire up hamburger + scroll + active link
      if (id === 'site-header') initNav();
    })
    .catch(() => {
      // Fallback: try from root
      fetch('/components/' + file)
        .then(r => r.text())
        .then(html => {
          el.innerHTML = html;
          if (id === 'site-header') initNav();
        });
    });
}

function initNav() {
  // Hamburger toggle
  const hb = document.getElementById('hb');
  const nl = document.getElementById('nl');
  if (hb && nl) {
    hb.addEventListener('click', () => nl.classList.toggle('open'));
    hb.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') nl.classList.toggle('open');
    });
  }

  // Shrink nav on scroll
  const nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.style.padding = window.scrollY > 60 ? '0.85rem 2.5rem' : '1.4rem 2.5rem';
    });
  }

  // Active link highlight
  const path = window.location.pathname;
  document.querySelectorAll('#nl a').forEach(a => {
    const href = a.getAttribute('href');
    if (!href) return;
    // Match exact page or section
    const page = href.split('/').pop().split('#')[0];
    const current = path.split('/').pop() || 'index.html';
    if (page === current || (current === '' && page === 'index.html')) {
      a.classList.add('active');
    }
  });
}

// ── Google Analytics ──────────────────────────────────────────
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-20WG4S5HZG');

// ── Boot ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  loadComponent('site-header', 'header.html');
  loadComponent('site-footer', 'footer.html');
});
