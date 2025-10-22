## Contribuir

Antes de abrir un PR, por favor ejecuta las comprobaciones locales para evitar fallos en CI.

Checks recomendados (desde la raíz del repo):

- Verificar que las rutas referenciadas existen:

```bash
npm run check-links
```

- Validar HTML básico:

```bash
npm run lint:html
```

- Ejecutar comprobaciones de calidad incluidas (simples):

```bash
npm run quality-checks
```

- Comprobación de accesibilidad (requiere librerías del sistema para Puppeteer):

```bash
# en una terminal, arrancar servidor estático
npm run start
# en otra terminal
npm run a11y
```

Notas:
- El workflow de CI (`.github/workflows/check-links.yml`) ejecuta `check-links` y `quality-checks` y prepara las dependencias de sistema necesarias para `pa11y`.
- Si añades nuevas imágenes u assets, súbelos a la carpeta `images/` y confirma que `index.html` las referencia correctamente.

Gracias por las contribuciones — haz un PR a `main` cuando todo pase localmente.
