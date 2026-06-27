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
(function() {
  // Inject GA script tag if not already present
  if (!document.querySelector('script[src*="googletagmanager"]')) {
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=G-20WG4S5HZG';
    document.head.appendChild(s);
  }
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', 'G-20WG4S5HZG');
})();

// ── Boot ──────────────────────────────────────────────────────

// ── Conversion tracking ───────────────────────────────────────
function initConversionTracking() {
  document.querySelectorAll('a[href*="contact"]').forEach(function(el) {
    var label = el.textContent.trim().toLowerCase();
    if (label.includes('enquir') || label.includes('assess') || label.includes('touch') || label.includes('discuss')) {
      el.addEventListener('click', function() {
        if (typeof gtag !== 'undefined') {
          gtag('event', 'generate_lead', {
            'event_category': 'cta',
            'event_label': label.substring(0, 40)
          });
        }
      });
    }
  });
}


// ── Production-grade nav controller ──────────────────────────
function initMobileDropdowns() {
  var items = document.querySelectorAll('.has-dropdown');

  items.forEach(function(li) {
    var link = li.querySelector('a');

    // Mobile: click toggles open/close
    link.addEventListener('click', function(e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        var isOpen = li.classList.contains('open');
        // Close all others first
        items.forEach(function(other) { other.classList.remove('open'); });
        if (!isOpen) li.classList.add('open');
      }
    });

    // ESC closes dropdown (desktop + mobile)
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        items.forEach(function(i) { i.classList.remove('open'); });
        link.blur();
      }
    });
  });

  // Click outside closes all dropdowns
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.has-dropdown')) {
      items.forEach(function(i) { i.classList.remove('open'); });
    }
  });

  // Close dropdowns on resize to desktop
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      items.forEach(function(i) { i.classList.remove('open'); });
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  loadComponent('site-header', 'header.html');
  loadComponent('site-footer', 'footer.html');
  initConversionTracking();
  initMobileDropdowns();
});
