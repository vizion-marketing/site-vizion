import type { CityPageData } from "./types";
import {
  SITE_URL, MAP_EMBED_URL, VILLES_BADGES,
  buildOrganizationSchema, buildFaqSchema, buildBreadcrumbSchema,
} from "./shared";

// ============================================================================
// MONTPELLIER — Angle : Tech, santé, startups en croissance rapide
// Piliers : Positionnement (#02) + Trafic & notoriété (#03) + IA/Auto (#04)
// ============================================================================

const meta: CityPageData["meta"] = {
  slug: "montpellier",
  routeSlug: "agence-marketing-montpellier",
  city: "Montpellier",
  department: "Hérault",
  canonical: `${SITE_URL}/agence-marketing-montpellier`,
};

const faqQuestions = [
  {
    question: "Vizion a-t-elle des clients à Montpellier ?",
    answer:
      "Vizion accompagne des entreprises dans toute l'Occitanie et au-delà. Notre siège est à Labège (technopole de Toulouse), à 2h de Montpellier. Nous nous déplaçons régulièrement pour les ateliers stratégiques en présentiel et assurons le suivi opérationnel en visio entre les sessions. Plus de 70 entreprises nous font confiance depuis 2021.",
  },
  {
    question: "Comment travaillez-vous avec une startup montpelliéraine en phase de croissance ?",
    answer:
      "Nous commençons par un cadrage stratégique : positionnement, discours de marque, personas. Ensuite nous structurons le tunnel d'acquisition adapté à votre stade de maturité. Pour une startup, cela signifie souvent un mix SEO + LinkedIn + landing pages ciblées, avec des itérations rapides basées sur les données. Le tout piloté par un directeur marketing dédié, pas un chef de projet junior.",
  },
  {
    question: "Quels secteurs accompagnez-vous dans l'Hérault ?",
    answer:
      "Nous accompagnons des entreprises B2B de tous secteurs : éditeurs SaaS, health-tech, biotech, cleantech, services aux entreprises, ESN et cabinets de conseil. Notre expertise porte sur les offres complexes à cycle de vente long, quel que soit le secteur d'activité.",
  },
  {
    question: "En quoi Vizion se distingue des agences marketing installées à Montpellier ?",
    answer:
      "Trois différences concrètes. D'abord, nous ne faisons pas d'exécution sans stratégie : chaque action repose sur un positionnement validé. Ensuite, nous intervenons jusqu'à la vente — supports commerciaux, objections, closing. Enfin, nous intégrons l'IA dans nos processus pour livrer plus vite sans sacrifier la qualité. La plupart des agences locales se concentrent sur la production de contenu ou la publicité, pas sur l'alignement complet marketing-ventes.",
  },
  {
    question: "Quel budget prévoir pour un accompagnement marketing ?",
    answer:
      "Nos missions ciblées (lancement, repositionnement) démarrent sur 8 à 16 semaines, sur devis. Nos accompagnements dans la durée impliquent un engagement de 6 mois minimum, avec un budget adapté à votre structure et vos objectifs. Nous travaillons typiquement avec des entreprises investissant entre 4 500 et 15 000 euros par mois dans leur marketing.",
  },
  {
    question: "Pouvez-vous intervenir en complément d'une équipe marketing interne ?",
    answer:
      "Absolument. Beaucoup de nos clients disposent déjà d'une équipe. Nous intervenons alors sur les sujets stratégiques (positionnement, architecture de message) ou techniques (automatisation CRM, IA appliquée) que l'équipe interne n'a pas le temps ou l'expertise de traiter. Le transfert de compétences fait partie de notre approche.",
  },
  {
    question: "Comment mesurez-vous les résultats de vos interventions ?",
    answer:
      "Chaque mission est cadrée avec des indicateurs concrets dès le départ : trafic qualifié, taux de conversion tunnel, nombre de leads, coût d'acquisition. Nous mettons en place des tableaux de bord partagés et faisons un point mensuel sur la progression. Pas de métriques vanity, uniquement ce qui impacte votre chiffre d'affaires.",
  },
];

const content: CityPageData["content"] = {
  seo: {
    title: "Agence Marketing Montpellier - Structurez votre croissance tech",
    description:
      "Agence marketing pour startups et entreprises tech à Montpellier. Positionnement produit, acquisition B2B, automatisation IA. Basée en Occitanie, +70 entreprises accompagnées depuis 2021.",
    keywords: [
      "agence marketing montpellier",
      "marketing startup montpellier",
      "positionnement produit montpellier",
      "agence marketing b2b montpellier",
      "marketing tech montpellier",
      "acquisition b2b herault",
      "marketing saas montpellier",
      "conseil marketing montpellier",
    ],
    ogImage: "/hero-binoculars.avif",
  },

  hero: {
    badge: "AGENCE MARKETING - MONTPELLIER",
    h1: "Votre agence Marketing à Montpellier",
    h1Highlight: "Montpellier",
    baseline:
      "L'écosystème tech montpelliérain bouillonne, mais la concurrence aussi. Votre solution est performante, vos prospects ne le savent pas encore. Vizion structure le positionnement, l'acquisition et les outils de vente des entreprises innovantes de l'Hérault. Pour que votre offre devienne le choix évident de votre marché.",
    cta: {
      primary: { text: "Échanger avec un fondateur", href: "/contact" },
      secondary: { text: "Voir nos cas clients", href: "/cas-clients" },
    },
    socialProof: "+70 ENTREPRISES ACCOMPAGNÉES EN OCCITANIE ET EN FRANCE DEPUIS 2021",
  },

  intro: {
    surtitre: "Montpellier & Hérault",
    h2: "Le marketing des entreprises tech ne se limite pas à générer du trafic",
    h2Highlight: "entreprises tech",
    paragraphs: [
      "Montpellier concentre un vivier d'entreprises innovantes — SaaS, healthtech, biotech, services numériques — qui partagent un défi commun : rendre une offre techniquement avancée compréhensible pour des acheteurs non techniques. La sophistication du produit devient un frein quand le message manque de clarté.",
      "Vizion intervient en amont de la production de contenu ou de la publicité. Nous posons d'abord les fondations stratégiques : qui sont vos acheteurs, ce qu'ils comparent, ce qui déclenche leur décision. Ensuite nous construisons le dispositif d'acquisition et les outils de vente qui portent ce positionnement de bout en bout.",
      "Depuis Toulouse, nous accompagnons les entreprises montpelliéraines en présentiel pour les phases stratégiques et en continu à distance. Deux heures de route, zéro compromis sur la rigueur.",
    ],
  },

  piliers: {
    surtitre: "Nos expertises pour Montpellier",
    h2: "Du diagnostic au closing : nos 5 piliers pour les entreprises montpelliéraines",
    description:
      "Les entreprises de l'Hérault ont besoin de clarté stratégique, de visibilité, d'efficacité opérationnelle et d'outils de vente alignés. Vizion couvre l'ensemble du cycle marketing et commercial.",
    piliers: [
      {
        numero: "01",
        surtitre: "AUDIT & STRATÉGIE",
        titre: "Audit et stratégie marketing",
        description:
          "Votre croissance s'essouffle et vous ne savez pas si le problème vient du produit, du message ou des canaux. Nous auditons votre positionnement, vos tunnels d'acquisition et vos outils, puis nous construisons une feuille de route priorisée. Direction marketing externalisée ou mission ciblée : que vous soyez une startup en phase de scale ou une PME en restructuration, chaque action repose sur un diagnostic factuel de votre situation dans l'écosystème montpelliérain.",
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
          "Votre technologie est avancée, mais vos prospects décrochent dès la première phrase. Vos commerciaux simplifient différemment selon leur interlocuteur. Nous construisons un positionnement qui traduit la complexité technique en valeur business immédiate. Matrice concurrentielle, proposition de valeur par segment, discours de marque unifié. Votre offre devient lisible pour les décideurs qui signent.",
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
          "Votre marché existe, mais vos prospects ne vous trouvent pas. Vos concurrents occupent l'espace pendant que votre site stagne. Nous déployons les canaux d'acquisition adaptés à votre cible B2B : référencement naturel sur vos requêtes métier, campagnes LinkedIn ciblées par fonction et secteur, contenu à forte valeur qui positionne votre expertise. Le trafic qualifié arrive convaincu avant même le premier échange.",
        services: [
          "SEO technique et sémantique B2B",
          "Campagnes LinkedIn Ads ciblées",
          "Stratégie de contenu d'expertise",
          "Landing pages de conversion",
        ],
      },
      {
        numero: "04",
        surtitre: "AUTOMATISATION & IA",
        titre: "Automatisation et intelligence artificielle",
        description:
          "Vos commerciaux passent plus de temps à remplir le CRM qu'à vendre. Vos séquences de relance sont manuelles. Vos reportings prennent deux jours. Nous connectons vos outils, automatisons les flux répétitifs et déployons l'IA là où elle génère un gain mesurable : qualification de leads, personnalisation des approches, production de contenu accélérée. Votre équipe se concentre sur la relation client et la stratégie.",
        services: [
          "Déploiement et structuration CRM",
          "Workflows marketing automatisés",
          "IA appliquée à la qualification",
          "Tableaux de bord temps réel",
        ],
      },
      {
        numero: "05",
        surtitre: "CONTENUS D'AIDE À LA VENTE",
        titre: "Contenus d'aide à la vente",
        description:
          "Vos commerciaux improvisent à chaque rendez-vous et chacun raconte une histoire différente de votre solution. Les démos manquent de structure, les objections techniques ne sont pas anticipées, les relances sont aléatoires. Nous créons les supports alignés sur votre positionnement : présentations par profil décideur, fiches comparatives, battle cards concurrence, séquences de relance. Chaque interaction commerciale renforce la même promesse.",
        services: [
          "Présentations par type de décideur",
          "Battle cards concurrence",
          "Guides d'appel et gestion d'objections",
          "Séquences de relance structurées",
        ],
      },
    ],
  },

  localSEO: {
    surtitre: "[ IMPLANTATION OCCITANIE ]",
    h2: "À Montpellier et dans l'Hérault, structurez votre croissance",
    h2Highlight: "Montpellier",
    description:
      "Vizion est implantée à Labège, au coeur de la technopole de Toulouse. Cette position centrale en Occitanie nous permet d'intervenir régulièrement à Montpellier pour les entreprises de l'Hérault.",
    paragraphs: [
      "La métropole montpelliéraine accueille un écosystème tech en pleine expansion : pôles de compétitivité, incubateurs, campus universitaires tournés vers l'innovation. Les entreprises qui en émergent ont besoin d'un marketing structuré pour passer du produit prometteur au leader de marché.",
      "Notre approche commence toujours par le terrain. Nous nous déplaçons à Montpellier pour les ateliers d'immersion stratégique, les sessions de co-construction avec vos équipes et les points de suivi trimestriels. Le reste du pilotage opérationnel se fait à distance, avec des outils partagés et une transparence totale sur l'avancement.",
    ],
    preuveLocale: "Enseignant en stratégie LinkedIn à Toulouse School of Management (TSM)",
    mapEmbedUrl: "https://maps.google.com/maps?q=Montpellier,+H%C3%A9rault,+France&t=&z=13&ie=UTF8&iwloc=&output=embed",
    villes: VILLES_BADGES,
    cta: { text: "Démarrer un audit stratégique", href: "/contact" },
  },

  faq: {
    surtitre: "[ FAQ ]",
    h2: "Questions fréquentes des entreprises montpelliéraines",
    h2Highlight: "entreprises montpelliéraines",
    description:
      "La transparence fait partie de nos engagements. Voici les réponses aux questions que nous recevons le plus souvent de la part des dirigeants de Montpellier et de l'Hérault.",
    questions: faqQuestions,
    ctaText: "Vous avez une autre question ?",
    ctaButton: { text: "Contactez-nous", href: "/contact" },
  },

  finalCta: {
    trustBadge: "+70 entreprises accompagnées",
    h2: "Votre offre mérite d'être comprise par votre marché",
    h2Highlight: "comprise",
    description:
      "Échangez 30 minutes avec un fondateur de Vizion. Nous analysons votre positionnement, identifions les freins à votre croissance et vous proposons une feuille de route concrète. Sans engagement.",
    cta: {
      primary: { text: "Réserver un échange", href: "/contact" },
      secondary: { text: "Voir nos cas clients", href: "/cas-clients" },
    },
    trustElements: [
      "30 minutes avec un fondateur",
      "Sans engagement",
      "Diagnostic offert",
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
