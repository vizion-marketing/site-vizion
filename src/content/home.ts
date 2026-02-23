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
  h1RotatingWords: string[];
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

export interface LocalSEOContent {
  surtitre: string;
  h2: string;
  h2Highlight: string;
  description: string;
  paragraphs: string[];
  preuveLocale: string;
  mapEmbedUrl: string;
  villes: {
    name: string;
    label: string;
  }[];
  cta: CTA;
}

export interface IlsParlentDeNousContent {
  surtitre: string;
  h2: string;
  h2Highlight: string;
  mentions: {
    source: string;
    type: string;
    description: string;
    logo?: string;
    url?: string;
  }[];
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
  localSEO: LocalSEOContent;
  ilsParlentDeNous: IlsParlentDeNousContent;
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
    title: "Agence Marketing B2B Toulouse | Vizion - Positionnement & Sales",
    description: "Agence marketing B2B à Toulouse. Transformez votre offre complexe en message clair qui déclenche la décision d'achat. Positionnement, sales enablement, tunnel aligné. +70 entreprises accompagnées depuis 2021.",
    keywords: [
      "agence marketing toulouse",
      "agence marketing b2b toulouse",
      "agence marketing b2b",
      "marketing produit toulouse",
      "aide a la vente toulouse",
      "positionnement b2b toulouse",
      "agence marketing digital toulouse",
      "conseil marketing toulouse",
      "stratégie marketing toulouse",
      "accompagnement marketing b2b"
    ],
    ogImage: "/hero-binoculars.avif"
  },

  // --------------------------------------------------------------------------
  // HERO SECTION
  // --------------------------------------------------------------------------
  hero: {
    badge: "AGENCE MARKETING B2B - TOULOUSE",
    h1: "Votre agence Marketing spécialiste du B2B à Toulouse",
    h1Highlight: "Toulouse",
    h1RotatingWords: ["offre", "produit", "innovation", "solution SaaS", "franchise", "service"],
    baseline: "Vos prospects ne font pas la différence entre vous et vos concurrents ? Vos commerciaux improvisent ? Vous n'arrivez pas à poser une stratégie ? Découvrez Vizion, une agence marketing exigeante, basée à Toulouse, spécialiste du B2B et des cycles de ventes longs.",
    badges: [],
    cta: {
      primary: { text: "Échanger avec un fondateur", href: "/contact" },
      secondary: { text: "Voir nos cas clients", href: "/cas-clients" }
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
    description: "Notre agence marketing B2B accompagne les entreprises dans les moments critiques de leur développement : lancement, restructuration, accélération. Notre spécialité : transformer une offre complexe en un message clair qui déclenche la décision d'achat. Voici comment nos clients sont devenus l'évidence sur leur marché.",
    trustBanner: "Depuis 2021, plus de 70 PME, ETI et entreprises en croissance font confiance à notre agence marketing B2B à Toulouse",
    trustBannerHighlight: "70 PME, ETI et entreprises en croissance",

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
        category: "SEO & Marketing de contenu",
        slug: "ensenat-coaching"
      },
      {
        type: "minimal",
        logo: "Eldo Wallet",
        category: "Mise en marché & Ventes",
        slug: "fintech-b2b",
        bg: "/images/cas-clients/eldo-mainimage.avif"
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
        category: "Image de marque LinkedIn",
        slug: "olivier-bas-linkedin"
      }
    ],
    testimonial: {
      quote: "C'est vraiment un bonheur de les avoir au quotidien. Vizion est réellement investie dans notre croissance, ils font partie de l'équipe.",
      name: "CLÉMENT",
      role: "Co-fondateur, easyVirtual.tours"
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
    surtitre: "Notre méthodologie",
    h2: "Un partenaire stratégique, au service de votre croissance.",
    description: "La meilleure stratégie sans exécution reste une intention. L'exécution sans stratégie reste de l'agitation. C'est pourquoi nous faisons les deux : nous concevons le plan et nous le déployons, du positionnement à la signature.",
    badgeText: "Notre approche",
    badgeStatus: "CONSEIL STRATÉGIQUE",
    piliers: [
      {
        numero: "01",
        surtitre: "AUDIT & STRATÉGIE MARKETING",
        titre: "Vous investissez sans savoir ce qui fonctionne vraiment",
        description: "Votre marketing ne génère pas de résultats mesurables et vous ne savez pas pourquoi. Nous auditons votre positionnement, vos canaux et vos outils, puis nous structurons la feuille de route et pilotons sa mise en place. Direction marketing externalisée ou renfort ponctuel : nous nous adaptons à votre organisation. Pour que chaque euro investi repose sur un diagnostic solide et une exécution pilotée, pas sur des intuitions.",
        services: ["Audit marketing complet", "Analyse concurrentielle", "Diagnostic des canaux d'acquisition", "Feuille de route stratégique", "Direction marketing externalisée", "Cadrage budgétaire"],
        cta: "DEMANDER UN AUDIT"
      },
      {
        numero: "02",
        surtitre: "POSITIONNEMENT & NARRATIF PRODUIT",
        titre: "Votre offre est trop complexe à expliquer en une phrase",
        description: "Vos prospects ne comprennent pas ce qui vous distingue et vos commerciaux racontent chacun une version différente. Nous construisons un positionnement clair et un narratif produit structuré, adaptés à chaque segment de votre marché. Pour que vos clients idéaux comprennent instantanément votre valeur et vous choisissent face à la concurrence.",
        services: ["Matrice de positionnement", "Proposition de valeur", "Architecture de message par segment", "Personas affinés", "Narratif produit", "Discours de marque"]
      },
      {
        numero: "03",
        surtitre: "TRAFIC & NOTORIÉTÉ",
        titre: "Vous avez le bon produit, mais personne ne vous connaît",
        description: "Votre offre mérite d'être vue, mais votre marché ne sait pas que vous existez. Nous déployons les canaux d'acquisition adaptés à votre cible : SEO, campagnes publicitaires, LinkedIn, contenu stratégique. Pour que les bons prospects vous trouvent avant vos concurrents et arrivent déjà convaincus par votre promesse.",
        services: ["SEO & référencement", "Campagnes LinkedIn Ads", "Google Ads & Meta Ads", "Stratégie de contenu", "Notoriété dirigeant LinkedIn", "Suivi et optimisation continue"]
      },
      {
        numero: "04",
        surtitre: "AUTOMATISATION & INTELLIGENCE ARTIFICIELLE",
        titre: "Vos équipes perdent du temps sur des tâches à faible valeur",
        description: "Vos processus marketing et commerciaux sont manuels, chronophages et sujets aux erreurs. Nous déployons les automatisations et les outils d'IA adaptés à votre réalité opérationnelle. Pour que votre équipe se concentre sur ce qui génère vraiment du revenu : la stratégie et la relation client.",
        services: ["Déploiement CRM", "Automatisations marketing", "Intégrations sur mesure", "Outils d'IA appliqués", "Tableaux de bord unifiés", "Qualification automatisée"]
      },
      {
        numero: "05",
        surtitre: "CONTENUS D'AIDE À LA VENTE",
        titre: "Vos commerciaux improvisent à chaque rendez-vous",
        description: "Chaque commercial raconte une histoire différente, les présentations sont obsolètes et les objections ne sont pas anticipées. Nous créons les supports alignés sur votre positionnement : présentations, fiches concurrentielles, guides d'appel. Pour que chaque interaction commerciale renforce la même promesse, du premier contact à la signature.",
        services: ["Présentations commerciales alignées", "Fiches concurrentielles", "Guides et trames d'appel", "Gestion des objections", "Séquences de relance", "Propositions commerciales structurées"]
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
    h2: "UNE AGENCE MARKETING B2B QUI INTÈGRE L'IA À BON ESCIENT",
    h2Highlight: "L'IA À BON ESCIENT",
    introduction: "Ce qui distingue notre agence marketing B2B : nous intégrons l'intelligence artificielle là où elle apporte une valeur mesurable. Production de contenu accélérée, qualification de prospects, personnalisation à l'échelle. La stratégie et les décisions restent pilotées par l'expertise humaine. Nous ne vendons pas de l'IA, nous l'utilisons pour livrer plus vite et mieux.",
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
        image: "/images/ia-highlight/outils-metier.png"
      },
      {
        title: "Automatisation des processus",
        description: "Structuration et automatisation des workflows marketing et commerciaux. Nous connectons vos outils existants et industrialisons les tâches à faible valeur ajoutée pour libérer du temps sur les activités stratégiques.",
        example: "Automatisation de 80% du parcours d'accueil client pour une ETI, réduisant le délai de 2 semaines à 3 jours tout en améliorant la satisfaction.",
        metric: "-80% temps d'intégration",
        tags: ["Automatisation", "CRM", "Efficacité"],
        image: "/images/ia-highlight/automatisation.png"
      },
      {
        title: "Production de contenu assistée",
        description: "Accélération de la production de contenu marketing grâce à l'intelligence artificielle, tout en maintenant la qualité et l'expertise métier. Chaque production est validée par nos experts avant publication.",
        example: "Un éditeur SaaS a multiplié par 5 sa production de contenu, générant une augmentation de 150% du trafic organique qualifié en 6 mois.",
        metric: "x5 production",
        tags: ["Contenu", "SEO", "IA"],
        image: "/images/ia-highlight/production-contenu.png"
      },
      {
        title: "Qualification intelligente",
        description: "Utilisation de l'intelligence artificielle pour analyser les signaux d'intention d'achat et prioriser les comptes à fort potentiel. Vos équipes commerciales concentrent leur énergie sur les opportunités les plus qualifiées.",
        example: "Réduction de 60% du temps de qualification pour une ETI industrielle, permettant aux équipes commerciales de se concentrer sur les phases de signature.",
        metric: "-60% temps qualification",
        tags: ["Qualification", "Ventes", "IA"],
        image: "/images/ia-highlight/qualification.png"
      },
      {
        title: "Tableaux de bord unifiés",
        description: "Création de tableaux de bord sur mesure qui agrègent vos données en temps réel. Automatisation du reporting pour permettre aux équipes de se concentrer sur l'analyse et la décision plutôt que sur la compilation.",
        example: "Remplacement de 5 rapports manuels par un tableau de bord unifié avec alertes automatiques sur les indicateurs critiques.",
        metric: "5 rapports → 1 tableau de bord",
        tags: ["Données", "Suivi", "Automatisation"],
        image: "/images/ia-highlight/tableaux-de-bord.png"
      }
    ]
  },

  // --------------------------------------------------------------------------
  // QUAND COMMENCER (Méthode 4 phases)
  // --------------------------------------------------------------------------
  quandCommencer: {
    surtitre: "Notre méthode",
    h2: "LA MÉTHODE DE NOTRE AGENCE MARKETING B2B",
    h2Highlight: "AGENCE MARKETING B2B",
    description: "Chaque mission de notre agence marketing B2B suit un cadre structuré en quatre phases. La séquence reste la même : on ne crée jamais de publicité sans avoir posé le positionnement d'abord. Nous adaptons l'intensité selon votre maturité, mission ciblée ou accompagnement dans la durée.",
    scenarios: [
      {
        number: "01",
        badge: "MISSION",
        title: "Mission ciblée",
        subtitle: "Un enjeu défini : lancement, repositionnement, tunnel à aligner",
        description: "Vous traversez un moment critique : lancement de produit, restructuration, accélération. Nous intervenons sur un périmètre défini. Diagnostic, fondations (positionnement et discours de marque), activation sur le tunnel. Livrables stratégiques et opérationnels.",
        image: "/images/methode/mission-ciblee.png",
        whenToChoose: [
          "Vous préparez un lancement de produit ou une innovation",
          "Votre positionnement nécessite une clarification",
          "Votre discours commercial et vos supports sont incohérents",
          "Vous avez besoin d'expertise marketing produit ponctuelle"
        ],
        deliverables: ["Positionnement & discours de marque", "Supports commerciaux alignés", "Campagnes ou pages de conversion selon le périmètre"],
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
        description: "Nous endossons le rôle de votre équipe marketing produit : positionnement, campagnes, supports commerciaux, optimisation continue. Un interlocuteur dédié pilote l'ensemble et mobilise nos spécialistes (pub, SEO, aide à la vente, LinkedIn) selon les besoins. Le message reste un, du clic à la signature.",
        image: "/images/methode/partenariat-duree.png",
        whenToChoose: [
          "Vous n'avez pas d'équipe marketing produit en interne",
          "Vous voulez structurer sans recruter",
          "L'alignement marketing-ventes est un frein",
          "Vous voulez un tunnel de vente cohérent et mesurable"
        ],
        deliverables: ["Interlocuteur dédié", "Tunnel de vente aligné", "Accès aux experts (pub, SEO, aide à la vente)", "Suivi et optimisation continue"],
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
    introLaius: "Vizion n'est pas une agence qu'on consulte pour produire un logo ou refaire une plaquette. Nous sommes des stratèges. Nous concevons des feuilles de route marketing alignées sur vos objectifs commerciaux, et nous les déployons jusqu'au terrain.",
    h2: "En B2B, les meilleurs produits ne gagnent pas toujours. Les mieux positionnés, si.",
    h2Highlight: "positionnés",
    marketPills: ["saas", "franchises", "pme / eti", "services b2b"],
    paragraphs: [
      "Vizion est une agence de conseil en marketing stratégique à Toulouse, spécialisée en B2B. Nous accompagnons les dirigeants qui veulent un positionnement clair, un tunnel de vente aligné et des résultats mesurables. Pas des livrables décoratifs.",
      "Notre approche : diagnostiquer avant de produire. Nous posons le positionnement et le discours de marque, nous challengeons les priorités, et seulement ensuite nous construisons le système qui porte votre offre. Chaque livrable a une raison stratégique d'exister."
    ],
    founderQuote: {
      quote: "Une agence d'exécution vous livre ce que vous demandez. Nous, on vous dit ce dont vous avez vraiment besoin, et on vous aide à le construire. La stratégie d'abord, l'exécution ensuite. C'est la seule façon de créer un marketing qui génère du revenu.",
      name: "Lucas Gonzalez",
      role: "Co-fondateur, Vizion"
    },
    photoCaption: {
      label: "Vizion",
      title: "Agence marketing à Toulouse - Marketing produit B2B"
    },
    valeursTitre: "NOS ENGAGEMENTS",
    valeurs: [
      {
        title: "Un seul message",
        description: "Du clic publicitaire à la signature, le prospect reçoit la même promesse. Pas deux discours qui se contredisent."
      },
      {
        title: "Positionnement d'abord",
        description: "Nous ne lançons jamais de campagne ni de support commercial sans avoir posé le positionnement et le discours de marque."
      },
      {
        title: "Transparence",
        description: "Nous communiquons avec réalisme sur les résultats attendus, les délais et ce que nous ne faisons pas."
      },
      {
        title: "Résultats mesurables",
        description: "Discours clair en 5 secondes, positionnement distinctif, tunnel aligné. Nous visons des résultats concrets."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // ÉQUIPE (Modèle hybride)
  // --------------------------------------------------------------------------
  equipe: {
    surtitre: "L'ÉQUIPE",
    h2: "L'équipe de notre agence marketing B2B à Toulouse",
    h2Highlight: "agence marketing B2B",
    description: "Un interlocuteur dédié qui pilote votre stratégie, appuyé par des spécialistes en acquisition, SEO, aide à la vente et automatisation. Pas de sous-traitance cachée : vous savez exactement qui travaille sur votre projet.",
    modelExplanation: {
      director: "Votre interlocuteur dédié",
      squads: "Experts spécialisés (pub, SEO, aide à la vente, LinkedIn)"
    },
    scrollHint: "Découvrez nos experts",
    members: [
      {
        name: "Lucas Gonzalez",
        role: "Co-fondateur & Directeur Stratégie",
        specialty: "Marketing Produit",
        skills: ["Positionnement", "Discours de marque", "Mise en marché"],
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
        skills: ["SEO Technique", "Stratégie de contenu", "Analyse de données"],
        img: "/images/about/leo-bouyssou.jpg"
      },
      {
        name: "Camille Faure",
        role: "Directrice Artistique",
        specialty: "Marque & Design",
        skills: ["Identité visuelle", "Design web", "Interfaces"],
        img: "/images/team/camille-faure.jpg"
      },
      {
        name: "Romain Music",
        role: "Expert Acquisition",
        specialty: "Acquisition",
        skills: ["LinkedIn Ads", "Google Ads", "Prospection sortante"],
        img: "/images/team/romain-music.jpg"
      }
    ]
  },

  // --------------------------------------------------------------------------
  // BLOG
  // --------------------------------------------------------------------------
  blog: {
    surtitre: "Ressources",
    h2: "Nos analyses marketing B2B",
    h2Highlight: "marketing B2B",
    ctaText: "Accéder aux ressources"
  },

  // --------------------------------------------------------------------------
  // FAQ
  // --------------------------------------------------------------------------
  faq: {
    surtitre: "[ FAQ ]",
    h2: "Vos questions",
    h2Highlight: "questions",
    description: "Nous croyons à la transparence. Voici les réponses aux questions qu'on nous pose le plus souvent.",
    questions: [
      {
        question: "Qu'est-ce que le marketing produit chez Vizion ?",
        answer: "Le marketing produit chez Vizion, c'est tout ce qui permet de positionner une offre sur son marché pour qu'elle devienne le choix évident : positionnement, discours de marque, sites web et pages de conversion, SEO, campagnes publicitaires, aide à la vente, notoriété des dirigeants sur LinkedIn. Cela s'applique à tout « produit » au sens large : un SaaS, un concept de franchise, un service B2B. La méthode est la même, seule la nature du produit change."
      },
      {
        question: "Quelle est la différence entre marketing produit et marketing stratégique ?",
        answer: "« Marketing stratégique » est un terme fourre-tout en France, tout le monde s'en revendique. « Marketing produit » est précis : dans l'écosystème B2B et SaaS, il est immédiatement compris (positionnement, discours de marque, mise en marché, aide à la vente). Pour les clients hors tech, le concept se traduit simplement : nous vous aidons à mieux vendre ce que vous faites déjà bien."
      },
      {
        question: "Quelles entreprises peuvent faire appel à Vizion ?",
        answer: "Vizion intervient auprès de trois typologies : startups et SaaS (logiciel, plateforme), franchises et réseaux (concept de franchise, recrutement franchisés), et PME/ETI B2B (offre commerciale à clarifier). Ces entreprises ont une problématique commune : transformer leur offre en évidence commerciale. Nous appliquons la même rigueur aux franchises, services B2B et ETI industrielles qu'aux acteurs tech."
      },
      {
        question: "Comment travaille Vizion : mission ponctuelle ou accompagnement long terme ?",
        answer: "Vizion propose deux modes d'intervention. La mission ciblée (8 à 16 semaines) intervient sur un enjeu précis : lancement, repositionnement, alignement du tunnel. L'accompagnement dans la durée (6 mois minimum, à partir de 4 500 €/mois) : nous endossons le rôle de votre équipe marketing produit. Un interlocuteur dédié, un tunnel aligné, accès aux experts selon les besoins. Dans les deux cas, nous ne créons jamais de pub sans avoir posé le positionnement d'abord."
      },
      {
        question: "Vizion travaille-t-elle uniquement à Toulouse et en Occitanie ?",
        answer: "Non, Vizion est basée à Toulouse (Labège, technopôle) mais accompagne des clients partout en France et à l'international. Présentiel pour les clients à Toulouse et en Occitanie, visio et déplacements ponctuels pour les autres. Plus de 70 entreprises nous font confiance depuis 2021, en Occitanie et dans toute la France. La proximité géographique reste un atout pour nos clients toulousains."
      },
      {
        question: "Combien de temps faut-il pour voir les résultats avec Vizion ?",
        answer: "Les délais dépendent du point de départ. Positionnement et discours de marque : 4 à 6 semaines. Premiers prospects qualifiés : 2 à 3 mois. Impact commercial mesurable : 4 à 6 mois. Nous sommes transparents sur les délais, pas de promesse de résultats en 2 semaines. Construire un positionnement solide et un tunnel de vente aligné demande du temps et de l'itération."
      },
      {
        question: "Vizion remplace-t-elle l'équipe marketing interne ?",
        answer: "Non, Vizion ne remplace pas les équipes internes, nous les renforçons. Nous travaillons aux côtés des directions marketing et commerciales : positionnement, supports de vente alignés, boucle de retours (les objections remontées par les commerciaux alimentent les prochaines campagnes). Un accompagnement réussi, c'est une équipe plus autonome et un message unifié du clic à la signature."
      },
      {
        question: "Quel est le prix d'un accompagnement marketing avec Vizion ?",
        answer: "Vizion propose des accompagnements à partir de 4 500 €/mois pour un suivi dans la durée (minimum 6 mois). Les missions ciblées (8 à 16 semaines) varient selon l'enjeu et le périmètre. Nous travaillons principalement avec des PME de 10 à 250 collaborateurs, des ETI et des scale-ups en phase de croissance. Chaque projet démarre par un diagnostic gratuit pour évaluer si nous sommes le bon partenaire."
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
  // RÉFÉRENCEMENT LOCAL
  // --------------------------------------------------------------------------
  localSEO: {
    surtitre: "Notre ancrage",
    h2: "L'agence marketing B2B à Toulouse",
    h2Highlight: "Toulouse",
    description: "Basés à Toulouse, nous accompagnons les entreprises B2B d'Occitanie et de toute la France. Proximité quand il faut, efficacité à distance quand c'est mieux.",
    paragraphs: [
      "Installés à Labège dans la technopole de Toulouse, nous travaillons au quotidien avec des PME et ETI de l'aéronautique, de la tech, de l'industrie et des services. L'Occitanie concentre plus de 12 000 entreprises B2B, et la plupart n'ont pas de stratégie marketing structurée.",
      "Nos clients toulousains bénéficient d'ateliers stratégiques en présentiel. Pour les entreprises ailleurs en France, nous sommes tout aussi efficaces à distance, avec des déplacements ponctuels quand c'est utile."
    ],
    preuveLocale: "Enseignant en stratégie LinkedIn à Toulouse School of Management (TSM)",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2891.5!2d1.5102!3d43.5416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebb6fec7552ff%3A0x40ae6168453a970!2sLab%C3%A8ge!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr",
    villes: [
      { name: "Toulouse", label: "Siège" },
      { name: "Montpellier", label: "Hérault" },
      { name: "Perpignan", label: "Pyrénées-Orientales" },
      { name: "Nîmes", label: "Gard" },
      { name: "Carcassonne", label: "Aude" },
      { name: "Albi", label: "Tarn" },
      { name: "Montauban", label: "Tarn-et-Garonne" },
      { name: "Rodez", label: "Aveyron" },
      { name: "Mende", label: "Lozère" },
      { name: "Auch", label: "Gers" },
      { name: "Tarbes", label: "Hautes-Pyrénées" },
      { name: "Foix", label: "Ariège" },
      { name: "Paris", label: "Île-de-France" }
    ],
    cta: { text: "Rencontrons-nous à Toulouse", href: "/contact" }
  },

  // --------------------------------------------------------------------------
  // ILS PARLENT DE NOUS
  // --------------------------------------------------------------------------
  ilsParlentDeNous: {
    surtitre: "Dans les médias",
    h2: "Ils parlent de nous",
    h2Highlight: "parlent de nous",
    mentions: [
      {
        source: "Le Sommet International du Marketing",
        type: "Conférence",
        description: "Intervention sur le marketing produit B2B et l'alignement des tunnels de vente.",
      },
      {
        source: "Toulouse School of Management",
        type: "Enseignement",
        description: "Cours de stratégie LinkedIn et personal branding pour les étudiants du Master Marketing.",
      },
      {
        source: "LinkedIn Top Voices",
        type: "Distinction",
        description: "Lucas Gonzalez classé parmi les 300 personnalités les plus influentes sur LinkedIn France.",
      },
      {
        source: "French Tech Toulouse",
        type: "Écosystème",
        description: "Membre actif de l'écosystème French Tech, accompagnement de startups B2B en phase d'accélération.",
      }
    ]
  },

  // --------------------------------------------------------------------------
  // FINAL CTA
  // --------------------------------------------------------------------------
  finalCta: {
    trustBadge: "+70 entreprises nous font confiance",
    h2: "Échangeons sur votre prochain cap.",
    h2Highlight: "votre prochain cap",
    description: "30 minutes avec un fondateur. On analyse votre positionnement actuel, on identifie les écarts avec votre marché, et on vous dit concrètement ce qu'on ferait. Sans engagement.",
    cta: {
      primary: { text: "Réserver un appel avec un fondateur", href: "/contact" },
      secondary: { text: "Voir nos cas clients", href: "/cas-clients" }
    },
    trustElements: [
      "30 minutes",
      "Sans engagement",
      "Avec un fondateur"
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
  "name": "Vizion - Agence marketing Toulouse, marketing produit B2B",
  "alternateName": ["Vizion", "Vizion Marketing Produit", "Agence marketing Toulouse", "Agence marketing B2B Toulouse"],
  "slogan": "Transformez votre offre B2B en évidence sur votre marché",
  "description": "Agence marketing B2B à Toulouse spécialisée en positionnement stratégique, sales enablement et tunnel de vente aligné. Vizion accompagne les PME et ETI dans leur transformation marketing : lancement de produit, repositionnement, accélération commerciale. Expertise en marketing produit, automatisation et intelligence artificielle appliquée. Plus de 70 entreprises accompagnées à Toulouse, Occitanie et en France depuis 2021.",
  "url": "https://by-vizion.com",
  "knowsAbout": ["Marketing B2B", "Positionnement stratégique", "Sales Enablement", "Marketing Produit", "Automatisation Marketing", "Intelligence Artificielle", "SEO", "LinkedIn Ads", "CRM", "Tunnel de vente"],
  "logo": {
    "@type": "ImageObject",
    "url": "https://by-vizion.com/logo-vizion.svg",
    "width": 200,
    "height": 60
  },
  "image": "https://by-vizion.com/hero-binoculars.avif",
  "telephone": "+33750836543",
  "email": "contact@by-vizion.com",
  "sameAs": [
    "https://www.linkedin.com/company/vizion-marketing-b2b/",
    "https://www.linkedin.com/in/lucas-gonzalez-vizion/",
    "https://by-vizion.com/blog"
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
    "ratingValue": "5.0",
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
        "name": "Thomas Ensenat"
      },
      "datePublished": "2024-06-15",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "L'accompagnement d'Hugo et Lucas est vraiment qualitatif ! Compétents et très bons formateurs. Je recommande cette agence de Marketing digital à Toulouse !"
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Tamia"
      },
      "datePublished": "2024-08-20",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Je recommande fortement cette agence toulousaine ! Équipe professionnelle et répondant à tous types de besoins. Lucas est mon Directeur Marketing externalisé et j'en suis ravie."
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Clément Carrere"
      },
      "datePublished": "2024-11-10",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Nous externalisons une grosse partie de notre marketing auprès de Vizion : stratégie produit, aide à la vente, automatisation CRM, gestion de nos campagnes. Nous en sommes toujours très satisfaits, même deux ans après."
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Olivier Bas"
      },
      "datePublished": "2024-09-05",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Vizion m'a accompagné dans le développement de mon image sur LinkedIn. Nous avons dépassé le million d'impressions en quelques mois, j'en suis très satisfait."
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Barthélémy Delcampe"
      },
      "datePublished": "2024-07-18",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Nous avons confié la refonte de notre site web à Lucas et son équipe, nous en sommes très satisfaits bien que tout ait été fait à distance, depuis Toulouse jusqu'à Paris."
    }
  ],
  "founder": [
    {
      "@type": "Person",
      "name": "Lucas Gonzalez",
      "jobTitle": "Co-fondateur - Marketing produit, positionnement, notoriété LinkedIn (ex-top 300 France)"
    },
    {
      "@type": "Person",
      "name": "Hugo Schuppe",
      "jobTitle": "Co-fondateur - Expert technique : automatisations, intégrations, systèmes d'information"
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