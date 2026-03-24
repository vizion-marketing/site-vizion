import type { ServiceContent } from "./types";

export const strategieMarketing: ServiceContent = {
  slug: "strategie",
  title: "Stratégie marketing B2B",
  icon: "Compass",
  category: "Stratégie",
  isPilier: true,
  order: 100,

  metaTitle: "Stratégie Marketing B2B : audit, roadmap et direction marketing | Vizion",
  metaDescription:
    "Prenez les bonnes décisions marketing. Audit complet, roadmap stratégique sur 6 à 12 mois, direction marketing externalisée. Vizion accompagne les entreprises B2B françaises et européennes.",
  keywords: [
    "stratégie marketing B2B",
    "audit marketing B2B",
    "plan marketing B2B",
    "direction marketing externalisée",
    "roadmap marketing",
    "conseil stratégie marketing",
    "agence stratégie marketing B2B",
  ],

  heroTitle: "Prenez les bonnes décisions marketing",
  heroSubtitle:
    "Vous investissez sans savoir ce qui fonctionne. Nous auditons votre marketing, construisons votre feuille de route et pilotons son exécution. Pour que chaque euro investi repose sur un diagnostic, pas sur une intuition.",
  heroBadge: "STRATÉGIE & AUDIT",
  heroImage: "/images/services/product-marketing.avif",

  constat: {
    surtitre: "LE CONSTAT",
    title: "La plupart des entreprises B2B investissent sans plan",
    paragraphs: [
      "Un article ici, une campagne là, un salon dans deux mois. Les actions marketing s'enchaînent sans cohérence, sans priorisation et sans lien clair avec les objectifs de vente. Le budget est consommé, mais le pipeline ne se remplit pas.",
      "Le problème n'est pas le manque d'actions. C'est l'absence de diagnostic et de feuille de route. Sans une compréhension claire de ce qui fonctionne et de ce qui bloque, chaque investissement est un pari.",
    ],
    statements: [
      {
        headline: "Pas de diagnostic, pas de stratégie",
        description: "Nous auditons votre positionnement, vos canaux et vos processus avant de recommander quoi que ce soit.",
      },
      {
        headline: "Une feuille de route, pas une liste de tâches",
        description: "Chaque action est priorisée par impact, avec un budget et des KPIs définis.",
      },
      {
        headline: "Un directeur marketing dédié",
        description: "Votre interlocuteur unique pilote la stratégie et coordonne l'exécution.",
      },
    ],
  },

  solutionTitle: "Trois leviers pour reprendre le contrôle",
  solutionImage: "/images/services/product-marketing.avif",
  solutionItems: [
    {
      title: "Audit marketing complet",
      description: "Nous analysons votre positionnement, vos canaux, votre tunnel de vente et vos outils. Le diagnostic identifie les freins de croissance et les leviers à plus fort impact.",
    },
    {
      title: "Roadmap stratégique 6-12 mois",
      description: "Une feuille de route priorisée : actions, budget, KPIs, jalons trimestriels. Pour que votre marketing serve un objectif mesurable, pas des intuitions.",
    },
    {
      title: "Direction marketing externalisée",
      description: "Un directeur marketing senior dédié qui pilote votre stratégie au quotidien, coordonne les experts et rend des comptes sur les résultats. Sans les contraintes d'un recrutement.",
    },
  ],

  processTitle: "",
  processSubtitle: "",
  processSteps: [],

  testimonials: [],

  faqTitle: "Questions fréquentes sur la stratégie marketing B2B",
  faqs: [
    {
      question: "Quelle est la différence entre un audit marketing et une roadmap ?",
      answer: "L'audit est le diagnostic : il identifie ce qui fonctionne, ce qui bloque et ce qui manque dans votre marketing actuel. La roadmap est le plan d'action qui en découle : actions priorisées, budget, KPIs et jalons sur 6 à 12 mois. L'un ne va pas sans l'autre.",
    },
    {
      question: "La direction marketing externalisée remplace-t-elle un CMO interne ?",
      answer: "Elle peut remplacer ou compléter. Pour les entreprises qui n'ont pas de direction marketing, nous endossons le rôle complet. Pour celles qui ont une équipe en place, nous intervenons en renfort stratégique sur les sujets que l'équipe interne n'a pas le temps ou l'expertise de traiter.",
    },
    {
      question: "Combien de temps dure un audit marketing ?",
      answer: "Un audit complet prend 3 à 4 semaines : collecte de données, analyse des canaux et du tunnel de vente, benchmark concurrentiel, restitution et recommandations. Le livrable est un document actionnable, pas un rapport de 100 pages que personne ne lit.",
    },
  ],

  relatedServicesTitle: "Les services de ce pilier",
  relatedServicesSubtitle: "Chaque service peut être activé indépendamment ou dans le cadre d'un accompagnement global.",
  relatedServices: [
    {
      slug: "audit-marketing",
      icon: "Compass",
      title: "Audit marketing",
      description: "Identifiez vos leviers de croissance prioritaires avec un diagnostic complet de votre marketing.",
      href: "/services/audit-marketing",
    },
    {
      slug: "roadmap-strategique",
      icon: "Map",
      title: "Roadmap stratégique",
      description: "Structurez votre plan d'action marketing sur 6 à 12 mois avec des KPIs mesurables.",
      href: "/services/roadmap-strategique",
    },
    {
      slug: "direction-marketing-externalisee",
      icon: "UserCog",
      title: "Direction marketing externalisée",
      description: "Un directeur marketing dédié, sans les contraintes d'un recrutement.",
      href: "/services/direction-marketing-externalisee",
    },
  ],

  ctaTitle: "Vous méritez un marketing qui repose sur un diagnostic",
  ctaDescription: "Échangez 30 minutes avec un fondateur. Nous analysons votre situation et identifions vos leviers de croissance prioritaires.",
  ctaButtonText: "Demander un audit marketing",
  ctaButtonLink: "/contact",
};
