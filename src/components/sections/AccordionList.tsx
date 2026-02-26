"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface AccordionItem {
  id: string;
  icon?: LucideIcon;
  label?: string;
  title: string;
  content: string;
  /** Optional bullet list inside expanded content */
  bullets?: string[];
}

export interface AccordionListProps {
  surtitre?: string;
  title?: string;
  titleHighlight?: string;
  description?: string;
  items: AccordionItem[];
  /** Allow multiple open at once */
  allowMultiple?: boolean;
  /** Indices open by default */
  defaultOpen?: number[];
  /** Show numbering (01, 02…) */
  showNumbers?: boolean;
  variant?: "light" | "dark";
}

export function AccordionList({
  surtitre,
  title,
  titleHighlight,
  description,
  items,
  allowMultiple = false,
  defaultOpen = [],
  showNumbers = true,
  variant = "light",
}: AccordionListProps) {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set(defaultOpen));
  const isDark = variant === "dark";
  const bg = isDark ? "var(--bg-dark)" : "var(--bg-card)";

  const toggle = (index: number) => {
    setOpenItems((prev) => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <section
      className={`py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12 relative overflow-hidden ${isDark ? "grain-overlay dark-section" : "grain-light"}`}
      style={{ background: bg }}
    >
      {/* Animated gradient orbs */}
      {isDark && (
        <>
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] animate-gradient-float-1 pointer-events-none" style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.12) 0%, transparent 55%)" }} />
          <div className="absolute bottom-[-15%] right-[-10%] w-[50%] h-[50%] animate-gradient-float-2 pointer-events-none" style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.08) 0%, transparent 55%)" }} />
          <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] animate-gradient-float-3 pointer-events-none" style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.06) 0%, transparent 55%)" }} />
        </>
      )}
      <div className="max-w-[52rem] mx-auto relative z-10">
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
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-40" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-br from-[var(--color-accent)] via-[var(--color-accent)]/80 to-[var(--color-accent)]/60 shadow-[0_0_8px_rgba(var(--color-accent-rgb),0.5)]" />
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] uppercase text-muted"
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
                {titleHighlight && <span className="text-accent">{titleHighlight}</span>}
              </motion.h2>
            )}
            {description && (
              <p className="text-[14px] sm:text-[15px] font-[var(--font-body)] leading-relaxed max-w-lg mx-auto text-muted">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Accordion items */}
        <div className="space-y-0">
          {items.map((item, index) => {
            const isOpen = openItems.has(index);
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`border-b ${isDark ? "border-white/10" : "border-black/10"} ${index === 0 ? `border-t` : ""}`}
              >
                <button
                  onClick={() => toggle(index)}
                  className={`w-full flex items-center gap-4 py-5 sm:py-6 text-left group transition-colors ${
                    isDark ? "hover:bg-white/[0.02]" : "hover:bg-black/[0.02]"
                  }`}
                >
                  {/* Number */}
                  {showNumbers && (
                    <span className={`text-[13px] font-[var(--font-body)] tabular-nums w-7 shrink-0 ${isDark ? "text-white/25" : "text-black/20"}`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  )}

                  {/* Icon */}
                  {Icon && (
                    <div className={`w-9 h-9 flex items-center justify-center shrink-0 ${isOpen ? "bg-accent" : isDark ? "bg-white/5" : "bg-black/5"} transition-colors`}>
                      <Icon size={18} className={isOpen ? "text-primary" : "text-accent"} />
                    </div>
                  )}

                  {/* Title + label */}
                  <div className="flex-1 min-w-0">
                    {item.label && (
                      <span className={`text-[10px] font-bold tracking-wider uppercase block mb-0.5 ${isDark ? "text-accent/60" : "text-accent"}`}>
                        {item.label}
                      </span>
                    )}
                    <span className="font-heading font-medium text-[16px] sm:text-[18px] text-primary">
                      {item.title}
                    </span>
                  </div>

                  {/* Toggle icon */}
                  <div className={`w-8 h-8 flex items-center justify-center shrink-0 transition-colors ${isOpen ? "bg-accent" : isDark ? "bg-white/5" : "bg-black/5"}`}>
                    {isOpen ? (
                      <Minus size={16} className={isOpen ? "text-primary" : "text-primary"} />
                    ) : (
                      <Plus size={16} className="text-primary" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                      className="overflow-hidden"
                    >
                      <div className={`pb-6 ${showNumbers ? "pl-11" : ""} ${Icon ? "pl-[3.25rem]" : ""} pr-12`}>
                        <p className="text-[14px] sm:text-[15px] font-[var(--font-body)] leading-relaxed text-muted">
                          {item.content}
                        </p>
                        {item.bullets && item.bullets.length > 0 && (
                          <ul className="mt-3 space-y-2">
                            {item.bullets.map((bullet, bi) => (
                              <li key={bi} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                                <span className="text-[13px] sm:text-[14px] font-[var(--font-body)] text-muted">
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
