import type { CityPageData } from "./types";
import {
  SITE_URL, MAP_EMBED_URL, VILLES_BADGES,
  buildOrganizationSchema, buildFaqSchema, buildBreadcrumbSchema,
} from "./shared";

// ============================================================================
// MAZAMET — Angle : Textile historique en mutation, PME/artisans, communication
// Piliers : Positionnement (#02) + Trafic & Notoriété (#03)
// ============================================================================

const meta: CityPageData["meta"] = {
  slug: "mazamet",
  routeSlug: "agence-marketing-communication-mazamet",
  city: "Mazamet",
  department: "Tarn",
  canonical: `${SITE_URL}/agence-marketing-communication-mazamet`,
};

const faqQuestions = [
  {
    question: "Vizion intervient-elle directement à Mazamet ?",
    answer:
      "Oui. Mazamet est à environ 1h30 de notre siège à Labège (Toulouse). Nous nous déplaçons régulièrement dans le Tarn pour les ateliers stratégiques, les immersions terrain et les sessions de travail en présentiel. Le suivi opérationnel fonctionne à distance avec un reporting clair et des points réguliers.",
  },
  {
    question: "Quelle différence entre marketing et communication pour une PME à Mazamet ?",
    answer:
      "La communication, c'est ce que vous dites et comment vous le dites : site web, brochures, réseaux sociaux, relations presse. Le marketing, c'est la stratégie qui dicte quoi dire, à qui, et pourquoi. Chez Vizion, nous commençons toujours par le marketing (positionnement, message, cible) avant de décliner en communication. C'est la seule façon de produire des supports qui génèrent du résultat, pas juste de la visibilité.",
  },
  {
    question: "Nous sommes une petite entreprise. Vizion travaille-t-elle avec des structures de notre taille ?",
    answer:
      "Absolument. Nous accompagnons des PME de 10 à 250 collaborateurs, et nombre de nos clients ont démarré avec des équipes réduites. La taille ne détermine pas la qualité du marketing — c'est la clarté du positionnement qui fait la différence. Notre formule mission ciblée (8 à 16 semaines) est conçue pour des entreprises qui ont un enjeu précis à résoudre sans s'engager dans un accompagnement long.",
  },
  {
    question: "Comment le marketing peut-il aider une entreprise du textile ou du cuir à se repositionner ?",
    answer:
      "Le savoir-faire textile et cuir de Mazamet est un atout considérable, mais il est souvent mal valorisé face aux marchés actuels. Nous travaillons sur le repositionnement de l'offre : identifier les segments porteurs (luxe, éco-responsable, technique), formuler une proposition de valeur qui résonne avec les acheteurs contemporains, et déployer les canaux qui touchent les bons décideurs. Le produit est excellent — c'est le message qui doit évoluer.",
  },
  {
    question: "Pouvez-vous nous aider à développer notre visibilité en ligne depuis Mazamet ?",
    answer:
      "C'est l'un de nos métiers. Nous déployons des stratégies d'acquisition adaptées à votre cible : SEO pour capter l'intention de recherche, campagnes publicitaires ciblées (Google, LinkedIn, Meta), stratégie de contenu, et notoriété dirigeant sur LinkedIn. Chaque canal est choisi en fonction de votre marché et de vos objectifs, pas par effet de mode. L'objectif : que les bons prospects vous trouvent avant vos concurrents.",
  },
  {
    question: "Combien coûte un accompagnement marketing avec Vizion ?",
    answer:
      "Chaque accompagnement est dimensionné selon vos enjeux et votre maturité marketing. Mission ciblée (8 à 16 semaines) ou accompagnement dans la durée (6 mois minimum), le budget est construit sur mesure. Nous travaillons principalement avec des PME et ETI. Chaque projet démarre par un diagnostic gratuit pour évaluer si nous sommes le bon partenaire et définir le périmètre d'intervention.",
  },
];

const content: CityPageData["content"] = {
  seo: {
    title: "Agence Marketing et Communication à Mazamet - Vizion",
    description:
      "Agence marketing et communication pour les entreprises de Mazamet et du Tarn. Positionnement, stratégie digitale, SEO, campagnes publicitaires. Basée à Toulouse. +70 entreprises accompagnées.",
    keywords: [
      "agence marketing mazamet",
      "agence communication mazamet",
      "marketing digital mazamet",
      "communication entreprise mazamet",
      "agence marketing tarn",
      "stratégie marketing mazamet",
      "référencement mazamet",
      "agence web mazamet",
    ],
    ogImage: "/hero-binoculars.avif",
  },

  hero: {
    badge: "AGENCE MARKETING & COMMUNICATION - MAZAMET",
    h1: "Votre agence Marketing et Communication à Mazamet",
    h1Highlight: "Mazamet",
    baseline:
      "Mazamet porte un héritage industriel rare, mais les entreprises du territoire peinent à le valoriser sur les marchés actuels. Vizion aide les PME mazamétaines à clarifier leur positionnement et à déployer une communication qui génère du résultat, pas juste de la visibilité.",
    cta: {
      primary: { text: "Échanger avec un fondateur", href: "/contact" },
      secondary: { text: "Voir nos cas clients", href: "/cas-clients" },
    },
    socialProof: "+70 ENTREPRISES ACCOMPAGNÉES EN OCCITANIE ET EN FRANCE DEPUIS 2021",
  },

  intro: {
    surtitre: "Mazamet & Montagne Noire",
    h2: "Un savoir-faire industriel qui mérite un marketing à la hauteur",
    h2Highlight: "savoir-faire industriel",
    paragraphs: [
      "Mazamet a été la capitale mondiale du délainage, et son tissu économique garde les traces de cette excellence industrielle. Cuir, textile technique, mécanique — les entreprises du territoire maîtrisent leur métier. Mais face à des marchés qui évoluent, la qualité du produit ne suffit plus : il faut un message clair et une stratégie de communication qui porte cette expertise auprès des bons interlocuteurs.",
      "Or, beaucoup de PME mazamétaines fonctionnent encore sur le bouche-à-oreille et des supports vieillissants. Le site web date de cinq ans, la plaquette commerciale ne reflète plus l'offre réelle, et les commerciaux improvisent un discours différent à chaque rendez-vous. Le savoir-faire est là — c'est sa mise en marché qui manque de structure.",
      "Vizion intervient sur ce décalage. Nous posons le positionnement, structurons le message, puis déployons les canaux de communication et d'acquisition adaptés à votre marché. Depuis Toulouse, à 1h30 de Mazamet, avec des déplacements réguliers dans le Tarn.",
    ],
  },

  piliers: {
    surtitre: "Nos expertises pour Mazamet",
    h2: "Du diagnostic au closing : nos 5 piliers pour les entreprises mazamétaines",
    description:
      "Les entreprises de Mazamet ont le produit. Il leur manque la stratégie, le message et les canaux pour le porter. Vizion couvre l'ensemble du cycle : audit, positionnement, acquisition, automatisation et outils de vente.",
    piliers: [
      {
        numero: "01",
        surtitre: "AUDIT & STRATÉGIE",
        titre: "Audit et stratégie marketing",
        description:
          "Votre entreprise mazamétainne fonctionne au bouche-à-oreille depuis des années, mais la croissance plafonne sans que vous sachiez exactement pourquoi. Nous auditons votre positionnement, vos canaux de prospection et vos outils, puis nous structurons une feuille de route adaptée à votre réalité — textile, cuir, artisanat ou services. Direction marketing externalisée ou mission ciblée : chaque euro investi repose sur un diagnostic factuel, pas sur des suppositions.",
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
          "Vos prospects ne perçoivent pas ce qui vous distingue. Vos supports — site web, plaquettes, présentations — décrivent ce que vous faites mais pas pourquoi vous choisir. Le savoir-faire textile ou artisanal de Mazamet est un atout majeur, encore faut-il le traduire en proposition de valeur claire. Nous construisons un positionnement qui rend votre différence évidente, que vous vendiez du cuir premium, du textile technique ou un service B2B.",
        services: [
          "Positionnement et proposition de valeur",
          "Discours de marque structuré",
          "Narratif produit par segment",
          "Architecture de message",
        ],
      },
      {
        numero: "03",
        surtitre: "TRAFIC & NOTORIÉTÉ",
        titre: "Trafic et notoriété",
        description:
          "Le bouche-à-oreille a ses limites. Pour adresser de nouveaux segments ou de nouvelles géographies au-delà de la Montagne Noire, il faut des canaux structurés. Nous déployons les leviers d'acquisition adaptés à votre cible : SEO pour être trouvé sur Google, campagnes publicitaires ciblées, stratégie de contenu, notoriété LinkedIn pour les dirigeants. Chaque canal est choisi en fonction de votre marché et de vos acheteurs, pas par effet de mode.",
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
          "Vos relances commerciales dépendent de la mémoire de chacun, votre CRM est sous-utilisé et vos reportings prennent des heures. Nous connectons vos outils, automatisons les flux répétitifs et déployons l'IA là où elle génère un gain mesurable : qualification de prospects, personnalisation des approches, production de supports accélérée. Vos équipes se concentrent sur la relation client et le développement commercial, pas sur l'administratif.",
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
          "Vos commerciaux connaissent le produit par cœur mais improvisent à chaque rendez-vous. Les présentations datent, les objections ne sont pas anticipées, les relances sont aléatoires. Nous créons les supports alignés sur votre positionnement : présentations structurées, fiches comparatives, guides de traitement des objections, séquences de relance. Que vous vendiez du textile technique à des donneurs d'ordre ou du cuir premium à des maisons de luxe, chaque interaction commerciale porte le même message.",
        services: [
          "Présentations commerciales sur mesure",
          "Fiches comparatives concurrence",
          "Guides d'appel et gestion d'objections",
          "Séquences de relance structurées",
        ],
      },
    ],
  },

  localSEO: {
    surtitre: "[ IMPLANTATION OCCITANIE ]",
    h2: "À Mazamet et dans la Montagne Noire, votre marketing prend de la hauteur",
    h2Highlight: "Mazamet",
    description:
      "Vizion est basée à Labège (Toulouse), à 1h30 de Mazamet. Nous intervenons régulièrement dans le Tarn pour accompagner les entreprises du bassin mazamétain.",
    paragraphs: [
      "Mazamet et la Montagne Noire forment un territoire au caractère industriel affirmé. Du délainage historique aux nouvelles filières (cuir premium, textile technique, éco-matériaux), les entreprises locales portent un savoir-faire qui rayonne bien au-delà du Tarn. Mais ce rayonnement commercial passe désormais par des canaux digitaux que beaucoup n'exploitent pas encore.",
      "Vizion, c'est aussi une histoire de racines. Ses deux fondateurs sont des purs produits du Sud-Ouest : l'un né à Mazamet, l'autre près de Toulouse. Fiers de leur région et déterminés à faire rayonner les entreprises occitanes, ils ont créé une agence qui comprend le territoire parce qu'ils en viennent. Ateliers stratégiques en présentiel quand c'est nécessaire, suivi opérationnel à distance le reste du temps — avec la rigueur d'un partenaire qui connaît votre réalité.",
    ],
    preuveLocale: "Enseignant en stratégie LinkedIn à Toulouse School of Management (TSM)",
    mapEmbedUrl: "https://maps.google.com/maps?q=Mazamet,+Tarn,+France&t=&z=13&ie=UTF8&iwloc=&output=embed",
    villes: VILLES_BADGES,
    cta: { text: "Rencontrons-nous pour en parler", href: "/contact" },
  },

  faq: {
    surtitre: "[ FAQ ]",
    h2: "Questions fréquentes des entreprises mazamétaines",
    h2Highlight: "entreprises mazamétaines",
    description:
      "Voici les réponses aux questions que les dirigeants de Mazamet et de la Montagne Noire nous posent le plus souvent.",
    questions: faqQuestions,
    ctaText: "Une autre question ?",
    ctaButton: { text: "Échangeons directement", href: "/contact" },
  },

  finalCta: {
    trustBadge: "+70 entreprises accompagnées",
    h2: "Votre savoir-faire mazamétain mérite d'être connu au-delà du Tarn",
    h2Highlight: "savoir-faire mazamétain",
    description:
      "Échangez 30 minutes avec un fondateur de Vizion. Nous analysons votre positionnement actuel, identifions les leviers de communication prioritaires, et vous disons concrètement ce qu'on ferait. Sans engagement.",
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
