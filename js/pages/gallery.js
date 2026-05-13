
(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.gallery-item img');

    items.forEach((img) => {
      img.addEventListener('click', () => {
        const overlay = document.createElement('div');
        overlay.style.cssText = `
          position: fixed; inset: 0;
          background: rgba(0,0,0,0.88);
          display: flex; align-items: center; justify-content: center;
          z-index: 9999; cursor: zoom-out;
          animation: fadeInOverlay 0.2s ease;
        `;

        const style = document.createElement('style');
        style.textContent = `@keyframes fadeInOverlay { from { opacity:0 } to { opacity:1 } }`;
        overlay.appendChild(style);

        const clone = document.createElement('img');
        clone.src = img.src;
        clone.alt = img.alt;
        clone.style.cssText = `
          max-width: 90vw; max-height: 90vh;
          object-fit: contain;
          border-radius: 4px;
          box-shadow: 0 24px 60px rgba(0,0,0,0.6);
        `;

        overlay.appendChild(clone);
        document.body.appendChild(overlay);

        overlay.addEventListener('click', () => overlay.remove());

        const onKey = (e) => {
          if (e.key === 'Escape') { overlay.remove(); document.removeEventListener('keydown', onKey); }
        };
        document.addEventListener('keydown', onKey);
      });
    });
  });
})();
