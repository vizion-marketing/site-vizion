import type { ServiceContent } from "./types";

export const salesEnablement: ServiceContent = {
  // ── Identité ──
  slug: "sales-enablement",
  title: "Sales Enablement B2B",
  icon: "Handshake",
  category: "Sales Enablement",
  isPilier: true,
  order: 103,

  // ── SEO ──
  metaTitle:
    "Sales Enablement B2B : armez vos commerciaux pour closer | Vizion",
  metaDescription:
    "Structurez votre cycle de vente B2B avec les bons outils. Pitch decks, battlecards, nurturing, workflows. Vizion cree l'arsenal commercial qui accelere le closing.",
  keywords: [
    "sales enablement B2B",
    "sales enablement",
    "aide a la vente B2B",
    "outils commerciaux B2B",
    "pitch deck B2B",
    "battlecard concurrentielle",
    "lead nurturing B2B",
    "cycle de vente B2B",
    "closing B2B",
    "support commercial B2B",
    "acceleration vente B2B",
    "arsenal commercial",
  ],

  // ── Hero ──
  heroTitle:
    "Sales Enablement : donnez a vos commerciaux les outils pour closer",
  heroSubtitle:
    "Chaque commercial improvise son discours, les objections ne sont pas anticipees, les relances dependent de la memoire de chacun. Le sales enablement transforme votre cycle de vente en processus reproductible. Pour que chaque opportunite avance vers la signature.",
  heroBadge: "SALES ENABLEMENT B2B",
  heroImage: "/images/piliers/sales-enablement/hero.avif",

  // ── Constat / Narrative ──
  constat: {
    surtitre: "LE SALES ENABLEMENT",
    title: "Le Sales Enablement : qu'est-ce que c'est et pourquoi c'est critique ?",
    paragraphs: [
      "Vos commerciaux sont bons. Experimentes, motives, capables de closer des deals complexes. Le probleme ? Ils passent plus de temps a chercher la bonne presentation, a reformuler les arguments ou a relancer manuellement qu'a vendre. Le cycle s'allonge, les opportunites se perdent en route, et chaque vente reste une improvisation.",
      "Le sales enablement est ne pour resoudre ce probleme : fournir aux equipes commerciales les bons outils, les bons contenus et les bons processus au bon moment du cycle de vente. De la premiere prise de contact jusqu'a la signature, cette discipline repose sur trois piliers :",
    ],
    statements: [
      {
        icon: "Presentation",
        headline: "Des supports de vente alignes sur le positionnement",
        description:
          "Equipez chaque commercial avec des presentations par profil decideur, des argumentaires structures et une proposition de valeur formulee pour convaincre en 10 secondes. Alignez tout le monde sur le meme message.",
        image: "/images/piliers/sales-enablement/supports.avif",
      },
      {
        icon: "Swords",
        headline: "Des reponses aux objections formalisees et accessibles",
        description:
          "Anticipez chaque objection concurrentielle avec des battlecards detaillees, des cas clients adaptes et des guides d'appel. Vos equipes ne seront plus jamais prises au depourvu face a un concurrent.",
        image: "/images/piliers/sales-enablement/objections.avif",
      },
      {
        icon: "Workflow",
        headline: "Des sequences de relance automatisees et personnalisees",
        description:
          "Maintenez le contact avec vos prospects sur des cycles de 3 a 18 mois grace a des sequences de nurturing automatisees. Les relances ne dependent plus de la memoire de chacun.",
        image: "/images/piliers/sales-enablement/sequences-automatisees.avif",
      },
    ],
  },

  // ── Solution ──
  solutionTitle:
    "Comment Vizion vous accompagne dans votre strategie de sales enablement ?",
  solutionImage: "/images/piliers/sales-enablement/solution.avif",
  solutionItems: [
    {
      title: "Pitch decks et argumentaires par persona",
      description:
        "Nous construisons des presentations adaptees a chaque profil decideur. Structure narrative, arguments alignes sur le positionnement, reponses aux objections integrees. Vos commerciaux arrivent prepares a chaque rendez-vous.",
    },
    {
      title: "Battlecards et cas clients structures",
      description:
        "Nous produisons les fiches concurrentielles et les etudes de cas qui donnent a vos equipes un avantage concret face a chaque concurrent. Chaque argument est source, chiffre et contextualize.",
    },
    {
      title: "Nurturing et sequences automatisees",
      description:
        "Nous concevons les sequences email et LinkedIn qui maintiennent le contact avec vos prospects sur la duree. Personnalisation a l'echelle, scoring integre, declencheurs comportementaux.",
    },
    {
      title: "Workflows et processus commerciaux",
      description:
        "Nous automatisons les taches a faible valeur ajoutee : relances, qualification, suivi. Vos commerciaux se concentrent sur la negociation et le closing, pas sur l'administratif.",
    },
  ],

  // ── Methodologie (pilier) ──
  pilierMethodology: {
    surtitre: "NOTRE APPROCHE",
    title: "Comment nous structurons votre sales enablement",
    subtitle:
      "Quatre phases pour passer d'une equipe qui improvise a un processus de vente reproductible. Chaque phase est activable independamment selon votre maturite commerciale.",
    steps: [
      {
        title: "Audit du cycle de vente",
        description:
          "Nous analysons votre processus commercial de bout en bout : entretiens avec vos commerciaux, ecoute d'appels, analyse du pipeline CRM, identification des points de friction. L'objectif : comprendre ou vos opportunites se perdent et pourquoi.",
      },
      {
        title: "Architecture de l'arsenal commercial",
        description:
          "Nous definissons les outils prioritaires selon votre cycle de vente : pitch decks par persona, battlecards par concurrent, templates de relance, guides d'appel. Un plan d'action clair avec les livrables qui auront le plus d'impact.",
      },
      {
        title: "Production et deploiement",
        description:
          "Nous produisons chaque outil, le testons avec vos commerciaux sur le terrain et l'integrons dans votre CRM et vos workflows existants. Les equipes sont formees et autonomes sur chaque livrable.",
      },
      {
        title: "Mesure et optimisation continue",
        description:
          "Taux de conversion par etape, duree du cycle, taux de closing, retours terrain. Nous mesurons l'impact de chaque outil et ajustons l'arsenal chaque mois en fonction des resultats.",
      },
    ],
  },

  // ── Metriques sourcees ──
  pilierMetrics: {
    surtitre: "POURQUOI LE SALES ENABLEMENT",
    title: "Ce que le sales enablement change concretement",
    subtitle:
      "Des chiffres issus d'etudes sectorielles sur l'impact des programmes de sales enablement en B2B.",
    metrics: [
      {
        value: 49,
        suffix: "%",
        label: "de taux de closing pour les entreprises avec un programme structure",
        direction: "up" as const,
        context:
          "Les organisations dotees d'un programme de sales enablement mature atteignent 49% de closing sur les deals en forecast, contre 42,5% sans. CSO Insights, 2019.",
        sourceUrl:
          "https://www.highspot.com/resource/fifth-annual-sales-enablement-study/",
      },
      {
        value: 75,
        suffix: "%",
        label:
          "plus de chances de depasser les objectifs de revenus",
        direction: "up" as const,
        context:
          "Les organisations qui investissent dans le revenue enablement sont au moins 75% plus susceptibles de depasser leurs objectifs de performance commerciale. Gartner, 2023.",
        sourceUrl:
          "https://www.gartner.com/en/newsroom/press-releases/2023-05-17-how-revenue-enablement-helps-sales-organizations-exceed-performance-targets",
      },
      {
        value: 17.9,
        suffix: "%",
        label: "de taux de closing superieur avec un enablement formel",
        direction: "up" as const,
        context:
          "Les organisations avec un sales enablement formel et mature affichent un taux de closing 17,9% superieur a la moyenne de l'etude. CSO Insights, 2019.",
        sourceUrl:
          "https://salesenablement.pro/assets/2019/10/CSO-Insights-5th-Annual-Sales-Enablement-Study.pdf",
      },
    ],
  },

  // ── Timing (bento grid) ──
  pilierTiming: {
    surtitre: "LE BON MOMENT",
    title: "Quand investir dans le sales enablement ?",
    subtitle:
      "Certains signaux indiquent qu'il est temps de structurer vos outils commerciaux. Si vous vous reconnaissez dans l'une de ces situations, c'est le moment d'agir.",
    items: [
      {
        icon: "Users",
        title: "Vous recrutez des commerciaux mais l'onboarding prend des mois",
        description:
          "Sans supports structures, chaque nouveau commercial doit tout reapprendre par l'exemple. Le temps de montee en competence s'allonge et les premiers mois sont improductifs.",
      },
      {
        icon: "MessageSquare",
        title: "Vous perdez des deals face a des concurrents moins bons",
        description:
          "Vos commerciaux n'ont pas les arguments pour se differencier en rendez-vous. Le prospect choisit le concurrent dont le discours est plus clair, pas celui dont le produit est meilleur.",
      },
      {
        icon: "Clock",
        title: "Vous constatez que votre cycle de vente s'allonge",
        description:
          "Les opportunites stagnent dans le pipeline. Les relances sont manuelles, les contenus de reassurance manquent, et les prospects decrochent entre deux etapes.",
      },
      {
        icon: "TrendingDown",
        title: "Vous generez des leads mais le taux de conversion reste faible",
        description:
          "Le marketing fait son travail, les leads arrivent. Mais sans les bons outils pour les traiter, les qualifier et les faire avancer, une grande partie du pipeline se perd.",
      },
      {
        icon: "RefreshCw",
        title: "Vous passez a l'echelle et chaque commercial fait differemment",
        description:
          "Ce qui fonctionnait avec 3 commerciaux ne fonctionne plus avec 10. Sans processus et outils standardises, la qualite de vente varie d'un representant a l'autre.",
      },
    ],
  },

  // ── Targets ──
  pilierTargets: {
    surtitre: "A QUI S'ADRESSE LE SALES ENABLEMENT",
    title:
      "Le sales enablement, une discipline pensée pour toutes les entreprises ou le closing repose sur l'humain.",
    subtitle:
      "Des que votre cycle de vente implique plusieurs etapes, plusieurs decideurs et un effort de conviction, le sales enablement vous concerne. Voici les profils qui en tirent le plus de valeur.",
    highlightWords: ["le closing repose sur l'humain"],
    items: [
      {
        icon: "Rocket",
        title: "Startups et scale-ups B2B",
        description:
          "Vous passez de 3 a 15 commerciaux et le discours se dilue. Le sales enablement standardise les outils et accelere l'onboarding pour que chaque recrue soit productive plus vite.",
      },
      {
        icon: "Building2",
        title: "PME et ETI en croissance",
        description:
          "Votre force commerciale est experimentee mais manque de supports structures. Le sales enablement formalise les bonnes pratiques et equipe chaque commercial avec les outils qui lui manquent.",
      },
      {
        icon: "Code",
        title: "Editeurs SaaS et entreprises tech",
        description:
          "Votre produit est technique et difficile a expliquer. Le sales enablement traduit la complexite en arguments business que vos acheteurs comprennent et defendent en interne.",
      },
      {
        icon: "Factory",
        title: "Industriels et fabricants",
        description:
          "Vos cycles de vente sont longs, les interlocuteurs multiples et les enjeux financiers importants. Le sales enablement structure chaque etape pour maintenir la dynamique jusqu'a la signature.",
      },
      {
        icon: "Briefcase",
        title: "Societes de conseil et services B2B",
        description:
          "Vous vendez de l'expertise immaterielle a des decideurs exigeants. Le sales enablement rend votre valeur tangible avec des cas clients, des battlecards et des presentations calibrees.",
      },
    ],
    featuredIndex: 1,
  },

  // ── Process (vide pour les piliers) ──
  processTitle: "",
  processSubtitle: "",
  processSteps: [],

  // ── Testimonials ──
  testimonialsTitle: "Ce que nos clients en disent",
  testimonialsSubtitle:
    "Des dirigeants et directeurs commerciaux B2B qui ont structure leur sales enablement avec Vizion.",
  testimonials: [
    {
      quote:
        "Nos commerciaux ont enfin un discours unifie et des outils pour chaque situation.",
      detail:
        "Avant Vizion, chaque commercial racontait une histoire differente. Les battlecards et les pitch decks ont change la donne : l'onboarding est plus rapide et les rendez-vous sont mieux prepares.",
      author: "Antoine Mercier",
      role: "Directeur Commercial",
      company: "Editeur SaaS industriel",
      rating: 5,
    },
    {
      quote:
        "Le nurturing automatise nous a permis de recuperer des opportunites qu'on perdait de vue.",
      detail:
        "Sur des cycles de 6 a 12 mois, on ne peut pas tout suivre manuellement. Les sequences mises en place par Vizion maintiennent le contact avec nos prospects sans mobiliser l'equipe.",
      author: "Sophie Renaud",
      role: "Head of Sales",
      company: "Scale-up B2B tech",
      rating: 5,
    },
    {
      quote:
        "On a reduit notre cycle de vente en equipant nos commerciaux avec les bons contenus.",
      detail:
        "Le probleme n'etait pas le nombre de leads, c'etait ce qu'on en faisait. Les cas clients structures et les argumentaires par persona ont accelere la prise de decision chez nos prospects.",
      author: "Marc Lefebvre",
      role: "CEO",
      company: "PME services B2B",
      rating: 5,
    },
  ],

  // ── FAQ ──
  faqTitle: "Questions frequentes sur le sales enablement B2B",
  faqs: [
    {
      question: "Le sales enablement, c'est quoi concretement ?",
      answer:
        "C'est l'ensemble des outils, contenus et processus qui permettent a vos commerciaux de vendre plus efficacement. Presentations par profil decideur, fiches concurrentielles, sequences de relance, guides d'appel : tout ce qui transforme votre cycle de vente en processus reproductible au lieu d'une improvisation quotidienne.",
    },
    {
      question:
        "Quelle difference entre sales enablement et formation commerciale ?",
      answer:
        "La formation developpe les competences individuelles de vos commerciaux. Le sales enablement leur fournit les outils concrets pour appliquer ces competences : presentations, battlecards, sequences de nurturing, workflows. L'un porte sur le savoir-faire, l'autre sur les moyens d'action. Les deux sont complementaires.",
    },
    {
      question: "Pourquoi commencer par le sales enablement avant d'autres actions ?",
      answer:
        "Si vos commerciaux n'ont pas les bons outils, chaque euro investi en generation de leads est partiellement gaspille. Les prospects arrivent, mais le cycle patine faute de contenus adaptes, de reponses aux objections ou de relances structurees. Le sales enablement maximise le rendement de tout ce que vous faites en amont.",
      answerLinks: [
        {
          text: "generation de leads",
          href: "/services/growth-marketing",
        },
      ],
    },
    {
      question: "Combien de temps faut-il pour mettre en place un programme ?",
      answer:
        "Les premiers outils (pitch decks, battlecards) sont operationnels en 4 a 6 semaines. Les sequences de nurturing et les workflows d'automatisation prennent 4 a 8 semaines supplementaires. Un programme complet se deploie sur 3 a 4 mois, avec des resultats progressifs des les premieres semaines.",
      answerLinks: [
        {
          text: "pitch decks, battlecards",
          href: "/services/pitch-decks-argumentaires",
        },
        {
          text: "workflows d'automatisation",
          href: "/services/creation-workflows",
        },
      ],
    },
    {
      question:
        "Le sales enablement est-il reserve aux grandes equipes commerciales ?",
      answer:
        "Non. Les equipes de 3 a 5 commerciaux sont souvent celles qui en tirent le plus de valeur, justement parce que chaque personne a un impact direct sur le chiffre d'affaires. Avec une petite equipe, il est d'autant plus important que chaque rendez-vous soit prepare et que chaque relance soit automatisee.",
    },
    {
      question: "Quel retour sur investissement peut-on attendre ?",
      answer:
        "Le sales enablement agit sur trois leviers : la qualite des rendez-vous (ce qui ameliore le taux de closing), la regularite des relances (ce qui raccourcit le cycle) et la coherence du discours (ce qui renforce la confiance). Les resultats varient selon votre point de depart, votre marche et la maturite de votre equipe.",
    },
    {
      question: "Comment se deroule l'accompagnement avec Vizion ?",
      answer:
        "Quatre phases : audit du cycle de vente, definition de l'arsenal prioritaire, production et deploiement des outils, puis suivi et optimisation. Un directeur marketing dedie est votre interlocuteur unique. Le rythme et le perimetre s'adaptent a votre situation et a la taille de votre equipe.",
    },
  ],

  // ── Related Services ──
  relatedServicesTitle: "Découvrez comment Vizion vous accompagne dans votre stratégie d'activation des ventes",
  relatedServicesSubtitle:
    "Chaque outil peut etre cree independamment ou dans le cadre d'un arsenal commercial complet.",
  relatedServices: [
    {
      slug: "pitch-decks-argumentaires",
      icon: "Presentation",
      title: "Pitch decks et argumentaires",
      description:
        "Des presentations par profil decideur avec une structure narrative qui convainc. Le premier outil a deployer pour chaque rendez-vous.",
      href: "/services/pitch-decks-argumentaires",
    },
    {
      slug: "battlecards-case-studies",
      icon: "Swords",
      title: "Battlecards et case studies",
      description:
        "Fiches concurrentielles et etudes de cas structurees. Vos commerciaux savent exactement comment se differencier face a chaque concurrent.",
      href: "/services/battlecards-case-studies",
    },
    {
      slug: "lead-nurturing",
      icon: "Mail",
      title: "Lead nurturing",
      description:
        "Sequences email et LinkedIn qui maintiennent le contact avec vos prospects sur des cycles de 3 a 18 mois. La relance devient automatique.",
      href: "/services/lead-nurturing",
    },
    {
      slug: "creation-workflows",
      icon: "Workflow",
      title: "Creation de workflows",
      description:
        "Automatisation des processus de relance, qualification et suivi. Vos commerciaux se concentrent sur la vente, pas sur l'administratif.",
      href: "/services/creation-workflows",
    },
  ],

  // ── CTA final ──
  ctaTitle: "Votre cycle de vente merite mieux que de l'improvisation",
  ctaDescription:
    "Echangez 30 minutes avec un fondateur. Nous identifions les outils prioritaires pour accelerer votre closing, sans engagement.",
  ctaButtonText: "Equiper vos commerciaux",
  ctaButtonLink: "/contact",
};
