import type { ServiceContent } from "./types";

export const credibilitePositionnement: ServiceContent = {
  slug: "product-marketing",
  title: "Crédibilité et positionnement B2B",
  icon: "Rocket",
  category: "Product Marketing",
  isPilier: true,
  order: 101,

  metaTitle: "Positionnement B2B : crédibilité, contenu et personal branding | Vizion",
  metaDescription:
    "Construisez la crédibilité de votre entreprise B2B. Positionnement, messaging, contenu d'expertise, landing pages, personal branding. Pour que votre valeur devienne évidente.",
  keywords: [
    "positionnement B2B",
    "crédibilité entreprise B2B",
    "personal branding B2B",
    "contenu B2B",
    "messaging B2B",
    "proposition de valeur B2B",
    "image de marque B2B",
  ],

  heroTitle: "Product Marketing : bâtissez votre crédibilité sur votre marché",
  heroSubtitle:
    "Le product marketing traduit la valeur de votre offre en messages clairs pour chaque décideur. Positionnement, messaging, contenu d'expertise et personal branding : tout ce qui fait que vos prospects vous choisissent vous, plutot que vos concurrents.",
  heroBadge: "CRÉDIBILITÉ & POSITIONNEMENT",
  heroImage: "/images/cas-clients/easyvirtual-mainimage.avif",

  constat: {
    surtitre: "COMPRENDRE LE PRODUCT MARKETING",
    title: "Le product marketing, c'est quoi ?",
    paragraphs: [
      "Le product marketing traduit votre offre en messages que vos acheteurs comprennent et utilisent pour justifier leur décision en interne. Positionnement, messaging, contenu, landing pages : c'est ce qui fait la différence entre être shortlisté et être choisi.",
    ],
    statements: [
      {
        icon: "Target",
        headline: "Positionnement et messaging",
        description: "Clarifier ce qui vous différencie et formuler une proposition de valeur par profil décideur.",
      },
      {
        icon: "FileText",
        headline: "Contenu d'expertise",
        description: "Produire les articles, guides et case studies qui éduquent votre marché et nourrissent votre pipeline.",
      },
      {
        icon: "Rocket",
        headline: "Stratégie go-to-market",
        description: "Structurer le lancement de vos offres : ciblage, canaux, séquences de messages et activation commerciale.",
      },
    ],
  },

  solutionTitle: "Quatre leviers pour installer votre crédibilité",
  solutionImage: "/images/services/positionnement-messaging/hero.avif",
  solutionItems: [
    {
      title: "Positionnement et messaging",
      description: "Un positionnement clair, une proposition de valeur par persona, un discours de marque unifié. Pour que vos prospects comprennent instantanément pourquoi vous choisir.",
    },
    {
      title: "Création de contenu B2B",
      description: "Articles, livres blancs, newsletters, posts LinkedIn. Chaque format est calibré pour éduquer votre marché et faire avancer vos prospects dans le cycle de vente.",
    },
    {
      title: "Landing pages optimisées",
      description: "Des pages conçues pour un objectif : convertir. Structure testée, copywriting orienté problème, formulaire au bon moment.",
    },
    {
      title: "Stratégie de personal branding",
      description: "Vos dirigeants deviennent des références sur leur marché. Stratégie LinkedIn, contenu d'expertise, prise de parole structurée.",
    },
  ],

  // Méthodologie macro (pilier)
  pilierMethodology: {
    surtitre: "NOTRE APPROCHE",
    title: "Comment nous structurons votre product marketing",
    subtitle: "Quatre phases pour passer d'une offre floue a une crédibilité installée. Chaque phase est activable indépendamment selon votre maturité.",
    steps: [
      {
        title: "Diagnostic de perception",
        description: "Nous analysons comment votre marché vous perçoit : entretiens décideurs, audit du discours commercial, benchmark concurrentiel. L'objectif : identifier l'écart entre ce que vous êtes et ce que vos prospects comprennent.",
      },
      {
        title: "Architecture de message",
        description: "Nous construisons votre positionnement, vos propositions de valeur par persona et votre messaging framework. Un document de référence que toute votre équipe utilise.",
      },
      {
        title: "Production et déploiement",
        description: "Contenus, landing pages, personal branding : nous produisons les assets qui traduisent votre positionnement en preuves tangibles pour votre marché.",
      },
      {
        title: "Mesure et itération",
        description: "Taux de conversion, engagement contenu, pipeline généré. Nous mesurons l'impact de chaque levier et ajustons la stratégie chaque mois.",
      },
    ],
  },

  // Métriques sourcées
  pilierMetrics: {
    surtitre: "POURQUOI INVESTIR",
    title: "Ce que le product marketing change concrètement",
    subtitle: "Des chiffres issus d'études sectorielles sur l'impact du positionnement, du contenu et du messaging en B2B.",
    metrics: [
      {
        value: 86,
        suffix: "%",
        label: "des deals B2B stagnent sans messaging clair",
        direction: "down" as const,
        context: "Les acheteurs n'arrivent pas a justifier leur choix en interne (Forrester, State of Business Buying 2024)",
        sourceUrl: "https://www.forrester.com/press-newsroom/forrester-predictions-2025-b2b-marketing-sales/",
      },
      {
        value: 41,
        suffix: "%",
        label: "des acheteurs ont déja un favori avant l'évaluation",
        direction: "up" as const,
        context: "Votre positionnement doit convaincre avant le premier contact commercial (Forrester Buyers Journey Survey, 2024)",
        sourceUrl: "https://www.forrester.com/press-newsroom/forrester-predictions-2025-b2b-marketing-sales/",
      },
      {
        value: 61,
        suffix: "%",
        label: "des acheteurs B2B préferent acheter sans commercial",
        direction: "up" as const,
        context: "Ce qui rend votre site et vos contenus encore plus décisifs dans la décision d'achat (Gartner, 2025, 632 acheteurs)",
        sourceUrl: "https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-sales-survey-finds-61-percent-of-b2b-buyers-prefer-a-rep-free-buying-experience",
      },
      {
        value: 69,
        suffix: "%",
        label: "trouvent des incohérences entre site et discours commercial",
        direction: "down" as const,
        context: "Le messaging non aligné détruit la confiance. Les acheteurs veulent de la cohérence (Gartner Sales Survey, 2025)",
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
      detail: "On perdait des deals parce que nos prospects ne comprenaient pas notre valeur. Vizion a structuré notre messaging et nos commerciaux sont enfin alignés.",
      author: "Thomas Durand",
      role: "CEO",
      company: "SaaS industriel",
      rating: 5,
    },
    {
      quote: "Le personal branding de notre fondateur génère aujourd'hui 30% de nos leads.",
      detail: "On ne croyait pas au personal branding. Vizion nous a montré comment structurer une prise de parole LinkedIn qui attire des décideurs qualifiés.",
      author: "Marie Laurent",
      role: "Directrice Marketing",
      company: "Editeur SaaS RH",
      rating: 5,
    },
    {
      quote: "Notre landing page convertit 3 fois mieux qu'avant le repositionnement.",
      detail: "Le probleme n'était pas le trafic, c'était le message. Vizion a reécrit notre proposition de valeur et restructuré la page. Les résultats ont été immédiats.",
      author: "Julien Morel",
      role: "Head of Growth",
      company: "Scale-up B2B",
      rating: 5,
    },
  ],

  // Inline CTA avant FAQ
  inlineCTAs: {
    beforeFaq: {
      text: "Votre positionnement mérite un regard extérieur ?",
      buttonText: "Échanger avec un fondateur",
      href: "/contact",
    },
  },

  faqTitle: "Questions fréquentes sur le product marketing B2B",
  faqs: [
    {
      question: "Qu'est-ce que le product marketing en B2B ?",
      answer: "Le product marketing est la discipline qui traduit la valeur de votre offre en messages compréhensibles pour chaque profil d'acheteur. Il couvre le positionnement, le messaging, la création de contenu, les landing pages et le personal branding. Son objectif : que vos prospects comprennent pourquoi vous choisir, sans effort.",
    },
    {
      question: "Pourquoi le positionnement est-il un prérequis avant toute action marketing ?",
      answer: "Parce que sans positionnement clair, chaque action marketing porte un message différent. Vos publicités, votre site, vos commerciaux racontent des histoires incohérentes. Le positionnement unifie tout : c'est le socle sur lequel repose chaque prise de parole.",
    },
    {
      question: "Quelle est la différence entre product marketing et content marketing ?",
      answer: "Le content marketing produit des contenus pour attirer du trafic. Le product marketing va plus loin : il structure le message, positionne l'offre par rapport au marché et aligne chaque contenu sur le cycle de vente. Le content marketing est un levier du product marketing, pas un substitut.",
    },
    {
      question: "Le personal branding est-il vraiment utile en B2B ?",
      answer: "En B2B, la décision d'achat implique de la confiance. Les acheteurs préferent travailler avec des experts qu'ils connaissent. Quand vos dirigeants sont visibles et reconnus sur LinkedIn, les prospects arrivent déja convaincus avant le premier rendez-vous.",
    },
    {
      question: "Combien de temps pour voir l'impact d'un repositionnement ?",
      answer: "Le nouveau positionnement et le messaging sont opérationnels en 4 a 6 semaines. L'impact sur les contenus et la perception marché se mesure a partir de 3 mois. Le repositionnement est un investissement structurant dont les effets se cumulent dans le temps.",
    },
    {
      question: "Le product marketing est-il adapté aux PME ou seulement aux grandes entreprises ?",
      answer: "Les PME B2B sont celles qui en bénéficient le plus. Contrairement aux grands groupes qui ont des équipes dédiées, les PME ont besoin d'un positionnement clair et de contenus percutants pour se différencier avec des ressources limitées. C'est exactement ce que le product marketing structure.",
    },
    {
      question: "Quel est le retour sur investissement du product marketing ?",
      answer: "Le ROI se mesure sur trois axes : le taux de conversion (nos clients constatent en moyenne +40%), la durée du cycle de vente (réduite grace a des contenus qui éduquent en amont) et la qualité des leads entrants (le personal branding et le contenu attirent des prospects déja qualifiés).",
    },
    {
      question: "Comment se déroule un accompagnement product marketing avec Vizion ?",
      answer: "Quatre phases : diagnostic de perception (2 semaines), architecture de message (2-3 semaines), production des assets (contenu, landing pages, personal branding), puis mesure et itération mensuelle. Un directeur marketing dédié est votre interlocuteur unique tout au long de l'accompagnement.",
    },
  ],

  pilierTiming: {
    surtitre: "LE BON MOMENT",
    title: "Quand s'intéresser au product marketing ?",
    subtitle: "Certains signaux indiquent qu'il est temps de structurer votre product marketing. Si vous vous reconnaissez dans l'une de ces situations, c'est le moment d'agir.",
    items: [
      {
        icon: "Rocket",
        title: "Vous lancez un nouveau produit ou service",
        description: "Vous avez une offre solide mais pas encore de positionnement clair, de messaging structuré ni de contenus pour la faire connaitre sur votre marché.",
      },
      {
        icon: "Users",
        title: "Vos commerciaux peinent a expliquer votre valeur",
        description: "Chaque commercial raconte une histoire différente. Les prospects ne comprennent pas ce qui vous distingue de vos concurrents.",
      },
      {
        icon: "TrendingDown",
        title: "Votre taux de conversion stagne",
        description: "Le trafic arrive sur votre site mais ne convertit pas. Vos landing pages, vos contenus et votre proposition de valeur ne convainquent pas.",
      },
      {
        icon: "RefreshCw",
        title: "Vous pivotez ou repositionnez votre offre",
        description: "Votre marché évolue, vos cibles changent, ou vous montez en gamme. Votre communication actuelle ne reflète plus votre réalité.",
      },
    ],
  },

  pilierTargets: {
    surtitre: "LES CIBLES",
    title: "A qui s'adresse le product marketing ?",
    subtitle: "Le product marketing concerne toutes les entreprises B2B qui vendent une offre complexe a des décideurs multiples.",
    items: [
      {
        icon: "Building2",
        title: "PME et ETI B2B en croissance",
        description: "Vous avez validé votre product-market fit mais votre communication ne suit pas votre ambition. Le product marketing structure votre montée en puissance.",
      },
      {
        icon: "Code",
        title: "Editeurs SaaS et entreprises tech",
        description: "Votre produit est technique, votre valeur est difficile a vulgariser. Le product marketing traduit vos fonctionnalités en bénéfices business.",
      },
      {
        icon: "Factory",
        title: "Industriels et services B2B",
        description: "Vos cycles de vente sont longs, vos décideurs multiples. Le product marketing aligne votre communication sur chaque profil d'acheteur.",
      },
      {
        icon: "UserCheck",
        title: "Dirigeants et fondateurs",
        description: "Vous êtes le visage de votre entreprise mais manquez de temps pour structurer votre personal branding et votre prise de parole.",
      },
    ],
  },

  relatedServicesTitle: "Faire de votre produit une évidence",
  relatedServicesSubtitle: "Nous avons conçu une gamme de services complémentaires pour structurer votre product marketing de A a Z. Chaque brique peut être activée indépendamment ou combinée dans un accompagnement global.",
  relatedServices: [
    {
      slug: "positionnement-messaging",
      icon: "Target",
      title: "Positionnement et messaging",
      description: "Nous construisons votre positionnement, vos propositions de valeur par persona et votre messaging framework. Le document de référence que toute votre équipe utilise pour parler d'une seule voix.",
      href: "/services/positionnement-messaging",
    },
    {
      slug: "creation-contenu-b2b",
      icon: "FileText",
      title: "Stratégie éditoriale B2B",
      description: "Newsletters, articles de blog, posts LinkedIn. Nous concevons et produisons les contenus récurrents qui positionnent votre expertise et maintiennent votre marque dans la tête de vos prospects.",
      href: "/services/creation-contenu-b2b",
    },
    {
      slug: "livres-blancs-lead-magnets",
      icon: "BookOpen",
      title: "Livres blancs et lead magnets",
      description: "Guides, livres blancs, templates, checklists. Les contenus premium que vos prospects téléchargent en échange de leurs coordonnées. Chaque lead magnet est conçu pour qualifier et faire avancer dans le cycle de vente.",
      href: "/services/livres-blancs-lead-magnets",
    },
    {
      slug: "creation-landing-page",
      icon: "LayoutTemplate",
      title: "Création de landing page",
      description: "Des pages conçues pour un seul objectif : convertir. Structure testée, copywriting orienté problème, formulaire au bon moment. Chaque landing page est calibrée sur un persona et une étape du parcours d'achat.",
      href: "/services/creation-landing-page",
    },
    {
      slug: "adn-marque-branding",
      icon: "Fingerprint",
      title: "ADN de marque et branding",
      description: "Nous définissons votre identité de marque : mission, vision, ton de voix, univers visuel. Le socle qui garantit la cohérence de chaque prise de parole et installe la confiance des votre premier contact.",
      href: "/services/adn-marque-branding",
    },
  ],

  ctaTitle: "Votre valeur mérite d'être comprise au premier regard",
  ctaDescription: "Échangez 30 minutes avec un fondateur. Nous analysons votre positionnement actuel et identifions comment le rendre plus clair et plus différenciant.",
  ctaButtonText: "Travailler votre positionnement",
  ctaButtonLink: "/contact",
};
