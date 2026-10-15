// Contenus de Tounsi w Bark.
// Chaque langue est un paquet indépendant : on ajoutera le kabyle ou d'autres dialectes
// en copiant cette structure, sans toucher au code de l'appli.
//
// Champs d'une phrase :
//   tn = écriture latine (comme on l'écrit sur WhatsApp)
//   ar = écriture arabe (sert à la voix du téléphone et à la reconnaissance du micro)
//   fr = traduction
// {petit} / {petitAr} = « wlidi » ou « benti » selon le profil, {prenom} = prénom de l'utilisateur.
//
// À FAIRE AVANT DE PARTAGER : faire relire tous les textes tunisiens par un natif.

window.TWB_CONTENT = {
  tn: {
    name: 'Darija tunisien',
    levels: [
      {
        id: 'n1', num: 1, name: 'Touriste perdu',
        goal: 'Survivre à ta première journée au bled',
        episodes: [
          // ---------------------------------------------------------------- Épisode 1
          {
            id: 'n1e1', title: "L'arrivée à Tunis-Carthage",
            pitch: "Khalti t'attend à l'aéroport. Elle a fait 2 heures de route et elle compte bien te le rappeler.",
            cast: ['khalti'],
            scene: [
              { who: 'khalti', tn: 'Aslema ya {petit}! Wallah twahachtek!', ar: 'أسلامة يا {petitAr}! والله توحشتك!', fr: 'Coucou {petitFr} ! Wallah, tu m’as manqué !' },
              { who: 'me', tn: 'Aslema Khalti! Chniya ahwelek?', ar: 'أسلامة خالتي! شنية أحوالك؟', fr: 'Salut tata ! Comment ça va ?' },
              { who: 'khalti', tn: 'Labes, el hamdoullah. Chnoua esmek? Nsitou!', ar: 'لاباس، الحمد لله. شنوة اسمك؟ نسيتو!', fr: 'Ça va, Dieu merci. C’est quoi ton prénom déjà ? Je l’ai oublié !', note: 'Elle ne l’a pas oublié. Elle teste ton tunisien.' },
              { who: 'me', tn: 'Esmi {prenom}, ya Khalti!', ar: 'اسمي {prenom}، يا خالتي!', fr: 'Je m’appelle {prenom}, tata !' },
              { who: 'khalti', tn: 'Behi, behi. Yezzi mel francais, hna nahkiw tounsi!', ar: 'باهي، باهي. يزّي مالفرنساوي، هنا نحكيو تونسي!', fr: 'D’accord, d’accord. Fini le français, ici on parle tunisien !' },
              { who: 'me', tn: 'Aychek ya Khalti.', ar: 'عيشك يا خالتي.', fr: 'Merci tata.' }
            ],
            words: [
              { id: 'aslema', tn: 'Aslema', ar: 'أسلامة', fr: 'Bonjour, salut', ex: 'Aslema Khalti! = Salut tata !' },
              { id: 'ahwelek', tn: 'Chniya ahwelek?', ar: 'شنية أحوالك؟', fr: 'Comment ça va ?', ex: 'On le dit à tout le monde, même au boulanger.' },
              { id: 'labes', tn: 'Labes', ar: 'لاباس', fr: 'Ça va (bien)', ex: 'Labes? Labes! = Ça va ? Ça va !' },
              { id: 'hamdoullah', tn: 'El hamdoullah', ar: 'الحمد لله', fr: 'Dieu merci', ex: 'Labes, el hamdoullah.' },
              { id: 'esmek', tn: 'Chnoua esmek?', ar: 'شنوة اسمك؟', fr: 'Comment tu t’appelles ?', ex: 'Chnoua = quoi.' },
              { id: 'esmi', tn: 'Esmi…', ar: 'اسمي…', fr: 'Je m’appelle…', ex: 'Esmi {prenom}.' },
              { id: 'behi', tn: 'Behi', ar: 'باهي', fr: 'D’accord, bien', ex: 'Le mot que tu vas dire 50 fois par jour.' },
              { id: 'aychek', tn: 'Aychek', ar: 'عيشك', fr: 'Merci', ex: 'Aychek ya Khalti.' },
              { id: 'twahachtek', tn: 'Twahachtek', ar: 'توحشتك', fr: 'Tu m’as manqué', ex: 'À dire à Khalti, sinon elle boude.' }
            ],
            exercises: [
              { type: 'meaning', word: 'aslema' },
              { type: 'reverse', word: 'ahwelek' },
              { type: 'reply', who: 'khalti', line: { tn: 'Chnoua esmek?', ar: 'شنوة اسمك؟', fr: 'Comment tu t’appelles ?' },
                options: [
                  { tn: 'Esmi {prenom}.', fr: 'Je m’appelle {prenom}.', ok: true },
                  { tn: 'Ghali barcha!', fr: 'C’est très cher !', why: 'Tu viens de dire à Khalti qu’elle est trop chère. Elle demandait ton prénom.' },
                  { tn: 'Labes.', fr: 'Ça va.', why: 'Elle te demande ton prénom, pas des nouvelles.' }
                ] },
              { type: 'listen', word: 'behi' },
              { type: 'order', tn: 'Aslema ya Khalti chniya ahwelek', fr: 'Salut tata, comment ça va ?', tokens: ['Aslema', 'ya', 'Khalti', 'chniya', 'ahwelek'] },
              { type: 'speak', tn: 'Aychek ya Khalti', ar: 'عيشك يا خالتي', fr: 'Merci tata' },
              { type: 'meaning', word: 'twahachtek' }
            ]
          },
          // ---------------------------------------------------------------- Épisode 2
          {
            id: 'n1e2', title: 'Le taxi jaune',
            pitch: 'Am Hédi, chauffeur de taxi, 30 ans de métier, 0 seconde de silence.',
            cast: ['hedi'],
            scene: [
              { who: 'hedi', tn: 'Aslema! Win mechi?', ar: 'أسلامة! وين ماشي؟', fr: 'Salut ! Tu vas où ?' },
              { who: 'me', tn: 'Nheb nemchi lel Marsa.', ar: 'نحب نمشي للمرسى.', fr: 'Je veux aller à La Marsa.' },
              { who: 'hedi', tn: 'Behi. Enti mel France? Bayen alik!', ar: 'باهي. إنتي مالفرانسا؟ باين عليك!', fr: 'D’accord. Tu viens de France ? Ça se voit !', note: 'Tu n’as rien dit. Il a deviné à tes baskets.' },
              { who: 'me', tn: 'Ahki bechwaya, ma fhemtech.', ar: 'احكي بشويّة، ما فهمتش.', fr: 'Parle doucement, je n’ai pas compris.' },
              { who: 'hedi', tn: 'Wselna!', ar: 'وصلنا!', fr: 'On est arrivés !', note: 'Il a accéléré au lieu de ralentir.' },
              { who: 'me', tn: 'Kaddech?', ar: 'قدّاش؟', fr: 'Combien ?' },
              { who: 'hedi', tn: 'Ichrin dinar.', ar: 'عشرين دينار.', fr: 'Vingt dinars.' },
              { who: 'me', tn: 'Ghali barcha!', ar: 'غالي برشة!', fr: 'C’est très cher !' },
              { who: 'hedi', tn: 'Enti touriste wala tounsi?', ar: 'إنتي توريست ولا تونسي؟', fr: 'T’es touriste ou tunisien ?' }
            ],
            words: [
              { id: 'winmechi', tn: 'Win mechi?', ar: 'وين ماشي؟', fr: 'Tu vas où ?', ex: 'Win = où.' },
              { id: 'nheb', tn: 'Nheb nemchi l…', ar: 'نحب نمشي ل…', fr: 'Je veux aller à…', ex: 'Nheb nemchi lel Marsa.' },
              { id: 'bechwaya', tn: 'Ahki bechwaya', ar: 'احكي بشويّة', fr: 'Parle doucement', ex: 'Ton meilleur ami au bled.' },
              { id: 'fhemtech', tn: 'Ma fhemtech', ar: 'ما فهمتش', fr: 'Je n’ai pas compris', ex: 'Ton deuxième meilleur ami.' },
              { id: 'wselna', tn: 'Wselna', ar: 'وصلنا', fr: 'On est arrivés', ex: 'Wselna, el hamdoullah!' },
              { id: 'kaddech', tn: 'Kaddech?', ar: 'قدّاش؟', fr: 'Combien ?', ex: 'Kaddech el taxi?' },
              { id: 'ghali', tn: 'Ghali', ar: 'غالي', fr: 'Cher', ex: 'Ghali barcha = très cher.' },
              { id: 'barcha', tn: 'Barcha', ar: 'برشة', fr: 'Beaucoup, très', ex: 'Le mot le plus tunisien qui existe.' },
              { id: 'wala', tn: 'Wala', ar: 'ولا', fr: 'Ou', ex: 'Touriste wala tounsi?' }
            ],
            exercises: [
              { type: 'meaning', word: 'winmechi' },
              { type: 'reply', who: 'hedi', line: { tn: 'Win mechi?', ar: 'وين ماشي؟', fr: 'Tu vas où ?' },
                options: [
                  { tn: 'Nheb nemchi lel Marsa.', fr: 'Je veux aller à La Marsa.', ok: true },
                  { tn: 'Esmi Hédi.', fr: 'Je m’appelle Hédi.', why: 'C’est LUI qui s’appelle Hédi. Il te demande où tu vas.' },
                  { tn: 'Twahachtek!', fr: 'Tu m’as manqué !', why: 'Tu viens de dire à un inconnu qu’il t’a manqué. Il est touché, mais il ne sait toujours pas où aller.' }
                ] },
              { type: 'reverse', word: 'fhemtech' },
              { type: 'listen', word: 'barcha' },
              { type: 'order', tn: 'Nheb nemchi lel Marsa', fr: 'Je veux aller à La Marsa', tokens: ['Nheb', 'nemchi', 'lel', 'Marsa'] },
              { type: 'speak', tn: 'Ahki bechwaya', ar: 'احكي بشويّة', fr: 'Parle doucement' },
              { type: 'reply', who: 'hedi', line: { tn: 'Ichrin dinar.', ar: 'عشرين دينار.', fr: 'Vingt dinars.' },
                options: [
                  { tn: 'Ghali barcha!', fr: 'C’est très cher !', ok: true },
                  { tn: 'Aslema!', fr: 'Bonjour !', why: 'Dire bonjour en fin de course, c’est original. Mais tu dois toujours 20 dinars.' },
                  { tn: 'Labes, el hamdoullah.', fr: 'Ça va, Dieu merci.', why: 'Il ne t’a pas demandé comment tu vas. Il t’a demandé 20 dinars.' }
                ] }
            ]
          },
          // ---------------------------------------------------------------- Épisode 3
          {
            id: 'n1e3', title: 'Chez le hanout',
            pitch: 'Khalti t’envoie acheter le pain chez Si Lamine. Simple ? Il faut savoir compter.',
            cast: ['lamine'],
            scene: [
              { who: 'lamine', tn: 'Aslema! Chnoua theb?', ar: 'أسلامة! شنوة تحب؟', fr: 'Salut ! Qu’est-ce que tu veux ?' },
              { who: 'me', tn: 'Aatini zouz khobzat, yaychek.', ar: 'اعطيني زوز خبزات، يعيشك.', fr: 'Donne-moi deux baguettes, s’il te plaît.' },
              { who: 'lamine', tn: 'Famma haja okhra?', ar: 'فمّا حاجة أخرى؟', fr: 'Il y a autre chose ?' },
              { who: 'me', tn: 'Famma lben?', ar: 'فمّا لبن؟', fr: 'Il y a du lben ?', note: 'Le lben : du lait fermenté. Khalti en boit à chaque repas.' },
              { who: 'lamine', tn: 'Ey, famma. Kaddech?', ar: 'إيه، فمّا. قدّاش؟', fr: 'Oui, il y en a. Combien ?' },
              { who: 'me', tn: 'Thletha… la, arbaa!', ar: 'ثلاثة… لا، أربعة!', fr: 'Trois… non, quatre !' },
              { who: 'lamine', tn: 'Mrigel. Khamsa dinar.', ar: 'مريڨل. خمسة دينار.', fr: 'Parfait. Cinq dinars.' }
            ],
            words: [
              { id: 'wahed', tn: 'Wahed', ar: 'واحد', fr: 'Un', ex: 'Wahed khobza = une baguette.' },
              { id: 'zouz', tn: 'Zouz', ar: 'زوز', fr: 'Deux', ex: 'Zouz, pas « tnin » : ça, c’est en arabe classique.' },
              { id: 'thletha', tn: 'Thletha', ar: 'ثلاثة', fr: 'Trois', ex: 'Thletha lben.' },
              { id: 'arbaa', tn: 'Arbaa', ar: 'أربعة', fr: 'Quatre', ex: 'Thletha… la, arbaa!' },
              { id: 'khamsa', tn: 'Khamsa', ar: 'خمسة', fr: 'Cinq', ex: 'Khamsa dinar.' },
              { id: 'aachra', tn: 'Aachra', ar: 'عشرة', fr: 'Dix', ex: 'Aachra dinar.' },
              { id: 'aatini', tn: 'Aatini', ar: 'اعطيني', fr: 'Donne-moi', ex: 'Aatini zouz khobzat.' },
              { id: 'yaychek', tn: 'Yaychek', ar: 'يعيشك', fr: 'S’il te plaît', ex: 'À ne pas confondre avec aychek (merci).' },
              { id: 'famma', tn: 'Famma', ar: 'فمّا', fr: 'Il y a', ex: 'Famma lben?' },
              { id: 'ey', tn: 'Ey / La', ar: 'إيه / لا', fr: 'Oui / Non', ex: 'Ey, famma.' },
              { id: 'mrigel', tn: 'Mrigel', ar: 'مريڨل', fr: 'Parfait, nickel', ex: 'Tout est mrigel.' },
              { id: 'yezzi', tn: 'Yezzi', ar: 'يزّي', fr: 'Ça suffit, stop', ex: 'Yezzi mel francais!' }
            ],
            exercises: [
              { type: 'meaning', word: 'zouz' },
              { type: 'reverse', word: 'khamsa' },
              { type: 'order', tn: 'Aatini zouz khobzat yaychek', fr: 'Donne-moi deux baguettes, s’il te plaît', tokens: ['Aatini', 'zouz', 'khobzat', 'yaychek'] },
              { type: 'listen', word: 'famma' },
              { type: 'reply', who: 'lamine', line: { tn: 'Famma haja okhra?', ar: 'فمّا حاجة أخرى؟', fr: 'Il y a autre chose ?' },
                options: [
                  { tn: 'La, yezzi. Aychek.', fr: 'Non, ça suffit. Merci.', ok: true },
                  { tn: 'Twahachtek!', fr: 'Tu m’as manqué !', why: 'Si Lamine te connaît depuis 4 minutes. Il ne t’a pas manqué.' },
                  { tn: 'Win mechi?', fr: 'Tu vas où ?', why: 'Il ne va nulle part, c’est son magasin.' }
                ] },
              { type: 'speak', tn: 'Kaddech?', ar: 'قدّاش؟', fr: 'Combien ?' },
              { type: 'meaning', word: 'mrigel' }
            ]
          }
        ],
        boss: {
          id: 'n1boss', title: "L'épreuve de Khalti",
          pitch: '10 questions sur tout le niveau. Il en faut 7 pour que Khalti te dise enfin « mrigel ».',
          count: 10, pass: 7
        }
      },
      {
        id: 'n2', num: 2, name: 'Cousin de France',
        goal: 'Répondre à la famille sans paniquer',
        episodes: [
          // ---------------------------------------------------------------- Niveau 2, épisode 1
          {
            id: 'n2e1', title: 'Le repas chez Khalti',
            pitch: 'Khalti a cuisiné pour 12. Vous êtes 3. Personne ne quittera la table avant d’avoir fini.',
            cast: ['khalti'],
            scene: [
              { who: 'khalti', tn: 'Okood, kol! Aamaltlek kosksi.', ar: 'اقعد، كول! عملتلك كسكسي.', fr: 'Assieds-toi, mange ! Je t’ai fait un couscous.' },
              { who: 'me', tn: 'Yaatik essaha ya Khalti, bnin barcha!', ar: 'يعطيك الصحة يا خالتي، بنين برشة!', fr: 'Merci tata, c’est vraiment délicieux !' },
              { who: 'khalti', tn: 'Zid chwaya!', ar: 'زيد شويّة!', fr: 'Reprends-en un peu !' },
              { who: 'me', tn: 'La, yezzi, chbaat.', ar: 'لا، يزّي، شبعت.', fr: 'Non, ça suffit, je n’ai plus faim.' },
              { who: 'khalti', tn: 'Chbaat? Ma klit chay! Zid!', ar: 'شبعت؟ ما كليت شي! زيد!', fr: 'Plus faim ? Tu n’as rien mangé ! Ressers-toi !', note: 'Tu as mangé deux assiettes. Pour Khalti, ça ne compte pas.' },
              { who: 'me', tn: 'Behi… chwaya barka.', ar: 'باهي… شويّة بركة.', fr: 'D’accord… juste un peu.' },
              { who: 'khalti', tn: 'Hakka nhebbek!', ar: 'هكّا نحبك!', fr: 'C’est comme ça que je t’aime !' }
            ],
            words: [
              { id: 'okood', tn: 'Okood', ar: 'اقعد', fr: 'Assieds-toi', ex: 'Okood, kol!' },
              { id: 'kol', tn: 'Kol', ar: 'كول', fr: 'Mange', ex: 'Le mot préféré de Khalti.' },
              { id: 'bnin', tn: 'Bnin', ar: 'بنين', fr: 'Délicieux', ex: 'Bnin barcha! = Trop bon !' },
              { id: 'yaatikessaha', tn: 'Yaatik essaha', ar: 'يعطيك الصحة', fr: 'Merci, bravo (pour le travail fait)', ex: 'À dire à celle qui a cuisiné.' },
              { id: 'zid', tn: 'Zid', ar: 'زيد', fr: 'Encore, ajoute', ex: 'Zid chwaya! = Reprends un peu !' },
              { id: 'chwaya', tn: 'Chwaya', ar: 'شويّة', fr: 'Un peu', ex: 'Chwaya barka = juste un peu.' },
              { id: 'chbaat', tn: 'Chbaat', ar: 'شبعت', fr: 'Je n’ai plus faim (je suis rassasié)', ex: 'Ne marche jamais avec Khalti.' },
              { id: 'barka', tn: 'Barka', ar: 'بركة', fr: 'Seulement, juste', ex: 'Wahed barka = un seul.' },
              { id: 'hakka', tn: 'Hakka', ar: 'هكّا', fr: 'Comme ça', ex: 'Hakka nhebbek!' },
              { id: 'nhebbek', tn: 'Nhebbek', ar: 'نحبك', fr: 'Je t’aime', ex: 'Pour la famille, pas que pour les amoureux.' }
            ],
            exercises: [
              { type: 'meaning', word: 'kol' },
              { type: 'reply', who: 'khalti', line: { tn: 'Zid chwaya!', ar: 'زيد شويّة!', fr: 'Reprends-en un peu !' },
                options: [
                  { tn: 'La, yezzi, chbaat.', fr: 'Non, ça suffit, je n’ai plus faim.', ok: true },
                  { tn: 'Kaddech?', fr: 'Combien ?', why: 'Tu demandes le prix du couscous à ta tata. Elle est vexée pour trois générations.' },
                  { tn: 'Win mechi?', fr: 'Tu vas où ?', why: 'Elle ne va nulle part : elle reste là jusqu’à ce que tu finisses ton assiette.' }
                ] },
              { type: 'reverse', word: 'bnin' },
              { type: 'listen', word: 'chwaya' },
              { type: 'order', tn: 'Yaatik essaha ya Khalti bnin barcha', fr: 'Merci tata, c’est vraiment délicieux', tokens: ['Yaatik', 'essaha', 'ya', 'Khalti', 'bnin', 'barcha'] },
              { type: 'speak', tn: 'La, yezzi, chbaat', ar: 'لا، يزّي، شبعت', fr: 'Non, ça suffit, je n’ai plus faim' },
              { type: 'meaning', word: 'nhebbek' }
            ]
          },
          // ---------------------------------------------------------------- Niveau 2, épisode 2
          {
            id: 'n2e2', title: 'L’interrogatoire des cousins',
            pitch: 'Skander a une liste de questions. Elle a été écrite par Khalti.',
            cast: ['skander'],
            scene: [
              { who: 'skander', tn: 'Ahla {cousin}! Waktech jit?', ar: 'أهلا {cousinAr}! وقتاش جيت؟', fr: 'Salut {cousin} ! Tu es arrivé{e} quand ?' },
              { who: 'me', tn: 'Jit lbereh.', ar: 'جيت البارح.', fr: 'Je suis arrivé{e} hier.' },
              { who: 'skander', tn: 'Kaddech bech tokood?', ar: 'قدّاش باش تقعد؟', fr: 'Tu restes combien de temps ?' },
              { who: 'me', tn: 'Jemaatin.', ar: 'جمعتين.', fr: 'Deux semaines.' },
              { who: 'skander', tn: 'Tekhdem wala takra?', ar: 'تخدم ولا تقرا؟', fr: 'Tu travailles ou tu étudies ?' },
              { who: 'me', tn: 'Nekhdem.', ar: 'نخدم.', fr: 'Je travaille.' },
              { who: 'skander', tn: 'Behi. Ama mazelt ma tzawajtech?', ar: 'باهي. أما مازلت ما تزوجتش؟', fr: 'D’accord. Et toujours pas marié{e} ?', note: 'La question qui tombe à chaque été, depuis tes 18 ans.' },
              { who: 'me', tn: 'Ya Skander, yezzi!', ar: 'يا سكندر، يزّي!', fr: 'Skander, arrête !' },
              { who: 'skander', tn: 'Khalti hiya elli kalitli nsaalek!', ar: 'خالتي هي اللي قالتلي نسألك!', fr: 'C’est Khalti qui m’a dit de te demander !' }
            ],
            words: [
              { id: 'waktech', tn: 'Waktech?', ar: 'وقتاش؟', fr: 'Quand ?', ex: 'Waktech jit? = Tu es arrivé{e} quand ?' },
              { id: 'jit', tn: 'Jit', ar: 'جيت', fr: 'Je suis venu(e), arrivé(e)', ex: 'Jit lbereh.' },
              { id: 'lbereh', tn: 'Lbereh', ar: 'البارح', fr: 'Hier', ex: 'Jit lbereh.' },
              { id: 'tokood', tn: 'Kaddech bech tokood?', ar: 'قدّاش باش تقعد؟', fr: 'Tu restes combien de temps ?', ex: 'Bech = va (futur).' },
              { id: 'jemaa', tn: 'Jemaa', ar: 'جمعة', fr: 'Semaine', ex: 'Jemaatin = deux semaines.' },
              { id: 'nekhdem', tn: 'Nekhdem', ar: 'نخدم', fr: 'Je travaille', ex: 'Tekhdem? = tu travailles ?' },
              { id: 'nakra', tn: 'Nakra', ar: 'نقرا', fr: 'J’étudie', ex: 'Takra? = tu étudies ?' },
              { id: 'mazelt', tn: 'Mazelt', ar: 'مازلت', fr: 'Encore, toujours pas', ex: 'Mazelt ma klit = je n’ai pas encore mangé.' },
              { id: 'tzawajt', tn: 'Tzawajt', ar: 'تزوجت', fr: 'Tu t’es marié(e)', ex: 'La question préférée des tatas.' }
            ],
            exercises: [
              { type: 'meaning', word: 'waktech' },
              { type: 'reply', who: 'skander', line: { tn: 'Kaddech bech tokood?', ar: 'قدّاش باش تقعد؟', fr: 'Tu restes combien de temps ?' },
                options: [
                  { tn: 'Jemaatin.', fr: 'Deux semaines.', ok: true },
                  { tn: 'Bnin barcha!', fr: 'C’est délicieux !', why: 'Skander ne t’a rien fait goûter. Il voulait savoir combien de temps tu restes.' },
                  { tn: 'Nhebbek.', fr: 'Je t’aime.', why: 'Skander est touché, mais il attend toujours ta réponse.' }
                ] },
              { type: 'reverse', word: 'lbereh' },
              { type: 'listen', word: 'nekhdem' },
              { type: 'order', tn: 'Waktech jit', fr: 'Tu es arrivé{e} quand ?', tokens: ['Waktech', 'jit'] },
              { type: 'speak', tn: 'Ya Skander, yezzi!', ar: 'يا سكندر، يزّي!', fr: 'Skander, arrête !' },
              { type: 'reply', who: 'skander', line: { tn: 'Ama mazelt ma tzawajtech?', ar: 'أما مازلت ما تزوجتش؟', fr: 'Et toujours pas marié{e} ?' },
                options: [
                  { tn: 'Ya Skander, yezzi!', fr: 'Skander, arrête !', ok: true },
                  { tn: 'Ey, jemaatin.', fr: 'Oui, deux semaines.', why: 'Marié depuis deux semaines ? Toute la famille va débarquer avec des cadeaux.' },
                  { tn: 'Aatini zouz khobzat.', fr: 'Donne-moi deux baguettes.', why: 'Belle tentative pour changer de sujet. Ça ne marchera pas.' }
                ] }
            ]
          },
          // ---------------------------------------------------------------- Niveau 2, épisode 3
          {
            id: 'n2e3', title: 'Mamie au téléphone',
            pitch: 'Jedda appelle. Elle entend mal, elle parle fort, et elle t’aime très fort.',
            cast: ['jedda'],
            scene: [
              { who: 'jedda', tn: 'Alou? Chkoun?', ar: 'ألو؟ شكون؟', fr: 'Allô ? C’est qui ?' },
              { who: 'me', tn: 'Ena {prenom}, ya Jedda!', ar: 'أنا {prenom}، يا جدّة!', fr: 'C’est moi, {prenom}, mamie !' },
              { who: 'jedda', tn: 'Chkoun? Ma nesmaach mliih!', ar: 'شكون؟ ما نسمعش مليح!', fr: 'Qui ? Je n’entends pas bien !' },
              { who: 'me', tn: 'Tesmaani tawa?', ar: 'تسمعني توّا؟', fr: 'Tu m’entends maintenant ?' },
              { who: 'jedda', tn: 'Ey, tawa nesmaak! Waktech {jay} lel dar?', ar: 'إيه، توّا نسمعك! وقتاش {jayAr} للدار؟', fr: 'Oui, maintenant je t’entends ! Tu viens quand à la maison ?' },
              { who: 'me', tn: 'Ghodwa, inchallah.', ar: 'غدوة، إن شاء الله.', fr: 'Demain, si Dieu le veut.' },
              { who: 'jedda', tn: 'Rabbi yhannik. Nhebbek barcha.', ar: 'ربّي يهنّيك. نحبك برشة.', fr: 'Que Dieu te protège. Je t’aime très fort.', note: 'Elle a raccroché avant ta réponse, puis rappelé deux fois.' },
              { who: 'me', tn: 'Ena zeda. Bslema ya Jedda!', ar: 'أنا زادة. بالسلامة يا جدّة!', fr: 'Moi aussi. Au revoir mamie !' }
            ],
            words: [
              { id: 'alou', tn: 'Alou?', ar: 'ألو؟', fr: 'Allô ?', ex: 'Toujours crié, jamais dit.' },
              { id: 'chkoun', tn: 'Chkoun?', ar: 'شكون؟', fr: 'Qui ?', ex: 'Chkoun enti? = Qui es-tu ?' },
              { id: 'ena', tn: 'Ena', ar: 'أنا', fr: 'Moi, je', ex: 'Ena {prenom}.' },
              { id: 'nesmaa', tn: 'Nesmaa', ar: 'نسمع', fr: 'J’entends', ex: 'Ma nesmaach = je n’entends pas.' },
              { id: 'tawa', tn: 'Tawa', ar: 'توّا', fr: 'Maintenant', ex: 'Tawa nji = j’arrive tout de suite (enfin, en théorie).' },
              { id: 'ghodwa', tn: 'Ghodwa', ar: 'غدوة', fr: 'Demain', ex: 'Ghodwa, inchallah.' },
              { id: 'inchallah', tn: 'Inchallah', ar: 'إن شاء الله', fr: 'Si Dieu le veut', ex: 'Peut vouloir dire oui, non ou peut-être.' },
              { id: 'yhannik', tn: 'Rabbi yhannik', ar: 'ربّي يهنّيك', fr: 'Que Dieu te protège, te donne la paix', ex: 'Une bénédiction de mamie.' },
              { id: 'zeda', tn: 'Zeda', ar: 'زادة', fr: 'Aussi', ex: 'Ena zeda = moi aussi.' },
              { id: 'bslema', tn: 'Bslema', ar: 'بالسلامة', fr: 'Au revoir', ex: 'Bslema ya Jedda!' }
            ],
            exercises: [
              { type: 'meaning', word: 'chkoun' },
              { type: 'reverse', word: 'tawa' },
              { type: 'reply', who: 'jedda', line: { tn: 'Alou? Chkoun?', ar: 'ألو؟ شكون؟', fr: 'Allô ? C’est qui ?' },
                options: [
                  { tn: 'Ena {prenom}, ya Jedda!', fr: 'C’est moi, {prenom}, mamie !', ok: true },
                  { tn: 'Chkoun?', fr: 'Qui ?', why: 'C’est toi qui appelles… enfin, c’est elle. Bref, quelqu’un doit répondre.' },
                  { tn: 'Kaddech?', fr: 'Combien ?', why: 'Tu demandes un prix à ta grand-mère. Elle va le raconter au marché.' }
                ] },
              { type: 'listen', word: 'ghodwa' },
              { type: 'order', tn: 'Ena zeda bslema ya Jedda', fr: 'Moi aussi, au revoir mamie', tokens: ['Ena', 'zeda', 'bslema', 'ya', 'Jedda'] },
              { type: 'speak', tn: 'Tesmaani tawa?', ar: 'تسمعني توّا؟', fr: 'Tu m’entends maintenant ?' },
              { type: 'meaning', word: 'yhannik' }
            ]
          }
        ],
        boss: {
          id: 'n2boss', title: "L'épreuve de la famille",
          pitch: '10 questions. Toute la famille regarde. Il en faut 7.',
          count: 10, pass: 7
        }
      },
      { id: 'n3', num: 3, name: 'Invité au mariage', goal: 'Tenir une vraie conversation', episodes: [] },
      { id: 'n4', num: 4, name: 'Négociateur du souk', goal: 'Argumenter et plaisanter', episodes: [] },
      { id: 'n5', num: 5, name: 'Tata officielle', goal: 'Parler comme Khalti', episodes: [] }
    ]
  }
};

// Personnages
window.TWB_CAST = {
  khalti: { name: 'Khalti', role: 'Ta tata', skin: '#c98b62', scarf: '#c0392b', glasses: true },
  hedi: { name: 'Am Hédi', role: 'Chauffeur de taxi', skin: '#b5774f', cap: '#f1c40f', moustache: true },
  lamine: { name: 'Si Lamine', role: 'Épicier du quartier', skin: '#a86b45', chechia: '#9b1c1c', moustache: true },
  skander: { name: 'Skander', role: 'Ton cousin de 19 ans', skin: '#c08457', curls: '#2b1d16', jersey: '#c8102e' },
  jedda: { name: 'Jedda', role: 'Ta grand-mère', skin: '#b98260', scarf: '#f4efe6', glasses: true, robe: '#2e6b5e' },
  nanna: { name: 'Nanna', role: 'Ta grand-mère, au village', skin: '#c48b63', scarf: '#e9b32a', glasses: false, robe: '#c0392b' },
  mokrane: { name: 'Dda Mokrane', role: 'Vendeur au marché', skin: '#b07a52', cap: '#5c6b7a', moustache: true },
  massi: { name: 'Massi', role: 'Ton cousin du village', skin: '#c99068', curls: '#4a2f1d', jersey: '#2a7d4f' },
  me: { name: 'Toi', role: '' }
};

// Discussion libre avec l'IA (Gemini, offre gratuite)
window.TWB_CHAT = {
  models: ['gemini-3.8-flash', 'gemini-3.5-flash-lite'],
  dailyLimit: 80,
  rules: `Tu joues un personnage dans l'appli « Tounsi w Bark », qui aide un enfant de la diaspora tunisienne en France à parler le darija tunisien.
L'élève s'appelle {prenom} ({genre}), il est débutant : il comprend un peu mais parle mal.
RÈGLES ABSOLUES :
- Tu parles UNIQUEMENT le darija tunisien du quotidien. Jamais d'arabe standard, jamais de darija marocain ou algérien, jamais de français dans ta réplique.
- Réplique très courte : 1 ou 2 phrases simples, 20 mots maximum. Termine presque toujours par une question simple pour relancer.
- Humour tendre et taquin, comme dans une famille. Jamais vulgaire, jamais méchant, jamais de moquerie sur une région, un pays ou la religion.
- Les messages de l'élève viennent souvent d'une reconnaissance vocale en écriture arabe, avec des erreurs : devine ce qu'il a voulu dire. S'il écrit en français, réponds quand même en tunisien et encourage-le à essayer en tunisien.
CHAMPS À REMPLIR :
- tn : ta réplique en tunisien, écrite en lettres latines comme la diaspora sur WhatsApp, SANS chiffres (écris « aa » pour ع, « h » pour ح, « kh », « gh », « ch »).
- ar : exactement la même réplique en écriture arabe (orthographe tunisienne).
- fr : la traduction française.
- correction : si la dernière phrase de l'élève contient une erreur ou du français, une explication très courte en français avec la bonne phrase en tunisien (lettres latines). Sinon, chaîne vide.
- suggestion_tn et suggestion_fr : une réponse simple que l'élève pourrait te dire ensuite, en tunisien (lettres latines) et sa traduction.`,
  personas: {
    khalti: {
      prompt: "Tu es Khalti, la tata de l'élève : chaleureuse, commère, un peu dramatique, tu veux toujours le faire manger et tu le compares à ses cousins. Tu l'appelles « ya {petit} ».",
      hello: { tn: 'Aslema ya {petit}! Taal, ahkili, chniya ahwelek?', ar: 'أسلامة يا {petitAr}! تعال، احكيلي، شنية أحوالك؟', fr: 'Coucou {petitFr} ! Viens, raconte-moi, comment ça va ?' },
      topics: ['Raconte ta journée', 'Le repas de ce soir', 'Les cousins', 'Le mariage cet été']
    },
    hedi: {
      prompt: "Tu es Am Hédi, chauffeur de taxi à Tunis depuis 30 ans : bavard, curieux, tu poses des questions personnelles, tu parles du prix de la course, des embouteillages et de ton fils qui vit à Marseille.",
      hello: { tn: 'Aslema! Win mechi lyoum?', ar: 'أسلامة! وين ماشي اليوم؟', fr: 'Salut ! Tu vas où aujourd’hui ?' },
      topics: ['Donner une adresse', 'Négocier le prix', 'Parler de la France']
    },
    lamine: {
      prompt: "Tu es Si Lamine, l'épicier (hanout) du quartier : malin, tu essaies toujours de vendre un produit en plus. Tu parles de pain, lben, harissa, fruits, et tu fais compter l'élève avec les prix en dinars.",
      hello: { tn: 'Aslema! Chnoua theb lyoum?', ar: 'أسلامة! شنوة تحب اليوم؟', fr: 'Salut ! Qu’est-ce que tu veux aujourd’hui ?' },
      topics: ['Acheter du pain', 'Demander un prix', 'Compter jusqu’à 10']
    },
    skander: {
      prompt: "Tu es Skander, le cousin de 19 ans : il chambre gentiment, parle foot (Espérance de Tunis), plage et sorties, avec les expressions des jeunes de Tunis, toujours sans vulgarité.",
      hello: { tn: 'Ahla {cousin}! Labes? Chbik ma jitech lel plage lbereh?', ar: 'أهلا {cousinAr}! لاباس؟ شبيك ما جيتش للبلاج البارح؟', fr: 'Salut {cousin} ! Ça va ? Pourquoi tu n’étais pas à la plage hier ?' },
      topics: ['Le foot', 'La plage', 'Ce que tu fais en France']
    },
    jedda: {
      prompt: "Tu es Jedda, la grand-mère de l'élève : très tendre, elle entend un peu mal et fait répéter, elle bénit tout le monde (« Rabbi yhannik »), parle de sa santé, de la famille et demande quand l'élève vient la voir.",
      hello: { tn: 'Alou? Ya {petit}, waktech {jay} tchoufni?', ar: 'ألو؟ يا {petitAr}، وقتاش {jayAr} تشوفني؟', fr: 'Allô ? Mon petit, quand est-ce que tu viens me voir ?' },
      topics: ['Prendre des nouvelles', 'Annoncer ta venue', 'Lui dire que tu l’aimes']
    }
  }
};

// Réactions de Khalti
window.TWB_KHALTI = {
  wrong: [
    'Ya hasra… Ta mère va entendre parler de ça.',
    'Même le chat du voisin le sait, celui-là.',
    'Je vais faire comme si je n’avais rien entendu.',
    'Wallah, tu parles comme un touriste allemand.',
    'Respire. Bois un peu de lben. Et réessaie.',
    'Ton cousin de 6 ans l’aurait eu.',
    'C’est la France qui t’a fait ça ?'
  ],
  right: [
    'Mrigel ! On dirait un vrai tounsi.',
    'Behi barcha ! Je le dirai à tout le quartier.',
    'Ça, c’est mon {petit} !',
    'El hamdoullah, tout n’est pas perdu.',
    'Tu vois quand tu veux ?',
    'Bravo ! Je t’autorise un deuxième makroudh.'
  ],
  streak0: 'Ah, tu te souviens de moi ? Je croyais que tu m’avais oubliée.',
  streak1: 'Aslema ! Une petite leçon avant que j’appelle ta mère ?',
  streakN: '{n} jours d’affilée ! Je commence à être fière de toi.',
  done: 'Tu as fini tout le niveau 1. La suite arrive bientôt, en attendant révise ton carnet.'
};

// Réglages du paquet tunisien
Object.assign(window.TWB_CONTENT.tn, {
  short: 'Tounsi', label: 'Darija tunisien', mascot: 'khalti',
  voice: 'tts', ttsLangs: ['ar-TN', 'ar-SA', 'ar'], srLang: 'ar-TN', speakField: 'ar',
  lines: window.TWB_KHALTI, chat: window.TWB_CHAT,
  notif: [
    'Khalti t’attend : 5 minutes de tounsi ?',
    'Ya {petit}, tu m’as oubliée ? Une petite leçon et je te pardonne.',
    'Si Lamine demande de tes nouvelles. Réponds-lui en tounsi !',
    'Ta série va s’éteindre… Khalti a déjà prévenu ta mère.',
    'Skander dit que tu as abandonné. Prouve-lui le contraire.'
  ]
});
