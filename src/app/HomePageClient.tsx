"use client";

import React from "react";
import dynamic from "next/dynamic";

// Above-the-fold — eagerly loaded
import { HeroSection } from "@/components/home/HeroSection";
import { IndustriesMarquee } from "@/components/home/IndustriesMarquee";

// Below-the-fold — lazy-loaded (SSR preserved, JS split into separate chunks)
const IntroSection = dynamic(() => import("@/components/home/IntroSection"), { ssr: true });
const ServicesSection = dynamic(() => import("@/components/home/ServicesSection"), { ssr: true });
const AssetsSection = dynamic(() => import("@/components/home/AssetsSection"), { ssr: true });
const CasClientsSection = dynamic(() => import("@/components/home/CasClientsSection"), { ssr: true });
const WhyVizionSection = dynamic(() => import("@/components/home/WhyVizionSection"), { ssr: true });
const TeamSection = dynamic(() => import("@/components/home/TeamSection"), { ssr: true });
const BlogSection = dynamic(() => import("@/components/home/BlogSection"), { ssr: true });
const FAQSection = dynamic(() => import("@/components/home/FAQSection"), { ssr: true });
const LocalSEOSection = dynamic(() => import("@/components/home/LocalSEOSection"), { ssr: true });
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
}

// =============================================================================
// MAIN COMPONENT
// =============================================================================
export default function HomePageClient({ latestPosts }: HomePageClientProps) {
  return (
    <>
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
        {/* Référencement local — Toulouse & Occitanie */}
        <LocalSEOSection />
        {/* Ils parlent de nous */}
        <IlsParlentDeNousSection />
        {/* CTA Final */}
        <FinalCTASection />
      </main>
    </>
  );
}
