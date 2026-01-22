import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display, Roboto, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { allCaseStudies } from "contentlayer/generated";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Votre Partenaire Digital | Conseil & Solutions SaaS",
    template: "%s | Conseil & Solutions SaaS",
  },
  description:
    "Cabinet de conseil digital et solutions SaaS sur mesure. Accompagnement stratégique et expertise technique pour votre transformation numérique.",
  keywords: [
    "conseil digital",
    "transformation digitale",
    "solutions SaaS",
    "stratégie numérique",
  ],
  authors: [{ name: "Votre Entreprise" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Conseil & Solutions SaaS",
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
      </head>
      <body className={`${dmSans.variable} ${dmSerif.variable} ${roboto.variable} ${inter.variable} antialiased`}>
        <Header caseStudies={caseStudiesForNav} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
