// Tounsi w Bark — pack marocain « ma » (suite) : niveaux 3 à 5, grammaire « Le coin de Tata Saadia », parcours « Lire et écrire ».
// Règles : docs/reference-marocain.md. À faire relire par un natif de Casablanca.

Object.assign(window.TWB_CAST, {
  karim: { name: 'Karim', role: 'Guichetier à la gare Casa-Voyageurs', skin: '#b07a52', cap: '#1d4e9e' }
});

(() => {
  const R = (who, tn, ar, fr, options) => ({ type: 'reply', who, line: { tn, ar, fr }, options });
  const ok = (tn, fr) => ({ tn, fr, ok: true });
  const ko = (tn, fr, why) => ({ tn, fr, why });

  window.TWB_MA_L34 = [
    // =====================================================================================
    // NIVEAU 3 — Invité au mariage
    // =====================================================================================
    {
      id: 'm3', num: 3, name: 'Invité au mariage',
      goal: 'Tenir une vraie conversation pendant le mariage de Salma',
      boss: { id: 'm3boss', title: 'L’épreuve du mariage', pitch: '12 questions, à écrire et à écouter. Il en faut 8 pour monter sur l’amariya avec la mariée (presque).', count: 12, pass: 8 },
      episodes: [
        // ---------------------------------------------------------------- m3e1
        {
          id: 'm3e1', title: 'La grande nouvelle',
          pitch: 'Tata Saadia a une nouvelle. Elle l’a déjà annoncée à tout le quartier. Tu es le dernier à le savoir.',
          cast: ['saadia'],
          scene: [
            { who: 'saadia', tn: 'A {petit}, aandi khbar zwin! Salma ghadi tzewwej!', ar: 'آ {petitAr}، عندي خبار زوين! سلمى غادي تزوج!', fr: 'Écoute, {petitFr}, j’ai une bonne nouvelle ! Salma va se marier !' },
            { who: 'me', tn: 'Mbrouk! Imta laaers?', ar: 'مبروك! إمتى العرس؟', fr: 'Félicitations ! C’est quand, le mariage ?' },
            { who: 'saadia', tn: 'Nhar ssebt, f chhar ghocht. W {g:nta|nti} khassek {g:tkoun|tkouni} temma!', ar: 'نهار السبت، ف شهر غشت. و{g:نتا|نتي} خاصك {g:تكون|تكوني} تما!', fr: 'Un samedi, en août. Et toi, tu dois être là !', note: 'Au Maroc, août se dit ghocht. Et tous les mariages de la famille tombent en été, quand la diaspora rentre.' },
            { who: 'me', tn: 'Akid! Ana {g:ferhan|ferhana} bzzaf.', ar: 'أكيد! أنا {g:فرحان|فرحانة} بزاف.', fr: 'Bien sûr ! Je suis trop content{e}.' },
            { who: 'me', tn: 'W laaris, chkoun?', ar: 'والعريس، شكون؟', fr: 'Et le marié, c’est qui ?' },
            { who: 'saadia', tn: 'Weld Lalla Naima! Rajel mzyan, khddam f lbanka.', ar: 'ولد لالة نعيمة! راجل مزيان، خدام ف البانكا.', fr: 'Le fils de Lalla Naïma ! Un homme bien, il travaille à la banque.', note: 'Lalla Naïma l’a donc su avant tout le monde. Comme d’habitude.' },
            { who: 'saadia', tn: 'W {g:nta|nti}, imta nfrhou bik?', ar: 'و{g:نتا|نتي}، إمتى نفرحو بيك؟', fr: 'Et toi, c’est quand qu’on fête ton mariage ?', note: 'La question arrive toujours. Toujours.' },
            { who: 'me', tn: 'A Tata… ila ja lmektoub, inchallah!', ar: 'آ طاطا… إلا جا المكتوب، إن شاء الله!', fr: 'Tata… quand le destin viendra, si Dieu le veut !', note: 'La réponse magique : personne ne discute avec le mektoub.' },
            { who: 'saadia', tn: 'Inchallah qrib! Ana aandi {g:wahda|wahed} f rassi…', ar: 'إن شاء الله قريب! أنا عندي {g:وحدة|واحد} ف راسي…', fr: 'Bientôt, si Dieu le veut ! J’ai déjà quelqu’un en tête…', note: 'Tu es venu{e} pour un mariage. Tu repars avec une liste de prétendants.' }
          ],
          words: [
            { id: 'm_khbar', tn: 'Khbar', ar: 'خبار', fr: 'Une nouvelle, des nouvelles', ex: 'Aandi khbar zwin = j’ai une bonne nouvelle.' },
            { id: 'm_tzewwej', tn: 'Tzewwej', ar: 'تزوج', fr: 'Se marier', ex: 'Salma ghadi tzewwej = Salma va se marier.' },
            { id: 'm_mbrouk', tn: 'Mbrouk', ar: 'مبروك', fr: 'Félicitations', ex: 'On répond : Llah ybarek fik.' },
            { id: 'm_laaers', tn: 'Laaers', ar: 'العرس', fr: 'Le mariage (la fête)', ex: 'Imta laaers? = c’est quand, le mariage ?' },
            { id: 'm_laaris', tn: 'Laaris', ar: 'العريس', fr: 'Le marié', ex: 'Laaroussa = la mariée.' },
            { id: 'm_ghocht', tn: 'Ghocht', ar: 'غشت', fr: 'Août', ex: 'Le mois des mariages et des retours au bled.' },
            { id: 'm_khassek', tn: 'Khassek', ar: 'خاصك', fr: 'Tu dois, il te faut', ex: 'Khassni = je dois. Khassek tkoun temma = tu dois être là.' },
            { id: 'm_akid', tn: 'Akid', ar: 'أكيد', fr: 'Bien sûr', ex: 'Akid, ghadi nji!' },
            { id: 'm_ferhan', tn: 'Ferhan / ferhana', ar: 'فرحان / فرحانة', fr: 'Content / contente', ex: 'Ana ferhana bzzaf = je suis trop contente.' },
            { id: 'm_nfrhou', tn: 'Imta nfrhou bik?', ar: 'إمتى نفرحو بيك؟', fr: 'C’est quand qu’on fête ton mariage ?', ex: 'La question préférée de toutes les tatas.' },
            { id: 'm_mektoub', tn: 'Ila ja lmektoub', ar: 'إلا جا المكتوب', fr: 'Si le destin le veut', ex: 'Ila = si. Parfait pour esquiver.' },
            { id: 'm_temma', tn: 'Temma', ar: 'تما', fr: 'Là-bas', ex: 'Hna = ici ; temma = là-bas.' }
          ],
          exercises: [
            R('saadia', 'Salma ghadi tzewwej!', 'سلمى غادي تزوج!', 'Salma va se marier !', [
              ok('Mbrouk! Imta laaers?', 'Félicitations ! C’est quand, le mariage ?'),
              ko('Ghali bzzaf!', 'C’est trop cher !', 'Vrai, un mariage coûte cher. Mais ça ne se dit pas à Tata.'),
              ko('Fin lhanout?', 'Où est l’épicerie ?', 'Tata t’annonce un mariage et tu cherches du pain. Les priorités…')]),
            R('saadia', 'W {g:nta|nti}, imta nfrhou bik?', 'و{g:نتا|نتي}، إمتى نفرحو بيك؟', 'Et toi, c’est quand qu’on fête ton mariage ?', [
              ok('Ila ja lmektoub, inchallah!', 'Quand le destin viendra, si Dieu le veut !'),
              ko('Ghedda!', 'Demain !', 'Demain ?! Tata a déjà appelé le traiteur et invité 400 personnes.'),
              ko('Kanbghi atay.', 'J’aime le thé.', 'Elle parle de ton mariage, tu parles de thé. Elle va te trouver quelqu’un qui aime le thé.')]),
            { type: 'meaning', word: 'm_ghocht' },
            { type: 'order', tn: 'Mbrouk imta laaers', fr: 'Félicitations, c’est quand le mariage ?', tokens: ['Mbrouk', 'imta', 'laaers'] },
            { type: 'speak', tn: 'Ila ja lmektoub, inchallah', ar: 'إلا جا المكتوب، إن شاء الله', fr: 'Quand le destin viendra, si Dieu le veut' }
          ],
          mission: { who: 'saadia', goal: 'Tata Saadia t’annonce le mariage : félicite-la, demande la date et qui est le marié, puis esquive poliment quand elle parle de TON mariage.', win: 'L’élève a dit mbrouk, demandé la date ou le marié, et esquivé la question sur son propre mariage, en marocain.' }
        },
        // ---------------------------------------------------------------- m3e2
        {
          id: 'm3e2', title: 'Qu’est-ce que je mets ?',
          pitch: 'Salma t’aide à choisir ta tenue. Elle a des règles. Beaucoup de règles.',
          cast: ['salma'],
          scene: [
            { who: 'salma', tn: 'Chno ghadi {g:telbes|telbsi} f laaers?', ar: 'شنو غادي {g:تلبس|تلبسي} ف العرس؟', fr: 'Qu’est-ce que tu vas mettre au mariage ?' },
            { who: 'me', tn: 'Ma aareftch… Sirwal w qamija?', ar: 'ما عرفتش… سروال وقميجة؟', fr: 'Je ne sais pas… Un pantalon et une chemise ?' },
            { who: 'salma', tn: 'Safi, la! Hadchi machi l laaers!', ar: 'صافي، لا! هادشي ماشي للعرس!', fr: 'Ah non, stop ! Ça, ce n’est pas pour un mariage !' },
            { who: 'salma', tn: '{g:Ghadi telbes jellaba w belgha|Ghadi telbsi qaftan w cherbil}.', ar: '{g:غادي تلبس جلابة وبلغة|غادي تلبسي قفطان وشربيل}.', fr: '{g:Tu vas mettre une djellaba et des babouches|Tu vas mettre un caftan et des babouches brodées}.' },
            { who: 'me', tn: 'Wakha, walakin ma aandich.', ar: 'واخا، ولكن ما عنديش.', fr: 'D’accord, mais je n’en ai pas.' },
            { who: 'salma', tn: 'Machi mouchkil! Nmchiw l lqissariya ghedda.', ar: 'ماشي مشكل! نمشيو للقيسارية غدا.', fr: 'Pas de problème ! On va à la qissariya demain.', note: 'La qissariya : la galerie marchande des tissus, des caftans et des djellabas.' },
            { who: 'me', tn: 'Ghali?', ar: 'غالي؟', fr: 'C’est cher ?' },
            { who: 'salma', tn: 'Chwiya… walakin {g:ghadi tkoun zwin|ghadi tkouni zwina} bzzaf!', ar: 'شوية… ولكن {g:غادي تكون زوين|غادي تكوني زوينة} بزاف!', fr: 'Un peu… mais tu vas être superbe !', note: '« Un peu », chez Salma, c’est trois heures d’essayage et la moitié de ton budget.' }
          ],
          words: [
            { id: 'm_telbes', tn: 'Chno ghadi {g:telbes|telbsi}?', ar: 'شنو غادي {g:تلبس|تلبسي}؟', fr: 'Qu’est-ce que tu vas mettre ?', ex: 'Lbes = s’habiller, porter.' },
            { id: 'm_sirwal', tn: 'Sirwal', ar: 'سروال', fr: 'Pantalon', ex: 'Sirwal w qamija = pantalon et chemise.' },
            { id: 'm_qamija', tn: 'Qamija', ar: 'قميجة', fr: 'Chemise', ex: 'Qamija bayda = une chemise blanche.' },
            { id: 'm_jellaba', tn: 'Jellaba', ar: 'جلابة', fr: 'Djellaba', ex: 'La tenue de fête des hommes (et des femmes).' },
            { id: 'm_belgha', tn: 'Belgha', ar: 'بلغة', fr: 'Babouches', ex: 'Belgha safra = babouches jaunes, les classiques.' },
            { id: 'm_qaftan', tn: 'Qaftan', ar: 'قفطان', fr: 'Caftan', ex: 'La robe de fête marocaine.' },
            { id: 'm_cherbil', tn: 'Cherbil', ar: 'شربيل', fr: 'Babouches brodées (pour femmes)', ex: 'Avec le caftan, c’est obligatoire.' },
            { id: 'm_maaandich', tn: 'Ma aandich', ar: 'ما عنديش', fr: 'Je n’ai pas', ex: 'Aandi = j’ai ; ma aandich = je n’ai pas.' },
            { id: 'm_mouchkil', tn: 'Machi mouchkil', ar: 'ماشي مشكل', fr: 'Pas de problème', ex: 'Machi devant un nom = pas.' },
            { id: 'm_nmchiw', tn: 'Nmchiw', ar: 'نمشيو', fr: 'On va, allons', ex: 'Nmchiw l lbhar? = on va à la plage ?' },
            { id: 'm_qissariya', tn: 'Lqissariya', ar: 'القيسارية', fr: 'Le marché couvert (tissus, caftans)', ex: 'L’endroit où Salma passe sa vie.' }
          ],
          exercises: [
            R('salma', 'Chno ghadi {g:telbes|telbsi} f laaers?', 'شنو غادي {g:تلبس|تلبسي} ف العرس؟', 'Qu’est-ce que tu vas mettre au mariage ?', [
              ok('Ma aareftch… {g:jellaba|qaftan}?', 'Je ne sais pas… {g:une djellaba|un caftan} ?'),
              ko('Pyjama!', 'Un pyjama !', 'Salma vient de s’évanouir. Tata Saadia appelle le médecin.'),
              ko('Kanakoul tajine.', 'Je mange un tajine.', 'On parle de vêtements. Le tajine, ce sera après la fête.')]),
            { type: 'meaning', word: 'm_qaftan' },
            { type: 'reverse', word: 'm_mouchkil' },
            R('salma', 'Nmchiw l lqissariya ghedda.', 'نمشيو للقيسارية غدا.', 'On va à la qissariya demain.', [
              ok('Wakha! Ghali?', 'D’accord ! C’est cher ?'),
              ko('Ma kansmaach!', 'Je n’entends pas !', 'Tu fais ta Lalla Hniya ? Salma répète. Plus fort. Devant tout le monde.'),
              ko('Chbaat.', 'Je n’ai plus faim.', 'Personne ne t’a proposé à manger. Pour une fois.')]),
            { type: 'order', tn: 'Wakha walakin ma aandich', fr: 'D’accord, mais je n’en ai pas', tokens: ['Wakha', 'walakin', 'ma', 'aandich'] },
            { type: 'speak', tn: 'Machi mouchkil!', ar: 'ماشي مشكل!', fr: 'Pas de problème !' }
          ],
          mission: { who: 'salma', goal: 'Salma te demande ce que tu vas mettre au mariage : propose une tenue, dis que tu n’en as pas, et accepte d’aller faire les boutiques.', win: 'L’élève a parlé de vêtements, dit qu’il n’en avait pas et accepté d’aller à la qissariya, en marocain.' }
        },
        // ---------------------------------------------------------------- m3e3
        {
          id: 'm3e3', title: 'La nuit du henné',
          pitch: 'La veille du mariage, c’est la nuit du henné. Lalla Hniya t’explique tout. Deux fois. Plus fort.',
          cast: ['hniya', 'salma'],
          scene: [
            { who: 'hniya', tn: 'Lyoum lila d lhenna! Aji, a {petit}, {g:gles|glsi} hdaya.', ar: 'اليوم ليلة د الحنة! أجي، آ {petitAr}، {g:ڭلس|ڭلسي} حدايا.', fr: 'Ce soir, c’est la nuit du henné ! Viens, {petitFr}, assieds-toi à côté de moi.' },
            { who: 'salma', tn: '{g:Mdd|Mddi} yeddik, ghadi ndir lik chwiya d lhenna.', ar: '{g:مد|مدي} يديك، غادي ندير ليك شوية د الحنة.', fr: 'Tends les mains, je vais te mettre un peu de henné.' },
            { who: 'me', tn: 'Wakha, walakin chwiya!', ar: 'واخا، ولكن شوية!', fr: 'D’accord, mais juste un peu !', note: 'Un peu de henné, ça reste orange pendant deux semaines. Tu le raconteras à l’école.' },
            { who: 'hniya', tn: 'Hadi aada dyalna mn zman.', ar: 'هادي عادة ديالنا من زمان.', fr: 'C’est notre tradition depuis toujours.' },
            { who: 'hniya', tn: '{g:Chouf|Choufi} hadik nneggafa, ghadi tlebbes Salma.', ar: '{g:شوف|شوفي} هاديك النڭافة، غادي تلبس سلمى.', fr: 'Regarde cette neggafa, elle va habiller Salma.' },
            { who: 'me', tn: 'Chkoun hiya nneggafa?', ar: 'شكون هي النڭافة؟', fr: 'C’est qui, la neggafa ?' },
            { who: 'salma', tn: 'Hiya lli katlebbes laaroussa w katbeddel liha lqfaten.', ar: 'هي اللي كتلبس العروسة وكتبدل ليها القفاطن.', fr: 'C’est elle qui habille la mariée et lui change ses caftans.', note: 'Une mariée marocaine change de tenue cinq, six, sept fois dans la soirée. La neggafa ne dort pas.' },
            { who: 'me', tn: 'Tbarkallah alik, a Salma! Zwina bzzaf.', ar: 'تبارك الله عليك، آ سلمى! زوينة بزاف.', fr: 'Que Dieu te protège, Salma ! Tu es magnifique.', note: 'Tbarkallah alik : on le dit pour faire un compliment, et pour protéger la personne du mauvais œil.' }
          ],
          words: [
            { id: 'm_lila', tn: 'Lila', ar: 'ليلة', fr: 'Une nuit, une soirée', ex: 'Lila d lhenna = la nuit du henné.' },
            { id: 'm_lhenna', tn: 'Lhenna', ar: 'الحنة', fr: 'Le henné', ex: 'Ndir lik lhenna = je te mets du henné.' },
            { id: 'm_hdaya', tn: 'Hdaya', ar: 'حدايا', fr: 'À côté de moi', ex: 'Gles hdaya = assieds-toi à côté de moi.' },
            { id: 'm_mdd', tn: '{g:Mdd|Mddi}', ar: '{g:مد|مدي}', fr: 'Tends', ex: 'Mdd yeddik = tends les mains.' },
            { id: 'm_yeddik', tn: 'Yeddik', ar: 'يديك', fr: 'Tes mains', ex: 'Yeddi = mes mains.' },
            { id: 'm_aada', tn: 'Aada', ar: 'عادة', fr: 'Une tradition, une habitude', ex: 'Aada dyalna = notre tradition.' },
            { id: 'm_dyalna', tn: 'Dyalna', ar: 'ديالنا', fr: 'À nous, notre', ex: 'Dyali, dyalek, dyalna…' },
            { id: 'm_zman', tn: 'Mn zman', ar: 'من زمان', fr: 'Depuis longtemps, autrefois', ex: 'Hadi aada mn zman.' },
            { id: 'm_neggafa', tn: 'Nneggafa', ar: 'النڭافة', fr: 'La neggafa (habilleuse de la mariée)', ex: 'Avec ڭ : g.' },
            { id: 'm_laaroussa', tn: 'Laaroussa', ar: 'العروسة', fr: 'La mariée', ex: 'Laaris w laaroussa = le marié et la mariée.' },
            { id: 'm_hiyalli', tn: 'Hiya lli…', ar: 'هي اللي…', fr: 'C’est elle qui…', ex: 'Houwa lli = c’est lui qui.' },
            { id: 'm_tbarkallah', tn: 'Tbarkallah alik', ar: 'تبارك الله عليك', fr: 'Bravo, que Dieu te protège', ex: 'Le compliment marocain par excellence.' }
          ],
          exercises: [
            { type: 'meaning', word: 'm_lhenna' },
            R('salma', '{g:Mdd|Mddi} yeddik, ghadi ndir lik chwiya d lhenna.', '{g:مد|مدي} يديك، غادي ندير ليك شوية د الحنة.', 'Tends les mains, je vais te mettre un peu de henné.', [
              ok('Wakha, walakin chwiya!', 'D’accord, mais juste un peu !'),
              ko('Bchhal?', 'C’est combien ?', 'Le henné de la famille est gratuit. Mais Salma retient que tu as demandé.'),
              ko('Tlefft!', 'Je suis perdu{e} !', 'Tu es assis{e} à côté de Lalla Hniya. Difficile de faire plus trouvé.')]),
            { type: 'reverse', word: 'm_laaroussa' },
            R('hniya', '{g:Chouf|Choufi} hadik nneggafa.', '{g:شوف|شوفي} هاديك النڭافة.', 'Regarde cette neggafa.', [
              ok('Chkoun hiya nneggafa?', 'C’est qui, la neggafa ?'),
              ko('Hiya lli katsouq taxi?', 'C’est elle qui conduit le taxi ?', 'Non, ça c’est Si Driss. Et il ne sait pas fermer un caftan.'),
              ko('Hiya lli katbiaa limoun?', 'C’est elle qui vend les oranges ?', 'Ça, c’est Ba Boujemaa. Et il n’est pas invité. Enfin, si : tout le monde est invité.')]),
            { type: 'order', tn: 'Hadi aada dyalna mn zman', fr: 'C’est notre tradition depuis toujours', tokens: ['Hadi', 'aada', 'dyalna', 'mn', 'zman'] },
            { type: 'speak', tn: 'Tbarkallah alik, a Salma!', ar: 'تبارك الله عليك، آ سلمى!', fr: 'Bravo, Salma, tu es magnifique !' }
          ],
          mission: { who: 'salma', goal: 'Pendant la nuit du henné, accepte un peu de henné, demande ce que fait la neggafa et fais un compliment à Salma.', win: 'L’élève a accepté le henné, posé une question sur la tradition et fait un compliment avec tbarkallah, en marocain.' }
        },
        // ---------------------------------------------------------------- m3e4
        {
          id: 'm3e4', title: 'Le grand soir',
          pitch: 'L’orchestre joue, la mariée arrive sur l’amariya, et Tata Saadia a décidé que tu allais danser.',
          cast: ['yassine', 'saadia', 'salma'],
          scene: [
            { who: 'yassine', tn: '{g:Smaa|Smaai} lmousiqa! Yallah nchtho!', ar: '{g:سمع|سمعي} الموسيقى! يالله نشطحو!', fr: 'Écoute la musique ! Allez, on danse !' },
            { who: 'me', tn: 'La, ma kanaarafch nchteh!', ar: 'لا، ما كنعرفش نشطح!', fr: 'Non, je ne sais pas danser !' },
            { who: 'saadia', tn: 'Ma {g:kataaref|kataarfi}ch?! Hchouma! {g:Nod|Nodi} maaya!', ar: 'ما {g:كتعرف|كتعرفي}ش؟! حشومة! {g:نوض|نوضي} معايا!', fr: 'Tu ne sais pas ?! La honte ! Lève-toi, viens avec moi !' },
            { who: 'me', tn: 'Wakha, walakin bchwiya!', ar: 'واخا، ولكن بشوية!', fr: 'D’accord, mais doucement !' },
            { who: 'yassine', tn: '{g:Chouf|Choufi}, jaw b laaroussa f lamariya!', ar: '{g:شوف|شوفي}، جاو بالعروسة ف العمارية!', fr: 'Regarde, ils arrivent avec la mariée sur l’amariya !', note: 'L’amariya : un palanquin doré. Quatre hommes portent la mariée au-dessus des invités.' },
            { who: 'me', tn: 'Mbrouk, a Salma! Llah ykemmel b lkhir!', ar: 'مبروك، آ سلمى! الله يكمل بالخير!', fr: 'Félicitations, Salma ! Que Dieu vous comble de bonheur !' },
            { who: 'salma', tn: 'Llah ybarek fik! Aaqbal lik!', ar: 'الله يبارك فيك! عقبال ليك!', fr: 'Merci ! À ton tour bientôt !', note: '« Aaqbal lik » : que ce soit bientôt ton tour. Encore cette question.' },
            { who: 'me', tn: 'Amin, inchallah… mn baad!', ar: 'آمين، إن شاء الله… من بعد!', fr: 'Amen, si Dieu le veut… plus tard !' }
          ],
          words: [
            { id: 'm_smaa', tn: '{g:Smaa|Smaai}', ar: '{g:سمع|سمعي}', fr: 'Écoute', ex: 'Smaa lmousiqa = écoute la musique.' },
            { id: 'm_lmousiqa', tn: 'Lmousiqa', ar: 'الموسيقى', fr: 'La musique', ex: 'Lmousiqa chaabiya = la musique populaire des fêtes.' },
            { id: 'm_nchteh', tn: 'Nchteh', ar: 'نشطح', fr: '(Que) je danse', ex: 'Kanchteh = je danse ; nchtho = on danse.' },
            { id: 'm_kanaaraf', tn: 'Ma kanaarafch', ar: 'ما كنعرفش', fr: 'Je ne sais pas (faire)', ex: 'Kanaaraf = je sais.' },
            { id: 'm_hchouma', tn: 'Hchouma', ar: 'حشومة', fr: 'La honte !', ex: 'Le mot préféré des tatas.' },
            { id: 'm_nod', tn: '{g:Nod|Nodi}', ar: '{g:نوض|نوضي}', fr: 'Lève-toi', ex: 'Nod maaya = lève-toi, viens avec moi.' },
            { id: 'm_maaya', tn: 'Maaya', ar: 'معايا', fr: 'Avec moi', ex: 'Maak = avec toi.' },
            { id: 'm_lamariya', tn: 'Lamariya', ar: 'العمارية', fr: 'L’amariya (palanquin de la mariée)', ex: 'La mariée y est portée comme une reine.' },
            { id: 'm_ykemmel', tn: 'Llah ykemmel b lkhir', ar: 'الله يكمل بالخير', fr: 'Que Dieu vous comble (vœu de mariage)', ex: 'Après mbrouk, c’est parfait.' },
            { id: 'm_aqbal', tn: 'Aaqbal lik', ar: 'عقبال ليك', fr: 'À ton tour bientôt', ex: 'On te le dira toute la soirée.' },
            { id: 'm_amin', tn: 'Amin', ar: 'آمين', fr: 'Amen', ex: 'La réponse à toutes les bénédictions.' }
          ],
          exercises: [
            R('yassine', 'Yallah nchtho!', 'يالله نشطحو!', 'Allez, on danse !', [
              ok('La, ma kanaarafch nchteh!', 'Non, je ne sais pas danser !'),
              ko('Bchhal kilo?', 'C’est combien le kilo ?', 'Tu n’es pas au marché, tu es au mariage. Même si Ba Boujemaa danse au fond.'),
              ko('Ghedda inchallah.', 'Demain, si Dieu le veut.', 'Demain, la fête sera finie. Enfin… les fêtes marocaines durent trois jours.')]),
            { type: 'meaning', word: 'm_hchouma' },
            { type: 'reverse', word: 'm_nod' },
            R('salma', 'Llah ybarek fik! Aaqbal lik!', 'الله يبارك فيك! عقبال ليك!', 'Merci ! À ton tour bientôt !', [
              ok('Amin, inchallah… mn baad!', 'Amen, si Dieu le veut… plus tard !'),
              ko('Ana {g:mzewwej|mzewwja} aachra d lmerrat!', 'Je suis marié{e} dix fois !', 'Tata Saadia a tout entendu. Elle veut les noms.'),
              ko('Choukran, Si Driss.', 'Merci, Si Driss.', 'C’est Salma, la mariée. Si Driss est au buffet.')]),
            { type: 'order', tn: 'Mbrouk Llah ykemmel b lkhir', fr: 'Félicitations, que Dieu vous comble', tokens: ['Mbrouk', 'Llah', 'ykemmel', 'b', 'lkhir'] },
            { type: 'speak', tn: 'Mbrouk, a Salma! Llah ykemmel b lkhir!', ar: 'مبروك، آ سلمى! الله يكمل بالخير!', fr: 'Félicitations, Salma ! Que Dieu vous comble !' }
          ],
          mission: { who: 'yassine', goal: 'Au mariage, Yassine veut te faire danser : refuse d’abord, accepte doucement, puis félicite la mariée.', win: 'L’élève a refusé puis accepté de danser et félicité la mariée avec un vœu, en marocain.' }
        },
        // ---------------------------------------------------------------- m3e5
        {
          id: 'm3e5', title: 'Raconte-toi',
          pitch: 'À table, Lalla Naïma est assise à côté de toi. Elle a deux heures et cinquante questions.',
          cast: ['naima'],
          scene: [
            { who: 'naima', tn: '{g:Aawed|Aawdi} liya, chno {g:katdir|katdiri} f Fransa?', ar: '{g:عاود|عاودي} ليا، شنو {g:كتدير|كتديري} ف فرانسا؟', fr: 'Raconte-moi, qu’est-ce que tu fais en France ?' },
            { who: 'me', tn: 'Kanqra, w kanlaab lkoura.', ar: 'كنقرا، وكنلعب الكورة.', fr: 'J’étudie, et je joue au foot.' },
            { who: 'naima', tn: 'W fin {g:katskon|katskni}?', ar: 'وفين {g:كتسكن|كتسكني}؟', fr: 'Et tu habites où ?' },
            { who: 'me', tn: 'Kanskon f Lyon, maa waldiya.', ar: 'كنسكن ف ليون، مع والديا.', fr: 'J’habite à Lyon, avec mes parents.' },
            { who: 'naima', tn: 'Wach {g:katakoul|katakli} mzyan temma?', ar: 'واش {g:كتاكل|كتاكلي} مزيان تما؟', fr: 'Tu manges bien, là-bas ?' },
            { who: 'me', tn: 'Iyeh, walakin makla d Tata hiya lahsen!', ar: 'إيه، ولكن الماكلة د طاطا هي الأحسن!', fr: 'Oui, mais la cuisine de Tata, c’est la meilleure !', note: 'Tata Saadia était juste derrière toi. Tu viens de gagner une part de pastilla en plus.' },
            { who: 'naima', tn: 'W wach katbghi lmghrib?', ar: 'وواش كتبغي المغرب؟', fr: 'Et tu aimes le Maroc ?' },
            { who: 'me', tn: 'Kanmout aalih! Kolla aam kanji.', ar: 'كنموت عليه! كل عام كنجي.', fr: 'Je l’adore ! Je viens chaque année.' },
            { who: 'naima', tn: 'Tbarkallah! {g:Nta|Nti} {g:mghribi|mghribiya} mn lqelb!', ar: 'تبارك الله! {g:نتا|نتي} {g:مغربي|مغربية} من القلب!', fr: 'Bravo ! Tu es marocain{e} de cœur !' }
          ],
          words: [
            { id: 'm_katdir', tn: 'Chno {g:katdir|katdiri}?', ar: 'شنو {g:كتدير|كتديري}؟', fr: 'Qu’est-ce que tu fais ?', ex: 'Kandir = je fais.' },
            { id: 'm_kanlaab', tn: 'Kanlaab', ar: 'كنلعب', fr: 'Je joue', ex: 'Kanlaab lkoura = je joue au foot.' },
            { id: 'm_lkoura', tn: 'Lkoura', ar: 'الكورة', fr: 'Le foot (le ballon)', ex: 'Le sujet préféré de Yassine.' },
            { id: 'm_katskon', tn: 'Fin {g:katskon|katskni}?', ar: 'فين {g:كتسكن|كتسكني}؟', fr: 'Tu habites où ?', ex: 'Kanskon f… = j’habite à…' },
            { id: 'm_waldiya', tn: 'Waldiya', ar: 'والديا', fr: 'Mes parents', ex: 'Lwalidin = les parents.' },
            { id: 'm_katakoul', tn: '{g:Katakoul|Katakli}', ar: '{g:كتاكل|كتاكلي}', fr: 'Tu manges', ex: 'Kanakoul = je mange.' },
            { id: 'm_makla', tn: 'Lmakla', ar: 'الماكلة', fr: 'La nourriture, la cuisine', ex: 'Makla d Tata = la cuisine de Tata.' },
            { id: 'm_lahsen', tn: 'Lahsen', ar: 'الأحسن', fr: 'Le meilleur', ex: 'Ahsen = mieux.' },
            { id: 'm_katbghi', tn: 'Katbghi', ar: 'كتبغي', fr: 'Tu aimes', ex: 'Kanbghi = j’aime. Kanbghik = je t’aime.' },
            { id: 'm_kanmout', tn: 'Kanmout aalih', ar: 'كنموت عليه', fr: 'Je l’adore', ex: 'Mot à mot : « je meurs pour lui ».' },
            { id: 'm_kollaaam', tn: 'Kolla aam', ar: 'كل عام', fr: 'Chaque année', ex: 'Kolla nhar = chaque jour.' },
            { id: 'm_mghribi', tn: 'Mghribi / mghribiya', ar: 'مغربي / مغربية', fr: 'Marocain / marocaine', ex: 'Lmaghrib = le Maroc.' }
          ],
          exercises: [
            R('naima', 'Chno {g:katdir|katdiri} f Fransa?', 'شنو {g:كتدير|كتديري} ف فرانسا؟', 'Qu’est-ce que tu fais en France ?', [
              ok('Kanqra, w kanlaab lkoura.', 'J’étudie, et je joue au foot.'),
              ko('Ghadi nchteh!', 'Je vais danser !', 'Elle demande ta vie en France. Mais elle note : tu danses.'),
              ko('Ma kansmaach.', 'Je n’entends pas.', 'Lalla Naïma est assise à 10 cm de toi. Elle ne te croit pas.')]),
            { type: 'meaning', word: 'm_waldiya' },
            { type: 'reverse', word: 'm_kanmout' },
            R('naima', 'Wach katbghi lmghrib?', 'واش كتبغي المغرب؟', 'Tu aimes le Maroc ?', [
              ok('Kanmout aalih! Kolla aam kanji.', 'Je l’adore ! Je viens chaque année.'),
              ko('Safi, chbaat.', 'C’est bon, je n’ai plus faim.', 'Elle te demande si tu aimes le pays, pas le dessert.'),
              ko('La, mazal.', 'Non, pas encore.', 'Pas encore ?! Tout le mariage s’est retourné.')]),
            { type: 'order', tn: 'Kanskon f Lyon maa waldiya', fr: 'J’habite à Lyon avec mes parents', tokens: ['Kanskon', 'f', 'Lyon', 'maa', 'waldiya'] },
            { type: 'speak', tn: 'Makla d Tata hiya lahsen!', ar: 'الماكلة د طاطا هي الأحسن!', fr: 'La cuisine de Tata, c’est la meilleure !' }
          ],
          mission: { who: 'naima', goal: 'Lalla Naïma veut tout savoir : dis-lui ce que tu fais en France, où tu habites, et si tu aimes le Maroc.', win: 'L’élève a parlé de ses activités, de sa ville et de son lien avec le Maroc, au présent, en marocain.' }
        }
      ]
    },
    // =====================================================================================
    // NIVEAU 4 — Négociateur de la médina
    // =====================================================================================
    {
      id: 'm4', num: 4, name: 'Négociateur de la médina',
      goal: 'Négocier, te soigner, débattre de foot et voyager seul{e}',
      boss: { id: 'm4boss', title: 'L’épreuve de la médina', pitch: '12 questions. Il en faut 8 pour que Si Abdeslam te fasse « le prix de la famille ».', count: 12, pass: 8 },
      episodes: [
        // ---------------------------------------------------------------- m4e1
        {
          id: 'm4e1', title: 'Les babouches de la médina de Rabat',
          pitch: 'Dans la médina de Rabat, près des Oudayas, Si Abdeslam vend des babouches. Il annonce un prix. Tu en proposes la moitié. Le jeu commence.',
          cast: ['abdeslam'],
          scene: [
            { who: 'abdeslam', tn: 'Mrehba, {g:dkhol|dkhli}! {g:Chouf|Choufi} ghir, bla flous!', ar: 'مرحبا، {g:دخل|دخلي}! {g:شوف|شوفي} غير، بلا فلوس!', fr: 'Bienvenue, entre ! Regarde seulement, c’est gratuit !' },
            { who: 'me', tn: 'Bchhal had lbelgha?', ar: 'بشحال هاد البلغة؟', fr: 'C’est combien, ces babouches ?' },
            { who: 'abdeslam', tn: 'Hadi? Mitayn dirham. Jild beldi!', ar: 'هادي؟ ميتين درهم. جلد بلدي!', fr: 'Celles-ci ? Deux cents dirhams. Du vrai cuir traditionnel !' },
            { who: 'me', tn: 'Mitayn?! Bzzaf! Nkhelless lik mya.', ar: 'ميتين؟! بزاف! نخلص ليك مية.', fr: 'Deux cents ?! C’est trop ! Je te paie cent.' },
            { who: 'abdeslam', tn: 'Mya?! Ana aandi drari!', ar: 'مية؟! أنا عندي الدراري!', fr: 'Cent ?! Mais j’ai des enfants à nourrir !', note: 'Il dit ça à chaque client. Ses enfants ont 40 ans et un magasin chacun.' },
            { who: 'me', tn: 'Mya w khamsin, w safi.', ar: 'مية وخمسين، وصافي.', fr: 'Cent cinquante, et c’est tout.' },
            { who: 'abdeslam', tn: 'Wakha, ghir hit {g:nta|nti} {g:drif|drifa}.', ar: 'واخا، غير حيت {g:نتا|نتي} {g:ظريف|ظريفة}.', fr: 'D’accord, seulement parce que tu es gentil{le}.', note: 'Bravo : à la médina, on ne paie jamais le premier prix. Mais on reste toujours poli.' },
            { who: 'me', tn: 'Barak llahou fik! Bslama.', ar: 'بارك الله فيك! بسلامة.', fr: 'Merci beaucoup ! Au revoir.' }
          ],
          words: [
            { id: 'm_dkhol', tn: '{g:Dkhol|Dkhli}', ar: '{g:دخل|دخلي}', fr: 'Entre', ex: 'Khrej = sors.' },
            { id: 'm_blaflous', tn: 'Bla flous', ar: 'بلا فلوس', fr: 'Gratuit (sans argent)', ex: 'Flous = l’argent.' },
            { id: 'm_had', tn: 'Had', ar: 'هاد', fr: 'Ce, cette, ces', ex: 'Had lbelgha = ces babouches. Toujours avec l’article.' },
            { id: 'm_mitayn', tn: 'Mitayn', ar: 'ميتين', fr: 'Deux cents', ex: 'Mya = cent. Mitayn = deux cents.' },
            { id: 'm_beldi', tn: 'Beldi', ar: 'بلدي', fr: 'Traditionnel, du pays', ex: 'Djaj beldi = poulet fermier.' },
            { id: 'm_jild', tn: 'Jild', ar: 'جلد', fr: 'Cuir, peau', ex: 'Jild beldi = cuir traditionnel.' },
            { id: 'm_nkhellesslik', tn: 'Nkhelless lik', ar: 'نخلص ليك', fr: 'Je te paie', ex: 'Nkhelless lik mya = je te paie cent.' },
            { id: 'm_drari', tn: 'Drari', ar: 'الدراري', fr: 'Les enfants, les gamins', ex: 'Aandi drari = j’ai des enfants.' },
            { id: 'm_khamsin', tn: 'Khamsin', ar: 'خمسين', fr: 'Cinquante', ex: 'Mya w khamsin = cent cinquante.' },
            { id: 'm_hit', tn: 'Hit', ar: 'حيت', fr: 'Parce que', ex: 'Ghir hit = seulement parce que.' },
            { id: 'm_drif', tn: '{g:Drif|Drifa}', ar: '{g:ظريف|ظريفة}', fr: 'Gentil, sympa', ex: 'Nass drifin = des gens sympas.' }
          ],
          exercises: [
            { type: 'meaning', word: 'm_beldi' },
            R('abdeslam', 'Mitayn dirham. Jild beldi!', 'ميتين درهم. جلد بلدي!', 'Deux cents dirhams. Du vrai cuir !', [
              ok('Bzzaf! Nkhelless lik mya.', 'C’est trop ! Je te paie cent.'),
              ko('Wakha, aatini jouj!', 'D’accord, donne-m’en deux !', 'Tu as payé le premier prix ?! Si Abdeslam ferme la boutique pour fêter ça.'),
              ko('Kanbghik, a Lalla.', 'Je t’aime, Lalla.', 'Ce n’est pas ta grand-mère. Il est flatté, mais le prix ne bouge pas.')]),
            { type: 'reverse', word: 'm_hit' },
            { type: 'listen', word: 'm_mitayn' },
            R('abdeslam', 'Mya?! Ana aandi drari!', 'مية؟! أنا عندي الدراري!', 'Cent ?! J’ai des enfants à nourrir !', [
              ok('Mya w khamsin, w safi.', 'Cent cinquante, et c’est tout.'),
              ko('Mbrouk!', 'Félicitations !', 'Tu le félicites pour ses enfants. Il est ému. Le prix remonte à deux cents.'),
              ko('Fin ttran?', 'Où est le train ?', 'Partir en pleine négociation ? Pas mal comme technique, mais dis-le en marocain poli.')]),
            { type: 'order', tn: 'Bchhal had lbelgha', fr: 'C’est combien, ces babouches ?', tokens: ['Bchhal', 'had', 'lbelgha'] },
            { type: 'speak', tn: 'Mya w khamsin, w safi.', ar: 'مية وخمسين، وصافي.', fr: 'Cent cinquante, et c’est tout.' }
          ],
          mission: { who: 'abdeslam', goal: 'Achète des babouches à Si Abdeslam : demande le prix, trouve-le trop cher, fais une contre-offre et mets-vous d’accord poliment.', win: 'L’élève a demandé le prix, négocié avec un chiffre, trouvé un accord et remercié, en marocain.' }
        },
        // ---------------------------------------------------------------- m4e2
        {
          id: 'm4e2', title: 'Le hammam',
          pitch: 'Tata Saadia t’emmène au hammam. Mi Zahra, la kessala, va te frotter. Fort. Très fort.',
          cast: ['saadia', 'zahra'],
          scene: [
            { who: 'saadia', tn: 'Lyoum nhar lhammam! {g:Jib|Jibi} lkis w ssabon beldi.', ar: 'اليوم نهار الحمام! {g:جيب|جيبي} الكيس والصابون البلدي.', fr: 'Aujourd’hui, c’est jour de hammam ! Apporte le gant et le savon noir.' },
            { who: 'me', tn: 'Wach skhoun bzzaf?', ar: 'واش سخون بزاف؟', fr: 'C’est très chaud ?' },
            { who: 'zahra', tn: 'Mrehba! {g:Gles|Glsi} hna, ghadi nhekk lik.', ar: 'مرحبا! {g:ڭلس|ڭلسي} هنا، غادي نحك ليك.', fr: 'Bienvenue ! Assieds-toi ici, je vais te frotter.' },
            { who: 'me', tn: 'Aaa! Bchwiya, a Mi Zahra!', ar: 'آآآ! بشوية، آ مي زهرة!', fr: 'Aïe ! Doucement, Mi Zahra !' },
            { who: 'zahra', tn: 'Bchwiya? {g:Chouf|Choufi} lwsakh kamel!', ar: 'بشوية؟ {g:شوف|شوفي} الوسخ كامل!', fr: 'Doucement ? Regarde toute cette saleté !', note: 'Tu croyais être propre. Mi Zahra vient de te prouver le contraire.' },
            { who: 'saadia', tn: 'Daba {g:wlliti nqi|wlliti nqiya}!', ar: 'دابا {g:وليتي نقي|وليتي نقية}!', fr: 'Maintenant, tu es tout{e} propre !' },
            { who: 'me', tn: 'Choukran, a Mi Zahra. Daba ana {g:jdid|jdida}!', ar: 'شكرا، آ مي زهرة. دابا أنا {g:جديد|جديدة}!', fr: 'Merci, Mi Zahra. Maintenant, je suis comme {g:neuf|neuve} !' },
            { who: 'zahra', tn: 'Bssahtek! Wallah ma kayn bhal lhammam lmghribi.', ar: 'بصحتك! والله ما كاين بحال الحمام المغربي.', fr: 'À ta santé ! Rien ne vaut le hammam marocain.' }
          ],
          words: [
            { id: 'm_lhammam', tn: 'Lhammam', ar: 'الحمام', fr: 'Le hammam', ex: 'Nhar lhammam = jour de hammam.' },
            { id: 'm_lkis', tn: 'Lkis', ar: 'الكيس', fr: 'Le gant de gommage', ex: 'Avec lui, on enlève une couche de peau. Au moins.' },
            { id: 'm_ssabon', tn: 'Ssabon beldi', ar: 'الصابون البلدي', fr: 'Le savon noir', ex: 'Beldi = traditionnel.' },
            { id: 'm_jib', tn: '{g:Jib|Jibi}', ar: '{g:جيب|جيبي}', fr: 'Apporte', ex: 'Jib lkis = apporte le gant.' },
            { id: 'm_skhoun', tn: 'Skhoun', ar: 'سخون', fr: 'Chaud', ex: 'Bared = froid.' },
            { id: 'm_nhekk', tn: 'Nhekk', ar: 'نحك', fr: 'Je frotte', ex: 'Ghadi nhekk lik = je vais te frotter.' },
            { id: 'm_lwsakh', tn: 'Lwsakh', ar: 'الوسخ', fr: 'La saleté', ex: 'Nqi = propre.' },
            { id: 'm_kamel', tn: 'Kamel', ar: 'كامل', fr: 'Tout, entier', ex: 'Lwsakh kamel = toute la saleté.' },
            { id: 'm_wlliti', tn: 'Wlliti', ar: 'وليتي', fr: 'Tu es devenu(e)', ex: 'Wllit = je suis devenu.' },
            { id: 'm_nqi', tn: '{g:Nqi|Nqiya}', ar: '{g:نقي|نقية}', fr: 'Propre', ex: 'Daba wlliti nqi.' },
            { id: 'm_makaynbhal', tn: 'Ma kayn bhal…', ar: 'ما كاين بحال…', fr: 'Rien ne vaut…', ex: 'Ma kayn bhal ddar = rien ne vaut la maison.' }
          ],
          exercises: [
            { type: 'meaning', word: 'm_lkis' },
            R('zahra', '{g:Gles|Glsi} hna, ghadi nhekk lik.', '{g:ڭلس|ڭلسي} هنا، غادي نحك ليك.', 'Assieds-toi ici, je vais te frotter.', [
              ok('Wakha, walakin bchwiya!', 'D’accord, mais doucement !'),
              ko('Nqess chwiya!', 'Baisse un peu le prix !', 'On n’est pas au marché. Mais elle frotte un peu moins fort, par pitié.'),
              ko('Yallah nchtho!', 'Allez, on danse !', 'Danser au hammam, sur un sol mouillé ? Tata Saadia refuse.')]),
            { type: 'reverse', word: 'm_skhoun' },
            { type: 'listen', word: 'm_nhekk' },
            R('saadia', 'Daba {g:wlliti nqi|wlliti nqiya}!', 'دابا {g:وليتي نقي|وليتي نقية}!', 'Maintenant, tu es tout{e} propre !', [
              ok('Choukran, a Tata. Ma kayn bhal lhammam!', 'Merci, tata. Rien ne vaut le hammam !'),
              ko('Ma fhemtch, Si Driss.', 'Je n’ai pas compris, Si Driss.', 'Si Driss n’a rien à faire ici. Il attend dehors avec le taxi.'),
              ko('Ana {g:aayan|aayana}… ghadi nmout!', 'Je suis fatigué{e}… je vais mourir !', 'Un peu dramatique. Mais au hammam, on comprend.')]),
            { type: 'order', tn: 'Wach skhoun bzzaf', fr: 'C’est très chaud ?', tokens: ['Wach', 'skhoun', 'bzzaf'] },
            { type: 'speak', tn: 'Bchwiya, a Mi Zahra!', ar: 'بشوية، آ مي زهرة!', fr: 'Doucement, Mi Zahra !' }
          ],
          mission: { who: 'zahra', goal: 'Au hammam avec Mi Zahra : demande si c’est très chaud, demande-lui d’y aller doucement, puis remercie-la.', win: 'L’élève a parlé de la chaleur, demandé de frotter doucement et remercié, en marocain.' }
        },
        // ---------------------------------------------------------------- m4e3
        {
          id: 'm4e3', title: 'Chez la docteure Leïla',
          pitch: 'Trop de cornes de gazelle au mariage. La docteure Leïla a déjà compris. Toi, pas encore.',
          cast: ['leila'],
          scene: [
            { who: 'leila', tn: 'Mrehba! Ach kayderrek?', ar: 'مرحبا! آش كيضرك؟', fr: 'Bonjour ! Qu’est-ce qui te fait mal ?' },
            { who: 'me', tn: 'Kayderrni rassi w kerchi.', ar: 'كيضرني راسي وكرشي.', fr: 'J’ai mal à la tête et au ventre.' },
            { who: 'leila', tn: 'Mn imta bdat? W wach aandek skhana?', ar: 'من إمتى بدات؟ وواش عندك السخانة؟', fr: 'Depuis quand ? Et tu as de la fièvre ?' },
            { who: 'me', tn: 'Mn lbareh. Klit bzzaf d lhalwa f laaers…', ar: 'من البارح. كليت بزاف د الحلوة ف العرس…', fr: 'Depuis hier. J’ai mangé beaucoup de gâteaux au mariage…' },
            { who: 'leila', tn: 'Ah, bayna! Khassek {g:trtah|trtahi}, w {g:chreb|chrbi} lma bzzaf.', ar: 'آه، باينة! خاصك {g:ترتاح|ترتاحي}، و{g:شرب|شربي} الما بزاف.', fr: 'Ah, ça se voit ! Tu dois te reposer, et boire beaucoup d’eau.' },
            { who: 'leila', tn: 'W ma {g:takoulch|taklich} lhalwa jouj iyam!', ar: 'وما {g:تاكلش|تاكليش} الحلوة جوج أيام!', fr: 'Et pas de gâteaux pendant deux jours !' },
            { who: 'me', tn: 'Jouj iyam bla halwa?! Ewa, ghadi nmout!', ar: 'جوج أيام بلا حلوة؟! إيوا، غادي نموت!', fr: 'Deux jours sans gâteaux ?! Alors là, je vais mourir !' },
            { who: 'leila', tn: 'La, ma ghadich {g:tmout|tmouti}. Ghadi {g:tbra|tbray}, inchallah.', ar: 'لا، ما غاديش {g:تموت|تموتي}. غادي {g:تبرا|تبراي}، إن شاء الله.', fr: 'Non, tu ne vas pas mourir. Tu vas guérir, si Dieu le veut.', note: 'Ma ghadich = je (tu) ne vais pas. La négation du futur au Maroc.' }
          ],
          words: [
            { id: 'm_kayderrek', tn: 'Ach kayderrek?', ar: 'آش كيضرك؟', fr: 'Qu’est-ce qui te fait mal ?', ex: 'Kayderrni = ça me fait mal.' },
            { id: 'm_rassi', tn: 'Rassi', ar: 'راسي', fr: 'Ma tête', ex: 'Ras = tête.' },
            { id: 'm_kerchi', tn: 'Kerchi', ar: 'كرشي', fr: 'Mon ventre', ex: 'Kerch = ventre.' },
            { id: 'm_mnimta', tn: 'Mn imta?', ar: 'من إمتى؟', fr: 'Depuis quand ?', ex: 'Mnin = d’où. Mn imta = depuis quand.' },
            { id: 'm_skhana', tn: 'Skhana', ar: 'السخانة', fr: 'Fièvre', ex: 'Aandi skhana = j’ai de la fièvre.' },
            { id: 'm_klit', tn: 'Klit', ar: 'كليت', fr: 'J’ai mangé', ex: 'Kliti = tu as mangé (garçon ou fille).' },
            { id: 'm_lhalwa', tn: 'Lhalwa', ar: 'الحلوة', fr: 'Les gâteaux, les douceurs', ex: 'Bzzaf d lhalwa = beaucoup de gâteaux.' },
            { id: 'm_trtah', tn: '{g:Trtah|Trtahi}', ar: '{g:ترتاح|ترتاحي}', fr: 'Te reposer', ex: 'Khassek trtah (garçon), khassek trtahi (fille) = tu dois te reposer.' },
            { id: 'm_chreb', tn: '{g:Chreb|Chrbi}', ar: '{g:شرب|شربي}', fr: 'Bois', ex: 'Chreb lma = bois de l’eau.' },
            { id: 'm_matakoulch', tn: 'Ma {g:takoulch|taklich}', ar: 'ما {g:تاكلش|تاكليش}', fr: 'Ne mange pas', ex: 'Pour interdire : ma … ch, sans ka-.' },
            { id: 'm_iyam', tn: 'Iyam', ar: 'أيام', fr: 'Jours', ex: 'Jouj iyam = deux jours.' },
            { id: 'm_tbra', tn: 'Ghadi {g:tbra|tbray}', ar: 'غادي {g:تبرا|تبراي}', fr: 'Tu vas guérir', ex: 'Llah ychafik = que Dieu te guérisse.' },
            { id: 'm_maghadich', tn: 'Ma ghadich', ar: 'ما غاديش', fr: 'Je ne vais pas (futur négatif)', ex: 'Ma ghadich nmchi = je ne vais pas y aller.' }
          ],
          exercises: [
            R('leila', 'Ach kayderrek?', 'آش كيضرك؟', 'Qu’est-ce qui te fait mal ?', [
              ok('Kayderrni rassi w kerchi.', 'J’ai mal à la tête et au ventre.'),
              ko('Mitayn dirham.', 'Deux cents dirhams.', 'Tu annonces un prix à la docteure ? Tu es resté{e} trop longtemps à la médina.'),
              ko('Kanmout aala lmghrib!', 'J’adore le Maroc !', 'C’est gentil, mais elle voulait savoir où tu as mal.')]),
            { type: 'meaning', word: 'm_skhana' },
            { type: 'reverse', word: 'm_kerchi' },
            R('leila', 'Mn imta bdat?', 'من إمتى بدات؟', 'Depuis quand ?', [
              ok('Mn lbareh.', 'Depuis hier.'),
              ko('Mn Fransa.', 'De France.', 'Mn Fransa, c’est d’où tu viens. Mn imta, c’est depuis quand.'),
              ko('Ghedda.', 'Demain.', 'Tu auras mal demain ? La docteure Leïla est impressionnée par tes prévisions.')]),
            { type: 'listen', word: 'm_klit' },
            { type: 'order', tn: 'Klit bzzaf d lhalwa f laaers', fr: 'J’ai mangé beaucoup de gâteaux au mariage', tokens: ['Klit', 'bzzaf', 'd', 'lhalwa', 'f', 'laaers'] },
            { type: 'speak', tn: 'Kayderrni rassi w kerchi.', ar: 'كيضرني راسي وكرشي.', fr: 'J’ai mal à la tête et au ventre.' }
          ],
          mission: { who: 'leila', goal: 'Chez la docteure Leïla : explique où tu as mal, depuis quand, et ce que tu as mangé, puis écoute ses conseils.', win: 'L’élève a décrit ses douleurs, dit depuis quand et compris au moins un conseil, en marocain.' }
        },
        // ---------------------------------------------------------------- m4e4
        {
          id: 'm4e4', title: 'Le derby de Casablanca',
          pitch: 'Raja contre Wydad. Si Driss est pour le Raja, Yassine pour le Wydad. Et toi, au milieu, tu dois choisir.',
          cast: ['yassine', 'driss'],
          scene: [
            { who: 'yassine', tn: 'Lyoum derby! Wydad ghadi yrbeh!', ar: 'اليوم الديربي! الوداد غادي يربح!', fr: 'Aujourd’hui, c’est le derby ! Le Wydad va gagner !' },
            { who: 'driss', tn: 'Wydad? La, a sahbi, Raja hiya lli ghadi trbeh!', ar: 'الوداد؟ لا، آ صاحبي، الرجاء هي اللي غادي تربح!', fr: 'Le Wydad ? Non, mon ami, c’est le Raja qui va gagner !' },
            { who: 'me', tn: 'Chkoun ahsen, Raja wella Wydad?', ar: 'شكون أحسن، الرجاء ولا الوداد؟', fr: 'Qui est le meilleur, le Raja ou le Wydad ?', note: 'La question la plus dangereuse de Casablanca. Tu viens de la poser à voix haute.' },
            { who: 'yassine', tn: '{g:Goul|Gouli} Wydad, w ghadi nchri lik glas!', ar: '{g:ڭول|ڭولي} الوداد، وغادي نشري ليك ڭلاص!', fr: 'Dis « Wydad », et je t’achète une glace !' },
            { who: 'driss', tn: '{g:Goul|Gouli} Raja, w ghadi nwsslek fabor!', ar: '{g:ڭول|ڭولي} الرجاء، وغادي نوصلك فابور!', fr: 'Dis « Raja », et je te ramène gratuitement en taxi !' },
            { who: 'me', tn: 'Ana… kanbghi Kaza kamla!', ar: 'أنا… كنبغي كازا كاملة!', fr: 'Moi… j’aime tout Casa !', note: 'Diplomate. Tu n’auras ni la glace ni le taxi gratuit, mais tout le monde t’aime.' },
            { who: 'yassine', tn: 'Ewa, {g:nta|nti} {g:mkhalwed|mkhalwda}!', ar: 'إيوا، {g:نتا|نتي} {g:مخلوض|مخلوضة}!', fr: 'Eh bien, toi, tu es un vrai mélange !', note: 'Mkhalwed : mélangé. Un compliment (presque).' },
            { who: 'driss', tn: 'Safi, lmohim nchoufou lmatch maa baadyatna.', ar: 'صافي، المهم نشوفو الماتش مع بعضياتنا.', fr: 'Bon, l’important, c’est qu’on regarde le match ensemble.' }
          ],
          words: [
            { id: 'm_derby', tn: 'Derby', ar: 'الديربي', fr: 'Le derby', ex: 'À Casa : Raja contre Wydad.' },
            { id: 'm_yrbeh', tn: 'Ghadi yrbeh', ar: 'غادي يربح', fr: 'Il va gagner', ex: 'Rbeh = gagner. Khser = perdre.' },
            { id: 'm_sahbi', tn: 'Sahbi', ar: 'صاحبي', fr: 'Mon ami', ex: 'Sahbti = mon amie.' },
            { id: 'm_ahsen', tn: 'Chkoun ahsen?', ar: 'شكون أحسن؟', fr: 'Qui est le meilleur ?', ex: 'Ahsen = mieux, meilleur.' },
            { id: 'm_goul', tn: '{g:Goul|Gouli}', ar: '{g:ڭول|ڭولي}', fr: 'Dis', ex: 'Avec ڭ. Gal = il a dit.' },
            { id: 'm_nchri', tn: 'Nchri', ar: 'نشري', fr: 'J’achète', ex: 'Nchri lik = je t’achète.' },
            { id: 'm_nwsslek', tn: 'Nwsslek', ar: 'نوصلك', fr: 'Je te dépose, je t’emmène', ex: 'Wselna = on est arrivés.' },
            { id: 'm_kamla', tn: 'Kamla', ar: 'كاملة', fr: 'Entière, toute', ex: 'Kaza kamla = tout Casa.' },
            { id: 'm_kanbghi', tn: 'Kanbghi', ar: 'كنبغي', fr: 'J’aime', ex: 'Kanbghi atay = j’aime le thé.' },
            { id: 'm_lmohim', tn: 'Lmohim', ar: 'المهم', fr: 'L’important', ex: 'Lmohim ssaha = l’important, c’est la santé.' },
            { id: 'm_baadyatna', tn: 'Maa baadyatna', ar: 'مع بعضياتنا', fr: 'Ensemble (entre nous)', ex: 'Nakoulou maa baadyatna = on mange ensemble.' }
          ],
          exercises: [
            { type: 'meaning', word: 'm_lmohim' },
            R('yassine', 'Lyoum derby! Wydad ghadi yrbeh!', 'اليوم الديربي! الوداد غادي يربح!', 'Aujourd’hui, c’est le derby ! Le Wydad va gagner !', [
              ok('Chkoun ahsen, Raja wella Wydad?', 'Qui est le meilleur, le Raja ou le Wydad ?'),
              ko('Kayderrni rassi.', 'J’ai mal à la tête.', 'Le match n’a même pas commencé. Attends au moins la mi-temps.'),
              ko('Ma kayn bhal lhammam.', 'Rien ne vaut le hammam.', 'Yassine te parle foot, toi de hammam. Il ne comprend plus rien.')]),
            { type: 'reverse', word: 'm_ahsen' },
            R('driss', '{g:Goul|Gouli} Raja, w ghadi nwsslek fabor!', '{g:ڭول|ڭولي} الرجاء، وغادي نوصلك فابور!', 'Dis « Raja », et je te ramène gratuitement !', [
              ok('Ana… kanbghi Kaza kamla!', 'Moi… j’aime tout Casa !'),
              ko('Tmenya d drahem.', 'Huit dirhams.', 'Il t’offre la course et tu proposes de payer ? Si Driss est perdu.'),
              ko('La, mazal.', 'Non, pas encore.', 'Pas encore ? Il ne te demandait pas si tu étais marié{e} ! Ça, c’est Lalla Naïma.')]),
            { type: 'listen', word: 'm_kamla' },
            { type: 'order', tn: 'Ana kanbghi Kaza kamla', fr: 'Moi, j’aime tout Casa', tokens: ['Ana', 'kanbghi', 'Kaza', 'kamla'] },
            { type: 'speak', tn: 'Chkoun ahsen, Raja wella Wydad?', ar: 'شكون أحسن، الرجاء ولا الوداد؟', fr: 'Qui est le meilleur, le Raja ou le Wydad ?' }
          ],
          mission: { who: 'yassine', goal: 'Discute du derby avec Yassine : demande qui est le meilleur, donne ton avis (ou reste diplomate), et propose de regarder le match ensemble.', win: 'L’élève a parlé du match, donné ou esquivé un avis et proposé de regarder ensemble, en marocain et sans moquerie.' }
        },
        // ---------------------------------------------------------------- m4e5
        {
          id: 'm4e5', title: 'Le train pour Marrakech',
          pitch: 'Gare Casa-Voyageurs. Tata Saadia t’a confié une mission : acheter les billets pour Marrakech. Seul{e}.',
          cast: ['karim'],
          scene: [
            { who: 'karim', tn: 'Salam, ach bghiti?', ar: 'سلام، آش بغيتي؟', fr: 'Bonjour, qu’est-ce que tu veux ?' },
            { who: 'me', tn: 'Bghit jouj werqat l Marrakech, aafak.', ar: 'بغيت جوج ورقات لمراكش، عافاك.', fr: 'Je voudrais deux billets pour Marrakech, s’il te plaît.', note: 'Werqa : une feuille… et au guichet, un billet.' },
            { who: 'karim', tn: 'Imta? Daba wella ghedda?', ar: 'إمتى؟ دابا ولا غدا؟', fr: 'Pour quand ? Maintenant ou demain ?' },
            { who: 'me', tn: 'Daba. Imta kaykhrej ttran?', ar: 'دابا. إمتى كيخرج التران؟', fr: 'Maintenant. Il part quand, le train ?' },
            { who: 'karim', tn: 'F ttnach w nss. Mya w tmanin dirham.', ar: 'ف الطناش ونص. مية وتمانين درهم.', fr: 'À midi et demi. Cent quatre-vingts dirhams.' },
            { who: 'me', tn: 'Wach kayn chi blassa hda ssrjem?', ar: 'واش كاين شي بلاصة حدا السرجم؟', fr: 'Il y a une place près de la fenêtre ?' },
            { who: 'karim', tn: 'Kayn. Lwagon tlata, blassa rbaa w khamsa.', ar: 'كاين. الواڭون تلاتة، بلاصة ربعة وخمسة.', fr: 'Oui. Voiture trois, places quatre et cinq.' },
            { who: 'me', tn: 'Mzyan! Choukran bzzaf.', ar: 'مزيان! شكرا بزاف.', fr: 'Super ! Merci beaucoup.' },
            { who: 'karim', tn: 'Bla jmil. Triq salama!', ar: 'بلا جميل. طريق السلامة!', fr: 'De rien. Bon voyage !' }
          ],
          words: [
            { id: 'm_werqa', tn: 'Werqa', ar: 'ورقة', fr: 'Billet, ticket (et feuille)', ex: 'Jouj werqat = deux billets.' },
            { id: 'm_kaykhrej', tn: 'Kaykhrej', ar: 'كيخرج', fr: 'Il part, il sort', ex: 'Imta kaykhrej ttran? = le train part quand ?' },
            { id: 'm_ttran', tn: 'Ttran', ar: 'التران', fr: 'Le train', ex: 'Du français « train ».' },
            { id: 'm_nss', tn: 'W nss', ar: 'ونص', fr: 'Et demie', ex: 'Ttnach w nss = midi et demi.' },
            { id: 'm_ttnach', tn: 'Ttnach', ar: 'الطناش', fr: 'Midi (douze heures)', ex: 'F ttnach = à midi.' },
            { id: 'm_tmanin', tn: 'Tmanin', ar: 'تمانين', fr: 'Quatre-vingts', ex: 'Mya w tmanin = cent quatre-vingts.' },
            { id: 'm_blassa', tn: 'Blassa', ar: 'بلاصة', fr: 'Une place', ex: 'De l’espagnol « plaza ».' },
            { id: 'm_ssrjem', tn: 'Ssrjem', ar: 'السرجم', fr: 'La fenêtre', ex: 'Hda ssrjem = près de la fenêtre.' },
            { id: 'm_lwagon', tn: 'Lwagon', ar: 'الواڭون', fr: 'La voiture (du train)', ex: 'Avec ڭ, du français « wagon ».' },
            { id: 'm_blajmil', tn: 'Bla jmil', ar: 'بلا جميل', fr: 'De rien', ex: 'On répond à choukran.' },
            { id: 'm_triqsalama', tn: 'Triq salama', ar: 'طريق السلامة', fr: 'Bon voyage', ex: 'Mot à mot : « la route de la paix ».' }
          ],
          exercises: [
            R('karim', 'Salam, ach bghiti?', 'سلام، آش بغيتي؟', 'Bonjour, qu’est-ce que tu veux ?', [
              ok('Bghit jouj werqat l Marrakech, aafak.', 'Je voudrais deux billets pour Marrakech, s’il te plaît.'),
              ko('Aatini jouj khobzat.', 'Donne-moi deux pains.', 'C’est un guichet de gare, pas le hanout de Si Hamid.'),
              ko('Bchwiya, a Mi Zahra!', 'Doucement, Mi Zahra !', 'Tu n’es plus au hammam. Karim ne frotte personne.')]),
            { type: 'meaning', word: 'm_blassa' },
            { type: 'reverse', word: 'm_ttran' },
            R('karim', 'F ttnach w nss.', 'ف الطناش ونص.', 'À midi et demi.', [
              ok('Mzyan! Wach kayn chi blassa hda ssrjem?', 'Super ! Il y a une place près de la fenêtre ?'),
              ko('Kanmout aalih!', 'Je l’adore !', 'Tu adores midi et demi ? Karim aussi : c’est sa pause.'),
              ko('Mn lbareh.', 'Depuis hier.', 'Le train part aujourd’hui. Toi, tu attends depuis hier ?')]),
            { type: 'listen', word: 'm_triqsalama' },
            { type: 'order', tn: 'Imta kaykhrej ttran', fr: 'Il part quand, le train ?', tokens: ['Imta', 'kaykhrej', 'ttran'] },
            { type: 'speak', tn: 'Bghit jouj werqat l Marrakech, aafak.', ar: 'بغيت جوج ورقات لمراكش، عافاك.', fr: 'Je voudrais deux billets pour Marrakech, s’il te plaît.' }
          ],
          mission: { who: 'karim', goal: 'Au guichet de la gare, achète deux billets pour Marrakech : dis pour quand, demande l’heure du train, le prix et une place près de la fenêtre.', win: 'L’élève a acheté des billets, demandé l’heure, le prix et une place, en marocain.' }
        }
      ]
    }
  ];
})();

(() => {
  const R = (who, tn, ar, fr, options) => ({ type: 'reply', who, line: { tn, ar, fr }, options });
  const ok = (tn, fr) => ({ tn, fr, ok: true });
  const ko = (tn, fr, why) => ({ tn, fr, why });
  const C = (q, tn, good, bad, explain) => ({ type: 'choice', q, tn, options: [{ t: good, ok: true }].concat(bad.map(t => ({ t }))), explain });

  // =====================================================================================
  // NIVEAU 5 — Tata officielle
  // =====================================================================================
  window.TWB_MA_L5 = {
    id: 'm5', num: 5, name: 'Tata officielle',
    goal: 'Parler comme Tata Saadia : raconter au passé, comparer, cuisiner et faire un discours',
    boss: { id: 'm5boss', title: 'L’épreuve finale de Tata Saadia', pitch: '14 questions, toutes difficiles. Il en faut 10 pour que Tata Saadia te déclare marocain{e} pour de vrai.', count: 14, pass: 10 },
    episodes: [
      // ---------------------------------------------------------------- m5e1
      {
        id: 'm5e1', title: 'Jemaa el-Fna',
        pitch: 'Marrakech, le soir. La place Jemaa el-Fna s’allume : musiciens, conteurs, fumée des grillades. Et Aziz, qui vend le meilleur jus d’orange du monde (c’est lui qui le dit).',
        cast: ['aziz'],
        scene: [
          { who: 'aziz', tn: 'Aassir limoun! Aassir limoun! Ghir b aachra!', ar: 'عصير الليمون! عصير الليمون! غير بعشرة!', fr: 'Jus d’orange ! Jus d’orange ! Seulement dix dirhams !' },
          { who: 'me', tn: 'Aatini wahed laassir d llimoun, aafak.', ar: 'عطيني واحد العصير د الليمون، عافاك.', fr: 'Donne-moi un jus d’orange, s’il te plaît.' },
          { who: 'aziz', tn: 'Mnin {g:nta|nti}? Mn Fransa? Mrehba bik f Marrakech!', ar: 'منين {g:نتا|نتي}؟ من فرانسا؟ مرحبا بيك ف مراكش!', fr: 'Tu viens d’où ? De France ? Bienvenue à Marrakech !' },
          { who: 'me', tn: 'Ana mn Kaza, walakin kanskon f Fransa.', ar: 'أنا من كازا، ولكن كنسكن ف فرانسا.', fr: 'Je suis de Casa, mais j’habite en France.' },
          { who: 'aziz', tn: 'Kaza?! Hna f Marrakech, ljaw skhoun w nnas drifin!', ar: 'كازا؟! هنا ف مراكش، الجو سخون والناس ظريفين!', fr: 'Casa ?! Ici, à Marrakech, il fait chaud et les gens sont sympas !', note: 'Entre Casa et Marrakech, on se taquine toujours. Avec le sourire.' },
          { who: 'me', tn: 'Wallah sahh! W chno kayn hna f lil?', ar: 'والله صح! وشنو كاين هنا ف الليل؟', fr: 'C’est vrai ! Et qu’est-ce qu’il y a ici le soir ?' },
          { who: 'aziz', tn: 'Kolchi! Lhlayqiya, lmousiqa, lmakla… {g:Sir|Siri} {g:chouf|choufi} b aaynik!', ar: 'كلشي! الحلايقية، الموسيقى، الماكلة… {g:سير|سيري} {g:شوف|شوفي} بعينيك!', fr: 'De tout ! Les conteurs, la musique, la nourriture… Va voir de tes propres yeux !', note: 'Les hlayqiya : les conteurs et artistes qui forment un cercle (la halqa) autour d’eux sur la place.' },
          { who: 'me', tn: 'Choukran, a Aziz! Had laassir bnin!', ar: 'شكرا، آ عزيز! هاد العصير بنين!', fr: 'Merci, Aziz ! Ce jus est délicieux !' }
        ],
        words: [
          { id: 'm_aassir', tn: 'Aassir', ar: 'عصير', fr: 'Jus', ex: 'Aassir limoun = jus d’orange (pas de citron !).' },
          { id: 'm_ghirb', tn: 'Ghir b…', ar: 'غير ب…', fr: 'Seulement pour… (prix)', ex: 'Ghir b aachra = seulement dix (dirhams).' },
          { id: 'm_mnin', tn: 'Mnin {g:nta|nti}?', ar: 'منين {g:نتا|نتي}؟', fr: 'Tu viens d’où ?', ex: 'Ana mn Kaza = je suis de Casa.' },
          { id: 'm_nnas', tn: 'Nnas', ar: 'الناس', fr: 'Les gens', ex: 'Nnas drifin = les gens sont sympas.' },
          { id: 'm_sahh', tn: 'Sahh', ar: 'صح', fr: 'C’est vrai, juste', ex: 'Wallah sahh = c’est vrai, je te jure.' },
          { id: 'm_flil', tn: 'F lil', ar: 'ف الليل', fr: 'La nuit, le soir', ex: 'F nhar = le jour.' },
          { id: 'm_kolchi', tn: 'Kolchi', ar: 'كلشي', fr: 'Tout', ex: 'Kayn kolchi = il y a de tout.' },
          { id: 'm_hlayqiya', tn: 'Lhlayqiya', ar: 'الحلايقية', fr: 'Les conteurs et artistes de rue', ex: 'Ils forment la halqa, le cercle.' },
          { id: 'm_baaynik', tn: 'B aaynik', ar: 'بعينيك', fr: 'De tes yeux', ex: 'Aayn = œil.' },
          { id: 'm_marrakech', tn: 'Marrakech', ar: 'مراكش', fr: 'Marrakech', ex: 'La ville rouge.' }
        ],
        exercises: [
          R('aziz', 'Aassir limoun! Ghir b aachra!', 'عصير الليمون! غير بعشرة!', 'Jus d’orange ! Seulement dix dirhams !', [
            ok('Aatini wahed, aafak.', 'Donne-m’en un, s’il te plaît.'),
            ko('Aatini aassir hamd.', 'Donne-moi un jus de citron.', 'Un jus de citron pur ?! Aziz te le prépare, mais il appelle ses collègues pour regarder ta tête.'),
            ko('Kayderrni kerchi.', 'J’ai mal au ventre.', 'Tu n’as encore rien bu. Et la docteure Leïla est restée à Casa.')]),
          { type: 'meaning', word: 'm_nnas' },
          R('aziz', 'Mnin {g:nta|nti}?', 'منين {g:نتا|نتي}؟', 'Tu viens d’où ?', [
            ok('Ana mn Kaza, walakin kanskon f Fransa.', 'Je suis de Casa, mais j’habite en France.'),
            ko('Mn lbareh.', 'Depuis hier.', 'Mnin = d’où : il voulait savoir d’où tu viens, pas depuis quand.'),
            ko('Werqa l Marrakech.', 'Un billet pour Marrakech.', 'Tu y es déjà, à Marrakech ! Le train est fini.')]),
          { type: 'reverse', word: 'm_kolchi' },
          { type: 'order', tn: 'Chno kayn hna f lil', fr: 'Qu’est-ce qu’il y a ici le soir ?', tokens: ['Chno', 'kayn', 'hna', 'f', 'lil'] },
          { type: 'speak', tn: 'Had laassir bnin!', ar: 'هاد العصير بنين!', fr: 'Ce jus est délicieux !' }
        ],
        mission: { who: 'aziz', goal: 'Sur la place Jemaa el-Fna, commande un jus d’orange à Aziz, dis-lui d’où tu viens et demande ce qu’il y a à voir le soir.', win: 'L’élève a commandé un jus d’orange (limoun), dit d’où il vient et posé une question sur la place, en marocain.' }
      },
      // ---------------------------------------------------------------- m5e2
      {
        id: 'm5e2', title: 'Raconte ta journée à Tata',
        pitch: 'Tata Saadia est restée à Casa. Elle appelle. Elle veut TOUT savoir. Au passé, s’il te plaît.',
        cast: ['saadia'],
        scene: [
          { who: 'saadia', tn: 'Alo! Ewa, {g:aawed|aawdi} liya, chno dirti lyoum?', ar: 'ألو! إيوا، {g:عاود|عاودي} ليا، شنو درتي اليوم؟', fr: 'Allô ! Alors, raconte-moi, qu’est-ce que tu as fait aujourd’hui ?', note: 'Dirti (tu as fait) : au passé, le même mot pour un garçon et une fille.' },
          { who: 'me', tn: 'Mchit l Jamaa Lfna, w chrebt aassir limoun.', ar: 'مشيت لجامع الفنا، وشربت عصير الليمون.', fr: 'Je suis allé{e} à Jemaa el-Fna, et j’ai bu un jus d’orange.' },
          { who: 'saadia', tn: 'W kliti chi haja?', ar: 'وكليتي شي حاجة؟', fr: 'Et tu as mangé quelque chose ?' },
          { who: 'me', tn: 'Iyeh, klit tanjiya!', ar: 'إيه، كليت الطنجية!', fr: 'Oui, j’ai mangé une tanjia !', note: 'La tanjia : de la viande cuite pendant des heures dans une jarre, la spécialité de Marrakech.' },
          { who: 'saadia', tn: 'Tanjiya?! W chkoun khelless?', ar: 'الطنجية؟! وشكون خلص؟', fr: 'Une tanjia ?! Et qui a payé ?' },
          { who: 'me', tn: 'Yassine gal: « ana nkhelless »…', ar: 'ياسين ڭال: « أنا نخلص »…', fr: 'Yassine a dit : « C’est moi qui paie »…' },
          { who: 'me', tn: 'Walakin nsa lbeztam dyalou f loutil!', ar: 'ولكن نسا البزطام ديالو ف الوطيل!', fr: 'Mais il a oublié son porte-monnaie à l’hôtel !' },
          { who: 'saadia', tn: 'Ewa, Yassine hada! Kolla mrra nfss lhaja!', ar: 'إيوا، ياسين هادا! كل مرة نفس الحاجة!', fr: 'Ah, ça, c’est bien Yassine ! À chaque fois la même chose !' }
        ],
        words: [
          { id: 'm_dirti', tn: 'Chno dirti?', ar: 'شنو درتي؟', fr: 'Qu’est-ce que tu as fait ?', ex: 'Dert = j’ai fait ; dirti = tu as fait.' },
          { id: 'm_mchit', tn: 'Mchit', ar: 'مشيت', fr: 'Je suis allé(e)', ex: 'Mchiti = tu es allé(e).' },
          { id: 'm_chrebt', tn: 'Chrebt', ar: 'شربت', fr: 'J’ai bu', ex: 'Chrebti = tu as bu.' },
          { id: 'm_kliti', tn: 'Kliti', ar: 'كليتي', fr: 'Tu as mangé', ex: 'Le même mot pour un garçon et une fille.' },
          { id: 'm_haja', tn: 'Chi haja', ar: 'شي حاجة', fr: 'Quelque chose', ex: 'Haja = une chose.' },
          { id: 'm_tanjiya', tn: 'Tanjiya', ar: 'الطنجية', fr: 'La tanjia (plat de Marrakech)', ex: 'Cuite toute la nuit dans les cendres du hammam.' },
          { id: 'm_khelless', tn: 'Khelless', ar: 'خلص', fr: 'Il a payé', ex: 'Chkoun khelless? = qui a payé ?' },
          { id: 'm_gal', tn: 'Gal', ar: 'ڭال', fr: 'Il a dit', ex: 'Avec ڭ. Galt = elle a dit.' },
          { id: 'm_nsa', tn: 'Nsa', ar: 'نسا', fr: 'Il a oublié', ex: 'Nsit = j’ai oublié.' },
          { id: 'm_lbeztam', tn: 'Lbeztam', ar: 'البزطام', fr: 'Le porte-monnaie', ex: 'Celui que Yassine oublie toujours.' },
          { id: 'm_kollamrra', tn: 'Kolla mrra', ar: 'كل مرة', fr: 'À chaque fois', ex: 'Nfss lhaja = la même chose.' }
        ],
        exercises: [
          R('saadia', 'Chno dirti lyoum?', 'شنو درتي اليوم؟', 'Qu’est-ce que tu as fait aujourd’hui ?', [
            ok('Mchit l Jamaa Lfna.', 'Je suis allé{e} à Jemaa el-Fna.'),
            ko('Ghadi nmchi l Jamaa Lfna.', 'Je vais aller à Jemaa el-Fna.', 'C’est le futur. Tata demande ce que tu as DÉJÀ fait.'),
            ko('Kanmchi l Jamaa Lfna.', 'Je vais (souvent) à Jemaa el-Fna.', 'C’est le présent. Tata veut le récit d’aujourd’hui, au passé.')]),
          { type: 'meaning', word: 'm_lbeztam' },
          { type: 'reverse', word: 'm_kliti' },
          R('saadia', 'W chkoun khelless?', 'وشكون خلص؟', 'Et qui a payé ?', [
            ok('Yassine gal « ana nkhelless »… walakin nsa lbeztam!', 'Yassine a dit « je paie »… mais il a oublié son porte-monnaie !'),
            ko('Bla jmil.', 'De rien.', 'Tata ne t’a pas remercié{e}. Elle mène l’enquête.'),
            ko('Ma kansmaach, a Lalla.', 'Je n’entends pas, Lalla.', 'C’est Tata Saadia, pas Lalla Hniya. Et elle entend très bien.')]),
          { type: 'order', tn: 'Kolla mrra nfss lhaja', fr: 'À chaque fois la même chose', tokens: ['Kolla', 'mrra', 'nfss', 'lhaja'] },
          { type: 'speak', tn: 'Mchit l Jamaa Lfna, w chrebt aassir limoun.', ar: 'مشيت لجامع الفنا، وشربت عصير الليمون.', fr: 'Je suis allé{e} à Jemaa el-Fna, et j’ai bu un jus d’orange.' }
        ],
        mission: { who: 'saadia', goal: 'Tata Saadia t’appelle : raconte-lui ta journée à Marrakech au passé (où tu es allé, ce que tu as bu et mangé, qui a payé).', win: 'L’élève a raconté au moins deux actions au passé (mchit, klit, chrebt…) et répondu à une question de Tata, en marocain.' }
      },
      // ---------------------------------------------------------------- m5e3
      {
        id: 'm5e3', title: 'Le couscous du vendredi',
        pitch: 'Vendredi, c’est couscous. Tata Saadia te confie (une partie de) sa recette. Le reste est un secret de famille.',
        cast: ['saadia'],
        scene: [
          { who: 'saadia', tn: 'Lyoum jjemaa, nhar sseksou! Aji {g:aawenni|aawnini}.', ar: 'اليوم الجمعة، نهار السكسو! أجي {g:عاوني|عاونيني}.', fr: 'Aujourd’hui, c’est vendredi, jour du couscous ! Viens m’aider.' },
          { who: 'me', tn: 'Chno khassni ndir, a Tata?', ar: 'شنو خاصني ندير، آ طاطا؟', fr: 'Qu’est-ce que je dois faire, tata ?' },
          { who: 'saadia', tn: '{g:Ghsel|Ghsli} yeddik, w {g:qechcher|qechchri} lkhodra.', ar: '{g:غسل|غسلي} يديك، و{g:قشر|قشري} الخضرة.', fr: 'Lave-toi les mains, et épluche les légumes.' },
          { who: 'me', tn: 'Chhal d lkhizzou nqechcher?', ar: 'شحال د الخيزو نقشر؟', fr: 'J’épluche combien de carottes ?' },
          { who: 'saadia', tn: 'Kilo d lkhizzou, jouj graat, w chwiya d lhommos.', ar: 'كيلو د الخيزو، جوج ڭرعات، وشوية د الحمص.', fr: 'Un kilo de carottes, deux courgettes, et un peu de pois chiches.' },
          { who: 'saadia', tn: 'W sseksou khassou ytfowwer tlata d lmerrat!', ar: 'والسكسو خاصو يتفور تلاتة د المرات!', fr: 'Et le couscous doit cuire à la vapeur trois fois !', note: 'La quantité exacte d’épices ? Secret de famille. Même Lalla Hniya ne la donne pas.' },
          { who: 'me', tn: 'Tlata d lmerrat?! Chhal d lwaqt?', ar: 'تلاتة د المرات؟! شحال د الوقت؟', fr: 'Trois fois ?! Ça prend combien de temps ?' },
          { who: 'saadia', tn: 'Jouj swayaa. Sseksou bhal lhobb: khassou sber.', ar: 'جوج سوايع. السكسو بحال الحب: خاصو الصبر.', fr: 'Deux heures. Le couscous, c’est comme l’amour : il faut de la patience.' }
        ],
        words: [
          { id: 'm_jjemaa', tn: 'Jjemaa', ar: 'الجمعة', fr: 'Vendredi', ex: 'Nhar jjemaa = le vendredi, jour du couscous.' },
          { id: 'm_sseksou', tn: 'Sseksou', ar: 'السكسو', fr: 'Le couscous', ex: 'Au Maroc, on dit seksou.' },
          { id: 'm_aawenni', tn: '{g:Aawenni|Aawnini}', ar: '{g:عاوني|عاونيني}', fr: 'Aide-moi', ex: 'Aawen = aider.' },
          { id: 'm_khassni', tn: 'Khassni', ar: 'خاصني', fr: 'Je dois, il me faut', ex: 'Chno khassni ndir? = qu’est-ce que je dois faire ?' },
          { id: 'm_ghsel', tn: '{g:Ghsel|Ghsli}', ar: '{g:غسل|غسلي}', fr: 'Lave', ex: 'Ghsel yeddik = lave-toi les mains.' },
          { id: 'm_qechcher', tn: '{g:Qechcher|Qechchri}', ar: '{g:قشر|قشري}', fr: 'Épluche', ex: 'Nqechcher = j’épluche.' },
          { id: 'm_lkhodra', tn: 'Lkhodra', ar: 'الخضرة', fr: 'Les légumes', ex: 'Seksou b lkhodra = couscous aux légumes.' },
          { id: 'm_lkhizzou', tn: 'Lkhizzou', ar: 'الخيزو', fr: 'Les carottes', ex: 'Kilo d lkhizzou = un kilo de carottes.' },
          { id: 'm_graa', tn: 'Graa', ar: 'ڭرعة', fr: 'Courgette', ex: 'Avec ڭ. Jouj graat = deux courgettes.' },
          { id: 'm_lhommos', tn: 'Lhommos', ar: 'الحمص', fr: 'Les pois chiches', ex: 'Chwiya d lhommos.' },
          { id: 'm_lmerrat', tn: 'Tlata d lmerrat', ar: 'تلاتة د المرات', fr: 'Trois fois', ex: 'Mrra = une fois.' },
          { id: 'm_sber', tn: 'Sber', ar: 'الصبر', fr: 'La patience', ex: 'Khassou sber = il faut de la patience.' }
        ],
        exercises: [
          R('saadia', '{g:Ghsel|Ghsli} yeddik, w {g:qechcher|qechchri} lkhodra.', '{g:غسل|غسلي} يديك، و{g:قشر|قشري} الخضرة.', 'Lave-toi les mains, et épluche les légumes.', [
            ok('Wakha, a Tata. Chhal d lkhizzou?', 'D’accord, tata. Combien de carottes ?'),
            ko('Ma bghitch nakoul.', 'Je ne veux pas manger.', 'Personne ne te propose à manger… pour l’instant. Patience.'),
            ko('Bchhal lkhobza?', 'C’est combien, le pain ?', 'Tu es dans la cuisine de Tata, pas chez Si Hamid. Ici tout est gratuit, sauf le travail.')]),
          { type: 'meaning', word: 'm_lkhodra' },
          { type: 'reverse', word: 'm_sber' },
          R('saadia', 'Sseksou khassou ytfowwer tlata d lmerrat!', 'السكسو خاصو يتفور تلاتة د المرات!', 'Le couscous doit cuire à la vapeur trois fois !', [
            ok('Tlata d lmerrat?! Chhal d lwaqt?', 'Trois fois ?! Ça prend combien de temps ?'),
            ko('Bslama!', 'Au revoir !', 'Quitter la cuisine de Tata en pleine recette ? Elle a déjà fermé la porte à clé.'),
            ko('Yallah nchtho!', 'Allez, on danse !', 'On cuisine, on ne danse pas. Pas encore.')]),
          { type: 'order', tn: 'Chno khassni ndir a Tata', fr: 'Qu’est-ce que je dois faire, tata ?', tokens: ['Chno', 'khassni', 'ndir', 'a', 'Tata'] },
          { type: 'speak', tn: 'Sseksou bhal lhobb: khassou sber.', ar: 'السكسو بحال الحب: خاصو الصبر.', fr: 'Le couscous, c’est comme l’amour : il faut de la patience.' }
        ],
        mission: { who: 'saadia', goal: 'Aide Tata Saadia à préparer le couscous du vendredi : demande ce que tu dois faire, combien de légumes, et combien de temps ça prend.', win: 'L’élève a proposé son aide, posé au moins deux questions sur la recette (quantités, temps) et compris une consigne, en marocain.' }
      },
      // ---------------------------------------------------------------- m5e4
      {
        id: 'm5e4', title: 'Casa ou Marrakech ?',
        pitch: 'Retour à Casa. Grand débat à table : quelle est la meilleure ville du Maroc ? Tout le monde a raison. Surtout Tata.',
        cast: ['yassine', 'saadia'],
        scene: [
          { who: 'yassine', tn: 'Kaza kbar mn Marrakech!', ar: 'كازا كبر من مراكش!', fr: 'Casa est plus grande que Marrakech !' },
          { who: 'me', tn: 'Iyeh, walakin Marrakech ahsen!', ar: 'إيه، ولكن مراكش أحسن!', fr: 'Oui, mais Marrakech est mieux !' },
          { who: 'saadia', tn: 'Ewa, f Kaza kayn lbhar!', ar: 'إيوا، ف كازا كاين البحر!', fr: 'Eh bien, à Casa, il y a la mer !' },
          { who: 'me', tn: 'W f Marrakech kayn Jamaa Lfna w laassir!', ar: 'وف مراكش كاين جامع الفنا والعصير!', fr: 'Et à Marrakech, il y a Jemaa el-Fna et les jus !' },
          { who: 'yassine', tn: 'Laassir? Kayn f Kaza hta houwa!', ar: 'العصير؟ كاين ف كازا حتى هو!', fr: 'Les jus ? Il y en a aussi à Casa !' },
          { who: 'saadia', tn: 'Safi! Lmghrib kollou zwin, mn chamal l janoub!', ar: 'صافي! المغرب كلو زوين، من الشمال للجنوب!', fr: 'Ça suffit ! Tout le Maroc est beau, du nord au sud !', note: 'Quand Tata dit « safi », le débat est terminé.' },
          { who: 'me', tn: 'Wallah sahh, a Tata. W lahsen f lmghrib… hiya nti!', ar: 'والله صح، آ طاطا. والأحسن ف المغرب… هي نتي!', fr: 'C’est vrai, tata. Et la meilleure du Maroc… c’est toi !', note: 'Le compliment qui t’offre trois parts de cornes de gazelle.' },
          { who: 'saadia', tn: 'Llah yrdi alik! Daba {g:wlliti mghribi|wlliti mghribiya} b ssah!', ar: 'الله يرضي عليك! دابا {g:وليتي مغربي|وليتي مغربية} بالصح!', fr: 'Que Dieu te bénisse ! Maintenant, tu es devenu{e} un{e} vrai{e} Marocain{e} !' }
        ],
        words: [
          { id: 'm_kbarmn', tn: 'Kbar mn', ar: 'كبر من', fr: 'Plus grand que', ex: 'Sghar mn = plus petit que.' },
          { id: 'm_ahsen2', tn: 'Ahsen', ar: 'أحسن', fr: 'Mieux, meilleur', ex: 'Ahsen mn = meilleur que.' },
          { id: 'm_htahouwa', tn: 'Hta houwa', ar: 'حتى هو', fr: 'Lui aussi', ex: 'Hta ana = moi aussi.' },
          { id: 'm_kollou', tn: 'Kollou', ar: 'كلو', fr: 'Tout entier', ex: 'Lmghrib kollou = tout le Maroc.' },
          { id: 'm_chamal', tn: 'Mn chamal l janoub', ar: 'من الشمال للجنوب', fr: 'Du nord au sud', ex: 'Chamal = nord ; janoub = sud.' },
          { id: 'm_lmghrib', tn: 'Lmghrib', ar: 'المغرب', fr: 'Le Maroc', ex: 'Mghribi = marocain.' },
          { id: 'm_bssah', tn: 'B ssah', ar: 'بالصح', fr: 'Pour de vrai', ex: 'Mghribi b ssah = un vrai Marocain.' },
          { id: 'm_wlliti2', tn: 'Daba wlliti…', ar: 'دابا وليتي…', fr: 'Maintenant, tu es devenu(e)…', ex: 'Wlliti mghribiya b ssah!' }
        ],
        exercises: [
          R('yassine', 'Kaza kbar mn Marrakech!', 'كازا كبر من مراكش!', 'Casa est plus grande que Marrakech !', [
            ok('Iyeh, walakin Marrakech ahsen!', 'Oui, mais Marrakech est mieux !'),
            ko('Kayderrni rassi.', 'J’ai mal à la tête.', 'Ce débat donne mal à la tête, c’est vrai. Mais réponds quand même !'),
            ko('Mya w khamsin.', 'Cent cinquante.', 'Tu négocies la taille des villes ? Même Si Abdeslam n’y avait pas pensé.')]),
          { type: 'meaning', word: 'm_htahouwa' },
          { type: 'reverse', word: 'm_kbarmn' },
          R('saadia', 'Lmghrib kollou zwin, mn chamal l janoub!', 'المغرب كلو زوين، من الشمال للجنوب!', 'Tout le Maroc est beau, du nord au sud !', [
            ok('Wallah sahh, a Tata!', 'C’est vrai, tata !'),
            ko('La, ghir Kaza!', 'Non, seulement Casa !', 'Tata a dit « safi ». Quand Tata dit safi, le débat est terminé.'),
            ko('Fin chamal?', 'C’est où, le nord ?', 'En haut de la carte ! Mais Tata espérait plutôt un « c’est vrai ».')]),
          { type: 'order', tn: 'Lmghrib kollou zwin', fr: 'Tout le Maroc est beau', tokens: ['Lmghrib', 'kollou', 'zwin'] },
          { type: 'speak', tn: 'Lahsen f lmghrib hiya nti!', ar: 'الأحسن ف المغرب هي نتي!', fr: 'La meilleure du Maroc, c’est toi !' }
        ],
        mission: { who: 'yassine', goal: 'Débat avec Yassine : compare Casa et Marrakech (plus grand, mieux), donne au moins une raison, puis mettez-vous d’accord.', win: 'L’élève a utilisé une comparaison (kbar mn, ahsen), donné une raison et conclu gentiment, en marocain.' }
      },
      // ---------------------------------------------------------------- m5e5
      {
        id: 'm5e5', title: 'Le discours de la Tata officielle',
        pitch: 'Dernier soir. Toute la famille est là. Tata Saadia te tend le micro (une cuillère en bois). À toi de parler.',
        cast: ['saadia', 'hniya', 'yassine'],
        scene: [
          { who: 'saadia', tn: 'Lyoum ddar aamra! Kolchi hna: Lalla Hniya, Salma, Yassine…', ar: 'اليوم الدار عامرة! كلشي هنا: لالة هنية، سلمى، ياسين…', fr: 'Ce soir, la maison est pleine ! Tout le monde est là : Lalla Hniya, Salma, Yassine…' },
          { who: 'saadia', tn: 'A {petit}, daba {g:nta|nti} lli ghadi {g:tehder|tehdri}!', ar: 'آ {petitAr}، دابا {g:نتا|نتي} اللي غادي {g:تهدر|تهدري}!', fr: '{petitFr}, maintenant, c’est toi qui vas parler !' },
          { who: 'me', tn: 'Ana? Wakha… Salam alaykoum kamlin!', ar: 'أنا؟ واخا… السلام عليكم كاملين!', fr: 'Moi ? D’accord… Bonsoir à tous !' },
          { who: 'me', tn: 'Choukran bzzaf aala had ssimana. Kanbghikoum bzzaf.', ar: 'شكرا بزاف على هاد السيمانة. كنبغيكم بزاف.', fr: 'Merci beaucoup pour cette semaine. Je vous aime très fort.' },
          { who: 'me', tn: 'Tata galt liya: lli bgha laasel, ysber l qris nnhal.', ar: 'طاطا ڭالت ليا: اللي بغا العسل، يصبر لقريص النحل.', fr: 'Tata m’a dit : qui veut le miel doit supporter les piqûres des abeilles.', note: 'Le proverbe : pour obtenir quelque chose de bon, il faut accepter un peu de peine. Comme apprendre le marocain.' },
          { who: 'hniya', tn: 'Tbarkallah! Llah yrdi alik, a {petit}!', ar: 'تبارك الله! الله يرضي عليك، آ {petitAr}!', fr: 'Bravo ! Que Dieu te bénisse, {petitFr} !', note: 'Pour une fois, Lalla Hniya a tout entendu du premier coup.' },
          { who: 'yassine', tn: 'Wlliti {g:katehder|katehdri} hsen menni!', ar: 'وليتي {g:كتهدر|كتهدري} حسن مني!', fr: 'Tu parles mieux que moi, maintenant !' },
          { who: 'saadia', tn: 'Mn lyoum, {g:nta|nti} bhali!', ar: 'من اليوم، {g:نتا|نتي} بحالي!', fr: 'À partir d’aujourd’hui, tu es comme moi !', note: 'Tu es devenu{e} « Tata officielle ». Tu as gagné le titre. Et la cuillère en bois.' }
        ],
        words: [
          { id: 'm_ddaraamra', tn: 'Ddar aamra', ar: 'الدار عامرة', fr: 'La maison est pleine (de monde)', ex: 'Un grand bonheur pour une tata.' },
          { id: 'm_tehder', tn: '{g:Tehder|Tehdri}', ar: '{g:تهدر|تهدري}', fr: 'Tu parles', ex: 'Kanhder = je parle.' },
          { id: 'm_salamalaykoum', tn: 'Salam alaykoum', ar: 'السلام عليكم', fr: 'Bonjour (que la paix soit sur vous)', ex: 'On répond : wa alaykoum salam.' },
          { id: 'm_kamlin', tn: 'Kamlin', ar: 'كاملين', fr: 'Tous, au complet', ex: 'Salam alaykoum kamlin = bonjour à tous.' },
          { id: 'm_aala', tn: 'Aala', ar: 'على', fr: 'Pour, sur', ex: 'Choukran aala kolchi = merci pour tout.' },
          { id: 'm_ssimana', tn: 'Ssimana', ar: 'السيمانة', fr: 'La semaine', ex: 'Du français « semaine ».' },
          { id: 'm_kanbghikoum', tn: 'Kanbghikoum', ar: 'كنبغيكم', fr: 'Je vous aime', ex: 'Kanbghik = je t’aime.' },
          { id: 'm_laasel', tn: 'Lli bgha laasel, ysber l qris nnhal', ar: 'اللي بغا العسل، يصبر لقريص النحل', fr: 'Qui veut le miel supporte les piqûres d’abeilles', ex: 'Un proverbe marocain sur l’effort.' },
          { id: 'm_hsenmenni', tn: 'Hsen menni', ar: 'حسن مني', fr: 'Mieux que moi', ex: 'Hsen mennek = mieux que toi.' },
          { id: 'm_bhali', tn: 'Bhali', ar: 'بحالي', fr: 'Comme moi', ex: 'Bhalek = comme toi.' }
        ],
        exercises: [
          R('saadia', 'Daba {g:nta|nti} lli ghadi {g:tehder|tehdri}!', 'دابا {g:نتا|نتي} اللي غادي {g:تهدر|تهدري}!', 'Maintenant, c’est toi qui vas parler !', [
            ok('Wakha… Salam alaykoum kamlin!', 'D’accord… Bonsoir à tous !'),
            ko('Ma kansmaach!', 'Je n’entends pas !', 'Tu fais semblant de ne pas entendre ? Toute la famille te regarde. Courage.'),
            ko('Bslama!', 'Au revoir !', 'Fuir avant le discours ? Yassine bloque déjà la porte.')]),
          { type: 'meaning', word: 'm_ddaraamra' },
          { type: 'reverse', word: 'm_kanbghikoum' },
          R('yassine', 'Wlliti {g:katehder|katehdri} hsen menni!', 'وليتي {g:كتهدر|كتهدري} حسن مني!', 'Tu parles mieux que moi, maintenant !', [
            ok('Choukran, a Yassine! Walakin nta… nsiti lbeztam!', 'Merci, Yassine ! Mais toi… tu as oublié ton porte-monnaie !'),
            ko('Kayderrni kerchi.', 'J’ai mal au ventre.', 'Ce sont les cornes de gazelle. La docteure Leïla t’avait prévenu{e}.'),
            ko('Chkoun ahsen, Raja wella Wydad?', 'Qui est le meilleur, le Raja ou le Wydad ?', 'Pas ce soir ! Tata Saadia confisque la télécommande.')]),
          { type: 'order', tn: 'Choukran bzzaf aala had ssimana', fr: 'Merci beaucoup pour cette semaine', tokens: ['Choukran', 'bzzaf', 'aala', 'had', 'ssimana'] },
          { type: 'speak', tn: 'Lli bgha laasel, ysber l qris nnhal.', ar: 'اللي بغا العسل، يصبر لقريص النحل.', fr: 'Qui veut le miel supporte les piqûres des abeilles.' }
        ],
        mission: { who: 'saadia', goal: 'Fais un petit discours à la famille : salue tout le monde, remercie pour la semaine, dis que tu les aimes et cite (ou invente) un proverbe.', win: 'L’élève a salué, remercié et exprimé son affection à la famille en au moins trois phrases, en marocain.' }
      }
    ]
  };

  // =====================================================================================
  // LE COIN DE TATA SAADIA — une leçon de grammaire par niveau
  // =====================================================================================
  window.TWB_MA_GRAMMAR = {
    m1: {
      id: 'mg1', title: 'Mon, ton, son : les possessifs et « dyal »',
      cards: [
        { title: 'On colle la fin au mot', text: 'En marocain, « mon », « ton », « son » ne sont pas des mots séparés : c’est une fin qu’on colle au nom. « Ton » (-ek) est le même pour un garçon et pour une fille.',
          table: [['dar', 'maison'], ['dari', 'ma maison'], ['darek', 'ta maison'], ['darou', 'sa maison (à lui)'], ['darha', 'sa maison (à elle)'], ['darna', 'notre maison'], ['darkoum', 'votre maison'], ['darhoum', 'leur maison']] },
        { title: '« De » : dyal', text: 'Au Maroc, « de » et « à moi » se disent dyal. On lui colle les mêmes fins : dyali, dyalek… Jamais « taa » (algérien) ni « mtaa » (tunisien) !',
          table: [['ddar dyal khouya', 'la maison de mon frère'], ['ssak dyali', 'mon sac (le sac à moi)'], ['ssak dyalek', 'ton sac'], ['ssak dyalou', 'son sac (à lui)'], ['ssak dyalha', 'son sac (à elle)'], ['dyalna, dyalkoum, dyalhoum', 'à nous, à vous, à eux']] },
        { title: 'La forme courte : d', text: 'Dans la conversation, dyal devient souvent d : kas d atay (un verre de thé), kilo d limoun (un kilo d’oranges), makla d Tata (la cuisine de Tata).' }
      ],
      exercises: [
        C('Comment dit-on « ma maison » ?', '', 'Dari', ['Darek', 'Darou', 'Darha'], '-i = mon, ma.'),
        C('Que veut dire « darhoum » ?', 'Darhoum', 'Leur maison', ['Notre maison', 'Votre maison', 'Sa maison (à elle)'], '-houm = leur.'),
        C('À une fille, « ta maison » se dit…', '', 'Darek', ['Dareki', 'Darki', 'Darti'], '-ek est le même pour un garçon et pour une fille.'),
        C('Que veut dire « ssak dyalha » ?', 'Ssak dyalha', 'Son sac (à elle)', ['Mon sac', 'Ton sac', 'Son sac (à lui)'], 'Dyalha = à elle.'),
        C('Comment dit-on « la maison de mon frère » au Maroc ?', '', 'Ddar dyal khouya', ['Ddar taa khouya', 'Ddar mtaa khouya', 'Khouya dari'], 'Dyal au Maroc ; taa est algérien, mtaa tunisien.'),
        C('Que veut dire « kas d atay » ?', 'Kas d atay', 'Un verre de thé', ['Un thé sans sucre', 'Mon thé', 'Le thé est prêt'], 'D = la forme courte de dyal.')
      ]
    },
    m2: {
      id: 'mg2', title: 'Dire non : ma…ch, machi, makaynch',
      cards: [
        { title: 'Avec un verbe : ma … ch', text: 'On encadre le verbe : « ma » devant, « ch » derrière. Avec « walou » (rien) ou « gaa » (du tout), le -ch tombe : ma fhemt walou, ma fhemt gaa.',
          table: [['bghit (je veux)', 'ma bghitch (je ne veux pas)'], ['fhemt (j’ai compris)', 'ma fhemtch (je n’ai pas compris)'], ['kanaaraf (je sais)', 'ma kanaarafch (je ne sais pas)'], ['kansmaa (j’entends)', 'ma kansmaach (je n’entends pas)'], ['kayn (il y a)', 'makaynch (il n’y a pas)']] },
        { title: 'Sans verbe : machi', text: 'Devant un adjectif ou un nom, on met « machi ».',
          table: [['ghali (cher)', 'machi ghali (pas cher)'], ['mouchkil (un problème)', 'machi mouchkil (pas de problème)'], ['hna (ici)', 'machi hna (pas ici)']] },
        { title: 'Le futur : ma ghadich', text: 'Pour « je ne vais pas », on dit ma ghadich : ma ghadich nmchi (je ne vais pas y aller). Et pour interdire : ma takoulch (ne mange pas), sans ka-.' }
      ],
      exercises: [
        C('Comment dit-on « je ne veux pas » ?', '', 'Ma bghitch', ['Machi bghit', 'Ma bghit', 'Bghitch'], 'Avec un verbe : ma … ch.'),
        C('Comment dit-on « pas cher » ?', '', 'Machi ghali', ['Ma ghalich', 'Ma ghali', 'Ghalich'], 'Pas de verbe : machi.'),
        C('Comment dit-on « il n’y a pas » ?', '', 'Makaynch', ['Machi kayn', 'Ma kayn', 'Kaynch'], 'Kayn devient makaynch.'),
        C('Comment dit-on « je n’ai rien compris » ?', '', 'Ma fhemt walou', ['Fhemt walouch', 'Machi fhemt walou', 'Fhemtch walou'], 'Avec walou, le -ch tombe.'),
        C('Comment dit-on « je ne vais pas y aller » ?', '', 'Ma ghadich nmchi', ['Machi nmchi', 'Ghadi nmchich', 'Ma nmchi ghadi'], 'Le futur se nie avec ma ghadich.'),
        C('Que veut dire « ma kansmaach » ?', 'Ma kansmaach', 'Je n’entends pas', ['Je ne sais pas', 'Il n’y a pas', 'Je n’ai pas mangé'], 'Kansmaa = j’entends ; la phrase préférée de Lalla Hniya.')
      ]
    },
    m3: {
      id: 'mg3', title: 'Le présent avec ka-, et « tu » pour un garçon ou une fille',
      cards: [
        { title: 'Le verbe « écrire »', text: 'Au présent, on met ka- devant le verbe, puis n- (je), t- (tu, elle), y- (il). Au pluriel, on ajoute -ou à la fin. Certains disent ta- au lieu de ka- : tankteb.',
          table: [['ana kankteb', 'j’écris'], ['nta katkteb', 'tu écris (garçon)'], ['nti katketbi', 'tu écris (fille)'], ['houwa kaykteb', 'il écrit'], ['hiya katkteb', 'elle écrit'], ['hna kanketbou', 'nous écrivons'], ['ntouma katketbou', 'vous écrivez'], ['houma kayketbou', 'ils écrivent']] },
        { title: 'Garçon ou fille ?', text: 'Comme à Alger, et contrairement à Tunis, on parle différemment à un garçon et à une fille. Pour une fille, on ajoute -i au verbe (katkhdmi, kouli) et -a à l’adjectif ou au participe (kidayra, ghadya).',
          table: [['nta / nti', 'tu, toi (garçon / fille)'], ['kidayr? / kidayra?', 'comment tu vas ?'], ['katkhdem / katkhdmi', 'tu travailles'], ['koul / kouli', 'mange !'], ['sir / siri', 'va !'], ['goul / gouli', 'dis !']] },
        { title: 'Sans ka-', text: 'Après bghit (je veux), khass (il faut) et ghadi (futur), le verbe perd son ka- : bghit nmchi (je veux aller), khassni nakoul (je dois manger), ghadi nchouf (je vais voir).' }
      ],
      exercises: [
        C('« Nous écrivons » se dit…', '', 'Kanketbou', ['Kankteb', 'Kayketbou', 'Katketbou'], 'Ka- + n- au début, -ou à la fin.'),
        C('À une fille, « tu travailles » se dit…', '', 'Katkhdmi', ['Katkhdem', 'Kankhdem', 'Katkhdmou'], 'Pour une fille, on ajoute -i.'),
        C('À un garçon, « comment tu vas ? » se dit…', '', 'Kidayr?', ['Kidayra?', 'Kidayrin?', 'Kidayra ntiya?'], 'Kidayr pour un garçon, kidayra pour une fille.'),
        C('À une fille, « mange ! » se dit…', '', 'Kouli!', ['Koul!', 'Kanakoul!', 'Koulou!'], 'Koul pour un garçon, kouli pour une fille.'),
        C('Que veut dire « kaykteb » ?', 'Kaykteb', 'Il écrit', ['Elle écrit', 'J’écris', 'Ils écrivent'], 'Kay- = il.'),
        C('« Je veux aller » se dit…', '', 'Bghit nmchi', ['Bghit kanmchi', 'Kanbghi kanmchi', 'Bghit mchit'], 'Après bghit, pas de ka-.')
      ]
    },
    m4: {
      id: 'mg4', title: 'Le passé : -t, -ti, -at, -tiw',
      cards: [
        { title: 'Le verbe « écrire » au passé', text: 'Au passé, c’est la fin du verbe qui change. Bonne nouvelle : au Maroc, « tu » est le MÊME pour un garçon et une fille : ktebti.',
          table: [['ana ktebt', 'j’ai écrit'], ['nta ktebti', 'tu as écrit (garçon)'], ['nti ktebti', 'tu as écrit (fille)'], ['houwa kteb', 'il a écrit'], ['hiya ketbat', 'elle a écrit'], ['hna ktebna', 'nous avons écrit'], ['ntouma ktebtiw', 'vous avez écrit'], ['houma ketbou', 'ils ont écrit']] },
        { title: 'Les verbes en -a', text: 'Kla (manger), mcha (aller), chra (acheter), nsa (oublier) : la fin change un peu.',
          table: [['klit', 'j’ai mangé'], ['kliti', 'tu as mangé (garçon ou fille)'], ['kla', 'il a mangé'], ['klat', 'elle a mangé'], ['klina', 'nous avons mangé'], ['klitiw', 'vous avez mangé'], ['klaw', 'ils ont mangé']] },
        { title: 'Différence avec Alger', text: 'À Alger, on dit ktebt à un garçon et ktebti à une fille. Au Maroc, ktebt, c’est seulement « j’ai écrit », et ktebti sert pour tous les « tu ».' }
      ],
      exercises: [
        C('« Elle a écrit » se dit…', '', 'Ketbat', ['Ktebt', 'Kteb', 'Ketbou'], '-at = elle.'),
        C('« Nous avons mangé » se dit…', '', 'Klina', ['Klit', 'Kla', 'Klaw'], '-na = nous.'),
        C('À un garçon, « tu as écrit » se dit…', '', 'Ktebti', ['Ktebt', 'Ketbat', 'Ktebtiw'], 'Au Maroc, ktebti pour un garçon comme pour une fille.'),
        C('« Ils ont mangé » se dit…', '', 'Klaw', ['Klina', 'Klat', 'Klitiw'], 'Verbes en -a : -aw = ils.'),
        C('« Vous avez mangé » se dit…', '', 'Klitiw', ['Klitou', 'Klina', 'Kliti'], 'Au Maroc, « vous » au passé finit par -tiw.'),
        C('Que veut dire « nsa » ?', 'Nsa', 'Il a oublié', ['J’ai oublié', 'Elle a oublié', 'Il va oublier'], 'Nsa = il a oublié ; nsit = j’ai oublié.')
      ]
    },
    m5: {
      id: 'mg5', title: 'Le futur avec ghadi, et « il faut » avec khass',
      cards: [
        { title: 'Ghadi + verbe', text: 'Pour le futur, on met « ghadi » (ou juste « gha ») devant le verbe, SANS ka-.',
          table: [['ghadi nmchi', 'je vais y aller'], ['ghadi nji', 'je vais venir'], ['gha nchoufek', 'je vais te voir'], ['ghadi tbra / tbray', 'tu vas guérir (garçon / fille)'], ['ma ghadich nmchi', 'je ne vais pas y aller']] },
        { title: 'Fin ghadi ? Fin ghadya ?', text: 'Comme marque du futur, ghadi ne change pas. Mais quand il veut dire « en route vers », il s’accorde : fin ghadi? (garçon), fin ghadya? (fille), fin ghadyin? (plusieurs).' },
        { title: 'Il faut : khass', text: 'Khass + la fin du possessif = « je dois, tu dois ». Le verbe suit, sans ka-.',
          table: [['khassni nmchi', 'je dois y aller'], ['khassek trtah / trtahi', 'tu dois te reposer (garçon / fille)'], ['khassou sber', 'il lui faut de la patience'], ['khassna nakoulou', 'nous devons manger']] }
      ],
      exercises: [
        C('« Je vais y aller » se dit…', '', 'Ghadi nmchi', ['Mchit', 'Kanmchi', 'Nmchi ghadi'], 'Ghadi devant le verbe, sans ka-.'),
        C('« Je ne vais pas y aller » se dit…', '', 'Ma ghadich nmchi', ['Machi nmchi', 'Ghadi nmchich', 'Ma mchitch'], 'Le futur se nie avec ma ghadich.'),
        C('Une fille demande « tu vas où ? » à une amie :', '', 'Fin ghadya?', ['Fin ghadi?', 'Fin ghadyin?', 'Fin mchiti?'], 'Ghadya pour une fille.'),
        C('À un garçon, « tu dois te reposer » se dit…', '', 'Khassek trtah', ['Khassni trtah', 'Khassek katrtah', 'Ghadi khassek'], 'Khass + -ek = tu dois.'),
        C('Que veut dire « gha nchoufek » ?', 'Gha nchoufek', 'Je vais te voir', ['Je t’ai vu', 'Je te vois', 'Je ne te vois pas'], 'Gha = forme courte de ghadi.'),
        C('« Je dois y aller » se dit…', '', 'Khassni nmchi', ['Khassni kanmchi', 'Khassek nmchi', 'Bghit mchit'], 'Khassni + verbe sans ka-.')
      ]
    }
  };
})();

// =====================================================================================
// Assemblage : niveaux 3 à 5 et grammaire dans le pack « ma »
// =====================================================================================
(() => {
  const D = window.TWB_CONTENT.ma;
  const put = l => { const i = D.levels.findIndex(x => x.id === l.id); D.levels[i] = l; };
  window.TWB_MA_L34.forEach(put);
  put(window.TWB_MA_L5);
  Object.entries(window.TWB_MA_GRAMMAR).forEach(([lv, g]) => { D.levels.find(l => l.id === lv).grammar = g; });
  delete window.TWB_MA_L34; delete window.TWB_MA_L5; delete window.TWB_MA_GRAMMAR;
  // Un mot revu dans un épisode plus loin garde un identifiant unique (carnet, étoiles, révisions)
  const seen = new Set();
  D.levels.forEach(l => l.episodes.forEach(e => e.words.forEach(w => {
    if (seen.has(w.id)) { const old = w.id; w.id = old + '_' + e.id; e.exercises.forEach(x => { if (x.word === old) x.word = w.id; }); }
    seen.add(w.id);
  })));
})();

// =====================================================================================
// LIRE ET ÉCRIRE — l'alphabet arabe pour écrire le marocain
// Mêmes lettres que le parcours tunisien (content-script.js), avec les sons de Casablanca :
// ڭ (kaf à trois points) = g, la lettre du Maroc ; ق se dit q (qahwa) ; ث ذ ظ se disent t, d, d.
// Unités « ms1 »… (progression séparée des autres langues).
// =====================================================================================
(() => {
  const base = window.TWB_SCRIPT;
  const L = JSON.parse(JSON.stringify(base.letters));
  const set = (k, o) => Object.assign(L[k], o);
  set('alif', { ex: ['بابا', 'baba', 'papa'] });
  set('ta', { ex: ['أتاي', 'atay', 'thé'] });
  set('tha', { lat: 't (th)', sound: 'TH de l’anglais « think » en arabe classique. À Casablanca, on dit simplement T : beaucoup écrivent ت à la place (تلاتة, trois).', ex: ['ثلاثة', 'tlata', 'trois'] });
  set('noun', { ex: ['نهار', 'nhar', 'jour'] });
  set('ya', { ex: ['ليمن', 'limen', 'droite'] });
  set('waw', { ex: ['واخا', 'wakha', 'd’accord'] });
  set('jim', { ex: ['جوج', 'jouj', 'deux'] });
  set('hha', { ex: ['حانوت', 'hanout', 'épicerie'] });
  set('kha', { ex: ['خبز', 'khobz', 'pain'] });
  set('dal', { ex: ['دابا', 'daba', 'maintenant'] });
  set('dhal', { lat: 'd (dh)', sound: 'TH de l’anglais « this » en arabe classique. À Casablanca, on dit D : هادا (hada, celui-ci).', ex: ['ذهب', 'deheb', 'or'] });
  set('ra', { ex: ['راس', 'ras', 'tête'] });
  set('zay', { ex: ['زوين', 'zwin', 'beau'] });
  set('sin', { ex: ['سوق', 'souq', 'marché'] });
  set('chin', { ex: ['شوية', 'chwiya', 'un peu'] });
  set('sad', { ex: ['صافي', 'safi', 'c’est bon'] });
  set('dad', { lat: 'd (lourd)', sound: 'Un D « lourd », la langue plus en arrière. À Casablanca, même son que ظ.', ex: ['ضو', 'dou', 'lumière'] });
  set('tta', { ex: ['طاجين', 'tajine', 'tajine'] });
  set('dha', { lat: 'd (lourd)', sound: 'D « lourd ». À Casablanca, même son que ض.', ex: ['ظريف', 'drif', 'gentil'] });
  set('ayn', { ex: ['عافاك', 'aafak', 's’il te plaît'] });
  set('ghayn', { ex: ['غالي', 'ghali', 'cher'] });
  set('fa', { ex: ['فين', 'fin', 'où'] });
  set('qaf', { lat: 'q · 9', sound: 'Q profond, au fond de la gorge. À Casablanca, on le dit vraiment dans beaucoup de mots : قهوة (qahwa). En SMS : 9.', ex: ['قهوة', 'qahwa', 'café'] });
  set('gaf', { ch: 'ڭ', name: 'Gaf', lat: 'g', sound: 'G de « gâteau ». LA lettre du Maroc : un ك avec trois points (on voit aussi گ). Elle sert pour les mots où le ق est devenu g, et les mots venus du français.', ex: ['ڭال', 'gal', 'il a dit'] });
  set('kaf', { ex: ['كاين', 'kayn', 'il y a'] });
  set('lam', { ex: ['ليل', 'lil', 'nuit'] });
  set('mim', { ex: ['مزيان', 'mzyan', 'bien'] });
  set('ha', { ex: ['هنا', 'hna', 'ici'] });
  set('hamza', { sound: 'Un petit arrêt de la voix, comme au milieu de « oh-oh ». Souvent posée sur un alif : أ (ana, moi = أنا). En SMS : 2.', ex: ['أنا', 'ana', 'moi'] });
  set('tam', { ex: ['خبزة', 'khobza', 'un pain'] });
  window.TWB_CONTENT.ma.script = {
    preview: 'سلام',
    letters: L,
    extraWords: [
      ['باب', 'bab', 'porte'], ['بنت', 'bent', 'fille'], ['بيت', 'bit', 'chambre'], ['بابا', 'baba', 'papa'],
      ['زيت', 'zit', 'huile'], ['بحر', 'bhar', 'mer'], ['دار', 'dar', 'maison'], ['حوت', 'hout', 'poisson'],
      ['ورد', 'ward', 'roses'], ['خبز', 'khobz', 'pain'], ['راس', 'ras', 'tête'], ['سوق', 'souq', 'marché'],
      ['شمس', 'chems', 'soleil'], ['صيف', 'sif', 'été'], ['عرس', 'aers', 'mariage'], ['غدا', 'ghedda', 'demain'],
      ['فول', 'foul', 'fèves'], ['قهوة', 'qahwa', 'café'], ['كرش', 'kerch', 'ventre'], ['ليل', 'lil', 'nuit'],
      ['هنا', 'hna', 'ici'], ['طريق', 'triq', 'route'], ['ڭلس', 'gles', 'il s’est assis'], ['ڭاع', 'gaa', 'du tout'],
      ['جوج', 'jouj', 'deux'], ['دابا', 'daba', 'maintenant'], ['بزاف', 'bzzaf', 'beaucoup'], ['أتاي', 'atay', 'thé'],
      ['حانوت', 'hanout', 'épicerie'], ['واخا', 'wakha', 'd’accord'], ['زوين', 'zwin', 'beau'], ['مزيان', 'mzyan', 'bien']
    ],
    units: [
      { id: 'ms1', title: 'Les premières lettres', letters: ['alif', 'ba', 'ta', 'tha'],
        cards: [
          { title: 'On lit de droite à gauche', text: 'L’arabe se lit et s’écrit de droite à gauche. Le marocain s’écrit avec cet alphabet (ou en lettres latines sur WhatsApp).' },
          { title: 'Une forme, plusieurs lettres', text: 'ب ت ث ont la même forme : seuls les points changent. Un point dessous = b. Deux points dessus = t. Trois points dessus = th… qu’à Casablanca on prononce t.' },
          { title: 'Le Alif', text: 'ا est un simple trait vertical. Il donne le son A long, comme dans بابا (baba, papa).' }
        ] },
      { id: 'ms2', title: 'N, Y et OU', letters: ['noun', 'ya', 'waw'],
        cards: [
          { title: 'Encore des points', text: 'ن (n) a un point dessus. ي (y / i) a deux points dessous.' },
          { title: 'Les voyelles longues', text: 'Trois lettres servent aussi de voyelles longues : ا = a, و = ou, ي = i. Exemple : فين (fin, où), واخا (wakha, d’accord).' }
        ] },
      { id: 'ms3', title: 'J, H et KH', letters: ['jim', 'hha', 'kha'],
        cards: [
          { title: 'La même forme, encore', text: 'ج ح خ partagent une forme. Un point dessous = j, comme dans جوج (jouj, deux). Pas de point = h fort (7). Un point dessus = kh.' },
          { title: 'Les chiffres de WhatsApp', text: 'Quand tu écris « 7 » en marocain sur ton téléphone, tu remplaces ح : « 7anout » = حانوت. Pour خ, les Marocains écrivent souvent « kh » : « khobz ».' }
        ] },
      { id: 'ms4', title: 'Les lettres qui ne s’attachent pas', letters: ['dal', 'dhal', 'ra', 'zay'],
        cards: [
          { title: 'Des lettres solitaires', text: 'Presque toutes les lettres s’attachent à celle qui suit. Sauf six : ا د ذ ر ز و. Après elles, on « lève le stylo ». Exemple : دار (dar, la maison), دابا (daba, maintenant).' },
          { title: 'Deux paires', text: 'د (d) et ذ (dh) : un point en plus. À Casablanca, ذ se prononce presque toujours d. ر (r) et ز (z) : un point en plus aussi, comme dans زوين (zwin, beau).' }
        ] },
      { id: 'ms5', title: 'Les S et le CH', letters: ['sin', 'chin', 'sad', 'dad'],
        cards: [
          { title: 'Trois petites dents', text: 'س (s) a trois petites dents. Avec trois points dessus, ça devient ش (ch), comme dans شوية (chwiya, un peu).' },
          { title: 'Les lettres « lourdes »', text: 'ص (s lourd) et ض (d lourd) se prononcent avec la langue plus en arrière, la bouche plus ouverte. صافي (safi) : « c’est bon », le mot pour arrêter une tata.' }
        ] },
      { id: 'ms6', title: 'Les lettres de la gorge', letters: ['tta', 'dha', 'ayn', 'ghayn'],
        cards: [
          { title: 'Ta et Dha lourds', text: 'ط (t lourd) et ظ (d lourd) ont une boucle et une barre : طاجين (tajine). À Casablanca, ظ et ض se prononcent pareil.' },
          { title: 'Le Ayn', text: 'ع (le 3 de WhatsApp) n’existe pas en français : c’est un A serré au fond de la gorge, comme dans عافاك (aafak, s’il te plaît). Avec un point dessus, غ (gh) se dit comme le R parisien : غالي (ghali, cher).' }
        ] },
      { id: 'ms7', title: 'F, Q, G et K', letters: ['fa', 'qaf', 'gaf', 'kaf'],
        cards: [
          { title: 'Fa et Qaf', text: 'ف (f) a un point dessus : فين (fin, où). ق (q, le 9 de WhatsApp) en a deux. À Casablanca, on dit q dans قهوة (qahwa, le café).' },
          { title: 'La lettre du Maroc', text: 'ڭ (g) est un ك avec trois points. C’est la lettre marocaine du son G : ڭال (gal, il a dit), ڭلس (gles, il s’est assis), ڭاع (gaa, du tout). En Algérie et en Tunisie, on écrit ce son ڨ.' },
          { title: 'Le Kaf', text: 'ك (k), comme dans كاين (kayn, il y a).' }
        ] },
      { id: 'ms8', title: 'L, M, H, le A final et la hamza', letters: ['lam', 'mim', 'ha', 'tam', 'hamza'],
        cards: [
          { title: 'Lam et Mim', text: 'ل (l) et م (m), comme dans مزيان (mzyan, bien). Attention : ل suivi de ا s’écrit لا (non !).' },
          { title: 'L’article « l »', text: 'Le « le / la » du marocain s’écrit ال au début du mot : الدار (ddar, la maison), السوق (ssouq, le marché), الحليب (lhlib, le lait).' },
          { title: 'Le A de la fin', text: 'ه est un H léger, comme dans هنا (hna, ici). Avec deux points, ة se lit A en fin de mot : خبزة (khobza), شوية (chwiya).' },
          { title: 'La hamza', text: 'ء est un petit arrêt de la voix. On la voit surtout posée sur un alif : أنا (ana, moi), أتاي (atay, le thé). En SMS, elle s’écrit 2.' }
        ] },
      { id: 'ms9', title: 'Les petites voyelles', letters: [], review: true,
        cards: [
          { title: 'Des voyelles cachées', text: 'Les sons a, i, ou courts ne s’écrivent souvent pas. En marocain, beaucoup de voyelles disparaissent même à l’oral : بزاف (bzzaf), مزيان (mzyan).' },
          { title: 'Les trois signes', text: 'بَ = ba (petit trait dessus). بِ = bi (petit trait dessous). بُ = bou (petite boucle dessus).' },
          { title: 'La chadda', text: 'Le petit « w » ّ double la lettre : بزّاف = bzzaf (deux z), شويّة = chwiya.' }
        ],
        vowels: base.units.find(u => u.vowels).vowels },
      { id: 'ms10', title: 'Lire du vrai marocain', letters: [], review: true, phrases: true,
        cards: [
          { title: 'L’écriture SMS', text: 'Sur WhatsApp, beaucoup de Marocains écrivent en lettres latines avec des chiffres : 3 = ع, 7 = ح, 9 = ق, 2 = ء. Exemple : « 9ahwa » = قهوة, « 3afak » = عافاك.' },
          { title: 'À toi de lire', text: 'Tu connais maintenant toutes les lettres. Place aux phrases du parcours, avec Tata Saadia, Yassine et Si Driss.' }
        ] }
    ]
  };
})();

// =====================================================================================
// LES HISTOIRES DE TATA SAADIA — contes de Jha (Jouha) racontés en marocain, avec questions
// (personnages jha et jar définis dans content-tn-fetes.js ; sinon, portraits par défaut)
// =====================================================================================
(() => {
  const C = (q, tn, good, bad, explain) => ({ type: 'choice', q, tn, options: [{ t: good, ok: true }].concat(bad.map(t => ({ t }))), explain });
  window.TWB_CONTENT.ma.stories = [
    {
      id: 'mst_mesmar', title: 'Le clou de Jha', pitch: 'Jha vend sa maison… mais pas tout à fait.',
      lines: [
        { who: 'saadia', tn: 'Jha baa ddar dyalou.', ar: 'جحا باع الدار ديالو.', fr: 'Jha a vendu sa maison.' },
        { who: 'saadia', tn: 'Walakin khella wahed lmesmar f lhit.', ar: 'ولكن خلا واحد المسمار ف الحيط.', fr: 'Mais il a gardé un clou dans le mur.' },
        { who: 'jha', tn: 'Ddar dyalek, walakin lmesmar dyali!', ar: 'الدار ديالك، ولكن المسمار ديالي!', fr: 'La maison est à toi, mais le clou est à moi !' },
        { who: 'saadia', tn: 'Kolla nhar, Jha kayji ychouf lmesmar dyalou.', ar: 'كل نهار، جحا كيجي يشوف المسمار ديالو.', fr: 'Chaque jour, Jha venait voir son clou.' },
        { who: 'jar', tn: 'A Jha, baraka! Kolla nhar f dari!', ar: 'آ جحا، باركا! كل نهار ف داري!', fr: 'Jha, ça suffit ! Tous les jours chez moi !' },
        { who: 'jha', tn: 'Ana jit nchouf lmesmar dyali, machi nta.', ar: 'أنا جيت نشوف المسمار ديالي، ماشي نتا.', fr: 'Je viens voir mon clou, pas toi.' },
        { who: 'saadia', tn: 'W hada houwa mesmar Jha: sebba bach terjaa dima.', ar: 'وهادا هو مسمار جحا: سبة باش ترجع ديما.', fr: 'Et voilà le « clou de Jha » : un prétexte pour revenir toujours.' }
      ],
      moral: 'Quand quelqu’un garde toujours une excuse pour revenir, on dit : « C’est le clou de Jha ! »',
      quiz: [
        C('Qu’est-ce que Jha a gardé dans la maison ?', '', 'Un clou dans le mur', ['La porte', 'Une chaise', 'Son âne']),
        C('Que veut dire « baraka » ?', 'Baraka!', 'Ça suffit !', ['Bienvenue !', 'Merci !', 'Encore !']),
        C('Que veut dire « lmesmar » ?', 'Lmesmar', 'Le clou', ['Le mur', 'La maison', 'Le jour'])
      ]
    },
    {
      id: 'mst_hmar', title: 'Jha, son fils et l’âne', pitch: 'Quoi qu’ils fassent, les gens trouvent à redire.',
      lines: [
        { who: 'saadia', tn: 'Jha w weldou mchaw l ssouq b lhmar.', ar: 'جحا وولدو مشاو للسوق بالحمار.', fr: 'Jha et son fils sont allés au souk avec l’âne.' },
        { who: 'saadia', tn: 'Jha rkeb, w weldou mcha aala rjlih.', ar: 'جحا ركب، وولدو مشى على رجليه.', fr: 'Jha est monté, et son fils a marché à pied.' },
        { who: 'jar', tn: 'Meskin lweld!', ar: 'مسكين الولد!', fr: 'Le pauvre enfant !' },
        { who: 'saadia', tn: 'Mn baad, lweld rkeb, w Jha mcha.', ar: 'من بعد، الولد ركب، وجحا مشى.', fr: 'Alors l’enfant est monté, et Jha a marché.' },
        { who: 'jar', tn: 'Hchouma! Lweld rakeb w bbah kaymchi!', ar: 'حشومة! الولد راكب وباه كيمشي!', fr: 'Quelle honte ! L’enfant est assis et son père marche !' },
        { who: 'saadia', tn: 'Rkbou bjouj.', ar: 'ركبو بجوج.', fr: 'Ils sont montés tous les deux.' },
        { who: 'jar', tn: 'Meskin lhmar!', ar: 'مسكين الحمار!', fr: 'Le pauvre âne !' },
        { who: 'saadia', tn: 'Mchaw bjouj aala rjlihoum.', ar: 'مشاو بجوج على رجليهم.', fr: 'Ils ont marché tous les deux.' },
        { who: 'jar', tn: 'Aandhoum hmar w kaymchiw aala rjlihoum! Hahaha!', ar: 'عندهم حمار وكيمشيو على رجليهم! ههه!', fr: 'Ils ont un âne et ils marchent à pied ! Hahaha !' },
        { who: 'jha', tn: 'Chefti a weldi? Ma tqderch tredi nnas kamlin.', ar: 'شفتي آ ولدي؟ ما تقدرش ترضي الناس كاملين.', fr: 'Tu vois, mon fils ? On ne peut pas plaire à tout le monde.' }
      ],
      moral: 'On ne peut pas plaire à tout le monde : fais ce qui te semble juste.',
      quiz: [
        C('Où vont Jha et son fils ?', '', 'Au souk', ['À la plage', 'Chez Tata Saadia', 'À l’école']),
        C('Que veut dire « meskin » ?', 'Meskin lhmar!', 'Le pauvre', ['Le beau', 'Le rapide', 'Le grand']),
        C('Que veut dire « hmar » ?', 'Hmar', 'Âne', ['Cheval', 'Mouton', 'Chat'])
      ]
    }
  ];
})();
