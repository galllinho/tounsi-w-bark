// Tounsi w Bark — pack MAROCAIN « ma » (darija de Casablanca et Rabat), avec Tata Saadia.
// Règles suivies : docs/reference-marocain.md. À FAIRE AVANT DE PARTAGER : faire relire par un natif de Casablanca.
// Ce fichier : réglages du pack, personnages, discussion IA, répliques de Tata Saadia, niveaux 1 et 2.
// La suite (niveaux 3 à 5, grammaire, « Lire et écrire ») est dans content-ma-more.js.
//
// Genre de l'élève : {g:forme garçon|forme fille} dans tn et ar (au Maroc, « tu » change au présent et à l'impératif :
// nta/nti, katkhdem/katkhdmi, koul/kouli ; au passé, ktebti est le même pour les deux) ; {e} {ne} en français ;
// {petit}/{petitAr} = wlidi/benti ; {prenom} = prénom. Le vocatif marocain est « a » (آ) : a wlidi, a Tata.

(() => {
  const R = (who, tn, ar, fr, options) => ({ type: 'reply', who, line: { tn, ar, fr }, options });
  const ok = (tn, fr) => ({ tn, fr, ok: true });
  const ko = (tn, fr, why) => ({ tn, fr, why });

  window.TWB_MA_L12 = [
    // =====================================================================================
    // NIVEAU 1 — Touriste perdu à Casablanca
    // =====================================================================================
    {
      id: 'm1', num: 1, name: 'Touriste perdu à Casablanca',
      goal: 'Survivre à ta première journée à Casa',
      boss: {
        id: 'm1boss', title: 'L’épreuve de Tata Saadia',
        pitch: '10 questions sur tout le niveau. Il en faut 7 pour que Tata Saadia annonce à tout le quartier que tu parles marocain.',
        count: 10, pass: 7
      },
      episodes: [
        // ---------------------------------------------------------------- Épisode 1
        {
          id: 'm1e1', title: 'L’arrivée à Mohammed-V',
          pitch: 'Tata Saadia t’attend à l’aéroport depuis trois heures, avec une boîte de cornes de gazelle et deux voisines.',
          cast: ['saadia'],
          scene: [
            { who: 'saadia', tn: 'Salam a {petit}! Twehhechtek bzzaf!', ar: 'سلام آ {petitAr}! توحشتك بزاف!', fr: 'Coucou {petitFr} ! Tu m’as trop manqué !' },
            { who: 'me', tn: 'Salam a Tata! Labas alik?', ar: 'سلام آ طاطا! لاباس عليك؟', fr: 'Salut tata ! Ça va ?' },
            { who: 'saadia', tn: 'Labas, hamdoullah. W {g:nta|nti}, {g:kidayr|kidayra}?', ar: 'لاباس، الحمد لله. و{g:نتا|نتي}، {g:كيداير|كيدايرة}؟', fr: 'Ça va, Dieu merci. Et toi, comment tu vas ?' },
            { who: 'me', tn: 'Bikhir, hamdoullah. Ghir {g:aayan|aayana} chwiya.', ar: 'بخير، الحمد لله. غير {g:عيان|عيانة} شوية.', fr: 'Bien, Dieu merci. Juste un peu fatigué{e}.' },
            { who: 'saadia', tn: 'Chno smitek? Nsitha!', ar: 'شنو سميتك؟ نسيتها!', fr: 'C’est quoi ton prénom, déjà ? Je l’ai oublié !', note: 'Elle ne l’a pas oublié : elle l’a brodé sur un coussin. Elle teste ton marocain.' },
            { who: 'me', tn: 'Smiti {prenom}, a Tata!', ar: 'سميتي {prenom}، آ طاطا!', fr: 'Je m’appelle {prenom}, tata !' },
            { who: 'saadia', tn: 'Mzyan, mzyan. Daba ghir bddarija, wakha?', ar: 'مزيان، مزيان. دابا غير بالدارجة، واخا؟', fr: 'Bien, bien. Maintenant, seulement en darija, d’accord ?' },
            { who: 'me', tn: 'Wakha, a Tata. Choukran.', ar: 'واخا، آ طاطا. شكرا.', fr: 'D’accord, tata. Merci.', note: 'Wakha = d’accord. Tu vas le dire cent fois par jour au Maroc.' }
          ],
          words: [
            { id: 'm_salam', tn: 'Salam', ar: 'سلام', fr: 'Bonjour, salut', ex: 'Salam a Tata! = Salut tata !' },
            { id: 'm_labas', tn: 'Labas?', ar: 'لاباس؟', fr: 'Ça va ?', ex: 'Labas, hamdoullah = ça va, Dieu merci.' },
            { id: 'm_kidayr', tn: '{g:Kidayr|Kidayra}?', ar: '{g:كيداير|كيدايرة}؟', fr: 'Comment tu vas ?', ex: 'Kidayr à un garçon, kidayra à une fille.' },
            { id: 'm_hamdoullah', tn: 'Hamdoullah', ar: 'الحمد لله', fr: 'Dieu merci', ex: 'Bikhir, hamdoullah.' },
            { id: 'm_bikhir', tn: 'Bikhir', ar: 'بخير', fr: 'Bien (je vais bien)', ex: 'Ana bikhir = je vais bien.' },
            { id: 'm_smitek', tn: 'Chno smitek?', ar: 'شنو سميتك؟', fr: 'Comment tu t’appelles ?', ex: 'Chno = quoi. Smiya = prénom.' },
            { id: 'm_smiti', tn: 'Smiti…', ar: 'سميتي…', fr: 'Je m’appelle…', ex: 'Smiti {prenom}.' },
            { id: 'm_mzyan', tn: 'Mzyan', ar: 'مزيان', fr: 'Bien, bon', ex: 'Mzyan bzzaf = très bien.' },
            { id: 'm_chwiya', tn: 'Chwiya', ar: 'شوية', fr: 'Un peu', ex: 'Aayan chwiya = un peu fatigué.' },
            { id: 'm_daba', tn: 'Daba', ar: 'دابا', fr: 'Maintenant', ex: 'Le mot le plus marocain qui existe.' },
            { id: 'm_wakha', tn: 'Wakha', ar: 'واخا', fr: 'D’accord', ex: 'Wakha, a Tata.' },
            { id: 'm_choukran', tn: 'Choukran', ar: 'شكرا', fr: 'Merci', ex: 'Choukran bzzaf = merci beaucoup.' },
            { id: 'm_twehhechtek', tn: 'Twehhechtek', ar: 'توحشتك', fr: 'Tu m’as manqué', ex: 'À dire à Tata Saadia, sinon elle boude jusqu’au dîner.' }
          ],
          exercises: [
            { type: 'meaning', word: 'm_salam' },
            { type: 'reverse', word: 'm_kidayr' },
            R('saadia', 'Chno smitek?', 'شنو سميتك؟', 'Comment tu t’appelles ?', [
              ok('Smiti {prenom}.', 'Je m’appelle {prenom}.'),
              ko('Ghali bzzaf!', 'C’est très cher !', 'Tu viens de dire à Tata qu’elle coûte trop cher. Elle demandait ton prénom.'),
              ko('Bikhir, hamdoullah.', 'Bien, Dieu merci.', 'Elle te demande ton prénom, pas des nouvelles. Les nouvelles, elle les a déjà par toute la famille.')]),
            { type: 'listen', word: 'm_wakha' },
            { type: 'order', tn: 'Salam a Tata labas alik', fr: 'Salut tata, ça va ?', tokens: ['Salam', 'a', 'Tata', 'labas', 'alik'] },
            { type: 'speak', tn: 'Wakha, a Tata. Choukran.', ar: 'واخا، آ طاطا. شكرا.', fr: 'D’accord, tata. Merci.' },
            { type: 'meaning', word: 'm_daba' }
          ],
          mission: { who: 'saadia', goal: 'Salue Tata Saadia, dis-lui comment tu vas et comment tu t’appelles.', win: 'L’élève a salué Tata Saadia, donné de ses nouvelles et dit son prénom, en marocain.' }
        },
        // ---------------------------------------------------------------- Épisode 2
        {
          id: 'm1e2', title: 'Le petit taxi rouge',
          pitch: 'Si Driss conduit son petit taxi rouge depuis plus de trente ans. Le compteur marche, la radio aussi. Très fort.',
          cast: ['driss'],
          scene: [
            { who: 'driss', tn: 'Salam! Fin {g:ghadi|ghadya}?', ar: 'سلام! فين {g:غادي|غادية}؟', fr: 'Salut ! Tu vas où ?' },
            { who: 'me', tn: 'Bghit nmchi l Maarif, aafak.', ar: 'بغيت نمشي للمعاريف، عافاك.', fr: 'Je veux aller au Maârif, s’il te plaît.' },
            { who: 'driss', tn: 'Wakha. {g:Nta|Nti} mn Fransa? Bayna!', ar: 'واخا. {g:نتا|نتي} من فرانسا؟ باينة!', fr: 'D’accord. Tu viens de France ? Ça se voit !', note: 'Tu n’as rien dit. Il a deviné à ta valise à roulettes et à ta casquette.' },
            { who: 'me', tn: 'Hder bchwiya, ma fhemtch.', ar: 'هدر بشوية، ما فهمتش.', fr: 'Parle doucement, je n’ai pas compris.' },
            { who: 'driss', tn: '{g:Smaa|Smaai} hadi! Nass El Ghiwane!', ar: '{g:سمع|سمعي} هادي! ناس الغيوان!', fr: 'Écoute celle-là ! Nass El Ghiwane !', note: 'Au lieu de parler doucement, il a monté le son. Nass El Ghiwane, c’est le groupe mythique de Casablanca.' },
            { who: 'driss', tn: 'Wselna!', ar: 'وصلنا!', fr: 'On est arrivés !' },
            { who: 'me', tn: 'Bchhal?', ar: 'بشحال؟', fr: 'C’est combien ?' },
            { who: 'driss', tn: 'Tmenya d drahem.', ar: 'تمنية د دراهم.', fr: 'Huit dirhams.', note: 'Le petit taxi a un compteur : le prix est celui qui s’affiche. Bonne nouvelle, c’est moins cher qu’à Paris.' },
            { who: 'me', tn: 'Hak, choukran a Si Driss!', ar: 'هاك، شكرا آ سي إدريس!', fr: 'Tiens, merci Si Driss !' }
          ],
          words: [
            { id: 'm_finghadi', tn: 'Fin {g:ghadi|ghadya}?', ar: 'فين {g:غادي|غادية}؟', fr: 'Tu vas où ?', ex: 'Fin = où. Ghadi à un garçon, ghadya à une fille.' },
            { id: 'm_bghitnmchi', tn: 'Bghit nmchi l…', ar: 'بغيت نمشي ل…', fr: 'Je veux aller à…', ex: 'Bghit nmchi l Maarif.' },
            { id: 'm_aafak', tn: 'Aafak', ar: 'عافاك', fr: 'S’il te plaît', ex: 'Le mot magique du Maroc.' },
            { id: 'm_bchwiya', tn: 'Bchwiya', ar: 'بشوية', fr: 'Doucement', ex: 'Hder bchwiya = parle doucement.' },
            { id: 'm_mafhemtch', tn: 'Ma fhemtch', ar: 'ما فهمتش', fr: 'Je n’ai pas compris', ex: 'Ton meilleur ami à Casa.' },
            { id: 'm_bayna', tn: 'Bayna', ar: 'باينة', fr: 'Ça se voit', ex: 'Mn Fransa? Bayna!' },
            { id: 'm_smaa', tn: '{g:Smaa|Smaai}', ar: '{g:سمع|سمعي}', fr: 'Écoute', ex: 'Ce que dit Si Driss avant chaque chanson.' },
            { id: 'm_wselna', tn: 'Wselna', ar: 'وصلنا', fr: 'On est arrivés', ex: 'Le plus beau mot d’un trajet en taxi.' },
            { id: 'm_bchhal', tn: 'Bchhal?', ar: 'بشحال؟', fr: 'C’est combien ?', ex: 'Pour un prix. Chhal = combien (de choses).' },
            { id: 'm_drahem', tn: 'Drahem', ar: 'دراهم', fr: 'Dirhams, de l’argent', ex: 'Tmenya d drahem = huit dirhams.' },
            { id: 'm_hak', tn: 'Hak', ar: 'هاك', fr: 'Tiens (prends)', ex: 'Hak à un garçon, haki à une fille.' }
          ],
          exercises: [
            { type: 'meaning', word: 'm_bchhal' },
            { type: 'reverse', word: 'm_mafhemtch' },
            R('driss', 'Fin {g:ghadi|ghadya}?', 'فين {g:غادي|غادية}؟', 'Tu vas où ?', [
              ok('Bghit nmchi l Maarif, aafak.', 'Je veux aller au Maârif, s’il te plaît.'),
              ko('Choukran!', 'Merci !', 'Tu le remercies alors qu’il n’a pas encore démarré. Il est touché, mais il attend l’adresse.'),
              ko('Smiti Driss.', 'Je m’appelle Driss.', 'C’est lui, Driss. Toi, tu devais dire où tu vas.')]),
            { type: 'listen', word: 'm_aafak' },
            R('driss', 'Tmenya d drahem.', 'تمنية د دراهم.', 'Huit dirhams.', [
              ok('Hak, choukran!', 'Tiens, merci !'),
              ko('Twehhechtek!', 'Tu m’as manqué !', 'Tu connais Si Driss depuis vingt minutes. Il est ému, mais le compteur ne bouge pas.'),
              ko('Bikhir, hamdoullah.', 'Bien, Dieu merci.', 'Il t’annonce un prix, pas une maladie.')]),
            { type: 'order', tn: 'Hder bchwiya ma fhemtch', fr: 'Parle doucement, je n’ai pas compris', tokens: ['Hder', 'bchwiya', 'ma', 'fhemtch'] },
            { type: 'speak', tn: 'Bghit nmchi l Maarif, aafak.', ar: 'بغيت نمشي للمعاريف، عافاك.', fr: 'Je veux aller au Maârif, s’il te plaît.' }
          ],
          mission: { who: 'driss', goal: 'Dis à Si Driss où tu vas, demande-lui de parler doucement, puis demande le prix et paie.', win: 'L’élève a donné sa destination, demandé de parler doucement et demandé le prix, en marocain.' }
        },
        // ---------------------------------------------------------------- Épisode 3
        {
          id: 'm1e3', title: 'Chez Si Hamid, moul lhanout',
          pitch: 'Si Hamid tient l’épicerie du coin. Tu viens pour du pain, tu repars avec trois choses en plus.',
          cast: ['hamid'],
          scene: [
            { who: 'hamid', tn: 'Sbah lkhir! Ach bghiti?', ar: 'صباح الخير! آش بغيتي؟', fr: 'Bonjour ! Tu veux quoi ?', note: 'Bghiti (tu as voulu, tu veux) est le même pour un garçon et une fille.' },
            { who: 'me', tn: 'Aatini khobza w lhlib, aafak.', ar: 'عطيني خبزة والحليب، عافاك.', fr: 'Donne-moi un pain et du lait, s’il te plaît.' },
            { who: 'hamid', tn: 'Chhal men khobza?', ar: 'شحال من خبزة؟', fr: 'Combien de pains ?' },
            { who: 'me', tn: 'Jouj khobzat.', ar: 'جوج خبزات.', fr: 'Deux pains.' },
            { who: 'hamid', tn: 'Ghir jouj? {g:Dir|Diri} tlata! W chi msemmen? Kayn kolchi!', ar: 'غير جوج؟ {g:دير|ديري} تلاتة! وشي مسمن؟ كاين كلشي!', fr: 'Seulement deux ? Prends-en trois ! Et un peu de msemmen ? Il y a de tout !' },
            { who: 'me', tn: 'La, choukran. Ghir jouj khobzat w lhlib.', ar: 'لا، شكرا. غير جوج خبزات والحليب.', fr: 'Non merci. Juste deux pains et le lait.' },
            { who: 'hamid', tn: 'Wakha. Tnach dirham. W {g:hak|haki} jouj bonbonat, fabor.', ar: 'واخا. طناش درهم. و{g:هاك|هاكي} جوج بونبونات، فابور.', fr: 'D’accord. Douze dirhams. Et voilà deux bonbons, gratuits.', note: 'Fabor (gratuit) vient de l’espagnol « favor ». Et non, ce n’est pas de la générosité : c’est pour que tu reviennes demain.' },
            { who: 'me', tn: 'Barak llahou fik, a Si Hamid. Bslama!', ar: 'بارك الله فيك، آ سي حميد. بسلامة!', fr: 'Merci beaucoup, Si Hamid. Au revoir !' }
          ],
          words: [
            { id: 'm_sbahlkhir', tn: 'Sbah lkhir', ar: 'صباح الخير', fr: 'Bonjour (le matin)', ex: 'Msa lkhir = bonsoir.' },
            { id: 'm_achbghiti', tn: 'Ach bghiti?', ar: 'آش بغيتي؟', fr: 'Tu veux quoi ?', ex: 'Bghit = je veux. Ach = quoi.' },
            { id: 'm_aatini', tn: 'Aatini', ar: 'عطيني', fr: 'Donne-moi', ex: 'Aatini khobza = donne-moi un pain.' },
            { id: 'm_khobza', tn: 'Khobza', ar: 'خبزة', fr: 'Un pain', ex: 'Khobz = le pain. Jouj khobzat = deux pains.' },
            { id: 'm_lhlib', tn: 'Lhlib', ar: 'الحليب', fr: 'Le lait', ex: 'Qahwa b lhlib = café au lait.' },
            { id: 'm_chhal', tn: 'Chhal?', ar: 'شحال؟', fr: 'Combien ?', ex: 'Chhal men khobza? = combien de pains ?' },
            { id: 'm_wahed', tn: 'Wahed', ar: 'واحد', fr: 'Un', ex: 'Wahed, jouj, tlata, rbaa, khamsa…' },
            { id: 'm_jouj', tn: 'Jouj', ar: 'جوج', fr: 'Deux', ex: 'Avec un j au Maroc : jouj (pas zouj).' },
            { id: 'm_tlata', tn: 'Tlata', ar: 'تلاتة', fr: 'Trois', ex: 'Le nombre préféré de Si Hamid : toujours un de plus.' },
            { id: 'm_khamsa', tn: 'Khamsa', ar: 'خمسة', fr: 'Cinq', ex: 'Setta, sebaa, tmenya, tesaoud = six, sept, huit, neuf.' },
            { id: 'm_aachra', tn: 'Aachra', ar: 'عشرة', fr: 'Dix', ex: 'Hdach, tnach = onze, douze.' },
            { id: 'm_kayn', tn: 'Kayn', ar: 'كاين', fr: 'Il y a', ex: 'Makaynch = il n’y a pas.' },
            { id: 'm_fabor', tn: 'Fabor', ar: 'فابور', fr: 'Gratuit', ex: 'Le mot préféré de ton cousin Yassine.' }
          ],
          exercises: [
            { type: 'meaning', word: 'm_aatini' },
            { type: 'reverse', word: 'm_chhal' },
            R('hamid', 'Ach bghiti?', 'آش بغيتي؟', 'Tu veux quoi ?', [
              ok('Aatini khobza, aafak.', 'Donne-moi un pain, s’il te plaît.'),
              ko('Fin ghadi?', 'Tu vas où ?', 'Tu demandes à Si Hamid où il va. Nulle part : il vit dans sa boutique.'),
              ko('Ghali bzzaf!', 'C’est très cher !', 'Il n’a encore rien vendu. Laisse-lui au moins le temps d’ajouter trois choses.')]),
            { type: 'listen', word: 'm_jouj' },
            R('hamid', 'Chhal men khobza?', 'شحال من خبزة؟', 'Combien de pains ?', [
              ok('Jouj khobzat.', 'Deux pains.'),
              ko('Aachra d lmsemmen.', 'Dix msemmen.', 'Il parlait du pain. Mais Si Hamid est ravi : il note la commande.'),
              ko('Sbah lkhir.', 'Bonjour.', 'Encore bonjour ? Il t’a déjà salué{e}, il veut un chiffre.')]),
            { type: 'order', tn: 'Aatini jouj khobzat w lhlib', fr: 'Donne-moi deux pains et le lait', tokens: ['Aatini', 'jouj', 'khobzat', 'w', 'lhlib'] },
            { type: 'speak', tn: 'Barak llahou fik.', ar: 'بارك الله فيك.', fr: 'Merci beaucoup (que Dieu te bénisse).' }
          ],
          mission: { who: 'hamid', goal: 'Achète deux pains et du lait chez Si Hamid, et refuse poliment ce qu’il essaie de te vendre en plus.', win: 'L’élève a commandé deux pains et du lait, refusé un produit en plus et remercié, en marocain.' }
        },
        // ---------------------------------------------------------------- Épisode 4
        {
          id: 'm1e4', title: 'Le café de Ba Abdellah',
          pitch: 'Ba Abdellah tient le café du quartier depuis 40 ans. Il sert le thé, et son avis avec.',
          cast: ['abdellah'],
          scene: [
            { who: 'abdellah', tn: 'Mrehba! Ach {g:katchreb|katchrbi}? Qahwa wella atay?', ar: 'مرحبا! آش {g:كتشرب|كتشربي}؟ قهوة ولا أتاي؟', fr: 'Bienvenue ! Tu bois quoi ? Café ou thé ?' },
            { who: 'me', tn: 'Atay, aafak.', ar: 'أتاي، عافاك.', fr: 'Un thé, s’il te plaît.' },
            { who: 'abdellah', tn: 'B naanaa, akid. W b sokkar?', ar: 'بالنعناع، أكيد. وبالسكر؟', fr: 'À la menthe, bien sûr. Et avec du sucre ?' },
            { who: 'me', tn: 'La, bla sokkar.', ar: 'لا، بلا سكر.', fr: 'Non, sans sucre.' },
            { who: 'abdellah', tn: 'Bla sokkar?! Atay bla sokkar bhal Kaza bla bhar!', ar: 'بلا سكر؟! أتاي بلا سكر بحال كازا بلا بحر!', fr: 'Sans sucre ?! Un thé sans sucre, c’est comme Casa sans la mer !', note: 'Au Maroc, le thé est très sucré. Demander sans sucre, c’est comme demander une pizza sans pâte.' },
            { who: 'me', tn: 'Wakha, chwiya d sokkar. W kas d lma.', ar: 'واخا، شوية د السكر. وكاس د الما.', fr: 'D’accord, un peu de sucre. Et un verre d’eau.' },
            { who: 'me', tn: 'Chhal nkhelless?', ar: 'شحال نخلص؟', fr: 'Je te dois combien ?' },
            { who: 'abdellah', tn: 'La la, atay aaliya!', ar: 'لا لا، أتاي عليا!', fr: 'Non non, le thé, c’est pour moi !', note: 'Règle marocaine : tu insistes pour payer, il refuse, et vous recommencez trois fois.' }
          ],
          words: [
            { id: 'm_mrehba', tn: 'Mrehba', ar: 'مرحبا', fr: 'Bienvenue', ex: 'Mrehba bik = sois le bienvenu.' },
            { id: 'm_katchreb', tn: 'Ach {g:katchreb|katchrbi}?', ar: 'آش {g:كتشرب|كتشربي}؟', fr: 'Tu bois quoi ?', ex: 'Kanchreb = je bois.' },
            { id: 'm_qahwa', tn: 'Qahwa', ar: 'قهوة', fr: 'Café', ex: 'Nss nss = café moitié lait.' },
            { id: 'm_atay', tn: 'Atay', ar: 'أتاي', fr: 'Thé', ex: 'Atay b naanaa = thé à la menthe.' },
            { id: 'm_naanaa', tn: 'Naanaa', ar: 'نعناع', fr: 'Menthe', ex: 'B naanaa = à la menthe.' },
            { id: 'm_wella', tn: 'Wella', ar: 'ولا', fr: 'Ou (bien)', ex: 'Qahwa wella atay?' },
            { id: 'm_sokkar', tn: 'Sokkar', ar: 'سكر', fr: 'Sucre', ex: 'B sokkar = avec du sucre.' },
            { id: 'm_bla', tn: 'Bla', ar: 'بلا', fr: 'Sans', ex: 'Bla sokkar = sans sucre. Courage.' },
            { id: 'm_bhal', tn: 'Bhal', ar: 'بحال', fr: 'Comme', ex: 'Bhal Tata Saadia = comme Tata Saadia.' },
            { id: 'm_kasdlma', tn: 'Kas d lma', ar: 'كاس د الما', fr: 'Un verre d’eau', ex: 'Lma = l’eau. D = de.' },
            { id: 'm_nkhelless', tn: 'Chhal nkhelless?', ar: 'شحال نخلص؟', fr: 'Je te dois combien ?', ex: 'Nkhelless = je paie.' },
            { id: 'm_aaliya', tn: 'Aaliya', ar: 'عليا', fr: 'C’est pour moi (je paie)', ex: 'Atay aaliya!' }
          ],
          exercises: [
            R('abdellah', 'Ach {g:katchreb|katchrbi}?', 'آش {g:كتشرب|كتشربي}؟', 'Tu bois quoi ?', [
              ok('Atay, aafak.', 'Un thé, s’il te plaît.'),
              ko('Jouj khobzat.', 'Deux pains.', 'Tu commandes du pain au café. Ba Abdellah t’envoie chez Si Hamid… qui te vendra un thé.'),
              ko('Fin ghadi?', 'Tu vas où ?', 'C’est toi qui viens d’entrer. Lui, il n’a pas bougé de cette chaise depuis 1986.')]),
            { type: 'meaning', word: 'm_naanaa' },
            R('abdellah', 'W b sokkar?', 'وبالسكر؟', 'Et avec du sucre ?', [
              ok('Chwiya d sokkar, aafak.', 'Un peu de sucre, s’il te plaît.'),
              ko('Ghali bzzaf!', 'C’est très cher !', 'Le sucre est gratuit. Et maintenant, Ba Abdellah est vexé.'),
              ko('Smiti Abdellah.', 'Je m’appelle Abdellah.', 'C’est LUI, Abdellah. Toi, tu avais juste à parler du sucre.')]),
            { type: 'listen', word: 'm_atay' },
            { type: 'reverse', word: 'm_aaliya' },
            { type: 'order', tn: 'Chhal nkhelless', fr: 'Je te dois combien ?', tokens: ['Chhal', 'nkhelless'] },
            { type: 'speak', tn: 'Atay b naanaa, aafak.', ar: 'أتاي بالنعناع، عافاك.', fr: 'Un thé à la menthe, s’il te plaît.' }
          ],
          mission: { who: 'abdellah', goal: 'Commande un thé à la menthe avec peu de sucre et un verre d’eau, puis demande combien tu dois.', win: 'L’élève a commandé un thé et de l’eau, parlé du sucre, puis demandé combien il doit, en marocain.' }
        },
        // ---------------------------------------------------------------- Épisode 5
        {
          id: 'm1e5', title: 'La voisine, Lalla Naïma',
          pitch: 'Lalla Naïma habite en face de Tata Saadia. En trois minutes, elle saura tout de ta vie. En quatre, tout l’immeuble aussi.',
          cast: ['naima'],
          scene: [
            { who: 'naima', tn: 'Salam! {g:Nta|Nti} {g:jdid|jdida} hna?', ar: 'سلام! {g:نتا|نتي} {g:جديد|جديدة} هنا؟', fr: 'Bonjour ! Tu es nouveau{e} ici ?' },
            { who: 'me', tn: 'Iyeh, ana {g:weld|bent} khet Tata Saadia.', ar: 'إيه، أنا {g:ولد|بنت} خت طاطا سعدية.', fr: 'Oui, je suis {g:le fils|la fille} de la sœur de Tata Saadia.' },
            { who: 'naima', tn: 'Mrehba bik! Ana Naima, jaratha.', ar: 'مرحبا بيك! أنا نعيمة، جارتها.', fr: 'Bienvenue ! Moi, c’est Naïma, sa voisine.' },
            { who: 'me', tn: 'Metcherfin, a Lalla Naima.', ar: 'متشرفين، آ لالة نعيمة.', fr: 'Enchanté{e}, Lalla Naïma.', note: 'Lalla = madame, en signe de respect. Avec les dames du quartier, c’est obligatoire.' },
            { who: 'naima', tn: 'W fin {g:katqra|katqray}?', ar: 'وفين {g:كتقرا|كتقراي}؟', fr: 'Et tu étudies où ?' },
            { who: 'me', tn: 'Kanqra f Fransa.', ar: 'كنقرا ف فرانسا.', fr: 'J’étudie en France.' },
            { who: 'naima', tn: 'Mzyan! W wach {g:mzewwej|mzewwja}?', ar: 'مزيان! وواش {g:مزوج|مزوجة}؟', fr: 'Très bien ! Et tu es marié{e} ?', note: 'Tu es là depuis trois minutes. Elle a déjà posé LA question.' },
            { who: 'me', tn: 'La, mazal!', ar: 'لا، مازال!', fr: 'Non, pas encore !' },
            { who: 'naima', tn: 'Mazal? Aandi {g:bent khti|weld khti}…', ar: 'مازال؟ عندي {g:بنت ختي|ولد ختي}…', fr: 'Pas encore ? J’ai {g:une nièce|un neveu}…' },
            { who: 'me', tn: 'Smeh liya, Tata katsennani!', ar: 'سمح ليا، طاطا كتسناني!', fr: 'Pardon, Tata m’attend !', note: 'Tu es juste sorti{e} sur le palier. Tu repars presque fiancé{e}.' }
          ],
          words: [
            { id: 'm_jdid', tn: '{g:Jdid|Jdida}', ar: '{g:جديد|جديدة}', fr: 'Nouveau, nouvelle', ex: 'Nta jdid hna? = tu es nouveau ici ?' },
            { id: 'm_iyeh', tn: 'Iyeh', ar: 'إيه', fr: 'Oui', ex: 'On dit aussi « ah ».' },
            { id: 'm_la', tn: 'La', ar: 'لا', fr: 'Non', ex: 'La, choukran = non merci.' },
            { id: 'm_weld', tn: 'Weld / bent', ar: 'ولد / بنت', fr: 'Fils (garçon) / fille', ex: 'Weld khti = mon neveu (le fils de ma sœur).' },
            { id: 'm_okht', tn: 'Khet', ar: 'خت', fr: 'Sœur (de…)', ex: 'Khti = ma sœur. Khouya = mon frère.' },
            { id: 'm_jara', tn: 'Jara', ar: 'جارة', fr: 'Voisine', ex: 'Jar = voisin. Jaratha = sa voisine.' },
            { id: 'm_metcherfin', tn: 'Metcherfin', ar: 'متشرفين', fr: 'Enchanté', ex: 'Pour un garçon comme pour une fille.' },
            { id: 'm_kanqra', tn: 'Kanqra', ar: 'كنقرا', fr: 'J’étudie', ex: 'Kanqra f Fransa = j’étudie en France.' },
            { id: 'm_mazal', tn: 'Mazal', ar: 'مازال', fr: 'Pas encore, encore', ex: 'La, mazal! = non, pas encore !' },
            { id: 'm_smehliya', tn: 'Smeh liya', ar: 'سمح ليا', fr: 'Pardon, excuse-moi', ex: 'Pour sortir de toutes les situations.' },
            { id: 'm_aandi', tn: 'Aandi', ar: 'عندي', fr: 'J’ai', ex: 'Aandek = tu as. Ma aandich = je n’ai pas.' }
          ],
          exercises: [
            R('naima', '{g:Nta|Nti} {g:jdid|jdida} hna?', '{g:نتا|نتي} {g:جديد|جديدة} هنا؟', 'Tu es nouveau{e} ici ?', [
              ok('Iyeh, ana {g:weld|bent} khet Tata Saadia.', 'Oui, je suis {g:le fils|la fille} de la sœur de Tata Saadia.'),
              ko('Bchhal?', 'C’est combien ?', 'Tu demandes un prix à la voisine. Elle va raconter à tout l’immeuble que tu veux acheter son appartement.'),
              ko('Wselna!', 'On est arrivés !', 'Tu n’es pas dans un taxi. Tu es sur le palier, et Lalla Naïma te regarde.')]),
            { type: 'meaning', word: 'm_metcherfin' },
            { type: 'reverse', word: 'm_mazal' },
            R('naima', 'Wach {g:mzewwej|mzewwja}?', 'واش {g:مزوج|مزوجة}؟', 'Tu es marié{e} ?', [
              ok('La, mazal!', 'Non, pas encore !'),
              ko('Atay, aafak.', 'Un thé, s’il te plaît.', 'Elle ne tient pas un café. Mais elle va quand même t’en préparer un, et te poser dix questions de plus.'),
              ko('Iyeh, aandi aachra!', 'Oui, j’en ai dix !', 'Dix mariages ?! L’immeuble entier est déjà au courant.')]),
            { type: 'listen', word: 'm_smehliya' },
            { type: 'order', tn: 'Smeh liya Tata katsennani', fr: 'Pardon, Tata m’attend', tokens: ['Smeh', 'liya', 'Tata', 'katsennani'] },
            { type: 'speak', tn: 'Metcherfin, a Lalla Naima.', ar: 'متشرفين، آ لالة نعيمة.', fr: 'Enchanté{e}, Lalla Naïma.' }
          ],
          mission: { who: 'naima', goal: 'Présente-toi à Lalla Naïma, dis qui tu es dans la famille et où tu étudies, puis échappe poliment à ses questions.', win: 'L’élève s’est présenté, a dit son lien avec Tata Saadia, parlé de ses études et pris congé poliment, en marocain.' }
        }
      ]
    },
    // =====================================================================================
    // NIVEAU 2 — Une semaine à Casa
    // =====================================================================================
    {
      id: 'm2', num: 2, name: 'Une semaine à Casa',
      goal: 'Manger, téléphoner, acheter et te repérer en famille',
      boss: {
        id: 'm2boss', title: 'L’épreuve du dîner',
        pitch: '10 questions. Il en faut 7 pour que Tata Saadia te laisse quitter la table.',
        count: 10, pass: 7
      },
      episodes: [
        // ---------------------------------------------------------------- Épisode 1
        {
          id: 'm2e1', title: 'Le tajine de Tata Saadia',
          pitch: 'Premier dîner en famille. Règle n° 1 : on ne dit jamais « je n’ai plus faim » du premier coup.',
          cast: ['saadia', 'yassine'],
          scene: [
            { who: 'saadia', tn: 'Yallah, glsou! Tajine wajed!', ar: 'يالله، ڭلسو! طاجين واجد!', fr: 'Allez, asseyez-vous ! Le tajine est prêt !' },
            { who: 'yassine', tn: 'Tajine b djaj w zitoun!', ar: 'طاجين بالدجاج والزيتون!', fr: 'Un tajine au poulet et aux olives !' },
            { who: 'saadia', tn: '{g:Koul|Kouli}, a {petit}! {g:Nta|Nti} {g:daaif|daaifa} bzzaf!', ar: '{g:كول|كولي}، آ {petitAr}! {g:نتا|نتي} {g:ضعيف|ضعيفة} بزاف!', fr: 'Mange, {petitFr} ! Tu es beaucoup trop maigre !', note: 'Tu as pris deux kilos depuis ton arrivée. Pour Tata, tu es toujours trop maigre.' },
            { who: 'me', tn: 'Bnin bzzaf, a Tata!', ar: 'بنين بزاف، آ طاطا!', fr: 'C’est délicieux, tata !' },
            { who: 'saadia', tn: '{g:Zid|Zidi}, {g:zid|zidi}! {g:Zid|Zidi} chwiya!', ar: '{g:زيد|زيدي}، {g:زيد|زيدي}! {g:زيد|زيدي} شوية!', fr: 'Reprends, reprends ! Reprends un peu !' },
            { who: 'me', tn: 'La, choukran, chbaat!', ar: 'لا، شكرا، شبعت!', fr: 'Non merci, je n’ai plus faim !' },
            { who: 'yassine', tn: 'Chbaat? Ewa, ana ghadi nkemmel!', ar: 'شبعت؟ إيوا، أنا غادي نكمل!', fr: 'Plus faim ? Eh bien, moi, je vais finir !' },
            { who: 'saadia', tn: 'Bssahtek, a {petit}!', ar: 'بصحتك، آ {petitAr}!', fr: 'Bon appétit (à ta santé), {petitFr} !', note: 'Bssahtek se dit après le repas, ou quand quelqu’un a un nouveau vêtement.' },
            { who: 'me', tn: 'Llah yrhem lwalidin, a Tata.', ar: 'الله يرحم الوالدين، آ طاطا.', fr: 'Merci du fond du cœur, tata.', note: 'Mot à mot : « que Dieu ait pitié de tes parents ». C’est le plus beau merci du Maroc.' }
          ],
          words: [
            { id: 'm_yallah', tn: 'Yallah', ar: 'يالله', fr: 'Allez ! On y va !', ex: 'Yallah, glsou! = allez, asseyez-vous !' },
            { id: 'm_gles', tn: '{g:Gles|Glsi}', ar: '{g:ڭلس|ڭلسي}', fr: 'Assieds-toi', ex: 'Avec ڭ, la lettre marocaine du son g. Glsou = asseyez-vous.' },
            { id: 'm_djaj', tn: 'Djaj', ar: 'دجاج', fr: 'Poulet', ex: 'Tajine b djaj = tajine au poulet.' },
            { id: 'm_zitoun', tn: 'Zitoun', ar: 'زيتون', fr: 'Olives', ex: 'Zit = huile.' },
            { id: 'm_koul', tn: '{g:Koul|Kouli}', ar: '{g:كول|كولي}', fr: 'Mange !', ex: 'Koul à un garçon, kouli à une fille. Le mot préféré de Tata.' },
            { id: 'm_bnin', tn: 'Bnin', ar: 'بنين', fr: 'Délicieux', ex: 'Bnin bzzaf! = c’est trop bon !' },
            { id: 'm_zid', tn: '{g:Zid|Zidi}', ar: '{g:زيد|زيدي}', fr: 'Reprends, continue', ex: 'Zid chwiya = reprends un peu.' },
            { id: 'm_chbaat', tn: 'Chbaat', ar: 'شبعت', fr: 'Je n’ai plus faim', ex: 'À dire trois fois pour être cru{e}.' },
            { id: 'm_ewa', tn: 'Ewa', ar: 'إيوا', fr: 'Eh bien, alors', ex: 'Ewa, yallah! = bon, allez !' },
            { id: 'm_bssahtek', tn: 'Bssahtek', ar: 'بصحتك', fr: 'À ta santé, bon appétit', ex: 'Après un repas, ou pour un habit neuf.' },
            { id: 'm_lwalidin', tn: 'Llah yrhem lwalidin', ar: 'الله يرحم الوالدين', fr: 'Merci (que Dieu ait pitié des parents)', ex: 'Le merci le plus chaleureux.' }
          ],
          exercises: [
            { type: 'meaning', word: 'm_bnin' },
            R('saadia', '{g:Koul|Kouli}, a {petit}!', '{g:كول|كولي}، آ {petitAr}!', 'Mange, {petitFr} !', [
              ok('Bnin bzzaf, a Tata!', 'C’est délicieux, tata !'),
              ko('Bchhal?', 'C’est combien ?', 'Tu demandes le prix du tajine à Tata. Elle est vexée pour trois générations.'),
              ko('Fin ghadya?', 'Tu vas où ?', 'Personne ne va nulle part. Surtout pas toi, il reste le dessert.')]),
            { type: 'reverse', word: 'm_chbaat' },
            R('saadia', '{g:Zid|Zidi}, {g:zid|zidi}! {g:Zid|Zidi} chwiya!', '{g:زيد|زيدي}، {g:زيد|زيدي}! {g:زيد|زيدي} شوية!', 'Reprends ! Reprends un peu !', [
              ok('La, choukran, chbaat!', 'Non merci, je n’ai plus faim !'),
              ko('Smaai hadi!', 'Écoute celle-là !', 'Ce n’est pas le taxi de Si Driss. Pas de musique à table.'),
              ko('Sbah lkhir!', 'Bonjour !', 'Il est neuf heures du soir et tu es à table depuis une heure.')]),
            { type: 'listen', word: 'm_bssahtek' },
            { type: 'order', tn: 'Llah yrhem lwalidin a Tata', fr: 'Merci du fond du cœur, tata', tokens: ['Llah', 'yrhem', 'lwalidin', 'a', 'Tata'] },
            { type: 'speak', tn: 'Bnin bzzaf, a Tata!', ar: 'بنين بزاف، آ طاطا!', fr: 'C’est délicieux, tata !' }
          ],
          mission: { who: 'saadia', goal: 'À table avec Tata Saadia : dis que c’est délicieux, refuse poliment de reprendre, puis remercie-la.', win: 'L’élève a complimenté le plat, refusé de reprendre et remercié Tata Saadia, en marocain.' }
        },
        // ---------------------------------------------------------------- Épisode 2
        {
          id: 'm2e2', title: 'Lalla Hniya au téléphone',
          pitch: 'Ta grand-mère t’appelle. Elle entend mal, mais elle comprend tout. Surtout ce que tu ne dis pas.',
          cast: ['hniya'],
          scene: [
            { who: 'hniya', tn: 'Alo? Chkoun?', ar: 'ألو؟ شكون؟', fr: 'Allô ? C’est qui ?' },
            { who: 'me', tn: 'Ana, a Lalla! {prenom}!', ar: 'أنا، آ لالة! {prenom}!', fr: 'C’est moi, Lalla ! {prenom} !' },
            { who: 'hniya', tn: 'Chkoun? Ma kansmaach mzyan!', ar: 'شكون؟ ما كنسمعش مزيان!', fr: 'Qui ? Je n’entends pas bien !' },
            { who: 'me', tn: 'Ana {prenom}, {g:weld|bent} bentek!', ar: 'أنا {prenom}، {g:ولد|بنت} بنتك!', fr: 'C’est {prenom}, {g:le fils|la fille} de ta fille !' },
            { who: 'hniya', tn: '{g:Aawed|Aawdi}, a {petit}, b sout aali!', ar: '{g:عاود|عاودي}، آ {petitAr}، بصوت عالي!', fr: 'Répète, {petitFr}, plus fort !' },
            { who: 'me', tn: 'Kanbghik, a Lalla!', ar: 'كنبغيك، آ لالة!', fr: 'Je t’aime, Lalla !', note: 'Ça, elle l’a entendu du premier coup. Bizarre.' },
            { who: 'hniya', tn: 'Llah yrdi alik! Imta {g:jay|jaya} tchoufni?', ar: 'الله يرضي عليك! إمتى {g:جاي|جاية} تشوفني؟', fr: 'Que Dieu te bénisse ! Quand est-ce que tu viens me voir ?' },
            { who: 'me', tn: 'Ghedda inchallah, mn baad lghda.', ar: 'غدا إن شاء الله، من بعد الغدا.', fr: 'Demain si Dieu le veut, après le déjeuner.' },
            { who: 'hniya', tn: 'Ghedda? Ghadi nsawb lik lharira w lmsemmen!', ar: 'غدا؟ غادي نصاوب ليك الحريرة والمسمن!', fr: 'Demain ? Je vais te préparer de la harira et des msemmen !', note: 'Tu n’as pas encore raccroché, elle a déjà allumé le feu.' }
          ],
          words: [
            { id: 'm_alo', tn: 'Alo', ar: 'ألو', fr: 'Allô', ex: 'Comme en français.' },
            { id: 'm_chkoun', tn: 'Chkoun?', ar: 'شكون؟', fr: 'Qui ?', ex: 'Chkoun nta? = qui es-tu ?' },
            { id: 'm_kansmaa', tn: 'Ma kansmaach', ar: 'ما كنسمعش', fr: 'Je n’entends pas', ex: 'Kansmaa = j’entends.' },
            { id: 'm_bentek', tn: 'Bentek', ar: 'بنتك', fr: 'Ta fille', ex: 'Bent = fille. -ek = ton, ta.' },
            { id: 'm_aawed', tn: '{g:Aawed|Aawdi}', ar: '{g:عاود|عاودي}', fr: 'Répète', ex: 'Aawed, aafak = répète, s’il te plaît.' },
            { id: 'm_kanbghik', tn: 'Kanbghik', ar: 'كنبغيك', fr: 'Je t’aime', ex: 'À dire à Lalla Hniya. Souvent.' },
            { id: 'm_yrdi', tn: 'Llah yrdi alik', ar: 'الله يرضي عليك', fr: 'Que Dieu te bénisse', ex: 'La bénédiction préférée des grands-mères.' },
            { id: 'm_imta', tn: 'Imta?', ar: 'إمتى؟', fr: 'Quand ?', ex: 'Imta jay? = quand est-ce que tu viens ?' },
            { id: 'm_ghedda', tn: 'Ghedda', ar: 'غدا', fr: 'Demain', ex: 'Lbareh, lyoum, ghedda = hier, aujourd’hui, demain.' },
            { id: 'm_lghda', tn: 'Lghda', ar: 'الغدا', fr: 'Le déjeuner', ex: 'Laacha = le dîner.' },
            { id: 'm_harira', tn: 'Lharira', ar: 'الحريرة', fr: 'La harira (soupe)', ex: 'La soupe de toutes les grands-mères du Maroc.' }
          ],
          exercises: [
            R('hniya', 'Alo? Chkoun?', 'ألو؟ شكون؟', 'Allô ? C’est qui ?', [
              ok('Ana, a Lalla! {prenom}!', 'C’est moi, Lalla ! {prenom} !'),
              ko('Bchhal kilo?', 'C’est combien le kilo ?', 'Lalla Hniya n’est pas au marché. Elle raccroche pour appeler ta mère.'),
              ko('Wselna!', 'On est arrivés !', 'Arrivés où ? Elle est déjà en train de mettre ses chaussures.')]),
            { type: 'meaning', word: 'm_kanbghik' },
            { type: 'reverse', word: 'm_imta' },
            R('hniya', 'Imta {g:jay|jaya} tchoufni?', 'إمتى {g:جاي|جاية} تشوفني؟', 'Quand est-ce que tu viens me voir ?', [
              ok('Ghedda inchallah.', 'Demain si Dieu le veut.'),
              ko('Chbaat.', 'Je n’ai plus faim.', 'Elle n’a encore rien cuisiné. Laisse-lui au moins le temps.'),
              ko('Ma fhemtch, Si Driss.', 'Je n’ai pas compris, Si Driss.', 'C’est ta grand-mère, pas le chauffeur de taxi !')]),
            { type: 'listen', word: 'm_ghedda' },
            { type: 'order', tn: 'Imta jay tchoufni', fr: 'Quand est-ce que tu viens me voir ?', tokens: ['Imta', 'jay', 'tchoufni'] },
            { type: 'speak', tn: 'Kanbghik, a Lalla!', ar: 'كنبغيك، آ لالة!', fr: 'Je t’aime, Lalla !' }
          ],
          mission: { who: 'hniya', goal: 'Lalla Hniya t’appelle : dis-lui qui tu es (plus fort, elle entend mal), dis-lui que tu l’aimes et quand tu viens la voir.', win: 'L’élève s’est présenté, a répété, dit « je t’aime » et annoncé quand il viendra, en marocain.' }
        },
        // ---------------------------------------------------------------- Épisode 3
        {
          id: 'm2e3', title: 'Au marché avec Ba Boujemaa',
          pitch: 'Ba Boujemaa a les plus belles oranges du marché. C’est lui qui le dit. Très fort.',
          cast: ['boujemaa'],
          scene: [
            { who: 'boujemaa', tn: 'Aji, aji! Limoun hlou, maticha hamra!', ar: 'أجي، أجي! ليمون حلو، ماطيشة حمرا!', fr: 'Approche, approche ! Des oranges sucrées, des tomates bien rouges !', note: 'Attention : au Maroc, limoun, c’est l’ORANGE. Le citron, c’est hamd.' },
            { who: 'me', tn: 'Bchhal kilo d limoun?', ar: 'بشحال كيلو د الليمون؟', fr: 'C’est combien, le kilo d’oranges ?' },
            { who: 'boujemaa', tn: 'Aachra d drahem lkilo.', ar: 'عشرة د دراهم الكيلو.', fr: 'Dix dirhams le kilo.' },
            { who: 'me', tn: 'Ghali! Nqess chwiya, aafak.', ar: 'غالي! نقص شوية، عافاك.', fr: 'C’est cher ! Baisse un peu, s’il te plaît.' },
            { who: 'boujemaa', tn: 'Ghali?! Hada limoun Berkane! Wakha, tmenya, ghir lik.', ar: 'غالي؟! هادا ليمون بركان! واخا، تمنية، غير ليك.', fr: 'Cher ?! Ce sont des oranges de Berkane ! Bon, huit, rien que pour toi.', note: 'Berkane, dans l’Oriental, est célèbre pour ses oranges. Et « rien que pour toi », il le dit à tout le monde.' },
            { who: 'me', tn: 'Wakha, aatini jouj kilo.', ar: 'واخا، عطيني جوج كيلو.', fr: 'D’accord, donne-moi deux kilos.' },
            { who: 'boujemaa', tn: 'W chi maticha? W chi btata? W chi…', ar: 'وشي ماطيشة؟ وشي بطاطا؟ وشي…', fr: 'Et des tomates ? Et des pommes de terre ? Et des…' },
            { who: 'me', tn: 'Safi, safi! Hadchi kafi, choukran.', ar: 'صافي، صافي! هادشي كافي، شكرا.', fr: 'C’est bon, c’est bon ! Ça suffit, merci.' }
          ],
          words: [
            { id: 'm_aji', tn: 'Aji', ar: 'أجي', fr: 'Viens !', ex: 'La même forme pour un garçon et une fille.' },
            { id: 'm_limoun', tn: 'Limoun', ar: 'ليمون', fr: 'Orange (le fruit !)', ex: 'Aassir limoun = jus d’orange.' },
            { id: 'm_hamd', tn: 'Hamd', ar: 'حامض', fr: 'Citron', ex: 'Le piège préféré des touristes.' },
            { id: 'm_maticha', tn: 'Maticha', ar: 'ماطيشة', fr: 'Tomate(s)', ex: 'Maticha hamra = des tomates rouges.' },
            { id: 'm_btata', tn: 'Btata', ar: 'بطاطا', fr: 'Pomme(s) de terre', ex: 'Tajine b lbtata = tajine aux pommes de terre.' },
            { id: 'm_hlou', tn: 'Hlou', ar: 'حلو', fr: 'Sucré, doux', ex: 'Limoun hlou = des oranges sucrées.' },
            { id: 'm_kilo', tn: 'Kilo', ar: 'كيلو', fr: 'Kilo', ex: 'Jouj kilo = deux kilos.' },
            { id: 'm_ghali', tn: 'Ghali', ar: 'غالي', fr: 'Cher', ex: 'Machi ghali = pas cher. Rkhis = bon marché.' },
            { id: 'm_nqess', tn: 'Nqess chwiya', ar: 'نقص شوية', fr: 'Baisse un peu (le prix)', ex: 'La phrase la plus utile du marché.' },
            { id: 'm_safi', tn: 'Safi', ar: 'صافي', fr: 'C’est bon, ça suffit', ex: 'Safi, safi! Pour arrêter Ba Boujemaa.' },
            { id: 'm_hadchi', tn: 'Hadchi', ar: 'هادشي', fr: 'Ça, ceci', ex: 'Hadchi kafi = ça suffit.' }
          ],
          exercises: [
            { type: 'meaning', word: 'm_limoun' },
            R('boujemaa', 'Aachra d drahem lkilo.', 'عشرة د دراهم الكيلو.', 'Dix dirhams le kilo.', [
              ok('Ghali! Nqess chwiya, aafak.', 'C’est cher ! Baisse un peu, s’il te plaît.'),
              ko('Kanbghik!', 'Je t’aime !', 'Ba Boujemaa est très touché. Le prix, lui, ne bouge pas.'),
              ko('Chbaat.', 'Je n’ai plus faim.', 'Tu n’as encore rien mangé. Et ce sont des oranges, pas un tajine.')]),
            { type: 'reverse', word: 'm_safi' },
            { type: 'listen', word: 'm_maticha' },
            R('boujemaa', 'W chi maticha? W chi btata?', 'وشي ماطيشة؟ وشي بطاطا؟', 'Et des tomates ? Et des pommes de terre ?', [
              ok('Safi, hadchi kafi, choukran.', 'C’est bon, ça suffit, merci.'),
              ko('Iyeh, aatini kolchi!', 'Oui, donne-moi tout !', 'Tout ?! Ba Boujemaa appelle son fils pour porter tes sacs jusqu’à la maison.'),
              ko('Smiti Boujemaa.', 'Je m’appelle Boujemaa.', 'Non, LUI, c’est Boujemaa.')]),
            { type: 'order', tn: 'Bchhal kilo d limoun', fr: 'C’est combien, le kilo d’oranges ?', tokens: ['Bchhal', 'kilo', 'd', 'limoun'] },
            { type: 'speak', tn: 'Nqess chwiya, aafak.', ar: 'نقص شوية، عافاك.', fr: 'Baisse un peu, s’il te plaît.' }
          ],
          mission: { who: 'boujemaa', goal: 'Achète des oranges chez Ba Boujemaa : demande le prix au kilo, négocie, puis dis que ça suffit.', win: 'L’élève a demandé le prix, négocié et acheté une quantité précise, puis refusé le reste, en marocain.' }
        },
        // ---------------------------------------------------------------- Épisode 4
        {
          id: 'm2e4', title: 'Perdu au Maârif',
          pitch: 'Tu es sorti{e} « juste cinq minutes ». Ça fait une heure. Heureusement, il y a Yassine au téléphone.',
          cast: ['yassine'],
          scene: [
            { who: 'me', tn: 'Alo, Yassine? Tlefft!', ar: 'ألو، ياسين؟ تلفت!', fr: 'Allô, Yassine ? Je suis perdu{e} !' },
            { who: 'yassine', tn: 'Fin {g:nta|nti} daba?', ar: 'فين {g:نتا|نتي} دابا؟', fr: 'Tu es où, là ?' },
            { who: 'me', tn: 'Ma aareftch… Hda wahed lhanout kbir.', ar: 'ما عرفتش… حدا واحد الحانوت كبير.', fr: 'Je ne sais pas… À côté d’une grande boutique.' },
            { who: 'yassine', tn: 'Kolchi hanout kbir f Kaza! Kayn chi jamaa?', ar: 'كلشي حانوت كبير ف كازا! كاين شي جامع؟', fr: 'Tout est une grande boutique à Casa ! Il y a une mosquée ?' },
            { who: 'me', tn: 'Iyeh, kayn jamaa sghir.', ar: 'إيه، كاين جامع صغير.', fr: 'Oui, il y a une petite mosquée.' },
            { who: 'yassine', tn: 'Mzyan! {g:Sir|Siri} nichan, mn baad {g:dour|douri} aal lisser.', ar: 'مزيان! {g:سير|سيري} نيشان، من بعد {g:دور|دوري} على ليسر.', fr: 'Bien ! Va tout droit, puis tourne à gauche.' },
            { who: 'me', tn: 'Lisser? Machi limen?', ar: 'ليسر؟ ماشي ليمن؟', fr: 'À gauche ? Pas à droite ?' },
            { who: 'yassine', tn: 'Lisser!', ar: 'ليسر!', fr: 'À gauche !' },
            { who: 'me', tn: 'Wach baaid?', ar: 'واش بعيد؟', fr: 'C’est loin ?' },
            { who: 'yassine', tn: 'La, qrib, khamsa d dqayq.', ar: 'لا، قريب، خمسة د دقايق.', fr: 'Non, c’est tout près, cinq minutes.', note: 'Cinq minutes, chez Yassine, ça veut dire une demi-heure.' }
          ],
          words: [
            { id: 'm_tlefft', tn: 'Tlefft', ar: 'تلفت', fr: 'Je suis perdu(e)', ex: 'Tlefti? = tu es perdu ?' },
            { id: 'm_fin', tn: 'Fin?', ar: 'فين؟', fr: 'Où ?', ex: 'Fin nta? = tu es où ?' },
            { id: 'm_maaareftch', tn: 'Ma aareftch', ar: 'ما عرفتش', fr: 'Je ne sais pas', ex: 'Aareft = je sais (j’ai su).' },
            { id: 'm_hda', tn: 'Hda', ar: 'حدا', fr: 'À côté de', ex: 'Hda ddar = à côté de la maison.' },
            { id: 'm_jamaa', tn: 'Jamaa', ar: 'جامع', fr: 'Mosquée', ex: 'Le meilleur repère de toute ville marocaine.' },
            { id: 'm_sir', tn: '{g:Sir|Siri}', ar: '{g:سير|سيري}', fr: 'Va !', ex: 'Sir nichan = va tout droit.' },
            { id: 'm_nichan', tn: 'Nichan', ar: 'نيشان', fr: 'Tout droit', ex: 'Vient de l’idée de « viser » : droit au but.' },
            { id: 'm_dour', tn: '{g:Dour|Douri}', ar: '{g:دور|دوري}', fr: 'Tourne', ex: 'Dour aal limen = tourne à droite.' },
            { id: 'm_limen', tn: 'Limen', ar: 'ليمن', fr: 'À droite', ex: 'Aal limen = sur la droite.' },
            { id: 'm_lisser', tn: 'Lisser', ar: 'ليسر', fr: 'À gauche', ex: 'Aal lisser = sur la gauche.' },
            { id: 'm_baaid', tn: 'Baaid', ar: 'بعيد', fr: 'Loin', ex: 'Qrib = près.' },
            { id: 'm_qrib', tn: 'Qrib', ar: 'قريب', fr: 'Près', ex: 'Qrib bzzaf = tout près.' },
            { id: 'm_dqayq', tn: 'Dqayq', ar: 'دقايق', fr: 'Minutes', ex: 'Khamsa d dqayq = cinq minutes (version Yassine : trente).' }
          ],
          exercises: [
            { type: 'meaning', word: 'm_nichan' },
            R('yassine', 'Fin {g:nta|nti} daba?', 'فين {g:نتا|نتي} دابا؟', 'Tu es où, là ?', [
              ok('Ma aareftch… Hda jamaa.', 'Je ne sais pas… À côté d’une mosquée.'),
              ko('Ghedda inchallah.', 'Demain si Dieu le veut.', 'Tu es perdu{e} MAINTENANT. Demain, Tata aura déjà appelé la police.'),
              ko('Bnin bzzaf!', 'C’est délicieux !', 'Yassine demande où tu es, pas ce que tu manges. Mais il est jaloux.')]),
            { type: 'reverse', word: 'm_lisser' },
            { type: 'listen', word: 'm_limen' },
            R('yassine', '{g:Sir|Siri} nichan, mn baad {g:dour|douri} aal lisser.', '{g:سير|سيري} نيشان، من بعد {g:دور|دوري} على ليسر.', 'Va tout droit, puis tourne à gauche.', [
              ok('Wakha! Wach baaid?', 'D’accord ! C’est loin ?'),
              ko('Smiti Yassine.', 'Je m’appelle Yassine.', 'Non, LUI, c’est Yassine. Toi, tu es perdu{e}.'),
              ko('Chbaat!', 'Je n’ai plus faim !', 'Il t’indique le chemin, pas le menu.')]),
            { type: 'order', tn: 'La qrib khamsa d dqayq', fr: 'Non, c’est tout près, cinq minutes', tokens: ['La', 'qrib', 'khamsa', 'd', 'dqayq'] },
            { type: 'speak', tn: 'Alo, Yassine? Tlefft!', ar: 'ألو، ياسين؟ تلفت!', fr: 'Allô, Yassine ? Je suis perdu{e} !' }
          ],
          mission: { who: 'yassine', goal: 'Appelle Yassine : dis-lui que tu es perdu{e}, décris ce qu’il y a autour de toi et demande si c’est loin.', win: 'L’élève a dit qu’il était perdu, décrit un repère, compris un chemin et demandé la distance, en marocain.' }
        },
        // ---------------------------------------------------------------- Épisode 5
        {
          id: 'm2e5', title: 'La Corniche d’Aïn Diab',
          pitch: 'Le soleil, l’océan, une glace : tout est parfait. Sauf que Yassine veut une photo de toi « pour la famille ».',
          cast: ['yassine'],
          scene: [
            { who: 'yassine', tn: '{g:Chouf|Choufi} lbhar! Zwin, yak?', ar: '{g:شوف|شوفي} البحر! زوين، ياك؟', fr: 'Regarde la mer ! C’est beau, hein ?' },
            { who: 'me', tn: 'Wallah zwin! Ljaw mzyan lyoum.', ar: 'والله زوين! الجو مزيان اليوم.', fr: 'Wallah, c’est beau ! Il fait beau aujourd’hui.' },
            { who: 'yassine', tn: 'Nakoulou chi glas?', ar: 'ناكلو شي ڭلاص؟', fr: 'On mange une glace ?' },
            { who: 'me', tn: 'Iyeh! Wahda b lhamd.', ar: 'إيه! وحدة بالحامض.', fr: 'Oui ! Une au citron.', note: 'Tu as dit hamd, pas limoun. Ba Boujemaa serait fier de toi.' },
            { who: 'yassine', tn: 'Ana nkhelless… ghedda! Lyoum {g:nta|nti}!', ar: 'أنا نخلص… غدا! اليوم {g:نتا|نتي}!', fr: 'C’est moi qui paie… demain ! Aujourd’hui, c’est toi !', note: 'Un grand classique de Yassine. Demain, il aura oublié son porte-monnaie.' },
            { who: 'yassine', tn: 'Aji, ndirou tswira!', ar: 'أجي، نديرو تصويرة!', fr: 'Viens, on fait une photo !' },
            { who: 'me', tn: 'Wakha, walakin ghir wahda!', ar: 'واخا، ولكن غير وحدة!', fr: 'D’accord, mais une seule !' },
            { who: 'yassine', tn: '{g:Tbessem|Tbessmi}! Hadi l Tata Saadia.', ar: '{g:تبسم|تبسمي}! هادي لطاطا سعدية.', fr: 'Souris ! Celle-là, c’est pour Tata Saadia.', note: 'Dans une heure, la photo sera dans tous les groupes WhatsApp de la famille. Avec la glace sur ton nez.' }
          ],
          words: [
            { id: 'm_chouf', tn: '{g:Chouf|Choufi}', ar: '{g:شوف|شوفي}', fr: 'Regarde !', ex: 'Kanchouf = je regarde, je vois.' },
            { id: 'm_lbhar', tn: 'Lbhar', ar: 'البحر', fr: 'La mer', ex: 'À Casa, c’est l’océan, mais on dit quand même lbhar.' },
            { id: 'm_zwin', tn: 'Zwin', ar: 'زوين', fr: 'Beau, joli', ex: 'Zwina pour une fille ou une chose au féminin.' },
            { id: 'm_yak', tn: 'Yak?', ar: 'ياك؟', fr: 'Hein ? N’est-ce pas ?', ex: 'Zwin, yak? = c’est beau, hein ?' },
            { id: 'm_ljaw', tn: 'Ljaw', ar: 'الجو', fr: 'Le temps (qu’il fait)', ex: 'Ljaw mzyan = il fait beau.' },
            { id: 'm_lyoum', tn: 'Lyoum', ar: 'اليوم', fr: 'Aujourd’hui', ex: 'Lbareh, lyoum, ghedda.' },
            { id: 'm_nakoulou', tn: 'Nakoulou', ar: 'ناكلو', fr: 'On mange', ex: 'Kanakoul = je mange.' },
            { id: 'm_glas', tn: 'Glas', ar: 'ڭلاص', fr: 'Glace', ex: 'Avec ڭ : g.' },
            { id: 'm_nkhelless', tn: 'Nkhelless', ar: 'نخلص', fr: 'Je paie', ex: 'Chkoun ghadi ykhelless? = qui va payer ?' },
            { id: 'm_tswira', tn: 'Tswira', ar: 'تصويرة', fr: 'Photo', ex: 'Ndirou tswira = on fait une photo.' },
            { id: 'm_walakin', tn: 'Walakin', ar: 'ولكن', fr: 'Mais', ex: 'Wakha, walakin ghir wahda!' },
            { id: 'm_tbessem', tn: '{g:Tbessem|Tbessmi}', ar: '{g:تبسم|تبسمي}', fr: 'Souris !', ex: 'Même avec de la glace sur le nez.' }
          ],
          exercises: [
            { type: 'meaning', word: 'm_tswira' },
            R('yassine', '{g:Chouf|Choufi} lbhar! Zwin, yak?', '{g:شوف|شوفي} البحر! زوين، ياك؟', 'Regarde la mer ! C’est beau, hein ?', [
              ok('Wallah zwin! Ljaw mzyan lyoum.', 'Wallah, c’est beau ! Il fait beau aujourd’hui.'),
              ko('Fin lbhar?', 'Elle est où, la mer ?', 'Elle est juste devant toi. Yassine prend déjà une photo de ta tête pour la famille.'),
              ko('Ma kansmaach!', 'Je n’entends pas !', 'Tu fais ta Lalla Hniya ? Il répète plus fort : toute la Corniche est au courant.')]),
            { type: 'listen', word: 'm_zwin' },
            R('yassine', 'Nakoulou chi glas?', 'ناكلو شي ڭلاص؟', 'On mange une glace ?', [
              ok('Iyeh! Wahda b lhamd.', 'Oui ! Une au citron.'),
              ko('La, choukran, a Tata. Chbaat!', 'Non merci, tata. Je n’ai plus faim !', 'Tata Saadia n’est pas là. Et pour une glace, il reste toujours de la place.'),
              ko('Tmenya d drahem.', 'Huit dirhams.', 'Tu annonces un prix avant même de commander ? Yassine est impressionné.')]),
            { type: 'reverse', word: 'm_walakin' },
            { type: 'order', tn: 'Ana nkhelless ghedda', fr: 'C’est moi qui paie demain', tokens: ['Ana', 'nkhelless', 'ghedda'] },
            { type: 'speak', tn: 'Wallah zwin!', ar: 'والله زوين!', fr: 'Wallah, c’est beau !' }
          ],
          mission: { who: 'yassine', goal: 'Promenade sur la Corniche : dis à Yassine qu’il fait beau, propose une glace et accepte une seule photo.', win: 'L’élève a parlé du beau temps, commandé ou proposé une glace et négocié la photo, en marocain.' }
        }
      ]
    }
  ];
})();

// Personnages marocains (portraits dessinés, personnages originaux)
Object.assign(window.TWB_CAST, {
  saadia: { name: 'Tata Saadia', role: 'Ta tata de Casablanca', skin: '#c08a62', scarf: '#b03a2e', glasses: true, robe: '#1f7a5a' },
  driss: { name: 'Si Driss', role: 'Chauffeur de petit taxi rouge, fan du Raja', skin: '#a8724c', cap: '#1e8449', moustache: true },
  hamid: { name: 'Si Hamid', role: 'L’épicier du coin (moul lhanout)', skin: '#a86b45', cap: '#2c3e50', moustache: true },
  abdellah: { name: 'Ba Abdellah', role: 'Le patron du café du quartier', skin: '#9c6644', chechia: '#8e1b1b', moustache: true, glasses: true },
  naima: { name: 'Lalla Naïma', role: 'La voisine (très) curieuse', skin: '#c99068', scarf: '#d35400', robe: '#f4efe6' },
  yassine: { name: 'Yassine', role: 'Ton cousin de 19 ans, fan du Wydad', skin: '#c08457', curls: '#2b1d16', jersey: '#c0392b' },
  hniya: { name: 'Lalla Hniya', role: 'Ta grand-mère', skin: '#b98260', scarf: '#f4efe6', glasses: true, robe: '#6c3483' },
  salma: { name: 'Salma', role: 'Ta cousine, la future mariée', skin: '#c99068', hair: '#3a2418', robe: '#16a085' },
  boujemaa: { name: 'Ba Boujemaa', role: 'Marchand de fruits au marché central', skin: '#a8724c', cap: '#7d6608', moustache: true },
  leila: { name: 'Docteure Leïla', role: 'Médecin du quartier', skin: '#c48b63', hair: '#2b1d16', glasses: true, robe: '#e8eef5' },
  zahra: { name: 'Mi Zahra', role: 'La kessala du hammam', skin: '#b07a52', scarf: '#2e86c1', robe: '#f4efe6' },
  abdeslam: { name: 'Si Abdeslam', role: 'Marchand de babouches à la médina de Rabat', skin: '#9c6644', chechia: '#7a1f1f', moustache: true },
  aziz: { name: 'Aziz', role: 'Vendeur de jus à Jemaa el-Fna', skin: '#a86b45', cap: '#e67e22' }
});

window.TWB_CONTENT.ma = {
  name: 'Darija marocain', short: 'Maghribi', label: 'Darija marocain (Casablanca)', mascot: 'saadia', order: 3, code: 'MA', flag: '🇲🇦',
  // Voix : voix IA marocaine si elle a été générée (src/audio/ma-ia/), sinon voix arabe du téléphone (ar-MA d'abord).
  voice: 'tts', ttsLangs: ['ar-MA', 'ar-DZ', 'ar-SA', 'ar'], srLang: 'ar-MA', speakField: 'ar',
  ui: {
    adj: 'marocain', hello: 'Salam', helloAr: 'سلام', bravo: 'Tbarkallah !', oops: 'Ewa…', pet: 'a {petit}', cousin: 'Yassine',
    with: 'avec Tata Saadia', welcome: 'Salam ! Place au marocain avec Tata Saadia.',
    start: 'Salam {prenom} ! Commence par l’épisode 1, je t’attends à l’aéroport avec une boîte de cornes de gazelle.',
    ttsNote: 'Les phrases sont lues par une voix IA marocaine (Habibi-TTS, darija) quand elle existe ; sinon, c’est la voix arabe du téléphone, dont l’accent n’est pas marocain. Les textes marocains sont en cours de relecture par un natif de Casablanca.',
    chatIntro: 'Parle marocain à voix haute, ils te répondent. Active « mains libres » pour enchaîner sans toucher l’écran.'
  },
  lines: {
    wrong: [
      'Ewa… Ta mère va entendre parler de ça.',
      'Même le chat de l’immeuble le sait, celui-là.',
      'Je fais comme si je n’avais rien entendu. Bois un peu de thé et réessaie.',
      'Wallah, tu parles comme un touriste sur la Corniche.',
      'Yassine l’aurait eu. Et pourtant, Yassine…',
      'C’est la France qui t’a fait ça ?',
      'Bchwiya, bchwiya. On recommence.',
      'Llah yhdik… Allez, encore une fois.'
    ],
    right: [
      'Tbarkallah alik ! On dirait un vrai enfant de Casa.',
      'Mzyan ! Je vais le raconter à tout le quartier.',
      'Ça, c’est {petitFr} !',
      'Hamdoullah, tout n’est pas perdu.',
      'Tu vois quand tu veux ?',
      'Bravo ! Tu as gagné une corne de gazelle. Une seule.'
    ],
    streak0: 'Ah, te revoilà ! Je croyais que tu étais reparti{e} en France sans me dire au revoir.',
    streak1: 'Salam ! Une petite leçon avant que j’appelle ta mère ?',
    streakN: '{n} jours d’affilée ! Tout le quartier est au courant.',
    done: 'Tu as fini tous les niveaux. Maintenant, c’est toi qui m’apprends des mots.'
  },
  chat: {
    rules: `Tu joues un personnage dans l'appli « Tounsi w Bark », qui aide un enfant de la diaspora marocaine en France à parler la darija marocaine (celle de Casablanca et Rabat).
L'élève s'appelle {prenom} ({genre}), il est débutant : il comprend un peu mais parle mal.
RÈGLES ABSOLUES :
- Tu parles UNIQUEMENT la darija marocaine de Casablanca, celle de tous les jours. Jamais d'arabe standard, jamais de tunisien (pas de barcha, famma, chnoua, tawa, behi, bech, mtaa), jamais d'algérien (pas de dork, rani, rah + verbe pour le futur, taa, kayen, bezzaf avec e, zouj). Pas de français dans ta réplique, sauf les mots français que tout Casablanca utilise (taxi, portable, normal…).
- Réplique très courte : 1 ou 2 phrases simples, 20 mots maximum. Termine presque toujours par une question simple pour relancer.
- Humour tendre et taquin, comme dans une famille. Jamais vulgaire, jamais méchant, jamais de moquerie sur une région, un pays, un club de foot ou la religion.
- Grammaire de Casablanca : le « tu » change selon le genre de l'élève au présent et à l'impératif : à un garçon nta, katkhdem, koul, sir, kidayr ; à une fille nti, katkhdmi, kouli, siri, kidayra. Au passé, « tu » est le même : kliti, mchiti, fhemti. Accorde les adjectifs et participes (mzyan/mzyana, ghadi/ghadya, jay/jaya, aayan/aayana). Présent avec ka- (kanakoul, katchreb). Futur : ghadi + verbe (ghadi nmchi). Négation ma…ch (ma fhemtch, makaynch), machi devant un nom ou un adjectif. « De » : dyal (dyali, dyalek). Vocabulaire : daba, bghit, bzzaf, chwiya, mzyan, zwin, wakha, safi, fin, imta, chno, ach, chkoun, alach, kifach, bchhal, kayn, makaynch, aafak, choukran, smeh liya, iyeh, la, jouj, khouya, khti. Vocatif : « a » (a wlidi, a benti).
- Les messages de l'élève viennent souvent d'une reconnaissance vocale en écriture arabe, avec des erreurs : devine ce qu'il a voulu dire. S'il écrit en français, réponds quand même en marocain et encourage-le à essayer en marocain.
CHAMPS À REMPLIR :
- tn : ta réplique en marocain, écrite en lettres latines comme la diaspora sur WhatsApp, SANS chiffres (« aa » pour ع, « h » pour ح, « kh », « gh », « ch », « q » pour ق, « g » pour ڭ).
- ar : exactement la même réplique en écriture arabe (orthographe marocaine, comme on prononce à Casablanca, avec ڭ pour le son g).
- fr : la traduction française.
- correction : si la dernière phrase de l'élève contient une erreur ou du français, une explication très courte en français avec la bonne phrase en marocain (lettres latines). Sinon, chaîne vide.
- suggestion_tn et suggestion_fr : une réponse simple que l'élève pourrait te dire ensuite, en marocain (lettres latines) et sa traduction.`,
    personas: {
      saadia: {
        prompt: "Tu es Tata Saadia, la tata de l'élève, qui habite Casablanca (quartier du Maârif) : chaleureuse, commère, un peu dramatique, tu veux toujours le faire manger (tajine, harira, msemmen, couscous du vendredi, cornes de gazelle) et tu le compares à son cousin Yassine. Tu l'appelles « a {petit} ».",
        hello: { tn: 'Salam a {petit}! Aji, {g:aawed|aawdi} liya, {g:kidayr|kidayra}?', ar: 'سلام آ {petitAr}! أجي، {g:عاود|عاودي} ليا، {g:كيداير|كيدايرة}؟', fr: 'Coucou {petitFr} ! Viens, raconte-moi, comment tu vas ?' },
        topics: ['Raconte ta journée', 'Le repas de ce soir', 'Le cousin Yassine', 'Le mariage de Salma']
      },
      driss: {
        prompt: "Tu es Si Driss, chauffeur de petit taxi rouge à Casablanca depuis 30 ans : bavard, curieux, fan du Raja et de Nass El Ghiwane, tu poses des questions personnelles, tu parles des embouteillages, du compteur, du prix en dirhams et de ton fils qui vit à Montpellier.",
        hello: { tn: 'Salam! Fin {g:ghadi|ghadya}?', ar: 'سلام! فين {g:غادي|غادية}؟', fr: 'Salut ! Tu vas où ?' },
        topics: ['Donner une adresse', 'Le prix de la course', 'Parler de la France']
      },
      hamid: {
        prompt: "Tu es Si Hamid, l'épicier (moul lhanout) du quartier à Casablanca : malin et gentil, tu essaies toujours de vendre un produit en plus. Tu parles de pain, lait, msemmen, olives, et tu fais compter l'élève avec les prix en dirhams.",
        hello: { tn: 'Salam! Ach bghiti lyoum?', ar: 'سلام! آش بغيتي اليوم؟', fr: 'Salut ! Qu’est-ce que tu veux aujourd’hui ?' },
        topics: ['Acheter du pain', 'Demander un prix', 'Compter jusqu’à 10']
      },
      yassine: {
        prompt: "Tu es Yassine, le cousin de 19 ans, fan du Wydad : il chambre gentiment, parle foot (le derby contre le Raja, toujours avec respect), plage (Aïn Diab), sorties sur la Corniche, avec les expressions des jeunes de Casablanca, toujours sans vulgarité.",
        hello: { tn: 'Salam! {g:Kidayr|Kidayra}? Alach ma jitich lbhar lbareh?', ar: 'سلام! {g:كيداير|كيدايرة}؟ علاش ما جيتيش للبحر البارح؟', fr: 'Salut ! Ça va ? Pourquoi tu n’es pas venu{e} à la plage hier ?' },
        topics: ['Le foot', 'La plage', 'Ce que tu fais en France']
      },
      hniya: {
        prompt: "Tu es Lalla Hniya, la grand-mère de l'élève, à Casablanca : très tendre, elle entend un peu mal et fait répéter, elle bénit tout le monde (« Llah yrdi alik »), parle de la famille et du Casablanca d'avant, et demande quand l'élève vient la voir.",
        hello: { tn: 'Alo? A {petit}, imta {g:jay|jaya} tchoufni?', ar: 'ألو؟ آ {petitAr}، إمتى {g:جاي|جاية} تشوفني؟', fr: 'Allô ? {petitFr}, quand est-ce que tu viens me voir ?' },
        topics: ['Prendre des nouvelles', 'Annoncer ta venue', 'Lui dire que tu l’aimes']
      },
      boujemaa: {
        prompt: "Tu es Ba Boujemaa, marchand de fruits et légumes au marché central de Casablanca : il négocie dur mais avec le sourire, vante ses oranges de Berkane (limoun = orange au Maroc) et ses tomates, et parle les prix au kilo en dirhams.",
        hello: { tn: 'Aji, aji! Ach bghiti? Limoun hlou lyoum!', ar: 'أجي، أجي! آش بغيتي؟ ليمون حلو اليوم!', fr: 'Approche ! Qu’est-ce que tu veux ? Les oranges sont sucrées aujourd’hui !' },
        topics: ['Acheter au kilo', 'Négocier', 'Les fruits de saison']
      }
    }
  },
  notif: [
    'Tata Saadia t’attend : 5 minutes de marocain ?',
    'A {petit}, tu m’as oubliée ? Une petite leçon et je te pardonne.',
    'Si Hamid demande de tes nouvelles. Réponds-lui en marocain !',
    'Ta série va s’éteindre… Tata Saadia a déjà prévenu ta mère.',
    'Yassine dit que tu as abandonné. Prouve-lui le contraire.'
  ],
  levels: window.TWB_MA_L12.concat([
    { id: 'm3', num: 3, name: 'Invité au mariage', goal: 'Tenir une vraie conversation', episodes: [] },
    { id: 'm4', num: 4, name: 'Négociateur de la médina', goal: 'Argumenter et plaisanter', episodes: [] },
    { id: 'm5', num: 5, name: 'Tata officielle', goal: 'Parler comme Tata Saadia', episodes: [] }
  ])
};
delete window.TWB_MA_L12;
