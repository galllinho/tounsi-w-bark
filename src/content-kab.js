// Paquet KABYLE (taqbaylit) — BROUILLON
// Écrit en kabyle latin standard (ɣ, ɛ, ḥ, ḍ, ṭ, ẓ, č, ǧ).
// À FAIRE : relecture complète par Maman, puis enregistrement des phrases dans le « Studio famille ».
//
// Pas de champ « ar » : le téléphone n'a pas de voix kabyle, la voix viendra des enregistrements.
// {mmi} = « a mmi » (mon fils) ou « a yelli » (ma fille) ; {k} = k (à un garçon) ou m (à une fille).

window.TWB_CONTENT.kab = {
  name: 'Kabyle', short: 'Taqbaylit', label: 'Kabyle (taqbaylit)', mascot: 'nanna', draft: true,
  voice: 'rec', srLang: null, speakField: 'tn',
  levels: [
    {
      id: 'k1', num: 1, name: 'Le petit nouveau du village',
      goal: 'Survivre à ta première journée en Kabylie',
      episodes: [
        // ---------------------------------------------------------------- Épisode 1
        {
          id: 'k1e1', title: 'L’arrivée chez Nanna',
          pitch: 'Nanna t’attend devant la maison depuis l’aube. Elle a déjà prévenu tout le village.',
          cast: ['nanna'],
          scene: [
            { who: 'nanna', tn: 'Azul {mmi}! Ansuf yis-{k}!', fr: 'Bonjour mon enfant ! Bienvenue !' },
            { who: 'me', tn: 'Azul a Nanna! Amek tellid?', fr: 'Bonjour Nanna ! Comment vas-tu ?' },
            { who: 'nanna', tn: 'Labas, ḥamdullah. Acu i d isem-i{k}? Ttuɣ-t!', fr: 'Ça va, Dieu merci. C’est quoi ton prénom déjà ? Je l’ai oublié !', note: 'Elle ne l’a pas oublié. Elle teste ton kabyle.' },
            { who: 'me', tn: 'Isem-iw {prenom}, a Nanna!', fr: 'Je m’appelle {prenom}, Nanna !' },
            { who: 'nanna', tn: 'Ih, ih. Ulac tafransist dagi, nettmeslay taqbaylit!', fr: 'Oui, oui. Pas de français ici, on parle kabyle !' },
            { who: 'me', tn: 'Tanemmirt a Nanna.', fr: 'Merci Nanna.' }
          ],
          words: [
            { id: 'k_azul', tn: 'Azul', fr: 'Bonjour, salut', ex: 'Azul a Nanna!' },
            { id: 'k_amek', tn: 'Amek tellid?', fr: 'Comment vas-tu ?', ex: 'À dire à tout le village, une personne à la fois.' },
            { id: 'k_labas', tn: 'Labas', fr: 'Ça va (bien)', ex: 'Labas, ḥamdullah.' },
            { id: 'k_ansuf', tn: 'Ansuf yis-{k}', fr: 'Bienvenue', ex: 'Ce que Nanna dit en t’embrassant cinq fois.' },
            { id: 'k_isemik', tn: 'Acu i d isem-i{k}?', fr: 'Comment tu t’appelles ?', ex: 'Acu = quoi.' },
            { id: 'k_isemiw', tn: 'Isem-iw…', fr: 'Je m’appelle…', ex: 'Isem-iw {prenom}.' },
            { id: 'k_ih', tn: 'Ih / Ala', fr: 'Oui / Non', ex: 'Ih, ih!' },
            { id: 'k_tanemmirt', tn: 'Tanemmirt', fr: 'Merci', ex: 'Tanemmirt a Nanna.' },
            { id: 'k_dagi', tn: 'Dagi', fr: 'Ici', ex: 'Nettmeslay taqbaylit dagi.' }
          ],
          exercises: [
            { type: 'meaning', word: 'k_azul' },
            { type: 'reverse', word: 'k_amek' },
            { type: 'reply', who: 'nanna', line: { tn: 'Acu i d isem-i{k}?', fr: 'Comment tu t’appelles ?' },
              options: [
                { tn: 'Isem-iw {prenom}.', fr: 'Je m’appelle {prenom}.', ok: true },
                { tn: 'Tanemmirt.', fr: 'Merci.', why: 'Nanna te demande ton prénom, pas un remerciement. Même si elle le mérite.' },
                { tn: 'Ala.', fr: 'Non.', why: 'Tu viens de refuser de donner ton prénom à ta grand-mère. Elle est vexée jusqu’au dîner.' }
              ] },
            { type: 'listen', word: 'k_tanemmirt' },
            { type: 'order', tn: 'Azul a Nanna amek tellid', fr: 'Bonjour Nanna, comment vas-tu ?', tokens: ['Azul', 'a', 'Nanna', 'amek', 'tellid'] },
            { type: 'speak', tn: 'Tanemmirt a Nanna', fr: 'Merci Nanna' },
            { type: 'meaning', word: 'k_dagi' }
          ]
        },
        // ---------------------------------------------------------------- Épisode 2
        {
          id: 'k1e2', title: 'Au marché',
          pitch: 'Dda Mokrane vend du pain, du lait, et des avis sur tout. Surtout sur toi.',
          cast: ['mokrane'],
          scene: [
            { who: 'mokrane', tn: 'Azul! Acu tebɣiḍ?', fr: 'Bonjour ! Qu’est-ce que tu veux ?' },
            { who: 'me', tn: 'Efk-iyi sin iɣrumen, ttxil-k.', fr: 'Donne-moi deux galettes, s’il te plaît.' },
            { who: 'mokrane', tn: 'Tebɣiḍ kra nniḍen?', fr: 'Tu veux autre chose ?' },
            { who: 'me', tn: 'Yella wayefki?', fr: 'Il y a du lait ?' },
            { who: 'mokrane', tn: 'Yella. Acḥal?', fr: 'Il y en a. Combien ?' },
            { who: 'me', tn: 'Kraḍ… ala, kkuẓ!', fr: 'Trois… non, quatre !' },
            { who: 'mokrane', tn: 'Yelha! Yeɣla cwiṭ, maca d ayefki n tfunast-iw.', fr: 'Parfait ! C’est un peu cher, mais c’est le lait de ma vache.', note: 'Sa vache a un prénom. Tu ne veux pas savoir le prix du fromage.' }
          ],
          words: [
            { id: 'k_acu', tn: 'Acu tebɣiḍ?', fr: 'Qu’est-ce que tu veux ?', ex: 'Acu = quoi.' },
            { id: 'k_efk', tn: 'Efk-iyi', fr: 'Donne-moi', ex: 'Efk-iyi aɣrum.' },
            { id: 'k_ttxil', tn: 'Ttxil-k / ttxil-m', fr: 'S’il te plaît (à un homme / à une femme)', ex: 'Ici, tu parles à Dda Mokrane : ttxil-k.' },
            { id: 'k_agrum', tn: 'Aɣrum', fr: 'Pain, galette', ex: 'Sin iɣrumen = deux galettes.' },
            { id: 'k_ayefki', tn: 'Ayefki', fr: 'Lait', ex: 'Yella wayefki? = Il y a du lait ?' },
            { id: 'k_yella', tn: 'Yella / Ulac', fr: 'Il y a / Il n’y a pas', ex: 'Ulac! = Il n’y en a pas !' },
            { id: 'k_achal', tn: 'Acḥal?', fr: 'Combien ?', ex: 'Acḥal aɣrum?' },
            { id: 'k_yiwen', tn: 'Yiwen', fr: 'Un', ex: 'Yiwen uɣrum = une galette.' },
            { id: 'k_sin', tn: 'Sin', fr: 'Deux', ex: 'Sin iɣrumen.' },
            { id: 'k_krad', tn: 'Kraḍ', fr: 'Trois', ex: 'Kraḍ… ala, kkuẓ!' },
            { id: 'k_kkuz', tn: 'Kkuẓ', fr: 'Quatre', ex: 'Kkuẓ.' },
            { id: 'k_semmus', tn: 'Semmus', fr: 'Cinq', ex: 'Semmus.' },
            { id: 'k_yelha', tn: 'Yelha', fr: 'C’est bien, parfait', ex: 'Yelha! = Parfait !' },
            { id: 'k_yegla', tn: 'Yeɣla', fr: 'C’est cher', ex: 'Yeɣla aṭas! = C’est très cher !' }
          ],
          exercises: [
            { type: 'meaning', word: 'k_ayefki' },
            { type: 'reverse', word: 'k_sin' },
            { type: 'order', tn: 'Efk-iyi sin iɣrumen ttxil-k', fr: 'Donne-moi deux galettes, s’il te plaît', tokens: ['Efk-iyi', 'sin', 'iɣrumen', 'ttxil-k'] },
            { type: 'listen', word: 'k_achal' },
            { type: 'reply', who: 'mokrane', line: { tn: 'Tebɣiḍ kra nniḍen?', fr: 'Tu veux autre chose ?' },
              options: [
                { tn: 'Yella wayefki?', fr: 'Il y a du lait ?', ok: true },
                { tn: 'Isem-iw Mokrane.', fr: 'Je m’appelle Mokrane.', why: 'C’est LUI qui s’appelle Mokrane. Il te propose autre chose à acheter.' },
                { tn: 'Ansuf yis-k!', fr: 'Bienvenue !', why: 'Tu souhaites la bienvenue au vendeur dans son propre magasin. Il ne sait pas quoi répondre.' }
              ] },
            { type: 'speak', tn: 'Acḥal?', fr: 'Combien ?' },
            { type: 'meaning', word: 'k_yegla' }
          ]
        },
        // ---------------------------------------------------------------- Épisode 3
        {
          id: 'k1e3', title: 'Perdu dans le village',
          pitch: 'Tu cherches la maison de Nanna. Ton cousin Massi t’aide. Enfin, il essaie de te faire marcher.',
          cast: ['massi'],
          scene: [
            { who: 'massi', tn: 'Azul! Anda tedduḍ?', fr: 'Salut ! Tu vas où ?' },
            { who: 'me', tn: 'Ad ruḥeɣ ɣer uxxam n Nanna.', fr: 'Je vais à la maison de Nanna.' },
            { who: 'massi', tn: 'Axxam n Nanna? Yebɛed aṭas!', fr: 'La maison de Nanna ? C’est très loin !' },
            { who: 'me', tn: 'Ur fhimeɣ ara. Mmeslay s ttawil.', fr: 'Je n’ai pas compris. Parle doucement.' },
            { who: 'massi', tn: 'Ye… bɛed… a… ṭas!', fr: 'C’est… très… loin !', note: 'Il l’a répété lentement, en articulant trop. Il s’amuse beaucoup.' },
            { who: 'me', tn: 'Ih, fhimeɣ. Tanemmirt.', fr: 'Oui, j’ai compris. Merci.' },
            { who: 'massi', tn: 'D tiḍṣa kan! Axxam n Nanna d wagi.', fr: 'C’était pour rire ! La maison de Nanna, c’est celle-ci.' }
          ],
          words: [
            { id: 'k_anda', tn: 'Anda?', fr: 'Où ?', ex: 'Anda tedduḍ? = Tu vas où ?' },
            { id: 'k_ruh', tn: 'Ad ruḥeɣ ɣer…', fr: 'Je vais aller à…', ex: 'Ad ruḥeɣ ɣer uxxam.' },
            { id: 'k_axxam', tn: 'Axxam', fr: 'Maison', ex: 'Axxam n Nanna = la maison de Nanna.' },
            { id: 'k_yebed', tn: 'Yebɛed', fr: 'C’est loin', ex: 'Yebɛed aṭas = c’est très loin.' },
            { id: 'k_atas', tn: 'Aṭas', fr: 'Beaucoup, très', ex: 'Tanemmirt aṭas = merci beaucoup.' },
            { id: 'k_cwit', tn: 'Cwiṭ', fr: 'Un peu', ex: 'Yeɣla cwiṭ.' },
            { id: 'k_fhim', tn: 'Ur fhimeɣ ara', fr: 'Je n’ai pas compris', ex: 'Ton meilleur ami au village.' },
            { id: 'k_ttawil', tn: 'Mmeslay s ttawil', fr: 'Parle doucement', ex: 'Ton deuxième meilleur ami.' },
            { id: 'k_tidsa', tn: 'D tiḍṣa kan', fr: 'C’est pour rire', ex: 'Ce que dit Massi après chaque mauvaise blague.' },
            { id: 'k_wagi', tn: 'Wagi', fr: 'Celui-ci', ex: 'Axxam d wagi.' }
          ],
          exercises: [
            { type: 'meaning', word: 'k_anda' },
            { type: 'reply', who: 'massi', line: { tn: 'Anda tedduḍ?', fr: 'Tu vas où ?' },
              options: [
                { tn: 'Ad ruḥeɣ ɣer uxxam n Nanna.', fr: 'Je vais chez Nanna.', ok: true },
                { tn: 'Efk-iyi sin iɣrumen.', fr: 'Donne-moi deux galettes.', why: 'Massi n’a pas de galettes. Il voulait juste savoir où tu vas.' },
                { tn: 'Yeɣla aṭas!', fr: 'C’est très cher !', why: 'Il ne t’a rien vendu. Pas encore.' }
              ] },
            { type: 'reverse', word: 'k_fhim' },
            { type: 'listen', word: 'k_axxam' },
            { type: 'order', tn: 'Ur fhimeɣ ara mmeslay s ttawil', fr: 'Je n’ai pas compris, parle doucement', tokens: ['Ur', 'fhimeɣ', 'ara', 'mmeslay', 's', 'ttawil'] },
            { type: 'speak', tn: 'Mmeslay s ttawil', fr: 'Parle doucement' },
            { type: 'meaning', word: 'k_tidsa' }
          ]
        }
      ],
      boss: {
        id: 'k1boss', title: "L'épreuve de Nanna",
        pitch: '10 questions sous le regard de Nanna. Il en faut 7 pour qu’elle te dise « ayuz ».',
        count: 10, pass: 7
      }
    },
    { id: 'k2', num: 2, name: 'Le mariage au village', goal: 'Survivre aux présentations de toute la famille', episodes: [] }
  ],
  lines: {
    wrong: [
      'A yemma… Même la chèvre du voisin le sait, celui-là.',
      'Tu parles kabyle comme un Parisien en vacances.',
      'Je n’ai rien entendu. Enfin, j’ai préféré ne rien entendre.',
      'Respire, mange une figue, et réessaie.',
      'Ton petit cousin de 5 ans l’aurait eu.',
      'Ce n’est pas grave. Ce n’est pas bon non plus.'
    ],
    right: [
      'Ayuz ! On dirait un vrai enfant du village.',
      'Yelha ! Je vais le dire à toute la fontaine.',
      'Tanemmirt, tu me rends fière.',
      'Ça, c’est le sang de la famille !',
      'Tu vois quand tu veux ?'
    ],
    streak0: 'Te revoilà ! Le village croyait que tu étais reparti en France.',
    streak1: 'Azul ! Une petite leçon avant que je prépare le café ?',
    streakN: '{n} jours d’affilée ! Toute la famille est au courant.',
    done: 'Tu as fini le niveau 1. La suite arrive quand Maman aura tout relu.'
  },
  chat: {
    rules: `Tu joues un personnage dans l'appli « Tounsi w Bark », qui aide un enfant de la diaspora kabyle en France à parler kabyle (taqbaylit).
L'élève s'appelle {prenom} ({genre}), il est grand débutant.
RÈGLES ABSOLUES :
- Tu parles UNIQUEMENT en kabyle (taqbaylit) de tous les jours, écrit en alphabet latin kabyle standard (ɣ, ɛ, ḥ, ḍ, ṭ, ẓ, č, ǧ). Jamais d'arabe, jamais de tifinagh, pas de français dans ta réplique.
- Réplique très courte : 1 ou 2 phrases simples, 15 mots maximum, avec des mots très courants. Termine par une question simple.
- Humour tendre, familial. Jamais vulgaire, jamais méchant, jamais de moquerie sur une région ou la religion.
- Si l'élève écrit en français, réponds en kabyle et encourage-le à essayer en kabyle.
CHAMPS À REMPLIR :
- tn : ta réplique en kabyle (alphabet latin).
- ar : recopie exactement le champ tn.
- fr : la traduction française.
- correction : si la dernière phrase de l'élève contient une erreur ou du français, une explication très courte en français avec la bonne phrase en kabyle. Sinon, chaîne vide.
- suggestion_tn et suggestion_fr : une réponse simple que l'élève pourrait donner ensuite, en kabyle, et sa traduction.`,
    personas: {
      nanna: {
        prompt: "Tu es Nanna, la grand-mère de l'élève, dans son village de Kabylie : tendre, fière, un peu commère, elle veut le faire manger (couscous, galette, figues) et lui parle de la famille et du village. Elle l'appelle « {mmi} ».",
        hello: { tn: 'Azul {mmi}! Amek tellid ass-a?', fr: 'Bonjour mon enfant ! Comment vas-tu aujourd’hui ?' },
        topics: []
      },
      massi: {
        prompt: "Tu es Massi, le cousin de l'élève, 20 ans, qui vit au village : blagueur, il parle de foot (JSK), de la place du village et des fêtes, et taquine gentiment l'élève qui vient de France.",
        hello: { tn: 'Azul! Amek tellid? Tebɣiḍ ad nruḥ ɣer tala?', fr: 'Salut ! Ça va ? Tu veux qu’on aille à la fontaine ?' },
        topics: []
      }
    }
  },
  notif: [
    'Nanna t’attend : 5 minutes de kabyle ?',
    'Azul ! Nanna demande pourquoi tu ne lui parles plus.',
    'Dda Mokrane a gardé du lait pour toi. Viens le demander en kabyle !',
    'Ta série va s’éteindre… Nanna l’a déjà dit à tout le village.'
  ]
};
