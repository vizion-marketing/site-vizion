import type { ServiceContent } from "./types";

export const digitalisation: ServiceContent = {
  slug: "transformation-digitale",
  title: "Transformation Digitale B2B",
  icon: "Monitor",
  category: "Transformation Digitale",
  isPilier: true,
  order: 104,

  metaTitle: "Transformation Digitale B2B | Site web, CRM et IA pour PME",
  metaDescription:
    "Digitalisez votre entreprise B2B avec les bons outils. Site web performant, CRM structuré, applications IA sur mesure. Vizion déploie les solutions qui accélèrent votre activité.",
  keywords: [
    "transformation digitale B2B",
    "digitalisation entreprise B2B",
    "site web B2B",
    "déploiement CRM B2B",
    "applications IA B2B",
    "outils digitaux entreprise",
    "CRM B2B PME",
    "refonte site web B2B",
    "automatisation B2B",
    "digitalisation PME",
    "modernisation outils B2B",
    "agence transformation digitale",
  ],

  heroTitle: "Transformation digitale : déployez les outils qui servent vraiment votre croissance",
  heroSubtitle:
    "Vos outils sont sous-exploités et vos processus restent manuels. La transformation digitale ne se résume pas a empiler des logiciels. Nous déployons les solutions qui accélèrent votre activité : un site web qui convertit, un CRM structuré autour de votre cycle de vente, des applications IA qui libèrent du temps sur les taches a faible valeur.",
  heroBadge: "TRANSFORMATION DIGITALE B2B",
  heroImage: "/images/services/deploiement-crm/hero.avif",

  constat: {
    surtitre: "LA TRANSFORMATION DIGITALE",
    title: "La transformation digitale : qu'est-ce que c'est et pourquoi elle échoue si souvent ?",
    paragraphs: [
      "Vous avez un site web. Un CRM. Peut-être même quelques automatisations. Pourtant, vos équipes passent encore des heures sur des taches manuelles, votre CRM ressemble a un tableur glorifié et votre site ne génère aucun lead. Les outils sont la, mais ils ne produisent rien.",
      "La transformation digitale, ce n'est pas acheter des licences logicielles. C'est repenser vos processus commerciaux et marketing pour que chaque outil serve un objectif mesurable : générer des leads, raccourcir le cycle de vente, libérer du temps. Cette discipline repose sur trois piliers :",
    ],
    statements: [
      {
        icon: "Globe",
        headline: "Un site web conçu comme un outil commercial",
        description: "Deployez un site architecturé pour le parcours acheteur B2B, avec un copywriting orienté problème, un SEO technique intégré et des performances optimisées pour la conversion.",
      },
      {
        icon: "Settings",
        headline: "Un CRM structuré autour de votre cycle de vente",
        description: "Configurez votre pipeline commercial, vos automatisations et vos reportings pour que chaque donnée soit exploitable et que vos équipes adoptent l'outil au quotidien.",
      },
      {
        icon: "Sparkles",
        headline: "Des applications IA au service de votre productivité",
        description: "Déployez l'intelligence artificielle la ou elle a un impact mesurable : qualification automatisée des leads, production de contenu accélérée, scoring de prospects.",
      },
    ],
  },

  solutionTitle: "Comment Vizion vous accompagne dans votre transformation digitale ?",
  solutionImage: "/images/services/site-web/solution.avif",
  solutionItems: [
    {
      title: "Création ou refonte de site web",
      description: "Nous concevons des sites B2B pensés pour la conversion : architecture claire, copywriting orienté problème, SEO technique intégré, performances optimisées. Pas une vitrine, un outil commercial qui génère des leads.",
    },
    {
      title: "Déploiement et structuration CRM",
      description: "Nous configurons HubSpot, Pipedrive ou Salesforce autour de votre cycle de vente. Pipeline commercial, automatisations, reporting, formation des équipes : nous structurons tout pour que l'outil soit adopté.",
    },
    {
      title: "Applications IA sur mesure",
      description: "Nous développons des outils métier propulsés par l'intelligence artificielle. Qualification automatisée, scoring de prospects, production de contenu accélérée. L'IA au service de votre productivité, pas de la mode.",
    },
    {
      title: "Audit et optimisation de l'existant",
      description: "Nous auditons vos outils actuels pour identifier ce qui freine votre croissance. Performances web, adoption CRM, processus manuels : nous priorisons les chantiers a fort impact avant toute nouvelle dépense.",
    },
  ],

  pilierMethodology: {
    surtitre: "NOTRE APPROCHE",
    title: "Comment nous structurons votre transformation digitale",
    subtitle: "Quatre phases pour passer d'outils sous-exploités a un écosystème digital qui sert votre croissance. Chaque phase est activable indépendamment selon votre maturité.",
    steps: [
      {
        title: "Audit de maturité digitale",
        description: "Nous analysons votre écosystème actuel : site web, CRM, outils marketing, processus commerciaux. L'objectif : mesurer l'écart entre vos outils et vos objectifs business, et identifier les chantiers prioritaires.",
      },
      {
        title: "Feuille de route et priorisation",
        description: "Nous construisons un plan d'action séquencé sur 6 a 12 mois. Chaque chantier est priorisé par impact business et effort de déploiement. Pas de big bang, une progression mesurable.",
      },
      {
        title: "Déploiement et intégration",
        description: "Nous déployons les solutions retenues : site web, CRM, automatisations, applications IA. Chaque outil est configuré, intégré a votre stack existante et documenté pour vos équipes.",
      },
      {
        title: "Formation, adoption et itération",
        description: "Nous formons vos équipes, mesurons l'adoption et ajustons les configurations. Un outil non utilisé est un outil inutile. Nous suivons les indicateurs chaque mois et optimisons en continu.",
      },
    ],
  },

  pilierMetrics: {
    surtitre: "POURQUOI LA TRANSFORMATION DIGITALE",
    title: "Ce que la transformation digitale change concrètement",
    subtitle: "Des chiffres issus d'études sectorielles sur l'impact de la digitalisation des entreprises B2B.",
    metrics: [
      {
        value: 48,
        suffix: "%",
        label: "des initiatives digitales atteignent leurs objectifs business",
        direction: "down" as const,
        context: "Plus de la moitié des projets digitaux échouent a produire les résultats attendus. Le problème n'est pas la technologie, c'est la méthode de déploiement. Gartner, 2024.",
        sourceUrl: "https://www.gartner.com/en/newsroom/press-releases/2024-10-22-gartner-survey-reveals-that-only-48-percent-of-digital-initiatives-meet-or-exceed-their-business-outcome-targets",
      },
      {
        value: 80,
        suffix: "%",
        label: "des interactions B2B se font via des canaux digitaux",
        direction: "up" as const,
        context: "Vos acheteurs recherchent, comparent et décident en ligne. Votre site, votre CRM et vos contenus doivent être a la hauteur de cette réalité. Gartner, 2025.",
        sourceUrl: "https://www.gartner.com/en/newsroom/press-releases/2020-09-15-gartner-says-80--of-b2b-sales-interactions-between-su",
      },
      {
        value: 31,
        suffix: "%",
        label: "du potentiel de revenus est réellement capturé par les entreprises en transformation",
        direction: "down" as const,
        context: "89% des entreprises ont lancé une transformation digitale, mais elles ne captent qu'un tiers de la valeur attendue. L'exécution fait toute la différence. McKinsey, 2024.",
        sourceUrl: "https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-top-trends-in-tech",
      },
    ],
  },

  processTitle: "",
  processSubtitle: "",
  processSteps: [],

  pilierTiming: {
    surtitre: "LE BON MOMENT",
    title: "Quand investir dans la transformation digitale ?",
    subtitle: "Certains signaux indiquent qu'il est temps de structurer votre écosystème digital. Si vous vous reconnaissez dans l'une de ces situations, c'est le moment d'agir.",
    items: [
      {
        icon: "Globe",
        title: "Vous avez un site web qui ne génère aucun lead",
        description: "Votre site existe depuis des années mais il ne convertit pas. Les visiteurs arrivent, parcourent quelques pages et repartent. Le problème n'est pas le trafic, c'est l'architecture et le message.",
      },
      {
        icon: "Settings",
        title: "Vous avez un CRM que personne n'utilise vraiment",
        description: "L'outil a été installé mais les données sont incomplètes, le pipeline n'est pas structuré et vos commerciaux continuent de travailler avec des fichiers Excel a côté.",
      },
      {
        icon: "Clock",
        title: "Vous perdez du temps sur des processus manuels",
        description: "Saisie de données en double, relances oubliées, reporting fait a la main. Vos équipes passent des heures sur des taches que l'automatisation pourrait éliminer.",
      },
      {
        icon: "TrendingDown",
        title: "Vous investissez dans des outils sans mesurer le retour",
        description: "Vous payez des licences logicielles chaque mois sans savoir ce qu'elles rapportent. Vos outils ne sont pas connectés entre eux et les données restent cloisonnées.",
      },
      {
        icon: "Rocket",
        title: "Vous préparez une phase de croissance ou de levée de fonds",
        description: "Votre entreprise entre dans une nouvelle phase et vos outils actuels ne suivront pas. Vous avez besoin d'un socle digital solide pour structurer votre montée en puissance.",
      },
    ],
  },

  pilierTargets: {
    surtitre: "A QUI S'ADRESSE LA TRANSFORMATION DIGITALE",
    title: "La transformation digitale, une discipline pensée pour toutes les entreprises qui veulent structurer leur croissance.",
    subtitle: "Que vous lanciez votre premier site ou que vous cherchiez a connecter vos outils existants, des que votre activité repose sur un cycle de vente complexe, la transformation digitale vous concerne.",
    highlightWords: ["structurer leur croissance"],
    items: [
      {
        icon: "Building2",
        title: "PME et ETI en croissance",
        description: "Votre activité se développe mais vos outils n'ont pas suivi. La transformation digitale structure votre écosystème pour soutenir la montée en charge sans multiplier les ressources.",
      },
      {
        icon: "Rocket",
        title: "Startups et scale-ups B2B",
        description: "Vous avez trouvé votre marché et devez passer a l'échelle. La transformation digitale pose les fondations techniques et commerciales pour une croissance répétable.",
      },
      {
        icon: "Code",
        title: "Editeurs SaaS et entreprises tech",
        description: "Votre produit est digital, mais vos processus marketing et commerciaux ne le sont pas toujours. La transformation digitale aligne votre stack interne sur votre ambition.",
      },
      {
        icon: "Factory",
        title: "Industriels et fabricants",
        description: "Votre expertise métier est reconnue, mais votre présence digitale ne reflète pas votre valeur. La transformation digitale modernise vos outils de prospection et de vente.",
      },
      {
        icon: "Handshake",
        title: "Sociétés de conseil et services B2B",
        description: "Vous vendez de l'expertise immatérielle. La transformation digitale rend votre valeur visible en ligne et structure votre acquisition de prospects qualifiés.",
      },
    ],
    featuredIndex: 0,
  },

  testimonialsTitle: "Ce que nos clients en disent",
  testimonialsSubtitle: "Des dirigeants B2B qui ont structuré leur transformation digitale avec Vizion.",
  testimonials: [
    {
      quote: "Notre site génère aujourd'hui 40% de nos leads entrants, contre zéro avant la refonte.",
      detail: "On avait un site vitrine qui ne servait a rien commercialement. Vizion a repensé l'architecture, le copywriting et le parcours utilisateur. En 3 mois, le site est devenu notre premier canal d'acquisition.",
      author: "Sébastien Morel",
      role: "Directeur Général",
      company: "ETI industrielle",
      rating: 5,
    },
    {
      quote: "Le CRM est enfin adopté par toute l'équipe commerciale.",
      detail: "On avait essayé deux fois de déployer un CRM, sans succès. Vizion a commencé par comprendre notre cycle de vente avant de configurer l'outil. Aujourd'hui, les commerciaux ne pourraient plus s'en passer.",
      author: "Claire Dumont",
      role: "Directrice Commerciale",
      company: "Editeur SaaS B2B",
      rating: 5,
    },
    {
      quote: "L'IA nous fait gagner 10 heures par semaine sur la qualification des leads.",
      detail: "Vizion a développé un outil de scoring automatisé qui trie nos leads entrants. Les commerciaux se concentrent sur les prospects les plus qualifiés au lieu de passer des heures a trier des formulaires.",
      author: "Thomas Laurent",
      role: "Head of Sales",
      company: "Scale-up B2B",
      rating: 5,
    },
  ],

  faqTitle: "Questions fréquentes sur la transformation digitale B2B",
  faqs: [
    {
      question: "La transformation digitale, c'est quoi concrètement ?",
      answer: "C'est la démarche qui consiste a repenser vos processus commerciaux et marketing en s'appuyant sur les bons outils digitaux. Site web, CRM, automatisations, IA : chaque brique est choisie et configurée pour servir un objectif business mesurable. Ce n'est pas une migration technique, c'est un projet stratégique.",
    },
    {
      question: "Quelle différence entre transformation digitale et simple digitalisation ?",
      answer: "La digitalisation consiste a passer un processus existant au format numérique (scanner un document, envoyer un email au lieu d'un courrier). La transformation digitale repense le processus lui-même pour tirer parti des outils disponibles. L'un remplace un support, l'autre change la façon de travailler.",
    },
    {
      question: "Pourquoi commencer par la transformation digitale avant d'autres actions marketing ?",
      answer: "Si votre site ne convertit pas, si votre CRM est vide et si vos processus sont manuels, chaque euro dépensé en marketing sera sous-exploité. La transformation digitale pose le socle technique qui permet a vos campagnes, contenus et actions commerciales de produire des résultats.",
      answerLinks: [
        { text: "chaque euro dépensé en marketing", href: "/services/audit-marketing" },
      ],
    },
    {
      question: "Combien de temps prend une transformation digitale ?",
      answer: "Cela dépend du périmètre. Un chantier ciblé (refonte de site ou déploiement CRM) prend 6 a 12 semaines. Une transformation complète (site, CRM, automatisations, IA) s'étale sur 4 a 8 mois, avec des résultats progressifs a chaque étape. Nous livrons par phases pour que vous mesuriez l'impact rapidement.",
      answerLinks: [
        { text: "refonte de site", href: "/services/creation-refonte-site-web" },
        { text: "déploiement CRM", href: "/services/deploiement-crm" },
      ],
    },
    {
      question: "C'est réservé aux grandes entreprises ?",
      answer: "Non. Les PME et ETI sont souvent celles qui en ont le plus besoin, justement parce qu'elles n'ont pas d'équipe technique dédiée. La transformation digitale permet de structurer un écosystème performant sans recruter une armée de développeurs. Nos accompagnements sont calibrés pour des entreprises de 10 a 250 collaborateurs.",
    },
    {
      question: "Quel retour sur investissement attendre ?",
      answer: "La transformation digitale agit sur trois leviers : la génération de leads (via un site qui convertit), l'efficacité commerciale (via un CRM structuré) et la productivité des équipes (via l'automatisation). Les résultats varient selon votre point de départ, mais les premiers gains sont généralement visibles dans les 3 mois suivant le déploiement.",
    },
    {
      question: "Comment se passe un accompagnement avec Vizion ?",
      answer: "Quatre phases : audit de maturité digitale, feuille de route priorisée, déploiement et intégration, puis formation et suivi. Un directeur marketing dédié est votre interlocuteur unique. Le rythme et le périmètre s'adaptent a votre situation et a vos ressources internes.",
    },
  ],

  relatedServicesTitle: "Découvrez comment Vizion vous accompagne dans votre transformation digitale",
  relatedServicesSubtitle: "Chaque solution peut être déployée indépendamment ou dans le cadre d'une transformation digitale complète.",
  relatedServices: [
    {
      slug: "creation-refonte-site-web",
      icon: "Globe",
      title: "Création ou refonte de site web",
      description: "Un site B2B architecturé pour la conversion : structure pensée pour le parcours acheteur, copywriting orienté problème, SEO intégré.",
      href: "/services/creation-refonte-site-web",
    },
    {
      slug: "deploiement-crm",
      icon: "Settings",
      title: "Déploiement de CRM",
      description: "Un CRM configuré autour de votre cycle de vente, avec pipeline structuré, automatisations et formation pour garantir l'adoption.",
      href: "/services/deploiement-crm",
    },
    {
      slug: "applications-ia",
      icon: "Sparkles",
      title: "Applications IA",
      description: "Des outils métier propulsés par l'intelligence artificielle pour qualifier, scorer et produire plus vite.",
      href: "/services/applications-ia",
    },
    {
      slug: "audit-site-web",
      icon: "Search",
      title: "Audit de site web",
      description: "Diagnostic complet de votre site : performances, SEO technique, taux de conversion, parcours utilisateur.",
      href: "/services/audit-site-web",
    },
  ],

  ctaTitle: "Vos outils devraient accélérer votre croissance, pas la freiner",
  ctaDescription: "Échangez 30 minutes avec un fondateur. Nous identifions les solutions digitales les plus adaptées a votre situation, sans engagement.",
  ctaButtonText: "Parler transformation digitale",
  ctaButtonLink: "/contact",
};
