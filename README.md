# Tounsi w Bark

Appli Android pour apprendre la langue de sa famille avec humour : le darija tunisien avec Khalti, le darija algérien (parler d'Alger) avec Khalti Zhor, et le kabyle avec Nanna (brouillon).

- `src/content.js` : contenus tunisiens (niveaux, épisodes, mots, exercices, personnages, répliques de Khalti, discussion)
- `src/content-tn-more.js` : suite du tunisien (niveaux 1 à 5 complets, grammaire, missions)
- `docs/reference-tounsi.md` : règles et sources utilisées pour vérifier le tunisien
- `src/content-script.js` : parcours « Lire et écrire » (alphabet arabe pour le tunisien)
- `tools/tts/` + `.github/workflows/voix-test.yml` : test de la voix tunisienne (SILMA TTS Derja) ; `.github/workflows/voix-test-dz.yml` : test de la voix algérienne (KasbahTTS, darja algérienne, licence MIT), avec contrôle automatique des durées (`tools/tts/check-durations.py`)
- `.github/workflows/voix-toutes.yml` (lancement manuel, choisir la langue `tn` ou `dz`) : génère la voix de toutes les phrases qui n'en ont pas encore dans `src/audio/<langue>-ia/`, puis reconstruit l'APK. À relancer après un ajout de contenu. Tunisien : SILMA TTS Derja (Ghazouaniwala/silma-tts-derja), entraînée sur le corpus LinTO de Linagora (CC BY 4.0) ; usage gratuit et non commercial. Algérien : KasbahTTS-V0 (MenaVoice), voir le journal.
- `src/content-dz.js` : pack algérien « dz » (algérois) : réglages, personnages (Khalti Zhor, Amine, Mima, Ammi Rabah…), discussion IA, niveaux 1 et 2
- `src/content-dz-more.js` : suite de l'algérien (niveaux 3 à 5, grammaire « Le coin de Khalti Zhor », parcours « Lire et écrire » algérien)
- `docs/reference-algerien.md` : règles, vocabulaire et sources de l'algérois, points à faire confirmer par un natif
- `tools/check-dz.js` : contrôle automatique latin ↔ arabe, consonne par consonne (`node tools/check-dz.js dz`)
- `tools/test-app.js` : test de bout en bout de toutes les langues avec Playwright (`GEMINI_KEY=test node scripts/build-www.js && node tools/test-app.js jasmin sidi`)
- `docs/journal-ajout-langues.md` : journal des ajouts de langues et marche à suivre pour en ajouter une (marocain prévu)
- `src/content-kab.js` : contenus kabyles avec Nanna (brouillon à faire relire)
- `src/audio/<langue>/` : voix enregistrées dans le Studio famille (elles passent avant les voix IA) (`node scripts/import-voices.js voix-….json`)
- `src/app.html` : l'application
- `android-config/` : icône et clé de signature (la même à chaque version, pour pouvoir mettre à jour l'appli)
- `.github/workflows/build.yml` : construit l'APK à chaque mise à jour (onglet Releases)

Version 0.6 : darija algérien (Alger) complet avec Khalti Zhor : 5 niveaux × 5 épisodes, 284 mots, 5 épreuves, 5 leçons de grammaire, 25 missions IA, parcours « Lire et écrire » algérien ; vrai sélecteur de langues (puce en haut à droite ou Profil → Langue apprise) prêt pour d'autres packs ; accords garçon/fille génériques `{g:garçon|fille}`.
Version 0.5 : parcours « Lire et écrire » (10 unités, 31 lettres, tracé au doigt, construction de mots).
Version 0.4 : tunisien complet (5 niveaux × 5 épisodes, 242 mots), 11 types d'exercices avec difficulté progressive, grammaire, missions IA.
Version 0.3 : tunisien (niveaux 1 et 2) et kabyle (niveau 1, brouillon), révisions quotidiennes, discussion avec l'IA, rappel quotidien, Studio famille.
Les textes tunisiens et algériens doivent être relus par un natif avant de partager l'appli (listes dans `docs/reference-tounsi.md` et `docs/reference-algerien.md`).

## Version web (iPhone)

- Adresse : https://galllinho.github.io/tounsi-w-bark/ (publiée par `.github/workflows/web.yml` à chaque push sur main ; construite avec `WEB=1 node scripts/build-www.js`).
- Sans IA (pas de discussion ni de missions) : elle est pensée pour des enfants, et Gemini est réservé aux adultes.
- S'installe sur l'écran d'accueil (Safari → Partager → Sur l'écran d'accueil), marche hors ligne (service worker `scripts/sw-template.js`), icônes et manifeste dans `web/`.
- Sauvegarde : sur le téléphone, plus un « code de secours » (Profil → Sauvegarde) pour récupérer sa progression ou la passer d'un téléphone à l'autre, Android compris.
- Plusieurs profils par téléphone (Profil → Profils sur ce téléphone) : écran « Qui joue ? » à l'ouverture dès qu'il y en a plus d'un ; chaque profil a sa progression, son skin et son code de secours.
