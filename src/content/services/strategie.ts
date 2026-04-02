import type { ServiceContent } from "./types";

export const strategieMarketing: ServiceContent = {
  slug: "strategie",
  title: "Stratégie marketing B2B",
  icon: "Compass",
  category: "Stratégie",
  isPilier: true,
  order: 100,

  metaTitle: "Stratégie Marketing B2B | Structurez votre croissance",
  metaDescription:
    "Prenez les bonnes décisions marketing. Audit, roadmap stratégique, direction marketing externalisée. Vizion structure la croissance des entreprises B2B avec un plan actionnable.",
  keywords: [
    "stratégie marketing B2B",
    "audit marketing B2B",
    "plan marketing B2B",
    "direction marketing externalisée",
    "roadmap marketing",
    "conseil stratégie marketing",
    "agence stratégie marketing B2B",
    "feuille de route marketing",
    "pilotage marketing B2B",
    "diagnostic marketing",
    "alignement marketing ventes",
  ],

  heroTitle: "Stratégie Marketing B2B : Prenez les bonnes décisions marketing",
  heroSubtitle:
    "Vous investissez sans savoir ce qui fonctionne. Nous auditons votre marketing, construisons votre feuille de route et pilotons son exécution. Pour que chaque euro investi repose sur un diagnostic, pas sur une intuition.",
  heroBadge: "STRATÉGIE & AUDIT MARKETING B2B",
  heroImage: "/images/piliers/strategie/hero.avif",

  constat: {
    surtitre: "LA STRATÉGIE MARKETING",
    title: "La stratégie marketing B2B : qu'est-ce que c'est et pourquoi c'est le socle de tout ?",
    paragraphs: [
      "Votre équipe lance des actions. Des contenus, des campagnes, des rendez-vous salons. Le budget part, la charge augmente, mais le pipeline ne suit pas. Quand personne ne peut expliquer pourquoi, ce n'est pas un problème d'exécution. C'est un problème de cap.",
      "La stratégie marketing B2B existe pour combler ce vide entre l'ambition commerciale et les actions terrain : diagnostiquer ce qui fonctionne et ce qui bloque, définir une feuille de route priorisée par impact, et piloter l'exécution avec des indicateurs clairs. Elle s'articule autour de trois leviers complémentaires :",
    ],
    statements: [
      {
        icon: "Search",
        headline: "Un diagnostic qui révèle les vrais leviers",
        description: "Identifiez les freins de croissance dans votre tunnel de vente, mesurez l'efficacité réelle de chaque canal et concentrez vos ressources là où l'impact sera maximal.",
        image: "/images/piliers/strategie/diagnostic.avif",
      },
      {
        icon: "Map",
        headline: "Une feuille de route priorisée par impact",
        description: "Structurez vos actions sur 6 à 12 mois avec des jalons trimestriels, un budget par levier et des KPIs mesurables. Chaque décision repose sur des données, pas sur des intuitions.",
        image: "/images/piliers/strategie/feuille-de-route.avif",
      },
      {
        icon: "UserCog",
        headline: "Un pilotage stratégique continu",
        description: "Disposez d'un interlocuteur unique qui coordonne l'exécution, ajuste les priorités en fonction des résultats et rend des comptes chaque mois sur la performance de votre marketing.",
        image: "/images/piliers/strategie/pilotage-strategique.avif",
      },
    ],
  },

  solutionTitle: "Comment Vizion vous accompagne dans votre stratégie marketing ?",
  solutionImage: "/images/piliers/strategie/solution.avif",
  solutionItems: [
    {
      title: "Audit marketing complet",
      description: "Nous analysons votre positionnement, vos canaux, votre tunnel de vente et vos outils. Le diagnostic identifie les freins de croissance et les leviers a plus fort impact pour concentrer vos ressources au bon endroit.",
    },
    {
      title: "Roadmap stratégique 6-12 mois",
      description: "Nous construisons une feuille de route priorisée : actions, budget, KPIs, jalons trimestriels. Chaque recommandation est liée a un objectif commercial mesurable, pour que votre marketing serve la vente.",
    },
    {
      title: "Direction marketing externalisée",
      description: "Nous mettons a votre disposition un directeur marketing senior qui pilote la stratégie au quotidien, coordonne les experts et rend des comptes sur les résultats. Sans les contraintes d'un recrutement.",
    },
    {
      title: "Alignement marketing et ventes",
      description: "Nous rapprochons vos équipes marketing et commerciales autour d'objectifs partagés, de processus communs et d'indicateurs alignés. Pour que chaque lead transmis soit qualifié et chaque retour terrain exploité.",
    },
  ],

  pilierMethodology: {
    surtitre: "NOTRE APPROCHE",
    title: "Comment nous structurons votre stratégie marketing",
    subtitle: "Quatre phases pour passer d'un marketing dispersé a un système structuré qui génère du pipeline. Chaque phase est activable indépendamment selon votre maturité.",
    steps: [
      {
        title: "Audit et diagnostic",
        description: "Nous analysons votre positionnement, vos canaux d'acquisition, votre tunnel de vente, vos outils et vos processus. L'objectif : identifier les freins de croissance et les leviers a plus fort impact. Le livrable est un document actionnable, pas un rapport de 100 pages.",
      },
      {
        title: "Construction de la roadmap",
        description: "Nous priorisons les actions par impact et effort, définissons les budgets par levier, fixons les KPIs et les jalons trimestriels. La feuille de route est validée avec votre direction avant toute exécution.",
      },
      {
        title: "Pilotage et exécution",
        description: "Un directeur marketing dédié coordonne l'exécution au quotidien : briefs aux experts, suivi des livrables, arbitrages budgétaires. Votre interlocuteur unique vous rend des comptes chaque mois sur l'avancement et les résultats.",
      },
      {
        title: "Mesure et ajustement",
        description: "Nous suivons les indicateurs clés chaque mois : leads générés, taux de conversion, pipeline commercial, coût d'acquisition. La stratégie est ajustée en continu en fonction des données terrain et des retours de vos commerciaux.",
      },
    ],
  },

  pilierMetrics: {
    surtitre: "POURQUOI LA STRATÉGIE MARKETING",
    title: "Ce que la stratégie marketing change concrètement",
    subtitle: "Des chiffres issus d'études sectorielles sur l'impact d'une stratégie marketing structurée en B2B.",
    metrics: [
      {
        value: 59,
        suffix: "%",
        label: "des CMOs n'ont pas le budget pour exécuter leur stratégie",
        direction: "down" as const,
        context: "Quand le budget est contraint, chaque euro doit être investi sur les leviers a plus fort impact. Sans diagnostic, les ressources se dispersent. Gartner, 2025.",
        sourceUrl: "https://www.gartner.com/en/newsroom/press-releases/2025-05-12-gartner-2025-cmo-spend-survey-reveals-marketing-budgets-have-flatlined-at-seven-percent-of-overall-company-revenue",
      },
      {
        value: 11,
        suffix: "%",
        label: "de croissance annuelle pour les entreprises B2B avec une stratégie structurée",
        direction: "up" as const,
        context: "Les entreprises B2B dotées d'une stratégie marketing structurée affichent 11% de croissance annuelle, contre moins de 1% pour celles qui n'en ont pas. Forrester, 2025.",
        sourceUrl: "https://www.forrester.com/blogs/what-sets-leading-b2b-marketers-apart/",
      },
      {
        value: 7.7,
        suffix: "%",
        label: "du chiffre d'affaires consacré au marketing en moyenne",
        direction: "down" as const,
        context: "Les budgets marketing stagnent a 7,7% du CA depuis deux ans. Avec des ressources limitées, la priorisation stratégique n'est plus une option. Gartner, 2025.",
        sourceUrl: "https://www.gartner.com/en/newsroom/press-releases/2024-05-13-gartner-cmo-survey-reveals-marketing-budgets-have-dropped-to-seven-point-seven-percent-of-overall-company-revenue-in-2024",
      },
    ],
  },

  processTitle: "",
  processSubtitle: "",
  processSteps: [],

  pilierTiming: {
    surtitre: "LE BON MOMENT",
    title: "Quand investir dans la stratégie marketing ?",
    subtitle: "Certains signaux indiquent qu'il est temps de structurer votre marketing. Si vous vous reconnaissez dans l'une de ces situations, c'est le moment d'agir.",
    items: [
      {
        icon: "AlertTriangle",
        title: "Vous investissez en marketing sans savoir ce qui fonctionne",
        description: "Le budget est dépensé, les actions s'enchainent, mais personne ne peut dire quels canaux génèrent réellement du pipeline. Sans diagnostic, vous multipliez les paris au lieu de concentrer vos ressources.",
      },
      {
        icon: "Users",
        title: "Vous n'avez pas de direction marketing en interne",
        description: "Personne ne porte la vision marketing dans votre entreprise. Les décisions sont prises au cas par cas, sans cohérence ni priorisation. Vos prestataires avancent sans cap.",
      },
      {
        icon: "TrendingDown",
        title: "Votre pipeline commercial stagne malgré vos efforts",
        description: "Vous produisez du contenu, vous êtes présent sur les salons, vous avez un site web. Mais les leads qualifiés n'arrivent pas. Le problème n'est pas l'exécution, c'est l'absence de stratégie.",
      },
      {
        icon: "Rocket",
        title: "Vous préparez un lancement ou une accélération",
        description: "Nouveau produit, nouveau marché, levée de fonds : les enjeux sont trop importants pour improviser. Une feuille de route structurée évite de disperser vos ressources au moment critique.",
      },
      {
        icon: "RefreshCw",
        title: "Vous changez de direction et votre marketing ne suit pas",
        description: "Repositionnement, montée en gamme, internationalisation : votre entreprise évolue mais votre communication reste figée. La stratégie marketing doit être réalignée sur votre nouvelle ambition.",
      },
    ],
  },

  pilierTargets: {
    surtitre: "A QUI S'ADRESSE LA STRATÉGIE MARKETING",
    title: "La stratégie marketing, une discipline pensée pour toutes les entreprises qui veulent que chaque euro investi serve la croissance.",
    subtitle: "Que vous ayez une équipe marketing en place ou que vous partiez de zéro, des que vos enjeux commerciaux dépassent l'intuition, la stratégie marketing vous concerne.",
    highlightWords: ["chaque euro investi serve la croissance"],
    items: [
      {
        icon: "Building2",
        title: "PME et ETI en croissance",
        description: "Votre entreprise grandit mais votre marketing reste artisanal. Vous avez besoin d'une feuille de route structurée et d'un pilotage régulier pour accompagner votre montée en puissance.",
      },
      {
        icon: "Rocket",
        title: "Startups et scale-ups B2B",
        description: "Vous avez trouvé votre product-market fit et devez structurer votre acquisition. La stratégie marketing transforme votre traction initiale en croissance répétable et mesurable.",
      },
      {
        icon: "Code",
        title: "Editeurs SaaS et entreprises tech",
        description: "Votre cycle de vente est long, vos cibles sont techniques et vos concurrents sont nombreux. Une stratégie marketing structurée vous permet de prioriser les bons canaux et les bons messages.",
      },
      {
        icon: "Factory",
        title: "Industriels et fabricants",
        description: "Votre expertise technique est reconnue, mais votre marketing digital reste sous-exploité. Un diagnostic complet révèle les leviers de croissance que vous n'activez pas encore.",
      },
      {
        icon: "Handshake",
        title: "Sociétés de conseil et services B2B",
        description: "Vous vendez de l'expertise immatérielle a des décideurs exigeants. La stratégie marketing structure votre acquisition pour attirer des prospects qualifiés, pas du volume.",
      },
    ],
    featuredIndex: 0,
  },

  testimonialsTitle: "Ce que nos clients en disent",
  testimonialsSubtitle: "Des dirigeants B2B qui ont structuré leur stratégie marketing avec Vizion.",
  testimonials: [
    {
      quote: "Pour la première fois, on sait exactement où investir notre budget marketing.",
      detail: "On faisait un peu de tout sans vision d'ensemble. L'audit a révélé que 60% de notre budget partait sur des canaux qui ne généraient aucun lead qualifié. La roadmap nous a permis de réallouer nos ressources sur ce qui compte.",
      author: "Sophie Martin",
      role: "Directrice Générale",
      company: "ESN régionale",
      rating: 5,
    },
    {
      quote: "On a enfin un directeur marketing sans les contraintes d'un recrutement.",
      detail: "On savait qu'on avait besoin d'une direction marketing, mais recruter un profil senior a temps plein n'était pas réaliste. Vizion nous a apporté cette compétence avec un interlocuteur dédié qui comprend notre marché.",
      author: "Pierre Lefèvre",
      role: "CEO",
      company: "Editeur SaaS industriel",
      rating: 5,
    },
    {
      quote: "La roadmap a aligné toute l'équipe autour d'un plan clair sur 12 mois.",
      detail: "Avant, chaque service avait sa propre vision du marketing. La feuille de route a posé un cadre commun avec des priorités, des échéances et des KPIs que tout le monde comprend. Les commerciaux et le marketing avancent enfin dans la même direction.",
      author: "Caroline Dupont",
      role: "Directrice Commerciale",
      company: "PME industrielle",
      rating: 5,
    },
  ],

  faqTitle: "Questions fréquentes sur la stratégie marketing B2B",
  faqs: [
    {
      question: "La stratégie marketing B2B, c'est quoi concrètement ?",
      answer: "C'est la discipline qui structure vos décisions marketing pour servir vos objectifs commerciaux. Diagnostic de l'existant, priorisation des leviers, feuille de route, pilotage de l'exécution. Ce n'est ni un plan de communication, ni une liste d'actions à cocher. C'est le cadre qui garantit que chaque investissement marketing contribue au pipeline.",
    },
    {
      question: "Quelle différence entre stratégie marketing et exécution marketing ?",
      answer: "L'exécution, c'est produire des contenus, lancer des campagnes, gérer les réseaux sociaux. La stratégie, c'est décider quoi faire, dans quel ordre, avec quel budget et pour quel objectif. L'une sans l'autre produit soit de l'activité sans résultat, soit un plan brillant qui reste dans un tiroir.",
      answerLinks: [
        { text: "lancer des campagnes", href: "/services/campagnes-publicitaires" },
      ],
    },
    {
      question: "Pourquoi commencer par la stratégie avant d'autres actions ?",
      answer: "Si vous n'avez pas diagnostiqué ce qui fonctionne et ce qui bloque, chaque action marketing est un pari. Investir dans du contenu, des campagnes ou un nouveau site sans stratégie revient a traiter les symptômes sans comprendre la maladie. Le diagnostic d'abord, l'exécution ensuite.",
    },
    {
      question: "Combien de temps prend la mise en place d'une stratégie ?",
      answer: "L'audit marketing prend 3 a 4 semaines. La construction de la roadmap, 2 a 3 semaines supplémentaires. La direction marketing externalisée s'installe progressivement sur le premier trimestre. Les premiers résultats mesurables sur le pipeline apparaissent généralement entre 3 et 6 mois selon votre point de départ.",
      answerLinks: [
        { text: "L'audit marketing", href: "/services/audit-marketing" },
        { text: "La construction de la roadmap", href: "/services/roadmap-strategique" },
        { text: "direction marketing externalisée", href: "/services/direction-marketing-externalisee" },
      ],
    },
    {
      question: "C'est réservé aux grandes entreprises ?",
      answer: "Non. Les PME et ETI B2B sont souvent celles qui en ont le plus besoin, justement parce qu'elles n'ont pas d'équipe marketing structurée. Avec des ressources limitées, il est d'autant plus important que chaque action soit priorisée et que chaque euro soit investi sur les bons leviers.",
    },
    {
      question: "Quel retour sur investissement attendre ?",
      answer: "La stratégie marketing agit sur trois leviers : la priorisation de vos investissements (ce qui réduit le gaspillage), l'alignement marketing-ventes (ce qui améliore la conversion) et le pilotage continu (ce qui permet d'ajuster en temps réel). Les résultats varient selon votre marché et votre point de départ, mais l'impact est mesurable dès le premier trimestre.",
    },
    {
      question: "Comment se passe un accompagnement avec Vizion ?",
      answer: "Quatre phases : audit et diagnostic, construction de la roadmap, pilotage et exécution, mesure et ajustement. Un directeur marketing dédié est votre interlocuteur unique tout au long de l'accompagnement. Le rythme et le périmètre s'adaptent a votre situation et a vos enjeux.",
    },
  ],

  relatedServicesTitle: "Découvrez comment Vizion vous accompagne dans votre stratégie marketing",
  relatedServicesSubtitle: "Chaque service peut être activé indépendamment ou combiné dans un accompagnement stratégique global.",
  relatedServices: [
    {
      slug: "audit-marketing",
      icon: "Compass",
      title: "Audit marketing",
      description: "Le point de départ de toute stratégie. Nous analysons vos canaux, votre tunnel de vente et vos outils pour identifier les leviers de croissance prioritaires.",
      href: "/services/audit-marketing",
    },
    {
      slug: "roadmap-strategique",
      icon: "Map",
      title: "Roadmap stratégique",
      description: "La feuille de route qui structure votre marketing sur 6 a 12 mois : actions priorisées, budget par levier, KPIs et jalons trimestriels.",
      href: "/services/roadmap-strategique",
    },
    {
      slug: "direction-marketing-externalisee",
      icon: "UserCog",
      title: "Direction marketing externalisée",
      description: "Un directeur marketing senior dédié qui pilote votre stratégie au quotidien, coordonne les experts et rend des comptes sur les résultats.",
      href: "/services/direction-marketing-externalisee",
    },
  ],

  ctaTitle: "Vous méritez un marketing qui repose sur un diagnostic",
  ctaDescription: "Échangez 30 minutes avec un fondateur. Nous analysons votre situation et identifions vos leviers de croissance prioritaires. Sans engagement.",
  ctaButtonText: "Demander un audit marketing",
  ctaButtonLink: "/contact",
};
