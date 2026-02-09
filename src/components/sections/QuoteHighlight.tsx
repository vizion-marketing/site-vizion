"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export interface QuoteHighlightProps {
  quote: string;
  author?: string;
  role?: string;
  /** Optional background image */
  image?: string;
  variant?: "accent" | "dark" | "light";
}

export function QuoteHighlight({
  quote,
  author,
  role,
  image,
  variant = "accent",
}: QuoteHighlightProps) {
  const isAccent = variant === "accent";
  const isDark = variant === "dark";

  const bgColor = isAccent ? "#D4FD00" : isDark ? "#0c0c0a" : "#f8f8f6";
  const textColor = isAccent ? "text-[#1a1a1a]" : isDark ? "text-white" : "text-[#1a1a1a]";
  const subColor = isAccent ? "text-[#1a1a1a]/60" : isDark ? "text-white/50" : "text-[#6b6b6b]";

  return (
    <section
      className={`relative overflow-hidden ${isDark ? "grain-overlay" : ""}`}
      style={{ background: image ? undefined : bgColor }}
    >
      {/* Background image */}
      {image && (
        <>
          <Image src={image} alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </>
      )}

      <div className={`relative z-10 max-w-[82.5rem] mx-auto px-4 sm:px-6 md:px-12 py-16 sm:py-20 md:py-24 lg:py-28`}>
        <div className="max-w-4xl mx-auto text-center">
          {/* Large quote mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`font-heading font-bold text-[60px] sm:text-[80px] leading-none mb-4 ${image ? "text-[#D4FD00]" : isAccent ? "text-[#1a1a1a]/20" : isDark ? "text-[#D4FD00]/30" : "text-[#D4FD00]/40"}`}
          >
            &ldquo;
          </motion.div>

          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`font-heading font-medium text-[22px] sm:text-[28px] md:text-[34px] lg:text-[40px] leading-[1.2] tracking-[-0.01em] mb-6 sm:mb-8 ${image ? "text-white" : textColor}`}
          >
            {quote}
          </motion.blockquote>

          {(author || role) && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center justify-center gap-3"
            >
              <div className={`w-8 h-px ${image ? "bg-[#D4FD00]" : isAccent ? "bg-[#1a1a1a]/30" : isDark ? "bg-white/20" : "bg-black/20"}`} />
              <span className={`text-[14px] sm:text-[15px] font-[var(--font-body)] ${image ? "text-white/70" : subColor}`}>
                {author}{role && ` — ${role}`}
              </span>
              <div className={`w-8 h-px ${image ? "bg-[#D4FD00]" : isAccent ? "bg-[#1a1a1a]/30" : isDark ? "bg-white/20" : "bg-black/20"}`} />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
