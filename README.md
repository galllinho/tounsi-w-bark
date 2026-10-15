# Tounsi w Bark

Appli Android pour apprendre le darija tunisien avec humour, avec Khalti, la tata qui juge tout.

- `src/content.js` : contenus tunisiens (niveaux, épisodes, mots, exercices, personnages, répliques de Khalti, discussion)
- `src/content-kab.js` : contenus kabyles avec Nanna (brouillon à faire relire)
- `src/audio/<langue>/` : voix enregistrées dans le Studio famille (`node scripts/import-voices.js voix-….json`)
- `src/app.html` : l'application
- `android-config/` : icône et clé de signature (la même à chaque version, pour pouvoir mettre à jour l'appli)
- `.github/workflows/build.yml` : construit l'APK à chaque mise à jour (onglet Releases)

Version 0.3 : tunisien (niveaux 1 et 2) et kabyle (niveau 1, brouillon), révisions quotidiennes, discussion avec l'IA, rappel quotidien, Studio famille.
Les textes tunisiens doivent être relus par un natif avant de partager l'appli.
