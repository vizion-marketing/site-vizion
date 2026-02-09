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
      className={`py-16 sm:py-20 md:py-28 lg:py-32 px-4 sm:px-6 md:px-12 relative overflow-hidden ${isDark ? "grain-overlay" : "grain-light"}`}
      style={{ background: isDark ? "#0c0c0a" : "#f8f8f6" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-[30%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[180px] pointer-events-none"
        style={{ background: `rgba(212, 253, 0, ${isDark ? "0.05" : "0.04"})` }}
      />
      <div
        className="absolute bottom-[10%] left-[-5%] w-[40%] h-[40%] rounded-full blur-[150px] pointer-events-none"
        style={{ background: `rgba(212, 253, 0, ${isDark ? "0.04" : "0.03"})` }}
      />

      <div className="max-w-[82.5rem] mx-auto relative z-10">
        {/* Header */}
        <div className="mb-12 sm:mb-16 max-w-3xl">
          {surtitre && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2.5 mb-4 sm:mb-5"
            >
              <div className="w-2 h-2 rounded-full bg-[#D4FD00]" />
              <span className={`text-[10px] sm:text-[11px] font-light tracking-[0.12em] ${isDark ? "text-white/50" : "text-[#6b6b6b]"}`}>
                {surtitre}
              </span>
            </motion.div>
          )}

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`font-heading font-medium text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] ${isDark ? "text-white" : "text-[#1a1a1a]"}`}
          >
            {title}{" "}
            {titleHighlight && (
              <span className="text-[#D4FD00]">{titleHighlight}</span>
            )}
          </motion.h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.19, 1, 0.22, 1],
              }}
              className={`
                group p-5 sm:p-6 md:p-7
                ${isDark
                  ? "bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/10"
                  : "bg-white border border-black/[0.06] hover:border-black/10"
                }
                transition-all duration-300 hover:-translate-y-1
                ${index === items.length - 1 && items.length % 3 === 2 ? "lg:col-span-1 sm:col-span-2 lg:col-start-2" : ""}
                ${index === items.length - 1 && items.length % 2 === 1 ? "sm:col-span-2 lg:col-span-1 lg:col-start-2" : ""}
              `}
            >
              {/* Icon */}
              <div className={`w-10 h-10 sm:w-12 sm:h-12 mb-4 sm:mb-5 flex items-center justify-center ${isDark ? "bg-[#D4FD00]/10 group-hover:bg-[#D4FD00]/15" : "bg-[#D4FD00]/10 group-hover:bg-[#D4FD00]/20"} transition-colors`}>
                <item.icon size={20} className="text-[#D4FD00]" />
              </div>

              {/* Title */}
              <h3 className={`font-heading font-medium text-base sm:text-lg md:text-xl ${isDark ? "text-white" : "text-[#1a1a1a]"} mb-2 sm:mb-3 leading-snug`}>
                {item.title}
              </h3>

              {/* Description */}
              <p className={`text-sm sm:text-[15px] ${isDark ? "text-white/60" : "text-[#6b6b6b]"} leading-relaxed font-[var(--font-body)]`}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
