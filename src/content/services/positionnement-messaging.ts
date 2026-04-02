import type { ServiceContent } from "./types";

export const positionnementMessaging: ServiceContent = {
  slug: "positionnement-messaging",
  title: "Positionnement et Messaging",
  icon: "Crosshair",
  category: "Marketing Produit",
  order: 5,

  // SEO
  metaTitle: "Positionnement et Messaging B2B | Clarifiez votre message pour vendre plus",
  metaDescription:
    "Positionnement marketing B2B et messaging par cible. Proposition de valeur, personas, argumentaires et guidelines. Résultats mesurables en 4 semaines.",
  keywords: [
    "positionnement marketing",
    "positionnement marketing B2B",
    "stratégie de positionnement marketing",
    "messaging B2B",
    "proposition de valeur",
    "architecture de message",
    "persona B2B",
    "argumentaire commercial",
    "positionnement concurrentiel",
    "messaging framework",
    "agence positionnement marketing",
    "positionnement marketing PME",
    "positionnement marketing SaaS",
    "différenciation marketing B2B",
    "positionnement marketing lancement produit",
  ],

  // Hero
  heroTitle: "Positionnement marketing : clarifiez ce que vous vendez, à qui et pourquoi",
  heroSubtitle:
    "Votre offre est solide, mais vos prospects ne perçoivent pas ce qui vous différencie. Chez Vizion, nous travaillons votre positionnement marketing et architecturons vos messages par cible, par canal et par étape du cycle de vente. Pour que chaque prise de parole serve votre croissance commerciale.",
  heroBadge: "+35 messaging frameworks livrés",
  heroImage: "/images/services/positionnement-messaging/hero.avif",

  // Narrative (Le constat)
  constat: {
    surtitre: "Le problème",
    title:
      "Votre offre est bonne, mais votre message ne passe pas.",
    paragraphs: [
      "Vos prospects vous comparent à vos concurrents sans voir la différence. Vos commerciaux improvisent leur pitch. Votre site, vos contenus et vos présentations racontent des histoires différentes. Et quand tout le monde dit quelque chose de légèrement différent, personne ne retient quoi que ce soit.",
    ],
    statements: [
      {
        headline: "Vos prospects ne comprennent pas ce qui vous différencie",
        description:
          "Votre proposition de valeur est noyée dans un jargon technique ou des promesses génériques. Quand un décideur visite votre site ou lit votre plaquette, il ne sait pas en 10 secondes pourquoi vous choisir plutôt qu'un concurrent. Le doute s'installe, la prise de contact n'arrive pas.",
      },
      {
        headline: "Chaque service raconte une version différente de votre histoire",
        description:
          "Marketing, ventes, direction, produit. Chacun présente l'entreprise à sa manière. Les messages varient selon l'interlocuteur, le support et le moment. Cette incohérence brouille votre image et affaiblit la confiance de vos prospects à chaque point de contact.",
      },
      {
        headline: "Vos commerciaux improvisent leur discours à chaque rendez-vous",
        description:
          "Il n'existe pas d'argumentaire structuré par persona, par objection ou par étape du cycle de vente. Chaque commercial construit son propre pitch, avec des résultats très variables. Les meilleurs performent, les autres tâtonnent.",
      },
      {
        headline: "Votre contenu marketing ne génère ni engagement ni conversion",
        description:
          "Articles, posts LinkedIn, emailings. Vous produisez du contenu régulièrement, mais il ne résonne pas avec vos cibles. Les taux d'engagement sont faibles, les leads rares. Le problème n'est pas la fréquence de publication, c'est la pertinence du message.",
      },
    ],
  },

  // Solution sticky
  solutionTitle:
    "Chez Vizion, nous clarifions votre positionnement marketing et architecturons vos messages pour chaque cible",
  solutionImage: "/images/services/positionnement-messaging/solution.avif",
  solutionItems: [
    {
      title: "Nous analysons votre marché et votre différenciation réelle.",
      description:
        "Nous étudions vos concurrents, vos clients actuels et votre proposition de valeur pour identifier ce qui vous rend véritablement unique. Pas ce que vous aimeriez être, ce que vos clients perçoivent et valorisent. Le positionnement part du terrain, pas d'un brainstorming interne.",
    },
    {
      title: "Nous définissons vos personas et leurs parcours de décision.",
      description:
        "Nous cartographions vos cibles prioritaires : rôle, enjeux, objections, critères de décision et canaux préférés. Chaque persona est documenté avec un niveau de détail suffisant pour guider la rédaction des messages, des contenus et des argumentaires commerciaux.",
    },
    {
      title: "Nous architecturons un framework de messaging complet.",
      description:
        "Proposition de valeur, messages clés par persona, preuves et éléments de réassurance. Nous construisons un cadre structuré que vos équipes marketing, commerciales et dirigeantes peuvent utiliser sur chaque support et à chaque étape du cycle de vente.",
    },
    {
      title: "Nous rédigeons les argumentaires et les supports de vente.",
      description:
        "Pitch deck, one-pager, battlecard, scripts d'appel, séquences d'emailing. Nous traduisons le framework de messaging en supports opérationnels directement utilisables par vos commerciaux. Chaque document est calibré pour le persona et le contexte ciblés.",
    },
    {
      title: "Nous testons et ajustons les messages sur le terrain.",
      description:
        "Les messages sont confrontés à la réalité du marché. Nous mesurons les retours terrain (taux de réponse, engagement, conversion) et ajustons le messaging en continu. Un bon positionnement se valide par les résultats, pas par le consensus interne.",
    },
  ],

  // Scroll title
  scrollTitle: {
    hook: "Bref.",
    phrase: "Chez Vizion, on construit\ndes messages...",
    adjectives: ["clairs", "différenciants", "et surtout vendeurs"],
    showcaseImages: [],
  },

  // Bento featured cards
  bentoCards: {
    sectionTitle: "Les spécificités de notre travail en positionnement et messaging",
    sectionDescription:
      "Nous ne livrons pas un document de marque. Chaque mission de positionnement produit un cadre opérationnel complet : proposition de valeur validée, messages par persona, argumentaires de vente et guidelines de déploiement. Du stratégique à l'actionnable.",
    image: {
      src: "/images/services/roadmap-strategique/hero.avif",
      alt: "Framework de messaging Vizion",
    },
    technology: {
      title: "Des méthodes éprouvées,\npas des intuitions créatives.",
      description:
        "Nous utilisons des frameworks reconnus en marketing produit pour structurer le travail de positionnement. Chaque étape suit une méthodologie précise, de l'analyse concurrentielle à la rédaction des messages. Le résultat est un cadre de messaging fondé sur des données et des retours terrain, pas sur des préférences subjectives.",
      logos: [
        "Jobs-to-be-done",
        "Value Proposition Canvas",
        "Message Map",
        "StoryBrand",
        "Persona Framework",
        "Competitive Positioning",
      ],
    },
    performance: {
      value: 5,
      suffix: "+",
      label: "Personas traités par mission",
      description:
        "Chaque mission couvre en moyenne 5 personas ou segments de marché. Chaque persona reçoit un messaging dédié, adapté à ses enjeux et à son parcours de décision.",
    },
    noTemplate: {
      title: "Un messaging sur mesure, pas un exercice de marque générique",
      description:
        "Chaque entreprise a un marché, des concurrents et des cibles différents. Le messaging est construit depuis votre réalité terrain, pas depuis un template de positionnement standardisé.",
    },
    widgets: {
      title: "Des livrables adaptés à chaque usage et chaque équipe",
      description:
        "Marketing, ventes, direction : chaque équipe reçoit les supports de messaging adaptés à son contexte d'utilisation quotidien.",
      tags: [
        "Messaging framework",
        "Argumentaires par persona",
        "Pitch deck",
        "Battlecards",
        "Guidelines éditoriales",
      ],
    },
    integrations: {
      title: "Votre messaging se déploie sur tous vos canaux existants",
      description:
        "Le cadre de messaging est conçu pour être décliné sur votre site, vos réseaux sociaux, vos campagnes, vos emails et vos supports commerciaux. Un seul cadre, une cohérence totale.",
      logos: [
        "Site web",
        "LinkedIn",
        "Emailing",
        "CRM",
        "Présentations",
        "Publicité",
        "Contenus",
        "Événements",
        "Vidéo",
      ],
    },
    growth: {
      title: "Un impact mesurable sur vos taux de conversion et d'engagement",
      description:
        "Nous suivons les indicateurs clés (taux de réponse, engagement, conversion) pour valider que le nouveau messaging produit des résultats concrets sur le terrain commercial.",
    },
  },

  // Process
  processTitle: "Une mission de positionnement marketing avec Vizion : comment ça se passe ?",
  processSubtitle:
    "Un processus structuré en 5 étapes pour passer d'un message flou à un cadre de messaging complet, validé et déployable sur tous vos canaux.",
  processSteps: [
    {
      title: "Immersion et analyse du marché",
      description:
        "Nous commençons par comprendre votre marché, vos concurrents et vos clients actuels. Entretiens avec vos équipes, analyse de votre historique commercial, étude de la concurrence et revue de vos supports existants. L'objectif est d'identifier ce qui vous différencie réellement aux yeux de vos acheteurs.",
      duration: "3 à 5 jours",
      deliverables: [
        "Analyse concurrentielle",
        "Entretiens internes",
        "Revue des supports existants",
        "Synthèse des forces et faiblesses",
      ],
    },
    {
      title: "Définition des personas et parcours d'achat",
      description:
        "Nous cartographions vos cibles prioritaires avec un niveau de détail opérationnel : rôle, enjeux métier, objections fréquentes, critères de décision, sources d'information et canaux préférés. Chaque persona devient un guide pour la rédaction des messages et la création des supports commerciaux.",
      duration: "3 à 4 jours",
      deliverables: [
        "Fiches personas détaillées",
        "Cartographie des parcours d'achat",
        "Matrice enjeux/objections",
        "Critères de décision par persona",
      ],
    },
    {
      title: "Construction du messaging framework",
      description:
        "Nous architecturons votre proposition de valeur, vos messages clés par persona et vos éléments de preuve. Le framework structure ce que vous dites, à qui, dans quel contexte et avec quels arguments. C'est le document de référence que toutes vos équipes utiliseront pour communiquer de manière cohérente.",
      duration: "4 à 5 jours",
      deliverables: [
        "Proposition de valeur formalisée",
        "Messages clés par persona",
        "Éléments de preuve et réassurance",
        "Messaging framework complet",
        "Guidelines de ton et de style",
      ],
    },
    {
      title: "Rédaction des supports opérationnels",
      description:
        "Nous traduisons le framework en supports directement utilisables : pitch deck, one-pager, battlecards, scripts d'appel, séquences d'emailing et contenus de référence. Chaque support est calibré pour un persona, un canal et une étape du cycle de vente. Vos commerciaux peuvent les utiliser dès la livraison.",
      duration: "4 à 5 jours",
      deliverables: [
        "Pitch deck mis à jour",
        "One-pager par offre",
        "Battlecards concurrentielles",
        "Scripts et séquences d'emailing",
        "Contenus de référence",
      ],
    },
    {
      title: "Déploiement et validation terrain",
      description:
        "Nous accompagnons le déploiement du messaging sur vos canaux prioritaires (site web, LinkedIn, campagnes, outils de vente). Nous formons vos équipes à l'utilisation du framework et mesurons les premiers retours terrain pour ajuster les messages si nécessaire. Le messaging se valide par les résultats, pas par l'applaudimètre interne.",
      duration: "1 semaine + suivi",
      deliverables: [
        "Déploiement sur les canaux prioritaires",
        "Session de formation équipes",
        "Suivi des indicateurs de performance",
        "Ajustements post-déploiement",
        "Rapport d'impact à 30 jours",
      ],
    },
  ],

  // Quality guarantees
  qualityGuarantees: {
    portraitImage: "/images/services/cold-outreach-prospection/hero.avif",
    surtitre: "Nos engagements",
    sectionTitle:
      "Pourquoi choisir Vizion\npour votre positionnement marketing ?",
    sectionDescription:
      "Nous ne livrons pas un exercice de branding. Nous livrons un cadre de messaging opérationnel, validé par le terrain et directement exploitable par vos équipes marketing et commerciales.",
    cardSurtitre: "Ce que nous garantissons",
    cardTitle: "Des engagements\ncentrés sur la clarté",
    cardDescription:
      "Chaque mission de positionnement est réalisée avec les mêmes standards de rigueur. Pas de slogans creux, des messages testables et mesurables.",
    guarantees: [
      {
        icon: "Crosshair",
        title: "Un positionnement fondé sur vos clients, pas sur vos envies",
        description:
          "Le positionnement part de ce que vos clients perçoivent et valorisent, pas d'un brainstorming interne. Chaque message est ancré dans la réalité du marché et les retours terrain.",
      },
      {
        icon: "Users",
        title: "Un messaging adapté à chaque persona et chaque étape de vente",
        description:
          "Chaque cible reçoit des messages spécifiques, calibrés pour son rôle, ses enjeux et son niveau dans le parcours d'achat. Un seul framework, des déclinaisons multiples.",
      },
      {
        icon: "BadgeCheck",
        title: "Des supports opérationnels livrés clés en main",
        description:
          "Le framework de messaging est traduit en supports directement utilisables. Vos commerciaux, votre marketing et votre direction disposent des outils pour communiquer de manière cohérente.",
      },
    ],
    featureCard: {
      surtitre: "Notre vraie différence ?",
      title: "Un messaging qui vend,\npas qui impressionne",
      description:
        "Stratèges marketing et experts commerciaux travaillent ensemble pour que chaque message serve un objectif de conversion précis, pas un exercice de style.",
      linkText: "Travailler votre positionnement",
      linkHref: "/contact",
    },
  },

  // Testimonials
  testimonialsTitle: "Ils nous ont confié leur positionnement et leur messaging",
  testimonialsSubtitle:
    "Consultez les retours d'expérience de dirigeants et responsables marketing qui ont fait appel à Vizion pour clarifier leur proposition de valeur et structurer leurs messages B2B.",
  testimonials: [
    {
      quote:
        "Nos commerciaux tiennent enfin tous le même discours, et ça se voit sur les résultats.",
      detail:
        "Avant Vizion, chaque commercial avait sa propre version du pitch. Le messaging framework a unifié notre discours et donné à l'équipe des arguments structurés par persona. Le taux de transformation en rendez-vous qualifiés a progressé significativement dès le premier trimestre.",
      author: "Directeur commercial",
      role: "Directeur commercial",
      company: "Client Vizion",
      photo: "/images/services/positionnement-messaging/testimonials/01.avif",
      rating: 5,
    },
    {
      quote:
        "On sait enfin expliquer en une phrase ce qui nous différencie.",
      detail:
        "Nous avions une offre technique complexe et nous n'arrivions pas à la rendre accessible pour nos décideurs cibles. Vizion a travaillé notre proposition de valeur et nos messages clés. Aujourd'hui, notre site, nos présentations et nos contenus racontent la même histoire, claire et percutante.",
      author: "CEO",
      role: "Fondateur et CEO",
      company: "Client Vizion",
      photo: "/images/services/positionnement-messaging/testimonials/02.avif",
      rating: 5,
    },
    {
      quote:
        "Le messaging framework est devenu notre document de référence au quotidien.",
      detail:
        "Marketing, ventes, recrutement, levée de fonds. Le framework de Vizion est utilisé partout dans l'entreprise. Chaque nouveau collaborateur le reçoit dès son arrivée. C'est le socle de toute notre communication interne et externe depuis un an.",
      author: "Directrice marketing",
      role: "Directrice marketing",
      company: "Client Vizion",
      photo: "/images/services/positionnement-messaging/testimonials/03.avif",
      rating: 5,
    },
  ],

  // FAQ
  faqTitle: "Des questions sur le positionnement marketing ?",
  faqs: [
    {
      question: "Combien coûte une mission de positionnement marketing ?",
      answer:
        "Une mission complète se situe généralement entre 5 000 € et 10 000 € selon le périmètre (nombre de personas, profondeur de l'analyse concurrentielle, volume de supports opérationnels à produire). Le budget est défini après un premier échange pour cadrer vos objectifs et le niveau de livrables attendu.",
    },
    {
      question: "Quel est le délai pour livrer un messaging framework ?",
      answer:
        "Comptez 4 à 6 semaines entre le lancement et la livraison du framework complet avec les supports opérationnels. Ce délai inclut l'immersion, la définition des personas, la construction du framework, la rédaction des supports et le déploiement initial. La phase de validation terrain s'étend sur 30 jours supplémentaires.",
    },
    {
      question: "Quels livrables recevons-nous à l'issue de la mission ?",
      answer:
        "Vous recevez un messaging framework complet (proposition de valeur, messages par persona, éléments de preuve), des fiches personas détaillées, un pitch deck mis à jour, des battlecards concurrentielles, des scripts et séquences d'emailing, et des guidelines de ton et de style. Chaque livrable est conçu pour être utilisé immédiatement.",
    },
    {
      question: "À qui s'adresse le positionnement marketing en B2B ?",
      answer:
        "Aux entreprises B2B qui peinent à se différencier, qui lancent un nouveau produit ou une nouvelle offre, qui constatent un décalage entre la qualité de leur solution et la perception du marché, ou qui veulent aligner leurs équipes marketing et commerciales autour d'un discours commun.",
    },
    {
      question: "Quelle est la différence entre positionnement et branding ?",
      answer:
        "Le branding couvre l'identité visuelle (logo, couleurs, typographie) et l'univers de marque. Le positionnement et le messaging se concentrent sur le fond : ce que vous dites, à qui, pourquoi et comment. Nous travaillons le contenu de votre discours, pas son habillage graphique.",
    },
    {
      question: "Le messaging fonctionne-t-il pour plusieurs offres ou produits ?",
      answer:
        "Oui. Le framework est conçu pour couvrir l'ensemble de votre portefeuille d'offres. Chaque produit ou service reçoit ses propres messages, tout en restant cohérent avec le positionnement global de l'entreprise. Le cadre s'adapte aussi aux futures offres que vous développerez.",
    },
    {
      question: "Comment mesurez-vous l'impact du nouveau messaging ?",
      answer:
        "Nous suivons les indicateurs clés sur 30 jours après le déploiement : taux de réponse aux emails de prospection, taux de conversion site web, engagement LinkedIn, durée des cycles de vente et retours qualitatifs des commerciaux. Ces données permettent d'ajuster les messages et de valider leur efficacité terrain.",
    },
  ],

  // Related services
  relatedServicesTitle: "Vous voulez déployer votre messaging plus loin ?",
  relatedServicesSubtitle:
    "Le positionnement est la fondation. Ces services permettent de le décliner sur tous vos canaux de croissance.",
  relatedServices: [
    {
      slug: "sales-enablement",
      icon: "Handshake",
      title: "Activation des Ventes B2B",
      description:
        "Un messaging fort est la base de tout kit de vente efficace. Découvrez comment Vizion arme vos commerciaux avec les bons outils pour convaincre et closer à chaque étape.",
      href: "/services/sales-enablement",
    },
    {
      slug: "product-marketing",
      icon: "Rocket",
      title: "Marketing Produit B2B",
      description:
        "Le positionnement est la premiere brique du marketing produit. Découvrez notre accompagnement complet : messaging, go-to-market, contenus et personal branding.",
      href: "/services/product-marketing",
    },
    {
      slug: "pitch-decks-argumentaires",
      icon: "FileText",
      title: "Pitch Decks et Argumentaires",
      description:
        "Nous transformons votre messaging en supports de vente percutants. Pitch decks, one-pagers, battlecards : vos commerciaux disposent des outils pour convaincre à chaque rendez-vous.",
      href: "/services/pitch-decks-argumentaires",
    },
  ],

  // CTA intermédiaires
  inlineCTAs: {
    afterTestimonials: {
      text: "Vous voulez un message qui convertit, pas qui décore ?",
      buttonText: "Travailler votre positionnement",
      href: "/contact",
    },
    afterProcess: {
      text: "Prêt à clarifier ce qui vous différencie sur votre marché ?",
      buttonText: "Lancer votre projet",
      href: "/contact",
    },
  },

  // CTA final
  ctaTitle: "Votre offre mérite un message à la hauteur de sa valeur",
  ctaDescription:
    "Premier échange sans engagement. Nous analysons votre positionnement actuel et identifions les axes d'amélioration prioritaires.",
  ctaButtonText: "Travailler votre positionnement",
  ctaButtonLink: "/contact",
};
