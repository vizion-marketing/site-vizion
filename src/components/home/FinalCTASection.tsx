"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Zap, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { homeContent } from "@/content/home";
import { AnimatedCounter } from "./shared/AnimatedCounter";

export function FinalCTASection() {
  return (
    <>
      {/* FINAL CTA */}
      {/* SEO: Call-to-action agence marketing Toulouse - contact */}
      <section
        className="py-20 sm:py-28 md:py-36 lg:py-44 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-[#F5F5F5] via-[#F0F0F0] to-[#EAEAEA] relative"
        aria-label="Contactez l'agence marketing Toulouse"
      >
        {/* Ambient glow */}
        <div className="absolute top-[15%] left-[15%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gradient-to-br from-emerald-50/12 via-teal-50/6 to-transparent rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[10%] right-[10%] w-[280px] sm:w-[480px] h-[280px] sm:h-[480px] bg-gradient-to-tl from-amber-50/15 via-yellow-50/8 to-transparent rounded-full blur-[110px] pointer-events-none" />
        <div className="max-w-[82.5rem] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            className="bg-gradient-to-br from-[#B7B7B7] via-[#000] to-[#6D6D6D] backdrop-blur-xl border border-white/10 rounded-lg sm:rounded-xl shadow-2xl p-6 sm:p-10 md:p-12 lg:p-20 text-center relative overflow-hidden"
          >
            {/* Carbon fibre pattern */}
            <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            {/* Subtle inner glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="relative z-10 max-w-3xl mx-auto">
              {/* Trust badge - glassmorphism */}
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-md sm:rounded-lg shadow-lg mb-5 sm:mb-8">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={8} className="fill-white text-white sm:hidden" />
                  ))}
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={10} className="fill-white text-white hidden sm:block" />
                  ))}
                </div>
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.8)' }}>
                  {homeContent.finalCta.trustBadge}
                </span>
              </div>

              <h2 className="font-['Roboto'] font-[900] text-[24px] sm:text-[32px] md:text-[38px] lg:text-[44px] leading-tight tracking-tight uppercase mb-4 sm:mb-6" style={{ color: 'rgba(255,255,255,0.8)' }}>
                {homeContent.finalCta.h2}
              </h2>
              <p className="text-sm sm:text-base md:text-lg font-['Inter'] leading-relaxed mb-8 sm:mb-10 md:mb-12" style={{ color: 'rgba(255,255,255,0.8)' }}>
                {homeContent.finalCta.description}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12">
                <Link
                  href={homeContent.finalCta.cta.primary.href}
                  className="w-full sm:w-auto h-[48px] sm:h-[56px] px-6 sm:px-8 text-[13px] sm:text-[15px] font-['Inter'] font-semibold tracking-[-0.01em] inline-flex items-center justify-center gap-2 rounded-full transition-all duration-300 active:scale-95 bg-white text-black border border-white/50 shadow-[0_4px_24px_-1px_rgba(255,255,255,0.2),inset_0_1px_0_0_rgba(255,255,255,0.5)] hover:bg-white/95 hover:shadow-[0_8px_32px_-4px_rgba(255,255,255,0.35)] hover:-translate-y-0.5 group"
                >
                  {homeContent.finalCta.cta.primary.text}
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href={homeContent.finalCta.cta.secondary.href}
                  className="w-full sm:w-auto h-[48px] sm:h-[56px] px-6 sm:px-8 text-[13px] sm:text-[15px] font-['Inter'] font-semibold tracking-[-0.01em] inline-flex items-center justify-center gap-2 rounded-full transition-all duration-300 active:scale-95 bg-white/10 backdrop-blur-xl text-white border border-white/20 shadow-[0_4px_24px_-1px_rgba(0,0,0,0.15),inset_0_1px_0_0_rgba(255,255,255,0.2)] hover:bg-white/20 hover:border-white/30 hover:shadow-[0_8px_32px_-4px_rgba(0,0,0,0.2),inset_0_1px_0_0_rgba(255,255,255,0.3)] hover:-translate-y-0.5"
                >
                  {homeContent.finalCta.cta.secondary.text}
                </Link>
              </div>

              {/* Trust elements - subtle glassmorphism */}
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-x-6 md:gap-x-8 gap-y-2 sm:gap-y-4 pt-6 sm:pt-8 md:pt-10 border-t border-white/10">
                {homeContent.finalCta.trustElements.map((element, i) => (
                  <div key={i} className="flex items-center gap-1.5 sm:gap-2.5 px-2 sm:px-3 py-1 sm:py-1.5 bg-white/5 backdrop-blur-sm rounded-lg border border-white/5 text-xs sm:text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>
                    <CheckCircle2 size={12} className="sm:hidden" style={{ color: 'rgba(255,255,255,0.8)' }} />
                    <CheckCircle2 size={15} className="hidden sm:block" style={{ color: 'rgba(255,255,255,0.8)' }} />
                    <span className="font-medium tracking-tight">{element}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
