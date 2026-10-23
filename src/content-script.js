// Tounsi w Bark — parcours « Lire et écrire » : l'alphabet arabe tel qu'on l'utilise pour écrire le tunisien.
// Les lettres et leurs sons suivent l'alphabet arabe standard, avec les particularités du tunisien
// (ڨ pour le son « g », ض et ظ prononcés pareil, chiffres de l'écriture « SMS » : 3, 5, 7, 8, 9).
// Sources : docs/reference-tounsi.md, section « Lire et écrire ».

window.TWB_SCRIPT = {
  // join: false = la lettre ne s'attache jamais à la lettre suivante
  letters: {
    alif:  { ch: 'ا', name: 'Alif', lat: 'a', sound: 'A long (comme dans « papa »). Sert aussi de support en début de mot.', join: false, ex: ['باهي', 'behi', 'bien, d’accord'] },
    ba:    { ch: 'ب', name: 'Ba', lat: 'b', sound: 'B, comme en français.', ex: ['باب', 'bab', 'porte'] },
    ta:    { ch: 'ت', name: 'Ta', lat: 't', sound: 'T, comme en français.', ex: ['توّا', 'tawa', 'maintenant'] },
    tha:   { ch: 'ث', name: 'Tha', lat: 'th', sound: 'TH de l’anglais « think ».', ex: ['ثلاثة', 'thletha', 'trois'] },
    noun:  { ch: 'ن', name: 'Noun', lat: 'n', sound: 'N, comme en français.', ex: ['نهار', 'nhar', 'jour'] },
    ya:    { ch: 'ي', name: 'Ya', lat: 'y / i', sound: 'Y, ou I long (comme dans « lit »).', ex: ['يمين', 'ymin', 'droite'] },
    waw:   { ch: 'و', name: 'Waw', lat: 'w / ou', sound: 'W, ou OU long (comme dans « loup »).', join: false, ex: ['وين', 'win', 'où'] },
    jim:   { ch: 'ج', name: 'Jim', lat: 'j', sound: 'J, comme dans « jour ».', ex: ['جار', 'jar', 'voisin'] },
    hha:   { ch: 'ح', name: 'Ha (fort)', lat: 'h · 7', sound: 'H soufflé du fond de la gorge, comme quand on souffle sur des lunettes. En SMS : 7.', ex: ['حاجة', 'haja', 'chose'] },
    kha:   { ch: 'خ', name: 'Kha', lat: 'kh · 5', sound: 'KH raclé, comme la jota espagnole. En SMS : 5.', ex: ['خبزة', 'khobza', 'un pain'] },
    dal:   { ch: 'د', name: 'Dal', lat: 'd', sound: 'D, comme en français.', join: false, ex: ['دار', 'dar', 'maison'] },
    dhal:  { ch: 'ذ', name: 'Dhal', lat: 'dh', sound: 'TH de l’anglais « this ».', join: false, ex: ['هذا', 'hedha', 'celui-ci'] },
    ra:    { ch: 'ر', name: 'Ra', lat: 'r', sound: 'R roulé, comme en espagnol.', join: false, ex: ['راس', 'ras', 'tête'] },
    zay:   { ch: 'ز', name: 'Zay', lat: 'z', sound: 'Z, comme en français.', join: false, ex: ['زوز', 'zouz', 'deux'] },
    sin:   { ch: 'س', name: 'Sin', lat: 's', sound: 'S, comme en français.', ex: ['سوق', 'souk', 'marché'] },
    chin:  { ch: 'ش', name: 'Chin', lat: 'ch', sound: 'CH, comme dans « chat ».', ex: ['شمس', 'chams', 'soleil'] },
    sad:   { ch: 'ص', name: 'Sad', lat: 's (lourd)', sound: 'S « lourd », prononcé la bouche plus ouverte, au fond.', ex: ['صاحبي', 'sahbi', 'mon ami'] },
    dad:   { ch: 'ض', name: 'Dad', lat: 'dh (lourd)', sound: 'En tunisien, se prononce comme ظ : un DH « lourd ».', ex: ['أبيض', 'abyedh', 'blanc'] },
    tta:   { ch: 'ط', name: 'Ta (lourd)', lat: 't (lourd)', sound: 'T « lourd », prononcé au fond de la bouche.', ex: ['طاولة', 'tawla', 'table'] },
    dha:   { ch: 'ظ', name: 'Dha', lat: 'dh (lourd)', sound: 'DH « lourd ». En tunisien, même son que ض.', ex: ['ظلّ', 'dhell', 'ombre'] },
    ayn:   { ch: 'ع', name: 'Ayn', lat: 'aa · 3', sound: 'Un A serré au fond de la gorge, sans équivalent en français. En SMS : 3.', ex: ['عيشك', 'aychek', 'merci'] },
    ghayn: { ch: 'غ', name: 'Ghayn', lat: 'gh · 8', sound: 'R grasseyé, comme le R parisien. En SMS : 8.', ex: ['غالي', 'ghali', 'cher'] },
    fa:    { ch: 'ف', name: 'Fa', lat: 'f', sound: 'F, comme en français.', ex: ['فمّا', 'famma', 'il y a'] },
    qaf:   { ch: 'ق', name: 'Qaf', lat: 'k · 9', sound: 'K profond, au fond de la gorge. En SMS : 9.', ex: ['قهوة', 'kahwa', 'café'] },
    gaf:   { ch: 'ڨ', name: 'Gaf', lat: 'g', sound: 'G de « gâteau ». Lettre typique du Maghreb : un ق avec trois points.', ex: ['مريڨل', 'mrigel', 'nickel'] },
    kaf:   { ch: 'ك', name: 'Kaf', lat: 'k', sound: 'K, comme en français.', ex: ['كسكسي', 'kosksi', 'couscous'] },
    lam:   { ch: 'ل', name: 'Lam', lat: 'l', sound: 'L, comme en français.', ex: ['ليل', 'lil', 'nuit'] },
    mim:   { ch: 'م', name: 'Mim', lat: 'm', sound: 'M, comme en français.', ex: ['ماء', 'ma', 'eau'] },
    ha:    { ch: 'ه', name: 'Ha (léger)', lat: 'h', sound: 'H léger, expiré, comme dans l’anglais « hello ».', ex: ['هوني', 'houni', 'ici'] },
    hamza: { ch: 'ء', name: 'Hamza', lat: '’ · 2', sound: 'Un petit arrêt de la voix, comme au milieu de « oh-oh ». Souvent posée sur un alif : أ (ena, moi = أنا). En SMS : 2.', join: false, ex: ['ماء', 'ma', 'eau'] },
    tam:   { ch: 'ة', name: 'Ta marbouta', lat: 'a (fin de mot)', sound: 'Se lit A à la fin d’un mot. Marque souvent le féminin. N’existe qu’en fin de mot.', join: false, finalOnly: true, ex: ['قهوة', 'kahwa', 'café'] }
  },
  // Mots tunisiens supplémentaires pour lire tôt (les autres viennent du parcours « Parler »)
  extraWords: [
    ['باب', 'bab', 'porte'], ['بنت', 'bent', 'fille'], ['بيت', 'bit', 'chambre'], ['نبات', 'nbet', 'plantes'],
    ['بابا', 'baba', 'papa'], ['كرموس', 'karmous', 'figues'], ['زيت', 'zit', 'huile'], ['بحر', 'bhar', 'mer'],
    ['دار', 'dar', 'maison'], ['حوت', 'hout', 'poisson'], ['ورد', 'ward', 'roses'], ['خبز', 'khobz', 'pain'],
    ['راس', 'ras', 'tête'], ['سوق', 'souk', 'marché'], ['شمس', 'chams', 'soleil'], ['صيف', 'sif', 'été'],
    ['ظلّ', 'dhell', 'ombre'], ['عرس', 'aars', 'mariage'], ['غدوة', 'ghodwa', 'demain'], ['فول', 'foul', 'fèves'],
    ['قهوة', 'kahwa', 'café'], ['كرش', 'kerch', 'ventre'], ['ليل', 'lil', 'nuit'], ['ماء', 'ma', 'eau'],
    ['هوني', 'houni', 'ici'], ['طاولة', 'tawla', 'table'], ['ڨاطو', 'gato', 'gâteau'], ['ورقة', 'warka', 'feuille']
  ],
  units: [
    { id: 's1', title: 'Les premières lettres', letters: ['alif', 'ba', 'ta', 'tha'],
      cards: [
        { title: 'On lit de droite à gauche', text: 'L’arabe se lit et s’écrit de droite à gauche. Le tunisien s’écrit avec cet alphabet (ou en lettres latines sur WhatsApp).' },
        { title: 'Une forme, plusieurs lettres', text: 'ب ت ث ont la même forme : seuls les points changent. Un point dessous = b. Deux points dessus = t. Trois points dessus = th.' },
        { title: 'Le Alif', text: 'ا est un simple trait vertical. Il donne le son A long, comme dans باب (bab, la porte).' }
      ] },
    { id: 's2', title: 'N, Y et OU', letters: ['noun', 'ya', 'waw'],
      cards: [
        { title: 'Encore des points', text: 'ن (n) a un point dessus. ي (y / i) a deux points dessous.' },
        { title: 'Les voyelles longues', text: 'Trois lettres servent aussi de voyelles longues : ا = a, و = ou, ي = i. Exemple : بيت (bit, la chambre), حوت (hout, le poisson).' }
      ] },
    { id: 's3', title: 'J, H et KH', letters: ['jim', 'hha', 'kha'],
      cards: [
        { title: 'La même forme, encore', text: 'ج ح خ partagent une forme. Un point dessous = j. Pas de point = h fort (7). Un point dessus = kh (5).' },
        { title: 'Les chiffres de WhatsApp', text: 'Quand tu écris « 7 » ou « 5 » en tunisien sur ton téléphone, tu remplaces ces lettres : 7 = ح, 5 = خ.' }
      ] },
    { id: 's4', title: 'Les lettres qui ne s’attachent pas', letters: ['dal', 'dhal', 'ra', 'zay'],
      cards: [
        { title: 'Des lettres solitaires', text: 'Presque toutes les lettres s’attachent à celle qui suit. Sauf six : ا د ذ ر ز و. Après elles, on « lève le stylo ». Exemple : دار (dar, la maison).' },
        { title: 'Deux paires', text: 'د (d) et ذ (dh) : un point en plus. ر (r) et ز (z) : pareil.' }
      ] },
    { id: 's5', title: 'Les S et le CH', letters: ['sin', 'chin', 'sad', 'dad'],
      cards: [
        { title: 'Trois petites dents', text: 'س (s) a trois petites dents. Avec trois points dessus, ça devient ش (ch), comme dans شمس (chams, le soleil).' },
        { title: 'Les lettres « lourdes »', text: 'ص (s lourd) et ض (dh lourd) se prononcent avec la langue plus en arrière, la bouche plus ouverte.' }
      ] },
    { id: 's6', title: 'Les lettres de la gorge', letters: ['tta', 'dha', 'ayn', 'ghayn'],
      cards: [
        { title: 'Ta et Dha lourds', text: 'ط (t lourd) et ظ (dh lourd) ont une boucle et une barre. En tunisien, ظ et ض se prononcent pareil.' },
        { title: 'Le Ayn, la lettre la plus tunisienne', text: 'ع (le 3 de WhatsApp) n’existe pas en français : c’est un A serré au fond de la gorge, comme dans عيشك (aychek, merci). Avec un point dessus, غ (8) se dit comme le R parisien.' }
      ] },
    { id: 's7', title: 'F, Q, G et K', letters: ['fa', 'qaf', 'gaf', 'kaf'],
      cards: [
        { title: 'Fa et Qaf', text: 'ف (f) a un point dessus. ق (k profond, le 9 de WhatsApp) en a deux, comme dans قهوة (kahwa, le café).' },
        { title: 'La lettre du Maghreb', text: 'ڨ (g) est un ق avec trois points. On l’utilise en Tunisie pour le son G : مريڨل (mrigel, nickel).' },
        { title: 'Le Kaf', text: 'ك (k), comme dans كسكسي (kosksi, le couscous).' }
      ] },
    { id: 's8', title: 'L, M, H, le A final et la hamza', letters: ['lam', 'mim', 'ha', 'tam', 'hamza'],
      cards: [
        { title: 'Lam et Mim', text: 'ل (l) et م (m). Attention : ل suivi de ا s’écrit لا (non !).' },
        { title: 'L’article « el »', text: 'Le « le / la » du tunisien s’écrit ال au début du mot : الدار (eddar, la maison), السوق (essouk, le marché).' },
        { title: 'Le A de la fin', text: 'ه est un H léger. Avec deux points, ة se lit A en fin de mot : قهوة (kahwa), خبزة (khobza).' },
        { title: 'La hamza', text: 'ء est un petit arrêt de la voix. On la voit surtout posée sur un alif : أنا (ena, moi). En SMS, elle s’écrit 2.' }
      ] },
    { id: 's9', title: 'Les petites voyelles', letters: [], review: true,
      cards: [
        { title: 'Des voyelles cachées', text: 'Les sons a, i, ou courts ne s’écrivent souvent pas. On les devine. Dans les livres pour enfants, on les note avec de petits signes.' },
        { title: 'Les trois signes', text: 'بَ = ba (petit trait dessus). بِ = bi (petit trait dessous). بُ = bou (petite boucle dessus).' },
        { title: 'La chadda', text: 'Le petit « w » ّ double la lettre : فمّا = famma (deux m), توّا = tawa (deux w).' }
      ],
      vowels: [['بَ', 'ba'], ['بِ', 'bi'], ['بُ', 'bou'], ['تَ', 'ta'], ['تِ', 'ti'], ['تُ', 'tou'], ['سَ', 'sa'], ['سِ', 'si'], ['سُ', 'sou'], ['مَ', 'ma'], ['مِ', 'mi'], ['مُ', 'mou']] },
    { id: 's10', title: 'Lire du vrai tunisien', letters: [], review: true, phrases: true,
      cards: [
        { title: 'L’écriture SMS', text: 'Sur WhatsApp, beaucoup de Tunisiens écrivent en lettres latines avec des chiffres : 3 = ع, 5 = خ, 7 = ح, 8 = غ, 9 = ق. Exemple : « 3aychek » = عيشك.' },
        { title: 'À toi de lire', text: 'Tu connais maintenant toutes les lettres. Place aux phrases du parcours, avec Khalti, Skander et Am Hédi.' }
      ] }
  ]
};
