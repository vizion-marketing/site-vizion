import type { ServiceContent } from "./types";

export const directionMarketingExternalisee: ServiceContent = {
  slug: "direction-marketing-externalisee",
  title: "Direction Marketing Externalisée",
  icon: "UserCog",
  category: "Stratégie",
  order: 19,

  // SEO
  metaTitle: "Direction Marketing Externalisée B2B | Vizion",
  metaDescription:
    "Direction marketing externalisée pour PME et ETI B2B. Un directeur marketing dédié, opérationnel dès le premier mois, sans les contraintes d'un recrutement.",
  keywords: [
    "direction marketing externalisée",
    "directeur marketing externalisée",
    "directeur marketing à temps partagé",
    "externaliser sa direction marketing",
    "directeur marketing dédié",
    "direction marketing PME",
    "direction marketing B2B",
    "directeur marketing freelance B2B",
    "responsable marketing externalisée",
    "pilotage marketing externalisée",
    "accompagnement marketing stratégique",
    "direction marketing temps partagé PME",
    "CMO externalisée",
    "marketing stratégique B2B PME",
  ],

  // Hero
  heroTitle:
    "Direction marketing externalisée : un directeur marketing dédié, sans les contraintes d'un recrutement",
  heroSubtitle:
    "Vous avez besoin d'une vision stratégique et d'un pilotage marketing structuré, mais recruter un directeur marketing n'est pas viable aujourd'hui. Chez Vizion, nous mettons à votre disposition un directeur marketing dédié qui prend en main votre stratégie, coordonne les actions et rend des comptes chaque mois.",
  heroBadge: "+70 entreprises accompagnées",
  heroImage: "/images/services/direction-marketing-externalisee/hero.png",

  // Narrative (Le constat)
  constat: {
    surtitre: "Le problème",
    title:
      "Vous savez que le marketing est essentiel. Mais personne ne le pilote.",
    paragraphs: [
      "Des actions sont lancées, des prestataires interviennent, des budgets sont dépensés. Mais sans pilote, chaque initiative reste isolée. Le marketing produit du bruit, pas des résultats commerciaux.",
    ],
    statements: [
      {
        headline: "Vos actions marketing manquent de cohérence et de continuité",
        description:
          "Un article ici, une campagne là, un salon de temps en temps. Sans feuille de route ni priorités claires, chaque action est déconnectée des précédentes. Le marketing avance par à-coups, sans capitaliser sur ce qui a déjà été fait.",
      },
      {
        headline:
          "Recruter un directeur marketing est trop lourd pour votre structure",
        description:
          "Le salaire, les charges, le temps de recrutement, le risque d'erreur de casting. Pour une PME ou une ETI en croissance, embaucher un profil senior à temps plein représente un investissement disproportionné par rapport au besoin réel.",
      },
      {
        headline: "Vos prestataires travaillent en silo, sans vision d'ensemble",
        description:
          "Agence SEO, freelance contenu, prestataire CRM. Chacun exécute sa mission, mais personne ne coordonne l'ensemble. Les actions se chevauchent, les messages divergent et les budgets se dispersent sans synergie.",
      },
      {
        headline:
          "Vous prenez des décisions marketing sans méthode ni indicateurs fiables",
        description:
          "Faut-il investir en SEO ou en publicité ? Refaire le site ou produire du contenu ? Sans directeur marketing pour structurer l'analyse et définir les priorités, chaque décision repose sur l'intuition. Et l'intuition coûte cher.",
      },
    ],
  },

  // Solution sticky
  solutionTitle:
    "Chez Vizion, nous prenons en main votre direction marketing sans alourdir votre masse salariale",
  solutionImage:
    "/images/services/direction-marketing-externalisee/solution.avif",
  solutionItems: [
    {
      title: "Nous définissons votre stratégie marketing sur 6 à 12 mois.",
      description:
        "Positionnement, cibles prioritaires, canaux d'acquisition, budget, KPIs. Nous construisons une feuille de route claire et chiffrée, validée avec votre direction, qui donne un cap à toutes vos actions marketing.",
    },
    {
      title: "Nous coordonnons l'ensemble de vos prestataires et ressources.",
      description:
        "Agences, freelances, équipes internes. Votre directeur marketing dédié pilote chaque intervenant, garantit la cohérence des messages et veille à ce que chaque action serve les objectifs commerciaux définis ensemble.",
    },
    {
      title: "Nous alignons votre marketing sur vos objectifs de vente.",
      description:
        "Le marketing ne produit pas du contenu pour produire. Chaque action est conçue pour alimenter votre pipeline commercial, raccourcir vos cycles de vente et faciliter le travail de vos équipes commerciales.",
    },
    {
      title: "Nous pilotons la performance avec des indicateurs concrets.",
      description:
        "Leads générés, coût d'acquisition, taux de conversion, pipeline influencé. Chaque mois, vous recevez un reporting clair qui mesure l'impact réel du marketing sur votre activité commerciale.",
    },
    {
      title: "Nous nous adaptons à votre rythme et à votre budget.",
      description:
        "Temps plein, mi-temps, quelques jours par mois. La formule s'ajuste à vos besoins réels et évolue avec votre croissance. Vous gardez la flexibilité sans sacrifier la qualité du pilotage stratégique.",
    },
  ],

  // Scroll title
  scrollTitle: {
    hook: "Bref.",
    phrase: "Chez Vizion, on pilote\nvotre marketing...",
    adjectives: ["avec méthode", "avec engagement", "et surtout pour vendre"],
    showcaseImages: [],
  },

  // Bento featured cards
  bentoCards: {
    sectionTitle:
      "Les spécificités de notre direction marketing externalisée",
    sectionDescription:
      "Nous ne fournissons pas un consultant qui rédige des rapports. Nous mettons à votre disposition un directeur marketing opérationnel, intégré à vos équipes, qui prend des décisions et rend des comptes chaque mois.",
    image: {
      src: "/images/services/direction-marketing-externalisee/bento.avif",
      alt: "Directeur marketing Vizion en réunion stratégique",
    },
    technology: {
      title:
        "Les mêmes outils qu'une\ndirection marketing interne.",
      description:
        "Votre directeur marketing dédié utilise les outils les plus performants du marché pour piloter votre stratégie, mesurer les résultats et coordonner les actions. Chaque outil est choisi pour sa pertinence dans votre contexte, pas par habitude.",
      logos: [
        "HubSpot",
        "Salesforce",
        "Google Analytics",
        "SEMrush",
        "Notion",
        "Pipedrive",
        "LinkedIn",
        "Google Ads",
      ],
    },
    performance: {
      value: 12,
      suffix: "+",
      label: "Mois de visibilité",
      description:
        "Chaque mission démarre avec une feuille de route sur 12 mois minimum. Vous savez exactement où vous allez et pourquoi.",
    },
    noTemplate: {
      title:
        "Une stratégie construite pour votre marché, pas un plan générique",
      description:
        "Chaque entreprise a un positionnement, des cibles et des contraintes différentes. Votre stratégie marketing est conçue sur mesure, pas dupliquée d'un autre client.",
    },
    widgets: {
      title:
        "Tous les leviers marketing pilotés depuis un point central",
      description:
        "Votre directeur marketing coordonne l'ensemble des canaux et des actions pour garantir la cohérence et maximiser l'impact.",
      tags: [
        "SEO et contenu",
        "Publicité",
        "LinkedIn",
        "Emailing",
        "Sales enablement",
      ],
    },
    integrations: {
      title:
        "Votre direction marketing connectée à tous vos outils existants",
      description:
        "CRM, analytics, automation, prospection. Votre directeur marketing dédié s'intègre dans votre écosystème technique et pilote les données comme un membre de votre équipe.",
      logos: [
        "HubSpot",
        "Salesforce",
        "Pipedrive",
        "Google Analytics",
        "Brevo",
        "Mailchimp",
        "LinkedIn Ads",
        "Google Ads",
        "Zapier",
      ],
    },
    growth: {
      title: "Un reporting mensuel clair, sans jargon et orienté résultats",
      description:
        "Leads, pipeline, coût d'acquisition, ROI par canal. Chaque mois, vous recevez un bilan factuel qui mesure l'impact concret du marketing sur votre chiffre d'affaires.",
    },
  },

  // Process
  processTitle:
    "Une direction marketing externalisée avec Vizion : comment ça se passe ?",
  processSubtitle:
    "Un processus structuré pour poser les bases, lancer les actions et mesurer les résultats dès le premier mois.",
  processSteps: [
    {
      title: "Diagnostic et cadrage stratégique",
      description:
        "Nous auditons votre dispositif marketing actuel, vos outils, vos canaux et vos résultats. En parallèle, nous échangeons avec votre direction et vos équipes commerciales pour comprendre vos objectifs, vos contraintes et vos priorités. Ce diagnostic pose les fondations de la feuille de route.",
      duration: "1 à 2 semaines",
      deliverables: [
        "Audit marketing synthétique",
        "Analyse concurrentielle",
        "Entretiens direction et commerciaux",
        "Brief stratégique",
      ],
    },
    {
      title: "Construction de la feuille de route",
      description:
        "Nous élaborons une stratégie marketing sur 6 à 12 mois avec des objectifs chiffrés, des actions prioritaires, un budget prévisionnel et un calendrier de mise en œuvre. La feuille de route est présentée et validée avec votre direction avant le lancement des premières actions.",
      duration: "1 à 2 semaines",
      deliverables: [
        "Feuille de route 6-12 mois",
        "Budget prévisionnel",
        "KPIs et objectifs",
        "Calendrier d'actions",
        "Présentation de validation",
      ],
    },
    {
      title: "Lancement et coordination opérationnelle",
      description:
        "Votre directeur marketing dédié lance les premières actions, sélectionne et briefte les prestataires nécessaires, met en place les outils de suivi et installe les rituels de pilotage (comités, reportings, points commerciaux). L'objectif est d'être opérationnel rapidement.",
      duration: "2 à 4 semaines",
      deliverables: [
        "Plan d'action opérationnel",
        "Sélection des prestataires",
        "Configuration des outils",
        "Rituels de pilotage installés",
      ],
    },
    {
      title: "Pilotage mensuel et optimisation continue",
      description:
        "Chaque mois, votre directeur marketing analyse les résultats, ajuste les priorités et présente un reporting clair à votre direction. Les actions sont optimisées en continu en fonction des données collectées et de l'évolution de vos objectifs commerciaux.",
      duration: "En continu",
      deliverables: [
        "Reporting mensuel",
        "Comité de pilotage",
        "Ajustement des priorités",
        "Recommandations d'optimisation",
      ],
    },
    {
      title: "Bilan trimestriel et ajustement de cap",
      description:
        "Tous les trimestres, nous réalisons un bilan approfondi de la performance marketing : ROI par canal, évolution du pipeline, atteinte des objectifs. Ce bilan permet d'ajuster la feuille de route et de réallouer les budgets en fonction des résultats obtenus.",
      duration: "Tous les 3 mois",
      deliverables: [
        "Bilan trimestriel complet",
        "Analyse ROI par canal",
        "Feuille de route mise à jour",
        "Recommandations stratégiques",
      ],
    },
  ],

  // Quality guarantees
  qualityGuarantees: {
    surtitre: "Nos engagements",
    sectionTitle:
      "Pourquoi choisir Vizion\npour externaliser votre direction marketing ?",
    sectionDescription:
      "Nous ne vous vendons pas des heures de consulting. Nous prenons la responsabilité de vos résultats marketing avec des engagements concrets et mesurables.",
    cardSurtitre: "Ce que nous garantissons",
    cardTitle: "Des engagements\ncentrés sur vos ventes",
    cardDescription:
      "Chaque mission est pilotée avec la même rigueur. Pas de promesses vagues, des résultats mesurés chaque mois.",
    guarantees: [
      {
        icon: "UserCheck",
        title: "Un interlocuteur unique, dédié et disponible",
        description:
          "Votre directeur marketing dédié connaît votre marché, vos équipes et vos objectifs. Pas de rotation, pas de junior envoyé à votre place. Le même profil senior du début à la fin.",
      },
      {
        icon: "Target",
        title: "Des objectifs chiffrés et un reporting mensuel transparent",
        description:
          "Chaque mois, vous recevez un bilan clair avec les indicateurs clés : leads, pipeline, coût d'acquisition, actions réalisées. Aucune zone d'ombre sur ce qui est fait et ce que ça produit.",
      },
      {
        icon: "ArrowUpDown",
        title: "Une flexibilité totale, sans engagement de durée rigide",
        description:
          "La formule s'ajuste à vos besoins : temps plein, mi-temps, quelques jours par mois. Vous pouvez augmenter ou réduire le volume selon votre activité, sans pénalité.",
      },
    ],
    featureCard: {
      surtitre: "Notre vraie différence ?",
      title: "Un directeur marketing\nqui pense comme un associé",
      description:
        "Nos directeurs marketing ne sont pas des exécutants. Ils pensent stratégie, priorisent les actions à fort impact et s'engagent sur les résultats commerciaux.",
      linkText: "Échanger sur vos besoins",
      linkHref: "/contact",
    },
  },

  // Testimonials
  testimonialsTitle:
    "Ils nous ont confié leur direction marketing",
  testimonialsSubtitle:
    "Consultez les retours d'expérience de dirigeants qui ont fait appel à Vizion pour structurer et piloter leur marketing B2B sans recruter en interne.",
  testimonials: [
    {
      quote:
        "En trois mois, on avait enfin une stratégie claire et des leads qui arrivent.",
      detail:
        "Nous n'avions jamais eu de directeur marketing. Vizion a structuré notre approche de A à Z : positionnement, contenus, canaux, outils. En quelques mois, nos commerciaux avaient enfin des leads qualifiés à traiter. Le rapport qualité-investissement est incomparable avec un recrutement.",
      author: "Dirigeant PME industrielle",
      role: "Directeur général",
      company: "Client Vizion",
      photo:
        "/images/services/direction-marketing-externalisee/testimonials/01.avif",
      rating: 5,
    },
    {
      quote:
        "On a enfin quelqu'un qui coordonne tout et qui rend des comptes.",
      detail:
        "Avant Vizion, nos trois prestataires travaillaient chacun dans leur coin. Le directeur marketing dédié a repris la main, aligné les actions et nous présente un reporting mensuel clair. La différence est immédiate sur la cohérence de notre communication.",
      author: "Responsable commercial",
      role: "Directeur commercial",
      company: "Client Vizion",
      photo:
        "/images/services/direction-marketing-externalisee/testimonials/02.avif",
      rating: 5,
    },
    {
      quote:
        "La flexibilité du modèle nous a permis de monter en puissance progressivement.",
      detail:
        "Nous avons commencé avec deux jours par mois pour poser les bases stratégiques. Aujourd'hui, notre directeur marketing Vizion intervient une semaine par mois et pilote l'ensemble de notre dispositif. Nous n'aurions jamais pu recruter un profil aussi senior à ce stade de notre croissance.",
      author: "CEO scale-up SaaS",
      role: "CEO",
      company: "Client Vizion",
      photo:
        "/images/services/direction-marketing-externalisee/testimonials/03.avif",
      rating: 5,
    },
  ],

  // FAQ
  faqTitle: "Des questions sur la direction marketing externalisée ?",
  faqs: [
    {
      question:
        "Combien coûte une direction marketing externalisée ?",
      answer:
        "Le budget dépend du volume d'intervention : comptez entre 2 500 et 8 000 euros par mois pour un accompagnement structuré. C'est 3 à 5 fois moins qu'un recrutement interne en CDI (salaire, charges, management, outils). Le budget exact est défini après un premier échange pour cadrer vos besoins.",
    },
    {
      question:
        "Quelle est la différence avec un consultant marketing classique ?",
      answer:
        "Un consultant observe, analyse et recommande. Un directeur marketing externalisé décide, exécute et rend des comptes. Chez Vizion, votre directeur marketing dédié prend la responsabilité opérationnelle de votre stratégie : il pilote les prestataires, lance les actions et mesure les résultats chaque mois.",
    },
    {
      question: "Combien de temps dure une mission type ?",
      answer:
        "La plupart de nos missions durent entre 6 et 18 mois. Les trois premiers mois servent à poser les bases (diagnostic, stratégie, premiers quick wins). Les mois suivants sont consacrés au déploiement et à l'optimisation continue. Vous pouvez ajuster ou arrêter à tout moment.",
    },
    {
      question:
        "À qui s'adresse la direction marketing externalisée B2B ?",
      answer:
        "Aux PME et ETI B2B qui n'ont pas de directeur marketing en interne, ou dont le poste est vacant. C'est pertinent si votre entreprise génère entre 2 et 50 millions de chiffre d'affaires et que vous avez besoin d'un pilotage stratégique sans les contraintes d'un recrutement cadre.",
    },
    {
      question:
        "Le directeur marketing externalisé travaille-t-il avec nos équipes ?",
      answer:
        "Absolument. Votre directeur marketing dédié participe aux comités de direction, travaille avec vos commerciaux, briefte et coordonne vos prestataires. Il s'intègre à vos rituels d'équipe comme un collaborateur interne, avec la même disponibilité et le même niveau d'implication.",
    },
    {
      question:
        "Quels livrables recevons-nous chaque mois ?",
      answer:
        "Chaque mois, vous recevez un reporting de performance (leads, pipeline, ROI par canal), un compte-rendu des actions réalisées, les recommandations pour le mois suivant et un point de pilotage avec votre direction. Tous les trimestres, un bilan stratégique approfondi est réalisé.",
    },
    {
      question:
        "Peut-on combiner la direction marketing externalisée avec d'autres services Vizion ?",
      answer:
        "Oui, et c'est souvent le cas. La direction marketing externalisée est le cadre stratégique. Les services opérationnels (SEO, contenu, publicité, CRM) viennent en complément selon les priorités définies dans la feuille de route. Votre directeur marketing dédié coordonne l'ensemble.",
    },
  ],

  // Related services
  relatedServicesTitle:
    "Vous voulez aller plus loin avec votre direction marketing ?",
  relatedServicesSubtitle:
    "La direction marketing pose le cadre stratégique. Ces services opérationnels complètent le dispositif.",
  relatedServices: [
    {
      slug: "roadmap-strategique",
      icon: "CalendarCheck",
      title: "Roadmap Stratégique",
      description:
        "Vous avez besoin d'un plan structuré avant de lancer un accompagnement long ? La roadmap stratégique définit vos priorités, vos budgets et vos jalons sur 6 à 12 mois.",
      href: "/services/roadmap-strategique",
    },
    {
      slug: "audit-marketing",
      icon: "Search",
      title: "Audit Marketing",
      description:
        "Avant de piloter, il faut diagnostiquer. L'audit marketing analyse votre dispositif actuel pour identifier ce qui freine vos performances et définir les priorités d'action.",
      href: "/services/audit-marketing",
    },
    {
      slug: "creation-contenu-b2b",
      icon: "PenTool",
      title: "Création de Contenu B2B",
      description:
        "Votre directeur marketing définit la stratégie éditoriale. L'équipe contenu produit les articles, les cas clients et les ressources qui alimentent votre pipeline commercial.",
      href: "/services/creation-contenu-b2b",
    },
  ],

  // CTA intermédiaires
  inlineCTAs: {
    afterTestimonials: {
      text: "Vous cherchez un directeur marketing sans recruter ?",
      buttonText: "Échanger sur vos besoins",
      href: "/contact",
    },
    afterProcess: {
      text: "Prêt à structurer votre marketing avec un pilote dédié ?",
      buttonText: "Planifier un premier échange",
      href: "/contact",
    },
  },

  // CTA final
  ctaTitle: "Votre marketing mérite un pilote, pas un passager",
  ctaDescription:
    "Premier échange sans engagement. Nous évaluons ensemble vos besoins et la formule la plus adaptée à votre entreprise.",
  ctaButtonText: "Échanger avec un directeur marketing",
  ctaButtonLink: "/contact",
};
