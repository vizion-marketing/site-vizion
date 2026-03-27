import type { ServiceContent } from "./types";

export const auditSiteWeb: ServiceContent = {
  slug: "audit-site-web",
  title: "Audit de Site Web",
  icon: "SearchCheck",
  category: "Transformation Digitale",
  order: 18,

  // SEO
  metaTitle: "Audit Site Web B2B | Découvrez pourquoi votre site ne convertit pas",
  metaDescription:
    "Audit de site web B2B complet : performance, SEO, UX, conversion et contenu. Identifiez ce qui freine vos résultats avec un plan d'action concret.",
  keywords: [
    "audit site web",
    "audit site internet",
    "audit site web B2B",
    "audit UX",
    "audit SEO technique",
    "audit de performance web",
    "analyse site web",
    "diagnostic site internet",
    "audit conversion site web",
    "optimisation site web",
    "audit ergonomie site",
    "agence audit site web",
    "audit taux de conversion",
    "audit contenu site web",
    "audit accessibilité web",
  ],

  // Hero
  heroTitle: "Audit de site web : votre site freine-t-il votre croissance ?",
  heroSubtitle:
    "Votre site web existe, mais il ne génère pas les résultats attendus ? Chez Vizion, nous auditons votre site sur 5 dimensions (performance, SEO, UX, contenu, conversion) pour identifier précisément ce qui bloque et vous livrer un plan d'action priorisé.",
  heroImage: "/images/services/audit-site-web/hero.avif",

  // Narrative (Le constat)
  constat: {
    surtitre: "Le problème",
    title:
      "Votre site est en ligne depuis des mois. Mais les résultats ne suivent pas.",
    paragraphs: [
      "Vous avez investi dans un site web, parfois plusieurs fois. Pourtant, le trafic stagne, les leads sont rares et vos commerciaux ne s'en servent pas. Le problème n'est pas votre offre, c'est que personne n'a pris le temps de diagnostiquer ce qui ne fonctionne pas.",
    ],
    statements: [
      {
        headline: "Votre site est lent et Google vous pénalise",
        description:
          "Temps de chargement trop longs, images non optimisées, scripts inutiles. Chaque seconde de latence augmente le taux de rebond et fait chuter votre positionnement dans les résultats de recherche. Vos concurrents passent devant.",
      },
      {
        headline: "Vos visiteurs arrivent mais ne convertissent pas",
        description:
          "Vous avez du trafic, mais votre taux de conversion reste au plancher. Le problème est souvent structurel : parcours de navigation confus, CTA invisibles, formulaires trop longs, proposition de valeur mal positionnée.",
      },
      {
        headline: "Votre contenu ne parle pas à vos cibles",
        description:
          "Les pages existent, mais elles ne répondent ni aux questions de vos prospects ni aux intentions de recherche. Résultat : Google ne vous référence pas et vos visiteurs repartent sans avoir compris ce que vous proposez.",
      },
      {
        headline: "Personne ne sait ce qui fonctionne et ce qui ne fonctionne pas",
        description:
          "Pas de tracking fiable, pas de données de conversion, pas de tableaux de bord. Vous prenez des décisions marketing sans savoir ce que fait réellement votre site. Chaque euro investi est un pari aveugle.",
      },
    ],
  },

  // Solution sticky
  solutionTitle:
    "Chez Vizion, nous auditons votre site web pour transformer chaque faiblesse en levier de croissance",
  solutionImage: "/images/services/audit-site-web/solution.avif",
  solutionItems: [
    {
      title: "Nous analysons la performance technique de votre site.",
      description:
        "Temps de chargement, Core Web Vitals, poids des ressources, configuration serveur. Nous passons votre site au crible des standards Google et identifions chaque point de friction qui impacte votre référencement et l'expérience de vos visiteurs.",
    },
    {
      title: "Nous auditons votre référencement naturel page par page.",
      description:
        "Structure sémantique, balises meta, maillage interne, indexation, couverture de mots-clés. Nous évaluons la qualité SEO de chaque page stratégique et identifions les opportunités de positionnement que vous laissez à vos concurrents.",
    },
    {
      title: "Nous évaluons l'expérience utilisateur et les parcours de conversion.",
      description:
        "Navigation, hiérarchie de l'information, lisibilité mobile, placement des CTA, tunnel de conversion. Nous identifions les points de friction qui empêchent vos visiteurs de passer à l'action et les corrections qui auront le plus d'impact.",
    },
    {
      title: "Nous analysons la pertinence de votre contenu pour vos cibles.",
      description:
        "Chaque page est évaluée sous l'angle de vos personas : le contenu répond-il aux bonnes questions, au bon moment du parcours d'achat ? Nous identifions les lacunes éditoriales et les pages à réécrire, fusionner ou supprimer.",
    },
    {
      title: "Nous livrons un plan d'action priorisé par impact et effort.",
      description:
        "Chaque recommandation est classée selon son impact potentiel et sa complexité de mise en place. Vous savez exactement par où commencer, combien cela coûtera et quels résultats attendre. Pas de rapport qui dort dans un tiroir.",
    },
  ],

  // Scroll title
  scrollTitle: {
    hook: "Bref.",
    phrase: "Chez Vizion, on audite\nvotre site web...",
    adjectives: ["en profondeur", "sans complaisance", "et surtout pour agir"],
    showcaseImages: [],
  },

  // Bento featured cards
  bentoCards: {
    sectionTitle: "Les spécificités de notre audit de site web B2B",
    sectionDescription:
      "Nous ne livrons pas un rapport automatisé de 200 pages. Chaque audit est réalisé manuellement par nos experts, contextualisé à votre marché et priorisé selon vos objectifs commerciaux.",
    image: {
      src: "/images/services/audit-site-web/bento.avif",
      alt: "Audit de site web Vizion",
    },
    technology: {
      title: "Des outils professionnels,\npas des scans automatiques.",
      description:
        "Nous combinons les meilleurs outils du marché avec une analyse humaine experte. Les outils automatisés détectent les symptômes, nos experts identifient les causes. Chaque recommandation est validée manuellement et contextualisée à votre secteur et vos objectifs.",
      logos: [
        "Google PageSpeed",
        "Screaming Frog",
        "Semrush",
        "Hotjar",
        "Google Search Console",
        "GTmetrix",
      ],
    },
    performance: {
      value: 120,
      suffix: "+",
      label: "Points de contrôle",
      description:
        "Chaque audit couvre plus de 120 points de contrôle répartis sur les 5 dimensions : performance, SEO, UX, contenu et conversion.",
    },
    noTemplate: {
      title: "Un diagnostic personnalisé, pas un rapport copié-collé",
      description:
        "Chaque audit est contextualisé à votre marché, vos concurrents et vos objectifs. Les recommandations sont spécifiques à votre situation, pas génériques.",
    },
    widgets: {
      title: "5 dimensions d'analyse pour un diagnostic complet",
      description:
        "Chaque dimension est auditée séparément puis croisée avec les autres pour identifier les interdépendances et prioriser les actions.",
      tags: [
        "Performance technique",
        "SEO on-page",
        "UX et parcours",
        "Contenu et messaging",
        "Conversion et tracking",
      ],
    },
    integrations: {
      title: "Votre audit intègre l'analyse de votre stack complète",
      description:
        "Nous auditons aussi la configuration de vos outils de mesure et d'acquisition pour vérifier que tout fonctionne et que vos données sont fiables.",
      logos: [
        "Google Analytics",
        "Google Tag Manager",
        "HubSpot",
        "Hotjar",
        "Google Search Console",
        "Semrush",
        "Ahrefs",
        "Matomo",
        "Plausible",
        "Clarity",
      ],
    },
    growth: {
      title: "Chaque recommandation est chiffrée en impact potentiel",
      description:
        "Nous estimons le gain attendu de chaque correction : trafic, taux de conversion, positionnement. Vous décidez en connaissance de cause, pas à l'aveugle.",
    },
  },

  // Process
  processTitle: "Un audit de site web avec Vizion : comment ça se passe ?",
  processSubtitle:
    "Un processus structuré en 5 étapes pour passer d'un site qui stagne à un plan d'action concret, priorisé et chiffré.",
  processSteps: [
    {
      title: "Cadrage et objectifs",
      description:
        "Nous commençons par comprendre votre contexte : objectifs commerciaux, cibles prioritaires, historique du site, outils en place et problèmes perçus. Ce cadrage permet de concentrer l'audit sur les dimensions les plus impactantes pour votre activité, sans perdre de temps sur des détails secondaires.",
      duration: "1 à 2 jours",
      deliverables: [
        "Brief de cadrage",
        "Objectifs priorisés",
        "Périmètre d'audit validé",
        "Accès outils configurés",
      ],
    },
    {
      title: "Audit technique et performance",
      description:
        "Nous analysons la performance technique de votre site : temps de chargement, Core Web Vitals, structure du code, configuration serveur, compatibilité mobile et accessibilité. Chaque point de friction est documenté avec son impact sur le référencement et l'expérience utilisateur.",
      duration: "2 à 3 jours",
      deliverables: [
        "Rapport Core Web Vitals",
        "Analyse de la performance",
        "Audit d'accessibilité",
        "Recommandations techniques",
      ],
    },
    {
      title: "Audit SEO et contenu",
      description:
        "Nous auditons le référencement de chaque page stratégique : balises, structure sémantique, maillage interne, couverture de mots-clés et qualité du contenu. Nous croisons ces données avec l'analyse de vos concurrents pour identifier les opportunités de positionnement manquées.",
      duration: "3 à 4 jours",
      deliverables: [
        "Audit SEO page par page",
        "Analyse de la concurrence",
        "Cartographie des mots-clés",
        "Recommandations éditoriales",
      ],
    },
    {
      title: "Audit UX et conversion",
      description:
        "Nous analysons les parcours de navigation, le placement des CTA, les tunnels de conversion et le comportement des visiteurs. Heatmaps, enregistrements de sessions et analyse des formulaires nous permettent d'identifier précisément où et pourquoi vos visiteurs décrochent.",
      duration: "2 à 3 jours",
      deliverables: [
        "Analyse des parcours utilisateurs",
        "Audit des tunnels de conversion",
        "Heatmaps et sessions",
        "Recommandations UX",
      ],
    },
    {
      title: "Synthèse et plan d'action",
      description:
        "Nous consolidons l'ensemble des analyses dans un rapport structuré. Chaque recommandation est classée par impact potentiel et complexité de mise en place. Nous vous présentons le plan d'action en atelier et répondons à toutes vos questions pour vous permettre de passer à l'action immédiatement.",
      duration: "2 à 3 jours",
      deliverables: [
        "Rapport d'audit complet",
        "Plan d'action priorisé",
        "Estimations d'impact",
        "Présentation en atelier",
        "Recommandations budgétaires",
      ],
    },
  ],

  // Quality guarantees
  qualityGuarantees: {
    surtitre: "Nos engagements",
    sectionTitle:
      "Pourquoi choisir Vizion\npour auditer votre site web ?",
    sectionDescription:
      "Nous ne livrons pas un fichier PDF automatisé. Vous recevez un diagnostic expert, contextualisé à votre marché et directement exploitable par vos équipes.",
    cardSurtitre: "Ce que nous garantissons",
    cardTitle: "Des engagements\ncentrés sur l'action",
    cardDescription:
      "Chaque audit est réalisé avec la même rigueur. Pas de rapport générique, des recommandations concrètes et chiffrées.",
    guarantees: [
      {
        icon: "SearchCheck",
        title: "Plus de 120 points de contrôle audités manuellement",
        description:
          "Performance, SEO, UX, contenu, conversion : chaque dimension est passée au crible par nos experts. Aucun scan automatisé ne remplace cette profondeur d'analyse.",
      },
      {
        icon: "BarChart3",
        title: "Chaque recommandation est priorisée par impact business",
        description:
          "Nous classons chaque action selon son impact potentiel et sa complexité. Vous savez exactement par où commencer et quel retour attendre.",
      },
      {
        icon: "Target",
        title: "Un plan d'action directement exploitable par vos équipes",
        description:
          "Le rapport n'est pas un document théorique. Chaque recommandation est formulée comme une tâche précise, avec les ressources nécessaires et le résultat attendu.",
      },
    ],
    featureCard: {
      surtitre: "Notre vraie différence ?",
      title: "Un audit qui sert la vente,\npas la technique pour la technique",
      description:
        "Nos experts marketing et techniques travaillent ensemble pour que chaque recommandation serve vos objectifs commerciaux, pas un score théorique.",
      linkText: "Auditer votre site web",
      linkHref: "/contact",
    },
  },

  // Testimonials
  testimonialsTitle: "Ils nous ont confié l'audit de leur site web",
  testimonialsSubtitle:
    "Consultez les retours d'expérience de dirigeants et responsables marketing qui ont fait appel à Vizion pour diagnostiquer et optimiser leur site Internet.",
  testimonials: [
    {
      quote:
        "On pensait que notre site était correct. L'audit a révélé 40 points d'amélioration prioritaires.",
      detail:
        "Nous avions investi dans une refonte un an plus tôt, mais le trafic ne décollait pas. L'audit Vizion a identifié des problèmes de performance, de maillage interne et de parcours de conversion que nous n'avions jamais détectés. En 3 mois, le trafic organique a progressé de 45%.",
      author: "Directeur marketing",
      role: "Directeur marketing",
      company: "Client Vizion",
      photo: "/images/services/audit-site-web/testimonials/01.avif",
      rating: 5,
    },
    {
      quote:
        "Le plan d'action est tellement clair qu'on a pu briefer notre agence web en une heure.",
      detail:
        "Ce qui nous a convaincus, c'est la priorisation. Chaque recommandation est classée par impact et effort. On a commencé par les quick wins et les résultats étaient visibles en 2 semaines. Le rapport est devenu notre feuille de route pour les 6 mois suivants.",
      author: "CEO",
      role: "Fondateur et CEO",
      company: "Client Vizion",
      photo: "/images/services/audit-site-web/testimonials/02.avif",
      rating: 5,
    },
    {
      quote:
        "Vizion a trouvé en 10 jours ce que notre équipe n'avait pas vu en un an.",
      detail:
        "Notre site générait du trafic mais zéro lead. L'audit a mis en lumière des problèmes de parcours de conversion et de positionnement du messaging. Les corrections recommandées ont doublé notre taux de conversion en formulaire en moins de 2 mois.",
      author: "Responsable digital",
      role: "Responsable digital",
      company: "Client Vizion",
      photo: "/images/services/audit-site-web/testimonials/03.avif",
      rating: 5,
    },
  ],

  // FAQ
  faqTitle: "Des questions sur l'audit de site web ?",
  faqs: [
    {
      question: "Combien coûte un audit de site web B2B ?",
      answer:
        "Un audit complet (5 dimensions) se situe entre 3 000 € et 6 000 € selon la taille du site et la profondeur d'analyse souhaitée. Un audit ciblé sur une seule dimension (SEO ou UX par exemple) démarre à 1 500 €. Le périmètre exact est défini après un premier échange.",
    },
    {
      question: "Quel est le délai pour réaliser un audit de site web ?",
      answer:
        "Comptez 2 à 3 semaines entre le cadrage et la livraison du rapport complet. Ce délai inclut l'analyse des 5 dimensions, la consolidation des résultats et la présentation en atelier. Un audit ciblé peut être livré en 1 semaine.",
    },
    {
      question: "Quels livrables recevons-nous à l'issue de l'audit ?",
      answer:
        "Vous recevez un rapport d'audit structuré couvrant les 5 dimensions (performance, SEO, UX, contenu, conversion), un plan d'action priorisé par impact et effort, des estimations d'impact chiffrées et une présentation en atelier avec votre équipe pour répondre à toutes vos questions.",
    },
    {
      question: "À qui s'adresse l'audit de site web ?",
      answer:
        "Aux entreprises B2B dont le site ne génère pas suffisamment de leads, qui constatent un écart entre leur investissement web et les résultats obtenus, qui préparent une refonte et veulent un diagnostic objectif, ou qui souhaitent prioriser leurs investissements digitaux sur les actions les plus rentables.",
    },
    {
      question: "Quelle est la différence entre un audit automatisé et votre audit ?",
      answer:
        "Les outils automatisés (Lighthouse, Semrush, etc.) détectent des symptômes techniques. Notre audit va plus loin : nous analysons manuellement chaque page stratégique, croisons les données avec votre contexte business et vos concurrents, et priorisons les recommandations par impact commercial. Un scan détecte un problème de vitesse, nous vous disons combien de leads cela vous coûte.",
    },
    {
      question: "Pouvez-vous aussi mettre en place les recommandations ?",
      answer:
        "Oui. Nous pouvons prendre en charge tout ou partie des corrections identifiées dans l'audit : optimisations techniques, refonte de pages, réécriture de contenu, configuration du tracking. Si vous préférez les confier à une autre équipe, le plan d'action est suffisamment détaillé pour être exécuté sans notre intervention.",
    },
    {
      question: "L'audit de site web inclut-il l'analyse des concurrents ?",
      answer:
        "Oui. Nous analysons systématiquement 3 à 5 concurrents directs sur les mêmes critères (SEO, performance, contenu) pour situer votre site par rapport au marché. Cette analyse comparative permet d'identifier les opportunités que vos concurrents exploitent et que vous laissez passer.",
    },
  ],

  // Related services
  relatedServicesTitle: "Vous voulez aller plus loin après l'audit ?",
  relatedServicesSubtitle:
    "L'audit identifie les problèmes. Ces services les résolvent.",
  relatedServices: [
    {
      slug: "creation-refonte-site-web",
      icon: "Globe",
      title: "Création ou Refonte de Site Web",
      description:
        "L'audit a révélé des problèmes structurels ? Nous reconstruisons votre site sur des bases solides, pensé pour convertir vos visiteurs en leads qualifiés.",
      href: "/services/creation-refonte-site-web",
    },
    {
      slug: "seo-contenu-organique",
      icon: "TrendingUp",
      title: "SEO et Contenu Organique",
      description:
        "L'audit a identifié des opportunités SEO manquées ? Nous construisons une stratégie complète pour vous positionner durablement sur Google.",
      href: "/services/seo-contenu-organique",
    },
    {
      slug: "creation-landing-page",
      icon: "LayoutTemplate",
      title: "Création de Landing Pages",
      description:
        "Vos tunnels de conversion sont défaillants ? Nous créons des landing pages B2B calibrées pour transformer votre trafic en leads qualifiés.",
      href: "/services/creation-landing-page",
    },
  ],

  // CTA intermédiaires
  inlineCTAs: {
    afterTestimonials: {
      text: "Vous voulez savoir ce que votre site vous coûte en leads perdus ?",
      buttonText: "Demander un audit",
      href: "/contact",
    },
    afterProcess: {
      text: "Prêt à diagnostiquer ce qui freine votre site web ?",
      buttonText: "Lancer votre audit",
      href: "/contact",
    },
  },

  // CTA final
  ctaTitle: "Votre site mérite un diagnostic à la hauteur de vos ambitions",
  ctaDescription:
    "Premier échange sans engagement. Nous analysons votre site et identifions les axes d'amélioration prioritaires.",
  ctaButtonText: "Demander un audit",
  ctaButtonLink: "/contact",
};
