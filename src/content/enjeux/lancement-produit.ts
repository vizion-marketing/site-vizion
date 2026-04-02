import type { EnjeuxContent } from "./types";

export const lancementProduit: EnjeuxContent = {
  // Identité
  slug: "lancement-produit",
  title: "Lancement de produit",
  icon: "Rocket",

  // SEO
  metaTitle: "Lancement produit B2B : go-to-market et positionnement | Vizion",
  metaDescription:
    "Vous lancez un produit B2B et vous ne savez pas par où commencer ? Vizion structure votre go-to-market, votre positionnement et vos outils commerciaux pour un lancement qui trouve son marché.",
  keywords: [
    "lancement produit b2b",
    "go-to-market b2b",
    "positionnement produit",
    "stratégie de lancement",
    "marketing produit pme",
    "lancement commercial b2b",
    "go-to-market startup",
    "plan de lancement produit",
    "marketing lancement nouveauté",
    "agence go-to-market toulouse",
    "structurer lancement produit",
    "lancement produit eti",
  ],

  // Hero
  heroTitle: "Vous lancez un produit et vous ne savez pas encore par où commencer.",
  heroSubtitle:
    "Positionnement flou, équipe commerciale non préparée, canaux d'acquisition indéfinis : les premières semaines d'un lancement sont critiques et impossibles à rattraper. Chez Vizion, on structure votre go-to-market de A à Z pour que votre produit trouve son marché rapidement et durablement.",
  heroBadge: "+70 entreprises B2B accompagnées depuis 2021",

  // Section 1 — Reconnaissance
  recognitionTitle: "Vous êtes dans cette situation si...",
  recognitionSubtitle:
    "Un lancement mal préparé coûte des mois et des opportunités perdues. Voici les signaux qui montrent qu'il est temps de structurer.",
  signals: [
    {
      icon: "PackageOpen",
      title: "Vous avez un produit prêt mais pas de positionnement validé.",
      description:
        "Votre produit existe, mais vous n'êtes pas sûr de qui il s'adresse en priorité, ni de ce qui le différencie vraiment.",
    },
    {
      icon: "Users",
      title: "Votre équipe commerciale ne sait pas encore comment le pitcher.",
      description:
        "Les commerciaux ont découvert le produit en interne, mais ils n'ont pas d'argumentaire structuré pour convaincre les décideurs.",
    },
    {
      icon: "CalendarX",
      title: "Vous avez une date de lancement sans plan marketing associé.",
      description:
        "La date est posée, les équipes product sont prêtes, mais le plan d'activation commercial et marketing n'existe pas encore.",
    },
    {
      icon: "Crosshair",
      title: "Vous ciblez tout le monde, donc personne en particulier.",
      description:
        "Votre produit peut intéresser plusieurs profils, mais sans priorité établie, les efforts se dispersent et les messages ne percutent pas.",
    },
  ],

  // Section 2 — Défis clés (fond sombre)
  defisSurtitre: "Ce que cette étape implique vraiment",
  defisTitle: "Un lancement, c'est une fenêtre d'opportunité. Elle ne dure pas.",
  defisSubtitle:
    "Les premières semaines définissent la perception de votre produit sur le marché. Voici ce qui se passe quand on ne les prépare pas.",
  defis: [
    {
      icon: "MessageSquareOff",
      title: "Un message qui ne percute pas.",
      description:
        "Sans angle clair, votre produit ressemble à tous les autres. Les prospects ne comprennent pas pourquoi choisir vous plutôt qu'un concurrent établi.",
    },
    {
      icon: "TrendingDown",
      title: "Des commerciaux livrés à eux-mêmes.",
      description:
        "Sans pitch structuré, sans réponses aux objections, sans outils de qualification, les premiers rendez-vous se transforment rarement en opportunités concrètes.",
    },
    {
      icon: "RadioTower",
      title: "Des canaux d'acquisition non testés.",
      description:
        "On ne sait pas où se trouvent vos acheteurs, ni comment les atteindre. On teste tout en même temps, on optimise rien, et le budget part vite.",
    },
    {
      icon: "Timer",
      title: "Un retard difficile à rattraper.",
      description:
        "Les premières semaines créent une perception durable. Un lancement raté ou confus est long à corriger, et laisse de l'espace à vos concurrents.",
    },
  ],

  // Section 3 — Approche Vizion
  approcheTitle: "Chez Vizion, on structure votre lancement avant de l'activer.",
  approcheSubtitle:
    "On intervient en amont du lancement pour poser les fondations marketing et commerciales, puis on pilote l'activation avec vous.",
  approcheItems: [
    {
      number: "01",
      title: "Diagnostiquer le marché et les cibles",
      description:
        "On analyse votre marché, vos segments cibles, vos concurrents et votre différenciation réelle. On identifie le premier segment prioritaire à adresser et les acheteurs à convaincre en priorité.",
    },
    {
      number: "02",
      title: "Positionner le produit et structurer le message",
      description:
        "On construit votre proposition de valeur, votre angle différenciant et votre architecture de message. Chaque segment reçoit un message adapté à ses enjeux réels, pas un message générique.",
    },
    {
      number: "03",
      title: "Armer l'équipe commerciale",
      description:
        "On produit les outils dont vos commerciaux ont besoin dès le premier jour : pitch deck, séquences de prospection, battlecards, réponses aux objections, guide de qualification.",
    },
    {
      number: "04",
      title: "Déployer et ajuster les canaux d'acquisition",
      description:
        "On active les canaux les plus adaptés à votre cible, on suit les premiers signaux du marché, et on ajuste le message et les canaux en fonction des retours réels.",
    },
  ],

  // Section 4 — Services recommandés
  servicesTitle: "Les services Vizion pour un lancement structuré",
  servicesSubtitle:
    "Ces services sont directement utiles dans la phase de lancement. On les combine selon votre situation, votre équipe et votre calendrier.",
  services: [
    {
      slug: "positionnement-messaging",
      icon: "Crosshair",
      title: "Positionnement et Messaging",
      description:
        "Le point de départ de tout lancement. On définit votre angle différenciant, votre proposition de valeur et les messages adaptés à chaque segment cible.",
      href: "/services/positionnement-messaging",
    },
    {
      slug: "roadmap-strategique",
      icon: "CalendarCheck",
      title: "Roadmap Stratégique",
      description:
        "On construit votre plan de go-to-market complet : jalons, canaux, ressources, KPIs. Vous partez avec une feuille de route opérationnelle, pas une présentation.",
      href: "/services/roadmap-strategique",
    },
    {
      slug: "pitch-decks-argumentaires",
      icon: "Rocket",
      title: "Pitch Decks et Argumentaires",
      description:
        "On structure le pitch de votre produit pour que vos commerciaux puissent convaincre dès le premier rendez-vous, même face à un décideur sceptique.",
      href: "/services/pitch-decks-argumentaires",
    },
    {
      slug: "cold-outreach-prospection",
      icon: "Mail",
      title: "Prospection Multicanal",
      description:
        "On conçoit et déploie vos séquences de prospection pour aller chercher vos premiers clients cibles, valider le marché et alimenter votre pipeline rapidement.",
      href: "/services/cold-outreach-prospection",
    },
    {
      slug: "battlecards-case-studies",
      icon: "Shield",
      title: "Battlecards et Études de Cas",
      description:
        "On dote votre équipe commerciale des outils pour gérer les objections, répondre aux comparaisons concurrentes et prouver la valeur de votre produit.",
      href: "/services/battlecards-case-studies",
    },
    {
      slug: "creation-landing-page",
      icon: "Layout",
      title: "Création de Landing Page",
      description:
        "On crée la page d'atterrissage de votre produit, optimisée pour convertir les visiteurs en prospects qualifiés et soutenir vos actions de prospection.",
      href: "/services/creation-landing-page",
    },
  ],

  // Section 5 — FAQ
  faqTitle: "Des questions sur votre lancement produit ?",
  faqs: [
    {
      question: "Par où commencer quand on lance un produit B2B ?",
      answer:
        "Le point de départ, c'est toujours le positionnement : qui sont vos acheteurs prioritaires, quel problème résolvez-vous mieux que les alternatives, et comment le formuler clairement. Tout le reste, le pitch, les canaux, les outils, découle de cette clarté initiale. On commence toujours par un diagnostic avant de recommander un plan.",
    },
    {
      question: "Combien de temps avant le lancement faut-il s'y prendre ?",
      answer:
        "L'idéal est de travailler le positionnement et les outils commerciaux 8 à 12 semaines avant la date de lancement. En dessous de 4 semaines, on peut encore structurer l'essentiel, mais les marges de manoeuvre sont réduites. Plus tôt on intervient, plus le lancement est cohérent et préparé.",
    },
    {
      question: "Vizion peut-il intervenir en complément de notre équipe interne ?",
      answer:
        "Oui, c'est même notre mode d'intervention le plus courant. On travaille en binôme avec vos équipes product, commerciales ou marketing existantes. On apporte la méthode, les livrables et la vision externe, vous conservez la connaissance produit et les relations clients.",
    },
    {
      question: "Comment savoir si notre positionnement est bon avant de lancer ?",
      answer:
        "On le teste avant de l'activer. Entretiens avec des prospects cibles, analyse des messages concurrents, tests de séquences courtes : on valide les hypothèses de positionnement sur le terrain avant d'investir dans une activation à grande échelle.",
    },
    {
      question: "Vizion accompagne quel type d'entreprises pour un lancement produit ?",
      answer:
        "On accompagne principalement des PME, ETI et scale-ups B2B qui lancent une nouveauté : nouveau produit, nouvelle offre, nouveau segment ou extension de gamme. On intervient aussi sur les relances de produits existants qui n'ont jamais trouvé leur marché.",
    },
  ],

  // CTA final
  ctaTitle: "Parlons de votre lancement.",
  ctaDescription:
    "Un échange de 30 minutes suffit pour comprendre votre situation et vous dire si on peut vous aider. Sans engagement.",
  ctaButtonText: "Nous contacter",
  ctaButtonLink: "/contact",
};
