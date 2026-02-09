"use client";

import React from "react";
import { faqSchema, organizationSchema } from "@/content/home";

// Import sections
import { HeroSection, IntroSection, IndustriesMarquee, ServicesSection, AssetsSection, CasClientsSection, WhyVizionSection, TeamSection, BlogSection, FAQSection, FinalCTASection } from "@/components/home";

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
        {/* Hero */}
        <HeroSection />
        {/* Bandeau industries défilant */}
        <IndustriesMarquee />
        {/* Introduction - Manifeste */}
        <IntroSection />
        {/* Services - 5 Piliers */}
        <ServicesSection />
        {/* Assets Section */}
        <AssetsSection />
        {/* Cas Clients */}
        <CasClientsSection />
        {/* Pourquoi Vizion */}
        <WhyVizionSection />
        {/* Équipe */}
        <TeamSection />
        {/* Blog - Derniers articles */}
        <BlogSection />
        {/* FAQ */}
        <FAQSection />
        {/* CTA Final */}
        <FinalCTASection />
      </main>
    </>
  );
}
