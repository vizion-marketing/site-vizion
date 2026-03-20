export const SITE_URL = "https://by-vizion.com";
export const SITE_NAME = "Vizion";

// --- Liens sociaux centralisés ---
export const SOCIAL_LINKS = {
  linkedin: {
    lucas: "https://www.linkedin.com/in/lucas-gonzalez-marketing/",
    hugo: "https://www.linkedin.com/in/hugo-schuppe/",
    vizion: "https://www.linkedin.com/company/vizion-marketing-b2b/",
  },
} as const;

// --- Menu Services (rich mega menu) ---

export interface ServiceMenuItem {
  label: string;
  description: string;
  icon: string; // Nom Lucide icon
  href?: string;
}

export interface ServiceMenuCategory {
  title: string;
  icon: string; // Nom Lucide icon
  items: ServiceMenuItem[];
}

export const SERVICE_MENU_CATEGORIES: ServiceMenuCategory[] = [
  {
    title: "Audit & Stratégie",
    icon: "Compass",
    items: [
      {
        label: "Audit marketing",
        description: "Identifiez vos leviers de croissance prioritaires",
        icon: "Compass",
        href: "/services/audit-marketing",
      },
      {
        label: "Roadmap stratégique",
        description: "Structurez votre plan d'action sur 6 à 12 mois",
        icon: "Map",
        href: "/services/roadmap-strategique",
      },
    ],
  },
  {
    title: "Product Marketing",
    icon: "Rocket",
    items: [
      {
        label: "Positionnement & Messaging",
        description: "Clarifiez votre valeur pour chaque cible",
        icon: "Target",
        href: "/services/positionnement-messaging",
      },
      {
        label: "Création ou refonte de site web",
        description: "Déployez une interface web qui sert votre croissance",
        icon: "Globe",
        href: "/services/creation-refonte-site-web",
      },
      {
        label: "Création de landing pages",
        description: "Créez des pages d'atterrissage premium",
        icon: "LayoutTemplate",
        href: "/services/creation-landing-page",
      },
      {
        label: "Création de contenu B2B",
        description: "Éduquez votre marché et nourrissez votre pipeline",
        icon: "FileText",
        href: "/services/creation-contenu-b2b",
      },
      {
        label: "Audit de site web",
        description: "Identifiez ce qui freine les performances de votre site",
        icon: "SearchCheck",
        href: "/services/audit-site-web",
      },
    ],
  },
  {
    title: "Growth",
    icon: "TrendingUp",
    items: [
      {
        label: "SEO & contenu organique",
        description: "Devenez la référence sur les moteurs de recherche",
        icon: "Search",
        href: "/services/seo-contenu-organique",
      },
      {
        label: "LinkedIn for growth",
        description: "Atteignez les décideurs là où ils sont actifs",
        icon: "Megaphone",
        href: "/services/linkedin-for-growth",
      },
      {
        label: "Campagnes publicitaires",
        description: "Générez des leads qualifiés avec un ROI mesurable",
        icon: "Zap",
        href: "/services/campagnes-publicitaires",
      },
      {
        label: "Cold outreach & prospection",
        description: "Engagez vos prospects avant vos concurrents",
        icon: "Send",
        href: "/services/cold-outreach-prospection",
      },
      {
        label: "Constitution de bases de données",
        description: "Cartographiez votre marché et identifiez les bons interlocuteurs",
        icon: "Database",
        href: "/services/constitution-bases-donnees",
      },
    ],
  },
  {
    title: "Sales Enablement",
    icon: "Handshake",
    items: [
      {
        label: "Pitch decks & argumentaires",
        description: "Armez vos commerciaux pour chaque rendez-vous",
        icon: "Presentation",
        href: "/services/pitch-decks-argumentaires",
      },
      {
        label: "Battlecards & case studies",
        description: "Donnez à vos équipes de quoi convaincre à chaque étape",
        icon: "Swords",
        href: "/services/battlecards-case-studies",
      },
    ],
  },
  {
    title: "Marketing Automation & IA",
    icon: "Sparkles",
    items: [
      {
        label: "Déploiement de CRM",
        description: "Structurez votre pipe commercial de A à Z",
        icon: "Settings",
        href: "/services/deploiement-crm",
      },
      {
        label: "Lead nurturing",
        description: "Restez dans la tête de vos prospects jusqu'au closing",
        icon: "Mail",
        href: "/services/lead-nurturing",
      },
      {
        label: "Création de workflows",
        description: "Automatisez vos process sans rien laisser passer",
        icon: "Workflow",
        href: "/services/creation-workflows",
      },
      {
        label: "Applications IA",
        description: "Gagnez en vitesse et en pertinence grâce à l'IA",
        icon: "Sparkles",
        href: "/services/applications-ia",
      },
    ],
  },
];

export const SERVICE_MENU_BANNER = {
  label: "Externalisation — Stratégie ou Production",
  description:
    "CMO à temps partagé · Exécution complète · Vous choisissez le niveau d'implication",
  href: "/contact",
} as const;
