"use client";

import React from "react";
import { faqSchema, organizationSchema } from "@/content/home";

// Import all sections
import {
  HeroSection,
  IndustriesMarquee,
  ManifestoSection,
  ProblemsSection,
  ApproachSection,
  QuoteSection,
  DeliverablesSection,
  TeamSection,
  CaseStudiesSection,
  AIPioneersSection,
  LocalSEOSection,
  TestimonialsSection,
  FinalCTASection,
} from "@/components/home";

// Types
interface Post {
  slug: string;
  title: string;
  description?: string;
  date: string;
  category?: string;
  readingTime?: string;
  featuredImage?: string;
  draft?: boolean;
}

interface HomePageClientProps {
  latestPosts: Post[];
}

// =============================================================================
// MAIN COMPONENT
// =============================================================================
export default function HomePageClient({ latestPosts }: HomePageClientProps) {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <main>
        {/* Section 1: Hero */}
        <HeroSection />

        {/* Bandeau industries */}
        <IndustriesMarquee />

        {/* Section 2: Manifeste */}
        <ManifestoSection />

        {/* Section 3: Notre approche (5 etapes) */}
        <ApproachSection />

        {/* Citation */}
        <QuoteSection />

        {/* Section 4: Problemes qu'on resout */}
        <ProblemsSection />

        {/* Section 6: Ce qu'on produit (Livrables) */}
        <DeliverablesSection />

        {/* Section 7: L'equipe Vizion */}
        <TeamSection />

        {/* Section 8: Cas clients & resultats */}
        <CaseStudiesSection />

        {/* Section 9: Pionniers en IA */}
        <AIPioneersSection />

        {/* Section 10: Referencement local (Toulouse) */}
        <LocalSEOSection />

        {/* Section 11: Temoignages */}
        <TestimonialsSection />

        {/* Section 12: CTA final */}
        <FinalCTASection />
      </main>
    </>
  );
}
