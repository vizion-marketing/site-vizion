// ============================================================================
// CONTENU PAGE D'ACCUEIL — /
// ============================================================================
// Angle : partenaire de croissance pour les entreprises B2B (France & Europe)
// 5 piliers alignés sur le menu services
// ============================================================================

import type { HeroContent, PiliersContent, FAQContent, BlogContent, LocalSEOContent } from "./home";

const SITE_URL = "https://by-vizion.com";

// ============================================================================
// SEO
// ============================================================================

export const b2bSEO = {
  title: "Vizion | Partenaire de croissance des entreprises B2B | France & Europe",
  description:
    "Vizion accompagne les entreprises B2B françaises et européennes dans leur croissance. Stratégie, acquisition, sales enablement, digitalisation. +70 entreprises accompagnées depuis 2021.",
  keywords: [
    "agence marketing b2b",
    "partenaire croissance b2b",
    "marketing b2b france",
    "agence marketing b2b europe",
    "sales enablement b2b",
    "croissance entreprise b2b",
    "stratégie marketing b2b",
    "accompagnement marketing b2b",
  ],
  ogImage: "/hero-binoculars.avif",
};

// ============================================================================
// HERO
// ============================================================================

export const b2bHero: HeroContent = {
  badge: "PARTENAIRE DE CROISSANCE B2B",
  h1: "Le partenaire de croissance des entreprises B2B",
  h1Highlight: "de croissance",
  baseline:
    "Votre offre est solide, mais votre marketing ne produit pas les résultats attendus. Vizion structure votre stratégie, construit votre crédibilité, déploie vos canaux d'acquisition et équipe vos commerciaux. Un partenaire qui intervient du diagnostic à la signature, pour accélérer votre développement.",
  badges: [],
  cta: {
    primary: { text: "Échanger avec un fondateur", href: "/contact" },
    secondary: { text: "Nos études de cas clients B2B", href: "/cas-clients" },
  },
  socialProof: "+70 ENTREPRISES B2B ACCOMPAGNÉES EN FRANCE ET EN EUROPE DEPUIS 2021",
};

// ============================================================================
// INTRO
// ============================================================================

export const b2bIntro = {
  title: "La croissance B2B ne se décrète pas. Elle se structure.",
  paragraphs: [
    "Votre produit est bon. Vos clients existants sont satisfaits. Mais la croissance stagne : les prospects ne comprennent pas votre valeur, le pipeline n'est pas prévisible, vos commerciaux avancent sans outils adaptés. Le problème n'est pas votre offre. C'est le système qui la porte.",
    "Vizion est le partenaire de croissance des entreprises B2B françaises et européennes. Nous intervenons là où le marketing devient un levier de développement : diagnostic des freins, construction du positionnement, déploiement des canaux d'acquisition, création des outils de vente, digitalisation des processus. Chaque action est calibrée pour rapprocher votre entreprise de son prochain palier de croissance.",
    "Pas de livrables décoratifs, pas de vanity metrics. Un interlocuteur dédié, une feuille de route partagée, des résultats qui se mesurent en pipeline et en signatures.",
  ],
  mission: "Notre mission : être le levier de croissance que votre entreprise B2B n'a pas encore.",
};

// ============================================================================
// 5 PILIERS — descriptions adaptées B2B
// ============================================================================

export const b2bPiliers: PiliersContent = {
  surtitre: "Notre approche",
  h2: "5 leviers de croissance pour les entreprises B2B",
  description:
    "Chaque entreprise B2B qui accélère passe par les mêmes étapes : comprendre ses freins, affirmer son positionnement, générer du revenu, convertir plus vite, digitaliser ses processus. Nos 5 piliers couvrent l'ensemble du parcours de croissance.",
  badgeText: "",
  badgeStatus: "",
  piliers: [
    {
      numero: "01",
      surtitre: "PRENEZ LES BONNES DÉCISIONS",
      titre: "Audit, stratégie et direction marketing",
      description:
        "Vous investissez dans des actions marketing sans savoir lesquelles génèrent du résultat. Nous auditons votre positionnement, vos canaux et vos processus, puis nous construisons la feuille de route qui concentre vos ressources sur les leviers à plus fort impact. Direction marketing externalisée ou mission ciblée : nous nous adaptons à votre stade de croissance.",
      services: [
        "Audit marketing complet",
        "Roadmap stratégique 6-12 mois",
        "Direction marketing externalisée",
        "Analyse concurrentielle",
        "Cadrage budgétaire",
      ],
      cta: "DEMANDER UN AUDIT",
    },
    {
      numero: "02",
      surtitre: "BÂTISSEZ VOTRE CRÉDIBILITÉ",
      titre: "Positionnement, contenu et personal branding",
      description:
        "Vos prospects vous comparent à vos concurrents sans percevoir la différence. Nous construisons un positionnement clair, un messaging adapté à chaque cible et les contenus qui installent votre expertise sur votre marché. Pour que votre valeur devienne évidente avant même le premier échange commercial.",
      services: [
        "Positionnement et messaging",
        "Création de contenu B2B",
        "Landing pages",
        "Stratégie de personal branding",
      ],
    },
    {
      numero: "03",
      surtitre: "GÉNÉREZ DU REVENU",
      titre: "SEO, campagnes publicitaires et prospection",
      description:
        "Votre expertise est reconnue par vos clients existants, mais invisible pour le reste du marché. Nous déployons les canaux d'acquisition calibrés pour le B2B : référencement naturel, campagnes ciblées, prospection structurée. Les prospects qualifiés arrivent de façon prévisible et mesurable.",
      services: [
        "SEO et contenu organique",
        "Campagnes LinkedIn, Google et Meta Ads",
        "Cold outreach et prospection multi-canal",
        "Suivi et optimisation continue",
      ],
    },
    {
      numero: "04",
      surtitre: "ARMEZ VOS COMMERCIAUX",
      titre: "Sales enablement et closing",
      description:
        "Chaque commercial improvise son discours et les objections ne sont pas anticipées. Nous créons les outils qui transforment votre cycle de vente en processus reproductible : présentations par profil décideur, fiches concurrentielles, séquences de nurturing automatisées, workflows structurés.",
      services: [
        "Pitch decks et argumentaires",
        "Battlecards et case studies",
        "Lead nurturing automatisé",
        "Workflows commerciaux",
      ],
    },
    {
      numero: "05",
      surtitre: "DIGITALISEZ VOTRE ENTREPRISE",
      titre: "Site web, CRM et applications IA",
      description:
        "Vos outils sont sous-exploités et vos processus restent manuels. Nous déployons les solutions digitales qui accélèrent votre activité : un site web qui convertit, un CRM structuré autour de votre cycle de vente, des applications IA qui libèrent du temps sur les tâches à forte valeur.",
      services: [
        "Création ou refonte de site web",
        "Déploiement et structuration CRM",
        "Applications IA sur mesure",
        "Audit de site web existant",
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
  surtitre: "[ QUI SOMMES-NOUS ]",
  h2: "Née à Toulouse, au service des entreprises B2B en France et en Europe",
  h2Highlight: "France et en Europe",
  description:
    "Vizion est née à Toulouse, au contact d'un écosystème B2B exigeant : aéronautique, SaaS, industrie, services. Aujourd'hui, nous accompagnons des entreprises B2B partout en France et en Europe, avec la même rigueur et la même proximité.",
  paragraphs: [
    "Notre approche s'est construite au contact de cycles de vente longs, de décideurs techniques et d'offres complexes à positionner. C'est cette exigence qui fait la différence : chaque mission Vizion repose sur un diagnostic approfondi, une feuille de route priorisée et un suivi opérationnel rigoureux.",
    "Nous fonctionnons en modèle hybride : ateliers stratégiques en présentiel quand c'est utile, pilotage opérationnel à distance le reste du temps. La qualité de l'accompagnement ne dépend pas de la distance, mais de la rigueur du processus et de la relation de confiance que nous construisons avec chaque client.",
  ],
  preuveLocale: "Enseignant en stratégie LinkedIn à Toulouse School of Management (TSM)",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2891.5!2d1.5102!3d43.5416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebb6fec7552ff%3A0x40ae6168453a970!2sLab%C3%A8ge!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr",
  villes: [
    { name: "Toulouse", label: "Siège", href: "/" },
    { name: "Paris", label: "Clients actifs" },
    { name: "Lyon", label: "Clients actifs" },
    { name: "Bordeaux", label: "Clients actifs" },
    { name: "Montpellier", label: "Clients actifs", href: "/agence-marketing-montpellier" },
    { name: "Europe", label: "Remote" },
  ],
  cta: { text: "Échanger sur vos enjeux de croissance", href: "/contact" },
};

// ============================================================================
// BLOG
// ============================================================================

export const b2bBlog: BlogContent = {
  surtitre: "[ RESSOURCES ]",
  h2: "Nos analyses pour accélérer votre croissance B2B",
  h2Highlight: "votre croissance B2B",
  ctaText: "Lire nos articles marketing B2B",
};

// ============================================================================
// FAQ
// ============================================================================

const faqQuestions = [
  {
    question: "Qu'est-ce qu'un partenaire de croissance B2B ?",
    answer:
      "Un partenaire de croissance B2B n'est pas un prestataire qui exécute des demandes. C'est un acteur qui prend la responsabilité de votre développement marketing et commercial. Chez Vizion, cela signifie un diagnostic de votre situation, une feuille de route priorisée, et un accompagnement opérationnel sur les 5 leviers de croissance : stratégie, crédibilité, acquisition, sales enablement et digitalisation. Un interlocuteur dédié pilote l'ensemble et mobilise les experts nécessaires.",
  },
  {
    question: "Quels types d'entreprises B2B accompagnez-vous ?",
    answer:
      "Nous accompagnons des PME et ETI B2B de 10 à 250 collaborateurs en France et en Europe. Éditeurs SaaS, industrie, services aux entreprises, ESN, cabinets de conseil, aéronautique, santé. Le dénominateur commun : une offre technique ou complexe, un cycle de vente long, et l'ambition d'accélérer la croissance de façon structurée.",
  },
  {
    question: "Comment Vizion se distingue des autres agences marketing B2B ?",
    answer:
      "Trois différences concrètes. Première : nous ne produisons rien sans avoir posé le diagnostic et la stratégie. Pas de campagne sans positionnement, pas de contenu sans feuille de route. Deuxième : nous couvrons l'ensemble du parcours de croissance, du positionnement à la digitalisation, avec des experts dédiés sur chaque pilier. Troisième : votre interlocuteur unique est un directeur marketing senior, pas un chef de projet junior qui relaie vos demandes.",
  },
  {
    question: "Comment se structure un accompagnement avec Vizion ?",
    answer:
      "Deux formats possibles. La mission ciblée (8 à 16 semaines) intervient sur un enjeu précis : repositionnement, lancement produit, structuration du tunnel de vente. L'accompagnement dans la durée (6 mois minimum) : nous endossons le rôle de votre équipe marketing, avec un directeur dédié et l'accès à nos experts sur chaque pilier. Dans les deux cas, le point de départ est toujours un diagnostic.",
  },
  {
    question: "Vizion travaille-t-elle uniquement en France ?",
    answer:
      "Non. Vizion est basée à Toulouse, mais accompagne des entreprises B2B partout en France et en Europe. Notre modèle hybride combine ateliers stratégiques en présentiel quand c'est pertinent et pilotage opérationnel à distance. La proximité géographique est un atout pour nos clients en Occitanie, mais la qualité de l'accompagnement repose sur le processus, pas sur la localisation.",
  },
  {
    question: "En combien de temps voit-on des résultats ?",
    answer:
      "Les délais dépendent de votre point de départ et des leviers activés. Les premiers livrables stratégiques (positionnement, feuille de route, supports commerciaux) sont opérationnels en 4 à 8 semaines. Les résultats d'acquisition (SEO, campagnes, prospection) se mesurent à partir de 3 à 6 mois. Nous cadrons des indicateurs concrets dès le départ pour mesurer l'avancement à chaque étape.",
  },
];

export const b2bFAQ: FAQContent = {
  surtitre: "[ FAQ ]",
  h2: "Questions fréquentes sur notre accompagnement",
  h2Highlight: "notre accompagnement",
  description:
    "Voici les réponses aux questions que les dirigeants B2B nous posent le plus souvent avant de démarrer.",
  questions: faqQuestions,
  ctaText: "D'autres questions ?",
  ctaButton: { text: "Échangeons directement", href: "/contact" },
};

// ============================================================================
// CTA FINAL
// ============================================================================

export const b2bFinalCta = {
  trustBadge: "+70 entreprises B2B accompagnées",
  h2: "Prêt à structurer votre prochain palier de croissance ?",
  h2Highlight: "de croissance",
  description:
    "Échangez 30 minutes avec un fondateur de Vizion. Nous analysons votre situation actuelle, identifions vos freins de croissance, et vous proposons un plan d'action concret. Sans engagement.",
  cta: {
    primary: { text: "Réserver un diagnostic gratuit", href: "/contact" },
    secondary: { text: "Voir nos résultats clients", href: "/cas-clients" },
  },
  trustElements: [
    "30 minutes avec un fondateur",
    "Sans engagement",
    "Diagnostic offert",
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
  alternateName: "Vizion, partenaire de croissance B2B",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo-vizion.avif`,
  image: `${SITE_URL}/hero-binoculars.avif`,
  description:
    "Vizion accompagne les entreprises B2B françaises et européennes dans leur croissance. Stratégie, acquisition, sales enablement, digitalisation. +70 entreprises accompagnées depuis 2021.",
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
