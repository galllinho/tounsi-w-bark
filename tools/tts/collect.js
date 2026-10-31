// Liste toutes les phrases (écriture arabe) qu'un pack de langue peut prononcer, garçon et fille,
// et garde celles qui n'ont pas encore de voix (ni voix de la famille dans src/audio/<langue>, ni voix IA dans src/audio/<langue>-ia).
// Usage : node tools/tts/collect.js dossier_sortie nombre_de_lots [langue]   (langue : tn par défaut, dz…)
// Écrit lot-0.json … lot-N.json et affiche la liste des lots non vides (JSON) pour la matrice GitHub.
const fs = require('fs'), vm = require('vm'), path = require('path');
const root = path.join(__dirname, '..', '..');
const [out = 'lots', nb = '6', lang = 'tn', limit = '0'] = process.argv.slice(2);
const ctx = { window: {} }; vm.createContext(ctx);
for (const f of ['content.js', 'content-tn-more.js', 'content-script.js', 'content-dz.js', 'content-dz-more.js']) vm.runInContext(fs.readFileSync(path.join(root, 'src', f), 'utf8'), ctx);
const W = ctx.window, AR = /[؀-ۿ]/, all = new Map();
// Mêmes remplacements que fill() dans src/app.html, pour un garçon (f = false) puis une fille (f = true)
const G = (s, f) => String(s).replace(/\{g:([^|{}]*)\|([^{}]*)\}/g, (m, a, b) => f ? b : a).replace(/\{petitAr\}/g, f ? 'بنتي' : 'وليدي').replace(/\{jayAr\}/g, f ? 'جاية' : 'جاي')
  .replace(/\{mechiAr\}/g, f ? 'ماشية' : 'ماشي').replace(/\{tounsiAr\}/g, f ? 'تونسية' : 'تونسي').replace(/\{jdidAr\}/g, f ? 'جديدة' : 'جديد')
  .replace(/\{khouyaAr\}/g, f ? 'أختي' : 'خويا').replace(/\{asliAr\}/g, f ? 'أصليّة' : 'أصلي').replace(/\{taalAr\}/g, f ? 'تعالي' : 'تعال')
  .replace(/\{cousinAr\}/g, f ? 'كوزينة' : 'كوزان');
const vnorm = t => String(t).toLowerCase().replace(/[\s.,!?;:…'’"«»()\-–—،؟]/g, '');
const vkey = t => { let h = 5381; const s = vnorm(t); for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) >>> 0; return lang + '_' + h.toString(36); };
function add(s){
  if (typeof s !== 'string' || !AR.test(s) || /\{prenom/.test(s)) return;
  for (const f of [false, true]) { const t = G(s, f); if (/\{/.test(t)) throw new Error('Remplacement manquant : ' + t); all.set(vkey(t), t); }
}
function walk(o, key){
  if (o == null) return;
  if (typeof o === 'string') { if (key === 'ar') add(o); return; }
  if (Array.isArray(o)) return o.forEach(x => walk(x, key));
  if (typeof o === 'object') for (const k in o) walk(o[k], k);
}
const P = W.TWB_CONTENT[lang]; if (!P) throw new Error('Pack inconnu : ' + lang);
walk(P.levels); walk(P.chat); walk(P.lines);
if (lang === 'tn') { walk(W.TWB_CHAT); walk(W.TWB_KHALTI); }
if (P.script) { Object.values(P.script.letters).forEach(l => add(l.ex[0])); (P.script.extraWords || []).forEach(w => add(w[0])); }
const have = new Set();
for (const d of [lang, lang + '-ia']) { const p = path.join(root, 'src', 'audio', d); if (fs.existsSync(p)) fs.readdirSync(p).forEach(f => have.add(f.replace(/\.[^.]+$/, ''))); }
let todo = [...all].filter(([k]) => !have.has(k)).map(([key, text]) => ({ key, text }));
if (+limit) todo = todo.slice(0, +limit);   // pour un test : seulement les N premières phrases
fs.mkdirSync(out, { recursive: true });
const n = Math.max(1, parseInt(nb, 10)), lots = [];
for (let i = 0; i < n; i++) { const part = todo.filter((_, j) => j % n === i); if (part.length) { fs.writeFileSync(path.join(out, 'lot-' + i + '.json'), JSON.stringify(part, null, 1)); lots.push(i); } }
console.error(all.size + ' phrases au total, ' + (all.size - todo.length) + ' ont déjà une voix, ' + todo.length + ' à générer');
console.log(JSON.stringify(lots));
