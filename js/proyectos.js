// ─── GALLERY + LIGHTBOX ───────────────────────────

(function () {
  // Recopila todas las imágenes de una galería en orden
  function getGalleryImages(gallery) {
    return Array.from(gallery.querySelectorAll('.pp-gi img'));
  }

  // Inyecta el texto "+N" en el badge del último thumbnail visible
  function setBadge(gallery) {
    const hidden = gallery.querySelectorAll('.pp-gi--hidden').length;
    const moreEl = gallery.querySelector('.pp-gi--more .pp-gi-overlay span');
    if (moreEl && hidden > 0) moreEl.textContent = '+' + hidden;
  }

  // ── Lightbox state ──
  let lbImages = [];
  let lbIndex  = 0;

  const lb     = document.getElementById('ppLightbox');
  const lbImg  = document.getElementById('ppLbImg');
  const lbCtr  = document.getElementById('ppLbCounter');
  const lbClose = document.getElementById('ppLbClose');
  const lbPrev  = document.getElementById('ppLbPrev');
  const lbNext  = document.getElementById('ppLbNext');

  function openLightbox(images, startIndex) {
    lbImages = images;
    lbIndex  = startIndex;
    lb.classList.add('is-open');
    lb.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    showImage(lbIndex);
  }

  function closeLightbox() {
    lb.classList.remove('is-open');
    lb.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    lbImg.src = '';
  }

  function showImage(i) {
    lbIndex = ((i % lbImages.length) + lbImages.length) % lbImages.length;
    lbImg.classList.add('is-loading');
    const target = lbImages[lbIndex];
    const tmp = new Image();
    tmp.onload = function () {
      lbImg.src    = target.src;
      lbImg.alt    = target.alt;
      lbImg.classList.remove('is-loading');
    };
    tmp.src = target.src;
    lbCtr.textContent = (lbIndex + 1) + ' / ' + lbImages.length;
    // Mostrar/ocultar flechas
    lbPrev.style.display = lbImages.length > 1 ? '' : 'none';
    lbNext.style.display = lbImages.length > 1 ? '' : 'none';
  }

  // ── Bind gallery clicks ──
  document.querySelectorAll('.pp-gallery').forEach(function (gallery) {
    if (gallery.classList.contains('pp-gallery--soon')) return;

    setBadge(gallery);

    const images = getGalleryImages(gallery);

    gallery.querySelectorAll('.pp-gi:not(.pp-gi--hidden)').forEach(function (gi) {
      gi.addEventListener('click', function () {
        const idx = parseInt(gi.dataset.index, 10) || 0;
        openLightbox(images, idx);
      });
    });
  });

  // ── Lightbox controls ──
  if (lbClose) lbClose.addEventListener('click', closeLightbox);
  if (lbPrev)  lbPrev.addEventListener('click', function () { showImage(lbIndex - 1); });
  if (lbNext)  lbNext.addEventListener('click', function () { showImage(lbIndex + 1); });

  // Click en fondo cierra
  lb.addEventListener('click', function (e) {
    if (e.target === lb) closeLightbox();
  });

  // Teclado
  document.addEventListener('keydown', function (e) {
    if (!lb.classList.contains('is-open')) return;
    if (e.key === 'Escape')      closeLightbox();
    if (e.key === 'ArrowLeft')   showImage(lbIndex - 1);
    if (e.key === 'ArrowRight')  showImage(lbIndex + 1);
  });
})();
