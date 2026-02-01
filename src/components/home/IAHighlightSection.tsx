"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Brain, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { homeContent } from "@/content/home";
import { ImagePlaceholder } from "@/components/ui";
import { SectionDiagonalTop, SectionDiagonalBottom } from "./shared/SectionDiagonal";

export function IAHighlightSection() {
  const [currentIASlide, setCurrentIASlide] = useState(0);

  return (
      <section
        className="py-20 sm:py-28 md:py-36 lg:py-44 px-4 sm:px-6 md:px-12 bg-gradient-to-br from-[#B7B7B7] via-[#000] to-[#6D6D6D] relative"
        aria-label="Expertise IA et Vibe Coding agence marketing Toulouse"
      >
        {/* Diagonal top overlay - covers gap from previous section */}
        <SectionDiagonalTop fillColor="#C8C8C8" direction="left" />
        {/* Carbon fibre pattern */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        {/* Subtle glow */}
        <div className="absolute top-0 right-0 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-gradient-to-bl from-white/10 via-amber-100/5 to-transparent rounded-full blur-[150px]" />

        <div className="max-w-[82.5rem] mx-auto relative z-10">
          {/* Header */}
          <div className="max-w-3xl mb-10 sm:mb-12 md:mb-16 lg:mb-20">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 sm:gap-3 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-3 sm:mb-4"
              style={{ color: 'rgba(255,255,255,0.8)' }}
            >
              <Brain size={14} className="text-white sm:hidden" />
              <Brain size={16} className="text-white hidden sm:block" />
              {homeContent.iaHighlight.surtitre}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
              className="font-['Roboto'] font-[900] text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[1.1] tracking-tight uppercase text-white mb-4 sm:mb-6"
            >
              {homeContent.iaHighlight.h2}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1], delay: 0.1 }}
              className="text-base sm:text-lg font-['Inter'] leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.8)' }}
            >
              {homeContent.iaHighlight.introduction}
            </motion.p>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10">
            {/* Left - Benefits List */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4 order-2 lg:order-1"
            >
              <div className="lg:sticky lg:top-24 space-y-2 sm:space-y-3">
                {homeContent.iaHighlight.whyImportant.map((item: string, i: number) => (
                  <div
                    key={i}
                    className="p-3 sm:p-4 md:p-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-md sm:rounded-lg shadow-lg hover:shadow-xl hover:border-white/20 hover:-translate-y-0.5 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-md sm:rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white transition-colors">
                        <CheckCircle2 size={12} className="text-white group-hover:text-black sm:hidden" />
                        <CheckCircle2 size={14} className="text-white group-hover:text-black hidden sm:block" />
                      </div>
                      <p className="font-['Inter'] text-xs sm:text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>
                        {item}
                      </p>
                    </div>
                  </div>
                ))}

                <Link
                  href="/contact"
                  className="mt-3 sm:mt-4 w-full h-[46px] sm:h-[52px] px-4 sm:px-6 text-[12px] sm:text-[13px] font-['Inter'] font-semibold tracking-[-0.01em] inline-flex items-center justify-center gap-2 rounded-full transition-all duration-300 active:scale-95 bg-white text-black border border-white/50 shadow-[0_4px_24px_-1px_rgba(255,255,255,0.2),inset_0_1px_0_0_rgba(255,255,255,0.5)] hover:bg-white/95 hover:shadow-[0_8px_32px_-4px_rgba(255,255,255,0.35)] hover:-translate-y-0.5 group"
                >
                  Explorer l&apos;IA avec nous
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* Right - Use Cases Slider */}
            <div className="lg:col-span-8 order-1 lg:order-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIASlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-gradient-to-br from-[#B7B7B7] via-[#000] to-[#6D6D6D] backdrop-blur-xl border border-white/10 rounded-md sm:rounded-lg shadow-2xl overflow-hidden relative"
                >
                  {/* Carbon fibre pattern */}
                  <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
                  {(() => {
                    const useCases = homeContent.iaHighlight.useCases;
                    const current = useCases[currentIASlide];
                    const nextSlide = () => setCurrentIASlide((prev) => (prev + 1) % useCases.length);
                    const prevSlide = () => setCurrentIASlide((prev) => (prev - 1 + useCases.length) % useCases.length);

                    return (
                      <>
                        {/* Image - 800x320px (5:2) pour Figma */}
                        <div className="relative aspect-[4/3] sm:aspect-[5/2] w-full">
                          {current.image ? (
                            <Image
                              src={current.image}
                              alt={`${current.title} - Agence Marketing Toulouse`}
                              fill
                              className="object-cover"
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 800px"
                            />
                          ) : (
                            <ImagePlaceholder
                              width={800}
                              height={320}
                              label="Illustration IA"
                              rounded="none"
                              variant="dark"
                              className="w-full h-full"
                            />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />

                          {/* Tags overlay */}
                          <div className="absolute top-3 sm:top-6 left-3 sm:left-6 flex flex-wrap gap-1.5 sm:gap-2">
                            {current.tags.map((tag: string, idx: number) => (
                              <span key={idx} className="px-2 sm:px-3 py-1 sm:py-1.5 bg-black/50 backdrop-blur-md border border-white/20 text-[9px] sm:text-[10px] font-bold text-white uppercase tracking-wider rounded-md sm:rounded-lg">
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Metric overlay */}
                          {current.metric && (
                            <div className="absolute bottom-3 sm:bottom-6 right-3 sm:right-6 text-right">
                              <span className="text-2xl sm:text-4xl md:text-5xl font-['Roboto'] font-[900] text-white block leading-none drop-shadow-[0_0_25px_rgba(255,255,255,0.3)]">
                                {current.metric}
                              </span>
                              <span className="text-[9px] sm:text-[10px] font-bold text-white/90 uppercase tracking-wider">
                                Impact mesuré
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="p-4 sm:p-6 md:p-8 lg:p-10">
                          <h3 className="font-['Roboto'] font-[900] text-xl sm:text-2xl md:text-3xl uppercase mb-3 sm:mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
                            {current.title}
                          </h3>
                          <p className="font-['Inter'] text-sm sm:text-base leading-relaxed mb-4 sm:mb-6" style={{ color: 'rgba(255,255,255,0.8)' }}>
                            {current.description}
                          </p>

                          {/* Example quote */}
                          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-md sm:rounded-lg p-3 sm:p-5 mb-6 sm:mb-8">
                            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] mb-1.5 sm:mb-2 block" style={{ color: 'rgba(255,255,255,0.8)' }}>
                              Exemple concret
                            </span>
                            <p className="font-['Inter'] italic text-xs sm:text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>
                              &ldquo;{current.example}&rdquo;
                            </p>
                          </div>

                          {/* Navigation */}
                          <div className="flex items-center justify-between">
                            <div className="flex gap-1 sm:gap-1.5">
                              {useCases.map((_: unknown, idx: number) => (
                                <button
                                  key={idx}
                                  onClick={() => setCurrentIASlide(idx)}
                                  className={`h-1 sm:h-1.5 transition-all duration-300 rounded-full ${
                                    idx === currentIASlide ? 'w-6 sm:w-8 bg-white shadow-[0_0_10px_rgba(255,255,255,0.3)]' : 'w-1 sm:w-1.5 bg-white/20 hover:bg-white/40'
                                  }`}
                                  aria-label={`Cas d'usage ${idx + 1}`}
                                />
                              ))}
                            </div>
                            <div className="flex gap-2">
                              <button
                                onClick={prevSlide}
                                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
                                aria-label="Cas d'usage précédent"
                              >
                                <ChevronLeft size={16} className="sm:hidden" />
                                <ChevronLeft size={18} className="hidden sm:block" />
                              </button>
                              <button
                                onClick={nextSlide}
                                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white backdrop-blur-xl border border-white/50 shadow-[0_4px_16px_-1px_rgba(255,255,255,0.2),inset_0_1px_0_0_rgba(255,255,255,0.5)] flex items-center justify-center text-black hover:bg-white/95 hover:shadow-[0_6px_20px_-2px_rgba(255,255,255,0.35)] transition-all duration-300"
                                aria-label="Cas d'usage suivant"
                              >
                                <ChevronRight size={16} className="sm:hidden" />
                                <ChevronRight size={18} className="hidden sm:block" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })()}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
        {/* Diagonal bottom → next section (Quand Commencer white) */}
        <SectionDiagonalBottom fillColor="#FFFFFF" direction="right" />
      </section>
  );
}
