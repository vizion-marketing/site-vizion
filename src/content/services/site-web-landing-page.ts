import type { ServiceContent } from "./types";

export const siteWebLandingPage: ServiceContent = {
  slug: "site-web-landing-page",
  title: "Site Web et Landing Page",
  icon: "Globe",
  category: "ACQUISITION DIGITALE",
  order: 1,

  // SEO
  metaTitle: "Création de Site Web & Landing Page B2B | Vizion",
  metaDescription:
    "Vizion conçoit des sites web et landing pages B2B à forte conversion. Design stratégique, optimisation SEO et parcours utilisateur pensé pour générer des leads qualifiés.",
  keywords: [
    "site web B2B",
    "landing page",
    "création site internet",
    "conversion",
    "génération de leads",
    "design web",
    "UX B2B",
  ],

  // Hero
  heroTitle: "Votre site web devrait être votre meilleur commercial",
  heroSubtitle:
    "C'est pourquoi chez Vizion, nous construisons des sites web pensés pour devenir de véritables actifs stratégiques. Architecture, design, copywriting — tout est millimétré pour éduquer et convaincre vos prospects.",
  heroBadge: "+40 sites et landing pages livrés",
  heroImage: "/images/services/website.png",

  // ── Narrative : 3 blocs éditoriaux ──

  constat: {
    surtitre: "Le constat",
    title: "En B2B, votre site web est votre arme stratégique n°1",
    paragraphs: [
      "Vos prospects ne décrochent pas le téléphone au premier contact. Ils cherchent, comparent, analysent. Votre site est souvent le premier — et parfois le seul — point de contact avant une prise de décision.",
    ],
    statements: [
      {
        headline: "Vos prospects comparent avant de vous contacter",
        description:
          "En B2B, 70% du parcours d'achat se fait en ligne avant le premier appel. Votre site est jugé, comparé et évalué — souvent sans que vous le sachiez.",
      },
      {
        headline: "Plusieurs décideurs, un seul point d'entrée",
        description:
          "Avec des cycles de 3 à 18 mois et un comité de décision complet, votre site doit convaincre un CTO, rassurer un DAF et donner envie à un DG — simultanément.",
      },
      {
        headline: "Votre meilleur commercial travaille 24h/24",
        description:
          "Ce n'est pas une vitrine. C'est un actif stratégique qui fait le travail de qualification, d'éducation et de conversion sans jamais prendre de congés.",
      },
      {
        headline: "Un site daté vous coûte des opportunités",
        description:
          "Chaque visiteur qui repart sans comprendre votre offre en 5 secondes est un prospect que votre concurrent va capter avec un meilleur site.",
      },
    ],
  },

  consequences: {
    surtitre: "Les conséquences",
    title: "Ce que vous perdez chaque jour avec un site qui ne convertit pas",
    paragraphs: [
      "Un site B2B qui ne convertit pas n'est pas neutre — il vous coûte activement des opportunités. Chaque visiteur qui repart sans agir est un prospect que votre concurrent va capter.",
    ],
    highlights: [
      "Vos prospects ne comprennent pas ce que vous faites en 5 secondes — ils partent",
      "Votre expertise réelle est invisible derrière un design daté et un message générique",
      "Vos concurrents avec un meilleur site captent le trafic organique que vous méritez",
      "Vos commerciaux compensent un site faible en sur-expliquant à chaque rendez-vous",
    ],
  },

  promesse: {
    surtitre: "L'approche Vizion",
    title: "Pas un site web. Un système de conversion.",
    paragraphs: [
      "Nous ne construisons pas de jolis sites. Nous architecturons des actifs stratégiques où chaque page a un objectif, chaque section fait avancer le visiteur, et chaque mot est choisi pour convaincre votre cible.",
      "Chaque décideur a son parcours. Un CTO ne lit pas comme un CEO. Nous créons des chemins de navigation et des argumentaires adaptés à chacun de vos interlocuteurs — pour que votre site parle à tout le comité de décision, pas juste au premier contact.",
    ],
    highlights: [
      "Un parcours dédié pour chaque profil de décideur",
      "Du copywriting qui vend, pas qui décrit",
      "Un SEO pensé pour capter vos requêtes business",
      "Des pages qui font le travail commercial avant le premier appel",
    ],
  },

  // Solution sticky (contenu fusionné depuis la promesse)
  solutionTitle: "Pas un site web. Un système de conversion.",
  solutionSubtitle:
    "Nous ne construisons pas de jolis sites. Nous architecturons des actifs stratégiques où chaque page a un objectif, chaque section fait avancer le visiteur, et chaque mot est choisi pour convaincre votre cible.",
  solutionImage: "/images/why-vizion/equipe-vizion.avif",
  solutionItems: [
    {
      title: "Un positionnement avant un design",
      description:
        "Avant de toucher un pixel, on définit votre message, vos cibles et votre avantage concurrentiel. Le design vient servir la stratégie — pas l'inverse.",
    },
    {
      title: "Du copywriting qui vend, pas qui décrit",
      description:
        "Chaque titre, chaque paragraphe, chaque CTA est rédigé pour votre acheteur B2B. On ne remplit pas des pages — on construit des argumentaires de vente.",
    },
    {
      title: "Une architecture pensée pour la conversion",
      description:
        "Chaque page a un objectif mesurable. Le parcours utilisateur est architecturé pour transformer un visiteur curieux en prospect qualifié.",
    },
    {
      title: "Un SEO intégré dès la conception",
      description:
        "Structure sémantique, maillage interne, Core Web Vitals — le référencement n'est pas un add-on, c'est un pilier de chaque décision technique.",
    },
    {
      title: "Un site que vous maîtrisez",
      description:
        "CMS intuitif, formation incluse, documentation complète. Vous publiez, modifiez et faites évoluer votre site sans dépendre d'un développeur.",
    },
  ],

  // Features
  featuresTitle: "Un site pensé comme un outil commercial",
  featuresSubtitle:
    "Chaque page, chaque section, chaque CTA est conçu pour faire avancer le visiteur dans son parcours de décision.",
  features: [
    {
      icon: "Target",
      title: "Architecture de conversion",
      description:
        "Chaque page suit un parcours psychologique précis : attirer l'attention, créer la confiance, lever les objections, déclencher l'action. Pas de design gratuit — chaque pixel a un rôle.",
    },
    {
      icon: "Pencil",
      title: "Copywriting stratégique",
      description:
        "Les textes sont rédigés pour votre cible, pas pour vous. Messages de valeur, preuves sociales, CTAs contextuels — le contenu fait le travail commercial à votre place.",
    },
    {
      icon: "Search",
      title: "SEO technique et sémantique",
      description:
        "Structure technique irréprochable (Core Web Vitals, schema.org, sitemap) combinée à une stratégie de contenu ciblée sur vos requêtes business.",
    },
    {
      icon: "Smartphone",
      title: "Mobile-first et performant",
      description:
        "Plus de 60% du trafic B2B est mobile. Chaque interface est conçue et testée mobile d'abord, avec des temps de chargement inférieurs à 2 secondes.",
    },
    {
      icon: "BarChart3",
      title: "Tracking et analytics intégrés",
      description:
        "Google Analytics 4, événements de conversion, heatmaps — vous savez exactement ce qui fonctionne et ce qui doit être optimisé.",
    },
    {
      icon: "Repeat",
      title: "CMS autonome",
      description:
        "Vous gardez le contrôle. Interface d'administration intuitive pour modifier vos contenus, publier des articles et gérer vos landing pages sans développeur.",
    },
  ],

  // Process
  processTitle: "De la stratégie au lancement en 4 étapes",
  processSubtitle:
    "Un processus éprouvé qui garantit un site aligné sur vos objectifs commerciaux, livré dans les délais.",
  processSteps: [
    {
      title: "Stratégie et positionnement",
      description:
        "Audit de votre marché, personas, parcours d'achat et concurrence. Définition de votre proposition de valeur, hiérarchie des arguments et architecture du site.",
      duration: "2 semaines",
      deliverables: [
        "Audit concurrentiel",
        "Personas B2B",
        "Proposition de valeur",
        "Arborescence",
      ],
    },
    {
      title: "UX et design",
      description:
        "Wireframes, parcours de conversion et direction artistique alignée sur votre positionnement. Design system complet pour garantir la cohérence visuelle.",
      duration: "2 semaines",
      deliverables: [
        "Wireframes desktop/mobile",
        "Maquettes Figma",
        "Design system",
      ],
    },
    {
      title: "Développement",
      description:
        "Intégration pixel-perfect, animations, SEO technique, performance et responsive. Tests cross-browser et cross-device.",
      duration: "3-4 semaines",
      deliverables: [
        "Site fonctionnel",
        "CMS configuré",
        "SEO technique",
        "Analytics",
      ],
    },
    {
      title: "Lancement et optimisation",
      description:
        "Mise en production, redirections, soumission aux moteurs de recherche et suivi post-lancement. Accompagnement pendant 3 mois.",
      duration: "1 semaine",
      deliverables: [
        "Mise en production",
        "Redirections 301",
        "Rapport de performance",
      ],
    },
  ],

  // Testimonials
  testimonials: [
    {
      quote:
        "Vizion a transformé notre site en véritable machine à leads — le ROI est indiscutable.",
      detail:
        "En 3 mois, nous avons triplé nos demandes de contact qualifiées. Le nouveau site fait le travail commercial avant même le premier appel. L'équipe a su comprendre nos enjeux B2B et traduire notre expertise en un parcours qui convertit.",
      author: "Directeur commercial",
      role: "PME industrielle",
      company: "Client Vizion",
      photo: "/images/clients/placeholder.avif",
      rating: 5,
    },
    {
      quote:
        "Un site qui parle enfin à nos vrais décideurs — pas juste une vitrine générique.",
      detail:
        "Avant Vizion, notre site ne reflétait pas notre niveau d'expertise. Aujourd'hui, les directeurs techniques et les DAF trouvent les réponses à leurs questions avant même de nous contacter. Le cycle de vente s'est raccourci de plusieurs semaines.",
      author: "CEO",
      role: "Éditeur SaaS B2B",
      company: "Client Vizion",
      photo: "/images/clients/placeholder.avif",
      rating: 5,
    },
    {
      quote:
        "Notre trafic organique a doublé en 6 mois grâce au SEO intégré dès la conception.",
      detail:
        "Le site précédent était beau mais invisible sur Google. Vizion a repensé toute l'architecture de contenu avec une stratégie SEO dès le brief initial. Les résultats sont concrets : +120% de trafic organique et des leads beaucoup plus qualifiés.",
      author: "Directrice marketing",
      role: "ETI Services B2B",
      company: "Client Vizion",
      photo: "/images/clients/placeholder.avif",
      rating: 5,
    },
  ],

  // FAQ
  faqTitle: "Questions fréquentes",
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
      question: "Le SEO est-il inclus ?",
      answer:
        "Oui. Le SEO technique est intégré dans chaque projet : structure sémantique, balises meta, schema.org, sitemap, Core Web Vitals optimisés. Pour une stratégie SEO de contenu complète (mots-clés, articles, backlinks), c'est un accompagnement complémentaire.",
    },
    {
      question: "Travaillez-vous avec WordPress ?",
      answer:
        "Nous travaillons principalement avec Next.js + Sanity CMS pour les performances et la flexibilité. Cependant, nous pouvons intervenir sur WordPress si votre écosystème l'exige. Nous recommandons toujours la solution la plus adaptée à vos objectifs.",
    },
    {
      question: "Que se passe-t-il après le lancement ?",
      answer:
        "Nous assurons un suivi post-lancement d'1 mois inclus (corrections, ajustements, monitoring). Au-delà, nous proposons des forfaits de maintenance et d'optimisation continue pour faire évoluer votre site avec votre activité.",
    },
  ],

  // Scroll title (interstitial animé)
  scrollTitle: {
    hook: "Bref.",
    phrase: "Chez Vizion, on crée\ndes sites internet...",
    adjectives: ["simples", "performants", "qui convertissent"],
  },

  // Bento featured cards
  bentoCards: {
    featured: {
      title: "Conçu pour convertir,\npas juste pour plaire",
      description:
        "Chaque page, chaque CTA, chaque parcours utilisateur est pensé pour faire avancer votre prospect dans le cycle d'achat.",
    },
    metric: {
      value: 95,
      label: "Score Google",
      description:
        "Performance, accessibilité, SEO — mesurés et maintenus dans la durée.",
    },
    seo: {
      title: "SEO technique intégré dès la conception",
      description:
        "Schema.org, sitemap dynamique, Core Web Vitals, balises sémantiques — rien n'est laissé au hasard.",
    },
    design: {
      title: "Design 100% sur mesure",
      description:
        "Pas de template, pas de thème WordPress. Chaque site est conçu depuis une page blanche pour refléter votre identité.",
    },
    ai: {
      label: "Nouveau — Exclusif France",
      title:
        "Vizion est la première agence en France à proposer des sites 100% générés par IA — sans compromis sur la qualité.",
      description:
        "En plus du développement traditionnel, nous proposons un nouveau format de sites plus agile et plus performant, développé en interne par nos développeurs IA. Même exigence. Délais réduits.",
    },
    integrations: {
      title: "Intégrations CRM & outils",
      description:
        "HubSpot, Pipedrive, Notion, Zapier — votre site s'intègre à votre stack commerciale.",
    },
  },

  // Quality guarantees
  qualityGuarantees: {
    surtitre: "Nos engagements",
    sectionTitle: "Pourquoi choisir Vizion\npour votre site web ?",
    sectionDescription:
      "Pas de promesses vagues — des engagements concrets, mesurables et documentés, valables sur chaque projet que nous livrons.",
    cardSurtitre: "Nos engagements",
    cardTitle: "Nos garanties\nde qualité",
    cardDescription:
      "Chaque projet est piloté avec la même rigueur. Pas de promesses vagues — des engagements concrets, mesurables et documentés.",
    guarantees: [
      {
        icon: "ClipboardList",
        title: "Bilan livrable — 50 points d'optimisation",
        description:
          "Checklist complète : sécurité, SEO technique, performance, accessibilité et bonnes pratiques.",
      },
      {
        icon: "Wrench",
        title: "3 mois de maintenance offerts",
        description:
          "Corrections, mises à jour et petites évolutions incluses pendant 3 mois après la livraison.",
      },
      {
        icon: "Zap",
        title: "Score Google 90+ garanti",
        description:
          "Performance, accessibilité, SEO et bonnes pratiques — mesurés et validés avant chaque livraison.",
      },
    ],
    featureCard: {
      title: "Une coopération unique\nentre stratégie et technique",
      description:
        "Stratèges marketing et développeurs chevronnés travaillent ensemble sur chaque projet — pour que votre site serve vraiment vos objectifs commerciaux.",
      linkText: "En savoir plus",
      linkHref: "/contact",
    },
  },

  // CTA
  ctaTitle: "Votre site mérite de travailler pour vous",
  ctaDescription:
    "Premier échange sans engagement — on analyse votre site actuel et vos objectifs.",
  ctaButtonText: "Demander un audit gratuit",
  ctaButtonLink: "/contact",
};
