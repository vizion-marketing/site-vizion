"use client";

import React from "react";
import { motion } from "framer-motion";

export function QuoteSection() {
  return (
    <section className="bg-[#0c0c0a] py-20 sm:py-28 md:py-36 lg:py-44 px-4 sm:px-6 md:px-12 relative overflow-hidden">
      {/* Subtle gradient accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[50%] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 0%, rgba(212, 253, 0, 0.08) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-[56rem] mx-auto relative z-10">
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Quote mark */}
          <span className="block text-[#D4FD00] text-[60px] sm:text-[80px] md:text-[100px] leading-none font-heading mb-4 sm:mb-6 opacity-50">
            "
          </span>

          {/* Quote text */}
          <p className="font-heading font-medium text-[22px] sm:text-[28px] md:text-[36px] lg:text-[44px] leading-[1.2] tracking-[-0.02em] text-white">
            Nous construisons les histoires que vos clients{" "}
            <span className="text-[#D4FD00]">aiment entendre</span>, et vos
            commerciaux{" "}
            <span className="text-[#D4FD00]">aiment raconter</span>.
          </p>

          {/* Attribution */}
          <footer className="mt-8 sm:mt-12">
            <div className="inline-flex items-center gap-3">
              <div className="w-8 h-[1px] bg-white/20" />
              <span className="text-white/50 text-xs sm:text-sm font-medium tracking-wide uppercase">
                La philosophie Vizion
              </span>
              <div className="w-8 h-[1px] bg-white/20" />
            </div>
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
}

export default QuoteSection;
