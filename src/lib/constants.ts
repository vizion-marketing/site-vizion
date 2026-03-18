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
      },
      {
        label: "Roadmap stratégique",
        description: "Structurez votre plan d'action sur 6 à 12 mois",
        icon: "Map",
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
      },
      {
        label: "Création de sites web",
        description: "Déployez une interface web qui sert votre croissance",
        icon: "Globe",
        href: "/services/site-web-landing-page",
      },
      {
        label: "Création de landing pages",
        description: "Créez des pages d'atterrissage premium",
        icon: "LayoutTemplate",
      },
      {
        label: "Création de contenu B2B",
        description: "Éduquez votre marché et nourrissez votre pipeline",
        icon: "FileText",
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
      },
      {
        label: "LinkedIn for growth",
        description: "Atteignez les décideurs là où ils sont actifs",
        icon: "Megaphone",
      },
      {
        label: "Campagnes publicitaires",
        description: "Générez des leads qualifiés avec un ROI mesurable",
        icon: "Zap",
      },
      {
        label: "Cold outreach & prospection",
        description: "Engagez vos prospects avant vos concurrents",
        icon: "Send",
      },
      {
        label: "Constitution de bases de données",
        description: "Cartographiez votre marché et identifiez les bons interlocuteurs",
        icon: "Database",
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
      },
      {
        label: "Battlecards & case studies",
        description: "Donnez à vos équipes de quoi convaincre à chaque étape",
        icon: "Swords",
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
      },
      {
        label: "Lead nurturing",
        description: "Restez dans la tête de vos prospects jusqu'au closing",
        icon: "Mail",
      },
      {
        label: "Création de workflows",
        description: "Automatisez vos process sans rien laisser passer",
        icon: "Workflow",
      },
      {
        label: "Applications IA",
        description: "Gagnez en vitesse et en pertinence grâce à l'IA",
        icon: "Sparkles",
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
