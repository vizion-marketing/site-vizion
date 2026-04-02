// ============================================================================
// TYPE — PAGE ENJEU VIZION
// ============================================================================
// Structure des pages /enjeux/[slug]
// Ces pages adressent une situation de transformation vécue par le client,
// et orientent vers les services Vizion les plus adaptés à ce moment.
// ============================================================================

export interface EnjeuxSignal {
  icon: string; // Nom Lucide icon
  title: string; // 6-10 mots
  description: string; // 80-120 car.
}

export interface EnjeuxDefi {
  icon: string; // Nom Lucide icon
  title: string; // 6-10 mots
  description: string; // 100-150 car.
}

export interface EnjeuxApprocheItem {
  number: string; // "01", "02", etc.
  title: string; // 6-10 mots
  description: string; // 150-200 car.
}

export interface EnjeuxService {
  slug: string; // Slug du service Vizion existant
  icon: string; // Nom Lucide icon (identique au service)
  title: string; // Titre exact du service
  description: string; // 100-150 car. — pourquoi ce service est pertinent dans CE contexte
  href: string; // /services/[slug] ou /contact si le service n'existe pas encore
}

export interface EnjeuxFAQ {
  question: string; // 6-15 mots
  answer: string; // 200-300 car.
}

export interface EnjeuxContent {
  // Identité
  slug: string; // kebab-case, identique au nom de fichier
  title: string; // Nom court (3-5 mots)
  icon: string; // Nom Lucide icon (identique au mega menu)

  // SEO
  metaTitle: string; // 50-60 car. | "Situation : Sous-titre | Vizion"
  metaDescription: string; // 140-160 car.
  keywords: string[]; // 10-14 mots-clés

  // Hero
  heroTitle: string; // 8-14 mots — interpelle directement la situation vécue
  heroSubtitle: string; // 200-260 car. — contexte + ce que Vizion fait dans ce cas
  heroBadge: string; // 20-40 car. — chiffre ou preuve sociale

  // Section 1 — Reconnaissance : "Vous êtes dans cette situation si..."
  recognitionTitle: string; // 8-12 mots
  recognitionSubtitle: string; // 100-150 car.
  signals: EnjeuxSignal[]; // 4 signaux (FIXE)

  // Section 2 — Défis clés (fond sombre)
  defisSurtitre: string; // "Ce que cette etape implique vraiment"
  defisTitle: string; // 8-14 mots
  defisSubtitle: string; // 100-150 car.
  defis: EnjeuxDefi[]; // 4 défis (FIXE)

  // Section 3 — Approche Vizion (sticky)
  approcheTitle: string; // 10-16 mots — commence par "Chez Vizion, on..."
  approcheSubtitle: string; // 100-150 car.
  approcheItems: EnjeuxApprocheItem[]; // 4 items (FIXE)

  // Section 4 — Services recommandés
  servicesTitle: string; // 8-12 mots
  servicesSubtitle: string; // 100-150 car.
  services: EnjeuxService[]; // 4-6 services

  // Section 5 — FAQ
  faqTitle: string; // "Des questions sur [la situation] ?"
  faqs: EnjeuxFAQ[]; // 5 FAQs (FIXE)

  // CTA final
  ctaTitle: string; // 6-10 mots
  ctaDescription: string; // 80-120 car., mention "sans engagement"
  ctaButtonText: string; // 3-5 mots
  ctaButtonLink: string; // "/contact"
}
