// Importe un fichier « voix-….json » envoyé depuis le Studio famille de l'appli.
// Usage : node scripts/import-voices.js chemin/vers/voix-kab-maman-….json
// Chaque phrase devient src/audio/<langue>/<clé>.<ext>, et src/audio/<langue>/voices.json garde le texte et la voix.
const fs = require('fs'), path = require('path');
const file = process.argv[2];
if (!file) { console.error('Donne le fichier .json à importer'); process.exit(1); }
const data = JSON.parse(fs.readFileSync(file, 'utf8'));
if (data.format !== 'twb-voices-1') { console.error('Ce fichier ne vient pas du Studio famille'); process.exit(1); }
const dir = path.join(__dirname, '..', 'src', 'audio', data.lang);
fs.mkdirSync(dir, { recursive: true });
const metaPath = path.join(dir, 'voices.json');
const meta = fs.existsSync(metaPath) ? JSON.parse(fs.readFileSync(metaPath, 'utf8')) : {};
let n = 0;
for (const it of data.items) {
  if (!/^[a-z]+_[0-9a-z]+$/.test(it.key)) continue;
  const ext = /mp4|aac/.test(it.mime) ? 'm4a' : /ogg/.test(it.mime) ? 'ogg' : 'webm';
  for (const old of fs.readdirSync(dir)) if (old.startsWith(it.key + '.')) fs.unlinkSync(path.join(dir, old));
  fs.writeFileSync(path.join(dir, it.key + '.' + ext), Buffer.from(it.data, 'base64'));
  meta[it.key] = { text: it.text, tn: it.tn, fr: it.fr, voice: data.voice, date: data.date };
  n++;
}
fs.writeFileSync(metaPath, JSON.stringify(meta, null, 1));
console.log(n + ' voix importées dans ' + path.relative(process.cwd(), dir));
