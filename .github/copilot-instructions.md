## Resumen rápido

Pequeña SPA estática para la web de un centro de rehabilitación. No hay bundler ni backend en el repo: la app usa HTML/CSS/JS vanila y se sirve estática.

## Arquitectura y flujo

- Punto de entrada: `index.html` (hash-based navigation).
- Estilos: `styles.css` contiene variables en `:root` y define componentes (header, tabs, galería, lightbox).
- Lógica: el archivo JS principal en este repo es `js_app_Version3.js` (DOM ready, manejo de pestañas, galería, formulario, lightbox).
- No hay build step, tests ni dependencias externas. El README recomienda servir con Live Server o `npx http-server . -c-1`.

Importante: `index.html` referencia `css/styles.css` y `js/app.js`, pero en la copia del repo los archivos están en la raíz (`styles.css`, `js_app_Version3.js`). Un agente debe detectar y corregir esta discrepancia al editar o ejecutar la app (ver "Acciones recomendadas").

## Patrones y convenciones específicas (ejemplos)

- Navegación por pestañas: hash en URL + clases `.tab` / `.active`. Ejemplo: función `activateTab(name)` en `js_app_Version3.js` actualiza `history.replaceState` y hace focus en el encabezado.
- Menú móvil: botón `#btn-menu` controla `main-nav.open` y `aria-expanded`.
- Galería: elementos `.photo` usan `data-src` para la imagen real; el lightbox muestra `#lightbox-img.src = photo.dataset.src`. (archivo: `js_app_Version3.js`, bloque Galería)
- Formulario: `#contact-form` usa validación cliente simple y simula envío con `setTimeout`. No hay integración backend por defecto (action="#").
- Accesibilidad: se usan roles, `aria-*`, gestión de focus y manejo de teclado (Enter/Space) en galería.

## Qué buscar cuando automatices cambios

- Rutas y nombres de archivos: confirmar que `index.html` referencia rutas válidas. Dos opciones válidas:
  - Mover/renombrar archivos para coincidir con `css/styles.css` y `js/app.js`.
  - Actualizar `index.html` para apuntar a `styles.css` y `js_app_Version3.js` según la estructura actual.
  Siempre mantener consistencia entre `link` y `script` en `index.html`.
- Modificaciones DOM-friendly: el JS asume IDs concretos (`#gallery`, `#lightbox`, `#contact-form`, `#btn-menu`, `#main-nav`). Evita renombrarlos sin actualizar el script.
- No introducir módulos ES sin adaptar `index.html` (actualmente no usa `type="module"`).

## Flujos de desarrollo / debug rápidos

- Ejecutar localmente: usar Live Server (VSCode) o:
  - `npx http-server . -c-1` y abrir `http://localhost:8080`.
- Debug: abrir la consola del navegador; puntos clave:
  - Errores de carga (404) por rutas de `css` o `js` (debido al desajuste de nombres) — primera causa frecuente de fallo.
  - Eventos no ligados si el DOM cambia antes de `DOMContentLoaded` (el JS ya usa `DOMContentLoaded`, por lo que las modificaciones tardías deben respetar esto).
- Verificar accesibilidad: foco en `activateTab`, `close-lightbox`, y estado `aria-expanded` del menú.

## Recomendaciones concretas para agentes

- Al preparar un PR pequeño para cambios visuales o de contenido:
  1. Verificar/ajustar rutas en `index.html` o mover archivos para mantener la convención.
  2. Mantener los IDs y clases usados por el script o actualizar el script en el mismo PR.
  3. Probar la página localmente en un navegador antes de finalizar el PR.
- Para añadir una integración de formulario: reemplazar `action="#"` y la simulación en `js_app_Version3.js` por una función que haga fetch a la API y manejar errores; documentar la nueva dependencia.

## Archivos clave para referencia rápida

- `index.html` — estructura, rutas y marcado accesible.
- `js_app_Version3.js` — navegación hash, galería (data-src), formulario (simulación), handlers de teclado.
- `styles.css` — variables en `:root` y estilos responsivos (menu móvil, lightbox).
- `README.md` — instrucciones de uso y despliegue (Live Server / GitHub Pages).

Si algo en estas instrucciones no está claro o quieres que aplique correcciones automáticas (por ejemplo mover/renombrar archivos para que coincidan con `index.html`), dime qué opción prefieres y lo hago en un PR.
