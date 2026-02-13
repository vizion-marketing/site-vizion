"use client";

import React, { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export interface CaseStudy {
  id: string;
  logo: string;
  category: string;
  metric: string;
  metricLabel: string;
  title: string;
  description: string;
  slug: string;
  image: string;
}

export interface CaseStudiesCarouselProps {
  surtitre?: string;
  title: string;
  cases: CaseStudy[];
  ctaBaseHref?: string;
  ctaText?: string;
  variant?: "light" | "dark";
}

export function CaseStudiesCarousel({
  surtitre = "Cas clients & résultats",
  title,
  cases,
  ctaBaseHref = "/cas-clients",
  ctaText = "Lire le cas complet",
  variant = "light",
}: CaseStudiesCarouselProps) {
  const isDark = variant === "dark";
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  return (
    <section className={`py-16 sm:py-20 md:py-28 lg:py-32 px-4 sm:px-6 md:px-12 relative overflow-hidden ${isDark ? "grain-overlay" : "grain-light"}`} style={{ background: isDark ? "#0c0c0a" : "#f8f8f6" }}>
      {isDark && (
        <>
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] animate-gradient-float-1 pointer-events-none" style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.12) 0%, transparent 55%)" }} />
          <div className="absolute bottom-[-15%] right-[-10%] w-[50%] h-[50%] animate-gradient-float-2 pointer-events-none" style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.08) 0%, transparent 55%)" }} />
          <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] animate-gradient-float-3 pointer-events-none" style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.06) 0%, transparent 55%)" }} />
        </>
      )}
      <div className="max-w-[82.5rem] mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-14">
          <div>
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center gap-2.5 mb-4 sm:mb-5">
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 500, damping: 20, delay: 0.05 }}
                className="relative flex h-2 w-2"
              >
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4FD00] opacity-40" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-br from-[#D4FD00] via-[#D4FD00]/80 to-[#D4FD00]/60 shadow-[0_0_8px_rgba(212,253,0,0.5)]" />
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className={`text-[10px] sm:text-[11px] font-light tracking-[0.12em] uppercase ${isDark ? "text-white/70" : "text-[#6b6b6b]"}`}
              >
                {surtitre}
              </motion.span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className={`font-heading font-medium text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] ${isDark ? "!text-white" : "text-[#1a1a1a]"}`} style={isDark ? { color: "#ffffff" } : undefined}>
              {title}
            </motion.h2>
          </div>
          <div className="flex gap-2">
            <button onClick={scrollPrev} className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border transition-colors ${isDark ? "bg-white/5 border-white/10 text-white hover:bg-white/10" : "bg-white border-black/10 text-[#1a1a1a] hover:bg-black hover:text-white"}`} aria-label="Précédent">
              <ChevronLeft size={20} />
            </button>
            <button onClick={scrollNext} className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border transition-colors ${isDark ? "bg-white/5 border-white/10 text-white hover:bg-white/10" : "bg-white border-black/10 text-[#1a1a1a] hover:bg-black hover:text-white"}`} aria-label="Suivant">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {cases.map((caseStudy, index) => (
              <div key={caseStudy.id} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_85%] lg:flex-[0_0_70%] pr-4 sm:pr-6">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className={`overflow-hidden h-full border ${isDark ? "bg-white/[0.03] border-white/10" : "bg-white border-black/[0.06]"}`}>
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <Image src={caseStudy.image} alt={caseStudy.logo} fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 right-4 bg-[#D4FD00] p-3 sm:p-4">
                      <span className="font-[var(--font-body)] font-[900] text-2xl sm:text-3xl tracking-[-0.03em] text-[#1a1a1a] leading-none block">{caseStudy.metric}</span>
                      <span className="text-[9px] font-semibold tracking-wider text-[#1a1a1a]/70 uppercase">{caseStudy.metricLabel}</span>
                    </div>
                  </div>
                  <div className="p-6 sm:p-8">
                    <span className={`inline-block px-2.5 py-1 text-[10px] font-bold tracking-wide mb-4 ${isDark ? "bg-white/5 text-white/50" : "bg-black/5 text-[#6b6b6b]"}`}>{caseStudy.category}</span>
                    <h3 className={`font-heading font-medium text-lg sm:text-xl mb-2 ${isDark ? "!text-white" : "text-[#1a1a1a]"}`}>{caseStudy.logo}</h3>
                    <p className={`text-base sm:text-lg font-[var(--font-body)] mb-4 ${isDark ? "text-white/75" : "text-[#6b6b6b]"}`}>{caseStudy.title}</p>
                    <p className={`text-sm font-[var(--font-body)] leading-relaxed mb-6 ${isDark ? "text-white/75" : "text-[#6b6b6b]"}`}>{caseStudy.description}</p>
                    <Link href={`${ctaBaseHref}/${caseStudy.slug}`} className={`inline-flex items-center gap-2 text-sm font-[var(--font-body)] font-semibold hover:text-[#D4FD00] transition-colors group ${isDark ? "!text-white" : "text-[#1a1a1a]"}`}>
                      {ctaText}
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6 sm:mt-8">
          {cases.map((_, index) => (
            <button key={index} onClick={() => scrollTo(index)} className={`w-2 h-2 transition-all duration-300 ${index === selectedIndex ? "bg-[#D4FD00] w-6" : isDark ? "bg-white/20 hover:bg-white/40" : "bg-black/20 hover:bg-black/40"}`} aria-label={`Aller au cas ${index + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
