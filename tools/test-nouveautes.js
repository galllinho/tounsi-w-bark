// Test ciblé des nouveautés (mode enfant, mini-jeux, défi du jour, révision, signalement, histoires, classement)
// pour chaque langue, plus la séparation des progressions. Échoue s'il y a la moindre erreur JavaScript.
// Usage : node scripts/build-www.js && node tools/test-nouveautes.js [skin]   (WEB=1 pour la version web : vérifie aussi l'absence d'IA)
const { chromium } = require(process.env.PW || 'playwright');
const path = require('path'), http = require('http'), fs = require('fs');
const www = path.join(__dirname, '..', 'www');
const skin = process.argv[2] || 'jasmin';
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.woff2': 'font/woff2', '.mp3': 'audio/mpeg', '.png': 'image/png', '.webmanifest': 'application/manifest+json' };
const server = http.createServer((q, r) => {
  const f = path.join(www, decodeURIComponent(q.url.split('?')[0]).replace(/\/$/, '/index.html'));
  if (!f.startsWith(www) || !fs.existsSync(f)) { r.writeHead(404); return r.end(); }
  r.writeHead(200, { 'Content-Type': TYPES[path.extname(f)] || 'application/octet-stream' }); fs.createReadStream(f).pipe(r);
}).listen(0);
const URL = 'http://127.0.0.1:' + server.address().port + '/index.html';
(async () => {
  const browser = await chromium.launch();
  const errors = [], stats = {};
  const ctx = await browser.newContext({ viewport: { width: 400, height: 860 } });
  const page = await ctx.newPage();
  page.on('pageerror', e => errors.push(e.message));
  page.on('console', m => { if (m.type() === 'error' && !/Failed to load resource|404/.test(m.text())) errors.push('console: ' + m.text()); });
  await page.addInitScript(([skin]) => { if (!sessionStorage.getItem('init')) { sessionStorage.setItem('init', '1'); localStorage.clear(); localStorage.setItem('twb.state.v1', JSON.stringify({ name: 'Yasmine', gender: 'f', lang: 'tn', skin, kid: true })); } }, [skin]);
  await page.goto(URL); await page.waitForTimeout(400);
  const play = async (label) => {
    for (let i = 0; i < 300; i++) {
      const st = await page.evaluate(() => screen);
      if (st === 'result' || st === 'home') return true;
      if (await page.$('.feedback #cont')) { await page.click('.feedback #cont'); continue; }
      if (await page.$('[data-pl]')) { const ids = await page.$$eval('[data-pl]:not([disabled])', b => b.map(x => x.dataset.pl)); for (const id of ids) { await page.click(`[data-pl="${id}"]`); await page.click(`[data-pr="${id}"]`); } await page.waitForTimeout(450); continue; }
      if (await page.$('#check')) {
        if (await page.$('#wr')) await page.fill('#wr', 'salam');
        else if (await page.$('.opt[data-i]:not([disabled])')) { const o = await page.$$('.opt[data-i]:not([disabled])'); await o[Math.floor(Math.random() * o.length)].click(); }
        else if (await page.$('.pool .tok')) { for (const t of await page.$$('.pool .tok:not(.used)')) await t.click(); }
        if (await page.$('#check:not([disabled])')) { await page.click('#check'); continue; }
      }
      if (await page.$('#self')) { await page.click('#self'); continue; }
      if (await page.$('#next')) { await page.click('#next'); continue; }
      errors.push('bloqué dans ' + label); return false;
    }
    errors.push('trop long : ' + label); return false;
  };
  const web = await page.evaluate(() => !!window.TWB_WEB);
  for (const lang of await page.evaluate(() => PACK_IDS())) {
    const n = {};
    await page.evaluate(l => { setLang(l); tab = 'learn'; home(); }, lang);
    // Un épisode joué pour avoir des mots appris, avec un signalement depuis la scène
    await page.evaluate(() => intro(PACK.levels[0].episodes[0]));
    for (let k = 0; k < 20 && !(await page.$('.rep-in')); k++) { if (await page.$('#next')) await page.click('#next'); else break; }
    const before = await page.evaluate(() => REPORTS.length);
    if (await page.$('.rep-in')) { await page.click('.rep-in'); await page.click('[data-pb="0"]'); await page.click('#rp-ok'); }
    n.signalement = (await page.evaluate(() => REPORTS.length)) - before;
    await play(lang + ' épisode 1');
    await page.evaluate(() => { stack = []; tab = 'learn'; home(); });
    n.defi = !!(await page.$$eval('b', b => b.some(x => x.textContent === 'Défi du jour')));
    n.jeux = !!(await page.$('#g-img')) && !!(await page.$('#g-mem'));
    n.emojis = await page.evaluate(() => allWords().filter(w => emojiOf(w)).length + '/' + allWords().length);
    if (await page.$('#g-img')) { await page.click('#g-img'); if (await play(lang + ' Trouve l’image')) n.trouveImage = true; await page.evaluate(() => { stack = []; tab = 'learn'; home(); }); }
    if (await page.$('#g-mem')) {   // Memory : on retrouve chaque paire image / mot
      await page.click('#g-mem'); await page.waitForSelector('.memo-c');
      const keys = await page.$$eval('.memo-c .face', f => f.map(x => x.classList.contains('img') ? x.textContent : emojiOf(allWords().find(w => fill(w.tn) === x.textContent))));
      const done = new Set();
      for (let i = 0; i < keys.length; i++) { if (done.has(i)) continue; const j = keys.findIndex((k, x) => x !== i && !done.has(x) && k === keys[i]); if (j < 0) continue; done.add(i); done.add(j); await page.click(`[data-m="${i}"]`); await page.click(`[data-m="${j}"]`); await page.waitForTimeout(700); }
      await page.waitForTimeout(1200); n.memory = (await page.evaluate(() => screen)) === 'result' ? 'gagné' : 'non terminé';
      await page.evaluate(() => { stack = []; tab = 'learn'; home(); });
    }
    const stories = await page.evaluate(() => (PACK.stories || []).map(s => s.id));
    n.histoires = 0;
    for (const id of stories) { await page.evaluate(i => { stack = []; story(PACK.stories.find(s => s.id === i), 0); }, id); if (await play(lang + ' histoire ' + id)) n.histoires++; }
    await page.evaluate(() => { stack = []; tab = 'learn'; home(); });
    if (await page.$('#rev')) { await page.click('#rev'); n.revision = await play(lang + ' révision'); }
    n.srs = await page.evaluate(() => Object.keys(S.srs || {}).length);
    await page.evaluate(() => { tab = 'me'; home(); });
    n.profil = !!(await page.$('#kidsw'));
    // Version web : aucune IA (pas de discussion, pas de mission)
    if (web) n.sansIA = await page.evaluate(() => !AI() && !document.querySelector('[data-t="chat"]'));
    // Progression séparée : les épisodes réussis de cette langue ne comptent que pour elle
    n.faits = await page.evaluate(() => PACK.levels.flatMap(l => l.episodes).filter(e => S.done[e.id]).length);
    stats[lang] = n; console.error(lang, JSON.stringify(n));
  }
  // Chaque langue garde ses propres épisodes : aucun identifiant d'épisode partagé entre deux packs
  const shared = await page.evaluate(() => { const seen = {}, dup = []; PACK_IDS().forEach(k => PACKS[k].levels.forEach(l => l.episodes.forEach(e => { if (seen[e.id]) dup.push(e.id); seen[e.id] = k; }))); return dup; });
  if (shared.length) errors.push('épisodes partagés entre langues : ' + shared.join(', '));
  await page.evaluate(() => setLang('ma'));
  const back = await page.evaluate(() => [S.lang, PACK.levels.flatMap(l => l.episodes).filter(e => S.done[e.id]).length]);
  stats.retourMarocain = back.join(' ');
  await page.screenshot({ path: '/tmp/twb-nouveautes-' + skin + (web ? '-web' : '') + '.png' });
  await browser.close(); server.close();
  console.log(JSON.stringify(stats, null, 1));
  console.log(errors.length ? 'ERREURS :\n' + [...new Set(errors)].join('\n') : 'Zéro erreur JavaScript.');
  process.exit(errors.length ? 1 : 0);
})();
