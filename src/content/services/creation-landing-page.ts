import type { ServiceContent } from "./types";

export const creationLandingPage: ServiceContent = {
  slug: "creation-landing-page",
  title: "Création de Landing Page",
  icon: "Layout",
  category: "Marketing Produit",
  order: 2,

  // SEO
  metaTitle: "Création Landing Page B2B | Convertissez vos visiteurs en leads",
  metaDescription:
    "Création de landing page B2B optimisée pour la conversion. Copywriting, design et tracking inclus. Pages de vente et campagnes livrées en 3 semaines.",
  keywords: [
    "création landing page",
    "création landing page B2B",
    "landing page sur mesure",
    "agence landing page",
    "landing page conversion",
    "page de vente B2B",
    "landing page génération de leads",
    "création page d'atterrissage",
    "landing page campagne marketing",
    "optimisation landing page",
    "combien coûte une landing page",
    "landing page SaaS",
    "landing page PME",
    "landing page Google Ads",
  ],

  // Hero
  heroTitle: "Création de landing page : votre prochaine campagne mérite une page qui convertit",
  heroSubtitle:
    "Vous lancez un produit, une offre ou une campagne ? La création d'une landing page dédiée fait toute la différence. Chez Vizion, nous concevons des landing pages B2B pensées pour un seul objectif : transformer vos visiteurs en leads qualifiés. Positionnement, copywriting, design, tracking : chaque élément est calibré pour maximiser votre taux de conversion.",
  heroBadge: "+30 landing pages livrées",
  heroImage: "/images/services/creation-landing-page/hero.avif",

  // Narrative (Le constat)
  constat: {
    surtitre: "Le problème",
    title:
      "Vous investissez dans des campagnes, mais vos pages ne convertissent pas.",
    paragraphs: [
      "Vous investissez pour amener des visiteurs sur votre site. Ils arrivent, regardent, et repartent. Pas parce que votre offre ne tient pas la route, mais parce qu'une page d'accueil n'est pas une page de conversion. Elle n'a pas été conçue pour répondre à une intention précise, guider un regard et déclencher une seule action.",
    ],
    statements: [
      {
        headline: "Vous envoyez du trafic sur votre site, pas sur une page dédiée",
        description:
          "Votre page d'accueil n'est pas une page de conversion. Un visiteur qui arrive via une campagne a besoin d'un message ciblé, d'un parcours clair et d'un seul appel à l'action. Pas d'un menu à 8 entrées.",
      },
      {
        headline: "Votre page parle de vous, pas du problème de votre cible",
        description:
          "Fonctionnalités, historique, équipe. Votre page liste ce que vous faites au lieu d'expliquer ce que votre prospect y gagne. En B2B, un décideur ne convertit que s'il se reconnaît dans le problème posé.",
      },
      {
        headline: "Votre taux de conversion reste sous les 2%",
        description:
          "Vous avez du trafic, mais les formulaires restent vides. Le design ne guide pas le regard, le copywriting ne crée pas d'urgence, et le parcours de conversion est trop long ou trop flou.",
      },
      {
        headline: "Vous ne savez pas ce qui fonctionne et ce qui freine",
        description:
          "Pas de tracking précis, pas de heatmap, pas de test A/B. Vous pilotez vos campagnes sans savoir où vos visiteurs décrochent ni pourquoi ils ne convertissent pas.",
      },
    ],
  },

  // Solution sticky
  solutionTitle:
    "Chez Vizion, nous créons des landing pages qui transforment vos campagnes en pipeline",
  solutionImage: "/images/services/creation-landing-page/solution.avif",
  solutionItems: [
    {
      title: "Nous partons de votre offre et de votre cible, pas d'un template.",
      description:
        "Avant de designer quoi que ce soit, nous analysons votre proposition de valeur, votre persona et le contexte de la campagne. La page est construite pour répondre à une intention précise, pas pour faire joli.",
    },
    {
      title: "Nous écrivons chaque mot pour déclencher l'action.",
      description:
        "Titre, sous-titre, preuve sociale, appel à l'action. Chaque bloc de texte est rédigé selon les principes du copywriting de conversion. Le message est calibré pour votre décideur B2B, pas pour un visiteur générique.",
    },
    {
      title: "Nous designons un parcours qui guide vers la conversion.",
      description:
        "Hiérarchie visuelle, espacement, contraste, direction du regard. Le design n'est pas décoratif, il sert le parcours. Chaque section pousse le visiteur vers l'étape suivante jusqu'au formulaire.",
    },
    {
      title: "Nous intégrons le tracking dès la première ligne de code.",
      description:
        "Google Tag Manager, événements personnalisés, pixels de conversion, scroll depth. Chaque interaction est traçable pour que vous sachiez exactement ce qui fonctionne et ce qui doit être ajusté.",
    },
    {
      title: "Nous optimisons après le lancement, pas juste avant.",
      description:
        "Analyse des données, tests A/B, ajustement du copywriting et du design. Une landing page performante se construit dans la durée. Nous pilotons l'optimisation avec vous pour améliorer le taux de conversion.",
    },
  ],

  // Scroll title
  scrollTitle: {
    hook: "Bref.",
    phrase: "Chez Vizion, on conçoit\ndes landing pages...",
    adjectives: ["ciblées", "persuasives", "et surtout rentables"],
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
    sectionTitle: "Les spécificités de notre création de landing page B2B",
    sectionDescription:
      "Nous ne livrons pas une page isolée. Chaque landing page est un dispositif complet : stratégie de message, design de conversion, intégration technique et mesure de performance. Tout est pensé pour votre campagne.",
    image: {
      src: "/images/services/site-web/hero.avif",
      alt: "Conception d'une landing page Vizion",
    },
    technology: {
      title: "Code sur mesure ou no-code :\nc'est votre campagne qui décide.",
      description:
        "Une landing page rapide pour tester une offre ? Nous utilisons des outils no-code performants. Une page à forte volumétrie avec des animations et un tracking avancé ? Nous développons en Next.js. Dans les deux cas, la technologie sert l'objectif de conversion, pas l'inverse.",
      logos: [
        "Next.js",
        "React",
        "Webflow",
        "Unbounce",
        "Figma",
        "Framer",
        "Vercel",
        "WordPress",
      ],
    },
    performance: {
      value: 95,
      suffix: "+",
      label: "Score PageSpeed",
      description:
        "Chaque landing page est optimisée pour un chargement instantané. Un visiteur qui attend plus de 3 secondes ne convertira jamais.",
    },
    noTemplate: {
      title: "Chaque landing page est conçue sur mesure, sans template",
      description:
        "Pas de thème générique. Chaque page est designée depuis zéro pour votre offre, votre cible et votre campagne. Le résultat est unique et aligné sur votre marque.",
    },
    widgets: {
      title: "Des modules de conversion pensés pour le B2B",
      description:
        "Chaque fonctionnalité interactive est conçue pour faciliter la prise de contact et qualifier le visiteur avant même le premier échange.",
      tags: [
        "Formulaire intelligent",
        "Calculateur de ROI",
        "Prise de RDV",
        "Chatbot qualifiant",
        "Témoignages dynamiques",
      ],
    },
    integrations: {
      title: "Votre landing page est connectée à tout votre écosystème",
      description:
        "Chaque lead capturé arrive directement dans votre CRM, déclenche vos séquences d'emailing et notifie vos commerciaux. Pas de ressaisie, pas de lead perdu.",
      logos: [
        "HubSpot",
        "Salesforce",
        "Pipedrive",
        "Zapier",
        "Make",
        "Mailchimp",
        "Calendly",
        "Slack",
        "Google Sheets",
      ],
    },
    growth: {
      title: "Vous mesurez chaque clic, chaque scroll, chaque conversion",
      description:
        "Google Tag Manager, pixels publicitaires, heatmaps, scroll tracking. Chaque interaction est mesurée pour optimiser vos campagnes et améliorer le taux de conversion dans la durée.",
    },
  },

  // Process
  processTitle:
    "Création de landing page avec Vizion : comment ça se passe ?",
  processSubtitle:
    "Un processus concentré en 4 étapes pour livrer une page de conversion opérationnelle, alignée sur votre campagne et prête à recevoir du trafic.",
  processSteps: [
    {
      title: "Brief stratégique et copywriting",
      description:
        "Nous commençons par comprendre votre offre, votre cible et le contexte de la campagne. Nous rédigeons ensuite le copywriting complet de la page : titre, argumentaire, preuves sociales, appels à l'action. Chaque mot est choisi pour déclencher la conversion chez votre décideur B2B.",
      duration: "1 semaine",
      deliverables: [
        "Brief de campagne",
        "Persona cible",
        "Proposition de valeur",
        "Copywriting complet",
        "Structure de page",
      ],
    },
    {
      title: "Design et maquettage",
      description:
        "Nous concevons le design de la page en suivant les principes de conversion : hiérarchie visuelle, direction du regard, contraste des zones d'action. Maquettes Figma livrées en version desktop et mobile, validées avec votre équipe avant le développement.",
      duration: "1 semaine",
      deliverables: [
        "Wireframe de conversion",
        "Maquette Figma desktop",
        "Maquette Figma mobile",
        "Charte graphique appliquée",
      ],
    },
    {
      title: "Développement et intégrations",
      description:
        "Nous développons la page au pixel près avec un temps de chargement minimal. Formulaires, tracking, intégrations CRM et outils d'emailing sont configurés pour que chaque lead soit capturé et routé automatiquement vers vos équipes commerciales.",
      duration: "1 à 2 semaines",
      deliverables: [
        "Page développée et responsive",
        "Formulaires connectés au CRM",
        "Tracking complet (GTM, pixels)",
        "Tests cross-navigateurs",
      ],
    },
    {
      title: "Lancement et optimisation",
      description:
        "Mise en ligne, vérification du tracking et premiers résultats. Nous analysons les données de conversion dès les premières semaines et proposons des ajustements (copywriting, design, formulaire) pour améliorer les performances dans la durée.",
      duration: "1 semaine + suivi",
      deliverables: [
        "Mise en production",
        "Rapport de performance initial",
        "Recommandations d'optimisation",
        "Tests A/B (optionnel)",
      ],
    },
  ],

  // Quality guarantees
  qualityGuarantees: {
    portraitImage: "/images/services/audit-marketing/hero.avif",
    surtitre: "Nos engagements",
    sectionTitle:
      "Pourquoi choisir Vizion\npour créer votre landing page ?",
    sectionDescription:
      "Nous ne livrons pas une jolie page. Nous livrons un dispositif de conversion complet, mesurable et optimisable, pensé pour générer des leads qualifiés dès la mise en ligne.",
    cardSurtitre: "Ce que nous garantissons",
    cardTitle: "Des engagements\ncentrés sur la conversion",
    cardDescription:
      "Chaque landing page est livrée avec les mêmes standards de qualité. Pas de promesses vagues, des résultats mesurables.",
    guarantees: [
      {
        icon: "Target",
        title: "Un copywriting calibré pour votre décideur B2B",
        description:
          "Chaque titre, chaque argument et chaque appel à l'action est rédigé pour parler directement à votre persona. Pas de texte générique, du message sur mesure.",
      },
      {
        icon: "Zap",
        title: "Un temps de chargement inférieur à 2 secondes",
        description:
          "Performance garantie. Chaque page est optimisée pour un chargement instantané sur tous les appareils, y compris en connexion mobile.",
      },
      {
        icon: "LineChart",
        title: "Un tracking complet livré dès le premier jour",
        description:
          "Événements GTM, pixels publicitaires, suivi des formulaires. Vous mesurez chaque interaction dès la mise en ligne, sans configuration supplémentaire.",
      },
    ],
    featureCard: {
      surtitre: "Notre vraie différence ?",
      title: "Une page pensée pour vendre,\npas pour impressionner",
      description:
        "Stratèges marketing et développeurs travaillent ensemble pour que chaque landing page serve un objectif commercial précis, pas un portfolio créatif.",
      linkText: "Discuter de votre landing page",
      linkHref: "/contact",
    },
  },

  // Testimonials
  testimonialsTitle: "Ils nous ont confié la création de leur landing page",
  testimonialsSubtitle:
    "Consultez les retours d'expérience de dirigeants et responsables marketing qui ont fait appel à Vizion pour concevoir des landing pages B2B performantes.",
  testimonials: [
    {
      quote:
        "Une landing page où les visiteurs passent 4 minutes ? Vizion l'a fait.",
      detail:
        "Nous leur avons confié la refonte de notre landing page franchise. Le résultat est une vraie différence : un parcours engageant, des temps de session que nous n'avions jamais atteints, et un impact mesurable sur les conversions.",
      author: "Adrien Erena",
      role: "Responsable marketing",
      company: "Cash Converters",
      photo: "/images/services/creation-landing-page/testimonials/01.avif",
      linkedin: "https://www.linkedin.com/in/adrien-erena/",
      rating: 5,
    },
    {
      quote:
        "Le taux de conversion a doublé en deux semaines après la mise en ligne.",
      detail:
        "Vizion a repensé notre landing page de génération de leads de A à Z. Le copywriting parle enfin à nos cibles, le formulaire est plus court, et le tracking nous permet de piloter nos campagnes avec précision.",
      author: "Directeur marketing",
      role: "Directeur marketing",
      company: "Client Vizion",
      photo: "/images/services/creation-landing-page/testimonials/02.avif",
      rating: 5,
    },
    {
      quote:
        "Chaque euro investi en publicité est enfin rentabilisé par la page.",
      detail:
        "Avant Vizion, nous envoyions du trafic Google Ads sur notre page d'accueil. Le taux de conversion était ridicule. Leur landing page dédiée a tout changé : le coût par lead a été divisé par trois.",
      author: "CEO",
      role: "Dirigeant",
      company: "Client Vizion",
      photo: "/images/services/creation-landing-page/testimonials/03.avif",
      rating: 5,
    },
  ],

  // FAQ
  faqTitle: "Des questions sur la création de landing page ?",
  faqs: [
    {
      question: "Combien coûte la création d'une landing page B2B ?",
      answer:
        "Le budget d'une landing page dépend de votre objectif de conversion, du niveau de personnalisation et des intégrations requises. Nous n'avons pas de tarif catalogue : tout se construit sur mesure à partir d'un premier échange de 30 minutes, sans engagement.",
    },
    {
      question: "Quel est le délai de livraison d'une landing page ?",
      answer:
        "Comptez 3 à 4 semaines entre le brief stratégique et la mise en ligne. Ce délai inclut le copywriting, le design, le développement et les phases de validation avec votre équipe. Pour les projets urgents, nous pouvons accélérer le calendrier sous certaines conditions.",
    },
    {
      question: "Quelle est la différence entre une landing page et un site web ?",
      answer:
        "Un site web est un écosystème complet avec plusieurs pages, une navigation et des objectifs variés (informer, convaincre, recruter). Une landing page est une page unique, sans navigation, conçue pour un seul objectif de conversion : capturer un lead, déclencher une prise de rendez-vous ou générer un téléchargement.",
    },
    {
      question: "À qui s'adresse la création de landing page B2B ?",
      answer:
        "Aux entreprises B2B qui lancent des campagnes (Google Ads, LinkedIn Ads, emailing), un nouveau produit ou une offre spécifique. C'est particulièrement pertinent quand vous investissez en publicité et que votre taux de conversion ne justifie pas le budget dépensé.",
    },
    {
      question: "Quels livrables recevons-nous avec une landing page ?",
      answer:
        "Vous recevez la page développée et mise en ligne, le copywriting complet, les maquettes Figma (desktop et mobile), le tracking configuré (GTM, pixels, événements), l'intégration CRM et un rapport de performance initial. Tout est documenté et transférable.",
    },
    {
      question: "Pouvez-vous optimiser une landing page existante ?",
      answer:
        "Oui. Nous auditons votre page actuelle (copywriting, design, tracking, parcours de conversion) et identifions les freins à la conversion. Nous pouvons intervenir en optimisation ciblée (ajustement du message, refonte du formulaire, ajout de tracking) ou recommander une refonte complète si nécessaire.",
    },
    {
      question: "Comment mesurez-vous la performance d'une landing page ?",
      answer:
        "Nous suivons le taux de conversion (visiteurs vers leads), le coût par lead, le temps passé sur la page, le taux de scroll et les interactions avec les éléments clés (formulaire, CTA, vidéo). Le tracking est configuré dès la mise en ligne pour que vous ayez une visibilité immédiate sur les résultats.",
    },
  ],

  // Related services
  relatedServicesTitle: "Vous voulez aller plus loin que votre landing page ?",
  relatedServicesSubtitle:
    "Une landing page performante, c'est le point de départ. Ces services accélèrent vos résultats.",
  relatedServices: [
    {
      slug: "growth-marketing",
      icon: "TrendingUp",
      title: "Growth Marketing B2B",
      description:
        "La landing page est l'un des piliers de votre acquisition. Découvrez comment Vizion combine les canaux pour générer un flux de leads qualifiés de façon prévisible.",
      href: "/services/growth-marketing",
    },
    {
      slug: "product-marketing",
      icon: "Rocket",
      title: "Marketing Produit B2B",
      description:
        "Une landing page performante s'appuie sur un positionnement clair. Découvrez comment nous structurons l'ensemble de votre marketing produit B2B.",
      href: "/services/product-marketing",
    },
    {
      slug: "seo-contenu-organique",
      icon: "TrendingUp",
      title: "SEO et Contenu Organique",
      description:
        "Votre landing page capte le trafic payant. Le SEO capte le trafic organique. Nous construisons une stratégie de référencement pour générer des leads sans dépendre uniquement de la publicité.",
      href: "/services/seo-contenu-organique",
    },
  ],

  // CTA intermédiaires
  inlineCTAs: {
    afterTestimonials: {
      text: "Vous avez une campagne à lancer ?",
      buttonText: "Discuter de votre landing page",
      href: "/contact",
    },
    afterProcess: {
      text: "Prêt à transformer votre trafic en leads qualifiés ?",
      buttonText: "Lancer votre projet",
      href: "/contact",
    },
  },

  // CTA final
  ctaTitle: "Votre prochaine campagne mérite mieux qu'une page générique",
  ctaDescription:
    "Premier échange sans engagement. Nous analysons votre besoin et vous proposons une approche sur mesure.",
  ctaButtonText: "Discuter de votre landing page",
  ctaButtonLink: "/contact",
};
