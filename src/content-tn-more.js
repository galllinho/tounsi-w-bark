// Tounsi w Bark — suite du parcours tunisien : épisodes 4 et 5 des niveaux 1 et 2, niveaux 3 à 5,
// leçons de grammaire (« le coin de Khalti ») et missions de fin d'épisode.
// Règles suivies : docs/reference-tounsi.md (parler de Tunis). À faire relire par un locuteur natif.
// Accords selon le profil : {mechi} {jay} {tounsi} {jdid} {khouya} {asli} {petit} ; {e} {ne} pour le français.

(() => {
  const T = window.TWB_CONTENT.tn;
  const lv = id => T.levels.find(l => l.id === id);
  const R = (who, tn, ar, fr, options) => ({ type: 'reply', who, line: { tn, ar, fr }, options });
  const ok = (tn, fr) => ({ tn, fr, ok: true });
  const ko = (tn, fr, why) => ({ tn, fr, why });

  Object.assign(window.TWB_CAST, {
    salah: { name: 'Am Salah', role: 'Le cafetier du coin', skin: '#a8724c', chechia: '#7a1f1f', moustache: true },
    monia: { name: 'Tata Monia', role: 'La voisine (très) curieuse', skin: '#c48b63', scarf: '#2e6b5e', robe: '#e9b32a' },
    sarra: { name: 'Sarra', role: 'Ta cousine, la future mariée', skin: '#c99068', hair: '#3a2418', robe: '#c8553d' },
    bechir: { name: 'Am Béchir', role: 'Marchand au souk', skin: '#9c6644', cap: '#c0392b', moustache: true },
    leila: { name: 'Docteur Leïla', role: 'Médecin du quartier', skin: '#c48b63', hair: '#2b1d16', glasses: true, robe: '#e8eef5' }
  });

  // =====================================================================================
  // NIVEAU 1 — épisodes 4 et 5
  // =====================================================================================
  lv('n1').episodes.push(
    {
      id: 'n1e4', title: 'Au café du coin',
      pitch: 'Am Salah sert le meilleur café du quartier. Et il a son avis sur tout le monde.',
      cast: ['salah'],
      scene: [
        { who: 'salah', tn: 'Ahla bik! Chnoua tochrob?', ar: 'أهلا بيك! شنوة تشرب؟', fr: 'Bienvenue ! Tu bois quoi ?' },
        { who: 'me', tn: 'Kahwa, brabbi.', ar: 'قهوة، بربّي.', fr: 'Un café, s’il te plaît.' },
        { who: 'salah', tn: 'Express wala capucin?', ar: 'اكسبريس ولا كابوسان؟', fr: 'Un express ou un capucin ?', note: 'Le capucin : un petit café avec un nuage de lait. Une institution tunisienne.' },
        { who: 'me', tn: 'Capucin, w kès ma.', ar: 'كابوسان، وكاس ماء.', fr: 'Un capucin, et un verre d’eau.' },
        { who: 'salah', tn: 'Bel sokkar?', ar: 'بالسكّر؟', fr: 'Avec du sucre ?' },
        { who: 'me', tn: 'Le, bla sokkar, yaychek.', ar: 'لا، بلا سكّر، يعيشك.', fr: 'Non, sans sucre, merci.' },
        { who: 'salah', tn: 'Hadher!', ar: 'حاضر!', fr: 'Tout de suite !' },
        { who: 'me', tn: 'El hsab, brabbi.', ar: 'الحساب، بربّي.', fr: 'L’addition, s’il te plaît.' },
        { who: 'salah', tn: 'Le, el kahwa aliya!', ar: 'لا، القهوة عليّا!', fr: 'Non, le café, c’est pour moi !', note: 'Règle tunisienne : on refuse poliment, il insiste, et on finit par accepter.' }
      ],
      words: [
        { id: 'tochrob', tn: 'Chnoua tochrob?', ar: 'شنوة تشرب؟', fr: 'Tu bois quoi ?', ex: 'Nochrob = je bois.' },
        { id: 'kahwa', tn: 'Kahwa', ar: 'قهوة', fr: 'Café', ex: 'Kahwa, brabbi.' },
        { id: 'tey', tn: 'Tey', ar: 'تاي', fr: 'Thé', ex: 'Tey bel naanaa = thé à la menthe.' },
        { id: 'kesma', tn: 'Kès ma', ar: 'كاس ماء', fr: 'Un verre d’eau', ex: 'Ma = eau.' },
        { id: 'sokkar', tn: 'Sokkar', ar: 'سكّر', fr: 'Sucre', ex: 'Bel sokkar = avec du sucre.' },
        { id: 'bla', tn: 'Bla', ar: 'بلا', fr: 'Sans', ex: 'Bla sokkar = sans sucre.' },
        { id: 'hadher', tn: 'Hadher', ar: 'حاضر', fr: 'Tout de suite, à vos ordres', ex: 'La réponse du serveur.' },
        { id: 'hsab', tn: 'El hsab', ar: 'الحساب', fr: 'L’addition', ex: 'El hsab, brabbi.' },
        { id: 'aliya', tn: 'Aliya', ar: 'عليّا', fr: 'C’est pour moi (je paie)', ex: 'El kahwa aliya!' }
      ],
      exercises: [
        R('salah', 'Chnoua tochrob?', 'شنوة تشرب؟', 'Tu bois quoi ?', [
          ok('Kahwa, brabbi.', 'Un café, s’il te plaît.'),
          ko('Win {mechi}?', 'Tu vas où ?', 'C’est toi qui viens d’entrer dans son café. Il ne va nulle part.'),
          ko('Ghali barcha!', 'C’est très cher !', 'Il n’a même pas encore dit le prix.')]),
        R('salah', 'Bel sokkar?', 'بالسكّر؟', 'Avec du sucre ?', [
          ok('Le, bla sokkar, yaychek.', 'Non, sans sucre, merci.'),
          ko('Esmi Salah.', 'Je m’appelle Salah.', 'C’est lui, Salah. Toi, tu voulais parler du sucre.'),
          ko('Bslema!', 'Au revoir !', 'Tu pars avant d’avoir bu ton café ? Am Salah est vexé.')]),
        { type: 'order', tn: 'El hsab brabbi', fr: 'L’addition, s’il te plaît', tokens: ['El', 'hsab', 'brabbi'] },
        { type: 'speak', tn: 'Kahwa, brabbi', ar: 'قهوة، بربّي', fr: 'Un café, s’il te plaît' }
      ],
      mission: { who: 'salah', goal: 'Commande un capucin sans sucre et un verre d’eau, puis demande l’addition.', win: 'L’élève a commandé un café sans sucre et de l’eau, puis demandé l’addition, en tunisien.' }
    },
    {
      id: 'n1e5', title: 'La voisine',
      pitch: 'Tata Monia habite à côté de Khalti. En 3 minutes, elle saura tout de ta vie.',
      cast: ['monia'],
      scene: [
        { who: 'monia', tn: 'Aslema! Enti {jdid} houni?', ar: 'أسلامة! إنتي {jdidAr} هوني؟', fr: 'Bonjour ! Tu es nouveau{e} ici ?' },
        { who: 'me', tn: 'Ey, ommi okht Khalti.', ar: 'إيه، أمّي أخت خالتي.', fr: 'Oui, ma mère est la sœur de Khalti.' },
        { who: 'monia', tn: 'Ahla bik! Ena Monia, jartha.', ar: 'أهلا بيك! أنا منية، جارتها.', fr: 'Bienvenue ! Moi c’est Monia, sa voisine.' },
        { who: 'me', tn: 'Netcharfou, ya Tata Monia.', ar: 'نتشرّفو، يا طاطا منية.', fr: 'Enchanté{e}, Tata Monia.' },
        { who: 'monia', tn: 'Win teskon fi Fransa?', ar: 'وين تسكن في فرنسا؟', fr: 'Tu habites où, en France ?' },
        { who: 'me', tn: 'Neskon fi Paris.', ar: 'نسكن في باريس.', fr: 'J’habite à Paris.' },
        { who: 'monia', tn: 'Paris! Behya barcha?', ar: 'باريس! بهيّة برشة؟', fr: 'Paris ! C’est très beau ?' },
        { who: 'me', tn: 'Ey, ama Tounes ahla.', ar: 'إيه، أما تونس أحلى.', fr: 'Oui, mais la Tunisie, c’est mieux.', note: 'Réponse parfaite. Monia va la répéter à tout le quartier.' }
      ],
      words: [
        { id: 'jdid', tn: '{jdid}', ar: '{jdidAr}', fr: 'Nouveau / nouvelle', ex: 'Jdid pour un garçon, jdida pour une fille.' },
        { id: 'houni', tn: 'Houni', ar: 'هوني', fr: 'Ici', ex: 'Ija houni! = Viens ici !' },
        { id: 'ommi', tn: 'Ommi', ar: 'أمّي', fr: 'Ma mère', ex: 'Ommek = ta mère.' },
        { id: 'okht', tn: 'Okht', ar: 'أخت', fr: 'Sœur', ex: 'Okhti = ma sœur.' },
        { id: 'ahlabik', tn: 'Ahla bik', ar: 'أهلا بيك', fr: 'Bienvenue', ex: 'Ce que tout le monde te dira en arrivant.' },
        { id: 'netcharfou', tn: 'Netcharfou', ar: 'نتشرّفو', fr: 'Enchanté(e)', ex: 'Après les présentations.' },
        { id: 'jar', tn: 'Jar / jara', ar: 'جار / جارة', fr: 'Voisin / voisine', ex: 'Jartha = sa voisine.' },
        { id: 'neskon', tn: 'Neskon', ar: 'نسكن', fr: 'J’habite', ex: 'Teskon = tu habites.' },
        { id: 'behya', tn: 'Behi / behya', ar: 'باهي / بهيّة', fr: 'Beau / belle, bien', ex: 'Paris behya.' },
        { id: 'tounes', tn: 'Tounes', ar: 'تونس', fr: 'La Tunisie (et Tunis)', ex: 'Tounes ahla!' }
      ],
      exercises: [
        R('monia', 'Enti {jdid} houni?', 'إنتي {jdidAr} هوني؟', 'Tu es nouveau{e} ici ?', [
          ok('Ey, ommi okht Khalti.', 'Oui, ma mère est la sœur de Khalti.'),
          ko('Kahwa, brabbi.', 'Un café, s’il te plaît.', 'Monia n’est pas serveuse. Mais elle va le raconter à tout le monde.'),
          ko('El hsab, brabbi.', 'L’addition, s’il te plaît.', 'Tu demandes l’addition à la voisine. Elle cherche encore ce que tu as consommé.')]),
        R('monia', 'Win teskon fi Fransa?', 'وين تسكن في فرنسا؟', 'Tu habites où, en France ?', [
          ok('Neskon fi Paris.', 'J’habite à Paris.'),
          ko('Bla sokkar.', 'Sans sucre.', 'Tu habites « sans sucre » ? Monia note quand même l’adresse.'),
          ko('Hadher!', 'Tout de suite !', 'Tu réponds comme un serveur. Monia n’a rien commandé.')]),
        { type: 'order', tn: 'Netcharfou ya Tata Monia', fr: 'Enchanté, Tata Monia', tokens: ['Netcharfou', 'ya', 'Tata', 'Monia'] },
        { type: 'speak', tn: 'Ey, ama Tounes ahla', ar: 'إيه، أما تونس أحلى', fr: 'Oui, mais la Tunisie, c’est mieux' }
      ],
      mission: { who: 'monia', goal: 'Présente-toi à Tata Monia : ton prénom, d’où tu viens, et où tu habites.', win: 'L’élève a donné son prénom, dit qu’il vient de France et dit où il habite, en tunisien.' }
    }
  );

  // =====================================================================================
  // NIVEAU 2 — épisodes 4 et 5
  // =====================================================================================
  lv('n2').episodes.push(
    {
      id: 'n2e4', title: 'L’album photo',
      pitch: 'Khalti sort l’album de famille. Il y a 400 photos. Elle va toutes les commenter.',
      cast: ['khalti'],
      scene: [
        { who: 'khalti', tn: 'Ija chouf! Hedha jeddek ki kan sghir.', ar: 'إيجا شوف! هذا جدّك كي كان صغير.', fr: 'Viens voir ! Ça, c’est ton grand-père quand il était petit.' },
        { who: 'me', tn: 'Ya hasra! Kan mezyen.', ar: 'يا حسرة! كان مزيان.', fr: 'Ah, le bon vieux temps ! Il était beau.' },
        { who: 'khalti', tn: 'W hedhi ommek, ki kan aandha khamsa snin.', ar: 'وهذي أمّك، كي كان عندها خمسة سنين.', fr: 'Et ça, c’est ta mère, quand elle avait cinq ans.' },
        { who: 'me', tn: 'W hedha chkoun?', ar: 'وهذا شكون؟', fr: 'Et lui, c’est qui ?' },
        { who: 'khalti', tn: 'Hedha khalek Mounir, w hedhi bentou Sarra.', ar: 'هذا خالك منير، وهذي بنتو سارة.', fr: 'Lui, c’est ton oncle Mounir, et elle, c’est sa fille Sarra.' },
        { who: 'me', tn: 'W Skander, win houa?', ar: 'وسكندر، وين هو؟', fr: 'Et Skander, il est où ?' },
        { who: 'khalti', tn: 'Skander? Mazel ma tzadech!', ar: 'سكندر؟ مازال ما تزادش!', fr: 'Skander ? Il n’était pas encore né !', note: 'Et il le prend toujours très mal.' }
      ],
      words: [
        { id: 'chouf', tn: 'Chouf', ar: 'شوف', fr: 'Regarde', ex: 'Ija chouf! = Viens voir !' },
        { id: 'ija', tn: 'Ija', ar: 'إيجا', fr: 'Viens', ex: 'Ija houni = viens ici.' },
        { id: 'hedha', tn: 'Hedha / hedhi', ar: 'هذا / هذي', fr: 'Celui-ci / celle-ci, ça', ex: 'Hedha khouya, hedhi okhti.' },
        { id: 'jedd', tn: 'Jedd', ar: 'جدّ', fr: 'Grand-père', ex: 'Jeddek = ton grand-père.' },
        { id: 'omm', tn: 'Ommek', ar: 'أمّك', fr: 'Ta mère', ex: 'Ommi = ma mère.' },
        { id: 'khal', tn: 'Khal', ar: 'خال', fr: 'Oncle (frère de la mère)', ex: 'Le frère du père, c’est aamm.' },
        { id: 'aamm', tn: 'Aamm', ar: 'عمّ', fr: 'Oncle (frère du père)', ex: 'Aammi = mon oncle paternel.' },
        { id: 'khouya', tn: 'Khouya', ar: 'خويا', fr: 'Mon frère', ex: 'Aussi pour appeler un ami : « ya khouya ».' },
        { id: 'bent', tn: 'Bent', ar: 'بنت', fr: 'Fille', ex: 'Bentou = sa fille.' },
        { id: 'sghir', tn: 'Sghir / kbir', ar: 'صغير / كبير', fr: 'Petit / grand', ex: 'Ki kan sghir = quand il était petit.' }
      ],
      exercises: [
        R('khalti', 'W hedha chkoun?', 'وهذا شكون؟', 'Et lui, c’est qui ?', [
          ok('Hedha khouya.', 'C’est mon frère.'),
          ko('Bel sokkar.', 'Avec du sucre.', 'Khalti te montre une photo, pas un café.'),
          ko('Neskon fi Paris.', 'J’habite à Paris.', 'Elle demande qui est sur la photo, pas ton adresse.')]),
        R('khalti', 'Ija chouf!', 'إيجا شوف!', 'Viens voir !', [
          ok('Ya hasra! Kan mezyen.', 'Ah, le bon vieux temps ! Il était beau.'),
          ko('El hsab, brabbi.', 'L’addition, s’il te plaît.', 'Regarder l’album de Khalti est gratuit. Pour l’instant.'),
          ko('Le, bla sokkar.', 'Non, sans sucre.', 'Khalti ne t’a rien proposé à boire. Pas encore.')]),
        { type: 'order', tn: 'Hedha khalek w hedhi bentou', fr: 'Lui, c’est ton oncle, et elle, c’est sa fille', tokens: ['Hedha', 'khalek', 'w', 'hedhi', 'bentou'] },
        { type: 'speak', tn: 'Hedha chkoun?', ar: 'هذا شكون؟', fr: 'C’est qui, lui ?' }
      ],
      mission: { who: 'khalti', goal: 'Demande à Khalti qui est sur trois photos de famille, et réagis à chaque fois.', win: 'L’élève a demandé au moins deux fois « hedha/hedhi chkoun » et a réagi en tunisien.' }
    },
    {
      id: 'n2e5', title: 'On va à la plage quand ?',
      pitch: 'Organiser une sortie à la plage avec Skander. Le plus dur : le réveiller.',
      cast: ['skander'],
      scene: [
        { who: 'skander', tn: 'Ghodwa nemchiw lel bhar?', ar: 'غدوة نمشيو للبحر؟', fr: 'On va à la mer demain ?' },
        { who: 'me', tn: 'Ghodwa le. Nhar essebt?', ar: 'غدوة لا. نهار السبت؟', fr: 'Demain non. Samedi ?' },
        { who: 'skander', tn: 'Behi, essebt. Essbeh wala laachiya?', ar: 'باهي، السبت. الصباح ولا العشيّة؟', fr: 'D’accord, samedi. Le matin ou l’après-midi ?' },
        { who: 'me', tn: 'Essbeh, mbakri.', ar: 'الصباح، مبكّري.', fr: 'Le matin, tôt.' },
        { who: 'skander', tn: 'Mbakri?! Ena norked hatta ethnach!', ar: 'مبكّري؟! أنا نرقد حتّى الثناش!', fr: 'Tôt ?! Moi je dors jusqu’à midi !' },
        { who: 'me', tn: 'Yezzi, ethmenya w nos.', ar: 'يزّي، الثمنية ونص.', fr: 'Allez, huit heures et demie.' },
        { who: 'skander', tn: 'Behi… ama enti tkhallas el kaskrout!', ar: 'باهي… أما إنتي تخلّص الكسكروت!', fr: 'D’accord… mais c’est toi qui paies le sandwich !' }
      ],
      words: [
        { id: 'bhar', tn: 'El bhar', ar: 'البحر', fr: 'La mer', ex: 'Nemchiw lel bhar = on va à la mer.' },
        { id: 'nhar', tn: 'Nhar', ar: 'نهار', fr: 'Jour', ex: 'Nhar essebt = samedi.' },
        { id: 'essebt', tn: 'Essebt', ar: 'السبت', fr: 'Samedi', ex: 'El ahad = dimanche, ejjemaa = vendredi.' },
        { id: 'elahad', tn: 'El ahad', ar: 'الأحد', fr: 'Dimanche', ex: 'Nhar el ahad, el kol fi dar Khalti.' },
        { id: 'essbeh', tn: 'Essbeh', ar: 'الصباح', fr: 'Le matin', ex: 'Sbeh el khir = bonjour (le matin).' },
        { id: 'laachiya', tn: 'Laachiya', ar: 'العشيّة', fr: 'L’après-midi, la fin de journée', ex: 'Laachiya nemchiw.' },
        { id: 'mbakri', tn: 'Mbakri', ar: 'مبكّري', fr: 'Tôt', ex: 'Le contraire de Skander.' },
        { id: 'norked', tn: 'Norked', ar: 'نرقد', fr: 'Je dors', ex: 'Rkadt = j’ai dormi.' },
        { id: 'nos', tn: 'W nos', ar: 'ونص', fr: 'Et demie', ex: 'Ethmenya w nos = 8 h 30.' },
        { id: 'kaskrout', tn: 'Kaskrout', ar: 'كسكروت', fr: 'Sandwich', ex: 'Kaskrout tounsi : thon, harissa, olives.' }
      ],
      exercises: [
        R('skander', 'Ghodwa nemchiw lel bhar?', 'غدوة نمشيو للبحر؟', 'On va à la mer demain ?', [
          ok('Ghodwa le. Nhar essebt?', 'Demain non. Samedi ?'),
          ko('Hedha jeddek.', 'Ça, c’est ton grand-père.', 'Skander parle de la plage, pas de l’album de Khalti.'),
          ko('Kahwa, brabbi.', 'Un café, s’il te plaît.', 'Skander n’est pas serveur. Il te le fera savoir.')]),
        R('skander', 'Essbeh wala laachiya?', 'الصباح ولا العشيّة؟', 'Le matin ou l’après-midi ?', [
          ok('Essbeh, mbakri.', 'Le matin, tôt.'),
          ko('Netcharfou.', 'Enchanté.', 'Vous vous connaissez depuis toujours. Skander rit encore.'),
          ko('Bla sokkar.', 'Sans sucre.', 'La plage sans sucre ? Skander ne comprend pas.')]),
        { type: 'order', tn: 'Nhar essebt essbeh mbakri', fr: 'Samedi, le matin, tôt', tokens: ['Nhar', 'essebt', 'essbeh', 'mbakri'] },
        { type: 'speak', tn: 'Ghodwa nemchiw lel bhar', ar: 'غدوة نمشيو للبحر', fr: 'Demain on va à la mer' }
      ],
      mission: { who: 'skander', goal: 'Fixe avec Skander le jour et l’heure de la sortie à la plage, et décide qui paie le sandwich.', win: 'L’élève a fixé un jour et une heure avec Skander, en tunisien.' }
    }
  );

  // =====================================================================================
  // NIVEAU 3 — Invité au mariage
  // =====================================================================================
  Object.assign(lv('n3'), {
    goal: 'Tenir une vraie conversation pendant le mariage de Sarra',
    boss: { id: 'n3boss', title: 'L’épreuve du mariage', pitch: '12 questions, à écrire et à écouter. Il en faut 8 pour danser avec la mariée.', count: 12, pass: 8 },
    episodes: [
      {
        id: 'n3e1', title: 'La grande nouvelle',
        pitch: 'Khalti a une nouvelle. Elle l’a déjà dite à 40 personnes. Tu es la 41ᵉ.',
        cast: ['khalti'],
        scene: [
          { who: 'khalti', tn: 'Aandi khbar behi! Sarra bech tetzawej!', ar: 'عندي خبر باهي! سارة باش تتزوّج!', fr: 'J’ai une bonne nouvelle ! Sarra va se marier !' },
          { who: 'me', tn: 'Mabrouk! Waktech el aars?', ar: 'مبروك! وقتاش العرس؟', fr: 'Félicitations ! C’est quand, le mariage ?' },
          { who: 'khalti', tn: 'Fi ousou. W enti lezem tji!', ar: 'في أوسو. وإنتي لازم تجي!', fr: 'En août. Et toi, tu dois venir !' },
          { who: 'me', tn: 'Akid nji! Ma nfawtouch.', ar: 'أكيد نجي! ما نفوّتوش.', fr: 'Bien sûr que je viens ! Je ne le rate pas.' },
          { who: 'khalti', tn: 'W enti, waktech nfarhou bik?', ar: 'وإنتي، وقتاش نفرحو بيك؟', fr: 'Et toi, c’est quand qu’on fête ton mariage ?', note: 'La question arrive toujours. Toujours.' },
          { who: 'me', tn: 'Ya Khalti… rabbi ykammel bel khir!', ar: 'يا خالتي… ربّي يكمّل بالخير!', fr: 'Tata… que Dieu fasse que tout se passe bien !', note: 'La réponse magique pour esquiver poliment.' }
        ],
        words: [
          { id: 'khbar', tn: 'Khbar', ar: 'خبر', fr: 'Une nouvelle', ex: 'Aandi khbar = j’ai une nouvelle.' },
          { id: 'aandi', tn: 'Aandi', ar: 'عندي', fr: 'J’ai', ex: 'Aandek = tu as. Ma aandich = je n’ai pas.' },
          { id: 'tetzawej', tn: 'Tetzawej', ar: 'تتزوّج', fr: 'Elle se marie / tu te maries', ex: 'Bech tetzawej = elle va se marier.' },
          { id: 'mabrouk', tn: 'Mabrouk', ar: 'مبروك', fr: 'Félicitations', ex: 'On répond : Allah ybarek fik.' },
          { id: 'aars', tn: 'El aars', ar: 'العرس', fr: 'Le mariage (la fête)', ex: 'Aars Sarra fi ousou.' },
          { id: 'ousou', tn: 'Ousou', ar: 'أوسو', fr: 'Août', ex: 'Le mois de tous les mariages.' },
          { id: 'lezem', tn: 'Lezem', ar: 'لازم', fr: 'Il faut', ex: 'Lezem tji = tu dois venir.' },
          { id: 'akid', tn: 'Akid', ar: 'أكيد', fr: 'Bien sûr', ex: 'Akid nji!' },
          { id: 'nfarhou', tn: 'Nfarhou bik', ar: 'نفرحو بيك', fr: 'On se réjouit pour toi (ton mariage)', ex: 'Waktech nfarhou bik? = c’est quand ton mariage ?' },
          { id: 'ykammel', tn: 'Rabbi ykammel bel khir', ar: 'ربّي يكمّل بالخير', fr: 'Que Dieu fasse que tout finisse bien', ex: 'Parfait pour esquiver une question.' }
        ],
        exercises: [
          R('khalti', 'Sarra bech tetzawej!', 'سارة باش تتزوّج!', 'Sarra va se marier !', [
            ok('Mabrouk! Waktech el aars?', 'Félicitations ! C’est quand, le mariage ?'),
            ko('Ghali barcha!', 'C’est très cher !', 'Vrai, un mariage coûte cher. Mais ce n’est pas ce qu’on dit.'),
            ko('Ma fhemtech.', 'Je n’ai pas compris.', 'Khalti répète la nouvelle trois fois, de plus en plus fort.')]),
          R('khalti', 'W enti lezem tji!', 'وإنتي لازم تجي!', 'Et toi, tu dois venir !', [
            ok('Akid nji! Ma nfawtouch.', 'Bien sûr que je viens ! Je ne le rate pas.'),
            ko('Le, yezzi.', 'Non, ça suffit.', 'Refuser le mariage de ta cousine ? Khalti appelle ta mère immédiatement.'),
            ko('Bslema!', 'Au revoir !', 'Tu t’enfuis ? Khalti court plus vite que toi.')]),
          { type: 'order', tn: 'Mabrouk waktech el aars', fr: 'Félicitations, c’est quand le mariage ?', tokens: ['Mabrouk', 'waktech', 'el', 'aars'] },
          { type: 'speak', tn: 'Rabbi ykammel bel khir', ar: 'ربّي يكمّل بالخير', fr: 'Que Dieu fasse que tout finisse bien' }
        ],
        mission: { who: 'khalti', goal: 'Khalti t’annonce le mariage : félicite-la, demande la date, et esquive poliment quand elle parle de TON mariage.', win: 'L’élève a dit mabrouk, demandé quand a lieu le mariage, et esquivé la question sur son propre mariage, en tunisien.' }
      },
      {
        id: 'n3e2', title: 'Qu’est-ce que je mets ?',
        pitch: 'Sarra t’aide à choisir ta tenue. Elle a des règles. Beaucoup de règles.',
        cast: ['sarra'],
        scene: [
          { who: 'sarra', tn: 'Chnoua bech telbes lel aars?', ar: 'شنوة باش تلبس للعرس؟', fr: 'Tu vas mettre quoi pour le mariage ?' },
          { who: 'me', tn: 'Mazelt ma naarefch. Haja bidha?', ar: 'مازلت ما نعرفش. حاجة بيضاء؟', fr: 'Je ne sais pas encore. Quelque chose de blanc ?' },
          { who: 'sarra', tn: 'Le! El abyedh lel aroussa barka!', ar: 'لا! الأبيض للعروسة بركة!', fr: 'Non ! Le blanc, c’est seulement pour la mariée !' },
          { who: 'me', tn: 'Behi… el ahmer?', ar: 'باهي… الأحمر؟', fr: 'D’accord… le rouge ?' },
          { who: 'sarra', tn: 'Ahmer barcha. Khalti bech tahki aalik aam kamel!', ar: 'أحمر برشة. خالتي باش تحكي عليك عام كامل!', fr: 'Trop rouge. Khalti va parler de toi pendant un an !' },
          { who: 'me', tn: 'W el azrak?', ar: 'والأزرق؟', fr: 'Et le bleu ?' },
          { who: 'sarra', tn: 'Mrigel! El azrak yjik behi.', ar: 'مريڨل! الأزرق يجيك باهي.', fr: 'Parfait ! Le bleu te va bien.' }
        ],
        words: [
          { id: 'telbes', tn: 'Telbes', ar: 'تلبس', fr: 'Tu mets (un vêtement)', ex: 'Nelbes = je mets.' },
          { id: 'naaref', tn: 'Naaref', ar: 'نعرف', fr: 'Je sais', ex: 'Ma naarefch = je ne sais pas.' },
          { id: 'haja', tn: 'Haja', ar: 'حاجة', fr: 'Une chose, quelque chose', ex: 'Haja okhra = autre chose.' },
          { id: 'abyedh', tn: 'Abyedh', ar: 'أبيض', fr: 'Blanc', ex: 'Bidha = blanche.' },
          { id: 'ahmer', tn: 'Ahmer', ar: 'أحمر', fr: 'Rouge', ex: 'Hamra = rouge (féminin).' },
          { id: 'azrak', tn: 'Azrak', ar: 'أزرق', fr: 'Bleu', ex: 'Zarka = bleue.' },
          { id: 'akhdhar', tn: 'Akhdhar', ar: 'أخضر', fr: 'Vert', ex: 'Khadhra = verte.' },
          { id: 'akhal', tn: 'Ak-hel', ar: 'أكحل', fr: 'Noir', ex: 'Kahla = noire. Se prononce ak-hel.' },
          { id: 'aroussa', tn: 'El aroussa', ar: 'العروسة', fr: 'La mariée', ex: 'El aris = le marié.' },
          { id: 'yjik', tn: 'Yjik behi', ar: 'يجيك باهي', fr: 'Ça te va bien', ex: 'Le plus beau compliment de Sarra.' },
          { id: 'aam', tn: 'Aam', ar: 'عام', fr: 'Un an, une année', ex: 'Aam kamel = une année entière.' }
        ],
        exercises: [
          R('sarra', 'Chnoua bech telbes lel aars?', 'شنوة باش تلبس للعرس؟', 'Tu vas mettre quoi pour le mariage ?', [
            ok('Mazelt ma naarefch.', 'Je ne sais pas encore.'),
            ko('Ena norked hatta ethnach.', 'Je dors jusqu’à midi.', 'Venir en pyjama ? Sarra fait un malaise.'),
            ko('Kahwa, brabbi.', 'Un café, s’il te plaît.', 'Sarra te parle vêtements, pas boissons.')]),
          R('sarra', 'El azrak yjik behi.', 'الأزرق يجيك باهي.', 'Le bleu te va bien.', [
            ok('Yaychek ya Sarra!', 'Merci, Sarra !'),
            ko('Ma fammech khobz.', 'Il n’y a pas de pain.', 'Sarra fait un compliment, tu parles de boulangerie.'),
            ko('Hedha jeddek.', 'C’est ton grand-père.', 'Il n’y a pas de photo ici. Juste toi, en bleu.')]),
          { type: 'order', tn: 'El abyedh lel aroussa barka', fr: 'Le blanc, c’est seulement pour la mariée', tokens: ['El', 'abyedh', 'lel', 'aroussa', 'barka'] },
          { type: 'speak', tn: 'Mazelt ma naarefch', ar: 'مازلت ما نعرفش', fr: 'Je ne sais pas encore' }
        ],
        mission: { who: 'sarra', goal: 'Choisis ta tenue avec Sarra en parlant des couleurs, sans jamais proposer le blanc.', win: 'L’élève a proposé au moins deux couleurs en tunisien et s’est mis d’accord avec Sarra.' }
      },
      {
        id: 'n3e3', title: 'Au milieu de la fête',
        pitch: 'Youyous, musique, 300 invités. Tata Monia t’a repéré.',
        cast: ['monia', 'khalti'],
        scene: [
          { who: 'monia', tn: 'Mabrouk ya Khalti! El aroussa kif el kmar!', ar: 'مبروك يا خالتي! العروسة كيف القمر!', fr: 'Félicitations, Khalti ! La mariée est belle comme la lune !' },
          { who: 'khalti', tn: 'Allah ybarek fik. Ahla bik, okaad!', ar: 'الله يبارك فيك. أهلا بيك، اقعد!', fr: 'Merci beaucoup. Bienvenue, assieds-toi !' },
          { who: 'me', tn: 'Mabrouk ya Khalti, rabbi yhannihom!', ar: 'مبروك يا خالتي، ربّي يهنّيهم!', fr: 'Félicitations, tata, que Dieu leur donne le bonheur !' },
          { who: 'monia', tn: 'Ya {prenom}! Kbert barcha!', ar: 'يا {prenom}! كبرت برشة!', fr: '{prenom} ! Tu as beaucoup grandi !' },
          { who: 'me', tn: 'Ey, Tata Monia. Labes aalik?', ar: 'إيه، طاطا منية. لاباس عليك؟', fr: 'Oui, Tata Monia. Tu vas bien ?' },
          { who: 'monia', tn: 'Labes. Ija, orkos maana!', ar: 'لاباس. إيجا، ارقص معانا!', fr: 'Ça va. Viens danser avec nous !' },
          { who: 'me', tn: 'Ena? Ma naarefch norkos!', ar: 'أنا؟ ما نعرفش نرقص!', fr: 'Moi ? Je ne sais pas danser !' },
          { who: 'khalti', tn: 'Yezzi mel hechma, ija!', ar: 'يزّي مالحشمة، إيجا!', fr: 'Arrête d’être timide, viens !' }
        ],
        words: [
          { id: 'kif', tn: 'Kif', ar: 'كيف', fr: 'Comme', ex: 'Kif el kmar = comme la lune.' },
          { id: 'kmar', tn: 'El kmar', ar: 'القمر', fr: 'La lune', ex: 'Le plus beau compliment.' },
          { id: 'ybarek', tn: 'Allah ybarek fik', ar: 'الله يبارك فيك', fr: 'Merci (réponse à « mabrouk »)', ex: 'Mabrouk! — Allah ybarek fik.' },
          { id: 'yhannihom', tn: 'Rabbi yhannihom', ar: 'ربّي يهنّيهم', fr: 'Que Dieu leur donne le bonheur', ex: 'Pour les mariés.' },
          { id: 'kbert', tn: 'Kbert', ar: 'كبرت', fr: 'Tu as grandi', ex: 'Ce que diront TOUTES les tatas.' },
          { id: 'labesaalik', tn: 'Labes aalik?', ar: 'لاباس عليك؟', fr: 'Tu vas bien ?', ex: 'Plus poli que « labes? ».' },
          { id: 'orkos', tn: 'Orkos', ar: 'ارقص', fr: 'Danse !', ex: 'Norkos = je danse.' },
          { id: 'maana', tn: 'Maana', ar: 'معانا', fr: 'Avec nous', ex: 'Maaya = avec moi, maak = avec toi.' },
          { id: 'hechma', tn: 'El hechma', ar: 'الحشمة', fr: 'La timidité, la honte', ex: 'Yezzi mel hechma = arrête d’être timide.' }
        ],
        exercises: [
          R('monia', 'Ya {prenom}! Kbert barcha!', 'يا {prenom}! كبرت برشة!', '{prenom} ! Tu as beaucoup grandi !', [
            ok('Ey, Tata Monia. Labes aalik?', 'Oui, Tata Monia. Tu vas bien ?'),
            ko('Bkaddech?', 'C’est combien ?', 'Tu demandes un prix à un mariage. Monia est choquée.'),
            ko('Nheb nemchi lel Marsa.', 'Je veux aller à La Marsa.', 'Tu veux déjà partir ? La fête commence à peine.')]),
          R('khalti', 'Mabrouk ya Khalti!', 'مبروك يا خالتي!', 'Félicitations, Khalti !', [
            ok('Allah ybarek fik.', 'Merci beaucoup.'),
            ko('Ma nesmaach mliih.', 'Je n’entends pas bien.', 'Vrai, la musique est forte. Mais ce n’est pas la réponse.'),
            ko('Kaskrout!', 'Sandwich !', 'Tu as faim ? Le dîner arrive, patience.')]),
          { type: 'order', tn: 'El aroussa kif el kmar', fr: 'La mariée est belle comme la lune', tokens: ['El', 'aroussa', 'kif', 'el', 'kmar'] },
          { type: 'speak', tn: 'Mabrouk, rabbi yhannihom', ar: 'مبروك، ربّي يهنّيهم', fr: 'Félicitations, que Dieu leur donne le bonheur' }
        ],
        mission: { who: 'monia', goal: 'Tata Monia te parle pendant la fête : réponds à ses compliments, félicite la famille, et trouve une excuse pour ne pas danser.', win: 'L’élève a félicité (mabrouk / rabbi yhannihom) et répondu à Monia en tunisien.' }
      },
      {
        id: 'n3e4', title: 'Le repas du mariage',
        pitch: 'Couscous, makroudh, thé aux pignons. Skander a un plan pour tout goûter.',
        cast: ['skander'],
        scene: [
          { who: 'skander', tn: 'Chouf el makla! Kosksi bel allouch!', ar: 'شوف الماكلة! كسكسي بالعلّوش!', fr: 'Regarde la nourriture ! Du couscous à l’agneau !' },
          { who: 'me', tn: 'Nheb nekel el kol!', ar: 'نحب ناكل الكل!', fr: 'Je veux tout manger !' },
          { who: 'skander', tn: 'Okaad bjanbi. Theb tey wala kahwa baad?', ar: 'اقعد بجنبي. تحب تاي ولا قهوة بعد؟', fr: 'Assieds-toi à côté de moi. Tu veux du thé ou du café après ?' },
          { who: 'me', tn: 'Tey bel bondok.', ar: 'تاي بالبندق.', fr: 'Du thé aux pignons.' },
          { who: 'skander', tn: 'W makroudh?', ar: 'ومقروض؟', fr: 'Et des makroudh ?' },
          { who: 'me', tn: 'Akid!', ar: 'أكيد!', fr: 'Évidemment !' },
          { who: 'skander', tn: 'Ama rodd belek, Khalti tkhabbi el makroudh!', ar: 'أما ردّ بالك، خالتي تخبّي المقروض!', fr: 'Mais fais attention, Khalti cache les makroudh !', note: 'Selon la légende, la boîte est derrière les rideaux.' }
        ],
        words: [
          { id: 'makla', tn: 'El makla', ar: 'الماكلة', fr: 'La nourriture', ex: 'El makla bnina = la nourriture est délicieuse.' },
          { id: 'allouch', tn: 'Allouch', ar: 'علّوش', fr: 'Agneau, mouton', ex: 'Kosksi bel allouch.' },
          { id: 'nekel', tn: 'Nekel', ar: 'ناكل', fr: 'Je mange', ex: 'Klit = j’ai mangé.' },
          { id: 'elkol', tn: 'El kol', ar: 'الكل', fr: 'Tout, tout le monde', ex: 'El kol jew = tout le monde est venu.' },
          { id: 'bjanbi', tn: 'Bjanbi', ar: 'بجنبي', fr: 'À côté de moi', ex: 'Okaad bjanbi.' },
          { id: 'baad', tn: 'Baad', ar: 'بعد', fr: 'Après', ex: 'Baad el makla = après le repas.' },
          { id: 'bondok', tn: 'Bondok', ar: 'بندق', fr: 'Pignons (de pin)', ex: 'Tey bel bondok, la spécialité.' },
          { id: 'makroudh', tn: 'Makroudh', ar: 'مقروض', fr: 'Makroudh (gâteau de semoule aux dattes)', ex: 'Le trésor caché de Khalti.' },
          { id: 'roddbelek', tn: 'Rodd belek', ar: 'ردّ بالك', fr: 'Fais attention', ex: 'Rodd belek mel karhba! = attention à la voiture !' },
          { id: 'tkhabbi', tn: 'Tkhabbi', ar: 'تخبّي', fr: 'Elle cache / tu caches', ex: 'Nkhabbi = je cache.' }
        ],
        exercises: [
          R('skander', 'Theb tey wala kahwa baad?', 'تحب تاي ولا قهوة بعد؟', 'Tu veux du thé ou du café après ?', [
            ok('Tey bel bondok.', 'Du thé aux pignons.'),
            ko('Neskon fi Paris.', 'J’habite à Paris.', 'Skander le sait déjà. Il veut juste savoir ce que tu bois.'),
            ko('Kbert barcha!', 'Tu as beaucoup grandi !', 'C’est la réplique des tatas. Skander est vexé.')]),
          R('skander', 'Rodd belek, Khalti tkhabbi el makroudh!', 'ردّ بالك، خالتي تخبّي المقروض!', 'Fais attention, Khalti cache les makroudh !', [
            ok('Win tkhabbih?', 'Elle le cache où ?'),
            ko('Ena norked.', 'Je dors.', 'Pas maintenant ! La chasse aux makroudh commence.'),
            ko('Mabrouk!', 'Félicitations !', 'Féliciter Khalti de cacher des gâteaux ? Elle accepte.')]),
          { type: 'order', tn: 'Nheb nekel el kol', fr: 'Je veux tout manger', tokens: ['Nheb', 'nekel', 'el', 'kol'] },
          { type: 'speak', tn: 'Rodd belek!', ar: 'ردّ بالك!', fr: 'Fais attention !' }
        ],
        mission: { who: 'skander', goal: 'Avec Skander, choisis ce que vous allez manger et boire, et trouvez où Khalti cache les makroudh.', win: 'L’élève a parlé de nourriture ou de boisson en tunisien et a demandé où sont les makroudh.' }
      },
      {
        id: 'n3e5', title: 'La chaleur de l’été',
        pitch: 'Il fait 40 degrés. Jedda a des conseils. Ils sont tous obligatoires.',
        cast: ['jedda'],
        scene: [
          { who: 'jedda', tn: 'Ya {petit}, chniya hal skhana lyouma!', ar: 'يا {petitAr}، شنية هالسخانة اليوما!', fr: 'Mon petit, quelle chaleur aujourd’hui !' },
          { who: 'me', tn: 'Ey ya Jedda, skhoun barcha.', ar: 'إيه يا جدّة، سخون برشة.', fr: 'Oui, mamie, il fait très chaud.' },
          { who: 'jedda', tn: 'Ochrob el ma, w ma tokhrojch fel chams!', ar: 'اشرب الماء، وما تخرجش في الشمس!', fr: 'Bois de l’eau, et ne sors pas au soleil !' },
          { who: 'me', tn: 'W fel lil, bered?', ar: 'وفي الليل، بارد؟', fr: 'Et la nuit, il fait froid ?' },
          { who: 'jedda', tn: 'Fel lil ahla, nokaadou fel hoch.', ar: 'في الليل أحلى، نقعدو في الحوش.', fr: 'La nuit, c’est plus doux, on s’assoit dans la cour.' },
          { who: 'me', tn: 'W fel chta?', ar: 'وفي الشتاء؟', fr: 'Et en hiver ?' },
          { who: 'jedda', tn: 'Fel chta tsob el mtar, w neklou lablebi!', ar: 'في الشتاء تصبّ المطر، وناكلو لبلابي!', fr: 'En hiver il pleut, et on mange du lablabi !', note: 'Lablabi : soupe de pois chiches au pain, harissa et œuf. Le remède universel de Jedda.' }
        ],
        words: [
          { id: 'skhana', tn: 'Skhana', ar: 'سخانة', fr: 'Chaleur', ex: 'Chniya hal skhana! = quelle chaleur !' },
          { id: 'skhoun', tn: 'Skhoun', ar: 'سخون', fr: 'Chaud', ex: 'El ma skhoun = l’eau est chaude.' },
          { id: 'bered', tn: 'Bered', ar: 'بارد', fr: 'Froid', ex: 'Ma bered = eau fraîche.' },
          { id: 'ochrob', tn: 'Ochrob', ar: 'اشرب', fr: 'Bois !', ex: 'Ochrob el ma.' },
          { id: 'tokhrej', tn: 'Ma tokhrojch', ar: 'ما تخرجش', fr: 'Ne sors pas', ex: 'Nokhrej = je sors.' },
          { id: 'chams', tn: 'Chams', ar: 'شمس', fr: 'Soleil', ex: 'Fel chams = au soleil.' },
          { id: 'lil', tn: 'Lil', ar: 'ليل', fr: 'Nuit', ex: 'Fel lil = la nuit.' },
          { id: 'chta', tn: 'Chta', ar: 'شتاء', fr: 'Hiver, pluie', ex: 'Tsob chta = il pleut.' },
          { id: 'mtar', tn: 'Mtar', ar: 'مطر', fr: 'Pluie', ex: 'Tsob el mtar = il pleut.' },
          { id: 'hoch', tn: 'Hoch', ar: 'حوش', fr: 'Cour de la maison', ex: 'Le cœur de la maison de Jedda.' }
        ],
        exercises: [
          R('jedda', 'Chniya hal skhana lyouma!', 'شنية هالسخانة اليوما!', 'Quelle chaleur aujourd’hui !', [
            ok('Ey ya Jedda, skhoun barcha.', 'Oui, mamie, il fait très chaud.'),
            ko('Bered barcha!', 'Il fait très froid !', 'Il fait 40 degrés. Jedda te touche le front, inquiète.'),
            ko('Tey bel bondok.', 'Du thé aux pignons.', 'Un thé brûlant par 40 degrés ? Jedda approuve, en fait.')]),
          R('jedda', 'Ochrob el ma!', 'اشرب الماء!', 'Bois de l’eau !', [
            ok('Behi ya Jedda.', 'D’accord, mamie.'),
            ko('Le, yezzi mel hechma.', 'Non, arrête d’être timide.', 'On ne parle pas comme ça à Jedda. Jamais.'),
            ko('Ma naarefch norkos.', 'Je ne sais pas danser.', 'Personne ne t’a demandé de danser. Juste de boire.')]),
          { type: 'order', tn: 'Ochrob el ma w ma tokhrojch', fr: 'Bois de l’eau et ne sors pas', tokens: ['Ochrob', 'el', 'ma', 'w', 'ma', 'tokhrojch'] },
          { type: 'speak', tn: 'Skhoun barcha', ar: 'سخون برشة', fr: 'Il fait très chaud' }
        ],
        mission: { who: 'jedda', goal: 'Parle du temps qu’il fait avec Jedda : la chaleur, la nuit, l’hiver, et promets-lui de boire de l’eau.', win: 'L’élève a parlé de la chaleur ou du froid en tunisien et a promis à Jedda de boire de l’eau.' }
      }
    ]
  });

  // =====================================================================================
  // NIVEAU 4 — Négociateur du souk
  // =====================================================================================
  Object.assign(lv('n4'), {
    goal: 'Négocier, compter, te débrouiller seul en ville',
    boss: { id: 'n4boss', title: 'L’épreuve du souk', pitch: '12 questions, presque tout à l’écrit. Il en faut 8 pour qu’Am Béchir te respecte.', count: 12, pass: 8 },
    episodes: [
      {
        id: 'n4e1', title: 'Au souk',
        pitch: 'Am Béchir vend des tapis, des chéchias et des « prix spéciaux pour toi ».',
        cast: ['bechir'],
        scene: [
          { who: 'bechir', tn: 'Ahla bik! Chouf, kol chay mawjoud!', ar: 'أهلا بيك! شوف، كل شي موجود!', fr: 'Bienvenue ! Regarde, il y a de tout !' },
          { who: 'me', tn: 'Bkaddech hedhi?', ar: 'بقدّاش هذي؟', fr: 'Combien, celle-ci ?' },
          { who: 'bechir', tn: 'Khamsin dinar. Ama lik enti, arbain.', ar: 'خمسين دينار. أما ليك إنتي، أربعين.', fr: 'Cinquante dinars. Mais pour toi, quarante.' },
          { who: 'me', tn: 'Arbain?! Ghalia barcha! Nakkes chwaya.', ar: 'أربعين؟! غالية برشة! نقّص شويّة.', fr: 'Quarante ?! Beaucoup trop cher ! Baisse un peu.' },
          { who: 'bechir', tn: 'Ya {khouya}, ena khasser!', ar: 'يا {khouyaAr}، أنا خاسر!', fr: 'Mais je perds de l’argent, moi !' },
          { who: 'me', tn: 'Aachrin dinar, w nechriha tawa.', ar: 'عشرين دينار، ونشريها توّا.', fr: 'Vingt dinars, et je l’achète maintenant.' },
          { who: 'bechir', tn: 'Thlethin, akher kelma.', ar: 'ثلاثين، آخر كلمة.', fr: 'Trente, dernier prix.' },
          { who: 'me', tn: 'Khamsa w aachrin, w nwalliw shab!', ar: 'خمسة وعشرين، ونوليو صحاب!', fr: 'Vingt-cinq, et on devient amis !' },
          { who: 'bechir', tn: 'Behi! Ama ma tkollech l hatta had!', ar: 'باهي! أما ما تقولش لحتّى حدّ!', fr: 'D’accord ! Mais ne le dis à personne !' }
        ],
        words: [
          { id: 'bkaddech', tn: 'Bkaddech?', ar: 'بقدّاش؟', fr: 'C’est combien ? (prix)', ex: 'Kaddech = combien (quantité).' },
          { id: 'mawjoud', tn: 'Mawjoud', ar: 'موجود', fr: 'Disponible, là', ex: 'Kol chay mawjoud = il y a de tout.' },
          { id: 'ghalia', tn: 'Ghalia', ar: 'غالية', fr: 'Chère (féminin)', ex: 'Ghali (m.), ghalia (f.).' },
          { id: 'nakkes', tn: 'Nakkes', ar: 'نقّص', fr: 'Baisse (le prix)', ex: 'Nakkes chwaya = baisse un peu.' },
          { id: 'khasser', tn: 'Khasser', ar: 'خاسر', fr: 'Perdant (je perds de l’argent)', ex: 'La phrase préférée des marchands.' },
          { id: 'nechri', tn: 'Nechri', ar: 'نشري', fr: 'J’achète', ex: 'Chrit = j’ai acheté.' },
          { id: 'akherkelma', tn: 'Akher kelma', ar: 'آخر كلمة', fr: 'Dernier mot, dernier prix', ex: 'Rarement le dernier.' },
          { id: 'arbain', tn: 'Arbain', ar: 'أربعين', fr: 'Quarante', ex: 'Thlethin = 30, khamsin = 50.' },
          { id: 'sahbi', tn: 'Sahbi', ar: 'صاحبي', fr: 'Mon ami', ex: 'Shab = des amis. Nwalliw shab = on devient amis.' },
          { id: 'hattahad', tn: 'Hatta had', ar: 'حتّى حدّ', fr: 'Personne', ex: 'Ma jech hatta had = personne n’est venu.' }
        ],
        exercises: [
          R('bechir', 'Khamsin dinar. Ama lik enti, arbain.', 'خمسين دينار. أما ليك إنتي، أربعين.', 'Cinquante dinars. Mais pour toi, quarante.', [
            ok('Ghalia barcha! Nakkes chwaya.', 'Beaucoup trop cher ! Baisse un peu.'),
            ko('Behi, aatini zouz.', 'D’accord, donne-m’en deux.', 'Tu as accepté le premier prix. Am Béchir appelle toute sa famille pour fêter ça.'),
            ko('Mabrouk!', 'Félicitations !', 'Il te félicite d’avoir payé trop cher ? Presque.')]),
          R('bechir', 'Thlethin, akher kelma.', 'ثلاثين، آخر كلمة.', 'Trente, dernier prix.', [
            ok('Khamsa w aachrin, w nwalliw shab!', 'Vingt-cinq, et on devient amis !'),
            ko('Arbain!', 'Quarante !', 'Tu proposes PLUS cher que lui. Am Béchir t’embrasse.'),
            ko('Ma naarefch norkos.', 'Je ne sais pas danser.', 'Ce n’est pas le moment de danser, c’est le moment de négocier.')]),
          { type: 'order', tn: 'Bkaddech hedhi', fr: 'Combien, celle-ci ?', tokens: ['Bkaddech', 'hedhi'] },
          { type: 'speak', tn: 'Ghalia barcha! Nakkes chwaya', ar: 'غالية برشة! نقّص شويّة', fr: 'Beaucoup trop cher ! Baisse un peu' }
        ],
        mission: { who: 'bechir', goal: 'Achète une chéchia à Am Béchir à 20 dinars maximum. Il commence à 45.', win: 'L’élève a négocié en tunisien et obtenu un prix de 20 dinars ou moins.' }
      },
      {
        id: 'n4e2', title: 'Compter ses dinars',
        pitch: 'Chez Si Lamine, les prix se disent en millimes. 1 500, c’est un dinar cinq cents. Bon courage.',
        cast: ['lamine'],
        scene: [
          { who: 'lamine', tn: 'El hsab: khmastach dinar w mitin.', ar: 'الحساب: خمستاش دينار ومتين.', fr: 'L’addition : quinze dinars deux cents.' },
          { who: 'me', tn: 'Aandi ken billet b aachrin.', ar: 'عندي كان بيّي بعشرين.', fr: 'Je n’ai qu’un billet de vingt.' },
          { who: 'lamine', tn: 'Ma fammech sarf? Behi, nrajjaalek arbaa dinarat w thmenmya.', ar: 'ما فمّاش صرف؟ باهي، نرجعلك أربعة دينارات وثمنمية.', fr: 'Pas de monnaie ? Bon, je te rends quatre dinars huit cents.' },
          { who: 'me', tn: 'Yaychek. W kaddech el kilo tmatem?', ar: 'يعيشك. وقدّاش الكيلو طماطم؟', fr: 'Merci. Et combien le kilo de tomates ?' },
          { who: 'lamine', tn: 'Alf w khamsmya.', ar: 'ألف وخمسمية.', fr: 'Mille cinq cents.', note: 'C’est-à-dire 1 dinar 500 : en Tunisie, on compte souvent en millimes.' },
          { who: 'me', tn: 'Aatini zouz kilo, brabbi.', ar: 'اعطيني زوز كيلو، بربّي.', fr: 'Donne-m’en deux kilos, s’il te plaît.' },
          { who: 'lamine', tn: 'Mrigel. W haja okhra? Harissa? Zitoun? Lben?', ar: 'مريڨل. وحاجة أخرى؟ هريسة؟ زيتون؟ لبن؟', fr: 'Parfait. Et autre chose ? Harissa ? Olives ? Lben ?', note: 'Si Lamine essaie toujours de vendre un produit en plus.' }
        ],
        words: [
          { id: 'hdach', tn: 'Hdach', ar: 'حداش', fr: 'Onze', ex: 'Thnach = douze.' },
          { id: 'khmastach', tn: 'Khmastach', ar: 'خمستاش', fr: 'Quinze', ex: 'Aachrin = vingt.' },
          { id: 'mya', tn: 'Mya', ar: 'مية', fr: 'Cent', ex: 'Mitin = deux cents, khamsmya = cinq cents.' },
          { id: 'alf', tn: 'Alf', ar: 'ألف', fr: 'Mille', ex: 'Alf millime = un dinar.' },
          { id: 'ken', tn: 'Ken', ar: 'كان', fr: 'Seulement, ne… que', ex: 'Aandi ken aachrin = je n’ai que vingt.' },
          { id: 'sarf', tn: 'Sarf', ar: 'صرف', fr: 'Monnaie (pièces)', ex: 'Ma fammech sarf = pas de monnaie.' },
          { id: 'nraj3lek', tn: 'Nrajjaalek', ar: 'نرجّعلك', fr: 'Je te rends', ex: 'Le rendu de monnaie.' },
          { id: 'flous', tn: 'Flous', ar: 'فلوس', fr: 'Argent', ex: 'Ma aandich flous = je n’ai pas d’argent.' },
          { id: 'tmatem', tn: 'Tmatem', ar: 'طماطم', fr: 'Tomates', ex: 'Kilo tmatem.' },
          { id: 'zitoun', tn: 'Zitoun', ar: 'زيتون', fr: 'Olives', ex: 'Zit zitoun = huile d’olive.' }
        ],
        exercises: [
          R('lamine', 'Ma fammech sarf?', 'ما فمّاش صرف؟', 'Pas de monnaie ?', [
            ok('Le, aandi ken billet b aachrin.', 'Non, je n’ai qu’un billet de vingt.'),
            ko('Chouf!', 'Regarde !', 'Tu lui montres quoi ? Ta poche vide ?'),
            ko('Kbert barcha.', 'Tu as beaucoup grandi.', 'Si Lamine te connaît depuis une semaine. Il n’a pas grandi.')]),
          R('lamine', 'Haja okhra? Harissa? Zitoun?', 'حاجة أخرى؟ هريسة؟ زيتون؟', 'Autre chose ? Harissa ? Olives ?', [
            ok('Le, yezzi, yaychek.', 'Non, ça suffit, merci.'),
            ko('Kif el kmar!', 'Comme la lune !', 'Les olives sont belles comme la lune ? Si Lamine en vend deux kilos de plus.'),
            ko('Essbeh, mbakri.', 'Le matin, tôt.', 'Tu prends rendez-vous avec Si Lamine ? Il est flatté.')]),
          { type: 'order', tn: 'Aatini zouz kilo tmatem', fr: 'Donne-moi deux kilos de tomates', tokens: ['Aatini', 'zouz', 'kilo', 'tmatem'] },
          { type: 'speak', tn: 'Aandi ken billet b aachrin', ar: 'عندي كان بيّي بعشرين', fr: 'Je n’ai qu’un billet de vingt' }
        ],
        mission: { who: 'lamine', goal: 'Fais tes courses chez Si Lamine : demande trois prix, compte la monnaie, et refuse ce qu’il essaie de te vendre en plus.', win: 'L’élève a demandé des prix, parlé de quantités ou de monnaie, et refusé poliment, en tunisien.' }
      },
      {
        id: 'n4e3', title: 'Chez le docteur',
        pitch: 'Tu as mal au ventre. Docteur Leïla a déjà une petite idée de la cause.',
        cast: ['leila'],
        scene: [
          { who: 'leila', tn: 'Chbik? Chnoua youjaak?', ar: 'شبيك؟ شنوة يوجعك؟', fr: 'Qu’est-ce que tu as ? Où as-tu mal ?' },
          { who: 'me', tn: 'Rassi youjaani, w kerchi zeda.', ar: 'راسي يوجعني، وكرشي زادة.', fr: 'J’ai mal à la tête, et au ventre aussi.' },
          { who: 'leila', tn: 'Chnoua klit lbereh?', ar: 'شنوة كليت البارح؟', fr: 'Qu’est-ce que tu as mangé hier ?' },
          { who: 'me', tn: 'Klit kosksi aand Khalti… thletha marrat.', ar: 'كليت كسكسي عند خالتي… ثلاثة مرّات.', fr: 'J’ai mangé du couscous chez Khalti… trois fois.' },
          { who: 'leila', tn: 'Hedha mouch mardh, hedhi Khalti!', ar: 'هذا موش مرض، هذي خالتي!', fr: 'Ce n’est pas une maladie, c’est Khalti !' },
          { who: 'leila', tn: 'Ochrob el ma, w lyouma ma tekelch barcha.', ar: 'اشرب الماء، واليوما ما تاكلش برشة.', fr: 'Bois de l’eau, et aujourd’hui ne mange pas trop.' },
          { who: 'me', tn: 'Behi ya doktora, yaychek.', ar: 'باهي يا دكتورة، يعيشك.', fr: 'D’accord, docteur, merci.' }
        ],
        words: [
          { id: 'chbik', tn: 'Chbik?', ar: 'شبيك؟', fr: 'Qu’est-ce que tu as ?', ex: 'Aussi : « qu’est-ce qui t’arrive ? »' },
          { id: 'youjaani', tn: 'Youjaani', ar: 'يوجعني', fr: 'J’ai mal (ça me fait mal)', ex: 'Rassi youjaani = j’ai mal à la tête.' },
          { id: 'ras', tn: 'Ras', ar: 'راس', fr: 'Tête', ex: 'Rassi = ma tête.' },
          { id: 'kerch', tn: 'Kerch', ar: 'كرش', fr: 'Ventre', ex: 'Kerchi = mon ventre.' },
          { id: 'mardh', tn: 'Mardh', ar: 'مرض', fr: 'Maladie', ex: 'Mridh = malade.' },
          { id: 'marra', tn: 'Marra', ar: 'مرّة', fr: 'Une fois', ex: 'Thletha marrat = trois fois.' },
          { id: 'mouch', tn: 'Mouch', ar: 'موش', fr: 'Ne… pas (devant un nom ou un adjectif)', ex: 'Mouch ghali = pas cher.' },
          { id: 'dwa', tn: 'Dwa', ar: 'دواء', fr: 'Médicament', ex: 'Ochrob ed-dwa.' },
          { id: 'sbitar', tn: 'Sbitar', ar: 'سبيطار', fr: 'Hôpital', ex: 'Mouch lezem sbitar = pas besoin d’hôpital.' }
        ],
        exercises: [
          R('leila', 'Chbik? Chnoua youjaak?', 'شبيك؟ شنوة يوجعك؟', 'Qu’est-ce que tu as ? Où as-tu mal ?', [
            ok('Rassi youjaani.', 'J’ai mal à la tête.'),
            ko('Bkaddech?', 'C’est combien ?', 'On parle de ta santé d’abord. Le prix, après.'),
            ko('Kif el kmar.', 'Comme la lune.', 'Docteur Leïla note : « délire léger ».')]),
          R('leila', 'Chnoua klit lbereh?', 'شنوة كليت البارح؟', 'Qu’est-ce que tu as mangé hier ?', [
            ok('Klit kosksi aand Khalti.', 'J’ai mangé du couscous chez Khalti.'),
            ko('Neskon fi Paris.', 'J’habite à Paris.', 'Elle te demande ton dîner, pas ton adresse.'),
            ko('Nhar essebt.', 'Samedi.', 'Tu as mangé un samedi ? C’est… une réponse.')]),
          { type: 'order', tn: 'Rassi youjaani w kerchi zeda', fr: 'J’ai mal à la tête, et au ventre aussi', tokens: ['Rassi', 'youjaani', 'w', 'kerchi', 'zeda'] },
          { type: 'speak', tn: 'Kerchi youjaani', ar: 'كرشي يوجعني', fr: 'J’ai mal au ventre' }
        ],
        mission: { who: 'leila', goal: 'Explique à Docteur Leïla où tu as mal et ce que tu as mangé, puis écoute ses conseils.', win: 'L’élève a dit où il a mal et ce qu’il a mangé, en tunisien.' }
      },
      {
        id: 'n4e4', title: 'Perdu en ville',
        pitch: 'Tu cherches la gare. Am Hédi n’est pas en service. En théorie.',
        cast: ['hedi'],
        scene: [
          { who: 'me', tn: 'Samahni, win el mahatta?', ar: 'سامحني، وين المحطّة؟', fr: 'Pardon, où est la gare ?' },
          { who: 'hedi', tn: 'El mahatta? Imchi toul, baad dour aal ymin.', ar: 'المحطّة؟ امشي طول، بعد دور على اليمين.', fr: 'La gare ? Va tout droit, puis tourne à droite.' },
          { who: 'me', tn: 'Baida?', ar: 'بعيدة؟', fr: 'C’est loin ?' },
          { who: 'hedi', tn: 'Le, kriba. Khamsa dkayek bel sakin.', ar: 'لا، قريبة. خمسة دقايق بالساقين.', fr: 'Non, c’est près. Cinq minutes à pied.' },
          { who: 'me', tn: 'W baad?', ar: 'وبعد؟', fr: 'Et après ?' },
          { who: 'hedi', tn: 'Talka el bousta, w el mahatta koddemha.', ar: 'تلقى البوسطة، والمحطّة قدّامها.', fr: 'Tu trouves la poste, et la gare est en face.' },
          { who: 'me', tn: 'Yaychek ya Am Hédi!', ar: 'يعيشك يا عمّ الهادي!', fr: 'Merci, Am Hédi !' },
          { who: 'hedi', tn: 'Ama… khir nwasslek bel taxi. Aachra dinarat!', ar: 'أما… خير نوصّلك بالتاكسي. عشرة دينارات!', fr: 'Mais… le mieux, c’est que je t’emmène en taxi. Dix dinars !' }
        ],
        words: [
          { id: 'samahni', tn: 'Samahni', ar: 'سامحني', fr: 'Pardon, excuse-moi', ex: 'Pour interpeller quelqu’un poliment.' },
          { id: 'mahatta', tn: 'El mahatta', ar: 'المحطّة', fr: 'La gare, la station', ex: 'Mahattet el louage = la station des louages.' },
          { id: 'imchi', tn: 'Imchi', ar: 'امشي', fr: 'Va, marche', ex: 'Imchi toul = va tout droit.' },
          { id: 'toul', tn: 'Toul', ar: 'طول', fr: 'Tout droit', ex: 'Imchi toul.' },
          { id: 'dour', tn: 'Dour', ar: 'دور', fr: 'Tourne', ex: 'Dour aal ysar = tourne à gauche.' },
          { id: 'ymin', tn: 'Ymin / ysar', ar: 'يمين / يسار', fr: 'Droite / gauche', ex: 'Aal ymin = à droite.' },
          { id: 'kriba', tn: 'Kriib / kriba', ar: 'قريب / قريبة', fr: 'Près, proche', ex: 'Le contraire : baid / baida (loin).' },
          { id: 'baida', tn: 'Baid / baida', ar: 'بعيد / بعيدة', fr: 'Loin', ex: 'El mahatta baida? = la gare est loin ?' },
          { id: 'dkayek', tn: 'Dkayek', ar: 'دقايق', fr: 'Minutes', ex: 'Khamsa dkayek = cinq minutes.' },
          { id: 'koddem', tn: 'Koddem', ar: 'قدّام', fr: 'Devant, en face', ex: 'Koddemha = en face d’elle.' }
        ],
        exercises: [
          R('hedi', 'Imchi toul, baad dour aal ymin.', 'امشي طول، بعد دور على اليمين.', 'Va tout droit, puis tourne à droite.', [
            ok('Baida?', 'C’est loin ?'),
            ko('Bel sokkar.', 'Avec du sucre.', 'Ce sont des directions, pas un café.'),
            ko('Mabrouk!', 'Félicitations !', 'Am Hédi ne s’est pas marié, il t’indique le chemin.')]),
          R('hedi', 'Khir nwasslek bel taxi. Aachra dinarat!', 'خير نوصّلك بالتاكسي. عشرة دينارات!', 'Le mieux, c’est que je t’emmène en taxi. Dix dinars !', [
            ok('Le yaychek, nemchi bel sakin!', 'Non merci, j’y vais à pied !'),
            ko('Arbain!', 'Quarante !', 'Tu proposes de payer QUATRE fois plus. Am Hédi pleure de joie.'),
            ko('Rassi youjaani.', 'J’ai mal à la tête.', 'Il te conduit à l’hôpital. 15 dinars.')]),
          { type: 'order', tn: 'Samahni win el mahatta', fr: 'Pardon, où est la gare ?', tokens: ['Samahni', 'win', 'el', 'mahatta'] },
          { type: 'speak', tn: 'Samahni, win el mahatta?', ar: 'سامحني، وين المحطّة؟', fr: 'Pardon, où est la gare ?' }
        ],
        mission: { who: 'hedi', goal: 'Demande à Am Hédi le chemin de la poste, fais-toi expliquer gauche, droite, tout droit, et refuse son taxi.', win: 'L’élève a demandé le chemin en tunisien, compris au moins une direction et refusé le taxi.' }
      },
      {
        id: 'n4e5', title: 'Le match de foot',
        pitch: 'Espérance contre Club Africain. Skander est pour le Club. La soirée va être longue.',
        cast: ['skander'],
        scene: [
          { who: 'skander', tn: 'Chkoun bech yerbah lyouma, el Taraji wala el Club?', ar: 'شكون باش يربح اليوما، الترجي ولا الكلوب؟', fr: 'Qui va gagner aujourd’hui, l’Espérance ou le Club ?' },
          { who: 'me', tn: 'El Taraji, akid!', ar: 'الترجي، أكيد!', fr: 'L’Espérance, évidemment !' },
          { who: 'skander', tn: 'Ena clubiste! Mouch normal enti!', ar: 'أنا كلوبيست! موش نورمال إنتي!', fr: 'Moi, je suis pour le Club ! T’es pas normal, toi !' },
          { who: 'me', tn: 'Nrahnek b kaskrout!', ar: 'نراهنك بكسكروت!', fr: 'Je te parie un sandwich !' },
          { who: 'skander', tn: 'Behi! Elli yokhser ykhallas.', ar: 'باهي! اللي يخسر يخلّص.', fr: 'D’accord ! Celui qui perd paie.' },
          { who: 'skander', tn: 'Ya khsara… el Taraji rbah zouz l sfer.', ar: 'يا خسارة… الترجي ربح زوز لصفر.', fr: 'Quelle misère… L’Espérance a gagné deux à zéro.' },
          { who: 'me', tn: 'Haya, khallas el kaskrout!', ar: 'هيّا، خلّص الكسكروت!', fr: 'Allez, paie le sandwich !' },
          { who: 'skander', tn: 'Ghodwa… inchallah.', ar: 'غدوة… إن شاء الله.', fr: 'Demain… si Dieu le veut.', note: 'Tu ne verras jamais ce sandwich.' }
        ],
        words: [
          { id: 'yerbah', tn: 'Yerbah', ar: 'يربح', fr: 'Il gagne', ex: 'Rbah = il a gagné.' },
          { id: 'yokhser', tn: 'Yokhser', ar: 'يخسر', fr: 'Il perd', ex: 'Khser = il a perdu.' },
          { id: 'mouchnormal', tn: 'Mouch normal', ar: 'موش نورمال', fr: 'Pas normal (incroyable)', ex: 'Sert pour critiquer… ou complimenter.' },
          { id: 'nrahnek', tn: 'Nrahnek', ar: 'نراهنك', fr: 'Je te parie', ex: 'Nrahnek b kaskrout.' },
          { id: 'elli', tn: 'Elli', ar: 'اللي', fr: 'Celui qui, qui', ex: 'Elli yokhser ykhallas.' },
          { id: 'ykhallas', tn: 'Ykhallas', ar: 'يخلّص', fr: 'Il paie', ex: 'Khallas = paie !' },
          { id: 'sfer', tn: 'Sfer', ar: 'صفر', fr: 'Zéro', ex: 'Zouz l sfer = deux à zéro.' },
          { id: 'haya', tn: 'Haya', ar: 'هيّا', fr: 'Allez !', ex: 'Haya nemchiw = allez, on y va.' },
          { id: 'kora', tn: 'El kora', ar: 'الكورة', fr: 'Le foot, le ballon', ex: 'Theb el kora? = tu aimes le foot ?' }
        ],
        exercises: [
          R('skander', 'Chkoun bech yerbah lyouma?', 'شكون باش يربح اليوما؟', 'Qui va gagner aujourd’hui ?', [
            ok('El Taraji, akid!', 'L’Espérance, évidemment !'),
            ko('Ochrob el ma.', 'Bois de l’eau.', 'Bon conseil de Jedda. Mauvais moment.'),
            ko('Hedha jeddek.', 'Ça, c’est ton grand-père.', 'Ton grand-père ne joue pas ce soir.')]),
          R('skander', 'Elli yokhser ykhallas.', 'اللي يخسر يخلّص.', 'Celui qui perd paie.', [
            ok('Behi, mrigel!', 'D’accord, parfait !'),
            ko('Ma fammech sarf.', 'Il n’y a pas de monnaie.', 'Tu prépares déjà ton excuse ? Skander a tout entendu.'),
            ko('Fel lil ahla.', 'La nuit, c’est plus doux.', 'Le match est à 20 h, c’est vrai. Mais ce n’est pas la réponse.')]),
          { type: 'order', tn: 'Elli yokhser ykhallas', fr: 'Celui qui perd paie', tokens: ['Elli', 'yokhser', 'ykhallas'] },
          { type: 'speak', tn: 'Haya, khallas el kaskrout!', ar: 'هيّا، خلّص الكسكروت!', fr: 'Allez, paie le sandwich !' }
        ],
        mission: { who: 'skander', goal: 'Lance un pari avec Skander sur le match, et après la victoire de ton équipe, oblige-le à payer.', win: 'L’élève a fait un pari en tunisien et réclamé son dû à Skander.' }
      }
    ]
  });

  // =====================================================================================
  // NIVEAU 5 — Tata officielle
  // =====================================================================================
  Object.assign(lv('n5'), {
    goal: 'Parler comme Khalti : expressions, proverbes, passé et futur',
    boss: { id: 'n5boss', title: 'L’épreuve finale de Khalti', pitch: '14 questions, toutes difficiles. Il en faut 10 pour devenir « tounsi asli ».', count: 14, pass: 10 },
    episodes: [
      {
        id: 'n5e1', title: 'Les formules magiques',
        pitch: 'Pour chaque situation, une formule. Khalti les connaît toutes. Maintenant, toi aussi.',
        cast: ['khalti'],
        scene: [
          { who: 'khalti', tn: 'Saha! Hassant chaarek?', ar: 'صحّة! حسّنت شعرك؟', fr: 'Bravo ! Tu t’es fait couper les cheveux ?', note: 'Saha : ce qu’on dit pour une nouvelle coupe, un nouveau vêtement, une douche…' },
          { who: 'me', tn: 'Ey, Allah ysalmek.', ar: 'إيه، الله يسلّمك.', fr: 'Oui, merci.', note: 'La réponse obligatoire à « saha ».' },
          { who: 'khalti', tn: 'Ija, kol maaya. Bsahtek!', ar: 'إيجا، كول معايا. بصحّتك!', fr: 'Viens, mange avec moi. Bon appétit !' },
          { who: 'me', tn: 'Yaychek, rabbi yahfdhek.', ar: 'يعيشك، ربّي يحفظك.', fr: 'Merci, que Dieu te protège.' },
          { who: 'khalti', tn: 'Amin. Rabbi yarham waldik!', ar: 'آمين. ربّي يرحم والديك!', fr: 'Amen. Que Dieu bénisse tes parents !', note: 'Un « merci » très fort, très tunisien.' },
          { who: 'me', tn: 'W waldik zeda!', ar: 'ووالديك زادة!', fr: 'Et les tiens aussi !' },
          { who: 'khalti', tn: 'Tawa fhemt! Wallit {tounsi} {asli}!', ar: 'توّا فهمت! وليت {tounsiAr} {asliAr}!', fr: 'Là, tu as compris ! Tu es devenu{e} un{e} vrai{e} Tunisien{ne} !' }
        ],
        words: [
          { id: 'saha', tn: 'Saha', ar: 'صحّة', fr: 'Bravo, à ta santé (nouvelle coupe, vêtement…)', ex: 'On répond : Allah ysalmek.' },
          { id: 'ysalmek', tn: 'Allah ysalmek', ar: 'الله يسلّمك', fr: 'Merci (réponse à « saha »)', ex: 'Saha! — Allah ysalmek.' },
          { id: 'bsahtek', tn: 'Bsahtek', ar: 'بصحّتك', fr: 'Bon appétit', ex: 'Avant de manger.' },
          { id: 'yahfdhek', tn: 'Rabbi yahfdhek', ar: 'ربّي يحفظك', fr: 'Que Dieu te protège', ex: 'Un merci affectueux.' },
          { id: 'waldik', tn: 'Rabbi yarham waldik', ar: 'ربّي يرحم والديك', fr: 'Que Dieu bénisse tes parents (grand merci)', ex: 'On répond : w waldik.' },
          { id: 'wwaldik', tn: 'W waldik', ar: 'ووالديك', fr: 'Et tes parents aussi', ex: 'La réponse.' },
          { id: 'chaar', tn: 'Chaar', ar: 'شعر', fr: 'Cheveux', ex: 'Chaarek = tes cheveux.' },
          { id: 'wallit', tn: 'Wallit', ar: 'وليت', fr: 'Je suis devenu, tu es devenu', ex: 'Wallit tounsi!' },
          { id: 'asli', tn: '{asli}', ar: '{asliAr}', fr: 'Authentique, vrai', ex: 'Asli pour un garçon, asliya pour une fille.' }
        ],
        exercises: [
          R('khalti', 'Saha!', 'صحّة!', 'Bravo !', [
            ok('Allah ysalmek.', 'Merci.'),
            ko('Bsahtek!', 'Bon appétit !', 'Il n’y a rien à manger… pour l’instant.'),
            ko('Mabrouk!', 'Félicitations !', 'C’est une coupe de cheveux, pas un mariage.')]),
          R('khalti', 'Rabbi yarham waldik!', 'ربّي يرحم والديك!', 'Que Dieu bénisse tes parents !', [
            ok('W waldik zeda!', 'Et les tiens aussi !'),
            ko('Bkaddech?', 'C’est combien ?', 'Une bénédiction, c’est gratuit.'),
            ko('Ma fhemtech.', 'Je n’ai pas compris.', 'Après 5 niveaux ?! Khalti s’évanouit.')]),
          { type: 'order', tn: 'Yaychek rabbi yahfdhek', fr: 'Merci, que Dieu te protège', tokens: ['Yaychek', 'rabbi', 'yahfdhek'] },
          { type: 'speak', tn: 'Allah ysalmek', ar: 'الله يسلّمك', fr: 'Merci (réponse à « saha »)' }
        ],
        mission: { who: 'khalti', goal: 'Khalti va te lancer trois formules (saha, bsahtek, rabbi yarham waldik) : réponds avec la bonne formule à chaque fois.', win: 'L’élève a répondu correctement à au moins deux formules de politesse tunisiennes.' }
      },
      {
        id: 'n5e2', title: 'Les proverbes de Jedda',
        pitch: 'Tout ce qui t’arrive, Jedda a un proverbe pour ça. Littéralement tout.',
        cast: ['jedda'],
        scene: [
          { who: 'me', tn: 'Ya Jedda, fetni el train!', ar: 'يا جدّة، فاتني التران!', fr: 'Mamie, j’ai raté le train !' },
          { who: 'jedda', tn: 'Elli fet met.', ar: 'اللي فات مات.', fr: 'Ce qui est passé est mort (inutile de regretter).' },
          { who: 'me', tn: 'Ama tawa bech nousel en retard!', ar: 'أما توّا باش نوصل أون روتار!', fr: 'Mais là, je vais arriver en retard !' },
          { who: 'jedda', tn: 'Kol taakhira fiha khira.', ar: 'كل تأخيرة فيها خيرة.', fr: 'Chaque retard a du bon.' },
          { who: 'me', tn: 'W ki ma naaref hatta had?', ar: 'وكي ما نعرف حتّى حدّ؟', fr: 'Et si je ne connais personne ?' },
          { who: 'jedda', tn: 'Ya ghrib, koun adib.', ar: 'يا غريب، كون أديب.', fr: 'Étranger, sois poli.' },
          { who: 'me', tn: 'W el jiran?', ar: 'والجيران؟', fr: 'Et les voisins ?' },
          { who: 'jedda', tn: 'Ejjar kbal eddar!', ar: 'الجار قبل الدار!', fr: 'Le voisin avant la maison !', note: 'Choisis tes voisins avant de choisir ta maison.' }
        ],
        words: [
          { id: 'ellifet', tn: 'Elli fet met', ar: 'اللي فات مات', fr: 'Ce qui est passé est passé', ex: 'Pour consoler.' },
          { id: 'taakhira', tn: 'Kol taakhira fiha khira', ar: 'كل تأخيرة فيها خيرة', fr: 'Chaque retard a du bon', ex: 'Pour les retardataires.' },
          { id: 'ghrib', tn: 'Ya ghrib, koun adib', ar: 'يا غريب، كون أديب', fr: 'Étranger, sois poli', ex: 'Quand on arrive quelque part.' },
          { id: 'ejjar', tn: 'Ejjar kbal eddar', ar: 'الجار قبل الدار', fr: 'Le voisin avant la maison', ex: 'Choisis bien tes voisins.' },
          { id: 'fetni', tn: 'Fetni', ar: 'فاتني', fr: 'J’ai raté (il m’a échappé)', ex: 'Fetni el train.' },
          { id: 'nousel', tn: 'Nousel', ar: 'نوصل', fr: 'J’arrive', ex: 'Wselt = je suis arrivé.' },
          { id: 'jiran', tn: 'El jiran', ar: 'الجيران', fr: 'Les voisins', ex: 'Jar = un voisin.' },
          { id: 'khir', tn: 'Khir', ar: 'خير', fr: 'Bien, mieux', ex: 'Khir men = mieux que.' }
        ],
        exercises: [
          R('jedda', 'Elli fet met.', 'اللي فات مات.', 'Ce qui est passé est passé.', [
            ok('Behi ya Jedda, aandek el hakk.', 'D’accord, mamie, tu as raison.'),
            ko('Bsahtek!', 'Bon appétit !', 'Jedda te parle de philosophie, pas de dîner.'),
            ko('Arbain dinar.', 'Quarante dinars.', 'La sagesse de Jedda n’a pas de prix.')]),
          R('jedda', 'Ya ghrib, koun adib.', 'يا غريب، كون أديب.', 'Étranger, sois poli.', [
            ok('Fhemt, ya Jedda.', 'J’ai compris, mamie.'),
            ko('Mouch normal enti!', 'T’es pas normale, toi !', 'On ne dit JAMAIS ça à Jedda.'),
            ko('Rodd belek!', 'Fais attention !', 'C’est elle qui donne les conseils, ici.')]),
          { type: 'order', tn: 'Kol taakhira fiha khira', fr: 'Chaque retard a du bon', tokens: ['Kol', 'taakhira', 'fiha', 'khira'] },
          { type: 'speak', tn: 'Ejjar kbal eddar', ar: 'الجار قبل الدار', fr: 'Le voisin avant la maison' }
        ],
        mission: { who: 'jedda', goal: 'Raconte un petit problème à Jedda (un retard, une dispute, un voisin) et place un proverbe au bon moment.', win: 'L’élève a raconté un problème en tunisien et utilisé un proverbe tunisien de façon adaptée.' }
      },
      {
        id: 'n5e3', title: 'Raconte ta journée',
        pitch: 'Khalti veut un rapport complet. Au passé. Sans rien oublier.',
        cast: ['khalti'],
        scene: [
          { who: 'khalti', tn: 'Chnoua aamelt lyouma?', ar: 'شنوة عملت اليوما؟', fr: 'Qu’est-ce que tu as fait aujourd’hui ?' },
          { who: 'me', tn: 'Komt mbakri, mchit lel souk, w chrit el khobz.', ar: 'قمت مبكّري، مشيت للسوق، وشريت الخبز.', fr: 'Je me suis levé{e} tôt, je suis allé{e} au souk, et j’ai acheté le pain.' },
          { who: 'khalti', tn: 'W baad?', ar: 'وبعد؟', fr: 'Et après ?' },
          { who: 'me', tn: 'Baad klit, w rkadt chwaya.', ar: 'بعد كليت، ورقدت شويّة.', fr: 'Après, j’ai mangé, et j’ai dormi un peu.' },
          { who: 'khalti', tn: 'Rkadt?! W ena nestanna fik!', ar: 'رقدت؟! وأنا نستنّى فيك!', fr: 'Tu as dormi ?! Et moi qui t’attendais !' },
          { who: 'me', tn: 'Samahni ya Khalti, ma nawedhech.', ar: 'سامحني يا خالتي، ما نعاودهاش.', fr: 'Pardon, tata, je ne recommencerai pas.' },
          { who: 'khalti', tn: 'Behi. Ama ghodwa, taamelli enti el kosksi!', ar: 'باهي. أما غدوة، تعملّي إنتي الكسكسي!', fr: 'D’accord. Mais demain, c’est toi qui me fais le couscous !' }
        ],
        words: [
          { id: 'aamelt', tn: 'Aamelt', ar: 'عملت', fr: 'J’ai fait / tu as fait', ex: 'Chnoua aamelt? = qu’est-ce que tu as fait ?' },
          { id: 'kmt', tn: 'Komt', ar: 'قمت', fr: 'Je me suis levé(e)', ex: 'Komt mbakri.' },
          { id: 'mchit', tn: 'Mchit', ar: 'مشيت', fr: 'Je suis allé(e)', ex: 'Mchit lel souk.' },
          { id: 'chrit', tn: 'Chrit', ar: 'شريت', fr: 'J’ai acheté', ex: 'Chrit el khobz.' },
          { id: 'klit', tn: 'Klit', ar: 'كليت', fr: 'J’ai mangé', ex: 'Ma klitch = je n’ai pas mangé.' },
          { id: 'rkadt', tn: 'Rkadt', ar: 'رقدت', fr: 'J’ai dormi', ex: 'Le crime de l’épisode.' },
          { id: 'nestanna', tn: 'Nestanna', ar: 'نستنّى', fr: 'J’attends', ex: 'Nestanna fik = je t’attends.' },
          { id: 'nawed', tn: 'Ma nawedhech', ar: 'ما نعاودهاش', fr: 'Je ne recommencerai pas', ex: 'La promesse qu’on ne tient jamais.' },
          { id: 'souk', tn: 'Souk', ar: 'سوق', fr: 'Marché', ex: 'Mchit lel souk.' }
        ],
        exercises: [
          R('khalti', 'Chnoua aamelt lyouma?', 'شنوة عملت اليوما؟', 'Qu’est-ce que tu as fait aujourd’hui ?', [
            ok('Mchit lel souk w chrit el khobz.', 'Je suis allé au souk et j’ai acheté le pain.'),
            ko('Bech nemchi lel souk.', 'Je vais aller au souk.', 'C’est du futur ! Khalti demande ce que tu AS fait.'),
            ko('Nhar essebt.', 'Samedi.', 'Elle demande ce que tu as fait, pas quel jour on est.')]),
          R('khalti', 'Rkadt?! W ena nestanna fik!', 'رقدت؟! وأنا نستنّى فيك!', 'Tu as dormi ?! Et moi qui t’attendais !', [
            ok('Samahni ya Khalti, ma nawedhech.', 'Pardon, tata, je ne recommencerai pas.'),
            ko('Elli fet met.', 'Ce qui est passé est passé.', 'Utiliser les proverbes de Jedda contre Khalti ? Courageux. Très risqué.'),
            ko('Mouch normal!', 'Pas normal !', 'Khalti est d’accord : ce n’est pas normal. De ta part.')]),
          { type: 'order', tn: 'Komt mbakri w mchit lel souk', fr: 'Je me suis levé tôt et je suis allé au souk', tokens: ['Komt', 'mbakri', 'w', 'mchit', 'lel', 'souk'] },
          { type: 'speak', tn: 'Samahni, ma nawedhech', ar: 'سامحني، ما نعاودهاش', fr: 'Pardon, je ne recommencerai pas' }
        ],
        mission: { who: 'khalti', goal: 'Raconte ta journée à Khalti au passé : au moins trois choses que tu as faites.', win: 'L’élève a raconté au moins trois actions au passé en tunisien (mchit, klit, chrit…).' }
      },
      {
        id: 'n5e4', title: 'L’été prochain',
        pitch: 'Skander parie que tu ne reviendras jamais. Prouve-lui le contraire. Au futur.',
        cast: ['skander'],
        scene: [
          { who: 'skander', tn: 'Chnoua bech taamel essif ejjay?', ar: 'شنوة باش تعمل الصيف الجاي؟', fr: 'Tu vas faire quoi l’été prochain ?' },
          { who: 'me', tn: 'Bech nerjaa l Tounes, w bech nahki ken tounsi!', ar: 'باش نرجع لتونس، وباش نحكي كان تونسي!', fr: 'Je vais revenir en Tunisie, et je ne parlerai que tunisien !' },
          { who: 'skander', tn: 'Ken tounsi? Mouch bech tnajjem!', ar: 'كان تونسي؟ موش باش تنجّم!', fr: 'Que tunisien ? Tu n’y arriveras pas !' },
          { who: 'me', tn: 'Nnajjem! Tawa nahki khir mennek!', ar: 'ننجّم! توّا نحكي خير منّك!', fr: 'Si, je peux ! Maintenant je parle mieux que toi !' },
          { who: 'skander', tn: 'Hhh, nchoufou.', ar: 'هههه، نشوفو.', fr: 'Haha, on verra.' },
          { who: 'me', tn: 'W enti, chnoua bech taamel?', ar: 'وإنتي، شنوة باش تعمل؟', fr: 'Et toi, tu vas faire quoi ?' },
          { who: 'skander', tn: 'Ena? Bech norked!', ar: 'أنا؟ باش نرقد!', fr: 'Moi ? Je vais dormir !' }
        ],
        words: [
          { id: 'bech', tn: 'Bech', ar: 'باش', fr: 'Va (futur)', ex: 'Bech nemchi = je vais aller.' },
          { id: 'sif', tn: 'Essif', ar: 'الصيف', fr: 'L’été', ex: 'Essif ejjay = l’été prochain.' },
          { id: 'ejjay', tn: 'Ejjay', ar: 'الجاي', fr: 'Prochain', ex: 'El jemaa ejjaya = la semaine prochaine.' },
          { id: 'nerjaa', tn: 'Nerjaa', ar: 'نرجع', fr: 'Je reviens', ex: 'Bech nerjaa = je vais revenir.' },
          { id: 'nnajjem', tn: 'Nnajjem', ar: 'ننجّم', fr: 'Je peux', ex: 'Ma nnajjemch = je ne peux pas.' },
          { id: 'mouchbech', tn: 'Mouch bech', ar: 'موش باش', fr: 'Ne va pas (futur négatif)', ex: 'Mouch bech nemchi = je ne vais pas y aller.' },
          { id: 'khirmen', tn: 'Khir men', ar: 'خير من', fr: 'Mieux que', ex: 'Khir mennek = mieux que toi.' },
          { id: 'nchoufou', tn: 'Nchoufou', ar: 'نشوفو', fr: 'On verra', ex: 'La réponse préférée de Skander.' },
          { id: 'taamel', tn: 'Taamel', ar: 'تعمل', fr: 'Tu fais', ex: 'Naamel = je fais.' }
        ],
        exercises: [
          R('skander', 'Chnoua bech taamel essif ejjay?', 'شنوة باش تعمل الصيف الجاي؟', 'Tu vas faire quoi l’été prochain ?', [
            ok('Bech nerjaa l Tounes!', 'Je vais revenir en Tunisie !'),
            ko('Mchit lel souk.', 'Je suis allé au souk.', 'C’est du passé ! Skander parle de l’été prochain.'),
            ko('Kerchi youjaani.', 'J’ai mal au ventre.', 'Tu essaies d’éviter la question ? Skander a compris.')]),
          R('skander', 'Mouch bech tnajjem!', 'موش باش تنجّم!', 'Tu n’y arriveras pas !', [
            ok('Nnajjem! Tawa nahki khir mennek!', 'Si, je peux ! Maintenant je parle mieux que toi !'),
            ko('Akid, aandek el hakk.', 'Bien sûr, tu as raison.', 'Tu abandonnes ?! Après 5 niveaux ?!'),
            ko('Hadher!', 'Tout de suite !', 'Tu n’es pas serveur, tu es en plein défi.')]),
          { type: 'order', tn: 'Bech nerjaa l Tounes', fr: 'Je vais revenir en Tunisie', tokens: ['Bech', 'nerjaa', 'l', 'Tounes'] },
          { type: 'speak', tn: 'Bech nahki ken tounsi', ar: 'باش نحكي كان تونسي', fr: 'Je ne parlerai que tunisien' }
        ],
        mission: { who: 'skander', goal: 'Raconte à Skander tes projets pour l’été prochain, au futur, et défends-toi quand il se moque.', win: 'L’élève a utilisé au moins deux fois le futur avec « bech » en tunisien.' }
      },
      {
        id: 'n5e5', title: 'Le grand dîner de Khalti',
        pitch: 'Toute la famille vient. C’est toi qui aides Khalti. C’est l’examen final.',
        cast: ['khalti'],
        scene: [
          { who: 'khalti', tn: 'Lyouma el aacha aandi, el aayla el kol bech tji!', ar: 'اليوما العشاء عندي، العايلة الكل باش تجي!', fr: 'Ce soir, dîner chez moi, toute la famille va venir !' },
          { who: 'me', tn: 'Nnajjem nawnek?', ar: 'ننجّم نعاونك؟', fr: 'Je peux t’aider ?' },
          { who: 'khalti', tn: 'Ey! Hott ettawla, w jib el kraasi.', ar: 'إيه! حطّ الطاولة، وجيب الكراسي.', fr: 'Oui ! Mets la table, et apporte les chaises.' },
          { who: 'me', tn: 'Hadher. W chnoua tbakht?', ar: 'حاضر. وشنوة طبخت؟', fr: 'Tout de suite. Et tu as cuisiné quoi ?' },
          { who: 'khalti', tn: 'Kosksi, brik, w slata mechouia!', ar: 'كسكسي، بريك، وسلاطة مشوية!', fr: 'Couscous, briks et salade méchouia !' },
          { who: 'me', tn: 'Allah! Rihtou behya barcha!', ar: 'الله! ريحتو بهيّة برشة!', fr: 'Waouh ! Ça sent vraiment bon !' },
          { who: 'khalti', tn: 'Tawa tahki tounsi kima ena. Ena fakhoura bik!', ar: 'توّا تحكي تونسي كيما أنا. أنا فخورة بيك!', fr: 'Maintenant, tu parles tunisien comme moi. Je suis fière de toi !' }
        ],
        words: [
          { id: 'aacha', tn: 'El aacha', ar: 'العشاء', fr: 'Le dîner', ex: 'El aacha jehez = le dîner est prêt.' },
          { id: 'aayla', tn: 'El aayla', ar: 'العايلة', fr: 'La famille', ex: 'El aayla el kol = toute la famille.' },
          { id: 'nawnek', tn: 'Nawnek', ar: 'نعاونك', fr: 'Je t’aide', ex: 'Nnajjem nawnek? = je peux t’aider ?' },
          { id: 'hott', tn: 'Hott', ar: 'حطّ', fr: 'Mets, pose', ex: 'Hott ettawla = mets la table.' },
          { id: 'tawla', tn: 'Ettawla', ar: 'الطاولة', fr: 'La table', ex: 'Hott ettawla.' },
          { id: 'jib', tn: 'Jib', ar: 'جيب', fr: 'Apporte', ex: 'Jib el kraasi = apporte les chaises.' },
          { id: 'kraasi', tn: 'Kraasi', ar: 'كراسي', fr: 'Chaises', ex: 'Korsi = une chaise.' },
          { id: 'tbakht', tn: 'Tbakht', ar: 'طبخت', fr: 'Tu as cuisiné / j’ai cuisiné', ex: 'Chnoua tbakht?' },
          { id: 'rihtou', tn: 'Rihtou', ar: 'ريحتو', fr: 'Son odeur', ex: 'Rihtou behya = ça sent bon.' },
          { id: 'kima', tn: 'Kima', ar: 'كيما', fr: 'Comme', ex: 'Kima ena = comme moi.' },
          { id: 'fakhoura', tn: 'Fakhour / fakhoura', ar: 'فخور / فخورة', fr: 'Fier / fière', ex: 'Fakhoura bik = fière de toi.' }
        ],
        exercises: [
          R('khalti', 'El aayla el kol bech tji!', 'العايلة الكل باش تجي!', 'Toute la famille va venir !', [
            ok('Nnajjem nawnek?', 'Je peux t’aider ?'),
            ko('Bech norked.', 'Je vais dormir.', 'Le soir du grand dîner ?! Khalti fait semblant de ne pas avoir entendu.'),
            ko('Mouch normal!', 'Pas normal !', 'Si, c’est normal : c’est la famille.')]),
          R('khalti', 'Hott ettawla, w jib el kraasi.', 'حطّ الطاولة، وجيب الكراسي.', 'Mets la table, et apporte les chaises.', [
            ok('Hadher!', 'Tout de suite !'),
            ko('Ma naarefch norkos.', 'Je ne sais pas danser.', 'Personne ne danse. On met la table.'),
            ko('Fetni el train.', 'J’ai raté le train.', 'Tu es dans la cuisine de Khalti. Il n’y a pas de train.')]),
          { type: 'order', tn: 'Ena fakhoura bik', fr: 'Je suis fière de toi', tokens: ['Ena', 'fakhoura', 'bik'] },
          { type: 'speak', tn: 'Nnajjem nawnek?', ar: 'ننجّم نعاونك؟', fr: 'Je peux t’aider ?' }
        ],
        mission: { who: 'khalti', goal: 'Aide Khalti à préparer le dîner : propose ton aide, demande ce qu’il y a à manger, et fais-lui un compliment.', win: 'L’élève a proposé son aide, parlé du repas et fait un compliment en tunisien.' }
      }
    ]
  });

  // Missions des épisodes d'origine
  const M = (id, m) => { T.levels.forEach(l => l.episodes.forEach(e => { if (e.id === id) e.mission = m; })); };
  M('n1e1', { who: 'khalti', goal: 'Accueille Khalti à l’aéroport : salue-la, donne ton prénom et dis-lui qu’elle t’a manqué.', win: 'L’élève a salué Khalti, donné son prénom et dit « twahachtek » (ou équivalent), en tunisien.' });
  M('n1e2', { who: 'hedi', goal: 'Prends le taxi d’Am Hédi pour La Marsa et négocie : pas plus de 15 dinars.', win: 'L’élève a donné sa destination et obtenu un prix de 15 dinars ou moins, en tunisien.' });
  M('n1e3', { who: 'lamine', goal: 'Achète deux baguettes et du lben chez Si Lamine, et demande combien ça coûte.', win: 'L’élève a demandé du pain et du lben avec une quantité, et demandé le prix, en tunisien.' });
  M('n2e1', { who: 'khalti', goal: 'Khalti te ressert sans arrêt : complimente le plat, puis refuse poliment la troisième assiette.', win: 'L’élève a complimenté le repas (bnin…) et refusé poliment de se resservir, en tunisien.' });
  M('n2e2', { who: 'skander', goal: 'Réponds à l’interrogatoire de Skander : quand tu es arrivé, combien de temps tu restes, ce que tu fais dans la vie.', win: 'L’élève a répondu à au moins deux de ces questions en tunisien.' });
  M('n2e3', { who: 'jedda', goal: 'Appelle Jedda : fais-toi entendre, prends de ses nouvelles et dis-lui quand tu viens la voir.', win: 'L’élève a pris des nouvelles de Jedda et dit quand il vient, en tunisien.' });

  // =====================================================================================
  // LE COIN DE KHALTI — une leçon de grammaire par niveau
  // =====================================================================================
  const G = (level, g) => { lv(level).grammar = g; };
  const C = (q, tn, good, bad, explain) => ({ type: 'choice', q, tn, options: [{ t: good, ok: true }].concat(bad.map(t => ({ t }))), explain });

  G('n1', {
    id: 'g1', title: 'Mon, ton, son : les possessifs',
    cards: [
      { title: 'On colle la fin au mot', text: 'En tunisien, « mon », « ton », « son » ne sont pas des mots séparés : c’est une fin qu’on colle au nom.',
        table: [['esm (nom)', ''], ['esmi', 'mon nom'], ['esmek', 'ton nom'], ['esmou', 'son nom (à lui)'], ['esmha', 'son nom (à elle)'], ['esmna', 'notre nom'], ['esmkom', 'votre nom'], ['esmhom', 'leur nom']] },
      { title: 'Avec la maison', text: 'Même chose avec « dar » (la maison).',
        table: [['dari', 'ma maison'], ['darek', 'ta maison'], ['darou', 'sa maison (à lui)'], ['darha', 'sa maison (à elle)']] },
      { title: 'L’astuce des mots en -a', text: 'Si le mot finit par -a, on ajoute un t : khobza → khobzti (mon pain), karhba → karhebtek (ta voiture). On peut aussi dire « el karhba mtaai » (la voiture à moi).' }
    ],
    exercises: [
      C('Comment dit-on « mon nom » ?', '', 'Esmi', ['Esmek', 'Esmou', 'Esmha'], 'Esmi = mon nom.'),
      C('Comment dit-on « ta maison » ?', '', 'Darek', ['Dari', 'Darou', 'Darna'], 'Darek = ta maison.'),
      C('Que veut dire « esmha » ?', 'Esmha', 'Son nom (à elle)', ['Mon nom', 'Ton nom', 'Leur nom'], '-ha = à elle.'),
      C('Comment dit-on « notre maison » ?', '', 'Darna', ['Darhom', 'Darkom', 'Dari'], '-na = notre.'),
      C('Comment dit-on « ma voiture » (karhba) ?', '', 'Karhebti', ['Karhbai', 'Karhbaek', 'Karhbou'], 'Mot en -a : on ajoute t → karhebti.'),
      C('Que veut dire « el karhba mtaai » ?', 'El karhba mtaai', 'Ma voiture', ['Ta voiture', 'Sa voiture', 'La voiture du voisin'], 'Mtaai = à moi.')
    ]
  });
  G('n2', {
    id: 'g2', title: 'Dire non : ma…ch et mouch',
    cards: [
      { title: 'Avec un verbe : ma … ch', text: 'On encadre le verbe : « ma » devant, « ch » derrière.',
        table: [['nheb (je veux)', 'ma nhebbech (je ne veux pas)'], ['fhemt (j’ai compris)', 'ma fhemtech (je n’ai pas compris)'], ['klit (j’ai mangé)', 'ma klitch (je n’ai pas mangé)'], ['famma (il y a)', 'ma fammech (il n’y a pas)']] },
      { title: 'Sans verbe : mouch', text: 'Devant un adjectif, un nom ou le futur, on met « mouch ».',
        table: [['ghali (cher)', 'mouch ghali (pas cher)'], ['normal', 'mouch normal (pas normal)'], ['bech nemchi (je vais y aller)', 'mouch bech nemchi (je ne vais pas y aller)']] }
    ],
    exercises: [
      C('Comment dit-on « je ne veux pas » ?', '', 'Ma nhebbech', ['Mouch nheb', 'Ma nheb', 'Nhebbech']),
      C('Comment dit-on « pas cher » ?', '', 'Mouch ghali', ['Ma ghalich', 'Ma ghali', 'Ghalich'], 'Pas de verbe : mouch.'),
      C('Comment dit-on « il n’y a pas » ?', '', 'Ma fammech', ['Mouch famma', 'Famma ch', 'Ma famma'], 'Famma devient ma fammech.'),
      C('Comment dit-on « je n’ai pas compris » ?', '', 'Ma fhemtech', ['Mouch fhemt', 'Fhemtech', 'Ma fhemt']),
      C('Comment dit-on « je ne vais pas y aller » ?', '', 'Mouch bech nemchi', ['Ma bech nemchich', 'Ma nemchich bech', 'Bech ma nemchi'], 'Le futur se nie avec mouch.'),
      C('Que veut dire « ma klitch » ?', 'Ma klitch', 'Je n’ai pas mangé', ['J’ai mangé', 'Je mange', 'Je vais manger'])
    ]
  });
  G('n3', {
    id: 'g3', title: 'Le présent : n-, t-, y-',
    cards: [
      { title: 'Le verbe « travailler »', text: 'Au présent, on change le début du verbe selon la personne. Au pluriel, on ajoute -ou à la fin.',
        table: [['ena nekhdem', 'je travaille'], ['enti tekhdem', 'tu travailles'], ['houa yekhdem', 'il travaille'], ['hiya tekhdem', 'elle travaille'], ['ahna nekhdmou', 'nous travaillons'], ['entouma tekhdmou', 'vous travaillez'], ['houma yekhdmou', 'ils travaillent']] },
      { title: 'Bonne nouvelle', text: 'En tunisien de Tunis, « tu » est le même pour un garçon et une fille : tekhdem, theb, tochrob. Pas de forme féminine à apprendre !' }
    ],
    exercises: [
      C('« Nous travaillons » se dit…', '', 'Nekhdmou', ['Nekhdem', 'Yekhdmou', 'Tekhdmou']),
      C('« Il travaille » se dit…', '', 'Yekhdem', ['Tekhdem', 'Nekhdem', 'Yekhdmou']),
      C('Que veut dire « tochrob » ?', 'Tochrob', 'Tu bois / elle boit', ['Je bois', 'Ils boivent', 'Nous buvons'], 't- = tu ou elle.'),
      C('« Ils mangent » (kla : manger) se dit…', '', 'Yeklou', ['Nekel', 'Yekel', 'Teklou']),
      C('« Je veux » se dit…', '', 'Nheb', ['Theb', 'Yheb', 'Nhebbou']),
      C('À une fille, « tu travailles » se dit…', '', 'Tekhdem', ['Tekhdmi', 'Tekhdema', 'Nekhdem'], 'À Tunis, pas de féminin pour « tu ».')
    ]
  });
  G('n4', {
    id: 'g4', title: 'Le passé : -t, -et, -ou',
    cards: [
      { title: 'Le verbe « travailler » au passé', text: 'Au passé, c’est la fin du verbe qui change.',
        table: [['ena khdemt', 'j’ai travaillé'], ['enti khdemt', 'tu as travaillé'], ['houa khdem', 'il a travaillé'], ['hiya khedmet', 'elle a travaillé'], ['ahna khdemna', 'nous avons travaillé'], ['entouma khdemtou', 'vous avez travaillé'], ['houma khedmou', 'ils ont travaillé']] },
      { title: 'Les verbes en -a', text: 'Mcha (aller), kla (manger), chra (acheter) : mchit, klit, chrit (je / tu) ; mcha, kla, chra (il) ; mchet, klet, chret (elle) ; mchina, klina, chrina (nous) ; mchaw, klaw, chraw (ils).' }
    ],
    exercises: [
      C('« Elle a travaillé » se dit…', '', 'Khedmet', ['Khdemt', 'Khdem', 'Khedmou']),
      C('« Nous avons mangé » se dit…', '', 'Klina', ['Klit', 'Kla', 'Klaw']),
      C('Que veut dire « mchit » ?', 'Mchit', 'Je suis allé(e) / tu es allé(e)', ['Il est allé', 'Ils sont allés', 'Je vais aller']),
      C('« Ils ont acheté » se dit…', '', 'Chraw', ['Chrit', 'Chra', 'Chrina']),
      C('« Il a travaillé » se dit…', '', 'Khdem', ['Khdemt', 'Khedmet', 'Khdemna']),
      C('Que veut dire « ma klitch » ?', 'Ma klitch', 'Je n’ai pas mangé', ['Elle n’a pas mangé', 'Je mange', 'Ils ont mangé'])
    ]
  });
  G('n5', {
    id: 'g5', title: 'Le futur (bech) et « en train de » (kaed)',
    cards: [
      { title: 'Le futur : bech', text: 'On met « bech » devant le verbe au présent. Simple !',
        table: [['bech nemchi', 'je vais aller'], ['bech tji', 'tu vas venir'], ['bech yokhser', 'il va perdre'], ['mouch bech nemchi', 'je ne vais pas y aller']] },
      { title: 'En train de : kaed', text: '« Kaed » s’accorde avec la personne : kaed (lui), kaeda (elle), kaedin (eux).',
        table: [['kaed yekel', 'il est en train de manger'], ['kaeda tetkallem', 'elle est en train de parler'], ['kaedin nekhdmou', 'nous sommes en train de travailler']] }
    ],
    exercises: [
      C('« Je vais revenir » se dit…', '', 'Bech nerjaa', ['Rjaat', 'Kaed nerjaa', 'Nerjaa bech']),
      C('« Je ne vais pas manger » se dit…', '', 'Mouch bech nekel', ['Ma bech nekelch', 'Bech ma nekelch', 'Ma klitch']),
      C('« Elle est en train de cuisiner » se dit…', '', 'Kaeda totbokh', ['Kaed yotbokh', 'Bech totbokh', 'Tbakhet']),
      C('Que veut dire « kaedin nekhdmou » ?', 'Kaedin nekhdmou', 'Nous sommes en train de travailler', ['Nous avons travaillé', 'Nous allons travailler', 'Nous ne travaillons pas']),
      C('Que veut dire « bech tji » ?', 'Bech tji', 'Tu vas venir', ['Tu es venu', 'Tu viens souvent', 'Ne viens pas']),
      C('« Il va gagner » se dit…', '', 'Bech yerbah', ['Rbah', 'Kaed yerbah', 'Mouch yerbah'])
    ]
  });
})();
