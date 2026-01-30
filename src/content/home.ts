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
    title: "Agence Marketing Toulouse | Vizion — Marketing Stratégique",
    description: "Agence marketing Toulouse spécialisée en stratégie marketing. Vizion accompagne les PME et ETI dans leurs moments de transformation : lancement, innovation, restructuration. Directeur marketing dédié. +70 entreprises accompagnées.",
    keywords: [
      "agence marketing toulouse",
      "agence marketing stratégique toulouse",
      "conseil marketing toulouse",
      "directeur marketing externalisé toulouse",
      "marketing produit toulouse",
      "consultant marketing toulouse",
      "accompagnement marketing toulouse",
      "marketing intelligence artificielle toulouse"
    ],
    ogImage: "/og-image.jpg"
  },

  // --------------------------------------------------------------------------
  // HERO SECTION
  // --------------------------------------------------------------------------
  hero: {
    badge: "AGENCE MARKETING TOULOUSE — STRATÉGIE",
    h1: "VOTRE AGENCE MARKETING À TOULOUSE",
    h1Highlight: "TOULOUSE",
    baseline: "Chez Vizion, nous croyons que le marketing doit servir vos ventes. Notre agence vous accompagne dans vos moments de transformation : lancement, innovation, restructuration, accélération. Votre directeur marketing dédié pilote l'ensemble de vos travaux, de la stratégie jusqu'au terrain commercial.",
    badges: [
      "Directeur marketing dédié",
      "70+ entreprises accompagnées",
      "Basés à Toulouse depuis 2021"
    ],
    cta: {
      primary: { text: "Parlons de vos enjeux", href: "/contact" },
      secondary: { text: "Voir nos réalisations", href: "/cas-clients" }
    },
    socialProof: "+70 ENTREPRISES ACCOMPAGNÉES DEPUIS 2021"
  },

  // --------------------------------------------------------------------------
  // PREUVE SOCIALE
  // --------------------------------------------------------------------------
  preuveSociale: {
    surtitre: "[ NOS RÉALISATIONS ]",
    h2: "DES RÉSULTATS MESURABLES POUR NOS CLIENTS",
    h2Highlight: "MESURABLES",
    description: "Nous accompagnons les entreprises dans leurs moments stratégiques. Voici comment nous avons aidé nos clients à atteindre leurs objectifs.",
    trustBanner: "Depuis 2021, plus de 70 entreprises à Toulouse et en France nous font confiance pour leurs enjeux marketing et commerciaux",
    trustBannerHighlight: "70 entreprises",

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
    surtitre: "LES SERVICES DE L'AGENCE",
    h2: "CINQ PILIERS POUR VOTRE PERFORMANCE COMMERCIALE",
    description: "Nous intervenons sur cinq domaines complémentaires, guidés par une seule ambition : faciliter vos ventes. Chaque intervention est conçue pour raccourcir vos cycles de décision et équiper vos équipes commerciales.",
    badgeText: "Notre approche",
    badgeStatus: "STRATÉGIQUE",
    piliers: [
      {
        numero: "01",
        surtitre: "STRATÉGIE",
        titre: "Stratégie & Marketing Produit",
        description: "Nous définissons votre positionnement et structurons votre architecture de message. Identification des leviers de croissance, construction d'une proposition de valeur différenciante. Audits complets et roadmaps marketing alignées sur vos objectifs business.",
        services: ["Audit marketing & commercial", "Positionnement stratégique", "Architecture de message", "Roadmap marketing", "Plan de mise en marché", "Ateliers stratégiques"],
        cta: "DÉFINIR VOTRE STRATÉGIE"
      },
      {
        numero: "02",
        surtitre: "DIGITAL",
        titre: "Actifs Digitaux & Conversion",
        description: "Conception de sites web premium et landing pages de haute qualité, pensés pour convertir. Interfaces adaptées à vos cycles de décision, visuels sur mesure, attention portée à chaque détail. Chaque actif digital sert votre stratégie.",
        services: ["Sites web premium", "Landing pages à conversion", "Visuels & design sur mesure", "Tunnels d'acquisition", "Pages institutionnelles", "Optimisation UX/UI"]
      },
      {
        numero: "03",
        surtitre: "VENTE",
        titre: "Aide à la Vente & Influence",
        description: "Renforcement de l'efficacité commerciale en créant les outils nécessaires à chaque phase du cycle de vente. Présentations commerciales premium, pitch decks stratégiques, one-pagers percutants, argumentaires structurés. Accompagnement jusqu'aux phases de négociation et de closing.",
        services: ["Présentations commerciales premium", "Pitch decks stratégiques", "One-pagers & sales sheets", "Argumentaires structurés", "Stratégies LinkedIn", "Contenus d'influence"]
      },
      {
        numero: "04",
        surtitre: "ACQUISITION",
        titre: "Acquisition & Génération d'Opportunités",
        description: "Génération d'un flux régulier d'opportunités commerciales qualifiées. Campagnes d'emailing à fort taux de conversion, workflows de lead nurturing, activation des canaux pertinents pour votre marché : LinkedIn Ads, Google Ads, SEO technique et contenu.",
        services: ["Campagnes emailing avancées", "Lead nurturing automation", "LinkedIn Ads & Google Ads", "Référencement SEO", "Content marketing", "Webinaires & événements"]
      },
      {
        numero: "05",
        surtitre: "SYSTÈMES",
        titre: "Automatisation & CRM",
        description: "Structuration des systèmes d'information marketing et commerciaux pour soutenir votre croissance. Déploiement et configuration de CRM performants (HubSpot, Pipedrive, Go High Level), automatisations sur mesure qui industrialisent vos processus. Intégrations, workflows, dashboards conçus pour votre réalité opérationnelle.",
        services: ["Déploiement CRM (HubSpot, Pipedrive, GHL)", "Automatisations avancées", "Intégrations API sur mesure", "Workflows métier personnalisés", "Dashboards & reporting", "Migration de données"]
      }
    ],
    ctaText: "Rejoignez les 70+ entreprises qui ont fait confiance à notre expertise stratégique.",
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
    surtitre: "CE QUI DIFFÉRENCIE L'AGENCE",
    h2: "L'INTELLIGENCE ARTIFICIELLE AU SERVICE DU MARKETING",
    h2Highlight: "MARKETING",
    introduction: "Chez Vizion, nous intégrons l'intelligence artificielle dans nos méthodologies et dans celles de nos clients. Son déploiement est réfléchi : nous l'utilisons là où elle apporte une valeur ajoutée réelle, pas de manière systématique. Cette approche permet d'accélérer l'exécution tout en préservant la qualité stratégique.",
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
    h2: "DEUX MODES D'ACCOMPAGNEMENT",
    h2Highlight: "ACCOMPAGNEMENT",
    description: "Nous adaptons notre intervention à vos besoins : mission stratégique sur un enjeu précis ou accompagnement dans la durée. Dans les deux cas, un directeur marketing dédié pilote l'ensemble de vos travaux.",
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
    h2: "POURQUOI VIZION EXISTE",
    h2Highlight: "VIZION",
    paragraphs: [
      "Le marketing s'est perdu. Trop souvent cantonné à la communication, aux vanity metrics ou aux tactiques déconnectées du terrain, il a oublié sa raison d'être : faciliter vos ventes.",
      "Chez Vizion, nous ramenons le marketing à sa mission originelle. Il doit servir votre stratégie d'entreprise, équiper vos commerciaux, raccourcir vos cycles de décision. Pas produire des contenus que personne ne lit."
    ],
    founderQuote: {
      quote: "Le marketing doit servir la stratégie de l'entreprise, équiper les commerciaux, raccourcir les cycles de décision. Pas produire des contenus que personne ne lit.",
      name: "Lucas Gonzalez",
      role: "Co-fondateur — Vizion"
    },
    photoCaption: {
      label: "Vizion",
      title: "Agence de marketing stratégique — Toulouse"
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
    h2: "UNE STRUCTURE HYBRIDE, SOLIDE ET AGILE",
    h2Highlight: "HYBRIDE",
    description: "Nous nous appuyons sur une équipe interne structurée et un réseau de consultants experts, mobilisés selon les besoins spécifiques de chaque projet. Ce modèle hybride garantit à la fois la continuité d'accompagnement et l'accès à des compétences pointues. Chaque client bénéficie d'un interlocuteur unique : un directeur marketing dédié qui pilote l'ensemble des travaux et assure le lien avec les équipes dirigeantes.",
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
    h2: "QUESTIONS FRÉQUENTES",
    h2Highlight: "FRÉQUENTES",
    description: "Nous communiquons avec transparence sur nos modalités d'intervention. Voici les réponses aux questions les plus fréquentes.",
    questions: [
      {
        question: "Pourquoi choisir une agence marketing à Toulouse comme Vizion ?",
        answer: "Vizion est une agence marketing à Toulouse spécialisée en stratégie marketing. Contrairement aux agences généralistes, nous intervenons spécifiquement auprès des PME et ETI qui traversent des moments stratégiques : lancement, innovation, restructuration, accélération. Chaque client bénéficie d'un directeur marketing dédié qui pilote l'ensemble des travaux."
      },
      {
        question: "Avec quels types d'entreprises travaillez-vous ?",
        answer: "Nous travaillons principalement avec des PME de 10 à 250 collaborateurs, des ETI et des scale-ups en phase de croissance. Nos clients évoluent dans l'industrie, les technologies, l'édition de logiciels et les services à forte valeur ajoutée."
      },
      {
        question: "Quelle est la durée typique d'un accompagnement ?",
        answer: "Cela dépend de la nature de l'intervention. Une mission stratégique ciblée s'étend sur 8 à 16 semaines. Un accompagnement en direction marketing externalisée nécessite un engagement minimum de 6 mois pour garantir la continuité et l'efficacité. Nous communiquons les délais réalistes dès le cadrage du projet."
      },
      {
        question: "Quel est l'investissement à prévoir pour une agence marketing ?",
        answer: "Nos clients investissent généralement entre 4 500 € et 15 000 € par mois, selon la nature et l'ampleur de l'accompagnement. Chaque projet fait l'objet d'un cadrage précis et d'un devis détaillé."
      },
      {
        question: "Intervenez-vous uniquement à Toulouse ?",
        answer: "Basée à Toulouse, Vizion accompagne des clients partout en France et à l'international. Nous adaptons nos modalités d'intervention : visioconférences, déplacements ponctuels selon les besoins du projet. La proximité avec Toulouse reste un atout pour nos clients locaux."
      },
      {
        question: "Comment intégrez-vous l'intelligence artificielle ?",
        answer: "Nous intégrons l'IA là où elle apporte une valeur ajoutée mesurable : production de contenus d'acquisition, tri et enrichissement de listes de prospection, personnalisation des approches commerciales à l'échelle. Le déploiement est réfléchi, pas systématique. La stratégie et les décisions restent pilotées par l'expertise humaine."
      },
      {
        question: "Travaillez-vous avec les équipes marketing internes ?",
        answer: "Oui. Nous travaillons main dans la main avec les équipes internes. Notre rôle n'est pas de les remplacer, mais de les renforcer : apporter une expertise complémentaire, structurer les processus, transférer les compétences. La pédagogie fait partie intégrante de notre approche."
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
    h2: "ÉCHANGEONS SUR VOS ENJEUX",
    h2Highlight: "ENJEUX",
    description: "Vous recherchez une agence marketing à Toulouse qui comprend vos enjeux ? Vous traversez un moment stratégique et le marketing devient un enjeu de performance commerciale ? Nous vous proposons un échange de 15 minutes pour identifier si nous pouvons vous accompagner.",
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
  "name": "Vizion — Agence Marketing Toulouse",
  "alternateName": ["Vizion", "Agence Marketing Toulouse Vizion", "Vizion Marketing"],
  "description": "Agence marketing à Toulouse spécialisée en stratégie marketing. Vizion accompagne les PME et ETI dans leurs moments de transformation : lancement de produit, innovation, restructuration, accélération. Marketing au service de la performance commerciale. Plus de 70 entreprises accompagnées depuis 2021.",
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
    "https://www.linkedin.com/company/vizion-marketing-b2b/",
    "https://www.google.com/maps/place/Vizion+-+Agence+marketing+%C3%A0+Toulouse/data=!4m2!3m1!1s0x12aebf7b484ea1db:0x2813cc3baa5dfad4"
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