"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";

export interface HoverRevealItem {
  id: string;
  icon?: LucideIcon;
  title: string;
  description: string;
  /** Image revealed on hover */
  image?: string;
  imageAlt?: string;
  /** Accent color override for the item */
  accentColor?: string;
}

export interface HoverRevealGridProps {
  surtitre?: string;
  title?: string;
  titleHighlight?: string;
  description?: string;
  items: HoverRevealItem[];
  /** Number of columns: 2, 3, or 4 */
  columns?: 2 | 3 | 4;
  variant?: "light" | "dark";
}

export function HoverRevealGrid({
  surtitre,
  title,
  titleHighlight,
  description,
  items,
  columns = 3,
  variant = "dark",
}: HoverRevealGridProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const isDark = variant === "dark";

  const colsClass = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <section
      className={`py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12 relative overflow-hidden ${isDark ? "grain-overlay dark-section" : ""}`}
      style={{ background: isDark ? "#0c0c0a" : "#f8f8f6" }}
    >
      {isDark && (
        <>
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] animate-gradient-float-1 pointer-events-none" style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.12) 0%, transparent 55%)" }} />
          <div className="absolute bottom-[-15%] right-[-10%] w-[50%] h-[50%] animate-gradient-float-2 pointer-events-none" style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.08) 0%, transparent 55%)" }} />
          <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] animate-gradient-float-3 pointer-events-none" style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.06) 0%, transparent 55%)" }} />
        </>
      )}
      <div className="max-w-[82.5rem] mx-auto relative z-10">
        {/* Header */}
        {(surtitre || title) && (
          <div className="text-center mb-10 sm:mb-14">
            {surtitre && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center justify-center gap-2.5 mb-4 sm:mb-5"
              >
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 500, damping: 20, delay: 0.05 }}
                  className="relative flex h-2 w-2"
                >
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4FD00] opacity-40" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-br from-[#D4FD00] via-[#D4FD00]/80 to-[#D4FD00]/60 shadow-[0_0_8px_rgba(212,253,0,0.5)]" />
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
              </motion.div>
            )}
            {title && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-heading font-medium text-[28px] sm:text-[36px] md:text-[44px] leading-[1.05] tracking-[-0.02em] mb-3 text-primary"
              >
                {title}{" "}
                {titleHighlight && <span className="text-[#D4FD00]">{titleHighlight}</span>}
              </motion.h2>
            )}
            {description && (
              <p className={`text-[14px] sm:text-[15px] font-[var(--font-body)] leading-relaxed max-w-xl mx-auto text-muted`}>
                {description}
              </p>
            )}
          </div>
        )}

        {/* Grid */}
        <div className={`grid ${colsClass} gap-4 sm:gap-5`}>
          {items.map((item, index) => {
            const isHovered = hoveredId === item.id;
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`relative border overflow-hidden group cursor-pointer transition-all duration-500 ${
                  isDark
                    ? "border-white/10 bg-white/[0.02] hover:border-[#D4FD00]/30"
                    : "border-black/[0.06] bg-white hover:border-[#D4FD00]/50"
                }`}
                style={{ minHeight: "280px" }}
              >
                {/* Background image (revealed on hover) */}
                {item.image && (
                  <div className="absolute inset-0">
                    <Image
                      src={item.image}
                      alt={item.imageAlt || item.title}
                      fill
                      className={`object-cover transition-all duration-700 ${
                        isHovered ? "opacity-30 scale-105" : "opacity-0 scale-100"
                      }`}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col">
                  {/* Top: Icon or number */}
                  <div className="mb-auto">
                    {Icon ? (
                      <div className={`w-12 h-12 flex items-center justify-center mb-5 transition-colors duration-300 ${
                        isHovered ? "bg-[#D4FD00]" : isDark ? "bg-white/5" : "bg-black/5"
                      }`}>
                        <Icon size={22} className={`transition-colors duration-300 ${isHovered ? "text-primary" : "text-[#D4FD00]"}`} />
                      </div>
                    ) : (
                      <span className={`font-[var(--font-body)] font-[900] text-[48px] leading-none tracking-[-0.03em] block mb-4 transition-colors duration-300 ${
                        isHovered
                          ? "text-[#D4FD00]"
                          : isDark ? "text-white/[0.06]" : "text-black/[0.06]"
                      }`}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    )}
                  </div>

                  {/* Bottom: Title & description */}
                  <div>
                    <h3 className="font-heading font-medium text-[18px] sm:text-[20px] mb-2 transition-colors duration-300 text-primary">
                      {item.title}
                    </h3>
                    <p className={`text-[13px] sm:text-[14px] font-[var(--font-body)] leading-relaxed transition-colors duration-300 text-muted`}>
                      {item.description}
                    </p>

                    {/* Reveal line */}
                    <motion.div
                      className="h-[2px] bg-[#D4FD00] mt-4 origin-left"
                      initial={false}
                      animate={{ scaleX: isHovered ? 1 : 0 }}
                      transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
