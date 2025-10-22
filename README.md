# En-Plenitud-App.
Centro De Rehabilitación Tratamiento En Adicciones
[README-web_Version4.md](https://github.com/user-attachments/files/23020352/README-web_Version4.md)
```markdown
# Centro de Rehabilitación — Web (7 pestañas)

Contenido:
- index.html
- css/styles.css
- js/app.js

Cómo usar (local):
1) Crea una carpeta para la web y copia los archivos arriba en la estructura:
   /index.html
   /css/styles.css
   /js/app.js

2) Abre index.html en tu navegador: doble clic o arrastra al navegador. No requiere servidor para funcionar (SPA simple).
   Para desarrollo con servidor (mejor experiencia):
   - Usa Live Server (VSCode) o:
     npx http-server . -c-1
   y abre http://localhost:8080

3) Para publicar en GitHub Pages:
   - Crea repo (o usa uno existente).
   - Sube los archivos al branch main (o gh-pages).
   - En GitHub repo > Settings > Pages, configura la rama para publicar.
   - La página estará disponible en https://<tu-usuario>.github.io/<tu-repo>.

Personalizaciones recomendadas:
- Cambia textos, logos, colores en css/styles.css (variables :root).
- Reemplaza las fotos de la galería por imágenes reales (sustituye los div.photo por <img>).
- Si deseas formularios funcionales conecta a un servicio (Formspree, Netlify Forms, o tu backend).

Verificador de enlaces
----------------------

Se añadió un script de verificación que comprueba que los archivos referenciados en `index.html` existen (href, src, data-src). Úsalo desde la raíz del proyecto:

```bash
npm run check-links
```

El comando imprimirá los archivos faltantes o `OK` si todas las referencias existen.
