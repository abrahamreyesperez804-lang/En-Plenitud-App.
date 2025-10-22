// Navegación de pestañas, menú móvil, galería y formulario simple
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('[data-tab]');
  const sections = document.querySelectorAll('.tab');
  const menuBtn = document.getElementById('btn-menu');
  const mainNav = document.getElementById('main-nav');

  // Activar pestaña por enlace
  function activateTab(name){
    sections.forEach(s => s.classList.toggle('active', s.id === name));
    history.replaceState(null, '', '#' + name);
    const heading = document.querySelector(`#${name} [id^="tab-"]`);
    if (heading) heading.focus();
  }

  tabs.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const t = link.getAttribute('data-tab');
      activateTab(t);
      if (mainNav.classList.contains('open')) {
        mainNav.classList.remove('open');
        menuBtn.setAttribute('aria-expanded','false');
      }
    });
  });

  const initial = location.hash ? location.hash.substring(1) : 'inicio';
  activateTab(initial);

  // Menu móvil
  menuBtn.addEventListener('click', () => {
    const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', String(!expanded));
    mainNav.classList.toggle('open');
  });

  // Galería: abrir lightbox
  const gallery = document.getElementById('gallery');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeLb = document.getElementById('close-lightbox');

  if (gallery){
    gallery.addEventListener('click', (e) => {
      const photo = e.target.closest('.photo');
      if (!photo) return;
      const src = photo.dataset.src;
      if (src){
        lightboxImg.src = src;
        lightbox.hidden = false;
        closeLb.focus();
      }
    });

    gallery.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        e.target.click();
      }
    });
  }

  closeLb.addEventListener('click', () => {
    lightbox.hidden = true;
    lightboxImg.src = '';
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.hidden = true;
      lightboxImg.src = '';
    }
  });

  // Formulario: validación simple y simulación de envío
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (form){
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const name = formData.get('name')?.trim();
      const email = formData.get('email')?.trim();
      const message = formData.get('message')?.trim();

      if (!name || !email || !message) {
        status.textContent = 'Por favor completa todos los campos.';
        status.style.color = 'crimson';
        return;
      }

      status.textContent = 'Enviando...';
      status.style.color = 'var(--muted)';
      setTimeout(() => {
        status.textContent = 'Mensaje enviado. Gracias, nos pondremos en contacto pronto.';
        status.style.color = 'green';
        form.reset();
      }, 900);
    });
  }

  // Año en footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
