/**
 * Upload local client images to Sanity and patch documents.
 *
 * Usage: node scripts/upload-images-to-sanity.mjs
 */
import { createClient } from "@sanity/client";
import { readFileSync } from "fs";
import { resolve } from "path";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "odavbqx4",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2026-03-06",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

const IMAGES_DIR = resolve("public/images/cas-clients");

const CLIENT_IMAGES = [
  {
    documentId: "client-eldo-wallet",
    name: "Eldo Wallet",
    mainImage: "eldo-mainimage.avif",
    secondaryImage: "eldo-secondaryimage.avif",
  },
  {
    documentId: "client-easyvirtual-tours",
    name: "EasyVirtual Tours",
    mainImage: "easyvirtual-mainimage.avif",
    secondaryImage: "easyvirtual-secondaryimage.avif",
  },
  {
    documentId: "client-ensenat-coaching",
    name: "Ensenat Coaching",
    mainImage: "ensenat-mainimage.avif",
    secondaryImage: "ensenat-secondaryimage.avif",
  },
];

async function uploadImage(filename) {
  const filePath = resolve(IMAGES_DIR, filename);
  const buffer = readFileSync(filePath);
  const asset = await client.assets.upload("image", buffer, {
    filename,
    contentType: "image/avif",
  });
  console.log(`  ✓ Uploaded ${filename} → ${asset._id}`);
  return asset._id;
}

async function main() {
  console.log("Uploading client images to Sanity...\n");

  for (const entry of CLIENT_IMAGES) {
    console.log(`→ ${entry.name} (${entry.documentId})`);

    const mainAssetId = await uploadImage(entry.mainImage);
    const secondaryAssetId = await uploadImage(entry.secondaryImage);

    await client
      .patch(entry.documentId)
      .set({
        mainImage: {
          _type: "image",
          asset: { _type: "reference", _ref: mainAssetId },
        },
        secondaryImage: {
          _type: "image",
          asset: { _type: "reference", _ref: secondaryAssetId },
        },
      })
      .commit();

    console.log(`  ✓ Document patched\n`);
  }

  console.log("Done! All images uploaded and documents updated.");
}

main().catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});
