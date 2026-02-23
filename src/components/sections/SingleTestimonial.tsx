"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

export interface SingleTestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  rating?: number;
  variant?: "dark" | "light" | "accent";
}

export function SingleTestimonial({
  quote,
  author,
  role,
  company,
  avatar,
  rating,
  variant = "dark",
}: SingleTestimonialProps) {
  const isDark = variant === "dark";
  const isAccent = variant === "accent";

  const bg = isAccent ? "#D4FD00" : isDark ? "#0c0c0a" : "#f8f8f6";
  const quoteColor = isAccent ? "text-primary" : "text-primary";
  const authorColor = isAccent ? "text-primary" : "text-primary";
  const roleColor = isAccent ? "text-primary/70" : "text-muted";
  const starColor = isAccent ? "fill-[#1a1a1a] text-primary" : "fill-[#D4FD00] text-[#D4FD00]";
  const grain = isDark ? "grain-overlay" : isAccent ? "" : "grain-light";
  const decorativeQuoteColor = isAccent ? "text-primary/10" : isDark ? "text-[#D4FD00]/15" : "text-[#D4FD00]/20";

  return (
    <section
      className={`py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12 relative overflow-hidden ${grain} ${isDark ? "dark-section" : ""}`}
      style={{ background: bg }}
    >
      {isDark && (
        <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-[#D4FD00] opacity-[0.04] rounded-full blur-[180px] pointer-events-none" />
      )}

      <div className="max-w-[52rem] mx-auto relative z-10 text-center">
        {/* Decorative quote mark */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`select-none pointer-events-none font-heading font-bold text-[80px] sm:text-[100px] md:text-[120px] leading-none ${decorativeQuoteColor} -mb-8 sm:-mb-10 md:-mb-12`}
          aria-hidden="true"
        >
          &ldquo;
        </motion.div>

        {/* Rating - staggered stars */}
        {rating && (
          <div className="flex justify-center gap-1 mb-6 sm:mb-8">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.08,
                  type: "spring",
                  stiffness: 400,
                  damping: 15,
                }}
              >
                <Star
                  size={20}
                  className={`transition-all duration-300 ${
                    i < rating
                      ? `${starColor} drop-shadow-[0_0_6px_rgba(212,253,0,0.5)]`
                      : isDark ? "text-white/20" : "text-black/15"
                  }`}
                />
              </motion.span>
            ))}
          </div>
        )}

        {/* Quote with blur reveal */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
          className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-[var(--font-body)] leading-[1.3] sm:leading-relaxed mb-8 sm:mb-10 ${quoteColor}`}
        >
          {quote}
        </motion.blockquote>

        {/* Author */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-3"
        >
          {avatar && (
            <motion.div
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className={`w-12 h-12 sm:w-14 sm:h-14 relative overflow-hidden rounded-full border-2 transition-all duration-300 ${
                isAccent
                  ? "border-[#1a1a1a]/20 hover:border-[#1a1a1a]/40"
                  : isDark
                    ? "border-white/20 hover:border-[#D4FD00]/50 hover:shadow-[0_0_16px_rgba(212,253,0,0.3)]"
                    : "border-black/10 hover:border-[#D4FD00]/40 hover:shadow-[0_0_12px_rgba(212,253,0,0.2)]"
              }`}
            >
              <Image
                src={avatar}
                alt={author}
                fill
                className="object-cover"
              />
            </motion.div>
          )}
          <div className="text-left">
            <div className={`font-[var(--font-body)] font-semibold text-sm sm:text-base ${authorColor}`}>
              {author}
            </div>
            <div className={`font-[var(--font-body)] text-xs sm:text-sm ${roleColor}`}>
              {role} — {company}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
