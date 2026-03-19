import type { CityPageData } from "./types";
import {
  SITE_URL, MAP_EMBED_URL, VILLES_BADGES,
  buildOrganizationSchema, buildFaqSchema, buildBreadcrumbSchema,
} from "./shared";

// ============================================================================
// TOULOUSE — Siège Vizion, technopole de Labège
// Piliers : Audit & stratégie (#01) + Positionnement (#02) + Trafic (#03) + IA (#04) + Sales enablement (#05)
// ============================================================================

const meta: CityPageData["meta"] = {
  slug: "toulouse",
  routeSlug: "agence-marketing-toulouse",
  city: "Toulouse",
  department: "Haute-Garonne",
  canonical: `${SITE_URL}/agence-marketing-toulouse`,
};

const faqQuestions = [
  {
    question: "Qu'est-ce que le marketing produit chez Vizion ?",
    answer:
      "Le marketing produit chez Vizion, c'est tout ce qui permet de positionner une offre sur son marché pour qu'elle devienne le choix évident : positionnement, discours de marque, sites web et landing pages, SEO, campagnes publicitaires, aide à la vente, notoriété des dirigeants sur LinkedIn. Cela s'applique à tout « produit » au sens large : un SaaS, un concept de franchise, un service. La méthode est la même, seule la nature du produit change.",
  },
  {
    question: "Vizion travaille-t-elle uniquement à Toulouse et en Occitanie ?",
    answer:
      "Non, Vizion est basée à Toulouse (Labège, technopôle), au cœur de la ville rose et capitale de l'Occitanie, mais accompagne des clients partout en France et à l'international. Présentiel pour les clients à Toulouse et en Occitanie, visio et déplacements ponctuels pour les autres. Plus de 70 entreprises nous font confiance depuis 2021, en Occitanie et dans toute la France. La proximité géographique reste un atout pour nos clients toulousains.",
  },
  {
    question: "Quelles entreprises peuvent faire appel à Vizion ?",
    answer:
      "Vizion intervient auprès de trois typologies : startups et SaaS (logiciel, plateforme), franchises et réseaux (concept de franchise, recrutement franchisés), et PME/ETI (offre commerciale à clarifier). Ces entreprises ont une problématique commune : transformer leur offre en évidence commerciale. Nous appliquons la même rigueur aux franchises, services et ETI industrielles qu'aux acteurs tech.",
  },
  {
    question: "Comment travaille Vizion : mission ponctuelle ou accompagnement long terme ?",
    answer:
      "Vizion propose deux modes d'intervention. La mission ciblée (8 à 16 semaines) intervient sur un enjeu précis : lancement, repositionnement, alignement du tunnel. L'accompagnement dans la durée (6 mois minimum) : nous endossons le rôle de votre équipe marketing produit. Un interlocuteur dédié, un tunnel aligné, accès aux experts selon les besoins. Dans les deux cas, nous ne créons jamais de pub sans avoir posé le positionnement d'abord.",
  },
  {
    question: "Combien de temps faut-il pour voir les résultats avec Vizion ?",
    answer:
      "Les délais dépendent du point de départ. Positionnement et discours de marque : 4 à 6 semaines. Premiers prospects qualifiés : 2 à 3 mois. Impact commercial mesurable : 4 à 6 mois. Nous sommes transparents sur les délais, pas de promesse de résultats en 2 semaines. Construire un positionnement solide et un tunnel de vente aligné demande du temps et de l'itération.",
  },
];

const content: CityPageData["content"] = {
  seo: {
    title: "Vizion | Votre agence marketing stratégique à Toulouse",
    description:
      "Vizion accompagne les PME et ETI B2B à Toulouse : positionnement, stratégie marketing, sales enablement. +70 clients accompagnés. Ancrée dans le Sud-Ouest et à Paris. Réponse en 24h ouvrées.",
    keywords: [
      "agence marketing toulouse",
      "marketing b2b toulouse",
      "positionnement toulouse",
      "sales enablement toulouse",
      "agence marketing digital toulouse",
      "conseil marketing toulouse",
      "stratégie marketing toulouse",
      "accompagnement marketing toulouse",
    ],
    ogImage: "/hero-binoculars.avif",
  },

  hero: {
    badge: "AGENCE MARKETING — TOULOUSE",
    h1: "Votre agence marketing à Toulouse",
    h1Highlight: "Toulouse",
    baseline:
      "Vos prospects ne font pas la différence entre vous et vos concurrents ? Vos commerciaux improvisent ? Vous n'arrivez pas à poser une stratégie ? Découvrez Vizion, une agence marketing exigeante, basée à Toulouse, spécialisée dans les cycles de ventes longs.",
    cta: {
      primary: { text: "Échanger avec un fondateur", href: "/contact" },
      secondary: { text: "Découvrir nos services", href: "/services" },
    },
    socialProof: "+70 ENTREPRISES ACCOMPAGNÉES À TOULOUSE ET EN FRANCE DEPUIS 2021",
  },

  intro: {
    surtitre: "[ NOTRE MISSION ]",
    h2: "Les meilleurs produits ne gagnent pas toujours. Les mieux positionnés, si.",
    h2Highlight: "positionnés",
    paragraphs: [
      "Vizion est une agence de conseil en marketing stratégique à Toulouse. Nous accompagnons les dirigeants qui veulent un positionnement clair, un tunnel de vente aligné et des résultats mesurables. Pas des livrables décoratifs.",
      "Notre approche : diagnostiquer avant de produire. Nous posons le positionnement et le discours de marque, nous challengeons les priorités, et seulement ensuite nous construisons le système qui porte votre offre. Chaque livrable a une raison stratégique d'exister.",
    ],
  },

  piliers: {
    surtitre: "Notre méthodologie",
    h2: "Vizion, un partenaire stratégique au service des entreprises occitanes",
    description:
      "Vizion a développé des services structurants, conçus pour répondre aux enjeux concrets des entreprises : clarifier le positionnement, structurer l'acquisition, équiper les commerciaux, automatiser les processus. Pas de prestations gadgets, seulement ce qui génère un impact mesurable sur votre croissance.",
    piliers: [
      {
        numero: "01",
        surtitre: "Vous investissez sans savoir ce qui fonctionne vraiment",
        titre: "Audit & stratégie marketing",
        description:
          "Votre marketing ne génère pas de résultats mesurables et vous ne savez pas pourquoi. Nous auditons votre positionnement, vos canaux et vos outils, puis nous structurons la feuille de route et pilotons sa mise en place. Direction marketing externalisée ou renfort ponctuel : nous nous adaptons à votre organisation.",
        services: ["Audit marketing complet", "Analyse concurrentielle", "Diagnostic des canaux d'acquisition", "Feuille de route stratégique", "Direction marketing externalisée", "Cadrage budgétaire"],
        cta: "DEMANDER UN AUDIT",
      },
      {
        numero: "02",
        surtitre: "POSITIONNEMENT & NARRATIF PRODUIT",
        titre: "Votre offre est trop complexe à expliquer en une phrase",
        description:
          "Vos prospects ne comprennent pas ce qui vous distingue et vos commerciaux racontent chacun une version différente. Nous construisons un positionnement clair et un narratif produit structuré, adaptés à chaque segment de votre marché.",
        services: ["Matrice de positionnement", "Proposition de valeur", "Architecture de message par segment", "Personas affinés", "Narratif produit", "Discours de marque"],
      },
      {
        numero: "03",
        surtitre: "TRAFIC & NOTORIÉTÉ",
        titre: "Vous avez le bon produit, mais personne ne vous connaît",
        description:
          "Votre offre mérite d'être vue, mais votre marché ne sait pas que vous existez. Nous déployons les canaux d'acquisition adaptés à votre cible : SEO, campagnes publicitaires, LinkedIn, contenu stratégique.",
        services: ["SEO & référencement", "Campagnes LinkedIn Ads", "Google Ads & Meta Ads", "Stratégie de contenu", "Notoriété dirigeant LinkedIn", "Suivi et optimisation continue"],
      },
      {
        numero: "04",
        surtitre: "AUTOMATISATION & INTELLIGENCE ARTIFICIELLE",
        titre: "Vos équipes perdent du temps sur des tâches à faible valeur",
        description:
          "Vos processus marketing et commerciaux sont manuels, chronophages et sujets aux erreurs. Nous déployons les automatisations et les outils d'IA adaptés à votre réalité opérationnelle.",
        services: ["Déploiement CRM", "Automatisations marketing", "Intégrations sur mesure", "Outils d'IA appliqués", "Tableaux de bord unifiés", "Qualification automatisée"],
      },
      {
        numero: "05",
        surtitre: "CONTENUS D'AIDE À LA VENTE",
        titre: "Vos commerciaux improvisent à chaque rendez-vous",
        description:
          "Chaque commercial raconte une histoire différente, les présentations sont obsolètes et les objections ne sont pas anticipées. Nous créons les supports alignés sur votre positionnement : présentations, fiches concurrentielles, guides d'appel.",
        services: ["Présentations commerciales alignées", "Fiches concurrentielles", "Guides et trames d'appel", "Gestion des objections", "Séquences de relance", "Propositions commerciales structurées"],
      },
    ],
  },

  localSEO: {
    surtitre: "[ IMPLANTATION ]",
    h2: "L'agence marketing à Toulouse",
    h2Highlight: "Toulouse",
    description:
      "Basés dans la ville rose, capitale de l'Occitanie, nous accompagnons les entreprises de la région et de toute la France. Proximité quand il faut, efficacité à distance quand c'est mieux.",
    paragraphs: [
      "Installés à Labège dans la technopole de Toulouse, nous travaillons au quotidien avec des PME et ETI de l'aéronautique, de la tech, de l'industrie et des services. La capitale occitane concentre plus de 12 000 entreprises, et la plupart n'ont pas de stratégie marketing structurée.",
      "Nos clients toulousains bénéficient d'ateliers stratégiques en présentiel. Pour les entreprises ailleurs en France, nous sommes tout aussi efficaces à distance, avec des déplacements ponctuels quand c'est utile.",
    ],
    preuveLocale: "Enseignant en stratégie LinkedIn à Toulouse School of Management (TSM)",
    mapEmbedUrl: MAP_EMBED_URL,
    villes: VILLES_BADGES,
    cta: { text: "Rencontrons-nous à Toulouse", href: "/contact" },
  },

  faq: {
    surtitre: "[ FAQ ]",
    h2: "Questions fréquentes sur notre agence à Toulouse",
    h2Highlight: "Toulouse",
    description:
      "Voici les réponses aux questions qu'on nous pose le plus souvent sur notre accompagnement marketing à Toulouse et en Occitanie.",
    questions: faqQuestions,
    ctaText: "Une autre question ? Échangeons directement.",
    ctaButton: { text: "Nous contacter", href: "/contact" },
  },

  finalCta: {
    trustBadge: "+70 entreprises nous font confiance",
    h2: "Vous avez une entreprise à Toulouse ? Échangeons sur votre prochain cap.",
    h2Highlight: "votre prochain cap",
    description:
      "30 minutes avec un fondateur. On analyse votre positionnement actuel, on identifie les écarts avec votre marché, et on vous dit concrètement ce qu'on ferait. Sans engagement.",
    cta: {
      primary: { text: "Réserver un appel avec un fondateur", href: "/contact" },
      secondary: { text: "Découvrir nos services", href: "/services" },
    },
    trustElements: [
      "30 minutes",
      "Sans engagement",
      "Avec un fondateur",
    ],
  },
};

const cityData: CityPageData = {
  meta,
  content,
  organizationSchema: buildOrganizationSchema(meta),
  faqSchema: buildFaqSchema(faqQuestions),
  breadcrumbSchema: buildBreadcrumbSchema(meta),
};

export default cityData;
