// Contrôle : aucun mot typique d'un autre dialecte dans le latin (tn) d'un pack.
// Usage : node tools/check-mots-etrangers.js   → liste les lignes suspectes de chaque pack (tn, dz, ma).
const path = require('path');
global.window = { TWB_CONTENT: {}, TWB_CAST: {} };
for (const f of ['content.js', 'content-tn-more.js', 'content-tn-fetes.js', 'content-script.js', 'content-dz.js', 'content-dz-more.js', 'content-ma.js', 'content-ma-more.js', 'content-kab.js'])
  require(path.join(__dirname, '..', 'src', f));
// Mots qui trahissent un dialecte (formes latines de l'appli)
const MOTS = {
  tn: ['barcha', 'famma', 'chnoua', 'tawa', 'behi', 'bech', 'mtaa', 'yaychek', 'aychek', 'kifech', 'wakteh', 'waktech', 'zouz', 'houni', 'brabi'],
  dz: ['dork', 'dorka', 'rani', 'raki', 'rak', 'raha', 'rana', 'kayen', 'makanch', 'bezzaf', 'zouj', 'taa', 'taai', 'waqtach', 'maniche', 'chhal men', 'kirak', 'temma rah'],
  ma: ['daba', 'bghit', 'bghiti', 'wakha', 'dyal', 'dyali', 'dyalek', 'jouj', 'bzzaf', 'imta', 'aafak', 'kidayr', 'kidayra', 'makaynch', 'kayn', 'ghadi', 'mzyan', 'zwin', 'drari', 'ewa', 'kanbghik', 'fabor', 'limen', 'lisser', 'nichan']
};
const words = s => String(s).toLowerCase().replace(/\{g:([^|{}]*)\|([^{}]*)\}/g, '$1 $2').split(/[^a-z]+/).filter(Boolean);
let total = 0;
for (const pack of ['tn', 'dz', 'ma']) {
  const P = window.TWB_CONTENT[pack], bad = [];
  const others = Object.entries(MOTS).filter(([k]) => k !== pack).flatMap(([k, l]) => l.filter(w => !MOTS[pack].includes(w)).map(w => [w, k]));
  const check = (where, tn) => {
    const ws = words(tn);
    for (const [w, k] of others) if (!w.includes(' ') && ws.includes(w)) bad.push(where + ' : « ' + w + ' » (' + k + ') dans « ' + tn + ' »');
  };
  const walk = (o, where) => {
    if (!o || typeof o !== 'object') return;
    if (Array.isArray(o)) return o.forEach((x, i) => walk(x, where + '.' + i));
    for (const k in o) { if ((k === 'tn' || k === 'suggestion_tn') && typeof o[k] === 'string') check(where, o[k]); else walk(o[k], where + '.' + k); }
  };
  P.levels.forEach(l => walk(l, l.id));
  walk(P.chat && P.chat.personas, pack + '.personas');
  (P.stories || []).forEach(s => walk(s, 'histoire ' + s.id));
  console.log('== ' + pack + ' : ' + bad.length + ' mot(s) suspect(s)'); bad.forEach(b => console.log('  ' + b));
  if (pack === 'ma') total += bad.length;
}
process.exit(total ? 1 : 0);
