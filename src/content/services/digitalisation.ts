import type { ServiceContent } from "./types";

export const digitalisation: ServiceContent = {
  slug: "digitalisation",
  title: "Digitalisation entreprise B2B",
  icon: "Monitor",
  category: "Pilier",
  order: 104,

  metaTitle: "Digitalisation Entreprise B2B : site web, CRM et applications IA | Vizion",
  metaDescription:
    "Digitalisez votre entreprise B2B avec les bons outils. Site web performant, CRM structuré, applications IA sur mesure. Vizion déploie les solutions qui accélèrent votre activité.",
  keywords: [
    "digitalisation entreprise B2B",
    "transformation digitale B2B",
    "site web B2B",
    "déploiement CRM B2B",
    "applications IA B2B",
    "outils digitaux entreprise",
    "CRM B2B",
  ],

  heroTitle: "Digitalisez votre entreprise avec les bons outils",
  heroSubtitle:
    "Vos outils sont sous-exploités et vos processus restent manuels. Nous déployons les solutions digitales qui accélèrent votre activité : un site web qui convertit, un CRM structuré autour de votre cycle de vente, des applications IA qui libèrent du temps.",
  heroBadge: "DIGITALISATION",

  constat: {
    surtitre: "LE CONSTAT",
    title: "Vos outils ne servent pas votre croissance",
    paragraphs: [
      "Un site web qui ne convertit pas. Un CRM que personne n'utilise vraiment. Des processus manuels qui consomment du temps et génèrent des erreurs. Les outils digitaux sont là, mais ils ne sont pas au service de votre développement commercial.",
      "Le problème n'est pas la technologie. C'est la façon dont elle a été choisie et déployée. Un site construit sans stratégie de conversion ne génère pas de leads. Un CRM installé sans réflexion sur le cycle de vente finit en tableur glorifié.",
    ],
    statements: [
      {
        headline: "Un site web qui convertit",
        description: "Architecture pensée pour le parcours acheteur B2B, copywriting orienté problème, performances optimisées.",
      },
      {
        headline: "Un CRM adopté par vos équipes",
        description: "Pipeline configuré pour votre cycle de vente, automatisations intégrées, données exploitables.",
      },
      {
        headline: "L'IA là où elle a du sens",
        description: "Applications sur mesure pour la qualification, la production de contenu et l'automatisation des tâches à faible valeur.",
      },
    ],
  },

  solutionTitle: "Trois piliers pour une digitalisation qui sert votre croissance",
  solutionImage: "/images/pigment.avif",
  solutionItems: [
    {
      title: "Création ou refonte de site web",
      description: "Un site B2B pensé pour la conversion : architecture claire, copywriting orienté problème, SEO technique intégré, performances optimisées. Pas une vitrine, un outil commercial.",
    },
    {
      title: "Déploiement et structuration CRM",
      description: "HubSpot, Pipedrive ou Salesforce configuré autour de votre cycle de vente. Pipeline commercial, automatisations, reporting, formation : tout est pensé pour que vos équipes adoptent l'outil.",
    },
    {
      title: "Applications IA sur mesure",
      description: "Outils métier propulsés par l'intelligence artificielle. Qualification automatisée, scoring de prospects, production de contenu accélérée. L'IA au service de votre productivité.",
    },
  ],

  processTitle: "",
  processSubtitle: "",
  processSteps: [],

  testimonials: [],

  faqTitle: "Questions fréquentes sur la digitalisation B2B",
  faqs: [
    {
      question: "Faut-il refondre son site web ou l'optimiser ?",
      answer: "Cela dépend de l'état actuel. Si la structure, le design et le code sont obsolètes, une refonte est plus efficace qu'une succession de patchs. Si le site est récent mais sous-performe, un audit suivi d'optimisations ciblées (copywriting, CTA, SEO technique) peut suffire. Nous commençons toujours par un diagnostic avant de recommander.",
    },
    {
      question: "Combien de temps pour déployer un CRM en B2B ?",
      answer: "Un déploiement CRM bien structuré prend 6 à 10 semaines : audit des processus existants, configuration du pipeline et des automatisations, migration des données, formation des équipes. Le vrai enjeu n'est pas technique, c'est l'adoption par vos équipes.",
    },
    {
      question: "Quelles applications IA sont pertinentes pour le B2B ?",
      answer: "Les applications les plus impactantes en B2B : qualification automatisée des leads entrants, scoring de prospects, personnalisation des approches commerciales à l'échelle, production de contenu accélérée, tableaux de bord intelligents. Nous développons uniquement ce qui a un impact mesurable sur votre activité.",
    },
  ],

  relatedServicesTitle: "Les services de ce pilier",
  relatedServicesSubtitle: "Chaque solution peut être déployée indépendamment ou dans le cadre d'une transformation digitale complète.",
  relatedServices: [
    {
      slug: "creation-refonte-site-web",
      icon: "Globe",
      title: "Création ou refonte de site web",
      description: "Un site B2B qui sert votre croissance, pas juste votre image.",
      href: "/services/creation-refonte-site-web",
    },
    {
      slug: "deploiement-crm",
      icon: "Settings",
      title: "Déploiement de CRM",
      description: "Un CRM structuré que vos équipes utilisent vraiment.",
      href: "/services/deploiement-crm",
    },
    {
      slug: "applications-ia",
      icon: "Sparkles",
      title: "Applications IA",
      description: "Gagnez en vitesse et en pertinence grâce à l'IA appliquée.",
      href: "/services/applications-ia",
    },
    {
      slug: "audit-site-web",
      icon: "Search",
      title: "Audit de site web",
      description: "Diagnostic complet de votre site : performance, SEO, conversion.",
      href: "/services/audit-site-web",
    },
  ],

  ctaTitle: "Vos outils devraient accélérer votre croissance, pas la freiner",
  ctaDescription: "Échangez 30 minutes avec un fondateur. Nous identifions les solutions digitales les plus adaptées à votre situation.",
  ctaButtonText: "Parler digitalisation",
  ctaButtonLink: "/contact",
};
