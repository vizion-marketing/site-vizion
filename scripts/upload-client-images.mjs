/**
 * Upload images des 3 clients prioritaires vers Sanity CDN
 * et patch les documents avec les références.
 *
 * Images : logo, mainImage, testimonial.photo
 * (les logos restent en PNG, le reste en AVIF)
 *
 * Usage: node scripts/upload-client-images.mjs
 */
import { createClient } from "@sanity/client";
import { readFileSync, existsSync } from "fs";
import { resolve } from "path";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "odavbqx4",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2026-03-06",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

if (!process.env.SANITY_API_TOKEN) {
  console.error("SANITY_API_TOKEN manquant dans .env.local");
  process.exit(1);
}

const CLIENTS = [
  {
    documentId: "client-easyvirtual-tours",
    name: "easyVirtual.tours",
    logo: "public/images/clients/easyvirtual/logo_easyvirtual.tours.png",
    mainImage: "public/images/clients/easyvirtual/main.avif",
    photo: "public/images/clients/easyvirtual/fondateur.avif",
  },
  {
    documentId: "client-eldo-wallet",
    name: "eldo wallet",
    logo: "public/images/clients/eldo-wallet/logo-eldo-wallet.png",
    mainImage: "public/images/clients/eldo-wallet/main.avif",
    photo: "public/images/clients/eldo-wallet/fondateur.avif",
  },
  {
    documentId: "client-groupe-aura",
    name: "Groupe Aura",
    logo: "public/images/clients/groupe-aura/logo-ensenat-coaching.png",
    mainImage: "public/images/clients/groupe-aura/main.avif",
    photo: "public/images/clients/groupe-aura/fondateur.avif",
  },
];

function contentType(path) {
  if (path.endsWith(".avif")) return "image/avif";
  if (path.endsWith(".webp")) return "image/webp";
  if (path.endsWith(".png")) return "image/png";
  return "image/jpeg";
}

async function uploadImage(filePath) {
  const fullPath = resolve(filePath);
  if (!existsSync(fullPath)) {
    console.warn(`    SKIP ${filePath} (fichier introuvable)`);
    return null;
  }
  const buffer = readFileSync(fullPath);
  const filename = fullPath.split(/[/\\]/).pop();
  const asset = await sanityClient.assets.upload("image", buffer, {
    filename,
    contentType: contentType(filePath),
  });
  console.log(`    OK  ${filename} -> ${asset._id}`);
  return asset._id;
}

function imageRef(assetId) {
  return { _type: "image", asset: { _type: "reference", _ref: assetId } };
}

async function main() {
  console.log("Upload des images clients vers Sanity...\n");

  for (const entry of CLIENTS) {
    console.log(`-> ${entry.name} (${entry.documentId})`);

    const patch = {};

    const logoId = await uploadImage(entry.logo);
    if (logoId) patch.logo = imageRef(logoId);

    const mainId = await uploadImage(entry.mainImage);
    if (mainId) patch.mainImage = imageRef(mainId);

    const photoId = await uploadImage(entry.photo);
    if (photoId) patch["testimonial.photo"] = imageRef(photoId);

    if (Object.keys(patch).length > 0) {
      await sanityClient.patch(entry.documentId).set(patch).commit();
      console.log(`    Document patche (${Object.keys(patch).length} champs)\n`);
    } else {
      console.log(`    Aucune image trouvee, document non modifie\n`);
    }
  }

  console.log("Termine.");
}

main().catch((err) => {
  console.error("Erreur:", err);
  process.exit(1);
});
