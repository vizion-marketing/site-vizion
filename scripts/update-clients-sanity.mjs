/**
 * Mise à jour des 3 clients prioritaires dans Sanity
 * Basé sur TEMPLATE_CLIENT_SANITY.md validé
 *
 * Usage: node scripts/update-clients-sanity.mjs
 */

import { createClient } from "@sanity/client";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "odavbqx4",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2026-03-06",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

if (!process.env.SANITY_API_TOKEN) {
  console.error("SANITY_API_TOKEN manquant dans .env.local");
  process.exit(1);
}

// ─── Clients à mettre à jour ─────────────────────────────

const clients = [
  {
    _id: "client-easyvirtual-tours",
    _type: "client",
    name: "easyVirtual.tours",
    slug: { _type: "slug", current: "easyvirtual-tours" },
    companyType: "Franchise",
    sector: "Franchise",
    sectorIcon: "Building2",
    headline:
      "Accompagner une filiale du groupe Easy dans son déploiement en franchise en France et au Royaume-Uni",
    description:
      "Pionnier des visites virtuelles immobilières, passé d'une agence pilote à Lyon à un réseau de 25 franchises déployées sur tout le territoire français.",
    size: "25 agences (réseau franchise)",
    location: "Lyon, France",
    testimonial: {
      _type: "testimonial",
      quote:
        "Nous externalisons une grosse partie de notre marketing auprès de Vizion : stratégie produit, aide à la vente, automatisation CRM, gestion de nos campagnes. Nous en sommes toujours très satisfaits, même deux ans après.",
      author: "Clément Carrère",
      role: "Fondateur",
    },
    highlightMetrics: [
      {
        _type: "metric",
        _key: "ev1",
        value: "+25",
        label: "agences en France",
      },
      {
        _type: "metric",
        _key: "ev2",
        value: "94%",
        label: "satisfaction client",
      },
      {
        _type: "metric",
        _key: "ev3",
        value: "18",
        label: "mois de collaboration",
      },
    ],
    featured: true,
    order: 2,
    draft: false,
    metaTitle: "easyVirtual.tours, cas client Vizion",
    metaDescription:
      "Comment Vizion a accompagné easyVirtual.tours dans la création d'un système marketing franchisé qui a permis le déploiement de 25 agences en France.",
  },
  {
    _id: "client-eldo-wallet",
    _type: "client",
    name: "eldo wallet",
    slug: { _type: "slug", current: "eldo-wallet" },
    companyType: "Start-up",
    sector: "MarTech / SaaS",
    sectorIcon: "Monitor",
    headline:
      "Structurer la stratégie Go-To-Market d'une start-up SaaS spécialisée dans la digitalisation des programmes de fidélité via Apple et Google Wallet",
    description:
      "eldo wallet permet aux enseignes, réseaux retail et opérateurs de transport de digitaliser leurs cartes de fidélité, cartes membres et billets dans le wallet mobile de leurs clients, sans application. Vizion intervient sur la stratégie Go-To-Market, les campagnes d'acquisition, la création de contenu et l'implémentation de la stack d'acquisition.",
    location: "France",
    website: "https://eldowallet.fr",
    testimonial: {
      _type: "testimonial",
      quote:
        "Après avoir testé plusieurs agences marketing, nous travaillons avec Vizion depuis plus de 6 mois maintenant sur tout ce qui est inhérent à notre stratégie Go-To-Market. Nous adorons leur réactivité, leur proximité et leur capacité à innover constamment. C'est devenu un vrai partenaire stratégique de notre croissance.",
      author: "Paul Scandella",
      role: "Co-fondateur et CEO, eldo wallet",
    },
    highlightMetrics: [
      {
        _type: "metric",
        _key: "ew1",
        value: "+6",
        label: "mois de collaboration",
      },
      {
        _type: "metric",
        _key: "ew2",
        value: "1",
        label: "stratégie Go-To-Market complète",
      },
      {
        _type: "metric",
        _key: "ew3",
        value: "2",
        label: "secteurs transport et retail",
      },
    ],
    featured: true,
    order: 1,
    draft: false,
    metaTitle: "eldo wallet, cas client Vizion",
    metaDescription:
      "Comment Vizion accompagne eldo wallet dans sa stratégie Go-To-Market : campagnes d'acquisition, création de contenu et implémentation de la stack d'acquisition sur les marchés transport et retail.",
  },
  {
    _id: "client-groupe-aura",
    _type: "client",
    name: "Groupe Aura",
    slug: { _type: "slug", current: "groupe-aura" },
    companyType: "PME",
    sector: "Sport et bien-être",
    sectorIcon: "Stethoscope",
    headline:
      "Restructurer l'appareil marketing d'un groupe multi-marques spécialisé dans la création de concepts sportifs premium",
    description:
      "Groupe Aura réunit 4 marques autour du sport et du bien-être : Ensenat Coaching, Rebela Pilates, Spinners Cycling et Redzone Prépa Sportive. Vizion a pris en charge la refonte marketing globale : création de sites web, campagnes d'acquisition, support CRM et montée en compétence des équipes internes.",
    size: "4 marques / 12 clubs / 40+ coachs",
    location: "Toulouse, France",
    website: "https://www.ensenat-coaching.com",
    testimonial: {
      _type: "testimonial",
      quote:
        "Nous avons confié à Vizion la restructuration de notre appareil marketing pour les différentes marques du groupe : création de site web, campagnes d'acquisition, support CRM aux équipes et montée en compétence de nos équipes internes. Vizion s'est toujours adapté avec brio.",
      author: "Thomas Ensenat",
      role: "Fondateur, Groupe Aura",
    },
    highlightMetrics: [
      {
        _type: "metric",
        _key: "ga1",
        value: "4",
        label: "marques accompagnées",
      },
      {
        _type: "metric",
        _key: "ga2",
        value: "12",
        label: "clubs en France",
      },
      {
        _type: "metric",
        _key: "ga3",
        value: "1",
        label: "refonte marketing complète",
      },
    ],
    featured: false,
    order: 3,
    draft: false,
    metaTitle: "Groupe Aura, cas client Vizion",
    metaDescription:
      "Comment Vizion a restructuré l'appareil marketing du Groupe Aura et de ses 4 marques sportives premium : création de sites web, campagnes d'acquisition, support CRM et montée en compétence des équipes internes.",
  },
];

// ─── Exécution ────────────────────────────────────────────

async function run() {
  console.log("Mise à jour des 3 clients dans Sanity...\n");

  for (const clientData of clients) {
    const id = clientData._id;
    try {
      // createOrReplace écrase le document existant ou le crée
      const result = await sanityClient.createOrReplace(clientData);
      console.log(`  OK  ${result.name} (${id})`);
    } catch (err) {
      console.error(`  ERREUR  ${id}: ${err.message}`);
    }
  }

  console.log("\nTerminé.");
}

run();
