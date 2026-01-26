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
    title: "Agence Marketing Toulouse | Vizion - Experts B2B PME & ETI",
    description: "Agence marketing Toulouse spécialisée B2B. Vizion accompagne +70 PME et ETI : stratégie commerciale, lead generation, CRM automation. Basés à Labège, Occitanie.",
    keywords: [
      "agence marketing Toulouse",
      "agence marketing B2B Toulouse",
      "marketing B2B Toulouse",
      "agence growth Toulouse",
      "marketing PME Toulouse",
      "marketing ETI Toulouse",
      "lead generation Toulouse",
      "agence digitale Toulouse",
      "smarketing",
      "alignement sales marketing"
    ],
    ogImage: "/og-image.jpg"
  },

  // --------------------------------------------------------------------------
  // HERO SECTION
  // --------------------------------------------------------------------------
  hero: {
    badge: "AGENCE MARKETING B2B — TOULOUSE, OCCITANIE",
    h1: "AGENCE MARKETING TOULOUSE SPÉCIALISTE B2B",
    h1Highlight: "TOULOUSE",
    baseline: "Chez Vizion nous fusionons stratégies de croissance, déploiement opérationnel et Intelligence Artificielle pour remettre le Marketing au service de ce qui compte vraiment : la vente.",
    badges: [
      "Réactivité garantie en 24h",
      "Expertise B2B et Franchise",
      "Partenariat Long-Terme"
    ],
    cta: {
      primary: { text: "Parlons de votre projet", href: "/contact" },
      secondary: { text: "Parcourir nos cas clients", href: "/cas-clients" }
    },
    socialProof: "+70 DIRECTIONS MARKETING NOUS ONT DÉJA FAIT CONFIANCE"
  },

  // --------------------------------------------------------------------------
  // PREUVE SOCIALE
  // --------------------------------------------------------------------------
  preuveSociale: {
    surtitre: "[ NOS STRATEGIES MARKETING PAYANTES ]",
    h2: "ILS ONT FAIT DE NOUS LE PARTENAIRE DE LEUR CROISSANCE",
    h2Highlight: "CROISSANCE",
    description: "Nous croyons fermement que de bons résultats ne peuvent pas être obtenus sans un véritable engagement. C'est pourquoi nous considérons chaque projet comme le nôtre. Faire confiance à Vizion, c'est faire confiance à un partenaire réellement investi dans votre croissance.",
    trustBanner: "Depuis 2021, plus de 70 directions Marketing et directions générales nous ont fait confiance",
    trustBannerHighlight: "70 directions Marketing",

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
    surtitre: "NOTRE SAVOIR-FAIRE EN 5 PILIERS",
    h2: "NOTRE VISION D'UNE AGENCE MARKETING B2B",
    description: "Nous avons structuré notre approche autour de 5 piliers qui répondent chacun à vos problématiques concrètes. De votre stratégie à vos automatisations, nous couvrons l'intégralité de votre chaîne de valeur.",
    badgeText: "Notre méthode",
    badgeStatus: "SMARKETING",
    piliers: [
      {
        numero: "01",
        surtitre: "STRATÉGIE",
        titre: "Stratégie & Product Marketing",
        description: "Nous commençons par comprendre votre marché, votre produit et vos enjeux. Ensemble, nous définissons la trajectoire et positionnons votre offre pour qu'elle devienne l'évidence aux yeux de vos prospects.",
        services: ["Audit Stratégique", "Positionnement", "Product Marketing", "Go-to-Market", "Workshops", "Formation"],
        cta: "DÉFINIR VOTRE STRATÉGIE"
      },
      {
        numero: "02",
        surtitre: "CONVERSION",
        titre: "Assets Digitaux & Conversion",
        description: "Nous créons des interfaces haute performance pensées pour vos cibles B2B. Nos sites, landing pages et tunnels sont conçus pour transformer vos visiteurs en opportunités qualifiées.",
        services: ["Landing Pages", "Sites Web B2B", "Tunnels de Conversion", "Optimisation UX", "Tests A/B"]
      },
      {
        numero: "03",
        surtitre: "SALES ENABLEMENT",
        titre: "Sales Enablement & LinkedIn",
        description: "Nous donnons les super-pouvoirs à vos commerciaux pour raccourcir vos cycles de vente. Notre expertise LinkedIn, personal branding et création de supports fait la différence.",
        services: ["LinkedIn for Growth", "Personal Branding", "Supports Commerciaux", "Argumentaires", "Social Selling"]
      },
      {
        numero: "04",
        surtitre: "ACQUISITION",
        titre: "Growth & Campagnes",
        description: "Nous générons un flux régulier d'opportunités qualifiées pour votre équipe commerciale. Nous activons les canaux qui fonctionnent vraiment pour votre cible spécifique.",
        services: ["Emailing B2B", "SEO Technique", "LinkedIn Ads", "Google Ads", "ABM", "Content Marketing"]
      },
      {
        numero: "05",
        surtitre: "VIBE CODING",
        titre: "Automation, CRM & Micro-SaaS",
        description: "Nous mettons notre expertise technique au service de votre productivité. Nous implémentons vos CRM, automatisons vos process et développons des micro-SaaS sur mesure pour vos besoins.",
        services: ["Setup CRM", "Automatisations", "Micro-SaaS", "Vibe Coding", "Intégrations", "Workflows"]
      }
    ],
    ctaText: "Rejoignez les PME et ETI à qui nous avons permis d'aligner leur croissance.",
    socialProofText: "+70 clients nous font confiance",
    cta: {
      secondary: { text: "Voir nos résultats", href: "/cas-clients" },
      primary: { text: "Parlons de vos enjeux", href: "/contact" }
    }
  },

  // --------------------------------------------------------------------------
  // IA HIGHLIGHT - VIBE CODING
  // --------------------------------------------------------------------------
  iaHighlight: {
    surtitre: "Ce qui nous différencie",
    h2: "NOTRE APPROCHE VIBE CODING : NOUS CRÉONS VOS OUTILS",
    h2Highlight: "VIBE CODING",
    introduction: "Le Vibe Coding, c'est notre capacité à développer des outils et micro-SaaS sur mesure pour votre entreprise en un temps record. Là où d'autres agences se contentent de recommander des solutions existantes, nous préférons créer celles dont vous avez vraiment besoin.",
    whyImportant: [
      "Nous développons des micro-SaaS sur mesure pour résoudre VOS problèmes métier spécifiques.",
      "Notre vitesse d'exécution est inédite : de votre idée au produit en quelques jours.",
      "Nous intégrons l'IA à chaque étape pour multiplier votre productivité."
    ],
    useCases: [
      {
        title: "Micro-SaaS sur mesure",
        description: "Vous avez un process métier inefficace ? Nous vous développons un outil dédié en quelques jours. Nous refusons les compromis avec des solutions génériques qui ne correspondent pas à votre réalité.",
        example: "Nous avons accompagné un client industriel qui passait 4h/jour sur un process de qualification manuel. Nous lui avons créé un outil de scoring automatisé — résultat : 15h/semaine gagnées.",
        metric: "15h/sem gagnées",
        tags: ["Vibe Coding", "Micro-SaaS", "Productivité"],
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200"
      },
      {
        title: "Automatisations complexes",
        description: "Nous connectons vos outils entre eux et automatisons vos tâches répétitives. CRM, facturation, onboarding client — nous rendons votre quotidien plus fluide.",
        example: "Nous avons aidé une ETI à automatiser 80% de son onboarding client, passant de 2 semaines à 3 jours tout en améliorant la satisfaction.",
        metric: "-80% temps onboarding",
        tags: ["Automation", "CRM", "Efficacité"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200"
      },
      {
        title: "Content à l'échelle",
        description: "Nous accélérons votre production de contenu grâce à l'IA : articles, emails, posts LinkedIn. Plus de volume pour votre marque, même niveau d'exigence, validé par nos experts.",
        example: "Nous avons permis à un client SaaS de multiplier par 5 sa production de contenu, générant +150% de trafic organique qualifié en 6 mois.",
        metric: "x5 production",
        tags: ["Content Marketing", "SEO", "IA"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200"
      },
      {
        title: "Scoring & qualification IA",
        description: "Nous utilisons l'IA pour analyser les signaux faibles de vos prospects. Vos commerciaux ne contactent ainsi que ceux prêts à signer. Nous éliminons le temps perdu.",
        example: "Nous avons aidé une ETI industrielle à réduire de 60% son temps de qualification, permettant à ses sales de se concentrer sur le closing.",
        metric: "-60% temps qualification",
        tags: ["Lead Scoring", "Sales", "IA"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200"
      },
      {
        title: "Dashboards & reporting",
        description: "Nous créons des tableaux de bord sur mesure qui agrègent vos données en temps réel. Nous automatisons votre reporting pour que vous puissiez agir plutôt que compiler.",
        example: "Nous avons remplacé 5 rapports Excel manuels par un dashboard unifié pour un client, avec alertes automatiques sur ses KPIs critiques.",
        metric: "5 rapports → 1 dashboard",
        tags: ["Data", "Reporting", "Vibe Coding"],
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1200"
      }
    ]
  },

  // --------------------------------------------------------------------------
  // QUAND COMMENCER
  // --------------------------------------------------------------------------
  quandCommencer: {
    surtitre: "COMMENT NOUS POUVONS VOUS AIDER",
    h2: "DEUX FAÇONS DE TRAVAILLER AVEC NOUS",
    h2Highlight: "TRAVAILLER AVEC NOUS",
    description: "Nous nous adaptons à vos besoins et à votre maturité. Voici comment notre équipe peut vous accompagner concrètement.",
    scenarios: [
      {
        number: "01",
        badge: "PROJET",
        title: "Mission Sur-Mesure",
        subtitle: "Votre objectif, notre équipe dédiée",
        description: "Vous avez un projet précis ? Refonte de site, campagne d'acquisition, mise en place CRM... Nous montons l'équipe qu'il faut et nous livrons.",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800",
        whenToChoose: [
          "Vous avez un projet défini mais pas les ressources",
          "Vous devez avancer vite sur un sujet technique",
          "Vous préparez un lancement ou un temps fort",
          "Vous avez besoin d'expertise ponctuelle"
        ],
        deliverables: ["Livrable clé en main", "Notre équipe projet dédiée", "Suivi et ajustements"],
        duration: "4 à 12 semaines",
        investment: "Sur devis",
        idealFor: "PME & ETI avec un projet identifié",
        cta: "Discuter de votre projet"
      },
      {
        number: "02",
        badge: "ACCOMPAGNEMENT",
        title: "Direction Marketing Externalisée",
        subtitle: "Nous devenons votre partenaire stratégique",
        description: "Vous n'avez pas de directeur marketing ? Nous prenons ce rôle. Notre équipe gère votre stratégie, coordonne vos actions, pilote vos prestataires et vous présente un reporting mensuel.",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800",
        whenToChoose: [
          "Vous n'avez pas de direction marketing",
          "Vous voulez structurer sans recruter un CMO",
          "Vous cherchez un regard externe et stratégique",
          "Vous avez besoin de compétences variées"
        ],
        deliverables: ["Notre pilotage mensuel", "Reporting clair", "Équipe modulable"],
        duration: "Engagement 6+ mois",
        investment: "À partir de 4K€/mois",
        idealFor: "ETI & Scale-ups en croissance",
        cta: "Découvrir notre accompagnement"
      }
    ],
    bottomCta: {
      text: "Vous ne savez pas par où commencer ?",
      subtext: "Nous en discutons 15 minutes avec vous. Gratuit, sans engagement.",
      button: { text: "Parlons-en ensemble", href: "/contact" }
    }
  },

  // --------------------------------------------------------------------------
  // À PROPOS
  // --------------------------------------------------------------------------
  aPropos: {
    surtitre: "NOTRE HISTOIRE",
    h2: "POURQUOI NOUS AVONS CRÉÉ VIZION",
    h2Highlight: "CRÉÉ VIZION",
    paragraphs: [
      "Nous avons créé Vizion parce que nous en avions assez de voir des agences vendre de l'opérationnel superflu à leurs clients. Des impressions LinkedIn, des likes, des rapports PowerPoint de 50 pages... Pendant que les vrais sujets — votre vente, votre pipe, votre CA — passaient à la trappe.",
      "Notre vision est simple : remettre le marketing au service de ce qu'il aurait toujours dû être — votre croissance commerciale. Nous ne croyons pas aux vanity metrics ni au buzz éphémère. Nous croyons aux actions qui alimentent votre pipe et qui se mesurent en euros."
    ],
    founderQuote: {
      quote: "Nous pensons que le marketing B2B n'est pas de la magie, c'est de la mécanique de précision. Notre rôle est de régler votre moteur de croissance.",
      name: "Lucas Gonzalez",
      role: "Fondateur — Vizion"
    },
    photoCaption: {
      label: "Notre équipe",
      title: "Basés dans le Sud-Ouest"
    },
    valeursTitre: "NOS VALEURS",
    valeurs: [
      {
        title: "Proximité",
        description: "Nous travaillons avec vous, pas pour vous. Nous sommes accessibles, réactifs et investis dans votre réussite."
      },
      {
        title: "Apprentissage Constant",
        description: "Le marketing évolue vite. Nous nous formons en continu pour vous apporter ce qui fonctionne vraiment."
      },
      {
        title: "Parler Vrai",
        description: "Nous bannissons le jargon et les promesses en l'air. Nous vous disons ce qui va marcher et ce qui ne marchera pas."
      },
      {
        title: "Résultats Concrets",
        description: "Nous mesurons tout. Si une action ne génère pas de business pour vous, nous arrêtons et nous ajustons."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // ÉQUIPE / INTELLIGENCE COLLECTIVE
  // --------------------------------------------------------------------------
  equipe: {
    surtitre: "NOTRE ÉQUIPE À VOTRE SERVICE",
    h2: "NOUS MOBILISONS NOS EXPERTS POUR VOUS",
    h2Highlight: "NOS EXPERTS",
    description: "Nous avons conçu notre modèle pour vous offrir le meilleur. Vous bénéficiez d'un Directeur de Mission qui comprend vos enjeux, et qui active nos meilleurs spécialistes pour chaque phase de votre projet.",
    modelExplanation: {
      director: "Votre Directeur de Mission (Notre Copilote)",
      squads: "Nos Experts Spécialisés (L'Exécution)"
    },
    scrollHint: "Découvrez notre équipe",
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
    surtitre: "NOS RESSOURCES POUR VOUS",
    h2: "CE QUE NOUS PARTAGEONS",
    h2Highlight: "PARTAGEONS",
    ctaText: "Découvrir toutes nos ressources"
  },

  // --------------------------------------------------------------------------
  // FAQ
  // --------------------------------------------------------------------------
  faq: {
    surtitre: "[ VOS QUESTIONS, NOS RÉPONSES ]",
    h2: "CE QUE VOUS VOULEZ SAVOIR",
    h2Highlight: "SAVOIR",
    description: "Nous croyons à la transparence. Voici les réponses aux questions que vous vous posez légitimement avant de nous confier votre croissance.",
    questions: [
      {
        question: "Quels types d'entreprises accompagnez-vous ?",
        answer: "Nous sommes spécialisés B2B. Nous travaillons avec des PME, des ETI, des réseaux de franchise et des boîtes Tech/SaaS. Si vous vendez aux professionnels et que vous avez de l'ambition, nous sommes faits pour travailler ensemble."
      },
      {
        question: "PME vs ETI : adaptez-vous votre dispositif ?",
        answer: "Évidemment. Pour une PME, nous visons le 'Quick Win' et l'efficacité immédiate avec des équipes légères. Pour une ETI, nous structurons des processus plus complets, nous coordonnons plusieurs équipes et nous travaillons sur la conduite du changement."
      },
      {
        question: "Quand pouvons-nous espérer des résultats ?",
        answer: "Nous ne vendons pas du rêve. Les premiers signaux (amélioration des taux de conversion par exemple) arrivent en 30 jours. Pour une stratégie de fond (SEO, Brand), comptez 3 à 6 mois. Nous définissons ensemble ces horizons dès le début de notre collaboration."
      },
      {
        question: "Gérez-vous l'international ?",
        answer: "Oui. Nous accompagnons des entreprises françaises dans leur export et des groupes étrangers sur le marché français. Notre équipe est capable d'opérer en anglais et de s'adapter aux spécificités de vos marchés cibles."
      },
      {
        question: "L'IA, c'est du gadget ou c'est vraiment utile ?",
        answer: "Chez nous, l'IA n'est pas un gadget marketing. C'est un outil de production que nous maîtrisons. Nous l'utilisons pour analyser vos données, scorer vos leads et produire vos contenus plus vite. Mais nous croyons que la stratégie doit rester 100% humaine."
      },
      {
        question: "Quelle est la durée d'engagement avec vous ?",
        answer: "Nous sommes flexibles. Du 'One-shot' pour un audit ou une mission ponctuelle, à l'accompagnement mensuel (minimum 3 mois pour être sérieux), jusqu'au partenariat annuel. Tout est clair, contractuel et sans surprise."
      }
    ],
    ctaText: "Vous avez une question spécifique ? Nous vous répondons en direct.",
    ctaButton: { text: "Parlons-en", href: "/contact" }
  },

  // --------------------------------------------------------------------------
  // CAS CLIENTS
  // --------------------------------------------------------------------------
  casClients: {
    surtitre: "CE QUE NOUS AVONS RÉALISÉ",
    h2: "NOS SUCCÈS AVEC NOS CLIENTS",
    ctaText: "Découvrir nos études de cas",
    cases: [
      {
        slug: "fintech-b2b",
        titre: "Eldo Wallet",
        description: "Nous avons structuré le go-to-market de cette fintech B2B : passage de 0 à 1000 clients et 850K€ MRR en 12 mois. Une exécution que nous avons menée sans faille.",
        categorie: "SaaS B2B"
      },
      {
        slug: "eti-manufacturing",
        titre: "Précision Industries",
        description: "Nous avons accompagné la digitalisation complète de cette ETI industrielle (250M€ CA). Résultat : -30% coût d'acquisition et des commerciaux enfin équipés pour vendre.",
        categorie: "Industrie B2B"
      }
    ]
  },

  // --------------------------------------------------------------------------
  // FINAL CTA
  // --------------------------------------------------------------------------
  finalCta: {
    trustBadge: "+70 clients nous font confiance",
    h2: "NOUS SOMMES PRÊTS À VOUS ACCOMPAGNER",
    h2Highlight: "VOUS ACCOMPAGNER",
    description: "Nous croyons que votre croissance ne doit pas être laissée au hasard. Rejoignez les entreprises qui nous ont fait confiance. Parlons de vos enjeux et de vos problématiques lors d'un premier échange.",
    cta: {
      primary: { text: "Parlons de votre projet", href: "/contact" },
      secondary: { text: "Voir nos cas clients", href: "/cas-clients" }
    },
    trustElements: [
      "Nous répondons sous 24h",
      "Sans engagement",
      "Notre audit préliminaire est offert"
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
  "name": "Vizion - Agence Marketing B2B",
  "alternateName": "Vizion",
  "description": "Agence marketing B2B spécialisée PME et ETI. Stratégie commerciale, lead generation, CRM automation et growth marketing. Plus de 70 entreprises accompagnées en France.",
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
      "reviewBody": "Excellente agence, très professionnelle et à l'écoute. Résultats concrets sur notre stratégie marketing B2B."
    }
  ],
  "founder": [
    {
      "@type": "Person",
      "name": "Lucas Gonzalez",
      "jobTitle": "Co-fondateur & Expert Influence"
    },
    {
      "@type": "Person",
      "name": "Hugo Schuppe",
      "jobTitle": "Co-fondateur & Expert Growth"
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
    "name": "Services Agence Marketing B2B",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Stratégie & Product Marketing",
          "description": "Définition de la trajectoire et du message pour le marché B2B"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Assets Digitaux & Conversion",
          "description": "Landing pages, sites web optimisés, tunnels de conversion"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Sales Enablement & LinkedIn",
          "description": "LinkedIn for Growth, supports commerciaux, personal branding"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Growth & Campagnes",
          "description": "Campagnes d'emailing, acquisition multicanale, SEO"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Automation, CRM & Micro-SaaS",
          "description": "Implémentation CRM, Automatisations, Développement Micro-SaaS via Vibe Coding"
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