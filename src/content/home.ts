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
  image: string;
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
    title: "Agence de Marketing Stratégique à Toulouse | Vizion",
    description: "Vizion, agence de marketing stratégique à Toulouse. Nous concevons des stratégies marketing alignées sur vos objectifs business et les déployons jusqu'au terrain commercial. PME, ETI, scale-ups : lancement, repositionnement, accélération. Directeur marketing dédié. +70 entreprises accompagnées.",
    keywords: [
      "agence de marketing stratégique toulouse",
      "agence marketing stratégique toulouse",
      "marketing stratégique toulouse",
      "agence marketing toulouse",
      "conseil en marketing stratégique toulouse",
      "directeur marketing externalisé toulouse",
      "marketing produit toulouse",
      "sales enablement toulouse",
      "consultant marketing stratégique toulouse",
      "accompagnement marketing B2B toulouse"
    ],
    ogImage: "/og-image.jpg"
  },

  // --------------------------------------------------------------------------
  // HERO SECTION
  // --------------------------------------------------------------------------
  hero: {
    badge: "AGENCE DE MARKETING STRATÉGIQUE — TOULOUSE",
    h1: "VOTRE AGENCE DE MARKETING STRATÉGIQUE À TOULOUSE",
    h1Highlight: "STRATÉGIQUE",
    baseline: "Votre performance marketing et commerciale repose sur quatre leviers : des décisions éclairées, des canaux efficaces, des processus optimisés et des équipes marketing et commerciales qui parlent le même langage. Chez Vizion, nous les construisons avec vous.",
    badges: [
      "Décisions éclairées",
      "Canaux marketing efficaces",
      "Process commerciaux optimisés"
    ],
    cta: {
      primary: { text: "Nous contacter", href: "/contact" },
      secondary: { text: "Voir nos réalisations", href: "/cas-clients" }
    },
    socialProof: "+70 ENTREPRISES ACCOMPAGNÉES DEPUIS 2021"
  },

  // --------------------------------------------------------------------------
  // PREUVE SOCIALE
  // --------------------------------------------------------------------------
  preuveSociale: {
    surtitre: "[ NOS RÉALISATIONS ]",
    h2: "BIENVENUE CHEZ VIZION, L'AGENCE TOULOUSAINE QUI AVANCE À CONTRE-COURANT",
    h2Highlight: "CONTRE-COURANT",
    description: "Quand nous avons fondé Vizion en 2021, c'était pour bâtir l'agence que nous aurions aimé trouver : une agence où les stratégies sont imaginées sur mesure pour s'adapter à votre secteur, vos enjeux, vos cycles de vente — pas de méthodes préconstruites, pas de recettes toutes faites. Depuis, plus de 70 entreprises se sont reconnues dans cette Vizion.",
    trustBanner: "Depuis 2021, plus de 70 PME, ETI et scale-ups nous font confiance pour leur marketing stratégique à Toulouse et en France",
    trustBannerHighlight: "70 PME, ETI et scale-ups",

    clients: [
      {
        type: "growth",
        value: "25",
        subtitle: "Franchises déployées",
        title: "De 0 à 25 franchises en 1 an",
        logo: "easyVirtual.tours",
        category: "Direction Marketing Externalisée",
        slug: "easyvirtual-tours-franchise",
        bg: "/images/clients/easyvirtual-bg.jpg"
      },
      {
        type: "metric",
        value: "+1000%",
        label: "Trafic SEO en 3 mois",
        logo: "Ensenat Coaching",
        category: "SEO & Content Marketing",
        slug: "ensenat-coaching"
      },
      {
        type: "minimal",
        logo: "Eldo Wallet",
        category: "Go-to-Market & Sales",
        slug: "fintech-b2b",
        bg: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800"
      },
      {
        type: "testimonial",
        slug: null
      },
      {
        type: "metric",
        value: "1M",
        label: "Vues LinkedIn",
        logo: "Olivier Bas",
        category: "Personal Branding LinkedIn",
        slug: "olivier-bas-linkedin"
      }
    ],
    testimonial: {
      quote: "C'est vraiment un bonheur de les avoir au quotidien. Vizion est réellement investie dans notre croissance, ils font partie de l'équipe.",
      name: "CLÉMENT",
      role: "Co-fondateur — easyVirtual.tours"
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
    surtitre: "NOS DOMAINES D'INTERVENTION",
    h2: "C'EST POURQUOI NOUS AVONS DÉVELOPPÉ UNE EXPERTISE AUTOUR DE 5 ENJEUX COMMERCIAUX ET MARKETING MAJEURS",
    description: "Notre agence intervient sur cinq domaines complémentaires pour améliorer votre performance marketing et commerciale. Des canaux plus efficaces, des décisions mieux informées, des processus optimisés et des équipes alignées : chaque intervention est conçue pour produire des résultats mesurables.",
    badgeText: "Notre approche",
    badgeStatus: "STRATÉGIQUE",
    piliers: [
      {
        numero: "01",
        surtitre: "PRODUCT MARKETING",
        titre: "Soyez compris de tous vos clients, même quand votre produit est complexe",
        description: "Votre produit est technique. Vos prospects décrochent avant d'en comprendre la valeur. Vous avez besoin d'un partenaire capable de se mettre à votre niveau — et de traduire cette expertise en un discours clair, compris par tous vos interlocuteurs. Nous structurons votre positionnement, votre proposition de valeur et votre architecture de message. Résultat : un narratif produit qui accélère chaque conversation commerciale.",
        services: ["Audit marketing & positionnement", "Architecture de message", "Plan de mise en marché", "Proposition de valeur", "Roadmap marketing stratégique", "Ateliers et formations"],
        cta: "DÉFINIR VOTRE STRATÉGIE"
      },
      {
        numero: "02",
        surtitre: "ACTIFS DIGITAUX & CONVERSION",
        titre: "Faites de votre site un commercial qui travaille 24h/24",
        description: "Votre site existe, mais il ne génère ni leads, ni confiance. Les visiteurs passent, lisent, et repartent sans agir. Nous concevons des interfaces pensées pour les cycles de décision longs du B2B — chaque page guide vos prospects vers l'action au bon moment. Résultat : un actif digital qui convertit en continu, même quand vos équipes dorment.",
        services: ["Sites web B2B performants", "Landing pages de conversion", "Tunnels d'acquisition", "Pages institutionnelles", "Visuels stratégiques", "Optimisation UX/UI"]
      },
      {
        numero: "03",
        surtitre: "SALES ENABLEMENT",
        titre: "Équipez vos commerciaux pour vendre, pas pour bricoler des slides",
        description: "Vos commerciaux passent plus de temps à fabriquer leurs supports qu'à vendre. Les présentations sont incohérentes, les argumentaires improvisés. Nous créons les outils qui font la différence en rendez-vous : pitch decks, argumentaires structurés, supports d'aide à la décision. Résultat : des cycles de vente plus courts et un taux de closing en hausse.",
        services: ["Présentations commerciales", "Pitch decks stratégiques", "Argumentaires de vente", "Supports d'aide à la décision", "Stratégies LinkedIn", "Personal branding dirigeant"]
      },
      {
        numero: "04",
        surtitre: "ACQUISITION & LEAD GENERATION",
        titre: "Remplissez votre pipe sans dépendre du bouche-à-oreille",
        description: "Votre croissance repose sur quelques clients historiques et sur le hasard. Quand le pipe se tarit, c'est la panique. Nous construisons des systèmes d'acquisition reproductibles — les bons canaux, les bons messages, les bons dispositifs pour votre marché. Résultat : un pipeline commercial alimenté en continu, de manière prévisible.",
        services: ["Campagnes d'emailing avancées", "Lead nurturing automatisé", "LinkedIn Ads & Google Ads", "Référencement SEO", "Content marketing B2B", "Lead magnets & acquisition"]
      },
      {
        numero: "05",
        surtitre: "AUTOMATISATION & CRM",
        titre: "Scalez sans que vos processus explosent en vol",
        description: "Vos équipes jonglent entre les outils, les tâches manuelles et les données dispersées. Ce qui fonctionnait à 10 clients ne tient plus à 50. Nous structurons vos systèmes d'information marketing et commerciaux : CRM, automatisations, intégrations, dashboards. Résultat : des processus fiables qui soutiennent votre croissance au lieu de la freiner.",
        services: ["Déploiement CRM (HubSpot, Pipedrive, GHL)", "Automatisations avancées", "Intégrations API sur mesure", "Workflows métier personnalisés", "Dashboards & reporting", "Migration de données"]
      }
    ],
    ctaText: "Rejoignez les 70+ entreprises qui ont structuré leur marketing stratégique avec Vizion.",
    socialProofText: "+70 entreprises accompagnées depuis 2021",
    cta: {
      secondary: { text: "Voir nos réalisations", href: "/cas-clients" },
      primary: { text: "Parlons de vos enjeux", href: "/contact" }
    }
  },

  // --------------------------------------------------------------------------
  // IA HIGHLIGHT - VIBE CODING
  // --------------------------------------------------------------------------
  iaHighlight: {
    surtitre: "CE QUI DIFFÉRENCIE NOTRE AGENCE DE MARKETING STRATÉGIQUE",
    h2: "L'IA COMME LEVIER, PAS COMME ARGUMENT",
    h2Highlight: "LEVIER",
    introduction: "Notre agence de marketing stratégique intègre l'intelligence artificielle dans ses méthodologies et dans celles de ses clients. Le déploiement est réfléchi : nous l'utilisons là où elle apporte une valeur ajoutée mesurable, pas de manière systématique. La stratégie et les décisions restent pilotées par l'expertise humaine.",
    whyImportant: [
      "L'IA permet de créer des contenus d'acquisition en une fraction du temps habituel.",
      "Nous trions et enrichissons des listes de prospection pour prioriser les comptes à fort potentiel.",
      "Nous personnalisons les approches commerciales à l'échelle, sans sacrifier la pertinence."
    ],
    useCases: [
      {
        title: "Outils métier sur mesure",
        description: "Lorsque les solutions du marché ne correspondent pas à vos processus métier, nous développons des outils dédiés qui s'intègrent à votre réalité opérationnelle. Cette approche évite les compromis coûteux avec des solutions génériques.",
        example: "Accompagnement d'un acteur industriel sur un processus de qualification manuel chronophage. Développement d'un outil de scoring automatisé permettant un gain de 15h hebdomadaires.",
        metric: "15h/sem gagnées",
        tags: ["Développement", "Productivité", "Sur-mesure"],
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200"
      },
      {
        title: "Automatisation des processus",
        description: "Structuration et automatisation des workflows marketing et commerciaux. Nous connectons vos outils existants et industrialisons les tâches à faible valeur ajoutée pour libérer du temps sur les activités stratégiques.",
        example: "Automatisation de 80% du parcours d'accueil client pour une ETI, réduisant le délai de 2 semaines à 3 jours tout en améliorant la satisfaction.",
        metric: "-80% temps onboarding",
        tags: ["Automation", "CRM", "Efficacité"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200"
      },
      {
        title: "Production de contenu assistée",
        description: "Accélération de la production de contenu marketing grâce à l'intelligence artificielle, tout en maintenant la qualité et l'expertise métier. Chaque production est validée par nos experts avant publication.",
        example: "Un éditeur SaaS a multiplié par 5 sa production de contenu, générant une augmentation de 150% du trafic organique qualifié en 6 mois.",
        metric: "x5 production",
        tags: ["Contenu", "SEO", "IA"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200"
      },
      {
        title: "Qualification intelligente",
        description: "Utilisation de l'intelligence artificielle pour analyser les signaux d'intention d'achat et prioriser les comptes à fort potentiel. Vos équipes commerciales concentrent leur énergie sur les opportunités les plus qualifiées.",
        example: "Réduction de 60% du temps de qualification pour une ETI industrielle, permettant aux équipes commerciales de se concentrer sur les phases de closing.",
        metric: "-60% temps qualification",
        tags: ["Qualification", "Ventes", "IA"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200"
      },
      {
        title: "Tableaux de bord unifiés",
        description: "Création de tableaux de bord sur mesure qui agrègent vos données en temps réel. Automatisation du reporting pour permettre aux équipes de se concentrer sur l'analyse et la décision plutôt que sur la compilation.",
        example: "Remplacement de 5 rapports manuels par un tableau de bord unifié avec alertes automatiques sur les indicateurs critiques.",
        metric: "5 rapports → 1 dashboard",
        tags: ["Data", "Reporting", "Automatisation"],
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1200"
      }
    ]
  },

  // --------------------------------------------------------------------------
  // QUAND COMMENCER
  // --------------------------------------------------------------------------
  quandCommencer: {
    surtitre: "COMMENT NOUS TRAVAILLONS",
    h2: "DEUX MODES D'ACCOMPAGNEMENT EN MARKETING STRATÉGIQUE",
    h2Highlight: "ACCOMPAGNEMENT",
    description: "Nous adaptons notre intervention à vos besoins : mission ciblée sur un enjeu précis ou direction marketing externalisée dans la durée. Dans les deux cas, un directeur marketing dédié pilote l'ensemble de vos travaux — pas un chef de projet, un expert capable de dialoguer avec vos équipes dirigeantes.",
    scenarios: [
      {
        number: "01",
        badge: "MISSION",
        title: "Mission Stratégique Ciblée",
        subtitle: "Un enjeu défini, une équipe dédiée",
        description: "Vous traversez un moment stratégique : lancement de produit, repositionnement, structuration d'une offre. Nous intervenons sur un périmètre défini. Un directeur marketing dédié pilote l'ensemble de vos travaux.",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800",
        whenToChoose: [
          "Vous préparez un lancement de produit ou une innovation",
          "Votre positionnement nécessite une clarification",
          "Vous devez structurer votre discours de marque",
          "Vous avez besoin d'expertise stratégique ponctuelle"
        ],
        deliverables: ["Directeur marketing dédié", "Équipe projet mobilisée", "Livrables stratégiques et opérationnels"],
        duration: "8 à 16 semaines",
        investment: "Sur devis",
        idealFor: "PME & ETI avec un enjeu stratégique identifié",
        cta: "Échanger sur votre enjeu"
      },
      {
        number: "02",
        badge: "ACCOMPAGNEMENT",
        title: "Direction Marketing Externalisée",
        subtitle: "Un partenaire stratégique au quotidien",
        description: "Nous endossons le rôle de votre direction marketing. Un directeur marketing dédié pilote votre stratégie, coordonne vos actions, assure le lien avec vos équipes dirigeantes et mobilise les experts spécialisés selon vos besoins.",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800",
        whenToChoose: [
          "Vous ne disposez pas de direction marketing en interne",
          "Vous souhaitez structurer sans recruter un CMO",
          "L'alignement marketing-ventes constitue un frein à votre croissance",
          "Vous recherchez un regard externe et stratégique"
        ],
        deliverables: ["Directeur marketing dédié", "Pilotage stratégique continu", "Accès à nos experts spécialisés", "Reporting mensuel"],
        duration: "Engagement 6 mois minimum",
        investment: "À partir de 4 500 €/mois",
        idealFor: "ETI & Scale-ups en phase de croissance",
        cta: "Découvrir l'accompagnement"
      }
    ],
    bottomCta: {
      text: "Vous ne savez pas quel mode d'accompagnement correspond à vos enjeux ?",
      subtext: "Nous vous aidons à identifier l'approche la plus adaptée à votre situation en 15 minutes.",
      button: { text: "Parlons-en ensemble", href: "/contact" }
    }
  },

  // --------------------------------------------------------------------------
  // À PROPOS
  // --------------------------------------------------------------------------
  aPropos: {
    surtitre: "NOTRE CONVICTION",
    h2: "DES STRATÈGES, PAS UNE AGENCE D'EXÉCUTION",
    h2Highlight: "STRATÈGES",
    paragraphs: [
      "Le marketing s'est perdu. Trop souvent cantonné à la communication, aux vanity metrics ou aux tactiques déconnectées du terrain, il a oublié sa raison d'être : faciliter la vente.",
      "Vizion n'est pas une agence que l'on consulte pour produire un logo ou refaire une plaquette. Nous sommes des stratèges. Nous concevons des feuilles de route marketing alignées sur vos objectifs business, et nous les déployons jusqu'au terrain commercial. Chaque livrable intervient au bon moment, pour les bonnes raisons, au service d'une stratégie définie."
    ],
    founderQuote: {
      quote: "Nous challengeons les demandes, nous questionnons les priorités, nous refusons de produire pour produire. Le marketing doit servir la stratégie de l'entreprise et raccourcir les cycles de décision.",
      name: "Lucas Gonzalez",
      role: "Co-fondateur — Vizion"
    },
    photoCaption: {
      label: "Vizion",
      title: "Agence de marketing stratégique à Toulouse"
    },
    valeursTitre: "NOS ENGAGEMENTS",
    valeurs: [
      {
        title: "Orientation solutions",
        description: "Nous identifions des réponses adaptées, même face aux problématiques les plus complexes."
      },
      {
        title: "Exigence",
        description: "Chaque projet bénéficie de notre engagement total, sans compromis sur la qualité."
      },
      {
        title: "Transparence",
        description: "Nous communiquons avec réalisme sur les résultats attendus et les délais de mise en œuvre."
      },
      {
        title: "Résilience",
        description: "Nous maintenons notre cap face aux obstacles et capitalisons sur chaque expérience."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // ÉQUIPE / INTELLIGENCE COLLECTIVE
  // --------------------------------------------------------------------------
  equipe: {
    surtitre: "L'ÉQUIPE",
    h2: "LES MEILLEURS TALENTS DE LA VILLE ROSE ET D'AILLEURS, À VOTRE SERVICE",
    h2Highlight: "VILLE ROSE",
    description: "Notre agence de marketing stratégique s'appuie sur une équipe interne structurée et un réseau de consultants experts, mobilisés selon les besoins de chaque projet. Le meilleur des deux modèles : continuité d'accompagnement et accès à des compétences pointues. Chaque client bénéficie d'un directeur marketing dédié — pas un chef de projet, un expert du marketing stratégique capable de dialoguer avec vos équipes dirigeantes.",
    modelExplanation: {
      director: "Votre Directeur Marketing Dédié",
      squads: "Nos Experts Spécialisés"
    },
    scrollHint: "Découvrez nos experts",
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
    surtitre: "[ RESSOURCES ]",
    h2: "NOS PUBLICATIONS",
    h2Highlight: "PUBLICATIONS",
    ctaText: "Accéder aux ressources"
  },

  // --------------------------------------------------------------------------
  // FAQ
  // --------------------------------------------------------------------------
  faq: {
    surtitre: "[ FAQ ]",
    h2: "QUESTIONS FRÉQUENTES SUR NOTRE AGENCE",
    h2Highlight: "FRÉQUENTES",
    description: "Nous communiquons avec transparence sur nos modalités d'intervention. Voici les réponses aux questions les plus fréquentes sur notre agence de marketing stratégique à Toulouse.",
    questions: [
      {
        question: "Qu'est-ce qu'une agence de marketing stratégique ?",
        answer: "Une agence de marketing stratégique conçoit des feuilles de route marketing alignées sur les objectifs business de l'entreprise, contrairement aux agences d'exécution qui produisent des livrables sans cadre stratégique. Chez Vizion, chaque action marketing — positionnement, architecture de message, sales enablement, acquisition — s'inscrit dans une stratégie définie. Nous intervenons de la conception jusqu'au terrain commercial, y compris dans les phases de négociation et de closing."
      },
      {
        question: "Pourquoi choisir Vizion comme agence de marketing stratégique à Toulouse ?",
        answer: "Vizion se distingue par trois caractéristiques : un directeur marketing dédié (pas un chef de projet) qui pilote l'ensemble de vos travaux et dialogue avec vos équipes dirigeantes ; une intervention couvrant tout le cycle commercial, du positionnement jusqu'aux outils d'aide à la vente ; et une intégration réfléchie de l'intelligence artificielle là où elle apporte une valeur ajoutée mesurable. Plus de 70 PME, ETI et scale-ups nous font confiance depuis 2021."
      },
      {
        question: "Avec quels types d'entreprises travaillez-vous ?",
        answer: "Nous travaillons avec des PME de 10 à 250 collaborateurs, des ETI et des scale-ups en phase de croissance. Nos clients évoluent dans l'industrie, les technologies, l'édition de logiciels et les services B2B à forte valeur ajoutée. Nous collaborons avec des dirigeants qui ont compris que le marketing n'est pas une solution miracle : construire une présence sur son marché demande du temps, de l'itération et un engagement dans la durée."
      },
      {
        question: "Quelle est la différence entre une mission stratégique et une direction marketing externalisée ?",
        answer: "La mission stratégique ciblée (8 à 16 semaines) intervient sur un enjeu précis : lancement de produit, repositionnement, structuration d'une offre. La direction marketing externalisée (engagement minimum 6 mois, à partir de 4 500 €/mois) est un accompagnement dans la durée où nous endossons le rôle de votre direction marketing. Dans les deux cas, un directeur marketing dédié pilote l'ensemble des travaux."
      },
      {
        question: "Intervenez-vous uniquement à Toulouse ?",
        answer: "Notre agence de marketing stratégique est basée à Toulouse, mais nous accompagnons des clients partout en France et à l'international. Nous adaptons nos modalités d'intervention : sessions en présentiel, visioconférences, déplacements ponctuels selon les besoins du projet. La proximité avec Toulouse et l'Occitanie reste un atout pour nos clients locaux."
      },
      {
        question: "Comment intégrez-vous l'intelligence artificielle dans votre approche ?",
        answer: "L'IA est un levier, pas un argument. Nous l'intégrons là où elle apporte une valeur ajoutée mesurable : création de lead magnets et contenus d'acquisition en une fraction du temps, tri et enrichissement de listes de prospection pour prioriser les comptes à fort potentiel, personnalisation des approches commerciales à l'échelle. La stratégie et les décisions restent pilotées par l'expertise humaine."
      },
      {
        question: "Travaillez-vous avec les équipes marketing internes ?",
        answer: "Nous travaillons aux côtés des directions marketing, pas à leur place. Notre rôle est de renforcer vos équipes : apporter une expertise complémentaire en marketing stratégique, structurer les processus, transférer les compétences. La pédagogie fait partie intégrante de notre approche. Un accompagnement réussi, c'est une équipe interne plus autonome à la fin du projet."
      }
    ],
    ctaText: "Une autre question ? Échangeons directement.",
    ctaButton: { text: "Nous contacter", href: "/contact" }
  },

  // --------------------------------------------------------------------------
  // CAS CLIENTS
  // --------------------------------------------------------------------------
  casClients: {
    surtitre: "[ ÉTUDES DE CAS ]",
    h2: "NOS ACCOMPAGNEMENTS CLIENTS",
    ctaText: "Découvrir nos réalisations",
    cases: [
      {
        slug: "fintech-b2b",
        titre: "Eldo Wallet",
        description: "Structuration du go-to-market de cette fintech B2B : passage de 0 à 1000 clients et 850K€ MRR en 12 mois. Pilotage de l'ensemble des travaux marketing et commerciaux.",
        categorie: "SaaS B2B"
      },
      {
        slug: "eti-manufacturing",
        titre: "Précision Industries",
        description: "Accompagnement de la transformation digitale de cette ETI industrielle (250M€ CA). Résultat : -30% coût d'acquisition client et structuration des outils commerciaux.",
        categorie: "Industrie B2B"
      }
    ]
  },

  // --------------------------------------------------------------------------
  // FINAL CTA
  // --------------------------------------------------------------------------
  finalCta: {
    trustBadge: "+70 entreprises à Toulouse et en France nous font confiance",
    h2: "ÉCHANGEONS SUR VOS ENJEUX STRATÉGIQUES",
    h2Highlight: "STRATÉGIQUES",
    description: "Vous traversez un moment stratégique — lancement, repositionnement, accélération — et le marketing devient un enjeu de performance commerciale ? Notre agence de marketing stratégique à Toulouse vous propose un échange de 15 minutes pour identifier si nous pouvons vous accompagner.",
    cta: {
      primary: { text: "Parlons de votre projet", href: "/contact" },
      secondary: { text: "Voir nos réalisations", href: "/cas-clients" }
    },
    trustElements: [
      "Réponse sous 24h",
      "Échange sans engagement",
      "Premier cadrage offert"
    ]
  }
};

// ============================================================================
// SCHEMA.ORG MARKUP
// ============================================================================

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://by-vizion.com/#organization",
  "name": "Vizion — Agence de Marketing Stratégique à Toulouse",
  "alternateName": ["Vizion", "Vizion Marketing Stratégique", "Agence Marketing Stratégique Toulouse"],
  "description": "Agence de marketing stratégique à Toulouse. Vizion conçoit des stratégies marketing alignées sur les objectifs business des PME, ETI et scale-ups, et les déploie jusqu'au terrain commercial. Lancement de produit, repositionnement, accélération de croissance. Plus de 70 entreprises accompagnées depuis 2021.",
  "url": "https://by-vizion.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://by-vizion.com/logo-vizion.svg",
    "width": 200,
    "height": 60
  },
  "image": "https://by-vizion.com/og-image.jpg",
  "telephone": "+33750836543",
  "email": "contact@by-vizion.com",
  "sameAs": [
    "https://www.linkedin.com/company/vizion-marketing-b2b/"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "815 La Pyrénéenne",
    "addressLocality": "Labège",
    "addressRegion": "Occitanie",
    "postalCode": "31670",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 43.5416,
    "longitude": 1.5102
  },
  "priceRange": "€€€",
  "currenciesAccepted": "EUR",
  "paymentAccepted": "Virement bancaire, Carte de crédit",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "areaServed": [
    {
      "@type": "City",
      "name": "Toulouse"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Occitanie"
    },
    {
      "@type": "Country",
      "name": "France"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "5",
    "reviewCount": "5"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Client Vérifié"
      },
      "datePublished": "2024-12-15",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Excellente agence, très professionnelle et à l'écoute. Résultats concrets sur notre stratégie marketing."
    }
  ],
  "founder": [
    {
      "@type": "Person",
      "name": "Lucas Gonzalez",
      "jobTitle": "Co-fondateur — Spécialiste du marketing produit, du positionnement et du discours de marque"
    },
    {
      "@type": "Person",
      "name": "Hugo Schuppe",
      "jobTitle": "Co-fondateur — Expert technique : automatisations, intégrations, systèmes d'information"
    }
  ],
  "foundingDate": "2021",
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "minValue": 2,
    "maxValue": 10
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services Marketing Stratégique",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Stratégie & Marketing Produit",
          "description": "Définition du positionnement et de l'architecture de message. Identification des leviers de croissance et construction d'une proposition de valeur différenciante."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Actifs Digitaux & Conversion",
          "description": "Conception d'interfaces performantes adaptées aux parcours de décision longs et aux cycles de vente complexes."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Aide à la Vente & Influence",
          "description": "Renforcement de l'efficacité commerciale par la mise à disposition d'outils et de contenus adaptés à chaque phase du cycle de vente."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Acquisition & Génération d'Opportunités",
          "description": "Génération d'un flux régulier d'opportunités commerciales qualifiées via des dispositifs ciblés."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Automatisation & CRM",
          "description": "Structuration des systèmes d'information marketing et commerciaux pour soutenir la croissance."
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