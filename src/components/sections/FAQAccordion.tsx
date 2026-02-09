"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Plus, Minus, ArrowRight } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQAccordionProps {
  surtitre?: string;
  title: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  faqs: FAQItem[];
  defaultOpenIndex?: number | null;
  variant?: "light" | "dark";
}

export function FAQAccordion({
  surtitre = "Questions fréquentes",
  title,
  description,
  ctaText,
  ctaHref = "/contact",
  faqs,
  defaultOpenIndex = 0,
  variant = "light",
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);
  const isDark = variant === "dark";

  return (
    <section className={`py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12 relative overflow-hidden ${isDark ? "grain-overlay" : "grain-light"}`}
      style={{ background: isDark ? "#0c0c0a" : "#f8f8f6" }}
    >
      {isDark ? (
        <>
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] animate-gradient-float-1 pointer-events-none" style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.12) 0%, transparent 55%)" }} />
          <div className="absolute bottom-[-15%] right-[-10%] w-[50%] h-[50%] animate-gradient-float-2 pointer-events-none" style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.08) 0%, transparent 55%)" }} />
          <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] animate-gradient-float-3 pointer-events-none" style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.06) 0%, transparent 55%)" }} />
        </>
      ) : (
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-[#D4FD00] opacity-[0.04] rounded-full blur-[200px] pointer-events-none" />
      )}

      <div className="max-w-[82.5rem] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left Column - Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            {/* Overline */}
            <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
              <div className="w-2 h-2 rounded-full bg-[#D4FD00]" />
              <span className={`text-[10px] sm:text-[11px] font-light tracking-[0.12em] uppercase ${isDark ? "text-white/50" : "text-[#6b6b6b]"}`}>
                {surtitre}
              </span>
            </div>

            <h2 className={`font-heading font-medium text-[28px] sm:text-[36px] md:text-[40px] leading-[1.08] tracking-[-0.02em] mb-4 sm:mb-5 ${isDark ? "text-white" : "text-[#1a1a1a]"}`}>
              {title}
            </h2>

            {description && (
              <p className={`text-[15px] sm:text-base font-[var(--font-body)] leading-relaxed mb-6 sm:mb-8 ${isDark ? "text-white/60" : "text-[#6b6b6b]"}`}>
                {description}
              </p>
            )}

            {ctaText && (
              <Link
                href={ctaHref}
                className={`group inline-flex items-center gap-2 text-[14px] font-[var(--font-body)] font-semibold transition-colors ${isDark ? "text-white hover:text-[#D4FD00]" : "text-[#1a1a1a] hover:text-[#0a0a0a]"}`}
              >
                {ctaText}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
          </motion.div>

          {/* Right Column - Accordion */}
          <div className="lg:col-span-8">
            <div className="space-y-3 sm:space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <div
                    className={`rounded-xl overflow-hidden transition-all duration-300 border ${
                      isDark
                        ? openIndex === index
                          ? "bg-white/[0.04] border-white/15"
                          : "bg-white/[0.02] border-white/10 hover:border-white/15"
                        : openIndex === index
                          ? "bg-white border-black/[0.12] shadow-sm"
                          : "bg-white border-black/[0.06] hover:border-black/[0.1]"
                    }`}
                  >
                    {/* Question */}
                    <button
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
                    >
                      <span className={`font-heading font-semibold text-[15px] sm:text-[16px] leading-snug pr-4 ${isDark ? "text-white" : "text-[#1a1a1a]"}`}>
                        {faq.question}
                      </span>
                      <div
                        className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                          openIndex === index
                            ? "bg-[#D4FD00] text-[#1a1a1a]"
                            : isDark ? "bg-white/5 text-white/50" : "bg-black/5 text-[#6b6b6b]"
                        }`}
                      >
                        {openIndex === index ? (
                          <Minus size={16} strokeWidth={2.5} />
                        ) : (
                          <Plus size={16} strokeWidth={2.5} />
                        )}
                      </div>
                    </button>

                    {/* Answer */}
                    <AnimatePresence initial={false}>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                            <div className={`h-px mb-4 sm:mb-5 ${isDark ? "bg-white/10" : "bg-black/[0.06]"}`} />
                            <p className={`text-[14px] sm:text-[15px] font-[var(--font-body)] leading-relaxed ${isDark ? "text-white/60" : "text-[#6b6b6b]"}`}>
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
