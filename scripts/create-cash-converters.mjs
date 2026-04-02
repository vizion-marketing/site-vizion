// Script Sanity — Création client + cas client Cash Converters
// Usage: node scripts/create-cash-converters.mjs

import { createClient } from "@sanity/client";
import * as dotenv from "dotenv";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local") });

const client = createClient({
  projectId: "odavbqx4",
  dataset: "production",
  apiVersion: "2026-03-06",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

// ─── 1. CLIENT ──────────────────────────────────────────────────────────────
const clientDoc = {
  _type: "client",
  _id: "client-cash-converters",
  name: "Cash Converters",
  slug: { _type: "slug", current: "cash-converters" },
  companyType: "Franchise",
  sector: "Commerce de proximité",
  sectorIcon: "Store",
  headline:
    "Générer des candidatures franchisées qualifiées via Meta Ads, avant le Salon de la Franchise.",
  description:
    "Cash Converters est un réseau de franchise spécialisé dans l'achat-vente de produits d'occasion. En phase de recrutement franchisé, l'enjeu était de bâtir une machine d'acquisition paid social performante, rapidement, avec un budget contraint.",
  size: "Réseau franchise",
  location: "France",
  website: "https://www.cash-converters.fr",
  highlightMetrics: [
    { _type: "metric", _key: "m1", value: "-44%", label: "CPL vs moyenne marché", trend: "down" },
    { _type: "metric", _key: "m2", value: "3", label: "campagnes structurées en parallèle", trend: "neutral" },
    { _type: "metric", _key: "m3", value: "Phase test", label: "Résultats dès l'apprentissage", trend: "up" },
  ],
  featured: false,
  order: 10,
  draft: true,
  metaTitle: "Cash Converters : campagnes Meta Ads recrutement franchisé | Vizion",
  metaDescription:
    "Comment Vizion a structuré les campagnes Meta Ads de Cash Converters pour recruter des franchisés avec un CPL 44% inférieur à la moyenne du marché dès la phase de test.",
};

// ─── 2. CAS CLIENT ──────────────────────────────────────────────────────────
const caseStudyDoc = {
  _type: "caseStudy",
  _id: "casestudy-cash-converters-meta-ads",
  title: "44% de CPL en dessous du marché dès la phase de test",
  slug: { _type: "slug", current: "campagnes-meta-ads-recrutement-franchise" },
  description:
    "Structure de campagnes Meta Ads pour le recrutement franchisé Cash Converters, avec un CPL 44% inférieur à la moyenne du marché dès la phase d'apprentissage.",
  client: {
    _type: "reference",
    _ref: "client-cash-converters",
  },
  projectDuration: "1 mois",
  projectYear: "2025",
  context:
    "Landing page et formulaire en place, il fallait désormais amener du trafic qualifié sur le dispositif. L'objectif : valider les messages, identifier les audiences les plus réceptives et poser les bases d'un funnel d'acquisition scalable avant le Salon de la Franchise.",
  challenges: [
    "Partir de zéro sur Meta Ads en recrutement franchisé avec un budget contraint, c'est le risque de brûler du budget en apprentissage sans capitaliser sur les enseignements.",
    "Il fallait une structure de campagnes rigoureuse dès le départ, avec des angles distincts à tester et une logique de retargeting intégrée.",
  ],
  approachPhases: [
    {
      _type: "approachPhase",
      _key: "phase1",
      phase: "01",
      title: "Architecture de la matrice de campagnes",
      description:
        "Vizion a conçu et piloté une matrice de trois campagnes : test de messaging, campagne événementielle Salon de la Franchise, et retargeting des visiteurs chauds. Chaque campagne avait un rôle précis dans le funnel, avec des audiences et des budgets distincts.",
      deliverables: [
        "Architecture de 3 campagnes Meta Ads",
        "Définition des audiences par segment",
        "Cadrage budgétaire et allocation par campagne",
      ],
    },
    {
      _type: "approachPhase",
      _key: "phase2",
      phase: "02",
      title: "Tests créatifs et identification des messages gagnants",
      description:
        "Plusieurs angles créatifs ont été testés en parallèle pour identifier rapidement ce qui résonne le mieux auprès des candidats franchisés. Pilotage quotidien, ajustements en temps réel et documentation des enseignements pour préparer la montée en puissance post-Salon.",
      deliverables: [
        "Copy et briefs visuels par angle",
        "Protocole de lecture des résultats",
        "Recommandations de scaling post-test",
      ],
    },
  ],
  metrics: [
    { _type: "metric", _key: "r1", value: "-44%", label: "CPL vs moyenne du marché", trend: "down" },
    { _type: "metric", _key: "r2", value: "3", label: "campagnes en parallèle", trend: "neutral" },
    { _type: "metric", _key: "r3", value: "Phase test", label: "Résultats dès l'apprentissage", trend: "up" },
  ],
  resultsDescription:
    "Dès les premiers tests, Cash Converters affiche un CPL 44% inférieur à la moyenne du marché en recrutement franchisé. Un signal fort, obtenu en phase d'apprentissage, avec un budget encore limité.",
  deliverables: [
    {
      _type: "object",
      _key: "d1",
      title: "Architecture Meta Ads",
      description: "Matrice de 3 campagnes structurées avec objectifs, audiences et budgets distincts.",
      icon: "Layers",
    },
    {
      _type: "object",
      _key: "d2",
      title: "Tests créatifs multi-angles",
      description: "Copy et briefs visuels pour chaque angle testé auprès des candidats franchisés.",
      icon: "Zap",
    },
    {
      _type: "object",
      _key: "d3",
      title: "Campagne retargeting",
      description: "Séquence de retargeting visiteurs chauds intégrée dès la phase de test.",
      icon: "RefreshCw",
    },
    {
      _type: "object",
      _key: "d4",
      title: "Rapport de performance",
      description: "Analyse des résultats et recommandations pour la montée en puissance post-Salon.",
      icon: "BarChart2",
    },
  ],
  publishedAt: new Date().toISOString(),
  featured: false,
  order: 10,
  draft: true,
  metaTitle: "Cash Converters : -44% de CPL Meta Ads recrutement franchisé | Vizion",
  metaDescription:
    "Vizion structure les campagnes Meta Ads de Cash Converters pour recruter des franchisés. Résultat : CPL 44% inférieur au marché dès la phase de test.",
};

// ─── INSERTION ───────────────────────────────────────────────────────────────
async function main() {
  console.log("Création du client Cash Converters...");
  const createdClient = await client.createOrReplace(clientDoc);
  console.log("✓ Client créé :", createdClient._id);

  console.log("Création du cas client...");
  const createdCase = await client.createOrReplace(caseStudyDoc);
  console.log("✓ Cas client créé :", createdCase._id);

  console.log("\n✅ Terminé. Les deux documents sont en mode draft=true.");
  console.log("   → Ouvre /studio pour ajouter les images et publier.");
}

main().catch((err) => {
  console.error("Erreur :", err.message);
  process.exit(1);
});
