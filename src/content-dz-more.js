// Tounsi w Bark — pack algérien « dz » (suite) : niveaux 3 à 5, grammaire « Le coin de Khalti Zhor », parcours « Lire et écrire ».
// Règles : docs/reference-algerien.md. À faire relire par un natif d'Alger.

window.TWB_DZ_L34 = [
  // =====================================================================================
  // NIVEAU 3 — Invité au mariage
  // =====================================================================================
  {
    id: 'd3', num: 3, name: 'Invité au mariage',
    goal: 'Tenir une vraie conversation pendant le mariage de Sabrina',
    boss: { id: 'd3boss', title: 'L’épreuve du mariage', pitch: '12 questions, à écrire et à écouter. Il en faut 8 pour danser avec la mariée.', count: 12, pass: 8 },
    episodes: [
      // ---------------------------------------------------------------- d3e1
      {
        id: 'd3e1', title: 'La grande nouvelle',
        pitch: 'Khalti Zhor a une nouvelle. Elle l’a déjà annoncée à toute la Casbah. Tu es le dernier à le savoir.',
        cast: ['zhor'],
        scene: [
          { who: 'zhor', tn: 'Ya {petit}, aandi khbar mlih! Sabrina rayha tetzawej!', ar: 'يا {petitAr}، عندي خبر مليح! صابرينة رايحة تتزوج!', fr: 'Écoute, {petitFr}, j’ai une bonne nouvelle ! Sabrina va se marier !' },
          { who: 'me', tn: 'Mabrouk! Waqtach el aars?', ar: 'مبروك! وقتاش العرس؟', fr: 'Félicitations ! C’est quand, le mariage ?' },
          { who: 'zhor', tn: 'Nhar el khmis, fi chhar tmanya. W {g:nta|nti} lazem {g:tkoun|tkouni} temma!', ar: 'نهار الخميس، في شهر تمانية. و{g:نتا|نتي} لازم {g:تكون|تكوني} تمّا!', fr: 'Un jeudi, en août. Et toi, tu dois être là !', note: 'À Alger, on donne souvent les mois par leur numéro : chhar tmanya, « le mois huit ».' },
          { who: 'me', tn: 'Akid! Rani {g:farhan|farhana} bezzaf.', ar: 'أكيد! راني {g:فرحان|فرحانة} بزاف.', fr: 'Bien sûr ! Je suis trop content{e}.' },
          { who: 'me', tn: 'W el aris, chkoun?', ar: 'والعريس، شكون؟', fr: 'Et le marié, c’est qui ?' },
          { who: 'zhor', tn: 'Wlid Tata Nassima! Rajel mlih, yekhdem fel banka.', ar: 'وليد طاطا نسيمة! راجل مليح، يخدم فالبانكا.', fr: 'Le fils de Tata Nassima ! Un homme bien, il travaille à la banque.', note: 'Tata Nassima l’a donc su avant tout le monde. Comme d’habitude.' },
          { who: 'zhor', tn: 'W {g:nta|nti}, waqtach nfarhou bik?', ar: 'و{g:نتا|نتي}، وقتاش نفرحو بيك؟', fr: 'Et toi, c’est quand qu’on fête ton mariage ?', note: 'La question arrive toujours. Toujours.' },
          { who: 'me', tn: 'Ya Khalti… ki yji el mektoub, inchallah!', ar: 'يا خالتي… كي يجي المكتوب، إن شاء الله!', fr: 'Tata… quand le destin viendra, si Dieu le veut !', note: 'La réponse magique : personne ne discute avec le mektoub.' },
          { who: 'zhor', tn: 'Inchallah qrib! Ana aandi {g:wahda|wahed} fi rassi…', ar: 'إن شاء الله قريب! أنا عندي {g:واحدة|واحد} في راسي…', fr: 'Bientôt, si Dieu le veut ! J’ai déjà quelqu’un en tête…', note: 'Tu es venu{e} pour un mariage. Tu repars peut-être avec le tien.' }
        ],
        words: [
          { id: 'z_aandi', tn: 'Aandi', ar: 'عندي', fr: 'J’ai', ex: 'Aandek = tu as. Ma aandich = je n’ai pas.' },
          { id: 'z_khbar', tn: 'Khbar', ar: 'خبر', fr: 'Une nouvelle', ex: 'Aandi khbar mlih = j’ai une bonne nouvelle.' },
          { id: 'z_tetzawej', tn: 'Tetzawej', ar: 'تتزوج', fr: 'Elle se marie', ex: 'Sabrina rayha tetzawej = Sabrina va se marier.' },
          { id: 'z_mabrouk', tn: 'Mabrouk', ar: 'مبروك', fr: 'Félicitations', ex: 'On répond : Allah ybarek fik.' },
          { id: 'z_aars', tn: 'El aars', ar: 'العرس', fr: 'Le mariage (la fête)', ex: 'Waqtach el aars? = c’est quand, le mariage ?' },
          { id: 'z_aris', tn: 'El aris', ar: 'العريس', fr: 'Le marié', ex: 'El aroussa = la mariée.' },
          { id: 'z_chhar', tn: 'Chhar', ar: 'شهر', fr: 'Mois', ex: 'Chhar tmanya = août (le mois huit).' },
          { id: 'z_lazem', tn: 'Lazem', ar: 'لازم', fr: 'Il faut', ex: 'Lazem tkoun temma = tu dois être là.' },
          { id: 'z_akid', tn: 'Akid', ar: 'أكيد', fr: 'Bien sûr', ex: 'Akid, rani jay!' },
          { id: 'z_farhan', tn: 'Farhan / farhana', ar: 'فرحان / فرحانة', fr: 'Content / contente', ex: 'Rani farhana bezzaf = je suis trop contente.' },
          { id: 'z_nfarhou', tn: 'Waqtach nfarhou bik?', ar: 'وقتاش نفرحو بيك؟', fr: 'C’est quand qu’on fête ton mariage ?', ex: 'La question préférée de toutes les tatas.' },
          { id: 'z_mektoub', tn: 'Ki yji el mektoub', ar: 'كي يجي المكتوب', fr: 'Quand le destin viendra', ex: 'Ki = quand. Parfait pour esquiver.' }
        ],
        exercises: [
          { type: 'reply', who: 'zhor', line: { tn: 'Sabrina rayha tetzawej!', ar: 'صابرينة رايحة تتزوج!', fr: 'Sabrina va se marier !' }, options: [
            { tn: 'Mabrouk! Waqtach el aars?', fr: 'Félicitations ! C’est quand, le mariage ?', ok: true },
            { tn: 'Ghali bezzaf!', fr: 'C’est trop cher !', why: 'Vrai, un mariage coûte cher. Mais ça ne se dit pas à Khalti.' },
            { tn: 'Win el hanout?', fr: 'Où est l’épicerie ?', why: 'Khalti t’annonce un mariage et tu cherches du pain. Les priorités…' }] },
          { type: 'reply', who: 'zhor', line: { tn: 'W {g:nta|nti}, waqtach nfarhou bik?', ar: 'و{g:نتا|نتي}، وقتاش نفرحو بيك؟', fr: 'Et toi, c’est quand qu’on fête ton mariage ?' }, options: [
            { tn: 'Ki yji el mektoub, inchallah!', fr: 'Quand le destin viendra, si Dieu le veut !', ok: true },
            { tn: 'Ghodwa!', fr: 'Demain !', why: 'Demain ?! Khalti a déjà appelé le traiteur et invité 300 personnes.' },
            { tn: 'Nheb el qahwa.', fr: 'J’aime le café.', why: 'Elle parle de ton mariage, tu parles de café. Elle va te trouver quelqu’un qui aime le café.' }] },
          { type: 'order', tn: 'Mabrouk waqtach el aars', fr: 'Félicitations, c’est quand le mariage ?', tokens: ['Mabrouk', 'waqtach', 'el', 'aars'] },
          { type: 'speak', tn: 'Ki yji el mektoub, inchallah', ar: 'كي يجي المكتوب، إن شاء الله', fr: 'Quand le destin viendra, si Dieu le veut' }
        ],
        mission: { who: 'zhor', goal: 'Khalti Zhor t’annonce le mariage : félicite-la, demande la date et qui est le marié, puis esquive poliment quand elle parle de TON mariage.', win: 'L’élève a dit mabrouk, demandé la date ou le marié, et esquivé la question sur son propre mariage, en algérien.' }
      },
      // ---------------------------------------------------------------- d3e2
      {
        id: 'd3e2', title: 'Qu’est-ce que je mets ?',
        pitch: 'Sabrina t’aide à choisir ta tenue. Elle a des règles. Beaucoup de règles.',
        cast: ['sabrina'],
        scene: [
          { who: 'sabrina', tn: 'Wach {g:rak rayah telbes|raki rayha telebsi} lel aars?', ar: 'واش {g:راك رايح تلبس|راكي رايحة تلبسي} للعرس؟', fr: 'Tu vas mettre quoi pour le mariage ?' },
          { who: 'me', tn: 'Mazal ma naarafch. Haja bayda?', ar: 'مازال ما نعرفش. حاجة بيضا؟', fr: 'Je ne sais pas encore. Quelque chose de blanc ?' },
          { who: 'sabrina', tn: 'Lala! El abyad ghir lel aroussa!', ar: 'لالا! الأبيض غير للعروسة!', fr: 'Non, non ! Le blanc, c’est seulement pour la mariée !' },
          { who: 'me', tn: 'Mlih… w el ahmar?', ar: 'مليح… والأحمر؟', fr: 'D’accord… et le rouge ?' },
          { who: 'sabrina', tn: 'Ahmar bezzaf! Khalti Zhor tahdar alik aam kamel.', ar: 'أحمر بزاف! خالتي زهور تهدر عليك عام كامل.', fr: 'Trop rouge ! Khalti Zhor va parler de toi pendant un an.' },
          { who: 'me', tn: 'W el kehal? Wela el azraq?', ar: 'والكحل؟ ولا الأزرق؟', fr: 'Et le noir ? Ou le bleu ?' },
          { who: 'sabrina', tn: 'El azraq chbab alik! W lazem {g:jabador|karakou}.', ar: 'الأزرق شباب عليك! ولازم {g:جابادور|كاراكو}.', fr: 'Le bleu te va bien ! Et il te faut un {g:jabador|karakou}.', note: 'Le karakou : la veste de velours brodée d’or des mariées et des invitées d’Alger. Le jabador : l’ensemble brodé des hommes.' },
          { who: 'me', tn: 'Ma aandich! Mnin njibou?', ar: 'ما عنديش! منين نجيبو؟', fr: 'Je n’en ai pas ! Je le trouve où ?' },
          { who: 'sabrina', tn: '{g:Ma tkhafch|Ma tkhafich}, ana nsellfek wahed!', ar: '{g:ما تخافش|ما تخافيش}، أنا نسلفك واحد!', fr: 'Pas de panique, je t’en prête un !', note: 'Il appartenait à sa tante, qui le tenait de sa mère. Interdiction de renverser de la chorba dessus.' }
        ],
        words: [
          { id: 'z_telbes', tn: 'Telbes / telebsi', ar: 'تلبس / تلبسي', fr: 'Tu mets (un vêtement)', ex: 'Telbes à un garçon, telebsi à une fille. Nelbes = je mets.' },
          { id: 'z_manaarafch', tn: 'Ma naarafch', ar: 'ما نعرفش', fr: 'Je ne sais pas', ex: 'Naaraf = je sais.' },
          { id: 'z_mazal', tn: 'Mazal', ar: 'مازال', fr: 'Encore, pas encore', ex: 'Mazal ma naarafch = je ne sais pas encore.' },
          { id: 'z_haja', tn: 'Haja', ar: 'حاجة', fr: 'Une chose, quelque chose', ex: 'Haja bayda = quelque chose de blanc.' },
          { id: 'z_abyad', tn: 'Abyad / bayda', ar: 'أبيض / بيضا', fr: 'Blanc / blanche', ex: 'Réservé à la mariée. Attention.' },
          { id: 'z_ahmar', tn: 'Ahmar / hamra', ar: 'أحمر / حمرا', fr: 'Rouge', ex: 'Ahmar bezzaf = trop rouge.' },
          { id: 'z_azraq', tn: 'Azraq / zarqa', ar: 'أزرق / زرقا', fr: 'Bleu / bleue', ex: 'El bhar azraq = la mer est bleue.' },
          { id: 'z_kehal', tn: 'Kehal / kahla', ar: 'كحل / كحلة', fr: 'Noir / noire', ex: 'Se prononce « k-hal ». À Alger, le noir, c’est kehal.' },
          { id: 'z_ghir', tn: 'Ghir', ar: 'غير', fr: 'Seulement, juste', ex: 'Ghir chwiya = juste un peu.' },
          { id: 'z_chbabalik', tn: 'Chbab alik', ar: 'شباب عليك', fr: 'Ça te va bien', ex: 'Le plus beau compliment de Sabrina.' },
          { id: 'z_karakou', tn: 'Karakou / jabador', ar: 'كاراكو / جابادور', fr: 'Tenues traditionnelles d’Alger', ex: 'Karakou pour les femmes, jabador pour les hommes.' },
          { id: 'z_tkhaf', tn: 'Ma tkhafch / ma tkhafich', ar: 'ما تخافش / ما تخافيش', fr: 'N’aie pas peur, pas de panique', ex: 'Ma tkhafch à un garçon, ma tkhafich à une fille.' }
        ],
        exercises: [
          { type: 'reply', who: 'sabrina', line: { tn: 'Wach {g:rak rayah telbes|raki rayha telebsi} lel aars?', ar: 'واش {g:راك رايح تلبس|راكي رايحة تلبسي} للعرس؟', fr: 'Tu vas mettre quoi pour le mariage ?' }, options: [
            { tn: 'Mazal ma naarafch.', fr: 'Je ne sais pas encore.', ok: true },
            { tn: 'Haja bayda!', fr: 'Quelque chose de blanc !', why: 'Sabrina manque de s’évanouir. Le blanc, c’est pour la mariée !' },
            { tn: 'Qahwa w khobz.', fr: 'Un café et du pain.', why: 'Sabrina parle de ta tenue, pas de ton petit-déjeuner.' }] },
          { type: 'reply', who: 'sabrina', line: { tn: 'El azraq chbab alik!', ar: 'الأزرق شباب عليك!', fr: 'Le bleu te va bien !' }, options: [
            { tn: 'Saha, ya Sabrina!', fr: 'Merci, Sabrina !', ok: true },
            { tn: 'Lala, ghali bezzaf.', fr: 'Non, c’est trop cher.', why: 'C’est un compliment, pas un prix. Elle ne t’a rien vendu.' },
            { tn: 'Win el bus?', fr: 'Où est le bus ?', why: 'Tu t’enfuis après un compliment ? Reste, elle n’a pas fini avec toi.' }] },
          { type: 'order', tn: 'El abyad ghir lel aroussa', fr: 'Le blanc, c’est seulement pour la mariée', tokens: ['El', 'abyad', 'ghir', 'lel', 'aroussa'] },
          { type: 'speak', tn: 'Mazal ma naarafch', ar: 'مازال ما نعرفش', fr: 'Je ne sais pas encore' }
        ],
        mission: { who: 'sabrina', goal: 'Choisis ta tenue avec Sabrina en parlant des couleurs, sans jamais proposer le blanc, et demande-lui où trouver un karakou ou un jabador.', win: 'L’élève a proposé au moins deux couleurs et parlé de sa tenue avec Sabrina, en algérien.' }
      },
      // ---------------------------------------------------------------- d3e3
      {
        id: 'd3e3', title: 'La soirée du henné',
        pitch: 'Bougies, youyous et henné. Mima bénit tout le monde. Même le chat.',
        cast: ['mima', 'sabrina', 'zhor'],
        scene: [
          { who: 'mima', tn: 'Aji ya {petit}, {g:qaad|qaadi} hdaya. Aatini yeddek!', ar: 'أجي يا {petitAr}، {g:اقعد|اقعدي} حدايا. أعطيني يدّك!', fr: 'Viens, {petitFr}, assieds-toi à côté de moi. Donne-moi ta main !' },
          { who: 'me', tn: 'Ih ya Mima, ghir chwiya henna!', ar: 'إيه يا ميما، غير شوية حنة!', fr: 'Oui, Mima, juste un peu de henné !' },
          { who: 'mima', tn: 'Bezzaf? Mlih, mlih!', ar: 'بزاف؟ مليح، مليح!', fr: 'Beaucoup ? Très bien, très bien !', note: 'Mima entend mal. Tu vas repartir orange jusqu’aux coudes.' },
          { who: 'sabrina', tn: 'Khalli, el henna tjib ezzher!', ar: 'خلّي، الحنة تجيب الزهر!', fr: 'Laisse, le henné porte bonheur !' },
          { who: 'mima', tn: 'Rabbi yfarhek kima farhetna Sabrina, ya {petit}!', ar: 'ربي يفرحك كيما فرّحتنا صابرينة، يا {petitAr}!', fr: 'Que Dieu te donne du bonheur, comme Sabrina nous en a donné !' },
          { who: 'me', tn: 'Amin ya Mima, Rabbi ykhallik lina!', ar: 'آمين يا ميما، ربي يخليك لينا!', fr: 'Amen, Mima, que Dieu te garde pour nous !' },
          { who: 'zhor', tn: 'Yallah, ghanni maana!', ar: 'يالله، غنّي معانا!', fr: 'Allez, chante avec nous !', note: 'Les youyous (zgharit) démarrent. Les vitres tremblent jusqu’à Bab El Oued.' },
          { who: 'me', tn: 'Ana? Ma naarafch nghanni…', ar: 'أنا؟ ما نعرفش نغنّي…', fr: 'Moi ? Je ne sais pas chanter…' },
          { who: 'mima', tn: 'Ghanni! Ana ma nesmaa walou!', ar: 'غنّي! أنا ما نسمع والو!', fr: 'Chante ! Moi, je n’entends rien !', note: 'Le public idéal pour débuter.' }
        ],
        words: [
          { id: 'z_henna', tn: 'El henna', ar: 'الحنة', fr: 'Le henné', ex: 'Lilet el henna = la soirée du henné, avant le mariage.' },
          { id: 'z_yedd', tn: 'Yedd / yeddek', ar: 'يد / يدّك', fr: 'Main / ta main', ex: 'Aatini yeddek = donne-moi ta main.' },
          { id: 'z_qaad', tn: 'Qaad / qaadi', ar: 'اقعد / اقعدي', fr: 'Assieds-toi', ex: 'Qaad à un garçon, qaadi à une fille.' },
          { id: 'z_hdaya', tn: 'Hdaya', ar: 'حدايا', fr: 'À côté de moi', ex: 'Hdak = à côté de toi.' },
          { id: 'z_khalli', tn: 'Khalli', ar: 'خلّي', fr: 'Laisse', ex: 'Khalli, ma kayen walou = laisse, ce n’est rien.' },
          { id: 'z_zher', tn: 'Ezzher', ar: 'الزهر', fr: 'La chance', ex: 'Tjib ezzher = ça porte bonheur.' },
          { id: 'z_yfarhek', tn: 'Rabbi yfarhek', ar: 'ربي يفرحك', fr: 'Que Dieu te rende heureux / heureuse', ex: 'On répond : Amin!' },
          { id: 'z_kima', tn: 'Kima', ar: 'كيما', fr: 'Comme', ex: 'Kima Sabrina = comme Sabrina.' },
          { id: 'z_amin', tn: 'Amin', ar: 'آمين', fr: 'Amen', ex: 'La réponse à chaque bénédiction de Mima. Il y en aura beaucoup.' },
          { id: 'z_ykhallik', tn: 'Rabbi ykhallik lina', ar: 'ربي يخليك لينا', fr: 'Que Dieu te garde pour nous', ex: 'Ce qu’on dit, avec tendresse, aux grands-mères.' },
          { id: 'z_ghanni', tn: 'Ghanni / nghanni', ar: 'غنّي / نغنّي', fr: 'Chante / je chante', ex: 'Ma naarafch nghanni = je ne sais pas chanter.' },
          { id: 'z_nesmaa', tn: 'Nesmaa', ar: 'نسمع', fr: 'J’entends', ex: 'Ma nesmaa walou = je n’entends rien (le -ch tombe avec walou).' }
        ],
        exercises: [
          { type: 'reply', who: 'mima', line: { tn: 'Rabbi yfarhek, ya {petit}!', ar: 'ربي يفرحك، يا {petitAr}!', fr: 'Que Dieu te donne du bonheur !' }, options: [
            { tn: 'Amin ya Mima, Rabbi ykhallik lina!', fr: 'Amen, Mima, que Dieu te garde pour nous !', ok: true },
            { tn: 'Bechhal?', fr: 'C’est combien ?', why: 'Les bénédictions de Mima sont gratuites. Et illimitées.' },
            { tn: 'Win el métro?', fr: 'Où est le métro ?', why: 'Tu fuis le henné ? Mima te tient déjà la main.' }] },
          { type: 'reply', who: 'zhor', line: { tn: 'Yallah, ghanni maana!', ar: 'يالله، غنّي معانا!', fr: 'Allez, chante avec nous !' }, options: [
            { tn: 'Ana? Ma naarafch nghanni…', fr: 'Moi ? Je ne sais pas chanter…', ok: true },
            { tn: 'Aatini khobz.', fr: 'Donne-moi du pain.', why: 'On chante, on ne mange pas. Enfin… pas encore.' },
            { tn: 'Lbareh.', fr: 'Hier.', why: 'Tu as chanté hier ? Personne ne t’a entendu{e}. Recommence.' }] },
          { type: 'order', tn: 'El henna tjib ezzher', fr: 'Le henné porte bonheur', tokens: ['El', 'henna', 'tjib', 'ezzher'] },
          { type: 'speak', tn: 'Amin ya Mima, Rabbi ykhallik lina', ar: 'آمين يا ميما، ربي يخليك لينا', fr: 'Amen, Mima, que Dieu te garde pour nous' }
        ],
        mission: { who: 'mima', goal: 'Pendant le henné, laisse Mima te mettre du henné (mais juste un peu !), réponds à ses bénédictions et dis-lui que tu ne sais pas chanter.', win: 'L’élève a demandé peu de henné, répondu à une bénédiction (amin) et parlé de chanter, en algérien.' }
      },
      // ---------------------------------------------------------------- d3e4
      {
        id: 'd3e4', title: 'La fête',
        pitch: 'L’orchestre de chaâbi attaque. Amine veut danser. Tata Nassima veut savoir qui tu es.',
        cast: ['amine', 'nassima'],
        scene: [
          { who: 'amine', tn: '{g:Chouf|Choufi}, el orkestra taa chaabi bdat!', ar: '{g:شوف|شوفي}، الأوركسترا تاع شعبي بدات!', fr: 'Regarde, l’orchestre de chaâbi a commencé !' },
          { who: 'me', tn: 'Wallah kayen el jaw! Nheb el chaabi.', ar: 'والله كاين الجو! نحب الشعبي.', fr: 'Wallah, il y a de l’ambiance ! J’adore le chaâbi.' },
          { who: 'amine', tn: 'Hada chaabi taa bessah, kima El Anqa!', ar: 'هادا شعبي تاع بصّح، كيما العنقا!', fr: 'Ça, c’est du vrai chaâbi, comme El Anka !', note: 'El Hadj M’hamed El Anka : le maître du chaâbi d’Alger. Amine ne le connaît que par son grand-père. Chut.' },
          { who: 'nassima', tn: 'Ya Amine! W {g:hada|hadi} chkoun?', ar: 'يا أمين! و{g:هادا|هادي} شكون؟', fr: 'Amine ! Et {g:lui|elle}, c’est qui ?' },
          { who: 'amine', tn: '{g:Hada wlid|Hadi bent} khalti, {g:jay|jaya} men Fransa.', ar: '{g:هادا وليد|هادي بنت} خالتي، {g:جاي|جاية} من فرانسا.', fr: '{g:C’est le fils|C’est la fille} de ma tante, {g:venu|venue} de France.' },
          { who: 'me', tn: 'Tcharrafna, ya Tata Nassima! W hadi Mima, jeddti.', ar: 'تشرّفنا، يا طاطا نسيمة! وهادي ميما، جدّتي.', fr: 'Enchanté{e}, Tata Nassima ! Et voici Mima, ma grand-mère.' },
          { who: 'nassima', tn: 'Naarafha! Ana naaraf gaa ennas hna.', ar: 'نعرفها! أنا نعرف ڨاع الناس هنا.', fr: 'Je la connais ! Moi, je connais tout le monde ici.', note: 'C’est vrai. Elle connaît aussi ta pointure et la date de ton dernier rhume.' },
          { who: 'amine', tn: 'Yallah, aji nchathou!', ar: 'يالله، أجي نشطحو!', fr: 'Allez, viens, on danse !' },
          { who: 'me', tn: 'Ma naarafch nochtah… ghir chwiya!', ar: 'ما نعرفش نشطح… غير شوية!', fr: 'Je ne sais pas danser… juste un peu !', note: 'Dix minutes plus tard, c’est toi qui ne veux plus t’arrêter.' }
        ],
        words: [
          { id: 'z_orkestra', tn: 'El orkestra', ar: 'الأوركسترا', fr: 'L’orchestre', ex: 'Pas de mariage à Alger sans orkestra.' },
          { id: 'z_chaabi', tn: 'El chaabi', ar: 'الشعبي', fr: 'Le chaâbi (musique populaire d’Alger)', ex: 'Nheb el chaabi = j’adore le chaâbi.' },
          { id: 'z_bdat', tn: 'Bda / bdat', ar: 'بدا / بدات', fr: 'Il a commencé / elle a commencé', ex: 'El orkestra bdat = l’orchestre a commencé.' },
          { id: 'z_jaw', tn: 'El jaw', ar: 'الجو', fr: 'L’ambiance', ex: 'Kayen el jaw! = il y a de l’ambiance !' },
          { id: 'z_bessah', tn: 'Taa bessah', ar: 'تاع بصّح', fr: 'Vrai, pour de vrai', ex: 'Bessah? = c’est vrai ?' },
          { id: 'z_hada', tn: 'Hada / hadi', ar: 'هادا / هادي', fr: 'Celui-ci / celle-ci, voici', ex: 'Hadi Mima = voici Mima.' },
          { id: 'z_wlid', tn: 'Wlid / bent', ar: 'وليد / بنت', fr: 'Fils / fille', ex: 'Wlid khalti = le fils de ma tante, mon cousin.' },
          { id: 'z_tcharrafna', tn: 'Tcharrafna', ar: 'تشرّفنا', fr: 'Enchanté(e)', ex: 'À dire après les présentations.' },
          { id: 'z_jeddti', tn: 'Jeddti', ar: 'جدّتي', fr: 'Ma grand-mère', ex: 'Dans la famille, on dit Mima.' },
          { id: 'z_naarafha', tn: 'Naarafha', ar: 'نعرفها', fr: 'Je la connais', ex: 'Naarfou = je le connais.' },
          { id: 'z_ennas', tn: 'Ennas', ar: 'الناس', fr: 'Les gens', ex: 'Gaa ennas = tout le monde.' },
          { id: 'z_nchathou', tn: 'Nchathou / nochtah', ar: 'نشطحو / نشطح', fr: 'On danse / je danse', ex: 'Le mot d’Alger pour danser : chtah.' }
        ],
        exercises: [
          { type: 'reply', who: 'nassima', line: { tn: 'W {g:nta|nti}, chkoun?', ar: 'و{g:نتا|نتي}، شكون؟', fr: 'Et toi, tu es qui ?' }, options: [
            { tn: '{g:Ana wlid|Ana bent} okht Khalti Zhor.', fr: 'Je suis {g:le fils|la fille} de la sœur de Khalti Zhor.', ok: true },
            { tn: 'Bechhal el kilo?', fr: 'C’est combien le kilo ?', why: 'Tu es à un mariage, pas au marché. Nassima note quand même.' },
            { tn: 'Ghodwa, inchallah.', fr: 'Demain, si Dieu le veut.', why: 'Tu es quelqu’un… demain ? Nassima est très intriguée.' }] },
          { type: 'reply', who: 'amine', line: { tn: 'Yallah, aji nchathou!', ar: 'يالله، أجي نشطحو!', fr: 'Allez, viens, on danse !' }, options: [
            { tn: 'Ma naarafch nochtah… ghir chwiya!', fr: 'Je ne sais pas danser… juste un peu !', ok: true },
            { tn: 'Aatini qahwa.', fr: 'Donne-moi un café.', why: 'Amine t’invite à danser, pas au comptoir.' },
            { tn: 'Wach rak?', fr: 'Comment ça va ?', why: 'Il va très bien, merci. Maintenant, danse.' }] },
          { type: 'order', tn: 'Wallah kayen el jaw', fr: 'Wallah, il y a de l’ambiance', tokens: ['Wallah', 'kayen', 'el', 'jaw'] },
          { type: 'speak', tn: 'Tcharrafna, ya Tata Nassima', ar: 'تشرّفنا، يا طاطا نسيمة', fr: 'Enchanté{e}, Tata Nassima' }
        ],
        mission: { who: 'nassima', goal: 'Tata Nassima te demande qui tu es : présente-toi (ta famille), présente-lui quelqu’un, et dis ce que tu penses de l’ambiance.', win: 'L’élève s’est présenté avec un lien de famille, a présenté quelqu’un (hada / hadi) et parlé de la fête, en algérien.' }
      },
      // ---------------------------------------------------------------- d3e5
      {
        id: 'd3e5', title: 'Les adieux de la mariée',
        pitch: 'La mariée s’en va. Tout le monde pleure. Khalti Zhor pense déjà au mariage suivant.',
        cast: ['sabrina', 'zhor'],
        scene: [
          { who: 'sabrina', tn: 'Ya {prenom}, saha li {g:jit|jiti}!', ar: 'يا {prenom}، صحة لي {g:جيت|جيتي}!', fr: '{prenom}, merci d’être venu{e} !' },
          { who: 'me', tn: 'Mabrouk alik, ya Sabrina! Raki chaba kima el qmar.', ar: 'مبروك عليك، يا صابرينة! راكي شابة كيما القمر.', fr: 'Félicitations, Sabrina ! Tu es belle comme la lune.' },
          { who: 'sabrina', tn: 'Saha! Rani nebki men el farha…', ar: 'صحة! راني نبكي من الفرحة…', fr: 'Merci ! Je pleure de joie…' },
          { who: 'zhor', tn: 'Ma tebkich ya benti, el makyaj!', ar: 'ما تبكيش يا بنتي، الماكياج!', fr: 'Ne pleure pas, ma fille, le maquillage !', note: 'Priorités de Khalti : 1. le bonheur de la mariée. 2. le maquillage. Ou l’inverse.' },
          { who: 'me', tn: 'Rabbi ysaadkoum, w yjib el khir!', ar: 'ربي يسعدكم، ويجيب الخير!', fr: 'Que Dieu vous rende heureux et vous apporte le bien !' },
          { who: 'sabrina', tn: 'Rah ntwahchek bezzaf! Waqtach nchoufek?', ar: 'راح نتوحشك بزاف! وقتاش نشوفك؟', fr: 'Tu vas beaucoup me manquer ! Quand est-ce que je te revois ?' },
          { who: 'me', tn: 'Qrib, inchallah. Saha ala gaa wach drti, ya Khalti!', ar: 'قريب، إن شاء الله. صحة على ڨاع واش درتي، يا خالتي!', fr: 'Bientôt, si Dieu le veut. Merci pour tout ce que tu as fait, tata !' },
          { who: 'zhor', tn: 'Bla mzia! {g:Nta|Nti} men eddar. W el aars el jay, taak inchallah!', ar: 'بلا مزية! {g:نتا|نتي} من الدار. والعرس الجاي، تاعك إن شاء الله!', fr: 'De rien ! Tu es de la famille. Et le prochain mariage, c’est le tien, si Dieu le veut !', note: 'Elle n’abandonne jamais. Jamais.' }
        ],
        words: [
          { id: 'z_sahalijit', tn: 'Saha li jit', ar: 'صحة لي جيت', fr: 'Merci d’être venu(e)', ex: 'À une fille : saha li jiti.' },
          { id: 'z_chaba', tn: 'Chaba', ar: 'شابة', fr: 'Belle', ex: 'Chbab = beau. Raki chaba = tu es belle.' },
          { id: 'z_qmar', tn: 'Kima el qmar', ar: 'كيما القمر', fr: 'Comme la lune (très belle)', ex: 'Le compliment parfait pour une mariée.' },
          { id: 'z_nebki', tn: 'Nebki / tebki', ar: 'نبكي / تبكي', fr: 'Je pleure / tu pleures', ex: 'Ma tebkich = ne pleure pas.' },
          { id: 'z_farha', tn: 'El farha', ar: 'الفرحة', fr: 'La joie', ex: 'Men el farha = de joie.' },
          { id: 'z_ysaadkoum', tn: 'Rabbi ysaadkoum', ar: 'ربي يسعدكم', fr: 'Que Dieu vous rende heureux', ex: 'Pour les mariés.' },
          { id: 'z_ntwahchek', tn: 'Rah ntwahchek', ar: 'راح نتوحشك', fr: 'Tu vas me manquer', ex: 'Twahchtek = tu m’as manqué.' },
          { id: 'z_nchoufek', tn: 'Nchoufek', ar: 'نشوفك', fr: 'Je te vois, je te revois', ex: 'Waqtach nchoufek? = quand est-ce que je te revois ?' },
          { id: 'z_gaa', tn: 'Gaa', ar: 'ڨاع', fr: 'Tout, tous', ex: 'Gaa ennas = tout le monde. Très algérois.' },
          { id: 'z_drti', tn: 'Wach drti', ar: 'واش درتي', fr: 'Ce que tu as fait', ex: 'Drt = j’ai fait (et tu as fait, à un garçon) ; drti = tu as fait (à une fille).' },
          { id: 'z_blamzia', tn: 'Bla mzia', ar: 'بلا مزية', fr: 'De rien', ex: 'La réponse à « saha ».' },
          { id: 'z_eljay', tn: 'El jay', ar: 'الجاي', fr: 'Le prochain', ex: 'El aars el jay = le prochain mariage. Méfiance.' }
        ],
        exercises: [
          { type: 'reply', who: 'sabrina', line: { tn: 'Saha li {g:jit|jiti}!', ar: 'صحة لي {g:جيت|جيتي}!', fr: 'Merci d’être venu{e} !' }, options: [
            { tn: 'Mabrouk alik! Raki chaba kima el qmar.', fr: 'Félicitations ! Tu es belle comme la lune.', ok: true },
            { tn: 'Bechhal el karakou?', fr: 'Combien coûte le karakou ?', why: 'Elle te remercie et tu demandes le prix de sa tenue. Le jour de son mariage.' },
            { tn: 'Ma nesmaa walou.', fr: 'Je n’entends rien.', why: 'Ça, c’est la technique de Mima. Toi, tu as très bien entendu.' }] },
          { type: 'reply', who: 'zhor', line: { tn: 'W el aars el jay, taak inchallah!', ar: 'والعرس الجاي، تاعك إن شاء الله!', fr: 'Et le prochain mariage, c’est le tien, si Dieu le veut !' }, options: [
            { tn: 'Ki yji el mektoub, ya Khalti!', fr: 'Quand le destin viendra, tata !', ok: true },
            { tn: 'Bla mzia.', fr: 'De rien.', why: 'Elle ne t’a pas remercié{e} : elle t’a marié{e}. Nuance.' },
            { tn: 'Rani nebki men el farha.', fr: 'Je pleure de joie.', why: 'Khalti prend ça pour un oui. Elle appelle déjà l’orchestre.' }] },
          { type: 'order', tn: 'Saha ala gaa wach drti', fr: 'Merci pour tout ce que tu as fait', tokens: ['Saha', 'ala', 'gaa', 'wach', 'drti'] },
          { type: 'speak', tn: 'Rah ntwahchek bezzaf', ar: 'راح نتوحشك بزاف', fr: 'Tu vas beaucoup me manquer' }
        ],
        mission: { who: 'sabrina', goal: 'Dis au revoir à Sabrina : fais-lui un compliment, souhaite du bonheur aux mariés et dis-lui qu’elle va te manquer.', win: 'L’élève a fait un compliment, souhaité du bonheur aux mariés et exprimé une émotion ou un merci, en algérien.' }
      }
    ]
  },

  // =====================================================================================
  // NIVEAU 4 — Négociateur de Meissonnier
  // =====================================================================================
  {
    id: 'd4', num: 4, name: 'Négociateur de Meissonnier',
    goal: 'Argumenter et plaisanter',
    boss: { id: 'd4boss', title: 'L’épreuve de Meissonnier', pitch: '12 questions, presque tout à l’écrit. Il en faut 8 pour qu’Ammi Kaddour te fasse « le prix du quartier ».', count: 12, pass: 8 },
    episodes: [
      // ---------------------------------------------------------------- d4e1
      {
        id: 'd4e1', title: 'Le marché de Meissonnier',
        pitch: 'Ammi Kaddour vend les plus belles tomates d’Alger. C’est lui qui le dit. Très fort.',
        cast: ['kaddour'],
        scene: [
          { who: 'kaddour', tn: 'Aji, aji! Tomatich bnina, tchina hlouwa!', ar: 'أجي، أجي! طماطيش بنينة، تشينة حلوة!', fr: 'Viens, viens ! Des tomates délicieuses, des oranges toutes sucrées !' },
          { who: 'me', tn: 'Bechhal el kilo taa tomatich?', ar: 'بشحال الكيلو تاع طماطيش؟', fr: 'C’est combien, le kilo de tomates ?' },
          { who: 'kaddour', tn: 'Mitin dinar. Ghir lik.', ar: 'ميتين دينار. غير ليك.', fr: 'Deux cents dinars. Rien que pour toi.', note: 'Il dit « ghir lik » à tout le monde depuis 1987.' },
          { who: 'me', tn: 'Mitin?! Ghali bezzaf! Dirli soum mlih.', ar: 'ميتين؟! غالي بزاف! ديرلي سوم مليح.', fr: 'Deux cents ?! Beaucoup trop cher ! Fais-moi un bon prix.' },
          { who: 'kaddour', tn: 'Ya {petit}, rani nkhser!', ar: 'يا {petitAr}، راني نخسر!', fr: 'Mais je perds de l’argent, moi !', note: 'Ammi Kaddour « perd de l’argent » depuis quarante ans. Il a trois maisons.' },
          { who: 'me', tn: 'Mya w khamsin, w naddi zouj kilo.', ar: 'مية وخمسين، وندّي زوج كيلو.', fr: 'Cent cinquante, et j’en prends deux kilos.' },
          { who: 'kaddour', tn: 'Mya w tmanin, akher soum.', ar: 'مية وتمانين، آخر سوم.', fr: 'Cent quatre-vingts, dernier prix.' },
          { who: 'me', tn: 'Mya w settin, w nwalli kol simana!', ar: 'مية وستين، ونولّي كل سيمانة!', fr: 'Cent soixante, et je reviens chaque semaine !' },
          { who: 'kaddour', tn: 'Mlih! W nzidlek tchina, kado!', ar: 'مليح! ونزيدلك تشينة، كادو!', fr: 'D’accord ! Et je t’ajoute une orange, cadeau !', note: 'Tu as gagné vingt dinars et une orange. Lui a gagné un client à vie.' }
        ],
        words: [
          { id: 'z_tomatich', tn: 'Tomatich', ar: 'طماطيش', fr: 'Tomates', ex: 'Le kilo de tomatich : le baromètre de l’économie algérienne.' },
          { id: 'z_tchina', tn: 'Tchina', ar: 'تشينة', fr: 'Orange(s)', ex: 'Le mot d’Alger pour les oranges.' },
          { id: 'z_bnina', tn: 'Bnin / bnina', ar: 'بنين / بنينة', fr: 'Délicieux / délicieuse', ex: 'El couscous taa Khalti bnin!' },
          { id: 'z_mitin', tn: 'Mitin', ar: 'ميتين', fr: 'Deux cents', ex: 'Mya = 100, mitin = 200, mya w khamsin = 150.' },
          { id: 'z_soum', tn: 'Soum', ar: 'سوم', fr: 'Le prix (qu’on négocie)', ex: 'Dirli soum mlih = fais-moi un bon prix.' },
          { id: 'z_dirli', tn: 'Dirli', ar: 'ديرلي', fr: 'Fais-moi', ex: 'Dir = fais (à un garçon), diri (à une fille).' },
          { id: 'z_nkhser', tn: 'Rani nkhser', ar: 'راني نخسر', fr: 'Je perds de l’argent', ex: 'La phrase préférée de tous les marchands.' },
          { id: 'z_naddi', tn: 'Naddi', ar: 'ندّي', fr: 'Je prends, j’emporte', ex: 'Naddi zouj kilo = j’en prends deux kilos.' },
          { id: 'z_akhersoum', tn: 'Akher soum', ar: 'آخر سوم', fr: 'Dernier prix', ex: 'Ce n’est presque jamais le dernier.' },
          { id: 'z_nwalli', tn: 'Nwalli', ar: 'نولّي', fr: 'Je reviens', ex: 'Nwalli ghodwa = je reviens demain.' },
          { id: 'z_simana', tn: 'Simana', ar: 'سيمانة', fr: 'Semaine', ex: 'Kol simana = chaque semaine.' },
          { id: 'z_kado', tn: 'Kado', ar: 'كادو', fr: 'Cadeau', ex: 'Nzidlek kado = je t’ajoute un cadeau.' }
        ],
        exercises: [
          { type: 'reply', who: 'kaddour', line: { tn: 'Mitin dinar el kilo.', ar: 'ميتين دينار الكيلو.', fr: 'Deux cents dinars le kilo.' }, options: [
            { tn: 'Ghali bezzaf! Dirli soum mlih.', fr: 'Trop cher ! Fais-moi un bon prix.', ok: true },
            { tn: 'Mabrouk!', fr: 'Félicitations !', why: 'Tu le félicites pour son prix ? Il va l’augmenter.' },
            { tn: 'Mlih, aatini aachra kilo!', fr: 'Parfait, donne-m’en dix kilos !', why: 'Sans négocier ? Kaddour va raconter ça à tout le marché.' }] },
          { type: 'reply', who: 'kaddour', line: { tn: 'Mya w tmanin, akher soum.', ar: 'مية وتمانين، آخر سوم.', fr: 'Cent quatre-vingts, dernier prix.' }, options: [
            { tn: 'Mya w settin, w nwalli kol simana!', fr: 'Cent soixante, et je reviens chaque semaine !', ok: true },
            { tn: 'Mitin w khamsin!', fr: 'Deux cent cinquante !', why: 'Tu négocies à la hausse. Kaddour t’adore, mais il s’inquiète pour toi.' },
            { tn: 'Rabbi yfarhek.', fr: 'Que Dieu te rende heureux.', why: 'Très gentil, mais ça ne fait pas baisser les tomates.' }] },
          { type: 'order', tn: 'Ghali bezzaf dirli soum mlih', fr: 'Trop cher, fais-moi un bon prix', tokens: ['Ghali', 'bezzaf', 'dirli', 'soum', 'mlih'] },
          { type: 'speak', tn: 'Mya w settin, w nwalli kol simana', ar: 'مية وستين، ونولّي كل سيمانة', fr: 'Cent soixante, et je reviens chaque semaine' }
        ],
        mission: { who: 'kaddour', goal: 'Achète deux kilos de tomates à Ammi Kaddour pour 160 dinars le kilo maximum. Il commence à 200.', win: 'L’élève a négocié en algérien et obtenu 160 dinars le kilo ou moins.' }
      },
      // ---------------------------------------------------------------- d4e2
      {
        id: 'd4e2', title: 'Les vêtements',
        pitch: 'Ammi Kaddour vend aussi des chemises. Et des chaussures. Et sans doute des voitures.',
        cast: ['amine', 'kaddour'],
        scene: [
          { who: 'amine', tn: '{g:Chouf|Choufi} hadik el qmija! Chaba bezzaf.', ar: '{g:شوف|شوفي} هاديك القميجة! شابة بزاف.', fr: 'Regarde cette chemise ! Elle est super belle.' },
          { who: 'me', tn: 'Ammi Kaddour, nqder nqiss hadi?', ar: 'عمي قدور، نقدر نقيس هادي؟', fr: 'Ammi Kaddour, je peux essayer celle-ci ?' },
          { who: 'kaddour', tn: 'Akid! Qyasek chhal?', ar: 'أكيد! قياسك شحال؟', fr: 'Bien sûr ! Tu fais quelle taille ?' },
          { who: 'me', tn: 'Ma naarafch, nqiss w nchouf.', ar: 'ما نعرفش، نقيس ونشوف.', fr: 'Je ne sais pas, j’essaie et je vois.' },
          { who: 'me', tn: 'Dayqa alia… w el serwal wasaa bezzaf!', ar: 'ضيقة عليا… والسروال واسع بزاف!', fr: 'Elle est serrée… et le pantalon est beaucoup trop large !', note: 'Tu ressembles à un ballon de foot dans une chaussette.' },
          { who: 'kaddour', tn: 'Hadi qyasek! Tlata alaf dinar.', ar: 'هادي قياسك! تلاتة آلاف دينار.', fr: 'Celle-ci, c’est ta taille ! Trois mille dinars.' },
          { who: 'kaddour', tn: 'Machi ghali! Hadi selaa mliha.', ar: 'ماشي غالي! هادي سلعة مليحة.', fr: 'Ce n’est pas cher ! C’est de la bonne marchandise.' },
          { who: 'amine', tn: '{g:Dir rouhek rayah|Diri rouhek rayha}… rah yaayyetlek!', ar: '{g:دير روحك رايح|ديري روحك رايحة}… راه يعيّطلك!', fr: 'Fais semblant de partir… il va te rappeler !' },
          { who: 'kaddour', tn: '{g:Arwah, arwah|Arwahi, arwahi}! Alfin, w khlas!', ar: '{g:أرواح، أرواح|أرواحي، أرواحي}! ألفين، وخلاص!', fr: 'Reviens, reviens ! Deux mille, et c’est fini !', note: 'La technique d’Amine marche à tous les coups. Ne le dis à personne.' }
        ],
        words: [
          { id: 'z_qmija', tn: 'Qmija', ar: 'قميجة', fr: 'Chemise', ex: 'Hadik el qmija = cette chemise-là.' },
          { id: 'z_serwal', tn: 'Serwal', ar: 'سروال', fr: 'Pantalon', ex: 'El serwal wasaa = le pantalon est large.' },
          { id: 'z_nqder', tn: 'Nqder', ar: 'نقدر', fr: 'Je peux', ex: 'Ma nqderch = je ne peux pas.' },
          { id: 'z_nqiss', tn: 'Nqiss', ar: 'نقيس', fr: 'J’essaie (un vêtement)', ex: 'Nqder nqiss? = je peux essayer ?' },
          { id: 'z_qyas', tn: 'Qyas', ar: 'قياس', fr: 'Taille, pointure', ex: 'Qyasek chhal? = tu fais quelle taille ?' },
          { id: 'z_dayqa', tn: 'Dayaq / dayqa', ar: 'ضيّق / ضيقة', fr: 'Serré / serrée', ex: 'Dayqa alia = elle est serrée pour moi.' },
          { id: 'z_wasaa', tn: 'Wasaa', ar: 'واسع', fr: 'Large', ex: 'Le contraire de dayaq.' },
          { id: 'z_machi', tn: 'Machi ghali', ar: 'ماشي غالي', fr: 'Ce n’est pas cher', ex: 'Machi = « pas », devant un adjectif ou un nom.' },
          { id: 'z_selaa', tn: 'Selaa', ar: 'سلعة', fr: 'Marchandise', ex: 'Selaa mliha = de la bonne marchandise. Selon le vendeur.' },
          { id: 'z_dirrouhek', tn: 'Dir rouhek', ar: 'دير روحك', fr: 'Fais semblant', ex: 'À une fille : diri rouhek.' },
          { id: 'z_arwah', tn: 'Arwah', ar: 'أرواح', fr: 'Viens, reviens', ex: 'Arwah hna! = viens ici ! À une fille : arwahi.' },
          { id: 'z_khlas', tn: 'Khlas', ar: 'خلاص', fr: 'C’est fini, ça suffit', ex: 'Alfin w khlas = deux mille, point final.' }
        ],
        exercises: [
          { type: 'reply', who: 'kaddour', line: { tn: 'Qyasek chhal?', ar: 'قياسك شحال؟', fr: 'Tu fais quelle taille ?' }, options: [
            { tn: 'Ma naarafch, nqiss w nchouf.', fr: 'Je ne sais pas, j’essaie et je vois.', ok: true },
            { tn: 'Mitin dinar.', fr: 'Deux cents dinars.', why: 'C’est ta taille ou ton budget ? Kaddour note les deux.' },
            { tn: 'Rani {g:farhan|farhana}.', fr: 'Je suis content{e}.', why: 'Tant mieux, mais il te demande ta taille, pas ton humeur.' }] },
          { type: 'reply', who: 'kaddour', line: { tn: 'Tlata alaf dinar.', ar: 'تلاتة آلاف دينار.', fr: 'Trois mille dinars.' }, options: [
            { tn: 'Ghali bezzaf! Alfin, w khlas.', fr: 'Trop cher ! Deux mille, point final.', ok: true },
            { tn: 'Machi ghali!', fr: 'Ce n’est pas cher !', why: 'C’est SA réplique, pas la tienne ! Il te remercie et encaisse.' },
            { tn: 'Tcharrafna.', fr: 'Enchanté{e}.', why: 'Vous vous êtes déjà présentés. Maintenant, on parle argent.' }] },
          { type: 'order', tn: 'Machi ghali hadi selaa mliha', fr: 'Ce n’est pas cher, c’est de la bonne marchandise', tokens: ['Machi', 'ghali', 'hadi', 'selaa', 'mliha'] },
          { type: 'speak', tn: 'Nqder nqiss hadi?', ar: 'نقدر نقيس هادي؟', fr: 'Je peux essayer celle-ci ?' }
        ],
        mission: { who: 'kaddour', goal: 'Essaie une chemise chez Ammi Kaddour, dis si elle est serrée ou large, puis fais baisser le prix de 3 000 à 2 000 dinars.', win: 'L’élève a demandé à essayer, parlé de la taille et négocié jusqu’à 2 000 dinars ou moins, en algérien.' }
      },
      // ---------------------------------------------------------------- d4e3
      {
        id: 'd4e3', title: 'Chez la docteure Amel',
        pitch: 'Tu te sens mal depuis hier. La docteure Amel a déjà une petite idée de la cause.',
        cast: ['amel'],
        scene: [
          { who: 'amel', tn: '{g:Qaad|Qaadi}. Wach bik?', ar: '{g:اقعد|اقعدي}. واش بيك؟', fr: 'Assieds-toi. Qu’est-ce que tu as ?' },
          { who: 'me', tn: 'Rani {g:mrid|mrida}, ya doktora. Rassi yewjaani.', ar: 'راني {g:مريض|مريضة}، يا دكتورة. راسي يوجعني.', fr: 'Je suis malade, docteure. J’ai mal à la tête.' },
          { who: 'amel', tn: 'Aandek skhana?', ar: 'عندك سخانة؟', fr: 'Tu as de la fièvre ?' },
          { who: 'me', tn: 'Chwiya. W kerchi tani yewjaani.', ar: 'شوية. وكرشي تاني يوجعني.', fr: 'Un peu. Et j’ai mal au ventre aussi.' },
          { who: 'amel', tn: 'Men waqtach?', ar: 'من وقتاش؟', fr: 'Depuis quand ?' },
          { who: 'me', tn: 'Men lbareh. Klit aand Khalti Zhor.', ar: 'من البارح. كليت عند خالتي زهور.', fr: 'Depuis hier. J’ai mangé chez Khalti Zhor.' },
          { who: 'amel', tn: 'Ahh… w chhal {g:klit|kliti}?', ar: 'آه… وشحال {g:كليت|كليتي}؟', fr: 'Ah… et tu as mangé combien ?' },
          { who: 'me', tn: 'Tlata tbassi kesksou, w bourek, w qalb el louz…', ar: 'تلاتة طباسي كسكسو، وبوراك، وقلب اللوز…', fr: 'Trois assiettes de couscous, des bourek, du kalb el louz…' },
          { who: 'amel', tn: 'Machi skhana, hadi takhma! {g:Rtah|Rtahi}, {g:echreb|echerbi} el ma, w ma {g:takoulch|takoulich} bezzaf.', ar: 'ماشي سخانة، هادي تخمة! {g:ارتاح|ارتاحي}، {g:اشرب|اشربي} الما، وما {g:تاكولش|تاكوليش} بزاف.', fr: 'Ce n’est pas de la fièvre, c’est une indigestion ! Repose-toi, bois de l’eau, et ne mange pas trop.', note: 'Seul traitement : ne pas passer devant chez Khalti Zhor pendant 48 heures.' }
        ],
        words: [
          { id: 'z_wachbik', tn: 'Wach bik?', ar: 'واش بيك؟', fr: 'Qu’est-ce que tu as ?', ex: 'Ce qu’on demande quand quelqu’un a une sale tête.' },
          { id: 'z_mrid', tn: 'Mrid / mrida', ar: 'مريض / مريضة', fr: 'Malade', ex: 'Rani mrid (garçon), rani mrida (fille).' },
          { id: 'z_rassi', tn: 'Rassi', ar: 'راسي', fr: 'Ma tête', ex: 'Ras = tête. Rassek = ta tête.' },
          { id: 'z_yewjaani', tn: 'Yewjaani', ar: 'يوجعني', fr: 'Ça me fait mal', ex: 'Rassi yewjaani = j’ai mal à la tête.' },
          { id: 'z_skhana', tn: 'Skhana', ar: 'سخانة', fr: 'Fièvre', ex: 'Aandi skhana = j’ai de la fièvre.' },
          { id: 'z_kerch', tn: 'Kerchi', ar: 'كرشي', fr: 'Mon ventre', ex: 'Kerch = ventre.' },
          { id: 'z_tani', tn: 'Tani', ar: 'تاني', fr: 'Aussi', ex: 'Ana tani = moi aussi.' },
          { id: 'z_menwaqtach', tn: 'Men waqtach?', ar: 'من وقتاش؟', fr: 'Depuis quand ?', ex: 'Men lbareh = depuis hier.' },
          { id: 'z_klit', tn: 'Klit', ar: 'كليت', fr: 'J’ai mangé', ex: 'Kliti = tu as mangé (à une fille).' },
          { id: 'z_takhma', tn: 'Takhma', ar: 'تخمة', fr: 'Indigestion', ex: 'La maladie la plus courante après un repas chez une tata.' },
          { id: 'z_rtah', tn: 'Rtah / rtahi', ar: 'ارتاح / ارتاحي', fr: 'Repose-toi', ex: 'Rtah à un garçon, rtahi à une fille.' },
          { id: 'z_echreb', tn: 'Echreb / echerbi', ar: 'اشرب / اشربي', fr: 'Bois', ex: 'Echreb el ma = bois de l’eau.' }
        ],
        exercises: [
          { type: 'reply', who: 'amel', line: { tn: 'Wach bik?', ar: 'واش بيك؟', fr: 'Qu’est-ce que tu as ?' }, options: [
            { tn: 'Rani {g:mrid|mrida}. Rassi yewjaani.', fr: 'Je suis malade. J’ai mal à la tête.', ok: true },
            { tn: 'Rani {g:farhan|farhana} bezzaf!', fr: 'Je suis trop content{e} !', why: 'Content{e}, chez le médecin ? Elle va quand même prendre ta tension.' },
            { tn: 'Bechhal el kilo?', fr: 'C’est combien le kilo ?', why: 'La docteure Amel ne vend pas de tomates. Mauvaise salle d’attente.' }] },
          { type: 'reply', who: 'amel', line: { tn: 'Men waqtach?', ar: 'من وقتاش؟', fr: 'Depuis quand ?' }, options: [
            { tn: 'Men lbareh.', fr: 'Depuis hier.', ok: true },
            { tn: 'Mitin dinar.', fr: 'Deux cents dinars.', why: 'Tu lui donnes un prix ? Elle demande depuis quand tu es malade.' },
            { tn: 'Tlata tbassi kesksou.', fr: 'Trois assiettes de couscous.', why: 'Ça, c’est la cause, pas la date. Mais elle note.' }] },
          { type: 'order', tn: 'Rassi yewjaani w aandi skhana', fr: 'J’ai mal à la tête et j’ai de la fièvre', tokens: ['Rassi', 'yewjaani', 'w', 'aandi', 'skhana'] },
          { type: 'speak', tn: 'Kerchi yewjaani men lbareh', ar: 'كرشي يوجعني من البارح', fr: 'J’ai mal au ventre depuis hier' }
        ],
        mission: { who: 'amel', goal: 'Explique à la docteure Amel où tu as mal, depuis quand, et ce que tu as mangé, puis écoute ses conseils.', win: 'L’élève a dit où il a mal, depuis quand et ce qu’il a mangé, en algérien.' }
      },
      // ---------------------------------------------------------------- d4e4
      {
        id: 'd4e4', title: 'Sortie à Riadh El Feth',
        pitch: 'Rendez-vous avec Amine au Maqam Echahid. Il a dit « 4 h 30 ». Il a dit ça.',
        cast: ['amine'],
        scene: [
          { who: 'amine', tn: 'Allo! Ntlaqaw lyoum fi Riad El Feth?', ar: 'ألو! نتلاقاو اليوم في رياض الفتح؟', fr: 'Allô ! On se retrouve aujourd’hui à Riadh El Feth ?' },
          { who: 'me', tn: 'Ih! Waqtach?', ar: 'إيه! وقتاش؟', fr: 'Oui ! À quelle heure ?' },
          { who: 'amine', tn: 'Ala rebaa w nos. Nerkbou el telefirik w ntalaou l Maqam Echahid.', ar: 'على ربعة ونص. نركبو التيليفيريك ونطلعو لمقام الشهيد.', fr: 'À quatre heures et demie. On prend le téléphérique et on monte au Maqam Echahid.', note: 'Le téléphérique part du Jardin d’essai du Hamma. La vue vaut le voyage.' },
          { who: 'me', tn: 'Mlih. Rani nestennak taht.', ar: 'مليح. راني نستناك تحت.', fr: 'D’accord. Je t’attends en bas.' },
          { who: 'me', tn: 'Ya Amine! Chhal rahi essaa? Rani hna men rebaa!', ar: 'يا أمين! شحال راهي الساعة؟ راني هنا من ربعة!', fr: 'Amine ! Il est quelle heure ? Je suis là depuis quatre heures !' },
          { who: 'amine', tn: 'Rani fi ettriq, rani fi ettriq!', ar: 'راني في الطريق، راني في الطريق!', fr: 'Je suis en route, je suis en route !', note: 'La phrase la plus prononcée d’Alger. Traduction : je n’ai pas encore mis mes chaussures.' },
          { who: 'me', tn: 'Taatalt saa kamla!', ar: 'تعطّلت ساعة كاملة!', fr: 'Tu as une heure de retard !' },
          { who: 'amine', tn: 'Ma {g:tqallaqch|tqallqich}! {g:Chouf|Choufi}: men el foq, tban Dzayer kamla.', ar: 'ما {g:تقلقش|تقلقيش}! {g:شوف|شوفي}: من الفوق، تبان دزاير كاملة.', fr: 'Ne t’énerve pas ! Regarde : d’en haut, on voit tout Alger.' },
          { who: 'me', tn: 'Wallah chbab! Ghodwa, ngoullek ala tlata.', ar: 'والله شباب! غدوة، نڨولك على تلاتة.', fr: 'C’est vraiment beau ! Demain, je te donne rendez-vous à trois heures.', note: 'Comme ça, il arrivera à quatre heures et demie. Tu apprends vite.' }
        ],
        words: [
          { id: 'z_ntlaqaw', tn: 'Ntlaqaw', ar: 'نتلاقاو', fr: 'On se retrouve', ex: 'Win ntlaqaw? = on se retrouve où ?' },
          { id: 'z_ala', tn: 'Ala rebaa', ar: 'على ربعة', fr: 'À quatre heures', ex: 'Ala khamsa = à cinq heures.' },
          { id: 'z_nos', tn: 'W nos', ar: 'ونص', fr: 'Et demie', ex: 'W rbaa = et quart. Ala tlata w nos = à trois heures et demie.' },
          { id: 'z_nerkbou', tn: 'Nerkbou', ar: 'نركبو', fr: 'On prend (un transport), on monte dedans', ex: 'Nerkbou el métro = on prend le métro.' },
          { id: 'z_ntalaou', tn: 'Ntalaou', ar: 'نطلعو', fr: 'On monte', ex: 'Le contraire : nhabtou = on descend.' },
          { id: 'z_nestenna', tn: 'Nestennak', ar: 'نستناك', fr: 'Je t’attends', ex: 'Rani nestennak = je suis en train de t’attendre. Longtemps.' },
          { id: 'z_taht', tn: 'Taht / el foq', ar: 'تحت / الفوق', fr: 'En bas / en haut', ex: 'Men el foq = d’en haut.' },
          { id: 'z_essaa', tn: 'Chhal rahi essaa?', ar: 'شحال راهي الساعة؟', fr: 'Il est quelle heure ?', ex: 'Saa = heure. Saa kamla = une heure entière.' },
          { id: 'z_fittriq', tn: 'Rani fi ettriq', ar: 'راني في الطريق', fr: 'Je suis en route', ex: 'Ne jamais croire cette phrase.' },
          { id: 'z_taatalt', tn: 'Taatalt', ar: 'تعطّلت', fr: 'Tu es en retard / je suis en retard', ex: 'Smahli, taatalt = pardon, je suis en retard.' },
          { id: 'z_tqallaq', tn: 'Ma tqallaqch', ar: 'ما تقلقش', fr: 'Ne t’énerve pas', ex: 'À une fille : ma tqallqich.' },
          { id: 'z_dzayer', tn: 'Dzayer', ar: 'دزاير', fr: 'Alger (et l’Algérie)', ex: 'Dzayer kamla = tout Alger.' }
        ],
        exercises: [
          { type: 'reply', who: 'amine', line: { tn: 'Ntlaqaw lyoum?', ar: 'نتلاقاو اليوم؟', fr: 'On se retrouve aujourd’hui ?' }, options: [
            { tn: 'Ih, ala rebaa w nos!', fr: 'Oui, à quatre heures et demie !', ok: true },
            { tn: 'Rassi yewjaani.', fr: 'J’ai mal à la tête.', why: 'L’excuse classique. Amine ne te croit pas une seconde.' },
            { tn: 'Bla mzia.', fr: 'De rien.', why: 'Il ne t’a pas remercié{e}, il t’a donné rendez-vous.' }] },
          { type: 'reply', who: 'amine', line: { tn: 'Rani fi ettriq!', ar: 'راني في الطريق!', fr: 'Je suis en route !' }, options: [
            { tn: 'Taatalt saa kamla!', fr: 'Tu as une heure de retard !', ok: true },
            { tn: 'Mabrouk!', fr: 'Félicitations !', why: 'Le féliciter d’être en retard ? Il va recommencer.' },
            { tn: 'Nqder nqiss hadi?', fr: 'Je peux essayer celle-ci ?', why: 'Tu n’es plus chez Kaddour. Tu es au Maqam Echahid, tout{e} seul{e}.' }] },
          { type: 'order', tn: 'Ntlaqaw ala rebaa w nos', fr: 'On se retrouve à quatre heures et demie', tokens: ['Ntlaqaw', 'ala', 'rebaa', 'w', 'nos'] },
          { type: 'speak', tn: 'Chhal rahi essaa?', ar: 'شحال راهي الساعة؟', fr: 'Il est quelle heure ?' }
        ],
        mission: { who: 'amine', goal: 'Fixe un rendez-vous avec Amine : le lieu, l’heure précise, et ce que vous allez faire. Puis reproche-lui gentiment son retard.', win: 'L’élève a fixé un lieu et une heure, parlé de l’activité et mentionné le retard, en algérien.' }
      },
      // ---------------------------------------------------------------- d4e5
      {
        id: 'd4e5', title: 'Le téléphone perdu',
        pitch: 'Ton téléphone a disparu dans le bus. Ammi Rabah, lui, a toujours une solution. Et une histoire.',
        cast: ['rabah'],
        scene: [
          { who: 'rabah', tn: 'Wach bik, ya {petit}? Wejhek sfar!', ar: 'واش بيك، يا {petitAr}؟ وجهك صفر!', fr: 'Qu’est-ce que tu as ? Tu es tout{e} pâle !', note: 'Mot à mot : « ton visage est jaune ».' },
          { who: 'me', tn: 'Ammi Rabah, dayyaat el tilifoun taai!', ar: 'عمي رابح، ضيّعت التيليفون تاعي!', fr: 'Ammi Rabah, j’ai perdu mon téléphone !' },
          { who: 'rabah', tn: 'Kifach? Win?', ar: 'كيفاش؟ وين؟', fr: 'Comment ? Où ?' },
          { who: 'me', tn: 'Rkebt el bus men el Bosta. Kont {g:qaaed|qaaeda} lour, w kont nchouf el bhar.', ar: 'ركبت الباص من البوسطة. كنت {g:قاعد|قاعدة} لور، وكنت نشوف البحر.', fr: 'J’ai pris le bus à la Grande Poste. J’étais assis{e} au fond, et je regardais la mer.' },
          { who: 'rabah', tn: 'W baad?', ar: 'وبعد؟', fr: 'Et après ?' },
          { who: 'me', tn: 'Ki hbatt fi Bab El Oued, ma lqitouch fi jibi!', ar: 'كي هبطت في باب الواد، ما لقيتوش في جيبي!', fr: 'Quand je suis descendu{e} à Bab El Oued, je ne l’ai pas trouvé dans ma poche !' },
          { who: 'rabah', tn: '{g:Ma tkhafch|Ma tkhafich}! Naayyetlou men el tilifoun taai.', ar: '{g:ما تخافش|ما تخافيش}! نعيّطلو من التيليفون تاعي.', fr: 'Pas de panique ! Je l’appelle avec mon téléphone.' },
          { who: 'rabah', tn: 'Allo? … Hada el chafour taa el bus! Lqah taht el korsi.', ar: 'ألو؟ … هادا الشافور تاع الباص! لقاه تحت الكرسي.', fr: 'Allô ? … C’est le chauffeur du bus ! Il l’a trouvé sous le siège.', note: 'Pendant l’appel, Ammi Rabah lui a aussi raconté sa vie, son dernier concert de chaâbi et le mariage de Sabrina.' },
          { who: 'me', tn: 'Hamdoullah! Saha bezzaf, ya Ammi Rabah!', ar: 'الحمد لله! صحة بزاف، يا عمي رابح!', fr: 'Dieu merci ! Merci beaucoup, Ammi Rabah !' }
        ],
        words: [
          { id: 'z_dayyaat', tn: 'Dayyaat', ar: 'ضيّعت', fr: 'J’ai perdu', ex: 'Dayyaat el tilifoun taai = j’ai perdu mon téléphone.' },
          { id: 'z_tilifoun', tn: 'Tilifoun', ar: 'تيليفون', fr: 'Téléphone', ex: 'On dit aussi « portable ».' },
          { id: 'z_taai', tn: 'Taai / taak', ar: 'تاعي / تاعك', fr: 'À moi, mon / à toi, ton', ex: 'El tilifoun taai = mon téléphone. Jamais « dyal » à Alger !' },
          { id: 'z_rkebt', tn: 'Rkebt', ar: 'ركبت', fr: 'J’ai pris (un transport), je suis monté(e)', ex: 'Rkebt el métro = j’ai pris le métro.' },
          { id: 'z_kont', tn: 'Kont', ar: 'كنت', fr: 'J’étais', ex: 'Kont nchouf = je regardais. Kont + présent = passé qui dure.' },
          { id: 'z_qaaed', tn: 'Qaaed / qaaeda', ar: 'قاعد / قاعدة', fr: 'Assis / assise', ex: 'Kont qaaeda lour = j’étais assise au fond.' },
          { id: 'z_ki', tn: 'Ki', ar: 'كي', fr: 'Quand (au milieu d’une phrase)', ex: 'Ki hbatt = quand je suis descendu. Pour une question : waqtach.' },
          { id: 'z_hbatt', tn: 'Hbatt', ar: 'هبطت', fr: 'Je suis descendu(e)', ex: 'Nahbat hna = je descends ici.' },
          { id: 'z_lqit', tn: 'Lqit / ma lqitouch', ar: 'لقيت / ما لقيتوش', fr: 'J’ai trouvé / je ne l’ai pas trouvé', ex: 'Lqah = il l’a trouvé.' },
          { id: 'z_jibi', tn: 'Jibi', ar: 'جيبي', fr: 'Ma poche', ex: 'Jib = poche. Fi jibi = dans ma poche.' },
          { id: 'z_naayyet', tn: 'Naayyetlou', ar: 'نعيّطلو', fr: 'Je l’appelle', ex: 'Aayyetli! = appelle-moi !' },
          { id: 'z_korsi', tn: 'Korsi', ar: 'كرسي', fr: 'Chaise, siège', ex: 'Taht el korsi = sous le siège.' }
        ],
        exercises: [
          { type: 'reply', who: 'rabah', line: { tn: 'Wach bik?', ar: 'واش بيك؟', fr: 'Qu’est-ce que tu as ?' }, options: [
            { tn: 'Dayyaat el tilifoun taai!', fr: 'J’ai perdu mon téléphone !', ok: true },
            { tn: 'Rani fi ettriq.', fr: 'Je suis en route.', why: 'Tu es déjà dans son taxi. Ammi Rabah est perplexe.' },
            { tn: 'Tcharrafna.', fr: 'Enchanté{e}.', why: 'Vous vous connaissez depuis le niveau 1 ! Il est vexé.' }] },
          { type: 'reply', who: 'rabah', line: { tn: 'Win {g:kont|konti}?', ar: 'وين {g:كنت|كنتي}؟', fr: 'Tu étais où ?' }, options: [
            { tn: 'Kont fi el bus, men el Bosta l Bab El Oued.', fr: 'J’étais dans le bus, de la Grande Poste à Bab El Oued.', ok: true },
            { tn: 'Ghodwa, inchallah.', fr: 'Demain, si Dieu le veut.', why: 'Il demande où tu ÉTAIS. Le futur, c’est au niveau 5.' },
            { tn: 'Taht el korsi.', fr: 'Sous le siège.', why: 'Tu étais sous le siège ? Ça explique beaucoup de choses.' }] },
          { type: 'order', tn: 'Ki hbatt ma lqitouch fi jibi', fr: 'Quand je suis descendu, je ne l’ai pas trouvé dans ma poche', tokens: ['Ki', 'hbatt', 'ma', 'lqitouch', 'fi', 'jibi'] },
          { type: 'speak', tn: 'Dayyaat el tilifoun taai', ar: 'ضيّعت التيليفون تاعي', fr: 'J’ai perdu mon téléphone' }
        ],
        mission: { who: 'rabah', goal: 'Raconte à Ammi Rabah, au passé, comment tu as perdu ton téléphone : où tu étais, ce que tu faisais, quand tu as remarqué.', win: 'L’élève a raconté la perte du téléphone au passé (rkebt, kont, hbatt, ma lqitouch…), en algérien.' }
      }
    ]
  }
];

(() => {
  const R = (who, tn, ar, fr, options) => ({ type: 'reply', who, line: { tn, ar, fr }, options });
  const ok = (tn, fr) => ({ tn, fr, ok: true });
  const ko = (tn, fr, why) => ({ tn, fr, why });
  const C = (q, tn, good, bad, explain) => ({ type: 'choice', q, tn, options: [{ t: good, ok: true }].concat(bad.map(t => ({ t }))), explain });

  // =====================================================================================
  // NIVEAU 5 — Tata officielle
  // =====================================================================================
  window.TWB_DZ_L5 = {
    id: 'd5', num: 5, name: 'Tata officielle',
    goal: 'Parler comme Khalti Zhor : passé, futur, comparaisons et grandes émotions',
    boss: { id: 'd5boss', title: 'L’épreuve finale de Khalti Zhor', pitch: '14 questions, toutes difficiles. Il en faut 10 pour que Khalti Zhor te déclare algérien{ne} pour de vrai.', count: 14, pass: 10 },
    episodes: [
      // ---------------------------------------------------------------- Épisode 1
      {
        id: 'd5e1', title: 'En cuisine avec Khalti',
        pitch: 'Khalti Zhor te confie sa recette des bourek. Enfin, une partie. Le reste est un secret d’État.',
        cast: ['zhor'],
        scene: [
          { who: 'zhor', tn: 'Aji ya {petit}, lyoum rana ndirou el bourek!', ar: 'أجي يا {petitAr}، اليوم رانا نديرو البوراك!', fr: 'Viens {petitFr}, aujourd’hui on fait les bourek !' },
          { who: 'me', tn: 'Wach lazem ndir, ya Khalti?', ar: 'واش لازم ندير، يا خالتي؟', fr: 'Qu’est-ce que je dois faire, tata ?' },
          { who: 'zhor', tn: '{g:Ghsel|Ghesli} yeddik, w {g:jib|jibi} el lham w el bsal.', ar: '{g:غسل|غسلي} يديك، و{g:جيب|جيبي} اللحم والبصل.', fr: 'Lave-toi les mains, et apporte la viande et les oignons.' },
          { who: 'me', tn: 'Chhal men lham nhott?', ar: 'شحال من لحم نحط؟', fr: 'Je mets combien de viande ?' },
          { who: 'zhor', tn: 'Nouss kilo, zouj bsalat, w chwiya maadnous.', ar: 'نص كيلو، زوج بصلات، وشوية معدنوس.', fr: 'Un demi-kilo, deux oignons, et un peu de persil.', note: 'La quantité exacte d’épices ? Secret de famille. Même Mima ne l’a jamais eue.' },
          { who: 'zhor', tn: '{g:Leff|Leffi} el dioul kima hakda, bechwiya, machi kima Amine!', ar: '{g:لف|لفي} الديول كيما هاكدا، بشوية، ماشي كيما أمين!', fr: 'Roule les feuilles comme ça, doucement, pas comme Amine !', note: 'Amine a essayé une fois. Ce soir-là, toute la famille a mangé des pâtes.' },
          { who: 'me', tn: 'Hakda, ya Khalti? Khir men Amine?', ar: 'هاكدا، يا خالتي؟ خير من أمين؟', fr: 'Comme ça, tata ? Mieux qu’Amine ?' },
          { who: 'zhor', tn: 'Khir mennou bezzaf! W ghodwa, {g:nta|nti} elli {g:tdir|tdiri} el kesksou!', ar: 'خير منو بزاف! وغدوة، {g:نتا|نتي} اللي {g:تدير|تديري} الكسكسو!', fr: 'Bien mieux que lui ! Et demain, c’est toi qui fais le couscous !', note: 'Promotion express : de commis à chef en une seule feuille de brick.' }
        ],
        words: [
          { id: 'z_ndir', tn: 'Ndir', ar: 'ندير', fr: 'Je fais', ex: 'Rana ndirou el bourek = on est en train de faire les bourek.' },
          { id: 'z_lazem', tn: 'Lazem', ar: 'لازم', fr: 'Il faut, je dois', ex: 'Wach lazem ndir? = qu’est-ce que je dois faire ?' },
          { id: 'z_ghsel', tn: '{g:Ghsel|Ghesli}', ar: '{g:غسل|غسلي}', fr: 'Lave', ex: 'Ghsel à un garçon, ghesli à une fille.' },
          { id: 'z_yeddik', tn: 'Yeddik', ar: 'يديك', fr: 'Tes mains', ex: 'Ghsel yeddik! La première phrase de toute cuisine algérienne.' },
          { id: 'z_jib', tn: '{g:Jib|Jibi}', ar: '{g:جيب|جيبي}', fr: 'Apporte', ex: 'Jib el lham = apporte la viande.' },
          { id: 'z_bsal', tn: 'Bsal', ar: 'بصل', fr: 'Oignons', ex: 'Besla = un oignon ; zouj bsalat = deux oignons.' },
          { id: 'z_nhott', tn: 'Nhott', ar: 'نحط', fr: 'Je mets', ex: 'Chhal nhott? = j’en mets combien ?' },
          { id: 'z_nouss', tn: 'Nouss', ar: 'نص', fr: 'Moitié, demi', ex: 'Nouss kilo = un demi-kilo.' },
          { id: 'z_maadnous', tn: 'Maadnous', ar: 'معدنوس', fr: 'Persil', ex: 'Chwiya maadnous = un peu de persil.' },
          { id: 'z_leff', tn: '{g:Leff|Leffi}', ar: '{g:لف|لفي}', fr: 'Roule, enroule', ex: 'Leff el dioul = roule les feuilles de brick.' },
          { id: 'z_kimahakda', tn: 'Kima hakda', ar: 'كيما هاكدا', fr: 'Comme ça', ex: 'Kima = comme ; hakda = ainsi.' },
          { id: 'z_kesksou', tn: 'Kesksou', ar: 'كسكسو', fr: 'Couscous', ex: 'À Alger, on dit aussi « taam ».' }
        ],
        exercises: [
          R('zhor', '{g:Ghsel|Ghesli} yeddik, w {g:jib|jibi} el lham.', '{g:غسل|غسلي} يديك، و{g:جيب|جيبي} اللحم.', 'Lave-toi les mains, et apporte la viande.', [
            ok('Ih, ya Khalti, dork.', 'Oui, tata, tout de suite.'),
            ko('Ma nhebch nakol.', 'Je ne veux pas manger.', 'Personne ne te propose à manger… pour l’instant. Patience.'),
            ko('Bechhal el khobza?', 'C’est combien, la baguette ?', 'Tu es dans la cuisine de Khalti, pas chez Saïd. Ici tout est gratuit, sauf le travail.')]),
          R('zhor', '{g:Leff|Leffi} el dioul kima hakda.', '{g:لف|لفي} الديول كيما هاكدا.', 'Roule les feuilles comme ça.', [
            ok('Hakda, ya Khalti? Khir men Amine?', 'Comme ça, tata ? Mieux qu’Amine ?'),
            ko('Smahli, ma naarafch nchtah.', 'Pardon, je ne sais pas danser.', 'On roule des bourek, on ne danse pas. Pas encore.'),
            ko('Besslama!', 'Au revoir !', 'Quitter la cuisine de Khalti en pleine recette ? Elle a déjà fermé la porte à clé.')]),
          { type: 'order', tn: 'Chhal men lham nhott', fr: 'Je mets combien de viande ?', tokens: ['Chhal', 'men', 'lham', 'nhott'] },
          { type: 'speak', tn: 'Wach lazem ndir, ya Khalti?', ar: 'واش لازم ندير، يا خالتي؟', fr: 'Qu’est-ce que je dois faire, tata ?' }
        ],
        mission: { who: 'zhor', goal: 'Aide Khalti Zhor à préparer les bourek : demande ce que tu dois faire, combien il faut de chaque ingrédient, et donne-lui toi aussi une consigne à l’impératif.', win: 'L’élève a demandé quoi faire, demandé une quantité (chhal) et utilisé au moins un impératif, en algérien.' }
      },
      // ---------------------------------------------------------------- Épisode 2
      {
        id: 'd5e2', title: 'Les souvenirs de Mima',
        pitch: 'Mima a connu Alger d’avant. Elle raconte tout. Il faut juste parler fort. Très fort.',
        cast: ['mima'],
        scene: [
          { who: 'me', tn: 'Ya Mima, kifach kanet Dzayer bekri?', ar: 'يا ميما، كيفاش كانت دزاير بكري؟', fr: 'Mima, comment était Alger autrefois ?' },
          { who: 'mima', tn: 'Wach? {g:Rak jiaan|Raki jiaana}?', ar: 'واش؟ {g:راك جيعان|راكي جيعانة}؟', fr: 'Quoi ? Tu as faim ?', note: 'Mima entend « faim » dans toutes les phrases. Et elle a toujours un gâteau caché quelque part.' },
          { who: 'me', tn: 'La, ya Mima! Dzayer, BEKRI!', ar: 'لا، يا ميما! دزاير، بكري!', fr: 'Non, Mima ! Alger, AUTREFOIS !' },
          { who: 'mima', tn: 'Aah, bekri… Kont nskoun fel Qasba, w kont nhabet lel bhar kol sbah.', ar: 'آه، بكري… كنت نسكن فالقصبة، وكنت نهبط للبحر كل صباح.', fr: 'Ah, autrefois… J’habitais à la Casbah, et je descendais à la mer chaque matin.' },
          { who: 'mima', tn: 'El maicha kanet rkhisa: el khobza b khamsa dourou!', ar: 'المعيشة كانت رخيصة: الخبزة ب خمسة دورو!', fr: 'La vie n’était pas chère : la baguette à cinq douros !', note: 'Le douro, une vieille pièce. Mima compte encore tout en douros, même le prix des téléphones.' },
          { who: 'me', tn: 'W dork? Dzayer khir dork wala bekri?', ar: 'ودرك؟ دزاير خير درك ولا بكري؟', fr: 'Et maintenant ? Alger, c’est mieux maintenant ou autrefois ?' },
          { who: 'mima', tn: 'Ya hasra ala bekri… bessah dork kayen el metro!', ar: 'يا حسرة على بكري… بصح درك كاين الميترو!', fr: 'Ah, le bon vieux temps… mais maintenant il y a le métro !' },
          { who: 'mima', tn: 'W kont nchtah bezzaf fel aaras. Kont khir men Sabrina!', ar: 'وكنت نشطح بزاف فالعراس. كنت خير من صبرينة!', fr: 'Et je dansais beaucoup aux mariages. J’étais meilleure que Sabrina !', note: 'Aucune preuve. Personne n’ose vérifier.' },
          { who: 'me', tn: 'Allah yhafdek, ya Mima!', ar: 'الله يحفظك، يا ميما!', fr: 'Que Dieu te garde, Mima !' }
        ],
        words: [
          { id: 'z_bekri', tn: 'Bekri', ar: 'بكري', fr: 'Autrefois, avant', ex: 'Dzayer bekri = l’Alger d’avant.' },
          { id: 'z_kanet', tn: 'Kanet', ar: 'كانت', fr: 'Elle était', ex: 'Kan = il était ; kanet = elle était.' },
          { id: 'z_kont', tn: 'Kont nskoun', ar: 'كنت نسكن', fr: 'J’habitais (kont + présent = habitude au passé)', ex: 'Kont nchtah = je dansais.' },
          { id: 'z_nskoun', tn: 'Nskoun', ar: 'نسكن', fr: 'J’habite', ex: 'Kont nskoun fel Qasba.' },
          { id: 'z_nhabet', tn: 'Nhabet', ar: 'نهبط', fr: 'Je descends', ex: 'Nhabet lel bhar = je descends à la mer.' },
          { id: 'z_rkhis', tn: 'Rkhis / rkhisa', ar: 'رخيص / رخيصة', fr: 'Pas cher', ex: 'Le contraire de ghali.' },
          { id: 'z_dourou', tn: 'Dourou', ar: 'دورو', fr: 'Douro (vieille pièce)', ex: 'Khamsa dourou = cinq douros.' },
          { id: 'z_yahasra', tn: 'Ya hasra', ar: 'يا حسرة', fr: 'Ah, le bon vieux temps', ex: 'Ya hasra ala bekri! La phrase préférée de Mima.' },
          { id: 'z_bessah', tn: 'Bessah', ar: 'بصح', fr: 'Mais', ex: 'Bessah dork kayen el metro.' },
          { id: 'z_nchtah', tn: 'Nchtah', ar: 'نشطح', fr: 'Je danse', ex: 'Kont nchtah = je dansais.' },
          { id: 'z_jiaan', tn: '{g:Jiaan|Jiaana}', ar: '{g:جيعان|جيعانة}', fr: 'Affamé{e}', ex: 'Rani jiaan = j’ai faim. Ne le dis jamais devant Khalti.' }
        ],
        exercises: [
          R('mima', '{g:Rak jiaan|Raki jiaana}?', '{g:راك جيعان|راكي جيعانة}؟', 'Tu as faim ?', [
            ok('La, ya Mima, el hamdoullah.', 'Non, Mima, Dieu merci.'),
            ko('Ih, khamsa dourou.', 'Oui, cinq douros.', 'Mima va te donner cinq douros ET un gâteau. Mais ce n’était pas la question.'),
            ko('Kont nskoun fel Qasba.', 'J’habitais à la Casbah.', 'Ça, c’est la vie de Mima, pas la tienne.')]),
          R('mima', 'Kont nchtah khir men Sabrina!', 'كنت نشطح خير من صبرينة!', 'Je dansais mieux que Sabrina !', [
            ok('Ih ya Mima, khir menha bezzaf!', 'Oui, Mima, bien mieux qu’elle !'),
            ko('Rbehna lbareh!', 'On a gagné hier !', 'Mima parle de danse, pas de foot. Garde ça pour Amine.'),
            ko('Ma tebkich!', 'Ne pleure pas !', 'Mima ne pleure pas, elle se vante. Nuance.')]),
          { type: 'order', tn: 'Kont nskoun fel Qasba', fr: 'J’habitais à la Casbah', tokens: ['Kont', 'nskoun', 'fel', 'Qasba'] },
          { type: 'speak', tn: 'Ya hasra ala bekri', ar: 'يا حسرة على بكري', fr: 'Ah, le bon vieux temps' }
        ],
        mission: { who: 'mima', goal: 'Demande à Mima comment était Alger autrefois, puis raconte-lui une chose que tu faisais quand tu étais petit{e}, avec « kont ».', win: 'L’élève a posé une question sur le passé et utilisé « kont » + présent au moins une fois, en algérien.' }
      },
      // ---------------------------------------------------------------- Épisode 3
      {
        id: 'd5e3', title: 'Le grand débat MCA–USMA',
        pitch: 'Amine est Mouloudia. Ammi Mouloud est USMA. Toi, tu es au milieu. Bon courage.',
        cast: ['amine', 'mouloud'],
        scene: [
          { who: 'amine', tn: 'El Mouloudia hiya el kbira, makanch kifha!', ar: 'المولودية هي الكبيرة، ماكانش كيفها!', fr: 'Le Mouloudia, c’est le plus grand, il n’y en a pas comme lui !' },
          { who: 'mouloud', tn: 'Lala, ya wlidi, el USMA khir menha bezzaf!', ar: 'لالا، يا وليدي، الأوسما خير منها بزاف!', fr: 'Non non, mon fils, l’USMA est bien meilleure !' },
          { who: 'amine', tn: 'Wach, Ammi Mouloud? Lbareh rbehna!', ar: 'واش، عمي مولود؟ البارح ربحنا!', fr: 'Quoi, Ammi Mouloud ? Hier, on a gagné !' },
          { who: 'mouloud', tn: 'Rbehtou fel dqiqa tesaain! Hadi machi rebha, hadi zher.', ar: 'ربحتو فالدقيقة تسعين! هادي ماشي ربحة، هادي زهر.', fr: 'Vous avez gagné à la 90ᵉ minute ! Ça, ce n’est pas une victoire, c’est de la chance.', note: 'Ammi Mouloud n’a jamais perdu un débat. Des matchs, beaucoup. Des débats, jamais.' },
          { who: 'amine', tn: '{g:Nta|Nti}, wach {g:tgoul|tgouli}? Maaya wala maah?', ar: '{g:نتا|نتي}، واش {g:تڨول|تڨولي}؟ معايا ولا معاه؟', fr: 'Et toi, tu en dis quoi ? Avec moi ou avec lui ?' },
          { who: 'me', tn: 'Ana maak, ya Amine… bessah Ammi Mouloud aandou el haq chwiya.', ar: 'أنا معاك، يا أمين… بصح عمي مولود عندو الحق شوية.', fr: 'Je suis avec toi, Amine… mais Ammi Mouloud a un peu raison.' },
          { who: 'amine', tn: 'Chwiya?! Ma {g:fhemt|fhemti} walou fel koura!', ar: 'شوية؟! ما {g:فهمت|فهمتي} والو فالكورة!', fr: 'Un peu ?! Tu n’as rien compris au foot !', note: 'Avec « walou » (rien), le -ch de la négation disparaît : ma fhemt walou.' },
          { who: 'mouloud', tn: 'Sahit! {g:Hada wlid aaqel|Hadi bent aaqla}. El qahwa aaliya!', ar: 'صحيت! {g:هادا وليد عاقل|هادي بنت عاقلة}. القهوة عليا!', fr: 'Bravo ! {g:Voilà un garçon raisonnable|Voilà une fille raisonnable}. Le café, c’est pour moi !' },
          { who: 'amine', tn: 'Wallah ntouma zouj kif kif!', ar: 'والله نتوما زوج كيف كيف!', fr: 'Franchement, vous êtes pareils, tous les deux !' }
        ],
        words: [
          { id: 'z_makanchkif', tn: 'Makanch kifha / kifou', ar: 'ماكانش كيفها / كيفو', fr: 'Il n’y en a pas comme elle / lui', ex: 'Le plus beau compliment d’Alger.' },
          { id: 'z_khirmen', tn: 'Khir men', ar: 'خير من', fr: 'Mieux que', ex: 'Khir mennou = mieux que lui ; khir menha = mieux qu’elle.' },
          { id: 'z_rbehna', tn: 'Rbehna', ar: 'ربحنا', fr: 'On a gagné', ex: 'Rbeht = j’ai gagné ; rbehtou = vous avez gagné.' },
          { id: 'z_dqiqa', tn: 'Dqiqa', ar: 'دقيقة', fr: 'Minute', ex: 'Fel dqiqa tesaain = à la 90ᵉ minute.' },
          { id: 'z_zher', tn: 'Zher', ar: 'زهر', fr: 'La chance', ex: 'Aandou zher = il a de la chance.' },
          { id: 'z_tgoul', tn: 'Wach {g:tgoul|tgouli}?', ar: 'واش {g:تڨول|تڨولي}؟', fr: 'Tu en dis quoi ?', ex: 'Tgoul à un garçon, tgouli à une fille.' },
          { id: 'z_anamaak', tn: 'Ana maak', ar: 'أنا معاك', fr: 'Je suis avec toi, d’accord avec toi', ex: 'Maaya = avec moi ; maah = avec lui.' },
          { id: 'z_aandouelhaq', tn: 'Aandou el haq', ar: 'عندو الحق', fr: 'Il a raison', ex: 'Aandek el haq = tu as raison.' },
          { id: 'z_walou', tn: 'Walou', ar: 'والو', fr: 'Rien', ex: 'Ma fhemt walou = je n’ai rien compris (sans -ch).' },
          { id: 'z_kifkif', tn: 'Kif kif', ar: 'كيف كيف', fr: 'Pareil', ex: 'Le français l’a même emprunté !' },
          { id: 'z_sahit', tn: 'Sahit', ar: 'صحيت', fr: 'Bravo, bien joué', ex: 'Sahit! = bravo !' }
        ],
        exercises: [
          R('amine', '{g:Nta|Nti}, wach {g:tgoul|tgouli}? Maaya wala maah?', '{g:نتا|نتي}، واش {g:تڨول|تڨولي}؟ معايا ولا معاه؟', 'Et toi, tu en dis quoi ? Avec moi ou avec lui ?', [
            ok('Ana maak, ya Amine!', 'Je suis avec toi, Amine !'),
            ko('{g:Kol|Kouli} mlih!', 'Mange bien !', 'Ça, c’est la phrase de Khalti Zhor. Amine veut ton avis sur le foot, pas sur son assiette.'),
            ko('Nouss kilo.', 'Un demi-kilo.', 'Amine te demande ton camp, pas une quantité de viande hachée.')]),
          R('mouloud', 'El USMA khir menha bezzaf!', 'الأوسما خير منها بزاف!', 'L’USMA est bien meilleure !', [
            ok('Aandek el haq chwiya, ya Ammi Mouloud.', 'Tu as un peu raison, Ammi Mouloud.'),
            ko('Ma fhemt walou fel koura.', 'Je n’ai rien compris au foot.', 'Honnête. Mais Ammi Mouloud va maintenant t’expliquer le foot pendant trois heures.'),
            ko('Ya hasra ala bekri!', 'Ah, le bon vieux temps !', 'Ne le lance pas sur la saison 1962-1963. Tu ne rentreras jamais chez toi.')]),
          { type: 'order', tn: 'Ana maak bessah Ammi Mouloud aandou el haq', fr: 'Je suis avec toi, mais Ammi Mouloud a raison', tokens: ['Ana', 'maak', 'bessah', 'Ammi', 'Mouloud', 'aandou', 'el', 'haq'] },
          { type: 'speak', tn: 'Makanch kifha!', ar: 'ماكانش كيفها!', fr: 'Il n’y en a pas comme elle !' }
        ],
        mission: { who: 'amine', goal: 'Amine et Ammi Mouloud se disputent : donne ton avis sur le foot, dis avec qui tu es d’accord et compare deux équipes avec « khir men ».', win: 'L’élève a exprimé son accord ou son désaccord et fait au moins une comparaison avec « khir men », en algérien.' }
      },
      // ---------------------------------------------------------------- Épisode 4
      {
        id: 'd5e4', title: 'Les projets',
        pitch: 'Tata Nassima veut connaître ton avenir. En détail. Avec les dates.',
        cast: ['nassima'],
        scene: [
          { who: 'nassima', tn: 'Ya {petit}, wach {g:rak rayah tdir|raki rayha tdiri} ki {g:terjaa|terjai} l Fransa?', ar: 'يا {petitAr}، واش {g:راك رايح تدير|راكي رايحة تديري} كي {g:ترجع|ترجعي} لفرانسا؟', fr: 'Dis-moi, {petitFr}, qu’est-ce que tu vas faire quand tu rentreras en France ?' },
          { who: 'me', tn: 'Rani {g:rayah|rayha} nahdar dzayri kol nhar!', ar: 'راني {g:رايح|رايحة} نهدر دزيري كل نهار!', fr: 'Je vais parler algérien tous les jours !' },
          { who: 'nassima', tn: 'Mlih! W waqtach rah {g:terjaa|terjai} l Dzayer?', ar: 'مليح! ووقتاش راح {g:ترجع|ترجعي} لدزاير؟', fr: 'Bien ! Et quand est-ce que tu reviendras à Alger ?', note: 'Tata Nassima a déjà réservé ta place à table. Pour dans six mois.' },
          { who: 'me', tn: 'Rah nwelli fel sif, inchallah.', ar: 'راح نولي فالصيف، إن شاء الله.', fr: 'Je reviendrai cet été, si Dieu le veut.' },
          { who: 'nassima', tn: 'W rah {g:tzewwej|tzewwji}? Yemmak raha tsaqsi!', ar: 'وراح {g:تزوج|تزوجي}؟ يماك راها تسقسي!', fr: 'Et tu vas te marier ? Ta mère demande !', note: 'Ta mère n’a rien demandé. Tata Nassima, si.' },
          { who: 'me', tn: 'Machi dork, ya Tata! Lewwel rah nekhdem, w baad nchoufou.', ar: 'ماشي درك، يا طاطا! لوّل راح نخدم، وبعد نشوفو.', fr: 'Pas maintenant, tata ! D’abord je vais travailler, et après on verra.' },
          { who: 'nassima', tn: 'Sabrina tani kanet tgoul « nchoufou »… w dork raha mzewwja!', ar: 'صبرينة تاني كانت تڨول « نشوفو »… ودرك راها مزوجة!', fr: 'Sabrina aussi disait « on verra »… et maintenant elle est mariée !' },
          { who: 'me', tn: 'Ana machi rah nzewwej… mazal!', ar: 'أنا ماشي راح نزوج… مازال!', fr: 'Moi, je ne vais pas me marier… pas encore !' },
          { who: 'nassima', tn: 'Mazal? El hamdoullah, kayen el amal!', ar: 'مازال؟ الحمد لله، كاين الأمل!', fr: '« Pas encore » ? Dieu merci, il y a de l’espoir !' }
        ],
        words: [
          { id: 'z_rahfutur', tn: 'Rah nwelli', ar: 'راح نولي', fr: 'Je vais revenir (rah + présent = futur)', ex: 'Rah nekhdem = je vais travailler.' },
          { id: 'z_rayah', tn: '{g:Rayah|Rayha}', ar: '{g:رايح|رايحة}', fr: 'En train d’aller, va (futur)', ex: 'Rani rayah nakol (garçon) / rani rayha nakol (fille) = je vais manger.' },
          { id: 'z_terjaa', tn: '{g:Terjaa|Terjai}', ar: '{g:ترجع|ترجعي}', fr: 'Tu reviens, tu rentres', ex: 'Nerjaa = je reviens.' },
          { id: 'z_nwelli', tn: 'Nwelli', ar: 'نولي', fr: 'Je reviens', ex: 'Rah nwelli fel sif.' },
          { id: 'z_sif', tn: 'Sif', ar: 'صيف', fr: 'Été', ex: 'Fel sif = en été.' },
          { id: 'z_lewwel', tn: 'Lewwel', ar: 'لوّل', fr: 'D’abord, en premier', ex: 'Lewwel nekhdem, w baad nchoufou.' },
          { id: 'z_nchoufou', tn: 'Nchoufou', ar: 'نشوفو', fr: 'On verra', ex: 'La réponse magique à toutes les questions de Tata Nassima.' },
          { id: 'z_machirah', tn: 'Machi rah', ar: 'ماشي راح', fr: 'Ne va pas (futur négatif)', ex: 'Machi rah nrouh = je ne vais pas y aller.' },
          { id: 'z_mazal', tn: 'Mazal', ar: 'مازال', fr: 'Pas encore, encore', ex: 'Mazal! = pas encore !' },
          { id: 'z_tzewwej', tn: '{g:Tzewwej|Tzewwji}', ar: '{g:تزوج|تزوجي}', fr: 'Tu te maries', ex: 'Nzewwej = je me marie ; mzewwja = mariée.' },
          { id: 'z_tsaqsi', tn: 'Tsaqsi', ar: 'تسقسي', fr: 'Elle demande, elle pose des questions', ex: 'Nsaqsi = je demande.' }
        ],
        exercises: [
          R('nassima', 'Waqtach rah {g:terjaa|terjai} l Dzayer?', 'وقتاش راح {g:ترجع|ترجعي} لدزاير؟', 'Quand est-ce que tu reviendras à Alger ?', [
            ok('Rah nwelli fel sif, inchallah.', 'Je reviendrai cet été, si Dieu le veut.'),
            ko('Lbareh, ya Tata.', 'Hier, tata.', 'Hier, c’est du passé. Nassima te demande quand tu REVIENDRAS.'),
            ko('Kont nskoun fel Qasba.', 'J’habitais à la Casbah.', 'Ça, c’est la phrase de Mima. Nassima veut une date, pas un souvenir.')]),
          R('nassima', 'W rah {g:tzewwej|tzewwji}?', 'وراح {g:تزوج|تزوجي}؟', 'Et tu vas te marier ?', [
            ok('Machi dork, ya Tata! Lewwel rah nekhdem.', 'Pas maintenant, tata ! D’abord je vais travailler.'),
            ko('Ih, ghodwa!', 'Oui, demain !', 'Nassima a déjà appelé toute la Casbah. Tu as 24 heures pour trouver quelqu’un.'),
            ko('Bechhal?', 'C’est combien ?', 'On ne demande pas le prix d’un mariage. Enfin… pas devant Nassima.')]),
          { type: 'order', tn: 'Rah nwelli fel sif inchallah', fr: 'Je reviendrai cet été, si Dieu le veut', tokens: ['Rah', 'nwelli', 'fel', 'sif', 'inchallah'] },
          { type: 'speak', tn: 'Machi rah nzewwej, mazal!', ar: 'ماشي راح نزوج، مازال!', fr: 'Je ne vais pas me marier, pas encore !' }
        ],
        mission: { who: 'nassima', goal: 'Tata Nassima veut tout savoir : raconte-lui trois projets au futur (avec rah, ou rani rayah / rayha) et esquive poliment la question du mariage.', win: 'L’élève a utilisé au moins deux fois le futur algérien (rah + verbe ou rani rayah/rayha + verbe), en algérien.' }
      },
      // ---------------------------------------------------------------- Épisode 5
      {
        id: 'd5e5', title: 'Le départ à l’aéroport',
        pitch: 'Retour à Houari-Boumediene. Khalti Zhor a apporté trois kilos de gâteaux et zéro mouchoir.',
        cast: ['zhor'],
        scene: [
          { who: 'zhor', tn: 'Ya {petit}, {g:rak rayah|raki rayha}… w dar Khalti tweli fargha.', ar: 'يا {petitAr}، {g:راك رايح|راكي رايحة}… ودار خالتي تولي فارغة.', fr: '{petitFr}, tu t’en vas… et la maison de tata va devenir vide.', note: 'Quatorze personnes dînent chez elle ce soir. Mais la maison sera vide.' },
          { who: 'me', tn: 'Ma tebkich, ya Khalti!', ar: 'ما تبكيش، يا خالتي!', fr: 'Ne pleure pas, tata !' },
          { who: 'zhor', tn: 'Maniche nebki! Ghir kayen ghbar f aayniya.', ar: 'مانيش نبكي! غير كاين غبار ف عينيا.', fr: 'Je ne pleure pas ! C’est juste de la poussière dans mes yeux.', note: 'Il n’y a pas de poussière dans l’aéroport. Il y a juste Khalti.' },
          { who: 'zhor', tn: '{g:Kol|Kouli} mlih, {g:sellem|sellmi} ala yemmak, w {g:ma tensanach|ma tensaynach}!', ar: '{g:كول|كولي} مليح، {g:سلم|سلمي} على يماك، و{g:ما تنساناش|ما تنسايناش}!', fr: 'Mange bien, salue ta mère, et ne nous oublie pas !' },
          { who: 'me', tn: 'Ma nensakoumch! Rah naayetlek kol simana.', ar: 'ما ننساكمش! راح نعيطلك كل سيمانة.', fr: 'Je ne vous oublierai pas ! Je t’appellerai chaque semaine.' },
          { who: 'zhor', tn: 'Kol simana?! Lala, kol nhar! W {g:hder|hedri} maaya b dzayri, machi b fransi!', ar: 'كل سيمانة؟! لالا، كل نهار! و{g:هدر|هدري} معايا ب دزيري، ماشي ب فرانسي!', fr: 'Chaque semaine ?! Non non, chaque jour ! Et parle-moi en algérien, pas en français !' },
          { who: 'zhor', tn: 'Hak, dertlek qalb el louz fel chanta.', ar: 'هاك، درتلك قلب اللوز فالشنطة.', fr: 'Tiens, je t’ai mis du qalb el louz dans le sac.', note: 'Trois kilos. La compagnie aérienne va facturer un supplément tendresse.' },
          { who: 'me', tn: 'Saha, ya Khalti… twehachtek men dork!', ar: 'صحة، يا خالتي… توحشتك من درك!', fr: 'Merci, tata… tu me manques déjà !' },
          { who: 'zhor', tn: '{g:Rak dzayri|Raki dzayriya} dork, ya {petit}. Rabbi maak!', ar: '{g:راك دزيري|راكي دزيرية} درك، يا {petitAr}. ربي معاك!', fr: 'Tu es algérien{ne} maintenant, {petitFr}. Que Dieu soit avec toi !' }
        ],
        words: [
          { id: 'z_tebkich', tn: 'Ma tebkich', ar: 'ما تبكيش', fr: 'Ne pleure pas', ex: 'Nebki = je pleure.' },
          { id: 'z_maniche', tn: 'Maniche', ar: 'مانيش', fr: 'Je ne suis pas', ex: 'Maniche nebki = je ne suis pas en train de pleurer.' },
          { id: 'z_ghbar', tn: 'Ghbar', ar: 'غبار', fr: 'Poussière', ex: 'L’excuse officielle de toutes les tatas.' },
          { id: 'z_tensanach', tn: '{g:Ma tensanach|Ma tensaynach}', ar: '{g:ما تنساناش|ما تنسايناش}', fr: 'Ne nous oublie pas', ex: 'Nensa = j’oublie.' },
          { id: 'z_sellem', tn: '{g:Sellem|Sellmi} ala…', ar: '{g:سلم|سلمي} على…', fr: 'Salue…, passe le bonjour à…', ex: 'Sellem ala yemmak = salue ta mère.' },
          { id: 'z_naayetlek', tn: 'Naayetlek', ar: 'نعيطلك', fr: 'Je t’appelle', ex: 'Rah naayetlek = je vais t’appeler.' },
          { id: 'z_simana', tn: 'Simana', ar: 'سيمانة', fr: 'Semaine', ex: 'Kol simana = chaque semaine.' },
          { id: 'z_hak', tn: 'Hak', ar: 'هاك', fr: 'Tiens (en donnant)', ex: 'Hak! = tiens, prends !' },
          { id: 'z_chanta', tn: 'Chanta', ar: 'شنطة', fr: 'Sac', ex: 'Fel chanta = dans le sac.' },
          { id: 'z_twehachtek', tn: 'Twehachtek', ar: 'توحشتك', fr: 'Tu me manques', ex: 'Twehachtek men dork = tu me manques déjà.' },
          { id: 'z_rabbimaak', tn: 'Rabbi maak', ar: 'ربي معاك', fr: 'Que Dieu soit avec toi', ex: 'Pour dire au revoir à quelqu’un qui part.' }
        ],
        exercises: [
          R('zhor', '{g:Ma tensanach|Ma tensaynach}!', '{g:ما تنساناش|ما تنسايناش}!', 'Ne nous oublie pas !', [
            ok('Ma nensakoumch! Rah naayetlek kol simana.', 'Je ne vous oublierai pas ! Je t’appellerai chaque semaine.'),
            ko('Chkoun nti?', 'Tu es qui, toi ?', 'Après tout ce couscous ?! Khalti fait semblant de s’évanouir dans le hall des départs.'),
            ko('{g:Rani jiaan|Rani jiaana}.', 'J’ai faim.', 'Elle a mis trois kilos de qalb el louz dans ton sac. Impossible d’avoir faim.')]),
          R('zhor', 'Hak, dertlek qalb el louz fel chanta.', 'هاك، درتلك قلب اللوز فالشنطة.', 'Tiens, je t’ai mis du qalb el louz dans le sac.', [
            ok('Saha, ya Khalti! Twehachtek men dork.', 'Merci, tata ! Tu me manques déjà.'),
            ko('Bechhal?', 'C’est combien ?', 'Demander le prix d’un cadeau de Khalti ? Elle va te le facturer en bisous.'),
            ko('Ma nhebch qalb el louz.', 'Je n’aime pas le qalb el louz.', 'Mensonge. Tout le monde aime le qalb el louz. Khalti ne te croit pas une seconde.')]),
          { type: 'order', tn: 'Rah naayetlek kol simana', fr: 'Je t’appellerai chaque semaine', tokens: ['Rah', 'naayetlek', 'kol', 'simana'] },
          { type: 'speak', tn: 'Saha ya Khalti, twehachtek men dork', ar: 'صحة يا خالتي، توحشتك من درك', fr: 'Merci tata, tu me manques déjà' }
        ],
        mission: { who: 'zhor', goal: 'Dis au revoir à Khalti Zhor à l’aéroport : rassure-la, fais-lui deux promesses au futur et remercie-la pour tout.', win: 'L’élève a fait au moins deux promesses au futur (rah + verbe), remercié Khalti et dit au revoir, en algérien.' }
      }
    ]
  };

  // =====================================================================================
  // LE COIN DE KHALTI ZHOR — une leçon de grammaire par niveau
  // =====================================================================================
  window.TWB_DZ_GRAMMAR = {
    d1: {
      id: 'dg1', title: 'Mon, ton, son : les possessifs',
      cards: [
        { title: 'On colle la fin au mot', text: 'En algérien, « mon », « ton », « son » ne sont pas des mots séparés : c’est une fin qu’on colle au nom. Bonne nouvelle : « ton » (-ek) est le même pour un garçon et pour une fille.',
          table: [['dar', 'maison'], ['dari', 'ma maison'], ['darek', 'ta maison'], ['darou', 'sa maison (à lui)'], ['darha', 'sa maison (à elle)'], ['darna', 'notre maison'], ['darkoum', 'votre maison'], ['darhoum', 'leur maison']] },
        { title: 'L’astuce des mots en -a', text: 'Si le mot finit par -a, on ajoute un t avant la fin.',
          table: [['khobza', 'une baguette'], ['khobzti', 'ma baguette'], ['khobztek', 'ta baguette'], ['khobztha', 'sa baguette (à elle)']] },
        { title: '« De » et « à moi » : taa', text: 'À Alger, « de » se dit taa (ou ntaa). On peut aussi lui coller les fins : taai (à moi), taaek (à toi)… Jamais « dyal » (marocain) ni « mtaa » (tunisien) !',
          table: [['el dar taa khouya', 'la maison de mon frère'], ['el chanta taai', 'mon sac (le sac à moi)'], ['el chanta taaek', 'ton sac'], ['el chanta taaou', 'son sac (à lui)'], ['el chanta taaha', 'son sac (à elle)'], ['taana, taakoum, taahoum', 'à nous, à vous, à eux']] }
      ],
      exercises: [
        C('Comment dit-on « ma maison » ?', '', 'Dari', ['Darek', 'Darou', 'Darha'], '-i = mon, ma.'),
        C('Que veut dire « darhoum » ?', 'Darhoum', 'Leur maison', ['Notre maison', 'Votre maison', 'Sa maison (à elle)'], '-houm = leur.'),
        C('À une fille, « ta maison » se dit…', '', 'Darek', ['Dareki', 'Darki', 'Darti'], '-ek est le même pour un garçon et pour une fille.'),
        C('Comment dit-on « ma baguette » (khobza) ?', '', 'Khobzti', ['Khobzai', 'Khobzaek', 'Khobzou'], 'Mot en -a : on ajoute t → khobzti.'),
        C('Que veut dire « el chanta taaha » ?', 'El chanta taaha', 'Son sac (à elle)', ['Mon sac', 'Ton sac', 'Son sac (à lui)'], 'Taaha = à elle.'),
        C('Comment dit-on « la maison de mon frère » à Alger ?', '', 'El dar taa khouya', ['El dar dyal khouya', 'El dar mtaa khouya', 'Khouya dari'], 'Taa à Alger ; dyal est marocain, mtaa tunisien.')
      ]
    },
    d2: {
      id: 'dg2', title: 'Dire non : ma…ch, machi, makanch',
      cards: [
        { title: 'Avec un verbe : ma … ch', text: 'On encadre le verbe : « ma » devant, « ch » derrière. Avec « walou » (rien), le -ch tombe : ma fhemt walou.',
          table: [['nheb (je veux, j’aime)', 'ma nhebch (je ne veux pas)'], ['fhemt (j’ai compris)', 'ma fhemtch (je n’ai pas compris)'], ['naaraf (je sais)', 'ma naarafch (je ne sais pas)'], ['klit (j’ai mangé)', 'ma klitch (je n’ai pas mangé)'], ['kayen (il y a)', 'makanch (il n’y a pas)']] },
        { title: 'Sans verbe : machi', text: 'Devant un adjectif, un nom ou le futur, on met « machi ».',
          table: [['ghali (cher)', 'machi ghali (pas cher)'], ['sahel (facile)', 'machi sahel (pas facile)'], ['rah nrouh (je vais y aller)', 'machi rah nrouh (je ne vais pas y aller)']] },
        { title: '« Je ne suis pas » : maniche', text: 'Pour « ne pas être », on a des mots tout prêts.',
          table: [['maniche', 'je ne suis pas'], ['makch / makich', 'tu n’es pas (garçon / fille)'], ['mahouch / mahich', 'il / elle n’est pas'], ['manach', 'nous ne sommes pas']] }
      ],
      exercises: [
        C('Comment dit-on « je ne veux pas » ?', '', 'Ma nhebch', ['Machi nheb', 'Ma nheb', 'Nhebch'], 'Avec un verbe : ma … ch.'),
        C('Comment dit-on « pas cher » ?', '', 'Machi ghali', ['Ma ghalich', 'Ma ghali', 'Ghalich'], 'Pas de verbe : machi.'),
        C('Comment dit-on « il n’y a pas » ?', '', 'Makanch', ['Machi kayen', 'Ma kayen', 'Kayench'], 'Kayen devient makanch.'),
        C('Comment dit-on « je n’ai rien compris » ?', '', 'Ma fhemt walou', ['Ma fhemtch walou', 'Machi fhemt walou', 'Fhemtch walou'], 'Avec walou, le -ch tombe.'),
        C('Comment dit-on « je ne vais pas y aller » ?', '', 'Machi rah nrouh', ['Ma rah nrouhch', 'Rah ma nrouh', 'Ma nrouhch rah'], 'Le futur se nie avec machi.'),
        C('Que veut dire « maniche » ?', 'Maniche', 'Je ne suis pas', ['Je ne sais pas', 'Il n’y a pas', 'Je n’ai pas mangé'], 'Maniche = je ne suis pas ; maniche aayan = je ne suis pas fatigué.')
      ]
    },
    d3: {
      id: 'dg3', title: 'Le présent, et « tu » pour un garçon ou une fille',
      cards: [
        { title: 'Le verbe « travailler »', text: 'Au présent, on change le début du verbe selon la personne : n- (je), t- (tu, elle), y- (il). Au pluriel, on ajoute -ou à la fin.',
          table: [['ana nekhdem', 'je travaille'], ['nta tekhdem', 'tu travailles (garçon)'], ['nti tekhedmi', 'tu travailles (fille)'], ['houwa yekhdem', 'il travaille'], ['hiya tekhdem', 'elle travaille'], ['hna nekhedmou', 'nous travaillons'], ['ntouma tekhedmou', 'vous travaillez'], ['houma yekhedmou', 'ils travaillent']] },
        { title: 'La grande différence avec le tunisien', text: 'À Tunis, « tu » est le même pour tout le monde. À Alger, NON : on parle différemment à un garçon et à une fille. À une fille, on ajoute -i.',
          table: [['nta / nti', 'tu, toi (garçon / fille)'], ['rak / raki', 'tu es (garçon / fille)'], ['wach rak? / wach raki?', 'ça va ? (garçon / fille)'], ['tekhdem / tekhedmi', 'tu travailles'], ['kol / kouli', 'mange !'], ['rouh / rouhi', 'va !']] },
        { title: 'L’astuce', text: 'Les adjectifs s’accordent aussi : mlih / mliha (bien), jay / jaya (qui vient), dzayri / dzayriya (algérien, algérienne). Regarde à qui tu parles avant d’ouvrir la bouche !' }
      ],
      exercises: [
        C('« Nous travaillons » se dit…', '', 'Nekhedmou', ['Nekhdem', 'Yekhedmou', 'Tekhedmou'], 'n- au début, -ou à la fin.'),
        C('À une fille, « tu travailles » se dit…', '', 'Tekhedmi', ['Tekhdem', 'Nekhdem', 'Tekhedmou'], 'À Alger, on ajoute -i pour une fille.'),
        C('À un garçon, « ça va ? » se dit…', '', 'Wach rak?', ['Wach raki?', 'Wach rah?', 'Wach rani?'], 'Rak pour un garçon, raki pour une fille.'),
        C('À une fille, « mange ! » se dit…', '', 'Kouli!', ['Kol!', 'Nakol!', 'Koulou!'], 'Kol pour un garçon, kouli pour une fille.'),
        C('Que veut dire « yekhdem » ?', 'Yekhdem', 'Il travaille', ['Elle travaille', 'Je travaille', 'Ils travaillent'], 'y- = il.'),
        C('« Toi » (à une fille) se dit…', '', 'Nti', ['Nta', 'Hiya', 'Ntouma'], 'Nta pour un garçon, nti pour une fille.')
      ]
    },
    d4: {
      id: 'dg4', title: 'Le passé : -t, -ti, -et, -ou',
      cards: [
        { title: 'Le verbe « écrire » au passé', text: 'Au passé, c’est la fin du verbe qui change. Et « tu » change encore selon qu’on parle à un garçon ou à une fille.',
          table: [['ana ktebt', 'j’ai écrit'], ['nta ktebt', 'tu as écrit (garçon)'], ['nti ktebti', 'tu as écrit (fille)'], ['houwa kteb', 'il a écrit'], ['hiya ketbet', 'elle a écrit'], ['hna ktebna', 'nous avons écrit'], ['ntouma ktebtou', 'vous avez écrit'], ['houma ketbou', 'ils ont écrit']] },
        { title: 'Les verbes en -a', text: 'Kla (manger), mcha (aller), chra (acheter) : la fin change un peu.',
          table: [['klit', 'j’ai mangé, tu as mangé (garçon)'], ['kliti', 'tu as mangé (fille)'], ['kla', 'il a mangé'], ['klat', 'elle a mangé'], ['klina', 'nous avons mangé'], ['klitou', 'vous avez mangé'], ['klaw', 'ils ont mangé']] }
      ],
      exercises: [
        C('« Elle a écrit » se dit…', '', 'Ketbet', ['Ktebt', 'Kteb', 'Ketbou'], '-et = elle.'),
        C('« Nous avons mangé » se dit…', '', 'Klina', ['Klit', 'Kla', 'Klaw'], '-na = nous.'),
        C('À une fille, « tu as écrit » se dit…', '', 'Ktebti', ['Ktebt', 'Ketbet', 'Ktebtou'], 'Pour une fille, on ajoute -i : ktebti.'),
        C('« Ils ont mangé » se dit…', '', 'Klaw', ['Klina', 'Klat', 'Klitou'], 'Verbes en -a : -aw = ils.'),
        C('Que veut dire « mchit » ?', 'Mchit', 'Je suis allé(e), tu es allé (garçon)', ['Il est allé', 'Ils sont allés', 'Je vais aller'], 'Comme klit : -it = je, ou tu (garçon).'),
        C('Que veut dire « klat » ?', 'Klat', 'Elle a mangé', ['Il a mangé', 'J’ai mangé', 'Ils ont mangé'], 'Kla = il a mangé ; klat = elle a mangé.')
      ]
    },
    d5: {
      id: 'dg5', title: 'Le futur (rah, rayah) et « rani »',
      cards: [
        { title: 'Rani : je suis, je suis en train de', text: '« Rani » change selon la personne. Il sert à dire où on est, comment on va, et ce qu’on est en train de faire.',
          table: [['rani', 'je suis'], ['rak / raki', 'tu es (garçon / fille)'], ['rah', 'il est'], ['raha', 'elle est'], ['rana', 'nous sommes'], ['rakoum', 'vous êtes'], ['rahoum', 'ils sont'], ['rani nekteb', 'je suis en train d’écrire'], ['rani labas', 'je vais bien']] },
        { title: 'Le futur : rah + présent', text: 'Pour le futur, on met « rah » devant le verbe au présent. Le plus simple !',
          table: [['rah nrouh', 'je vais y aller'], ['rah nwelli', 'je vais revenir'], ['rah naayetlek', 'je vais t’appeler'], ['machi rah nrouh', 'je ne vais pas y aller']] },
        { title: 'L’autre futur : rayah / rayha', text: 'On peut aussi dire « rani rayah » (garçon) ou « rani rayha » (fille) + le verbe : « je suis parti pour… ».',
          table: [['rani rayah nakol', 'je vais manger (garçon)'], ['rani rayha nakol', 'je vais manger (fille)'], ['wach rak rayah tdir?', 'qu’est-ce que tu vas faire ? (garçon)'], ['wach raki rayha tdiri?', 'qu’est-ce que tu vas faire ? (fille)']] }
      ],
      exercises: [
        C('« Je vais y aller » se dit…', '', 'Rah nrouh', ['Rouht', 'Ma nrouhch', 'Nrouh rah'], 'Rah devant le verbe au présent.'),
        C('« Je ne vais pas y aller » se dit…', '', 'Machi rah nrouh', ['Ma rah nrouhch', 'Rah ma nrouhch', 'Ma rouhtch'], 'Le futur se nie avec machi.'),
        C('« Elle est là » se dit…', '', 'Raha hna', ['Rah hna', 'Rani hna', 'Rahoum hna'], 'Raha = elle est.'),
        C('Une fille dit « je vais manger » :', '', 'Rani rayha nakol', ['Rani rayah nakol', 'Raha rayha nakol', 'Rani rayha klit'], 'Rayha pour une fille, puis le verbe au présent.'),
        C('Que veut dire « rana nekhedmou » ?', 'Rana nekhedmou', 'Nous sommes en train de travailler', ['Nous avons travaillé', 'Ils travaillent', 'Nous n’allons pas travailler'], 'Rana = nous sommes.'),
        C('À une fille, « tu es fatiguée ? » se dit…', '', 'Raki aayana?', ['Rak aayan?', 'Raha aayana?', 'Rani aayana?'], 'Raki pour une fille, et l’adjectif s’accorde : aayana.')
      ]
    }
  };
})();

// =====================================================================================
// Assemblage : niveaux 3 à 5 et grammaire dans le pack « dz »
// =====================================================================================
(() => {
  const D = window.TWB_CONTENT.dz;
  const put = l => { const i = D.levels.findIndex(x => x.id === l.id); D.levels[i] = l; };
  window.TWB_DZ_L34.forEach(put);
  put(window.TWB_DZ_L5);
  Object.entries(window.TWB_DZ_GRAMMAR).forEach(([lv, g]) => { D.levels.find(l => l.id === lv).grammar = g; });
  delete window.TWB_DZ_L34; delete window.TWB_DZ_L5; delete window.TWB_DZ_GRAMMAR;
  // Un mot revu dans un épisode plus loin garde un identifiant unique (carnet, étoiles, révisions)
  const seen = new Set();
  D.levels.forEach(l => l.episodes.forEach(e => e.words.forEach(w => {
    if (seen.has(w.id)) { const old = w.id; w.id = old + '_' + e.id; e.exercises.forEach(x => { if (x.word === old) x.word = w.id; }); }
    seen.add(w.id);
  })));
})();

// =====================================================================================
// LIRE ET ÉCRIRE — l'alphabet arabe pour écrire l'algérien
// Mêmes lettres que le parcours tunisien (content-script.js), avec les sons d'Alger :
// ق se dit vraiment q (qahwa), ث ذ ظ se disent t, d, d ; ڨ = g. Unités « ds1 »… (progression séparée du tunisien).
// =====================================================================================
(() => {
  const base = window.TWB_SCRIPT;
  const L = JSON.parse(JSON.stringify(base.letters));
  const set = (k, o) => Object.assign(L[k], o);
  set('alif', { ex: ['بابا', 'baba', 'papa'] });
  set('ta', { ex: ['تاي', 'tay', 'thé'] });
  set('tha', { lat: 't (th)', sound: 'TH de l’anglais « think » en arabe classique. À Alger, on dit simplement T : beaucoup écrivent ت à la place.', ex: ['ثوم', 'toum', 'ail'] });
  set('hha', { ex: ['حانوت', 'hanout', 'boutique'] });
  set('kha', { ex: ['خبز', 'khobz', 'pain'] });
  set('dhal', { lat: 'd (dh)', sound: 'TH de l’anglais « this » en arabe classique. À Alger, on dit D : هادا (hada, celui-ci).', ex: ['ذهب', 'deheb', 'or'] });
  set('zay', { ex: ['زوج', 'zouj', 'deux'] });
  set('sin', { ex: ['سوق', 'souq', 'marché'] });
  set('chin', { ex: ['شوية', 'chwiya', 'un peu'] });
  set('sad', { ex: ['صحة', 'saha', 'merci (santé)'] });
  set('dad', { lat: 'd (lourd)', sound: 'Un D « lourd », la langue plus en arrière. À Alger, même son que ظ.', ex: ['ضو', 'dou', 'lumière'] });
  set('tta', { ex: ['طريق', 'triq', 'route'] });
  set('dha', { lat: 'd (lourd)', sound: 'D « lourd ». À Alger, même son que ض.', ex: ['ظل', 'del', 'ombre'] });
  set('ayn', { ex: ['عسل', 'aasel', 'miel'] });
  set('ghayn', { ex: ['غالي', 'ghali', 'cher'] });
  set('qaf', { lat: 'q · 9', sound: 'Q profond, au fond de la gorge. À Alger, on le prononce vraiment : قهوة (qahwa). Ailleurs en Algérie, il devient souvent G. En SMS : 9.', ex: ['قهوة', 'qahwa', 'café'] });
  set('gaf', { sound: 'G de « gâteau ». Lettre typique d’Algérie et de Tunisie : un ق avec trois points.', ex: ['ڨاطو', 'gato', 'gâteau'] });
  set('kaf', { ex: ['كسكسو', 'kesksou', 'couscous'] });
  set('ha', { ex: ['هنا', 'hna', 'ici'] });
  set('hamza', { sound: 'Un petit arrêt de la voix, comme au milieu de « oh-oh ». Souvent posée sur un alif : أ (ana, moi = أنا). En SMS : 2.' });
  window.TWB_CONTENT.dz.script = {
    preview: 'سلام',
    letters: L,
    extraWords: [
      ['باب', 'bab', 'porte'], ['بنت', 'bent', 'fille'], ['بيت', 'bit', 'chambre'], ['بابا', 'baba', 'papa'],
      ['زيت', 'zit', 'huile'], ['بحر', 'bhar', 'mer'], ['دار', 'dar', 'maison'], ['حوت', 'hout', 'poisson'],
      ['ورد', 'ward', 'roses'], ['خبز', 'khobz', 'pain'], ['راس', 'ras', 'tête'], ['سوق', 'souq', 'marché'],
      ['شمس', 'chems', 'soleil'], ['صيف', 'sif', 'été'], ['عرس', 'aars', 'mariage'], ['غدوة', 'ghodwa', 'demain'],
      ['فول', 'foul', 'fèves'], ['قهوة', 'qahwa', 'café'], ['كرش', 'kerch', 'ventre'], ['ليل', 'lil', 'nuit'],
      ['ماء', 'ma', 'eau'], ['هنا', 'hna', 'ici'], ['طريق', 'triq', 'route'], ['ڨاطو', 'gato', 'gâteau'],
      ['زوج', 'zouj', 'deux'], ['درك', 'dork', 'maintenant'], ['بزاف', 'bezzaf', 'beaucoup'], ['تاي', 'tay', 'thé'], ['حانوت', 'hanout', 'boutique']
    ],
    units: [
      { id: 'ds1', title: 'Les premières lettres', letters: ['alif', 'ba', 'ta', 'tha'],
        cards: [
          { title: 'On lit de droite à gauche', text: 'L’arabe se lit et s’écrit de droite à gauche. L’algérien s’écrit avec cet alphabet (ou en lettres latines sur WhatsApp).' },
          { title: 'Une forme, plusieurs lettres', text: 'ب ت ث ont la même forme : seuls les points changent. Un point dessous = b. Deux points dessus = t. Trois points dessus = th… qu’à Alger on prononce t.' },
          { title: 'Le Alif', text: 'ا est un simple trait vertical. Il donne le son A long, comme dans بابا (baba, papa).' }
        ] },
      { id: 'ds2', title: 'N, Y et OU', letters: ['noun', 'ya', 'waw'],
        cards: [
          { title: 'Encore des points', text: 'ن (n) a un point dessus. ي (y / i) a deux points dessous.' },
          { title: 'Les voyelles longues', text: 'Trois lettres servent aussi de voyelles longues : ا = a, و = ou, ي = i. Exemple : بيت (bit, la chambre), حوت (hout, le poisson).' }
        ] },
      { id: 'ds3', title: 'J, H et KH', letters: ['jim', 'hha', 'kha'],
        cards: [
          { title: 'La même forme, encore', text: 'ج ح خ partagent une forme. Un point dessous = j. Pas de point = h fort (7). Un point dessus = kh (5).' },
          { title: 'Les chiffres de WhatsApp', text: 'Quand tu écris « 7 » ou « 5 » en algérien sur ton téléphone, tu remplaces ces lettres : 7 = ح, 5 = خ. Exemple : « 5obz » = خبز (le pain).' }
        ] },
      { id: 'ds4', title: 'Les lettres qui ne s’attachent pas', letters: ['dal', 'dhal', 'ra', 'zay'],
        cards: [
          { title: 'Des lettres solitaires', text: 'Presque toutes les lettres s’attachent à celle qui suit. Sauf six : ا د ذ ر ز و. Après elles, on « lève le stylo ». Exemple : دار (dar, la maison).' },
          { title: 'Deux paires', text: 'د (d) et ذ (dh) : un point en plus. À Alger, ذ se prononce presque toujours d. ر (r) et ز (z) : un point en plus aussi, comme dans زوج (zouj, deux).' }
        ] },
      { id: 'ds5', title: 'Les S et le CH', letters: ['sin', 'chin', 'sad', 'dad'],
        cards: [
          { title: 'Trois petites dents', text: 'س (s) a trois petites dents. Avec trois points dessus, ça devient ش (ch), comme dans شمس (chems, le soleil).' },
          { title: 'Les lettres « lourdes »', text: 'ص (s lourd) et ض (d lourd) se prononcent avec la langue plus en arrière, la bouche plus ouverte. صحة (saha) : le merci préféré d’Alger.' }
        ] },
      { id: 'ds6', title: 'Les lettres de la gorge', letters: ['tta', 'dha', 'ayn', 'ghayn'],
        cards: [
          { title: 'Ta et Dha lourds', text: 'ط (t lourd) et ظ (d lourd) ont une boucle et une barre. À Alger, ظ et ض se prononcent pareil.' },
          { title: 'Le Ayn', text: 'ع (le 3 de WhatsApp) n’existe pas en français : c’est un A serré au fond de la gorge, comme dans عسل (aasel, le miel). Avec un point dessus, غ (gh) se dit comme le R parisien : غالي (ghali, cher).' }
        ] },
      { id: 'ds7', title: 'F, Q, G et K', letters: ['fa', 'qaf', 'gaf', 'kaf'],
        cards: [
          { title: 'Fa et Qaf', text: 'ف (f) a un point dessus. ق (q, le 9 de WhatsApp) en a deux. À Alger, on dit vraiment q : قهوة (qahwa, le café).' },
          { title: 'La lettre du Maghreb', text: 'ڨ (g) est un ق avec trois points. On l’utilise en Algérie pour le son G : ڨاطو (gato, le gâteau).' },
          { title: 'Le Kaf', text: 'ك (k), comme dans كسكسو (kesksou, le couscous).' }
        ] },
      { id: 'ds8', title: 'L, M, H, le A final et la hamza', letters: ['lam', 'mim', 'ha', 'tam', 'hamza'],
        cards: [
          { title: 'Lam et Mim', text: 'ل (l) et م (m). Attention : ل suivi de ا s’écrit لا (non !).' },
          { title: 'L’article « el »', text: 'Le « le / la » de l’algérien s’écrit ال au début du mot : الدار (eddar, la maison), السوق (essouq, le marché).' },
          { title: 'Le A de la fin', text: 'ه est un H léger, comme dans هنا (hna, ici). Avec deux points, ة se lit A en fin de mot : قهوة (qahwa), صحة (saha).' },
          { title: 'La hamza', text: 'ء est un petit arrêt de la voix. On la voit surtout posée sur un alif : أنا (ana, moi). En SMS, elle s’écrit 2.' }
        ] },
      { id: 'ds9', title: 'Les petites voyelles', letters: [], review: true,
        cards: [
          { title: 'Des voyelles cachées', text: 'Les sons a, i, ou courts ne s’écrivent souvent pas. On les devine. Dans les livres pour enfants, on les note avec de petits signes.' },
          { title: 'Les trois signes', text: 'بَ = ba (petit trait dessus). بِ = bi (petit trait dessous). بُ = bou (petite boucle dessus).' },
          { title: 'La chadda', text: 'Le petit « w » ّ double la lettre : بزّاف = bezzaf (deux z), شويّة = chwiya.' }
        ],
        vowels: base.units.find(u => u.vowels).vowels },
      { id: 'ds10', title: 'Lire du vrai algérien', letters: [], review: true, phrases: true,
        cards: [
          { title: 'L’écriture SMS', text: 'Sur WhatsApp, beaucoup d’Algériens écrivent en lettres latines avec des chiffres : 3 = ع, 5 = خ, 7 = ح, 9 = ق. Exemple : « 9ahwa » = قهوة, « sa7a » = صحة.' },
          { title: 'À toi de lire', text: 'Tu connais maintenant toutes les lettres. Place aux phrases du parcours, avec Khalti Zhor, Amine et Ammi Rabah.' }
        ] }
    ]
  };
})();
