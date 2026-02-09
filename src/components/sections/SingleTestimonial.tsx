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
  const quoteColor = isAccent ? "text-[#1a1a1a]" : isDark ? "text-white" : "text-[#1a1a1a]";
  const authorColor = isAccent ? "text-[#1a1a1a]" : isDark ? "text-white" : "text-[#1a1a1a]";
  const roleColor = isAccent ? "text-[#1a1a1a]/60" : isDark ? "text-white/50" : "text-[#6b6b6b]";
  const starColor = isAccent ? "fill-[#1a1a1a] text-[#1a1a1a]" : "fill-[#D4FD00] text-[#D4FD00]";
  const grain = isDark ? "grain-overlay" : isAccent ? "" : "grain-light";

  return (
    <section
      className={`py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12 relative overflow-hidden ${grain}`}
      style={{ background: bg }}
    >
      {isDark && (
        <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-[#D4FD00] opacity-[0.04] rounded-full blur-[180px] pointer-events-none" />
      )}

      <div className="max-w-[52rem] mx-auto relative z-10 text-center">
        {/* Rating */}
        {rating && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center gap-1 mb-6 sm:mb-8"
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={20}
                className={i < rating ? starColor : (isDark ? "text-white/20" : "text-black/15")}
              />
            ))}
          </motion.div>
        )}

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-[var(--font-body)] leading-[1.3] sm:leading-relaxed mb-8 sm:mb-10 ${quoteColor}`}
        >
          &ldquo;{quote}&rdquo;
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
            <div className={`w-12 h-12 sm:w-14 sm:h-14 relative overflow-hidden rounded-full border-2 ${isAccent ? "border-[#1a1a1a]/20" : isDark ? "border-white/20" : "border-black/10"}`}>
              <Image
                src={avatar}
                alt={author}
                fill
                className="object-cover"
              />
            </div>
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
