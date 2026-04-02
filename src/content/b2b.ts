// ============================================================================
// CONTENU PAGE D'ACCUEIL - /
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
  title: "Vizion | Structuration marketing et commercial B2B | PME, ETI, Start-up",
  description:
    "Chez Vizion, on structure et digitalise le département marketing et commercial des entreprises B2B. Lancement, restructuration, accélération : on pose les fondations pour construire ce qui dure. +70 entreprises accompagnées.",
  keywords: [
    "structuration marketing b2b",
    "digitalisation marketing commercial",
    "agence marketing b2b",
    "direction marketing externalisée",
    "infrastructure marketing commerciale",
    "marketing b2b france",
    "accompagnement marketing pme",
    "structuration commercial b2b",
  ],
  ogImage: "/images/og-image.png",
};

// ============================================================================
// HERO
// ============================================================================

export const b2bMeetTeamText =
  "Chez Vizion, nous croyons que pour devenir la référence de votre secteur vous avez besoin de fondations à la hauteur de vos ambitions. C'est pourquoi nous vous accompagnons aux moments les plus stratégiques de votre histoire (lancement de produit, restructuration...) pour déployer une machine marketing et commerciale adaptée à vos objectifs, même les plus fous.";

export const b2bHero: HeroContent = {
  badge: "Bienvenue sur le site de Vizion",
  h1: "Notre mission : Faire de vous une évidence sur votre marché.",
  h1Highlight: "une évidence sur votre marché.",
  baseline: "Notre agence spécialiste du Marketing B2B intervient aux moments les plus stratégiques de votre entreprise : lancement de produit, restructuration, accélération, pour déployer une machine marketing et commerciale adaptée à vos objectifs, même les plus fous.",
  badges: [],
  cta: {
    primary: { text: "Nous contacter", href: "/contact" },
    secondary: { text: "Découvrez nos cas clients", href: "/cas-clients" },
  },
  socialProof: "PME, ETI, START-UPS B2B | FRANCE ET EUROPE | DEPUIS 2021",
};

// ============================================================================
// INTRO
// ============================================================================

export const b2bIntroSituations = [
  {
    trigger: "Vous lancez votre produit",
    description: "Pas de positionnement clair, pas de pipeline. On pose les bases avant que le marché vous compare à vos concurrents.",
  },
  {
    trigger: "Votre croissance stagne",
    description: "Les leads arrivent au compte-gouttes et personne ne sait exactement pourquoi. On diagnostique, on tranche, on repart.",
  },
  {
    trigger: "Vous traversez une transition",
    description: "Rachat, pivot, restructuration. L'organisation marketing et commerciale est à refaire. On reprend de zéro, sans perdre de temps.",
  },
];

export const b2bIntro = {
  title: "La croissance B2B ne se décrète pas. Elle se structure.",
  paragraphs: [
    "Votre produit est bon. Vos clients existants le confirment. Mais les nouveaux prospects ne comprennent pas votre valeur, le pipeline n'est pas prévisible, vos commerciaux avancent sans outils. Le problème n'est pas votre offre. C'est le système qui la porte.",
    "Vizion intervient aux moments qui comptent : lancement de produit, restructuration, accélération. Positionnement, outils commerciaux, canaux d'acquisition, process, digitalisation. Tout est conçu pour poser des fondations qui tiennent.",
    "Pas de livrables décoratifs, pas de vanity metrics. Un interlocuteur dédié, une feuille de route partagée, des résultats qui se mesurent en pipeline et en signatures.",
  ],
  mission: "Un seul objectif : que votre prochaine étape de croissance repose sur quelque chose de solide.",
};

// ============================================================================
// 5 PILIERS - descriptions adaptées B2B
// ============================================================================

export const b2bPiliers: PiliersContent = {
  surtitre: "[ LA MÉTHODE ]",
  h2: "Des services stratégiques, pensés pour les entreprises qui vendent aux entreprises.",
  description:
    "Stratégie, positionnement, acquisition, activation commerciale, digitalisation : nous déployons des infrastructures solides pensées pour soutenir votre développement commercial et marketing, quel que soit votre enjeu, votre secteur ou vos objectifs.",
  badgeText: "",
  badgeStatus: "",
  piliers: [
    {
      numero: "01",
      surtitre: "Stratégie marketing et commerciale",
      titre: "Audit, stratégie & direction marketing",
      description:
        "Vous dépensez du budget sur des actions dont vous ne savez pas lesquelles fonctionnent. On audite votre positionnement, vos canaux et vos processus. On en ressort une feuille de route qui met les ressources au bon endroit. Direction marketing externalisée ou mission courte : on s'adapte à votre stade.",
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
      surtitre: "Marketing produit",
      titre: "Positionnement, contenu & personal branding",
      description:
        "Votre meilleur client ne vous a pas trouvé. Il vous a été recommandé. Pour les autres, rien ne les distingue de vos concurrents. On construit le positionnement, le messaging et les contenus qui rendent votre valeur évidente avant le premier échange.",
      services: [
        "Positionnement et messaging",
        "Création de contenu B2B",
        "Landing pages",
      ],
    },
    {
      numero: "03",
      surtitre: "Growth Marketing",
      titre: "SEO, campagnes & prospection",
      description:
        "Vos clients actuels vous connaissent. Le marché, non. On déploie les canaux calibrés pour le B2B : SEO, campagnes ciblées, prospection structurée. Les prospects qualifiés arrivent de façon mesurable. Pas en rafale, en régulier.",
      services: [
        "SEO et contenu organique",
        "Campagnes LinkedIn, Google et Meta Ads",
        "Cold outreach et prospection multi-canal",
        "Suivi et optimisation continue",
      ],
    },
    {
      numero: "04",
      surtitre: "Activation des ventes",
      titre: "Sales enablement & closing",
      description:
        "Chaque commercial a son propre discours. Les objections ne sont pas préparées. Le cycle de vente s'allonge sans qu'on sache où ça coince. On crée les outils qui standardisent sans rigidifier : pitchs par profil décideur, battlecards, séquences de nurturing, workflows commerciaux.",
      services: [
        "Pitch decks et argumentaires",
        "Battlecards et case studies",
        "Lead nurturing automatisé",
        "Workflows commerciaux",
      ],
    },
    {
      numero: "05",
      surtitre: "Transformation digitale",
      titre: "Site web, CRM & IA",
      description:
        "Votre CRM est à moitié rempli. Votre site ne convertit pas. Vos équipes font encore manuellement ce que des outils pourraient gérer. On déploie ce qui manque : site web qui convertit, CRM structuré autour de votre cycle de vente, applications IA sur les tâches à fort volume.",
      services: [
        "Création ou refonte de site web",
        "Déploiement et structuration CRM",
        "Applications IA sur mesure",
      ],
    },
  ],
  ctaText: "",
  socialProofText: "",
  cta: {
    primary: { text: "Nous contacter", href: "/contact" },
    secondary: { text: "Voir nos cas clients", href: "/cas-clients" },
  },
};

// ============================================================================
// ABOUT / LOCAL SEO - adapté B2B
// ============================================================================

export const b2bLocalSEO: LocalSEOContent = {
  surtitre: "[ QUI SOMMES-NOUS ]",
  h2: "Toulouse. Et partout où ça se joue.",
  h2Highlight: "partout où ça se joue",
  description:
    "Vizion est née à Toulouse, dans un tissu B2B exigeant : aéronautique, SaaS, industrie. Aujourd'hui on accompagne des entreprises partout en France et en Europe, avec la même rigueur et la même proximité.",
  paragraphs: [
    "On s'est construits sur des cycles de vente longs, des décideurs techniques et des offres complexes à positionner. Chaque mission démarre par un diagnostic, suit une feuille de route priorisée et se pilote avec un suivi hebdomadaire.",
    "Ateliers en présentiel quand c'est utile, pilotage à distance le reste du temps. La qualité de l'accompagnement ne dépend pas de la distance.",
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
  h2: "Nos derniers billets de blog dédiés au Marketing B2B.",
  h2Highlight: "la plupart des agences ne vous disent pas",
  ctaText: "Lire nos articles marketing B2B",
};

// ============================================================================
// FAQ
// ============================================================================

const faqQuestions = [
  {
    question: "Vizion, c'est quoi exactement ?",
    answer:
      "Vizion pilote la transformation marketing et commerciale de PME, ETI et scale-ups B2B aux moments où ça compte le plus. On ne produit pas de contenu pour remplir un planning : on pose le positionnement, on construit les outils commerciaux, on déploie les canaux d'acquisition, on intègre l'IA là où elle apporte une valeur mesurable. Un directeur marketing dédié pilote l'ensemble et reste votre interlocuteur unique tout au long de la mission.",
  },
  {
    question: "Dans quelles situations intervenez-vous ?",
    answer:
      "Nous intervenons aux moments de transformation, pas en mode agence d'exécution permanente. Lancement d'un nouveau produit ou d'une nouvelle offre, restructuration commerciale, accélération après une levée de fonds, refonte du positionnement, post-rachat : ces moments demandent une expertise stratégique et opérationnelle combinée. C'est précisément ce que nous apportons.",
  },
  {
    question: "En quoi Vizion est différent d'une agence classique ?",
    answer:
      "Trois différences concrètes. On ne dissocie pas stratégie et exécution : tout part d'un diagnostic, et chaque livrable sert un objectif commercial précis. On couvre l'intégralité du cycle de vente, y compris la négociation et le closing, pas seulement la génération de leads. Et on intègre l'IA depuis 2021, pas comme une promesse de pitch mais comme un outil opérationnel déployé chez nos clients : agents de prospection, qualification automatique, personnalisation à l'échelle.",
  },
  {
    question: "À quel type d'entreprise B2B s'adresse Vizion ?",
    answer:
      "Nous accompagnons des PME et ETI B2B de 10 à 250 collaborateurs, en France et en Europe. Éditeurs SaaS, industrie, services aux entreprises, cabinets de conseil, ESN, scale-ups. Le dénominateur commun : une offre à valeur élevée, un cycle de vente multi-décideurs, et un moment de transformation à piloter. Budget type : 4 500 à 15 000 euros par mois selon la mission.",
  },
  {
    question: "Comment se passe un premier échange avec Vizion ?",
    answer:
      "30 minutes avec un fondateur, sans deck et sans engagement. On écoute votre situation, on identifie ce qui bloque et ce qui est actionnable rapidement. Si votre enjeu correspond à notre expertise, on vous propose une approche sur mesure. Si ce n'est pas le cas, on vous dit clairement pourquoi et vers qui vous orienter.",
  },
  {
    question: "En combien de temps voit-on des résultats ?",
    answer:
      "Les premiers livrables stratégiques (positionnement, architecture de message, supports commerciaux, feuille de route) sont opérationnels entre 4 et 8 semaines. Les résultats d'acquisition (SEO, campagnes, prospection outbound) se mesurent à partir de 3 à 6 mois. Nous définissons des indicateurs concrets dès le lancement pour que vous puissiez mesurer l'avancement à chaque étape, pas seulement en fin de mission.",
  },
];

export const b2bFAQ: FAQContent = {
  surtitre: "[ FAQ ]",
  h2: "Vous avez une question ?",
  h2Highlight: "avant de démarrer",
  description:
    "Les vraies questions que posent les dirigeants B2B avant de s'engager. Avec les vraies réponses.",
  questions: faqQuestions,
  ctaText: "Une question que vous ne voyez pas ici ?",
  ctaButton: { text: "Échangeons directement", href: "/contact" },
};

// ============================================================================
// CTA FINAL
// ============================================================================

export const b2bFinalCta = {
  trustBadge: "+70 entreprises B2B accompagnées",
  h2: "Vos prochains clients n'attendent pas. Votre infrastructure, si.",
  h2Highlight: "Votre infrastructure, si.",
  description:
    "30 minutes avec un fondateur. On regarde votre situation, on identifie ce qui bloque, on vous dit ce qu'on ferait. Sans engagement, sans deck de 40 slides.",
  cta: {
    primary: { text: "Parler à un fondateur", href: "/contact" },
    secondary: { text: "Voir les résultats clients", href: "/cas-clients" },
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
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": `${SITE_URL}/#organization`,
  name: "Vizion",
  alternateName: "Vizion, structuration et digitalisation marketing B2B",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo-vizion.avif`,
  image: `${SITE_URL}/hero-binoculars.avif`,
  description:
    "Vizion structure et digitalise le département marketing et commercial des entreprises B2B. Lancement, restructuration, accélération : on pose les fondations pour construire ce qui dure. +70 entreprises accompagnées depuis 2021.",
  telephone: "+33750836543",
  email: "contact@by-vizion.com",
  foundingDate: "2021",
  numberOfEmployees: { "@type": "QuantitativeValue", minValue: 5, maxValue: 10 },
  priceRange: "€€€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Virement bancaire, carte bancaire",
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
  hasMap: "https://maps.google.com/?q=815+La+Pyréneenne,+31670+Labège",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  areaServed: [
    { "@type": "Country", name: "France" },
    { "@type": "AdministrativeArea", name: "Occitanie" },
    { "@type": "City", name: "Toulouse" },
    { "@type": "City", name: "Paris" },
  ],
  knowsAbout: [
    "Marketing B2B",
    "Positionnement produit",
    "Activation des Ventes",
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
