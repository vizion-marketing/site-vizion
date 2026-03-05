// ============================================================================
// CONTENU PAGE "AGENCE MARKETING B2B" — /agence-marketing-b2b
// ============================================================================
// Mot-clé primaire : "agence marketing b2b"
// Angle : spécialisation B2B (cycles longs, multi-décideurs, sales enablement)
// Anti-cannibalisation : homepage cible "agence marketing toulouse" (local)
// ============================================================================

import type { HeroContent, PiliersContent, FAQContent, BlogContent, LocalSEOContent } from "./home";

const SITE_URL = "https://by-vizion.com";

// ============================================================================
// SEO
// ============================================================================

export const b2bSEO = {
  title: "Agence Marketing B2B — Cycles de vente longs & multi-décideurs | Vizion",
  description:
    "Agence marketing B2B spécialisée dans les cycles de vente complexes. Positionnement, sales enablement, automatisation. +70 entreprises accompagnées. Basée à Toulouse.",
  keywords: [
    "agence marketing b2b",
    "marketing b2b",
    "agence marketing b2b toulouse",
    "marketing b2b france",
    "sales enablement b2b",
    "positionnement b2b",
    "agence b2b",
    "marketing cycles de vente longs",
  ],
  ogImage: "/hero-binoculars.avif",
};

// ============================================================================
// HERO
// ============================================================================

export const b2bHero: HeroContent = {
  badge: "AGENCE MARKETING B2B",
  h1: "L'agence Marketing spécialiste du B2B qui fait de votre produit une évidence",
  h1Highlight: "une évidence",
  h1RotatingWords: [],
  baseline:
    "Cycles de 3 à 18 mois. 4 à 7 décideurs impliqués. Des objections techniques à chaque étape. Le marketing B2B exige une approche structurée, alignée sur le cycle de vente réel. Vizion pose le positionnement, déploie les canaux d'acquisition et équipe vos commerciaux pour convertir plus vite.",
  badges: [],
  cta: {
    primary: { text: "Échanger avec un fondateur", href: "/contact" },
    secondary: { text: "Voir nos cas clients", href: "/cas-clients" },
  },
  socialProof: "+70 ENTREPRISES B2B ACCOMPAGNÉES DEPUIS 2021",
};

// ============================================================================
// INTRO
// ============================================================================

export const b2bIntro = {
  title: "Le marketing B2B ne fonctionne pas comme le marketing grand public",
  paragraphs: [
    "En B2B, la décision d'achat implique des comités, des budgets justifiés en ROI, des cycles de validation qui s'étalent sur des mois. Un prospect ne clique pas sur une publicité et n'achète pas dans la foulée. Il compare, consulte, négocie. Chaque interaction entre le premier contact et la signature doit porter le même message et lever les mêmes objections.",
    "Le problème : la plupart des agences marketing appliquent des recettes pensées pour le B2C — de la notoriété, des likes, du contenu viral — à des contextes B2B où la décision d'achat prend 6 mois et mobilise un directeur technique, un acheteur et un DAF. Le résultat : beaucoup de bruit, peu de pipeline.",
    "Vizion est une agence marketing B2B construite pour ces réalités. Nous partons du positionnement de votre offre, nous structurons le tunnel d'acquisition de bout en bout, et nous créons les outils qui permettent à vos commerciaux de closer. Pas de vanity metrics, pas de jargon : des résultats commerciaux mesurables.",
  ],
  mission: "Notre mission : faire de votre offre B2B l'évidence sur son marché.",
};

// ============================================================================
// 5 PILIERS — descriptions adaptées B2B
// ============================================================================

export const b2bPiliers: PiliersContent = {
  surtitre: "Notre approche B2B",
  h2: "Du positionnement au closing : nos 5 piliers pour les entreprises B2B",
  description:
    "Les entreprises B2B ont besoin de clarté stratégique, d'un message qui résonne auprès de décideurs multiples, de canaux d'acquisition calibrés pour les cycles longs, de processus automatisés et d'outils qui accélèrent chaque étape du cycle de vente.",
  badgeText: "",
  badgeStatus: "",
  piliers: [
    {
      numero: "01",
      surtitre: "AUDIT & STRATÉGIE",
      titre: "Audit et stratégie marketing",
      description:
        "Vos opportunités stagnent, votre pipeline manque de visibilité et vous ne savez pas si le problème vient du message, des canaux ou du processus commercial. Nous auditons votre tunnel de vente B2B de bout en bout : du premier point de contact à la signature. Où les prospects décrochent-ils ? À quelle étape le concurrent prend-il l'avantage ? Quels outils manquent à vos équipes ? Le diagnostic produit une feuille de route qui cible les leviers à plus fort impact pour votre situation.",
      services: [
        "Audit du tunnel de vente B2B",
        "Analyse des pertes d'opportunités",
        "Cartographie du parcours acheteur",
        "Feuille de route priorisée",
      ],
      cta: "DEMANDER UN AUDIT",
    },
    {
      numero: "02",
      surtitre: "POSITIONNEMENT & NARRATIF",
      titre: "Positionnement et narratif produit",
      description:
        "Vos prospects comparent 4 ou 5 solutions aux fonctionnalités similaires. La différence se joue dans la capacité à formuler votre valeur de manière immédiate. Nous construisons un positionnement qui traduit la complexité technique de votre offre en bénéfices business compréhensibles par chaque profil décideur — du DSI au DAF. Un seul message, décliné par persona, porté avec cohérence par toute votre équipe commerciale.",
      services: [
        "Matrice de positionnement concurrentiel",
        "Proposition de valeur par persona",
        "Architecture de message produit",
        "Discours de marque unifié",
      ],
    },
    {
      numero: "03",
      surtitre: "TRAFIC & NOTORIÉTÉ",
      titre: "Trafic et notoriété",
      description:
        "Votre expertise est reconnue par vos clients existants, mais les prospects hors réseau ne vous trouvent pas. Nous déployons les canaux d'acquisition calibrés pour le B2B : référencement naturel sur vos requêtes métier, campagnes LinkedIn ciblées par fonction et secteur, contenu d'expertise qui positionne votre autorité, ABM pour les comptes stratégiques. Le trafic qualifié arrive convaincu avant même le premier échange commercial.",
      services: [
        "SEO technique et sémantique B2B",
        "Campagnes LinkedIn Ads ciblées",
        "Stratégie de contenu d'expertise",
        "Account-Based Marketing",
      ],
    },
    {
      numero: "04",
      surtitre: "AUTOMATISATION & IA",
      titre: "Automatisation et intelligence artificielle",
      description:
        "Sur des cycles de vente de 3 à 18 mois, le suivi manuel est un gouffre de temps et de prospects perdus. Nous structurons et automatisons vos flux commerciaux : CRM configuré pour vos cycles longs, séquences de nurturing systématiques, scoring de leads automatisé, reporting unifié. L'IA accélère la qualification des contacts entrants et la personnalisation des approches. Vos équipes se concentrent sur la négociation et le closing.",
      services: [
        "Structuration et automatisation CRM",
        "Séquences de nurturing automatisées",
        "Scoring et qualification IA",
        "Reporting commercial unifié",
      ],
    },
    {
      numero: "05",
      surtitre: "CONTENUS D'AIDE À LA VENTE",
      titre: "Contenus d'aide à la vente",
      description:
        "Vos commerciaux utilisent la même présentation pour tous les interlocuteurs, du DSI au DAF. Les objections techniques sont traitées au cas par cas. Les relances dépendent de la mémoire de chacun. Nous créons un arsenal commercial complet : présentations par profil décideur, battle cards concurrence, réponses aux objections formalisées, séquences de relance chronométrées. Le cycle de vente B2B devient un processus reproductible, pas une improvisation.",
      services: [
        "Présentations par type de décideur",
        "Battle cards concurrence",
        "Guides d'appel et gestion d'objections",
        "Séquences de relance structurées",
      ],
    },
  ],
  ctaText: "",
  socialProofText: "",
  cta: {
    primary: { text: "Échanger avec un fondateur", href: "/contact" },
    secondary: { text: "Voir nos cas clients", href: "/cas-clients" },
  },
};

// ============================================================================
// ABOUT / LOCAL SEO — adapté B2B
// ============================================================================

export const b2bLocalSEO: LocalSEOContent = {
  surtitre: "[ IMPLANTATION ]",
  h2: "Votre agence marketing B2B, basée à Toulouse",
  h2Highlight: "Toulouse",
  description:
    "Vizion est implantée à Labège, au cœur de la technopole de Toulouse. Nous accompagnons des entreprises B2B dans toute la France, avec une proximité forte en Occitanie pour les ateliers en présentiel.",
  paragraphs: [
    "Toulouse concentre un écosystème d'entreprises B2B parmi les plus dynamiques de France : aéronautique, spatial, éditeurs SaaS, santé, industrie. C'est dans cet environnement que Vizion a construit son expertise du marketing B2B complexe — au contact de cycles de vente longs, de décideurs techniques exigeants et d'offres à forte valeur ajoutée.",
    "Notre intervention ne se limite pas à l'Occitanie. Nous accompagnons des entreprises B2B partout en France, avec un modèle hybride : ateliers stratégiques en présentiel quand c'est nécessaire, pilotage opérationnel à distance le reste du temps. La qualité de l'accompagnement ne dépend pas de la distance, mais de la rigueur du processus.",
  ],
  preuveLocale: "Enseignant en stratégie LinkedIn à Toulouse School of Management (TSM)",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2891.5!2d1.5102!3d43.5416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebb6fec7552ff%3A0x40ae6168453a970!2sLab%C3%A8ge!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr",
  villes: [
    { name: "Toulouse", label: "Siège", href: "/" },
    { name: "Montpellier", label: "Active", href: "/agence-marketing-montpellier" },
    { name: "Albi", label: "Interventions", href: "/agence-marketing-albi" },
    { name: "Auch", label: "Interventions", href: "/agence-marketing-auch" },
    { name: "Agen", label: "Interventions", href: "/agence-marketing-agen" },
    { name: "Castres", label: "Interventions", href: "/agence-marketing-castres" },
    { name: "Rodez", label: "Interventions", href: "/agence-marketing-rodez" },
    { name: "Mazamet", label: "Interventions", href: "/agence-marketing-communication-mazamet" },
  ],
  cta: { text: "Échanger sur votre enjeu B2B", href: "/contact" },
};

// ============================================================================
// BLOG
// ============================================================================

export const b2bBlog: BlogContent = {
  surtitre: "[ RESSOURCES B2B ]",
  h2: "Nos analyses pour les entreprises B2B",
  h2Highlight: "entreprises B2B",
  ctaText: "Voir tous les articles",
};

// ============================================================================
// FAQ
// ============================================================================

const faqQuestions = [
  {
    question: "Qu'est-ce qu'une agence marketing B2B ?",
    answer:
      "Une agence marketing B2B accompagne les entreprises qui vendent à d'autres entreprises. Contrairement au marketing grand public, le marketing B2B doit adresser des cycles de décision longs (3 à 18 mois), des comités d'achat composés de plusieurs profils (technique, financier, direction), et des offres souvent complexes à expliquer. L'agence intervient sur le positionnement de l'offre, la génération de prospects qualifiés, l'alignement marketing-ventes et la création d'outils qui accélèrent la décision d'achat.",
  },
  {
    question: "Pourquoi le marketing B2B nécessite-t-il une approche spécialisée ?",
    answer:
      "Parce que le parcours d'achat B2B n'a rien à voir avec le B2C. En B2B, un prospect ne passe pas de la publicité à l'achat en quelques minutes. Il compare des solutions, consulte des pairs, demande des démos, fait valider le budget. Chaque étape du cycle exige un contenu adapté et un message cohérent. Les agences généralistes produisent souvent du contenu B2C déguisé en B2B — beaucoup de visibilité, peu de pipeline commercial.",
  },
  {
    question: "Quels secteurs B2B Vizion accompagne-t-elle ?",
    answer:
      "Nous accompagnons des PME et ETI B2B de 10 à 250 collaborateurs dans tous les secteurs : éditeurs SaaS, industrie, services aux entreprises, ESN, cabinets de conseil, santé, aéronautique, agroalimentaire B2B. Le dénominateur commun de nos clients : une offre technique ou complexe, un cycle de vente long, et des décideurs multiples à convaincre.",
  },
  {
    question: "Comment Vizion structure-t-elle un accompagnement marketing B2B ?",
    answer:
      "Chaque accompagnement démarre par un diagnostic : positionnement actuel, tunnel de vente, outils existants, discours commercial. À partir de ce diagnostic, nous construisons une feuille de route priorisée. Deux formats possibles : la mission ciblée (8 à 16 semaines sur un enjeu précis) ou l'accompagnement dans la durée (direction marketing externalisée, 6 mois minimum). Dans les deux cas, un directeur marketing senior est votre interlocuteur unique.",
  },
  {
    question: "Quel budget prévoir pour un marketing B2B structuré ?",
    answer:
      "Nos accompagnements dans la durée démarrent à 4 500 euros par mois sur un engagement de 6 mois. Les missions ciblées (audit, repositionnement, création de supports) sont facturées sur devis selon le périmètre. Nous travaillons avec des entreprises dont le budget marketing se situe entre 4 500 et 15 000 euros par mois. Le diagnostic initial est gratuit.",
  },
  {
    question: "Vizion remplace-t-elle l'équipe marketing interne ?",
    answer:
      "Pas nécessairement. Beaucoup de nos clients disposent déjà d'une équipe marketing. Nous intervenons alors en direction marketing externalisée ou sur des sujets spécifiques que l'équipe interne n'a pas le temps ou l'expertise de traiter : positionnement stratégique, architecture de message, automatisation CRM, IA appliquée. Le transfert de compétences fait partie de notre approche — l'objectif est que votre équipe soit plus autonome à la fin de la mission.",
  },
  {
    question: "Combien de temps pour voir des résultats en marketing B2B ?",
    answer:
      "Cela dépend de votre point de départ et de vos objectifs. Les premiers livrables (positionnement, supports commerciaux) sont opérationnels en 4 à 8 semaines. Les résultats d'acquisition (SEO, campagnes) se mesurent à partir de 3 à 6 mois. Sur un accompagnement de 6 mois, nos clients observent une amélioration mesurable du taux de conversion, une réduction du cycle de vente et une augmentation du pipeline qualifié. Nous cadrons des indicateurs concrets dès le départ.",
  },
];

export const b2bFAQ: FAQContent = {
  surtitre: "[ FAQ ]",
  h2: "Questions fréquentes sur le marketing B2B",
  h2Highlight: "marketing B2B",
  description:
    "Voici les réponses aux questions que les dirigeants d'entreprises B2B nous posent le plus souvent avant de démarrer un accompagnement.",
  questions: faqQuestions,
  ctaText: "D'autres questions ?",
  ctaButton: { text: "Échangeons directement", href: "/contact" },
};

// ============================================================================
// CTA FINAL
// ============================================================================

export const b2bFinalCta = {
  trustBadge: "+70 entreprises B2B accompagnées",
  h2: "Votre cycle de vente mérite un marketing à la hauteur",
  h2Highlight: "à la hauteur",
  description:
    "Échangez 30 minutes avec un fondateur de Vizion. Nous analysons votre positionnement actuel, identifions les points de friction dans votre cycle de vente, et vous proposons un plan d'action concret. Sans engagement.",
  cta: {
    primary: { text: "Réserver un échange", href: "/contact" },
    secondary: { text: "Voir nos cas clients", href: "/cas-clients" },
  },
  trustElements: [
    "30 minutes avec un fondateur",
    "Sans engagement",
    "Diagnostic B2B offert",
  ],
};

// ============================================================================
// SCHEMAS JSON-LD
// ============================================================================

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": `${SITE_URL}/#organization`,
  name: "Vizion",
  alternateName: "Vizion — Agence Marketing B2B",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo-vizion.avif`,
  image: `${SITE_URL}/hero-binoculars.avif`,
  description:
    "Agence marketing B2B spécialisée dans les cycles de vente complexes. Positionnement, sales enablement, automatisation. Basée à Toulouse.",
  telephone: "+33750836543",
  email: "contact@by-vizion.com",
  foundingDate: "2021",
  numberOfEmployees: { "@type": "QuantitativeValue", minValue: 5, maxValue: 10 },
  address: {
    "@type": "PostalAddress",
    streetAddress: "815 La Pyrénéenne",
    addressLocality: "Labège",
    postalCode: "31670",
    addressRegion: "Occitanie",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.5416,
    longitude: 1.5102,
  },
  areaServed: [
    { "@type": "Country", name: "France" },
    { "@type": "AdministrativeArea", name: "Occitanie" },
  ],
  knowsAbout: [
    "Marketing B2B",
    "Positionnement produit",
    "Sales Enablement",
    "Marketing Produit",
    "Automatisation Marketing",
    "Intelligence Artificielle",
    "SEO B2B",
    "LinkedIn Ads",
    "CRM",
    "Tunnel de vente B2B",
  ],
  sameAs: [
    "https://www.linkedin.com/company/vizion-marketing-b2b/",
  ],
  priceRange: "€€€",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "10",
    reviewCount: "10",
  },
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqQuestions.map((q) => ({
    "@type": "Question",
    name: q.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: q.answer,
    },
  })),
};

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Accueil",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Agence Marketing B2B",
      item: `${SITE_URL}/agence-marketing-b2b`,
    },
  ],
};
