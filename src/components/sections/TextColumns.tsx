"use client";

import React from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export interface TextColumn {
  icon?: LucideIcon;
  title: string;
  paragraphs: string[];
}

export interface TextColumnsProps {
  surtitre?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  columns: TextColumn[];
  /** 2 or 3 columns */
  layout?: 2 | 3;
  variant?: "white" | "light" | "dark";
}

export function TextColumns({
  surtitre,
  title,
  titleHighlight,
  description,
  columns,
  layout = 3,
  variant = "white",
}: TextColumnsProps) {
  const isDark = variant === "dark";
  const bg = variant === "dark" ? "#0c0c0a" : variant === "light" ? "#f8f8f6" : "#ffffff";
  const grain = isDark ? "grain-overlay" : "grain-light";
  const gridCols = layout === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3";

  return (
    <section
      className={`py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12 relative overflow-hidden ${grain}`}
      style={{ background: bg }}
    >
      <div className="max-w-[82.5rem] mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-14 max-w-3xl"
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
            <p className={`text-[15px] sm:text-base font-[var(--font-body)] leading-relaxed ${isDark ? "text-white/60" : "text-[#6b6b6b]"}`}>
              {description}
            </p>
          )}
        </motion.div>

        {/* Columns */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 ${gridCols} gap-8 sm:gap-10 lg:gap-12`}>
          {columns.map((col, index) => {
            const Icon = col.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative"
              >
                {/* Top accent line */}
                <div className={`h-[2px] w-12 mb-5 sm:mb-6 ${isDark ? "bg-[#D4FD00]/40" : "bg-[#D4FD00]"}`} />

                {Icon && (
                  <div className={`w-10 h-10 flex items-center justify-center mb-4 ${isDark ? "bg-white/[0.06]" : "bg-[#D4FD00]/10"}`}>
                    <Icon size={20} className="text-[#D4FD00]" />
                  </div>
                )}

                <h3 className={`font-heading font-semibold text-[18px] sm:text-[20px] leading-tight mb-3 ${isDark ? "text-white" : "text-[#1a1a1a]"}`}>
                  {col.title}
                </h3>

                <div className="space-y-3">
                  {col.paragraphs.map((p, i) => (
                    <p key={i} className={`text-[13px] sm:text-[14px] font-[var(--font-body)] leading-[1.75] ${isDark ? "text-white/60" : "text-[#4a4a4a]"}`}>
                      {p}
                    </p>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
