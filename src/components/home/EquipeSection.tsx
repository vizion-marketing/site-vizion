"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users, Rocket, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { homeContent } from "@/content/home";
import { ImagePlaceholder } from "@/components/ui";

export function EquipeSection() {
  return (
    <>
      {/* SECTION ÉQUIPE */}
      {/* SEO: Équipe agence marketing Toulouse - experts B2B */}
      {/* Images: 260x320px (13:16) pour portraits membres */}
      <section
        className="py-20 sm:py-28 md:py-36 lg:py-44 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-white via-white to-[#FAFAF8] relative grain-light"
        aria-label="Équipe agence marketing Toulouse"
      >
        {/* Ambient glow */}
        <div className="absolute top-[20%] right-[5%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gradient-to-bl from-rose-50/20 via-pink-50/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[15%] left-[10%] w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-gradient-to-tr from-slate-100/30 to-transparent rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-[82.5rem] mx-auto relative z-10">
          {/* Header */}
          <div className="max-w-3xl mb-10 sm:mb-12 md:mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-black/40 mb-3 sm:mb-4"
            >
              <span className="w-5 h-[1px] bg-gradient-to-r from-[#B78726]/60 to-transparent" />
              {homeContent.equipe.surtitre}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
              className="font-['Roboto'] font-[900] text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[1.1] tracking-tight uppercase text-black mb-4 sm:mb-6"
            >
              {homeContent.equipe.h2}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1], delay: 0.1 }}
              className="text-black/60 text-base sm:text-lg font-['Inter'] leading-relaxed"
            >
              {homeContent.equipe.description}
            </motion.p>
          </div>

          {/* Model Pills */}
          <div className="flex flex-wrap items-center justify-start gap-2 sm:gap-4 mb-8 sm:mb-12">
            <div className="flex items-center gap-1.5 sm:gap-2 bg-black/90 backdrop-blur-xl text-white px-3 sm:px-5 py-2 sm:py-2.5 rounded-full border border-white/10 shadow-[0_4px_16px_-1px_rgba(0,0,0,0.2),inset_0_1px_0_0_rgba(255,255,255,0.1)]">
              <Users size={12} className="sm:hidden" />
              <Users size={14} className="hidden sm:block" />
              <span className="text-[10px] sm:text-xs font-bold uppercase">{homeContent.equipe.modelExplanation.director}</span>
            </div>
            <span className="px-2 sm:px-3 py-1 sm:py-1.5 bg-white/60 backdrop-blur-md border border-black/5 rounded-lg text-black/30 font-bold shadow-sm text-sm">+</span>
            <div className="flex items-center gap-1.5 sm:gap-2 bg-white backdrop-blur-xl text-black px-3 sm:px-5 py-2 sm:py-2.5 rounded-full border border-black/10 shadow-[0_4px_16px_-1px_rgba(0,0,0,0.08),inset_0_1px_0_0_rgba(255,255,255,0.5)]">
              <Rocket size={12} className="sm:hidden" />
              <Rocket size={14} className="hidden sm:block" />
              <span className="text-[10px] sm:text-xs font-bold uppercase">{homeContent.equipe.modelExplanation.squads}</span>
            </div>
          </div>

          {/* Team Grid - Responsive scroll */}
          <div className="relative -mx-4 sm:-mx-6 md:mx-0">
            <div
              className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-6 md:px-0 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pb-4 md:pb-0"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {homeContent.equipe.members.map((member, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, type: "spring", stiffness: 300, damping: 25 }}
                  className="flex-shrink-0 w-[220px] sm:w-[260px] md:w-auto snap-center group"
                >
                  <div className="bg-white/80 backdrop-blur-xl border border-black/10 rounded-md sm:rounded-lg shadow-sm overflow-hidden card-lift transition-all duration-300">
                    {/* Portrait - 260x320px (13:16) */}
                    <div className="relative aspect-[13/16] w-full overflow-hidden bg-[#F2F2F2]">
                      <ImagePlaceholder
                        width={260}
                        height={320}
                        label={`Portrait ${member.name}`}
                        rounded="none"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />

                      {/* Badge - Glassmorphism SaaS style */}
                      <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
                        <span className="px-2 sm:px-3 py-1 sm:py-1.5 bg-white/90 backdrop-blur-md border border-black/5 text-black text-[9px] sm:text-[10px] font-bold uppercase tracking-tight rounded-md sm:rounded-lg shadow-md">
                          {member.specialty}
                        </span>
                      </div>
                    </div>

                    {/* Info - Clean stacked layout with premium spacing */}
                    <div className="p-4 sm:p-6">
                      <h4 className="font-['Roboto'] font-black text-sm sm:text-base uppercase text-black mb-0.5 sm:mb-1 tracking-tight">
                        {member.name}
                      </h4>
                      <p className="text-black/40 text-xs sm:text-sm mb-3 sm:mb-5 font-medium">{member.role}</p>

                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {member.skills.slice(0, 3).map((skill, j) => (
                          <span
                            key={j}
                            className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-black/5 backdrop-blur-sm border border-black/5 text-black/70 text-[9px] sm:text-[10px] font-semibold uppercase rounded-lg"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Scroll hint - Mobile only */}
            <div className="flex md:hidden justify-center mt-4 sm:mt-6">
              <span className="text-[9px] sm:text-[10px] font-bold text-black/40 uppercase tracking-wider flex items-center gap-2">
                <ChevronRight size={12} />
                {homeContent.equipe.scrollHint}
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
