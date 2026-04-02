import type { ServiceContent } from "./types";

export const acquisitionB2b: ServiceContent = {
  slug: "growth-marketing",
  title: "Growth Marketing B2B",
  icon: "TrendingUp",
  category: "Growth Marketing",
  isPilier: true,
  order: 102,

  metaTitle: "Growth Marketing B2B : acquisition clients previsible | Vizion",
  metaDescription:
    "Generez du revenu de facon previsible. SEO B2B, campagnes publicitaires, prospection structuree, personal branding. Vizion deploie les canaux d'acquisition adaptes a votre marche.",
  keywords: [
    "growth marketing B2B",
    "acquisition clients B2B",
    "generation de leads B2B",
    "prospection B2B",
    "SEO B2B",
    "campagnes publicitaires B2B",
    "strategie acquisition B2B",
    "pipeline commercial B2B",
    "agence growth marketing",
    "lead generation B2B",
    "canaux acquisition B2B",
  ],

  heroTitle: "Growth marketing : generez du revenu de facon previsible",
  heroSubtitle:
    "Votre expertise est reconnue par vos clients existants, mais invisible pour le reste du marche. Le growth marketing structure vos canaux d'acquisition pour generer un flux regulier de prospects qualifies. SEO, campagnes ciblees, prospection, personal branding : nous deplorons les leviers adaptes a votre marche et votre cycle de vente.",
  heroBadge: "GROWTH MARKETING B2B",
  heroImage: "/images/piliers/growth-marketing/hero.avif",

  constat: {
    surtitre: "LE GROWTH MARKETING",
    title: "Le Growth Marketing : qu'est-ce que c'est et pourquoi c'est indispensable en B2B ?",
    paragraphs: [
      "Vos meilleurs clients viennent de recommandations. Votre reseau fonctionne, le bouche-a-oreille aussi. Le probleme ? Quand le fondateur n'a plus le temps de prospecter ou quand le reseau s'epuise, le pipeline se tarit. Votre croissance repose sur des aleas que vous ne controlez pas.",
      "Le growth marketing est ne pour resoudre cette equation : construire des canaux d'acquisition systematiques qui generent un flux regulier de prospects qualifies, independamment de votre reseau personnel. De la strategie SEO aux campagnes publicitaires ciblees, il active trois canaux selon votre marche et votre cycle de vente :",
    ],
    statements: [
      {
        icon: "Search",
        headline: "Une visibilite organique durable",
        description: "Positionnez votre expertise sur les requetes que vos prospects tapent chaque jour. Attirez un trafic qualifie qui arrive deja convaincu de votre legitimite et reduisez votre dependance aux canaux payants.",
        image: "/images/piliers/growth-marketing/visibilite.avif",
      },
      {
        icon: "Zap",
        headline: "Des campagnes ciblees qui generent du pipeline",
        description: "Activez les canaux publicitaires les plus adaptes a votre marche. Ciblez par fonction, secteur et taille d'entreprise et mesurez chaque euro investi en leads qualifies, pas en impressions.",
        image: "/images/piliers/growth-marketing/publicite.avif",
      },
      {
        icon: "Send",
        headline: "Une prospection structuree et reproductible",
        description: "Engagez vos prospects cibles via des sequences multi-canal personnalisees. Generez des rendez-vous qualifies chaque semaine, avec un process reproductible que votre equipe peut piloter.",
        image: "/images/piliers/growth-marketing/prospection.avif",
      },
    ],
  },

  solutionTitle: "Comment Vizion vous accompagne dans votre strategie d'acquisition ?",
  solutionImage: "/images/piliers/growth-marketing/solution.avif",
  solutionItems: [
    {
      title: "SEO et contenu organique",
      description: "Nous construisons votre visibilite sur les moteurs de recherche avec une strategie de mots-cles B2B, du contenu d'expertise et une optimisation technique continue. Pour que vos prospects vous trouvent avant vos concurrents.",
    },
    {
      title: "Campagnes publicitaires B2B",
      description: "Nous deployons et optimisons vos campagnes LinkedIn Ads, Google Ads et Meta Ads. Ciblage par fonction et secteur, messages alignes sur votre positionnement, reporting transparent sur le cout par lead qualifie.",
    },
    {
      title: "Cold outreach et prospection",
      description: "Nous structurons vos sequences de prospection multi-canal : ciblage precis, messages calibres, automatisation des relances. Pour generer des rendez-vous qualifies chaque semaine sans mobiliser votre equipe.",
    },
    {
      title: "Personal branding et thought leadership",
      description: "Nous transformons vos dirigeants en generateurs de leads via LinkedIn et la prise de parole publique. Pour que vos prospects arrivent convaincus avant le premier appel commercial.",
    },
  ],

  // Methodologie (pilier)
  pilierMethodology: {
    surtitre: "NOTRE APPROCHE",
    title: "Comment nous structurons votre acquisition B2B",
    subtitle: "Quatre phases pour passer d'un pipeline imprevisible a une machine d'acquisition structuree. Chaque phase est activable independamment selon votre maturite et vos priorites.",
    steps: [
      {
        title: "Diagnostic acquisition et marche",
        description: "Nous analysons votre pipeline actuel, vos canaux existants, votre positionnement concurrentiel et le comportement d'achat de vos cibles. L'objectif : identifier les leviers d'acquisition les plus rentables pour votre marche specifique.",
      },
      {
        title: "Architecture des canaux",
        description: "Nous selectionnons et priorisons les canaux adaptes a votre cycle de vente, votre budget et vos ressources. SEO, campagnes payantes, prospection, personal branding : chaque canal est calibre pour maximiser le retour sur investissement.",
      },
      {
        title: "Deploiement et execution",
        description: "Nous deployons chaque canal avec les contenus, les ciblages et les sequences adaptes. Chaque action est tracee, chaque euro investi est mesurable. Votre equipe est formee pour piloter le dispositif en autonomie.",
      },
      {
        title: "Mesure, optimisation et acceleration",
        description: "Nous suivons les indicateurs de performance de chaque canal : cout par lead, taux de conversion, pipeline genere, retour sur investissement. Les budgets sont realloues chaque mois vers les canaux les plus performants.",
      },
    ],
  },

  // Metriques sourcees
  pilierMetrics: {
    surtitre: "POURQUOI LE GROWTH MARKETING",
    title: "Ce que le growth marketing change concretement",
    subtitle: "Des chiffres issus d'etudes sectorielles sur l'impact de l'acquisition structuree en B2B.",
    metrics: [
      {
        value: 95,
        suffix: "%",
        label: "de vos acheteurs potentiels ne sont pas en phase d'achat aujourd'hui",
        direction: "up" as const,
        context: "Seuls 5% de vos cibles sont prets a acheter a un instant donne. Votre strategie d'acquisition doit construire la notoriete aupres des 95% restants pour etre present le jour ou ils passent en phase d'achat. LinkedIn B2B Institute / Ehrenberg-Bass Institute.",
        sourceUrl: "https://business.linkedin.com/marketing-solutions/b2b-institute/b2b-research/trends/95-5-rule",
      },
      {
        value: 17,
        suffix: "%",
        label: "du parcours d'achat B2B est consacre aux echanges avec les fournisseurs",
        direction: "down" as const,
        context: "Vos prospects effectuent 83% de leur parcours d'achat sans vous parler. Votre site, vos contenus et vos campagnes doivent convaincre bien avant le premier rendez-vous commercial. Gartner, B2B Buying Journey, 2024.",
        sourceUrl: "https://www.gartner.com/en/sales/insights/b2b-buying-journey",
      },
      {
        value: 14.6,
        suffix: "%",
        label: "de taux de closing pour les leads issus du SEO, contre 1,7% en outbound",
        direction: "up" as const,
        context: "Les prospects qui vous trouvent via la recherche organique sont deja dans une demarche active. Leur taux de conversion est 8 fois superieur a celui de la prospection classique. HubSpot, State of Marketing, 2024.",
        sourceUrl: "https://www.hubspot.com/marketing-statistics",
      },
    ],
  },

  processTitle: "",
  processSubtitle: "",
  processSteps: [],

  // Timing
  pilierTiming: {
    surtitre: "LE BON MOMENT",
    title: "Quand investir dans le growth marketing ?",
    subtitle: "Certains signaux indiquent qu'il est temps de structurer vos canaux d'acquisition. Si vous vous reconnaissez dans l'une de ces situations, c'est le moment d'agir.",
    items: [
      {
        icon: "Users",
        title: "Vous dependez du reseau et du bouche-a-oreille pour trouver des clients",
        description: "Vos meilleurs clients viennent de recommandations. C'est rassurant, mais pas scalable. Quand le reseau s'epuise, le pipeline s'arrete.",
      },
      {
        icon: "TrendingDown",
        title: "Vous avez des mois creux imprevisibles dans votre pipeline",
        description: "Votre activite commerciale oscille entre periodes de surcharge et periodes creuses. Sans canaux d'acquisition reguliers, votre croissance reste aleatoire.",
      },
      {
        icon: "Rocket",
        title: "Vous lancez une nouvelle offre et devez generer du pipeline rapidement",
        description: "Votre produit ou service est pret, mais vous n'avez pas encore de canal systematique pour toucher vos prospects cibles et generer des rendez-vous.",
      },
      {
        icon: "Target",
        title: "Vous investissez en marketing sans mesurer le retour sur investissement",
        description: "Vous depensez en publicite, en contenu ou en evenements, mais vous ne savez pas quel canal genere reellement du pipeline. Chaque euro doit etre traçable.",
      },
      {
        icon: "RefreshCw",
        title: "Vous souhaitez reduire votre cout d'acquisition client",
        description: "Votre cout par lead est trop eleve ou vous ne le connaissez pas. Structurer vos canaux permet d'identifier les leviers les plus rentables et d'optimiser votre budget.",
      },
    ],
  },

  // Targets
  pilierTargets: {
    surtitre: "A QUI S'ADRESSE LE GROWTH MARKETING",
    title: "Le growth marketing, une discipline pensee pour toutes les entreprises qui veulent generer du revenu de facon previsible.",
    subtitle: "Que vous vendiez un logiciel, un service ou un produit technique, des que votre croissance ne peut plus dependre uniquement du reseau, le growth marketing vous concerne.",
    highlightWords: ["generer du revenu"],
    items: [
      {
        icon: "Rocket",
        title: "Startups et scale-ups B2B",
        description: "Vous avez valide votre produit et devez accelerer l'acquisition. Le growth marketing structure vos premiers canaux pour generer un pipeline reproductible et previsible.",
      },
      {
        icon: "Building2",
        title: "PME et ETI en croissance",
        description: "Votre reseau ne suffit plus a alimenter votre croissance. Le growth marketing diversifie vos sources de prospects et reduit votre dependance au bouche-a-oreille.",
      },
      {
        icon: "Code",
        title: "Editeurs SaaS et entreprises tech",
        description: "Votre marche est concurrentiel et vos prospects comparent en ligne avant de vous contacter. Le growth marketing vous rend visible au bon moment, sur les bons canaux.",
      },
      {
        icon: "Factory",
        title: "Industriels et fabricants",
        description: "Vos cycles de vente sont longs et vos cibles precises. Le growth marketing cible les bons decideurs avec les bons messages, sur les canaux ou ils sont reellement actifs.",
      },
      {
        icon: "Handshake",
        title: "Societes de conseil et services B2B",
        description: "Vous vendez de l'expertise immatérielle a des decideurs exigeants. Le growth marketing genere de la visibilite et des leads qualifies grace au contenu, au SEO et a la prospection ciblee.",
      },
    ],
    featuredIndex: 1,
  },

  testimonialsTitle: "Ce que nos clients en disent",
  testimonialsSubtitle: "Des dirigeants B2B qui ont structure leur acquisition avec Vizion.",
  testimonials: [
    {
      quote: "En 3 mois, le SEO est devenu notre premier canal de generation de leads.",
      detail: "On dependait a 100% du reseau pour trouver des clients. Vizion a construit notre strategie SEO et nos premiers contenus. Aujourd'hui, les prospects nous contactent directement via le site, deja informes sur notre offre.",
      author: "Sophie Bertrand",
      role: "CEO",
      company: "Editeur SaaS logistique",
      rating: 5,
    },
    {
      quote: "Notre cout par lead a ete divise par deux en optimisant les campagnes.",
      detail: "On investissait en publicite LinkedIn sans vraiment mesurer les resultats. Vizion a restructure nos campagnes, affine le ciblage et installe un reporting clair. On sait exactement combien coute chaque lead qualifie.",
      author: "Antoine Mercier",
      role: "Directeur Commercial",
      company: "PME services informatiques",
      rating: 5,
    },
    {
      quote: "La prospection structuree a rempli notre pipeline en 6 semaines.",
      detail: "On avait essaye la prospection par email sans methode. Vizion a construit les sequences, personnalise les messages et automatise les relances. Les rendez-vous qualifies sont arrives des la troisieme semaine.",
      author: "Caroline Duval",
      role: "Head of Growth",
      company: "Scale-up B2B industrielle",
      rating: 5,
    },
  ],

  faqTitle: "Questions frequentes sur le growth marketing B2B",
  faqs: [
    {
      question: "Le growth marketing, c'est quoi concretement ?",
      answer: "C'est la discipline qui structure vos canaux d'acquisition pour generer un flux regulier de prospects qualifies. SEO, campagnes publicitaires, prospection multi-canal, personal branding : le growth marketing active les leviers adaptes a votre marche, votre budget et votre cycle de vente. Ce n'est ni du marketing de marque, ni de la communication corporate.",
    },
    {
      question: "Quelle difference avec le marketing digital classique ?",
      answer: "Le marketing digital produit du contenu, gere des reseaux sociaux et lance des campagnes. Le growth marketing part de vos objectifs de pipeline et de revenu, puis selectionne et optimise les canaux qui y contribuent reellement. L'un execute, l'autre pilote l'acquisition avec un objectif de rentabilite mesurable.",
    },
    {
      question: "Pourquoi structurer l'acquisition avant d'investir en publicite ?",
      answer: "Sans strategie d'acquisition claire, chaque euro investi en publicite risque de toucher les mauvaises cibles avec le mauvais message. Structurer vos canaux en amont permet de definir vos cibles prioritaires, vos messages par persona et vos indicateurs de performance. Vous depensez moins pour convertir plus.",
      answerLinks: [
        { text: "investir en publicite", href: "/services/campagnes-publicitaires" },
      ],
    },
    {
      question: "Combien de temps pour voir des resultats concrets ?",
      answer: "La prospection genere des rendez-vous des les premieres semaines. Les campagnes publicitaires produisent des leads a partir du premier mois, avec une optimisation progressive. Le SEO est un investissement a 3 a 6 mois minimum, mais dont les effets se cumulent dans le temps. Nous cadrons des indicateurs des le depart pour mesurer chaque canal.",
      answerLinks: [
        { text: "Le SEO est un investissement", href: "/services/seo-contenu-organique" },
      ],
    },
    {
      question: "C'est reserve aux entreprises avec un gros budget marketing ?",
      answer: "Non. Les PME et ETI B2B sont souvent celles qui en ont le plus besoin, justement parce qu'elles n'ont pas d'equipe marketing structuree. Avec un budget limite, il est d'autant plus important de concentrer les efforts sur les canaux les plus rentables plutot que de disperser les investissements.",
    },
    {
      question: "Quel retour sur investissement attendre du growth marketing ?",
      answer: "Le growth marketing agit sur trois leviers : le volume de leads qualifies generes chaque mois, le cout d'acquisition par lead et par client, et la previsibilite du pipeline. Les resultats varient selon votre marche, votre cycle de vente et votre point de depart. Nous mesurons chaque canal et reallouons les budgets vers les plus performants.",
    },
    {
      question: "Comment se passe un accompagnement growth marketing avec Vizion ?",
      answer: "Quatre phases : diagnostic de votre acquisition actuelle, architecture des canaux prioritaires, deploiement et execution, puis mesure et optimisation continue. Un directeur marketing dedie est votre interlocuteur unique. Le rythme et le perimetre s'adaptent a votre situation et a vos ressources.",
      answerLinks: [
        { text: "Un directeur marketing dedie", href: "/services/direction-marketing-externalisee" },
      ],
    },
  ],

  relatedServicesTitle: "Decouvrez comment Vizion vous accompagne dans votre strategie d'acquisition",
  relatedServicesSubtitle: "Chaque canal peut etre active independamment ou combine dans un accompagnement growth marketing global.",
  relatedServices: [
    {
      slug: "seo-contenu-organique",
      icon: "Search",
      title: "SEO et contenu organique",
      description: "Devenez la reference sur les moteurs de recherche avec une strategie SEO B2B durable qui attire des prospects deja convaincus.",
      href: "/services/seo-contenu-organique",
    },
    {
      slug: "campagnes-publicitaires",
      icon: "Zap",
      title: "Campagnes publicitaires",
      description: "Generez des leads qualifies avec un ROI mesurable via LinkedIn Ads, Google Ads et Meta Ads, avec un ciblage par fonction et secteur.",
      href: "/services/campagnes-publicitaires",
    },
    {
      slug: "cold-outreach-prospection",
      icon: "Send",
      title: "Cold outreach et prospection",
      description: "Engagez vos prospects cibles avec des sequences multi-canal personnalisees et automatisees. Des rendez-vous qualifies chaque semaine.",
      href: "/services/cold-outreach-prospection",
    },
    {
      slug: "strategie-personal-branding",
      icon: "User",
      title: "Strategie de personal branding",
      description: "Faites de vos dirigeants des generateurs de leads via LinkedIn et la prise de parole publique pour attirer des decideurs qualifies.",
      href: "/services/strategie-personal-branding",
    },
  ],

  ctaTitle: "Votre pipeline ne devrait pas dependre du hasard",
  ctaDescription: "Echangez 30 minutes avec un fondateur. Nous identifions les canaux d'acquisition les plus adaptes a votre marche, votre cycle de vente et votre budget.",
  ctaButtonText: "Structurer votre acquisition",
  ctaButtonLink: "/contact",
};
