// Tounsi w Bark — pack ALGÉRIEN « dz » (darija d'Alger, l'algérois), avec Khalti Zhor.
// Règles suivies : docs/reference-algerien.md. À FAIRE AVANT DE PARTAGER : faire relire par un natif d'Alger.
// Ce fichier : réglages du pack, personnages, discussion IA, répliques de Khalti Zhor, niveaux 1 et 2.
// La suite (niveaux 3 à 5, grammaire, « Lire et écrire ») est dans content-dz-more.js.
//
// Genre de l'élève : {g:forme garçon|forme fille} dans tn et ar (en algérien, « tu » change : nta/nti, rak/raki,
// tekhdem/tekhedmi) ; {e} {ne} en français ; {petit}/{petitAr} = wlidi/benti ; {prenom} = prénom.
//
// Pour ajouter une autre langue (ex. marocain « ma ») : copier ce fichier en content-ma.js, changer la clé du pack,
// les personnages et les textes, puis ajouter les <script> dans src/app.html. Le sélecteur de langues la montrera seul.

(() => {
  const R = (who, tn, ar, fr, options) => ({ type: 'reply', who, line: { tn, ar, fr }, options });
  const ok = (tn, fr) => ({ tn, fr, ok: true });
  const ko = (tn, fr, why) => ({ tn, fr, why });

  window.TWB_DZ_L12 = [
    // =====================================================================================
    // NIVEAU 1 — Touriste perdu à Alger
    // =====================================================================================
    {
      id: 'd1', num: 1, name: 'Touriste perdu à Alger',
      goal: 'Survivre à ta première journée à Alger',
      boss: {
        id: 'd1boss', title: 'L’épreuve de Khalti Zhor',
        pitch: '10 questions sur tout le niveau. Il en faut 7 pour que Khalti Zhor annonce à toute la Casbah que tu parles algérien.',
        count: 10, pass: 7
      },
      episodes: [
        // ---------------------------------------------------------------- Épisode 1
        {
          id: 'd1e1', title: 'L’arrivée à Houari-Boumediene',
          pitch: 'Khalti Zhor t’attend à l’aéroport depuis deux heures. Avec un panier de gâteaux et toute sa patience (presque).',
          cast: ['zhor'],
          scene: [
            { who: 'zhor', tn: 'Salam ya {petit}! Wallah twahachtek bezzaf!', ar: 'سلام يا {petitAr}! والله توحشتك بزاف!', fr: 'Coucou {petitFr} ! Wallah, tu m’as trop manqué !' },
            { who: 'me', tn: 'Salam Khalti! Wach raki?', ar: 'سلام خالتي! واش راكي؟', fr: 'Salut tata ! Comment tu vas ?' },
            { who: 'zhor', tn: 'Rani labas, hamdoullah. W {g:nta|nti}, wach {g:rak|raki}?', ar: 'راني لاباس، الحمد لله. و {g:نتا|نتي}، واش {g:راك|راكي}؟', fr: 'Je vais bien, Dieu merci. Et toi, comment tu vas ?' },
            { who: 'me', tn: 'Labas, hamdoullah. Ana {g:aayan|aayana} chwiya.', ar: 'لاباس، الحمد لله. أنا {g:عيان|عيانة} شوية.', fr: 'Ça va, Dieu merci. Je suis un peu fatigué{e}.' },
            { who: 'zhor', tn: 'Wach smitek? Nsitha!', ar: 'واش سميتك؟ نسيتها!', fr: 'C’est quoi ton prénom, déjà ? Je l’ai oublié !', note: 'Elle ne l’a pas oublié. Elle teste ton algérien.' },
            { who: 'me', tn: 'Smiti {prenom}, ya Khalti!', ar: 'سميتي {prenom}، يا خالتي!', fr: 'Je m’appelle {prenom}, tata !' },
            { who: 'zhor', tn: 'Mlih, mlih. Dork nahedrou ghir bel dzayri!', ar: 'مليح، مليح. درك نهدرو غير بالدزيري!', fr: 'Bien, bien. Maintenant, on parle seulement en algérien !' },
            { who: 'me', tn: 'Saha, ya Khalti.', ar: 'صحة، يا خالتي.', fr: 'Merci, tata.', note: 'Saha veut dire « santé ». À Alger, ça veut aussi dire merci. Et bravo. Et à tes souhaits.' }
          ],
          words: [
            { id: 'z_salam', tn: 'Salam', ar: 'سلام', fr: 'Bonjour, salut', ex: 'Salam Khalti! = Salut tata !' },
            { id: 'z_wachrak', tn: 'Wach {g:rak|raki}?', ar: 'واش {g:راك|راكي}؟', fr: 'Comment tu vas ?', ex: 'Wach rak à un garçon, wach raki à une fille.' },
            { id: 'z_labas', tn: 'Labas', ar: 'لاباس', fr: 'Ça va (bien)', ex: 'Rani labas = je vais bien.' },
            { id: 'z_hamdoullah', tn: 'Hamdoullah', ar: 'الحمد لله', fr: 'Dieu merci', ex: 'Labas, hamdoullah.' },
            { id: 'z_smitek', tn: 'Wach smitek?', ar: 'واش سميتك؟', fr: 'Comment tu t’appelles ?', ex: 'Wach = quoi. Smiya = prénom.' },
            { id: 'z_smiti', tn: 'Smiti…', ar: 'سميتي…', fr: 'Je m’appelle…', ex: 'Smiti {prenom}.' },
            { id: 'z_mlih', tn: 'Mlih', ar: 'مليح', fr: 'Bien, bon, d’accord', ex: 'Le mot que tu vas dire 50 fois par jour.' },
            { id: 'z_chwiya', tn: 'Chwiya', ar: 'شوية', fr: 'Un peu', ex: 'Ana aayan chwiya = je suis un peu fatigué.' },
            { id: 'z_saha', tn: 'Saha', ar: 'صحة', fr: 'Merci (et bravo, et santé)', ex: 'Saha, ya Khalti.' },
            { id: 'z_twahachtek', tn: 'Twahachtek', ar: 'توحشتك', fr: 'Tu m’as manqué', ex: 'À dire à Khalti Zhor, sinon elle boude.' }
          ],
          exercises: [
            { type: 'meaning', word: 'z_salam' },
            { type: 'reverse', word: 'z_wachrak' },
            R('zhor', 'Wach smitek?', 'واش سميتك؟', 'Comment tu t’appelles ?', [
              ok('Smiti {prenom}.', 'Je m’appelle {prenom}.'),
              ko('Ghali bezzaf!', 'C’est très cher !', 'Tu viens de dire à Khalti qu’elle coûte trop cher. Elle demandait ton prénom.'),
              ko('Labas, hamdoullah.', 'Ça va, Dieu merci.', 'Elle te demande ton prénom, pas des nouvelles. Les nouvelles, elle les a déjà par toute la famille.')]),
            { type: 'listen', word: 'z_mlih' },
            { type: 'order', tn: 'Salam ya Khalti wach raki', fr: 'Salut tata, comment tu vas ?', tokens: ['Salam', 'ya', 'Khalti', 'wach', 'raki'] },
            { type: 'speak', tn: 'Saha, ya Khalti', ar: 'صحة، يا خالتي', fr: 'Merci, tata' },
            { type: 'meaning', word: 'z_twahachtek' }
          ],
          mission: { who: 'zhor', goal: 'Salue Khalti Zhor, dis-lui comment tu vas et comment tu t’appelles.', win: 'L’élève a salué Khalti Zhor, donné de ses nouvelles et dit son prénom, en algérien.' }
        },
        // ---------------------------------------------------------------- Épisode 2
        {
          id: 'd1e2', title: 'Le taxi d’Ammi Rabah',
          pitch: 'Ammi Rabah conduit son taxi depuis 1987. Le chaâbi à fond, et zéro seconde de silence.',
          cast: ['rabah'],
          scene: [
            { who: 'rabah', tn: 'Salam! Win {g:rayah|rayha}?', ar: 'سلام! وين {g:رايح|رايحة}؟', fr: 'Salut ! Tu vas où ?' },
            { who: 'me', tn: 'Nheb nrouh l Bab El Oued.', ar: 'نحب نروح لباب الوادي.', fr: 'Je veux aller à Bab El Oued.' },
            { who: 'rabah', tn: 'Mlih. {g:Nta|Nti} men Fransa? Bayna!', ar: 'مليح. {g:نتا|نتي} من فرانسا؟ باينة!', fr: 'D’accord. Tu viens de France ? Ça se voit !', note: 'Tu n’as rien dit. Il a deviné à ta valise à roulettes.' },
            { who: 'me', tn: 'Hdar bechwiya, ma fhemtch.', ar: 'اهدر بشوية، ما فهمتش.', fr: 'Parle doucement, je n’ai pas compris.' },
            { who: 'rabah', tn: 'Smaa hadi! Chaabi el asli!', ar: 'اسمع هادي! شعبي الأصلي!', fr: 'Écoute celle-là ! Le vrai chaâbi !', note: 'Au lieu de parler doucement, il a monté le son d’El Anka.' },
            { who: 'rabah', tn: 'Wselna!', ar: 'وصلنا!', fr: 'On est arrivés !' },
            { who: 'me', tn: 'Bechhal?', ar: 'بشحال؟', fr: 'C’est combien ?' },
            { who: 'rabah', tn: 'Alf dinar.', ar: 'ألف دينار.', fr: 'Mille dinars.' },
            { who: 'me', tn: 'Ghali bezzaf!', ar: 'غالي بزاف!', fr: 'C’est très cher !' }
          ],
          words: [
            { id: 'z_winrayah', tn: 'Win {g:rayah|rayha}?', ar: 'وين {g:رايح|رايحة}؟', fr: 'Tu vas où ?', ex: 'Win = où. Rayah à un garçon, rayha à une fille.' },
            { id: 'z_nhebnrouh', tn: 'Nheb nrouh l…', ar: 'نحب نروح ل…', fr: 'Je veux aller à…', ex: 'Nheb nrouh l Bab El Oued.' },
            { id: 'z_bechwiya', tn: 'Bechwiya', ar: 'بشوية', fr: 'Doucement', ex: 'Hdar bechwiya = parle doucement. Ton meilleur ami à Alger.' },
            { id: 'z_mafhemtch', tn: 'Ma fhemtch', ar: 'ما فهمتش', fr: 'Je n’ai pas compris', ex: 'Ton deuxième meilleur ami.' },
            { id: 'z_bayna', tn: 'Bayna', ar: 'باينة', fr: 'Ça se voit', ex: 'Men Fransa? Bayna! = De France ? Ça se voit !' },
            { id: 'z_smaa', tn: 'Smaa', ar: 'اسمع', fr: 'Écoute', ex: 'Ce que dit Ammi Rabah avant chaque chanson.' },
            { id: 'z_wselna', tn: 'Wselna', ar: 'وصلنا', fr: 'On est arrivés', ex: 'Le plus beau mot d’un trajet en taxi.' },
            { id: 'z_bechhal', tn: 'Bechhal?', ar: 'بشحال؟', fr: 'C’est combien ?', ex: 'Pour un prix. Chhal = combien (de choses).' },
            { id: 'z_ghali', tn: 'Ghali', ar: 'غالي', fr: 'Cher', ex: 'Machi ghali = pas cher.' },
            { id: 'z_bezzaf', tn: 'Bezzaf', ar: 'بزاف', fr: 'Beaucoup, très', ex: 'Ghali bezzaf = très cher.' }
          ],
          exercises: [
            { type: 'meaning', word: 'z_bechhal' },
            { type: 'reverse', word: 'z_mafhemtch' },
            R('rabah', 'Win {g:rayah|rayha}?', 'وين {g:رايح|رايحة}؟', 'Tu vas où ?', [
              ok('Nheb nrouh l Bab El Oued.', 'Je veux aller à Bab El Oued.'),
              ko('Saha!', 'Merci !', 'Tu le remercies alors qu’il n’a pas encore démarré. Il est touché, mais il attend l’adresse.'),
              ko('Smiti Rabah.', 'Je m’appelle Rabah.', 'C’est lui, Rabah. Toi, tu devais dire où tu vas.')]),
            { type: 'listen', word: 'z_bezzaf' },
            R('rabah', 'Alf dinar.', 'ألف دينار.', 'Mille dinars.', [
              ok('Ghali bezzaf!', 'C’est très cher !'),
              ko('Twahachtek!', 'Tu m’as manqué !', 'Tu connais Ammi Rabah depuis vingt minutes. Il est ému, mais le prix ne bouge pas.'),
              ko('Labas, hamdoullah.', 'Ça va, Dieu merci.', 'Il t’annonce un prix, pas une maladie.')]),
            { type: 'order', tn: 'Hdar bechwiya ma fhemtch', fr: 'Parle doucement, je n’ai pas compris', tokens: ['Hdar', 'bechwiya', 'ma', 'fhemtch'] },
            { type: 'speak', tn: 'Bechhal?', ar: 'بشحال؟', fr: 'C’est combien ?' }
          ],
          mission: { who: 'rabah', goal: 'Dis à Ammi Rabah où tu vas, demande-lui de parler doucement, puis demande le prix et dis que c’est trop cher.', win: 'L’élève a donné sa destination, demandé de parler doucement, demandé le prix et protesté, en algérien.' }
        },
        // ---------------------------------------------------------------- Épisode 3
        {
          id: 'd1e3', title: 'Chez le hanout de Saïd',
          pitch: 'Saïd, l’épicier du quartier. Tu viens pour du pain, tu repars avec trois choses en plus.',
          cast: ['said'],
          scene: [
            { who: 'said', tn: 'Sbah el khir! Wach {g:theb|thebbi}?', ar: 'صباح الخير! واش {g:تحب|تحبي}؟', fr: 'Bonjour ! Tu veux quoi ?' },
            { who: 'me', tn: 'Aatini khobza w lben, llah ykhallik.', ar: 'اعطيني خبزة ولبن، الله يخليك.', fr: 'Donne-moi une baguette et du lben, s’il te plaît.' },
            { who: 'said', tn: 'Chhal men khobza?', ar: 'شحال من خبزة؟', fr: 'Combien de baguettes ?' },
            { who: 'me', tn: 'Zouj khobzat.', ar: 'زوج خبزات.', fr: 'Deux baguettes.' },
            { who: 'said', tn: 'Ghir zouj? Eddi tlata! W aachra danone? Kayen kolech!', ar: 'غير زوج؟ ادّي تلاتة! وعشرة دانون؟ كاين كلش!', fr: 'Seulement deux ? Prends-en trois ! Et dix yaourts ? Il y a de tout !', note: 'À Alger, tous les yaourts s’appellent « danone ». Même ceux d’une autre marque.' },
            { who: 'me', tn: 'La, saha. Ghir zouj khobzat w lben wahed.', ar: 'لا، صحة. غير زوج خبزات ولبن واحد.', fr: 'Non merci. Juste deux baguettes et un lben.' },
            { who: 'said', tn: 'Mlih. Mya dinar. W {g:hak|haki} khamsa bonbonat, batel.', ar: 'مليح. مية دينار. و {g:هاك|هاكي} خمسة بونبونات، باطل.', fr: 'D’accord. Cent dinars. Et voilà cinq bonbons, gratuits.', note: 'Ce n’est pas de la générosité : c’est pour que tu reviennes demain.' },
            { who: 'me', tn: 'Saha, Saïd. Besslama!', ar: 'صحة، سعيد. بسلامة!', fr: 'Merci, Saïd. Au revoir !' }
          ],
          words: [
            { id: 'z_sbahelkhir', tn: 'Sbah el khir', ar: 'صباح الخير', fr: 'Bonjour (le matin)', ex: 'Msa el khir = bonsoir.' },
            { id: 'z_aatini', tn: 'Aatini', ar: 'اعطيني', fr: 'Donne-moi', ex: 'Aatini khobza = donne-moi une baguette.' },
            { id: 'z_khobza', tn: 'Khobza', ar: 'خبزة', fr: 'Une baguette (de pain)', ex: 'Khobz = le pain. Zouj khobzat = deux baguettes.' },
            { id: 'z_lben', tn: 'Lben', ar: 'لبن', fr: 'Lben (lait fermenté)', ex: 'Avec de la galette, c’est le paradis.' },
            { id: 'z_llahykhallik', tn: 'Llah ykhallik', ar: 'الله يخليك', fr: 'S’il te plaît', ex: 'Mot à mot : « que Dieu te garde ».' },
            { id: 'z_chhal', tn: 'Chhal?', ar: 'شحال؟', fr: 'Combien ?', ex: 'Chhal men khobza? = combien de baguettes ?' },
            { id: 'z_wahed', tn: 'Wahed', ar: 'واحد', fr: 'Un', ex: 'Wahed, zouj, tlata, rebaa, khamsa…' },
            { id: 'z_zouj', tn: 'Zouj', ar: 'زوج', fr: 'Deux', ex: 'Zouj khobzat = deux baguettes.' },
            { id: 'z_tlata', tn: 'Tlata', ar: 'تلاتة', fr: 'Trois', ex: 'Le nombre préféré de Saïd : toujours un de plus.' },
            { id: 'z_khamsa', tn: 'Khamsa', ar: 'خمسة', fr: 'Cinq', ex: 'Setta, sebaa, tmanya, tesaa = six, sept, huit, neuf.' },
            { id: 'z_aachra', tn: 'Aachra', ar: 'عشرة', fr: 'Dix', ex: 'Aachra danone? Non merci, Saïd.' },
            { id: 'z_kayen', tn: 'Kayen', ar: 'كاين', fr: 'Il y a', ex: 'Makanch = il n’y a pas.' }
          ],
          exercises: [
            { type: 'meaning', word: 'z_aatini' },
            { type: 'reverse', word: 'z_chhal' },
            R('said', 'Wach {g:theb|thebbi}?', 'واش {g:تحب|تحبي}؟', 'Tu veux quoi ?', [
              ok('Aatini khobza, llah ykhallik.', 'Donne-moi une baguette, s’il te plaît.'),
              ko('Win {g:rayah|rayha}?', 'Tu vas où ?', 'Tu demandes à Saïd où il va. Nulle part : il vit dans sa boutique.'),
              ko('Ghali bezzaf!', 'C’est très cher !', 'Il n’a encore rien vendu. Laisse-lui au moins le temps d’ajouter trois choses.')]),
            { type: 'listen', word: 'z_khamsa' },
            R('said', 'Chhal men khobza?', 'شحال من خبزة؟', 'Combien de baguettes ?', [
              ok('Zouj khobzat.', 'Deux baguettes.'),
              ko('Aachra danone.', 'Dix yaourts.', 'Il parlait du pain. Mais Saïd est ravi : il note la commande.'),
              ko('Sbah el khir.', 'Bonjour.', 'Encore bonjour ? Il t’a déjà salué{e}, il veut un chiffre.')]),
            { type: 'order', tn: 'Aatini zouj khobzat w lben', fr: 'Donne-moi deux baguettes et du lben', tokens: ['Aatini', 'zouj', 'khobzat', 'w', 'lben'] },
            { type: 'speak', tn: 'Llah ykhallik', ar: 'الله يخليك', fr: 'S’il te plaît' }
          ],
          mission: { who: 'said', goal: 'Achète deux baguettes et un lben chez Saïd, et refuse poliment ce qu’il essaie de te vendre en plus.', win: 'L’élève a commandé deux baguettes et du lben, refusé un produit en plus et remercié, en algérien.' }
        },
        // ---------------------------------------------------------------- Épisode 4
        {
          id: 'd1e4', title: 'Au café d’Ammi Mouloud',
          pitch: 'Ammi Mouloud tient le café de Bab El Oued depuis 40 ans. Il sert le café, et son avis avec.',
          cast: ['mouloud'],
          scene: [
            { who: 'mouloud', tn: 'Marhba! Wach {g:tochrob|tochorbi}? Qahwa wella tay?', ar: 'مرحبا! واش {g:تشرب|تشربي}؟ قهوة ولا تاي؟', fr: 'Bienvenue ! Tu bois quoi ? Café ou thé ?' },
            { who: 'me', tn: 'Qahwa, llah ykhallik.', ar: 'قهوة، الله يخليك.', fr: 'Un café, s’il te plaît.' },
            { who: 'mouloud', tn: 'Kahla wella noss-noss?', ar: 'كحلة ولا نص نص؟', fr: 'Noir ou noss-noss ?', note: 'Le noss-noss : moitié café, moitié lait. Littéralement « moitié-moitié ». Ici, c’est une institution.' },
            { who: 'me', tn: 'Noss-noss, w kas ma.', ar: 'نص نص، وكاس ما.', fr: 'Un noss-noss, et un verre d’eau.' },
            { who: 'mouloud', tn: 'Bel sokkar?', ar: 'بالسكر؟', fr: 'Avec du sucre ?' },
            { who: 'me', tn: 'La, bla sokkar, saha.', ar: 'لا، بلا سكر، صحة.', fr: 'Non, sans sucre, merci.' },
            { who: 'mouloud', tn: 'Bla sokkar? Ya {petit}, qahwa bla sokkar kima Bab El Oued bla Mouloudia!', ar: 'بلا سكر؟ يا {petitAr}، قهوة بلا سكر كيما باب الوادي بلا مولودية!', fr: 'Sans sucre ? Oh {petitFr}, un café sans sucre, c’est comme Bab El Oued sans le Mouloudia !', note: 'Il a un avis sur tout. Même sur ton sucre.' },
            { who: 'me', tn: 'Chhal nkhalsek?', ar: 'شحال نخلصك؟', fr: 'Je te dois combien ?' },
            { who: 'mouloud', tn: 'La la, el qahwa alia!', ar: 'لا لا، القهوة عليا!', fr: 'Non non, le café, c’est pour moi !', note: 'Règle algérienne : tu insistes pour payer, il refuse, et vous recommencez trois fois.' }
          ],
          words: [
            { id: 'z_marhba', tn: 'Marhba', ar: 'مرحبا', fr: 'Bienvenue', ex: 'Ce que tout le monde te dira en entrant.' },
            { id: 'z_tochrob', tn: 'Wach {g:tochrob|tochorbi}?', ar: 'واش {g:تشرب|تشربي}؟', fr: 'Tu bois quoi ?', ex: 'Nochrob = je bois.' },
            { id: 'z_qahwa', tn: 'Qahwa', ar: 'قهوة', fr: 'Café', ex: 'À Alger, on dit bien « q » : qahwa.' },
            { id: 'z_tay', tn: 'Tay', ar: 'تاي', fr: 'Thé', ex: 'Tay bel naanaa = thé à la menthe.' },
            { id: 'z_wella', tn: 'Wella', ar: 'ولا', fr: 'Ou (bien)', ex: 'Qahwa wella tay?' },
            { id: 'z_nossnoss', tn: 'Noss-noss', ar: 'نص نص', fr: 'Café moitié lait', ex: 'Noss = moitié.' },
            { id: 'z_kasma', tn: 'Kas ma', ar: 'كاس ما', fr: 'Un verre d’eau', ex: 'Ma = eau.' },
            { id: 'z_sokkar', tn: 'Sokkar', ar: 'سكر', fr: 'Sucre', ex: 'Bel sokkar = avec du sucre.' },
            { id: 'z_bla', tn: 'Bla', ar: 'بلا', fr: 'Sans', ex: 'Bla sokkar = sans sucre.' },
            { id: 'z_kima', tn: 'Kima', ar: 'كيما', fr: 'Comme', ex: 'Kima Khalti Zhor = comme Khalti Zhor.' },
            { id: 'z_nkhalsek', tn: 'Chhal nkhalsek?', ar: 'شحال نخلصك؟', fr: 'Je te dois combien ?', ex: 'Nkhalles = je paie.' },
            { id: 'z_alia', tn: 'Alia', ar: 'عليا', fr: 'C’est pour moi (je paie)', ex: 'El qahwa alia!' }
          ],
          exercises: [
            R('mouloud', 'Wach {g:tochrob|tochorbi}?', 'واش {g:تشرب|تشربي}؟', 'Tu bois quoi ?', [
              ok('Qahwa, llah ykhallik.', 'Un café, s’il te plaît.'),
              ko('Zouj khobzat.', 'Deux baguettes.', 'Tu commandes du pain au café. Ammi Mouloud t’envoie chez Saïd… qui te vendra un café.'),
              ko('Win {g:rayah|rayha}?', 'Tu vas où ?', 'C’est toi qui viens d’entrer. Lui, il n’a pas bougé d’ici depuis 1984.')]),
            { type: 'meaning', word: 'z_nossnoss' },
            R('mouloud', 'Bel sokkar?', 'بالسكر؟', 'Avec du sucre ?', [
              ok('La, bla sokkar, saha.', 'Non, sans sucre, merci.'),
              ko('Ghali bezzaf!', 'C’est très cher !', 'Le sucre est gratuit. Et maintenant, Ammi Mouloud est vexé.'),
              ko('Smiti Mouloud.', 'Je m’appelle Mouloud.', 'C’est LUI, Mouloud. Toi, tu avais juste à parler du sucre.')]),
            { type: 'listen', word: 'z_qahwa' },
            { type: 'reverse', word: 'z_alia' },
            { type: 'order', tn: 'Chhal nkhalsek', fr: 'Je te dois combien ?', tokens: ['Chhal', 'nkhalsek'] },
            { type: 'speak', tn: 'Qahwa bla sokkar, llah ykhallik', ar: 'قهوة بلا سكر، الله يخليك', fr: 'Un café sans sucre, s’il te plaît' }
          ],
          mission: { who: 'mouloud', goal: 'Commande un noss-noss sans sucre et un verre d’eau, puis demande combien tu dois.', win: 'L’élève a commandé un café sans sucre et de l’eau, puis demandé combien il doit, en algérien.' }
        },
        // ---------------------------------------------------------------- Épisode 5
        {
          id: 'd1e5', title: 'La voisine, Tata Nassima',
          pitch: 'Tata Nassima habite au-dessus de Khalti Zhor. En trois minutes, elle saura tout de ta vie. En quatre, tout l’immeuble aussi.',
          cast: ['nassima'],
          scene: [
            { who: 'nassima', tn: 'Salam! {g:Nta|Nti} {g:jdid|jdida} hna?', ar: 'سلام! {g:نتا|نتي} {g:جديد|جديدة} هنا؟', fr: 'Bonjour ! Tu es nouveau{e} ici ?' },
            { who: 'me', tn: 'Ih, ana {g:wlid|bent} okht Khalti Zhor.', ar: 'إيه، أنا {g:وليد|بنت} أخت خالتي زهور.', fr: 'Oui, je suis {g:le fils|la fille} de la sœur de Khalti Zhor.' },
            { who: 'nassima', tn: 'Ahla wa sahla! Ana Nassima, jaretha.', ar: 'أهلا وسهلا! أنا نسيمة، جارتها.', fr: 'Bienvenue ! Moi, c’est Nassima, sa voisine.' },
            { who: 'me', tn: 'Mtcherfin, ya Tata Nassima.', ar: 'متشرفين، يا طاطا نسيمة.', fr: 'Enchanté{e}, Tata Nassima.' },
            { who: 'nassima', tn: 'Mnin {g:nta|nti}? Win {g:tesken|teskni} fi Fransa?', ar: 'منين {g:نتا|نتي}؟ وين {g:تسكن|تسكني} في فرانسا؟', fr: 'Tu viens d’où ? Tu habites où, en France ?' },
            { who: 'me', tn: 'Nesken fi Marseille.', ar: 'نسكن في مرسيليا.', fr: 'J’habite à Marseille.' },
            { who: 'nassima', tn: 'Marseille! Noss Bab El Oued rah temma!', ar: 'مرسيليا! نص باب الوادي راه تمّا!', fr: 'Marseille ! La moitié de Bab El Oued est là-bas !' },
            { who: 'nassima', tn: 'W Marseille chbaba? Khir men Dzayer?', ar: 'و مرسيليا شبابة؟ خير من دزاير؟', fr: 'Et Marseille, c’est beau ? Mieux qu’Alger ?' },
            { who: 'me', tn: 'Chbaba, bessah Dzayer khir!', ar: 'شبابة، بصح دزاير خير!', fr: 'C’est beau, mais Alger, c’est mieux !', note: 'Réponse parfaite. Nassima va la répéter à tout l’immeuble avant ce soir.' }
          ],
          words: [
            { id: 'z_jdid', tn: '{g:Jdid|Jdida}', ar: '{g:جديد|جديدة}', fr: 'Nouveau / nouvelle', ex: 'Jdid pour un garçon, jdida pour une fille.' },
            { id: 'z_hna', tn: 'Hna', ar: 'هنا', fr: 'Ici', ex: 'Attention : hna (حنا) veut aussi dire « nous ».' },
            { id: 'z_okht', tn: 'Okht', ar: 'أخت', fr: 'Sœur (de quelqu’un)', ex: 'Khti = ma sœur.' },
            { id: 'z_ahlawasahla', tn: 'Ahla wa sahla', ar: 'أهلا وسهلا', fr: 'Bienvenue', ex: 'La réponse : ahlan bik.' },
            { id: 'z_mtcherfin', tn: 'Mtcherfin', ar: 'متشرفين', fr: 'Enchanté(e)', ex: 'Après les présentations.' },
            { id: 'z_jara', tn: 'Jar / jara', ar: 'جار / جارة', fr: 'Voisin / voisine', ex: 'Jaretha = sa voisine.' },
            { id: 'z_mnin', tn: 'Mnin?', ar: 'منين؟', fr: 'D’où ?', ex: 'Mnin nta? = tu viens d’où ? (à un garçon ; nti à une fille).' },
            { id: 'z_nesken', tn: 'Nesken', ar: 'نسكن', fr: 'J’habite', ex: 'Tesken = tu habites (garçon), teskni (fille).' },
            { id: 'z_temma', tn: 'Temma', ar: 'تمّا', fr: 'Là-bas', ex: 'Hna = ici, temma = là-bas.' },
            { id: 'z_chbab', tn: 'Chbab / chbaba', ar: 'شباب / شبابة', fr: 'Beau / belle', ex: 'Dzayer chbaba = Alger est belle.' },
            { id: 'z_bessah', tn: 'Bessah', ar: 'بصح', fr: 'Mais', ex: 'Chbaba, bessah… = c’est beau, mais…' },
            { id: 'z_dzayer', tn: 'Dzayer', ar: 'دزاير', fr: 'Alger (et l’Algérie)', ex: 'Dzayer khir! = Alger, c’est mieux !' }
          ],
          exercises: [
            R('nassima', '{g:Nta|Nti} {g:jdid|jdida} hna?', '{g:نتا|نتي} {g:جديد|جديدة} هنا؟', 'Tu es nouveau{e} ici ?', [
              ok('Ih, ana {g:wlid|bent} okht Khalti Zhor.', 'Oui, je suis {g:le fils|la fille} de la sœur de Khalti Zhor.'),
              ko('Noss-noss, llah ykhallik.', 'Un noss-noss, s’il te plaît.', 'Nassima n’est pas serveuse. Mais elle va raconter partout que tu bois du noss-noss.'),
              ko('Chhal nkhalsek?', 'Je te dois combien ?', 'Tu proposes de payer la voisine pour un bonjour. Elle hésite une seconde.')]),
            { type: 'meaning', word: 'z_mtcherfin' },
            R('nassima', 'Win {g:tesken|teskni} fi Fransa?', 'وين {g:تسكن|تسكني} في فرانسا؟', 'Tu habites où, en France ?', [
              ok('Nesken fi Marseille.', 'J’habite à Marseille.'),
              ko('Bla sokkar.', 'Sans sucre.', 'Tu habites « sans sucre » ? Nassima note quand même l’adresse.'),
              ko('Zouj khobzat.', 'Deux baguettes.', 'Ton adresse, c’est deux baguettes ? Elle cherche déjà sur la carte.')]),
            { type: 'listen', word: 'z_temma' },
            { type: 'reverse', word: 'z_bessah' },
            { type: 'order', tn: 'Chbaba bessah Dzayer khir', fr: 'C’est beau, mais Alger, c’est mieux', tokens: ['Chbaba', 'bessah', 'Dzayer', 'khir'] },
            { type: 'speak', tn: 'Mtcherfin, ya Tata Nassima', ar: 'متشرفين، يا طاطا نسيمة', fr: 'Enchanté{e}, Tata Nassima' }
          ],
          mission: { who: 'nassima', goal: 'Présente-toi à Tata Nassima : ton prénom, ton lien avec Khalti Zhor, et où tu habites en France.', win: 'L’élève a donné son prénom, son lien de famille et sa ville en France, en algérien.' }
        }
      ]
    },
    // =====================================================================================
    // NIVEAU 2 — Cousin de France
    // =====================================================================================
    {
      id: 'd2', num: 2, name: 'Cousin de France',
      goal: 'Répondre à la famille sans paniquer',
      boss: {
        id: 'd2boss', title: 'L’épreuve de la famille',
        pitch: '10 questions sur tout le niveau. Il en faut 7 pour survivre au prochain repas chez Khalti Zhor.',
        count: 10, pass: 7
      },
      episodes: [
        // ---------------------------------------------------------------- Épisode 1
        {
          id: 'd2e1', title: 'Le repas chez Khalti Zhor',
          pitch: 'Khalti Zhor a cuisiné pour vingt. Vous êtes quatre. Elle compte sur toi.',
          cast: ['zhor'],
          scene: [
            { who: 'zhor', tn: '{g:Qaad|Qaadi}, ya {petit}! Hadi chorba frik.', ar: '{g:اقعد|اقعدي}، يا {petitAr}! هادي شوربة فريك.', fr: 'Assieds-toi, {petitFr} ! Voilà de la chorba frik.' },
            { who: 'me', tn: 'Bnina bezzaf, ya Khalti!', ar: 'بنينة بزاف، يا خالتي!', fr: 'Elle est très bonne, tata !' },
            { who: 'zhor', tn: '{g:Kol|Kouli}, {g:kol|kouli}! W {g:hak|haki} el bourek.', ar: '{g:كول|كولي}، {g:كول|كولي}! و {g:هاك|هاكي} البوراك.', fr: 'Mange, mange ! Et voilà les bourek.', note: 'Le bourek : une feuille croustillante roulée autour de viande hachée. Résister est inutile.' },
            { who: 'me', tn: 'Saha, ya Khalti. Chbaat!', ar: 'صحة، يا خالتي. شبعت!', fr: 'Merci, tata. Je n’ai plus faim !' },
            { who: 'zhor', tn: '{g:Chbaat|Chbaati}? Ma {g:klit|kliti} walou!', ar: '{g:شبعت|شبعتي}؟ ما {g:كليت|كليتي} والو!', fr: 'Plus faim ? Tu n’as rien mangé !' },
            { who: 'zhor', tn: 'Amine kla tlata s-houn!', ar: 'أمين كلا تلاتة صحون!', fr: 'Amine en a mangé trois assiettes !', note: 'Comparer avec les cousins : le sport national de Khalti Zhor.' },
            { who: 'me', tn: 'Mlih, ghir chwiya.', ar: 'مليح، غير شوية.', fr: 'D’accord, juste un peu.' },
            { who: 'zhor', tn: 'Bsahtek, ya {petit}!', ar: 'بصحتك، يا {petitAr}!', fr: 'Bon appétit, {petitFr} !', note: 'Le « juste un peu » de Khalti Zhor : une assiette de chorba, quatre bourek et un morceau de pain.' }
          ],
          words: [
            { id: 'z_qaad', tn: '{g:Qaad|Qaadi}', ar: '{g:اقعد|اقعدي}', fr: 'Assieds-toi', ex: 'Qaad à un garçon, qaadi à une fille.' },
            { id: 'z_chorba', tn: 'Chorba frik', ar: 'شوربة فريك', fr: 'Chorba au blé vert', ex: 'La soupe reine d’Alger.' },
            { id: 'z_bnin', tn: 'Bnin / bnina', ar: 'بنين / بنينة', fr: 'Délicieux / délicieuse', ex: 'Bnina bezzaf! = Elle est très bonne !' },
            { id: 'z_kol', tn: '{g:Kol|Kouli}', ar: '{g:كول|كولي}', fr: 'Mange !', ex: 'Le mot que Khalti Zhor dit le plus. Après « ya {petit} ».' },
            { id: 'z_hak', tn: 'Hak', ar: 'هاك', fr: 'Tiens, voilà', ex: 'Hak el bourek = voilà les bourek. Haki à une fille.' },
            { id: 'z_bourek', tn: 'Bourek', ar: 'بوراك', fr: 'Bourek (feuilleté farci)', ex: 'Un seul ? Personne n’a jamais vu ça.' },
            { id: 'z_chbaat', tn: 'Chbaat', ar: 'شبعت', fr: 'J’ai assez mangé', ex: 'Ta phrase de survie. Elle ne marche pas, mais essaie.' },
            { id: 'z_klit', tn: 'Klit', ar: 'كليت', fr: 'J’ai mangé', ex: 'Kla = il a mangé. Ma klit walou = je n’ai rien mangé.' },
            { id: 'z_walou', tn: 'Walou', ar: 'والو', fr: 'Rien', ex: 'Ma qolt walou = je n’ai rien dit.' },
            { id: 'z_ghirchwiya', tn: 'Ghir chwiya', ar: 'غير شوية', fr: 'Juste un peu', ex: 'Ghir = seulement.' },
            { id: 'z_bsahtek', tn: 'Bsahtek', ar: 'بصحتك', fr: 'Bon appétit, à ta santé', ex: 'Aussi pour un vêtement neuf ou une nouvelle coupe.' }
          ],
          exercises: [
            { type: 'meaning', word: 'z_bnin' },
            R('zhor', '{g:Kol|Kouli}, {g:kol|kouli}!', '{g:كول|كولي}، {g:كول|كولي}!', 'Mange, mange !', [
              ok('Saha, ya Khalti. Chbaat!', 'Merci, tata. Je n’ai plus faim !'),
              ko('Bechhal?', 'C’est combien ?', 'Tu demandes le prix du repas à Khalti. Toute la Casbah le saura demain.'),
              ko('Win {g:rayah|rayha}?', 'Tu vas où ?', 'Tu essaies de fuir la table ? Khalti Zhor a fermé la porte à clé.')]),
            R('zhor', '{g:Chbaat|Chbaati}? Ma {g:klit|kliti} walou!', '{g:شبعت|شبعتي}؟ ما {g:كليت|كليتي} والو!', 'Plus faim ? Tu n’as rien mangé !', [
              ok('Mlih, ghir chwiya.', 'D’accord, juste un peu.'),
              ko('Bla sokkar, saha.', 'Sans sucre, merci.', 'C’est une chorba, pas un café. Et elle t’en ressert quand même.'),
              ko('Ghali bezzaf!', 'C’est très cher !', 'C’est la famille, c’est gratuit. Le seul prix : finir ton assiette.')]),
            { type: 'listen', word: 'z_bourek' },
            { type: 'reverse', word: 'z_chbaat' },
            { type: 'order', tn: 'Bnina bezzaf ya Khalti', fr: 'Elle est très bonne, tata', tokens: ['Bnina', 'bezzaf', 'ya', 'Khalti'] },
            { type: 'speak', tn: 'Saha, ya Khalti. Chbaat!', ar: 'صحة، يا خالتي. شبعت!', fr: 'Merci, tata. Je n’ai plus faim !' }
          ],
          mission: { who: 'zhor', goal: 'Khalti Zhor te ressert pour la troisième fois. Fais-lui un compliment sur sa chorba, puis refuse poliment de reprendre.', win: 'L’élève a complimenté le plat et refusé poliment d’en reprendre, en algérien.' }
        },
        // ---------------------------------------------------------------- Épisode 2
        {
          id: 'd2e2', title: 'L’interrogatoire d’Amine',
          pitch: 'Amine, 19 ans, écharpe du Mouloudia autour du cou, a préparé ses questions. Il ne te lâchera pas.',
          cast: ['amine'],
          scene: [
            { who: 'amine', tn: 'Ahla {g:khouya|khti}! Waqtach {g:jit|jiti}?', ar: 'أهلا {g:خويا|ختي}! وقتاش {g:جيت|جيتي}؟', fr: 'Salut {g:mon frère|ma sœur} ! Tu es arrivé{e} quand ?' },
            { who: 'me', tn: 'Jit lbareh.', ar: 'جيت البارح.', fr: 'Je suis arrivé{e} hier.' },
            { who: 'amine', tn: 'Chhal {g:rak|raki} {g:qaad|qaada}?', ar: 'شحال {g:راك|راكي} {g:قاعد|قاعدة}؟', fr: 'Tu restes combien de temps ?' },
            { who: 'me', tn: 'Ghir simana.', ar: 'غير سيمانة.', fr: 'Juste une semaine.' },
            { who: 'amine', tn: 'Simana?! W {g:tekhdem|tekhedmi} wella {g:taqra|taqray}?', ar: 'سيمانة؟! و {g:تخدم|تخدمي} ولا {g:تقرا|تقراي}؟', fr: 'Une semaine ?! Et tu travailles ou tu étudies ?' },
            { who: 'me', tn: 'Nekhdem fi Paris.', ar: 'نخدم في باريس.', fr: 'Je travaille à Paris.' },
            { who: 'amine', tn: 'W {g:mzawej|mzawja}?', ar: 'و {g:مزوج|مزوجة}؟', fr: 'Et tu es marié{e} ?', note: 'Question numéro 4, après 45 secondes. Le record de la famille, c’est 30.' },
            { who: 'me', tn: 'La, mazal!', ar: 'لا، مازال!', fr: 'Non, pas encore !' },
            { who: 'amine', tn: 'Mazal? Rah nqoul l Khalti Zhor!', ar: 'مازال؟ راه نقول لخالتي زهور!', fr: 'Pas encore ? Je vais le dire à Khalti Zhor !', note: 'Dans dix minutes, elle t’aura trouvé {g:trois fiancées possibles|trois fiancés possibles}.' }
          ],
          words: [
            { id: 'z_waqtach', tn: 'Waqtach?', ar: 'وقتاش؟', fr: 'Quand ?', ex: 'Waqtach jit? = tu es arrivé quand ?' },
            { id: 'z_jit', tn: 'Jit', ar: 'جيت', fr: 'Je suis venu(e), arrivé(e)', ex: 'Jit lbareh = je suis arrivé hier.' },
            { id: 'z_lbareh', tn: 'Lbareh', ar: 'البارح', fr: 'Hier', ex: 'Lyoum = aujourd’hui, ghodwa = demain.' },
            { id: 'z_chhalqaad', tn: 'Chhal {g:rak|raki} {g:qaad|qaada}?', ar: 'شحال {g:راك|راكي} {g:قاعد|قاعدة}؟', fr: 'Tu restes combien de temps ?', ex: 'Qaad = qui reste (aussi : assis).' },
            { id: 'z_simana', tn: 'Simana', ar: 'سيمانة', fr: 'Semaine', ex: 'Ghir simana = juste une semaine. Amine trouve ça trop court.' },
            { id: 'z_tekhdem', tn: '{g:Tekhdem|Tekhedmi}', ar: '{g:تخدم|تخدمي}', fr: 'Tu travailles', ex: 'Nekhdem = je travaille.' },
            { id: 'z_taqra', tn: '{g:Taqra|Taqray}', ar: '{g:تقرا|تقراي}', fr: 'Tu étudies', ex: 'Naqra = j’étudie (et aussi : je lis).' },
            { id: 'z_mzawej', tn: '{g:Mzawej|Mzawja}', ar: '{g:مزوج|مزوجة}', fr: 'Marié / mariée', ex: 'La question numéro 1 de toute la famille.' },
            { id: 'z_mazal', tn: 'Mazal', ar: 'مازال', fr: 'Pas encore, encore', ex: 'La, mazal! = Non, pas encore !' },
            { id: 'z_nqoul', tn: 'Nqoul', ar: 'نقول', fr: 'Je dis', ex: 'Rah nqoul l Khalti = je vais le dire à Khalti.' }
          ],
          exercises: [
            R('amine', 'Waqtach {g:jit|jiti}?', 'وقتاش {g:جيت|جيتي}؟', 'Tu es arrivé{e} quand ?', [
              ok('Jit lbareh.', 'Je suis arrivé{e} hier.'),
              ko('Ghir chwiya.', 'Juste un peu.', 'Tu es arrivé{e} « un petit peu » ? Amine note : suspect.'),
              ko('Bsahtek!', 'Bon appétit !', 'Il ne mange pas, il interroge.')]),
            { type: 'meaning', word: 'z_waqtach' },
            R('amine', 'Chhal {g:rak|raki} {g:qaad|qaada}?', 'شحال {g:راك|راكي} {g:قاعد|قاعدة}؟', 'Tu restes combien de temps ?', [
              ok('Ghir simana.', 'Juste une semaine.'),
              ko('Nesken fi Marseille.', 'J’habite à Marseille.', 'Il ne demande pas encore ton adresse. Ça, c’est la question 7.'),
              ko('Mya dinar.', 'Cent dinars.', 'Tu restes cent dinars ? Amine ne comprend pas, mais il rit quand même.')]),
            { type: 'listen', word: 'z_mazal' },
            { type: 'reverse', word: 'z_lbareh' },
            { type: 'order', tn: 'Nekhdem fi Paris', fr: 'Je travaille à Paris', tokens: ['Nekhdem', 'fi', 'Paris'] },
            { type: 'speak', tn: 'La, mazal!', ar: 'لا، مازال!', fr: 'Non, pas encore !' }
          ],
          mission: { who: 'amine', goal: 'Réponds à l’interrogatoire d’Amine : ton jour d’arrivée, combien de temps tu restes, et ce que tu fais dans la vie.', win: 'L’élève a dit quand il est arrivé, combien de temps il reste et s’il travaille ou étudie, en algérien.' }
        },
        // ---------------------------------------------------------------- Épisode 3
        {
          id: 'd2e3', title: 'Mima au téléphone',
          pitch: 'Mima, la grand-mère, appelle. Elle entend mal, elle bénit tout le monde, et elle veut savoir si tu manges assez.',
          cast: ['mima'],
          scene: [
            { who: 'mima', tn: 'Allo? Allo! Chkoun?', ar: 'ألو؟ ألو! شكون؟', fr: 'Allô ? Allô ! C’est qui ?' },
            { who: 'me', tn: 'Ana {prenom}, ya Mima!', ar: 'أنا {prenom}، يا ميمة!', fr: 'C’est {prenom}, Mima !' },
            { who: 'mima', tn: 'Chkoun? Ma smaatch! {g:Aawed|Aawdi}!', ar: 'شكون؟ ما سمعتش! {g:عاود|عاودي}!', fr: 'Qui ? Je n’ai pas entendu ! Répète !' },
            { who: 'me', tn: 'Ana {prenom}! {g:Wlid|Bent} bentek!', ar: 'أنا {prenom}! {g:وليد|بنت} بنتك!', fr: 'C’est {prenom} ! {g:Le fils|La fille} de ta fille !' },
            { who: 'mima', tn: 'Aaah, ya {petit}! Llah yerdi alik! Wach {g:rak|raki}?', ar: 'آه، يا {petitAr}! الله يرضى عليك! واش {g:راك|راكي}؟', fr: 'Aaah, {petitFr} ! Que Dieu te bénisse ! Comment tu vas ?' },
            { who: 'me', tn: 'Rani labas, hamdoullah. W nti, ya Mima?', ar: 'راني لاباس، الحمد لله. و نتي، يا ميمة؟', fr: 'Je vais bien, Dieu merci. Et toi, Mima ?' },
            { who: 'mima', tn: 'Hamdoullah. {g:Rak|Raki} {g:takol|takli} mlih?', ar: 'الحمد لله. {g:راك|راكي} {g:تاكل|تاكلي} مليح؟', fr: 'Dieu merci. Tu manges bien ?', note: 'Pour Mima, « bien manger » commence à trois assiettes.' },
            { who: 'me', tn: 'Ih, Khalti Zhor tewkelni bezzaf!', ar: 'إيه، خالتي زهور توكلني بزاف!', fr: 'Oui, Khalti Zhor me fait manger énormément !' },
            { who: 'mima', tn: 'Llah yahfdek, ya {petit}! Llah yahfdek!', ar: 'الله يحفظك، يا {petitAr}! الله يحفظك!', fr: 'Que Dieu te protège, {petitFr} ! Que Dieu te protège !', note: 'Elle a raccroché avant ta réponse. Puis elle a rappelé pour redire la même chose.' }
          ],
          words: [
            { id: 'z_chkoun', tn: 'Chkoun?', ar: 'شكون؟', fr: 'Qui ?', ex: 'Chkoun hada? = c’est qui, lui ?' },
            { id: 'z_masmaatch', tn: 'Ma smaatch', ar: 'ما سمعتش', fr: 'Je n’ai pas entendu', ex: 'La phrase préférée de Mima.' },
            { id: 'z_aawed', tn: 'Aawed', ar: 'عاود', fr: 'Répète', ex: 'Aawed, llah ykhallik = répète, s’il te plaît. Aawdi à une fille.' },
            { id: 'z_wlid', tn: 'Wlid / bent', ar: 'وليد / بنت', fr: 'Fils / fille', ex: 'Bentek = ta fille. Ya wlidi, ya benti = mon petit, ma petite.' },
            { id: 'z_llahyerdi', tn: 'Llah yerdi alik', ar: 'الله يرضى عليك', fr: 'Que Dieu te bénisse', ex: 'Mima le dit à toi, au facteur et au pigeon sur le balcon.' },
            { id: 'z_rani', tn: 'Rani labas', ar: 'راني لاباس', fr: 'Je vais bien', ex: 'Rani = je suis (en ce moment).' },
            { id: 'z_wnti', tn: 'W nti?', ar: 'و نتي؟', fr: 'Et toi ? (à une femme)', ex: 'W nta? à un homme.' },
            { id: 'z_takol', tn: '{g:Takol|Takli}', ar: '{g:تاكل|تاكلي}', fr: 'Tu manges', ex: 'Nakol = je mange.' },
            { id: 'z_llahyahfdek', tn: 'Llah yahfdek', ar: 'الله يحفظك', fr: 'Que Dieu te protège', ex: 'Pour dire merci avec beaucoup d’amour.' }
          ],
          exercises: [
            R('mima', 'Chkoun?', 'شكون؟', 'C’est qui ?', [
              ok('Ana {prenom}, ya Mima!', 'C’est {prenom}, Mima !'),
              ko('Ghir simana.', 'Juste une semaine.', 'Mima a compris « une semaine ». Elle pleure déjà : tu repars ?'),
              ko('Bechhal?', 'C’est combien ?', 'Mima croit que tu demandes le prix de l’appel. Ne t’inquiète pas, c’est elle qui paie.')]),
            { type: 'meaning', word: 'z_llahyerdi' },
            R('mima', 'Wach {g:rak|raki}?', 'واش {g:راك|راكي}؟', 'Comment tu vas ?', [
              ok('Rani labas, hamdoullah. W nti?', 'Je vais bien, Dieu merci. Et toi ?'),
              ko('La, mazal!', 'Non, pas encore !', 'Elle demandait si tu vas bien, pas si tu es marié{e}. Mais elle a noté l’info.'),
              ko('Haki el bourek.', 'Voilà les bourek.', 'Tu lui tends des bourek par téléphone. Elle a tendu la main.')]),
            { type: 'listen', word: 'z_chkoun' },
            { type: 'reverse', word: 'z_aawed' },
            { type: 'order', tn: 'Rani labas hamdoullah', fr: 'Je vais bien, Dieu merci', tokens: ['Rani', 'labas', 'hamdoullah'] },
            { type: 'speak', tn: 'Llah yahfdek, ya Mima', ar: 'الله يحفظك، يا ميمة', fr: 'Que Dieu te protège, Mima' }
          ],
          mission: { who: 'mima', goal: 'Mima t’appelle et entend mal : dis-lui qui tu es, donne-lui de tes nouvelles et rassure-la, tu manges bien.', win: 'L’élève a dit qui il est, donné de ses nouvelles et dit qu’il mange bien, en algérien.' }
        },
        // ---------------------------------------------------------------- Épisode 4
        {
          id: 'd2e4', title: 'Perdu dans la Casbah',
          pitch: 'Les ruelles de la Casbah se ressemblent toutes. Amine connaît le chemin. Il te le dira… peut-être.',
          cast: ['amine'],
          scene: [
            { who: 'me', tn: 'Amine, win rana?', ar: 'أمين، وين رانا؟', fr: 'Amine, on est où ?' },
            { who: 'amine', tn: 'Fel Qasba! {g:Rak|Raki} {g:talef|talfa}?', ar: 'فالقصبة! {g:راك|راكي} {g:تالف|تالفة}؟', fr: 'Dans la Casbah ! Tu es perdu{e} ?' },
            { who: 'me', tn: 'Ih, chwiya. Win el bhar?', ar: 'إيه، شوية. وين البحر؟', fr: 'Oui, un peu. Elle est où, la mer ?' },
            { who: 'amine', tn: 'Sahel! {g:Rouh|Rouhi} dughri, men baad ymin.', ar: 'ساهل! {g:روح|روحي} دغري، من بعد يمين.', fr: 'Facile ! Va tout droit, et ensuite à droite.' },
            { who: 'me', tn: 'Ymin? Machi ysar?', ar: 'يمين؟ ماشي يسار؟', fr: 'À droite ? Pas à gauche ?' },
            { who: 'amine', tn: 'Ysar, ysar! Kont nemzah.', ar: 'يسار، يسار! كنت نمزح.', fr: 'À gauche, à gauche ! Je plaisantais.', note: 'Amine trouve ça très drôle. Toi, un peu moins.' },
            { who: 'me', tn: 'Baid?', ar: 'بعيد؟', fr: 'C’est loin ?' },
            { who: 'amine', tn: 'La, qrib! Khamsa dqayeq.', ar: 'لا، قريب! خمسة دقايق.', fr: 'Non, c’est tout près ! Cinq minutes.', note: 'Trente minutes plus tard, devant la mer : « Khamsa dqayeq, kima qolt ! » (Cinq minutes, comme j’ai dit !)' },
            { who: 'me', tn: 'Saha, ya kho!', ar: 'صحة، يا خو!', fr: 'Merci, mon frère !' }
          ],
          words: [
            { id: 'z_winrana', tn: 'Win rana?', ar: 'وين رانا؟', fr: 'On est où ?', ex: 'Rana = nous sommes (en ce moment).' },
            { id: 'z_talef', tn: '{g:Talef|Talfa}', ar: '{g:تالف|تالفة}', fr: 'Perdu / perdue', ex: 'Rani talef = je suis perdu.' },
            { id: 'z_bhar', tn: 'El bhar', ar: 'البحر', fr: 'La mer', ex: 'Win el bhar? = elle est où, la mer ?' },
            { id: 'z_rouh', tn: '{g:Rouh|Rouhi}', ar: '{g:روح|روحي}', fr: 'Va !', ex: 'Nrouh = je vais.' },
            { id: 'z_dughri', tn: 'Dughri', ar: 'دغري', fr: 'Tout droit', ex: 'Rouh dughri = va tout droit.' },
            { id: 'z_ymin', tn: 'Ymin', ar: 'يمين', fr: 'À droite', ex: 'Ymin, ysar, dughri : le GPS de la Casbah.' },
            { id: 'z_ysar', tn: 'Ysar', ar: 'يسار', fr: 'À gauche', ex: 'Avec Amine, toujours vérifier deux fois.' },
            { id: 'z_menbaad', tn: 'Men baad', ar: 'من بعد', fr: 'Ensuite, après', ex: 'Dughri, men baad ymin.' },
            { id: 'z_baid', tn: 'Baid', ar: 'بعيد', fr: 'Loin', ex: 'Machi baid = pas loin.' },
            { id: 'z_qrib', tn: 'Qrib', ar: 'قريب', fr: 'Près, tout près', ex: 'Qrib selon Amine = au moins trente minutes.' },
            { id: 'z_dqayeq', tn: 'Dqayeq', ar: 'دقايق', fr: 'Minutes', ex: 'Khamsa dqayeq = cinq minutes.' }
          ],
          exercises: [
            { type: 'meaning', word: 'z_dughri' },
            R('amine', '{g:Rak|Raki} {g:talef|talfa}?', '{g:راك|راكي} {g:تالف|تالفة}؟', 'Tu es perdu{e} ?', [
              ok('Ih, chwiya. Win el bhar?', 'Oui, un peu. Elle est où, la mer ?'),
              ko('La, mazal!', 'Non, pas encore !', 'Pas encore perdu{e} ? Amine prend ça comme un défi.'),
              ko('Bnina bezzaf!', 'C’est délicieux !', 'Tu trouves la Casbah délicieuse ? Belle, oui. Mais ne goûte pas les murs.')]),
            { type: 'listen', word: 'z_ymin' },
            { type: 'reverse', word: 'z_ysar' },
            R('amine', '{g:Rouh|Rouhi} dughri, men baad ymin.', '{g:روح|روحي} دغري، من بعد يمين.', 'Va tout droit, et ensuite à droite.', [
              ok('Ymin? Machi ysar?', 'À droite ? Pas à gauche ?'),
              ko('Smiti Amine.', 'Je m’appelle Amine.', 'Non, LUI, c’est Amine. Toi, tu es perdu{e}.'),
              ko('Chbaat!', 'Je n’ai plus faim !', 'Il t’indique le chemin, pas le menu.')]),
            { type: 'order', tn: 'La qrib khamsa dqayeq', fr: 'Non, c’est tout près, cinq minutes', tokens: ['La', 'qrib', 'khamsa', 'dqayeq'] },
            { type: 'speak', tn: 'Win el bhar?', ar: 'وين البحر؟', fr: 'Elle est où, la mer ?' }
          ],
          mission: { who: 'amine', goal: 'Demande à Amine où vous êtes et comment aller jusqu’à la mer, puis demande si c’est loin.', win: 'L’élève a demandé où il est, le chemin vers la mer et la distance, en algérien.' }
        },
        // ---------------------------------------------------------------- Épisode 5
        {
          id: 'd2e5', title: 'Le front de mer',
          pitch: 'Le soleil, la mer, une glace : tout est parfait. Sauf qu’Amine veut une photo de toi « pour la famille ».',
          cast: ['amine'],
          scene: [
            { who: 'amine', tn: '{g:Chouf|Choufi} el bhar! Chbab, sah?', ar: '{g:شوف|شوفي} البحر! شباب، صح؟', fr: 'Regarde la mer ! C’est beau, hein ?' },
            { who: 'me', tn: 'Wallah chbab! El jaw mlih lyoum.', ar: 'والله شباب! الجو مليح اليوم.', fr: 'Wallah, c’est beau ! Il fait beau aujourd’hui.' },
            { who: 'amine', tn: 'Nakoulou glas?', ar: 'ناكلو ڨلاص؟', fr: 'On mange une glace ?' },
            { who: 'me', tn: 'Ih! Wahda b limoun.', ar: 'إيه! وحدة بليمون.', fr: 'Oui ! Une au citron.' },
            { who: 'amine', tn: 'Ana nkhalles… ghodwa! Lyoum {g:nta|nti}!', ar: 'أنا نخلص… غدوة! اليوم {g:نتا|نتي}!', fr: 'C’est moi qui paie… demain ! Aujourd’hui, c’est toi !', note: 'Un grand classique d’Amine. Demain, il aura oublié son porte-monnaie.' },
            { who: 'amine', tn: '{g:Arwah|Arwahi}, ndirou tswira!', ar: '{g:أرواح|أرواحي}، نديرو تصويرة!', fr: 'Viens, on fait une photo !' },
            { who: 'me', tn: 'Mlih, bessah ghir wahda!', ar: 'مليح، بصح غير وحدة!', fr: 'D’accord, mais une seule !' },
            { who: 'amine', tn: '{g:Tbessem|Tbessmi}! Hadi l Khalti Zhor.', ar: '{g:تبسم|تبسمي}! هادي لخالتي زهور.', fr: 'Souris ! Celle-là, c’est pour Khalti Zhor.', note: 'Dans une heure, la photo sera dans tous les groupes WhatsApp de la famille. Avec la glace sur ton nez.' }
          ],
          words: [
            { id: 'z_chouf', tn: '{g:Chouf|Choufi}', ar: '{g:شوف|شوفي}', fr: 'Regarde !', ex: 'Nchouf = je regarde, je vois.' },
            { id: 'z_sah', tn: 'Sah?', ar: 'صح؟', fr: 'Hein ? C’est vrai ?', ex: 'Chbab, sah? = c’est beau, hein ?' },
            { id: 'z_jaw', tn: 'El jaw', ar: 'الجو', fr: 'Le temps (qu’il fait), l’ambiance', ex: 'El jaw mlih = il fait beau.' },
            { id: 'z_lyoum', tn: 'Lyoum', ar: 'اليوم', fr: 'Aujourd’hui', ex: 'Lbareh, lyoum, ghodwa = hier, aujourd’hui, demain.' },
            { id: 'z_nakoulou', tn: 'Nakoulou', ar: 'ناكلو', fr: 'On mange', ex: 'Nakol = je mange.' },
            { id: 'z_glas', tn: 'Glas', ar: 'ڨلاص', fr: 'Glace', ex: 'Le ڨ se prononce « g ».' },
            { id: 'z_nkhalles', tn: 'Nkhalles', ar: 'نخلص', fr: 'Je paie', ex: 'Chkoun ykhalles? = qui paie ?' },
            { id: 'z_ghodwa', tn: 'Ghodwa', ar: 'غدوة', fr: 'Demain', ex: 'Le jour où Amine paie. Il n’arrive jamais.' },
            { id: 'z_arwah', tn: '{g:Arwah|Arwahi}', ar: '{g:أرواح|أرواحي}', fr: 'Viens !', ex: 'Arwah à un garçon, arwahi à une fille.' },
            { id: 'z_tswira', tn: 'Tswira', ar: 'تصويرة', fr: 'Photo', ex: 'Ndirou tswira = on fait une photo.' },
            { id: 'z_tbessem', tn: '{g:Tbessem|Tbessmi}', ar: '{g:تبسم|تبسمي}', fr: 'Souris !', ex: 'Même avec de la glace sur le nez.' }
          ],
          exercises: [
            { type: 'meaning', word: 'z_tswira' },
            R('amine', '{g:Chouf|Choufi} el bhar! Chbab, sah?', '{g:شوف|شوفي} البحر! شباب، صح؟', 'Regarde la mer ! C’est beau, hein ?', [
              ok('Wallah chbab! El jaw mlih lyoum.', 'Wallah, c’est beau ! Il fait beau aujourd’hui.'),
              ko('Win el bhar?', 'Elle est où, la mer ?', 'Elle est juste devant toi. Amine prend déjà une photo de ta tête pour la famille.'),
              ko('Ma smaatch!', 'Je n’ai pas entendu !', 'Tu fais ta Mima ? Il répète plus fort : tout le front de mer est au courant.')]),
            { type: 'listen', word: 'z_ghodwa' },
            R('amine', 'Nakoulou glas?', 'ناكلو ڨلاص؟', 'On mange une glace ?', [
              ok('Ih! Wahda b limoun.', 'Oui ! Une au citron.'),
              ko('Saha, ya Khalti. Chbaat!', 'Merci, tata. Je n’ai plus faim !', 'Khalti Zhor n’est pas là. Et pour une glace, il reste toujours de la place.'),
              ko('Ghir simana.', 'Juste une semaine.', 'Une glace pour une semaine ? Même Amine n’y arrive pas.')]),
            { type: 'reverse', word: 'z_lyoum' },
            { type: 'order', tn: 'Ana nkhalles ghodwa', fr: 'C’est moi qui paie demain', tokens: ['Ana', 'nkhalles', 'ghodwa'] },
            { type: 'speak', tn: 'Wallah chbab!', ar: 'والله شباب!', fr: 'Wallah, c’est beau !' }
          ],
          mission: { who: 'amine', goal: 'Promenade sur le front de mer : dis à Amine qu’il fait beau, propose une glace et accepte une seule photo.', win: 'L’élève a parlé du beau temps, commandé ou proposé une glace et négocié la photo, en algérien.' }
        }
      ]
    }
  ];
})();

// Personnages algérois (portraits dessinés, personnages originaux)
Object.assign(window.TWB_CAST, {
  zhor: { name: 'Khalti Zhor', role: 'Ta tata de la Casbah', skin: '#c48a5e', scarf: '#1f7a5a', glasses: true, robe: '#e9b32a' },
  rabah: { name: 'Ammi Rabah', role: 'Chauffeur de taxi, fan de chaâbi', skin: '#b07a52', cap: '#2c3e50', moustache: true },
  said: { name: 'Saïd', role: 'L’épicier du quartier', skin: '#a86b45', cap: '#c0392b', moustache: true },
  mouloud: { name: 'Ammi Mouloud', role: 'Le cafetier de Bab El Oued', skin: '#9c6644', chechia: '#7a1f1f', moustache: true },
  nassima: { name: 'Tata Nassima', role: 'La voisine (très) curieuse', skin: '#c99068', scarf: '#8e44ad', robe: '#f4efe6' },
  amine: { name: 'Amine', role: 'Ton cousin de 19 ans, fan du Mouloudia', skin: '#c08457', curls: '#2b1d16', jersey: '#1e8449' },
  mima: { name: 'Mima', role: 'Ta grand-mère', skin: '#b98260', scarf: '#f4efe6', glasses: true, robe: '#1d4e9e' },
  sabrina: { name: 'Sabrina', role: 'Ta cousine, la future mariée', skin: '#c99068', hair: '#3a2418', robe: '#b03a2e' },
  kaddour: { name: 'Ammi Kaddour', role: 'Marchand au marché de Meissonnier', skin: '#a8724c', cap: '#5b6b2f', moustache: true },
  amel: { name: 'Docteure Amel', role: 'Médecin du quartier', skin: '#c48b63', hair: '#2b1d16', glasses: true, robe: '#e8eef5' }
});

window.TWB_CONTENT.dz = {
  name: 'Darija algérien', short: 'Dziri', label: 'Darija algérien (Alger)', mascot: 'zhor', order: 2, code: 'DZ', flag: '🇩🇿',
  // Voix : voix IA algérienne si elle a été générée (src/audio/dz-ia/), sinon voix arabe du téléphone.
  voice: 'tts', ttsLangs: ['ar-DZ', 'ar-MA', 'ar-SA', 'ar'], srLang: 'ar-DZ', speakField: 'ar',
  ui: {
    adj: 'algérien', hello: 'Salam', helloAr: 'سلام', bravo: 'Sahit !', oops: 'Ya latif…', pet: 'ya {petit}', cousin: 'Amine',
    with: 'avec Khalti Zhor', welcome: 'Salam ! Place à l’algérien avec Khalti Zhor.',
    start: 'Salam {prenom} ! Commence par l’épisode 1, je t’attends à l’aéroport avec un panier de gâteaux.',
    ttsNote: 'Sans enregistrement de la famille, c’est la voix arabe du téléphone : l’accent n’est pas algérien. Les textes algériens sont en cours de relecture par un natif d’Alger.',
    chatIntro: 'Parle algérien à voix haute, ils te répondent. Active « mains libres » pour enchaîner sans toucher l’écran.'
  },
  lines: {
    wrong: [
      'Ya latif… Ta mère va entendre parler de ça.',
      'Même le chat de la Casbah le sait, celui-là.',
      'Je fais comme si je n’avais rien entendu. Bois un peu de thé et réessaie.',
      'Wallah, tu parles comme un touriste sur le front de mer.',
      'Amine l’aurait eu. Et pourtant, Amine…',
      'C’est la France qui t’a fait ça ?',
      'Doucement, bechwiya. On recommence.'
    ],
    right: [
      'Sahit ! On dirait un vrai enfant d’Alger.',
      'Saha ! Je vais le raconter à toute la Casbah.',
      'Ça, c’est {petitFr} !',
      'Hamdoullah, tout n’est pas perdu.',
      'Tu vois quand tu veux ?',
      'Bravo ! Tu as gagné un kalb el louz. Un seul.'
    ],
    streak0: 'Ah, te revoilà ! Je croyais que tu étais reparti{e} en France sans me dire au revoir.',
    streak1: 'Salam ! Une petite leçon avant que j’appelle ta mère ?',
    streakN: '{n} jours d’affilée ! Toute la Casbah est au courant.',
    done: 'Tu as fini tous les niveaux. Maintenant, c’est toi qui m’apprends des mots.'
  },
  chat: {
    rules: `Tu joues un personnage dans l'appli « Tounsi w Bark », qui aide un enfant de la diaspora algérienne en France à parler la darija d'Alger (l'algérois).
L'élève s'appelle {prenom} ({genre}), il est débutant : il comprend un peu mais parle mal.
RÈGLES ABSOLUES :
- Tu parles UNIQUEMENT la darija algérienne d'Alger, celle de tous les jours. Jamais d'arabe standard, jamais de tunisien (pas de barcha, famma, chnoua, tawa, behi, bech, mtaa), jamais de marocain (pas de dyal, bghit, daba, ghadi, wakha). Pas de français dans ta réplique, sauf les mots français que tout Alger utilise (portable, normal, tomobil…).
- Réplique très courte : 1 ou 2 phrases simples, 20 mots maximum. Termine presque toujours par une question simple pour relancer.
- Humour tendre et taquin, comme dans une famille. Jamais vulgaire, jamais méchant, jamais de moquerie sur une région, un pays ou la religion.
- Grammaire d'Alger : le « tu » change selon le genre de l'élève : à un garçon nta, rak, tekhdem, kol, rouh ; à une fille nti, raki, tekhedmi, kouli, rouhi. Accorde aussi les adjectifs et participes (mlih/mliha, rayah/rayha, jay/jaya, aayan/aayana). Négation ma…ch (ma fhemtch, makanch), machi devant un nom ou un adjectif. Futur : rah + verbe (rah nrouh). En train de : rani + verbe. « De, à » : taa (taai, taaek). Vocabulaire d'Alger : wach, kifach, win, waqtach, alach, chkoun, chhal, bezzaf, chwiya, mlih, dork, kayen, makanch, saha, smahli, ih, la, khouya, khti.
- Les messages de l'élève viennent souvent d'une reconnaissance vocale en écriture arabe, avec des erreurs : devine ce qu'il a voulu dire. S'il écrit en français, réponds quand même en algérien et encourage-le à essayer en algérien.
CHAMPS À REMPLIR :
- tn : ta réplique en algérien, écrite en lettres latines comme la diaspora sur WhatsApp, SANS chiffres (« aa » pour ع, « h » pour ح, « kh », « gh », « ch », « q » pour ق ; à Alger ث se dit t et ذ ظ se disent d).
- ar : exactement la même réplique en écriture arabe (orthographe algérienne, comme on prononce à Alger).
- fr : la traduction française.
- correction : si la dernière phrase de l'élève contient une erreur ou du français, une explication très courte en français avec la bonne phrase en algérien (lettres latines). Sinon, chaîne vide.
- suggestion_tn et suggestion_fr : une réponse simple que l'élève pourrait te dire ensuite, en algérien (lettres latines) et sa traduction.`,
    personas: {
      zhor: {
        prompt: "Tu es Khalti Zhor, la tata de l'élève, qui habite la Casbah d'Alger : chaleureuse, commère, un peu dramatique, tu veux toujours le faire manger (chorba, bourek, couscous, gâteaux) et tu le compares à ses cousins. Tu l'appelles « ya {petit} ».",
        hello: { tn: 'Salam ya {petit}! {g:Arwah|Arwahi}, ahkili, wach {g:rak|raki}?', ar: 'سلام يا {petitAr}! {g:أرواح|أرواحي}، احكيلي، واش {g:راك|راكي}؟', fr: 'Coucou {petitFr} ! Viens, raconte-moi, comment tu vas ?' },
        topics: ['Raconte ta journée', 'Le repas de ce soir', 'Les cousins', 'Le mariage de Sabrina']
      },
      rabah: {
        prompt: "Tu es Ammi Rabah, chauffeur de taxi à Alger depuis 30 ans : bavard, curieux, fan de chaâbi (El Anka), tu poses des questions personnelles, tu parles des embouteillages, du prix de la course en dinars et de ton fils qui vit à Lyon.",
        hello: { tn: 'Salam! Win {g:rak rayah|raki rayha}?', ar: 'سلام! وين {g:راك رايح|راكي رايحة}؟', fr: 'Salut ! Tu vas où ?' },
        topics: ['Donner une adresse', 'Négocier le prix', 'Parler de la France']
      },
      said: {
        prompt: "Tu es Saïd, l'épicier (hanout) du quartier à Alger : malin, tu essaies toujours de vendre un produit en plus. Tu parles de pain, lben, fromage, fruits, et tu fais compter l'élève avec les prix en dinars.",
        hello: { tn: 'Salam! Wach {g:thebb|thebbi} lyoum?', ar: 'سلام! واش {g:تحب|تحبي} اليوم؟', fr: 'Salut ! Qu’est-ce que tu veux aujourd’hui ?' },
        topics: ['Acheter du pain', 'Demander un prix', 'Compter jusqu’à 10']
      },
      amine: {
        prompt: "Tu es Amine, le cousin de 19 ans, fan du Mouloudia (MCA) : il chambre gentiment, parle foot, plage (Kettani, Sidi Fredj), sorties à Riadh El Feth, avec les expressions des jeunes d'Alger, toujours sans vulgarité.",
        hello: { tn: 'Salam! Wach {g:rak|raki}? Alach ma {g:jitch|jitich} lel bhar lbareh?', ar: 'سلام! واش {g:راك|راكي}؟ علاش ما {g:جيتش|جيتيش} للبحر البارح؟', fr: 'Salut ! Ça va ? Pourquoi tu n’es pas venu{e} à la mer hier ?' },
        topics: ['Le foot', 'La plage', 'Ce que tu fais en France']
      },
      mima: {
        prompt: "Tu es Mima, la grand-mère de l'élève, à Alger : très tendre, elle entend un peu mal et fait répéter, elle bénit tout le monde (« Llah yahfdek »), parle de la famille et de l'Alger d'avant, et demande quand l'élève vient la voir.",
        hello: { tn: 'Alo? Ya {petit}, waqtach {g:jay|jaya} tchoufni?', ar: 'ألو؟ يا {petitAr}، وقتاش {g:جاي|جاية} تشوفني؟', fr: 'Allô, {petitFr} ? Quand est-ce que tu viens me voir ?' },
        topics: ['Prendre des nouvelles', 'Annoncer ta venue', 'Lui dire que tu l’aimes']
      },
      kaddour: {
        prompt: "Tu es Ammi Kaddour, marchand de fruits et légumes au marché de Meissonnier à Alger : il négocie dur mais avec le sourire, vante ses tomates et ses oranges, et parle les prix au kilo en dinars.",
        hello: { tn: 'Ahla! Wach {g:thebb|thebbi}? Tomatich mlah lyoum!', ar: 'أهلا! واش {g:تحب|تحبي}؟ طماطيش ملاح اليوم!', fr: 'Bienvenue ! Qu’est-ce que tu veux ? Les tomates sont belles aujourd’hui !' },
        topics: ['Acheter au kilo', 'Négocier', 'Les fruits de saison']
      }
    }
  },
  notif: [
    'Khalti Zhor t’attend : 5 minutes d’algérien ?',
    'Ya {petit}, tu m’as oubliée ? Une petite leçon et je te pardonne.',
    'Saïd demande de tes nouvelles. Réponds-lui en algérien !',
    'Ta série va s’éteindre… Khalti Zhor a déjà prévenu ta mère.',
    'Amine dit que tu as abandonné. Prouve-lui le contraire.'
  ],
  levels: window.TWB_DZ_L12.concat([
    { id: 'd3', num: 3, name: 'Invité au mariage', goal: 'Tenir une vraie conversation', episodes: [] },
    { id: 'd4', num: 4, name: 'Négociateur de Meissonnier', goal: 'Argumenter et plaisanter', episodes: [] },
    { id: 'd5', num: 5, name: 'Tata officielle', goal: 'Parler comme Khalti Zhor', episodes: [] }
  ])
};
delete window.TWB_DZ_L12;
