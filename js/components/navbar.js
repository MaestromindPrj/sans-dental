

(function () {
  const navbar      = document.getElementById('navbar');
  const menuToggle  = document.getElementById('menuToggle');
  const closeToggle = document.getElementById('closeToggle');
  const navLinks    = document.getElementById('navLinks');

  function openMenu() {
    if (navLinks) navLinks.classList.add('open');
    document.body.style.overflow = 'hidden';  
  }

  function closeMenu() {
    if (navLinks) navLinks.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', openMenu);
  }
  if (closeToggle) {
    closeToggle.addEventListener('click', closeMenu);
  }

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMenu();
  });

  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 8) {
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.4)';
      } else {
        navbar.style.boxShadow = 'none';
      }
    }, { passive: true });
  }

  const allLinks = document.querySelectorAll('.nav-link');
  allLinks.forEach(link => {
    link.addEventListener('click', function () {
      const parentNav = this.closest('nav');
      if (parentNav) {
        const siblings = parentNav.querySelectorAll('a');
        siblings.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
      }
    });
  });

  // Global Scroll Reveal Observer
  document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.scroll-reveal, .reveal');
    if (reveals.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    reveals.forEach(el => observer.observe(el));
  });
})();
