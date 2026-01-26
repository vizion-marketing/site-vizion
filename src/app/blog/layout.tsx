import { Metadata } from "next";

const SITE_URL = "https://by-vizion.com";
const SITE_NAME = "Vizion";

export const metadata: Metadata = {
  title: `Blog | Stratégies Marketing B2B | ${SITE_NAME}`,
  description: "Découvrez nos articles sur le marketing B2B, la génération de leads, le CRM et la croissance commerciale. Insights et stratégies pour PME et ETI.",
  openGraph: {
    title: `Blog | Stratégies Marketing B2B | ${SITE_NAME}`,
    description: "Découvrez nos articles sur le marketing B2B, la génération de leads, le CRM et la croissance commerciale.",
    url: `${SITE_URL}/blog`,
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Blog | Stratégies Marketing B2B | ${SITE_NAME}`,
    description: "Découvrez nos articles sur le marketing B2B, la génération de leads, le CRM et la croissance commerciale.",
  },
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
