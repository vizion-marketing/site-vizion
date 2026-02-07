"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, Shield, User } from "lucide-react";

const TRUST_ELEMENTS = [
  { icon: Clock, text: "30 min" },
  { icon: Shield, text: "Sans engagement" },
  { icon: User, text: "Avec un fondateur" },
];

export function FinalCTASection() {
  return (
    <section
      className="py-20 sm:py-24 md:py-32 lg:py-40 px-4 sm:px-6 md:px-12 relative overflow-hidden grain-overlay"
      style={{
        background: "linear-gradient(117deg, #B7B7B7 0%, #000 50.77%, #6D6D6D 100.58%)",
      }}
    >
      {/* Carbon fibre texture */}
      <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('/carbon-fibre.png')]" />

      {/* Ambient glow */}
      <div
        className="absolute top-[30%] left-[40%] w-[500px] h-[500px] rounded-full blur-[200px] pointer-events-none"
        style={{ background: "rgba(212, 253, 0, 0.08)" }}
      />

      <div className="max-w-[60rem] mx-auto relative z-10 text-center">
        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 mb-6 sm:mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-[#D4FD00] opacity-50" />
            <span className="relative inline-flex rounded-none h-2 w-2 bg-[#D4FD00]" />
          </span>
          <span className="text-[11px] sm:text-xs font-semibold tracking-wide text-white/80">
            +70 entreprises a Toulouse et en France nous font confiance
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading font-medium text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] leading-[0.95] tracking-[-0.03em] text-white mb-5 sm:mb-6"
        >
          Pret a devenir{" "}
          <span className="text-[#D4FD00]">l&apos;evidence</span> ?
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/70 text-base sm:text-lg md:text-xl font-[var(--font-body)] leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10"
        >
          Prenez 30 minutes avec nous. On analyse votre positionnement actuel
          et on vous dit ce qu&apos;on ferait. Sans engagement. Avec un fondateur.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10"
        >
          {/* Primary CTA */}
          <Link
            href="/contact"
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 h-[52px] sm:h-[56px] px-8 sm:px-10 text-[14px] sm:text-[15px] font-[var(--font-body)] font-semibold tracking-[-0.01em] bg-[#D4FD00] text-[#1a1a1a] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(212,253,0,0.25)]"
          >
            Reserver un appel strategique
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Secondary CTA */}
          <Link
            href="/cas-clients"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-[52px] sm:h-[56px] px-8 sm:px-10 text-[14px] sm:text-[15px] font-[var(--font-body)] font-semibold tracking-[-0.01em] bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300"
          >
            Telecharger notre guide
          </Link>
        </motion.div>

        {/* Trust elements */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6"
        >
          {TRUST_ELEMENTS.map((element, index) => (
            <div key={element.text} className="flex items-center gap-2">
              <element.icon size={14} className="text-[#D4FD00]" />
              <span className="text-xs sm:text-sm font-[var(--font-body)] text-white/60">
                {element.text}
              </span>
              {index < TRUST_ELEMENTS.length - 1 && (
                <span className="hidden sm:inline text-white/20 ml-4">|</span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default FinalCTASection;
