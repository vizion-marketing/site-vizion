import type { ServiceContent } from "./types";

export const credibilitePositionnement: ServiceContent = {
  slug: "product-marketing",
  title: "Product Marketing B2B",
  icon: "Rocket",
  category: "Product Marketing",
  isPilier: true,
  order: 101,

  metaTitle: "Product Marketing B2B : positionnement, messaging et go-to-market | Vizion",
  metaDescription:
    "Faites de votre produit une évidence sur son marché. Positionnement, messaging, contenu d'expertise, go-to-market. Vizion structure le product marketing des entreprises B2B.",
  keywords: [
    "product marketing B2B",
    "product marketing",
    "positionnement produit B2B",
    "messaging B2B",
    "go-to-market B2B",
    "stratégie product marketing",
    "proposition de valeur B2B",
    "lancement produit B2B",
  ],

  heroTitle: "Product Marketing : faites de votre produit une évidence sur son marché",
  heroSubtitle:
    "Votre produit est solide. Mais vos prospects ne le perçoivent pas. Le product marketing traduit votre valeur en messages clairs, structure votre go-to-market et arme vos équipes pour chaque conversation commerciale. Pour que le choix devienne évident.",
  heroBadge: "PRODUCT MARKETING B2B",
  heroImage: "/images/cas-clients/easyvirtual-mainimage.avif",

  constat: {
    surtitre: "LE CONSTAT",
    title: "Votre produit est bon. Le problème, c'est que personne ne le comprend.",
    paragraphs: [
      "Vos fonctionnalités sont solides, votre équipe technique est performante, vos clients existants sont satisfaits. Pourtant, vos prospects ne voient pas la différence avec vos concurrents. Vos commerciaux improvisent des pitchs différents à chaque rendez-vous. Votre site web décrit ce que vous faites, pas pourquoi vous choisir.",
      "Le problème n'est pas votre produit. C'est l'absence de product marketing. Sans positionnement clair, sans messaging structuré, sans contenu qui éduque votre marché, votre offre reste une option parmi d'autres dans un tableur de comparaison.",
    ],
    statements: [
      {
        icon: "Target",
        headline: "Positionnement et messaging",
        description: "Nous identifions ce qui vous différencie et formulons une proposition de valeur adaptée à chaque profil décideur.",
      },
      {
        icon: "FileText",
        headline: "Contenu d'expertise et go-to-market",
        description: "Nous produisons les contenus, les pages et les supports qui traduisent votre positionnement en preuves tangibles.",
      },
      {
        icon: "Rocket",
        headline: "Activation commerciale",
        description: "Nous armons vos équipes avec les bons messages, les bons arguments et les bons outils pour chaque étape du cycle de vente.",
      },
    ],
  },

  solutionTitle: "Les quatre piliers du product marketing B2B",
  solutionImage: "/images/services/positionnement-messaging/hero.avif",
  solutionItems: [
    {
      title: "Positionnement et proposition de valeur",
      description: "Un positionnement clair par persona, une proposition de valeur que vos prospects comprennent en 10 secondes, un discours de marque que toute votre équipe utilise. Le socle de tout product marketing efficace.",
    },
    {
      title: "Messaging et narratif de vente",
      description: "Le messaging traduit votre positionnement en arguments concrets pour chaque interlocuteur. Décideur, utilisateur, acheteur : chaque profil reçoit le message qui fait avancer sa décision.",
    },
    {
      title: "Contenu et assets go-to-market",
      description: "Articles, cas clients, landing pages, livres blancs. Chaque contenu est calibré pour une étape du cycle de vente et un profil d'acheteur. Le product marketing transforme votre expertise en pipeline.",
    },
    {
      title: "Personal branding et thought leadership",
      description: "Vos dirigeants deviennent des références sur leur marché. Stratégie LinkedIn, contenu d'expertise, prise de parole structurée. Les prospects arrivent convaincus avant le premier rendez-vous.",
    },
  ],

  // Méthodologie (pilier)
  pilierMethodology: {
    surtitre: "NOTRE APPROCHE",
    title: "Comment nous structurons votre product marketing",
    subtitle: "Quatre phases pour passer d'un produit mal compris à une offre qui s'impose. Chaque phase est activable indépendamment selon votre maturité.",
    steps: [
      {
        title: "Diagnostic de perception marché",
        description: "Nous analysons comment votre marché vous perçoit : entretiens avec vos clients et prospects, audit du discours commercial, benchmark concurrentiel. L'objectif : mesurer l'écart entre ce que vous êtes et ce que votre marché comprend.",
      },
      {
        title: "Architecture de positionnement",
        description: "Nous construisons votre positionnement, vos propositions de valeur par persona et votre messaging framework. Un document de référence que toute votre équipe utilise pour parler d'une seule voix.",
      },
      {
        title: "Production des assets product marketing",
        description: "Contenus d'expertise, landing pages, cas clients, supports de vente, personal branding. Nous produisons les assets qui traduisent votre positionnement en preuves concrètes pour chaque étape du parcours d'achat.",
      },
      {
        title: "Mesure et itération",
        description: "Taux de conversion, engagement contenu, pipeline généré, retours terrain des commerciaux. Nous mesurons l'impact de chaque levier product marketing et ajustons la stratégie chaque mois.",
      },
    ],
  },

  // Métriques sourcées
  pilierMetrics: {
    surtitre: "POURQUOI LE PRODUCT MARKETING",
    title: "Ce que le product marketing change concrètement",
    subtitle: "Des chiffres issus d'études sectorielles sur l'impact du positionnement, du messaging et du contenu en B2B.",
    metrics: [
      {
        value: 86,
        suffix: "%",
        label: "des ventes B2B bloquent quand le message est flou",
        direction: "down" as const,
        context: "Sans message clair, vos acheteurs ne savent pas comment défendre votre solution en interne. Forrester, 2024.",
        sourceUrl: "https://www.forrester.com/press-newsroom/forrester-predictions-2025-b2b-marketing-sales/",
      },
      {
        value: 41,
        suffix: "%",
        label: "des acheteurs ont choisi leur favori avant de vous contacter",
        direction: "up" as const,
        context: "Votre positionnement et vos contenus doivent convaincre bien avant le premier appel commercial. Forrester, 2024.",
        sourceUrl: "https://www.forrester.com/press-newsroom/forrester-predictions-2025-b2b-marketing-sales/",
      },
      {
        value: 61,
        suffix: "%",
        label: "des acheteurs B2B préfèrent décider sans parler a un commercial",
        direction: "up" as const,
        context: "Votre site, vos contenus et vos landing pages doivent vendre a votre place. Le product marketing les structure pour ça. Gartner, 2025.",
        sourceUrl: "https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-sales-survey-finds-61-percent-of-b2b-buyers-prefer-a-rep-free-buying-experience",
      },
    ],
  },

  processTitle: "",
  processSubtitle: "",
  processSteps: [],

  testimonialsTitle: "Ce que nos clients en disent",
  testimonialsSubtitle: "Des dirigeants B2B qui ont structuré leur product marketing avec Vizion.",
  testimonials: [
    {
      quote: "En 6 semaines, notre positionnement était clair pour la premiere fois en 3 ans.",
      detail: "On perdait des deals parce que nos prospects ne comprenaient pas notre valeur. Vizion a structuré notre messaging et nos commerciaux sont enfin alignés sur un discours unique.",
      author: "Thomas Durand",
      role: "CEO",
      company: "SaaS industriel",
      rating: 5,
    },
    {
      quote: "Le personal branding de notre fondateur génère aujourd'hui 30% de nos leads.",
      detail: "On ne croyait pas au personal branding. Vizion nous a montré comment structurer une prise de parole LinkedIn qui attire des décideurs qualifiés. C'est devenu notre premier canal d'acquisition.",
      author: "Marie Laurent",
      role: "Directrice Marketing",
      company: "Editeur SaaS RH",
      rating: 5,
    },
    {
      quote: "Notre landing page convertit 3 fois mieux depuis le repositionnement.",
      detail: "Le probleme n'était pas le trafic, c'était le message. Vizion a reconstruit notre proposition de valeur et restructuré chaque page. Les résultats ont été immédiats.",
      author: "Julien Morel",
      role: "Head of Growth",
      company: "Scale-up B2B",
      rating: 5,
    },
  ],

  faqTitle: "Questions fréquentes sur le product marketing B2B",
  faqs: [
    {
      question: "Le product marketing, c'est quoi exactement ?",
      answer: "Le product marketing est la discipline qui connecte votre produit à votre marché. Il structure le positionnement, formule le messaging pour chaque profil d'acheteur, produit les contenus qui éduquent vos prospects et arme vos commerciaux. Son objectif : que votre valeur devienne évidente sans effort pour ceux qui vous découvrent.",
    },
    {
      question: "Quelle différence entre product marketing et content marketing ?",
      answer: "Le content marketing produit des contenus pour attirer du trafic. Le product marketing va plus loin : il structure le positionnement, définit le messaging et aligne chaque contenu sur le cycle de vente. Le content marketing est un levier du product marketing, pas un substitut.",
    },
    {
      question: "Pourquoi le product marketing est-il un prérequis avant toute action marketing ?",
      answer: "Parce que sans positionnement clair, chaque action marketing porte un message différent. Vos publicités, votre site, vos commerciaux racontent des histoires incohérentes. Le product marketing unifie tout : c'est le socle sur lequel repose chaque prise de parole, chaque contenu et chaque page de vente.",
    },
    {
      question: "Combien de temps pour structurer un product marketing efficace ?",
      answer: "Le positionnement et le messaging sont opérationnels en 4 a 6 semaines. La production des premiers assets (landing pages, contenus, supports de vente) prend 4 a 8 semaines supplémentaires. L'impact sur la perception marché se mesure a partir de 3 mois. Le product marketing est un investissement structurant dont les effets se cumulent.",
    },
    {
      question: "Le product marketing est-il réservé aux grandes entreprises ?",
      answer: "Les PME et ETI B2B sont celles qui en bénéficient le plus. Contrairement aux grands groupes qui ont des équipes dédiées, les entreprises de 10 à 250 collaborateurs ont besoin d'un positionnement clair et de contenus percutants pour se différencier avec des ressources limitées. C'est exactement ce que le product marketing structure.",
    },
    {
      question: "Quel retour sur investissement attendre du product marketing ?",
      answer: "Le ROI se mesure sur trois axes : le taux de conversion (nos clients constatent en moyenne +40%), la durée du cycle de vente (réduite grace à des contenus qui éduquent en amont) et la qualité des leads entrants (le personal branding et le contenu attirent des prospects déja qualifiés).",
    },
    {
      question: "Le personal branding fait-il partie du product marketing ?",
      answer: "En B2B, la décision d'achat repose sur la confiance. Quand vos dirigeants sont visibles et reconnus sur LinkedIn, les prospects arrivent convaincus avant le premier rendez-vous. Le personal branding est un accélérateur de crédibilité, donc un levier direct du product marketing.",
    },
    {
      question: "Comment se déroule un accompagnement product marketing avec Vizion ?",
      answer: "Quatre phases : diagnostic de perception marché (2 semaines), architecture de positionnement (2-3 semaines), production des assets product marketing (contenu, landing pages, personal branding), puis mesure et itération mensuelle. Un directeur marketing dédié est votre interlocuteur unique tout au long de l'accompagnement.",
    },
  ],

  pilierTiming: {
    surtitre: "LE BON MOMENT",
    title: "Quand investir dans le product marketing ?",
    subtitle: "Certains signaux indiquent qu'il est temps de structurer votre product marketing. Si vous vous reconnaissez dans l'une de ces situations, c'est le moment d'agir.",
    items: [
      {
        icon: "Rocket",
        title: "Vous lancez un produit ou une nouvelle offre",
        description: "Votre offre est prête mais vous n'avez pas de positionnement clair, de messaging structuré ni de contenu go-to-market pour la faire connaitre.",
      },
      {
        icon: "Users",
        title: "Vos commerciaux improvisent à chaque rendez-vous",
        description: "Chaque commercial raconte une histoire différente. Vos prospects ne comprennent pas ce qui vous distingue et les deals s'éternisent.",
      },
      {
        icon: "TrendingDown",
        title: "Votre taux de conversion stagne malgré le trafic",
        description: "Les visiteurs arrivent sur votre site mais ne convertissent pas. Vos landing pages, vos contenus et votre proposition de valeur ne convainquent pas.",
      },
      {
        icon: "RefreshCw",
        title: "Vous repositionnez votre offre ou montez en gamme",
        description: "Votre marché évolue, vos cibles changent ou vous passez de la startup à la scale-up. Votre communication ne reflète plus votre réalité.",
      },
    ],
  },

  pilierTargets: {
    surtitre: "A QUI S'ADRESSE LE PRODUCT MARKETING",
    title: "Le product marketing pour chaque entreprise ou le digital intervient dans la vente.",
    subtitle: "Que vous vendiez un logiciel, un service ou un produit technique, des que votre cycle de vente implique plusieurs décideurs et du contenu digital, le product marketing vous concerne.",
    highlightWords: ["chaque entreprise"],
    items: [
      {
        icon: "Rocket",
        title: "Startups et scale-ups B2B",
        description: "Vous avez trouvé votre product-market fit et devez structurer votre go-to-market pour accélérer. Le product marketing transforme votre traction initiale en croissance répétable.",
      },
      {
        icon: "Building2",
        title: "PME et ETI en croissance",
        description: "Votre offre est solide mais votre communication ne reflète pas votre valeur réelle. Le product marketing aligne votre positionnement sur votre ambition et structure votre montée en puissance commerciale.",
      },
      {
        icon: "Code",
        title: "Editeurs SaaS et entreprises tech",
        description: "Votre produit est puissant mais difficile à vulgariser. Le product marketing traduit vos fonctionnalités techniques en bénéfices business que vos acheteurs comprennent et défendent en interne.",
      },
      {
        icon: "Globe",
        title: "Entreprises avec un cycle de vente digital",
        description: "Des que le digital intervient dans votre parcours d'achat (site, contenus, démos, nurturing), le product marketing structure chaque point de contact pour convertir.",
      },
      {
        icon: "Factory",
        title: "Industriels et fabricants",
        description: "Votre expertise technique est reconnue, mais votre communication ne la met pas en valeur. Le product marketing structure vos arguments pour convaincre des acheteurs qui comparent.",
      },
      {
        icon: "Handshake",
        title: "Sociétés de conseil et services B2B",
        description: "Vous vendez de l'expertise immatérielle. Le product marketing rend votre valeur tangible avec du contenu, des cas clients et un positionnement qui vous distingue.",
      },
    ],
    featuredIndex: 1,
  },

  relatedServicesTitle: "Les services de ce pilier",
  relatedServicesSubtitle: "Chaque service peut être activé indépendamment ou combiné dans un accompagnement product marketing global.",
  relatedServices: [
    {
      slug: "positionnement-messaging",
      icon: "Target",
      title: "Positionnement et messaging",
      description: "Nous construisons votre positionnement, vos propositions de valeur par persona et votre messaging framework.",
      href: "/services/positionnement-messaging",
    },
    {
      slug: "creation-contenu-b2b",
      icon: "FileText",
      title: "Stratégie éditoriale B2B",
      description: "Articles, newsletters, posts LinkedIn. Les contenus récurrents qui positionnent votre expertise et nourrissent votre pipeline.",
      href: "/services/creation-contenu-b2b",
    },
    {
      slug: "livres-blancs-lead-magnets",
      icon: "BookOpen",
      title: "Livres blancs et lead magnets",
      description: "Les contenus premium que vos prospects téléchargent en échange de leurs coordonnées. Conçus pour qualifier et faire avancer.",
      href: "/services/livres-blancs-lead-magnets",
    },
    {
      slug: "creation-landing-page",
      icon: "LayoutTemplate",
      title: "Création de landing page",
      description: "Des pages conçues pour un seul objectif : convertir. Structure testée, copywriting orienté problème, formulaire au bon moment.",
      href: "/services/creation-landing-page",
    },
    {
      slug: "adn-marque-branding",
      icon: "Fingerprint",
      title: "ADN de marque et branding",
      description: "Mission, vision, ton de voix, univers visuel. Le socle qui garantit la cohérence de chaque prise de parole product marketing.",
      href: "/services/adn-marque-branding",
    },
  ],

  ctaTitle: "Votre produit mérite d'être compris au premier regard",
  ctaDescription: "Échangez 30 minutes avec un fondateur. Nous analysons votre positionnement actuel et identifions comment le product marketing peut accélérer votre croissance.",
  ctaButtonText: "Structurer votre product marketing",
  ctaButtonLink: "/contact",
};
