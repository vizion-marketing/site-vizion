"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";

export interface BentoContentCard {
  id: string;
  /** Card type determines rendering */
  type: "text" | "image" | "stat" | "quote";
  /** Grid span: normal=1col, wide=2col, tall=2row, featured=2col+2row */
  span?: "normal" | "wide" | "tall" | "featured";
  /** For text cards */
  title?: string;
  description?: string;
  icon?: LucideIcon;
  /** For image cards */
  image?: string;
  imageAlt?: string;
  /** For stat cards */
  value?: string;
  label?: string;
  /** For quote cards */
  quote?: string;
  author?: string;
  role?: string;
}

export interface ContentBentoGridProps {
  surtitre?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  cards: BentoContentCard[];
  variant?: "light" | "dark";
}

export function ContentBentoGrid({
  surtitre,
  title,
  titleHighlight,
  description,
  cards,
  variant = "light",
}: ContentBentoGridProps) {
  const isDark = variant === "dark";
  const bg = isDark ? "#0c0c0a" : "#f8f8f6";
  const grain = isDark ? "grain-overlay" : "grain-light";

  return (
    <section
      className={`py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12 relative overflow-hidden ${grain}`}
      style={{ background: bg }}
    >
      {/* Ambient glow */}
      <div className={`absolute top-[10%] right-[-5%] w-[500px] h-[500px] bg-[#D4FD00] ${isDark ? "opacity-[0.05]" : "opacity-[0.04]"} rounded-full blur-[200px] pointer-events-none`} />

      <div className="max-w-[82.5rem] mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-14"
        >
          {surtitre && (
            <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
              <div className="w-2 h-2 rounded-full bg-[#D4FD00]" />
              <span className={`text-[10px] sm:text-[11px] font-light tracking-[0.12em] uppercase ${isDark ? "text-white/50" : "text-[#6b6b6b]"}`}>
                {surtitre}
              </span>
            </div>
          )}
          <h2 className={`font-heading font-medium text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] mb-4 ${isDark ? "text-white" : "text-[#1a1a1a]"}`}>
            {title}{" "}
            {titleHighlight && <span className="text-[#D4FD00]">{titleHighlight}</span>}
          </h2>
          {description && (
            <p className={`text-[15px] sm:text-base font-[var(--font-body)] leading-relaxed max-w-2xl ${isDark ? "text-white/60" : "text-[#6b6b6b]"}`}>
              {description}
            </p>
          )}
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 auto-rows-[minmax(180px,auto)]">
          {cards.map((card, index) => {
            const isWide = card.span === "wide" || card.span === "featured";
            const isTall = card.span === "tall" || card.span === "featured";

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className={`
                  group relative overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]
                  ${isWide ? "sm:col-span-2" : ""}
                  ${isTall ? "sm:row-span-2" : ""}
                  ${card.type === "image" ? "" : isDark
                    ? "bg-white/[0.04] border border-white/[0.08] hover:border-[#D4FD00]/30"
                    : "bg-white border border-black/[0.06] hover:border-[#D4FD00]/40 hover:shadow-md"
                  }
                `}
              >
                {/* Accent line */}
                {card.type !== "image" && (
                  <div className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full bg-[#D4FD00] transition-all duration-500 z-10" />
                )}

                {/* Image card */}
                {card.type === "image" && card.image && (
                  <div className="relative h-full min-h-[200px]">
                    <Image
                      src={card.image}
                      alt={card.imageAlt || ""}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {card.title && (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                        <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 right-4 sm:right-5 z-10">
                          <h3 className="font-heading font-semibold text-[16px] sm:text-[18px] text-white leading-snug">
                            {card.title}
                          </h3>
                          {card.description && (
                            <p className="text-white/70 text-[13px] font-[var(--font-body)] mt-1 line-clamp-2">
                              {card.description}
                            </p>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                )}

                {/* Text card */}
                {card.type === "text" && (
                  <div className="p-5 sm:p-6 md:p-7 h-full flex flex-col">
                    {card.icon && (
                      <div className={`w-10 h-10 flex items-center justify-center mb-4 ${isDark ? "bg-[#D4FD00]/10" : "bg-[#D4FD00]/10"}`}>
                        <card.icon size={20} className="text-[#D4FD00]" />
                      </div>
                    )}
                    {card.title && (
                      <h3 className={`font-heading font-semibold text-[18px] sm:text-[20px] leading-tight mb-2 ${isDark ? "text-white" : "text-[#1a1a1a]"}`}>
                        {card.title}
                      </h3>
                    )}
                    {card.description && (
                      <p className={`text-[13px] sm:text-[14px] font-[var(--font-body)] leading-relaxed ${isDark ? "text-white/60" : "text-[#6b6b6b]"}`}>
                        {card.description}
                      </p>
                    )}
                  </div>
                )}

                {/* Stat card */}
                {card.type === "stat" && (
                  <div className="p-5 sm:p-6 md:p-7 h-full flex flex-col justify-center items-center text-center">
                    <span className={`font-heading font-bold text-[36px] sm:text-[44px] md:text-[52px] leading-none mb-2 ${isDark ? "text-[#D4FD00]" : "text-[#1a1a1a]"}`}>
                      {card.value}
                    </span>
                    <span className={`text-[13px] sm:text-[14px] font-[var(--font-body)] ${isDark ? "text-white/50" : "text-[#6b6b6b]"}`}>
                      {card.label}
                    </span>
                  </div>
                )}

                {/* Quote card */}
                {card.type === "quote" && (
                  <div className={`p-5 sm:p-6 md:p-7 h-full flex flex-col justify-between ${isDark ? "bg-[#D4FD00]/[0.06]" : "bg-[#D4FD00]/[0.04]"}`}>
                    <p className={`text-[15px] sm:text-[16px] font-[var(--font-body)] leading-relaxed italic ${isDark ? "text-white/80" : "text-[#1a1a1a]"}`}>
                      &ldquo;{card.quote}&rdquo;
                    </p>
                    {card.author && (
                      <div className="mt-4 pt-3 border-t border-black/[0.06]">
                        <span className={`text-[13px] font-heading font-semibold ${isDark ? "text-white" : "text-[#1a1a1a]"}`}>
                          {card.author}
                        </span>
                        {card.role && (
                          <span className={`text-[12px] font-[var(--font-body)] ml-2 ${isDark ? "text-white/40" : "text-[#6b6b6b]"}`}>
                            {card.role}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
