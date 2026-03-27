import type { ServiceContent } from "./types";

export const coldOutreachProspection: ServiceContent = {
  slug: "cold-outreach-prospection",
  title: "Cold Outreach et Prospection",
  icon: "Mail",
  category: "Growth Marketing",
  order: 10,

  // SEO
  metaTitle: "Prospection B2B | Décrochez plus de rendez-vous qualifiés",
  metaDescription:
    "Externalisez votre prospection commerciale B2B. Séquences multi-canal (email, LinkedIn, téléphone) et rendez-vous qualifiés dès le premier mois.",
  keywords: [
    "prospection commerciale",
    "prospection commerciale B2B",
    "prospection commerciale externalisée",
    "cold outreach B2B",
    "prospection outbound",
    "cold emailing B2B",
    "séquences de prospection automatisées",
    "génération de leads B2B",
    "prospection LinkedIn",
    "prospection multicanale",
    "agence prospection commerciale",
    "externaliser sa prospection commerciale",
    "prise de rendez-vous qualifiés",
    "automatisation prospection commerciale",
    "prospection commerciale efficace",
  ],

  // Hero
  heroTitle: "Prospection commerciale B2B : des rendez-vous qualifiés chaque semaine",
  heroSubtitle:
    "Votre prospection commerciale mobilise vos équipes sans remplir le pipeline ? Chez Vizion, nous construisons et pilotons des séquences de prospection multi-canal (email, LinkedIn, téléphone) qui génèrent des rendez-vous qualifiés. Personnalisation, automatisation, mesure : chaque message est calibré pour ouvrir une conversation.",
  heroBadge: "+10 000 prospects contactés",
  heroImage: "/images/services/cold-outreach-prospection/hero.avif",

  // Narrative (Le constat)
  constat: {
    surtitre: "Le problème",
    title:
      "Vos commerciaux prospectent beaucoup, mais remplissent peu le pipeline.",
    paragraphs: [
      "Messages LinkedIn ignorés, emails sans réponse, appels qui tombent dans le vide. La prospection mange du temps, use les équipes et ne produit pas assez de rendez-vous qualifiés. Le problème n'est pas le volume, c'est la méthode.",
    ],
    statements: [
      {
        headline: "Vos messages de prospection ressemblent à tous les autres",
        description:
          "Messages génériques, templates recyclés, pitch centré sur votre offre. Vos prospects reçoivent des dizaines de sollicitations par semaine. Si votre message ne se distingue pas dès la première ligne, il finit dans la corbeille sans être lu.",
      },
      {
        headline: "Vous prospectez sans séquence ni cadence structurée",
        description:
          "Un email par-ci, un message LinkedIn par-là, une relance oubliée. Sans séquence multi-canal avec des relances programmées, vous perdez la majorité de vos opportunités. La plupart des réponses arrivent après le troisième ou quatrième point de contact.",
      },
      {
        headline: "Vos commerciaux passent 60% de leur temps à chercher des contacts",
        description:
          "Recherche manuelle sur LinkedIn, copier-coller dans un tableur, vérification des emails un par un. Ce temps devrait être consacré aux conversations commerciales. La prospection artisanale ne passe pas à l'échelle.",
      },
      {
        headline: "Vous n'avez aucune visibilité sur ce qui fonctionne ou pas",
        description:
          "Pas de suivi des taux d'ouverture, de réponse ou de conversion. Vous ne savez pas quels messages performent, quels canaux convertissent, ni à quel moment relancer. Sans données, chaque campagne repart de zéro.",
      },
    ],
  },

  // Solution sticky
  solutionTitle:
    "Nous structurons votre prospection commerciale pour générer des rendez-vous réguliers",
  solutionImage: "/images/services/cold-outreach-prospection/solution.avif",
  solutionItems: [
    {
      title: "Nous définissons vos cibles avec la précision d'un sniper, pas d'un arrosoir.",
      description:
        "Avant d'écrire le moindre message, nous identifions vos personas prioritaires : poste, secteur, taille d'entreprise, signaux d'achat. La base de prospects est construite ou enrichie pour ne contacter que des décideurs pertinents, pas des contacts au hasard.",
    },
    {
      title: "Nous rédigeons des messages qui déclenchent des réponses, pas des désabonnements.",
      description:
        "Chaque message est écrit pour votre cible spécifique. Accroche personnalisée, problème identifié, proposition de valeur claire, appel à l'action simple. Nous testons plusieurs variantes et gardons celles qui génèrent le meilleur taux de réponse.",
    },
    {
      title: "Nous orchestrons des séquences multi-canal avec des relances calibrées.",
      description:
        "Email, LinkedIn, téléphone. Chaque canal est activé au bon moment dans la séquence. Les relances sont espacées et contextualisées pour maintenir la pression sans agacer. L'ensemble est automatisé, mais chaque point de contact reste humain.",
    },
    {
      title: "Nous configurons les outils pour que tout tourne sans intervention manuelle.",
      description:
        "Lemlist, La Growth Machine, Apollo, Instantly : nous maîtrisons les outils de prospection automatisée. Configuration technique (domaines, warm-up, délivrabilité), intégration CRM, synchronisation des réponses. Vos commerciaux reçoivent des leads chauds, pas des tâches techniques.",
    },
    {
      title: "Nous mesurons chaque étape et optimisons semaine après semaine.",
      description:
        "Taux d'ouverture, taux de réponse, taux de conversion en rendez-vous. Chaque métrique est suivie pour identifier ce qui fonctionne et ajuster ce qui ne performe pas. L'objectif est d'améliorer la machine en continu, pas de lancer et oublier.",
    },
  ],

  // Scroll title
  scrollTitle: {
    hook: "Bref.",
    phrase: "Chez Vizion, on construit\ndes systèmes de prospection...",
    adjectives: ["personnalisés", "automatisés", "et surtout rentables"],
    showcaseImages: [],
  },

  // Bento featured cards
  bentoCards: {
    sectionTitle: "Les spécificités de notre approche en prospection commerciale",
    sectionDescription:
      "Nous ne faisons pas de l'envoi en masse. Chaque campagne de prospection est un système complet : ciblage, copywriting, séquences multi-canal, automatisation et mesure de performance. L'objectif est de générer des conversations, pas du volume.",
    image: {
      src: "/images/services/cold-outreach-prospection/bento.avif",
      alt: "Séquence de prospection multi-canal Vizion",
    },
    technology: {
      title: "Les meilleurs outils d'outreach\nau service de votre pipeline.",
      description:
        "Lemlist pour les séquences email personnalisées à l'échelle. La Growth Machine pour l'orchestration multi-canal. Apollo pour l'enrichissement de données. Instantly pour les campagnes à fort volume. Nous sélectionnons et configurons les outils adaptés à votre marché et à votre cible.",
      logos: [
        "Lemlist",
        "La Growth Machine",
        "Apollo",
        "Instantly",
        "LinkedIn Sales Navigator",
        "Dropcontact",
        "Pharow",
        "Clay",
        "Make",
        "Zapier",
      ],
    },
    performance: {
      value: 8,
      suffix: "%",
      label: "Taux de réponse moyen",
      description:
        "Nos séquences de prospection B2B obtiennent en moyenne 8% de taux de réponse positif. Bien au-dessus des 1 à 2% des campagnes non personnalisées.",
    },
    noTemplate: {
      title: "Chaque séquence est rédigée sur mesure, sans template copier-coller",
      description:
        "Pas de messages génériques envoyés à 10 000 contacts. Chaque accroche, chaque relance est écrite pour votre cible spécifique. La personnalisation est le levier principal du taux de réponse.",
    },
    widgets: {
      title: "Des approches adaptées à chaque segment de votre cible",
      description:
        "Chaque canal et chaque format est choisi en fonction du persona ciblé et de son comportement habituel de communication.",
      tags: [
        "Cold email",
        "LinkedIn outreach",
        "Relance téléphonique",
        "Séquence multi-canal",
        "Message vocal",
      ],
    },
    integrations: {
      title: "Votre prospection est connectée à votre CRM et à vos commerciaux",
      description:
        "Chaque réponse positive, chaque rendez-vous pris remonte automatiquement dans votre CRM. Vos commerciaux reçoivent les leads qualifiés sans intervention manuelle.",
      logos: [
        "HubSpot",
        "Salesforce",
        "Pipedrive",
        "Google Sheets",
        "Slack",
        "Calendly",
        "Zapier",
        "Make",
        "Airtable",
      ],
    },
    growth: {
      title: "Vous suivez chaque indicateur de votre machine de prospection",
      description:
        "Taux d'ouverture, taux de réponse, taux de conversion en rendez-vous, nombre de leads qualifiés par semaine. Chaque métrique est suivie pour optimiser vos séquences en continu.",
    },
  },

  // Process
  processTitle:
    "Une prospection commerciale avec Vizion : comment ça se passe ?",
  processSubtitle:
    "Un processus en 5 étapes pour construire une machine de prospection qui génère des rendez-vous qualifiés chaque semaine, sans mobiliser vos commerciaux sur les tâches répétitives.",
  processSteps: [
    {
      title: "Ciblage et constitution de la base de prospects",
      description:
        "Nous définissons vos personas prioritaires et construisons (ou enrichissons) votre base de prospects qualifiés. Poste, secteur, taille d'entreprise, signaux d'achat : chaque critère est validé avec vous. La base est nettoyée, dédupliquée et vérifiée avant le moindre envoi.",
      duration: "1 semaine",
      deliverables: [
        "Personas et critères de ciblage",
        "Base de prospects qualifiés",
        "Vérification des emails",
        "Segmentation par priorité",
        "Import dans l'outil d'outreach",
      ],
    },
    {
      title: "Copywriting des séquences et configuration technique",
      description:
        "Nous rédigeons les séquences de prospection : accroches personnalisées, corps de message, relances, appels à l'action. En parallèle, nous configurons l'infrastructure technique : domaines d'envoi, warm-up, délivrabilité, intégration CRM. Tout est prêt pour un lancement propre.",
      duration: "1 semaine",
      deliverables: [
        "Séquences email rédigées",
        "Messages LinkedIn rédigés",
        "Scripts d'appel téléphonique",
        "Configuration domaines et warm-up",
        "Intégration CRM opérationnelle",
      ],
    },
    {
      title: "Lancement et premiers envois",
      description:
        "Les séquences sont lancées progressivement pour protéger la délivrabilité. Nous surveillons les taux d'ouverture, de réponse et de rebond quotidiennement. Les premières réponses sont qualifiées et transmises à vos commerciaux pour prise de rendez-vous.",
      duration: "2 semaines",
      deliverables: [
        "Séquences activées",
        "Suivi quotidien des métriques",
        "Qualification des réponses",
        "Premiers rendez-vous générés",
      ],
    },
    {
      title: "Optimisation des messages et des séquences",
      description:
        "Analyse des premiers résultats : quels messages performent, quels segments répondent, quels canaux convertissent. Nous ajustons le copywriting, la cadence des relances et le ciblage pour améliorer le taux de réponse et la qualité des rendez-vous obtenus.",
      duration: "2 semaines",
      deliverables: [
        "Tests A/B sur les accroches",
        "Ajustement des séquences",
        "Affinement du ciblage",
        "Rapport de performance intermédiaire",
        "Recommandations d'optimisation",
      ],
    },
    {
      title: "Scaling et pilotage continu",
      description:
        "Les séquences qui fonctionnent sont déployées à plus grande échelle. Nouveaux segments, nouveaux messages, nouveaux canaux. Nous pilotons la machine de prospection en continu pour maintenir un flux régulier de rendez-vous qualifiés dans votre pipeline.",
      duration: "Continu",
      deliverables: [
        "Extension à de nouveaux segments",
        "Nouveaux messages et variantes",
        "Rapport mensuel de performance",
        "Réunion de pilotage",
        "Recommandations stratégiques",
      ],
    },
  ],

  // Quality guarantees
  qualityGuarantees: {
    surtitre: "Nos engagements",
    sectionTitle:
      "Pourquoi choisir Vizion\npour votre prospection commerciale ?",
    sectionDescription:
      "Nous ne faisons pas de l'envoi en masse. Chaque séquence est personnalisée, chaque prospect est qualifié, et chaque résultat est mesuré. L'objectif est de remplir votre pipeline, pas votre boîte d'envoi.",
    cardSurtitre: "Ce que nous garantissons",
    cardTitle: "Des engagements\ncentrés sur les rendez-vous qualifiés",
    cardDescription:
      "Chaque campagne de prospection est pilotée avec rigueur. Pas de volume pour le volume, des conversations qui débouchent sur du business.",
    guarantees: [
      {
        icon: "UserCheck",
        title: "Des messages personnalisés, jamais de templates envoyés en masse",
        description:
          "Chaque accroche est écrite pour un segment précis. Nous personnalisons à l'échelle sans sacrifier la qualité du message. Vos prospects sentent qu'on leur parle, pas qu'on leur vend.",
      },
      {
        icon: "Shield",
        title: "Une délivrabilité protégée et surveillée en permanence",
        description:
          "Domaines dédiés, warm-up progressif, monitoring des taux de rebond. Nous protégeons votre réputation d'envoi pour que vos messages arrivent en boîte de réception, pas en spam.",
      },
      {
        icon: "Handshake",
        title: "Des leads qualifiés transmis à vos commerciaux, pas des contacts froids",
        description:
          "Chaque réponse positive est qualifiée avant d'être transmise. Vos commerciaux reçoivent des prospects intéressés et informés, prêts pour une conversation commerciale.",
      },
    ],
    featureCard: {
      surtitre: "Notre vraie différence ?",
      title: "Une prospection qui respecte\nvos prospects et votre marque",
      description:
        "Stratèges commerciaux et experts en copywriting travaillent ensemble pour que chaque message génère de la valeur, pas de l'agacement.",
      linkText: "Discuter de votre prospection",
      linkHref: "/contact",
    },
  },

  // Testimonials
  testimonialsTitle: "Ils nous ont confié leur prospection outbound",
  testimonialsSubtitle:
    "Consultez les retours d'expérience de dirigeants et responsables commerciaux qui ont fait appel à Vizion pour structurer et piloter leur prospection B2B.",
  testimonials: [
    {
      quote:
        "12 rendez-vous qualifiés le premier mois, sans mobiliser nos commerciaux.",
      detail:
        "Vizion a construit nos séquences de prospection de A à Z : ciblage, copywriting, automatisation. Nos commerciaux ont reçu des rendez-vous qualifiés dans leur agenda sans passer une heure sur la recherche de contacts ou la rédaction de messages.",
      author: "Directeur commercial",
      role: "Directeur commercial",
      company: "Client Vizion",
      photo: "/images/services/cold-outreach-prospection/testimonials/01.avif",
      rating: 5,
    },
    {
      quote:
        "Un taux de réponse de 11% sur LinkedIn, bien au-dessus de nos précédentes tentatives.",
      detail:
        "Nous avions essayé la prospection LinkedIn en interne avec des résultats décevants. Vizion a repensé notre approche : messages courts, personnalisés, avec un angle problème. Les réponses ont suivi, et la qualité des conversations a changé.",
      author: "CEO",
      role: "Dirigeant",
      company: "Client Vizion",
      photo: "/images/services/cold-outreach-prospection/testimonials/02.avif",
      rating: 5,
    },
    {
      quote:
        "La machine tourne toute seule, nous n'avons qu'à prendre les rendez-vous.",
      detail:
        "Ce que j'apprécie chez Vizion, c'est que tout est automatisé et propre. Les séquences tournent, les relances partent au bon moment, et les réponses arrivent directement dans notre CRM. On se concentre sur la vente, pas sur la logistique.",
      author: "Responsable développement",
      role: "Responsable développement",
      company: "Client Vizion",
      photo: "/images/services/cold-outreach-prospection/testimonials/03.avif",
      rating: 5,
    },
  ],

  // FAQ
  faqTitle: "Des questions sur la prospection commerciale B2B ?",
  faqs: [
    {
      question: "Est-ce que le cold emailing est légal en B2B ?",
      answer:
        "Oui. En B2B, le cold emailing est autorisé sous certaines conditions. Le RGPD impose un intérêt légitime, une transparence sur l'identité de l'expéditeur et un lien de désinscription fonctionnel. Nous respectons scrupuleusement ces règles et configurons chaque campagne pour être conforme, y compris la gestion des opt-out.",
    },
    {
      question: "Combien de rendez-vous une prospection commerciale B2B peut-elle générer par mois ?",
      answer:
        "Le volume dépend de votre marché, de votre cible et de votre offre. En moyenne, nos campagnes génèrent entre 8 et 20 rendez-vous qualifiés par mois pour un segment de 500 à 1 000 prospects contactés. Les premiers résultats arrivent dès les deux premières semaines, mais la machine atteint son rythme optimal après 4 à 6 semaines.",
    },
    {
      question: "Quels outils utilisez-vous pour la prospection commerciale ?",
      answer:
        "Nous utilisons principalement Lemlist, La Growth Machine, Apollo et Instantly pour les séquences d'envoi. LinkedIn Sales Navigator et Pharow pour le ciblage. Dropcontact pour l'enrichissement et la vérification des emails. Le choix des outils dépend de votre cible, de votre budget et de vos intégrations existantes.",
    },
    {
      question: "Faut-il fournir une base de prospects ou vous la construisez ?",
      answer:
        "Nous pouvons travailler avec votre base existante (après nettoyage et enrichissement) ou construire une base complète depuis zéro. Dans les deux cas, nous vérifions chaque contact : validité de l'email, pertinence du poste, conformité avec vos critères de ciblage. La qualité de la base conditionne tout le reste.",
    },
    {
      question: "Comment protégez-vous la réputation de notre domaine d'envoi ?",
      answer:
        "Nous utilisons des domaines d'envoi dédiés (séparés de votre domaine principal) avec un warm-up progressif de 2 à 3 semaines. Les volumes d'envoi sont montés graduellement, les taux de rebond surveillés quotidiennement, et les listes nettoyées en continu. Votre domaine principal n'est jamais exposé.",
    },
    {
      question: "Quelle est la différence entre votre prospection commerciale et du mass mailing ?",
      answer:
        "Un outil de mass mailing envoie le même message à des milliers de contacts. Notre approche combine ciblage fin, personnalisation à l'échelle, séquences multi-canal (email, LinkedIn, téléphone) et optimisation continue. Le résultat : des taux de réponse 4 à 5 fois supérieurs et des rendez-vous avec les bons interlocuteurs.",
    },
    {
      question: "Peut-on combiner le cold outreach avec nos campagnes publicitaires ?",
      answer:
        "Absolument. C'est même recommandé. La publicité chauffe votre audience (notoriété, retargeting), et le cold outreach ouvre la conversation directe. Un prospect qui a vu votre contenu LinkedIn Ads avant de recevoir un email personnalisé est beaucoup plus réceptif. Nous coordonnons les deux canaux pour maximiser l'impact.",
    },
  ],

  // Related services
  relatedServicesTitle: "Vous voulez aller plus loin que la prospection outbound ?",
  relatedServicesSubtitle:
    "Le cold outreach remplit votre pipeline. Ces services complètent le dispositif pour convertir plus et mieux.",
  relatedServices: [
    {
      slug: "deploiement-crm",
      icon: "Database",
      title: "Deploiement CRM",
      description:
        "La qualite de votre prospection depend de la qualite de vos outils. Nous deploiement et configurons votre CRM pour centraliser vos contacts et piloter votre pipeline commercial.",
      href: "/services/deploiement-crm",
    },
    {
      slug: "linkedin-for-growth",
      icon: "Users",
      title: "LinkedIn for Growth",
      description:
        "Le cold outreach ouvre des conversations. Une présence LinkedIn forte installe votre crédibilité auprès de vos cibles avant même le premier message. Les deux approches se renforcent mutuellement.",
      href: "/services/linkedin-for-growth",
    },
    {
      slug: "deploiement-crm",
      icon: "Settings",
      title: "Déploiement CRM",
      description:
        "Vos leads de prospection arrivent. Encore faut-il les suivre, les relancer et les convertir. Nous déployons et configurons votre CRM pour que chaque opportunité soit tracée du premier contact au closing.",
      href: "/services/deploiement-crm",
    },
  ],

  // CTA intermédiaires
  inlineCTAs: {
    afterTestimonials: {
      text: "Vous voulez remplir votre pipeline sans mobiliser vos commerciaux ?",
      buttonText: "Discuter de votre prospection",
      href: "/contact",
    },
    afterProcess: {
      text: "Prêt à lancer une machine de prospection qui tourne chaque semaine ?",
      buttonText: "Lancer votre projet",
      href: "/contact",
    },
  },

  // CTA final
  ctaTitle: "Votre pipeline commercial ne devrait pas dépendre du hasard",
  ctaDescription:
    "Premier échange sans engagement. Nous analysons votre cible et vous proposons une stratégie de prospection sur mesure.",
  ctaButtonText: "Discuter de votre prospection",
  ctaButtonLink: "/contact",
};
