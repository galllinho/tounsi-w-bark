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

## 6 novembre 2026 : améliorations (branche « ameliorations », publiées avec le marocain)

Session avec l'utilisateur. Consigne : **ne rien publier** (aucun push sur main) avant que le marocain soit intégré ; la session du 7 novembre fusionne la branche et lance une seule mise à jour.

### Ce qui a été fait

- **Voix algérienne** pour toutes les phrases (KasbahTTS, 20 machines en parallèle, le dépôt étant public) : workflow lancé sur la branche ameliorations, il ajoute `src/audio/dz-ia/` à la branche sans publier d'APK (`voix-toutes.yml` ne publie plus que depuis main).
- Résultat des voix : **669 phrases algériennes sur 669** (`src/audio/dz-ia/`, 7,6 Mo ; les mots courts étaient rejetés à tort par le contrôle des durées, corrigé dans `tools/tts/check-durations.py`) et **82 nouvelles phrases tunisiennes** (niveau Fêtes, histoires) avec la voix SILMA. Personne n'a encore écouté la voix algérienne : si elle sonne mal, supprimer `src/audio/dz-ia/` avant la fusion et l'appli reprendra la voix du téléphone.
- **Signaler une erreur** (drapeau sur les phrases, les mots et les corrections ; liste dans Profil → Erreurs signalées, envoi par le menu Partager).
- **Mode enfant** par profil (consignes lues en français, gros boutons, exercices « Trouve l'image », mini-jeux Trouve l'image et Memory sur l'accueil). Coché d'office à la création d'un profil sur la version web.
- **Défi du jour**, **révision intelligente** (répétition espacée), **classement de la semaine** entre profils.
- **Contenu culturel tunisien** (`src/content-tn-fetes.js`) : niveau bonus n6 « Fêtes et traditions » (ftour de Ramadan, matin de l'Aïd et mahba, mouton de l'Aïd el Kbir, assida du Mouled, proverbes de Jedda ; épreuve 12/8 ; leçon « Les formules qui font plaisir » ; 5 missions IA), ouvert dès que l'épreuve du niveau 1 est réussie ; **3 histoires de Jha** à écouter avec questions (le clou, l'âne, la marmite).
- **Alerte de nouvelle version** dans l'appli Android.

### Vérifications

- `tools/check-dz.js tn` : les écarts du niveau 6 sont du même type que ceux du reste du tunisien (k/ق, article collé, fel/في).
- Relecture ligne par ligne par un agent qui n'avait pas écrit le contenu : 15 corrections appliquées (zgougou ≠ pignons, brik au masculin, *koul* et non *kol* pour « mange », assimilation de l'article *ejjar*, *eddar*, *ezzgougou*, *bardan*, *mrigla*, *kenet ahla*, *baad* au lieu de *tawa* dans un récit, et deux choix pour les enfants : le mouton qu'on a nommé n'est plus grillé à la fin, « a eu un bébé » au lieu de « a accouché »).
- Points à faire confirmer par un natif : ajoutés à `docs/reference-tounsi.md`.
- Tests Playwright : `tools/test-app.js` (toutes les langues, deux skins) et deux tests ciblés des nouveautés (mode enfant, jeux, signalement, histoires, niveau 6, classement, alerte de mise à jour) : zéro erreur JavaScript.

### Pour la session marocaine

- Les nouveautés sont génériques : le pack marocain profite automatiquement du mode enfant (emojis d'après la traduction française), du défi du jour, de la révision, du signalement. `PACK.stories` et un niveau bonus `after: '…boss'` sont possibles mais pas obligatoires.
- Ajouter `content-ma*.js` aux listes de `tools/check-dz.js` et `tools/tts/collect.js`.

## Ajouter une langue (ex. darija marocain « ma »)

1. Copier `src/content-dz.js` en `src/content-ma.js` (et `content-dz-more.js` en `content-ma-more.js`) ; remplacer la clé `window.TWB_CONTENT.dz` par `.ma`, `order: 3`, `code: 'MA'`, `flag: '🇲🇦'`, les textes `ui`, `lines`, `chat`, `notif`, les personnages (nouvelles clés) et les identifiants (niveaux `m1…`, mots `m_…`, grammaire `mg1…`, unités « Lire et écrire » `ms1…`).
2. Ajouter les deux `<script src="content-ma….js">` dans `src/app.html` (après content-dz-more.js) et les noms de fichiers dans `tools/check-dz.js` et `tools/tts/collect.js`.
3. Écrire `docs/reference-marocain.md`, vérifier avec `node tools/check-dz.js ma`, tester avec `tools/test-app.js`. Le sélecteur de langues affichera le pack tout seul.

## 7 novembre 2026 : darija marocain (Casablanca et Rabat), pack « ma » — version 0.7.0

Session automatique (Claude), sans l'utilisateur. Travail sur la branche « ameliorations » (avec les nouveautés du 6 novembre), puis fusion dans main et une seule publication.

### Ce qui a été fait

- **Recherche** → `docs/reference-marocain.md` : transcription latine sans chiffres (q pour ق, g pour ڭ), grammaire (ma…ch, machi, makaynch, futur ghadi / gha, présent ka-, passé avec « tu » identique pour garçon et fille, -tiw, dyal et d, had, nombres avec « d »), vocabulaire confirmé par au moins deux sources, tableau des pièges entre marocain, algérien et tunisien, sources, points à faire confirmer. Remarque : l'outil de lecture des pages web était bloqué dans cette session ; la recherche s'est faite par moteur de recherche et à partir des ouvrages de référence listés (Wikipédia, manuel du Peace Corps Maroc, DODa, Harrell, Wiktionary, Lonely Planet).
- **Contenu** : `src/content-ma.js` et `src/content-ma-more.js`.
  - 5 niveaux × 5 épisodes (210 lignes de scène, 284 mots), 5 épreuves (10/7, 10/7, 12/8, 12/8, 14/10), 5 leçons de grammaire « Le coin de Tata Saadia » (possessifs et dyal ; négation ; présent ka- et tu garçon/fille ; passé ; futur ghadi et khass), 25 missions IA, 2 histoires de Jha en marocain (`PACK.stories`, avec questions).
  - 14 personnages avec portraits : Tata Saadia (mascotte, Maârif), Si Driss (petit taxi rouge, fan du Raja), Si Hamid (moul lhanout), Ba Abdellah (café), Lalla Naïma (voisine), Yassine (cousin, fan du Wydad), Lalla Hniya (grand-mère), Salma (la mariée), Ba Boujemaa (marché central), Docteure Leïla, Mi Zahra (kessala du hammam), Si Abdeslam (babouches, médina de Rabat), Aziz (jus d'orange à Jemaa el-Fna), Karim (guichet de Casa-Voyageurs).
  - Lieux : aéroport Mohammed-V, Maârif, la Corniche d'Aïn Diab, le marché central, la qissariya, la nuit du henné et l'amariya, la médina de Rabat, le hammam, le derby Raja–Wydad (sans moquerie), le train pour Marrakech, Jemaa el-Fna, le couscous du vendredi.
  - 6 personas de discussion IA marocaines avec les règles de la darija pour Gemini (pas de tunisien, pas d'algérien, tutoiement garçon/fille, vocatif « a »).
  - Parcours « Lire et écrire » marocain (10 unités « ms1… », progression séparée) : la lettre **ڭ** (g) remplace ڨ, mots et phrases marocains.
  - Mode enfant : 57 mots ont une image (emoji) choisie à la main en plus de la détection automatique.
- **Outils** : `tools/check-dz.js` connaît le pack « ma » (ڭ, q strict, histoires contrôlées aussi) ; nouveau `tools/check-mots-etrangers.js` (aucun mot tunisien ou algérien dans le marocain, et inversement) ; nouveau `tools/test-nouveautes.js` (mode enfant, Trouve l'image, Memory, défi du jour, révision, signalement, histoires, progression séparée, absence d'IA sur la version web) ; `tools/tts/collect.js` connaît le marocain.
- **Version** : package.json 0.7.0 ; le numéro de version de l'APK vient maintenant de package.json (0.7.N, N = numéro de construction).

### Vérifications

1. `node tools/check-dz.js ma` : latin ↔ arabe consonne par consonne, garçon et fille : 623 lignes, 0 écart (après avoir appris à l'outil que شكرا se lit choukran).
2. `node tools/check-mots-etrangers.js` : 0 mot suspect dans le marocain, l'algérien et le tunisien.
3. Relecture ligne par ligne par un agent séparé qui n'avait pas écrit le contenu, contre `docs/reference-marocain.md` : 46 remarques. Corrigé : impératifs non accordés (smaa, dir, zid, chouf, aawed, trtah), accords appliqués à la mauvaise personne dans des réponses, « khet » au lieu de « okht », « mn imta » (depuis quand), « wahed laassir d llimoun », « aaqbal lik », « kanchteh », la carte de grammaire sur -i / -a, deux mauvaises réponses de grammaire qui s'entendent en vrai, une réplique où l'élève se répondait à lui-même, des incohérences de récit. Les variantes discutables sont listées dans la référence.
4. Tests Playwright (voir plus bas).

### Choix faits sans l'utilisateur

- **Parler visé** : la darija standard de Casablanca et Rabat. **Vocatif « a »** (a wlidi, a Tata), comme au Maroc. **Q écrit q** (qahwa), **ڭ écrit g** (gal, gles, gaa) ; dans l'écriture arabe, toujours ڭ.
- **Mascotte** : « Tata Saadia » (tata est le mot courant à Casablanca). **Grand-mère** : « Lalla Hniya ».
- « Bravo » = **Tbarkallah !**, « oups » = **Ewa…**, puce de langue « 🇲🇦 Maghribi ».
- **Futur** avec ghadi (invariable comme marque du futur, accordé dans « fin ghadi / ghadya »). **Présent** avec ka- (pas ta-).
- **Monnaie** : dirhams, sans les « ryal » (expliqué dans la référence).
- Pour des enfants : pas « de Tanger à Lagouira » (sens politique) mais « du nord au sud » ; pas « vrai Marocain » mais « marocain de cœur » ; le derby reste gentil des deux côtés.
- Les nouveautés propres au tunisien (niveau Fêtes) n'ont pas été refaites ; les histoires de Jha, elles, existent en marocain.

### Points à faire relire par un natif de Casablanca

Toute la liste est dans `docs/reference-marocain.md` (« Points à faire confirmer »), en priorité les niveaux 4 et 5 et les deux histoires.

### Voix marocaine

- **Recherche** (Hugging Face sondé depuis GitHub Actions, l'espace de travail ne l'atteignant pas : `voix-sonde-ma.yml`) : pas de `facebook/mms-tts-ary` (n'existe pas) ; **Habibi-TTS** (SWivid) a un modèle **spécialisé MAR** (darija marocaine, « Moroccan or Darija »), entraîné entre autres sur `adiren7/darija_speech_to_text` et `KandirResearch/DarijaTTS-clean`, licence **Apache 2.0** pour les modèles spécialisés (le modèle « Unified » est CC BY-NC-SA et n'est pas utilisé), avec un extrait de référence marocain officiel (`assets/MAR.mp3` et sa transcription).
- **Test** (`voix-test-ma.yml`, 12 phrases) : modèle chargé, la lettre ڭ fait partie de son vocabulaire, 12 fichiers sur 12 avec une durée cohérente (0,09 à 0,11 s par lettre, 0,5 à 3,3 s par phrase), environ 140 s par phrase sur une machine GitHub.
- **Adoptée** : génération complète sur la branche ameliorations (`voix-toutes.yml`, langue `ma`, 20 machines en parallèle, environ 80 minutes) : **662 phrases sur 662** (versions garçon et fille), aucune rejetée par le contrôle des durées, `src/audio/ma-ia/` (7,2 Mo). Les 3 lignes qui contiennent le prénom de l'élève restent lues par la voix du téléphone (`ar-MA`, puis `ar`).
- **Personne n'a encore écouté** ces voix. Si elles sonnent mal, supprimer `src/audio/ma-ia/` : l'appli reprend la voix du téléphone. Les voix enregistrées par la famille dans le Studio passent toujours en premier. Après un ajout de contenu marocain, relancer Actions → « Voix IA (toutes les phrases d'une langue) » → `ma` (seules les nouvelles phrases sont générées).

### Tests (7 novembre)

- `tools/test-app.js` (toutes les leçons, épreuves, grammaire, unités « Lire et écrire », révision, carnet, profil, Studio, sélecteur de langues, mission simulée) pour le tunisien (30 épisodes, 6 épreuves, 6 grammaires, 10 unités), l'algérien (25, 5, 5, 10), le marocain (25, 5, 5, 10) et le kabyle, dans « Nuit de jasmin » et « Sidi Bou Saïd », garçon et fille : **zéro erreur JavaScript**.
- `tools/test-nouveautes.js` (mode enfant, Trouve l'image, Memory, défi du jour, signalement, histoires, révision espacée, profil, progression séparée par langue) pour les quatre langues, version Android et version web (`WEB=1`, sans IA vérifié) : **zéro erreur JavaScript**.
- Corrigé en testant : les mini-jeux du mode enfant affichaient « Il faut encore quelques mots » dès que l'élève avait fini un épisode dont les mots n'ont pas d'image ; ils prennent maintenant tous les mots de la langue quand les mots appris ne suffisent pas.

### Minutes GitHub

Le dépôt est public : minutes illimitées. Sonde des modèles (3 lancements, < 5 min), test de la voix (≈ 35 min), génération complète (20 machines × ≈ 80 min), puis une construction de l'APK et une de la version web au moment de la fusion dans main.

## 7 novembre 2026 (soir) : correctif des voix algériennes (branche « correctif-voix-dz », non publiée)

Signalé par l'utilisateur : les voix IA algériennes ne font qu'un **grésillement**.

### Cause

`tools/tts/generate-dz.py` chargeait KasbahTTS avec la configuration « F5TTS_Base » (ancienne architecture de F5-TTS) au lieu de « F5TTS_v1_Base », celle de Habibi-TTS dont KasbahTTS est dérivé. Les tailles des couches étant les mêmes, le chargement ne plantait pas, mais le modèle produisait un bourdonnement continu. Le contrôle des durées ne pouvait pas le voir (la durée était cohérente), et personne n'avait écouté. Spectrogramme : bandes horizontales fixes, aucune structure de parole.

Preuve par reconnaissance vocale (Whisper « small », `tools/tts/check-asr.py`, score = consonnes retrouvées) : anciennes voix algériennes **0,11** (Whisper « entend » des phrases inventées typiques du bruit), voix tunisiennes 0,62, voix marocaines 0,77 (correctes ; les seuls échecs sont des mots isolés trop courts pour Whisper).

### Correctif

- `generate-dz.py` réécrit sur la chaîne de Habibi-TTS (configuration v1, `infer_process` de habibi_tts), comme la voix marocaine.
- Modèle : **Habibi-TTS Specialized/ALG** (darja algérienne, licence Apache 2.0) avec l'extrait de référence algérien officiel (`assets/ALG.wav`). Essai sur 10 phrases : score de reconnaissance **0,99** (Whisper retrouve presque mot pour mot « سلام يا بنتي والله توحشتك بزاف »). KasbahTTS correctement chargé : 0,97, gardé en option (`MODELE=kasbah`).
- Les 669 fichiers de `src/audio/dz-ia/` sont supprimés et regénérés sur la branche (`voix-toutes.yml`, 20 machines) : **668 phrases sur 669**, score de reconnaissance de 0,91 à 0,98 selon les lots, spectrogrammes de vraie parole. La phrase manquante (durée hors règle) est lue par la voix du téléphone ; un nouveau lancement de « Voix IA » → `dz` la regénérera.
- Nouveau contrôle automatique : `tools/tts/check-asr.py` dans `voix-toutes.yml` (algérien et marocain) supprime les fichiers inaudibles des phrases de 12 lettres ou plus ; `voix-controle.yml` contrôle un échantillon des voix déjà enregistrées. `voix-test-dz.yml` ne publie plus rien depuis une branche.

### Pour publier (non fait, à la demande de l'utilisateur)

Fusionner la branche dans main : `git checkout main && git merge --no-ff correctif-voix-dz && git push`. Ce push construit l'APK et la version web.
