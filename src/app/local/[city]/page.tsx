import { Metadata } from "next";
import { notFound } from "next/navigation";
import { allLocalPages } from "contentlayer/generated";
import {
  LocalHeroNew,
  SocialProofSection,
  PillarsInteractive,
  AIMarketingSection,
  WhenWorkSection,
  CasesCarousel,
  AboutVizion,
  ExpertsSlider,
  LocalFAQ,
  FinalCTA,
} from "@/components/local";

// Server-side FAQ schema generator
function generateFAQSchema(city: string, faq: Array<{ question: string; answer: string }>) {
  const processedFaq = faq.map((item) => ({
    question: item.question.replace(/\[Ville\]/g, city).replace(/\{city\}/g, city),
    answer: item.answer.replace(/\[Ville\]/g, city).replace(/\{city\}/g, city),
  }));

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: processedFaq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

// Agency name constant
const AGENCY_NAME = "Vizion";
const SITE_URL = "https://vizion.fr";

type Props = {
  params: Promise<{ city: string }>;
};

// Generate static params for all local pages
export async function generateStaticParams() {
  return allLocalPages
    .filter((page) => !page._raw.sourceFileName.startsWith("_")) // Exclude template
    .map((page) => ({
      city: page.slug,
    }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const page = allLocalPages.find(
    (p) => p.slug === city && !p._raw.sourceFileName.startsWith("_")
  );

  if (!page) {
    return { title: "Page non trouvée" };
  }

  return {
    title: page.title,
    description: page.description,
    keywords: [
      `agence marketing ${page.city}`,
      `agence marketing ${page.city.toLowerCase()}`,
      `marketing digital ${page.city}`,
      `stratégie marketing ${page.city}`,
      `acquisition leads ${page.city}`,
      `automatisation marketing`,
      `IA marketing`,
      AGENCY_NAME,
      ...((page.sectors as string[]) || []),
    ],
    authors: [{ name: AGENCY_NAME }],
    creator: AGENCY_NAME,
    publisher: AGENCY_NAME,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `${SITE_URL}/local/${city}`,
      siteName: AGENCY_NAME,
      locale: "fr_FR",
      type: "website",
      images: [
        {
          url: `${SITE_URL}/og/agence-marketing-${city}.jpg`,
          width: 1200,
          height: 630,
          alt: `${AGENCY_NAME} - Agence Marketing ${page.city}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [`${SITE_URL}/og/agence-marketing-${city}.jpg`],
    },
    alternates: {
      canonical: `${SITE_URL}/local/${city}`,
    },
  };
}

export default async function LocalPage({ params }: Props) {
  const { city } = await params;
  const page = allLocalPages.find(
    (p) => p.slug === city && !p._raw.sourceFileName.startsWith("_")
  );

  if (!page) {
    notFound();
  }

  // Parse data from MDX frontmatter with type assertions
  const faq = (page.faq as Array<{ question: string; answer: string }>) || [];
  const benefits = (page.benefits as string[]) || ["Sans engagement", "Expertise IA", "Accompagnement 1-1"];
  const clientLogos = (page.clientLogos as Array<{ id: string; src: string; alt: string }>) || [];
  const aiUseCases = (page.aiUseCases as Array<{ 
    id: string; 
    label: string; 
    description: string; 
    image: string; 
    features: string[] 
  }>) || [];
  const situations = (page.situations as Array<{
    id: string;
    label: string;
    problems: string[];
    solution: string;
  }>) || [];
  const featuredCases = (page.featuredCases as Array<{
    id: string;
    metric: string;
    quote: string;
    author: string;
    role: string;
    company?: string;
  }>) || [];
  const experts = (page.experts as Array<{
    id: string;
    name: string;
    specialty: string;
    years: number;
    photo?: string;
  }>) || [];
  const reassurancePoints = (page.reassurancePoints as string[]) || ["Réponse en moins de 24h", "Audit gratuit", "Sans engagement"];
  const aboutContent = (page.aboutContent as string) || undefined;
  const aboutImage = (page.aboutImage as string) || undefined;

  // Parse heroTitle replacing {city} placeholder
  const heroTitle = (page.heroTitle || `Accélérez votre croissance à ${page.city}`)
    .replace(/\{city\}/g, page.city);
  const heroSubtitle = page.heroSubtitle || "Expertise locale, résultats mesurables";

  // Generate JSON-LD schemas
  const faqSchema = faq.length > 0 ? generateFAQSchema(page.city, faq) : null;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: AGENCY_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    sameAs: [
      "https://www.linkedin.com/company/vizion",
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/local/${city}`,
    name: `${AGENCY_NAME} - Agence Marketing ${page.city}`,
    description: page.description,
    url: `${SITE_URL}/local/${city}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: page.city,
      addressRegion: page.region,
      addressCountry: "FR",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: page.region,
    },
    priceRange: "€€",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: `Agence Marketing ${page.city}`,
        item: `${SITE_URL}/local/${city}`,
      },
    ],
  };

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      )}

      <main className="min-h-screen bg-white">
        {/* 1. Hero Header */}
        <LocalHeroNew
          city={page.city}
          title={heroTitle}
          subtitle={heroSubtitle}
          benefits={benefits}
        />

        {/* 2. Preuve Sociale - Logo Wall */}
        <SocialProofSection logos={clientLogos} />

        {/* 3. 4 Piliers Performance */}
        <PillarsInteractive />

        {/* 4. Focus IA Marketing (Section "Waouh") */}
        {aiUseCases.length > 0 && (
          <AIMarketingSection useCases={aiUseCases} />
        )}

        {/* 5. Quand travailler avec nous */}
        {situations.length > 0 && (
          <WhenWorkSection situations={situations} />
        )}

        {/* 6. Cas Clients & Témoignages */}
        {featuredCases.length > 0 && (
          <CasesCarousel cases={featuredCases} />
        )}

        {/* 7. À Propos Vizion */}
        <AboutVizion 
          content={aboutContent}
          image={aboutImage}
        />

        {/* 8. Système de Collectif - Experts */}
        {experts.length > 0 && (
          <ExpertsSlider experts={experts} />
        )}

        {/* 9. FAQ */}
        {faq.length > 0 && <LocalFAQ city={page.city} faq={faq} />}

        {/* 10. CTA Final */}
        <FinalCTA 
          city={page.city}
          reassurancePoints={reassurancePoints}
        />
      </main>
    </>
  );
}
