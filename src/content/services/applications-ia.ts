import type { ServiceContent } from "./types";

export const applicationsIa: ServiceContent = {
  slug: "applications-ia",
  title: "Applications IA",
  icon: "Brain",
  category: "Transformation Digitale",
  order: 17,

  // SEO
  metaTitle: "Intelligence artificielle marketing B2B : applications",
  metaDescription:
    "Intelligence artificielle appliquée au marketing B2B : chatbots, scoring prédictif, génération de contenu. Applications IA concrètes et mesurables.",
  keywords: [
    "intelligence artificielle marketing",
    "intelligence artificielle marketing B2B",
    "IA marketing B2B",
    "applications IA marketing",
    "chatbot IA B2B",
    "scoring prédictif IA",
    "génération contenu IA",
    "personnalisation IA marketing",
    "automatisation marketing IA",
    "IA pour équipes commerciales",
    "intégrer intelligence artificielle entreprise",
    "agence IA marketing",
    "IA CRM et ventes",
    "productivité marketing IA",
    "intelligence artificielle contenu B2B",
  ],

  // Hero
  heroTitle: "Intelligence artificielle marketing : des applications qui changent vos résultats.",
  heroSubtitle:
    "L'intelligence artificielle marketing transforme la productivité des équipes B2B. Chatbots, scoring prédictif, génération de contenu, personnalisation. Chez Vizion, nous intégrons l'IA là où elle apporte une valeur mesurable. Pas de gadgets, pas de promesses creuses. Des applications concrètes qui augmentent la performance de vos équipes.",
  heroBadge: "Pionniers de l'IA appliquée au B2B",
  heroImage: "/images/services/applications-ia/hero.avif",

  // Narrative (Le constat)
  constat: {
    surtitre: "Le problème",
    title:
      "Vous savez que l'IA peut vous aider, mais vous ne savez pas par où commencer.",
    paragraphs: [
      "ChatGPT, Claude, Midjourney. Vos équipes testent des outils à droite et à gauche, mais rien n'est structuré. L'IA reste un jouet ponctuel au lieu de devenir un levier de productivité intégré à vos process.",
    ],
    statements: [
      {
        headline: "Vos équipes utilisent l'IA en mode bricolage",
        description:
          "Chacun utilise son outil dans son coin, sans process commun ni bonnes pratiques partagées. Les résultats sont inégaux, la qualité inconsistante, et le temps gagné est annulé par le temps passé à corriger les erreurs.",
      },
      {
        headline: "Vous ne savez pas quels cas d'usage prioriser",
        description:
          "Contenu, prospection, analyse, support client. Les possibilités sont nombreuses, mais sans cadre de priorisation, vous dispersez vos efforts sur des projets qui n'ont pas d'impact réel sur votre chiffre d'affaires.",
      },
      {
        headline: "Vos outils existants ne sont pas connectés à l'IA",
        description:
          "Votre CRM, vos outils d'emailing, votre site web fonctionnent indépendamment de toute intelligence artificielle. Les gains de productivité potentiels restent inexploités parce que l'IA n'est pas intégrée dans vos flux de travail.",
      },
      {
        headline: "Vous avez peur de perdre le contrôle sur la qualité",
        description:
          "Contenu générique, hallucinations, ton inadapté. Les craintes liées à l'IA sont légitimes. Sans cadre de qualité et de validation, le risque de publier du contenu médiocre ou inexact est bien réel.",
      },
    ],
  },

  // Solution sticky
  solutionTitle:
    "Intelligence artificielle marketing : nous intégrons l'IA dans vos process pour des résultats concrets",
  solutionImage: "/images/services/applications-ia/solution.avif",
  solutionItems: [
    {
      title: "Nous identifions les cas d'usage à fort impact pour votre entreprise.",
      description:
        "Avant de déployer quoi que ce soit, nous auditons vos process actuels et identifions les tâches où l'IA apportera le plus de valeur. Chaque application est priorisée en fonction de son impact sur la productivité et le chiffre d'affaires.",
    },
    {
      title: "Nous concevons des solutions IA adaptées à votre métier.",
      description:
        "Chatbot formé sur votre documentation, scoring prédictif calibré sur vos données de vente, génération de contenu alignée sur votre ligne éditoriale. Chaque solution est construite sur mesure, pas copiée d'un template.",
    },
    {
      title: "Nous intégrons l'IA dans vos outils existants.",
      description:
        "L'IA n'a de valeur que si elle est intégrée dans vos flux de travail quotidiens. Nous connectons les modèles à votre CRM, vos outils d'emailing, votre site web et vos process internes pour que les gains soient immédiats.",
    },
    {
      title: "Nous mettons en place des garde-fous de qualité.",
      description:
        "Prompts structurés, workflows de validation, contrôle humain aux étapes clés. Chaque application IA est encadrée par des process de qualité qui garantissent la fiabilité et la cohérence des résultats produits.",
    },
    {
      title: "Nous formons vos équipes à l'utilisation pérenne de l'IA.",
      description:
        "Nous ne livrons pas une boîte noire. Vos équipes sont formées aux bonnes pratiques, aux limites de chaque outil et aux méthodes pour tirer le meilleur de l'IA au quotidien. L'objectif est l'autonomie complète.",
    },
  ],

  // Scroll title
  scrollTitle: {
    hook: "Bref.",
    phrase: "Chez Vizion, on déploie\ndes applications IA...",
    adjectives: ["utiles", "maîtrisées", "et surtout rentables"],
    showcaseImages: [],
  },

  // Bento featured cards
  bentoCards: {
    sectionTitle: "Les spécificités de notre approche de l'IA appliquée au B2B",
    sectionDescription:
      "Nous ne vendons pas de la technologie. Nous déployons des applications IA concrètes, intégrées à vos outils existants, encadrées par des process de qualité et mesurées par leur impact réel sur vos résultats.",
    image: {
      src: "/images/services/applications-ia/bento.avif",
      alt: "Applications IA pour le marketing B2B Vizion",
    },
    technology: {
      title: "Les modèles IA les plus\npuissants à votre service.",
      description:
        "Claude, GPT-4, Mistral, LangChain, Make AI. Nous maîtrisons les modèles et frameworks leaders du marché. Le choix du modèle dépend du cas d'usage : précision, rapidité, coût, confidentialité. Nous sélectionnons la bonne technologie pour chaque application, pas la plus médiatique.",
      logos: [
        "Claude",
        "GPT-4",
        "Mistral",
        "LangChain",
        "Make",
        "Zapier",
        "HubSpot",
        "n8n",
        "Vercel",
      ],
    },
    performance: {
      value: 40,
      suffix: "%",
      label: "Gain de productivité moyen",
      description:
        "Nos clients gagnent en moyenne 40% de productivité sur les tâches où l'IA est déployée, grâce à des applications ciblées et bien intégrées.",
    },
    noTemplate: {
      title: "Chaque solution IA est conçue sur mesure pour votre entreprise",
      description:
        "Pas de chatbot générique ni de prompt copié d'Internet. Chaque application est construite pour vos données, votre métier et vos objectifs spécifiques.",
    },
    widgets: {
      title: "Des applications IA pour chaque besoin marketing et commercial",
      description:
        "Chaque type d'application répond à un défi concret de vos équipes marketing ou commerciales.",
      tags: [
        "Chatbot qualifiant",
        "Génération de contenu",
        "Scoring prédictif",
        "Personnalisation email",
        "Analyse de données",
      ],
    },
    integrations: {
      title: "L'IA est connectée à l'ensemble de votre écosystème",
      description:
        "CRM, emailing, site web, prospection, communication. Les applications IA que nous déployons s'intègrent dans vos outils existants pour que les gains soient immédiats et pérennes.",
      logos: [
        "HubSpot",
        "Salesforce",
        "Pipedrive",
        "Make",
        "Zapier",
        "Slack",
        "Notion",
        "Google Sheets",
        "Brevo",
        "Vercel",
      ],
    },
    growth: {
      title: "Vous mesurez l'impact réel de chaque application IA déployée",
      description:
        "Temps gagné, coût par contenu produit, taux de qualification, revenus influencés. Chaque application est mesurée par son impact concret sur la productivité et le chiffre d'affaires de votre entreprise.",
    },
  },

  // Process
  processTitle: "Intelligence artificielle marketing : comment se passe un projet avec Vizion ?",
  processSubtitle:
    "Un processus structuré pour intégrer l'IA dans vos process marketing et commerciaux, avec des résultats mesurables dès les premières semaines.",
  processSteps: [
    {
      title: "Audit IA et identification des cas d'usage",
      description:
        "Nous auditons vos process actuels et identifions les tâches où l'IA apportera le plus de valeur. Contenu, prospection, qualification, analyse, support. Chaque cas d'usage est évalué en fonction de son impact, de sa faisabilité et de son retour sur investissement. Vous repartez avec une feuille de route priorisée.",
      duration: "1 à 2 semaines",
      deliverables: [
        "Audit des process existants",
        "Cartographie des cas d'usage IA",
        "Priorisation par impact",
        "Feuille de route IA",
        "Estimation du ROI",
      ],
    },
    {
      title: "Conception et prototypage des solutions",
      description:
        "Nous concevons l'architecture de chaque application IA : choix du modèle, conception des prompts, workflow de validation, intégrations techniques. Un prototype fonctionnel est livré et testé avec vos équipes avant le développement complet pour valider la pertinence et la qualité des résultats.",
      duration: "2 semaines",
      deliverables: [
        "Architecture technique",
        "Prompts structurés",
        "Prototype fonctionnel",
        "Tests de qualité",
        "Workflow de validation",
      ],
    },
    {
      title: "Développement et intégration",
      description:
        "Nous développons chaque application IA et l'intégrons dans vos outils existants. CRM, emailing, site web, communication interne. Chaque intégration est testée en conditions réelles. Les garde-fous de qualité sont configurés pour garantir la fiabilité et la cohérence des résultats en production.",
      duration: "2 à 4 semaines",
      deliverables: [
        "Applications IA déployées",
        "Intégrations configurées",
        "Garde-fous de qualité",
        "Documentation technique",
        "Formation des équipes",
      ],
    },
    {
      title: "Lancement, formation et optimisation",
      description:
        "Mise en production progressive, formation de vos équipes aux bonnes pratiques et monitoring des performances. Nous mesurons l'impact réel de chaque application (temps gagné, qualité, conversion) et ajustons les paramètres pour maximiser le retour sur investissement dans la durée.",
      duration: "1 semaine + suivi mensuel",
      deliverables: [
        "Mise en production",
        "Formation pratique des équipes",
        "Tableau de bord de performance",
        "Rapport d'impact mensuel",
      ],
    },
  ],

  // Quality guarantees
  qualityGuarantees: {
    surtitre: "Nos engagements",
    sectionTitle:
      "Pourquoi choisir Vizion\npour intégrer l'IA dans votre entreprise ?",
    sectionDescription:
      "Nous ne vendons pas de la technologie pour le plaisir. Nous déployons des applications IA utiles, encadrées et mesurables, conçues pour augmenter la productivité de vos équipes sans sacrifier la qualité.",
    cardSurtitre: "Ce que nous garantissons",
    cardTitle: "Des engagements\nde résultat et de qualité",
    cardDescription:
      "Chaque application IA est conçue avec la même rigueur. Des solutions utiles, fiables et mesurables, pas des expérimentations sans lendemain.",
    guarantees: [
      {
        icon: "Shield",
        title: "Des garde-fous de qualité sur chaque application",
        description:
          "Prompts validés, workflows de contrôle, relecture humaine aux étapes clés. Chaque application IA est encadrée pour garantir la fiabilité et éviter les erreurs qui nuiraient à votre crédibilité.",
      },
      {
        icon: "LineChart",
        title: "Un impact mesuré et documenté sur chaque projet",
        description:
          "Temps gagné, coût par tâche, qualité des résultats. Chaque application est mesurée par des indicateurs concrets. Vous savez exactement ce que l'IA vous rapporte.",
      },
      {
        icon: "UserCheck",
        title: "Une formation complète pour l'autonomie de vos équipes",
        description:
          "Vos collaborateurs sont formés aux bonnes pratiques, aux limites de l'IA et aux méthodes pour en tirer le meilleur. Nous ne créons pas de dépendance, nous transférons les compétences.",
      },
    ],
    featureCard: {
      surtitre: "Notre vraie différence ?",
      title: "L'IA au service de votre\nstratégie, pas l'inverse",
      description:
        "Stratèges marketing et experts IA travaillent ensemble pour que chaque application serve vos objectifs commerciaux. La technologie est un moyen, jamais une fin.",
      linkText: "Discuter de votre projet IA",
      linkHref: "/contact",
    },
  },

  // Testimonials
  testimonialsTitle: "Ils nous ont confié l'intégration de l'IA dans leurs process",
  testimonialsSubtitle:
    "Consultez les retours d'expérience de dirigeants et responsables marketing qui ont fait appel à Vizion pour déployer l'IA dans leur entreprise B2B.",
  testimonials: [
    {
      quote:
        "L'IA nous fait gagner 10 heures par semaine sur la production de contenu.",
      detail:
        "Vizion a déployé un système de génération de contenu calibré sur notre ligne éditoriale. Articles, emails, posts LinkedIn. La qualité est constante, le ton est juste, et nos équipes se concentrent sur la stratégie au lieu de rédiger.",
      author: "Directrice marketing",
      role: "Directrice marketing",
      company: "Client Vizion",
      photo: "/images/services/applications-ia/testimonials/01.avif",
      rating: 5,
    },
    {
      quote:
        "Le chatbot qualifie 30% de nos leads avant même le premier appel.",
      detail:
        "Vizion a conçu un chatbot IA intégré à notre site web et connecté à notre CRM. Il répond aux questions techniques, qualifie le besoin et transmet les leads chauds à nos commerciaux avec un résumé complet du contexte.",
      author: "Responsable commercial",
      role: "Responsable commercial",
      company: "Client Vizion",
      photo: "/images/services/applications-ia/testimonials/02.avif",
      rating: 5,
    },
    {
      quote:
        "On a enfin une vision claire des prospects les plus susceptibles de signer.",
      detail:
        "Le scoring prédictif mis en place par Vizion analyse les comportements de nos leads et attribue un score de probabilité de conversion. Nos commerciaux savent exactement qui contacter en priorité, et le taux de transformation a progressé de 25%.",
      author: "CEO",
      role: "Dirigeant",
      company: "Client Vizion",
      photo: "/images/services/applications-ia/testimonials/03.avif",
      rating: 5,
    },
  ],

  // FAQ
  faqTitle: "Questions fréquentes sur l'intelligence artificielle marketing",
  faqs: [
    {
      question: "Par où commencer pour intégrer l'intelligence artificielle marketing dans mon entreprise ?",
      answer:
        "Nous commençons toujours par un audit de vos process actuels. L'objectif est d'identifier les tâches répétitives, chronophages ou à faible valeur ajoutée où l'IA peut avoir un impact immédiat. Nous priorisons ensuite les cas d'usage par retour sur investissement et nous démarrons par le plus impactant.",
    },
    {
      question: "Quel budget prévoir pour un projet d'intelligence artificielle marketing ?",
      answer:
        "Un premier projet IA (chatbot, génération de contenu ou scoring) se situe entre 3 000 € et 12 000 € selon la complexité et les intégrations nécessaires. Un programme complet couvrant plusieurs cas d'usage se construit progressivement. Nous établissons un devis précis après l'audit initial.",
    },
    {
      question: "L'intelligence artificielle marketing va-t-elle remplacer mes équipes ?",
      answer:
        "Non. L'IA augmente la productivité de vos équipes, elle ne les remplace pas. Elle prend en charge les tâches répétitives (premiers jets de contenu, tri de données, qualification initiale) pour que vos collaborateurs se concentrent sur la stratégie, la créativité et la relation client.",
    },
    {
      question: "Comment garantissez-vous la qualité du contenu généré par l'IA ?",
      answer:
        "Chaque application de génération de contenu est encadrée par des prompts structurés, un guide de tonalité et un workflow de validation humaine. Aucun contenu n'est publié sans relecture. Nous calibrons les modèles sur votre ligne éditoriale pour que le résultat soit cohérent avec votre marque.",
    },
    {
      question: "Quels outils d'IA utilisez-vous ?",
      answer:
        "Nous travaillons avec les modèles les plus performants du marché : Claude (Anthropic) pour la rédaction et l'analyse, GPT-4 (OpenAI) pour les cas d'usage variés, Mistral pour les projets nécessitant un hébergement souverain. Les orchestrateurs (LangChain, Make AI) permettent d'intégrer ces modèles dans vos workflows.",
    },
    {
      question: "Mes données sont-elles en sécurité avec l'IA ?",
      answer:
        "Absolument. Nous sélectionnons les modèles en fonction de vos exigences de confidentialité. Les APIs professionnelles (Claude, GPT-4) ne réutilisent pas vos données pour l'entraînement. Pour les données sensibles, nous recommandons des modèles hébergés en interne ou des solutions souveraines.",
    },
    {
      question: "Combien de temps faut-il pour voir les premiers résultats ?",
      answer:
        "Les gains de productivité sont visibles dès les premières semaines de déploiement. Un chatbot qualifie des leads dès sa mise en ligne, un outil de génération de contenu produit des résultats dès la première utilisation. L'impact sur les métriques commerciales se mesure généralement après 2 à 3 mois.",
    },
  ],

  // Related services
  relatedServicesTitle: "Vous voulez aller plus loin avec l'IA ?",
  relatedServicesSubtitle:
    "L'IA est un accélérateur. Ces services complémentaires maximisent son impact sur vos résultats commerciaux.",
  relatedServices: [
    {
      slug: "creation-workflows",
      icon: "Repeat",
      title: "Création de Workflows",
      description:
        "L'IA est plus puissante quand elle est intégrée dans des workflows automatisés. Nous connectons vos applications IA à l'ensemble de vos process pour que les gains se multiplient sans intervention manuelle.",
      href: "/services/applications-ia",},
    {
      slug: "deploiement-crm",
      icon: "Settings",
      title: "Déploiement CRM",
      description:
        "Un CRM structuré est le socle indispensable pour exploiter l'IA. Scoring prédictif, personnalisation, qualification automatique. Tout repose sur des données fiables et bien organisées dans votre CRM.",
      href: "/services/deploiement-crm",},
    {
      slug: "creation-contenu-b2b",
      icon: "FileText",
      title: "Création de contenu B2B",
      description:
        "L'IA accélère la production, mais la stratégie de contenu reste humaine. Nous définissons la ligne éditoriale, les sujets prioritaires et le calendrier. L'IA assiste la rédaction, vos experts valident.",
      href: "/services/creation-contenu-b2b",},
  ],

  // CTA intermédiaires
  inlineCTAs: {
    afterTestimonials: {
      text: "Vous voulez intégrer l'IA dans vos process marketing ?",
      buttonText: "Discuter de votre projet IA",
      href: "/contact",
    },
    afterProcess: {
      text: "Prêt à tirer parti de l'IA pour votre croissance ?",
      buttonText: "Lancer votre projet",
      href: "/contact",
    },
  },

  // CTA final
  ctaTitle: "L'IA est un levier. Encore faut-il savoir où l'actionner.",
  ctaDescription:
    "Premier échange sans engagement. Nous identifions les cas d'usage IA les plus impactants pour votre entreprise.",
  ctaButtonText: "Discuter de votre projet IA",
  ctaButtonLink: "/contact",
};
