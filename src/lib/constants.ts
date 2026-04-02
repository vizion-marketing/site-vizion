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
  href?: string; // Lien vers la page pilier
  items: ServiceMenuItem[];
}

export const SERVICE_MENU_CATEGORIES: ServiceMenuCategory[] = [
  {
    title: "Stratégie",
    icon: "Compass",
    href: "/services/strategie",
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
      {
        label: "Direction marketing externalisée",
        description: "Un directeur marketing dédié, sans les contraintes d'un recrutement",
        icon: "UserCog",
        href: "/services/direction-marketing-externalisee",
      },
    ],
  },
  {
    title: "Marketing Produit",
    icon: "Rocket",
    href: "/services/product-marketing",
    items: [
      {
        label: "Positionnement & Messaging",
        description: "Clarifiez votre valeur pour chaque cible",
        icon: "Target",
        href: "/services/positionnement-messaging",
      },
      {
        label: "Création de landing pages",
        description: "Créez des pages d'atterrissage premium",
        icon: "LayoutTemplate",
        href: "/services/creation-landing-page",
      },
    ],
  },
  {
    title: "Growth Marketing",
    icon: "TrendingUp",
    href: "/services/growth-marketing",
    items: [
      {
        label: "SEO & contenu organique",
        description: "Devenez la référence sur les moteurs de recherche",
        icon: "Search",
        href: "/services/seo-contenu-organique",
      },
      {
        label: "Campagnes publicitaires",
        description: "Générez des leads qualifiés avec un ROI mesurable",
        icon: "Zap",
        href: "/services/campagnes-publicitaires",
      },
      {
        label: "Prospection Multicanal",
        description: "Engagez vos prospects avant vos concurrents",
        icon: "Send",
        href: "/services/cold-outreach-prospection",
      },
      {
        label: "Stratégie de personal branding",
        description: "Faites de vos dirigeants des générateurs de leads",
        icon: "User",
        href: "/services/strategie-personal-branding",
      },
    ],
  },
  {
    title: "Activation des Ventes",
    icon: "Handshake",
    href: "/services/sales-enablement",
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
    ],
  },
  {
    title: "Transformation Digitale",
    icon: "Monitor",
    href: "/services/transformation-digitale",
    items: [
      {
        label: "Création ou refonte de site web",
        description: "Déployez une interface web qui sert votre croissance",
        icon: "Globe",
        href: "/services/creation-refonte-site-web",
      },
      {
        label: "Déploiement de CRM",
        description: "Structurez votre pipe commercial de A à Z",
        icon: "Settings",
        href: "/services/deploiement-crm",
      },
      {
        label: "Applications IA",
        description: "Gagnez en vitesse et en pertinence grâce à l'IA",
        icon: "Sparkles",
        href: "/services/applications-ia",
      },
      {
        label: "Stack d'acquisition complète",
        description: "Connectez tous vos outils pour une acquisition cohérente",
        icon: "Layers",
        href: "/services/stack-acquisition",
      },
    ],
  },
];

// --- Mapping catégorie → page pilier (pour breadcrumbs) ---
export const PILIER_MAP: Record<string, { label: string; slug: string }> = {
  "Stratégie": { label: "Stratégie", slug: "strategie" },
  "Marketing Produit": { label: "Marketing Produit", slug: "product-marketing" },
  "Growth Marketing": { label: "Growth Marketing", slug: "growth-marketing" },
  "Activation des Ventes": { label: "Activation des Ventes", slug: "sales-enablement" },
  "Transformation Digitale": { label: "Transformation Digitale", slug: "transformation-digitale" },
};

export const SERVICE_MENU_BANNER = {
  label: "Externalisation : Stratégie ou Production",
  description:
    "CMO à temps partagé · Exécution complète · Vous choisissez le niveau d'implication",
  href: "/contact",
} as const;
