"use client";

import { motion } from "framer-motion";
import { ArrowRight, Target, Rocket, Settings2, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { homeContent } from "@/content/home";
import { ImagePlaceholder } from "@/components/ui";

export function PiliersSection() {
  return (
    <section
      className="py-20 sm:py-28 md:py-36 lg:py-44 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-[#F8F8F8] via-[#F2F2F2] to-[#C8C8C8] relative grain-light"
      aria-label="Services agence marketing B2B Toulouse"
    >
      {/* Background ambient light - Enhanced with multiple gradients */}
      <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] bg-gradient-to-br from-amber-100/15 via-orange-50/8 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-gradient-to-tl from-slate-200/20 via-white/10 to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-white/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[82.5rem] mx-auto relative z-10">
        {/* Header - Refined */}
        <div className="max-w-3xl mb-10 sm:mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4"
          >
            <div className="h-[1px] w-6 sm:w-8 bg-gradient-to-r from-[#B78726]/60 to-[#B78726]/20" />
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.25em] text-black/50">
              {homeContent.piliers.surtitre}
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
            className="font-['Roboto'] font-[900] text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1] tracking-tight uppercase text-black mb-4 sm:mb-6 md:mb-8"
          >
            {homeContent.piliers.h2}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1], delay: 0.1 }}
            className="text-black/60 text-base sm:text-lg font-['Inter'] leading-relaxed max-w-2xl"
          >
            {homeContent.piliers.description}
          </motion.p>
        </div>

        {/* Bento Grid - Premium Glassmorphism SaaS Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6">
          {/* PILIER 01 - Main Dark Glassmorphism Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
            className="md:col-span-2 lg:col-span-7 lg:row-span-2 bg-gradient-to-br from-[#B7B7B7] via-[#000] to-[#6D6D6D] backdrop-blur-xl border border-white/10 rounded-md sm:rounded-lg p-5 sm:p-8 md:p-10 flex flex-col min-h-[400px] sm:min-h-[450px] lg:min-h-[550px] relative overflow-hidden group shadow-2xl shadow-black/30 hover:shadow-black/40 hover:border-white/20 transition-all duration-300"
          >
            {/* Carbon fibre pattern */}
            <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            {/* Yellow gradient glows */}
            <div className="absolute top-[-15%] left-[-15%] w-[70%] h-[70%] bg-gradient-to-br from-[#EEFF41]/30 via-[#EEFF41]/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[55%] h-[55%] bg-gradient-to-tl from-[#EEFF41]/25 via-[#EEFF41]/8 to-transparent rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] bg-[#EEFF41]/[0.06] rounded-full blur-[80px] pointer-events-none" />
            {/* Inner glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#EEFF41]/[0.08] via-transparent to-[#EEFF41]/[0.05] pointer-events-none rounded-xl" />

            <div className="relative z-10 flex-1 flex flex-col">
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-5 sm:mb-8">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white flex items-center justify-center shadow-lg shadow-white/20">
                  <span className="font-black text-xs sm:text-sm text-black">{homeContent.piliers.piliers[0].numero}</span>
                </div>
                <div className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg">
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em]" style={{ color: 'rgba(255,255,255,0.8)' }}>
                    {homeContent.piliers.piliers[0].surtitre}
                  </span>
                </div>
              </div>

              <h3 className="font-['Roboto'] font-[900] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] leading-tight uppercase mb-4 sm:mb-6 group-hover:opacity-90 transition-opacity duration-300" style={{ color: 'rgba(255,255,255,0.8)' }}>
                {homeContent.piliers.piliers[0].titre}
              </h3>
              <p className="text-sm sm:text-base font-['Inter'] leading-relaxed mb-5 sm:mb-8 max-w-lg" style={{ color: 'rgba(255,255,255,0.8)' }}>
                {homeContent.piliers.piliers[0].description}
              </p>

              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-10">
                {homeContent.piliers.piliers[0].services.map((item) => (
                  <span key={item} className="px-2 sm:px-3 py-1 sm:py-1.5 bg-white/10 backdrop-blur-sm border border-white/10 text-[9px] sm:text-[10px] font-bold rounded-lg uppercase tracking-wide hover:bg-white/15 hover:border-white/20 transition-all duration-200" style={{ color: 'rgba(255,255,255,0.8)' }}>
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-auto">
                <ImagePlaceholder
                  width={600}
                  height={240}
                  label="Stratégie & Performance"
                  rounded="lg"
                  variant="dark"
                  className="w-full border border-white/10 rounded-xl"
                />
              </div>
            </div>
          </motion.div>

          {/* LIGHT GLASSMORPHISM CARDS (02-05) */}
          {[
            { idx: 1, Icon: Target, span: "lg:col-span-5" },
            { idx: 2, Icon: Rocket, span: "lg:col-span-5" },
            { idx: 3, Icon: Users, span: "lg:col-span-6" },
            { idx: 4, Icon: Settings2, span: "lg:col-span-6" }
          ].map(({ idx, Icon, span }, i) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className={`${span} bg-white/80 backdrop-blur-xl border border-black/10 rounded-md sm:rounded-lg p-4 sm:p-5 md:p-7 flex flex-col group shadow-sm card-lift transition-all duration-300`}
            >
              <div className="flex items-start justify-between mb-4 sm:mb-6">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-black/5 backdrop-blur-sm border border-black/5 flex items-center justify-center group-hover:bg-black group-hover:border-black group-hover:shadow-lg group-hover:shadow-black/20 transition-all duration-300">
                  <Icon className="text-black group-hover:text-white transition-colors" size={18} strokeWidth={2.5} />
                </div>
                <span className="text-[11px] sm:text-[12px] font-black text-[#B78726]/30 group-hover:text-[#B78726]/50 transition-colors">0{idx + 1}</span>
              </div>
              <h4 className="font-['Roboto'] font-black text-base sm:text-lg uppercase mb-2 sm:mb-3 tracking-tight text-black">{homeContent.piliers.piliers[idx].titre}</h4>
              <p className="text-[13px] sm:text-[14px] text-black/60 font-['Inter'] leading-relaxed mb-4 sm:mb-6 flex-1">{homeContent.piliers.piliers[idx].description}</p>

              <div className="flex flex-wrap items-center justify-between gap-2 mt-auto">
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {homeContent.piliers.piliers[idx].services.slice(0, 2).map(tag => (
                    <span key={tag} className="px-2 sm:px-2.5 py-1 sm:py-1.5 bg-black/5 backdrop-blur-sm border border-black/5 text-black/70 text-[9px] sm:text-[10px] font-bold rounded-lg uppercase tracking-tight hover:bg-black/10 transition-all duration-200">{tag}</span>
                  ))}
                </div>
                {idx === 4 && (
                  <div className="flex items-center gap-2 bg-black text-white px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl shadow-lg">
                    <span className="text-[8px] sm:text-[9px] font-bold opacity-50 uppercase">ROI</span>
                    <span className="text-[11px] sm:text-xs font-black text-white">x4.5</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA - Premium Glassmorphism Style */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
          className="mt-10 sm:mt-12 md:mt-16 p-4 sm:p-6 md:p-8 rounded-md sm:rounded-lg bg-white/80 backdrop-blur-xl border border-black/10 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 shadow-sm"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 text-center sm:text-left">
            <div className="flex -space-x-3">
              {[5, 6, 7].map((i) => (
                <div key={i} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white overflow-hidden shadow-md ring-1 ring-black/5">
                  <Image src={`https://i.pravatar.cc/40?u=${i+30}`} alt="Client" width={40} height={40} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <p className="text-xs sm:text-sm text-black/60 font-['Inter'] leading-tight">
              <span className="block font-bold text-black text-xs sm:text-sm mb-0.5">{homeContent.piliers.socialProofText}</span>
              Rejoignez les leaders du secteur
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 w-full md:w-auto">
            <Link
              href={homeContent.piliers.cta.secondary.href}
              className="w-full sm:w-auto h-[48px] sm:h-[56px] px-6 sm:px-8 text-[13px] sm:text-[15px] font-['Inter'] font-semibold tracking-[-0.01em] text-black bg-black/5 backdrop-blur-sm border border-black/10 rounded-full hover:bg-black/10 hover:border-black/15 hover:-translate-y-0.5 transition-all duration-300 active:scale-95 flex items-center justify-center"
            >
              {homeContent.piliers.cta.secondary.text}
            </Link>
            <Link
              href={homeContent.piliers.cta.primary.href}
              className="btn-glow w-full sm:w-auto h-[48px] sm:h-[56px] px-6 sm:px-8 text-[13px] sm:text-[15px] font-['Inter'] font-semibold tracking-[-0.01em] bg-black text-white rounded-full hover:bg-black/90 hover:-translate-y-0.5 transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 border border-black/50 shadow-[0_4px_24px_-1px_rgba(0,0,0,0.2),inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:shadow-[0_8px_32px_-4px_rgba(0,0,0,0.3)]"
            >
              {homeContent.piliers.cta.primary.text} <ArrowRight size={14} className="arrow-hover" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
