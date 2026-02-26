"use client";

import React from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export interface IconGridItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface IconGridProps {
  surtitre?: string;
  title: string;
  titleHighlight?: string;
  items: IconGridItem[];
  variant?: "dark" | "light";
}

export function IconGrid({
  surtitre,
  title,
  titleHighlight,
  items,
  variant = "dark",
}: IconGridProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={`py-16 sm:py-20 md:py-28 lg:py-32 px-4 sm:px-6 md:px-12 relative overflow-hidden ${isDark ? "grain-overlay dark-section" : "grain-light"}`}
      style={{ background: isDark ? "var(--bg-dark)" : "var(--bg-card)" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-[30%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[180px] pointer-events-none"
        style={{ background: `rgba(var(--color-accent-rgb), ${isDark ? "0.05" : "0.04"})` }}
      />
      <div
        className="absolute bottom-[10%] left-[-5%] w-[40%] h-[40%] rounded-full blur-[150px] pointer-events-none"
        style={{ background: `rgba(var(--color-accent-rgb), ${isDark ? "0.04" : "0.03"})` }}
      />

      <div className="max-w-[82.5rem] mx-auto relative z-10">
        {/* Header */}
        <div className="mb-12 sm:mb-16 max-w-3xl">
          {surtitre && (
            <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 500, damping: 20, delay: 0.05 }}
                className="relative flex h-2 w-2"
              >
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-40" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-br from-[var(--color-accent)] via-[var(--color-accent)]/80 to-[var(--color-accent)]/60 shadow-[0_0_8px_rgba(var(--color-accent-rgb),0.5)]" />
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className={`text-[10px] sm:text-[11px] font-light tracking-[0.12em] uppercase text-muted`}
              >
                {surtitre}
              </motion.span>
            </div>
          )}

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`font-heading font-medium text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] text-primary`}
          >
            {title}{" "}
            {titleHighlight && (
              <span className="text-accent">{titleHighlight}</span>
            )}
          </motion.h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.06,
                ease: [0.19, 1, 0.22, 1],
              }}
              className={`
                group p-5 sm:p-6 md:p-7 relative
                ${isDark
                  ? "bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] hover:bg-white/[0.08] hover:border-accent/30"
                  : "bg-white border border-black/[0.06] hover:border-accent/40 hover:shadow-[0_8px_24px_rgba(var(--color-accent-rgb),0.15)]"
                }
                transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] hover:-translate-y-2 hover:shadow-[0_12px_32px_rgba(var(--color-accent-rgb),0.12)]
                ${index === items.length - 1 && items.length % 3 === 2 ? "lg:col-span-1 sm:col-span-2 lg:col-start-2" : ""}
                ${index === items.length - 1 && items.length % 2 === 1 ? "sm:col-span-2 lg:col-span-1 lg:col-start-2" : ""}
              `}
            >
              {/* Accent line top */}
              <div className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full bg-accent transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />

              {/* Icon with spring hover */}
              <motion.div
                whileHover={{ rotate: 6, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className={`w-10 h-10 sm:w-12 sm:h-12 mb-4 sm:mb-5 flex items-center justify-center transition-colors duration-500 ${isDark ? "bg-accent/10 group-hover:bg-accent/20 group-hover:shadow-[0_0_16px_rgba(var(--color-accent-rgb),0.3)]" : "bg-accent/10 group-hover:bg-accent/25 group-hover:shadow-[0_0_16px_rgba(var(--color-accent-rgb),0.25)]"}`}
              >
                <item.icon size={20} className="text-accent transition-transform duration-500 group-hover:scale-110" />
              </motion.div>

              {/* Title */}
              <h3 className="font-heading font-medium text-base sm:text-lg md:text-xl text-primary mb-2 sm:mb-3 leading-snug">
                {item.title}
              </h3>

              {/* Description */}
              <p className={`text-sm sm:text-[15px] text-muted leading-relaxed font-[var(--font-body)]`}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
