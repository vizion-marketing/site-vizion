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
  introduction?: string;
  valueProposition?: string;
  introLaius?: string;
  paragraphs?: string[];
  marketPills?: string[];
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
    title: "Agence marketing Toulouse | Positionnement, tunnel de vente & résultats B2B — Vizion",
    description: "Offre complexe, message flou, tunnel incohérent ? Vizion, agence marketing à Toulouse, vous aide à clarifier, packager et vendre votre offre. Positionnement, messaging, campagnes au closing : un seul message. Devenez l'évidence sur votre marché — Toulouse, Occitanie et France.",
    keywords: [
      "agence marketing toulouse",
      "agence marketing B2B toulouse",
      "accompagnement marketing toulouse",
      "agence marketing produit toulouse",
      "marketing produit B2B toulouse",
      "positionnement produit toulouse",
      "sales enablement toulouse",
      "go-to-market toulouse",
      "messaging B2B toulouse",
      "notoriété LinkedIn dirigeants toulouse"
    ],
    ogImage: "/og-image.jpg"
  },

  // --------------------------------------------------------------------------
  // HERO SECTION
  // --------------------------------------------------------------------------
  hero: {
    badge: "VIZION",
    h1: "Faites de votre produit une évidence.",
    h1Highlight: "évidence",
    baseline: "Chez Vizion, notre métier est de rendre simple le complexe. Nous aidons les entreprises à clarifier leur offre et maximiser leur performance pour faire d'elles une évidence sur leur marché.",
    badges: [
      "Messaging clair en 5 secondes",
      "Positionnement distinctif",
      "Alignement sales & marketing"
    ],
    cta: {
      primary: { text: "Nous contacter", href: "/contact" },
      secondary: { text: "Voir nos réalisations", href: "/cas-clients" }
    },
    socialProof: "+70 ENTREPRISES ACCOMPAGNÉES À TOULOUSE ET EN FRANCE DEPUIS 2021"
  },

  // --------------------------------------------------------------------------
  // PREUVE SOCIALE
  // --------------------------------------------------------------------------
  preuveSociale: {
    surtitre: "[ NOS RÉALISATIONS ]",
    h2: "DES OFFRES COMPLEXES DEVENUES L'ÉVIDENCE SUR LEUR MARCHÉ",
    h2Highlight: "L'ÉVIDENCE",
    description: "Vizion accompagne les entreprises B2B dans les moments critiques de leur développement : lancement, restructuration, accélération. Notre spécialité : transformer une offre complexe en un message clair qui déclenche la décision d'achat. Voici comment nos clients sont devenus l'évidence sur leur marché.",
    trustBanner: "Depuis 2021, plus de 70 PME, ETI et scale-ups nous font confiance pour leur marketing produit à Toulouse et en France",
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
  // 5 PILIERS (Tunnel de vente Vizion)
  // --------------------------------------------------------------------------
  piliers: {
    surtitre: "Nos services",
    h2: "Un tunnel de vente aligné, de la pub au closing",
    description: "Quand le message change entre la pub, le site et le commercial, le taux de conversion s'effondre. Nous construisons un tunnel unique : de la première impression publicitaire jusqu'au closing, un seul message. Votre offre devient une évidence commerciale.",
    badgeText: "Notre approche",
    badgeStatus: "MARKETING PRODUIT",
    piliers: [
      {
        numero: "01",
        surtitre: "POSITIONNEMENT & MESSAGING",
        titre: "Le socle : sans positionnement clair, les pubs et les commerciaux improvisent",
        description: "Nous définissons le positionnement produit, la proposition de valeur et le messaging par segment. Tout le reste en découle. Jamais de publicité ni de support commercial sans ce socle. Vous gagnez en clarté et en cohérence.",
        services: ["Matrice de positionnement", "Proposition de valeur", "Messaging framework par segment", "Personas affinés", "Analyse concurrentielle", "Architecture de message"],
        cta: "POSER VOTRE POSITIONNEMENT"
      },
      {
        numero: "02",
        surtitre: "Awareness — campagnes & notoriété",
        titre: "Messages forts, testés, itérés — pas des visuels qui ne convertissent pas",
        description: "Création de messages alignés sur le positionnement. Campagnes Meta, Google Ads, LinkedIn Ads. Notoriété LinkedIn pour les dirigeants. Chaque campagne est le point d'entrée du tunnel, pas un service isolé. Résultat : des leads qui reconnaissent déjà votre promesse.",
        services: ["Angles d'attaque & copywriting", "A/B testing accroches et CTA", "LinkedIn Ads & notoriété dirigeant", "Meta Ads & Google Ads", "Brief commercial dérivé des pubs", "Boucle de feedback commerciaux"]
      },
      {
        numero: "03",
        surtitre: "Sites web & landing pages",
        titre: "Sites et landing pages qui convertissent et renforcent le message",
        description: "Copywriting centré sur le problème du prospect, pas sur les features. SEO pour positionner le produit sur les requêtes clés. Chaque point de contact porte le même message que la pub et que le commercial. Le visiteur qui débarque ne se perd pas.",
        services: ["Sites produit & landing pages", "SEO & référencement produit", "Copywriting de conversion", "Parcours d'achat cartographiés", "Contenus de nurturing", "Études de cas & témoignages"]
      },
      {
        numero: "04",
        surtitre: "SALES ENABLEMENT",
        titre: "Le commercial pitch avec les mêmes mots que la pub",
        description: "Le marketing génère des leads, les commerciaux pitchent avec leurs mots, le prospect reçoit deux discours — le taux de conversion chute. Nous créons un continuum : pitch decks alignés, battle cards, scripts d'appel, objection handling. Le prospect qui a cliqué sur une pub retrouve exactement les mêmes promesses en rendez-vous.",
        services: ["Pitch decks alignés aux campagnes", "Battle cards positionnement concurrentiel", "Scripts et guides d'appel", "Objection handling testé", "Séquences de relance post-rdv", "Propositions commerciales structurées"]
      },
      {
        numero: "05",
        surtitre: "Outils de conversion & closing",
        titre: "Chaque interaction pousse vers la décision",
        description: "Outils de qualification, séquences de relance, supports d'aide à la décision. Le message publicitaire est la promesse ; le commercial est la preuve que cette promesse est tenable. Un seul message, du clic au closing. Résultat : moins de fuite en fin de cycle.",
        services: ["Outils de qualification", "Séquences de relance calibrées", "Supports d'aide à la décision", "CRM & automatisations", "Reporting et optimisation continue", "Feedback loop pub ↔ commerciaux"]
      }
    ],
    ctaText: "Rejoignez les 70+ entreprises qui ont aligné leur tunnel de vente avec Vizion.",
    socialProofText: "+70 entreprises accompagnées à Toulouse et en France depuis 2021",
    cta: {
      secondary: { text: "Voir nos réalisations", href: "/cas-clients" },
      primary: { text: "Parlons de vos enjeux", href: "/contact" }
    }
  },

  // --------------------------------------------------------------------------
  // IA HIGHLIGHT
  // --------------------------------------------------------------------------
  iaHighlight: {
    surtitre: "NOTRE DIFFÉRENCIATION",
    h2: "L'IA COMME LEVIER, PAS COMME ARGUMENT",
    h2Highlight: "LEVIER",
    introduction: "Nous intégrons l'intelligence artificielle là où elle apporte une valeur mesurable : production de contenu accélérée, qualification de leads, personnalisation à l'échelle. La stratégie et les décisions restent pilotées par l'expertise humaine. Nous ne vendons pas de l'IA — nous l'utilisons pour livrer plus vite et mieux.",
    whyImportant: [
      "Production de contenus d'acquisition en une fraction du temps habituel, sans sacrifier la qualité.",
      "Qualification et enrichissement des listes de prospection pour prioriser les comptes à fort potentiel.",
      "Personnalisation des approches commerciales à l'échelle, sans perdre en pertinence."
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
  // QUAND COMMENCER (Méthode 4 phases)
  // --------------------------------------------------------------------------
  quandCommencer: {
    surtitre: "Notre méthode",
    h2: "DIAGNOSTIC → FONDATIONS → ACTIVATION → OPTIMISATION",
    h2Highlight: "OPTIMISATION",
    description: "Chaque mission suit un cadre structuré en quatre phases. La séquence reste la même : on ne crée jamais de publicité sans avoir posé le positionnement d'abord. Nous adaptons l'intensité selon votre maturité — mission ciblée ou accompagnement dans la durée.",
    scenarios: [
      {
        number: "01",
        badge: "MISSION",
        title: "Mission ciblée",
        subtitle: "Un enjeu défini : lancement, repositionnement, tunnel à aligner",
        description: "Vous traversez un moment critique : lancement de produit, restructuration, accélération. Nous intervenons sur un périmètre défini. Diagnostic, fondations (positionnement & messaging), activation sur le tunnel. Livrables stratégiques et opérationnels.",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800",
        whenToChoose: [
          "Vous préparez un lancement de produit ou une innovation",
          "Votre positionnement nécessite une clarification",
          "Votre messaging et vos supports commerciaux sont incohérents",
          "Vous avez besoin d'expertise marketing produit ponctuelle"
        ],
        deliverables: ["Positionnement & messaging", "Supports commerciaux alignés", "Campagnes ou landing pages selon le périmètre"],
        duration: "8 à 16 semaines",
        investment: "Sur devis",
        idealFor: "Startups, PME & ETI avec un enjeu identifié",
        cta: "Échanger sur votre enjeu"
      },
      {
        number: "02",
        badge: "ACCOMPAGNEMENT",
        title: "Partenariat dans la durée",
        subtitle: "Un partenaire marketing produit au quotidien",
        description: "Nous endossons le rôle de votre équipe marketing produit : positionnement, campagnes, supports commerciaux, optimisation continue. Un interlocuteur dédié pilote l'ensemble et mobilise nos spécialistes (pub, SEO, sales enablement, LinkedIn) selon les besoins. Le message reste un, du clic au closing.",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800",
        whenToChoose: [
          "Vous n'avez pas d'équipe marketing produit en interne",
          "Vous voulez structurer sans recruter",
          "L'alignement marketing-ventes est un frein",
          "Vous voulez un tunnel de vente cohérent et mesurable"
        ],
        deliverables: ["Interlocuteur dédié", "Tunnel de vente aligné", "Accès aux experts (pub, SEO, sales enablement)", "Reporting et optimisation continue"],
        duration: "Engagement 6 mois minimum",
        investment: "À partir de 4 500 €/mois",
        idealFor: "SaaS, franchises, ETI en phase de croissance",
        cta: "Découvrir l'accompagnement"
      }
    ],
    bottomCta: {
      text: "Vous ne savez pas quelle formule correspond à votre situation ?",
      subtext: "Nous vous aidons à identifier l'approche la plus adaptée en 15 minutes.",
      button: { text: "Parlons-en ensemble", href: "/contact" }
    }
  },

  // --------------------------------------------------------------------------
  // MISSION (Section n°2 après le hero)
  // --------------------------------------------------------------------------
  aPropos: {
    surtitre: "Notre mission",
    introLaius: "La clarté n'est pas un luxe, c'est l'atout stratégique ultime. Dans un écosystème saturé, nous transformons la complexité de votre offre en un positionnement limpide qui déclenche l'adhésion immédiate de vos cibles.",
    h2: "Faire de votre produit une évidence sur votre marché",
    h2Highlight: "évidence",
    marketPills: ["saas", "franchises", "pme / eti", "services b2b"],
    paragraphs: [
      "Vizion est une agence marketing à Toulouse spécialisée en marketing produit B2B. Nous accompagnons les dirigeants et équipes qui veulent un message clair, un tunnel de vente aligné et des résultats mesurables — du premier clic au closing.",
      "Notre approche : poser le positionnement et le messaging avant toute campagne ou support commercial. Un seul message partout. Pas de supports qui restent dans un tiroir ; des systèmes de vente connectés."
    ],
    founderQuote: {
      quote: "On ne crée pas de jolis supports qui restent dans un tiroir. On construit des systèmes de vente où chaque élément est connecté : la pub alimente le commercial, le commercial alimente la pub. Le message est un. Le résultat est mesurable.",
      name: "Lucas Gonzalez",
      role: "Co-fondateur — Vizion"
    },
    photoCaption: {
      label: "Vizion",
      title: "Agence marketing à Toulouse — Marketing produit B2B"
    },
    valeursTitre: "NOS ENGAGEMENTS",
    valeurs: [
      {
        title: "Un seul message",
        description: "Du clic publicitaire au closing, le prospect reçoit la même promesse. Pas deux discours qui se contredisent."
      },
      {
        title: "Positionnement d'abord",
        description: "Nous ne lançons jamais de campagne ni de support commercial sans avoir posé le positionnement et le messaging."
      },
      {
        title: "Transparence",
        description: "Nous communiquons avec réalisme sur les résultats attendus, les délais et ce que nous ne faisons pas."
      },
      {
        title: "Résultats mesurables",
        description: "Messaging clair en 5 secondes, positionnement distinctif, tunnel aligné. Nous visons des résultats concrets."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // ÉQUIPE (Modèle hybride)
  // --------------------------------------------------------------------------
  equipe: {
    surtitre: "L'ÉQUIPE",
    h2: "Une équipe marketing B2B à Toulouse : pilote dédié + experts à la demande",
    h2Highlight: "experts à la demande",
    description: "Notre modèle hybride associe un interlocuteur dédié à un réseau de spécialistes — pub, SEO, sales enablement, notoriété LinkedIn. Votre pilote pilote le tunnel de vente et mobilise les bonnes compétences au bon moment. Pas un simple chef de projet : des experts marketing produit qui dialoguent avec vos équipes dirigeantes et vos commerciaux. Réactivité et expertise quand vous en avez besoin.",
    modelExplanation: {
      director: "Votre interlocuteur dédié",
      squads: "Experts spécialisés (pub, SEO, sales enablement, LinkedIn)"
    },
    scrollHint: "Découvrez nos experts",
    members: [
      {
        name: "Lucas Gonzalez",
        role: "Co-fondateur & Directeur Stratégie",
        specialty: "Marketing Produit",
        skills: ["Positionnement", "Messaging", "Go-to-Market"],
        img: "/images/team/lucas-gonzalez.jpg"
      },
      {
        name: "Hugo Schuppe",
        role: "Co-fondateur & Directeur Technique",
        specialty: "Ops & Automatisation",
        skills: ["CRM", "Automatisation", "Intégrations"],
        img: "/images/team/hugo-schuppe.jpg"
      },
      {
        name: "Léo Bouyssou",
        role: "Consultant SEO & Contenu",
        specialty: "SEO & Contenu",
        skills: ["SEO Technique", "Content Strategy", "Analytics"],
        img: "/images/about/leo-bouyssou.jpg"
      },
      {
        name: "Camille Faure",
        role: "Directrice Artistique",
        specialty: "Brand & Design",
        skills: ["Identité visuelle", "Webdesign", "UI/UX"],
        img: "/images/team/camille-faure.jpg"
      },
      {
        name: "Romain Music",
        role: "Expert Acquisition",
        specialty: "Acquisition",
        skills: ["LinkedIn Ads", "Google Ads", "Outbound"],
        img: "/images/team/romain-music.jpg"
      }
    ]
  },

  // --------------------------------------------------------------------------
  // BLOG
  // --------------------------------------------------------------------------
  blog: {
    surtitre: "Ressources",
    h2: "Ressources et actualités de notre agence marketing à Toulouse",
    h2Highlight: "agence marketing à Toulouse",
    ctaText: "Accéder aux ressources"
  },

  // --------------------------------------------------------------------------
  // FAQ
  // --------------------------------------------------------------------------
  faq: {
    surtitre: "[ FAQ ]",
    h2: "Questions fréquentes sur notre agence marketing à Toulouse",
    h2Highlight: "agence marketing à Toulouse",
    description: "Transparence sur ce que nous faisons — et ce que nous ne faisons pas. Voici les réponses aux questions les plus fréquentes sur Vizion, votre agence marketing B2B à Toulouse.",
    questions: [
      {
        question: "Qu'est-ce que le marketing produit chez Vizion ?",
        answer: "Le marketing produit, pour nous, c'est tout ce qui permet de positionner une offre sur son marché pour qu'elle devienne le choix évident : positionnement, messaging, sites web et landing pages, SEO, campagnes publicitaires, sales enablement, notoriété des dirigeants sur LinkedIn. Cela s'applique à tout « produit » au sens large : un SaaS, un concept de franchise, un service B2B. La méthode est la même, seule la nature du produit change."
      },
      {
        question: "Pourquoi « marketing produit » et pas « marketing stratégique » ?",
        answer: "« Marketing stratégique » est un terme fourre-tout en France — tout le monde s'en revendique. « Marketing produit » est précis : dans l'écosystème B2B et SaaS, il est immédiatement compris (positioning, messaging, go-to-market, sales enablement). Pour les clients hors tech, le concept se traduit simplement : nous vous aidons à mieux vendre ce que vous faites déjà bien."
      },
      {
        question: "Avec quels types d'entreprises travaillez-vous ?",
        answer: "Nous intervenons auprès de trois typologies : startups et SaaS (logiciel, plateforme), franchises et réseaux (concept de franchise, recrutement franchisés), et PME/ETI B2B (offre commerciale à clarifier). Ces entreprises ont une problématique commune : transformer leur offre en évidence commerciale. Vizion applique la même rigueur aux franchises, services B2B et ETI industrielles qu'aux acteurs tech."
      },
      {
        question: "Quelle est la différence entre mission ciblée et accompagnement dans la durée ?",
        answer: "La mission ciblée (8 à 16 semaines) intervient sur un enjeu précis : lancement, repositionnement, alignement du tunnel. Diagnostic, fondations (positionnement et messaging), activation. L'accompagnement dans la durée (6 mois minimum, à partir de 4 500 €/mois) : nous endossons le rôle de votre équipe marketing produit. Un interlocuteur dédié, un tunnel aligné, accès aux experts selon les besoins. Dans les deux cas, nous ne créons jamais de pub sans avoir posé le positionnement d'abord."
      },
      {
        question: "Intervenez-vous uniquement à Toulouse ?",
        answer: "Nous sommes basés à Toulouse (Labège, technopôle) et accompagnons des clients partout en France et à l'international. Présentiel pour les clients à Toulouse et en Occitanie, visio et déplacements ponctuels pour les autres. La proximité avec Toulouse et l'Occitanie reste un atout pour nos clients locaux."
      },
      {
        question: "Proposez-vous de la notoriété LinkedIn pour les dirigeants ?",
        answer: "Oui. Avec un cofondateur ex-top 300 France sur la plateforme, Vizion propose un service de notoriété LinkedIn pour les dirigeants (personal branding, thought leadership). Dans le B2B, la crédibilité du fondateur ou du directeur commercial est souvent le premier levier de conversion. Cette expertise fait partie de notre tunnel de vente — campagnes LinkedIn Ads et stratégie de notoriété organique."
      },
      {
        question: "Travaillez-vous avec les équipes marketing ou commerciales internes ?",
        answer: "Nous ne remplaçons pas les équipes internes, nous les renforçons. Nous travaillons aux côtés des directions marketing et commerciales : positionnement, supports de vente alignés, boucle de feedback (les objections remontées par les commerciaux alimentent les prochaines campagnes). Un accompagnement réussi, c'est une équipe plus autonome et un message unifié du clic au closing."
      }
    ],
    ctaText: "Une autre question ? Échangeons directement.",
    ctaButton: { text: "Nous contacter", href: "/contact" }
  },

  // --------------------------------------------------------------------------
  // CAS CLIENTS
  // --------------------------------------------------------------------------
  casClients: {
    surtitre: "Études de cas",
    h2: "ILS SONT DEVENUS L'ÉVIDENCE SUR LEUR MARCHÉ",
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
    h2: "Prêt à devenir l'évidence sur votre marché ?",
    h2Highlight: "l'évidence",
    description: "Lancement, restructuration ou accélération ? Vous voulez un tunnel de vente aligné — du message publicitaire au closing ? Nous proposons un échange de 15 minutes pour identifier si nous pouvons vous accompagner.",
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
  "name": "Vizion — Agence marketing Toulouse, marketing produit B2B",
  "alternateName": ["Vizion", "Vizion Marketing Produit", "Agence marketing Toulouse", "Agence marketing B2B Toulouse"],
  "description": "Agence marketing à Toulouse. Vizion aide les entreprises à clarifier, packager et vendre leur offre. Positionnement, messaging, tunnel de vente aligné — du message publicitaire au closing. SaaS, franchises, PME/ETI. Devenez l'évidence sur votre marché. Plus de 70 entreprises accompagnées à Toulouse et en France depuis 2021.",
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
      "jobTitle": "Co-fondateur — Marketing produit, positionnement, notoriété LinkedIn (ex-top 300 France)"
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
    "name": "Services Marketing Produit B2B",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Positionnement & Messaging",
          "description": "Définition du positionnement produit, de la proposition de valeur et du messaging par segment. Socle du tunnel de vente."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Campagnes publicitaires & Notoriété LinkedIn",
          "description": "Messages forts testés et itérés. Meta, Google, LinkedIn Ads. Stratégie de notoriété LinkedIn pour les dirigeants."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Sites web & Landing pages",
          "description": "Sites produit et pages d'atterrissage optimisés pour la conversion. SEO, copywriting centré sur le problème du prospect."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Sales Enablement",
          "description": "Pitch decks alignés aux campagnes, battle cards, scripts d'appel, objection handling. Un seul message du clic au closing."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Outils de conversion & Closing",
          "description": "Propositions commerciales structurées, séquences de relance, feedback loop entre pub et équipes commerciales."
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