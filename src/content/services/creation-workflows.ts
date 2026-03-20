import type { ServiceContent } from "./types";

export const creationWorkflows: ServiceContent = {
  slug: "creation-workflows",
  title: "Création de Workflows",
  icon: "Repeat",
  category: "MARKETING AUTOMATION",
  order: 16,

  // SEO
  metaTitle: "Automatisation marketing : workflows sur mesure | Vizion",
  metaDescription:
    "L'automatisation marketing libère vos équipes des tâches répétitives. Vizion conçoit des workflows sur mesure (Make, HubSpot, n8n) pour accélérer votre cycle de vente B2B.",
  keywords: [
    "automatisation marketing",
    "automatisation marketing B2B",
    "workflow automatisation marketing",
    "marketing automation PME",
    "automatiser process marketing",
    "outil automatisation marketing",
    "Make automatisation marketing",
    "HubSpot workflows automatisés",
    "n8n automatisation",
    "lead routing automatisé",
    "scoring leads automatique",
    "automatisation relances commerciales",
    "gain de temps marketing automation",
    "agence automatisation marketing B2B",
    "comparatif outils marketing automation",
  ],

  // Hero
  heroTitle: "Automatisation marketing : libérez vos équipes des tâches que les machines font mieux",
  heroSubtitle:
    "L'automatisation marketing élimine les tâches répétitives qui ralentissent vos équipes : lead routing, relances, scoring, reporting. Chez Vizion, nous construisons des workflows sur mesure pour que vos commerciaux se concentrent sur la vente et vos marketeurs sur la stratégie.",
  heroBadge: "+200 workflows déployés en B2B",
  heroImage: "/images/services/creation-workflows/hero.avif",

  // Narrative (Le constat)
  constat: {
    surtitre: "Le problème",
    title:
      "Vos équipes passent plus de temps à gérer des process qu'à vendre.",
    paragraphs: [
      "Copier-coller entre outils, relances manuelles, reporting à la main. Vos équipes marketing et commerciales sont englouties par des tâches à faible valeur ajoutée. Ce n'est pas un problème de compétences. C'est un problème de système.",
    ],
    statements: [
      {
        headline: "Vos leads sont routés à la main, avec des oublis",
        description:
          "Un lead arrive par formulaire, un autre par LinkedIn, un troisième par email. Sans workflow de routing automatisé, chaque lead est attribué manuellement. Des prospects tombent entre les mailles du filet et personne ne s'en aperçoit.",
      },
      {
        headline: "Vos relances dépendent de la mémoire de vos commerciaux",
        description:
          "Pas de rappel automatique, pas de séquence programmée. Vos commerciaux relancent quand ils y pensent, oublient des prospects chauds et perdent des opportunités qui auraient pu se conclure.",
      },
      {
        headline: "Vos outils ne communiquent pas entre eux",
        description:
          "CRM d'un côté, outil d'emailing de l'autre, tableur de suivi au milieu. Vos données sont dispersées, les informations se perdent entre les outils et personne n'a une vision complète du pipeline.",
      },
      {
        headline: "Votre reporting consomme des heures chaque semaine",
        description:
          "Exporter les données, consolider les fichiers, mettre à jour les tableaux. Vos équipes passent des heures à produire des rapports qui devraient être générés automatiquement en temps réel.",
      },
    ],
  },

  // Solution sticky
  solutionTitle:
    "Notre approche de l'automatisation marketing : des workflows conçus pour vos équipes",
  solutionSubtitle:
    "Pas d'usine à gaz. Des workflows ciblés, testés et maintenables.",
  solutionImage: "/images/services/creation-workflows/solution.avif",
  solutionItems: [
    {
      title: "Nous auditons vos process avant de toucher un outil.",
      description:
        "Avant d'automatiser quoi que ce soit, nous cartographions vos flux existants. Nous identifions les goulots d'étranglement, les tâches à faible valeur ajoutée et les points de friction entre vos équipes. L'automatisation vient ensuite résoudre les vrais problèmes.",
    },
    {
      title: "Nous concevons des workflows qui s'adaptent à votre logique métier.",
      description:
        "Chaque workflow est conçu pour refléter vos règles de gestion, pas l'inverse. Lead routing par territoire, scoring par comportement, notifications par niveau d'urgence. Votre logique métier dicte l'automatisation.",
    },
    {
      title: "Nous connectons tous vos outils dans un système cohérent.",
      description:
        "CRM, emailing, prospection, facturation, communication interne. Nous créons les ponts entre vos outils pour que l'information circule sans ressaisie, sans erreur et sans intervention manuelle.",
    },
    {
      title: "Nous documentons et formons vos équipes.",
      description:
        "Chaque workflow est documenté et chaque membre de votre équipe est formé à son fonctionnement. Vous gardez la main sur votre système, vous comprenez sa logique et vous pouvez le faire évoluer.",
    },
    {
      title: "Nous maintenons et optimisons vos automatisations dans la durée.",
      description:
        "Un workflow qui tourne sans surveillance finit par dysfonctionner. Nous surveillons les performances, détectons les erreurs et ajustons les règles pour que votre système reste fiable et pertinent.",
    },
  ],

  // Scroll title
  scrollTitle: {
    hook: "Bref.",
    phrase: "Chez Vizion, on construit\ndes workflows...",
    adjectives: ["fiables", "intelligents", "et surtout rentables"],
    showcaseImages: [
      "/images/services/creation-workflows/screenshots/01.avif",
      "/images/services/creation-workflows/screenshots/02.avif",
      "/images/services/creation-workflows/screenshots/03.avif",
      "/images/services/creation-workflows/screenshots/04.avif",
      "/images/services/creation-workflows/screenshots/05.avif",
      "/images/services/creation-workflows/screenshots/06.avif",
      "/images/services/creation-workflows/screenshots/07.avif",
      "/images/services/creation-workflows/screenshots/08.avif",
    ],
  },

  // Bento featured cards
  bentoCards: {
    sectionTitle: "Les spécificités de notre approche de l'automatisation B2B",
    sectionDescription:
      "Nous ne déployons pas des automatisations pour le plaisir. Chaque workflow est conçu pour résoudre un problème concret, mesurer son impact et faire gagner du temps à vos équipes au quotidien.",
    image: {
      src: "/images/services/creation-workflows/bento.avif",
      alt: "Workflows d'automatisation marketing Vizion",
    },
    technology: {
      title: "Les outils d'automatisation\nles plus puissants du marché.",
      description:
        "Make, Zapier, n8n, HubSpot Workflows. Nous maîtrisons les plateformes leaders et choisissons la plus adaptée à votre volumétrie, vos intégrations et votre budget. Besoin de scénarios complexes avec des dizaines d'étapes ? Ou d'automatisations simples et fiables ? Nous avons la bonne réponse technique.",
      logos: [
        "Make",
        "Zapier",
        "n8n",
        "HubSpot",
        "Pipedrive",
        "ActiveCampaign",
        "Slack",
        "Notion",
      ],
    },
    performance: {
      value: 15,
      suffix: "h",
      label: "Économisées par semaine",
      description:
        "En moyenne, nos clients récupèrent 15 heures par semaine en automatisant les tâches répétitives de leurs équipes marketing et commerciales.",
    },
    noTemplate: {
      title: "Chaque workflow est construit sur mesure pour votre logique métier",
      description:
        "Pas de scénario prédéfini copié-collé. Chaque automatisation est conçue pour vos règles de gestion, vos outils et vos process spécifiques.",
    },
    widgets: {
      title: "Des automatisations pour chaque étape de votre cycle commercial",
      description:
        "Chaque type de workflow répond à un besoin précis de vos équipes marketing ou commerciales.",
      tags: [
        "Lead routing",
        "Scoring automatisé",
        "Relances programmées",
        "Reporting temps réel",
        "Notifications CRM",
      ],
    },
    integrations: {
      title: "Vos workflows connectent l'ensemble de votre écosystème",
      description:
        "CRM, emailing, prospection, facturation, communication. Chaque outil de votre stack est connecté pour que l'information circule sans friction ni ressaisie manuelle.",
      logos: [
        "HubSpot",
        "Salesforce",
        "Pipedrive",
        "Brevo",
        "Mailchimp",
        "Slack",
        "Google Sheets",
        "Notion",
        "Stripe",
        "Calendly",
      ],
    },
    growth: {
      title: "Vous mesurez le temps gagné et l'impact sur vos résultats",
      description:
        "Nombre d'exécutions, taux de succès, heures économisées, leads routés automatiquement. Chaque workflow est monitoré pour prouver son impact réel sur la productivité de vos équipes.",
    },
  },

  // Process
  processTitle: "Un projet d'automatisation marketing avec Vizion : comment ça se passe ?",
  processSubtitle:
    "Un processus structuré pour déployer des workflows fiables qui font gagner du temps à vos équipes dès la première semaine.",
  processSteps: [
    {
      title: "Audit des process et cartographie des flux",
      description:
        "Nous auditons vos process marketing et commerciaux actuels. Nous identifions les tâches répétitives, les goulots d'étranglement et les points de friction entre vos outils. Vous repartez avec une cartographie complète et une priorisation des workflows à automatiser en premier.",
      duration: "1 semaine",
      deliverables: [
        "Cartographie des process actuels",
        "Identification des tâches automatisables",
        "Priorisation des workflows",
        "Estimation des gains",
        "Feuille de route technique",
      ],
    },
    {
      title: "Conception et architecture des workflows",
      description:
        "Nous concevons l'architecture de chaque workflow : triggers, conditions, actions, gestion des erreurs. Chaque scénario est documenté sous forme de schéma fonctionnel, validé avec vos équipes avant le développement. Les règles de gestion sont traduites en logique d'automatisation.",
      duration: "1 à 2 semaines",
      deliverables: [
        "Schémas fonctionnels",
        "Règles de déclenchement",
        "Logique de conditions",
        "Plan de gestion des erreurs",
      ],
    },
    {
      title: "Développement et tests",
      description:
        "Nous développons chaque workflow dans la plateforme choisie, configurons les intégrations et testons chaque scénario en conditions réelles. Les cas limites sont identifiés et gérés. Chaque automatisation est validée avec vos données avant la mise en production.",
      duration: "2 à 3 semaines",
      deliverables: [
        "Workflows développés et testés",
        "Intégrations configurées",
        "Documentation technique",
        "Formation des équipes",
      ],
    },
    {
      title: "Mise en production et monitoring",
      description:
        "Déploiement progressif des workflows, surveillance des premières exécutions et ajustements. Nous mettons en place un monitoring permanent pour détecter les erreurs et mesurer les gains de productivité. Un accompagnement est prévu pour stabiliser le système.",
      duration: "1 semaine + suivi mensuel",
      deliverables: [
        "Workflows en production",
        "Tableau de bord de monitoring",
        "Alertes d'erreur configurées",
        "Rapport de performance mensuel",
      ],
    },
  ],

  // Quality guarantees
  qualityGuarantees: {
    surtitre: "Nos engagements",
    sectionTitle:
      "Pourquoi choisir Vizion\npour votre automatisation marketing ?",
    sectionDescription:
      "Nous ne vendons pas des heures de développement. Nous livrons des systèmes d'automatisation fiables, documentés et mesurables, conçus pour durer et évoluer avec votre entreprise.",
    cardSurtitre: "Ce que nous garantissons",
    cardTitle: "Des engagements\nde fiabilité et de résultat",
    cardDescription:
      "Chaque workflow est conçu avec la même rigueur. Des automatisations robustes, testées et monitorées en continu.",
    guarantees: [
      {
        icon: "Shield",
        title: "Des workflows testés avant chaque mise en production",
        description:
          "Chaque scénario est testé avec vos données réelles, y compris les cas limites. Aucun workflow n'est déployé sans validation complète. La gestion des erreurs est intégrée dès la conception.",
      },
      {
        icon: "LineChart",
        title: "Un monitoring en temps réel de chaque automatisation",
        description:
          "Taux de succès, nombre d'exécutions, temps d'exécution. Chaque workflow est surveillé en continu. En cas d'erreur, une alerte est déclenchée et nous intervenons rapidement.",
      },
      {
        icon: "ClipboardList",
        title: "Une documentation complète pour chaque workflow",
        description:
          "Schémas fonctionnels, règles de déclenchement, logique de conditions. Vos équipes comprennent le fonctionnement de chaque automatisation et peuvent la faire évoluer en toute autonomie.",
      },
    ],
    featureCard: {
      surtitre: "Notre vraie différence ?",
      title: "L'automatisation au service\nde votre stratégie commerciale",
      description:
        "Stratèges marketing et experts techniques travaillent ensemble pour que chaque workflow serve vos objectifs de vente, pas la complexité technique.",
      linkText: "Discuter de vos automatisations",
      linkHref: "/contact",
    },
  },

  // Testimonials
  testimonialsTitle: "Ils nous ont confié l'automatisation de leurs process",
  testimonialsSubtitle:
    "Consultez les retours d'expérience de dirigeants et responsables marketing qui ont fait appel à Vizion pour automatiser leurs process marketing et commerciaux.",
  testimonials: [
    {
      quote:
        "On a récupéré deux jours par semaine sur les tâches manuelles.",
      detail:
        "Vizion a automatisé l'ensemble de notre lead routing, nos relances et notre reporting hebdomadaire. Nos commerciaux se concentrent enfin sur la vente. Les erreurs de saisie ont disparu et le suivi des leads est devenu fiable.",
      author: "Directeur commercial",
      role: "Directeur commercial",
      company: "Client Vizion",
      photo: "/images/services/creation-workflows/testimonials/01.avif",
      rating: 5,
    },
    {
      quote:
        "Plus aucun lead ne tombe entre les mailles du filet.",
      detail:
        "Avant Vizion, nous perdions des leads entre le formulaire et le CRM. Aujourd'hui, chaque contact est automatiquement qualifié, attribué et suivi. Le temps de réponse est passé de 48 heures à moins de 10 minutes.",
      author: "Responsable marketing",
      role: "Responsable marketing",
      company: "Client Vizion",
      photo: "/images/services/creation-workflows/testimonials/02.avif",
      rating: 5,
    },
    {
      quote:
        "Le reporting se fait tout seul, chaque lundi matin à 8h.",
      detail:
        "Nous passions une demi-journée chaque semaine à consolider les données de 4 outils différents. Vizion a créé un workflow qui génère automatiquement le rapport et l'envoie à toute l'équipe. Le gain de temps est considérable.",
      author: "CEO",
      role: "Dirigeant",
      company: "Client Vizion",
      photo: "/images/services/creation-workflows/testimonials/03.avif",
      rating: 5,
    },
  ],

  // FAQ
  faqTitle: "Questions fréquentes sur l'automatisation marketing",
  faqs: [
    {
      question: "Qu'est-ce qu'un workflow et à quoi ça sert concrètement ?",
      answer:
        "Un workflow est une séquence d'actions automatisées déclenchée par un événement. Par exemple : un lead remplit un formulaire, le workflow l'ajoute au CRM, notifie le commercial concerné, envoie un email de confirmation et crée une tâche de suivi. Le tout sans intervention humaine, en quelques secondes.",
    },
    {
      question: "Combien coûte un projet d'automatisation marketing ?",
      answer:
        "Un projet d'automatisation se situe entre 2 500 € et 10 000 € selon le nombre de workflows, la complexité des intégrations et le niveau de personnalisation. L'accompagnement mensuel de monitoring et d'optimisation est facturé en complément. Nous établissons un devis précis après l'audit initial.",
    },
    {
      question: "Quels outils d'automatisation marketing utilisez-vous ?",
      answer:
        "Nous travaillons principalement avec Make (anciennement Integromat) pour les scénarios complexes, Zapier pour les automatisations simples et rapides, n8n pour les projets nécessitant un hébergement sur mesure, et les workflows natifs des CRM (HubSpot, Pipedrive). Le choix dépend de votre écosystème.",
    },
    {
      question: "Pouvez-vous automatiser des process qui impliquent plusieurs outils ?",
      answer:
        "C'est notre spécialité. La majorité de nos workflows connectent 3 à 8 outils entre eux : CRM, emailing, prospection, facturation, communication interne, reporting. L'objectif est que l'information circule sans friction et sans ressaisie entre toutes les briques de votre stack.",
    },
    {
      question: "Combien de temps faut-il pour déployer un workflow ?",
      answer:
        "Un workflow simple (notification, routing) peut être déployé en quelques jours. Un système complet (routing + scoring + relances + reporting) nécessite 4 à 6 semaines entre l'audit, la conception, le développement et les tests. Chaque workflow est testé en conditions réelles avant la mise en production.",
    },
    {
      question: "Que se passe-t-il si un workflow tombe en panne ?",
      answer:
        "Chaque workflow intègre une gestion des erreurs dès la conception. En cas de problème, une alerte est déclenchée et nous intervenons rapidement. Le monitoring permanent nous permet de détecter et corriger les dysfonctionnements avant qu'ils n'impactent vos équipes.",
    },
    {
      question: "L'automatisation marketing nécessite-t-elle des compétences techniques ?",
      answer:
        "Non. Chaque workflow est documenté et vos équipes sont formées à son utilisation. La maintenance courante (ajuster un paramètre, ajouter un destinataire) est à la portée de n'importe quel collaborateur. Pour les évolutions plus complexes, nous restons disponibles.",
    },
  ],

  // Related services
  relatedServicesTitle: "Vous voulez aller plus loin que l'automatisation ?",
  relatedServicesSubtitle:
    "Les workflows sont le socle. Ces services complémentaires maximisent leur impact sur vos résultats.",
  relatedServices: [
    {
      slug: "deploiement-crm",
      icon: "Settings",
      title: "Déploiement CRM",
      description:
        "Vos workflows sont aussi performants que le CRM qu'ils alimentent. Nous déployons et configurons votre CRM pour que chaque automatisation s'appuie sur des données fiables et un pipeline structuré.",
      href: "/services/creation-workflows",},
    {
      slug: "lead-nurturing",
      icon: "Mail",
      title: "Lead Nurturing",
      description:
        "Vos workflows routent les leads, le nurturing les fait mûrir. Nous construisons des séquences d'emailing automatisées qui nourrissent vos prospects jusqu'à la décision d'achat.",
      href: "/services/lead-nurturing",},
    {
      slug: "applications-ia",
      icon: "Brain",
      title: "Applications IA",
      description:
        "L'IA rend vos workflows plus intelligents. Scoring prédictif, classification automatique, personnalisation dynamique. Nous intégrons l'intelligence artificielle dans vos automatisations pour aller plus loin.",
      href: "/services/applications-ia",},
  ],

  // CTA intermédiaires
  inlineCTAs: {
    afterTestimonials: {
      text: "Vous voulez automatiser vos process marketing et commerciaux ?",
      buttonText: "Discuter de vos automatisations",
      href: "/contact",
    },
    afterProcess: {
      text: "Prêt à éliminer les tâches manuelles de votre quotidien ?",
      buttonText: "Lancer votre projet",
      href: "/contact",
    },
  },

  // CTA final
  ctaTitle: "Vos équipes méritent de se concentrer sur ce qui compte",
  ctaDescription:
    "Premier échange sans engagement. Nous auditons vos process et identifions les premières automatisations à mettre en place.",
  ctaButtonText: "Discuter de vos automatisations",
  ctaButtonLink: "/contact",
};
