import type { CityPageData } from "./types";
import {
  SITE_URL, MAP_EMBED_URL, VILLES_BADGES,
  buildOrganizationSchema, buildFaqSchema, buildBreadcrumbSchema,
} from "./shared";

// ============================================================================
// RODEZ — Angle : Industrie, agro, mécanique, cycles longs
// Piliers : Audit & stratégie (#01) + Sales enablement (#05)
// ============================================================================

const meta: CityPageData["meta"] = {
  slug: "rodez",
  routeSlug: "agence-marketing-rodez",
  city: "Rodez",
  department: "Aveyron",
  canonical: `${SITE_URL}/agence-marketing-rodez`,
};

const faqQuestions = [
  {
    question: "Vizion peut-elle intervenir en Aveyron malgré la distance ?",
    answer:
      "Absolument. Rodez est à environ 2h de notre siège à Labège (Toulouse). Nous nous déplaçons en Aveyron pour les ateliers stratégiques, les immersions terrain et les restitutions. Le suivi opérationnel fonctionne à distance, avec des points réguliers en visio et des outils partagés. La distance n'impacte ni la qualité ni la réactivité de notre accompagnement.",
  },
  {
    question: "Nous vendons à des donneurs d'ordre industriels. Comment structurer notre approche ?",
    answer:
      "Les cycles de vente industriels impliquent souvent 3 à 6 décideurs, des phases techniques et des validations successives. Nous structurons votre marketing pour adresser chaque interlocuteur avec le bon message au bon moment. Cela passe par un positionnement clair, des supports adaptés à chaque étape (découverte, qualification, proposition, négociation) et un processus de suivi systématique. Vos commerciaux arrêtent d'improviser et gagnent en efficacité.",
  },
  {
    question: "Notre site web date et ne génère aucun prospect. Par quoi commencer ?",
    answer:
      "Le site web n'est qu'un symptôme. Avant de le refondre, nous vérifions les fondamentaux : votre positionnement est-il clair ? Votre offre est-elle bien formulée ? Vos pages répondent-elles aux questions que se posent vos acheteurs ? Nous commençons toujours par un audit qui identifie les vrais blocages. Parfois, une refonte complète n'est pas nécessaire — quelques ajustements stratégiques sur le contenu et la structure suffisent à relancer la génération de leads.",
  },
  {
    question: "Quel est le profil type de vos clients en milieu industriel ?",
    answer:
      "Nos clients industriels sont des PME et ETI de 10 à 250 collaborateurs, souvent des sous-traitants ou des fabricants spécialisés. Ils ont un savoir-faire reconnu, un cycle de vente de 3 à 18 mois, et leurs commerciaux manquent de supports marketing structurés. Ils cherchent un partenaire qui comprend leur réalité terrain, pas une agence qui leur propose des likes sur les réseaux sociaux.",
  },
  {
    question: "Quelle différence entre vos supports de vente et ceux que nous pourrions faire en interne ?",
    answer:
      "La différence est stratégique, pas esthétique. Vos supports internes reflètent votre vision du produit. Les nôtres sont construits à partir de ce que vos acheteurs ont besoin d'entendre pour décider. Nous analysons le parcours de décision, identifions les objections courantes, et créons des documents qui répondent à chaque question avant qu'elle ne soit posée. Le résultat : des supports qui sont réellement utilisés par vos commerciaux parce qu'ils accélèrent les ventes.",
  },
  {
    question: "Combien coûte un accompagnement marketing pour une PME industrielle ?",
    answer:
      "Nos missions ciblées (audit + repositionnement + création de supports) se déroulent sur 8 à 16 semaines, sur devis selon le périmètre. Les accompagnements dans la durée (direction marketing externalisée) démarrent à 4 500 euros par mois sur un engagement de 6 mois. Nous calibrons l'intensité de l'intervention à votre budget et à la taille de votre équipe commerciale.",
  },
];

const content: CityPageData["content"] = {
  seo: {
    title: "Agence Marketing Rodez - Accompagnez vos cycles de vente industriels",
    description:
      "Agence marketing pour PME industrielles à Rodez et en Aveyron. Audit stratégique, supports de vente B2B, sales enablement. Basée à Toulouse. +70 entreprises accompagnées depuis 2021.",
    keywords: [
      "agence marketing rodez",
      "marketing industriel aveyron",
      "sales enablement rodez",
      "agence marketing b2b rodez",
      "supports de vente aveyron",
      "stratégie marketing rodez",
      "marketing pme industrielle rodez",
      "conseil marketing aveyron",
    ],
    ogImage: "/hero-binoculars.avif",
  },

  hero: {
    badge: "AGENCE MARKETING - RODEZ",
    h1: "Votre agence Marketing à Rodez",
    h1Highlight: "Rodez",
    baseline:
      "Les entreprises industrielles de l'Aveyron vendent sur des cycles longs à des acheteurs exigeants. Leur marketing doit être à la hauteur de cette complexité. Vizion structure l'audit stratégique et les outils de vente des PME aveyronnaises pour raccourcir les cycles et augmenter le taux de conversion.",
    cta: {
      primary: { text: "Échanger avec un fondateur", href: "/contact" },
      secondary: { text: "Voir nos cas clients", href: "/cas-clients" },
    },
    socialProof: "+70 ENTREPRISES ACCOMPAGNÉES EN OCCITANIE ET EN FRANCE DEPUIS 2021",
  },

  intro: {
    surtitre: "Rodez & Aveyron",
    h2: "Des cycles de vente longs exigent un marketing de précision",
    h2Highlight: "cycles de vente longs",
    paragraphs: [
      "L'Aveyron est un département industriel discret mais puissant : mécanique, agroalimentaire, coutellerie, bois, énergie. Les entreprises qui y opèrent vendent à des donneurs d'ordre nationaux et internationaux, dans des cycles de décision qui s'étalent sur des mois.",
      "Sur ces cycles longs, chaque interaction compte. Un positionnement flou au premier rendez-vous, une présentation commerciale approximative, une relance oubliée — et c'est le concurrent mieux organisé qui l'emporte. Le marketing n'est pas un supplément pour ces entreprises : c'est le cadre qui structure tout le parcours d'achat.",
      "Vizion intervient depuis Toulouse pour poser ce cadre : un audit qui identifie les vrais points de friction, et des outils de vente qui transforment chaque étape du cycle en opportunité de conviction. Sans jargon, avec pragmatisme.",
    ],
  },

  piliers: {
    surtitre: "Nos expertises pour l'Aveyron",
    h2: "Du diagnostic au closing : nos 5 piliers pour les industriels aveyronnais",
    description:
      "Les entreprises industrielles aveyronnaises ont besoin de clarté stratégique, d'un message différenciant, de canaux d'acquisition efficaces, de processus automatisés et d'outils qui accélèrent la décision d'achat.",
    piliers: [
      {
        numero: "01",
        surtitre: "AUDIT & STRATÉGIE",
        titre: "Audit et stratégie marketing",
        description:
          "Vos commerciaux travaillent dur, mais trop d'opportunités stagnent ou disparaissent en cours de route. Nous auditons votre tunnel de vente de bout en bout : du premier contact à la signature. Où perdez-vous des prospects ? À quelle étape le concurrent prend-il l'avantage ? Quels outils manquent à vos équipes ? Le diagnostic produit une feuille de route qui cible les points d'impact maximum pour votre situation en Aveyron.",
        services: [
          "Audit du tunnel de vente B2B",
          "Analyse des pertes d'opportunités",
          "Cartographie du parcours acheteur",
          "Plan d'action ciblé par priorité",
        ],
        cta: "LANCER UN AUDIT",
      },
      {
        numero: "02",
        surtitre: "POSITIONNEMENT & NARRATIF",
        titre: "Positionnement et narratif produit",
        description:
          "Vos donneurs d'ordre comparent 4 ou 5 sous-traitants aux capacités similaires. La différence se joue dans la manière de formuler votre valeur. Nous construisons un positionnement qui met en lumière vos vrais différenciateurs — précision, réactivité, savoir-faire artisanal, capacité de production — et un discours structuré que vos commerciaux portent avec cohérence face aux acheteurs industriels nationaux et internationaux.",
        services: [
          "Matrice de différenciation fournisseur",
          "Positionnement par segment industriel",
          "Narratif commercial unifié",
          "Argumentaires par profil acheteur",
        ],
      },
      {
        numero: "03",
        surtitre: "TRAFIC & NOTORIÉTÉ",
        titre: "Trafic et notoriété",
        description:
          "Votre savoir-faire aveyronnais rayonne en France et à l'international, mais vos prospects hors réseau ne vous trouvent pas en ligne. Nous déployons les canaux d'acquisition adaptés aux cycles industriels longs : référencement naturel sur vos requêtes métier, présence LinkedIn qualifiée, contenu technique qui démontre votre expertise en mécanique, agroalimentaire ou coutellerie. Pour que les donneurs d'ordre vous identifient avant de lancer l'appel d'offres.",
        services: [
          "SEO technique et sémantique B2B",
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
          "Sur des cycles de vente de 6 à 18 mois, le suivi manuel est un gouffre de temps et de pertes d'opportunités. Nous structurons et automatisons vos flux commerciaux : CRM configuré pour vos cycles longs, séquences de relance systématiques, scoring de leads automatisé, reporting unifié. L'IA accélère la qualification des contacts entrants et la production de supports. Vos équipes se concentrent sur la négociation et le closing.",
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
          "Vos commerciaux utilisent la même présentation pour tous les interlocuteurs, de l'acheteur au directeur technique. Les objections sont traitées au cas par cas. Les relances dépendent de la bonne volonté de chacun. Nous créons un kit commercial complet : supports de découverte, présentations par profil décideur, réponses aux objections formalisées, séquences de relance chronométrées. Le cycle de vente devient un processus, pas une improvisation.",
        services: [
          "Kit de découverte structuré",
          "Présentations par type de décideur",
          "Traitement formalisé des objections",
          "Séquences de relance chronométrées",
        ],
      },
    ],
  },

  localSEO: {
    surtitre: "[ IMPLANTATION OCCITANIE ]",
    h2: "À Rodez et en Aveyron, structurez vos ventes industrielles",
    h2Highlight: "Rodez",
    description:
      "Vizion est basée à Labège (Toulouse), à 2h de Rodez. Nous intervenons en Aveyron pour accompagner les entreprises industrielles du département.",
    paragraphs: [
      "L'Aveyron combine un héritage industriel fort — coutellerie de Laguiole, mécanique de précision, filière bois — avec un réseau de PME qui exportent leur savoir-faire bien au-delà du département. Ces entreprises sont habituées à la rigueur et à l'exigence technique. Leur marketing doit refléter cette même exigence.",
      "Nous nous déplaçons à Rodez et dans le département pour les phases stratégiques : ateliers d'immersion, rencontres avec les équipes commerciales, observation du processus de vente. Cette proximité terrain est indispensable pour comprendre votre réalité et produire des livrables qui s'intègrent dans votre quotidien.",
    ],
    preuveLocale: "Enseignant en stratégie LinkedIn à Toulouse School of Management (TSM)",
    mapEmbedUrl: "https://maps.google.com/maps?q=Rodez,+Aveyron,+France&t=&z=13&ie=UTF8&iwloc=&output=embed",
    villes: VILLES_BADGES,
    cta: { text: "Auditer votre cycle de vente", href: "/contact" },
  },

  faq: {
    surtitre: "[ FAQ ]",
    h2: "Questions fréquentes des industriels aveyronnais",
    h2Highlight: "industriels aveyronnais",
    description:
      "Voici les réponses aux interrogations que les dirigeants de Rodez et de l'Aveyron nous posent avant de démarrer un accompagnement.",
    questions: faqQuestions,
    ctaText: "Besoin de précisions ?",
    ctaButton: { text: "Parlons-en", href: "/contact" },
  },

  finalCta: {
    trustBadge: "+70 entreprises accompagnées",
    h2: "Chaque cycle de vente perdu est un chiffre d'affaires qui ne reviendra pas",
    h2Highlight: "cycle de vente",
    description:
      "Échangez 30 minutes avec un fondateur de Vizion. Nous analysons votre pipeline, identifions les étapes critiques et vous proposons un plan d'action. Sans engagement.",
    cta: {
      primary: { text: "Réserver un échange", href: "/contact" },
      secondary: { text: "Voir nos cas clients", href: "/cas-clients" },
    },
    trustElements: [
      "30 minutes avec un fondateur",
      "Sans engagement",
      "Analyse pipeline offerte",
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
