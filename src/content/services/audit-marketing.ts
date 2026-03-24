import type { ServiceContent } from "./types";

export const auditMarketing: ServiceContent = {
  slug: "audit-marketing",
  title: "Audit Marketing",
  icon: "Search",
  category: "Stratégie",
  order: 3,

  // SEO
  metaTitle: "Audit Commercial et Marketing B2B : Diagnostic Complet",
  metaDescription:
    "Audit commercial et marketing B2B : positionnement, acquisition, contenus, outils et conversion. Diagnostic et plan d'action priorisé en 3 semaines.",
  keywords: [
    "audit commercial et marketing",
    "audit marketing B2B",
    "audit commercial B2B",
    "diagnostic commercial et marketing",
    "audit marketing",
    "audit marketing PME",
    "audit performance commerciale et marketing",
    "audit alignement marketing-ventes",
    "audit stratégie commerciale",
    "audit acquisition",
    "diagnostic marketing digital B2B",
    "plan d'action marketing",
    "audit SEO",
    "agence audit marketing",
  ],

  // Hero
  heroTitle: "Audit commercial et marketing : votre dispositif travaille-t-il vraiment pour vos ventes ?",
  heroSubtitle:
    "Vous investissez en marketing depuis des mois, mais les résultats stagnent ? Chez Vizion, nous réalisons un audit commercial et marketing complet de votre dispositif B2B (positionnement, acquisition, contenus, outils, conversion) pour identifier ce qui freine vos performances et vous livrer un plan d'action priorisé.",
  heroBadge: "+50 audits B2B réalisés",
  heroImage: "/images/services/audit-marketing/audit.png",

  // Narrative (Le constat)
  constat: {
    surtitre: "Le problème",
    title:
      "Vous produisez du marketing, mais vous ne savez pas ce qui fonctionne.",
    paragraphs: [
      "Articles de blog, campagnes LinkedIn, refonte du site, emailings. Les actions s'accumulent, mais les leads qualifiés ne suivent pas. Le problème n'est pas le volume d'efforts. C'est l'absence de diagnostic clair.",
    ],
    statements: [
      {
        headline: "Vous multipliez les actions sans savoir lesquelles rapportent",
        description:
          "SEO, publicité, contenu, emailing. Chaque canal consomme du budget et du temps, mais personne dans l'équipe ne peut dire précisément lequel génère vos meilleurs leads. Sans mesure fiable, chaque décision est un pari.",
      },
      {
        headline: "Votre positionnement ne se distingue plus de vos concurrents",
        description:
          "Votre site, vos présentations et vos contenus utilisent les mêmes mots que vos concurrents. Vos prospects ne perçoivent pas de différence claire entre votre offre et celle du marché. Le message s'est dilué au fil du temps.",
      },
      {
        headline: "Vos outils marketing ne communiquent pas entre eux",
        description:
          "CRM d'un côté, outil d'emailing de l'autre, Google Analytics mal configuré. Les données existent, mais elles sont dispersées. Vous n'avez pas de vision consolidée de votre tunnel de conversion ni de vos coûts d'acquisition.",
      },
      {
        headline: "Vous prenez des décisions stratégiques sans données fiables",
        description:
          "Faut-il investir davantage en SEO ou en publicité ? Refaire le site ou produire plus de contenu ? Sans audit structuré, ces arbitrages reposent sur l'intuition. Et l'intuition coûte cher quand le budget est limité.",
      },
    ],
  },

  // Solution sticky
  solutionTitle:
    "Chez Vizion, nous auditons votre dispositif commercial et marketing pour révéler ce qui freine vos performances",
  solutionImage: "/images/services/audit-marketing/solution.avif",
  solutionItems: [
    {
      title: "Nous analysons votre positionnement face au marché.",
      description:
        "Nous étudions votre proposition de valeur, vos messages clés et votre différenciation par rapport à vos concurrents directs. L'objectif est de mesurer si votre positionnement est clair, distinctif et aligné sur les attentes de vos cibles B2B.",
    },
    {
      title: "Nous passons chaque canal d'acquisition au crible.",
      description:
        "SEO, SEA, LinkedIn, emailing, contenu organique. Nous mesurons la contribution réelle de chaque canal à votre pipeline commercial. Vous savez enfin où concentrer vos efforts et votre budget pour maximiser le retour sur investissement.",
    },
    {
      title: "Nous évaluons la qualité et la cohérence de vos contenus.",
      description:
        "Site web, articles de blog, cas clients, présentations commerciales. Nous auditons chaque support pour vérifier qu'il sert un objectif précis dans le parcours d'achat de vos prospects, et qu'il reflète votre expertise.",
    },
    {
      title: "Nous cartographions vos outils et leur interconnexion.",
      description:
        "CRM, marketing automation, analytics, outils de prospection. Nous vérifions que vos outils sont correctement configurés, interconnectés et exploités. Un outil mal paramétré fausse toutes vos décisions.",
    },
    {
      title: "Nous livrons un plan d'action priorisé et chiffré.",
      description:
        "Chaque recommandation est classée par impact potentiel et effort de mise en oeuvre. Vous repartez avec une feuille de route claire, pas un rapport de 80 pages que personne ne lit. Les quick wins sont identifiés pour agir immédiatement.",
    },
  ],

  // Scroll title
  scrollTitle: {
    hook: "Bref.",
    phrase: "Chez Vizion, on réalise\ndes audits marketing...",
    adjectives: ["rigoureux", "actionnables", "et surtout rentables"],
    showcaseImages: [
      "/images/services/audit-marketing/screenshots/01.avif",
      "/images/services/audit-marketing/screenshots/02.avif",
      "/images/services/audit-marketing/screenshots/03.avif",
      "/images/services/audit-marketing/screenshots/04.avif",
      "/images/services/audit-marketing/screenshots/05.avif",
      "/images/services/audit-marketing/screenshots/06.avif",
      "/images/services/audit-marketing/screenshots/07.avif",
      "/images/services/audit-marketing/screenshots/08.avif",
    ],
  },

  // Bento featured cards
  bentoCards: {
    sectionTitle: "Les spécificités de notre audit marketing B2B",
    sectionDescription:
      "Nous ne livrons pas un simple rapport. Chaque audit est un diagnostic complet de votre dispositif marketing : positionnement, acquisition, contenus, outils et conversion. Tout est analysé avec méthode pour déboucher sur des actions concrètes.",
    image: {
      src: "/images/services/audit-marketing/bento.avif",
      alt: "Tableau de bord d'audit marketing Vizion",
    },
    technology: {
      title: "Des outils d'analyse\nprofessionnels, pas des suppositions.",
      description:
        "Nous utilisons les mêmes outils que les directions marketing des entreprises leaders pour mesurer vos performances. Chaque donnée est vérifiée, croisée et contextualisée avant d'être transformée en recommandation. L'audit repose sur des faits, pas sur des impressions.",
      logos: [
        "SEMrush",
        "Google Analytics",
        "Google Search Console",
        "HubSpot",
        "Hotjar",
        "Ahrefs",
        "Screaming Frog",
        "Matomo",
      ],
    },
    performance: {
      value: 50,
      suffix: "+",
      label: "Points audités",
      description:
        "Chaque audit couvre plus de 50 points de contrôle répartis sur 6 axes : positionnement, acquisition, contenus, SEO, outils et conversion.",
    },
    noTemplate: {
      title: "Un diagnostic personnalisé, pas un template appliqué à tous",
      description:
        "Chaque entreprise a un contexte, un marché et des enjeux différents. Notre grille d'audit s'adapte à votre secteur, votre maturité marketing et vos objectifs commerciaux.",
    },
    widgets: {
      title: "Six axes d'audit pour couvrir tout votre dispositif",
      description:
        "Chaque axe est évalué indépendamment pour identifier les forces et les faiblesses de votre marketing avec précision.",
      tags: [
        "Positionnement",
        "Acquisition",
        "Contenus",
        "SEO technique",
        "Outils et data",
      ],
    },
    integrations: {
      title: "Nous auditons tous les outils de votre écosystème marketing",
      description:
        "CRM, marketing automation, analytics, emailing, prospection. Nous vérifions la configuration, l'usage et l'interconnexion de chaque outil pour garantir la fiabilité de vos données.",
      logos: [
        "HubSpot",
        "Salesforce",
        "Pipedrive",
        "Google Analytics",
        "Mailchimp",
        "Brevo",
        "LinkedIn Ads",
        "Google Ads",
        "Zapier",
      ],
    },
    growth: {
      title: "Un suivi post-audit pour mesurer l'impact des actions",
      description:
        "L'audit ne s'arrête pas au rapport. Nous proposons un suivi à 3 mois pour mesurer la mise en oeuvre des recommandations et ajuster les priorités selon les premiers résultats obtenus.",
    },
  },

  // Process
  processTitle: "Un audit commercial et marketing avec Vizion : comment ça se passe ?",
  processSubtitle:
    "Un processus structuré en 5 étapes pour passer du diagnostic aux actions concrètes. Chaque étape produit des livrables exploitables immédiatement.",
  processSteps: [
    {
      title: "Cadrage et collecte des données",
      description:
        "Nous commençons par un entretien de cadrage avec vos équipes marketing et commerciales. Nous recueillons vos objectifs, vos KPIs actuels et vos accès aux outils (analytics, CRM, plateformes publicitaires). Cette étape permet de cibler l'audit sur vos enjeux réels, pas sur une grille générique.",
      duration: "2 à 3 jours",
      deliverables: [
        "Brief de cadrage",
        "Grille d'audit personnalisée",
        "Liste des accès collectés",
        "Objectifs et KPIs définis",
      ],
    },
    {
      title: "Analyse du positionnement et des messages",
      description:
        "Nous étudions votre proposition de valeur, vos supports de communication et votre différenciation face aux concurrents. Chaque message est évalué selon sa clarté, sa pertinence pour vos cibles et sa capacité à déclencher une prise de contact. Les écarts entre votre positionnement déclaré et perçu sont documentés.",
      duration: "3 à 4 jours",
      deliverables: [
        "Analyse concurrentielle",
        "Cartographie des messages",
        "Évaluation de la proposition de valeur",
        "Benchmark sectoriel",
      ],
    },
    {
      title: "Audit des canaux et des outils",
      description:
        "Nous passons chaque canal d'acquisition au crible : SEO, SEA, LinkedIn, emailing, contenu organique. En parallèle, nous auditons la configuration de vos outils (CRM, analytics, automation) et vérifions que les données sont fiables et exploitables pour piloter vos décisions marketing.",
      duration: "4 à 5 jours",
      deliverables: [
        "Analyse canal par canal",
        "Audit SEO technique et sémantique",
        "Audit de configuration CRM",
        "Rapport de tracking et analytics",
        "Cartographie des outils",
      ],
    },
    {
      title: "Synthèse et plan d'action priorisé",
      description:
        "Nous consolidons toutes les analyses en un rapport structuré. Chaque recommandation est classée selon son impact estimé et son effort de mise en oeuvre. Les quick wins sont identifiés pour agir dès la semaine suivante. Le plan d'action est présenté en réunion avec vos équipes.",
      duration: "3 à 4 jours",
      deliverables: [
        "Rapport d'audit complet",
        "Plan d'action priorisé",
        "Matrice impact/effort",
        "Présentation de restitution",
      ],
    },
    {
      title: "Restitution et accompagnement post-audit",
      description:
        "Nous présentons les résultats en réunion avec vos équipes dirigeantes, marketing et commerciales. Chaque recommandation est expliquée et contextualisée. Nous restons disponibles pendant 30 jours pour répondre à vos questions et vous aider à lancer les premières actions identifiées.",
      duration: "1 jour + 30 jours de suivi",
      deliverables: [
        "Réunion de restitution",
        "Support de présentation",
        "Accès au rapport interactif",
        "Suivi post-audit (30 jours)",
      ],
    },
  ],

  // Quality guarantees
  qualityGuarantees: {
    surtitre: "Nos engagements",
    sectionTitle:
      "Pourquoi choisir Vizion\npour votre audit marketing ?",
    sectionDescription:
      "Nous ne livrons pas un rapport théorique. Nous livrons un diagnostic factuel, structuré et opérationnel qui débouche sur des actions concrètes et mesurables pour votre entreprise.",
    cardSurtitre: "Ce que nous garantissons",
    cardTitle: "Des engagements\ncentrés sur l'action",
    cardDescription:
      "Chaque audit est réalisé avec les mêmes standards de rigueur. Pas de constats vagues, des recommandations précises et actionnables.",
    guarantees: [
      {
        icon: "Search",
        title: "Un diagnostic basé sur des données, pas sur des impressions",
        description:
          "Chaque constat est étayé par des données mesurables issues de vos outils. Nous croisons les sources pour garantir la fiabilité de chaque recommandation formulée dans le rapport.",
      },
      {
        icon: "Target",
        title: "Un plan d'action priorisé par impact et par effort",
        description:
          "Vous ne recevez pas une liste de 50 recommandations à traiter dans le désordre. Chaque action est classée, chiffrée et planifiée pour que vous sachiez exactement par où commencer.",
      },
      {
        icon: "Handshake",
        title: "Un accompagnement de 30 jours après la restitution",
        description:
          "L'audit ne s'arrête pas au rapport. Nous restons disponibles pendant un mois pour répondre à vos questions, clarifier les priorités et vous aider à lancer les premières actions.",
      },
    ],
    featureCard: {
      surtitre: "Notre vraie différence ?",
      title: "Un audit pensé pour agir,\npas pour documenter",
      description:
        "Stratèges marketing et analystes travaillent ensemble pour que chaque constat débouche sur une action concrète. Pas de rapport PDF oublié dans un tiroir.",
      linkText: "Demander votre audit marketing",
      linkHref: "/contact",
    },
  },

  // Testimonials
  testimonialsTitle: "Ils nous ont confié l'audit de leur marketing",
  testimonialsSubtitle:
    "Consultez les retours d'expérience de dirigeants et responsables marketing qui ont fait appel à Vizion pour diagnostiquer et restructurer leur dispositif marketing B2B.",
  testimonials: [
    {
      quote:
        "En trois semaines, on a compris pourquoi nos leads stagnaient depuis un an.",
      detail:
        "Vizion a audité notre dispositif marketing de A à Z. Le rapport a mis en lumière des problèmes de tracking que nous ignorions, un positionnement flou face à nos concurrents et des canaux d'acquisition sous-exploités. Le plan d'action nous a permis de restructurer nos priorités immédiatement.",
      author: "Directeur général",
      role: "Directeur général",
      company: "Client Vizion",
      photo: "/images/services/audit-marketing/testimonials/01.avif",
      rating: 5,
    },
    {
      quote:
        "L'audit a révélé que 60% de notre budget allait sur des canaux inefficaces.",
      detail:
        "Nous investissions massivement en publicité sans mesurer correctement les résultats. L'audit Vizion nous a montré, données à l'appui, quels canaux généraient vraiment nos meilleurs leads. Nous avons réalloué le budget et les résultats ont suivi en quelques semaines.",
      author: "Responsable marketing",
      role: "Responsable marketing",
      company: "Client Vizion",
      photo: "/images/services/audit-marketing/testimonials/02.avif",
      rating: 5,
    },
    {
      quote:
        "Le plan d'action est le document le plus utile qu'on ait reçu cette année.",
      detail:
        "Pas un rapport de 100 pages. Un document clair, structuré, avec des priorités, des délais et des résultats attendus pour chaque action. Nous l'utilisons encore aujourd'hui comme feuille de route pour notre équipe marketing.",
      author: "Directrice marketing",
      role: "Directrice marketing",
      company: "Client Vizion",
      photo: "/images/services/audit-marketing/testimonials/03.avif",
      rating: 5,
    },
  ],

  // FAQ
  faqTitle: "Des questions sur l'audit commercial et marketing ?",
  faqs: [
    {
      question: "Combien coûte un audit commercial et marketing ?",
      answer:
        "Un audit marketing complet se situe généralement entre 3 000 € et 7 000 € selon le périmètre (nombre de canaux audités, complexité de l'écosystème d'outils, profondeur de l'analyse concurrentielle). Le budget est défini après un premier échange pour cadrer vos objectifs et le périmètre exact de l'audit.",
    },
    {
      question: "Quel est le délai pour réaliser un audit marketing ?",
      answer:
        "Comptez 2 à 3 semaines entre le cadrage initial et la restitution du rapport. Ce délai inclut la collecte des données, l'analyse des canaux, l'audit des outils et la rédaction du plan d'action. Un suivi de 30 jours est ensuite inclus pour accompagner la mise en oeuvre des premières recommandations.",
    },
    {
      question: "Quels livrables recevons-nous à l'issue de l'audit ?",
      answer:
        "Vous recevez un rapport d'audit complet couvrant les 6 axes analysés, une matrice de priorisation impact/effort, un plan d'action détaillé avec calendrier, un benchmark concurrentiel et un support de présentation pour vos équipes. Chaque livrable est conçu pour être directement exploitable.",
    },
    {
      question: "À qui s'adresse un audit commercial et marketing B2B ?",
      answer:
        "Aux PME et ETI qui investissent en marketing sans visibilité claire sur les résultats. C'est pertinent si vous envisagez un repositionnement, si vos leads stagnent malgré les efforts, si vous changez d'équipe ou d'agence, ou si vous voulez prioriser vos investissements marketing pour les 12 prochains mois.",
    },
    {
      question: "Faut-il donner accès à tous nos outils pour l'audit ?",
      answer:
        "Idéalement oui. Plus nous avons accès à vos données (analytics, CRM, plateformes publicitaires, outils d'emailing), plus l'audit est précis et les recommandations pertinentes. Nous signons un accord de confidentialité et les accès sont restitués à la fin de la mission.",
    },
    {
      question: "L'audit inclut-il la mise en oeuvre des recommandations ?",
      answer:
        "L'audit se concentre sur le diagnostic et le plan d'action. La mise en oeuvre peut être confiée à vos équipes internes, à une agence tierce ou à Vizion dans le cadre d'un accompagnement complémentaire. Nous proposons systématiquement un devis séparé pour l'exécution si vous le souhaitez.",
    },
    {
      question: "Quelle est la différence entre un audit commercial et marketing et un audit SEO ?",
      answer:
        "Un audit SEO se concentre sur le référencement naturel (technique, sémantique, netlinking). Un audit marketing est plus large : il couvre le positionnement, tous les canaux d'acquisition (SEO inclus), les contenus, les outils, la conversion et l'alignement marketing-ventes. C'est un diagnostic global de votre dispositif.",
    },
  ],

  // Related services
  relatedServicesTitle: "Vous voulez aller plus loin après l'audit ?",
  relatedServicesSubtitle:
    "L'audit révèle les priorités. Ces services permettent de passer à l'action sur les axes identifiés.",
  relatedServices: [
    {
      slug: "creation-refonte-site-web",
      icon: "Globe",
      title: "Création ou Refonte de Site Web",
      description:
        "L'audit a révélé que votre site ne convertit pas ? Nous concevons des sites web B2B complets, pensés pour transformer vos visiteurs en leads qualifiés sur chaque page.",
      href: "/services/creation-refonte-site-web",
    },
    {
      slug: "seo-contenu-organique",
      icon: "Search",
      title: "SEO et Contenu Organique",
      description:
        "Votre référencement naturel est sous-exploité ? Nous construisons une stratégie SEO complète pour générer du trafic qualifié sans dépendre uniquement de la publicité payante.",
      href: "/services/audit-marketing",
    },
    {
      slug: "roadmap-strategique",
      icon: "CalendarCheck",
      title: "Roadmap Stratégique",
      description:
        "L'audit a posé le diagnostic. La roadmap transforme les recommandations en feuille de route opérationnelle sur 6 à 12 mois avec budget, KPIs et jalons précis.",
      href: "/services/roadmap-strategique",
    },
  ],

  // CTA intermédiaires
  inlineCTAs: {
    afterTestimonials: {
      text: "Vous voulez savoir ce qui freine vos performances marketing ?",
      buttonText: "Demander votre audit",
      href: "/contact",
    },
    afterProcess: {
      text: "Prêt à prendre des décisions marketing basées sur des données ?",
      buttonText: "Lancer votre audit",
      href: "/contact",
    },
  },

  // CTA final
  ctaTitle: "Votre marketing mérite mieux que des suppositions",
  ctaDescription:
    "Premier échange sans engagement. Nous cadrons ensemble le périmètre de l'audit et les objectifs attendus.",
  ctaButtonText: "Demander votre audit marketing",
  ctaButtonLink: "/contact",
};
