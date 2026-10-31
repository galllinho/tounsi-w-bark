// Contrôle n° 1 du pack algérien : compare l'écriture latine (tn) et l'écriture arabe (ar) consonne par consonne,
// pour chaque ligne qui a les deux (scènes, mots, répliques, exercices « speak », discussions), en version garçon ET fille.
// Usage : node tools/check-dz.js [pack]   (pack = dz par défaut ; marche aussi pour tn avec des écarts attendus k/ق, th/ث)
// Sortie : liste des lignes où les consonnes ne correspondent pas, puis un résumé. Code de sortie 1 s'il y a des écarts.
const path = require('path');
const packId = process.argv[2] || 'dz';
global.window = { TWB_CONTENT: {}, TWB_CAST: {} };
for (const f of ['content.js', 'content-tn-more.js', 'content-script.js', 'content-dz.js', 'content-dz-more.js', 'content-kab.js'])
  require(path.join(__dirname, '..', 'src', f));
const P = window.TWB_CONTENT[packId];

// Remplit les accords comme l'appli (version garçon ou fille)
function fill(s, f){
  return String(s).replace(/\{g:([^|{}]*)\|([^{}]*)\}/g, (m, a, b) => f ? b : a)
    .replace(/\{petitAr\}/g, f ? 'بنتي' : 'وليدي').replace(/\{petit\}/g, f ? 'benti' : 'wlidi')
    .replace(/\{prenom\}/g, '').replace(/\{[a-zA-Z]+\}/g, '');
}
// Formules religieuses écrites en orthographe classique (exception prévue par la référence)
const FORMULES = [/hamdoullah|hamdou?lillah/i, /inch?a?allah|nchallah/i, /bismillah/i, /machallah|macha allah/i, /barak ?allah|baraka ?llahou/i, /subhan/i];

// Squelette latin : une lettre par consonne (voyelles, w et y ignorés car و ي servent aussi de voyelles)
function skelLat(w){
  let s = w.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z]/g, '');
  s = s.replace(/kh/g, 'K').replace(/gh/g, 'G').replace(packId === 'dz' ? /ch/g : /ch|sh/g, 'C').replace(/dh/g, 'd').replace(/p/g, 'b').replace(/v/g, 'f').replace(/x/g, 'ks').replace(/c/g, 'k');
  if (packId !== 'dz') s = s.replace(/th/g, 't');
  s = s.replace(/[aeiouyw]/g, '');
  return s.replace(/(.)\1+/g, '$1');
}
const AR = { 'ب': 'b', 'پ': 'b', 'ت': 't', 'ط': 't', 'ث': 't', 'ج': 'j', 'ح': 'h', 'ه': 'h', 'خ': 'K', 'د': 'd', 'ذ': 'd', 'ض': 'd', 'ظ': 'd', 'ر': 'r', 'ز': 'z', 'س': 's', 'ص': 's', 'ش': 'C', 'غ': 'G', 'ف': 'f', 'ڤ': 'f', 'ق': 'q', 'ڨ': 'g', 'گ': 'g', 'ك': 'k', 'ل': 'l', 'م': 'm', 'ن': 'n' };
function skelAr(w, sunDrop){
  let t = w.replace(/[ً-ْٰـ]/g, '');
  if (sunDrop) t = t.replace(/^(و?)(ب|ل|ف|ك)?ال(?=[تثدذرزسشصضطظلن])/, '$1$2');
  t = t.replace(/^(و?)(ب|ف|ك)?ال/, '$1$2ال');
  let s = ''; for (const c of t) s += AR[c] || '';
  return s.replace(/(.)\1+/g, '$1');
}
const words = (s, ar) => fill(s, false) && String(s).split(/[\s،؟!?.,;:…«»"()\/-]+/).filter(Boolean);
// Noms propres écrits à la française en latin (k pour ق) : acceptés
const NOMS = /^(kaddour|kettani)$/i;
function same(lat, ar){
  if (NOMS.test(lat)) return true;
  const a = skelLat(lat), b1 = skelAr(ar, false), b2 = skelAr(ar, true);
  const eq = (x, y) => x === y || x.replace(/k/g, 'q') === y.replace(/k/g, 'q') && packId !== 'dz';
  return eq(a, b1) || eq(a, b2) || eq(a.replace(/^l/, ''), b2) || eq('l' + a, b1);
}
const issues = [];
function check(where, it){
  if (!it || !it.tn || !it.ar || it.ar === it.tn) return;
  for (const f of [false, true]) {
    const tn = fill(it.tn, f), ar = fill(it.ar, f);
    if (FORMULES.some(r => r.test(tn))) {
      // on contrôle seulement le reste de la phrase
    }
    const lw = tn.split(/[\s!?.,;:…«»"()\/–—-]+/).filter(w => w && /[a-z]/i.test(w));
    const aw = ar.split(/[\s،؟؛!?.,;:…«»"()\/–—-]+/).filter(w => w && /[؀-ۿ]/.test(w));
    let bad = [];
    if (lw.length === aw.length) {
      lw.forEach((w, i) => { if (!same(w, aw[i]) && !FORMULES.some(r => r.test(w + ' ' + (lw[i + 1] || '')) || r.test((lw[i - 1] || '') + w))) bad.push(w + ' ≠ ' + aw[i] + '  [' + skelLat(w) + ' / ' + skelAr(aw[i], false) + ']'); });
    } else {
      const a = lw.map(skelLat).join(''), b = aw.map(w => skelAr(w, true)).join(''), c = aw.map(w => skelAr(w, false)).join('');
      const nl = x => x.replace(/l/g, '').replace(/(.)\1+/g, '$1'), j = x => x.replace(/(.)\1+/g, '$1');
      if (j(a) !== j(b) && j(a) !== j(c) && nl(a) !== nl(c) && !FORMULES.some(r => r.test(tn))) bad.push('nombre de mots différent (' + lw.length + ' / ' + aw.length + ') : ' + a + ' / ' + c);
    }
    if (bad.length) { issues.push(where + (f ? ' [fille]' : '') + '\n    tn: ' + tn + '\n    ar: ' + ar + '\n    → ' + bad.join('\n    → ')); break; }
  }
}
let n = 0;
P.levels.forEach(l => l.episodes.forEach(e => {
  e.scene.forEach((x, i) => { n++; check(e.id + ' scène ' + (i + 1), x); });
  e.words.forEach(w => { n++; check(e.id + ' mot ' + w.id, w); });
  e.exercises.forEach((x, i) => { if (x.type === 'speak') { n++; check(e.id + ' exercice ' + (i + 1), x); } if (x.type === 'reply') { n++; check(e.id + ' réplique ' + (i + 1), x.line); } });
}));
Object.entries((P.chat || {}).personas || {}).forEach(([k, p]) => { n++; check('discussion ' + k, p.hello); });
if (P.script) P.script.extraWords.forEach(w => { n++; check('lire-écrire ' + w[1], { tn: w[1], ar: w[0] }); });
issues.forEach(i => console.log(i + '\n'));
console.log(n + ' lignes contrôlées, ' + issues.length + ' écart(s).');
process.exit(issues.length ? 1 : 0);
