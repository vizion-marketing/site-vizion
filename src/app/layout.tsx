import type { Metadata } from "next";
import { Roboto, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MotionProvider } from "@/components/MotionProvider";
import { allCaseStudies } from "contentlayer/generated";

// Optimisation: seulement 2 polices au lieu de 4
// Roboto pour les titres, Inter pour le corps
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://by-vizion.com"),
  title: {
    default: "Agence Marketing Toulouse | Vizion - Marketing Stratégique",
    template: "%s | Vizion - Agence Marketing Toulouse",
  },
  description:
    "Agence marketing à Toulouse. Vizion vous aide à vendre plus : stratégie commerciale, acquisition clients, outils sur mesure. +70 entreprises accompagnées depuis 2021.",
  keywords: [
    "agence marketing Toulouse",
    "agence marketing stratégique Toulouse",
    "marketing Toulouse",
    "agence growth Toulouse",
    "stratégie commerciale Toulouse",
    "acquisition clients Toulouse",
    "agence digitale Toulouse",
    "consultant marketing Toulouse",
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
      <body className={`${roboto.variable} ${inter.variable} antialiased`}>
        <MotionProvider>
          <Header caseStudies={caseStudiesForNav} />
          <main>{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
