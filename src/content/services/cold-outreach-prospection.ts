import type { ServiceContent } from "./types";

export const coldOutreachProspection: ServiceContent = {
  slug: "cold-outreach-prospection",
  title: "Prospection Multicanal",
  icon: "Mail",
  category: "Growth Marketing",
  order: 10,

  // SEO
  metaTitle: "Prospection Multicanal B2B | Rendez-vous qualifiés | Vizion",
  metaDescription:
    "Vizion construit et pilote votre prospection multicanal B2B : email, LinkedIn, téléphone. Des séquences personnalisées pour générer des rendez-vous qualifiés chaque semaine.",
  keywords: [
    "prospection multicanal B2B",
    "prospection commerciale B2B",
    "prospection commerciale externalisée",
    "cold emailing B2B",
    "prospection LinkedIn B2B",
    "séquences de prospection",
    "génération de leads B2B",
    "rendez-vous qualifiés B2B",
    "outreach B2B",
    "agence prospection commerciale",
    "externaliser sa prospection",
    "automatisation prospection",
    "prospection outbound",
    "pipeline commercial B2B",
    "prospection commerciale efficace",
  ],

  // Hero
  heroTitle: "Prospection multicanal B2B : un système qui génère des rendez-vous qualifiés",
  heroSubtitle:
    "Votre pipeline commercial ne devrait pas dépendre du temps libre de vos commerciaux. Chez Vizion, nous construisons des systèmes de prospection multicanal (email, LinkedIn, téléphone) qui tournent en continu, génèrent des rendez-vous qualifiés et libèrent vos équipes pour ce qui compte : vendre.",
  heroBadge: "+10 000 prospects contactés",
  heroImage: "/images/services/cold-outreach-prospection/hero.avif",

  // Narrative (Le constat)
  constat: {
    surtitre: "Le constat",
    title: "Votre prospection repose sur les bonnes volontés. Pas sur un système.",
    paragraphs: [
      "Vos commerciaux prospectent quand ils ont le temps, avec les méthodes qu'ils connaissent, vers les contacts qu'ils trouvent. Résultat : un pipeline irrégulier, des cycles de vente longs et une dépendance aux performances individuelles.",
    ],
    statements: [
      {
        headline: "Chaque commercial invente sa propre méthode",
        description:
          "Un envoie des emails, un autre passe par LinkedIn, un troisième appelle directement. Pas de séquence commune, pas de copywriting testé, pas de relances coordonnées. Le résultat varie d'un commercial à l'autre, et personne ne sait ce qui fonctionne vraiment.",
      },
      {
        headline: "Les messages partent sans vraiment cibler",
        description:
          "Listes LinkedIn exportées à la va-vite, emails copiés sur un template, pitch centré sur votre offre plutôt que sur les problèmes de votre cible. Vos prospects reçoivent des dizaines de sollicitations par semaine. Si le message ne parle pas directement à leur situation, il finit ignoré.",
      },
      {
        headline: "La prospection s'arrête dès que le pipeline est plein",
        description:
          "Quand les commerciaux ont des deals à traiter, la prospection passe en second plan. Puis le pipeline se vide, et il faut repartir de zéro. Ce cycle creux-plein-creux est le principal frein à la croissance commerciale prévisible.",
      },
      {
        headline: "Personne ne sait ce qui a fonctionné ni pourquoi",
        description:
          "Pas de suivi des taux d'ouverture, pas d'analyse des canaux, pas de test de messages. Chaque trimestre repart de zéro. Sans données, impossible d'améliorer ce qu'on ne mesure pas.",
      },
    ],
  },

  // Solution sticky
  solutionTitle: "Nous construisons votre machine de prospection multicanal, de A à Z",
  solutionImage: "/images/services/cold-outreach-prospection/solution.avif",
  solutionItems: [
    {
      title: "Ciblage précis : on contacte les bons décideurs, pas tout le monde.",
      description:
        "Avant d'écrire le moindre message, nous définissons vos personas prioritaires : poste, secteur, taille d'entreprise, signaux d'achat. La base de prospects est construite ou enrichie pour ne contacter que des interlocuteurs pertinents, vérifiés et à jour.",
    },
    {
      title: "Copywriting calibré pour déclencher une réponse, pas un désabonnement.",
      description:
        "Chaque message est rédigé pour une cible précise. Accroche personnalisée, angle problème, proposition de valeur courte, appel à l'action simple. Nous testons plusieurs variantes et conservons celles qui génèrent les meilleures réponses.",
    },
    {
      title: "Séquences multicanal : email, LinkedIn, téléphone, au bon moment.",
      description:
        "Chaque canal est activé dans le bon ordre, avec la bonne cadence. Email d'introduction, visite de profil LinkedIn, message court, relance contextualisée, appel de suivi. L'ensemble est automatisé sans sacrifier le registre humain de chaque message.",
    },
    {
      title: "Infrastructure technique configurée pour protéger votre délivrabilité.",
      description:
        "Domaines d'envoi dédiés, warm-up progressif, vérification des emails, monitoring des rebonds. Nous configurons les outils (Lemlist, La Growth Machine, Apollo, Instantly) et les intégrons à votre CRM. Vos commerciaux reçoivent des leads chauds directement dans leur pipeline.",
    },
    {
      title: "Pilotage continu : on optimise chaque semaine ce qui ne performe pas.",
      description:
        "Taux d'ouverture, taux de réponse, taux de conversion en rendez-vous. Chaque indicateur est suivi pour identifier les leviers et corriger ce qui freine. L'objectif est d'améliorer la machine en continu, pas de lancer une campagne et attendre.",
    },
  ],

  // Scroll title
  scrollTitle: {
    hook: "Bref.",
    phrase: "Chez Vizion, on construit\ndes systèmes de prospection...",
    adjectives: ["ciblés", "multicanal", "et mesurables"],
    showcaseImages: [],
  },

  // Bento featured cards
  bentoCards: {
    sectionTitle: "Ce qui différencie notre approche de la prospection classique",
    sectionDescription:
      "Nous ne faisons pas de l'envoi en masse. Chaque dispositif de prospection est un système complet : ciblage, copywriting, séquences multicanal, infrastructure technique, pilotage des résultats. L'objectif est d'ouvrir des conversations qualifiées, pas de remplir une boîte d'envoi.",
    image: {
      src: "/images/services/lead-nurturing/hero.avif",
      alt: "Séquence de prospection multicanal Vizion",
    },
    technology: {
      title: "Les meilleurs outils d'outreach\nau service de votre pipeline.",
      description:
        "Lemlist pour les séquences email personnalisées. La Growth Machine pour l'orchestration multicanal. Apollo pour l'enrichissement de données. Instantly pour les campagnes à fort volume. Nous sélectionnons et configurons les outils adaptés à votre marché, votre cible et vos intégrations existantes.",
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
        "Nos séquences de prospection B2B obtiennent en moyenne 8% de taux de réponse positif, bien au-dessus des 1 à 2% des approches non personnalisées.",
    },
    noTemplate: {
      title: "Chaque séquence est rédigée sur mesure, sans copier-coller",
      description:
        "Pas de templates envoyés à 10 000 contacts. Chaque accroche est écrite pour un segment précis. La personnalisation à l'échelle reste le levier principal du taux de réponse.",
    },
    widgets: {
      title: "Un mix de canaux adapté à chaque segment",
      description:
        "Email, LinkedIn, téléphone, vidéo personnalisée : le bon canal pour le bon interlocuteur, au bon moment dans la séquence.",
      tags: [
        "Cold email",
        "LinkedIn outreach",
        "Relance téléphonique",
        "Séquence multicanal",
        "Vidéo personnalisée",
      ],
    },
    integrations: {
      title: "Votre prospection connectée à votre CRM et vos commerciaux",
      description:
        "Chaque réponse positive remonte automatiquement dans votre CRM. Vos commerciaux reçoivent les leads qualifiés sans intervention manuelle, prêts à engager la conversation commerciale.",
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
      title: "Chaque indicateur suivi pour optimiser en continu",
      description:
        "Taux d'ouverture, taux de réponse, taux de conversion en rendez-vous, volume de leads qualifiés par semaine. On mesure pour améliorer, pas pour rapporter.",
    },
  },

  // Process
  processTitle: "Comment on construit votre dispositif de prospection multicanal",
  processSubtitle:
    "Cinq étapes pour passer d'une prospection artisanale à un système qui génère des rendez-vous qualifiés chaque semaine, sans mobiliser vos commerciaux sur les tâches répétitives.",
  processSteps: [
    {
      title: "Cadrage stratégique et ciblage",
      description:
        "Nous définissons avec vous les personas prioritaires et les critères de ciblage : poste, secteur, taille d'entreprise, signaux d'achat, zone géographique. La base de prospects est construite ou enrichie, nettoyée, dédupliquée et vérifiée avant le premier envoi.",
      duration: "1 semaine",
      deliverables: [
        "Personas et critères de ciblage validés",
        "Base de prospects qualifiés",
        "Vérification et enrichissement des emails",
        "Segmentation par priorité",
        "Import dans l'outil d'outreach",
      ],
    },
    {
      title: "Copywriting des séquences et configuration technique",
      description:
        "Nous rédigeons les séquences de prospection : accroches personnalisées, corps de message, relances, appels à l'action. En parallèle, nous configurons l'infrastructure : domaines d'envoi, warm-up, délivrabilité, intégration CRM. Tout est prêt pour un lancement sans risque.",
      duration: "1 semaine",
      deliverables: [
        "Séquences email rédigées et validées",
        "Messages LinkedIn rédigés",
        "Scripts d'appel téléphonique",
        "Configuration domaines et warm-up",
        "Intégration CRM opérationnelle",
      ],
    },
    {
      title: "Lancement et premiers résultats",
      description:
        "Les séquences sont activées progressivement pour protéger la délivrabilité. Nous surveillons les métriques quotidiennement et qualifions les premières réponses avant transmission à vos commerciaux.",
      duration: "2 semaines",
      deliverables: [
        "Séquences activées",
        "Suivi quotidien des métriques",
        "Qualification des réponses",
        "Premiers rendez-vous générés",
      ],
    },
    {
      title: "Analyse et optimisation",
      description:
        "Nous analysons les premiers résultats : quels messages performent, quels segments répondent, quels canaux convertissent. Copywriting, cadence, ciblage : tout est ajusté pour améliorer le taux de réponse et la qualité des rendez-vous.",
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
        "Les séquences validées sont déployées à plus grande échelle : nouveaux segments, nouveaux angles, nouveaux canaux. Nous pilotons le dispositif en continu pour maintenir un flux régulier de rendez-vous qualifiés dans votre pipeline.",
      duration: "Continu",
      deliverables: [
        "Extension à de nouveaux segments",
        "Nouveaux messages et variantes",
        "Rapport mensuel de performance",
        "Réunion de pilotage mensuelle",
        "Recommandations stratégiques",
      ],
    },
  ],

  // Quality guarantees
  qualityGuarantees: {
    portraitImage: "/images/services/battlecards-case-studies/hero.avif",
    surtitre: "Nos engagements",
    sectionTitle: "Pourquoi confier votre prospection à Vizion",
    sectionDescription:
      "Nous ne faisons pas de volume pour le volume. Chaque campagne est conçue pour générer des conversations utiles, avec les bons interlocuteurs, dans le bon registre.",
    cardSurtitre: "Ce que nous garantissons",
    cardTitle: "Des engagements centrés sur la qualité des rendez-vous",
    cardDescription:
      "Chaque dispositif est piloté avec rigueur. Pas de spam, pas de mass mailing, des conversations qui débouchent sur du business.",
    guarantees: [
      {
        icon: "UserCheck",
        title: "Des messages personnalisés, jamais des templates recyclés",
        description:
          "Chaque accroche est écrite pour un segment précis. Nous personnalisons à l'échelle sans sacrifier la qualité. Vos prospects sentent qu'on leur parle, pas qu'on leur vend.",
      },
      {
        icon: "Shield",
        title: "Une délivrabilité protégée et surveillée en permanence",
        description:
          "Domaines dédiés, warm-up progressif, monitoring des taux de rebond. Nous protégeons votre réputation d'envoi pour que vos messages arrivent en boîte de réception.",
      },
      {
        icon: "Handshake",
        title: "Des leads qualifiés transmis à vos commerciaux, pas des contacts froids",
        description:
          "Chaque réponse positive est qualifiée avant transmission. Vos commerciaux reçoivent des prospects intéressés, informés et prêts pour une conversation commerciale.",
      },
    ],
    featureCard: {
      surtitre: "Notre vraie différence",
      title: "Une prospection qui respecte vos prospects et votre marque",
      description:
        "Chaque message est conçu pour créer de la valeur dès le premier contact. Pas d'agacement, pas de pression excessive : une approche qui ouvre des conversations durables.",
      linkText: "Discuter de votre prospection",
      linkHref: "/contact",
    },
  },

  // Testimonials
  testimonialsTitle: "Ils nous ont confié leur prospection commerciale",
  testimonialsSubtitle:
    "Retours d'expérience de dirigeants et responsables commerciaux qui ont fait appel à Vizion pour structurer et piloter leur prospection B2B.",
  testimonials: [
    {
      quote:
        "12 rendez-vous qualifiés le premier mois, sans mobiliser nos commerciaux.",
      detail:
        "Vizion a construit nos séquences de prospection de A à Z : ciblage, copywriting, automatisation. Nos commerciaux ont reçu des rendez-vous dans leur agenda sans passer une heure sur la recherche de contacts ou la rédaction de messages.",
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
        "Nous avions essayé la prospection LinkedIn en interne avec des résultats décevants. Vizion a repensé notre approche : messages courts, personnalisés, angle problème. Les réponses ont suivi et la qualité des conversations a changé.",
      author: "CEO",
      role: "Dirigeant",
      company: "Client Vizion",
      photo: "/images/services/cold-outreach-prospection/testimonials/02.avif",
      rating: 5,
    },
    {
      quote: "La machine tourne, on n'a plus qu'à prendre les rendez-vous.",
      detail:
        "Les séquences tournent, les relances partent au bon moment, les réponses arrivent directement dans notre CRM. On se concentre sur la vente, pas sur la logistique de prospection.",
      author: "Responsable développement",
      role: "Responsable développement",
      company: "Client Vizion",
      photo: "/images/services/cold-outreach-prospection/testimonials/03.avif",
      rating: 5,
    },
  ],

  // FAQ
  faqTitle: "Questions fréquentes sur la prospection multicanal B2B",
  faqs: [
    {
      question: "Le cold emailing est-il légal en B2B ?",
      answer:
        "Oui, en B2B. Le RGPD autorise la prospection commerciale par email sous conditions d'intérêt légitime, de transparence sur l'expéditeur et de lien de désinscription fonctionnel. Nous respectons ces règles sur chaque campagne et configurons la gestion des opt-out dès le départ.",
    },
    {
      question: "Combien de rendez-vous peut-on générer chaque mois ?",
      answer:
        "Cela dépend de votre marché, de votre cible et de votre offre. En moyenne, nos campagnes génèrent entre 8 et 20 rendez-vous qualifiés par mois pour un segment de 500 à 1 000 prospects contactés. Les premiers résultats apparaissent dans les deux premières semaines, la cadence s'installe après 4 à 6 semaines.",
    },
    {
      question: "Faut-il avoir une base de prospects ou vous la construisez ?",
      answer:
        "Les deux sont possibles. Nous pouvons enrichir et nettoyer votre base existante, ou en construire une depuis zéro selon vos critères de ciblage. Dans tous les cas, chaque contact est vérifié : validité de l'email, pertinence du poste, conformité avec vos personas.",
    },
    {
      question: "Comment protégez-vous la réputation de notre domaine d'envoi ?",
      answer:
        "Nous utilisons des domaines dédiés séparés de votre domaine principal, avec un warm-up progressif de 2 à 3 semaines. Les volumes montent graduellement, les taux de rebond sont surveillés quotidiennement et les listes nettoyées en continu. Votre domaine principal n'est jamais exposé.",
    },
    {
      question: "Quelle est la différence entre prospection multicanal et mass mailing ?",
      answer:
        "Un outil de mass mailing envoie le même message à des milliers de contacts. Notre approche combine ciblage fin, personnalisation à l'échelle, séquences multicanal (email, LinkedIn, téléphone) et optimisation continue. Les taux de réponse sont 4 à 5 fois supérieurs, et les rendez-vous sont avec les bons interlocuteurs.",
    },
    {
      question: "Peut-on combiner la prospection multicanal avec de la publicité ?",
      answer:
        "Oui, et c'est même recommandé. La publicité installe la notoriété et chauffe l'audience. La prospection ouvre la conversation directe. Un prospect qui a vu votre contenu LinkedIn Ads avant de recevoir un message personnalisé est beaucoup plus réceptif. Nous coordonnons les deux canaux pour maximiser l'impact.",
    },
    {
      question: "Quels outils utilisez-vous pour la prospection ?",
      answer:
        "Lemlist et Instantly pour les séquences email. La Growth Machine pour l'orchestration multicanal. Apollo, Pharow et Clay pour le ciblage et l'enrichissement. Dropcontact pour la vérification des emails. LinkedIn Sales Navigator pour le ciblage. Le choix dépend de votre cible, votre budget et vos intégrations existantes.",
    },
  ],

  // Related services
  relatedServicesTitle: "Pour aller plus loin que la prospection outbound",
  relatedServicesSubtitle:
    "La prospection multicanal remplit votre pipeline. Ces services complètent le dispositif pour convertir plus et mieux.",
  relatedServices: [
    {
      slug: "growth-marketing",
      icon: "TrendingUp",
      title: "Growth Marketing B2B",
      description:
        "La prospection outbound est l'un des canaux d'acquisition que nous activons. Découvrez comment Vizion combine les leviers pour générer une acquisition prévisible et multi-canaux.",
      href: "/services/growth-marketing",
    },
    {
      slug: "sales-enablement",
      icon: "Handshake",
      title: "Activation des Ventes B2B",
      description:
        "La prospection ouvre les portes. L'activation des ventes arme vos commerciaux pour convertir chaque opportunité en client. Découvrez notre approche complète du closing B2B.",
      href: "/services/sales-enablement",
    },
    {
      slug: "deploiement-crm",
      icon: "Database",
      title: "Déploiement CRM",
      description:
        "Vos leads de prospection arrivent. Encore faut-il les suivre, les relancer et les convertir. Nous déployons votre CRM pour que chaque opportunité soit tracée du premier contact au closing.",
      href: "/services/deploiement-crm",
    },
    {
      slug: "strategie-personal-branding",
      icon: "User",
      title: "Stratégie de Personal Branding",
      description:
        "La prospection ouvre des conversations. Une présence LinkedIn forte installe votre crédibilité avant même le premier message. Les deux approches se renforcent mutuellement.",
      href: "/services/strategie-personal-branding",
    },
    {
      slug: "campagnes-publicitaires",
      icon: "Zap",
      title: "Campagnes publicitaires",
      description:
        "Combinez prospection directe et publicité pour multiplier les points de contact avec vos cibles. La notoriété générée par les ads augmente les taux de réponse de votre outreach.",
      href: "/services/campagnes-publicitaires",
    },
  ],

  // CTA intermédiaires
  inlineCTAs: {
    afterTestimonials: {
      text: "Vous voulez un pipeline qui ne dépend plus des bonnes volontés ?",
      buttonText: "Discuter de votre prospection",
      href: "/contact",
    },
    afterProcess: {
      text: "Prêt à construire un système de prospection qui tourne chaque semaine ?",
      buttonText: "Lancer votre projet",
      href: "/contact",
    },
  },

  // CTA final
  ctaTitle: "Votre pipeline commercial ne devrait pas dépendre du hasard",
  ctaDescription:
    "Premier échange sans engagement. Nous analysons votre cible et construisons une stratégie de prospection multicanal adaptée à votre marché.",
  ctaButtonText: "Discuter de votre prospection",
  ctaButtonLink: "/contact",
};
