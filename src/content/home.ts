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
    title: "Agence Marketing Toulouse | Vizion - Marketing Stratégique",
    description: "Agence marketing à Toulouse. Vizion vous aide à vendre plus : stratégie commerciale, acquisition clients, outils sur mesure. +70 entreprises accompagnées depuis 2021.",
    keywords: [
      "agence marketing Toulouse",
      "agence marketing stratégique Toulouse",
      "marketing Toulouse",
      "agence growth Toulouse",
      "stratégie commerciale Toulouse",
      "acquisition clients Toulouse",
      "agence digitale Toulouse",
      "marketing PME",
      "consultant marketing Toulouse"
    ],
    ogImage: "/og-image.jpg"
  },

  // --------------------------------------------------------------------------
  // HERO SECTION
  // --------------------------------------------------------------------------
  hero: {
    badge: "AGENCE MARKETING STRATÉGIQUE — TOULOUSE",
    h1: "VOTRE AGENCE MARKETING À TOULOUSE",
    h1Highlight: "TOULOUSE",
    baseline: "Vous cherchez une agence qui comprend vraiment vos enjeux ? Chez Vizion, on ne fait pas de joli PowerPoint. On vous aide à vendre plus, avec des actions concrètes et des outils sur mesure.",
    badges: [
      "Réponse sous 24h",
      "70+ entreprises accompagnées",
      "Basés à Toulouse depuis 2021"
    ],
    cta: {
      primary: { text: "Discutons de vos enjeux", href: "/contact" },
      secondary: { text: "Voir nos résultats", href: "/cas-clients" }
    },
    socialProof: "+70 ENTREPRISES NOUS FONT CONFIANCE"
  },

  // --------------------------------------------------------------------------
  // PREUVE SOCIALE
  // --------------------------------------------------------------------------
  preuveSociale: {
    surtitre: "[ CE QU'ON A FAIT POUR EUX ]",
    h2: "DES RÉSULTATS, PAS DES PROMESSES",
    h2Highlight: "RÉSULTATS",
    description: "On préfère vous montrer ce qu'on sait faire plutôt que de vous vendre du rêve. Voici quelques exemples concrets de ce qu'on a réalisé avec nos clients.",
    trustBanner: "Depuis 2021, plus de 70 entreprises nous ont fait confiance pour leur croissance",
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
    surtitre: "CE QU'ON SAIT FAIRE",
    h2: "CINQ DOMAINES D'EXPERTISE",
    description: "On ne fait pas tout, mais ce qu'on fait, on le fait bien. Voici les cinq domaines sur lesquels on peut vous aider concrètement.",
    badgeText: "Notre approche",
    badgeStatus: "PRAGMATIQUE",
    piliers: [
      {
        numero: "01",
        surtitre: "STRATÉGIE",
        titre: "Stratégie & Positionnement",
        description: "Avant de foncer, on prend le temps de comprendre votre marché et vos clients. On définit ensemble un plan clair pour que votre offre parle vraiment à ceux qui en ont besoin.",
        services: ["Audit Stratégique", "Positionnement", "Product Marketing", "Go-to-Market", "Workshops", "Formation"],
        cta: "DÉFINIR VOTRE STRATÉGIE"
      },
      {
        numero: "02",
        surtitre: "CONVERSION",
        titre: "Sites & Landing Pages",
        description: "On crée des sites et des pages qui convertissent. Pas juste des vitrines jolies : des outils qui transforment vos visiteurs en prospects qualifiés.",
        services: ["Landing Pages", "Sites Web", "Tunnels de Conversion", "Optimisation UX", "Tests A/B"]
      },
      {
        numero: "03",
        surtitre: "COMMERCIAL",
        titre: "LinkedIn & Sales",
        description: "On aide vos commerciaux à être plus efficaces. Profils LinkedIn qui attirent, contenus qui engagent, supports qui aident à conclure.",
        services: ["LinkedIn", "Personal Branding", "Supports Commerciaux", "Argumentaires", "Social Selling"]
      },
      {
        numero: "04",
        surtitre: "ACQUISITION",
        titre: "Campagnes & SEO",
        description: "On vous amène des prospects qualifiés. SEO, publicité ciblée, emailing : on active les canaux qui marchent pour votre activité.",
        services: ["Emailing", "SEO", "LinkedIn Ads", "Google Ads", "Content Marketing"]
      },
      {
        numero: "05",
        surtitre: "OUTILS",
        titre: "Automation & Outils Sur Mesure",
        description: "On vous fait gagner du temps. Configuration CRM, automatisation des tâches répétitives, et si besoin, on développe des outils sur mesure pour vos process.",
        services: ["Setup CRM", "Automatisations", "Outils sur mesure", "Intégrations", "Workflows"]
      }
    ],
    ctaText: "Rejoignez les 70+ entreprises qu'on accompagne.",
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
    h2: "ON CRÉE VOS OUTILS SUR MESURE",
    h2Highlight: "SUR MESURE",
    introduction: "Quand les logiciels du marché ne collent pas à vos besoins, on vous en crée un. Pas de compromis avec des solutions génériques : on développe exactement ce qu'il vous faut.",
    whyImportant: [
      "On développe des outils adaptés à VOS process, pas l'inverse.",
      "De l'idée au produit fonctionnel en quelques jours.",
      "L'IA nous permet d'aller vite sans sacrifier la qualité."
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
    surtitre: "COMMENT ON TRAVAILLE",
    h2: "DEUX FAÇONS DE BOSSER ENSEMBLE",
    h2Highlight: "BOSSER ENSEMBLE",
    description: "Selon vos besoins, on peut intervenir sur un projet précis ou vous accompagner dans la durée. Voici comment ça marche.",
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
    surtitre: "QUI ON EST",
    h2: "POURQUOI ON A CRÉÉ VIZION",
    h2Highlight: "VIZION",
    paragraphs: [
      "On en avait marre de voir des agences facturer des rapports PowerPoint de 50 pages pendant que les vrais sujets — vos ventes, votre chiffre d'affaires — passaient à la trappe.",
      "Notre approche est simple : le marketing doit servir à vendre, pas à produire des likes. On mesure notre succès en euros générés pour vous, pas en impressions."
    ],
    founderQuote: {
      quote: "Le marketing, ce n'est pas de la magie. C'est du travail bien fait, avec les bons outils, au bon moment.",
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
    surtitre: "[ QUESTIONS FRÉQUENTES ]",
    h2: "CE QUE VOUS VOULEZ SAVOIR",
    h2Highlight: "SAVOIR",
    description: "On joue la transparence. Voici les réponses aux questions qu'on nous pose le plus souvent.",
    questions: [
      {
        question: "Avec quels types d'entreprises travaillez-vous ?",
        answer: "On travaille principalement avec des entreprises qui vendent à d'autres entreprises : PME, ETI, réseaux de franchise, éditeurs de logiciels. Si vous avez un produit ou service de qualité et l'ambition de grandir, on peut probablement vous aider."
      },
      {
        question: "Vous adaptez votre approche selon la taille ?",
        answer: "Oui. Avec une PME, on va droit au but avec des actions rapides et efficaces. Avec une structure plus grande, on prend le temps de coordonner, former et accompagner le changement. Le budget et les délais ne sont pas les mêmes, on s'adapte."
      },
      {
        question: "En combien de temps voit-on des résultats ?",
        answer: "Ça dépend du sujet. Sur de l'opérationnel (refonte site, campagne), comptez 30-60 jours pour voir les premiers effets. Sur du fond (SEO, notoriété), plutôt 3 à 6 mois. On vous le dit clairement dès le départ."
      },
      {
        question: "Vous travaillez sur d'autres villes que Toulouse ?",
        answer: "Oui. On est basés à Toulouse mais on travaille avec des clients partout en France et à l'étranger. Visio, déplacements ponctuels si besoin : on s'organise."
      },
      {
        question: "L'IA, vous l'utilisez vraiment ?",
        answer: "Oui, au quotidien. Pour produire plus vite, analyser vos données, créer vos outils. Mais la stratégie et les décisions restent 100% humaines. L'IA est un outil, pas une fin en soi."
      },
      {
        question: "Quelle durée d'engagement minimum ?",
        answer: "On est flexibles. Mission ponctuelle, accompagnement de 3 mois minimum pour du suivi sérieux, ou partenariat long terme. On s'adapte à vos besoins. Pas d'engagement caché, tout est clair dès le départ."
      }
    ],
    ctaText: "Une autre question ? On vous répond directement.",
    ctaButton: { text: "Nous contacter", href: "/contact" }
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
    trustBadge: "+70 entreprises accompagnées",
    h2: "ON EN PARLE ?",
    h2Highlight: "PARLE",
    description: "Si vous êtes arrivé jusqu'ici, c'est que vous cherchez peut-être quelqu'un pour vous aider. Prenons 15 minutes pour en discuter. Pas de pitch commercial, juste un échange pour voir si on peut vous être utiles.",
    cta: {
      primary: { text: "Prendre rendez-vous", href: "/contact" },
      secondary: { text: "Voir nos réalisations", href: "/cas-clients" }
    },
    trustElements: [
      "Réponse sous 24h",
      "Échange sans engagement",
      "Premier audit offert"
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
  "name": "Vizion - Agence Marketing Toulouse",
  "alternateName": "Vizion",
  "description": "Agence marketing stratégique à Toulouse. Stratégie commerciale, acquisition clients, outils sur mesure. Plus de 70 entreprises accompagnées depuis 2021.",
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