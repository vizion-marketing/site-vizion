export const SITE_CONFIG = {
  name: "Vizion",
  url: "https://by-vizion.com",
  contact: {
    email: "contact@by-vizion.com",
    phone: "07 50 83 65 43",
    phoneTel: "+33750836543",
    address: "815 La Pyrénéenne, 31670 Labège",
    person: "Lucas Gonzalez",
    role: "Directeur Commercial",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/vizion-marketing-b2b/",
  },
} as const;

export const COLORS = {
  accent: "#EEFF41",
  accentHover: "#F5FF6B",
  accentRing: "rgba(238,255,65,0.3)",
  accentBorder: "rgba(238,255,65,0.4)",
  accentSubtle: "rgba(238,255,65,0.2)",
} as const;

export const BLOG_CATEGORIES = [
  "Tous",
  "Actualité",
  "IA for Sales",
  "Product Marketing",
  "Vente",
] as const;
