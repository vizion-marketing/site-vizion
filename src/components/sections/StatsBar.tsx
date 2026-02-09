"use client";

import React from "react";
import { motion } from "framer-motion";

export interface StatItem {
  value: string;
  label: string;
}

export interface StatsBarProps {
  stats: StatItem[];
  variant?: "dark" | "light" | "accent";
}

export function StatsBar({ stats, variant = "dark" }: StatsBarProps) {
  const isAccent = variant === "accent";
  const isDark = variant === "dark";

  const bg = isAccent ? "#D4FD00" : isDark ? "#0c0c0a" : "#f8f8f6";
  const valueColor = isAccent ? "text-[#1a1a1a]" : isDark ? "text-white" : "text-[#1a1a1a]";
  const labelColor = isAccent ? "text-[#1a1a1a]/70" : isDark ? "text-white/50" : "text-[#6b6b6b]";
  const dividerColor = isAccent ? "bg-[#1a1a1a]/15" : isDark ? "bg-white/10" : "bg-black/10";
  const grain = isDark ? "grain-overlay" : isAccent ? "" : "grain-light";

  return (
    <section
      className={`py-10 sm:py-12 md:py-14 px-4 sm:px-6 md:px-12 relative overflow-hidden ${grain}`}
      style={{ background: bg }}
    >
      <div className="max-w-[82.5rem] mx-auto relative z-10">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-0">
          {stats.map((stat, index) => (
            <React.Fragment key={stat.label}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-center text-center px-4 sm:px-8 md:px-12"
              >
                <span className={`font-heading font-bold text-[32px] sm:text-[40px] md:text-[48px] leading-none tracking-[-0.02em] ${valueColor}`}>
                  {stat.value}
                </span>
                <span className={`text-[11px] sm:text-xs font-[var(--font-body)] mt-1.5 ${labelColor}`}>
                  {stat.label}
                </span>
              </motion.div>
              {index < stats.length - 1 && (
                <div className={`hidden md:block w-px h-12 ${dividerColor}`} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
