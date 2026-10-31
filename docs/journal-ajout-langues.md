# Journal : ajout de langues

## 31 octobre – 1er novembre 2026 : darija algérien (Alger), pack « dz » — version 0.6.0

Session automatique (Claude), sans l'utilisateur.

### Ce qui a été fait

- **Recherche** sur l'algérois (Wikipédia EN/FR, mémoire de l'université d'Erlangen sur le dialecte d'Alger, Tirosh-Becker, glossaires et cours en ligne) → `docs/reference-algerien.md` : transcription, grammaire, vocabulaire confirmé par au moins deux sources, sources, points à faire confirmer par un natif.
- **Contenu** : `src/content-dz.js` et `src/content-dz-more.js`.
  - 5 niveaux × 5 épisodes (219 lignes de scène, 284 mots), 5 épreuves (10/7, 10/7, 12/8, 12/8, 14/10), 5 leçons de grammaire « Le coin de Khalti Zhor » (possessifs et taa, négation, présent et tutoiement garçon/fille, passé, futur rah et rani), 25 missions IA.
  - 10 personnages algérois avec portraits : Khalti Zhor (mascotte, la Casbah), Ammi Rabah (taxi), Saïd (hanout), Ammi Mouloud (café de Bab El Oued), Tata Nassima (voisine), Amine (cousin, fan du Mouloudia), Mima (grand-mère), Sabrina (la mariée), Ammi Kaddour (marché de Meissonnier), Docteure Amel.
  - Lieux : aéroport Houari-Boumediene, Bab El Oued, la Casbah, le front de mer, Meissonnier, Riadh El Feth et le Maqam Echahid (téléphérique).
  - 6 personas de discussion IA algériennes, avec les règles de l'algérois pour Gemini (pas de tunisien, pas de marocain, tutoiement garçon/fille).
  - Parcours « Lire et écrire » algérien (10 unités « ds1… », progression séparée du tunisien) : mêmes lettres, sons d'Alger (ق = q, ث ذ ظ = t d d, ڨ = g), mots et phrases algériens.
- **Architecture multi-langues** (prête pour le marocain) :
  - vrai sélecteur de langues (puce en haut à droite, Profil → Langue apprise, écran d'accueil) construit à partir des packs chargés, triés par `order` ;
  - textes d'interface propres à chaque pack (`ui` : adjectif, salutation, « bravo », « oups », message de départ, note sur la voix…), plus aucun `S.lang === 'kab'` dans le code ;
  - « Lire et écrire » par pack (`PACK.script`) ;
  - accords garçon/fille génériques `{g:forme garçon|forme fille}` dans `fill()` (aussi dans `tools/tts/collect.js`) ;
  - correction des réponses écrites tolérante q = k.
- **Vérifications** :
  1. `tools/check-dz.js` : compare latin et arabe consonne par consonne, version garçon et fille : 612 lignes, 0 écart.
  2. Relecture ligne par ligne contre la référence par deux agents relecteurs qui n'avaient pas écrit le contenu : 29 corrections (accords au féminin : haki, aawdi, arwahi, jiti ; futur « rah nqoul » au lieu de « rani nqoul » ; article avec taa ; kesksou au lieu de kousksi tunisien ; traductions).
  3. `tools/test-app.js` (Playwright) : toutes les leçons, épreuves, grammaire, unités « Lire et écrire », révision, carnet, profil, Studio, sélecteur de langues et une mission simulée (réponse de Gemini simulée), pour le tunisien (25 épisodes, 5 épreuves, 5 grammaires, 10 unités), l'algérien (25, 5, 5, 10) et le kabyle (3 épisodes, 1 épreuve), dans « Nuit de jasmin » (profil fille) et « Sidi Bou Saïd » (profil garçon) : **zéro erreur JavaScript**.

### Choix faits sans l'utilisateur

- **Q écrit q** en algérien (qahwa, waqtach), parce qu'on le prononce ainsi à Alger ; le tunisien garde k. La correction accepte les deux.
- **ث ذ ظ écrits t, d, d** en latin, et en arabe comme on prononce à Alger (هادا, تلاتة), sauf les formules religieuses.
- **Futur** avec rah / rayah (pas « ghadi », oranais et marocain). **« De, à »** = taa (pas dyal ni mtaa).
- **Mascotte** : Khalti Zhor, une tata de la Casbah. **Grand-mère** : « Mima » (mot de famille courant, à confirmer).
- « Bravo » = **Sahit !**, « oups » = **Ya latif…** (à confirmer par un natif).
- **Monnaie** : dinars (pas de compte en centimes ni en « alf »).
- Les mots revus dans un épisode plus loin reçoivent un identifiant unique automatiquement (carnet et étoiles).

### Points à faire relire par un natif d'Alger

Toute la liste est dans `docs/reference-algerien.md` (« Points à faire confirmer »). En plus, relevés pendant l'écriture et la relecture :
tochrob / techreb (tu bois), wlid okht (le fils de la sœur), tewkelni (elle me fait manger), s-houn (assiettes) ou tbasi, mtcherfin, nahedrou / nahadrou, tomatich, glas (glace), kahla (café noir), nemzah (je plaisante), arwah / arwahi (viens), chbab alik (ça te va bien), saha li jiti, nchathou (danser), taatalt (en retard), tchina (oranges), skhana (fièvre), garjouma (gorge), qmija, dioul (feuilles de brick), « chhar tmanya » pour août, la note « saha = à tes souhaits » (on dirait plutôt « Rahmek Allah »), et l'orthographe variable de nos / nouss, nwalli / nwelli.

### Voix algérienne

- Recherche sur Hugging Face (rapport dans cette session) : pas de MMS-TTS « arq » chez Meta (seulement `mms-tts-ara`, arabe standard, écarté). Modèles réellement entraînés sur la darja algérienne : **KasbahTTS-V0** (MenaVoice, licence MIT, affiné depuis Habibi-TTS / F5-TTS sur de la darja algérienne parlée), Habibi-TTS « Specialized/ALG » (Apache 2.0), Hadra-TTS (licence des données non déterminée), Natiq-dz (non commercial, mais carte graphique obligatoire).
- **Test fait** avec KasbahTTS (`voix-test-dz.yml`, 10 phrases) : modèle chargé, 10 fichiers produits, durées cohérentes (0,10 à 0,11 s par lettre, 1,1 à 3,3 s par phrase). Écoute : pré-version « Test de la voix algérienne (1) » (tag `voix-dz-test-1`) dans Releases.
- **Pas de génération complète pour l'instant** : sur les machines gratuites de GitHub (sans carte graphique), il faut environ **140 secondes par phrase**. Le pack algérien a 669 phrases (versions garçon et fille), soit environ **1 560 minutes**, presque le quota mensuel (2 000 min) : il ne resterait plus de marge pour les APK ni pour AnounisFitness. Personne n'a encore écouté les essais, et la voix de référence utilisée est un extrait d'arabe standard (celui de la voix tunisienne).
- **Voix utilisée dans la version 0.6** : la voix arabe du téléphone (`ar-DZ`, puis `ar-MA`, `ar-SA`, `ar`), ou les voix enregistrées par la famille dans le Studio (elles passent toujours en premier).
- **Pour l'activer plus tard** : écouter les 10 mp3 du test ; si la voix est bonne, lancer Actions → « Voix IA (toutes les phrases d'une langue) » → langue `dz`. Le travail est repris là où il s'est arrêté à chaque lancement (seules les phrases sans voix sont générées), on peut donc l'étaler sur plusieurs mois. Pour aller deux fois plus vite, mettre `nfe_step=16` dans `tools/tts/generate-dz.py` (qualité un peu moindre).

### Minutes GitHub consommées (environ 35 minutes)

- Construction de l'APK n° 16 : 1er essai en échec (dépôt Maven indisponible quelques secondes, sans lien avec le code), relancé : réussi (≈ 3 min au total).
- Version web : ≈ 1 min par envoi.
- Test de la voix algérienne : 25 min.
- Construction finale de l'APK (n° 17) avec ce journal : ≈ 3 min.

## Ajouter une langue (ex. darija marocain « ma »)

1. Copier `src/content-dz.js` en `src/content-ma.js` (et `content-dz-more.js` en `content-ma-more.js`) ; remplacer la clé `window.TWB_CONTENT.dz` par `.ma`, `order: 3`, `code: 'MA'`, `flag: '🇲🇦'`, les textes `ui`, `lines`, `chat`, `notif`, les personnages (nouvelles clés) et les identifiants (niveaux `m1…`, mots `m_…`, grammaire `mg1…`, unités « Lire et écrire » `ms1…`).
2. Ajouter les deux `<script src="content-ma….js">` dans `src/app.html` (après content-dz-more.js) et les noms de fichiers dans `tools/check-dz.js` et `tools/tts/collect.js`.
3. Écrire `docs/reference-marocain.md`, vérifier avec `node tools/check-dz.js ma`, tester avec `tools/test-app.js`. Le sélecteur de langues affichera le pack tout seul.
