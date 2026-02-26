import type { CityPageData } from "./types";
import {
  SITE_URL, MAP_EMBED_URL, VILLES_BADGES,
  buildOrganizationSchema, buildFaqSchema, buildBreadcrumbSchema,
} from "./shared";

// ============================================================================
// CASTRES — Angle : Pharma (Pierre Fabre), textile, industrie technique
// Piliers : Positionnement (#02) + IA/Automatisation (#04)
// ============================================================================

const meta: CityPageData["meta"] = {
  slug: "castres",
  routeSlug: "agence-marketing-castres",
  city: "Castres",
  department: "Tarn",
  canonical: `${SITE_URL}/agence-marketing-castres`,
};

const faqQuestions = [
  {
    question: "Vizion accompagne-t-elle des entreprises à Castres ?",
    answer:
      "Oui. Castres est à environ 1h15 de notre siège à Labège (Toulouse). Nous nous déplaçons dans le sud du Tarn pour les ateliers stratégiques et les phases d'immersion. Le pilotage courant fonctionne à distance avec des outils collaboratifs et un reporting transparent.",
  },
  {
    question: "Comment accompagnez-vous les sous-traitants de l'industrie pharmaceutique ?",
    answer:
      "Les sous-traitants pharma ont un défi spécifique : se différencier sur un marché très normé où les concurrents proposent des capacités similaires. Nous travaillons sur le positionnement autour de vos vrais différenciateurs (réactivité, expertise réglementaire, flexibilité, proximité) et nous créons les supports qui facilitent le référencement auprès des donneurs d'ordre. L'automatisation des processus marketing permet de gagner du temps sur les tâches répétitives tout en maintenant un suivi rigoureux.",
  },
  {
    question: "Notre CRM est sous-utilisé. Vizion peut-elle nous aider ?",
    answer:
      "C'est l'un de nos sujets les plus fréquents. Un CRM mal configuré ou sous-utilisé est un investissement gaspillé. Nous auditons votre setup actuel, restructurons les pipelines, automatisons la saisie et les relances, et formons vos équipes à l'utiliser efficacement. L'objectif : que le CRM devienne un accélérateur commercial, pas une corvée administrative.",
  },
  {
    question: "Quelle est votre expertise en automatisation marketing ?",
    answer:
      "Nous déployons des automatisations concrètes et adaptées à votre réalité : séquences de nurturing email, workflows de qualification de leads, intégrations entre vos outils métier et votre CRM, alertes commerciales automatiques. Nous utilisons également l'IA pour accélérer la production de contenu et affiner la qualification des prospects. Chaque automatisation est testée et validée avec vos équipes avant déploiement.",
  },
  {
    question: "Nous exportons à l'international. Pouvez-vous nous aider sur les marchés étrangers ?",
    answer:
      "Notre expertise porte sur le marketing B2B francophone et européen. Si vos marchés cibles sont en France et en Europe, nous pouvons structurer votre approche marketing (positionnement international, supports multilingues, acquisition digitale). Pour les marchés hors Europe, nous recommandons de combiner notre intervention stratégique avec un partenaire spécialisé en commerce international.",
  },
  {
    question: "Combien de temps avant de voir les premiers résultats ?",
    answer:
      "Les livrables stratégiques (positionnement, supports de vente) sont opérationnels dans les 8 à 12 premières semaines. Les résultats en acquisition (SEO, campagnes) prennent 3 à 6 mois pour monter en puissance. Les automatisations sont déployées progressivement, avec des gains d'efficacité mesurables dès le premier mois de mise en production.",
  },
];

const content: CityPageData["content"] = {
  seo: {
    title: "Agence Marketing Castres - Positionnement et automatisation pour l'industrie",
    description:
      "Agence marketing pour entreprises industrielles et pharmaceutiques à Castres. Positionnement d'offre technique, automatisation CRM, IA appliquée. Basée à Toulouse. +70 entreprises accompagnées.",
    keywords: [
      "agence marketing castres",
      "marketing industriel castres",
      "automatisation marketing tarn",
      "positionnement industrie castres",
      "marketing pharmaceutique castres",
      "crm automatisation castres",
      "agence marketing b2b castres",
      "conseil marketing castres",
    ],
    ogImage: "/hero-binoculars.avif",
  },

  hero: {
    badge: "AGENCE MARKETING - CASTRES",
    h1: "Votre agence Marketing à Castres",
    h1Highlight: "Castres",
    baseline:
      "Le bassin industriel castrais regorge d'expertises techniques, mais les processus marketing et commerciaux restent souvent artisanaux. Vizion structure le positionnement et automatise les flux des entreprises de Castres pour gagner en efficacité sans sacrifier la rigueur.",
    cta: {
      primary: { text: "Échanger avec un fondateur", href: "/contact" },
      secondary: { text: "Voir nos cas clients", href: "/cas-clients" },
    },
    socialProof: "+70 ENTREPRISES ACCOMPAGNÉES EN OCCITANIE ET EN FRANCE DEPUIS 2021",
  },

  intro: {
    surtitre: "Castres & Sud Tarn",
    h2: "L'industrie castraise a besoin de marketing, pas de bruit",
    h2Highlight: "L'industrie castraise",
    paragraphs: [
      "Castres est un pôle industriel structurant du Tarn : pharmaceutique avec l'écosystème Pierre Fabre, textile technique, mécanique de précision, chimie. Ces entreprises opèrent dans des environnements exigeants où la rigueur n'est pas une option. Leur marketing devrait refléter cette rigueur.",
      "Or, beaucoup de ces entreprises gèrent leur marketing et leur CRM de façon artisanale : saisies manuelles, relances au feeling, supports commerciaux hétérogènes. Le temps perdu sur ces tâches à faible valeur est du temps soustrait à l'ingénierie et à la relation client.",
      "Vizion apporte deux réponses concrètes : un positionnement qui fait ressortir vos vrais différenciateurs sur un marché normé, et des automatisations qui libèrent vos équipes des tâches répétitives. Depuis Toulouse, à 1h15 de Castres.",
    ],
  },

  piliers: {
    surtitre: "Nos expertises pour Castres",
    h2: "Du diagnostic au closing : nos 5 piliers pour l'industrie castraise",
    description:
      "Les entreprises castraises excellent dans la rigueur industrielle. Il est temps d'appliquer cette même rigueur à leur marketing, leur acquisition et leurs processus commerciaux.",
    piliers: [
      {
        numero: "01",
        surtitre: "AUDIT & STRATÉGIE",
        titre: "Audit et stratégie marketing",
        description:
          "Votre marketing fonctionne en silo : un site qui ne reflète plus l'offre, des outils dispersés, une prospection qui repose sur l'intuition. Nous auditons l'ensemble — positionnement, canaux, processus commercial — et posons un diagnostic adapté à la réalité industrielle castraise : pharmaceutique, textile technique, mécanique de précision. La feuille de route qui en découle priorise les actions par impact et faisabilité, pas par effet de mode.",
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
          "Dans la sous-traitance pharmaceutique ou l'industrie normée, les concurrents présentent des certifications et des capacités comparables. La différence se joue dans la manière de formuler votre valeur. Nous identifions vos vrais avantages compétitifs — réactivité, flexibilité, expertise réglementaire, proximité — et les structurons en un discours que vos commerciaux et vos réponses aux appels d'offres portent avec cohérence.",
        services: [
          "Cartographie des différenciateurs",
          "Positionnement concurrentiel industrie",
          "Message unifié pour appels d'offres",
          "Discours commercial structuré",
        ],
      },
      {
        numero: "03",
        surtitre: "TRAFIC & NOTORIÉTÉ",
        titre: "Trafic et notoriété",
        description:
          "Vos acheteurs et donneurs d'ordre cherchent des sous-traitants en ligne avant de décrocher le téléphone. Si vous n'apparaissez pas dans leurs résultats, ce sont vos concurrents qui captent ces contacts. Nous déployons les canaux d'acquisition adaptés au monde industriel : référencement naturel sur vos requêtes métier, présence LinkedIn qualifiée, contenu technique qui démontre votre expertise et rassure les comités de sélection.",
        services: [
          "SEO technique et sémantique",
          "Campagnes LinkedIn Ads ciblées",
          "Stratégie de contenu industriel",
          "Présence LinkedIn professionnelle",
        ],
      },
      {
        numero: "04",
        surtitre: "AUTOMATISATION & IA",
        titre: "Automatisation et intelligence artificielle",
        description:
          "Vos lignes de production sont optimisées, mais votre pipeline commercial est géré sur un tableur. Vos relances dépendent de la mémoire de chacun. Nous structurons et automatisons vos flux marketing et commerciaux : CRM configuré pour votre réalité, séquences de relance systématiques, scoring de leads automatisé, reporting unifié. L'IA accélère la qualification des prospects et la production de supports. Vos équipes se concentrent sur la valeur ajoutée.",
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
          "Vos commerciaux et ingénieurs d'affaires maîtrisent la technique, mais improvisent le discours commercial à chaque rendez-vous. Les dossiers de réponse manquent d'impact, les présentations sont trop techniques pour les décideurs non-experts. Nous créons les supports qui encadrent chaque étape du cycle industriel : présentations adaptées au comité d'achat, fiches comparatives qui neutralisent la concurrence, trames de relance systématiques.",
        services: [
          "Présentations pour comités d'achat",
          "Fiches comparatives concurrence",
          "Dossiers de réponse structurés",
          "Séquences de relance systématiques",
        ],
      },
    ],
  },

  localSEO: {
    surtitre: "[ IMPLANTATION OCCITANIE ]",
    h2: "À Castres et dans le sud du Tarn, optimisez vos processus",
    h2Highlight: "Castres",
    description:
      "Vizion est basée à Labège (Toulouse), à 1h15 de Castres. Nous intervenons régulièrement dans le bassin industriel du sud du Tarn.",
    paragraphs: [
      "Castres et la Montagne Noire forment un bassin industriel dense où coexistent grands groupes et un réseau de sous-traitants spécialisés. La proximité avec l'écosystème Pierre Fabre a créé un tissu d'entreprises habituées à des standards élevés de qualité et de processus.",
      "Nous intervenons auprès de ces entreprises avec la même exigence. Chaque recommandation est fondée sur une analyse factuelle, chaque automatisation est testée avant déploiement, et chaque livrable stratégique est conçu pour être utilisé au quotidien — pas pour finir dans un tiroir.",
    ],
    preuveLocale: "Enseignant en stratégie LinkedIn à Toulouse School of Management (TSM)",
    mapEmbedUrl: "https://maps.google.com/maps?q=Castres,+Tarn,+France&t=&z=13&ie=UTF8&iwloc=&output=embed",
    villes: VILLES_BADGES,
    cta: { text: "Auditer vos processus marketing", href: "/contact" },
  },

  faq: {
    surtitre: "[ FAQ ]",
    h2: "Questions fréquentes des industriels castrais",
    h2Highlight: "industriels castrais",
    description:
      "Voici les réponses aux questions que les dirigeants de Castres et du sud du Tarn nous posent le plus souvent.",
    questions: faqQuestions,
    ctaText: "Une question technique ?",
    ctaButton: { text: "Échangeons", href: "/contact" },
  },

  finalCta: {
    trustBadge: "+70 entreprises accompagnées",
    h2: "Votre rigueur industrielle mérite un marketing à la hauteur",
    h2Highlight: "rigueur",
    description:
      "Échangez 30 minutes avec un fondateur de Vizion. Nous analysons votre positionnement et vos processus marketing, puis identifions les automatisations prioritaires. Sans engagement.",
    cta: {
      primary: { text: "Réserver un échange", href: "/contact" },
      secondary: { text: "Voir nos cas clients", href: "/cas-clients" },
    },
    trustElements: [
      "30 minutes avec un fondateur",
      "Sans engagement",
      "Diagnostic process offert",
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
