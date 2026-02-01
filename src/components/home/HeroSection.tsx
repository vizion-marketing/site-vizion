"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { homeContent, organizationSchema } from "@/content/home";
import { SectionDiagonalBottom } from "./shared/SectionDiagonal";
import { AnimatedCounter } from "./shared/AnimatedCounter";

export function HeroSection() {
  return (
    <>
      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* HERO SECTION */}
      <section className="relative pt-20 sm:pt-24 md:pt-[100px] pb-16 sm:pb-20 md:pb-[80px] px-4 sm:px-6 md:px-12 bg-[#B7B7B7] bg-gradient-to-br from-[#B7B7B7] via-[#000] to-[#6D6D6D] flex items-center min-h-[100svh] lg:min-h-[95vh]">
        {/* Pattern texture overlay */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

        <div className="max-w-[82.5rem] mx-auto w-full relative z-10">
          {/* CONTENT CARD */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="w-full lg:max-w-[720px] lg:min-h-[700px] xl:min-h-[750px] bg-black/20 backdrop-blur-md rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-12 shadow-2xl relative z-10 flex flex-col justify-between border border-white/10"
          >
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-50"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-br from-white via-amber-100 to-amber-200 shadow-[0_0_8px_rgba(255,255,255,0.5)]"></span>
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.1em] uppercase" style={{ color: 'rgba(255,255,255,0.8)' }}>
                {homeContent.hero.badge}
              </span>
            </div>

            <h1 className="font-['Roboto'] font-[900] text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-tight uppercase text-white mb-3 sm:mb-4">
              {homeContent.hero.h1}
            </h1>

            <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-4 sm:mb-6 max-w-2xl" style={{ color: 'rgba(255,255,255,0.8)' }}>
              {homeContent.hero.baseline}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-white/10">
              {homeContent.hero.badges.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-tight" style={{ color: 'rgba(255,255,255,0.8)' }}>
                  <CheckCircle2 size={14} className="shrink-0" style={{ color: 'rgba(183, 135, 38, 0.7)' }} />
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6">
              <Link href={homeContent.hero.cta.primary.href} className="h-[48px] sm:h-[56px] px-6 sm:px-8 text-[13px] sm:text-[15px] font-['Inter'] font-semibold tracking-[-0.01em] flex items-center justify-center gap-2 rounded-full transition-all duration-300 active:scale-95 bg-white text-black border border-white/50 shadow-[0_4px_24px_-1px_rgba(255,255,255,0.2),inset_0_1px_0_0_rgba(255,255,255,0.5)] hover:bg-white/95 hover:shadow-[0_8px_32px_-4px_rgba(255,255,255,0.35),inset_0_1px_0_0_rgba(255,255,255,0.6)] hover:-translate-y-0.5">
                {homeContent.hero.cta.primary.text} <ArrowRight size={16} />
              </Link>
              <Link href={homeContent.hero.cta.secondary.href} className="h-[48px] sm:h-[56px] px-6 sm:px-8 text-[13px] sm:text-[15px] font-['Inter'] font-semibold tracking-[-0.01em] flex items-center justify-center rounded-full transition-all duration-300 active:scale-95 bg-white/10 backdrop-blur-xl text-white border border-white/20 shadow-[0_4px_24px_-1px_rgba(0,0,0,0.15),inset_0_1px_0_0_rgba(255,255,255,0.2)] hover:bg-white/20 hover:border-white/30 hover:shadow-[0_8px_32px_-4px_rgba(0,0,0,0.2),inset_0_1px_0_0_rgba(255,255,255,0.3)] hover:-translate-y-0.5">
                {homeContent.hero.cta.secondary.text}
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white/20 bg-white/10 overflow-hidden">
                    <Image src={`https://i.pravatar.cc/40?img=${i + 10}`} alt="Client" width={40} height={40} className="w-full h-full object-cover grayscale" />
                  </div>
                ))}
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white/30 bg-white flex items-center justify-center text-[9px] sm:text-[10px] font-bold text-black shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                  <AnimatedCounter end={70} prefix="+" duration={2.5} />
                </div>
              </div>
              <div className="text-[9px] sm:text-[10px] font-bold tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.8)' }}>
                {homeContent.hero.socialProof}
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE - IMMERSIVE & OVERLAPPING */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
            className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-0 w-[400px] xl:w-[550px] h-[600px] xl:h-[750px] z-30 group"
          >
            <img
              src="/hero-binoculars.png"
              alt="Strategie"
              className="w-full h-full object-cover shadow-2xl"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
            />
            {/* Decorative frame elements */}
            <div className="absolute top-8 right-8 w-12 xl:w-16 h-12 xl:h-16 border-t-2 border-r-2 border-white/30 z-20" />
            <div className="absolute bottom-8 left-8 w-12 xl:w-16 h-12 xl:h-16 border-b-2 border-l-2 border-white/30 z-20" />
          </motion.div>
        </div>
        {/* Diagonal bottom → next section (gray) */}
        <SectionDiagonalBottom fillColor="#F2F2F2" direction="left" />
      </section>
    </>
  );
}
