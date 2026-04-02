import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";
import { client } from "./client";

const builder = createImageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

/**
 * Resout une source d'image qui peut etre soit une URL string (legacy),
 * soit un objet Sanity image. Utile pendant la migration.
 */
export function resolveImageUrl(
  source: SanityImageSource | string | undefined | null,
  width?: number,
): string {
  if (!source) return "";
  if (typeof source === "string") return source;
  // Guard against Sanity image objects with null/missing asset reference
  if (
    typeof source === "object" &&
    "asset" in source &&
    !(source as { asset?: unknown }).asset
  ) return "";
  try {
    const img = builder.image(source);
    return width ? img.width(width).url() : img.url();
  } catch {
    return "";
  }
}
