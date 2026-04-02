import type { ServiceContent } from "./types";

export const stackAcquisition: ServiceContent = {
  // Identité
  slug: "stack-acquisition",
  title: "Stack d'Acquisition Complète",
  icon: "Layers",
  category: "Transformation Digitale",
  order: 7,

  // SEO
  metaTitle: "Stack d'Acquisition B2B | Connectez vos canaux marketing | Vizion",
  metaDescription:
    "Site web, GTM, Lemlist, ads, lead nurturing, CRM : Vizion déploie votre stack d'acquisition B2B et connecte chaque outil pour que vos canaux génèrent des leads qualifiés.",
  keywords: [
    "stack d'acquisition B2B",
    "stack marketing B2B",
    "outils acquisition B2B",
    "intégration outils marketing",
    "déploiement stack marketing",
    "lead nurturing B2B",
    "outreach B2B outils",
    "campagnes publicitaires B2B",
    "écosystème marketing B2B",
    "automatisation acquisition B2B",
    "connecter outils marketing",
    "GTM B2B",
    "stack commerciale B2B",
    "acquisition multicanal B2B",
  ],

  // Hero
  heroTitle: "Stack d'acquisition B2B : connectez vos outils pour générer des leads",
  heroSubtitle:
    "Vous avez un site, un CRM, des campagnes. Mais chaque outil fonctionne en silo. Chez Vizion, nous déployons et connectons l'ensemble de vos outils d'acquisition pour créer un écosystème cohérent où chaque canal alimente les autres : de la première visite au closing.",
  heroBadge: "+70 entreprises accompagnées",
  heroImage: "/images/services/stack-acquisition/hero.avif",

  // Narrative
  constat: {
    surtitre: "Le problème",
    title: "Vos outils d'acquisition existent. Mais ils ne se parlent pas.",
    paragraphs: [
      "Votre site, votre CRM, vos campagnes LinkedIn et votre outil d'emailing ont chacun été déployés séparément, par des intervenants différents, sans vision d'ensemble. Chaque outil fonctionne. Mais ils ne se parlent pas. Des leads passent entre les mailles, des budgets sont dépensés sans attribution claire, et personne ne sait vraiment quel canal fait vraiment travailler le pipeline.",
    ],
    statements: [
      {
        headline: "Vos leads tombent entre les mailles du filet",
        description:
          "Un prospect clique sur votre pub, visite votre site, télécharge un contenu. Mais comme votre CRM n'est pas connecté, personne ne relance au bon moment. Le lead refroidit et disparaît.",
      },
      {
        headline: "Vous ne savez pas quel canal génère vraiment vos leads",
        description:
          "Sans tracking unifié, impossible de savoir si vos leads viennent de vos campagnes ads, de votre SEO ou de votre outreach. Vous optimisez à l'aveugle et gaspillez du budget.",
      },
      {
        headline: "Votre outreach et vos campagnes ne se renforcent pas",
        description:
          "Votre équipe envoie des séquences Lemlist pendant que vos ads ciblent un persona différent. Des messages incohérents qui affaiblissent votre crédibilité plutôt qu'ils ne la renforcent.",
      },
      {
        headline: "Vous multipliez les outils sans multiplier les résultats",
        description:
          "HubSpot, Lemlist, Google Ads, LinkedIn Campaign Manager, votre site... Plus vous ajoutez d'outils, plus la complexité augmente. Mais vos résultats, eux, stagnent.",
      },
    ],
  },

  // Solution sticky
  solutionTitle: "Chez Vizion, nous déployons une stack d'acquisition où chaque outil renforce les autres",
  solutionImage: "/images/services/stack-acquisition/solution.avif",
  solutionItems: [
    {
      title: "Nous auditons votre stack actuelle avant de toucher quoi que ce soit.",
      description:
        "Nous commençons par cartographier vos outils existants, vos flux de données et vos points de friction. Pas de déploiement précipité : chaque décision repose sur un diagnostic précis de votre situation.",
    },
    {
      title: "Nous connectons vos canaux pour qu'ils se parlent en temps réel.",
      description:
        "GTM, CRM, outil d'emailing, plateforme d'outreach : chaque outil est intégré au suivant. Un clic sur votre pub alimente votre CRM. Une séquence Lemlist se déclenche au bon moment. Rien ne se perd.",
    },
    {
      title: "Nous harmonisons vos messages sur tous les canaux d'acquisition.",
      description:
        "Votre site, vos séquences d'outreach et vos campagnes ads parlent le même langage. Mêmes personas, mêmes arguments, mêmes appels à l'action. La cohérence amplifie l'impact de chaque canal.",
    },
    {
      title: "Nous instrumentons votre stack pour mesurer chaque euro investi.",
      description:
        "GTM, Google Analytics, pixels de conversion, attribution multi-touch : nous configurons un tracking complet pour que vous sachiez précisément quel canal, quel message et quelle audience génèrent vos meilleurs leads.",
    },
    {
      title: "Nous formons vos équipes pour piloter la stack en autonomie.",
      description:
        "Une stack que personne ne comprend est une stack inutile. Nous documentons chaque processus et formons vos équipes pour qu'elles pilotent, ajustent et développent l'écosystème après notre départ.",
    },
  ],

  // Scroll title (interstitiel animé)
  scrollTitle: {
    hook: "Bref.",
    phrase: "Chez Vizion, on branche\nvos outils d'acquisition...",
    adjectives: ["entre eux", "avec méthode", "et surtout pour vendre"],
    showcaseImages: [
      "/images/services/stack-acquisition/screenshots/01.avif",
      "/images/services/stack-acquisition/screenshots/02.avif",
      "/images/services/stack-acquisition/screenshots/03.avif",
      "/images/services/stack-acquisition/screenshots/04.avif",
      "/images/services/stack-acquisition/screenshots/05.avif",
      "/images/services/stack-acquisition/screenshots/06.avif",
      "/images/services/stack-acquisition/screenshots/07.avif",
    ],
  },

  // Bento featured cards
  bentoCards: {
    sectionTitle: "Les spécificités de notre approche stack d'acquisition B2B",
    sectionDescription:
      "Nous ne déployons pas des outils. Nous construisons un écosystème cohérent où chaque canal alimente les autres, chaque signal est exploité et chaque euro investi est traçable.",
    image: {
      src: "/images/services/campagnes-publicitaires/hero.avif",
      alt: "Stack d'acquisition Vizion connectée",
    },
    technology: {
      title: "Les meilleurs outils du marché\nconnectés entre eux.",
      description:
        "Nous ne sommes affiliés à aucun outil. Nous choisissons et connectons les solutions les plus adaptées à votre marché, votre équipe et vos objectifs. Lemlist pour l'outreach, HubSpot pour le CRM, Google Ads et LinkedIn pour les campagnes : chaque brique est choisie pour sa pertinence.",
      logos: [
        "HubSpot",
        "Lemlist",
        "Google Ads",
        "LinkedIn Ads",
        "Google Tag Manager",
        "Zapier",
        "Make",
        "Salesforce",
        "Pipedrive",
        "ActiveCampaign",
      ],
    },
    performance: {
      value: 100,
      suffix: "%",
      label: "des canaux trackés",
      description:
        "Chaque visite, chaque clic, chaque formulaire est traçable. Vous savez précisément d'où viennent vos leads et ce qu'ils coûtent.",
    },
    noTemplate: {
      title: "Votre stack est conçue autour de votre cycle de vente, pas d'un modèle générique",
      description:
        "Chaque écosystème est construit selon votre processus commercial, votre secteur et la maturité de vos équipes. Pas de template, pas de recette toute faite.",
    },
    widgets: {
      title: "Chaque canal de la stack est activé et piloté en cohérence",
      description:
        "Nous activons les canaux pertinents pour votre marché et les pilotons avec un message unifié pour un impact maximal à chaque étape du tunnel.",
      tags: [
        "Site web",
        "SEO",
        "Cold Outreach",
        "Paid Ads",
        "Lead Nurturing",
      ],
    },
    integrations: {
      title: "Votre stack est branchée à vos outils existants dès le premier jour",
      description:
        "CRM, outil de comptabilité, plateforme RH : chaque intégration est documentée pour éviter les doublons et les données perdues entre vos équipes.",
      logos: [
        "HubSpot",
        "Salesforce",
        "Pipedrive",
        "Google Analytics",
        "Lemlist",
        "LinkedIn",
        "Zapier",
        "Make",
        "Slack",
        "Notion",
      ],
    },
    growth: {
      title: "Vous mesurez le ROI de chaque canal d'acquisition en temps réel",
      description:
        "Attribution multi-touch, coût par lead par canal, taux de conversion par étape du tunnel : vous pilotez votre acquisition avec des données, pas des intuitions.",
    },
  },

  // Process
  processTitle: "Stack d'acquisition B2B avec Vizion : comment ça se passe ?",
  processSubtitle:
    "Un processus en 5 phases pour passer d'outils en silo à un écosystème d'acquisition cohérent et mesurable.",
  processSteps: [
    {
      icon: "Search",
      title: "Audit de stack",
      description:
        "Nous cartographions vos outils actuels, vos flux de données et vos points de friction. Chaque canal est évalué : ce qui fonctionne, ce qui bloque, ce qui manque. Vous repartez avec une image claire de votre écosystème actuel et des priorités à traiter.",
      duration: "1 semaine",
      deliverables: [
        "Carte de la stack actuelle",
        "Diagnostic des frictions",
        "Benchmark concurrentiel",
        "Rapport de maturité digitale",
      ],
    },
    {
      icon: "Layout",
      title: "Conception de l'architecture",
      description:
        "Nous concevons l'écosystème cible : quels outils, dans quel ordre, avec quelles intégrations. Chaque décision est justifiée par votre cycle de vente, votre marché et les ressources de votre équipe. Vous validez avant tout déploiement.",
      duration: "1 à 2 semaines",
      deliverables: [
        "Schéma d'architecture",
        "Sélection des outils",
        "Plan d'intégration",
        "Feuille de route priorisée",
      ],
    },
    {
      icon: "Settings",
      title: "Déploiement et connexions",
      description:
        "Nous déployons les outils retenus et les connectons entre eux. GTM configuré et lié à votre CRM, séquences Lemlist synchronisées avec HubSpot, pixels de conversion actifs sur chaque canal : chaque connexion est testée avant de passer à la suivante.",
      duration: "3 à 6 semaines",
      deliverables: [
        "Outils configurés",
        "Intégrations testées",
        "GTM et tracking complet",
        "Séquences d'outreach",
        "Campagnes ads opérationnelles",
      ],
    },
    {
      icon: "BarChart2",
      title: "Lancement et mesure",
      description:
        "Nous activons la stack complète et mettons en place les tableaux de bord de pilotage. Vous suivez en temps réel le nombre de leads par canal, le coût d'acquisition et les taux de conversion à chaque étape du tunnel.",
      duration: "1 à 2 semaines",
      deliverables: [
        "Stack opérationnelle",
        "Tableau de bord centralisé",
        "Rapport J+30",
        "Plan d'optimisation",
      ],
    },
    {
      icon: "RefreshCw",
      title: "Optimisation continue",
      description:
        "Nous analysons les performances chaque mois et ajustons les paramètres : budgets ads, messages d'outreach, séquences de nurturing, parcours de conversion. Une stack d'acquisition ne se déploie pas une fois pour toutes, elle s'optimise en permanence.",
      duration: "En continu",
      deliverables: [
        "Rapport mensuel",
        "Recommandations d'optimisation",
        "A/B tests",
        "Ajustements de budget",
      ],
    },
  ],

  // Quality guarantees
  qualityGuarantees: {
    portraitImage: "/images/services/pitch-decks-argumentaires/hero.avif",
    surtitre: "Nos engagements",
    sectionTitle: "Pourquoi choisir Vizion\npour votre stack d'acquisition ?",
    sectionDescription:
      "Nous ne vendons pas des outils. Nous construisons des écosystèmes qui fonctionnent, avec des engagements mesurables sur chaque projet.",
    cardSurtitre: "Ce que nous garantissons",
    cardTitle: "Des garanties\nde performance concrètes",
    cardDescription:
      "Chaque stack est livrée testée, documentée et pilotable par vos équipes. Pas de boîte noire.",
    guarantees: [
      {
        icon: "Link",
        title: "Chaque outil est connecté et testé avant livraison",
        description:
          "Nous validons chaque intégration avant de vous remettre les accès. Si une connexion ne fonctionne pas, nous la corrigeons avant de passer à la suite.",
      },
      {
        icon: "BarChart",
        title: "Vous disposez d'un tableau de bord de pilotage en temps réel",
        description:
          "Leads par canal, coût d'acquisition, taux de conversion : vous accédez à toutes vos métriques sans nous solliciter pour un rapport.",
      },
      {
        icon: "BookOpen",
        title: "Votre stack est entièrement documentée",
        description:
          "Chaque outil, chaque connexion, chaque processus est documenté. Vos équipes prennent la main sans formation externe à chaque évolution.",
      },
    ],
    featureCard: {
      surtitre: "Notre vraie différence ?",
      title: "Une vision stratégique\net une expertise technique",
      description:
        "Chez Vizion, stratèges et techniciens travaillent ensemble sur chaque stack. La technologie sert la stratégie, pas l'inverse.",
      linkText: "Discuter de votre stack",
      linkHref: "/contact",
    },
  },

  // Testimonials
  testimonialsTitle: "Ils nous ont confié leur stack d'acquisition",
  testimonialsSubtitle:
    "Des dirigeants et responsables marketing qui ont unifié leur écosystème d'acquisition avec Vizion.",
  testimonials: [
    {
      quote: "En 3 mois, nous avons divisé notre coût par lead par deux.",
      detail:
        "Vizion a connecté notre site, nos campagnes LinkedIn et notre CRM HubSpot. Pour la première fois, nous savons exactement d'où viennent nos leads et ce qu'ils coûtent. On a pu réallouer le budget sur les canaux qui convertissent.",
      author: "Maxime Bertrand",
      role: "Directeur Marketing",
      company: "Editeur SaaS B2B",
      photo: "/images/services/stack-acquisition/testimonials/01.avif",
      rating: 5,
    },
    {
      quote: "Notre outreach et nos campagnes se renforcent enfin.",
      detail:
        "Avant Vizion, Lemlist et LinkedIn Ads fonctionnaient en parallèle sans cohérence. Ils ont harmonisé les messages, connecté les outils et mis en place un suivi automatique dans HubSpot. Plus de relances oubliées et des taux d'ouverture en hausse.",
      author: "Sophie Leclerc",
      role: "Head of Growth",
      company: "Scale-up B2B",
      photo: "/images/services/stack-acquisition/testimonials/02.avif",
      rating: 5,
    },
    {
      quote: "On a enfin un tableau de bord qui dit la vérité sur notre acquisition.",
      detail:
        "On avait des données partout mais aucune vision d'ensemble. Vizion a configuré GTM, connecté Google Analytics et nos plateformes ads, et créé un tableau de bord centralisé. On pilote maintenant en temps réel.",
      author: "Julien Moreau",
      role: "Directeur Général",
      company: "PME industrielle B2B",
      photo: "/images/services/stack-acquisition/testimonials/03.avif",
      rating: 5,
    },
  ],

  // FAQ
  faqTitle: "Des questions sur la stack d'acquisition B2B ?",
  faqs: [
    {
      question: "Qu'est-ce qu'une stack d'acquisition B2B ?",
      answer:
        "Une stack d'acquisition est l'ensemble des outils utilisés pour attirer, engager et convertir des prospects en clients. Elle inclut généralement un site web, un ou plusieurs canaux d'acquisition (SEO, ads, outreach), un outil de lead nurturing et un CRM. Ce qui fait la différence, c'est la façon dont ces outils sont connectés et pilotés ensemble.",
    },
    {
      question: "Quels outils intégrez-vous dans une stack d'acquisition ?",
      answer:
        "Nous travaillons avec les outils les plus utilisés en B2B : Google Tag Manager, Google Analytics, HubSpot, Pipedrive, Salesforce, Lemlist, LinkedIn Campaign Manager, Google Ads, ActiveCampaign, Zapier, Make. Nous choisissons les outils en fonction de votre secteur, de vos équipes et de vos objectifs, pas pour vous vendre des licences.",
    },
    {
      question: "Combien coûte le déploiement d'une stack d'acquisition complète ?",
      answer:
        "Le budget dépend du nombre d'outils à déployer, des canaux à activer et de la complexité des intégrations. Nous construisons une proposition adaptée à votre stack et vos objectifs lors d'un premier échange de 30 minutes, sans engagement.",
    },
    {
      question: "Combien de temps faut-il pour déployer une stack d'acquisition ?",
      answer:
        "Comptez 6 à 10 semaines pour un déploiement complet : audit, conception de l'architecture, déploiement des outils, connexions et tests, lancement. Le calendrier dépend de la complexité des intégrations et de la disponibilité de vos équipes.",
    },
    {
      question: "Est-ce adapté si j'ai déjà des outils en place ?",
      answer:
        "Oui. La majorité de nos projets démarre avec une stack existante. Nous auditons ce que vous avez, identifions ce qui fonctionne, corrigeons ce qui bloque et complétons avec les outils manquants. Pas de table rase inutile : nous optimisons l'existant avant de recommander quoi que ce soit.",
      answerLinks: [
        { text: "Nous auditons ce que vous avez", href: "/services/audit-marketing" },
      ],
    },
    {
      question: "Quelle différence avec un intégrateur ou un consultant CRM ?",
      answer:
        "Un intégrateur déploie un outil. Un consultant CRM optimise votre pipeline. Vizion conçoit l'écosystème complet : de la première touchpoint marketing jusqu'au closing. Nous combinons la vision stratégique et l'expertise technique pour que chaque outil serve votre cycle de vente, pas juste qu'il fonctionne.",
    },
    {
      question: "Mes équipes pourront-elles piloter la stack en autonomie ?",
      answer:
        "C'est un prérequis de chaque déploiement. Nous documentons chaque outil, chaque connexion et chaque processus, et formons vos équipes avant de partir. Vous n'êtes pas dépendants de Vizion pour faire tourner votre stack au quotidien.",
    },
  ],

  // Related services
  relatedServicesTitle: "Vous voulez activer chaque canal de votre stack ?",
  relatedServicesSubtitle:
    "Chaque canal peut être activé indépendamment ou dans le cadre d'une stack d'acquisition complète.",
  relatedServices: [
    {
      slug: "growth-marketing",
      icon: "TrendingUp",
      title: "Growth Marketing B2B",
      description:
        "La stack d'acquisition est le coeur de notre approche growth marketing. Découvrez comment Vizion construit et active les canaux d'acquisition adaptés à votre marché B2B.",
      href: "/services/growth-marketing",
    },
    {
      slug: "creation-refonte-site-web",
      icon: "Globe",
      title: "Création ou Refonte de Site Web",
      description:
        "Votre site est la pierre angulaire de votre stack d'acquisition. Nous le construisons pour convertir, pas juste pour exister, et le connectons à chaque canal.",
      href: "/services/creation-refonte-site-web",
    },
    {
      slug: "cold-outreach-prospection",
      icon: "Send",
      title: "Cold Outreach et Prospection",
      description:
        "Lemlist, LinkedIn, séquences multicanal : nous déployons votre moteur d'outreach et l'intégrons à votre stack pour un suivi sans friction vers le closing.",
      href: "/services/cold-outreach-prospection",
    },
    {
      slug: "deploiement-crm",
      icon: "Settings",
      title: "Déploiement de CRM",
      description:
        "Le CRM est le coeur de votre stack. Nous le configurons autour de votre cycle de vente et le connectons à chaque canal d'acquisition pour ne perdre aucun lead.",
      href: "/services/deploiement-crm",
    },
  ],

  // CTA intermédiaires
  inlineCTAs: {
    afterTestimonials: {
      text: "Prêt à connecter vos outils d'acquisition ?",
      buttonText: "Auditer ma stack",
      href: "/contact",
    },
    afterProcess: {
      text: "Vous avez déjà une stack partielle à optimiser ?",
      buttonText: "En discuter avec Vizion",
      href: "/contact",
    },
  },

  // CTA final
  ctaTitle: "Votre acquisition mérite un écosystème, pas des outils en silo",
  ctaDescription:
    "Premier échange sans engagement. Nous auditons votre stack actuelle et identifions les priorités.",
  ctaButtonText: "Auditer ma stack",
  ctaButtonLink: "/contact",
};
