
(function () {
  const items = document.querySelectorAll('.scroll-reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  items.forEach(el => observer.observe(el));
})();


(function () {
  const track   = document.getElementById('testiTrack');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  if (!track) return;

  let idx = 0;

  function visibleCount() {
    const w = window.innerWidth;
    if (w <= 480)  return 1;
    if (w <= 768)  return 1;
    if (w <= 1024) return 2;
    return 3;
  }

  function cardPx() {
    const n   = visibleCount();
    const gap = 16;
    return (track.parentElement.offsetWidth - gap * (n - 1)) / n;
  }

  function render() {
    const cards = track.querySelectorAll('.testi-card');
    const n     = visibleCount();
    const max   = Math.max(0, cards.length - n);
    idx = Math.min(idx, max);

    const w = cardPx();
    cards.forEach(c => { c.style.flex = `0 0 ${w}px`; c.style.minWidth = `${w}px`; });

    track.style.transform = `translateX(-${idx * (w + 16)}px)`;

    prevBtn.style.opacity = idx === 0   ? '0.35' : '1';
    nextBtn.style.opacity = idx >= max  ? '0.35' : '1';
  }

  prevBtn.addEventListener('click', () => { if (idx > 0) { idx--; render(); } });
  nextBtn.addEventListener('click', () => {
    const max = Math.max(0, track.querySelectorAll('.testi-card').length - visibleCount());
    if (idx < max) { idx++; render(); }
  });

  window.addEventListener('resize', render, { passive: true });
  render();
})();

