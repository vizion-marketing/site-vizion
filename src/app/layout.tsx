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
  metadataBase: new URL("https://by-vizion.com"),
  title: {
    default: "Agence Marketing Toulouse | Vizion - Experts B2B PME & ETI",
    template: "%s | Vizion - Agence Marketing Toulouse",
  },
  description:
    "Agence marketing Toulouse spécialisée B2B. Vizion accompagne +70 PME et ETI : stratégie commerciale, lead generation, CRM automation. Basés à Labège, Occitanie.",
  keywords: [
    "agence marketing Toulouse",
    "agence marketing B2B Toulouse",
    "marketing B2B PME Toulouse",
    "agence growth Toulouse",
    "lead generation B2B Toulouse",
    "agence marketing Occitanie",
    "stratégie commerciale B2B",
    "marketing B2B ETI",
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
