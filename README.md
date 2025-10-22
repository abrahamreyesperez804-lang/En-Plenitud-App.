# En-Plenitud-App.
Centro de rehabilitación — tratamiento en adicciones

![CI](https://github.com/abrahamreyesperez804-lang/En-Plenitud-App./actions/workflows/check-links.yml/badge.svg)

## Resumen

Pequeña SPA estática (HTML/CSS/JS) pensada para mostrar la web de un centro de rehabilitación. Archivos principales:

- `index.html`
- `styles.css`
- `js_app_Version3.js`

## Release v0.1.0

Primera versión publicada con comprobaciones automáticas de accesibilidad (Pa11y + axe-core), verificación de enlaces y placeholder SVG para la galería. El tag `v0.1.0` está disponible en el repositorio.

## Cómo usar (local)

1. Clona el repositorio o descarga los archivos en una carpeta:

   /index.html
   /styles.css
   /js_app_Version3.js

   Nota: antiguamente el proyecto usaba las rutas `css/styles.css` y `js/app.js`. La copia actual mantiene los archivos en la raíz (`styles.css` y `js_app_Version3.js`). Si prefieres la convención `css/` y `js/`, mueve/renombra los archivos o actualiza `index.html`.

2. Abrir localmente:

   - Puedes abrir `index.html` directamente en el navegador (doble clic).
   - Para desarrollo con servidor (recomendado):

```bash
npx http-server . -c-1
# luego abrir http://localhost:8080
```

3. Publicar en GitHub Pages:

   - Crea un repositorio en GitHub y sube los archivos al branch `main` (o `gh-pages`).
   - En el repositorio > Settings > Pages, selecciona la rama a publicar.
   - La URL resultante será similar a: `https://<usuario>.github.io/<repo>`.

## Personalizaciones recomendadas

- Cambia textos, logos y colores en `styles.css` (variables en `:root`).
- Sustituye las fotos de la galería por imágenes reales (usa `<img>` o actualiza `data-src`).
- Para enviar formularios realmente conecta el formulario a un servicio (Formspree, Netlify Forms) o a tu backend.

## Comprobaciones automáticas (desarrolladores)

En el repositorio hay scripts y workflows para comprobaciones locales y en CI:

- Comprobar referencias (href/src/data-src):

```bash
npm run check-links
```

- Validación HTML (html-validate):

```bash
npm run lint:html
```

- Ejecutar pruebas de accesibilidad (axe + pa11y) localmente:

```bash
npm run a11y
# o
npm run a11y:axe
```

Los comandos anteriores están enlazados a los scripts definidos en `package.json`.

## Notas

- Si el badge CI no se muestra correctamente revisa la ruta del workflow en `.github/workflows/check-links.yml`.
- El repositorio incluye scripts en `scripts/` para verificación local y generación de informes de accesibilidad.
