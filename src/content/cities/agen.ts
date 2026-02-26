import type { CityPageData } from "./types";
import {
  SITE_URL, MAP_EMBED_URL, VILLES_BADGES,
  buildOrganizationSchema, buildFaqSchema, buildBreadcrumbSchema,
} from "./shared";

// ============================================================================
// AGEN — Angle : Agro-alimentaire, logistique, PME industrielles
// Piliers : Audit & stratégie (#01) + Positionnement (#02) + Sales enablement (#05)
// ============================================================================

const meta: CityPageData["meta"] = {
  slug: "agen",
  routeSlug: "agence-marketing-agen",
  city: "Agen",
  department: "Lot-et-Garonne",
  canonical: `${SITE_URL}/agence-marketing-agen`,
};

const faqQuestions = [
  {
    question: "Vizion peut-elle accompagner une entreprise à Agen depuis Toulouse ?",
    answer:
      "Nous le faisons régulièrement. Agen est à moins de 1h30 de notre siège à Labège. Les phases stratégiques (ateliers, immersion, restitution) se font en présentiel à Agen. Le pilotage opérationnel entre les sessions est assuré à distance avec des outils collaboratifs et des points de suivi réguliers.",
  },
  {
    question: "Notre offre est technique. Comment la rendez-vous compréhensible ?",
    answer:
      "C'est notre spécialité. Nous travaillons avec des entreprises dont l'offre est complexe : industriels, éditeurs de logiciel, sous-traitants spécialisés. La méthode : nous commençons par comprendre votre chaîne de valeur et les critères de décision de vos acheteurs. Puis nous traduisons votre expertise en bénéfices concrets que vos prospects comprennent et valorisent. Le résultat : un positionnement qui distingue et un discours qui convertit.",
  },
  {
    question: "Quels secteurs sont présents dans vos références en Lot-et-Garonne ?",
    answer:
      "Nous accompagnons des PME et ETI B2B de tous secteurs. En Lot-et-Garonne et dans le Grand Sud-Ouest, nos clients opèrent notamment dans l'agroalimentaire, la logistique, l'industrie manufacturière et les services aux entreprises. Le dénominateur commun : une offre technique ou complexe, un cycle de vente long et des décideurs multiples.",
  },
  {
    question: "Nous n'avons pas de directeur marketing. Vizion peut-elle remplir ce rôle ?",
    answer:
      "Oui. La direction marketing externalisée est l'un de nos modèles d'intervention. Un directeur marketing dédié pilote votre stratégie, coordonne les spécialistes (SEO, publicité, contenu) et reporte directement à votre direction. Vous bénéficiez d'une expertise senior sans le coût d'un recrutement à temps plein.",
  },
  {
    question: "Comment savoir si notre entreprise est prête pour un accompagnement marketing ?",
    answer:
      "Si vous avez une offre solide mais que la croissance stagne, si vos commerciaux n'ont pas les bons outils, si votre positionnement n'est pas formalisé — vous êtes prêt. Nous travaillons avec des entreprises de 10 à 250 collaborateurs, avec un budget marketing à partir de 4 500 euros par mois. L'audit initial est gratuit et vous donnera une vision claire de vos priorités.",
  },
  {
    question: "Quelle est votre approche pour les entreprises agroalimentaires B2B ?",
    answer:
      "L'agroalimentaire B2B a ses spécificités : acheteurs en centrales, cahiers des charges techniques, processus de référencement long. Nous structurons le positionnement en mettant en avant vos différenciateurs (origine, traçabilité, qualité, certification) et nous créons les supports qui facilitent le référencement auprès des acheteurs professionnels. L'objectif : que votre dossier soit le plus clair et le plus convaincant sur la table du comité de sélection.",
  },
];

const content: CityPageData["content"] = {
  seo: {
    title: "Agence Marketing Agen - Structurez votre marketing industriel",
    description:
      "Agence marketing pour PME industrielles et agroalimentaires à Agen. Audit stratégique, positionnement d'offre, supports de vente. Basée à Toulouse, à 1h30 d'Agen. +70 entreprises accompagnées.",
    keywords: [
      "agence marketing agen",
      "marketing industriel agen",
      "marketing agroalimentaire lot-et-garonne",
      "agence marketing b2b agen",
      "positionnement offre agen",
      "conseil marketing agen",
      "stratégie marketing lot-et-garonne",
      "accompagnement marketing agen",
    ],
    ogImage: "/hero-binoculars.avif",
  },

  hero: {
    badge: "AGENCE MARKETING - AGEN",
    h1: "Votre agence Marketing à Agen",
    h1Highlight: "Agen",
    baseline:
      "Les PME du Lot-et-Garonne maîtrisent leur métier, mais leur marketing ne suit pas. Positionnement flou, supports obsolètes, prospection au fil de l'eau. Vizion structure l'ensemble pour que votre expertise industrielle ou agroalimentaire devienne un avantage commercial mesurable.",
    cta: {
      primary: { text: "Échanger avec un fondateur", href: "/contact" },
      secondary: { text: "Voir nos cas clients", href: "/cas-clients" },
    },
    socialProof: "+70 ENTREPRISES ACCOMPAGNÉES EN OCCITANIE ET EN FRANCE DEPUIS 2021",
  },

  intro: {
    surtitre: "Agen & Lot-et-Garonne",
    h2: "Un marketing structuré pour les entreprises qui vendent à des professionnels",
    h2Highlight: "marketing structuré",
    paragraphs: [
      "Le Lot-et-Garonne héberge un tissu de PME et ETI à forte dimension technique : agroalimentaire, logistique, industrie manufacturière, négoce spécialisé. Ces entreprises vendent à des acheteurs professionnels exigeants, souvent dans des processus de sélection multi-critères.",
      "Le marketing de ces entreprises ne peut pas se résumer à un site web et une brochure. Il doit être stratégique : un positionnement clair qui vous distingue, des canaux de prospection adaptés à votre marché, des supports commerciaux qui facilitent la décision d'achat.",
      "Vizion apporte cette structuration depuis Toulouse, à 1h30 d'Agen. Nous ne vendons pas de la visibilité pour la visibilité. Nous construisons un marketing qui produit des résultats commerciaux concrets.",
    ],
  },

  piliers: {
    surtitre: "Nos expertises pour le Lot-et-Garonne",
    h2: "Du diagnostic au closing : nos 5 piliers pour les entreprises agenaises",
    description:
      "Les entreprises agenaises ont besoin d'un diagnostic clair, d'un message distinctif, de canaux d'acquisition efficaces, de processus automatisés et de supports qui aident leurs commerciaux à conclure.",
    piliers: [
      {
        numero: "01",
        surtitre: "AUDIT & STRATÉGIE",
        titre: "Audit et stratégie marketing",
        description:
          "Votre marketing existe mais sans cohérence : un site qui ne reflète plus votre offre, des outils dispersés, une prospection qui repose sur l'intuition. Nous auditons l'ensemble — positionnement, canaux, outils, discours commercial — et posons un diagnostic factuel adapté à votre secteur, qu'il s'agisse d'agroalimentaire, de logistique ou d'industrie. La feuille de route qui en découle hiérarchise les actions par impact et faisabilité.",
        services: [
          "Audit de positionnement marché",
          "Diagnostic des canaux d'acquisition",
          "Analyse du parcours commercial",
          "Feuille de route prioritaire",
        ],
        cta: "DEMANDER UN DIAGNOSTIC",
      },
      {
        numero: "02",
        surtitre: "POSITIONNEMENT & NARRATIF",
        titre: "Positionnement et narratif produit",
        description:
          "Vos acheteurs comparent 4 ou 5 fournisseurs sur des critères techniques similaires. Ce qui fait la différence, c'est la capacité à formuler clairement votre valeur ajoutée. Nous construisons un positionnement qui met en lumière vos vrais différenciateurs — expertise, origine, capacité de production, réactivité — et un discours structuré que toute votre équipe commerciale peut porter avec assurance.",
        services: [
          "Matrice de différenciation fournisseur",
          "Proposition de valeur par segment",
          "Narratif commercial unifié",
          "Argumentaires par profil acheteur",
        ],
      },
      {
        numero: "03",
        surtitre: "TRAFIC & NOTORIÉTÉ",
        titre: "Trafic et notoriété",
        description:
          "Votre positionnement entre Toulouse et Bordeaux est un atout géographique, mais vos prospects hors réseau ne vous connaissent pas. Nous déployons les canaux d'acquisition adaptés à votre cible B2B : référencement naturel sur vos requêtes métier, campagnes publicitaires ciblées, stratégie de contenu qui démontre votre expertise agroalimentaire ou industrielle, notoriété dirigeant sur LinkedIn. L'objectif : que les bons interlocuteurs vous trouvent avant vos concurrents.",
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
          "Vos processus de référencement fournisseur et de suivi commercial sont chronophages. Vos relances dépendent de la mémoire de chacun, votre CRM est sous-utilisé. Nous connectons vos outils, automatisons les flux répétitifs et déployons l'IA là où elle génère un gain concret : qualification des contacts entrants, personnalisation des approches commerciales, production de supports accélérée. Vos équipes se concentrent sur la relation client.",
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
          "Le dossier de référencement, la présentation commerciale, la gestion des objections prix : ces éléments font la différence entre être retenu et être éliminé. Nous créons les supports qui encadrent chaque étape du processus de vente B2B. Présentations qui convainquent en comité, fiches techniques claires, comparatifs qui neutralisent la concurrence, trames de relance systématiques.",
        services: [
          "Dossiers de réponse structurés",
          "Présentations pour comités d'achat",
          "Comparatifs concurrentiels",
          "Séquences de suivi systématiques",
        ],
      },
    ],
  },

  localSEO: {
    surtitre: "[ IMPLANTATION OCCITANIE ]",
    h2: "À Agen et en Lot-et-Garonne, structurez votre marketing",
    h2Highlight: "Agen",
    description:
      "Vizion est implantée à Labège (Toulouse), à 1h30 d'Agen. Nous intervenons dans tout le Lot-et-Garonne pour accompagner les entreprises locales dans leur développement commercial.",
    paragraphs: [
      "Le bassin agenais combine une tradition industrielle et agricole solide avec un positionnement géographique stratégique entre Toulouse et Bordeaux. Les entreprises du département exportent leur savoir-faire bien au-delà de l'Occitanie, mais leur marketing n'a pas toujours suivi la même trajectoire de croissance.",
      "Notre intervention à Agen suit toujours le même principe : comprendre votre réalité opérationnelle avant de proposer quoi que ce soit. Nous nous déplaçons pour rencontrer vos équipes, observer votre processus commercial et identifier les leviers les plus impactants pour votre situation spécifique.",
    ],
    preuveLocale: "Enseignant en stratégie LinkedIn à Toulouse School of Management (TSM)",
    mapEmbedUrl: "https://maps.google.com/maps?q=Agen,+Lot-et-Garonne,+France&t=&z=13&ie=UTF8&iwloc=&output=embed",
    villes: VILLES_BADGES,
    cta: { text: "Lancer un diagnostic marketing", href: "/contact" },
  },

  faq: {
    surtitre: "[ FAQ ]",
    h2: "Questions fréquentes des entreprises lot-et-garonnaises",
    h2Highlight: "entreprises lot-et-garonnaises",
    description:
      "Voici les réponses aux questions que les dirigeants d'Agen et du Lot-et-Garonne nous posent le plus souvent.",
    questions: faqQuestions,
    ctaText: "D'autres interrogations ?",
    ctaButton: { text: "Échangeons", href: "/contact" },
  },

  finalCta: {
    trustBadge: "+70 entreprises accompagnées",
    h2: "Votre expertise mérite un marketing à sa hauteur",
    h2Highlight: "marketing",
    description:
      "Échangez 30 minutes avec un fondateur de Vizion. Nous analysons votre situation commerciale, identifions les points de friction et vous proposons un plan d'action concret. Sans engagement.",
    cta: {
      primary: { text: "Réserver un échange", href: "/contact" },
      secondary: { text: "Voir nos cas clients", href: "/cas-clients" },
    },
    trustElements: [
      "30 minutes avec un fondateur",
      "Sans engagement",
      "Plan d'action offert",
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
