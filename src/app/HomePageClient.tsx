"use client";

import React from "react";
import dynamic from "next/dynamic";
import type { HomeContent } from "@/content/home";

// Above-the-fold — eagerly loaded
import { HeroSection } from "@/components/home/HeroSection";
import { IndustriesMarquee } from "@/components/home/IndustriesMarquee";

// Below-the-fold — lazy-loaded (SSR preserved, JS split into separate chunks)
const IntroSection = dynamic(() => import("@/components/home/IntroSection"), { ssr: true });
const ServicesSection = dynamic(() => import("@/components/home/ServicesSection"), { ssr: true });
const AssetsSection = dynamic(() => import("@/components/home/AssetsSection"), { ssr: true });
const CasClientsSection = dynamic(() => import("@/components/home/CasClientsSection"), { ssr: true });
const AboutLocalSection = dynamic(() => import("@/components/home/AboutLocalSection"), { ssr: true });
const TeamSection = dynamic(() => import("@/components/home/TeamSection"), { ssr: true });
const BlogSectionComponent = dynamic(() => import("@/components/home/BlogSection"), { ssr: true });
const FAQSection = dynamic(() => import("@/components/home/FAQSection"), { ssr: true });
const IlsParlentDeNousSection = dynamic(() => import("@/components/home/IlsParlentDeNousSection"), { ssr: true });
const FinalCTASection = dynamic(() => import("@/components/home/FinalCTASection"), { ssr: true });

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
  content?: HomeContent;
}

// =============================================================================
// MAIN COMPONENT
// =============================================================================
export default function HomePageClient({ latestPosts, content }: HomePageClientProps) {
  return (
    <>
      <main>
        {/* Hero */}
        <HeroSection content={content?.hero} />
        {/* Bandeau industries défilant */}
        <IndustriesMarquee />
        {/* Introduction - Manifeste */}
        <IntroSection
          content={content ? {
            title: content.aPropos.h2,
            paragraphs: content.aPropos.paragraphs ?? [],
            mission: content.aPropos.introLaius ?? "",
          } : undefined}
        />
        {/* Services - 5 Piliers */}
        <ServicesSection
          surtitre={content?.piliers.surtitre}
          h2={content?.piliers.h2}
          description={content?.piliers.description}
          piliers={content?.piliers.piliers}
        />
        {/* Assets Section */}
        <AssetsSection />
        {/* Cas Clients */}
        <CasClientsSection />
        {/* À propos + Localisation (Fusion Pourquoi Vizion + SEO Local) */}
        <AboutLocalSection content={content?.localSEO} />
        {/* Équipe — masquée temporairement */}
        {/* <TeamSection /> */}
        {/* Blog - Derniers articles */}
        <BlogSectionComponent
          articles={latestPosts}
          surtitre={content?.blog.surtitre}
          h2={content?.blog.h2}
          ctaText={content?.blog.ctaText}
        />
        {/* FAQ */}
        <FAQSection content={content?.faq} />
        {/* Ils parlent de nous — masquée temporairement */}
        {/* <IlsParlentDeNousSection /> */}
        {/* CTA Final */}
        <FinalCTASection content={content?.finalCta} />
      </main>
    </>
  );
}
