import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "./constants";

export function createMetadata({
  title,
  description,
  path,
  type = "website",
  image,
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  image?: { url: string; alt: string };
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const ogTitle = `${title} | ${SITE_NAME}`;
  const ogImages = image
    ? [{ url: image.url.startsWith("/") ? `${SITE_URL}${image.url}` : image.url, width: 1200, height: 630, alt: image.alt }]
    : [];

  return {
    title,
    description,
    openGraph: {
      title: ogTitle,
      description,
      url,
      siteName: SITE_NAME,
      type,
      locale: "fr_FR",
      ...(ogImages.length > 0 && { images: ogImages }),
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      ...(ogImages.length > 0 && { images: [ogImages[0].url] }),
    },
    alternates: {
      canonical: url,
    },
  };
}
