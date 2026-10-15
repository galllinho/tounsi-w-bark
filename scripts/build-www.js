// Assemble le dossier www/ : la page complète + les contenus + Capacitor en local (l'appli marche hors ligne).
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..'), www = path.join(root, 'www');
fs.rmSync(www, { recursive: true, force: true });
fs.mkdirSync(path.join(www, 'vendor'), { recursive: true });
const body = fs.readFileSync(path.join(root, 'src/app.html'), 'utf8');
const build = parseInt(process.env.GITHUB_RUN_NUMBER || '0', 10);
fs.writeFileSync(path.join(www, 'index.html'),
  '<!doctype html>\n<html lang="fr">\n<head>\n<meta charset="utf-8">\n' +
  '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n' +
  '<meta name="theme-color" content="#1d5aa6">\n<title>Tounsi w Bark</title>\n' +
  '<script src="vendor/capacitor.js"></script>\n<script>window.TWB_BUILD = ' + build + '; window.TWB_GEMINI_KEY = ' + JSON.stringify(process.env.GEMINI_KEY || '') + ';</script>\n' +
  '<style>body{margin:0}[hidden]{display:none!important}</style>\n</head>\n<body>\n' +
  body + '\n</body>\n</html>\n');
for (const f of fs.readdirSync(path.join(root, 'src')).filter(f => f.endsWith('.js')))
  fs.copyFileSync(path.join(root, 'src', f), path.join(www, f));
// Voix enregistrées par la famille (src/audio/<langue>/*) : copiées dans l'appli + index des clés
const index = {}, audioSrc = path.join(root, 'src/audio');
if (fs.existsSync(audioSrc)) for (const lang of fs.readdirSync(audioSrc)) {
  const dir = path.join(audioSrc, lang); if (!fs.statSync(dir).isDirectory()) continue;
  fs.mkdirSync(path.join(www, 'audio', lang), { recursive: true });
  for (const f of fs.readdirSync(dir)) {
    if (f === 'voices.json') continue;
    fs.copyFileSync(path.join(dir, f), path.join(www, 'audio', lang, f));
    index[f.replace(/\.[^.]+$/, '')] = lang + '/' + f;
  }
}
fs.mkdirSync(path.join(www, 'audio'), { recursive: true });
fs.writeFileSync(path.join(www, 'audio', 'index.json'), JSON.stringify(index));
const cap = path.join(root, 'node_modules/@capacitor/core/dist/capacitor.js');
if (fs.existsSync(cap)) fs.copyFileSync(cap, path.join(www, 'vendor', 'capacitor.js'));
else fs.writeFileSync(path.join(www, 'vendor', 'capacitor.js'), '');
console.log('www/ prêt (version ' + build + ', ' + Object.keys(index).length + ' voix enregistrées)');
