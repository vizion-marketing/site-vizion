import type { ServiceContent } from "./types";

export const seoContenuOrganique: ServiceContent = {
  slug: "seo-contenu-organique",
  title: "SEO et Contenu Organique",
  icon: "TrendingUp",
  category: "Growth Marketing",
  order: 7,

  // SEO
  metaTitle: "SEO B2B | Attirez vos prospects avec un référencement durable",
  metaDescription:
    "Stratégie SEO B2B complète : audit technique, recherche de mots-clés, contenu organique et netlinking. Générez du trafic qualifié sans dépendre des ads.",
  keywords: [
    "stratégie SEO",
    "stratégie SEO B2B",
    "référencement naturel B2B",
    "agence SEO B2B",
    "audit SEO",
    "SEO technique",
    "contenu organique B2B",
    "netlinking B2B",
    "trafic organique",
    "mots-clés B2B",
    "rédaction SEO",
    "positionnement Google",
    "stratégie SEO PME",
    "référencement naturel entreprise",
  ],

  // Hero
  heroTitle: "Stratégie SEO B2B : faites du trafic organique votre premier canal d'acquisition",
  heroSubtitle:
    "Vous dépendez de la publicité pour générer des leads ? Chez Vizion, nous construisons votre stratégie SEO de A à Z pour les entreprises B2B. Audit technique, recherche de mots-clés, production de contenu, netlinking : chaque action est pensée pour vous positionner durablement sur Google et attirer des prospects qualifiés.",
  heroBadge: "+350% de trafic organique en moyenne",
  heroImage: "/images/services/seo-contenu-organique/hero.avif",

  // Narrative (Le constat)
  constat: {
    surtitre: "Le problème",
    title:
      "Vous investissez en publicité, mais Google ne vous connaît toujours pas.",
    paragraphs: [
      "Google Ads, LinkedIn Ads, sponsoring. Vous payez pour chaque clic, chaque visite, chaque lead. Le jour où vous coupez le budget, le trafic s'arrête. Et vos concurrents, eux, captent le trafic gratuit que vous laissez sur la table.",
    ],
    statements: [
      {
        headline: "Vos concurrents apparaissent en première page, pas vous",
        description:
          "Quand un décideur cherche une solution à son problème, il tombe sur vos concurrents. Votre site est invisible sur les requêtes qui comptent. Chaque jour sans SEO, c'est du trafic qualifié que vous offrez aux autres.",
      },
      {
        headline: "Votre site a des fondations techniques fragiles",
        description:
          "Temps de chargement lents, erreurs d'indexation, structure sémantique absente, maillage interne inexistant. Google ne peut pas référencer correctement un site dont les bases techniques sont bancales.",
      },
      {
        headline: "Vous publiez du contenu sans stratégie de mots-clés",
        description:
          "Vos articles traitent de sujets intéressants, mais pas de ceux que vos prospects recherchent. Sans recherche de mots-clés structurée, votre contenu ne rencontre jamais la demande réelle.",
      },
      {
        headline: "Votre coût d'acquisition ne baisse jamais",
        description:
          "100% de votre trafic dépend de budgets publicitaires. Pas d'effet cumulatif, pas d'actif durable. Chaque mois, vous repartez de zéro. Le SEO est le seul canal qui prend de la valeur avec le temps.",
      },
    ],
  },

  // Solution sticky
  solutionTitle:
    "Chez Vizion, nous construisons une machine à trafic organique qui travaille pour vous",
  solutionImage: "/images/services/seo-contenu-organique/solution.avif",
  solutionItems: [
    {
      title: "Nous auditons vos fondations techniques avant tout.",
      description:
        "Indexation, vitesse, architecture, erreurs, redirections. Nous passons votre site au crible pour identifier et corriger les freins techniques qui empêchent Google de vous référencer correctement. C'est la base de tout.",
    },
    {
      title: "Nous identifions les mots-clés que vos acheteurs recherchent.",
      description:
        "Analyse sémantique, intentions de recherche, volume, difficulté, potentiel de conversion. Nous construisons une cartographie de mots-clés alignée sur votre cycle de vente, pas sur des vanity metrics.",
    },
    {
      title: "Nous produisons du contenu qui se positionne et qui convertit.",
      description:
        "Chaque article est rédigé pour répondre à une intention de recherche précise, avec la profondeur et l'expertise que Google et vos lecteurs attendent. Le contenu sert le SEO et la vente en même temps.",
    },
    {
      title: "Nous développons votre autorité avec un netlinking ciblé.",
      description:
        "Pas de liens achetés en masse. Nous construisons un profil de backlinks qualitatif via des partenariats éditoriaux, du guest blogging et des contenus à forte valeur ajoutée qui attirent naturellement les liens.",
    },
    {
      title: "Nous pilotons la stratégie avec des données, pas des intuitions.",
      description:
        "Positions, trafic, conversions, pages performantes, opportunités manquées. Chaque mois, vous recevez un rapport qui connecte vos efforts SEO à vos résultats commerciaux concrets.",
    },
  ],

  // Scroll title
  scrollTitle: {
    hook: "Bref.",
    phrase: "Chez Vizion, on construit\ndes stratégies SEO...",
    adjectives: ["solides", "durables", "et surtout rentables"],
    showcaseImages: [],
  },

  // Bento featured cards
  bentoCards: {
    sectionTitle: "Les spécificités de notre stratégie SEO pour le B2B",
    sectionDescription:
      "Nous ne faisons pas du SEO généraliste. Chaque stratégie est construite pour les cycles de vente longs du B2B, avec des outils professionnels, une production de contenu experte et une mesure rigoureuse de la performance.",
    image: {
      src: "/images/services/seo-contenu-organique/bento.avif",
      alt: "Tableau de bord SEO et analytics Vizion",
    },
    technology: {
      title: "Les meilleurs outils SEO\ndu marché à votre service.",
      description:
        "Audit technique, recherche de mots-clés, suivi de positions, analyse de backlinks, crawl, analytics. Nous utilisons les outils de référence pour chaque étape de la stratégie SEO. Pas d'approximation, des données fiables pour prendre les bonnes décisions et prioriser les actions à fort impact.",
      logos: [
        "SEMrush",
        "Ahrefs",
        "Screaming Frog",
        "Google Analytics",
        "Google Search Console",
        "Surfer SEO",
        "Majestic",
        "PageSpeed Insights",
      ],
    },
    performance: {
      value: 350,
      suffix: "%",
      label: "Croissance trafic organique",
      description:
        "La croissance moyenne du trafic organique constatée chez nos clients B2B sur les 12 premiers mois d'accompagnement SEO.",
    },
    noTemplate: {
      title: "Chaque stratégie SEO est construite sur mesure pour votre marché",
      description:
        "Pas de checklist générique appliquée à tous les clients. Votre stratégie est définie en fonction de votre secteur, de vos concurrents et des intentions de recherche de vos acheteurs.",
    },
    widgets: {
      title: "Tous les leviers SEO activés pour votre croissance",
      description:
        "Chaque levier est priorisé selon son impact sur votre visibilité et votre génération de leads qualifiés.",
      tags: [
        "Audit technique",
        "Mots-clés B2B",
        "Contenu SEO",
        "Netlinking",
        "SEO local",
      ],
    },
    integrations: {
      title: "Votre SEO est connecté à tous vos outils d'analyse",
      description:
        "Google Analytics, Search Console, CRM, outils de reporting. Chaque donnée SEO est centralisée pour que vous puissiez piloter votre acquisition organique en temps réel.",
      logos: [
        "Google Analytics",
        "Google Search Console",
        "HubSpot",
        "Looker Studio",
        "Salesforce",
        "Notion",
        "Zapier",
        "Slack",
        "Pipedrive",
      ],
    },
    growth: {
      title: "Vous mesurez le ROI réel de chaque euro investi en SEO",
      description:
        "Trafic organique, positions gagnées, leads générés, coût par lead comparé au paid. Chaque mois, vous savez exactement ce que le SEO rapporte à votre entreprise.",
    },
  },

  // Process
  processTitle:
    "Déployer votre stratégie SEO avec Vizion : comment ça se passe ?",
  processSubtitle:
    "Un processus structuré qui combine audit technique, production de contenu et suivi de performance pour des résultats mesurables dès les premiers mois.",
  processSteps: [
    {
      title: "Audit SEO complet",
      description:
        "Nous analysons votre site sous tous les angles : technique (vitesse, indexation, architecture), sémantique (contenu, mots-clés, maillage interne) et autorité (profil de backlinks, domaines référents). Vous repartez avec un diagnostic précis et un plan d'action priorisé par impact.",
      duration: "1 à 2 semaines",
      deliverables: [
        "Audit technique complet",
        "Analyse sémantique",
        "Cartographie de mots-clés",
        "Audit de backlinks",
        "Plan d'action priorisé",
      ],
    },
    {
      title: "Corrections techniques et optimisation on-site",
      description:
        "Nous corrigeons les freins techniques identifiés lors de l'audit : vitesse de chargement, erreurs d'indexation, structure sémantique, balises meta, schema.org, maillage interne. Ces corrections posent les fondations pour que chaque contenu publié soit correctement référencé par Google.",
      duration: "2 à 4 semaines",
      deliverables: [
        "Corrections techniques déployées",
        "Optimisation des balises",
        "Maillage interne restructuré",
        "Schema.org configuré",
        "Rapport de performance technique",
      ],
    },
    {
      title: "Production de contenu SEO",
      description:
        "Nous rédigeons des articles et des pages optimisés pour les mots-clés stratégiques identifiés. Chaque contenu est pensé pour répondre à une intention de recherche précise, avec la profondeur d'analyse nécessaire pour se positionner en première page et convaincre vos lecteurs.",
      duration: "Continu (mensuel)",
      deliverables: [
        "Articles SEO rédigés",
        "Pages piliers optimisées",
        "Cocons sémantiques structurés",
        "Calendrier éditorial SEO",
      ],
    },
    {
      title: "Netlinking et autorité",
      description:
        "Nous développons l'autorité de votre domaine via des partenariats éditoriaux, du guest blogging ciblé et des contenus à forte valeur ajoutée. Chaque lien est acquis de manière qualitative pour renforcer durablement votre positionnement sur les requêtes stratégiques.",
      duration: "Continu (mensuel)",
      deliverables: [
        "Stratégie de netlinking",
        "Partenariats éditoriaux",
        "Guest posts publiés",
        "Suivi du profil de liens",
      ],
    },
    {
      title: "Reporting et optimisation continue",
      description:
        "Chaque mois, nous analysons les performances SEO : positions, trafic organique, pages performantes, opportunités manquées. Les données orientent les prochaines actions pour maximiser le retour sur investissement. Vous recevez un rapport clair, connecté à vos résultats commerciaux.",
      duration: "Mensuel",
      deliverables: [
        "Rapport SEO mensuel",
        "Suivi des positions",
        "Analyse des conversions organiques",
        "Recommandations stratégiques",
        "Ajustement du plan d'action",
      ],
    },
  ],

  // Quality guarantees
  qualityGuarantees: {
    surtitre: "Nos engagements",
    sectionTitle:
      "Pourquoi choisir Vizion\npour votre stratégie SEO B2B ?",
    sectionDescription:
      "Nous ne vendons pas du référencement au volume. Chaque action SEO est pensée pour générer du trafic qualifié qui alimente votre pipeline commercial.",
    cardSurtitre: "Ce que nous garantissons",
    cardTitle: "Des engagements\ncentrés sur le ROI",
    cardDescription:
      "Chaque stratégie SEO est pilotée avec la même rigueur. Pas de promesses de positions garanties, des résultats mesurables.",
    guarantees: [
      {
        icon: "Search",
        title: "Un audit technique exhaustif dès le premier mois",
        description:
          "Indexation, vitesse, architecture, erreurs, maillage. Nous passons votre site au crible avant de produire le moindre contenu. Les fondations techniques sont la condition de tout résultat durable.",
      },
      {
        icon: "BarChart3",
        title: "Un reporting mensuel transparent et actionnable",
        description:
          "Positions, trafic, leads organiques, pages performantes. Chaque mois, vous recevez un rapport qui connecte vos efforts SEO à vos résultats business. Pas de jargon, des données claires.",
      },
      {
        icon: "Shield",
        title: "Des pratiques SEO conformes aux guidelines Google",
        description:
          "Pas de techniques risquées, pas de liens toxiques, pas de sur-optimisation. Nous construisons une autorité durable avec des méthodes qui résistent aux mises à jour algorithmiques.",
      },
    ],
    featureCard: {
      surtitre: "Notre vraie différence ?",
      title: "Un SEO pensé pour le B2B,\npas pour le volume",
      description:
        "Nous ciblons les requêtes qui génèrent des leads qualifiés, pas celles qui gonflent les courbes de trafic. Chaque mot-clé est sélectionné pour son potentiel commercial réel.",
      linkText: "Discuter de votre stratégie SEO",
      linkHref: "/contact",
    },
  },

  // Testimonials
  testimonialsTitle: "Ils nous ont confié leur stratégie SEO",
  testimonialsSubtitle:
    "Consultez les retours d'expérience de dirigeants et responsables marketing qui ont fait appel à Vizion pour développer leur trafic organique B2B.",
  testimonials: [
    {
      quote:
        "Notre trafic organique a été multiplié par 4 en moins d'un an.",
      detail:
        "Avant Vizion, nous étions invisibles sur Google. Leur équipe a repris les fondations techniques, construit une stratégie de mots-clés ciblée et produit du contenu expert chaque mois. Les résultats sont arrivés progressivement, puis de manière exponentielle.",
      author: "Directeur marketing",
      role: "Directeur marketing",
      company: "Client Vizion",
      photo: "/images/services/seo-contenu-organique/testimonials/01.avif",
      rating: 5,
    },
    {
      quote:
        "Le SEO est devenu notre premier canal d'acquisition de leads.",
      detail:
        "Nous dépendions à 100% de Google Ads. Vizion a construit une stratégie SEO qui génère aujourd'hui plus de leads que nos campagnes payantes. Le coût par lead a été divisé par cinq et le flux est régulier, même quand on ne touche à rien.",
      author: "CEO",
      role: "Dirigeant",
      company: "Client Vizion",
      photo: "/images/services/seo-contenu-organique/testimonials/02.avif",
      rating: 5,
    },
    {
      quote:
        "Des résultats concrets, pas des rapports remplis de jargon SEO.",
      detail:
        "Ce que j'apprécie avec Vizion, c'est la clarté des rapports. Chaque mois, je sais exactement combien de leads le SEO a généré, quels contenus performent et quelles actions sont prévues. C'est du concret, pas du bla-bla technique.",
      author: "Responsable digital",
      role: "Responsable digital",
      company: "Client Vizion",
      photo: "/images/services/seo-contenu-organique/testimonials/03.avif",
      rating: 5,
    },
  ],

  // FAQ
  faqTitle: "Des questions sur votre stratégie SEO ?",
  faqs: [
    {
      question: "Combien coûte une stratégie SEO B2B avec Vizion ?",
      answer:
        "Un accompagnement SEO complet (audit, corrections techniques, production de contenu, netlinking) se situe généralement entre 2 500 € et 8 000 € par mois selon l'ambition et la concurrence sur votre marché. L'audit initial peut être réalisé en prestation ponctuelle à partir de 3 000 €. Nous établissons un devis précis après analyse de votre situation.",
    },
    {
      question: "En combien de temps une stratégie SEO produit-elle des résultats ?",
      answer:
        "Les premières améliorations techniques sont visibles dès le premier mois (indexation, vitesse, erreurs corrigées). Les gains de positions et de trafic organique apparaissent généralement entre 3 et 6 mois. Pour des résultats significatifs et durables, comptez 6 à 12 mois d'accompagnement continu.",
    },
    {
      question: "Garantissez-vous la première page Google ?",
      answer:
        "Non, et méfiez-vous de ceux qui le promettent. Google évalue plus de 200 facteurs de classement et ses algorithmes évoluent constamment. Ce que nous garantissons, c'est une méthodologie rigoureuse, des actions conformes aux guidelines Google et un reporting transparent qui vous montre exactement où vous en êtes.",
    },
    {
      question: "Stratégie SEO ou publicité en ligne : quelle approche privilégier ?",
      answer:
        "La publicité (Google Ads, LinkedIn Ads) génère du trafic tant que vous payez. Le SEO construit un actif durable qui prend de la valeur avec le temps. Un article bien positionné continue de générer des leads pendant des années sans coût supplémentaire. Les deux approches sont complémentaires, mais seul le SEO offre un effet cumulatif.",
    },
    {
      question: "Produisez-vous aussi le contenu ou uniquement la stratégie ?",
      answer:
        "Nous proposons les deux. La stratégie seule (audit, mots-clés, plan d'action) convient aux entreprises qui ont des ressources rédactionnelles en interne. L'accompagnement complet inclut la production de contenu SEO mensuelle par nos rédacteurs spécialisés B2B. C'est l'option la plus efficace pour des résultats rapides.",
    },
    {
      question: "Le SEO fonctionne-t-il pour tous les secteurs B2B ?",
      answer:
        "Oui, à condition d'adapter la stratégie au volume de recherche et à la concurrence de votre secteur. Certains marchés de niche ont peu de volume mais une intention d'achat très forte. D'autres sont très concurrentiels et nécessitent une stratégie de contenu ambitieuse. Nous adaptons l'approche à votre réalité.",
    },
    {
      question: "Comment suivez-vous les performances SEO ?",
      answer:
        "Nous utilisons Google Analytics, Google Search Console, SEMrush et Ahrefs pour suivre vos positions, votre trafic organique, vos pages performantes et votre profil de liens. Chaque mois, vous recevez un rapport clair avec les indicateurs clés, les actions réalisées et les recommandations pour le mois suivant.",
    },
  ],

  // Related services
  relatedServicesTitle: "Vous voulez aller plus loin que le SEO ?",
  relatedServicesSubtitle:
    "Un bon référencement, c'est le socle. Ces services complémentaires accélèrent votre croissance organique.",
  relatedServices: [
    {
      slug: "creation-refonte-site-web",
      icon: "Globe",
      title: "Création ou Refonte de Site Web",
      description:
        "Votre SEO ne peut pas performer sur un site aux fondations fragiles. Nous concevons des sites web B2B rapides, bien structurés et pensés pour le référencement naturel dès la conception.",
      href: "/services/creation-refonte-site-web",
    },
    {
      slug: "creation-contenu-b2b",
      icon: "PenTool",
      title: "Création de Contenu B2B",
      description:
        "Le SEO attire le trafic, le contenu le convertit. Nous produisons des articles, livres blancs et case studies qui se positionnent sur Google et font avancer vos prospects dans le cycle de vente.",
      href: "/services/seo-contenu-organique",},
    {
      slug: "audit-marketing",
      icon: "ClipboardList",
      title: "Audit Marketing",
      description:
        "Avant d'investir en SEO, identifiez vos leviers prioritaires. Notre audit marketing analyse l'ensemble de votre dispositif digital pour prioriser les actions à plus fort impact.",
      href: "/services/audit-marketing",},
  ],

  // CTA intermédiaires
  inlineCTAs: {
    afterTestimonials: {
      text: "Vous voulez développer votre trafic organique ?",
      buttonText: "Discuter de votre stratégie SEO",
      href: "/contact",
    },
    afterProcess: {
      text: "Prêt à faire de Google votre premier canal d'acquisition ?",
      buttonText: "Lancer votre projet SEO",
      href: "/contact",
    },
  },

  // CTA final
  ctaTitle: "Votre trafic organique mérite de travailler pour vous",
  ctaDescription:
    "Premier échange sans engagement. Nous analysons votre visibilité SEO actuelle et identifions les opportunités prioritaires.",
  ctaButtonText: "Discuter de votre stratégie SEO",
  ctaButtonLink: "/contact",
};
