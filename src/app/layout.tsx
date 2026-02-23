import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CallWidget } from "@/components/CallWidget";
import { MotionProvider } from "@/components/MotionProvider";
import SmoothScroller from "@/components/SmoothScroller";

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
    default: "Agence Marketing Toulouse | Vizion — Stratégie B2B & Sales Enablement",
    template: "%s | Vizion — Agence Marketing Toulouse",
  },
  description:
    "Vizion, agence marketing à Toulouse spécialisée en B2B. Positionnement, sales enablement, tunnel de vente aligné. +70 PME et ETI accompagnées depuis 2021.",
  keywords: [
    "agence marketing toulouse",
    "agence marketing b2b toulouse",
    "marketing produit toulouse",
    "positionnement b2b toulouse",
    "sales enablement toulouse",
    "go-to-market toulouse",
    "conseil marketing toulouse",
    "accompagnement marketing b2b toulouse",
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

// WebSite schema — enables Google sitelinks search box
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://by-vizion.com/#website",
  name: "Vizion — Agence Marketing Toulouse",
  url: "https://by-vizion.com",
  publisher: {
    "@id": "https://by-vizion.com/#organization",
  },
  inLanguage: "fr-FR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${dmSans.variable} antialiased`} suppressHydrationWarning>
        <SmoothScroller>
          <MotionProvider>
            <Header />
            <main>{children}</main>
            <Footer />
            <CallWidget />
          </MotionProvider>
        </SmoothScroller>
      </body>
    </html>
  );
}
