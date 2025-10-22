const fs = require('fs');
const path = require('path');

const htmlPath = path.resolve(__dirname, '..', 'index.html');
let html = fs.readFileSync(htmlPath, 'utf8');
// Remove HTML comments to avoid false positives (e.g. <!-- <img src="ruta"> -->)
html = html.replace(/<!--([\s\S]*?)-->/g, '');

let errors = [];

// 1) Check all <img> have alt attributes
const imgRegex = /<img\s+([^>]+)>/gi;
let m;
while ((m = imgRegex.exec(html)) !== null) {
  const attrs = m[1];
  const hasAlt = /alt\s*=\s*['"][^'"]+['"]/.test(attrs);
  if (!hasAlt) {
    errors.push('Imagen sin atributo alt detectada: ' + m[0].slice(0, 120));
  }
}

// 2) Disallow inline style attributes
if (/style\s*=\s*"[^"]*"|style\s*=\s*'[^']*'/.test(html)) {
  errors.push('Se detectaron atributos inline `style=` — prefer CSS en `styles.css`.');
}

// 3) Basic check: ensure <title> exists
if (!/<title>[^<]+<\/title>/i.test(html)) {
  errors.push('Falta la etiqueta <title> en el <head>.');
}

if (errors.length) {
  console.error('Quality checks fallaron:');
  errors.forEach(e => console.error('  -', e));
  process.exitCode = 2;
} else {
  console.log('OK — Quality checks passed.');
}
