import type { ServiceContent } from "./types";

export const leadNurturing: ServiceContent = {
  slug: "lead-nurturing",
  title: "Lead Nurturing",
  icon: "Mail",
  category: "MARKETING AUTOMATION",
  order: 15,

  // SEO
  metaTitle: "Lead Nurturing B2B : convertir vos prospects",
  metaDescription:
    "Stratégie de lead nurturing B2B pour transformer vos prospects en clients. Séquences emailing personnalisées, scoring comportemental et optimisation.",
  keywords: [
    "lead nurturing",
    "lead nurturing B2B",
    "stratégie lead nurturing",
    "lead nurturing automation",
    "séquence lead nurturing",
    "lead nurturing emailing",
    "agence lead nurturing",
    "lead nurturing HubSpot",
    "scoring leads B2B",
    "nurturing prospects",
    "lead nurturing vs prospection",
    "comment faire du lead nurturing",
    "lead nurturing exemple",
    "coût lead nurturing",
    "lead nurturing pipeline commercial",
  ],

  // Hero
  heroTitle: "Lead nurturing B2B : transformez vos prospects en clients, sans forcer la main.",
  heroSubtitle:
    "Le lead nurturing est le chaînon manquant entre la génération de leads et la signature. Chez Vizion, nous construisons des séquences d'emailing automatisées qui nourrissent la relation dans la durée. Segmentation, personnalisation, scoring : chaque email est calibré pour faire avancer vos prospects vers la décision d'achat.",
  heroBadge: "+120 séquences déployées en B2B",
  heroImage: "/images/services/lead-nurturing/hero.avif",

  // Narrative (Le constat)
  constat: {
    surtitre: "Le problème",
    title:
      "Vous générez des leads, mais la majorité ne se transforme jamais en clients.",
    paragraphs: [
      "Salon, webinaire, téléchargement de livre blanc. Vos leads arrivent, mais ensuite ? Sans séquence de nurturing structurée, la plupart de vos prospects vous oublient avant même d'être prêts à acheter.",
    ],
    statements: [
      {
        headline: "Vos leads refroidissent faute de relances pertinentes",
        description:
          "Un prospect télécharge votre livre blanc, puis plus rien. Pas de relance, pas de contenu complémentaire, pas de signal de maturité. Le lead se refroidit et finit chez un concurrent qui, lui, a maintenu le contact.",
      },
      {
        headline: "Vos commerciaux appellent des prospects qui ne sont pas prêts",
        description:
          "Sans scoring ni qualification, vos équipes de vente perdent du temps sur des leads qui n'ont pas encore mûri. Le résultat : des appels ignorés, des cycles de vente rallongés et un pipeline qui stagne.",
      },
      {
        headline: "Vous envoyez les mêmes emails à tout le monde",
        description:
          "Pas de segmentation, pas de personnalisation. Vos séquences traitent un directeur technique et un responsable achats de la même façon. Le message ne résonne pas, le taux d'ouverture chute et les désabonnements grimpent.",
      },
      {
        headline: "Vous ne savez pas quand un prospect est prêt à acheter",
        description:
          "Sans scoring comportemental, impossible de détecter les signaux d'intérêt. Vos commerciaux n'ont aucune visibilité sur la maturité des leads et ne savent pas quand intervenir au bon moment.",
      },
    ],
  },

  // Solution sticky
  solutionTitle:
    "Notre approche du lead nurturing : des séquences qui transforment vos leads en opportunités qualifiées",
  solutionImage: "/images/services/lead-nurturing/solution.avif",
  solutionItems: [
    {
      title: "Nous cartographions le parcours d'achat de vos cibles.",
      description:
        "Avant d'écrire un seul email, nous analysons vos personas, leurs problématiques et les étapes clés de leur réflexion. Chaque séquence est construite pour accompagner un parcours réel, pas un tunnel théorique.",
    },
    {
      title: "Nous segmentons votre base selon des critères qui comptent.",
      description:
        "Secteur, taille d'entreprise, rôle dans la décision, niveau de maturité. Nous découpons votre base de contacts en segments pertinents pour que chaque email parle à la bonne personne au bon moment.",
    },
    {
      title: "Nous rédigeons des emails qui déclenchent l'engagement.",
      description:
        "Chaque objet, chaque paragraphe et chaque appel à l'action est rédigé pour votre décideur B2B. Pas de newsletters génériques. Des messages ciblés qui apportent de la valeur et poussent vers l'étape suivante.",
    },
    {
      title: "Nous activons un scoring qui alimente vos commerciaux.",
      description:
        "Ouverture, clic, visite de page pricing, téléchargement. Chaque interaction alimente un score de maturité. Quand un lead atteint le seuil, vos commerciaux sont notifiés et interviennent au bon moment.",
    },
    {
      title: "Nous optimisons vos séquences dans la durée.",
      description:
        "Taux d'ouverture, taux de clic, taux de conversion par segment. Nous analysons les performances de chaque email et ajustons les séquences pour améliorer les résultats mois après mois.",
    },
  ],

  // Scroll title
  scrollTitle: {
    hook: "Bref.",
    phrase: "Chez Vizion, on construit\ndes séquences de nurturing...",
    adjectives: ["ciblées", "personnalisées", "et surtout rentables"],
    showcaseImages: [],
  },

  // Bento featured cards
  bentoCards: {
    sectionTitle: "Les spécificités de notre approche du lead nurturing B2B",
    sectionDescription:
      "Nous ne déployons pas des emails en masse. Chaque séquence de nurturing est un dispositif complet : segmentation, rédaction, automatisation, scoring et mesure de performance. Tout est construit pour accélérer votre pipeline.",
    image: {
      src: "/images/services/lead-nurturing/bento.avif",
      alt: "Séquence de lead nurturing B2B Vizion",
    },
    technology: {
      title: "Les meilleures plateformes\nd'emailing à votre service.",
      description:
        "HubSpot, Brevo, Mailchimp, ActiveCampaign. Nous maîtrisons les outils leaders du marché et choisissons la plateforme la plus adaptée à votre volume, votre CRM et votre budget. Si vous avez déjà un outil, nous travaillons avec. Sinon, nous vous recommandons le meilleur choix.",
      logos: [
        "HubSpot",
        "Brevo",
        "Mailchimp",
        "ActiveCampaign",
        "Lemlist",
        "Salesforce",
        "Pipedrive",
        "SendGrid",
      ],
    },
    performance: {
      value: 35,
      suffix: "%",
      label: "Taux d'ouverture moyen",
      description:
        "Nos séquences B2B atteignent des taux d'ouverture deux fois supérieurs aux moyennes du secteur, grâce à la segmentation et la personnalisation.",
    },
    noTemplate: {
      title: "Chaque séquence est rédigée sur mesure pour vos personas B2B",
      description:
        "Pas de template copié-collé. Chaque email est écrit pour votre cible, votre offre et votre cycle de vente. Le ton, le contenu et le timing sont calibrés.",
    },
    widgets: {
      title: "Des séquences pour chaque étape de votre cycle de vente",
      description:
        "Chaque type de séquence répond à un objectif précis dans le parcours d'achat de vos prospects B2B.",
      tags: [
        "Onboarding lead",
        "Nurturing éducatif",
        "Réactivation",
        "Scoring comportemental",
        "Relance commerciale",
      ],
    },
    integrations: {
      title: "Vos séquences sont connectées à tout votre écosystème commercial",
      description:
        "CRM, outil de prospection, plateforme de webinaire, site web. Chaque interaction alimente vos séquences et chaque lead qualifié arrive directement dans le pipeline de vos commerciaux.",
      logos: [
        "HubSpot",
        "Salesforce",
        "Pipedrive",
        "Zapier",
        "Make",
        "Calendly",
        "Slack",
        "Google Sheets",
        "Notion",
      ],
    },
    growth: {
      title: "Vous mesurez l'impact de chaque email sur votre pipeline",
      description:
        "Taux d'ouverture, taux de clic, taux de conversion, revenus attribués. Chaque séquence est pilotée par les données pour améliorer le ROI de vos campagnes dans la durée.",
    },
  },

  // Process
  processTitle: "Déployer votre lead nurturing avec Vizion : comment ça se passe ?",
  processSubtitle:
    "Un processus structuré pour déployer des séquences d'emailing qui nourrissent vos prospects et alimentent votre pipeline commercial.",
  processSteps: [
    {
      title: "Audit et stratégie de nurturing",
      description:
        "Nous auditons votre base de contacts, vos séquences existantes et votre cycle de vente. Nous définissons ensemble les personas prioritaires, les scénarios de nurturing et les objectifs de conversion. Vous repartez avec une feuille de route claire et un calendrier de déploiement.",
      duration: "1 à 2 semaines",
      deliverables: [
        "Audit de la base contacts",
        "Cartographie du parcours d'achat",
        "Stratégie de segmentation",
        "Scénarios de nurturing",
        "Calendrier de déploiement",
      ],
    },
    {
      title: "Rédaction et conception des séquences",
      description:
        "Nous rédigeons chaque email de chaque séquence : objet, contenu, appel à l'action. Le copywriting est adapté à chaque segment et chaque étape du parcours. Nous concevons également les templates visuels alignés sur votre identité de marque.",
      duration: "2 semaines",
      deliverables: [
        "Emails rédigés par séquence",
        "Templates visuels",
        "Logique de scoring",
        "Règles de segmentation",
      ],
    },
    {
      title: "Paramétrage et automatisation",
      description:
        "Nous configurons les séquences dans votre plateforme d'emailing : triggers, conditions, délais, scoring. Chaque workflow est testé en conditions réelles avant le lancement. Les intégrations CRM sont vérifiées pour que chaque lead qualifié arrive au bon endroit.",
      duration: "1 à 2 semaines",
      deliverables: [
        "Workflows configurés",
        "Scoring opérationnel",
        "Intégrations CRM testées",
        "Tests d'envoi validés",
        "Documentation technique",
      ],
    },
    {
      title: "Lancement et optimisation continue",
      description:
        "Mise en production des séquences, monitoring des premiers résultats et ajustements. Nous analysons les performances par segment, par email et par séquence pour optimiser les taux d'ouverture, de clic et de conversion dans la durée.",
      duration: "1 semaine + suivi mensuel",
      deliverables: [
        "Lancement des séquences",
        "Tableau de bord de performance",
        "Rapport d'analyse mensuel",
        "Recommandations d'optimisation",
      ],
    },
  ],

  // Quality guarantees
  qualityGuarantees: {
    surtitre: "Nos engagements",
    sectionTitle:
      "Pourquoi choisir Vizion\npour votre stratégie de lead nurturing ?",
    sectionDescription:
      "Nous ne vous livrons pas des emails. Nous vous livrons un système complet de nurturing, connecté à votre CRM, mesuré et optimisé pour accélérer votre pipeline commercial.",
    cardSurtitre: "Ce que nous garantissons",
    cardTitle: "Des engagements\ncentrés sur la conversion",
    cardDescription:
      "Chaque séquence est conçue avec la même rigueur. Pas de promesses vagues, des résultats mesurables sur votre pipeline.",
    guarantees: [
      {
        icon: "Target",
        title: "Une segmentation qui parle à chaque décideur",
        description:
          "Chaque email est adressé au bon persona, au bon moment, avec le bon message. La segmentation est construite sur des critères métier et comportementaux, pas sur des listes génériques.",
      },
      {
        icon: "LineChart",
        title: "Un scoring qui alimente vos commerciaux en temps réel",
        description:
          "Chaque interaction est mesurée et pondérée. Quand un lead atteint le seuil de maturité, vos équipes de vente sont notifiées automatiquement avec tout le contexte nécessaire.",
      },
      {
        icon: "Shield",
        title: "Une délivrabilité optimisée sur chaque envoi",
        description:
          "SPF, DKIM, DMARC configurés. Base nettoyée, domaine chauffé, taux de bounce surveillé. Vos emails arrivent en boîte de réception, pas en spam.",
      },
    ],
    featureCard: {
      surtitre: "Notre vraie différence ?",
      title: "Le nurturing au service\nde votre stratégie commerciale",
      description:
        "Stratèges marketing et experts CRM travaillent ensemble pour que chaque séquence alimente directement votre pipeline de vente, pas vos métriques de vanité.",
      linkText: "Discuter de votre stratégie",
      linkHref: "/contact",
    },
  },

  // Testimonials
  testimonialsTitle: "Ils nous ont confié leur stratégie de lead nurturing",
  testimonialsSubtitle:
    "Consultez les retours d'expérience de dirigeants et responsables marketing qui ont fait appel à Vizion pour automatiser le nurturing de leurs prospects B2B.",
  testimonials: [
    {
      quote:
        "Nos commerciaux reçoivent des leads chauds sans avoir à les chasser.",
      detail:
        "Vizion a construit un système de nurturing complet pour notre équipe. En 3 mois, le nombre de leads qualifiés transmis aux commerciaux a augmenté de 40%. Le scoring nous permet de concentrer nos efforts sur les prospects vraiment prêts.",
      author: "Directeur commercial",
      role: "Directeur commercial",
      company: "Client Vizion",
      photo: "/images/services/lead-nurturing/testimonials/01.avif",
      rating: 5,
    },
    {
      quote:
        "Le taux d'ouverture de nos séquences dépasse les 35% en moyenne.",
      detail:
        "Avant Vizion, nos emails B2B plafonnaient à 15% d'ouverture. La segmentation et le copywriting personnalisé ont tout changé. Chaque email apporte de la valeur et nos prospects nous répondent spontanément.",
      author: "Responsable marketing",
      role: "Responsable marketing",
      company: "Client Vizion",
      photo: "/images/services/lead-nurturing/testimonials/02.avif",
      rating: 5,
    },
    {
      quote:
        "On sait enfin quand relancer un prospect et avec quel message.",
      detail:
        "Le scoring comportemental mis en place par Vizion nous donne une visibilité claire sur la maturité de nos leads. Nos commerciaux interviennent au bon moment, avec le bon argumentaire, et le taux de transformation a doublé.",
      author: "CEO",
      role: "Dirigeant",
      company: "Client Vizion",
      photo: "/images/services/lead-nurturing/testimonials/03.avif",
      rating: 5,
    },
  ],

  // FAQ
  faqTitle: "Questions fréquentes sur le lead nurturing B2B",
  faqs: [
    {
      question: "Qu'est-ce que le lead nurturing et pourquoi c'est indispensable en B2B ?",
      answer:
        "Le lead nurturing consiste à entretenir la relation avec vos prospects par des séquences d'emails automatisées et personnalisées. En B2B, où le cycle de vente dure plusieurs mois, il permet de rester en tête de vos prospects sans mobiliser vos commerciaux. L'objectif est de faire mûrir chaque lead jusqu'au moment où il est prêt à acheter.",
    },
    {
      question: "Combien coûte une stratégie de lead nurturing B2B ?",
      answer:
        "Un dispositif complet (audit, segmentation, rédaction, configuration, scoring) se situe entre 3 000 € et 8 000 € selon la complexité de votre cycle de vente et le nombre de segments. L'accompagnement mensuel d'optimisation est facturé en complément. Nous établissons un devis précis après le brief initial.",
    },
    {
      question: "Quels outils recommandez-vous pour le lead nurturing B2B ?",
      answer:
        "HubSpot est notre recommandation pour les entreprises qui veulent un outil tout-en-un (CRM + emailing + scoring). Pour des besoins plus spécifiques, nous travaillons aussi avec ActiveCampaign, Brevo ou Lemlist. Le choix dépend de votre volume de contacts, votre CRM existant et votre budget.",
    },
    {
      question: "Combien de temps faut-il pour voir les premiers résultats ?",
      answer:
        "Les premiers indicateurs (taux d'ouverture, taux de clic) sont visibles dès la première semaine d'envoi. L'impact sur le pipeline commercial se mesure généralement après 2 à 3 mois, le temps que les séquences aient nourri suffisamment de leads pour générer des opportunités qualifiées.",
    },
    {
      question: "Quelle est la différence entre le lead nurturing et la prospection par email ?",
      answer:
        "La prospection cible des contacts froids qui ne vous connaissent pas encore. Le nurturing s'adresse à des leads qui ont déjà interagi avec votre entreprise (téléchargement, visite site, salon). L'objectif n'est pas de convaincre de zéro, mais d'accompagner la réflexion jusqu'à la prise de décision.",
    },
    {
      question: "Pouvez-vous travailler avec notre outil d'emailing existant ?",
      answer:
        "Oui. Nous nous adaptons à votre stack technique. Si vous utilisez déjà HubSpot, ActiveCampaign, Brevo, Mailchimp ou un autre outil, nous configurons les séquences directement dans votre plateforme. L'objectif est de renforcer ce qui existe, pas de tout reconstruire.",
    },
    {
      question: "Comment mesurez-vous le ROI du lead nurturing ?",
      answer:
        "Nous suivons les métriques à chaque étape : taux d'ouverture et de clic par séquence, nombre de leads qualifiés transmis aux commerciaux, taux de conversion en opportunité et revenus générés. Un tableau de bord vous donne une visibilité en temps réel sur l'impact de chaque séquence sur votre pipeline.",
    },
  ],

  // Related services
  relatedServicesTitle: "Vous voulez aller plus loin que le lead nurturing ?",
  relatedServicesSubtitle:
    "Le nurturing est un levier puissant. Ces services complémentaires accélèrent vos résultats commerciaux.",
  relatedServices: [
    {
      slug: "deploiement-crm",
      icon: "Settings",
      title: "Déploiement CRM",
      description:
        "Vos séquences de nurturing alimentent un pipeline structuré. Nous déployons et configurons votre CRM pour que chaque lead qualifié soit suivi, attribué et relancé au bon moment par vos commerciaux.",
      href: "/services/lead-nurturing",},
    {
      slug: "creation-contenu-b2b",
      icon: "FileText",
      title: "Création de contenu B2B",
      description:
        "Vos séquences ont besoin de contenu à forte valeur ajoutée : livres blancs, études de cas, articles. Nous créons les ressources qui nourrissent vos emails et crédibilisent votre expertise.",
      href: "/services/creation-contenu-b2b",},
    {
      slug: "creation-workflows",
      icon: "Repeat",
      title: "Création de Workflows",
      description:
        "Le nurturing ne s'arrête pas aux emails. Nous automatisons l'ensemble de vos process marketing et commerciaux pour éliminer les tâches manuelles et connecter tous vos outils.",
      href: "/services/creation-workflows",},
  ],

  // CTA intermédiaires
  inlineCTAs: {
    afterTestimonials: {
      text: "Vous voulez transformer vos leads en clients ?",
      buttonText: "Discuter de votre stratégie",
      href: "/contact",
    },
    afterProcess: {
      text: "Prêt à automatiser votre nurturing B2B ?",
      buttonText: "Lancer votre projet",
      href: "/contact",
    },
  },

  // CTA final
  ctaTitle: "Vos leads méritent mieux que le silence radio",
  ctaDescription:
    "Premier échange sans engagement. Nous auditons vos séquences existantes et identifions les leviers de conversion.",
  ctaButtonText: "Discuter de votre stratégie",
  ctaButtonLink: "/contact",
};
