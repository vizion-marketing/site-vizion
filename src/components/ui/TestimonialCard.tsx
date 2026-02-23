"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

export interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  rating?: number;
  variant?: "client" | "partner";
  className?: string;
}

export function TestimonialCard({
  quote,
  author,
  role,
  company,
  avatar,
  rating = 5,
  variant = "client",
  className = "",
}: TestimonialCardProps) {
  const isPartner = variant === "partner";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
      className={`
        relative p-6 sm:p-8 md:p-10
        ${
          isPartner
            ? "bg-[#0a0a0a] border border-white/10"
            : "bg-white border border-black/[0.06]"
        }
        ${className}
      `}
    >
      {/* Decorative quote mark */}
      <div
        className={`
          absolute top-4 sm:top-6 left-4 sm:left-6
          text-6xl sm:text-7xl md:text-8xl font-heading font-bold leading-none
          ${isPartner ? "text-white/5" : "text-black/5"}
        `}
      >
        &ldquo;
      </div>

      <div className="relative z-10 flex flex-col gap-6">
        {/* Rating stars */}
        {rating > 0 && (
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={16}
                className={
                  i < rating
                    ? "fill-[#D4FD00] text-[#D4FD00]"
                    : isPartner
                    ? "text-white/20"
                    : "text-black/10"
                }
              />
            ))}
          </div>
        )}

        {/* Quote */}
        <blockquote
          className={`
            text-lg sm:text-xl md:text-2xl font-[var(--font-body)] font-normal leading-relaxed
            ${isPartner ? "text-white/90" : "text-primary"}
          `}
        >
          &ldquo;{quote}&rdquo;
        </blockquote>

        {/* Author info */}
        <div className="flex items-center gap-4 pt-4 border-t border-black/5">
          {avatar && (
            <div className="w-12 h-12 sm:w-14 sm:h-14 relative overflow-hidden bg-black/5">
              <Image
                src={avatar}
                alt={author}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div>
            <div
              className={`
                font-[var(--font-body)] font-bold text-sm sm:text-base
                ${isPartner ? "text-white" : "text-primary"}
              `}
            >
              {author}
            </div>
            <div
              className={`
                font-[var(--font-body)] text-xs sm:text-sm
                ${isPartner ? "text-white/60" : "text-muted"}
              `}
            >
              {role} — {company}
            </div>
          </div>

          {/* Partner badge */}
          {isPartner && (
            <span className="ml-auto px-3 py-1 bg-white/10 border border-white/10 text-[10px] font-bold tracking-wide text-white/70">
              PARTENAIRE
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default TestimonialCard;
