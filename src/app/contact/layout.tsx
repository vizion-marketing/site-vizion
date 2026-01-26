import { Metadata } from "next";

const SITE_URL = "https://by-vizion.com";
const SITE_NAME = "Vizion";

export const metadata: Metadata = {
  title: `Contact | ${SITE_NAME}`,
  description: "Contactez notre équipe d'experts B2B. Réponse garantie sous 24h. Discutons de votre projet de croissance commerciale.",
  openGraph: {
    title: `Contact | ${SITE_NAME}`,
    description: "Contactez notre équipe d'experts B2B. Réponse garantie sous 24h.",
    url: `${SITE_URL}/contact`,
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact | ${SITE_NAME}`,
    description: "Contactez notre équipe d'experts B2B. Réponse garantie sous 24h.",
  },
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
