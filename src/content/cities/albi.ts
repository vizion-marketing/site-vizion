import type { CityPageData } from "./types";
import {
  SITE_URL, MAP_EMBED_URL, VILLES_BADGES,
  buildOrganizationSchema, buildFaqSchema, buildBreadcrumbSchema,
} from "./shared";

// ============================================================================
// ALBI — Angle : PME à offre technique, artisanat, patrimoine, tourisme
// Piliers : Positionnement (#02) + Sales enablement (#05)
// ============================================================================

const meta: CityPageData["meta"] = {
  slug: "albi",
  routeSlug: "agence-marketing-albi",
  city: "Albi",
  department: "Tarn",
  canonical: `${SITE_URL}/agence-marketing-albi`,
};

const faqQuestions = [
  {
    question: "Vizion intervient-elle à Albi et dans le Tarn ?",
    answer:
      "Oui. Notre siège est à Labège (technopole de Toulouse), à environ 1h15 d'Albi par l'autoroute. Nous intervenons régulièrement dans la préfecture du Tarn et les communes environnantes. Les ateliers stratégiques se déroulent en présentiel, le suivi opérationnel fonctionne en continu à distance.",
  },
  {
    question: "Quel type d'entreprises accompagnez-vous dans le Tarn ?",
    answer:
      "Nous travaillons principalement avec des PME et ETI B2B : sous-traitants industriels, entreprises du patrimoine et du tourisme, artisans d'excellence, négoces spécialisés. Notre spécialité, ce sont les offres techniques ou complexes dont la valeur est difficile à communiquer simplement à des prospects non experts.",
  },
  {
    question: "Nos commerciaux maîtrisent le produit mais peinent à conclure. Pouvez-vous les aider ?",
    answer:
      "C'est exactement notre terrain. Le problème vient rarement du produit ou des compétences commerciales. Il vient d'un positionnement flou et de supports inadaptés. Nous construisons les outils qui encadrent le discours : présentations alignées, fiches comparatives, trames de traitement des objections, séquences de relance. Vos commerciaux disposent d'un cadre clair et cohérent à chaque étape du cycle de vente.",
  },
  {
    question: "Quelle est la différence entre Vizion et une agence de communication classique ?",
    answer:
      "Une agence de communication produit des supports visuels et des contenus. Vizion intervient en amont : nous définissons le positionnement, structurons le message et alignons le marketing sur vos objectifs de vente. Nous ne produisons rien tant que la stratégie n'est pas posée. Et nous allons jusqu'aux supports commerciaux que vos vendeurs utilisent face au client.",
  },
  {
    question: "Combien de temps dure un accompagnement typique ?",
    answer:
      "Une mission ciblée (repositionnement, création de supports de vente) dure 8 à 16 semaines. Un accompagnement dans la durée, où nous pilotons votre marketing comme un directeur externalisé, implique un engagement de 6 mois minimum. La durée dépend de la complexité de votre offre et de vos objectifs.",
  },
  {
    question: "Nous sommes une petite structure. Vizion travaille-t-elle avec des TPE ?",
    answer:
      "Notre modèle est conçu pour les entreprises de 10 à 250 collaborateurs avec un budget marketing structuré (à partir de 4 500 euros par mois). Pour les très petites structures, nos tarifs ne sont généralement pas adaptés. En revanche, si vous avez une offre complexe et un vrai enjeu commercial, la taille ne nous arrête pas.",
  },
];

const content: CityPageData["content"] = {
  seo: {
    title: "Agence Marketing Albi - Équipez vos commerciaux pour vendre mieux",
    description:
      "Agence marketing pour PME à Albi et dans le Tarn. Positionnement d'offre technique, supports de vente alignés, sales enablement. Basée à Toulouse, à 1h15 d'Albi. +70 entreprises accompagnées.",
    keywords: [
      "agence marketing albi",
      "marketing b2b albi",
      "sales enablement tarn",
      "positionnement offre albi",
      "accompagnement commercial albi",
      "agence marketing tarn",
      "supports de vente albi",
      "conseil marketing albi",
    ],
    ogImage: "/hero-binoculars.avif",
  },

  hero: {
    badge: "AGENCE MARKETING - ALBI",
    h1: "Votre agence Marketing à Albi",
    h1Highlight: "Albi",
    baseline:
      "Votre savoir-faire est reconnu dans le Tarn, mais vos commerciaux peinent à le traduire en arguments qui déclenchent la signature. Vizion structure le positionnement et les outils de vente des PME tarnaises pour que chaque interaction commerciale porte le même message, du premier contact au closing.",
    cta: {
      primary: { text: "Échanger avec un fondateur", href: "/contact" },
      secondary: { text: "Voir nos cas clients", href: "/cas-clients" },
    },
    socialProof: "+70 ENTREPRISES ACCOMPAGNÉES EN OCCITANIE ET EN FRANCE DEPUIS 2021",
  },

  intro: {
    surtitre: "Albi & Tarn",
    h2: "Quand le savoir-faire dépasse le discours commercial",
    h2Highlight: "savoir-faire",
    paragraphs: [
      "Le Tarn abrite des entreprises dont l'expertise est indiscutable : sous-traitance industrielle de précision, filières d'excellence artisanale, acteurs du tourisme patrimonial. Leur point commun : une offre de qualité, portée par un discours commercial qui n'est pas à la hauteur du produit.",
      "Le problème n'est pas la compétence de vos équipes. C'est l'absence de cadre : pas de positionnement formalisé, pas de supports alignés, pas de processus de vente structuré. Chaque commercial adapte le discours à sa manière, et le prospect reçoit des signaux contradictoires.",
      "Vizion pose les fondations qui manquent : un positionnement clair, un discours unifié, des outils de vente que vos équipes utilisent vraiment. Nous intervenons depuis Toulouse, à 1h15 de la cité épiscopale.",
    ],
  },

  piliers: {
    surtitre: "Nos expertises pour le Tarn",
    h2: "Du diagnostic au closing : nos 5 piliers pour les PME tarnaises",
    description:
      "Les PME tarnaises ne manquent pas de savoir-faire. Elles manquent de stratégie, de visibilité et de structure dans leurs outils de vente. Vizion couvre l'ensemble du cycle marketing et commercial.",
    piliers: [
      {
        numero: "01",
        surtitre: "AUDIT & STRATÉGIE",
        titre: "Audit et stratégie marketing",
        description:
          "Votre marketing fonctionne par à-coups, sans vision d'ensemble. Nous auditons votre positionnement actuel, vos canaux de prospection et vos outils, puis nous construisons une feuille de route adaptée à votre secteur — industrie, artisanat d'excellence, patrimoine ou services B2B. Direction marketing externalisée ou mission ciblée : chaque action repose sur un diagnostic factuel de votre situation dans le Tarn.",
        services: [
          "Audit marketing complet",
          "Feuille de route priorisée",
          "Direction marketing externalisée",
          "Analyse concurrentielle",
        ],
        cta: "DEMANDER UN AUDIT",
      },
      {
        numero: "02",
        surtitre: "POSITIONNEMENT & NARRATIF",
        titre: "Positionnement et narratif produit",
        description:
          "Vos prospects comprennent que vous faites du bon travail, mais pas pourquoi ils devraient vous choisir plutôt qu'un autre. Le positionnement n'est pas un exercice de style : c'est la base sur laquelle repose tout votre tunnel de vente. Nous analysons votre marché, vos concurrents et vos segments cibles, puis nous formulons un message qui rend votre différence évidente — que vous soyez artisan d'excellence, sous-traitant industriel ou acteur du patrimoine tarnais.",
        services: [
          "Analyse concurrentielle terrain",
          "Positionnement par segment cible",
          "Proposition de valeur formalisée",
          "Discours de marque unifié",
        ],
      },
      {
        numero: "03",
        surtitre: "TRAFIC & NOTORIÉTÉ",
        titre: "Trafic et notoriété",
        description:
          "Votre réputation locale est solide, mais elle ne dépasse pas le Tarn. Pour toucher de nouveaux marchés, il faut des canaux d'acquisition structurés. Nous déployons le référencement naturel sur vos requêtes métier, les campagnes publicitaires ciblées, la stratégie de contenu qui démontre votre expertise et la notoriété dirigeant sur LinkedIn. Pour que les acheteurs qui ne vous connaissent pas encore vous trouvent avant vos concurrents.",
        services: [
          "SEO et référencement naturel",
          "Campagnes Google Ads et LinkedIn Ads",
          "Stratégie de contenu B2B",
          "Notoriété dirigeant LinkedIn",
        ],
      },
      {
        numero: "04",
        surtitre: "AUTOMATISATION & IA",
        titre: "Automatisation et intelligence artificielle",
        description:
          "Vos relances sont manuelles, votre CRM est sous-utilisé et vos reportings prennent trop de temps. Nous connectons vos outils, automatisons les flux répétitifs et déployons l'IA là où elle génère un gain mesurable : qualification de prospects, personnalisation des approches, production de supports accélérée. Pour que vos équipes se concentrent sur la relation client et la vente, pas sur l'administratif.",
        services: [
          "Structuration et automatisation CRM",
          "Workflows marketing automatisés",
          "IA appliquée à la qualification",
          "Reporting commercial unifié",
        ],
      },
      {
        numero: "05",
        surtitre: "CONTENUS D'AIDE À LA VENTE",
        titre: "Contenus d'aide à la vente",
        description:
          "Vos vendeurs connaissent le produit par cœur mais improvisent à chaque rendez-vous. Les présentations datent, les objections ne sont pas anticipées, les relances sont aléatoires. Nous créons un arsenal commercial aligné sur votre positionnement : présentations structurées, comparatifs concurrentiels, trames d'appel, séquences de relance. Chaque interaction de vente devient prévisible et efficace, du premier appel à la proposition commerciale.",
        services: [
          "Présentations commerciales sur mesure",
          "Fiches comparatives concurrence",
          "Trames d'appel et gestion d'objections",
          "Séquences de relance structurées",
        ],
      },
    ],
  },

  localSEO: {
    surtitre: "[ IMPLANTATION OCCITANIE ]",
    h2: "À Albi et dans le Tarn, structurez votre démarche commerciale",
    h2Highlight: "Albi",
    description:
      "Vizion est basée à Labège (Toulouse), à 1h15 d'Albi. Nous nous déplaçons régulièrement dans le Tarn pour accompagner les entreprises locales.",
    paragraphs: [
      "Le tissu économique tarnais repose sur des entreprises à forte expertise technique : industrie, artisanat d'excellence, filière bois, agroalimentaire. Ces entreprises vendent à des professionnels exigeants, sur des cycles de décision longs, souvent face à des concurrents mieux organisés en termes de communication.",
      "Nous ne cherchons pas à transformer ces entreprises en machines à contenu. Nous leur donnons les fondations stratégiques et les outils concrets dont elles ont besoin pour vendre mieux : un positionnement qui les distingue et des supports que leurs commerciaux utilisent réellement au quotidien.",
    ],
    preuveLocale: "Enseignant en stratégie LinkedIn à Toulouse School of Management (TSM)",
    mapEmbedUrl: "https://maps.google.com/maps?q=Albi,+Tarn,+France&t=&z=13&ie=UTF8&iwloc=&output=embed",
    villes: VILLES_BADGES,
    cta: { text: "Diagnostiquer vos outils de vente", href: "/contact" },
  },

  faq: {
    surtitre: "[ FAQ ]",
    h2: "Questions fréquentes des dirigeants tarnais",
    h2Highlight: "dirigeants tarnais",
    description:
      "Voici les réponses aux questions que les dirigeants d'Albi et du Tarn nous posent le plus souvent avant de travailler ensemble.",
    questions: faqQuestions,
    ctaText: "Une question spécifique ?",
    ctaButton: { text: "Parlons-en", href: "/contact" },
  },

  finalCta: {
    trustBadge: "+70 entreprises accompagnées",
    h2: "Vos commerciaux méritent des outils à la hauteur de votre produit",
    h2Highlight: "outils",
    description:
      "Échangez 30 minutes avec un fondateur de Vizion. Nous analysons votre positionnement et vos supports de vente, puis nous identifions les leviers prioritaires. Sans engagement.",
    cta: {
      primary: { text: "Réserver un échange", href: "/contact" },
      secondary: { text: "Voir nos cas clients", href: "/cas-clients" },
    },
    trustElements: [
      "30 minutes avec un fondateur",
      "Sans engagement",
      "Audit de vos supports offert",
    ],
  },
};

const cityData: CityPageData = {
  meta,
  content,
  organizationSchema: buildOrganizationSchema(meta),
  faqSchema: buildFaqSchema(faqQuestions),
  breadcrumbSchema: buildBreadcrumbSchema(meta),
};

export default cityData;
