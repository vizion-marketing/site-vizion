"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { homeContent, faqSchema } from "@/content/home";
import { SectionDiagonalBottom } from "./shared/SectionDiagonal";

const faqData = homeContent.faq.questions;

// FAQ Section Component
// SEO: Questions fréquentes agence marketing Toulouse
export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="py-20 sm:py-28 md:py-36 lg:py-44 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-white via-white to-[#FAFAF8] relative grain-light"
      aria-label="Questions fréquentes agence marketing Toulouse"
    >
      {/* Ambient glow */}
      <div className="absolute top-0 right-[10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gradient-to-bl from-amber-50/30 via-orange-50/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-[5%] w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] bg-gradient-to-tr from-slate-100/40 to-transparent rounded-full blur-[100px] pointer-events-none" />
      {/* JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-[82.5rem] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16">
          {/* Left - Header */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 bg-white/60 backdrop-blur-xl border border-black/10 rounded-lg sm:rounded-xl p-5 sm:p-8 shadow-sm">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-black/40 mb-3 sm:mb-4"
              >
                <span className="w-5 h-[1px] bg-gradient-to-r from-[#B78726]/60 to-transparent" />
                {homeContent.faq.surtitre}
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                className="font-['Roboto'] font-[900] text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-[1.1] tracking-tight uppercase text-black mb-4 sm:mb-6"
              >
                {homeContent.faq.h2}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1], delay: 0.1 }}
                className="text-black/60 text-sm sm:text-base font-['Inter'] leading-relaxed mb-5 sm:mb-8"
              >
                {homeContent.faq.description}
              </motion.p>

              <Link
                href={homeContent.faq.ctaButton.href}
                className="btn-glow inline-flex items-center gap-2 h-[48px] sm:h-[56px] px-6 sm:px-8 text-[13px] sm:text-[15px] font-['Inter'] font-semibold tracking-[-0.01em] rounded-full transition-all duration-300 active:scale-95 bg-black text-white border border-black/50 shadow-[0_4px_24px_-1px_rgba(0,0,0,0.2),inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:bg-black/90 hover:shadow-[0_8px_32px_-4px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 group w-full sm:w-auto justify-center"
              >
                {homeContent.faq.ctaButton.text}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform arrow-hover" />
              </Link>
            </div>
          </div>

          {/* Right - Accordion */}
          <div className="lg:col-span-8">
            <div className="space-y-2 sm:space-y-3">
              {faqData.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12, type: "spring", stiffness: 300, damping: 25 }}
                  className={`rounded-md sm:rounded-lg overflow-hidden transition-all duration-300 ${
                    openIndex === index
                      ? 'bg-white shadow-sm border border-black/15'
                      : 'bg-white/80 backdrop-blur-xl border border-black/10 shadow-sm hover:shadow-md'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full p-3 sm:p-4 md:p-5 flex items-center justify-between text-left group gap-3"
                  >
                    <span className="font-['Roboto'] font-bold text-xs sm:text-sm tracking-tight text-black group-hover:text-black/80 transition-colors pr-2">
                      {faq.question}
                    </span>
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-md sm:rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        openIndex === index
                          ? 'bg-black text-white'
                          : 'bg-white/80 backdrop-blur-sm border border-black/5 text-black group-hover:bg-white group-hover:shadow-sm'
                      }`}
                    >
                      <ChevronDown
                        size={12}
                        className={`transition-transform duration-300 sm:hidden ${
                          openIndex === index ? 'rotate-180' : ''
                        }`}
                      />
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 hidden sm:block ${
                          openIndex === index ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: openIndex === index ? 'auto' : 0,
                      opacity: openIndex === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-3 sm:px-5 pb-3 sm:pb-5 text-black/50 font-['Inter'] text-xs sm:text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Diagonal bottom → next section (Map section gray) */}
      <SectionDiagonalBottom fillColor="#F8F8F8" direction="left" />
    </section>
  );
}
