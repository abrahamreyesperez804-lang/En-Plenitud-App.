// Archivo: js/app.js (coloca esta ruta exactamente; crea la carpeta js si no existe)// Simple tab navigation + small behaviors
document.addEventListener('DOMContentLoaded', function(){
  const tabs = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.tab-panel');
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-target');
      // active tab button
      tabs.forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      // show panel
      panels.forEach(p => {
        if(p.id === target){
          p.classList.add('active');
          p.scrollTop = 0;
        } else {
          p.classList.remove('active');
        }
      });
      // update document title lightly
      document.title = `Centro de Rehabilitación — ${btn.textContent}`;
    });
  });
});

// Example contact submit (does not send; placeholder)
function submitContact(e){
  e.preventDefault();
  const f = e.target;
  const name = f.name.value.trim();
  const email = f.email.value.trim();
  const message = f.message.value.trim();
  if(!name || !email || !message){
    alert('Por favor completa todos los campos.');
    return;
  }
  // Fake send
  alert('Gracias ' + name + '! Tu mensaje se ha enviado (simulado).');
  f.reset();
}
