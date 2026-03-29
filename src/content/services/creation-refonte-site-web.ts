import type { ServiceContent } from "./types";

export const creationRefonteSiteWeb: ServiceContent = {
  slug: "creation-refonte-site-web",
  title: "Création ou Refonte de Site Web",
  icon: "Globe",
  category: "Transformation Digitale",
  order: 1,

  // SEO
  metaTitle: "Création Site Web B2B | Lancez un site qui convertit vos visiteurs",
  metaDescription:
    "Création et refonte de site web B2B sur mesure. Sites vitrine et landing pages pensés pour convertir vos visiteurs en leads. Design, copywriting, SEO.",
  keywords: [
    "création site web B2B",
    "création site internet B2B",
    "refonte site web B2B",
    "agence création site web B2B",
    "site web B2B sur mesure",
    "création site web PME",
    "site vitrine B2B",
    "site web génération de leads",
    "landing page B2B",
    "refonte site internet entreprise",
    "site web qui convertit",
    "combien coûte un site web B2B",
    "création site web SaaS",
    "création site web industriel",
  ],

  // Hero
  heroTitle: "Création de site web B2B : votre site devrait être votre meilleur commercial",
  heroSubtitle:
    "Vous envisagez une création ou une refonte de site web B2B ? Chez Vizion, nous ne construisons pas des sites classiques. Nous construisons de véritables actifs stratégiques, qui facilitent la vente. Architecture, design, copywriting, référencement : tout est millimétré pour servir durablement votre croissance.",
  heroBadge: "+40 sites et landing pages livrés",
  heroImage: "/images/services/site-web/hero.avif",

  // ── Narrative : 3 blocs éditoriaux ──

  constat: {
    surtitre: "Le problème",
    title: "Votre site web est au cœur de votre stratégie digitale. Pourtant…",
    paragraphs: [
      "LinkedIn, salon, bouche-à-oreille. Peu importe comment vos prospects entendent parler de vous. Le réflexe est toujours le même : ils cherchent votre nom et finissent sur votre site.",
    ],
    statements: [
      {
        headline: "Il n'est pas à la hauteur de votre produit",
        description:
          "Vos commerciaux vous le disent, vos clients aussi. Un site daté envoie un signal de méfiance. Et vos prospects ne vous rappelleront jamais pour vous dire pourquoi.",
      },
      {
        headline: "Vous avez du trafic, mais zéro leads",
        description:
          "Votre site attire des visiteurs, mais votre taux de conversion est au plancher. Le problème n'est pas votre offre, c'est le tunnel de vente qui ne guide pas vers l'action.",
      },
      {
        headline: "Vous êtes invisibles sur Google",
        description:
          "Vos concurrents apparaissent en première page, pas vous. Sans fondations SEO solides, votre site est invisible pour ceux qui cherchent ce que vous vendez.",
      },
      {
        headline: "Personne ne comprend ce que vous faites",
        description:
          "Votre offre est claire dans votre tête, mais pas sur votre site. Un prospect qui ne comprend pas votre valeur en 5 secondes ira voir quelqu'un qui l'explique mieux.",
      },
    ],
  },

  // Solution sticky
  solutionTitle: "Chez Vizion, nous créons des sites web qui servent (vraiment) votre croissance",
  solutionImage: "/images/services/site-web/solution.avif",
  solutionItems: [
    {
      title: "Nous pensons marketing avant design.",
      description:
        "Avant de toucher un pixel, nous analysons votre marché, vos cibles et ce qui vous différencie. Le design vient ensuite servir cette stratégie. Pas l'inverse.",
    },
    {
      title: "Nous créons un site qui parle à vos cibles.",
      description:
        "Chaque titre et chaque paragraphe est écrit pour votre acheteur B2B. Nous ne remplissons pas des pages. Nous construisons des argumentaires de vente.",
    },
    {
      title: "Nous intégrons le SEO dès la conception.",
      description:
        "Structure sémantique, maillage interne, performance technique. Le référencement n'est pas un ajout en fin de projet. C'est un pilier de chaque décision.",
    },
    {
      title: "Nous livrons un outil qui aide vraiment vos équipes commerciales.",
      description:
        "Argumentaires structurés, parcours de conversion clairs, ressources téléchargeables. Votre site devient le meilleur allié de vos commerciaux pour convaincre, pas juste informer.",
    },
    {
      title: "Nous restons à vos côtés après la livraison.",
      description:
        "Corrections, évolutions, questions techniques : pendant 3 mois, notre équipe reste disponible pour ajuster ce qui doit l'être. Vous n'êtes jamais livrés puis abandonnés.",
    },
  ],

  // Process
  processTitle: "Création de site web B2B avec Vizion : comment ça se passe ?",
  processSubtitle:
    "Un processus éprouvé qui garantit un site aligné sur vos objectifs commerciaux, livré dans les délais.",
  processSteps: [
    {
      title: "Workshop de positionnement",
      description:
        "Nous commençons par comprendre votre marché, vos cibles et ce qui vous différencie. Vous repartez avec une proposition de valeur claire, un cahier des charges précis, une arborescence validée et les arguments qui feront mouche. Si votre secteur est complexe, nous prévoyons plusieurs sessions.",
      duration: "1 à 2 semaines",
      deliverables: [
        "Audit concurrentiel",
        "Cahier des charges",
        "Personas B2B",
        "Proposition de valeur",
        "Arborescence",
      ],
    },
    {
      title: "Webdesign et direction artistique",
      description:
        "Nous dessinons chaque parcours pour qu'il vous mène à une action. Wireframes, maquettes Figma, charte graphique : tout est pensé pour convertir, pas juste pour être joli. Votre identité visuelle est déclinée sur chaque écran.",
      duration: "2 semaines",
      deliverables: [
        "Wireframes desktop/mobile",
        "Maquettes Figma",
        "Charte graphique",
        "Identité visuelle web",
      ],
    },
    {
      title: "Développement et intégration",
      description:
        "Nous codons votre site au pixel près. Animations, responsive, SEO technique, performance : chaque détail est testé sur tous les écrans avant de vous le montrer.",
      duration: "3 à 4 semaines",
      deliverables: [
        "Site fonctionnel",
        "CMS configuré",
        "SEO technique",
        "Plan de redirections 301",
        "Analytics",
      ],
    },
    {
      title: "Lancement et suivi",
      description:
        "Mise en production, exécution du plan de redirections 301 pour préserver votre trafic existant, indexation Google et configuration des outils de tracking. Nous restons à vos côtés pendant 3 mois pour ajuster ce qui doit l'être.",
      duration: "1 semaine",
      deliverables: [
        "Mise en production",
        "Redirections 301",
        "Rapport de performance",
      ],
    },
  ],

  // Testimonials
  testimonialsTitle: "Ils nous ont confié la création de leur site web",
  testimonialsSubtitle: "Consultez les retours d'expérience de dirigeants et responsables marketing qui ont fait appel à Vizion pour créer ou refondre leur site Internet.",
  testimonials: [
    {
      quote:
        "Ce qui est impressionnant, c'est qu'ils ont toujours une solution.",
      detail:
        "Vizion a déployé deux sites et trois landing pages pour notre groupe de marques liées au sport. Un très bon rapport qualité-prix, une vraie capacité à s'adapter à chaque univers de marque.",
      author: "Thomas Ensenat",
      role: "Dirigeant",
      company: "Groupe Aura",
      photo: "/images/services/site-web/testimonials/01.avif",
      linkedin: "https://www.linkedin.com/in/thomas-ensenat/",
      rating: 5,
    },
    {
      quote:
        "Une landing page où les visiteurs passent 4 minutes ? Vous en rêvez, Vizion l'a fait.",
      detail:
        "Nous leur avons confié la refonte de la landing page Cash Converters. Le résultat est une vraie différence : un parcours engageant, des temps de session que nous n'avions jamais atteints, et un impact mesurable sur les conversions.",
      author: "Adrien Erena",
      role: "Responsable marketing",
      company: "Cash Converters",
      photo: "/images/services/site-web/testimonials/02.avif",
      linkedin: "https://www.linkedin.com/in/adrien-erena/",
      rating: 5,
    },
    {
      quote:
        "Au moindre problème sur notre site, il est réglé dans les 24 heures.",
      detail:
        "Vous cherchez un partenaire réactif ? C'est un confort au quotidien de pouvoir compter sur les équipes de Vizion. La disponibilité et la rapidité d'intervention font toute la différence quand on gère un site à fort trafic.",
      author: "Barthélémy Delcampe",
      role: "Dirigeant",
      company: "Client Vizion",
      photo: "/images/services/site-web/testimonials/03.avif",
      linkedin: "https://www.linkedin.com/in/barthelemydelcampe/",
      rating: 5,
    },
  ],

  // FAQ
  faqTitle: "Des questions sur la création de votre site web B2B ?",
  faqs: [
    {
      question: "Combien coûte la création d'un site web B2B ?",
      answer:
        "Un site vitrine B2B complet (5-8 pages) se situe généralement entre 8 000 € et 20 000 €. Une landing page seule entre 2 000 € et 5 000 €. Le budget dépend de la complexité, du nombre de pages et des fonctionnalités spécifiques. Nous établissons un devis précis après le brief initial.",
    },
    {
      question: "Quel est le délai de livraison ?",
      answer:
        "Comptez 8 à 12 semaines pour un site complet (de la stratégie au lancement). Une landing page peut être livrée en 3 à 4 semaines. Ces délais incluent les phases de validation avec votre équipe.",
    },
    {
      question: "Pourrai-je modifier le contenu moi-même ?",
      answer:
        "Absolument. Chaque site est livré avec un CMS intuitif (Sanity ou WordPress selon le projet) et une formation pour votre équipe. Vous pouvez modifier textes, images et publier des articles en toute autonomie.",
    },
    {
      question: "Le SEO est-il inclus dans la création de site web B2B ?",
      answer:
        "Oui. Le SEO technique est intégré dans chaque projet : structure sémantique, balises meta, schema.org, sitemap, Core Web Vitals optimisés. Pour une stratégie SEO de contenu complète (mots-clés, articles, backlinks), c'est un accompagnement complémentaire.",
    },
    {
      question: "Travaillez-vous avec WordPress ?",
      answer:
        "Nous travaillons principalement avec Next.js + Sanity CMS pour les performances et la flexibilité. Cependant, nous pouvons intervenir sur WordPress si votre écosystème l'exige. Nous recommandons toujours la solution la plus adaptée à vos objectifs.",
    },
    {
      question: "Vous faites aussi la refonte de sites existants ?",
      answer:
        "Oui. La refonte de site web représente la majorité de nos projets. Nous reprenons l'existant, auditons ce qui fonctionne et ce qui freine, puis nous reconstruisons un site sur mesure avec une vraie stratégie de conversion. Redirections, SEO et migration de contenu sont inclus.",
    },
    {
      question: "Quelle est la différence entre un site vitrine B2B et une landing page ?",
      answer:
        "Un site vitrine B2B est un site complet (5 à 15 pages) qui présente votre entreprise, vos offres, vos références et vos contenus. Il sert de socle permanent à votre présence digitale. Une landing page est une page unique, conçue pour convertir sur une action précise (téléchargement, demande de démo, inscription). Les deux sont complémentaires : le site installe la crédibilité, la landing page capte les leads sur des campagnes ciblées.",
    },
  ],

  // Scroll title (interstitial animé)
  scrollTitle: {
    hook: "Bref.",
    phrase: "Chez Vizion, on crée\ndes sites internet...",
    adjectives: ["beaux", "performants", "et surtout utiles"],
    showcaseImages: [
      "/images/services/site-web/screenshots/01.avif",
      "/images/services/site-web/screenshots/02.avif",
      "/images/services/site-web/screenshots/03.avif",
      "/images/services/site-web/screenshots/04.avif",
      "/images/services/site-web/screenshots/05.avif",
      "/images/services/site-web/screenshots/06.avif",
      "/images/services/site-web/screenshots/07.avif",
      "/images/services/site-web/screenshots/08.avif",
      "/images/services/site-web/screenshots/09.avif",
    ],
  },

  // Bento featured cards
  bentoCards: {
    sectionTitle: "Les spécificités de notre agence de création de site web B2B",
    sectionDescription:
      "Nous ne sommes pas une agence web généraliste. Chaque site que nous livrons est pensé pour servir votre stratégie commerciale, du choix technologique jusqu'au dernier pixel de tracking.",
    image: {
      src: "/images/services/site-web/bento.avif",
      alt: "L'équipe Vizion au travail",
    },
    technology: {
      title: "CMS ou code sur-mesure :\nc'est vous qui choisissez.",
      description:
        "Un site que vos équipes peuvent mettre à jour en autonomie ? Nous nous appuyons sur WordPress. Un site ultra-rapide, animé, avec des fonctionnalités sur mesure ? Nous développons avec les frameworks les plus performants du marché. Dans les deux cas, c'est votre besoin qui dicte la technologie, pas l'inverse.",
      logos: [
        "Next.js",
        "React",
        "WordPress",

        "Sanity",
        "Shopify",
        "HubSpot",
        "Strapi",
        "Figma",
        "Vercel",
      ],
    },
    performance: {
      value: 90,
      suffix: "+",
      label: "Score Google",
      description:
        "Votre performance est garantie. À la livraison, tous les indicateurs sont au vert, et nous veillons à ce qu'ils le restent.",
    },
    noTemplate: {
      title: "Votre site est constitué à 100% sur-mesure par nos designers",
      description:
        "Pas de thème préfabriqué. Chaque site est conçu depuis une page blanche pour refléter votre identité visuelle et vos objectifs.",
    },
    widgets: {
      title: "Nous créons pour vous des widgets et modules exclusifs",
      description:
        "Chaque fonctionnalité est pensée pour votre métier. Pas de plugin générique, du code taillé pour vos cas d'usage.",
      tags: [
        "Chatbot IA",
        "Formulaires interactifs",
        "Calculateur de ROI",
        "Simulateur produit",
        "Prise de RDV",
      ],
    },
    integrations: {
      title: "Votre nouveau site est connecté à tous vos outils existants",
      description:
        "CRM, ERP, outil de facturation, plateforme emailing : votre site s'intègre nativement à votre stack. Pas de ressaisie, pas de friction entre les équipes.",
      logos: [
        "HubSpot",
        "Salesforce",
        "Pipedrive",
        "Zapier",
        "Make",
        "Notion",
        "Stripe",
        "Mailchimp",
        "Slack",
        "Google Sheets",
      ],
    },
    growth: {
      title: "Vous savez précisément ce qui se passe dessus",
      description:
        "Google Tag Manager, Google Analytics, pixels de conversion, événements personnalisés. Nous installons et configurons tous vos outils de growth dès la conception. Chaque visite, chaque clic, chaque formulaire est traçable.",
    },
  },

  // Quality guarantees
  qualityGuarantees: {
    surtitre: "Nos engagements",
    sectionTitle: "Pourquoi choisir Vizion\npour créer ou refondre votre site web ?",
    sectionDescription:
      "Nous ne vous faisons pas de promesses vagues. Vous recevez des engagements concrets, mesurables et documentés, valables sur chaque projet que nous vous livrons.",
    cardSurtitre: "Ce que nous garantissons",
    cardTitle: "Des garanties\nde qualité uniques",
    cardDescription:
      "Chaque projet est piloté avec la même rigueur. Pas de promesses vagues. Des engagements concrets, mesurables et documentés.",
    guarantees: [
      {
        icon: "ClipboardList",
        title: "Nous auditons 50 points avant de vous livrer",
        description:
          "Sécurité, SEO technique, performance, accessibilité, bonnes pratiques : nous passons votre site au crible et vous livrons un rapport ultra-complet pour que vous partiez sur des bases solides.",
      },
      {
        icon: "LineChart",
        title: "Nous vous livrons un tableau de bord en temps réel",
        description:
          "Trafic, conversions, vitesse, SEO : vous gardez un œil sur la performance réelle de votre site à tout moment, sans nous demander un rapport.",
      },
      {
        icon: "Zap",
        title: "Nous vous garantissons un score Google 90+",
        description:
          "Performance, accessibilité, SEO et bonnes pratiques : nous mesurons et validons chaque indicateur avant de vous remettre les clés.",
      },
    ],
    featureCard: {
      surtitre: "Notre vraie différence ?",
      title: "Une coopération unique\nentre stratégie et technique",
      description:
        "Stratèges marketing et développeurs chevronnés travaillent ensemble sur chaque projet, pour que votre site serve vraiment vos objectifs commerciaux.",
      linkText: "Discuter de votre projet",
      linkHref: "/contact",
    },
  },

  // Related services
  relatedServicesTitle: "Vous voulez aller plus loin que votre site web ?",
  relatedServicesSubtitle:
    "Un site performant, c'est le socle. Ces services complémentaires accélèrent vos résultats.",
  relatedServices: [
    {
      slug: "seo-contenu-organique",
      icon: "TrendingUp",
      title: "SEO et Contenu Organique",
      description:
        "Votre site est en ligne, mais vos prospects ne vous trouvent pas. Nous construisons une stratégie SEO complète (technique, contenu, backlinks) pour que Google travaille pour vous.",
      href: "/services/seo-contenu-organique",
    },
    {
      slug: "creation-contenu-b2b",
      icon: "PenTool",
      title: "Création de Contenu B2B",
      description:
        "Un site sans contenu est un commercial muet. Nous créons les articles, les landing pages et les ressources qui attirent vos cibles et les font avancer dans leur parcours d'achat.",
      href: "/services/creation-contenu-b2b",
    },
    {
      slug: "deploiement-crm",
      icon: "Settings",
      title: "Déploiement de CRM",
      description:
        "Chaque formulaire rempli, chaque téléchargement, chaque visite, connectés à votre CRM en temps réel. Nous automatisons le passage du marketing aux ventes pour ne perdre aucun lead.",
      href: "/services/deploiement-crm",
    },
  ],

  // CTA intermédiaires
  inlineCTAs: {
    afterTestimonials: {
      text: "Vous avez un projet de site web en tête ?",
      buttonText: "Discuter de votre projet",
      href: "/contact",
    },
    afterProcess: {
      text: "Prêt pour la refonte de votre site web ?",
      buttonText: "Discuter de votre projet",
      href: "/contact",
    },
  },

  // CTA final
  ctaTitle: "Votre site mérite de travailler pour vous",
  ctaDescription:
    "Premier échange sans engagement. Nous analysons votre site actuel et vos objectifs.",
  ctaButtonText: "Discuter de votre projet",
  ctaButtonLink: "/contact",
};
