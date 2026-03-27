import type { ServiceContent } from "./types";

export const productMarketing: ServiceContent = {
  slug: "product-marketing",
  title: "Product Marketing B2B",
  icon: "Rocket",
  category: "Product Marketing",
  isPilier: true,
  order: 101,

  metaTitle: "Product Marketing B2B | Positionnez votre offre pour convaincre vos acheteurs",
  metaDescription:
    "Faites de votre produit une évidence sur son marché. Positionnement, messaging, contenu d'expertise, go-to-market. Vizion structure le product marketing des entreprises B2B.",
  keywords: [
    "product marketing B2B",
    "product marketing",
    "positionnement produit B2B",
    "messaging B2B",
    "go-to-market B2B",
    "stratégie product marketing",
    "proposition de valeur B2B",
    "lancement produit B2B",
    "agence product marketing",
    "marketing produit B2B",
    "product market fit B2B",
    "positionnement produit",
    "messaging framework",
    "contenu product marketing",
    "cycle de vente B2B",
  ],

  heroTitle: "Product Marketing : faites de votre produit une évidence sur son marché",
  heroSubtitle:
    "Votre produit est solide. Mais vos prospects ne le perçoivent pas. Le product marketing traduit votre valeur en messages clairs, structure votre go-to-market et arme vos équipes pour chaque conversation commerciale. Pour que le choix devienne évident.",
  heroBadge: "PRODUCT MARKETING B2B",
  heroImage: "/images/piliers/product-marketing/hero.avif",

  constat: {
    surtitre: "LE PRODUCT MARKETING",
    title: "Le Product Marketing : qu'est-ce que c'est et a quoi ça sert ?",
    paragraphs: [
      "Votre produit est bon. Excellent même. Bien meilleur que celui du concurrent. Le design est léché, les fonctionnalités sont solides, l'équipe technique livre sans relache. Le problème ? Personne ne semble le voir. Vos prospects comparent, hésitent, choisissent un concurrent moins bon mais plus lisible.",
      "Le product marketing est né pour combler ce vide entre vous et votre marché : traduire chaque fonctionnalité en bénéfices concrets, formuler une proposition de valeur unique (Unique Selling Proposition) et armer vos équipes pour faire de votre produit un incontournable de son marché. De la segmentation de vos buyer personas a la différenciation concurrentielle, cette discipline repose sur trois piliers :",
    ],
    statements: [
      {
        icon: "Target",
        headline: "Un positionnement stratégique différenciant",
        description: "Identifiez ce qui vous rend unique, formulez-le en une proposition de valeur que chaque décideur saisit en 10 secondes, et alignez toute votre équipe sur le même message.",
      },
      {
        icon: "FileText",
        headline: "Un discours immédiatement compréhensible",
        description: "Traduisez vos fonctionnalités en bénéfices concrets, adaptez votre message a chaque interlocuteur et supprimez toute ambiguité dans votre communication commerciale.",
      },
      {
        icon: "Rocket",
        headline: "Des contenus pédagogiques qui batissent votre autorité",
        description: "Publiez des articles, cas clients et guides qui éduquent votre marché, démontrez votre expertise a chaque étape du cycle d'achat et attirez des prospects déja convaincus.",
      },
    ],
  },

  solutionTitle: "Comment Vizion vous accompagne dans votre stratégie produit ?",
  solutionImage: "/images/piliers/product-marketing/solution.avif",
  solutionItems: [
    {
      title: "Positionnement et proposition de valeur",
      description: "Un positionnement clair par persona, une proposition de valeur lisible en 10 secondes. Nous construisons le socle stratégique que toute votre équipe utilise pour parler d'une seule voix.",
    },
    {
      title: "Messaging et narratif de vente",
      description: "Décideur, utilisateur, acheteur : chaque profil a ses priorités. Nous traduisons votre positionnement en arguments concrets adaptés a chaque interlocuteur pour faire avancer la décision.",
    },
    {
      title: "Contenu et assets go-to-market",
      description: "Articles, cas clients, landing pages, livres blancs. Nous produisons les contenus calibrés pour chaque étape du cycle de vente et chaque profil d'acheteur.",
    },
    {
      title: "Personal branding et thought leadership",
      description: "Vos dirigeants sont les meilleurs ambassadeurs de votre produit. Nous structurons leur prise de parole LinkedIn et leurs contenus d'expertise pour que vos prospects arrivent convaincus avant le premier rendez-vous.",
    },
  ],

  // Méthodologie (pilier)
  pilierMethodology: {
    surtitre: "NOTRE APPROCHE",
    title: "Comment nous structurons votre product marketing",
    subtitle: "Quatre phases pour passer d'un produit mal compris à une offre qui s'impose. Chaque phase est activable indépendamment selon votre maturité.",
    steps: [
      {
        title: "Diagnostic de perception marché",
        description: "Nous analysons comment votre marché vous perçoit : entretiens avec vos clients et prospects, étude de marché, audit du discours commercial, benchmark concurrentiel. L'objectif : mesurer l'écart entre ce que vous êtes et ce que votre marché comprend.",
      },
      {
        title: "Architecture de positionnement",
        description: "Nous construisons votre positionnement, vos propositions de valeur par buyer persona et votre messaging framework. Un document de référence qui aligne le sales enablement et que toute votre équipe utilise pour parler d'une seule voix.",
      },
      {
        title: "Production des assets product marketing",
        description: "Contenus d'expertise, landing pages, cas clients, supports de vente, personal branding. Nous produisons les assets qui traduisent votre positionnement en preuves concrètes pour chaque étape du parcours d'achat.",
      },
      {
        title: "Mesure et itération",
        description: "Taux de conversion, engagement contenu, pipeline généré, retours terrain des commerciaux. Nous mesurons l'impact de chaque levier product marketing et ajustons la stratégie chaque mois.",
      },
    ],
  },

  // Métriques sourcées
  pilierMetrics: {
    surtitre: "POURQUOI LE PRODUCT MARKETING",
    title: "Ce que le product marketing change concrètement",
    subtitle: "Des chiffres issus d'études sectorielles sur l'impact du positionnement, du messaging et du contenu en B2B.",
    metrics: [
      {
        value: 86,
        suffix: "%",
        label: "des ventes B2B bloquent quand le message est flou",
        direction: "down" as const,
        context: "Sans message clair, vos acheteurs ne savent pas comment défendre votre solution en interne. Forrester, 2024.",
        sourceUrl: "https://www.forrester.com/press-newsroom/forrester-predictions-2025-b2b-marketing-sales/",
      },
      {
        value: 41,
        suffix: "%",
        label: "des acheteurs ont choisi leur favori avant de vous contacter",
        direction: "up" as const,
        context: "Votre positionnement et vos contenus doivent convaincre bien avant le premier appel commercial. Forrester, 2024.",
        sourceUrl: "https://www.forrester.com/press-newsroom/forrester-predictions-2025-b2b-marketing-sales/",
      },
      {
        value: 61,
        suffix: "%",
        label: "des acheteurs B2B préfèrent décider sans parler a un commercial",
        direction: "up" as const,
        context: "Votre site, vos contenus et vos landing pages doivent vendre a votre place. Le product marketing les structure pour ça. Gartner, 2025.",
        sourceUrl: "https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-sales-survey-finds-61-percent-of-b2b-buyers-prefer-a-rep-free-buying-experience",
      },
    ],
  },

  processTitle: "",
  processSubtitle: "",
  processSteps: [],

  testimonialsTitle: "Ce que nos clients en disent",
  testimonialsSubtitle: "Des dirigeants B2B qui ont structuré leur product marketing avec Vizion.",
  testimonials: [
    {
      quote: "En 6 semaines, notre positionnement était clair pour la premiere fois en 3 ans.",
      detail: "On perdait des deals parce que nos prospects ne comprenaient pas notre valeur. Vizion a structuré notre messaging et nos commerciaux sont enfin alignés sur un discours unique.",
      author: "Thomas Durand",
      role: "CEO",
      company: "SaaS industriel",
      rating: 5,
    },
    {
      quote: "Le personal branding de notre fondateur génère aujourd'hui 30% de nos leads.",
      detail: "On ne croyait pas au personal branding. Vizion nous a montré comment structurer une prise de parole LinkedIn qui attire des décideurs qualifiés. C'est devenu notre premier canal d'acquisition.",
      author: "Marie Laurent",
      role: "Directrice Marketing",
      company: "Editeur SaaS RH",
      rating: 5,
    },
    {
      quote: "Notre landing page convertit 3 fois mieux depuis le repositionnement.",
      detail: "Le probleme n'était pas le trafic, c'était le message. Vizion a reconstruit notre proposition de valeur et restructuré chaque page. Les résultats ont été immédiats.",
      author: "Julien Morel",
      role: "Head of Growth",
      company: "Scale-up B2B",
      rating: 5,
    },
  ],

  faqTitle: "Questions fréquentes sur le product marketing B2B",
  faqs: [
    {
      question: "Le product marketing, c'est quoi concrètement ?",
      answer: "C'est la discipline qui structure la façon dont votre produit est perçu par le marché. Positionnement, messaging, contenus d'aide a la vente : le product marketing aligne ce que vous faites avec ce que vos prospects comprennent. Ce n'est ni de la publicité, ni de la communication corporate.",
      answerLinks: [
        { text: "Positionnement, messaging", href: "/services/positionnement-messaging" },
      ],
    },
    {
      question: "Quelle différence avec le content marketing ?",
      answer: "Le content marketing produit des contenus pour générer du trafic. Le product marketing définit d'abord ce qu'il faut dire, a qui et pourquoi, puis produit les contenus qui servent ce cadre. L'un sans l'autre produit soit du volume sans direction, soit une stratégie sans exécution.",
      answerLinks: [
        { text: "produit des contenus pour générer du trafic", href: "/services/creation-contenu-b2b" },
      ],
    },
    {
      question: "Pourquoi commencer par le product marketing avant d'autres actions ?",
      answer: "Si votre positionnement n'est pas clair, chaque action marketing porte un message légèrement différent. Vos pubs, votre site, vos commerciaux racontent des histoires qui ne s'alignent pas. Le product marketing pose le socle commun. Sans lui, vous dépensez plus pour convaincre moins.",
    },
    {
      question: "Combien de temps ça prend ?",
      answer: "Le positionnement et le messaging prennent généralement 4 a 6 semaines de travail. La production des premiers assets (landing pages, contenus, supports commerciaux) s'étale sur 4 a 8 semaines supplémentaires. Les effets sur la perception marché sont progressifs : comptez 3 mois minimum pour observer un changement mesurable.",
      answerLinks: [
        { text: "landing pages", href: "/services/creation-landing-page" },
      ],
    },
    {
      question: "C'est réservé aux grosses entreprises ?",
      answer: "Non. Les PME et ETI B2B sont souvent celles qui en ont le plus besoin, justement parce qu'elles n'ont pas d'équipe marketing structurée. Avec des ressources limitées, il est d'autant plus important que chaque prise de parole soit alignée et efficace.",
    },
    {
      question: "Quel retour sur investissement attendre ?",
      answer: "Le product marketing agit sur trois leviers : la clarté de votre proposition de valeur (ce qui améliore la conversion), la cohérence de votre discours commercial (ce qui raccourcit les cycles de vente) et la qualité des contenus (ce qui attire des prospects mieux qualifiés). Les résultats varient selon votre point de départ et votre marché.",
    },
    {
      question: "Comment se passe un accompagnement avec Vizion ?",
      answer: "Quatre phases : diagnostic de perception marché, architecture de positionnement, production des assets product marketing, puis suivi et ajustements. Un directeur marketing dédié est votre interlocuteur unique. Le rythme et le périmètre s'adaptent a votre situation.",
    },
  ],

  pilierTiming: {
    surtitre: "LE BON MOMENT",
    title: "Quand investir dans le product marketing ?",
    subtitle: "Certains signaux indiquent qu'il est temps de structurer votre product marketing. Si vous vous reconnaissez dans l'une de ces situations, c'est le moment d'agir.",
    items: [
      {
        icon: "Rocket",
        title: "Vous lancez un produit ou une nouvelle offre",
        description: "Votre offre est prête mais vous n'avez pas de positionnement clair, de messaging structuré ni de contenu go-to-market pour la faire connaitre.",
      },
      {
        icon: "Users",
        title: "Vos commerciaux improvisent à chaque rendez-vous",
        description: "Chaque commercial raconte une histoire différente. Vos prospects ne comprennent pas ce qui vous distingue et les deals s'éternisent.",
      },
      {
        icon: "TrendingDown",
        title: "Votre taux de conversion stagne malgré le trafic",
        description: "Les visiteurs arrivent sur votre site mais ne convertissent pas. Vos landing pages, vos contenus et votre proposition de valeur ne convainquent pas.",
      },
      {
        icon: "RefreshCw",
        title: "Vous repositionnez votre offre ou montez en gamme",
        description: "Votre marché évolue, vos cibles changent ou vous passez de la startup à la scale-up. Votre communication ne reflète plus votre réalité.",
      },
      {
        icon: "MessageSquare",
        title: "Vous avez 5 cibles, mais un seul discours",
        description: "DSI, directeur financier, utilisateur final : chacun a ses enjeux et ses objections. Pourtant, votre site, vos commerciaux et vos contenus racontent la même chose a tout le monde.",
      },
    ],
  },

  pilierTargets: {
    surtitre: "A QUI S'ADRESSE LE PRODUCT MARKETING",
    title: "Le product marketing, une discipline pensée pour toutes les entreprises ou le digital intervient dans la vente.",
    subtitle: "Que vous vendiez un logiciel, un service ou un produit technique, des que votre cycle de vente implique plusieurs décideurs, une segmentation fine et du contenu digital, le product marketing vous concerne.",
    highlightWords: ["chaque entreprise"],
    items: [
      {
        icon: "Rocket",
        title: "Startups et scale-ups B2B",
        description: "Vous avez trouvé votre product-market fit et devez structurer votre go-to-market pour accélérer. Le product marketing transforme votre traction initiale en croissance répétable.",
      },
      {
        icon: "Building2",
        title: "PME et ETI en croissance",
        description: "Votre offre est solide mais votre communication ne reflète pas votre valeur réelle. Le product marketing aligne votre positionnement sur votre ambition et structure votre montée en puissance commerciale.",
      },
      {
        icon: "Code",
        title: "Editeurs SaaS et entreprises tech",
        description: "Votre produit est puissant mais difficile à vulgariser. Le product marketing traduit vos fonctionnalités techniques en bénéfices business que vos acheteurs comprennent et défendent en interne.",
      },
{
        icon: "Factory",
        title: "Industriels et fabricants",
        description: "Votre expertise technique est reconnue, mais votre communication ne la met pas en valeur. Le product marketing structure vos arguments pour convaincre des acheteurs qui comparent.",
      },
      {
        icon: "Handshake",
        title: "Sociétés de conseil et services B2B",
        description: "Vous vendez de l'expertise immatérielle. Le product marketing rend votre valeur tangible avec du contenu, des cas clients et un positionnement qui vous distingue.",
      },
    ],
    featuredIndex: 1,
  },

  relatedServicesTitle: "Découvrez comment Vizion vous accompagne dans votre stratégie produit",
  relatedServicesSubtitle: "Chaque service peut être activé indépendamment ou combiné dans un accompagnement product marketing global.",
  relatedServices: [
    {
      slug: "positionnement-messaging",
      icon: "Target",
      title: "Positionnement et messaging",
      description: "Nous construisons votre positionnement, vos propositions de valeur par persona et votre messaging framework.",
      href: "/services/positionnement-messaging",
    },
    {
      slug: "creation-contenu-b2b",
      icon: "FileText",
      title: "Stratégie éditoriale B2B",
      description: "Articles, newsletters, posts LinkedIn. Les contenus récurrents qui positionnent votre expertise et nourrissent votre pipeline.",
      href: "/services/creation-contenu-b2b",
    },
    {
      slug: "livres-blancs-lead-magnets",
      icon: "BookOpen",
      title: "Livres blancs et lead magnets",
      description: "Les contenus premium que vos prospects téléchargent en échange de leurs coordonnées. Conçus pour qualifier et faire avancer.",
      href: "/services/livres-blancs-lead-magnets",
    },
    {
      slug: "creation-landing-page",
      icon: "LayoutTemplate",
      title: "Création de landing page",
      description: "Des pages conçues pour un seul objectif : convertir. Structure testée, copywriting orienté problème, formulaire au bon moment.",
      href: "/services/creation-landing-page",
    },
    {
      slug: "adn-marque-branding",
      icon: "Fingerprint",
      title: "ADN de marque et branding",
      description: "Mission, vision, ton de voix, univers visuel. Le socle qui garantit la cohérence de chaque prise de parole product marketing.",
      href: "/services/adn-marque-branding",
    },
  ],

  ctaTitle: "Votre produit mérite d'être compris au premier regard",
  ctaDescription: "Échangez 30 minutes avec un fondateur. Nous analysons votre positionnement actuel et identifions comment le product marketing peut accélérer votre croissance.",
  ctaButtonText: "Structurer votre product marketing",
  ctaButtonLink: "/contact",
};
