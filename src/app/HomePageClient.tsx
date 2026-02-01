"use client";

import type { Post } from "@/lib/types";
import { HeroSection } from "@/components/home/HeroSection";
import { SocialProofSection } from "@/components/home/SocialProofSection";
import { LogoWallSection } from "@/components/home/LogoWallSection";
import { PiliersSection } from "@/components/home/PiliersSection";
import { IAHighlightSection } from "@/components/home/IAHighlightSection";
import { QuandCommencerSection } from "@/components/home/QuandCommencerSection";
import { AssetsPortfolioSection } from "@/components/home/AssetsPortfolioSection";
import { AboutSection } from "@/components/home/AboutSection";
import { EquipeSection } from "@/components/home/EquipeSection";
import { BlogPreviewSection } from "@/components/home/BlogPreviewSection";
import { FAQSection } from "@/components/home/FAQSection";
import { ZoneInterventionSection } from "@/components/home/ZoneInterventionSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";

interface HomePageClientProps {
  latestPosts: Post[];
}

export default function HomePageClient({ latestPosts }: HomePageClientProps) {
  return (
    <main className="min-h-screen bg-white font-['Inter'] selection:bg-black selection:text-white">
      <HeroSection />
      <SocialProofSection />
      <LogoWallSection />
      <PiliersSection />
      <IAHighlightSection />
      <QuandCommencerSection />
      <AssetsPortfolioSection />
      <AboutSection />
      <EquipeSection />
      <BlogPreviewSection posts={latestPosts} />
      <FAQSection />
      <ZoneInterventionSection />
      <FinalCTASection />
    </main>
  );
}
