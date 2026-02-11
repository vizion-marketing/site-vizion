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
  return (
    <html lang="fr">
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
