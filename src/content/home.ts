// ============================================================================
// CONTENU DE LA PAGE D'ACCUEIL - VIZION
// ============================================================================
// Ce fichier centralise tout le contenu textuel de la page d'accueil.
// Modifiez ce fichier pour optimiser le copywriting SEO sans toucher au code.
// ============================================================================

// ============================================================================
// TYPES
// ============================================================================

export interface CTA {
  text: string;
  href: string;
}

export interface SEO {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
}

export interface HeroContent {
  badge: string;
  h1: string;
  h1Highlight: string;
  baseline: string;
  badges: string[];
  cta: {
    primary: CTA;
    secondary: CTA;
  };
  socialProof: string;
}

export interface PreuveSocialeContent {
  surtitre: string;
  h2: string;
  h2Highlight: string;
  description: string;
  trustBanner: string;
  trustBannerHighlight: string;
  clients: ClientCase[];
  testimonial: {
    quote: string;
    name: string;
    role: string;
  };
  logos: string[];
}

export interface ClientCase {
  type: "growth" | "metric" | "minimal" | "testimonial";
  logo?: string;
  category?: string;
  slug?: string | null;
  value?: string;
  subtitle?: string;
  title?: string;
  label?: string;
  bg?: string;
}

export interface Pilier {
  numero: string;
  surtitre: string;
  titre: string;
  description: string;
  services: string[];
  cta?: string;
}

export interface PiliersContent {
  surtitre: string;
  h2: string;
  description: string;
  badgeText: string;
  badgeStatus: string;
  piliers: Pilier[];
  ctaText: string;
  socialProofText: string;
  cta: {
    secondary: CTA;
    primary: CTA;
  };
}

export interface IAHighlightContent {
  surtitre: string;
  h2: string;
  h2Highlight: string;
  introduction: string;
  whyImportant: string[];
  useCases: {
    title: string;
    description: string;
    example: string;
    metric?: string;
    tags: string[];
    image?: string;
  }[];
}

export interface QuandCommencerScenario {
  number: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  whenToChoose: string[];
  deliverables: string[];
  duration: string;
  investment: string;
  idealFor: string;
  cta: string;
}

export interface QuandCommencerContent {
  surtitre: string;
  h2: string;
  h2Highlight: string;
  description: string;
  scenarios: QuandCommencerScenario[];
  bottomCta: {
    text: string;
    subtext: string;
    button: CTA;
  };
}

export interface AProposContent {
  surtitre: string;
  h2: string;
  h2Highlight: string;
  paragraphs: string[];
  founderQuote: {
    quote: string;
    name: string;
    role: string;
  };
  photoCaption: {
    label: string;
    title: string;
  };
  valeursTitre: string;
  valeurs: {
    title: string;
    description: string;
  }[];
}

export interface EquipeContent {
  surtitre: string;
  h2: string;
  h2Highlight: string;
  description: string;
  modelExplanation: {
    director: string;
    squads: string;
  };
  scrollHint: string;
  members: {
    name: string;
    role: string;
    specialty: string;
    skills: string[];
    img: string;
  }[];
}

export interface BlogContent {
  surtitre: string;
  h2: string;
  h2Highlight: string;
  ctaText: string;
}

export interface FAQContent {
  surtitre: string;
  h2: string;
  h2Highlight: string;
  description: string;
  questions: {
    question: string;
    answer: string;
  }[];
  ctaText: string;
  ctaButton: CTA;
}

export interface CasClientsContent {
  surtitre: string;
  h2: string;
  ctaText: string;
  cases: {
    slug: string;
    titre: string;
    description: string;
    categorie: string;
  }[];
}

export interface FinalCTAContent {
  trustBadge: string;
  h2: string;
  h2Highlight: string;
  description: string;
  cta: {
    primary: CTA;
    secondary: CTA;
  };
  trustElements: string[];
}

export interface HomeContent {
  seo: SEO;
  hero: HeroContent;
  preuveSociale: PreuveSocialeContent;
  piliers: PiliersContent;
  iaHighlight: IAHighlightContent;
  quandCommencer: QuandCommencerContent;
  aPropos: AProposContent;
  equipe: EquipeContent;
  blog: BlogContent;
  faq: FAQContent;
  casClients: CasClientsContent;
  finalCta: FinalCTAContent;
}

// ============================================================================
// CONTENU
// ============================================================================

export const homeContent: HomeContent = {
  // --------------------------------------------------------------------------
  // SEO & MÉTADONNÉES
  // --------------------------------------------------------------------------
  seo: {
    title: "Vizion | Agence Marketing B2B & SaaS | Stratégie Digitale PME & ETI",
    description: "Cabinet de conseil marketing B2B spécialisé en stratégie digitale, growth marketing et CRM automation pour PME et ETI. +70 entreprises accompagnées. ROI mesurable.",
    keywords: [
      "agence marketing B2B",
      "marketing PME ETI",
      "growth marketing B2B",
      "CRM automation",
      "stratégie digitale B2B",
      "lead generation B2B",
      "marketing SaaS",
      "conseil marketing Paris",
      "transformation digitale PME"
    ],
    ogImage: "/og-image.jpg"
  },

  // --------------------------------------------------------------------------
  // HERO SECTION
  // --------------------------------------------------------------------------
  hero: {
    badge: "STATUT SYSTÈME : OPTIMISATION_FLUX_ACTIVE",
    h1: "ON (RE)STRUCTURE LE PARCOURS DE VENTE DES PME & ETI B2B",
    h1Highlight: "(RE)",
    baseline: "Vous méritez un marketing qui sert directement votre performance commerciale. Nous fusionnons stratégie de haut niveau et puissance de l'IA pour auditer, bâtir et accélérer votre croissance plus vite que n'importe quelle agence traditionnelle.",
    badges: [
      "Réactivité garantie en 24h",
      "Expertise B2B & Franchise",
      "Partenariat Long-Terme"
    ],
    cta: {
      primary: { text: "Découvrir notre approche", href: "/contact" },
      secondary: { text: "Voir nos résultats", href: "/services" }
    },
    socialProof: "ILS NOUS FONT CONFIANCE POUR LEUR CROISSANCE (+70 CLIENTS)"
  },

  // --------------------------------------------------------------------------
  // PREUVE SOCIALE
  // --------------------------------------------------------------------------
  preuveSociale: {
    surtitre: "[ INDEX 02 — PREUVE SOCIALE ]",
    h2: "ILS NOUS ONT FAIT CONFIANCE",
    h2Highlight: "CONFIANCE",
    description: "Notre approche méthodologique a permis à des leaders de l'industrie de redéfinir leurs standards opérationnels et d'accélérer leur mise sur le marché.",
    trustBanner: "Au total, c'est + de 70 directions générales et directions marketing qui nous ont fait confiance.",
    trustBannerHighlight: "+ de 70 directions générales et directions marketing",
    clients: [
      { 
        type: "growth", 
        value: "25",
        subtitle: "Agences en France",
        title: "De l'unité pilote au réseau national", 
        logo: "easyVirtual.tours",
        category: "Franchise Immobilier",
        slug: "easyvirtual-tours-franchise",
        bg: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000"
      },
      { 
        type: "metric", 
        value: "1M", 
        label: "Vues cumulées", 
        logo: "Ensenat Coaching",
        category: "Personal Branding LinkedIn",
        slug: "cabinet-conseil-rh"
      },
      { 
        type: "minimal",
        logo: "Eldo Wallet", 
        category: "Go-to-Market Fintech",
        slug: "fintech-b2b",
        bg: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800"
      },
      { 
        type: "testimonial",
        slug: null
      },
      { 
        type: "metric", 
        value: "x3", 
        label: "Pipeline Commercial", 
        logo: "DataFlow Analytics",
        category: "SaaS B2B Marketing",
        slug: "saas-marketing-automation"
      }
    ],
    testimonial: {
      quote: "L'intervention de l'équipe a été le catalyseur indispensable de notre pivot stratégique.",
      name: "JEAN-BAPTISTE VALLIER",
      role: "Directeur Opérations — Global Tech"
    },
    logos: [
      "TechCorp", "InnovateLab", "DataFlow", "CloudSync", "FinanceHub",
      "MediaPro", "HealthTech", "EcoSolutions", "SmartLogistics", "DigiServe"
    ]
  },

  // --------------------------------------------------------------------------
  // 5 PILIERS
  // --------------------------------------------------------------------------
  piliers: {
    surtitre: "NOTRE APPROCHE",
    h2: "ON INTERVIENT SUR 5 PILLIERS POUR AMÉLIORER VOTRE PERFORMANCE MARKETING & COMMERCIALE",
    description: "Une méthodologie structurée pour transformer votre organisation en machine de croissance prévisible, alignant stratégie, outils et exécution.",
    badgeText: "Moteur de croissance",
    badgeStatus: "ACTIF",
    piliers: [
      {
        numero: "01",
        surtitre: "VISION & STRATÉGIE",
        titre: "Aligner vos objectifs business sur votre roadmap.",
        description: "Définition des KPIs critiques, analyse de la valeur perçue et structuration du cycle de vente pour maximiser le pipe commercial.",
        services: ["Audit 360°", "Modélisation Funnel", "Scorecards KPIs", "Roadmap Trimestrielle", "Analyse Concurrentielle", "Positioning Workshop"],
        cta: "L'ANALYSE DES KPIs & ROADMAP"
      },
      {
        numero: "02",
        surtitre: "MARKETING PRODUIT",
        titre: "Marketing Produit",
        description: "Alignez vos forces de vente avec des supports percutants.",
        services: ["Landing Pages", "Pitch Decks", "Battlecards", "Copywriting", "Case Studies"]
      },
      {
        numero: "03",
        surtitre: "ACTIVATION",
        titre: "Activation",
        description: "Maximisez la conversion de chaque visiteur sur votre plateforme.",
        services: ["UX/UI Audit", "A/B Testing", "CRO", "Tunnels"]
      },
      {
        numero: "04",
        surtitre: "GROWTH & LEAD GEN",
        titre: "Growth & Lead Gen",
        description: "Générez des opportunités qualifiées en continu.",
        services: ["INBOUND", "SEO", "OUTBOUND"]
      },
      {
        numero: "05",
        surtitre: "CRM & AUTOMATION",
        titre: "CRM & Automation",
        description: "Libérez vos équipes des tâches répétitives.",
        services: ["Workflows", "Email Auto", "Lead Scoring", "Zapier/Make"]
      }
    ],
    ctaText: "Rejoingnez +70 clients qui ont déjà optimisé leur cycle de croissance stratégique.",
    socialProofText: "+70 clients",
    cta: {
      secondary: { text: "Découvrir nos expertises", href: "/expertises" },
      primary: { text: "Démarrer votre audit", href: "/audit" }
    }
  },

  // --------------------------------------------------------------------------
  // IA HIGHLIGHT
  // --------------------------------------------------------------------------
  iaHighlight: {
    surtitre: "Intelligence Artificielle",
    h2: "L'IA AU SERVICE DE VOTRE CROISSANCE",
    h2Highlight: "CROISSANCE",
    introduction: "L'intelligence artificielle n'est plus une option pour les entreprises B2B ambitieuses, c'est un levier de compétitivité majeur. Nous intégrons l'IA à chaque étape de votre stratégie marketing et commerciale pour vous permettre d'aller plus vite, plus fort, et plus loin que vos concurrents.",
    whyImportant: [
      "Les entreprises qui adoptent l'IA aujourd'hui prennent une longueur d'avance décisive sur leur marché.",
      "L'IA permet de réduire les coûts opérationnels de 40 à 70% tout en augmentant la qualité et la vitesse d'exécution.",
      "Vos concurrents l'utilisent déjà. Ne pas agir maintenant, c'est prendre du retard difficile à rattraper."
    ],
    useCases: [
      {
        title: "Génération de contenu à grande échelle",
        description: "Créez des articles de blog, landing pages, emails et posts LinkedIn optimisés SEO en quelques minutes au lieu de plusieurs jours.",
        example: "Un client SaaS a multiplié par 5 sa production de contenu en passant de 2 articles/mois à 10, générant +150% de trafic organique en 6 mois.",
        metric: "x5 production",
        tags: ["Content Marketing", "SEO", "Productivité"],
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200"
      },
      {
        title: "Qualification de leads automatisée",
        description: "L'IA analyse le comportement des visiteurs, leur profil LinkedIn, et leur engagement pour scorer automatiquement vos leads et prioriser les plus prometteurs.",
        example: "Une ETI industrielle a réduit de 60% le temps de qualification de ses commerciaux, augmentant le taux de conversion de 35%.",
        metric: "-60% temps",
        tags: ["Lead Scoring", "CRM", "Automation"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200"
      },
      {
        title: "Personnalisation à l'échelle",
        description: "Adaptez automatiquement vos messages commerciaux, emails et landing pages selon le profil, le secteur et les besoins spécifiques de chaque prospect.",
        example: "Une franchise de services a automatisé la personnalisation de ses campagnes outbound pour 25 agences, doublant le taux de réponse.",
        metric: "x2 taux de réponse",
        tags: ["Outbound", "Personnalisation", "Conversion"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200"
      },
      {
        title: "Analyse prédictive des performances",
        description: "Anticipez les résultats de vos campagnes, identifiez les opportunités et ajustez votre stratégie en temps réel grâce à l'analyse prédictive IA.",
        example: "Un éditeur SaaS a optimisé son budget ads en redirigeant 40K€ vers les canaux à plus fort ROI identifiés par l'IA, générant +85% de MRR additionnel.",
        metric: "+85% MRR",
        tags: ["Analytics", "Prédictif", "ROI"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200"
      },
      {
        title: "Chatbots intelligents et qualification",
        description: "Déployez des assistants conversationnels capables de qualifier les prospects 24/7, répondre aux questions techniques et prendre des rendez-vous automatiquement.",
        example: "Un cabinet de conseil a automatisé 70% de sa qualification initiale, libérant 15h/semaine à ses commerciaux pour se concentrer sur les closing.",
        metric: "-70% qualification manuelle",
        tags: ["Chatbot", "Lead Gen", "Support"],
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1200"
      }
    ]
  },

  // --------------------------------------------------------------------------
  // QUAND COMMENCER
  // --------------------------------------------------------------------------
  quandCommencer: {
    surtitre: "Votre prochaine étape",
    h2: "Trois façons de travailler avec nous",
    h2Highlight: "travailler avec nous",
    description: "Chaque entreprise est unique. Voici les trois modes de collaboration que nous proposons pour répondre précisément à vos enjeux.",
    scenarios: [
      {
        number: "01",
        badge: "AUDIT & STRATÉGIE",
        title: "Poser les fondations",
        subtitle: "Diagnostic complet et feuille de route",
        description: "Avant d'accélérer, il faut comprendre où vous en êtes. Notre audit 360° analyse votre positionnement, vos process et vos outils pour construire une stratégie sur-mesure.",
        whenToChoose: [
          "Vous ne savez pas par où commencer",
          "Vos actions marketing manquent de cohérence",
          "Vous voulez optimiser avant d'investir davantage",
          "Vous changez de direction ou de cible marché"
        ],
        deliverables: ["Audit complet", "Roadmap stratégique", "Quick wins identifiés"],
        duration: "3 à 4 semaines",
        investment: "À partir de 8K€",
        idealFor: "ETI & PME en croissance ou transformation",
        cta: "Demander un audit"
      },
      {
        number: "02",
        badge: "PROJET SUR-MESURE",
        title: "Exécution ciblée",
        subtitle: "Un projet, une équipe dédiée",
        description: "Vous avez un besoin marketing spécifique ? Nous concevons et déployons des solutions adaptées à votre contexte : refonte digitale, campagne d'acquisition, lancement produit...",
        whenToChoose: [
          "Vous avez identifié un besoin précis mais manquez de ressources",
          "Vous souhaitez externaliser une expertise pointue",
          "Vous préparez un lancement ou un temps fort commercial",
          "Vous avez besoin de renfort sur un projet stratégique"
        ],
        deliverables: ["Solution personnalisée", "Équipe projet dédiée", "Livraison clé en main"],
        duration: "4 à 12 semaines",
        investment: "Sur devis",
        idealFor: "PME & ETI avec un enjeu identifié",
        cta: "Discuter de mon projet"
      },
      {
        number: "03",
        badge: "PARTENAIRE LONG TERME",
        title: "Direction marketing externalisée",
        subtitle: "Un CMO et son équipe à vos côtés",
        description: "Bénéficiez d'un directeur marketing senior à temps partagé, soutenu par nos escadrons d'experts. Stratégie, pilotage et exécution en continu pour une croissance durable.",
        whenToChoose: [
          "Vous n'avez pas de direction marketing en interne",
          "Vous voulez scaler sans recruter immédiatement",
          "Vous cherchez un regard externe stratégique permanent",
          "Vous avez besoin d'agilité et d'expertise variée"
        ],
        deliverables: ["Pilotage continu", "Reporting mensuel", "Équipe modulable"],
        duration: "Engagement 6+ mois",
        investment: "À partir de 4K€/mois",
        idealFor: "ETI & Scale-ups ambitieuses",
        cta: "Explorer ce modèle"
      }
    ],
    bottomCta: {
      text: "Pas sûr de ce qui vous correspond ?",
      subtext: "Prenez 15 minutes avec nous pour en discuter. C'est gratuit et sans engagement.",
      button: { text: "Réserver un appel découverte", href: "/contact" }
    }
  },

  // --------------------------------------------------------------------------
  // À PROPOS
  // --------------------------------------------------------------------------
  aPropos: {
    surtitre: "À propos de Vizion",
    h2: "Notre histoire",
    h2Highlight: "histoire",
    paragraphs: [
      "Vizion est née d'un constat simple : les PME et ETI B2B méritent un accompagnement marketing de haut niveau, habituellement réservé aux grands groupes. Nous avons créé une structure agile qui combine l'expertise stratégique d'un cabinet de conseil avec la réactivité d'une équipe intégrée.",
      "Depuis notre création, nous avons accompagné plus de 70 entreprises dans leur transformation marketing et commerciale, avec un seul objectif : générer des résultats mesurables et durables."
    ],
    founderQuote: {
      quote: "Notre mission est de démocratiser l'excellence marketing pour les entreprises B2B ambitieuses.",
      name: "Lucas Gonzalez",
      role: "Fondateur & CEO — Vizion"
    },
    photoCaption: {
      label: "Notre équipe",
      title: "Une équipe passionnée par la croissance"
    },
    valeursTitre: "Nos valeurs",
    valeurs: [
      {
        title: "Excellence opérationnelle",
        description: "Nous visons l'excellence dans chaque livrable, chaque interaction, chaque résultat."
      },
      {
        title: "Agilité & Réactivité",
        description: "Notre structure légère nous permet de réagir en 24h et de nous adapter en temps réel."
      },
      {
        title: "Transparence totale",
        description: "Pas de jargon, pas de surprises. Des rapports clairs et des résultats mesurables."
      },
      {
        title: "Innovation continue",
        description: "Nous testons, adoptons et maîtrisons les outils et méthodes les plus avancés."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // ÉQUIPE / INTELLIGENCE COLLECTIVE
  // --------------------------------------------------------------------------
  equipe: {
    surtitre: "Notre modèle",
    h2: "L'intelligence collective",
    h2Highlight: "collective",
    description: "Un directeur marketing externalisé qui challenge vos idées, accompagné d'escadrons de consultants freelance déployés sur mesure pour chaque mission. Chaque expert pilote son sujet avec passion et expertise.",
    modelExplanation: {
      director: "Directeur Marketing Externalisé",
      squads: "Escadrons sur mesure"
    },
    scrollHint: "Faites défiler pour découvrir l'équipe",
    members: [
      {
        name: "Marie Dupont",
        role: "Lead SEO & Content",
        specialty: "SEO Technique",
        skills: ["SEO", "Content Strategy", "Analytics"],
        img: "https://i.pravatar.cc/300?img=1"
      },
      {
        name: "Thomas Martin",
        role: "Expert Automation",
        specialty: "Marketing Automation",
        skills: ["HubSpot", "Zapier", "Workflows"],
        img: "https://i.pravatar.cc/300?img=3"
      },
      {
        name: "Sophie Bernard",
        role: "Creative Director",
        specialty: "Brand & Design",
        skills: ["UI/UX", "Branding", "Webdesign"],
        img: "https://i.pravatar.cc/300?img=5"
      },
      {
        name: "Alexandre Petit",
        role: "Growth Hacker",
        specialty: "Acquisition",
        skills: ["Paid Ads", "LinkedIn", "Outbound"],
        img: "https://i.pravatar.cc/300?img=8"
      },
      {
        name: "Julie Moreau",
        role: "Data Analyst",
        specialty: "Data & Reporting",
        skills: ["Looker", "GA4", "Data Studio"],
        img: "https://i.pravatar.cc/300?img=9"
      },
      {
        name: "Pierre Leroy",
        role: "CRM Specialist",
        specialty: "Sales Enablement",
        skills: ["Salesforce", "Pipedrive", "CRM"],
        img: "https://i.pravatar.cc/300?img=11"
      }
    ]
  },

  // --------------------------------------------------------------------------
  // BLOG
  // --------------------------------------------------------------------------
  blog: {
    surtitre: "Ressources",
    h2: "Nos derniers articles",
    h2Highlight: "articles",
    ctaText: "Voir tous les articles"
  },

  // --------------------------------------------------------------------------
  // FAQ
  // --------------------------------------------------------------------------
  faq: {
    surtitre: "[ FAQ ]",
    h2: "Questions fréquentes",
    h2Highlight: "fréquentes",
    description: "Retrouvez les réponses aux questions les plus courantes sur notre accompagnement et notre méthodologie.",
    questions: [
      {
        question: "Quelles industries B2B accompagnez-vous ?",
        answer: "Nous accompagnons principalement les PME et ETI B2B dans les secteurs du SaaS, de l'industrie, des services professionnels, de la franchise et de la tech. Notre expertise couvre aussi bien les startups en phase de scale que les entreprises établies souhaitant moderniser leur approche marketing et commerciale."
      },
      {
        question: "Comment s'adapte votre approche aux PME vs ETI ?",
        answer: "Notre méthodologie est modulaire. Pour les PME, nous privilégions des actions à fort impact et ROI rapide avec des ressources optimisées. Pour les ETI, nous déployons des stratégies plus structurées avec une coordination multi-équipes et des processus de transformation plus profonds. Dans les deux cas, nous adaptons notre stack technologique et nos KPIs aux enjeux spécifiques de chaque structure."
      },
      {
        question: "Quel est le délai moyen pour voir des résultats ?",
        answer: "Les premiers résultats tangibles apparaissent généralement entre 30 et 90 jours selon le type de mission. Les quick wins (optimisation de landing pages, amélioration du taux de conversion) peuvent montrer des résultats en quelques semaines. Les stratégies de fond (SEO, content marketing, restructuration CRM) produisent des résultats durables sur 3 à 6 mois."
      },
      {
        question: "Travaillez-vous avec des entreprises internationales ?",
        answer: "Oui, nous accompagnons des entreprises françaises avec des ambitions internationales ainsi que des filiales françaises de groupes étrangers. Notre équipe maîtrise les spécificités des marchés européens et peut déployer des stratégies multi-pays en coordination avec vos équipes locales."
      },
      {
        question: "Comment intégrez-vous l'IA dans vos services ?",
        answer: "L'IA est intégrée à chaque étape de notre méthodologie : analyse prédictive pour le scoring des leads, génération de contenu assistée pour accélérer la production, personnalisation dynamique des parcours clients, automatisation intelligente des workflows. Nous formons également vos équipes à l'utilisation de ces outils pour maximiser votre autonomie."
      },
      {
        question: "Quelle est la durée d'engagement minimum ?",
        answer: "Nous proposons différentes formules selon vos besoins : missions ponctuelles (audit, projet spécifique), accompagnement mensuel (minimum 3 mois recommandé pour des résultats durables), ou partenariat annuel avec direction marketing externalisée. Chaque engagement inclut une période d'onboarding et des points de revue réguliers."
      }
    ],
    ctaText: "Vous avez d'autres questions ? Notre équipe est là pour vous répondre.",
    ctaButton: { text: "Nous contacter", href: "/contact" }
  },

  // --------------------------------------------------------------------------
  // CAS CLIENTS
  // --------------------------------------------------------------------------
  casClients: {
    surtitre: "Nos réalisations",
    h2: "Succès clients",
    ctaText: "Voir tous les cas clients",
    cases: [
      {
        slug: "fintech-b2b",
        titre: "Eldo Wallet",
        description: "Go-to-market structuré pour une fintech B2B : de 0 à 1000 clients et 850K€ MRR en 12 mois grâce au content marketing et partenariats stratégiques.",
        categorie: "SaaS B2B"
      },
      {
        slug: "eti-manufacturing",
        titre: "Précision Industries",
        description: "Digitalisation du parcours commercial d'une ETI industrielle de 250M€ CA : CRM, e-commerce B2B, automatisation. -30% coût acquisition, +45% productivité.",
        categorie: "Industrie B2B"
      }
    ]
  },

  // --------------------------------------------------------------------------
  // FINAL CTA
  // --------------------------------------------------------------------------
  finalCta: {
    trustBadge: "+70 clients satisfaits",
    h2: "Prêt à transformer votre marketing ?",
    h2Highlight: "votre marketing",
    description: "Rejoignez les entreprises B2B qui ont choisi l'excellence. Prenez rendez-vous pour un premier échange stratégique gratuit et sans engagement.",
    cta: {
      primary: { text: "Réserver un appel stratégique", href: "/contact" },
      secondary: { text: "Découvrir nos services", href: "/services" }
    },
    trustElements: [
      "Réponse sous 24h",
      "Sans engagement",
      "Audit gratuit inclus"
    ]
  }
};

// ============================================================================
// SCHEMA.ORG MARKUP
// ============================================================================

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Vizion",
  "description": "Cabinet de conseil marketing B2B spécialisé en stratégie digitale, growth marketing et CRM automation pour PME et ETI.",
  "url": "https://vizion.fr",
  "logo": "https://vizion.fr/logo.png",
  "sameAs": [
    "https://www.linkedin.com/company/vizion-marketing"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Paris",
    "addressCountry": "FR"
  },
  "priceRange": "€€€",
  "areaServed": {
    "@type": "Country",
    "name": "France"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services Marketing B2B",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Stratégie Marketing B2B"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "CRM & Marketing Automation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Growth Marketing & Lead Generation"
        }
      }
    ]
  }
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": homeContent.faq.questions.map(item => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer
    }
  }))
};

export default homeContent;
