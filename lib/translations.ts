export type Language = 'pt' | 'en' | 'fr' | 'de' | 'zh';

export interface TranslationSchema {
  nav: {
    home: string;
    product: string;
    story: string;
    waitlist: string;
    contact: string;
  };
  hero: {
    subtitle: string;
  };
  archiveDrop: {
    firstDrop: string;
    title: string;
    desc: string;
    culturalArchive: string;
    storyTitle: string;
    storyDesc: string;
    bullets: string[];
    drop: string;
    format: string;
    status: string;
    statusValue: string;
    exploreStory: string;
    waitlistCardTitle: string;
    waitlistCardDesc: string;
    btnWaitlist: string;
    btnSaveDrop: string;
    limitedTitle: string;
    limitedDesc: string;
    portugalTitle: string;
    portugalDesc: string;
    originLabel: string;
    originValue: string;
    editionLabel: string;
    editionValue: string;
    accessLabel: string;
    accessValue: string;
  };
  lookbook: {
    manifestoLine1: string;
    manifestoLine2: string;
    manifestoDesc: string;
    chapter1: string;
    chapter1Title: string;
    chapter1Desc: string;
    chapter2: string;
    chapter2Title: string;
    chapter2Desc: string;
    waitlistHeader: string;
    waitlistTitle: string;
    waitlistDesc: string;
    labelName: string;
    placeholderName: string;
    labelEmail: string;
    placeholderEmail: string;
    labelContact: string;
    placeholderContact: string;
    labelCountryCode: string;
    contactCountryPortugal: string;
    contactCountryAngola: string;
    contactCountryBrazil: string;
    contactCountryFrance: string;
    contactCountryGermany: string;
    contactCountryUK: string;
    contactCountryUSA: string;
    contactCountryChina: string;
    contactCountryOther: string;
    labelSize: string;
    sizePlaceholder: string;
    sizeHint: string;
    btnWaitlist: string;
    btnLoading: string;
    successTitle: string;
    successTitleNoName: string;
    successDesc: string;
    disabledMessage: string;
    errorMessage: string;
    followUpNotice: string;
    privacyNotice: string;
    privacyLink: string;
    benefit1Title: string;
    benefit1Desc: string;
    emailSubject: string;
    emailTitle: string;
    emailBody: string;
    emailSignature: string;
    benefit2Title: string;
    benefit2Desc: string;
    benefit3Title: string;
    benefit3Desc: string;
    popupMessages: string[];
  };
  checkout: {
    footerTitle: string;
    footerDesc: string;
    footerBtn: string;
    brandDesc: string;
    columnContact: string;
    btnContact: string;
    columnSocial: string;
    columnLegal: string;
    linkTerms: string;
    linkPrivacy: string;
    linkCookies: string;
    rightsReserved: string;
    editionTag: string;
    footerManageCookies: string;
  };
  cookieConsent: {
    cookieTitle: string;
    cookieDescription: string;
    cookieAccept: string;
    cookieReject: string;
    cookieLearnMore: string;
  };
}

export const translations: Record<Language, TranslationSchema> = {
  pt: {
    nav: {
      home: "Início",
      product: "Produto",
      story: "História",
      waitlist: "WAITLIST",
      contact: "CONTACTO"
    },
    hero: {
      subtitle: "Jeans feito à mão. Memória cultural para vestir."
    },
    archiveDrop: {
      firstDrop: "ARCHIVE PT.01",
      title: "ARCHIVE PT.01 — HANCELLI JEANS",
      desc: "Feito à mão. Inspirado por arquivos visuais, cultura popular e jeans premium.",
      culturalArchive: "• ARQUIVO CULTURAL",
      storyTitle: "Uma peça de jeans que carrega memória",
      storyDesc: "Cada calça é trabalhada manualmente, peça por peça. Referências visuais, cartazes antigos e fragmentos culturais são transformados numa peça com presença própria.",
      bullets: [
        "Feita à mão, peça por peça",
        "Primeira edição HANCELLI",
        "Jeans com narrativa visual"
      ],
      drop: "DROP:",
      format: "FORMATO:",
      status: "ESTADO:",
      statusValue: "WAITLIST ABERTA",
      exploreStory: "EXPLORAR A HISTÓRIA",
      waitlistCardTitle: "Garante o teu lugar na waitlist",
      waitlistCardDesc: "Deixa o teu email, WhatsApp e tamanho de interesse para receberes primeiro a data de lançamento, disponibilidade e acesso ao desconto de pré-lançamento.",
      btnWaitlist: "ENTRAR NA LISTA DE ESPERA",
      btnSaveDrop: "GUARDAR O DROP",
      limitedTitle: "PRIMEIRA EDIÇÃO LIMITADA",
      limitedDesc: "Acesso à primeira edição",
      portugalTitle: "PRODUÇÃO EM PORTUGAL",
      portugalDesc: "Feito à mão, em Portugal",
      originLabel: "ORIGEM:",
      originValue: "Portugal",
      editionLabel: "EDIÇÃO:",
      editionValue: "Archive PT.01",
      accessLabel: "ACESSO:",
      accessValue: "Lista antecipada"
    },
    lookbook: {
      manifestoLine1: "A roupa conta uma história.",
      manifestoLine2: "A história expõe uma cultura.",
      manifestoDesc: "HANCELLI WORLD transforma memória cultural em luxury streetwear — peças feitas para vestir, ler e lembrar.",
      chapter1: "CAPÍTULO 01",
      chapter1Title: "Nascida do arquivo.\nFeita para a rua.",
      chapter1Desc: "Cada detalhe parte de cartazes antigos, referências visuais e fragmentos de cultura popular. No jeans, esses sinais deixam de ser apenas memória — tornam-se presença.",
      chapter2: "CAPÍTULO 02",
      chapter2Title: "A cultura move-se através das pessoas.",
      chapter2Desc: "A peça ganha vida quando sai do arquivo e entra na rua. Imagem, atitude e identidade encontram-se numa presença visual própria.",
      waitlistHeader: "ARCHIVE PT.01 — PRIMEIRO DROP",
      waitlistTitle: "ENTRA NA WAITLIST DO PRIMEIRO DROP",
      waitlistDesc: "Recebe primeiro a data de lançamento, disponibilidade de tamanhos e acesso ao desconto de lançamento.",
      labelName: "NOME",
      placeholderName: "O teu nome",
      labelEmail: "EMAIL",
      placeholderEmail: "teu@email.com",
      labelContact: "CONTACTO (OPCIONAL)",
      placeholderContact: "Número de contacto",
      labelCountryCode: "PAÍS",
      contactCountryPortugal: "Portugal",
      contactCountryAngola: "Angola",
      contactCountryBrazil: "Brasil",
      contactCountryFrance: "França",
      contactCountryGermany: "Alemanha",
      contactCountryUK: "Reino Unido",
      contactCountryUSA: "Estados Unidos",
      contactCountryChina: "China",
      contactCountryOther: "Outro",
      labelSize: "TAMANHO PREFERIDO",
      sizePlaceholder: "Ainda não sei",
      sizeHint: "Escolhe o tamanho que costumas usar em jeans. Se não tiveres certeza, seleciona ‘Ainda não sei’.",
      btnWaitlist: "ENTRAR NA LISTA DE ESPERA",
      btnLoading: "A CARREGAR...",
      successTitle: "estás oficialmente na waitlist.",
      successTitleNoName: "Estás oficialmente na waitlist.",
      successDesc: "Os próximos passos do Archive PT.01 serão enviados para o teu email.",
      disabledMessage: "A lista ainda está a ser ativada. Volta em breve ou contacta-nos pelo botão CONTACTO.",
      errorMessage: "Não foi possível guardar a tua inscrição. Tenta novamente.",
      followUpNotice: "Depois da inscrição, vais receber um email de confirmação com os próximos passos da HANCELLI WORLD.",
      privacyNotice: "Ao entrares na waitlist, aceitas ser contactado pela HANCELLI WORLD sobre o lançamento. Consulta a",
      privacyLink: "Política de Privacidade",
      benefit1Title: "ACESSO ANTECIPADO",
      benefit1Desc: "Recebe os detalhes antes do público.",
      emailSubject: "HANCELLI WORLD — Waitlist Confirmada",
      emailTitle: "Estás oficialmente na waitlist.",
      emailBody: "Recebemos o teu pedido para o Archive PT.01. Vais ser avisado antes do lançamento oficial, incluindo data de lançamento, disponibilidade de tamanhos e acesso antecipado.",
      emailSignature: "HANCELLI WORLD — Jeans feito à mão. Memória cultural para vestir.",
      benefit2Title: "DESCONTO DE LANÇAMENTO",
      benefit2Desc: "Acesso a desconto exclusivo de lançamento.",
      benefit3Title: "PRIORIDADE NO TAMANHO",
      benefit3Desc: "Ajuda-nos a preparar os tamanhos mais pedidos.",
      popupMessages: [
        "WAITLIST UPDATE — Nova entrada registada para o Archive PT.01.",
        "ARCHIVE PT.01 — A lista de espera está em movimento.",
        "WAITLIST ATIVA — O primeiro drop já começou a reunir interessados.",
        "HANCELLI WORLD — Uma nova entrada foi registada há instantes."
      ]
    },
    checkout: {
      footerTitle: "ARQUIVO 01",
      footerDesc: "Primeira edição feita à mão. Entra na waitlist para seres avisado antes do lançamento e garantires o teu tamanho.",
      footerBtn: "ENTRAR NA LISTA DE ESPERA",
      brandDesc: "Jeans feito à mão. Memória cultural para vestir. Produzido em edições limitadas em Portugal.",
      columnContact: "CONTACTO",
      btnContact: "ENVIAR MENSAGEM",
      columnSocial: "REDES SOCIAIS",
      columnLegal: "LEGAL",
      linkTerms: "Termos e Condições",
      linkPrivacy: "Política de Privacidade",
      linkCookies: "Política de Cookies",
      rightsReserved: "© 2026 HANCELLI WORLD. Todos os direitos reservados.",
      editionTag: "EDITION PT.01 — MADE IN PORTUGAL",
      footerManageCookies: "GERIR COOKIES"
    },
    cookieConsent: {
      cookieTitle: "Valorizamos a sua privacidade",
      cookieDescription: "Utilizamos cookies e tecnologias semelhantes (como o Meta Pixel) para compreender a origem das visitas, otimizar campanhas e melhorar a sua navegação. O tracking de marketing só é ativado se consentir.",
      cookieAccept: "ACEITAR",
      cookieReject: "RECUSAR",
      cookieLearnMore: "SABER MAIS"
    }
  },
  en: {
    nav: {
      home: "Home",
      product: "Product",
      story: "Story",
      waitlist: "WAITLIST",
      contact: "CONTACT"
    },
    hero: {
      subtitle: "Handcrafted denim. Wearing cultural memory."
    },
    archiveDrop: {
      firstDrop: "ARCHIVE PT.01",
      title: "ARCHIVE PT.01 — HANCELLI JEANS",
      desc: "Handcrafted. Inspired by visual archives, pop culture, and premium denim.",
      culturalArchive: "• CULTURAL ARCHIVE",
      storyTitle: "A piece of denim carrying memory",
      storyDesc: "Each pair is handcrafted, piece by piece. Visual references, vintage posters, and cultural fragments are transformed into a unique statement piece.",
      bullets: [
        "Handcrafted, piece by piece",
        "First HANCELLI edition",
        "Denim with a visual narrative"
      ],
      drop: "DROP:",
      format: "FORMAT:",
      status: "STATUS:",
      statusValue: "WAITLIST OPEN",
      exploreStory: "EXPLORE THE STORY",
      waitlistCardTitle: "Secure your spot on the waitlist",
      waitlistCardDesc: "Leave your email, WhatsApp, and size preferences to be the first to receive the launch date, availability, and early access discount.",
      btnWaitlist: "JOIN THE WAITLIST",
      btnSaveDrop: "SAVE THE DROP",
      limitedTitle: "FIRST LIMITED EDITION",
      limitedDesc: "Access to the first edition",
      portugalTitle: "CRAFTED IN PORTUGAL",
      portugalDesc: "Handmade in Portugal",
      originLabel: "ORIGIN:",
      originValue: "Portugal",
      editionLabel: "EDITION:",
      editionValue: "Archive PT.01",
      accessLabel: "ACCESS:",
      accessValue: "Early list"
    },
    lookbook: {
      manifestoLine1: "Clothing tells a story.",
      manifestoLine2: "The story exposes a culture.",
      manifestoDesc: "HANCELLI WORLD transforms cultural memory into luxury streetwear — garments made to wear, read, and remember.",
      chapter1: "CHAPTER 01",
      chapter1Title: "Born from archives.\nMade for the streets.",
      chapter1Desc: "Every detail stems from vintage posters, visual archives, and pop culture elements. In denim, these marks cease to be mere memories — they become presence.",
      chapter2: "CHAPTER 02",
      chapter2Title: "Culture moves through people.",
      chapter2Desc: "Denim comes to life when it leaves the archive and enters the street. Image, attitude, and identity converge in a powerful visual statement.",
      waitlistHeader: "ARCHIVE PT.01 — FIRST DROP",
      waitlistTitle: "JOIN THE FIRST DROP WAITLIST",
      waitlistDesc: "Be the first to receive the launch date, size availability, and exclusive launch discount.",
      labelName: "NAME",
      placeholderName: "Your name",
      labelEmail: "EMAIL",
      placeholderEmail: "your@email.com",
      labelContact: "CONTACT (OPTIONAL)",
      placeholderContact: "Contact number",
      labelCountryCode: "COUNTRY",
      contactCountryPortugal: "Portugal",
      contactCountryAngola: "Angola",
      contactCountryBrazil: "Brazil",
      contactCountryFrance: "France",
      contactCountryGermany: "Germany",
      contactCountryUK: "United Kingdom",
      contactCountryUSA: "United States",
      contactCountryChina: "China",
      contactCountryOther: "Other",
      labelSize: "PREFERRED SIZE",
      sizePlaceholder: "I don't know yet",
      sizeHint: "Choose the size you usually wear. If you're not sure, select 'I don't know yet'.",
      btnWaitlist: "JOIN THE WAITLIST",
      btnLoading: "LOADING...",
      successTitle: "you are officially on the waitlist.",
      successTitleNoName: "You are officially on the waitlist.",
      successDesc: "The next steps of Archive PT.01 will be sent to your email.",
      disabledMessage: "The waitlist is still being activated. Come back soon or contact us via the CONTACT button.",
      errorMessage: "Unable to save your entry. Please try again.",
      followUpNotice: "After signing up, you will receive a confirmation email with the next steps of HANCELLI WORLD.",
      privacyNotice: "By joining the waitlist, you agree to be contacted by HANCELLI WORLD about the launch. Read our",
      privacyLink: "Privacy Policy",
      benefit1Title: "EARLY ACCESS",
      benefit1Desc: "Receive details before the public.",
      emailSubject: "HANCELLI WORLD — Waitlist Confirmed",
      emailTitle: "You are officially on the waitlist.",
      emailBody: "We have received your request for Archive PT.01. You will be notified before the official launch, including launch date, size availability, and early access.",
      emailSignature: "HANCELLI WORLD — Handmade denim. Wearable cultural memory.",
      benefit2Title: "LAUNCH DISCOUNT",
      benefit2Desc: "Access to exclusive launch discounts.",
      benefit3Title: "SIZE PRIORITY",
      benefit3Desc: "Help us prepare the most requested sizes.",
      popupMessages: [
        "WAITLIST UPDATE — New entry registered for Archive PT.01.",
        "ARCHIVE PT.01 — The waitlist is in motion.",
        "WAITLIST ACTIVE — The first drop is gathering interest.",
        "HANCELLI WORLD — A new entry was registered moments ago."
      ]
    },
    checkout: {
      footerTitle: "ARCHIVE 01",
      footerDesc: "First handcrafted edition. Join the waitlist to be notified before the launch and secure your size.",
      footerBtn: "JOIN THE WAITLIST",
      brandDesc: "Handcrafted denim. Wearing cultural memory. Produced in limited editions in Portugal.",
      columnContact: "CONTACT",
      btnContact: "SEND MESSAGE",
      columnSocial: "SOCIAL",
      columnLegal: "LEGAL",
      linkTerms: "Terms & Conditions",
      linkPrivacy: "Privacy Policy",
      linkCookies: "Cookie Policy",
      rightsReserved: "© 2026 HANCELLI WORLD. All rights reserved.",
      editionTag: "EDITION PT.01 — MADE IN PORTUGAL",
      footerManageCookies: "MANAGE COOKIES"
    },
    cookieConsent: {
      cookieTitle: "We value your privacy",
      cookieDescription: "We use cookies and similar technologies (like the Meta Pixel) to understand visit origins, optimize campaigns, and improve your browsing. Marketing tracking is only activated if you consent.",
      cookieAccept: "ACCEPT",
      cookieReject: "DECLINE",
      cookieLearnMore: "LEARN MORE"
    }
  },
  fr: {
    nav: {
      home: "Accueil",
      product: "Produit",
      story: "Histoire",
      waitlist: "WAITLIST",
      contact: "CONTACT"
    },
    hero: {
      subtitle: "Jeans fait main. Mémoire culturelle à porter."
    },
    archiveDrop: {
      firstDrop: "ARCHIVE PT.01",
      title: "ARCHIVE PT.01 — HANCELLI JEANS",
      desc: "Fait main. Inspiré par les archives visuelles, la culture populaire et le denim premium.",
      culturalArchive: "• ARCHIVE CULTURELLE",
      storyTitle: "Un jean chargé de mémoire",
      storyDesc: "Chaque pièce est travaillée manuellement, pièce par pièce. Les références visuelles, affiches vintage et fragments culturels se transforment en une création unique.",
      bullets: [
        "Fait main, pièce par pièce",
        "Première édition HANCELLI",
        "Denim à narration visuelle"
      ],
      drop: "DROP :",
      format: "FORMAT :",
      status: "STATUT :",
      statusValue: "WAITLIST OUVERTE",
      exploreStory: "EXPLORAR L'HISTOIRE",
      waitlistCardTitle: "Garantissez votre place sur la waitlist",
      waitlistCardDesc: "Laissez votre e-mail, WhatsApp et taille d'intérêt pour recevoir en exclusivité la date de sortie, la disponibilité et l'accès à l'offre de pré-lancement.",
      btnWaitlist: "REJOINDRE LA WAITLIST",
      btnSaveDrop: "ENREGISTRER LE DROP",
      limitedTitle: "PREMIÈRE ÉDITION LIMITÉE",
      limitedDesc: "Accès à la première édition",
      portugalTitle: "FABRIQUÉ AU PORTUGAL",
      portugalDesc: "Fait main au Portugal",
      originLabel: "ORIGINE :",
      originValue: "Portugal",
      editionLabel: "ÉDITION :",
      editionValue: "Archive PT.01",
      accessLabel: "ACCÈS :",
      accessValue: "Liste prioritaire"
    },
    lookbook: {
      manifestoLine1: "Le vêtement raconte une histoire.",
      manifestoLine2: "L'histoire révèle une culture.",
      manifestoDesc: "HANCELLI WORLD transforme la mémoire culturelle en luxury streetwear — des pièces conçues pour être portées, lues et mémorisées.",
      chapter1: "CHAPITRE 01",
      chapter1Title: "Né de l'archive.\nCréé pour la rue.",
      chapter1Desc: "Chaque détail provient d'affiches anciennes, d'archives visuelles et d'éléments de la culture pop. Dans le denim, ces marques cessent d'être de simples souvenirs — elles s'incarnent.",
      chapter2: "CHAPITRE 02",
      chapter2Title: "La culture se transmet par les gens.",
      chapter2Desc: "Le vêtement prend vie lorsqu'il quitte l'archive pour la rue. Image, attitude et identité se rencontrent pour former une silhouette affirmée.",
      waitlistHeader: "ARCHIVE PT.01 — PREMIER DROP",
      waitlistTitle: "REJOINDRE LA WAITLIST DU PREMIER DROP",
      waitlistDesc: "Soyez le premier informé de la date de sortie, de la disponibilité des tailles et de l'accès aux avantages exclusifs.",
      labelName: "NOM",
      placeholderName: "Votre nom",
      labelEmail: "EMAIL",
      placeholderEmail: "votre@email.com",
      labelContact: "CONTACT (OPTIONNEL)",
      placeholderContact: "Numéro de contact",
      labelCountryCode: "PAYS",
      contactCountryPortugal: "Portugal",
      contactCountryAngola: "Angola",
      contactCountryBrazil: "Brésil",
      contactCountryFrance: "France",
      contactCountryGermany: "Allemagne",
      contactCountryUK: "Royaume-Uni",
      contactCountryUSA: "États-Unis",
      contactCountryChina: "Chine",
      contactCountryOther: "Autre",
      labelSize: "TAILLE SOUHAITÉE",
      sizePlaceholder: "Je ne sais pas encore",
      sizeHint: "Choisissez la taille que vous portez habituellement. Si vous n'êtes pas sûr, sélectionnez 'Je ne sais pas encore'.",
      btnWaitlist: "REJOINDRE LA WAITLIST",
      btnLoading: "CHARGEMENT...",
      successTitle: "tu es officiellement sur la waitlist.",
      successTitleNoName: "Vous êtes officiellement sur la waitlist.",
      successDesc: "Les prochaines étapes de l'Archive PT.01 seront envoyées sur votre e-mail.",
      disabledMessage: "La liste est en cours d'activation. Revenez bientôt ou contactez-nous via le bouton CONTACT.",
      errorMessage: "Impossible d'enregistrer votre inscription. Veuillez réessayer.",
      followUpNotice: "Après votre inscription, vous recevrez un e-mail de confirmation avec les prochaines étapes de HANCELLI WORLD.",
      privacyNotice: "En rejoignant la waitlist, vous acceptez d'être contacté par HANCELLI WORLD au sujet du lancement. Consultez la",
      privacyLink: "Politique de Confidentialité",
      benefit1Title: "ACCÈS ANTICIPÉ",
      benefit1Desc: "Recevez les détails avant le grand public.",
      emailSubject: "HANCELLI WORLD — Waitlist Confirmée",
      emailTitle: "Tu es officiellement sur la waitlist.",
      emailBody: "Nous avons bien reçu ta demande pour l'Archive PT.01. Tu seras prévenu avant le lancement officiel, y compris la date de sortie, la disponibilité des tailles et l'accès anticipé.",
      emailSignature: "HANCELLI WORLD — Jeans faits main. Mémoire culturelle à porter.",
      benefit2Title: "OFFRE DE LANCEMENT",
      benefit2Desc: "Accès aux réductions exclusives de lancement.",
      benefit3Title: "PRIORITÉ DE TAILLE",
      benefit3Desc: "Aidez-nous à prévoir les tailles les plus demandées.",
      popupMessages: [
        "WAITLIST UPDATE — Nouvelle inscription enregistrée pour l'Archive PT.01.",
        "ARCHIVE PT.01 — La liste d'attente est en mouvement.",
        "WAITLIST ACTIVE — Le premier drop rassemble déjà les passionnés.",
        "HANCELLI WORLD — Une nouvelle inscription a été enregistrée à l'instant."
      ]
    },
    checkout: {
      footerTitle: "ARCHIVE 01",
      footerDesc: "Première édition fait main. Rejoignez la waitlist pour être averti avant le lancement et garantir votre taille.",
      footerBtn: "REJOINDRE LA WAITLIST",
      brandDesc: "Jeans fait main. Mémoire culturelle à porter. Fabriqué en éditions limitées au Portugal.",
      columnContact: "CONTACT",
      btnContact: "ENVOYER UN MESSAGE",
      columnSocial: "RÉSEAUX",
      columnLegal: "LÉGAL",
      linkTerms: "Conditions Générales",
      linkPrivacy: "Politique de Confidentialité",
      linkCookies: "Politique de Cookies",
      rightsReserved: "© 2026 HANCELLI WORLD. Tous droits réservés.",
      editionTag: "EDITION PT.01 — MADE IN PORTUGAL",
      footerManageCookies: "GÉRER LES COOKIES"
    },
    cookieConsent: {
      cookieTitle: "Nous respectons votre vie privée",
      cookieDescription: "Nous utilisons des cookies et des technologies similaires (comme le Meta Pixel) pour comprendre l'origine des visites, optimiser les campagnes et améliorer votre navigation. Le suivi marketing n'est activé qu'avec votre consentement.",
      cookieAccept: "ACCEPTER",
      cookieReject: "REFUSER",
      cookieLearnMore: "EN SAVOIR PLUS"
    }
  },
  de: {
    nav: {
      home: "Startseite",
      product: "Produkt",
      story: "Geschichte",
      waitlist: "WAITLIST",
      contact: "KONTAKT"
    },
    hero: {
      subtitle: "Handgefertigtes Denim. Kulturgedächtnis zum Tragen."
    },
    archiveDrop: {
      firstDrop: "ARCHIVE PT.01",
      title: "ARCHIVE PT.01 — HANCELLI JEANS",
      desc: "Handgefertigt. Inspiriert von visuellen Archiven, Popkultur und Premium-Denim.",
      culturalArchive: "• KULTURELLES ARCHIV",
      storyTitle: "Ein Stück Denim, das Erinnerung trägt",
      storyDesc: "Jede Jeans wird in sorgfältiger Handarbeit Stück für Stück gefertigt. Visuelle Referenzen, Vintage-Plakate und kulturelle Fragmente vereinen sich zu einer einzigartigen Präsenz.",
      bullets: [
        "In Handarbeit gefertigt",
        "Erste HANCELLI-Edition",
        "Denim mit visueller Erzählung"
      ],
      drop: "DROP:",
      format: "FORMAT:",
      status: "STATUS:",
      statusValue: "WAITLIST OFFEN",
      exploreStory: "GESCHICHTE ENTDECKEN",
      waitlistCardTitle: "Sichere dir deinen Platz auf der Waitlist",
      waitlistCardDesc: "Hinterlasse E-Mail, WhatsApp und Wunschgröße, um als Erster das Launch-Datum, die Verfügbarkeit und den Pre-Release-Rabatt zu erhalten.",
      btnWaitlist: "AUF DIE WAITLIST EINTRAGEN",
      btnSaveDrop: "DROP SPEICHERN",
      limitedTitle: "ERSTE LIMITIERTE EDITION",
      limitedDesc: "Zugang zur ersten Edition",
      portugalTitle: "HERGESTELLT IN PORTUGAL",
      portugalDesc: "Handgefertigt in Portugal",
      originLabel: "HERKUNFT:",
      originValue: "Portugal",
      editionLabel: "EDITION:",
      editionValue: "Archive PT.01",
      accessLabel: "ZUGANG:",
      accessValue: "Frühe Liste"
    },
    lookbook: {
      manifestoLine1: "Kleidung erzählt eine Geschichte.",
      manifestoLine2: "Die Geschichte offenbart eine Kultur.",
      manifestoDesc: "HANCELLI WORLD verwandelt kulturelles Gedächtnis in Luxury Streetwear — Stücke zum Anziehen, Lesen und Erinnern.",
      chapter1: "KAPITEL 01",
      chapter1Title: "Aus dem Archiv geboren.\nFür die Straße gemacht.",
      chapter1Desc: "Jedes Detail entstammt alten Plakaten, visuellen Archiven und Elementen der Popkultur. Im Denim hören diese Zeichen auf, bloße Erinnerung zu sein — sie werden zu Gegenwart.",
      chapter2: "KAPITEL 02",
      chapter2Title: "Kultur bewegt sich durch Menschen.",
      chapter2Desc: "Die Kreation erwacht zum Leben, wenn sie das Archiv verlässt und die Straße betritt. Bild, Attitüde und Identität treffen in einer starken visuellen Präsenz aufeinander.",
      waitlistHeader: "ARCHIVE PT.01 — ERSTER DROP",
      waitlistTitle: "TRAG DICH IN DIE WAITLIST FÜR DEN ERSTEN DROP EIN",
      waitlistDesc: "Erhalte als Erster Informationen zum Launch-Termin, zur Größenverfügbarkeit und zum Launch-Rabatt.",
      labelName: "NAME",
      placeholderName: "Dein Name",
      labelEmail: "E-MAIL",
      placeholderEmail: "deine@email.com",
      labelContact: "KONTAKT (OPTIONAL)",
      placeholderContact: "Kontaktnummer",
      labelCountryCode: "LAND",
      contactCountryPortugal: "Portugal",
      contactCountryAngola: "Angola",
      contactCountryBrazil: "Brasilien",
      contactCountryFrance: "Frankreich",
      contactCountryGermany: "Deutschland",
      contactCountryUK: "Vereinigtes Königreich",
      contactCountryUSA: "Vereinigte Staaten",
      contactCountryChina: "China",
      contactCountryOther: "Andere",
      labelSize: "WUNSCHGRÖSSE",
      sizePlaceholder: "Ich weiß noch nicht",
      sizeHint: "Wähle die Größe, die du normalerweise trägst. Wenn du dir nicht sicher bist, wähle 'Ich weiß noch nicht'.",
      btnWaitlist: "AUF DIE WAITLIST EINTRAGEN",
      btnLoading: "WIRD GELADEN...",
      successTitle: "du bist offiziell auf der Waitlist.",
      successTitleNoName: "Du bist offiziell auf der Waitlist.",
      successDesc: "Die nächsten Schritte zu Archive PT.01 werden an deine E-Mail gesendet.",
      disabledMessage: "Die Liste wird gerade aktiviert. Komm bald wieder oder kontaktiere uns über den KONTAKT-Button.",
      errorMessage: "Deine Anmeldung konnte nicht gespeichert werden. Bitte versuche es erneut.",
      followUpNotice: "Nach der Anmeldung erhältst du eine Bestätigungs-E-Mail mit den nächsten Schritten von HANCELLI WORLD.",
      privacyNotice: "Mit dem Eintrag in die Waitlist erklärst du dich damit einverstanden, von HANCELLI WORLD über den Launch informiert zu werden. Siehe unsere",
      privacyLink: "Datenschutzerklärung",
      benefit1Title: "VORZEITIGER ZUGANG",
      benefit1Desc: "Erhalte alle Details vor der Öffentlichkeit.",
      emailSubject: "HANCELLI WORLD — Waitlist bestätigt",
      emailTitle: "Du bist offiziell auf der Waitlist.",
      emailBody: "Wir haben deine Anfrage für Archive PT.01 erhalten. Du wirst vor dem offiziellen Launch benachrichtigt, einschließlich Launch-Termin, Größenverfügbarkeit und Early Access.",
      emailSignature: "HANCELLI WORLD — Handgefertigter Denim. Tragbare kulturelle Erinnerung.",
      benefit2Title: "LAUNCH-RABATT",
      benefit2Desc: "Exklusiver Rabatt zum Verkaufsstart.",
      benefit3Title: "GRÖSSENPRIORITÄT",
      benefit3Desc: "Hilf uns, die am meisten nachgefragten Größen vorzubereiten.",
      popupMessages: [
        "WAITLIST UPDATE — Neuer Eintrag für Archive PT.01 registriert.",
        "ARCHIVE PT.01 — Die Warteliste füllt sich.",
        "WAITLIST AKTIV — Die erste Kollektion weckt großes Interesse.",
        "HANCELLI WORLD — Vor wenigen Augenblicken wurde ein neuer Eintrag registriert."
      ]
    },
    checkout: {
      footerTitle: "ARCHIV 01",
      footerDesc: "Erste handgefertigte Edition. Trag dich in die Waitlist ein, um vor dem Launch benachrichtigt zu werden und deine Größe zu sichern.",
      footerBtn: "AUF DIE WAITLIST EINTRAGEN",
      brandDesc: "Handgefertigtes Denim. Kulturgedächtnis zum Tragen. In limitierter Stückzahl in Portugal produziert.",
      columnContact: "KONTAKT",
      btnContact: "NACHRICHT SENDEN",
      columnSocial: "MEDIEN",
      columnLegal: "RECHTLICHES",
      linkTerms: "AGB & Bedingungen",
      linkPrivacy: "Datenschutzerklärung",
      linkCookies: "Cookie-Richtlinie",
      rightsReserved: "© 2026 HANCELLI WORLD. Alle Rechte vorbehalten.",
      editionTag: "EDITION PT.01 — MADE IN PORTUGAL",
      footerManageCookies: "COOKIES VERWALTEN"
    },
    cookieConsent: {
      cookieTitle: "Wir schätzen Ihre Privatsphäre",
      cookieDescription: "Wir verwenden Cookies und ähnliche Technologien (wie das Meta-Pixel), um die Herkunft der Besuche zu verstehen, Kampagnen zu optimieren und Ihr Surferlebnis zu verbessern. Marketing-Tracking wird nur nach Ihrer Einwilligung aktiviert.",
      cookieAccept: "AKZEPTIEREN",
      cookieReject: "ABLEHNEN",
      cookieLearnMore: "MEHR ERFAHREN"
    }
  },
  zh: {
    nav: {
      home: "首页",
      product: "产品",
      story: "故事",
      waitlist: "WAITLIST",
      contact: "联系"
    },
    hero: {
      subtitle: "纯手工丹宁。穿在身上的文化记忆。"
    },
    archiveDrop: {
      firstDrop: "ARCHIVE PT.01",
      title: "ARCHIVE PT.01 — HANCELLI JEANS",
      desc: "纯手工制作。灵感源自视觉档案、流行文化与高端丹宁。",
      culturalArchive: "• 文化档案",
      storyTitle: "承载着记忆的丹宁艺术品",
      storyDesc: "每一条牛仔裤皆由手工逐一打磨。视觉标识、复古海报与文化碎片融入其中，铸就极具个性的独特气场。",
      bullets: [
        "匠人纯手工逐一打造",
        "HANCELLI 首发限定系列",
        "赋予视觉叙事深度的丹宁"
      ],
      drop: "首发系列:",
      format: "产品版型:",
      status: "当前状态:",
      statusValue: "WAITLIST 现已开放",
      exploreStory: "探索品牌故事",
      waitlistCardTitle: "锁定 WAITLIST 席位",
      waitlistCardDesc: "留下邮箱、WhatsApp及尺码，第一时间获取发售提醒与首发专属特惠。",
      btnWaitlist: "加入 WAITLIST",
      btnSaveDrop: "订阅发售提醒",
      limitedTitle: "首发限定珍藏",
      limitedDesc: "尊享首发系列订购特权",
      portugalTitle: "葡萄牙手工制造",
      portugalDesc: "于葡萄牙纯手工精心雕琢",
      originLabel: "产地来源:",
      originValue: "葡萄牙",
      editionLabel: "发布版本:",
      editionValue: "Archive PT.01",
      accessLabel: "获取通道:",
      accessValue: "抢先预约名单"
    },
    lookbook: {
      manifestoLine1: "服装，在诉说一个故事。",
      manifestoLine2: "故事，在展现一种文化。",
      manifestoDesc: "HANCELLI WORLD 将文化记忆转化为高端奢华街头服饰 —— 专为穿着、品读与铭记而打造。",
      chapter1: "第一章",
      chapter1Title: "生于经典档案。\n专为街头而生。",
      chapter1Desc: "每一处细节均承袭自复古海报、视觉珍存及流行文化精髓。融入丹宁之中，这些印记不再只是斑驳回忆，而是重塑当下的独特张力。",
      chapter2: "第二章",
      chapter2Title: "文化因人而动，经人而传。",
      chapter2Desc: "当丹宁步出珍藏档案，步入街头巷尾，灵魂方才觉醒。态度、气场与身份在此完美交融，化为不可忽视的视觉宣告。",
      waitlistHeader: "ARCHIVE PT.01 — 首发限定系列",
      waitlistTitle: "加入首发 WAITLIST",
      waitlistDesc: "抢先获取发售日期提醒、心仪尺码库存及首发专属特惠。",
      labelName: "姓名",
      placeholderName: "您的姓名",
      labelEmail: "电子邮箱",
      placeholderEmail: "your@email.com",
      labelContact: "联系方式 (选填)",
      placeholderContact: "联系电话",
      labelCountryCode: "国家/地区",
      contactCountryPortugal: "葡萄牙",
      contactCountryAngola: "安哥拉",
      contactCountryBrazil: "巴西",
      contactCountryFrance: "法国",
      contactCountryGermany: "德国",
      contactCountryUK: "英国",
      contactCountryUSA: "美国",
      contactCountryChina: "中国",
      contactCountryOther: "其他",
      labelSize: "心仪尺码",
      sizePlaceholder: "我还不确定",
      sizeHint: "选择您平时穿的牛仔裤尺码。如果不确定，请选择“我还不确定”。",
      btnWaitlist: "加入 WAITLIST",
      btnLoading: "提交中...",
      successTitle: "您已成功加入候补名单。",
      successTitleNoName: "您已成功加入候补名单。",
      successDesc: "首发 Archive PT.01 系列的后续动态将发送至您的邮箱。",
      disabledMessage: "候补通道正在开启中，请稍后再试或点击“联系我们”直接沟通。",
      errorMessage: "提交失败，请检查网络并重试。",
      followUpNotice: "完成登记后，您将收到一封确认邮件，开启探索 HANCELLI WORLD 的下一步。",
      privacyNotice: "加入候补名单即表示您同意 HANCELLI WORLD 向您发送关于本次发售的相关资讯。阅读我们的",
      privacyLink: "隐私政策",
      benefit1Title: "尊享抢先通道",
      benefit1Desc: "优先于公众获取发售详情与配额。",
      emailSubject: "HANCELLI WORLD — Waitlist 确认成功",
      emailTitle: "您已成功加入 WAITLIST。",
      emailBody: "我们已收到您对 Archive PT.01 的加入请求。在正式发售前，您将第一时间获取包括发售日期、心仪尺码库存及优先购买权等专属通知。",
      emailSignature: "HANCELLI WORLD — 手工定制牛仔。穿在身上的文化珍存。",
      benefit2Title: "首发特惠特权",
      benefit2Desc: "专享首发限定系列的独家折扣。",
      benefit3Title: "尺码优先配额",
      benefit3Desc: "帮助我们为您提前锁定最紧俏的热门尺码。",
      popupMessages: [
        "WAITLIST 动态 — 刚刚录入了一条针对 Archive PT.01 的全新候补登记。",
        "ARCHIVE PT.01 — 候补名单正在火热增加中。",
        "WAITLIST 现已激活 — 首发 DROP 正在吸引全球潮流玩家瞩目。",
        "HANCELLI WORLD — 刚刚成功登记了一名新加入的候补成员。"
      ]
    },
    checkout: {
      footerTitle: "ARCHIVE 01",
      footerDesc: "首发纯手工限定版。立即加入 waitlist，获取抢先发售提醒并锁定您的专属尺码。",
      footerBtn: "加入 WAITLIST",
      brandDesc: "纯手工丹宁。穿在身上的文化记忆。于葡萄牙限量手工制造。",
      columnContact: "联系我们",
      btnContact: "发送消息",
      columnSocial: "社交媒体",
      columnLegal: "法律条款",
      linkTerms: "使用条款与服务协议",
      linkPrivacy: "隐私政策协议",
      linkCookies: "Cookie 政策说明",
      rightsReserved: "© 2026 HANCELLI WORLD. 保留所有权利。",
      editionTag: "EDITION PT.01 — MADE IN PORTUGAL",
      footerManageCookies: "管理 COOKIE"
    },
    cookieConsent: {
      cookieTitle: "我们重视您的隐私",
      cookieDescription: "我们使用 cookie 和类似技术（例如 Meta Pixel）来分析访问来源、优化推广活动并提升您的浏览体验。只有在您同意后才会启用营销追踪。",
      cookieAccept: "接受",
      cookieReject: "拒绝",
      cookieLearnMore: "了解更多"
    }
  }
};
