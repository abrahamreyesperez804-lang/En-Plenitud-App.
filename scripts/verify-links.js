const fs = require('fs');
const path = require('path');
let html = fs.readFileSync(path.resolve(__dirname, '..', 'index.html'), 'utf8');
// Remove HTML comments to avoid false positives like: <!-- Reemplaza estos bloques por <img src="ruta"> -->
html = html.replace(/<!--([\s\S]*?)-->/g, '');
const hrefRegex = /href=["']([^"']+)["']/g;
const srcRegex = /src=["']([^"']+)["']/g;
const dataSrcRegex = /data-src=["']([^"']+)["']/g;

function findMatches(re){
  const res = [];
  let m;
  while ((m = re.exec(html)) !== null){
    res.push(m[1]);
  }
  return res;
}

const hrefs = findMatches(hrefRegex);
const srcs = findMatches(srcRegex);
const dataSrcs = findMatches(dataSrcRegex);

const all = [...hrefs, ...srcs, ...dataSrcs].filter(Boolean);
const missing = [];

all.forEach(rel => {
  // ignore external links and anchors
  if (/^(https?:|mailto:|#)/.test(rel)) return;
  const target = path.resolve(__dirname, '..', rel);
  if (!fs.existsSync(target)) missing.push(rel);
});

if (missing.length){
  console.error('Enlaces faltantes detectados:');
  missing.forEach(m => console.error('  -', m));
  process.exitCode = 2;
} else {
  console.log('OK — Todos los archivos referenciados existen.');
}
