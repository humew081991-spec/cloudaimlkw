// Shared navigation behaviour
(function(){
  // Shrink nav on scroll
  const nav = document.getElementById('nav');
  if(nav){
    window.addEventListener('scroll', () => {
      nav.style.padding = window.scrollY > 60
        ? '0.85rem 2.5rem'
        : '1.4rem 2.5rem';
    });
  }
  // Hamburger
  const hb = document.getElementById('hb');
  const nl = document.getElementById('nl');
  if(hb && nl){
    hb.addEventListener('click', () => nl.classList.toggle('open'));
    hb.addEventListener('keydown', e => {
      if(e.key==='Enter'||e.key===' ') nl.classList.toggle('open');
    });
  }
  // Active nav link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href').split('/').pop().split('#')[0];
    if(href === path) a.classList.add('active');
  });
})();
