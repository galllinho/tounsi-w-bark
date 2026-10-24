# Tounsi w Bark

Appli Android pour apprendre le darija tunisien avec humour, avec Khalti, la tata qui juge tout.

- `src/content.js` : contenus tunisiens (niveaux, épisodes, mots, exercices, personnages, répliques de Khalti, discussion)
- `src/content-tn-more.js` : suite du tunisien (niveaux 1 à 5 complets, grammaire, missions)
- `docs/reference-tounsi.md` : règles et sources utilisées pour vérifier le tunisien
- `src/content-script.js` : parcours « Lire et écrire » (alphabet arabe pour le tunisien)
- `tools/tts/` + `.github/workflows/voix-test.yml` : test de la voix tunisienne (SILMA TTS Derja)
- `.github/workflows/voix-toutes.yml` (lancement manuel) : génère la voix de toutes les phrases qui n'en ont pas encore dans `src/audio/tn-ia/`, puis reconstruit l'APK. À relancer après un ajout de contenu. Voix : SILMA TTS Derja (Ghazouaniwala/silma-tts-derja), entraînée sur le corpus LinTO de Linagora (CC BY 4.0) ; usage gratuit et non commercial.
- `src/content-kab.js` : contenus kabyles avec Nanna (brouillon à faire relire)
- `src/audio/<langue>/` : voix enregistrées dans le Studio famille (elles passent avant les voix IA) (`node scripts/import-voices.js voix-….json`)
- `src/app.html` : l'application
- `android-config/` : icône et clé de signature (la même à chaque version, pour pouvoir mettre à jour l'appli)
- `.github/workflows/build.yml` : construit l'APK à chaque mise à jour (onglet Releases)

Version 0.5 : parcours « Lire et écrire » (10 unités, 31 lettres, tracé au doigt, construction de mots).
Version 0.4 : tunisien complet (5 niveaux × 5 épisodes, 242 mots), 11 types d'exercices avec difficulté progressive, grammaire, missions IA.
Version 0.3 : tunisien (niveaux 1 et 2) et kabyle (niveau 1, brouillon), révisions quotidiennes, discussion avec l'IA, rappel quotidien, Studio famille.
Les textes tunisiens doivent être relus par un natif avant de partager l'appli.

## Version web (iPhone)

- Adresse : https://galllinho.github.io/tounsi-w-bark/ (publiée par `.github/workflows/web.yml` à chaque push sur main ; construite avec `WEB=1 node scripts/build-www.js`).
- Sans IA (pas de discussion ni de missions) : elle est pensée pour des enfants, et Gemini est réservé aux adultes.
- S'installe sur l'écran d'accueil (Safari → Partager → Sur l'écran d'accueil), marche hors ligne (service worker `scripts/sw-template.js`), icônes et manifeste dans `web/`.
- Sauvegarde : sur le téléphone, plus un « code de secours » (Profil → Sauvegarde) pour récupérer sa progression ou la passer d'un téléphone à l'autre, Android compris.
