import type { CityPageData } from "./types";
import {
  SITE_URL, MAP_EMBED_URL, VILLES_BADGES,
  buildOrganizationSchema, buildFaqSchema, buildBreadcrumbSchema,
} from "./shared";

// ============================================================================
// AUCH — Angle : Agriculture, artisanat, entreprises traditionnelles
// Piliers : Audit & stratégie (#01) + Trafic & notoriété (#03)
// ============================================================================

const meta: CityPageData["meta"] = {
  slug: "auch",
  routeSlug: "agence-marketing-auch",
  city: "Auch",
  department: "Gers",
  canonical: `${SITE_URL}/agence-marketing-auch`,
};

const faqQuestions = [
  {
    question: "Vizion se déplace-t-elle dans le Gers ?",
    answer:
      "Oui. Auch est à environ 1h15 de notre siège à Labège (Toulouse). Nous nous déplaçons dans le Gers pour les phases stratégiques : ateliers de cadrage, immersion dans votre entreprise, présentation des livrables. Le suivi courant fonctionne à distance avec des outils partagés et des points réguliers.",
  },
  {
    question: "Mon entreprise n'a jamais fait de marketing structuré. Par où commencer ?",
    answer:
      "C'est justement le bon moment. Nous démarrons par un audit complet : votre positionnement actuel (même informel), vos canaux de prospection, votre présence en ligne, votre discours commercial. À partir de ce diagnostic, nous construisons une feuille de route priorisée et réaliste. Pas besoin d'avoir déjà une stratégie en place, c'est notre rôle de la poser.",
  },
  {
    question: "Les entreprises du Gers ont-elles vraiment besoin de marketing digital ?",
    answer:
      "Oui, et plus que jamais. Vos clients B2B recherchent en ligne avant de décrocher le téléphone. Si votre offre n'apparaît pas sur les requêtes de votre métier, vos concurrents captent ces contacts en premier. Le marketing digital pour une PME gersoise ne signifie pas devenir une entreprise tech — cela signifie être visible là où vos acheteurs cherchent.",
  },
  {
    question: "Quels résultats concrets pouvons-nous attendre ?",
    answer:
      "Cela dépend de votre point de départ et de vos objectifs. Sur une mission de 6 mois typique, nos clients observent une augmentation mesurable du trafic qualifié, une amélioration du taux de conversion des prospects en clients, et une diminution du temps de cycle commercial. Nous cadrons des indicateurs concrets dès le départ pour mesurer l'avancement.",
  },
  {
    question: "Quel est votre tarif pour une PME ?",
    answer:
      "Nos accompagnements démarrent à 4 500 euros par mois pour un suivi dans la durée. Les missions ciblées (audit, repositionnement) sont facturées sur devis selon le périmètre. Nous adaptons l'intensité de l'intervention à votre budget et à vos priorités.",
  },
  {
    question: "Travaillez-vous dans le secteur agricole et agroalimentaire ?",
    answer:
      "Nous accompagnons des entreprises B2B de tous secteurs, y compris l'agroalimentaire et les services liés à l'agriculture. Notre expertise porte sur les offres complexes vendues à des professionnels. Si votre cycle de vente implique plusieurs décideurs et des enjeux techniques, nous sommes dans notre domaine.",
  },
];

const content: CityPageData["content"] = {
  seo: {
    title: "Agence Marketing Auch - Rendez votre entreprise visible dans le Gers",
    description:
      "Agence marketing pour entreprises du Gers. Audit stratégique, visibilité digitale, acquisition de prospects B2B. Basée à Toulouse, à 1h15 d'Auch. +70 entreprises accompagnées depuis 2021.",
    keywords: [
      "agence marketing auch",
      "marketing gers",
      "visibilité digitale auch",
      "agence marketing b2b gers",
      "stratégie marketing auch",
      "acquisition prospects gers",
      "marketing pme auch",
      "conseil marketing auch",
    ],
    ogImage: "/hero-binoculars.avif",
  },

  hero: {
    badge: "AGENCE MARKETING - AUCH",
    h1: "Votre agence Marketing à Auch",
    h1Highlight: "Auch",
    baseline:
      "Votre entreprise gersoise a un savoir-faire solide, mais elle reste invisible en dehors de son réseau habituel. Vizion structure la stratégie marketing et la visibilité digitale des PME du Gers pour qu'elles atteignent les acheteurs qui ne les connaissent pas encore.",
    cta: {
      primary: { text: "Échanger avec un fondateur", href: "/contact" },
      secondary: { text: "Voir nos cas clients", href: "/cas-clients" },
    },
    socialProof: "+70 ENTREPRISES ACCOMPAGNÉES EN OCCITANIE ET EN FRANCE DEPUIS 2021",
  },

  intro: {
    surtitre: "Auch & Gers",
    h2: "Sortir du bouche-à-oreille sans perdre son identité",
    h2Highlight: "bouche-à-oreille",
    paragraphs: [
      "Dans le Gers, beaucoup d'entreprises B2B prospèrent grâce à leur réseau et leur réputation locale. Mais quand la croissance exige d'aller chercher de nouveaux marchés, le bouche-à-oreille atteint ses limites. Les prospects extérieurs ne connaissent ni votre nom ni votre offre.",
      "La transition vers un marketing structuré ne signifie pas abandonner ce qui fait votre force. Elle consiste à formaliser votre positionnement, à rendre votre offre trouvable en ligne et à donner à vos commerciaux des outils qui prolongent la qualité de votre relation client.",
      "Vizion accompagne cette transition avec pragmatisme. Pas de jargon digital inutile, pas de stratégies inadaptées à votre réalité. Un diagnostic factuel, des priorités claires, et des actions qui produisent des résultats mesurables.",
    ],
  },

  piliers: {
    surtitre: "Nos expertises pour le Gers",
    h2: "Du diagnostic au closing : nos 5 piliers pour les entreprises gersoises",
    description:
      "Les entreprises gersoises qui veulent grandir ont besoin de clarté stratégique, de visibilité et d'outils efficaces. Vizion couvre l'ensemble du cycle : audit, positionnement, acquisition, automatisation et supports de vente.",
    piliers: [
      {
        numero: "01",
        surtitre: "AUDIT & STRATÉGIE",
        titre: "Audit et stratégie marketing",
        description:
          "Vous sentez que votre marketing ne produit pas les résultats attendus, mais vous ne savez pas exactement pourquoi. Nous auditons votre positionnement actuel, vos canaux de prospection, votre présence en ligne et vos outils. Le diagnostic révèle les points de friction et les opportunités inexploitées. Ensuite nous construisons une feuille de route priorisée — adaptée à la réalité des PME gersoises, qu'elles soient dans l'agroalimentaire, l'artisanat ou les services.",
        services: [
          "Audit marketing complet",
          "Diagnostic de positionnement",
          "Analyse des canaux existants",
          "Feuille de route priorisée",
        ],
        cta: "DEMANDER UN AUDIT",
      },
      {
        numero: "02",
        surtitre: "POSITIONNEMENT & NARRATIF",
        titre: "Positionnement et narratif produit",
        description:
          "Votre offre est solide, mais vos prospects ne perçoivent pas ce qui vous distingue de vos concurrents. Le bouche-à-oreille vous a porté jusqu'ici, mais pour grandir il faut un message clair et différenciant. Nous analysons votre marché, vos segments cibles et vos concurrents, puis nous formulons un positionnement qui rend votre valeur ajoutée évidente — que vous vendiez des produits agricoles transformés, des services B2B ou de l'artisanat d'excellence.",
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
          "Vos clients potentiels cherchent des solutions comme la vôtre sur internet. Si vous n'apparaissez pas dans leurs résultats, c'est votre concurrent qui récupère le contact. Nous mettons en place les canaux d'acquisition adaptés à votre cible : référencement naturel sur vos requêtes métier, présence LinkedIn qualifiée, contenu qui démontre votre expertise. L'objectif : que les bons interlocuteurs vous trouvent sans que vous ayez à les appeler un par un.",
        services: [
          "Référencement naturel (SEO)",
          "Stratégie de contenu métier",
          "Présence LinkedIn professionnelle",
          "Pages d'atterrissage ciblées",
        ],
      },
      {
        numero: "04",
        surtitre: "AUTOMATISATION & IA",
        titre: "Automatisation et intelligence artificielle",
        description:
          "Votre entreprise gère ses relances au feeling, son CRM est un tableur et ses reportings prennent des heures. Nous connectons vos outils, automatisons les flux répétitifs et déployons l'IA là où elle fait gagner du temps : qualification de prospects, personnalisation des approches, production de contenu accélérée. Pour que vos équipes se concentrent sur ce qui génère vraiment du chiffre d'affaires, pas sur de l'administratif.",
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
          "Vos commerciaux connaissent le produit par cœur mais improvisent à chaque rendez-vous. Les présentations datent, les objections ne sont pas anticipées, les relances sont aléatoires. Nous créons les supports alignés sur votre positionnement : présentations structurées, fiches comparatives, trames d'appel, séquences de relance. Chaque interaction commerciale porte le même message, que vous vendiez à un distributeur national ou à un acheteur local.",
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
    h2: "À Auch et dans le Gers, développez votre visibilité",
    h2Highlight: "Auch",
    description:
      "Vizion est implantée à Labège (Toulouse), à 1h15 d'Auch. Nous accompagnons les entreprises gersoises dans leur structuration marketing.",
    paragraphs: [
      "Le Gers est un territoire d'entrepreneurs qui combinent ancrage local et ambition de développement. L'agriculture, l'agroalimentaire, le tourisme et l'artisanat sont les piliers d'un tissu économique dynamique mais souvent peu visible au-delà de ses frontières départementales.",
      "Notre rôle est de donner aux entreprises du Gers les moyens d'aller chercher de nouveaux marchés sans renier ce qui fait leur identité. Un marketing structuré, des canaux de prospection adaptés, et un positionnement qui parle aux acheteurs professionnels en dehors du réseau habituel.",
    ],
    preuveLocale: "Enseignant en stratégie LinkedIn à Toulouse School of Management (TSM)",
    mapEmbedUrl: "https://maps.google.com/maps?q=Auch,+Gers,+France&t=&z=13&ie=UTF8&iwloc=&output=embed",
    villes: VILLES_BADGES,
    cta: { text: "Auditer votre stratégie actuelle", href: "/contact" },
  },

  faq: {
    surtitre: "[ FAQ ]",
    h2: "Questions fréquentes des entreprises gersoises",
    h2Highlight: "entreprises gersoises",
    description:
      "Voici les réponses aux questions que nous recevons le plus souvent de la part des dirigeants d'Auch et du Gers.",
    questions: faqQuestions,
    ctaText: "Besoin d'en savoir plus ?",
    ctaButton: { text: "Contactez-nous", href: "/contact" },
  },

  finalCta: {
    trustBadge: "+70 entreprises accompagnées",
    h2: "Votre entreprise mérite d'être connue au-delà de votre réseau",
    h2Highlight: "connue",
    description:
      "Échangez 30 minutes avec un fondateur de Vizion. Nous faisons le point sur votre situation, identifions les leviers prioritaires et vous proposons une feuille de route. Sans engagement.",
    cta: {
      primary: { text: "Réserver un échange", href: "/contact" },
      secondary: { text: "Voir nos cas clients", href: "/cas-clients" },
    },
    trustElements: [
      "30 minutes avec un fondateur",
      "Sans engagement",
      "Diagnostic initial offert",
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
