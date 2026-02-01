"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Lightbulb, Shield, Quote, Star, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { homeContent } from "@/content/home";
import { ImagePlaceholder } from "@/components/ui";
import { SectionDiagonalBottom } from "./shared/SectionDiagonal";

export function AboutSection() {
  return (
    <>
      {/* SECTION À PROPOS DE VIZION */}
      {/* SEO: Présentation agence marketing Toulouse - équipe et valeurs */}
      {/* Images: 500x600px (5:6) pour photo équipe, 56x56px cercle pour avatar fondateur */}
      <section
        className="py-20 sm:py-28 md:py-36 lg:py-44 px-4 sm:px-6 md:px-12 bg-gradient-to-bl from-[#F8F8F8] via-[#F2F2F2] to-[#EBEBEB] relative grain-light"
        aria-label="À propos de Vizion agence marketing Toulouse"
      >
        {/* Ambient glow */}
        <div className="absolute top-[10%] left-[5%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gradient-to-br from-violet-50/15 via-indigo-50/8 to-transparent rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[20%] right-[-5%] w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] bg-gradient-to-tl from-amber-50/12 via-orange-50/6 to-transparent rounded-full blur-[130px] pointer-events-none" />
        <div className="max-w-[82.5rem] mx-auto relative z-10">
          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 mb-12 sm:mb-16 md:mb-20">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
              className="lg:col-span-7"
            >
              <span className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-black/40 mb-3 sm:mb-4">
                <span className="w-5 h-[1px] bg-gradient-to-r from-[#B78726]/60 to-transparent" />
                {homeContent.aPropos.surtitre}
              </span>
              <h2 className="font-['Roboto'] font-[900] text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[1.1] tracking-tight uppercase text-black mb-5 sm:mb-6 md:mb-8">
                {homeContent.aPropos.h2}
              </h2>

              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8 md:mb-10">
                {homeContent.aPropos.paragraphs.map((para, i) => (
                  <p key={i} className="text-black/60 text-sm sm:text-base md:text-lg font-['Inter'] leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

              {/* Founder Quote - Premium Glassmorphism Card */}
              <div className="bg-white/80 backdrop-blur-xl border border-black/10 rounded-md sm:rounded-lg shadow-sm p-5 sm:p-8 md:p-10">
                <Quote className="mb-4 sm:mb-6" size={20} strokeWidth={2.5} fill="currentColor" style={{ color: 'rgba(183, 135, 38, 0.35)' }} />
                <blockquote className="text-base sm:text-lg md:text-xl font-['Inter'] font-medium leading-relaxed text-black mb-5 sm:mb-6 md:mb-8">
                  &ldquo;{homeContent.aPropos.founderQuote.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-[#F2F2F2] ring-2 ring-white shadow-lg">
                    <ImagePlaceholder
                      width={48}
                      height={48}
                      label="Fondateur"
                      rounded="full"
                      className="w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-['Roboto'] font-black text-xs sm:text-sm uppercase tracking-wide text-black">
                      {homeContent.aPropos.founderQuote.name}
                    </h4>
                    <p className="text-black/40 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
                      {homeContent.aPropos.founderQuote.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Photo Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1], delay: 0.1 }}
              className="lg:col-span-5"
            >
              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="relative aspect-[4/3] sm:aspect-[5/6] rounded-md sm:rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-[#F2F2F2]">
                  <ImagePlaceholder
                    width={500}
                    height={600}
                    label="Photo équipe Vizion Toulouse"
                    rounded="none"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Caption Card - Premium Glassmorphism */}
                <div className="bg-white/80 backdrop-blur-xl border border-black/10 rounded-md sm:rounded-lg shadow-sm p-4 sm:p-6">
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] text-black/40 mb-1 block">
                    {homeContent.aPropos.photoCaption.label}
                  </span>
                  <p className="font-['Roboto'] font-black text-sm sm:text-base uppercase text-black">
                    {homeContent.aPropos.photoCaption.title}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Values - Premium Glassmorphism Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
          >
            <h3 className="font-['Roboto'] font-black text-base sm:text-lg uppercase mb-4 sm:mb-6 text-center text-black">
              {homeContent.aPropos.valeursTitre}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {homeContent.aPropos.valeurs.map((value, i) => {
                const icons = [
                  <Star key="sm-0" size={16} className="sm:hidden" />,
                  <Zap key="sm-1" size={16} className="sm:hidden" />,
                  <Shield key="sm-2" size={16} className="sm:hidden" />,
                  <Lightbulb key="sm-3" size={16} className="sm:hidden" />
                ];
                const iconsLg = [
                  <Star key="lg-0" size={18} className="hidden sm:block" />,
                  <Zap key="lg-1" size={18} className="hidden sm:block" />,
                  <Shield key="lg-2" size={18} className="hidden sm:block" />,
                  <Lightbulb key="lg-3" size={18} className="hidden sm:block" />
                ];
                return (
                  <div
                    key={i}
                    className="bg-white/80 backdrop-blur-xl border border-black/10 rounded-md sm:rounded-lg shadow-sm p-3 sm:p-5 group card-lift transition-all duration-300"
                  >
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-md sm:rounded-lg bg-black/5 backdrop-blur-sm flex items-center justify-center mb-3 sm:mb-4 text-black group-hover:bg-black group-hover:text-white transition-colors">
                      {icons[i]}
                      {iconsLg[i]}
                    </div>
                    <h4 className="font-['Roboto'] font-black text-xs sm:text-sm uppercase mb-1.5 sm:mb-2 text-black tracking-tight">
                      {value.title}
                    </h4>
                    <p className="text-black/50 text-[11px] sm:text-sm font-['Inter'] leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
        {/* Diagonal bottom → next section (Équipe white) */}
        <SectionDiagonalBottom fillColor="#FFFFFF" direction="right" />
      </section>
    </>
  );
}
