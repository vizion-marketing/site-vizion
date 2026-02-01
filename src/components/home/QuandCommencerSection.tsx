"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { homeContent } from "@/content/home";

export function QuandCommencerSection() {
  return (
      <section
        className="py-20 sm:py-28 md:py-36 lg:py-44 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-white via-[#FEFEFE] to-[#D0D0D0] relative grain-light"
        aria-label="Offres et formules agence marketing Toulouse"
      >
        {/* Ambient glow */}
        <div className="absolute top-[15%] left-[-5%] w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-gradient-to-br from-blue-50/20 via-slate-50/10 to-transparent rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[10%] right-[0%] w-[250px] sm:w-[450px] h-[250px] sm:h-[450px] bg-gradient-to-tl from-amber-50/15 via-orange-50/8 to-transparent rounded-full blur-[110px] pointer-events-none" />
        <div className="max-w-[82.5rem] mx-auto relative z-10">
          {/* Header */}
          <div className="max-w-3xl mb-10 sm:mb-12 md:mb-16 lg:mb-20">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-black/40 mb-3 sm:mb-4"
            >
              <span className="w-5 h-[1px] bg-gradient-to-r from-[#B78726]/60 to-transparent" />
              {homeContent.quandCommencer.surtitre}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
              className="font-['Roboto'] font-[900] text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[1.1] tracking-tight uppercase text-black mb-4 sm:mb-6"
            >
              {homeContent.quandCommencer.h2}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1], delay: 0.1 }}
              className="text-black/60 text-base sm:text-lg font-['Inter'] leading-relaxed"
            >
              {homeContent.quandCommencer.description}
            </motion.p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {homeContent.quandCommencer.scenarios.map((scenario, index) => {
              const isFeatured = index === 1;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`group flex flex-col overflow-hidden relative ${
                    isFeatured
                      ? 'bg-gradient-to-br from-[#B7B7B7] via-[#000] to-[#6D6D6D] backdrop-blur-xl border-2 border-white/30 rounded-md sm:rounded-lg shadow-2xl shadow-black/30 text-white'
                      : 'bg-white/80 backdrop-blur-xl border border-black/10 rounded-md sm:rounded-lg shadow-sm card-lift transition-all duration-300'
                  }`}
                >
                  {/* Carbon fibre pattern for featured card */}
                  {isFeatured && <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none z-0" />}
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] sm:aspect-[5/3] w-full overflow-hidden">
                    <Image
                      src={scenario.image}
                      alt={`${scenario.title} - Agence Marketing Toulouse`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 ${isFeatured ? 'bg-gradient-to-t from-black/80 to-transparent' : 'bg-gradient-to-t from-black/20 to-transparent'}`} />

                    {/* Badge */}
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                      <span className={`px-2.5 sm:px-3 py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest rounded-md sm:rounded-lg shadow-lg ${
                        isFeatured ? 'bg-white text-black' : 'bg-black text-white'
                      }`}>
                        {scenario.badge}
                      </span>
                    </div>

                    {isFeatured && (
                      <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                        <div className="flex items-center gap-1.5 px-2 sm:px-2.5 py-1 sm:py-1.5 bg-black/50 backdrop-blur-md border border-white/20 rounded-md sm:rounded-lg">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#B78726] animate-pulse shadow-[0_0_8px_rgba(183,135,38,0.6)]" />
                          <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-white">
                            Populaire
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-6 md:p-7 flex flex-col flex-grow">
                    <h3
                      className="font-['Roboto'] font-[900] text-lg sm:text-xl uppercase mb-1 sm:mb-1.5"
                      style={{ color: isFeatured ? 'rgba(255,255,255,0.8)' : '#000000' }}
                    >
                      {scenario.title}
                    </h3>
                    <p
                      className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-[0.1em] mb-3 sm:mb-4"
                      style={{ color: isFeatured ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.5)' }}
                    >
                      {scenario.subtitle}
                    </p>
                    <p
                      className="text-xs sm:text-sm font-['Inter'] leading-relaxed mb-4 sm:mb-6 flex-grow"
                      style={{ color: isFeatured ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.6)' }}
                    >
                      {scenario.description}
                    </p>

                    {/* Metadata Section - Premium glassmorphism */}
                    <div className={`space-y-2 sm:space-y-2.5 p-3 sm:p-4 mb-4 sm:mb-6 ${
                      isFeatured ? 'bg-white/10 backdrop-blur-md border border-white/10 rounded-md sm:rounded-lg' : 'bg-white/50 backdrop-blur-sm border border-black/5 rounded-md sm:rounded-lg'
                    }`}>
                      <div className="flex justify-between items-center">
                        <span className="text-[9px] sm:text-[10px] uppercase font-semibold tracking-wider" style={{ color: isFeatured ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.4)' }}>Durée</span>
                        <span className="text-[11px] sm:text-xs font-bold" style={{ color: isFeatured ? 'rgba(255,255,255,0.8)' : '#000000' }}>{scenario.duration}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[9px] sm:text-[10px] uppercase font-semibold tracking-wider" style={{ color: isFeatured ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.4)' }}>Budget</span>
                        <span className="text-[11px] sm:text-xs font-bold" style={{ color: isFeatured ? 'rgba(255,255,255,0.8)' : '#000000' }}>{scenario.investment}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[9px] sm:text-[10px] uppercase font-semibold tracking-wider" style={{ color: isFeatured ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.4)' }}>Cible</span>
                        <span className="text-[10px] sm:text-[11px] font-medium truncate ml-4" style={{ color: isFeatured ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.5)' }}>{scenario.idealFor}</span>
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className={`w-full h-[44px] sm:h-[48px] text-[11px] sm:text-[12px] font-['Inter'] font-semibold tracking-[-0.01em] flex items-center justify-center gap-2 rounded-full transition-all duration-300 active:scale-95 ${
                        isFeatured
                          ? 'bg-white text-black border border-white/50 shadow-[0_4px_24px_-1px_rgba(255,255,255,0.2),inset_0_1px_0_0_rgba(255,255,255,0.5)] hover:bg-white/95 hover:shadow-[0_8px_32px_-4px_rgba(255,255,255,0.35)] hover:-translate-y-0.5'
                          : 'bg-black/90 backdrop-blur-xl text-white border border-white/10 shadow-[0_4px_24px_-1px_rgba(0,0,0,0.15),inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:bg-black hover:shadow-[0_8px_32px_-4px_rgba(0,0,0,0.2)] hover:-translate-y-0.5'
                      }`}
                    >
                      {scenario.cta}
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
            className="mt-10 sm:mt-12 md:mt-16 pt-8 sm:pt-10 md:pt-12 border-t border-black/5 flex flex-col items-center gap-4 sm:gap-6 md:flex-row md:justify-between md:gap-8"
          >
            <div className="text-center md:text-left">
              <p className="font-['Roboto'] font-black text-xs sm:text-sm uppercase text-black">
                {homeContent.quandCommencer.bottomCta.text}
              </p>
              <p className="text-black/50 text-[11px] sm:text-xs font-['Inter']">
                {homeContent.quandCommencer.bottomCta.subtext}
              </p>
            </div>
            <Link
              href={homeContent.quandCommencer.bottomCta.button.href}
              className="inline-flex items-center gap-2 text-[11px] sm:text-[12px] font-bold uppercase tracking-wider text-black hover:text-black/70 transition-colors group"
            >
              {homeContent.quandCommencer.bottomCta.button.text}
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
  );
}
