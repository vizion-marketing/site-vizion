import type { ServiceContent } from "./types";

export const salesEnablement: ServiceContent = {
  slug: "sales-enablement",
  title: "Sales enablement B2B",
  icon: "Handshake",
  category: "Pilier",
  order: 103,

  metaTitle: "Sales Enablement B2B : armez vos commerciaux pour closer | Vizion",
  metaDescription:
    "Transformez votre cycle de vente en processus reproductible. Pitch decks, battlecards, lead nurturing, workflows automatisés. Vizion crée les outils qui accélèrent chaque étape du closing.",
  keywords: [
    "sales enablement B2B",
    "aide à la vente B2B",
    "outils commerciaux B2B",
    "pitch deck B2B",
    "battlecard concurrentielle",
    "lead nurturing B2B",
    "cycle de vente B2B",
    "closing B2B",
  ],

  heroTitle: "Armez vos commerciaux pour closer",
  heroSubtitle:
    "Chaque commercial improvise son discours, les objections ne sont pas anticipées, les relances dépendent de la mémoire de chacun. Nous créons les outils qui transforment votre cycle de vente en processus reproductible.",
  heroBadge: "SALES ENABLEMENT",

  constat: {
    surtitre: "LE CONSTAT",
    title: "Vos commerciaux avancent sans les bons outils",
    paragraphs: [
      "La même présentation pour tous les interlocuteurs, du DSI au DAF. Les objections du concurrent traitées au cas par cas. Les relances qui tombent dans l'oubli. Le cycle de vente s'allonge, les opportunités se perdent.",
      "Le problème n'est pas vos commerciaux. C'est l'absence d'outils structurés et alignés sur votre positionnement. Sans présentations par profil, sans fiches concurrentielles, sans séquences de relance automatisées, chaque vente est une improvisation.",
    ],
    statements: [
      {
        headline: "Des outils alignés sur le positionnement",
        description: "Chaque support commercial porte le même message, du premier contact à la signature.",
      },
      {
        headline: "Des réponses aux objections formalisées",
        description: "Battle cards, guides d'appel, FAQ internes : vos équipes ne sont plus jamais prises au dépourvu.",
      },
      {
        headline: "Des séquences automatisées",
        description: "Le nurturing et les relances fonctionnent en continu, sans dépendre de la mémoire de chacun.",
      },
    ],
  },

  solutionTitle: "Quatre leviers pour accélérer le closing",
  solutionImage: "/images/services/pitch-decks-argumentaires/hero.avif",
  solutionItems: [
    {
      title: "Pitch decks et argumentaires",
      description: "Des présentations par profil décideur, avec une structure narrative qui convainc. Arguments alignés sur le positionnement, réponses aux objections intégrées.",
    },
    {
      title: "Battlecards et case studies",
      description: "Fiches concurrentielles détaillées et études de cas structurées. Vos commerciaux savent exactement comment se différencier face à chaque concurrent.",
    },
    {
      title: "Lead nurturing automatisé",
      description: "Séquences email et LinkedIn qui maintiennent le contact avec vos prospects sur des cycles de 3 à 18 mois. Personnalisation à l'échelle, scoring intégré.",
    },
    {
      title: "Workflows commerciaux",
      description: "Automatisation des processus de relance, de qualification et de suivi. Vos équipes se concentrent sur la négociation, pas sur l'administratif.",
    },
  ],

  processTitle: "",
  processSubtitle: "",
  processSteps: [],

  testimonials: [],

  faqTitle: "Questions fréquentes sur le sales enablement B2B",
  faqs: [
    {
      question: "Qu'est-ce que le sales enablement exactement ?",
      answer: "Le sales enablement consiste à fournir à vos équipes commerciales les outils, contenus et processus dont ils ont besoin pour vendre plus efficacement. Présentations, fiches concurrentielles, séquences de relance, guides d'appel : tout ce qui transforme votre cycle de vente en processus reproductible au lieu d'une improvisation.",
    },
    {
      question: "Par où commencer en sales enablement ?",
      answer: "Commencez par les pitch decks et les battlecards : ce sont les outils que vos commerciaux utilisent à chaque rendez-vous. Ensuite, structurez les séquences de nurturing pour les prospects qui ne sont pas encore prêts à acheter. Les workflows d'automatisation viennent en dernier, une fois que les contenus et les processus sont en place.",
    },
    {
      question: "Le sales enablement fonctionne-t-il pour les cycles de vente longs ?",
      answer: "C'est justement sur les cycles longs (3 à 18 mois) que le sales enablement a le plus d'impact. Plus le cycle est long, plus il y a d'étapes où le prospect peut décrocher. Les séquences de nurturing, les contenus par étape et les relances automatisées maintiennent le contact et accélèrent la progression vers la signature.",
    },
  ],

  relatedServicesTitle: "Les services de ce pilier",
  relatedServicesSubtitle: "Chaque outil peut être créé indépendamment ou dans le cadre d'un arsenal commercial complet.",
  relatedServices: [
    {
      slug: "pitch-decks-argumentaires",
      icon: "Presentation",
      title: "Pitch decks et argumentaires",
      description: "Armez vos commerciaux avec des présentations qui convainquent dès le premier slide.",
      href: "/services/pitch-decks-argumentaires",
    },
    {
      slug: "battlecards-case-studies",
      icon: "Swords",
      title: "Battlecards et case studies",
      description: "Donnez à vos équipes de quoi convaincre face à chaque concurrent.",
      href: "/services/battlecards-case-studies",
    },
    {
      slug: "lead-nurturing",
      icon: "Mail",
      title: "Lead nurturing",
      description: "Restez dans la tête de vos prospects jusqu'au closing avec des séquences automatisées.",
      href: "/services/lead-nurturing",
    },
    {
      slug: "creation-workflows",
      icon: "Workflow",
      title: "Création de workflows",
      description: "Automatisez vos processus commerciaux sans rien laisser passer.",
      href: "/services/creation-workflows",
    },
  ],

  ctaTitle: "Votre cycle de vente mérite mieux que de l'improvisation",
  ctaDescription: "Échangez 30 minutes avec un fondateur. Nous identifions les outils qui accéléreront votre closing.",
  ctaButtonText: "Équiper vos commerciaux",
  ctaButtonLink: "/contact",
};
