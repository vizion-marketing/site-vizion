// ============================================================================
// CONTENU DE LA PAGE SEO LOCAL — AGENCE MARKETING TOULOUSE
// ============================================================================
// Ce fichier centralise tout le contenu textuel de la page SEO locale.
// Modifiez ce fichier pour optimiser le copywriting SEO sans toucher au code.
// ============================================================================

import { SITE_URL } from "@/lib/constants";
import type { LucideIcon } from "lucide-react";
import {
  Target,
  TrendingUp,
  Globe,
  Presentation,
  Zap,
  Brain,
  UserCheck,
  Layers,
  GraduationCap,
  Handshake,
  MapPin,
  Clock,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

// ============================================================================
// TYPES
// ============================================================================

export interface AgenceMarketingToulouseContent {
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  hero: {
    surtitre: string;
    title: string;
    titleHighlight: string;
    description: string;
    breadcrumbs: { label: string; href?: string }[];
    primaryCta: { text: string; href: string };
    secondaryCta: { text: string; href: string };
  };
  marquee: {
    items: string[];
  };
  stats: {
    counters: {
      value: number;
      prefix?: string;
      suffix?: string;
      label: string;
    }[];
  };
  problem: {
    surtitre: string;
    title: string;
    titleHighlight: string;
    paragraphs: string[];
    image: string;
    imageAlt: string;
    imagePosition: "left" | "right";
    cta: { text: string; href: string };
    variant: "white" | "light" | "dark";
  };
  services: {
    surtitre: string;
    title: string;
    titleHighlight: string;
    description: string;
    features: {
      icon: LucideIcon;
      title: string;
      description: string;
      tags: string[];
    }[];
    columns: 2 | 3 | 4;
    variant: "white" | "light" | "dark";
  };
  process: {
    surtitre: string;
    title: string;
    titleHighlight: string;
    description: string;
    steps: {
      id: string;
      number: string;
      title: string;
      description: string;
      bullets: string[];
    }[];
    layout: "zigzag" | "linear";
    variant: "light" | "dark";
  };
  testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
    rating: number;
    variant: "dark" | "light" | "accent";
  };
  localExpertise: {
    surtitre: string;
    title: string;
    titleHighlight: string;
    paragraphs: string[];
    image: string;
    imageAlt: string;
    imagePosition: "left" | "right";
    badge: { text: string; subtext: string };
    variant: "white" | "light" | "dark";
  };
  differentiators: {
    surtitre: string;
    title: string;
    titleHighlight: string;
    items: {
      icon: LucideIcon;
      title: string;
      description: string;
    }[];
    variant: "dark" | "light";
  };
  faq: {
    surtitre: string;
    title: string;
    description: string;
    ctaText: string;
    ctaHref: string;
    faqs: { question: string; answer: string }[];
    variant: "light" | "dark";
  };
  cta: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    primaryCta: { text: string; href: string };
    secondaryCta: { text: string; href: string };
    trustElements: { icon: LucideIcon; text: string }[];
  };
}

// ============================================================================
// CONTENU
// ============================================================================

export const agenceMarketingToulouseContent: AgenceMarketingToulouseContent = {
  // --------------------------------------------------------------------------
  // SEO
  // --------------------------------------------------------------------------
  seo: {
    title:
      "Agence Marketing Toulouse | Marketing Produit B2B & Sales Enablement - Vizion",
    description:
      "Vizion, agence marketing à Toulouse spécialisée en B2B. Positionnement produit, sales enablement, tunnel de vente aligné et IA appliquée. +70 entreprises accompagnées depuis 2021.",
    keywords: [
      "agence marketing toulouse",
      "agence marketing b2b toulouse",
      "agence marketing digital toulouse",
      "agence marketing produit toulouse",
      "agence stratégie marketing toulouse",
      "consultant marketing toulouse",
      "marketing toulouse",
      "meilleure agence marketing toulouse",
      "agence marketing occitanie",
      "sales enablement toulouse",
    ],
  },

  // --------------------------------------------------------------------------
  // HERO
  // --------------------------------------------------------------------------
  hero: {
    surtitre: "AGENCE MARKETING B2B À TOULOUSE",
    title: "Votre agence marketing à Toulouse, spécialisée en",
    titleHighlight: "marketing produit B2B",
    description:
      "Vizion accompagne les PME, ETI et scale-ups à Toulouse et en France. Nous clarifions votre offre, alignons votre tunnel de vente et déployons des stratégies marketing qui accélèrent votre croissance commerciale. Plus de 70 entreprises nous font confiance depuis 2021.",
    breadcrumbs: [
      { label: "Accueil", href: "/" },
      { label: "Agence Marketing Toulouse" },
    ],
    primaryCta: { text: "Nous contacter", href: "/contact" },
    secondaryCta: { text: "Voir nos réalisations", href: "/cas-clients" },
  },

  // --------------------------------------------------------------------------
  // MARQUEE
  // --------------------------------------------------------------------------
  marquee: {
    items: [
      "AGENCE MARKETING TOULOUSE",
      "MARKETING PRODUIT B2B",
      "SALES ENABLEMENT",
      "+70 CLIENTS ACCOMPAGNÉS",
      "POSITIONNEMENT & MESSAGING",
      "IA APPLIQUÉE AU MARKETING",
    ],
  },

  // --------------------------------------------------------------------------
  // STATS
  // --------------------------------------------------------------------------
  stats: {
    counters: [
      {
        value: 70,
        prefix: "+",
        label: "Entreprises accompagnées",
      },
      {
        value: 5,
        suffix: " ans",
        label: "D'expérience à Toulouse",
      },
      {
        value: 100,
        suffix: "%",
        label: "Clients B2B",
      },
      {
        value: 24,
        suffix: "h",
        label: "Délai de réponse",
      },
    ],
  },

  // --------------------------------------------------------------------------
  // PROBLÈME
  // --------------------------------------------------------------------------
  problem: {
    surtitre: "LE CONSTAT",
    title: "Pourquoi faire appel à une agence marketing B2B à",
    titleHighlight: "Toulouse",
    paragraphs: [
      "Les entreprises B2B à Toulouse font face à un défi commun : leur offre est solide, mais leur message ne passe pas. Le positionnement est flou, les supports commerciaux sont incohérents, le tunnel de vente fuit à chaque étape. Le marketing se résume trop souvent à de la communication déconnectée du terrain commercial.",
      "Le résultat ? Des cycles de vente qui s'allongent, des leads qui ne convertissent pas, des commerciaux qui improvisent leur discours. Dans un écosystème B2B de plus en plus concurrentiel — particulièrement à Toulouse et en Occitanie où l'écosystème tech et industriel est dense — il devient essentiel de structurer sa stratégie marketing autour d'un positionnement clair et d'un tunnel de vente aligné.",
      "C'est exactement ce que fait Vizion. En tant qu'agence marketing à Toulouse, nous ne sommes pas une agence de communication généraliste. Nous intervenons là où le marketing rencontre la vente : positionnement produit, messaging, supports commerciaux, campagnes d'acquisition. Un seul message, du premier clic au closing.",
    ],
    image: "/images/about/about-main.jpg",
    imageAlt:
      "Agence marketing Toulouse - Réunion stratégique Vizion avec un client B2B",
    imagePosition: "right",
    cta: { text: "Découvrir notre approche", href: "#nos-services" },
    variant: "light",
  },

  // --------------------------------------------------------------------------
  // SERVICES
  // --------------------------------------------------------------------------
  services: {
    surtitre: "NOS EXPERTISES",
    title: "Les services de votre agence de stratégie marketing à",
    titleHighlight: "Toulouse",
    description:
      "Vizion intervient sur l'ensemble du cycle marketing et commercial. Chaque service est conçu pour créer un tunnel de vente cohérent, où le message reste identique de la publicité au closing.",
    features: [
      {
        icon: Target,
        title: "Positionnement & messaging",
        description:
          "Définition du positionnement produit, de la proposition de valeur et du messaging par segment. Le socle stratégique sans lequel aucune campagne ni support commercial ne devrait être créé.",
        tags: ["Marketing produit", "Go-to-market"],
      },
      {
        icon: TrendingUp,
        title: "Campagnes d'acquisition",
        description:
          "Campagnes Meta, Google Ads, LinkedIn Ads alignées sur votre positionnement. Notoriété LinkedIn pour les dirigeants. Chaque campagne est le point d'entrée d'un tunnel cohérent.",
        tags: ["Ads", "LinkedIn", "Acquisition"],
      },
      {
        icon: Globe,
        title: "Sites web & landing pages",
        description:
          "Conception de sites et pages de conversion B2B. Copywriting centré sur le problème du prospect, SEO stratégique, parcours d'achat cartographiés.",
        tags: ["SEO", "Conversion", "Webdesign"],
      },
      {
        icon: Presentation,
        title: "Sales enablement",
        description:
          "Pitch decks, battle cards, scripts d'appel, objection handling. Vos commerciaux pitchent avec les mêmes mots que la pub. Le prospect retrouve une promesse unique en rendez-vous.",
        tags: ["Vente", "Supports commerciaux"],
      },
      {
        icon: Zap,
        title: "Automatisation & CRM",
        description:
          "Structuration des systèmes d'information marketing et commerciaux. Automatisation des workflows, déploiement CRM, intégrations sur mesure pour industrialiser vos processus.",
        tags: ["CRM", "Automation", "Productivité"],
      },
      {
        icon: Brain,
        title: "IA appliquée au marketing",
        description:
          "Intégration de l'intelligence artificielle là où elle apporte une valeur mesurable : production de contenu accélérée, qualification de leads, personnalisation à l'échelle.",
        tags: ["IA", "Innovation", "Productivité"],
      },
    ],
    columns: 3,
    variant: "dark",
  },

  // --------------------------------------------------------------------------
  // PROCESSUS
  // --------------------------------------------------------------------------
  process: {
    surtitre: "NOTRE MÉTHODE",
    title: "Comment nous accompagnons les entreprises à",
    titleHighlight: "Toulouse",
    description:
      "Chaque mission suit un cadre structuré en quatre phases. La séquence reste la même : nous ne créons jamais de publicité sans avoir posé le positionnement d'abord. C'est ce qui nous différencie d'une agence de communication classique.",
    steps: [
      {
        id: "diagnostic",
        number: "01",
        title: "Diagnostic stratégique",
        description:
          "Audit complet de votre positionnement, de vos outils marketing et de votre tunnel de vente actuel. Analyse du marché, de la concurrence et de vos personas.",
        bullets: [
          "Audit du positionnement et du messaging existant",
          "Cartographie du parcours d'achat",
          "Analyse concurrentielle sur le marché toulousain et national",
          "Identification des freins à la conversion",
        ],
      },
      {
        id: "fondations",
        number: "02",
        title: "Fondations : positionnement & messaging",
        description:
          "Construction du socle stratégique : positionnement produit, proposition de valeur, messaging par segment. Tout le reste en découle.",
        bullets: [
          "Matrice de positionnement",
          "Proposition de valeur différenciante",
          "Architecture de message par persona",
          "Validation avec les équipes dirigeantes",
        ],
      },
      {
        id: "activation",
        number: "03",
        title: "Activation du tunnel de vente",
        description:
          "Déploiement opérationnel : site web, campagnes, supports commerciaux. Chaque élément porte le même message, du premier point de contact au closing.",
        bullets: [
          "Campagnes alignées sur le positionnement",
          "Site web et landing pages optimisés",
          "Pitch decks et outils de vente",
          "Séquences d'acquisition multicanal",
        ],
      },
      {
        id: "optimisation",
        number: "04",
        title: "Optimisation continue",
        description:
          "Mesure, itération, amélioration. Boucle de feedback entre commerciaux et marketing pour affiner le message en continu.",
        bullets: [
          "Reporting et analyse des performances",
          "Tests A/B sur les messages et les campagnes",
          "Feedback loop pub-commercial",
          "Ajustement du positionnement si nécessaire",
        ],
      },
    ],
    layout: "zigzag",
    variant: "light",
  },

  // --------------------------------------------------------------------------
  // TÉMOIGNAGE
  // --------------------------------------------------------------------------
  testimonial: {
    quote:
      "Vizion est réellement investie dans notre croissance, ils font partie de l'équipe. En quelques mois, nous sommes passés de 0 à 25 franchises déployées grâce à leur stratégie de mise en marché.",
    author: "Clément",
    role: "Co-fondateur",
    company: "easyVirtual.tours",
    rating: 5,
    variant: "accent",
  },

  // --------------------------------------------------------------------------
  // ANCRAGE LOCAL
  // --------------------------------------------------------------------------
  localExpertise: {
    surtitre: "ANCRAGE LOCAL",
    title: "Une agence marketing ancrée à Toulouse, au cœur de",
    titleHighlight: "l'écosystème B2B occitan",
    paragraphs: [
      "Vizion est née à Toulouse en 2021. Ce n'est pas un hasard : Toulouse est la quatrième métropole de France, un bassin d'innovation dense où se concentrent des acteurs de l'aéronautique, du spatial, de l'édition logicielle, de la santé et des services B2B à forte valeur ajoutée.",
      "Notre implantation locale nous donne une connaissance fine de l'écosystème économique toulousain. Nous comprenons les enjeux spécifiques des entreprises de la région : des cycles de vente longs, des processus de décision impliquant plusieurs parties prenantes, des offres complexes qui nécessitent un positionnement précis.",
      "Pour nos clients à Toulouse et en Occitanie, nous privilégions les rencontres en présentiel. Pour les entreprises ailleurs en France ou à l'international, nous fonctionnons en mode hybride avec des déplacements ponctuels. Dans les deux cas, votre interlocuteur dédié reste le même : un directeur marketing qui connaît votre marché.",
    ],
    image: "/images/about/about-card.jpg",
    imageAlt: "Équipe Vizion - Agence marketing à Toulouse, Occitanie",
    imagePosition: "left",
    badge: { text: "Toulouse", subtext: "Occitanie, France" },
    variant: "dark",
  },

  // --------------------------------------------------------------------------
  // DIFFÉRENCIATEURS
  // --------------------------------------------------------------------------
  differentiators: {
    surtitre: "NOS DIFFÉRENCES",
    title: "Ce qui fait de Vizion votre meilleure agence marketing à",
    titleHighlight: "Toulouse",
    items: [
      {
        icon: UserCheck,
        title: "Un directeur marketing, pas un chef de projet",
        description:
          "Votre contact dédié est un expert du marketing stratégique capable de dialoguer avec vos équipes dirigeantes et d'apporter une valeur ajoutée à chaque échange.",
      },
      {
        icon: Layers,
        title: "Structure hybride, solide et agile",
        description:
          "Une équipe interne qui assure la continuité, des experts freelances mobilisés selon vos besoins. Le meilleur des deux modèles.",
      },
      {
        icon: GraduationCap,
        title: "La pédagogie comme engagement",
        description:
          "Nous travaillons avec vos équipes, pas à leur place. Transfert de compétences et montée en autonomie font partie de chaque mission.",
      },
      {
        icon: Brain,
        title: "L'IA comme levier, pas comme argument",
        description:
          "Nous intégrons l'intelligence artificielle là où elle apporte une valeur ajoutée mesurable. Pas de promesses creuses sur l'IA.",
      },
      {
        icon: Handshake,
        title: "Le marketing au service de la vente",
        description:
          "Notre intervention couvre l'ensemble du cycle commercial, y compris les phases de négociation et de closing. Pas uniquement la génération de leads.",
      },
      {
        icon: MapPin,
        title: "Proximité toulousaine",
        description:
          "Basés à Toulouse, nous rencontrons nos clients locaux en présentiel. La proximité géographique est un atout pour la qualité de l'accompagnement.",
      },
    ],
    variant: "light",
  },

  // --------------------------------------------------------------------------
  // FAQ
  // --------------------------------------------------------------------------
  faq: {
    surtitre: "FAQ",
    title: "Questions fréquentes sur notre agence marketing à Toulouse",
    description:
      "Les réponses aux questions les plus fréquentes sur Vizion, votre agence marketing B2B à Toulouse.",
    ctaText: "Une autre question ? Échangeons directement.",
    ctaHref: "/contact",
    faqs: [
      {
        question:
          "Que fait une agence marketing B2B à Toulouse comme Vizion ?",
        answer:
          "Vizion est une agence marketing B2B basée à Toulouse spécialisée en marketing produit. Nous accompagnons les PME, ETI et scale-ups dans la définition de leur positionnement, la construction de leur tunnel de vente et le déploiement de stratégies marketing alignées sur leurs objectifs commerciaux. Concrètement : positionnement et messaging, campagnes d'acquisition (Google, Meta, LinkedIn Ads), sites web et landing pages, sales enablement (pitch decks, battle cards, scripts), automatisation et CRM. Nous intervenons là où le marketing rencontre la vente.",
      },
      {
        question:
          "Quelle est la différence entre Vizion et une agence de communication à Toulouse ?",
        answer:
          "Une agence de communication produit des contenus, des visuels, des campagnes. Vizion va plus loin : nous partons du positionnement produit pour construire un tunnel de vente aligné. Chaque livrable — du logo au pitch deck — est au service d'une stratégie définie. Nous ne produisons pas pour produire. Nous challengeons les demandes, questionnons les priorités et refusons de lancer une campagne sans avoir posé le positionnement d'abord.",
      },
      {
        question:
          "Combien coûte un accompagnement marketing à Toulouse ?",
        answer:
          "Deux formules existent. La mission ciblée (8 à 16 semaines) intervient sur un enjeu précis : lancement de produit, repositionnement, alignement du tunnel de vente. L'accompagnement dans la durée (6 mois minimum) démarre à 4 500 euros par mois : Vizion endosse le rôle de votre équipe marketing produit avec un interlocuteur dédié, un tunnel aligné et l'accès aux experts selon vos besoins. Chaque accompagnement est sur mesure.",
      },
      {
        question:
          "Vizion travaille-t-elle uniquement avec des entreprises à Toulouse ?",
        answer:
          "Non. Nous sommes basés à Toulouse mais accompagnons des entreprises partout en France et à l'international. Pour les clients à Toulouse et en Occitanie, nous privilégions le présentiel. Pour les autres, nous fonctionnons en visioconférence avec des déplacements ponctuels. La qualité de l'accompagnement reste identique quel que soit le mode de collaboration.",
      },
      {
        question:
          "Quels types d'entreprises accompagnez-vous à Toulouse ?",
        answer:
          "Nous travaillons avec des PME de 10 à 250 collaborateurs, des ETI et des scale-ups en phase de croissance. Nos clients opèrent principalement dans l'industrie, les technologies, l'édition logicielle (SaaS) et les services B2B à forte valeur ajoutée. Le dénominateur commun : une offre solide qui nécessite un positionnement clair et un tunnel de vente structuré pour convertir.",
      },
      {
        question:
          "Proposez-vous des services de marketing digital à Toulouse ?",
        answer:
          "Oui, mais avec une approche différente des agences digitales classiques. Chez Vizion, le digital est un levier au service de la stratégie, pas une fin en soi. Nous déployons des campagnes Google Ads, LinkedIn Ads et Meta Ads, du SEO stratégique, du content marketing, des sites web et landing pages optimisés. La différence : chaque action digitale est alignée sur un positionnement produit défini en amont. Le digital sert la vente, pas l'inverse.",
      },
      {
        question:
          "Comment Vizion utilise l'intelligence artificielle dans ses missions marketing ?",
        answer:
          "Nous intégrons l'IA là où elle apporte une valeur ajoutée mesurable : production de contenus d'acquisition accélérée, tri et enrichissement de listes de prospection, personnalisation des approches commerciales à l'échelle. La stratégie et les décisions restent pilotées par l'expertise humaine. Nous ne vendons pas de l'IA — nous l'utilisons pour livrer plus vite et mieux à nos clients à Toulouse et en France.",
      },
      {
        question:
          "Pourquoi choisir une agence marketing locale à Toulouse plutôt qu'une agence parisienne ?",
        answer:
          "La proximité géographique favorise la qualité de l'accompagnement : rencontres en présentiel, connaissance fine de l'écosystème économique toulousain, réactivité accrue. Vizion connaît les spécificités du tissu économique de Toulouse et d'Occitanie — aéronautique, spatial, édition logicielle, services B2B. Cette connaissance locale se traduit par des stratégies plus pertinentes et un accompagnement plus personnalisé.",
      },
    ],
    variant: "dark",
  },

  // --------------------------------------------------------------------------
  // CTA FINAL
  // --------------------------------------------------------------------------
  cta: {
    badge: "+70 entreprises à Toulouse et en France nous font confiance",
    title: "Prêt à structurer votre marketing à",
    titleHighlight: "Toulouse ?",
    description:
      "Lancement, repositionnement ou accélération ? Nous proposons un échange de 15 minutes pour identifier si Vizion est l'agence marketing qu'il vous faut à Toulouse.",
    primaryCta: { text: "Parlons de votre projet", href: "/contact" },
    secondaryCta: { text: "Voir nos réalisations", href: "/cas-clients" },
    trustElements: [
      { icon: Clock, text: "Réponse sous 24h" },
      { icon: ShieldCheck, text: "Échange sans engagement" },
      { icon: Sparkles, text: "Premier cadrage offert" },
    ],
  },
};

// ============================================================================
// JSON-LD SCHEMAS
// ============================================================================

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
      name: "Agence Marketing Toulouse",
      item: `${SITE_URL}/agence-marketing-toulouse`,
    },
  ],
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Agence Marketing B2B Toulouse",
  description:
    "Accompagnement marketing stratégique B2B : positionnement produit, sales enablement, campagnes d'acquisition, automatisation et IA appliquée. Basée à Toulouse, intervenant en France et à l'international.",
  provider: {
    "@id": `${SITE_URL}/#organization`,
  },
  areaServed: [
    {
      "@type": "City",
      name: "Toulouse",
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "Occitanie",
      },
    },
    {
      "@type": "Country",
      name: "France",
    },
  ],
  serviceType: "Marketing Stratégique B2B",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services Marketing B2B",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Positionnement & Messaging",
          description:
            "Définition du positionnement produit, proposition de valeur et architecture de message",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sales Enablement",
          description:
            "Pitch decks, battle cards, scripts commerciaux, outils d'aide à la vente",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Campagnes d'Acquisition",
          description:
            "Google Ads, LinkedIn Ads, Meta Ads, SEO stratégique et content marketing",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Automatisation & CRM",
          description:
            "Déploiement CRM, automatisation de workflows, intégrations sur mesure",
        },
      },
    ],
  },
};

export const localFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: agenceMarketingToulouseContent.faq.faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};
