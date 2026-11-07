// Tounsi w Bark — contenu culturel tunisien : niveau bonus « Fêtes et traditions » (ouvert dès le niveau 1 réussi),
// leçon « Les formules qui font plaisir », et « Les histoires de Khalti » (contes de Jha) à écouter.
// Règles suivies : docs/reference-tounsi.md (parler de Tunis). À faire relire par un locuteur natif (voir la référence).
// Accords selon le profil : {g:forme garçon|forme fille}, {petit}, {petitAr}, {e} pour le français.

(() => {
  const T = window.TWB_CONTENT.tn;
  const R = (who, tn, ar, fr, options) => ({ type: 'reply', who, line: { tn, ar, fr }, options });
  const ok = (tn, fr) => ({ tn, fr, ok: true });
  const ko = (tn, fr, why) => ({ tn, fr, why });
  const C = (q, tn, good, bad, explain) => ({ type: 'choice', q, tn, options: [{ t: good, ok: true }].concat(bad.map(t => ({ t }))), explain });

  Object.assign(window.TWB_CAST, {
    jha: { name: 'Jha', role: 'Le héros des contes, malin et un peu fou', skin: '#b07a52', chechia: '#7a1f1f', moustache: true },
    jar: { name: 'Le voisin de Jha', role: 'Il prête, et il le regrette', skin: '#c48b63', cap: '#2e6b5e' }
  });

  T.levels.push({
    id: 'n6', num: 6, name: 'Fêtes et traditions', after: 'n1boss',
    goal: 'Ramadan, l’Aïd, le Mouled et les proverbes de Jedda (niveau bonus)',
    episodes: [
      // ------------------------------------------------------------------ Épisode 1
      {
        id: 'n6e1', title: 'Le ftour de Ramadan',
        pitch: 'Le soleil se couche, la table est prête, et Khalti surveille l’horloge comme un arbitre.',
        cast: ['khalti', 'jedda'],
        scene: [
          { who: 'khalti', tn: 'Okaad, {petit}! El ftour hadher.', ar: 'اقعد، {petitAr}! الفطور حاضر.', fr: 'Assieds-toi, mon petit ! Le ftour est prêt.', note: 'Le ftour : le repas qui rompt le jeûne, au coucher du soleil.' },
          { who: 'jedda', tn: 'Saha ftourek!', ar: 'صحّة فطورك!', fr: 'Bon ftour !', note: 'La formule qu’on se dit en commençant le repas du soir pendant Ramadan.' },
          { who: 'me', tn: 'Saha ftourek ya Jedda!', ar: 'صحّة فطورك يا جدّة!', fr: 'Bon ftour, Jedda !' },
          { who: 'khalti', tn: 'Ebda bel chorba w el brik.', ar: 'ابدا بالشربة والبريك.', fr: 'Commence par la chorba et la brik.' },
          { who: 'me', tn: 'Chnoua fel brik?', ar: 'شنوة في البريك؟', fr: 'Qu’est-ce qu’il y a dans la brik ?' },
          { who: 'khalti', tn: 'Aadhma, tonn w maadnous.', ar: 'عظمة، تنّ ومعدنوس.', fr: 'Un œuf, du thon et du persil.' },
          { who: 'jedda', tn: 'Rod belek, skhoun barcha!', ar: 'رد بالك، سخون برشة!', fr: 'Attention, elle est très chaude !' },
          { who: 'me', tn: 'Ah! Bnin, ama skhoun!', ar: 'آه! بنين، أما سخون!', fr: 'Ah ! Délicieuse, mais brûlante !', note: 'Le jaune d’œuf qui coule sur le menton : un rite de passage.' },
          { who: 'khalti', tn: 'Baad el ftour, kahwa w makroudh.', ar: 'بعد الفطور، قهوة ومقروض.', fr: 'Après le ftour, café et makroudh.' },
          { who: 'jedda', tn: 'Ramdhan karim, ya {petit}.', ar: 'رمضان كريم، يا {petitAr}.', fr: 'Ramadan généreux, mon petit.' }
        ],
        words: [
          { id: 'f6_ftour', tn: 'El ftour', ar: 'الفطور', fr: 'Le ftour (repas du soir à Ramadan)', ex: 'El ftour hadher = le ftour est prêt.' },
          { id: 'f6_saha', tn: 'Saha ftourek', ar: 'صحّة فطورك', fr: 'Bon ftour', ex: 'On le dit en commençant le repas.' },
          { id: 'f6_chorba', tn: 'Chorba', ar: 'شربة', fr: 'Soupe (chorba)', ex: 'Ebda bel chorba = commence par la soupe.' },
          { id: 'f6_brik', tn: 'Brik', ar: 'بريك', fr: 'Brik (feuille croustillante farcie)', ex: 'Brik bel aadhma = brik à l’œuf.' },
          { id: 'f6_aadhma', tn: 'Aadhma', ar: 'عظمة', fr: 'Œuf', ex: 'Aadhma w tonn = un œuf et du thon.' },
          { id: 'f6_skhoun', tn: 'Skhoun', ar: 'سخون', fr: 'Chaud', ex: 'Skhoun barcha = très chaud.' },
          { id: 'f6_rodbelek', tn: 'Rod belek', ar: 'رد بالك', fr: 'Attention, fais attention', ex: 'Rod belek, skhoun!' },
          { id: 'f6_makroudh', tn: 'Makroudh', ar: 'مقروض', fr: 'Makroudh (gâteau aux dattes)', ex: 'Kahwa w makroudh.' },
          { id: 'f6_ramdhan', tn: 'Ramdhan karim', ar: 'رمضان كريم', fr: 'Ramadan généreux (bon Ramadan)', ex: 'Le vœu du mois de Ramadan.' }
        ],
        exercises: [
          R('jedda', 'Saha ftourek!', 'صحّة فطورك!', 'Bon ftour !', [
            ok('Saha ftourek ya Jedda!', 'Bon ftour, Jedda !'),
            ko('Bslema!', 'Au revoir !', 'Tu pars au moment où on passe à table ? Jedda n’en revient pas.'),
            ko('Ghali barcha!', 'C’est très cher !', 'Ce n’est pas un restaurant, c’est chez Jedda.')]),
          R('khalti', 'Rod belek, skhoun barcha!', 'رد بالك، سخون برشة!', 'Attention, elle est très chaude !', [
            ok('Behi, yaychek.', 'D’accord, merci.'),
            ko('Ena {g:bardan|bardana}.', 'J’ai froid.', 'Elle te parle de la brik, pas de la météo.'),
            ko('Win el kahwa?', 'Où est le café ?', 'Le café, c’est après. Khalti a un ordre à respecter.')]),
          { type: 'order', tn: 'Ebda bel chorba w el brik', fr: 'Commence par la chorba et la brik', tokens: ['Ebda', 'bel', 'chorba', 'w', 'el', 'brik'] },
          { type: 'speak', tn: 'Saha ftourek', ar: 'صحّة فطورك', fr: 'Bon ftour' }
        ],
        mission: { who: 'khalti', goal: 'Souhaite un bon ftour à Khalti, demande ce qu’il y a dans la brik, puis dis que c’est délicieux.', win: 'L’élève a dit « saha ftourek », a demandé ce qu’il y a dans la brik et a dit que c’était délicieux, en tunisien.' }
      },
      // ------------------------------------------------------------------ Épisode 2
      {
        id: 'n6e2', title: 'Le matin de l’Aïd',
        pitch: 'Habits neufs, gâteaux partout, et une question qui brûle les lèvres des enfants : « Et la mahba ? »',
        cast: ['khalti', 'jedda'],
        scene: [
          { who: 'khalti', tn: 'Aid mabrouk, ya {petit}!', ar: 'عيد مبروك، يا {petitAr}!', fr: 'Bonne fête de l’Aïd, mon petit !' },
          { who: 'me', tn: 'Aid mabrouk ya Khalti! W aidek mabrouk ya Jedda!', ar: 'عيد مبروك يا خالتي! وعيدك مبروك يا جدّة!', fr: 'Bonne fête, Khalti ! Et bonne fête à toi, Jedda !' },
          { who: 'jedda', tn: 'Allah ybarek fik. Lbest hwayej jdod?', ar: 'الله يبارك فيك. لبست حوايج جدد؟', fr: 'Que Dieu te bénisse. Tu as mis des habits neufs ?' },
          { who: 'me', tn: 'Ey! Chouf, {g:mrigel|mrigla}?', ar: 'إيه! شوف، {g:مريڨل|مريڨلة}؟', fr: 'Oui ! Regarde, je suis bien ?' },
          { who: 'khalti', tn: 'Behi barcha! Ija, koul baklewa.', ar: 'باهي برشة! إيجا، كول بقلاوة.', fr: 'Très bien ! Viens, mange de la baklawa.' },
          { who: 'me', tn: 'W el mahba?', ar: 'والمهبة؟', fr: 'Et la mahba ?', note: 'La mahba : l’argent que les grands donnent aux enfants le jour de l’Aïd.' },
          { who: 'jedda', tn: 'Hahaha! Hedhi el mahba mtaak.', ar: 'ههه! هاذي المهبة متاعك.', fr: 'Hahaha ! Voilà ta mahba.' },
          { who: 'me', tn: 'Yaychek ya Jedda!', ar: 'يعيشك يا جدّة!', fr: 'Merci, Jedda !' },
          { who: 'khalti', tn: 'Tawa nemchiw nzourou el aayla.', ar: 'توّا نمشيو نزوروا العايلة.', fr: 'Maintenant, on va rendre visite à la famille.', note: 'Le jour de l’Aïd, on fait le tour de la famille. Prévoir de la place pour les gâteaux.' }
        ],
        words: [
          { id: 'f6_aidmabrouk', tn: 'Aid mabrouk', ar: 'عيد مبروك', fr: 'Bonne fête (de l’Aïd)', ex: 'Aidek mabrouk = bonne fête à toi.' },
          { id: 'f6_ybarek', tn: 'Allah ybarek fik', ar: 'الله يبارك فيك', fr: 'Que Dieu te bénisse (merci)', ex: 'La réponse polie à un vœu.' },
          { id: 'f6_hwayej', tn: 'Hwayej jdod', ar: 'حوايج جدد', fr: 'Des habits neufs', ex: 'Lbest hwayej jdod = j’ai mis des habits neufs.' },
          { id: 'f6_chouf', tn: 'Chouf', ar: 'شوف', fr: 'Regarde', ex: 'Chouf! = regarde !' },
          { id: 'f6_baklewa', tn: 'Baklewa', ar: 'بقلاوة', fr: 'Baklawa (gâteau au miel)', ex: 'Koul baklewa = mange de la baklawa.' },
          { id: 'f6_mahba', tn: 'El mahba', ar: 'المهبة', fr: 'L’argent de l’Aïd (pour les enfants)', ex: 'W el mahba? = et la mahba ?' },
          { id: 'f6_nzourou', tn: 'Nzourou', ar: 'نزوروا', fr: 'On rend visite', ex: 'Nzourou el aayla = on rend visite à la famille.' },
          { id: 'f6_aayla', tn: 'El aayla', ar: 'العايلة', fr: 'La famille', ex: 'Kol el aayla = toute la famille.' }
        ],
        exercises: [
          R('khalti', 'Aid mabrouk, ya {petit}!', 'عيد مبروك، يا {petitAr}!', 'Bonne fête de l’Aïd, mon petit !', [
            ok('Aid mabrouk ya Khalti!', 'Bonne fête, Khalti !'),
            ko('Saha ftourek!', 'Bon ftour !', 'Ramadan est fini : aujourd’hui, c’est l’Aïd !'),
            ko('Samahni.', 'Pardon.', 'Tu n’as rien fait de mal. Pour l’instant.')]),
          R('jedda', 'Lbest hwayej jdod?', 'لبست حوايج جدد؟', 'Tu as mis des habits neufs ?', [
            ok('Ey! Chouf!', 'Oui ! Regarde !'),
            ko('Le, ma klitch.', 'Non, je n’ai pas mangé.', 'Elle parle de tes habits, pas de ton ventre.'),
            ko('Bkaddech?', 'C’est combien ?', 'Jedda ne vend pas tes habits.')]),
          { type: 'order', tn: 'Tawa nemchiw nzourou el aayla', fr: 'Maintenant on va rendre visite à la famille', tokens: ['Tawa', 'nemchiw', 'nzourou', 'el', 'aayla'] },
          { type: 'speak', tn: 'Aid mabrouk', ar: 'عيد مبروك', fr: 'Bonne fête' }
        ],
        mission: { who: 'jedda', goal: 'Souhaite bonne fête à Jedda, montre-lui tes habits neufs et demande-lui (gentiment) ta mahba.', win: 'L’élève a dit « aid mabrouk », a parlé de ses habits neufs et a demandé la mahba poliment, en tunisien.' }
      },
      // ------------------------------------------------------------------ Épisode 3
      {
        id: 'n6e3', title: 'Le mouton de l’Aïd el Kbir',
        pitch: 'Un mouton est arrivé sur la terrasse. Il a déjà mangé une plante, un sac et presque la chaussure de Khalti.',
        cast: ['khalti', 'jedda'],
        scene: [
          { who: 'me', tn: 'Khalti! Famma allouch fel stah!', ar: 'خالتي! فمّا علّوش في السطح!', fr: 'Khalti ! Il y a un mouton sur la terrasse !' },
          { who: 'khalti', tn: 'Ey, jebna el allouch lel Aid el Kbir.', ar: 'إيه، جبنا العلّوش للعيد الكبير.', fr: 'Oui, on a ramené le mouton pour l’Aïd el Kbir.' },
          { who: 'me', tn: 'Chnoua esmou?', ar: 'شنوة اسمو؟', fr: 'Comment il s’appelle ?' },
          { who: 'jedda', tn: 'Allouch ma andouch esm!', ar: 'علّوش ما عندوش اسم!', fr: 'Un mouton, ça n’a pas de nom !' },
          { who: 'me', tn: 'Ena bech nsammih Mimi.', ar: 'أنا باش نسمّيه ميمي.', fr: 'Moi, je vais l’appeler Mimi.' },
          { who: 'khalti', tn: 'Ya rabbi! Mimi kla sabbati!', ar: 'يا ربّي! ميمي كلا صبّاطي!', fr: 'Oh là là ! Mimi a mangé ma chaussure !' },
          { who: 'me', tn: 'Hahaha! Mimi jiaan barcha.', ar: 'ههه! ميمي جيعان برشة.', fr: 'Hahaha ! Mimi a très faim.' },
          { who: 'jedda', tn: 'Aatih chwaya khobz w ma.', ar: 'عطيه شويّة خبز وماء.', fr: 'Donne-lui un peu de pain et d’eau.' },
          { who: 'khalti', tn: 'W nhar el Aid, nfarhou bel aayla el kol.', ar: 'ونهار العيد، نفرحوا بالعايلة الكل.', fr: 'Et le jour de l’Aïd, on fait la fête avec toute la famille.' }
        ],
        words: [
          { id: 'f6_allouch', tn: 'Allouch', ar: 'علّوش', fr: 'Mouton', ex: 'Famma allouch = il y a un mouton.' },
          { id: 'f6_aidkbir', tn: 'El Aid el Kbir', ar: 'العيد الكبير', fr: 'L’Aïd el Kbir (la grande fête)', ex: 'La fête du mouton.' },
          { id: 'f6_stah', tn: 'Stah', ar: 'سطح', fr: 'Terrasse (toit plat)', ex: 'Fel stah = sur la terrasse.' },
          { id: 'f6_jebna', tn: 'Jebna', ar: 'جبنا', fr: 'On a ramené', ex: 'Jeb = il a ramené.' },
          { id: 'f6_sabbat', tn: 'Sabbat', ar: 'صبّاط', fr: 'Chaussure', ex: 'Sabbati = ma chaussure.' },
          { id: 'f6_ijaan', tn: '{g:Jiaan|Jiaana}', ar: '{g:جيعان|جيعانة}', fr: 'Qui a faim', ex: 'Ena jiaan = j’ai faim (garçon), ena jiaana (fille).' },
          { id: 'f6_aatih', tn: 'Aatih', ar: 'عطيه', fr: 'Donne-lui', ex: 'Aatini = donne-moi.' },
          { id: 'f6_nfarhou', tn: 'Nfarhou', ar: 'نفرحوا', fr: 'On fait la fête, on se réjouit', ex: 'Nfarhou bel aayla = on fait la fête en famille.' }
        ],
        exercises: [
          R('khalti', 'Ya rabbi! Mimi kla sabbati!', 'يا ربّي! ميمي كلا صبّاطي!', 'Oh là là ! Mimi a mangé ma chaussure !', [
            ok('Hahaha! Mimi jiaan barcha.', 'Hahaha ! Mimi a très faim.'),
            ko('Bnina barcha!', 'C’est délicieux !', 'Ce n’est pas toi qui as mangé la chaussure. Enfin, on espère.'),
            ko('Aid mabrouk!', 'Bonne fête !', 'Khalti a perdu une chaussure et toi tu lui souhaites bonne fête ?')]),
          R('jedda', 'Allouch ma andouch esm!', 'علّوش ما عندوش اسم!', 'Un mouton, ça n’a pas de nom !', [
            ok('Ena bech nsammih Mimi.', 'Moi, je vais l’appeler Mimi.'),
            ko('Ena {g:bardan|bardana}.', 'J’ai froid.', 'On parle du nom du mouton.'),
            ko('Bkaddech?', 'C’est combien ?', 'Trop tard pour négocier, il est déjà sur la terrasse.')]),
          { type: 'order', tn: 'Famma allouch fel stah', fr: 'Il y a un mouton sur la terrasse', tokens: ['Famma', 'allouch', 'fel', 'stah'] },
          { type: 'speak', tn: 'Aatih chwaya khobz', ar: 'عطيه شويّة خبز', fr: 'Donne-lui un peu de pain' }
        ],
        mission: { who: 'khalti', goal: 'Dis à Khalti qu’il y a un mouton sur la terrasse, donne-lui un nom, et propose de lui donner du pain.', win: 'L’élève a parlé du mouton sur la terrasse, lui a donné un nom et a proposé de le nourrir, en tunisien.' }
      },
      // ------------------------------------------------------------------ Épisode 4
      {
        id: 'n6e4', title: 'L’assida du Mouled',
        pitch: 'Pour le Mouled, Khalti prépare l’assida au zgougou. Ton rôle : tourner la crème pendant une heure sans te plaindre.',
        cast: ['khalti', 'jedda'],
        scene: [
          { who: 'khalti', tn: 'Ghodwa el Mouled. Bech naamlou assidet ezzgougou.', ar: 'غدوة المولد. باش نعملوا عصيدة الزقوقو.', fr: 'Demain, c’est le Mouled. On va faire l’assida au zgougou.', note: 'Le Mouled fête la naissance du Prophète. En Tunisie, on mange l’assida, une crème aux graines de pin d’Alep.' },
          { who: 'me', tn: 'Chnoua ezzgougou?', ar: 'شنوة الزقوقو؟', fr: 'C’est quoi le zgougou ?' },
          { who: 'jedda', tn: 'Habb sghir kahel.', ar: 'حبّ صغير كحل.', fr: 'Des petites graines noires.' },
          { who: 'khalti', tn: 'Dawwer, dima dawwer!', ar: 'دوّر، ديما دوّر!', fr: 'Tourne, tourne sans arrêt !' },
          { who: 'me', tn: 'Kaddech mel wakt?', ar: 'قدّاش مالوقت؟', fr: 'Combien de temps ?' },
          { who: 'khalti', tn: 'Saa.', ar: 'ساعة.', fr: 'Une heure.' },
          { who: 'me', tn: 'Saa?! Yeddi taabet!', ar: 'ساعة؟! يدّي تعبت!', fr: 'Une heure ?! Ma main est fatiguée !' },
          { who: 'jedda', tn: 'Elli yheb el aasel, yesber l kris ennhal.', ar: 'اللي يحبّ العسل، يصبر لقريص النحل.', fr: 'Qui aime le miel supporte les piqûres d’abeille.', note: 'Un proverbe : pour avoir quelque chose de bon, il faut faire des efforts.' },
          { who: 'khalti', tn: 'W baad, nzayynou bel bondok w el louz.', ar: 'وبعد، نزيّنوا بالبندق واللوز.', fr: 'Et après, on décore avec des pignons et des amandes.' }
        ],
        words: [
          { id: 'f6_mouled', tn: 'El Mouled', ar: 'المولد', fr: 'Le Mouled (fête)', ex: 'Ghodwa el Mouled = demain c’est le Mouled.' },
          { id: 'f6_assida', tn: 'Assida', ar: 'عصيدة', fr: 'Assida (crème du Mouled)', ex: 'Assidet ezzgougou = assida au zgougou.' },
          { id: 'f6_zgougou', tn: 'Zgougou', ar: 'زقوقو', fr: 'Graines de pin d’Alep', ex: 'Habb sghir kahel = des petites graines noires.' },
          { id: 'f6_doubel', tn: 'Dawwer', ar: 'دوّر', fr: 'Tourne', ex: 'Dima dawwer = tourne sans arrêt.' },
          { id: 'f6_saa', tn: 'Saa', ar: 'ساعة', fr: 'Une heure', ex: 'Saa kamla = une heure entière.' },
          { id: 'f6_yeddi', tn: 'Yeddi', ar: 'يدّي', fr: 'Ma main', ex: 'Yeddi taabet = ma main est fatiguée.' },
          { id: 'f6_aasel', tn: 'Aasel', ar: 'عسل', fr: 'Miel', ex: 'Elli yheb el aasel…' },
          { id: 'f6_louz', tn: 'Louz', ar: 'لوز', fr: 'Amandes', ex: 'Bel louz = avec des amandes.' }
        ],
        exercises: [
          R('khalti', 'Dawwer, dima dawwer!', 'دوّر، ديما دوّر!', 'Tourne, tourne sans arrêt !', [
            ok('Kaddech mel wakt?', 'Combien de temps ?'),
            ko('Aid mabrouk!', 'Bonne fête !', 'C’est demain la fête. Aujourd’hui, on tourne.'),
            ko('Win el mahba?', 'Où est la mahba ?', 'La mahba, c’est pour l’Aïd, pas pour le Mouled.')]),
          R('khalti', 'Saa.', 'ساعة.', 'Une heure.', [
            ok('Saa?! Yeddi taabet!', 'Une heure ?! Ma main est fatiguée !'),
            ko('Saha ftourek.', 'Bon ftour.', 'On n’est pas à Ramadan.'),
            ko('Famma allouch.', 'Il y a un mouton.', 'Le mouton n’a rien à voir avec l’assida.')]),
          { type: 'order', tn: 'Bech naamlou assidet ezzgougou', fr: 'On va faire l’assida au zgougou', tokens: ['Bech', 'naamlou', 'assidet', 'ezzgougou'] },
          { type: 'speak', tn: 'Yeddi taabet', ar: 'يدّي تعبت', fr: 'Ma main est fatiguée' }
        ],
        mission: { who: 'khalti', goal: 'Demande à Khalti ce qu’est le zgougou, combien de temps il faut tourner, et plains-toi (un peu) de ta main.', win: 'L’élève a demandé ce qu’est le zgougou, le temps de préparation, et a dit que sa main était fatiguée, en tunisien.' }
      },
      // ------------------------------------------------------------------ Épisode 5
      {
        id: 'n6e5', title: 'Les proverbes de Jedda',
        pitch: 'Jedda a un proverbe pour chaque situation. Même pour le Wi-Fi.',
        cast: ['jedda'],
        scene: [
          { who: 'me', tn: 'Jedda, ena {g:metakhar|metakhra}, el kar mcha!', ar: 'جدّة، أنا {g:متأخّر|متأخّرة}، الكار مشى!', fr: 'Jedda, je suis en retard, le bus est parti !' },
          { who: 'jedda', tn: 'Kol taakhira fiha khira.', ar: 'كل تأخيرة فيها خيرة.', fr: 'Chaque retard a du bon.', note: 'On le dit pour consoler : peut-être que ce retard t’a évité un problème.' },
          { who: 'me', tn: 'W ena nheb neskon fi dar kbira.', ar: 'وأنا نحبّ نسكن في دار كبيرة.', fr: 'Et moi, je veux habiter dans une grande maison.' },
          { who: 'jedda', tn: 'Ejjar kbal eddar.', ar: 'الجار قبل الدار.', fr: 'Le voisin avant la maison.', note: 'Avant de choisir une maison, regarde qui sera ton voisin.' },
          { who: 'me', tn: 'Ama eddar el kdima kenet ahla…', ar: 'أما الدار القديمة كانت أحلى…', fr: 'Mais l’ancienne maison était mieux…' },
          { who: 'jedda', tn: 'Elli fet met.', ar: 'اللي فات مات.', fr: 'Ce qui est passé est mort.', note: 'Le passé est passé : on regarde devant.' },
          { who: 'me', tn: 'Jedda, enti taaref kol chay!', ar: 'جدّة، إنتي تعرف كل شي!', fr: 'Jedda, tu sais tout !' },
          { who: 'jedda', tn: 'Ey. W tawa, ochrob tey w osket chwaya.', ar: 'إيه. وتوّا، اشرب تاي واسكت شويّة.', fr: 'Oui. Et maintenant, bois du thé et tais-toi un peu.' }
        ],
        words: [
          { id: 'f6_taakhira', tn: 'Kol taakhira fiha khira', ar: 'كل تأخيرة فيها خيرة', fr: 'Chaque retard a du bon', ex: 'Pour consoler quelqu’un en retard.' },
          { id: 'f6_jar', tn: 'Ejjar kbal eddar', ar: 'الجار قبل الدار', fr: 'Le voisin avant la maison', ex: 'Choisis bien tes voisins.' },
          { id: 'f6_fet', tn: 'Elli fet met', ar: 'اللي فات مات', fr: 'Le passé est passé', ex: 'Mot à mot : ce qui est passé est mort.' },
          { id: 'f6_metakhar', tn: '{g:Metakhar|Metakhra}', ar: '{g:متأخّر|متأخّرة}', fr: 'En retard', ex: 'Ena metakhar (garçon), ena metakhra (fille).' },
          { id: 'f6_kar', tn: 'El kar', ar: 'الكار', fr: 'Le bus, le car', ex: 'El kar mcha = le bus est parti.' },
          { id: 'f6_kdim', tn: 'Kdim', ar: 'قديم', fr: 'Vieux, ancien', ex: 'Dar kdima = une vieille maison.' },
          { id: 'f6_taaref', tn: 'Taaref', ar: 'تعرف', fr: 'Tu sais', ex: 'Naaref = je sais.' },
          { id: 'f6_osket', tn: 'Osket', ar: 'اسكت', fr: 'Tais-toi', ex: 'Osket chwaya = tais-toi un peu.' }
        ],
        exercises: [
          R('jedda', 'Chbik?', 'شبيك؟', 'Qu’est-ce que tu as ?', [
            ok('Ena {g:metakhar|metakhra}, el kar mcha!', 'Je suis en retard, le bus est parti !'),
            ko('Aid mabrouk!', 'Bonne fête !', 'Jedda te demande ce qui ne va pas.'),
            ko('Saha ftourek.', 'Bon ftour.', 'Ce n’est pas le moment de manger.')]),
          R('jedda', 'Elli fet met.', 'اللي فات مات.', 'Le passé est passé.', [
            ok('Ey, aandek el hakk.', 'Oui, tu as raison.'),
            ko('Bkaddech?', 'C’est combien ?', 'Les proverbes de Jedda sont gratuits.'),
            ko('Rod belek!', 'Attention !', 'Il n’y a aucun danger, juste de la nostalgie.')]),
          { type: 'order', tn: 'Kol taakhira fiha khira', fr: 'Chaque retard a du bon', tokens: ['Kol', 'taakhira', 'fiha', 'khira'] },
          { type: 'speak', tn: 'Elli fet met', ar: 'اللي فات مات', fr: 'Le passé est passé' }
        ],
        mission: { who: 'jedda', goal: 'Raconte à Jedda un petit problème (un retard, une dispute…) et réponds-lui avec un proverbe tunisien.', win: 'L’élève a raconté un problème et a utilisé au moins un proverbe tunisien correctement.' }
      }
    ],
    boss: { id: 'n6boss', title: 'L’épreuve des fêtes', pitch: '12 questions sur les fêtes et les proverbes. Il en faut 8 pour avoir ta part de baklawa.', count: 12, pass: 8 },
    grammar: {
      id: 'g6', title: 'Les formules qui font plaisir',
      cards: [
        { title: 'Pour les fêtes', text: 'Chaque fête a sa formule. On répond souvent par « Allah ybarek fik » (que Dieu te bénisse).',
          table: [['Ramdhan karim', 'bon Ramadan'], ['Saha ftourek', 'bon ftour (repas du soir)'], ['Aid mabrouk', 'bonne fête de l’Aïd'], ['Allah ybarek fik', 'merci (que Dieu te bénisse)']] },
        { title: 'Pour les bonnes nouvelles', text: 'Un mariage, un bébé, un examen réussi : « Mabrouk ! ». Pour un mariage, on ajoute « Rabbi ykammel bel khir » (que Dieu le mène à bien).',
          table: [['Mabrouk!', 'félicitations !'], ['Rabbi ykammel bel khir', 'que tout se passe bien'], ['Saha!', 'à ta santé, bien joué (habits neufs, coiffeur…)']] }
      ],
      exercises: [
        C('Pendant Ramadan, au moment du repas du soir, on dit…', '', 'Saha ftourek', ['Aid mabrouk', 'Mabrouk', 'Bslema']),
        C('Le jour de l’Aïd, on dit…', '', 'Aid mabrouk', ['Saha ftourek', 'Ramdhan karim', 'Samahni']),
        C('Quelqu’un te dit « Aid mabrouk ». Tu réponds…', '', 'Allah ybarek fik', ['Saha ftourek', 'Ghali barcha', 'Samahni']),
        C('Ta cousine a réussi son examen. Tu dis…', '', 'Mabrouk!', ['Saha ftourek', 'Rod belek', 'Elli fet met']),
        C('Que veut dire « elli fet met » ?', 'Elli fet met', 'Le passé est passé', ['Chaque retard a du bon', 'Le voisin avant la maison', 'Bonne fête']),
        C('Ton ami est en retard et triste. Tu lui dis…', '', 'Kol taakhira fiha khira', ['Ejjar kbal eddar', 'Aid mabrouk', 'Saha ftourek'])
      ]
    }
  });

  // Missions (déjà dans les épisodes) · formules de vœux vérifiées contre docs/reference-tounsi.md

  // =====================================================================================
  // LES HISTOIRES DE KHALTI — contes de Jha (tradition orale, domaine public), racontés en tunisien
  // =====================================================================================
  T.stories = [
    {
      id: 'st_mesmar', title: 'Le clou de Jha', pitch: 'Jha vend sa maison… mais pas tout à fait.',
      lines: [
        { who: 'khalti', tn: 'Jha baa darou.', ar: 'جحا باع دارو.', fr: 'Jha a vendu sa maison.' },
        { who: 'khalti', tn: 'Ama khalla mesmar wahed fel hit.', ar: 'أما خلّى مسمار واحد في الحيط.', fr: 'Mais il a gardé un clou dans le mur.' },
        { who: 'jha', tn: 'Eddar mtaak, ama el mesmar mtaai!', ar: 'الدار متاعك، أما المسمار متاعي!', fr: 'La maison est à toi, mais le clou est à moi !' },
        { who: 'khalti', tn: 'Kol nhar, Jha yji ychouf el mesmar mtaou.', ar: 'كل نهار، جحا يجي يشوف المسمار متاعو.', fr: 'Chaque jour, Jha venait voir son clou.' },
        { who: 'jar', tn: 'Ya Jha, yezzi! Kol nhar fi dari!', ar: 'يا جحا، يزّي! كل نهار في داري!', fr: 'Jha, ça suffit ! Tous les jours chez moi !' },
        { who: 'jha', tn: 'Ena jit nchouf el mesmar mtaai, mouch enti.', ar: 'أنا جيت نشوف المسمار متاعي، موش إنتي.', fr: 'Je viens voir mon clou, pas toi.' },
        { who: 'khalti', tn: 'W hedheka mesmar Jha: sbab bech terjaa dima.', ar: 'وهاذاكا مسمار جحا: سبب باش ترجع ديما.', fr: 'Et voilà le « clou de Jha » : un prétexte pour revenir toujours.' }
      ],
      moral: 'Quand quelqu’un garde toujours une excuse pour revenir, on dit : « C’est le clou de Jha ! »',
      quiz: [
        C('Qu’est-ce que Jha a gardé dans la maison ?', '', 'Un clou dans le mur', ['La porte', 'Une chaise', 'Son âne']),
        C('Que veut dire « yezzi » ?', 'Yezzi!', 'Ça suffit !', ['Bienvenue !', 'Merci !', 'Encore !']),
        C('Que veut dire « mesmar » ?', 'Mesmar', 'Un clou', ['Un mur', 'Une maison', 'Un jour'])
      ]
    },
    {
      id: 'st_hmar', title: 'Jha, son fils et l’âne', pitch: 'Quoi qu’ils fassent, les gens trouvent à redire.',
      lines: [
        { who: 'khalti', tn: 'Jha w weldou mchaw lel souk bel hmar.', ar: 'جحا وولدو مشاو للسوق بالحمار.', fr: 'Jha et son fils sont allés au souk avec l’âne.' },
        { who: 'khalti', tn: 'Jha rkeb, w weldou mcha ala sakih.', ar: 'جحا ركب، وولدو مشى على ساقيه.', fr: 'Jha est monté, et son fils a marché à pied.' },
        { who: 'jar', tn: 'Meskin el wled!', ar: 'مسكين الولد!', fr: 'Le pauvre enfant !' },
        { who: 'khalti', tn: 'Baad, el wled rkeb, w Jha mcha.', ar: 'بعد، الولد ركب، وجحا مشى.', fr: 'Alors l’enfant est monté, et Jha a marché.' },
        { who: 'jar', tn: 'Aib! El wled rakeb w bouh yemchi!', ar: 'عيب! الولد راكب وبوه يمشي!', fr: 'Quelle honte ! L’enfant est assis et son père marche !' },
        { who: 'khalti', tn: 'Rakbou ezzouz.', ar: 'ركبوا الزوز.', fr: 'Ils sont montés tous les deux.' },
        { who: 'jar', tn: 'Meskin el hmar!', ar: 'مسكين الحمار!', fr: 'Le pauvre âne !' },
        { who: 'khalti', tn: 'Mchaw ezzouz ala sakihom.', ar: 'مشاو الزوز على ساقيهم.', fr: 'Ils ont marché tous les deux.' },
        { who: 'jar', tn: 'Andhom hmar w yemchiw ala sakihom! Hahaha!', ar: 'عندهم حمار ويمشيو على ساقيهم! ههه!', fr: 'Ils ont un âne et ils marchent à pied ! Hahaha !' },
        { who: 'jha', tn: 'Tchouf, ya weldi? Ma tnajjemch tredhi ennes el kol.', ar: 'تشوف، يا ولدي؟ ما تنجّمش ترضي الناس الكل.', fr: 'Tu vois, mon fils ? On ne peut pas plaire à tout le monde.' }
      ],
      moral: 'On ne peut pas plaire à tout le monde : fais ce qui te semble juste.',
      quiz: [
        C('Où vont Jha et son fils ?', '', 'Au souk', ['À la plage', 'Chez Khalti', 'À l’école']),
        C('Que veut dire « meskin » ?', 'Meskin el hmar!', 'Le pauvre', ['Le beau', 'Le rapide', 'Le grand']),
        C('Que veut dire « hmar » ?', 'Hmar', 'Âne', ['Cheval', 'Mouton', 'Chat'])
      ]
    },
    {
      id: 'st_kasrouna', title: 'La marmite de Jha', pitch: 'Une marmite qui a des bébés ? Le voisin y croit… pour l’instant.',
      lines: [
        { who: 'khalti', tn: 'Jha tsallef kasrouna mel jar.', ar: 'جحا تسلّف قصرونة مالجار.', fr: 'Jha a emprunté une marmite au voisin.' },
        { who: 'khalti', tn: 'Baad jemaa, rajjaaha w maaha kasrouna sghira.', ar: 'بعد جمعة، رجّعها ومعاها قصرونة صغيرة.', fr: 'Une semaine plus tard, il l’a rendue avec une petite marmite.' },
        { who: 'jar', tn: 'Chnoua hedhi?', ar: 'شنوة هاذي؟', fr: 'C’est quoi, ça ?' },
        { who: 'jha', tn: 'El kasrouna mtaak wildet!', ar: 'القصرونة متاعك ولدت!', fr: 'Ta marmite a eu un bébé !' },
        { who: 'khalti', tn: 'El jar farhan, khdhe ezzouz.', ar: 'الجار فرحان، خذا الزوز.', fr: 'Le voisin, tout content, a pris les deux.' },
        { who: 'khalti', tn: 'Baad chhar, Jha tsallef el kasrouna el kbira w ma rajjaahech.', ar: 'بعد شهر، جحا تسلّف القصرونة الكبيرة وما رجّعهاش.', fr: 'Un mois plus tard, Jha a emprunté la grande marmite et ne l’a pas rendue.' },
        { who: 'jar', tn: 'Ya Jha, win el kasrouna?', ar: 'يا جحا، وين القصرونة؟', fr: 'Jha, où est la marmite ?' },
        { who: 'jha', tn: 'Samahni… el kasrouna matet.', ar: 'سامحني… القصرونة ماتت.', fr: 'Désolé… la marmite est morte.' },
        { who: 'jar', tn: 'Kasrouna tmout?!', ar: 'قصرونة تموت؟!', fr: 'Une marmite, ça meurt ?!' },
        { who: 'jha', tn: 'Ki tnajjem toled, tnajjem tmout!', ar: 'كي تنجّم تولد، تنجّم تموت!', fr: 'Si elle peut avoir un bébé, elle peut mourir !' }
      ],
      moral: 'Celui qui croit une histoire quand elle l’arrange doit aussi la croire quand elle ne l’arrange plus !',
      quiz: [
        C('Qu’est-ce que Jha a emprunté ?', '', 'Une marmite', ['Un âne', 'Un clou', 'Un mouton']),
        C('Que veut dire « wildet » ?', 'El kasrouna wildet!', 'Elle a eu un bébé', ['Elle est tombée', 'Elle est cassée', 'Elle est partie']),
        C('Que veut dire « win » ?', 'Win el kasrouna?', 'Où', ['Quand', 'Pourquoi', 'Combien'])
      ]
    }
  ];
})();
