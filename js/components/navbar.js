

(function () {
  const navbar      = document.getElementById('navbar');
  const menuToggle  = document.getElementById('menuToggle');
  const closeToggle = document.getElementById('closeToggle');
  const navLinks    = document.getElementById('navLinks');


  function openMenu() {
    navLinks.classList.add('open');
    document.body.style.overflow = 'hidden';  
  }

  function closeMenu() {
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
  }


  menuToggle.addEventListener('click', openMenu);
  if (closeToggle) {
    closeToggle.addEventListener('click', closeMenu);
  }

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });


  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMenu();
  });


  window.addEventListener('scroll', () => {
    if (window.scrollY > 8) {
      navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.4)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  }, { passive: true });


  const allLinks = document.querySelectorAll('.nav-link');
  allLinks.forEach(link => {
    link.addEventListener('click', function () {
   
      const siblings = this.closest('nav').querySelectorAll('a');
      siblings.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });
})();
