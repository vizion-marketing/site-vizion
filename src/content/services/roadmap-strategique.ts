import type { ServiceContent } from "./types";

export const roadmapStrategique: ServiceContent = {
  slug: "roadmap-strategique",
  title: "Roadmap Stratégique",
  icon: "CalendarCheck",
  category: "Stratégie",
  order: 4,

  // SEO
  metaTitle: "Plan Marketing B2B | Obtenez votre feuille de route sur 12 mois",
  metaDescription:
    "Plan marketing B2B structuré sur 6 à 12 mois. Actions priorisées, budget canal par canal, KPIs et alignement marketing-ventes. Devis gratuit.",
  keywords: [
    "plan marketing",
    "plan marketing B2B",
    "plan d'action marketing",
    "feuille de route marketing",
    "roadmap marketing",
    "stratégie marketing B2B",
    "plan marketing PME",
    "plan marketing annuel",
    "plan marketing digital B2B",
    "planification marketing stratégique",
    "budget plan marketing",
    "KPIs plan marketing",
    "alignement marketing-ventes",
    "agence plan marketing B2B",
  ],

  // Hero
  heroTitle: "Plan marketing B2B : donnez une direction claire à vos 12 prochains mois",
  heroSubtitle:
    "Vous avez des idées, des canaux, des outils, mais pas de plan marketing structuré. Chez Vizion, nous construisons votre feuille de route marketing sur 6 à 12 mois : actions priorisées, budget alloué, KPIs définis et jalons trimestriels. Pour que chaque euro investi serve un objectif mesurable.",
  heroBadge: "+40 roadmaps livrées en B2B",
  heroImage: "/images/services/roadmap-strategique/hero.avif",

  // Narrative (Le constat)
  constat: {
    surtitre: "Le problème",
    title:
      "Vous faites du marketing au fil de l'eau, sans vision d'ensemble.",
    paragraphs: [
      "Vos décisions marketing se prennent au fil des opportunités : un sujet qui paraît pertinent, un canal qu'on n'a pas encore testé, une action copiée sur un concurrent. Résultat : des efforts dispersés, un budget difficile à justifier et des objectifs commerciaux qui restent flous pour tout le monde.",
    ],
    statements: [
      {
        headline: "Vous n'avez pas de plan marketing formalisé pour l'année",
        description:
          "Les actions sont décidées au mois le mois, souvent dans l'urgence. Il n'existe pas de document partagé qui définit les priorités, les budgets et les résultats attendus par trimestre. Votre équipe avance sans boussole.",
      },
      {
        headline: "Vos équipes marketing et commerciales ne sont pas alignées",
        description:
          "Le marketing produit des contenus que les commerciaux n'utilisent pas. Les leads générés ne correspondent pas aux attentes du terrain. Il n'y a pas de processus commun pour qualifier, transmettre et suivre les opportunités.",
      },
      {
        headline: "Vous ne savez pas comment répartir votre budget marketing",
        description:
          "SEO, publicité, contenu, événements, outils. Les arbitrages budgétaires sont faits à l'instinct, sans analyse du retour sur investissement par canal. Vous sur-investissez sur certains axes et sous-investissez sur d'autres.",
      },
      {
        headline: "Vous n'avez pas de KPIs partagés pour piloter les résultats",
        description:
          "Chaque service mesure ses propres indicateurs sans cohérence globale. Le marketing compte les leads, les ventes comptent le chiffre d'affaires, la direction regarde la marge. Personne ne parle le même langage.",
      },
    ],
  },

  // Solution sticky
  solutionTitle:
    "Chez Vizion, nous construisons votre plan marketing pour aligner vos actions sur vos objectifs",
  solutionImage: "/images/services/roadmap-strategique/solution.avif",
  solutionItems: [
    {
      title: "Nous partons de vos objectifs commerciaux, pas de vos envies marketing.",
      description:
        "Chiffre d'affaires visé, nombre de clients à acquérir, panier moyen, cycle de vente. La roadmap est construite en remontant depuis vos objectifs de vente pour définir les actions marketing qui y contribuent directement. Le plan sert le business.",
    },
    {
      title: "Nous priorisons chaque action par impact et par faisabilité.",
      description:
        "Toutes les actions ne se valent pas. Nous classons chaque initiative selon son impact estimé sur le pipeline, le budget nécessaire et la capacité de votre équipe à l'exécuter. Les quick wins passent en premier, les projets structurants suivent.",
    },
    {
      title: "Nous définissons un budget réaliste canal par canal.",
      description:
        "Chaque ligne de la roadmap est associée à un budget prévisionnel. SEO, publicité, contenu, outils, événements : vous savez exactement combien investir sur chaque axe et quel retour en attendre à 6 et 12 mois.",
    },
    {
      title: "Nous posons des KPIs clairs et un tableau de bord de pilotage.",
      description:
        "Chaque action est associée à un indicateur mesurable. Nous construisons un tableau de bord partagé entre marketing, ventes et direction pour suivre l'avancement et les résultats en temps réel. Plus de zones grises.",
    },
    {
      title: "Nous planifions des points de pilotage trimestriels.",
      description:
        "La roadmap n'est pas un document figé. Nous intégrons des revues trimestrielles pour ajuster les priorités en fonction des résultats obtenus, des évolutions du marché et des retours du terrain commercial.",
    },
  ],

  // Scroll title
  scrollTitle: {
    hook: "Bref.",
    phrase: "Chez Vizion, on construit\ndes roadmaps marketing...",
    adjectives: ["structurées", "actionnables", "et surtout alignées sur vos ventes"],
    showcaseImages: [],
  },

  // Bento featured cards
  bentoCards: {
    sectionTitle: "Les spécificités de notre roadmap stratégique B2B",
    sectionDescription:
      "Nous ne livrons pas un document PowerPoint. Chaque roadmap est un plan opérationnel complet : objectifs chiffrés, actions priorisées, budget alloué, KPIs définis et jalons de pilotage. Tout est conçu pour être exécuté, pas rangé dans un tiroir.",
    image: {
      src: "/images/services/positionnement-messaging/hero.avif",
      alt: "Feuille de route marketing Vizion",
    },
    technology: {
      title: "Des outils de planification\npour un pilotage en temps réel.",
      description:
        "Nous construisons votre roadmap sur des outils collaboratifs que votre équipe utilise au quotidien. Chaque action est assignée, datée et suivie. Le tableau de bord de pilotage est accessible à tout moment pour que marketing, ventes et direction partagent la même vision.",
      logos: [
        "Notion",
        "Monday",
        "Miro",
        "Google Sheets",
        "HubSpot",
        "Figma",
        "Airtable",
        "Slack",
      ],
    },
    performance: {
      value: 12,
      label: "Mois de visibilité",
      description:
        "Chaque roadmap couvre un horizon de 12 mois avec des jalons trimestriels. Vous savez ce qui doit être fait, quand et par qui, sur toute l'année.",
    },
    noTemplate: {
      title: "Un plan sur mesure, pas une feuille de route copiée-collée",
      description:
        "Chaque roadmap est construite à partir de vos objectifs commerciaux, votre maturité marketing et votre capacité d'exécution. Il n'existe pas deux plans identiques chez Vizion.",
    },
    widgets: {
      title: "Des livrables opérationnels pour chaque niveau de décision",
      description:
        "Direction, marketing, ventes : chaque partie prenante reçoit le niveau de détail adapté à son rôle dans l'exécution du plan.",
      tags: [
        "Plan stratégique",
        "Budget prévisionnel",
        "Tableau de KPIs",
        "Calendrier éditorial",
        "Matrice de priorisation",
      ],
    },
    integrations: {
      title: "Votre roadmap est connectée à vos outils de pilotage",
      description:
        "Le plan ne vit pas dans un fichier isolé. Nous le connectons à vos outils existants pour que le suivi soit automatique et que les données remontent en temps réel dans votre tableau de bord.",
      logos: [
        "HubSpot",
        "Salesforce",
        "Pipedrive",
        "Google Analytics",
        "Notion",
        "Monday",
        "Google Sheets",
        "Slack",
        "Airtable",
      ],
    },
    growth: {
      title: "Un pilotage mensuel pour ajuster le cap en continu",
      description:
        "La roadmap évolue avec vos résultats. Nous proposons un accompagnement mensuel pour analyser les KPIs, ajuster les priorités et garantir que le plan reste aligné sur la réalité du terrain.",
    },
  },

  // Process
  processTitle: "Construire votre plan marketing avec Vizion : comment ça se passe ?",
  processSubtitle:
    "Un processus structuré en 5 étapes pour passer de l'absence de plan à une feuille de route opérationnelle partagée par toute l'entreprise.",
  processSteps: [
    {
      title: "Diagnostic et cadrage des objectifs",
      description:
        "Nous commençons par un atelier de cadrage avec vos équipes dirigeantes, marketing et commerciales. Nous recueillons vos objectifs de chiffre d'affaires, votre historique marketing, vos ressources disponibles et vos contraintes. Si un audit a été réalisé en amont, nous en exploitons les conclusions pour gagner en précision.",
      duration: "2 à 3 jours",
      deliverables: [
        "Compte-rendu de cadrage",
        "Objectifs commerciaux formalisés",
        "Inventaire des ressources",
        "Synthèse de l'existant marketing",
      ],
    },
    {
      title: "Analyse et priorisation des leviers",
      description:
        "Nous analysons vos canaux actuels, votre positionnement, vos contenus et vos outils pour identifier les leviers à activer en priorité. Chaque levier est évalué selon son impact potentiel sur le pipeline, le budget nécessaire et le délai de mise en oeuvre. Les résultats sont consolidés dans une matrice de priorisation.",
      duration: "3 à 5 jours",
      deliverables: [
        "Analyse des leviers d'acquisition",
        "Matrice impact/effort",
        "Benchmark sectoriel",
        "Cartographie des quick wins",
      ],
    },
    {
      title: "Construction de la feuille de route",
      description:
        "Nous construisons la roadmap mois par mois sur un horizon de 6 à 12 mois. Chaque action est datée, budgétée, assignée et associée à un KPI mesurable. Le plan inclut les campagnes, les contenus, les optimisations techniques, les événements et les investissements publicitaires nécessaires.",
      duration: "4 à 5 jours",
      deliverables: [
        "Roadmap complète (6-12 mois)",
        "Budget prévisionnel par canal",
        "Calendrier d'actions mensuel",
        "Tableau de KPIs",
        "Tableau de bord de pilotage",
      ],
    },
    {
      title: "Présentation et validation",
      description:
        "Nous présentons la roadmap à vos équipes lors d'une réunion de restitution structurée. Chaque axe est expliqué, chaque arbitrage budgétaire est justifié. Nous recueillons les retours et ajustons le plan si nécessaire avant de le finaliser pour lancement.",
      duration: "1 à 2 jours",
      deliverables: [
        "Présentation de la roadmap",
        "Session de questions/réponses",
        "Ajustements post-restitution",
        "Version finale validée",
      ],
    },
    {
      title: "Lancement et pilotage",
      description:
        "La roadmap est déployée dans vos outils de pilotage. Nous configurons le tableau de bord de suivi et animons le premier point de pilotage mensuel. L'objectif est de garantir que le plan est compris, adopté et exécuté par toutes les parties prenantes dès le premier mois.",
      duration: "1 semaine + suivi mensuel",
      deliverables: [
        "Déploiement dans les outils",
        "Configuration du tableau de bord",
        "Premier point de pilotage",
        "Guide de suivi pour l'équipe",
        "Revue trimestrielle planifiée",
      ],
    },
  ],

  // Quality guarantees
  qualityGuarantees: {
    portraitImage: "/images/services/battlecards-case-studies/hero.avif",
    surtitre: "Nos engagements",
    sectionTitle:
      "Pourquoi choisir Vizion\npour votre roadmap stratégique ?",
    sectionDescription:
      "Nous ne livrons pas un plan marketing théorique. Nous livrons une feuille de route opérationnelle, chiffrée et pilotable qui aligne votre marketing sur vos objectifs commerciaux concrets.",
    cardSurtitre: "Ce que nous garantissons",
    cardTitle: "Des engagements\ncentrés sur l'exécution",
    cardDescription:
      "Chaque roadmap est construite avec les mêmes standards de rigueur. Pas de plans vagues, des actions précises avec budget et calendrier.",
    guarantees: [
      {
        icon: "Target",
        title: "Un plan aligné sur vos objectifs de chiffre d'affaires",
        description:
          "La roadmap part de vos objectifs commerciaux pour remonter vers les actions marketing nécessaires. Chaque initiative est justifiée par sa contribution au pipeline de vente.",
      },
      {
        icon: "BarChart3",
        title: "Un budget prévisionnel réaliste, canal par canal",
        description:
          "Chaque action est chiffrée. Vous savez combien investir sur chaque axe et quel retour en attendre. Plus d'arbitrages budgétaires à l'aveugle.",
      },
      {
        icon: "CalendarCheck",
        title: "Un calendrier d'exécution avec jalons trimestriels",
        description:
          "Chaque action est datée et séquencée. Les revues trimestrielles permettent d'ajuster le cap sans perdre la vision d'ensemble ni le rythme d'exécution.",
      },
    ],
    featureCard: {
      surtitre: "Notre vraie différence ?",
      title: "Une roadmap faite pour être\nexécutée, pas présentée",
      description:
        "Stratèges marketing et experts commerciaux travaillent ensemble pour que chaque action du plan serve directement vos objectifs de croissance.",
      linkText: "Construire votre roadmap",
      linkHref: "/contact",
    },
  },

  // Testimonials
  testimonialsTitle: "Ils nous ont confié la construction de leur roadmap",
  testimonialsSubtitle:
    "Consultez les retours d'expérience de dirigeants et responsables marketing qui ont fait appel à Vizion pour structurer leur feuille de route marketing B2B.",
  testimonials: [
    {
      quote:
        "Pour la première fois, notre plan marketing est compris par toute l'entreprise.",
      detail:
        "Vizion a construit une roadmap que nos commerciaux, notre direction et notre équipe marketing comprennent et suivent. Les KPIs sont partagés, les priorités sont claires, et le budget est justifié. Nous avons enfin un langage commun pour piloter notre croissance.",
      author: "Directeur général",
      role: "Directeur général",
      company: "Client Vizion",
      photo: "/images/services/roadmap-strategique/testimonials/01.avif",
      rating: 5,
    },
    {
      quote:
        "En 6 mois, le pipeline a progressé de 40% grace à la priorisation des actions.",
      detail:
        "Nous faisions du marketing sans plan. Vizion a structuré nos efforts et identifié les trois leviers à activer en priorité. En concentrant notre budget sur ces axes, nous avons vu les résultats progresser dès le deuxième trimestre.",
      author: "Responsable marketing",
      role: "Responsable marketing",
      company: "Client Vizion",
      photo: "/images/services/roadmap-strategique/testimonials/02.avif",
      rating: 5,
    },
    {
      quote:
        "La roadmap a réconcilié nos équipes marketing et commerciales.",
      detail:
        "Marketing et ventes ne se parlaient plus. La roadmap Vizion a posé un cadre commun : des objectifs partagés, des KPIs alignés et un processus clair pour transmettre et suivre les leads. L'ambiance a changé et les résultats aussi.",
      author: "Directrice commerciale",
      role: "Directrice commerciale",
      company: "Client Vizion",
      photo: "/images/services/roadmap-strategique/testimonials/03.avif",
      rating: 5,
    },
  ],

  // FAQ
  faqTitle: "Des questions sur votre plan marketing ?",
  faqs: [
    {
      question: "Combien coûte une roadmap stratégique marketing ?",
      answer:
        "Une roadmap complète se situe généralement entre 4 000 € et 8 000 € selon le périmètre (nombre de canaux, profondeur de l'analyse, accompagnement post-livraison). Le budget est défini après un premier échange pour cadrer vos objectifs, vos ressources internes et l'horizon de planification souhaité.",
    },
    {
      question: "Quel est le délai pour construire une roadmap ?",
      answer:
        "Comptez 3 à 4 semaines entre le cadrage initial et la présentation de la version finale. Ce délai inclut les ateliers de cadrage, l'analyse des leviers, la construction du plan, la restitution et les ajustements. L'accompagnement mensuel de pilotage commence immédiatement après la validation.",
    },
    {
      question: "Quels livrables recevons-nous avec la roadmap ?",
      answer:
        "Vous recevez la feuille de route complète sur 6 à 12 mois, un budget prévisionnel canal par canal, un calendrier d'actions mensuel, un tableau de KPIs, un tableau de bord de pilotage et un support de présentation pour vos équipes. Chaque livrable est conçu pour être directement exploitable.",
    },
    {
      question: "À qui s'adresse un plan marketing B2B structuré ?",
      answer:
        "Aux PME et ETI B2B qui veulent structurer leur marketing, prioriser leurs investissements et aligner leurs équipes. C'est pertinent si vous démarrez une nouvelle année sans plan formalisé, si vous venez de recruter un responsable marketing ou si vous constatez un décalage entre vos efforts et vos résultats.",
    },
    {
      question: "Faut-il un audit avant de construire son plan marketing ?",
      answer:
        "Ce n'est pas obligatoire, mais c'est recommandé. L'audit fournit un diagnostic factuel qui permet de construire une roadmap plus précise et mieux ciblée. Si un audit récent existe, nous en exploitons les conclusions. Sinon, nous intégrons une phase de diagnostic dans le cadrage de la roadmap.",
    },
    {
      question: "La roadmap inclut-elle l'exécution des actions ?",
      answer:
        "La roadmap se concentre sur la planification et la priorisation. L'exécution peut être confiée à vos équipes internes, à vos prestataires existants ou à Vizion dans le cadre d'un accompagnement complémentaire. Nous proposons un pilotage mensuel pour suivre l'avancement et ajuster les priorités.",
    },
    {
      question: "Quelle est la différence entre un plan marketing et une stratégie marketing ?",
      answer:
        "La stratégie marketing définit le cap : positionnement, cibles prioritaires, proposition de valeur. Le plan marketing traduit cette stratégie en actions concrètes : quels canaux activer, avec quel budget, selon quel calendrier et avec quels indicateurs de succès. Chez Vizion, la roadmap couvre les deux dimensions pour que la vision stratégique se transforme en résultats mesurables.",
    },
  ],

  // Related services
  relatedServicesTitle: "Vous voulez accélérer après la roadmap ?",
  relatedServicesSubtitle:
    "La roadmap donne la direction. Ces services permettent d'exécuter les priorités identifiées.",
  relatedServices: [
    {
      slug: "strategie",
      icon: "Compass",
      title: "Stratégie Marketing B2B",
      description:
        "La roadmap s'inscrit dans un cadre stratégique plus large. Découvrez comment Vizion pilote la transformation marketing et commerciale des entreprises B2B sur le long terme.",
      href: "/services/strategie",
    },
    {
      slug: "audit-marketing",
      icon: "Search",
      title: "Audit Marketing",
      description:
        "Vous n'avez pas encore de diagnostic clair ? L'audit marketing pose les bases factuelles nécessaires pour construire une roadmap précise et ciblée sur vos vrais enjeux.",
      href: "/services/roadmap-strategique",
    },
    {
      slug: "positionnement-messaging",
      icon: "Crosshair",
      title: "Positionnement et Messaging",
      description:
        "La roadmap a identifié un problème de positionnement ? Nous clarifions votre proposition de valeur et architecturons vos messages pour chaque cible et chaque canal.",
      href: "/services/positionnement-messaging",
    },
    {
      slug: "creation-refonte-site-web",
      icon: "Globe",
      title: "Création ou Refonte de Site Web",
      description:
        "Le plan prévoit une refonte de votre site ? Nous concevons des sites web B2B complets, pensés pour convertir vos visiteurs en leads qualifiés à chaque étape du parcours.",
      href: "/services/creation-refonte-site-web",
    },
  ],

  // CTA intermédiaires
  inlineCTAs: {
    afterTestimonials: {
      text: "Vous voulez structurer votre marketing pour les 12 prochains mois ?",
      buttonText: "Construire votre roadmap",
      href: "/services/creation-refonte-site-web",},
    afterProcess: {
      text: "Prêt à aligner vos actions marketing sur vos objectifs de vente ?",
      buttonText: "Lancer votre projet",
      href: "/contact",
    },
  },

  // CTA final
  ctaTitle: "Votre marketing mérite un plan, pas des improvisations",
  ctaDescription:
    "Premier échange sans engagement. Nous cadrons ensemble vos objectifs et le périmètre de votre feuille de route.",
  ctaButtonText: "Construire votre roadmap stratégique",
  ctaButtonLink: "/contact",
};
