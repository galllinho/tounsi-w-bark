// Test de bout en bout de l'appli (Playwright + Chromium) : joue toutes les leçons, épreuves, grammaire,
// unités « Lire et écrire », une mission simulée, le carnet, le profil et le sélecteur de langues,
// pour chaque pack (tn, dz, kab…) et chaque skin demandé. Échoue s'il y a la moindre erreur JavaScript.
// Usage : GEMINI_KEY=test node scripts/build-www.js && node tools/test-app.js [skins…]   (par défaut : jasmin sidi)
const { chromium } = require(process.env.PW || 'playwright');
const path = require('path'), http = require('http'), fs = require('fs');
const www = path.join(__dirname, '..', 'www');
const skins = process.argv.slice(2).length ? process.argv.slice(2) : ['jasmin', 'sidi'];
const genders = (process.env.GENRES || 'm,f').split(',');
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.woff2': 'font/woff2', '.mp3': 'audio/mpeg', '.png': 'image/png' };
const server = http.createServer((q, r) => {
  const f = path.join(www, decodeURIComponent(q.url.split('?')[0]).replace(/\/$/, '/index.html'));
  if (!f.startsWith(www) || !fs.existsSync(f)) { r.writeHead(404); return r.end(); }
  r.writeHead(200, { 'Content-Type': TYPES[path.extname(f)] || 'application/octet-stream' }); fs.createReadStream(f).pipe(r);
}).listen(0);
const URL = 'http://127.0.0.1:' + server.address().port + '/index.html';

(async () => {
  const browser = await chromium.launch();
  const errors = [], stats = {};
  for (const skin of skins) for (const gender of genders) {
    const ctx = await browser.newContext({ viewport: { width: 400, height: 860 } });
    const page = await ctx.newPage();
    page.on('pageerror', e => errors.push(`[${skin}/${gender}] ${e.message}`));
    page.on('console', m => { if (m.type() === 'error' && !/Failed to load resource|404/.test(m.text())) errors.push(`[${skin}/${gender}] console: ${m.text()}`); });
    // Mission simulée : fausse réponse de Gemini
    await page.route(/generativelanguage\.googleapis\.com/, route => {
      const body = JSON.parse(route.request().postData() || '{}');
      const mis = /MISSION DE L'ÉLÈVE/.test(JSON.stringify(body.systemInstruction || ''));
      const turns = (body.contents || []).filter(c => c.role === 'user').length;
      const o = { tn: 'Salam! Wach rak?', ar: 'سلام! واش راك؟', fr: 'Salut ! Ça va ?', correction: '', suggestion_tn: 'Labas', suggestion_fr: 'Ça va' };
      if (mis) Object.assign(o, { mission_status: turns >= 3 ? 'reussie' : 'en_cours', mission_feedback: 'Bravo !' });
      route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ candidates: [{ content: { parts: [{ text: JSON.stringify(o) }] } }] }) });
    });
    // Profil de départ écrit avant le chargement de l'appli (un reload réécrirait l'état en mémoire)
    await page.addInitScript(([skin, gender]) => { if (!sessionStorage.getItem('init')) { sessionStorage.setItem('init', '1'); localStorage.clear(); localStorage.setItem('twb.state.v1', JSON.stringify({ name: 'Nour', gender, lang: 'tn', skin })); } }, [skin, gender]);
    await page.goto(URL); await page.waitForTimeout(300);
    if ((await page.evaluate(() => [S.name, S.skin, document.documentElement.dataset.skin])).join() !== ['Nour', skin, skin].join()) errors.push('profil de départ non chargé');
    // Joue l'écran en cours jusqu'à l'écran de résultat (ou l'accueil)
    const play = async (label) => {
      if (process.env.VERBOSE) console.error(new Date().toISOString().slice(11, 19), skin, gender, label);
      for (let i = 0; i < 400; i++) {
        const st = await page.evaluate(() => screen);
        if (st === 'result' || st === 'home') return true;
        if (await page.$('.feedback #cont')) { await page.click('.feedback #cont'); continue; }
        if (await page.$('[data-pl]')) {   // paires : on associe chaque mot à sa traduction
          const ids = await page.$$eval('[data-pl]:not([disabled])', b => b.map(x => x.dataset.pl));
          for (const id of ids) { await page.click(`[data-pl="${id}"]`); await page.click(`[data-pr="${id}"]`); }
          await page.waitForTimeout(450); continue;
        }
        const chk = await page.$('#check');
        if (chk) {
          if (await page.$('#wr')) { await page.fill('#wr', await page.evaluate(() => Math.random() < .5 ? 'xyz' : (document.querySelector('.big') || {}).textContent || 'salam')); }
          else if (await page.$('.opt[data-i]:not([disabled])')) { const o = await page.$$('.opt[data-i]:not([disabled])'); await o[Math.floor(Math.random() * o.length)].click(); }
          else if (await page.$('.pool .tok')) { for (const t of await page.$$('.pool .tok:not(.used)')) await t.click(); }
          else if (await page.$('[data-lt]')) { for (const t of await page.$$('[data-lt]')) await t.click(); }
          else if (await page.$('#cv')) { const b = await (await page.$('#cv')).boundingBox(); await page.mouse.move(b.x + b.width * .3, b.y + b.height * .5); await page.mouse.down(); await page.mouse.move(b.x + b.width * .7, b.y + b.height * .5, { steps: 5 }); await page.mouse.up(); }
          if (await page.$('#check:not([disabled])')) { await page.click('#check'); continue; }
        }
        if (await page.$('#self')) { await page.click('#self'); continue; }
        if (await page.$('#next')) { await page.click('#next'); continue; }
        errors.push(`[${skin}/${gender}] bloqué dans ${label} (écran ${st})`); return false;
      }
      errors.push(`[${skin}/${gender}] trop long : ${label}`); return false;
    };
    const packs = await page.evaluate(() => PACK_IDS());
    for (const lang of packs) {
      const n = { episodes: 0, boss: 0, grammar: 0, script: 0, mission: 0 };
      await page.evaluate(l => setLang(l), lang);
      const levels = await page.evaluate(() => PACK.levels.map(l => ({ id: l.id, eps: l.episodes.map(e => e.id), boss: !!l.episodes.length, gram: !!l.grammar })));
      for (const l of levels) {
        for (const e of l.eps) { await page.evaluate(id => { const ep = PACK.levels.flatMap(x => x.episodes).find(x => x.id === id); intro(ep); }, e); if (await play(lang + ' ' + e)) n.episodes++; }
        if (l.gram) { await page.evaluate(id => grammarLesson(PACK.levels.find(x => x.id === id), 0), l.id); if (await play(lang + ' grammaire ' + l.id)) n.grammar++; }
        if (l.boss) { await page.evaluate(id => startBoss(PACK.levels.find(x => x.id === id)), l.id); if (await play(lang + ' épreuve ' + l.id)) n.boss++; }
      }
      const units = await page.evaluate(() => SC ? SC.units.length : 0);
      for (let u = 0; u < units; u++) { await page.evaluate(i => scriptUnit(i, 0), u); if (await play(lang + ' lire-écrire ' + u)) n.script++; }
      // Accueil, parcours « Lire et écrire », révision, carnet, profil, discussion, mission simulée, Studio
      await page.evaluate(() => { tab = 'learn'; track = 'speak'; home(); });
      if (await page.$('[data-tr="script"]')) { await page.click('[data-tr="script"]'); await page.click('[data-tr="speak"]'); }
      if (await page.$('#rev')) { await page.click('#rev'); await play(lang + ' révision'); }
      for (const t of ['book', 'me', 'chat', 'learn']) { await page.evaluate(x => { tab = x; home(); }, t); await page.waitForTimeout(50); }
      await page.click('#lgchip'); await page.waitForSelector('.sheet [data-pick]'); await page.click('#lp-x');
      const epM = await page.evaluate(() => { const ep = PACK.levels.flatMap(l => l.episodes).find(e => e.mission); return ep ? ep.id : null; });
      if (epM) {
        await page.evaluate(id => startMission(PACK.levels.flatMap(l => l.episodes).find(e => e.id === id)), epM);
        for (let k = 0; k < 4 && !(await page.$('.feedback #mok')); k++) { await page.fill('#ti', 'Salam'); await page.click('#send'); await page.waitForTimeout(250); }
        if (await page.$('.feedback #mok')) { n.mission++; await page.click('.feedback #mok'); } else errors.push(`[${skin}/${gender}] mission ${lang} non terminée`);
      }
      await page.evaluate(() => { tab = 'me'; home(); });
      await page.click('#studio'); await page.click('#quit');
      await page.screenshot({ path: `/tmp/twb-${lang}-${skin}-${gender}.png`, fullPage: false });
      stats[`${lang}/${skin}/${gender}`] = n; console.error(new Date().toISOString().slice(11, 19), lang, skin, gender, JSON.stringify(n));
    }
    // Onboarding avec le sélecteur de langues générique
    await page.evaluate(() => { S.name = ''; onboarding(); });
    const langs = await page.$$eval('[data-l]', b => b.map(x => x.dataset.l));
    stats[`onboarding/${skin}/${gender}`] = langs.join(',');
    await ctx.close();
  }
  await browser.close(); server.close();
  console.log(JSON.stringify(stats, null, 1));
  console.log(errors.length ? 'ERREURS :\n' + [...new Set(errors)].join('\n') : 'Zéro erreur JavaScript.');
  process.exit(errors.length ? 1 : 0);
})();
