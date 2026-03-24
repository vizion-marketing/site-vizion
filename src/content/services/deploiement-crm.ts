import type { ServiceContent } from "./types";

export const deploiementCrm: ServiceContent = {
  slug: "deploiement-crm",
  title: "Déploiement de CRM",
  icon: "Settings",
  category: "MARKETING AUTOMATION",
  order: 14,

  // SEO
  metaTitle: "Déploiement CRM : un outil adopté et rentable",
  metaDescription:
    "Déploiement CRM B2B : configuration de HubSpot, Pipedrive ou Salesforce autour de votre cycle de vente pour garantir adoption et rentabilité.",
  keywords: [
    "déploiement CRM",
    "déploiement CRM B2B",
    "déployer un CRM",
    "configuration CRM sur mesure",
    "CRM B2B PME",
    "HubSpot déploiement",
    "Pipedrive configuration",
    "Salesforce PME",
    "adoption CRM équipes commerciales",
    "migration CRM données",
    "intégration CRM outils existants",
    "automatisation CRM pipeline",
    "reporting commercial CRM",
    "formation CRM équipes",
    "combien coûte un déploiement CRM",
  ],

  // Hero
  heroTitle: "Déploiement CRM : un outil que vos équipes utilisent vraiment",
  heroSubtitle:
    "Le déploiement CRM ne devrait pas se résumer à installer un logiciel. Chez Vizion, nous configurons HubSpot, Pipedrive ou Salesforce autour de votre cycle de vente B2B. Pipeline commercial, automatisations, reporting, formation : tout est pensé pour que vos équipes adoptent l'outil et pilotent leur activité avec précision.",
  heroBadge: "+25 CRM déployés et configurés",
  heroImage: "/images/services/deploiement-crm/hero.avif",

  // Narrative (Le constat)
  constat: {
    surtitre: "Le problème",
    title:
      "Votre CRM devrait être votre meilleur outil de pilotage. En réalité, personne ne l'utilise.",
    paragraphs: [
      "Vous avez investi dans un CRM. Vos équipes l'ouvrent par obligation, remplissent le minimum et retournent à leurs tableurs Excel. Le problème n'est pas l'outil. C'est la façon dont il a été déployé.",
    ],
    statements: [
      {
        headline: "Votre pipeline commercial est un angle mort",
        description:
          "Vous ne savez pas combien de deals sont en cours, à quelle étape ils en sont, ni lesquels vont aboutir ce trimestre. Votre prévisionnel repose sur l'intuition de vos commerciaux, pas sur des données fiables.",
      },
      {
        headline: "Vos commerciaux passent plus de temps à saisir qu'à vendre",
        description:
          "Champs obligatoires inutiles, workflows mal pensés, doublons de contacts. Votre CRM ralentit vos équipes au lieu de les aider. Le temps passé à alimenter l'outil est du temps perdu sur le terrain.",
      },
      {
        headline: "Vos données sont dispersées entre 5 outils différents",
        description:
          "Contacts dans un tableur, notes dans un email, devis sur un drive, suivi dans un autre outil. Sans source unique de vérité, vos équipes travaillent en silo et des opportunités passent entre les mailles.",
      },
      {
        headline: "Votre reporting commercial n'est pas fiable",
        description:
          "Vos rapports dépendent de la bonne volonté de chacun à remplir le CRM. Les chiffres sont incomplets, les tableaux de bord restent vides, et vos décisions stratégiques se prennent sans données exploitables.",
      },
    ],
  },

  // Solution sticky
  solutionTitle:
    "Notre approche du déploiement CRM : un outil adopté dès le premier mois",
  solutionImage: "/images/services/deploiement-crm/solution.avif",
  solutionItems: [
    {
      title: "Nous configurons votre CRM autour de votre processus de vente.",
      description:
        "Avant de toucher un paramètre, nous analysons votre cycle commercial, vos étapes de qualification et les informations dont vos équipes ont vraiment besoin. Le CRM reflète votre façon de vendre, pas un modèle générique sorti d'un guide de démarrage.",
    },
    {
      title: "Nous automatisons ce qui peut l'être pour libérer du temps de vente.",
      description:
        "Création automatique de tâches, relances programmées, scoring de leads, notifications d'activité. Chaque automatisation a un objectif : supprimer une action manuelle qui ne crée pas de valeur pour vos commerciaux.",
    },
    {
      title: "Nous connectons votre CRM à tous vos outils existants.",
      description:
        "Site web, outil d'emailing, facturation, support client, outils de prospection. Nous intégrons votre CRM à votre stack pour que les données circulent sans ressaisie et que chaque équipe travaille avec la même information.",
    },
    {
      title: "Nous construisons des tableaux de bord qui pilotent vos décisions.",
      description:
        "Pipeline en temps réel, prévisionnel de chiffre d'affaires, taux de conversion par étape, performance individuelle. Chaque rapport est conçu pour répondre à une question business précise, pas pour afficher des métriques qui ne servent à rien.",
    },
    {
      title: "Nous formons vos équipes pour garantir l'adoption durable.",
      description:
        "Un CRM bien configuré ne sert à rien si personne ne l'utilise. Nous formons chaque profil (commerciaux, managers, direction) avec des sessions pratiques, un guide d'utilisation et un accompagnement post-déploiement de 3 mois.",
    },
  ],

  // Scroll title
  scrollTitle: {
    hook: "Bref.",
    phrase: "Chez Vizion, on déploie\ndes CRM...",
    adjectives: ["adoptés", "connectés", "et surtout rentables"],
    showcaseImages: [],
  },

  // Bento featured cards
  bentoCards: {
    sectionTitle: "Ce qui différencie notre déploiement CRM",
    sectionDescription:
      "Nous ne vendons pas de licences et nous ne sommes pas revendeurs. Nous configurons votre CRM pour qu'il serve votre stratégie commerciale, avec une expertise terrain qui fait la différence entre un outil déployé et un outil adopté.",
    image: {
      src: "/images/services/deploiement-crm/bento.avif",
      alt: "Configuration CRM par Vizion",
    },
    technology: {
      title: "HubSpot, Pipedrive, Salesforce :\nle bon CRM pour votre contexte.",
      description:
        "Une PME de 15 commerciaux n'a pas les mêmes besoins qu'une ETI de 200 collaborateurs. Nous vous recommandons le CRM le plus adapté à votre taille, votre cycle de vente et votre budget. Puis nous le configurons pour qu'il reflète exactement votre processus commercial, sans compromis sur la simplicité d'utilisation.",
      logos: [
        "HubSpot",
        "Pipedrive",
        "Salesforce",
        "Zoho",
        "Monday",
        "Freshsales",
        "noCRM",
        "Folk",
        "Sellsy",
        "Axonaut",
      ],
    },
    performance: {
      value: 85,
      suffix: "%",
      label: "Taux d'adoption moyen",
      description:
        "Nos déploiements atteignent un taux d'adoption supérieur à 85% dans les 3 mois suivant la mise en production, grâce à une configuration sur mesure et un accompagnement terrain.",
    },
    noTemplate: {
      title: "Chaque CRM est configuré sur mesure pour votre cycle de vente",
      description:
        "Pas de configuration par défaut. Chaque pipeline, chaque champ, chaque automatisation est pensé pour votre processus commercial et validé avec vos équipes terrain.",
    },
    widgets: {
      title: "Des modules configurés pour chaque besoin commercial",
      description:
        "Chaque fonctionnalité du CRM est activée et paramétrée en fonction de ce que vos équipes utilisent réellement au quotidien.",
      tags: [
        "Pipeline de vente",
        "Scoring de leads",
        "Séquences de relance",
        "Tableaux de bord",
        "Devis et propositions",
      ],
    },
    integrations: {
      title: "Votre CRM est connecté à l'ensemble de votre stack",
      description:
        "Site web, emailing, facturation, support, prospection. Nous intégrons votre CRM à tous vos outils pour que les données circulent automatiquement et que chaque équipe travaille avec la même source de vérité.",
      logos: [
        "Zapier",
        "Make",
        "Mailchimp",
        "Brevo",
        "Stripe",
        "Slack",
        "Google Workspace",
        "LinkedIn Sales Navigator",
        "Calendly",
        "Lemlist",
      ],
    },
    growth: {
      title: "Vous pilotez votre activité commerciale avec des données fiables",
      description:
        "Pipeline en temps réel, prévisionnel de CA, taux de conversion par étape, vélocité des deals. Chaque indicateur est configuré pour vous donner une vision claire de votre performance commerciale.",
    },
  },

  // Process
  processTitle:
    "Les 5 étapes de notre déploiement CRM",
  processSubtitle:
    "Un processus éprouvé pour déployer un CRM adopté par vos équipes, connecté à vos outils et aligné sur votre stratégie commerciale.",
  processSteps: [
    {
      title: "Audit de votre processus commercial",
      description:
        "Nous commençons par comprendre comment vos équipes vendent : étapes du cycle, qualification, outils utilisés, points de friction. Nous auditons votre CRM actuel (ou l'absence de CRM) et identifions les gains rapides et les chantiers prioritaires. Cette phase détermine le périmètre exact du déploiement.",
      duration: "1 à 2 semaines",
      deliverables: [
        "Cartographie du cycle de vente",
        "Audit de l'existant",
        "Recommandation CRM",
        "Cahier des charges fonctionnel",
        "Planning de déploiement",
      ],
    },
    {
      title: "Configuration et personnalisation",
      description:
        "Nous configurons chaque élément du CRM : pipelines, champs personnalisés, vues par rôle, automatisations, modèles d'emails, séquences de relance et règles de scoring. Chaque paramètre est validé avec vos équipes pour garantir que l'outil reflète exactement votre façon de travailler.",
      duration: "2 à 3 semaines",
      deliverables: [
        "Pipelines configurés",
        "Champs et propriétés personnalisés",
        "Automatisations actives",
        "Modèles d'emails et séquences",
        "Règles de scoring",
        "Vues et filtres par rôle",
      ],
    },
    {
      title: "Intégrations et migration de données",
      description:
        "Nous connectons votre CRM à vos outils existants (site web, emailing, facturation, prospection) et migrons vos données historiques (contacts, entreprises, deals). Chaque intégration est testée pour garantir que les données circulent correctement entre vos systèmes.",
      duration: "1 à 2 semaines",
      deliverables: [
        "Intégrations configurées",
        "Migration de données",
        "Nettoyage et dédoublonnage",
        "Tests de flux",
      ],
    },
    {
      title: "Tableaux de bord et reporting",
      description:
        "Nous construisons les tableaux de bord qui pilotent votre activité : pipeline en temps réel, prévisionnel de chiffre d'affaires, taux de conversion par étape, performance individuelle et collective. Chaque rapport répond à une question business précise que vous vous posez au quotidien.",
      duration: "1 semaine",
      deliverables: [
        "Tableaux de bord direction",
        "Rapports managers",
        "Vues commerciaux",
        "Alertes automatiques",
      ],
    },
    {
      title: "Formation et accompagnement post-déploiement",
      description:
        "Nous formons chaque profil utilisateur (commerciaux, managers, direction) avec des sessions pratiques centrées sur leurs cas d'usage quotidiens. Un guide d'utilisation est livré et notre équipe reste disponible pendant 3 mois pour ajuster la configuration et répondre aux questions terrain.",
      duration: "1 semaine + 3 mois de suivi",
      deliverables: [
        "Sessions de formation par profil",
        "Guide d'utilisation",
        "Support post-déploiement (3 mois)",
        "Rapport d'adoption à 30 jours",
      ],
    },
  ],

  // Quality guarantees
  qualityGuarantees: {
    surtitre: "Nos engagements",
    sectionTitle:
      "Pourquoi choisir Vizion\npour déployer votre CRM ?",
    sectionDescription:
      "Nous ne déployons pas un CRM pour cocher une case. Nous déployons un outil que vos équipes adoptent, qui produit des données fiables et qui pilote réellement votre croissance commerciale.",
    cardSurtitre: "Ce que nous garantissons",
    cardTitle: "Des engagements\ncentrés sur l'adoption",
    cardDescription:
      "Chaque déploiement est piloté avec la même rigueur. L'objectif n'est pas un outil en place, c'est un outil utilisé.",
    guarantees: [
      {
        icon: "UserCheck",
        title: "Un taux d'adoption supérieur à 80% dans les 3 mois",
        description:
          "La configuration sur mesure, la formation par profil et l'accompagnement post-déploiement garantissent que vos équipes utilisent réellement le CRM. Nous mesurons l'adoption et intervenons si les indicateurs ne sont pas au niveau.",
      },
      {
        icon: "LineChart",
        title: "Des tableaux de bord opérationnels dès le premier jour",
        description:
          "Pas besoin d'attendre 6 mois pour avoir de la visibilité. Vos rapports sont configurés et alimentés dès la mise en production. Vous pilotez votre activité commerciale avec des données fiables immédiatement.",
      },
      {
        icon: "Handshake",
        title: "Un accompagnement de 3 mois inclus après le déploiement",
        description:
          "Corrections, ajustements, nouvelles automatisations, questions terrain. Pendant 3 mois, notre équipe reste disponible pour faire évoluer la configuration en fonction des retours de vos équipes.",
      },
    ],
    featureCard: {
      surtitre: "Notre vraie différence ?",
      title: "Des experts marketing\nqui configurent votre CRM",
      description:
        "Nous ne sommes pas des intégrateurs techniques. Nous sommes des stratèges marketing qui comprennent votre cycle de vente et qui configurent le CRM pour servir vos objectifs commerciaux.",
      linkText: "Discuter de votre projet CRM",
      linkHref: "/contact",
    },
  },

  // Testimonials
  testimonialsTitle: "Ils nous ont confié le déploiement de leur CRM",
  testimonialsSubtitle:
    "Consultez les retours d'expérience de dirigeants et responsables commerciaux qui ont fait appel à Vizion pour déployer ou reconfigurer leur CRM.",
  testimonials: [
    {
      quote:
        "En 3 mois, 100% de l'équipe commerciale utilise le CRM au quotidien.",
      detail:
        "Nous avions un CRM mal configuré que personne n'utilisait. Vizion a repris la configuration de zéro, aligné le pipeline sur notre cycle de vente et formé chaque commercial individuellement. Aujourd'hui, le CRM est le premier outil que l'équipe ouvre le matin.",
      author: "Directeur commercial",
      role: "Directeur commercial",
      company: "Client Vizion",
      photo: "/images/services/deploiement-crm/testimonials/01.avif",
      rating: 5,
    },
    {
      quote:
        "Pour la première fois, notre prévisionnel commercial est fiable.",
      detail:
        "Avant Vizion, notre prévisionnel reposait sur les estimations de chaque commercial. Maintenant, le pipeline est structuré, les probabilités sont calibrées par étape, et la direction a une visibilité en temps réel sur le chiffre d'affaires prévisionnel. Les comités de direction sont devenus productifs.",
      author: "CEO",
      role: "Dirigeant",
      company: "Client Vizion",
      photo: "/images/services/deploiement-crm/testimonials/02.avif",
      rating: 5,
    },
    {
      quote:
        "Les automatisations nous font gagner plus de 5 heures par semaine par commercial.",
      detail:
        "Relances automatiques, création de tâches, scoring de leads, notifications. Vizion a identifié toutes les actions répétitives qui ralentissaient nos commerciaux et les a automatisées. L'équipe se concentre enfin sur la vente, pas sur la saisie administrative.",
      author: "Responsable opérations",
      role: "Responsable opérations",
      company: "Client Vizion",
      photo: "/images/services/deploiement-crm/testimonials/03.avif",
      rating: 5,
    },
  ],

  // FAQ
  faqTitle: "Questions fréquentes sur le déploiement CRM",
  faqs: [
    {
      question: "Combien coûte le déploiement d'un CRM B2B ?",
      answer:
        "Un déploiement complet (audit, configuration, intégrations, formation) se situe généralement entre 5 000 et 15 000 euros selon la complexité de votre cycle de vente, le nombre d'utilisateurs et les intégrations nécessaires. Ce budget n'inclut pas la licence du CRM lui-même. Nous établissons un devis précis après l'audit initial.",
    },
    {
      question: "Quel CRM recommandez-vous pour une PME B2B ?",
      answer:
        "Cela dépend de votre contexte. HubSpot est excellent pour les entreprises qui veulent aligner marketing et ventes sur un seul outil. Pipedrive est idéal pour les équipes commerciales qui veulent un outil simple et centré sur le pipeline. Salesforce convient aux organisations plus structurées avec des processus complexes. Nous recommandons toujours le CRM le plus adapté après l'audit.",
    },
    {
      question: "Combien de temps dure un déploiement CRM complet ?",
      answer:
        "Comptez 6 à 10 semaines pour un déploiement complet (de l'audit à la formation). Ce délai inclut la configuration, les intégrations, la migration de données et les phases de validation avec vos équipes. Un déploiement simple (pipeline et reporting uniquement) peut être réalisé en 4 semaines.",
    },
    {
      question: "Pouvez-vous reconfigurer un CRM déjà en place ?",
      answer:
        "Oui. La majorité de nos projets sont des reconfigurations de CRM existants. Nous auditons votre configuration actuelle, identifions ce qui freine l'adoption et reprenons les éléments critiques : pipeline, automatisations, reporting, propriétés. L'objectif est de transformer un outil sous-utilisé en un vrai levier commercial.",
    },
    {
      question: "Comment garantir l'adoption après un déploiement CRM ?",
      answer:
        "L'adoption se joue à trois niveaux : une configuration qui reflète le quotidien des commerciaux (pas de champs inutiles), une formation pratique centrée sur leurs cas d'usage réels, et un accompagnement de 3 mois pour ajuster la configuration aux retours terrain. Nous mesurons le taux d'adoption et intervenons si nécessaire.",
    },
    {
      question: "Migrez-vous les données depuis notre ancien outil ?",
      answer:
        "Oui. Nous prenons en charge la migration de vos contacts, entreprises, deals et historiques d'interactions depuis votre ancien CRM ou vos tableurs Excel. Chaque donnée est nettoyée, dédoublonnée et structurée avant l'import. Aucune information critique n'est perdue dans la transition.",
    },
    {
      question: "Que comprend l'accompagnement post-déploiement CRM ?",
      answer:
        "Oui. Chaque déploiement inclut 3 mois d'accompagnement post-production : ajustements de configuration, nouvelles automatisations, support utilisateur, optimisation des tableaux de bord. Au-delà, nous proposons des forfaits de maintenance et d'optimisation continue pour faire évoluer votre CRM avec votre activité.",
    },
  ],

  // Related services
  relatedServicesTitle: "Vous voulez aller plus loin que votre CRM ?",
  relatedServicesSubtitle:
    "Un CRM bien déployé, c'est la fondation. Ces services complémentaires maximisent le retour sur investissement de votre outil.",
  relatedServices: [
    {
      slug: "lead-nurturing",
      icon: "Mail",
      title: "Lead Nurturing",
      description:
        "Votre CRM capture les leads. Le nurturing les fait avancer. Nous créons des séquences d'emailing automatisées qui transforment vos contacts froids en opportunités qualifiées pour vos commerciaux.",
      href: "/services/deploiement-crm",
    },
    {
      slug: "creation-workflows",
      icon: "Zap",
      title: "Création de Workflows",
      description:
        "Allez plus loin que les automatisations natives de votre CRM. Nous créons des workflows avancés qui connectent vos outils et automatisent les processus complexes entre marketing, ventes et opérations.",
      href: "/services/creation-workflows",
    },
    {
      slug: "cold-outreach-prospection",
      icon: "Megaphone",
      title: "Cold Outreach et Prospection",
      description:
        "Votre CRM est en place, votre pipeline est structuré. Nous alimentons ce pipeline avec des campagnes de prospection ciblées qui génèrent des rendez-vous qualifiés pour vos commerciaux.",
      href: "/services/cold-outreach-prospection",
    },
  ],

  // CTA intermédiaires
  inlineCTAs: {
    afterTestimonials: {
      text: "Vous voulez un CRM que vos équipes utilisent vraiment ?",
      buttonText: "Discuter de votre projet CRM",
      href: "/contact",
    },
    afterProcess: {
      text: "Prêt à transformer votre pilotage commercial ?",
      buttonText: "Lancer votre projet",
      href: "/contact",
    },
  },

  // CTA final
  ctaTitle: "Votre CRM devrait être votre meilleur outil de pilotage",
  ctaDescription:
    "Premier échange sans engagement. Nous auditons votre CRM actuel et identifions les leviers de performance immédiate.",
  ctaButtonText: "Discuter de votre projet CRM",
  ctaButtonLink: "/contact",
};
