import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CallWidget } from "@/components/CallWidget";
import { MotionProvider } from "@/components/MotionProvider";
import SmoothScroller from "@/components/SmoothScroller";
import { allCaseStudies } from "contentlayer/generated";

// DM Sans pour titres et corps
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://by-vizion.com"),
  title: {
    default: "Agence Marketing Produit B2B Toulouse | Vizion",
    template: "%s | Vizion - Agence Marketing Produit B2B Toulouse",
  },
  description:
    "Agence de marketing produit B2B à Toulouse. Vizion vous aide à clarifier, packager et vendre votre offre. Positionnement, messaging, tunnel de vente aligné. +70 entreprises accompagnées depuis 2021.",
  keywords: [
    "agence marketing produit B2B Toulouse",
    "marketing produit Toulouse",
    "agence marketing Toulouse",
    "positionnement produit Toulouse",
    "sales enablement Toulouse",
    "go-to-market Toulouse",
    "notoriété LinkedIn Toulouse",
    "accompagnement marketing B2B Toulouse",
  ],
  authors: [{ name: "Vizion" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Vizion",
    url: "https://by-vizion.com",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Préparer les données des cas clients pour le Header
  // Filtrer les templates et trier par ordre/featured
  const caseStudiesForNav = allCaseStudies
    .filter((cs) => !cs._raw.sourceFileName.startsWith("_"))
    .sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return (a.order || 0) - (b.order || 0);
    })
    .map((cs) => ({
      title: cs.title,
      description: cs.description,
      company: cs.company,
      sector: cs.sector,
      slug: cs.slug,
      featured: cs.featured || false,
      heroImage: cs.heroImage || null,
    }));

  return (
    <html lang="fr">
      <body className={`${dmSans.variable} antialiased`} suppressHydrationWarning>
        <SmoothScroller>
          <MotionProvider>
            <Header caseStudies={caseStudiesForNav} />
            <main>{children}</main>
            <Footer />
            <CallWidget />
          </MotionProvider>
        </SmoothScroller>
      </body>
    </html>
  );
}
