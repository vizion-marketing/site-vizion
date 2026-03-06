/**
 * Migration MDX → Sanity
 *
 * Crée les 3 clients, 1 case study, 1 blog post dans Sanity.
 * Les images restent en URL string (pas d'upload Sanity CDN pour l'instant).
 * Le body MDX est converti en blocs Portable Text simples.
 *
 * Usage: node scripts/migrate-to-sanity.mjs
 */

import { createClient } from "@sanity/client";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "odavbqx4",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2026-03-06",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

if (!process.env.SANITY_API_TOKEN) {
  console.error("❌ SANITY_API_TOKEN manquant dans .env.local");
  process.exit(1);
}

// ─── Helpers ──────────────────────────────────────────────
function generateKey() {
  return Math.random().toString(36).slice(2, 14);
}

/**
 * Convertit du Markdown simple en blocs Portable Text.
 * Supporte : h2, h3, h4, blockquote, listes à puces, listes numérotées,
 *            gras (**), italique (*), tableaux (ignorés → paragraphe),
 *            et composants MDX <Figure>, <MockupBrowser> (ignorés).
 */
function mdToPortableText(md) {
  if (!md) return [];
  const lines = md.split("\n");
  const blocks = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    // Skip empty lines
    if (!trimmed) { i++; continue; }

    // Skip MDX components (<Figure, <MockupBrowser, etc.)
    if (trimmed.startsWith("<") && !trimmed.startsWith("<http")) {
      // Skip until closing tag or end of component
      if (trimmed.endsWith("/>")) { i++; continue; }
      // Multi-line MDX component
      while (i < lines.length && !lines[i].trim().endsWith("/>") && !lines[i].trim().startsWith("</")) {
        i++;
      }
      i++;
      continue;
    }

    // Skip markdown table lines
    if (trimmed.startsWith("|")) { i++; continue; }

    // Headings
    const h4Match = trimmed.match(/^####\s+(.*)/);
    if (h4Match) {
      blocks.push(makeBlock(h4Match[1], "h4"));
      i++; continue;
    }
    const h3Match = trimmed.match(/^###\s+(.*)/);
    if (h3Match) {
      blocks.push(makeBlock(h3Match[1], "h3"));
      i++; continue;
    }
    const h2Match = trimmed.match(/^##\s+(.*)/);
    if (h2Match) {
      blocks.push(makeBlock(h2Match[1], "h2"));
      i++; continue;
    }
    // Skip H1 (we don't want duplicate H1 in body)
    const h1Match = trimmed.match(/^#\s+(.*)/);
    if (h1Match) {
      blocks.push(makeBlock(h1Match[1], "h2"));
      i++; continue;
    }

    // Blockquote
    if (trimmed.startsWith("> ")) {
      const quoteLines = [];
      while (i < lines.length && lines[i].trim().startsWith("> ")) {
        quoteLines.push(lines[i].trim().replace(/^>\s?/, ""));
        i++;
      }
      blocks.push(makeBlock(quoteLines.join(" "), "blockquote"));
      continue;
    }

    // Bullet list
    if (trimmed.match(/^[-*]\s+/)) {
      while (i < lines.length && lines[i].trim().match(/^[-*]\s+/)) {
        const text = lines[i].trim().replace(/^[-*]\s+/, "");
        blocks.push(makeListItem(text, "bullet"));
        i++;
      }
      continue;
    }

    // Numbered list
    if (trimmed.match(/^\d+\.\s+/)) {
      while (i < lines.length && lines[i].trim().match(/^\d+\.\s+/)) {
        const text = lines[i].trim().replace(/^\d+\.\s+/, "");
        blocks.push(makeListItem(text, "number"));
        i++;
      }
      continue;
    }

    // Regular paragraph
    const paraLines = [trimmed];
    i++;
    // Merge consecutive non-empty, non-special lines into one paragraph
    while (
      i < lines.length &&
      lines[i].trim() &&
      !lines[i].trim().startsWith("#") &&
      !lines[i].trim().startsWith(">") &&
      !lines[i].trim().startsWith("-") &&
      !lines[i].trim().startsWith("*") &&
      !lines[i].trim().match(/^\d+\./) &&
      !lines[i].trim().startsWith("|") &&
      !lines[i].trim().startsWith("<")
    ) {
      paraLines.push(lines[i].trim());
      i++;
    }
    blocks.push(makeBlock(paraLines.join(" "), "normal"));
  }

  return blocks;
}

function parseInlineMarks(text) {
  // Simple bold/italic parser → Portable Text spans
  const spans = [];
  const markDefs = [];
  let current = "";
  let j = 0;

  while (j < text.length) {
    // Bold: **text**
    if (text[j] === "*" && text[j + 1] === "*") {
      if (current) {
        spans.push({ _type: "span", _key: generateKey(), text: current, marks: [] });
        current = "";
      }
      j += 2;
      let bold = "";
      while (j < text.length && !(text[j] === "*" && text[j + 1] === "*")) {
        bold += text[j]; j++;
      }
      j += 2; // skip closing **
      spans.push({ _type: "span", _key: generateKey(), text: bold, marks: ["strong"] });
      continue;
    }
    // Italic: *text* (single)
    if (text[j] === "*" && text[j + 1] !== "*") {
      if (current) {
        spans.push({ _type: "span", _key: generateKey(), text: current, marks: [] });
        current = "";
      }
      j += 1;
      let italic = "";
      while (j < text.length && text[j] !== "*") {
        italic += text[j]; j++;
      }
      j += 1;
      spans.push({ _type: "span", _key: generateKey(), text: italic, marks: ["em"] });
      continue;
    }
    current += text[j];
    j++;
  }
  if (current) {
    spans.push({ _type: "span", _key: generateKey(), text: current, marks: [] });
  }

  return { spans, markDefs };
}

function makeBlock(text, style = "normal") {
  const { spans, markDefs } = parseInlineMarks(text);
  return {
    _type: "block",
    _key: generateKey(),
    style,
    markDefs,
    children: spans.length ? spans : [{ _type: "span", _key: generateKey(), text, marks: [] }],
  };
}

function makeListItem(text, listItem = "bullet") {
  const { spans, markDefs } = parseInlineMarks(text);
  return {
    _type: "block",
    _key: generateKey(),
    style: "normal",
    listItem,
    level: 1,
    markDefs,
    children: spans.length ? spans : [{ _type: "span", _key: generateKey(), text, marks: [] }],
  };
}

// ─── Client Documents ──────────────────────────────────────
const clients = [
  {
    _id: "client-eldo-wallet",
    _type: "client",
    name: "Eldo Wallet",
    slug: { _type: "slug", current: "eldo-wallet" },
    sector: "SaaS B2B",
    sectorIcon: "Cpu",
    // logo: Sanity image → for now we store as string in a URL field; images use public/ path
    description: "Solution fintech de gestion de portefeuille crypto pour les professionnels. De la phase de lancement à un modèle de revenus récurrents structuré.",
    size: "10-20 collaborateurs",
    location: "France",
    carouselTitle: "De 1 000 à 10 000 € de revenus récurrents mensuels grâce à la bonne stratégie de mise en marché.",
    carouselStat: { value: "x10", label: "revenu récurrent" },
    testimonial: {
      _type: "testimonial",
      quote: "Vizion a structuré notre mise en marché de A à Z. Le positionnement, le tunnel de vente, les outils commerciaux, tout était aligné. Les résultats ont suivi naturellement.",
      author: "Paul Scandella",
      role: "Fondateur",
    },
    body: mdToPortableText(
      `## Contexte\n\nEldo Wallet est une solution fintech qui permet aux professionnels de gérer leurs portefeuilles crypto de manière sécurisée et conforme. Après une phase de développement produit réussie, l'entreprise avait besoin de structurer sa mise en marché pour convertir l'intérêt en revenus récurrents.\n\n## Notre collaboration\n\nVizion a accompagné Eldo Wallet sur le positionnement produit, la construction du tunnel de vente, et les outils commerciaux. Un travail de fond sur l'architecture de message et la stratégie d'acquisition qui a permis de multiplier par 10 les revenus récurrents mensuels.`
    ),
    featured: true,
    order: 1,
    draft: false,
    metaTitle: "Eldo Wallet — Cas client Vizion",
    metaDescription: "Comment Vizion a accompagné Eldo Wallet dans sa mise en marché, passant de 1 000 à 10 000 € de revenus récurrents mensuels.",
  },
  {
    _id: "client-easyvirtual-tours",
    _type: "client",
    name: "easyVirtual.tours",
    slug: { _type: "slug", current: "easyvirtual-tours" },
    sector: "Franchise",
    sectorIcon: "Building2",
    description: "Pionnier des visites virtuelles immobilières, passé d'une agence pilote à Lyon à un réseau de 25 franchises déployées sur tout le territoire français.",
    size: "25 agences (réseau franchise)",
    location: "Lyon, France",
    carouselTitle: "D'acteur local à +25 agences en France grâce à notre accompagnement global.",
    carouselStat: { value: "+25", label: "agences en France" },
    testimonial: {
      _type: "testimonial",
      quote: "Nous externalisons une grosse partie de notre marketing auprès de Vizion : stratégie produit, aide à la vente, automatisation CRM, gestion de nos campagnes. Nous en sommes toujours très satisfaits, même deux ans après.",
      author: "Clément Carrère",
      role: "Fondateur",
    },
    body: mdToPortableText(
      `## Contexte\n\neasyVirtual.tours a révolutionné le secteur immobilier avec sa technologie de visites virtuelles 360° haute définition. Fondée en 2021 à Lyon, l'entreprise a rapidement prouvé la pertinence de son offre auprès des agents immobiliers locaux, avec un taux de satisfaction client de 94%.\n\nFort de ce succès, le fondateur a décidé de passer à la vitesse supérieure avec un modèle de franchise. L'objectif : permettre à des entrepreneurs locaux de répliquer le succès lyonnais dans leur propre ville, tout en bénéficiant de la technologie et de la marque easyVirtual.tours.\n\n## Notre collaboration\n\nVizion accompagne easyVirtual.tours depuis 2023 sur l'ensemble du périmètre marketing : positionnement de la marque franchise, construction du kit marketing franchisé, infrastructure d'acquisition centralisée, et formation des nouveaux partenaires. Un accompagnement global qui a permis de structurer la croissance du réseau de manière méthodique et reproductible.`
    ),
    featured: true,
    order: 2,
    draft: false,
    metaTitle: "easyVirtual.tours — Cas client Vizion",
    metaDescription: "Comment Vizion a accompagné easyVirtual.tours dans la création d'un système marketing franchisé qui a permis le déploiement de 25 agences en France.",
  },
  {
    _id: "client-ensenat-coaching",
    _type: "client",
    name: "Ensenat Coaching",
    slug: { _type: "slug", current: "ensenat-coaching" },
    sector: "Services B2B",
    sectorIcon: "GraduationCap",
    description: "Cabinet de coaching et formation pour dirigeants et managers. Accompagnement dans la structuration complète de son marketing et de son système d'acquisition.",
    size: "1-10 collaborateurs",
    location: "Toulouse, France",
    carouselTitle: "De zéro structure marketing à un système d'acquisition reproductible pour Ensenat Coaching.",
    carouselStat: { value: "100%", label: "marketing structuré" },
    testimonial: {
      _type: "testimonial",
      quote: "L'accompagnement d'Hugo et Lucas est vraiment qualitatif ! Compétents et très bons formateurs. Je recommande cette agence de Marketing digital à Toulouse !",
      author: "Thomas Ensenat",
      role: "Fondateur",
    },
    body: mdToPortableText(
      `## Contexte\n\nEnsenat Coaching accompagne les dirigeants et managers dans leur développement professionnel. Reconnu pour la qualité de ses interventions, le cabinet fonctionnait exclusivement au bouche-à-oreille et n'avait aucune structure marketing en place.\n\n## Notre collaboration\n\nVizion a construit de zéro l'infrastructure marketing d'Ensenat Coaching : positionnement clair, présence digitale structurée, système d'acquisition de prospects, et outils de suivi. Un accompagnement complet qui a permis de passer d'une dépendance au réseau personnel à un flux de prospects prévisible.`
    ),
    featured: true,
    order: 3,
    draft: false,
    metaTitle: "Ensenat Coaching — Cas client Vizion",
    metaDescription: "Comment Vizion a structuré le marketing d'Ensenat Coaching de zéro, créant un système d'acquisition reproductible et efficace.",
  },
];

// ─── Case Study ─────────────────────────────────────────
const caseStudyBody = `## Le contexte

easyVirtual.tours s'est imposé comme un acteur innovant sur le marché des services immobiliers en proposant des visites virtuelles 360° haute définition. Fondée en 2021 à Lyon, l'entreprise a rapidement prouvé la pertinence de son offre auprès des agents immobiliers locaux, avec un taux de satisfaction client de 94%.

Fort de ce succès, Thomas Mercier, le fondateur, a décidé de passer à la vitesse supérieure avec un modèle de franchise. L'objectif : permettre à des entrepreneurs locaux de répliquer le succès lyonnais dans leur propre ville, tout en bénéficiant de la technologie et de la marque easyVirtual.tours.

**Le défi était de taille** : comment transformer un succès local, largement basé sur le réseau personnel du fondateur, en un système marketing reproductible par des entrepreneurs non-marketeurs ?

## Les défis identifiés

### Défi 1 : L'absence de système marketing duplicable

Le succès de l'agence pilote reposait en grande partie sur l'expertise personnelle du fondateur et son réseau dans l'écosystème immobilier lyonnais. Aucun process documenté, aucun template, aucune campagne standardisée.

**Impact** : Impossible de promettre des résultats aux candidats franchisés sans système éprouvé.

### Défi 2 : Un positionnement à clarifier

easyVirtual.tours se présentait comme un "prestataire de visites virtuelles", au même titre que des photographes immobiliers classiques. Cette commoditisation tirait les prix vers le bas.

**Impact** : Marges réduites et difficulté à justifier un modèle de franchise premium.

### Défi 3 : La génération de leads locale

Comment garantir un flux de prospects à un franchisé qui ouvre à Bordeaux ou Lille, sans la notoriété locale dont bénéficiait l'agence lyonnaise ?

**Impact** : Risque majeur pour l'attractivité du modèle de franchise et la rentabilité des partenaires.

### Défi 4 : La formation marketing des franchisés

Les candidats franchisés étaient souvent d'anciens commerciaux ou entrepreneurs, pas des experts marketing digital. Il fallait les rendre autonomes rapidement.

**Impact** : Sans formation adaptée, les franchisés seraient dépendants du siège pour toute action marketing.

## Notre approche

Notre méthodologie s'est articulée autour de 4 phases distinctes, sur une période de 18 mois, avec une montée en puissance progressive.

> Notre conviction : un système de franchise réussi repose sur la capacité à transformer l'expertise du fondateur en process reproductibles et scalables.

### Phase 1 : Repositionnement stratégique

Nous avons d'abord travaillé sur le positionnement de la marque. Au lieu de vendre des "visites virtuelles" (une prestation technique), nous avons repositionné easyVirtual.tours comme un **accélérateur de ventes immobilières**.

Les données collectées montraient que les biens avec visite virtuelle se vendaient 32% plus vite. C'est devenu le cœur de notre argumentaire commercial.

### Phase 2 : Construction du kit franchisé

Chaque franchisé reçoit désormais un kit marketing complet comprenant :
- Templates de posts réseaux sociaux (52 semaines de contenu)
- Séquences email de prospection et nurturing
- Pitch deck commercial personnalisable
- Battlecards face aux concurrents
- Supports print (flyers, cartes de visite, kakémonos)

### Phase 3 : Infrastructure d'acquisition centralisée

Nous avons déployé une architecture marketing permettant de générer des leads au niveau national, puis de les redistribuer aux franchisés selon leur zone géographique :

- **SEO local** : Pages de destination optimisées pour chaque ville cible
- **Google Ads** : Campagnes géolocalisées avec budgets mutualisés
- **CRM centralisé** : Routage automatique des leads vers le bon franchisé
- **Nurturing automatisé** : Séquences de relance standardisées

### Phase 4 : Formation et accompagnement

Un programme de formation en 8 modules a été créé pour autonomiser les franchisés :
1. Comprendre son marché local
2. Maîtriser le pitch commercial
3. Prospecter efficacement (email, téléphone, terrain)
4. Gérer ses réseaux sociaux
5. Exploiter les leads entrants
6. Fidéliser et développer le bouche-à-oreille
7. Analyser ses performances
8. Optimiser en continu

## Les résultats obtenus

Après 18 mois de déploiement, les résultats ont largement dépassé les objectifs initiaux :

- **25 agences ouvertes** sur le territoire français, contre un objectif de 15
- **+340% de leads mensuels** pour l'ensemble du réseau (850 leads/mois vs 195 au démarrage)
- **87% des franchisés rentables** dès le 6ème mois d'activité
- **Taux de conversion leads → RDV** de 23% en moyenne réseau
- **NPS franchisés** de 72, témoignant d'une satisfaction élevée

## Impact à long terme

Au-delà des métriques immédiates, cette transformation a permis à easyVirtual.tours de :

1. **Accélérer le recrutement de franchisés** : le système marketing éprouvé est devenu un argument de vente majeur auprès des candidats
2. **Créer un avantage concurrentiel durable** : les concurrents qui tentent le modèle franchise n'ont pas ce niveau de structuration
3. **Optimiser les coûts d'acquisition** : la mutualisation des campagnes Google Ads réduit le CPL de 35%
4. **Construire une communauté** : les franchisés partagent leurs bonnes pratiques via un groupe privé animé par le siège

## Ce qu'on retient

Les facteurs clés de succès de cette mission :

- **Vision claire du fondateur** : Thomas savait où il voulait aller, nous avons structuré le chemin
- **Investissement dans les fondations** : Avant de scaler, nous avons pris le temps de documenter et tester chaque élément
- **Implication des premiers franchisés** : Les 5 premiers ont été associés à l'amélioration continue du système
- **Mesure constante** : Dashboard de pilotage permettant d'identifier rapidement les zones d'optimisation`;

const caseStudies = [
  {
    _id: "casestudy-easyvirtual-franchise",
    _type: "caseStudy",
    title: "De l'unité pilote au réseau national : 25 agences en France",
    slug: { _type: "slug", current: "easyvirtual-tours-franchise" },
    description: "Comment easyVirtual.tours est passé d'une agence pilote à un réseau de 25 franchises en 18 mois grâce à un système marketing centralisé et duplicable.",
    sector: "Franchise",
    sectorIcon: "Building2",
    company: "easyVirtual.tours",
    client: { _type: "reference", _ref: "client-easyvirtual-tours" },
    executiveSummary: "easyVirtual.tours, pionnier des visites virtuelles immobilières, cherchait à passer d'un modèle d'agence unique à un réseau de franchises national. En 18 mois, nous avons construit un système marketing centralisé et un playbook de croissance locale qui ont permis le déploiement de 25 agences sur tout le territoire français.",
    projectDuration: "18 mois",
    projectYear: "2024",
    context: "easyVirtual.tours a révolutionné le secteur immobilier avec sa technologie de visites virtuelles 360°. Après avoir prouvé son concept avec une première agence rentable à Lyon, l'entreprise souhaitait accélérer son développement via un modèle de franchise. Le défi : créer un système marketing suffisamment robuste pour être dupliqué par des entrepreneurs non-marketeurs, tout en maintenant une qualité d'exécution homogène sur tout le territoire.",
    challenges: [
      "Absence de playbook marketing reproductible pour les futurs franchisés",
      "Génération de leads locale inexistante au-delà de la zone pilote",
      "Positionnement flou face aux concurrents traditionnels (photographes immobiliers)",
      "Manque d'outils et de process pour former rapidement les nouveaux franchisés",
      "Dépendance aux réseaux personnels du fondateur pour la prospection",
    ],
    approachPhases: [
      {
        _type: "approachPhase",
        _key: generateKey(),
        phase: "Phase 1",
        title: "Audit & Positionnement",
        description: "Analyse approfondie du marché des visites virtuelles, étude de la concurrence, et définition d'un positionnement différenciant axé sur la valeur business pour les agents immobiliers.",
        deliverables: [
          "Étude de marché et benchmark concurrentiel",
          "Positionnement de marque et proposition de valeur",
          "Personas acheteurs (agents, agences, promoteurs)",
        ],
      },
      {
        _type: "approachPhase",
        _key: generateKey(),
        phase: "Phase 2",
        title: "Brand Platform & Assets",
        description: "Création de l'identité de marque franchise, des templates marketing, et des outils de vente pour équiper chaque franchisé d'un kit complet.",
        deliverables: [
          "Charte graphique et guidelines de marque",
          "Kit marketing franchisé (20+ templates)",
          "Pitch deck commercial et battlecards",
        ],
      },
      {
        _type: "approachPhase",
        _key: generateKey(),
        phase: "Phase 3",
        title: "Système de Lead Generation",
        description: "Mise en place d'une stratégie d'acquisition multicanale avec SEO local, Google Ads géolocalisé, et système de nurturing centralisé.",
        deliverables: [
          "Pages de destination locales optimisées SEO",
          "Campagnes Google Ads par zone géographique",
          "Système CRM et automation de nurturing",
        ],
      },
      {
        _type: "approachPhase",
        _key: generateKey(),
        phase: "Phase 4",
        title: "Playbook & Déploiement",
        description: "Documentation complète du système marketing et formation des premiers franchisés, puis accompagnement au déploiement national.",
        deliverables: [
          "Playbook marketing franchisé (120 pages)",
          "Programme de formation marketing (8 modules)",
          "Dashboard de pilotage réseau",
        ],
      },
    ],
    metrics: [
      { _type: "metric", _key: generateKey(), value: "25", label: "Agences en France", trend: "up" },
      { _type: "metric", _key: generateKey(), value: "18 mois", label: "Pour le déploiement", trend: "neutral" },
      { _type: "metric", _key: generateKey(), value: "+340%", label: "Leads mensuels réseau", trend: "up" },
      { _type: "metric", _key: generateKey(), value: "87%", label: "Franchisés rentables à M6", trend: "up" },
    ],
    resultsDetails: "Le système marketing centralisé génère aujourd'hui plus de 850 leads qualifiés par mois pour l'ensemble du réseau. Chaque franchisé bénéficie d'un flux de prospects constant dès son ouverture, avec un taux de conversion moyen de 23% en rendez-vous. Le ROI du kit marketing est atteint en moyenne en 4 mois d'activité pour les nouveaux franchisés.",
    testimonial: {
      _type: "testimonial",
      quote: "Nous avions une technologie excellente mais aucun système pour la commercialiser à grande échelle. L'équipe a construit une véritable machine marketing que nos franchisés peuvent actionner dès le premier jour. Le playbook est devenu notre avantage concurrentiel majeur pour recruter de nouveaux partenaires.",
      author: "Thomas Mercier",
      role: "Fondateur & CEO",
      company: "easyVirtual.tours",
    },
    deliverables: [
      { _key: generateKey(), title: "Playbook Marketing Franchisé", description: "Documentation complète de 120 pages couvrant tous les aspects du marketing local", icon: "BookOpen" },
      { _key: generateKey(), title: "Kit Templates Marketing", description: "20+ templates personnalisables (posts, emails, flyers, présentations)", icon: "Palette" },
      { _key: generateKey(), title: "Système Lead Gen Centralisé", description: "Infrastructure technique et campagnes d'acquisition multicanale", icon: "Target" },
      { _key: generateKey(), title: "Formation Marketing Digital", description: "8 modules de formation pour autonomiser les franchisés", icon: "GraduationCap" },
    ],
    body: mdToPortableText(caseStudyBody),
    publishedAt: "2024-06-15T00:00:00Z",
    featured: true,
    order: 1,
    draft: false,
    metaTitle: "easyVirtual.tours - De 1 à 25 franchises en 18 mois",
    metaDescription: "Découvrez comment nous avons accompagné easyVirtual.tours dans la création d'un système marketing franchisé qui a permis le déploiement de 25 agences en France.",
  },
];

// ─── Blog Post ──────────────────────────────────────────
const blogPostBody = `## Introduction

## Qu'est-ce que le product marketing ?

Vous avez passé des mois, voire des années, à peaufiner une solution technique irréprochable. Pourtant, au moment du lancement, le marché reste silencieux. Pourquoi ? Parce qu'un bon produit ne se vend jamais seul. Je vais être direct avec vous : sans une stratégie de product marketing (PMM) solide, votre innovation n'est qu'un dossier technique perdu dans le bruit numérique.

> "Le product marketing est l'art de traduire les fonctionnalités en bénéfices et les intentions en adhésion totale du marché."

Mon rôle, à travers ce guide, est de vous montrer comment combler le fossé entre la vision de vos ingénieurs et la réalité de vos clients. Le product marketing est ce « pont » stratégique qui garantit que le bon message atteint la bonne personne, au bon moment.

### Pourquoi vous ne pouvez plus l'ignorer
Pour dominer votre secteur, je vous propose de vous concentrer sur les trois piliers fondamentaux qui font le succès des leaders de la tech :

- **La connaissance client (Customer Insights) :** Comprendre non pas ce que les clients disent vouloir, mais ce dont ils ont réellement besoin.
- **Le positionnement (Messaging) :** Définir comment vous allez gagner face à vos concurrents dans l'esprit de l'acheteur.
- **L'activation (Go-to-Market) :** Orchestrer le lancement pour transformer la curiosité en revenus concrets.

### Distinction entre marketing classique et product marketing
Il est crucial de ne pas confondre ces deux disciplines. Voici comment je segmente ces rôles pour mes clients :

Dans les sections suivantes, nous allons explorer ensemble comment transformer votre approche pour que votre marché ne se contente pas d'écouter, mais qu'il adhère durablement à votre proposition de valeur.

## Les piliers fondamentaux d'une stratégie de product marketing

### Les piliers fondamentaux d'une stratégie de product marketing

Une stratégie de product marketing robuste ne repose pas sur l'intuition, mais sur une méthodologie rigoureuse visant à combler le fossé entre le développement produit et le succès commercial. Pour garantir la pertinence d'une offre sur son marché, trois piliers fondamentaux doivent être érigés.

#### 1. L'intelligence de marché et l'analyse de la concurrence
L'intelligence de marché constitue le socle de toute prise de décision stratégique. Elle consiste à collecter et analyser des données sur les tendances du secteur, les besoins non satisfaits et les forces en présence. L'analyse de la concurrence ne se limite pas à lister des fonctionnalités ; elle doit décrypter la stratégie adverse pour identifier des opportunités de différenciation.

- **Veille concurrentielle :** Surveiller les lancements de produits, les tarifs et les changements de discours.
- **Analyse SWOT :** Identifier les faiblesses des concurrents pour en faire des forces de vente.

#### 2. La définition précise des buyer personas
Il est impossible de vendre efficacement sans savoir exactement à qui l'on s'adresse. Un buyer persona est une représentation semi-fictive du client idéal basée sur des données réelles et des recherches qualitatives. Au-delà des critères démographiques, le product marketing se concentre sur les motivations profondes, les défis quotidiens et les freins à l'achat.

> "Une stratégie de product marketing qui ignore la psychologie de son persona est condamnée à produire des messages qui ne résonnent pas et ne convertissent pas."

#### 3. Le positionnement et la proposition de valeur
Le positionnement définit la place unique que votre produit occupe dans l'esprit de vos clients par rapport aux alternatives. Il sert de guide pour toute la communication marketing. La proposition de valeur, quant à elle, exprime concrètement le bénéfice net que le client retire de l'utilisation du produit.

L'articulation de ces trois éléments permet de transformer des fonctionnalités techniques en solutions d'affaires tangibles, garantissant ainsi un alignement parfait entre le produit et les attentes du marché.

## Le déploiement opérationnel : la stratégie de go-to-market

La stratégie de Go-to-Market (GTM) constitue le pont critique entre le développement produit et la réussite commerciale. Elle ne se limite pas à un lancement ponctuel, mais définit comment l'entreprise va délivrer sa proposition de valeur unique aux clients pour obtenir un avantage concurrentiel.

### L'élaboration du message et du storytelling produit

Le succès d'un déploiement repose sur la capacité à transformer des spécificités techniques en un récit engageant. Le storytelling produit doit placer l'utilisateur au centre de l'intrigue, en abordant directement ses points de douleur.

- **Définition du positionnement :** Identifier où le produit se situe par rapport aux alternatives du marché.
- **Cadre de messagerie :** Créer une hiérarchie de messages cohérents qui résonnent avec chaque persona cible.
- **Différenciation :** Mettre l'accent sur la valeur ajoutée unique (USP) plutôt que sur une simple liste de fonctionnalités.

> Le succès d'un produit dépend moins de ses fonctionnalités intrinsèques que de la capacité de l'organisation à en démontrer la valeur métier immédiate et son impact sur le quotidien de l'utilisateur.

### La planification et l'exécution du lancement

Un lancement efficace est le résultat d'une orchestration minutieuse entre les équipes produit, marketing et commerciales. Cette phase nécessite une gestion de projet rigoureuse pour aligner les délais internes avec les opportunités du marché.

### Le sales enablement : soutenir les équipes commerciales

Le sales enablement est le processus stratégique consistant à fournir aux équipes de vente les ressources nécessaires pour engager efficacement les acheteurs. L'objectif est de réduire la friction dans le cycle de vente et d'augmenter le taux de conversion.

- **Outils de vente :** Mise à disposition de fiches produits, d'études de cas et de "battlecards" comparatives.
- **Formation continue :** Ateliers sur le traitement des objections et la démonstration de valeur.
- **Alignement contenu-vente :** S'assurer que les supports marketing répondent aux questions réelles posées par les prospects durant le tunnel de vente.

En intégrant ces trois dimensions, la stratégie de GTM devient un moteur de croissance prévisible, transformant l'innovation technologique en succès commercial tangible.

## Différencier le product marketing du product management et du marketing digital

### Différencier le product marketing du product management et du marketing digital

Le Product Marketing (PMM) occupe une position pivot au sein des organisations B2B, agissant comme le « tissu conjonctif » entre le développement produit, les ventes et le marketing global. Pour saisir sa valeur stratégique, il convient de le distinguer des fonctions avec lesquelles il collabore étroitement.

#### La complémentarité avec le product manager

Bien que leurs périmètres s'entrecroisent, le Product Manager (PM) et le Product Marketing Manager (PMM) pilotent des cycles différents. Le PM se concentre sur le **« quoi »** et le **« comment »** : il définit la feuille de route technique, gère le backlog et s'assure que le produit est fonctionnel et intuitif.

À l'inverse, le PMM se concentre sur le **« qui »**, le **« pourquoi »** et le **« où »**. Il transforme les fonctionnalités techniques en bénéfices concrets et assure l'adéquation continue entre le produit et son marché (Product-Market Fit).

> « Si le Product Manager est la voix du produit auprès des développeurs, le Product Marketing Manager est la voix du marché auprès de l'entreprise. »

#### L'articulation avec les leviers de croissance traditionnels

Contrairement au marketing digital, qui se focalise majoritairement sur l'optimisation des canaux d'acquisition (SEO, SEA, réseaux sociaux), le Product Marketing fournit la **substance stratégique** indispensable à l'efficacité de ces leviers.

- **Le marketing digital** gère le « haut du tunnel » (Top of Funnel) en générant du trafic et des leads via des tactiques de diffusion et de mesure d'audience.
- **Le product marketing** intervient en amont et en soutien : il définit les segments cibles, analyse la concurrence et crée les outils d'aide à la vente (Sales Enablement) pour convertir ces leads en clients.

Sans l'apport du PMM, les campagnes de marketing digital risquent de souffrir d'un manque de pertinence, car elles s'appuieraient sur des messages génériques plutôt que sur une compréhension profonde des points de douleur (pain points) des acheteurs. L'articulation se fait par un transfert de connaissances : le PMM forge le message, et le marketing digital l'amplifie via les canaux appropriés.

## Mesurer le succès : les indicateurs de performance clés

Pour valider l'efficacité d'une stratégie de marketing produit ou de sales enablement, il est impératif de s'appuyer sur des données quantifiables. Sans une mesure rigoureuse, l'alignement entre les ventes et le marketing reste théorique. Voici les piliers de mesure essentiels pour piloter votre performance.

### 1. Le taux d'adoption et l'engagement des utilisateurs

Le premier indicateur de succès réside dans la consommation des ressources par les équipes de vente. Un contenu de haute qualité n'a aucune valeur s'il n'est pas utilisé sur le terrain.

- **Taux d'adoption :** Mesure le pourcentage de l'équipe commerciale qui utilise régulièrement les outils mis à leur disposition.
- **Engagement interne :** Analyse la fréquence de consultation et de partage des documents avec les prospects.

### 2. L'impact sur le cycle de vente et le taux de signature

Une stratégie réussie doit se traduire par une accélération de la conversion. L'optimisation des supports de vente permet de répondre plus rapidement aux objections des prospects.

> "L'efficacité d'une stratégie ne se mesure pas à la quantité de contenu produit, mais à sa capacité à transformer l'interaction commerciale en valeur tangible pour le client."

### 3. La réduction du taux d'attrition ou churn rate

Le succès ne s'arrête pas à la signature du contrat. L'alignement stratégique assure que les promesses faites lors de la vente correspondent à la réalité du produit, ce qui stabilise la base client.

- **Rétention client :** Une meilleure éducation du client dès la phase de vente réduit les déceptions post-achat.
- **Satisfaction client (NPS) :** Les clients qui ont bénéficié d'un parcours d'achat cohérent et informatif ont tendance à être plus fidèles.

En croisant ces indicateurs, les entreprises peuvent ajuster leurs ressources en temps réel pour maximiser leur retour sur investissement.

## Conclusion : vers une ère de pertinence absolue

Le product marketing n'est plus une simple étape de lancement ; il est devenu le centre de gravité des entreprises qui durent. En regardant vers l'avenir, nous voyons une discipline qui s'affranchit des silos traditionnels pour piloter la croissance par la donnée et l'empathie client.

> "Dans un marché saturé, la supériorité technique s'efface devant la pertinence du positionnement. L'avenir appartient à ceux qui ne vendent pas des outils, mais des transformations."

### L'évolution du rôle : du lancement à la stratégie continue

Demain, le product marketing manager (PMM) sera le chef d'orchestre d'une expérience client fluide, dictée par l'intelligence artificielle et l'analyse prédictive. L'enjeu ne sera plus seulement de comprendre le marché actuel, mais d'anticiper les frictions avant même qu'elles n'apparaissent.

### Pourquoi votre agilité sera votre meilleur atout

Pour conclure, maîtriser le product marketing aujourd'hui, c'est s'assurer une place de leader demain. Les entreprises qui réussiront seront celles capables de :

- **Réinterpréter la valeur :** Ajuster le discours en fonction des crises ou des évolutions sociétales.
- **Intégrer l'IA :** Utiliser les outils génératifs pour tester des dizaines de positionnements en quelques heures.
- **Placer l'éthique au centre :** Le marketing de demain sera transparent ou ne sera pas.

Le product marketing est le moteur de votre pertinence sur le long terme. En investissant dans cette expertise, vous ne vous contentez pas de vendre un produit : vous bâtissez une autorité incontestable sur votre marché.

## Foire aux questions

### Quelle est la différence entre marketing produit et marketing de marque ?

Bien que complémentaires, ces deux fonctions opèrent à des niveaux différents de l'entonnoir de conversion. Le marketing de marque construit l'identité globale et la perception émotionnelle de l'entreprise. À l'inverse, le marketing produit (PMM) se concentre sur l'articulation de la valeur spécifique d'une solution pour répondre aux besoins concrets des utilisateurs.

### Quelles compétences sont nécessaires pour devenir product marketing manager ?

Le rôle de PMM est intrinsèquement transversal, nécessitant un mélange de compétences analytiques et créatives. Pour exceller, un professionnel doit maîtriser :

- **L'empathie client :** Capacité à comprendre profondément les points de douleur et les motivations des acheteurs.
- **L'analyse de données :** Interpréter les tendances du marché et les comportements d'utilisation pour orienter la stratégie.
- **Le storytelling technique :** Transformer des fonctionnalités complexes en bénéfices clairs et percutants.
- **Le leadership d'influence :** Collaborer étroitement avec les équipes produit, commerciales et marketing sans autorité hiérarchique directe.

### À partir de quelle taille d'entreprise faut-il une équipe dédiée ?

Il n'existe pas de seuil universel, mais le besoin d'un expert dédié se fait généralement sentir dès que l'entreprise atteint une phase de croissance accélérée (Scale-up), souvent entre 20 et 50 employés.

> "Le recrutement d'un PMM devient critique dès que la complexité du produit dépasse la capacité de compréhension immédiate des équipes commerciales et que le cycle de vente s'allonge par manque de clarté dans le positionnement."

Plus que la taille, c'est l'atteinte du Product-Market Fit qui dicte ce besoin : dès lors qu'il faut industrialiser la vente et se différencier sur un marché concurrentiel, une fonction PMM dédiée devient un levier de performance indispensable.`;

const posts = [
  {
    _id: "post-product-marketing-guide",
    _type: "post",
    title: "Qu'est-ce que le product marketing ? Le guide complet pour maîtriser le marché",
    slug: { _type: "slug", current: "quest-ce-que-le-product-marketing-le-guide-complet" },
    description: "Guide complet du product marketing (PMM) pour entreprises B2B. Découvrez comment définir votre positionnement, construire votre go-to-market et accélérer vos ventes. Expertise Vizion Toulouse.",
    date: "2026-01-23T00:00:00Z",
    author: "Lucas Gonzalez",
    category: "IA for Sales",
    tags: [
      "product marketing manager",
      "go-to-market",
      "positionnement",
      "proposition de valeur",
      "buyer persona",
    ],
    featuredImageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    draft: false,
    body: mdToPortableText(blogPostBody),
    resources: [
      { _type: "resource", _key: generateKey(), title: "scribd.com", url: "https://www.scribd.com", type: "external", description: "Source identifiée pour le maillage de preuves." },
      { _type: "resource", _key: generateKey(), title: "productmarketingalliance.com", url: "https://www.productmarketingalliance.com", type: "external", description: "Source identifiée pour le maillage de preuves." },
      { _type: "resource", _key: generateKey(), title: "forrester.com", url: "https://www.forrester.com", type: "external", description: "Source identifiée pour le maillage de preuves." },
      { _type: "resource", _key: generateKey(), title: "highspot.com", url: "https://www.highspot.com", type: "external", description: "Source identifiée pour le maillage de preuves." },
    ],
    faq: [
      { _type: "faq", _key: generateKey(), question: "Quelle est la différence entre marketing produit et marketing de marque ?", answer: "Le marketing de marque construit l'identité globale et la perception émotionnelle de l'entreprise. Le marketing produit (PMM) se concentre sur l'articulation de la valeur spécifique d'une solution pour répondre aux besoins concrets des utilisateurs." },
      { _type: "faq", _key: generateKey(), question: "Quelles compétences sont nécessaires pour devenir product marketing manager ?", answer: "Le rôle de PMM nécessite un mélange de compétences : empathie client, analyse de données, storytelling technique, et leadership d'influence pour collaborer avec les équipes produit, commerciales et marketing." },
      { _type: "faq", _key: generateKey(), question: "À partir de quelle taille d'entreprise faut-il une équipe dédiée ?", answer: "Le besoin d'un expert dédié se fait sentir dès la phase de croissance accélérée, souvent entre 20 et 50 employés. C'est l'atteinte du Product-Market Fit qui dicte ce besoin plutôt que la taille." },
    ],
    ctaTitle: "Besoin d'accompagnement ?",
    ctaDescription: "Notre équipe vous aide à mettre en place les meilleures stratégies.",
    ctaLink: "/contact",
  },
];

// ─── Execute Migration ──────────────────────────────────
async function migrate() {
  console.log("🚀 Début de la migration vers Sanity...\n");

  // 1. Create clients
  console.log("📦 Création des 3 clients...");
  for (const doc of clients) {
    try {
      await client.createOrReplace(doc);
      console.log(`  ✓ ${doc.name} (${doc._id})`);
    } catch (err) {
      console.error(`  ✗ ${doc.name}:`, err.message);
    }
  }

  // 2. Create case studies (depends on client references)
  console.log("\n📦 Création de l'étude de cas...");
  for (const doc of caseStudies) {
    try {
      await client.createOrReplace(doc);
      console.log(`  ✓ ${doc.title} (${doc._id})`);
    } catch (err) {
      console.error(`  ✗ ${doc.title}:`, err.message);
    }
  }

  // 3. Create blog posts
  console.log("\n📦 Création de l'article de blog...");
  for (const doc of posts) {
    try {
      await client.createOrReplace(doc);
      console.log(`  ✓ ${doc.title} (${doc._id})`);
    } catch (err) {
      console.error(`  ✗ ${doc.title}:`, err.message);
    }
  }

  console.log("\n✅ Migration terminée !");
  console.log("   → 3 clients, 1 étude de cas, 1 article de blog");
  console.log("   → Vérifiez dans Sanity Studio : /studio");
}

migrate().catch((err) => {
  console.error("❌ Erreur fatale:", err);
  process.exit(1);
});
