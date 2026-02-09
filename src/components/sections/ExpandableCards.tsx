"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ExpandableCard {
  id: string;
  icon?: LucideIcon;
  number?: string;
  title: string;
  subtitle?: string;
  content: string;
  bullets?: string[];
  image?: string;
}

export interface ExpandableCardsProps {
  surtitre?: string;
  title?: string;
  titleHighlight?: string;
  description?: string;
  cards: ExpandableCard[];
  /** Number of columns: 2 or 3 */
  columns?: 2 | 3;
  variant?: "light" | "dark";
}

export function ExpandableCards({
  surtitre,
  title,
  titleHighlight,
  description,
  cards,
  columns = 2,
  variant = "light",
}: ExpandableCardsProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const isDark = variant === "dark";

  const toggle = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const colsClass = columns === 3
    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
    : "grid-cols-1 sm:grid-cols-2";

  return (
    <section
      className={`py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12 relative overflow-hidden ${isDark ? "grain-overlay" : ""}`}
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
                <div className="w-2 h-2 rounded-full bg-[#D4FD00]" />
                <span className={`text-[10px] sm:text-[11px] font-light tracking-[0.12em] uppercase ${isDark ? "text-white/50" : "text-[#6b6b6b]"}`}>
                  {surtitre}
                </span>
              </motion.div>
            )}
            {title && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={`font-heading font-medium text-[28px] sm:text-[36px] md:text-[44px] leading-[1.05] tracking-[-0.02em] mb-3 ${isDark ? "text-white" : "text-[#1a1a1a]"}`}
              >
                {title}{" "}
                {titleHighlight && <span className="text-[#D4FD00]">{titleHighlight}</span>}
              </motion.h2>
            )}
            {description && (
              <p className={`text-[14px] sm:text-[15px] font-[var(--font-body)] leading-relaxed max-w-xl mx-auto ${isDark ? "text-white/60" : "text-[#6b6b6b]"}`}>
                {description}
              </p>
            )}
          </div>
        )}

        {/* Cards grid */}
        <div className={`grid ${colsClass} gap-4 sm:gap-5`}>
          {cards.map((card, index) => {
            const isExpanded = expandedId === card.id;
            const Icon = card.icon;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`border transition-all duration-300 ${
                  isExpanded
                    ? isDark
                      ? "border-[#D4FD00]/30 bg-[#D4FD00]/[0.03]"
                      : "border-[#D4FD00]/50 bg-white"
                    : isDark
                      ? "border-white/10 bg-white/[0.02] hover:border-white/20"
                      : "border-black/[0.06] bg-white hover:border-black/15"
                }`}
              >
                {/* Card header */}
                <button
                  onClick={() => toggle(card.id)}
                  className="w-full text-left p-6 sm:p-8 flex items-start gap-4"
                >
                  {/* Number or Icon */}
                  {(card.number || Icon) && (
                    <div className="shrink-0">
                      {card.number ? (
                        <span className={`font-[var(--font-body)] font-[900] text-[32px] sm:text-[40px] leading-none tracking-[-0.03em] ${isExpanded ? "text-[#D4FD00]" : isDark ? "text-white/10" : "text-black/10"} transition-colors`}>
                          {card.number}
                        </span>
                      ) : Icon ? (
                        <div className={`w-10 h-10 flex items-center justify-center transition-colors ${isExpanded ? "bg-[#D4FD00]" : isDark ? "bg-white/5" : "bg-black/5"}`}>
                          <Icon size={20} className={isExpanded ? "text-[#1a1a1a]" : "text-[#D4FD00]"} />
                        </div>
                      ) : null}
                    </div>
                  )}

                  <div className="flex-1 min-w-0">
                    {card.subtitle && (
                      <span className={`text-[10px] font-bold tracking-wider uppercase block mb-1 ${isDark ? "text-[#D4FD00]/60" : "text-[#D4FD00]"}`}>
                        {card.subtitle}
                      </span>
                    )}
                    <h3 className={`font-heading font-medium text-[16px] sm:text-[18px] ${isDark ? "text-white" : "text-[#1a1a1a]"}`}>
                      {card.title}
                    </h3>
                  </div>

                  {/* Toggle */}
                  <div className={`w-8 h-8 flex items-center justify-center shrink-0 transition-colors ${isExpanded ? "bg-[#D4FD00]" : isDark ? "bg-white/5" : "bg-black/5"}`}>
                    {isExpanded ? (
                      <X size={14} className="text-[#1a1a1a]" />
                    ) : (
                      <Plus size={14} className={isDark ? "text-white" : "text-[#1a1a1a]"} />
                    )}
                  </div>
                </button>

                {/* Expanded content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0">
                        <div className={`h-px mb-5 ${isDark ? "bg-white/10" : "bg-black/10"}`} />
                        <p className={`text-[14px] sm:text-[15px] font-[var(--font-body)] leading-relaxed ${isDark ? "text-white/60" : "text-[#6b6b6b]"}`}>
                          {card.content}
                        </p>
                        {card.bullets && card.bullets.length > 0 && (
                          <ul className="mt-4 space-y-2">
                            {card.bullets.map((bullet, bi) => (
                              <li key={bi} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#D4FD00] mt-1.5 shrink-0" />
                                <span className={`text-[13px] sm:text-[14px] font-[var(--font-body)] ${isDark ? "text-white/50" : "text-[#6b6b6b]"}`}>
                                  {bullet}
                                </span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
