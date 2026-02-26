"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";

export interface ShowcaseTab {
  id: string;
  number?: string;
  label: string;
  icon?: LucideIcon;
  title: string;
  description: string;
  example?: string;
  metric?: string;
  metricLabel?: string;
  image?: string;
}

export interface TabbedShowcaseProps {
  surtitre?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  tabs: ShowcaseTab[];
  footnote?: string;
  variant?: "dark" | "light";
}

export function TabbedShowcase({
  surtitre,
  title,
  titleHighlight,
  description,
  tabs,
  footnote,
  variant = "dark",
}: TabbedShowcaseProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id ?? "");
  const activeCase = tabs.find((t) => t.id === activeTab) || tabs[0];
  const isDark = variant === "dark";
  const bg = isDark ? "var(--bg-dark)" : "var(--bg-card)";

  return (
    <section
      className={`py-16 sm:py-20 md:py-28 lg:py-32 px-4 sm:px-6 md:px-12 relative overflow-hidden ${isDark ? "grain-overlay dark-section" : "grain-light"}`}
      style={{ background: bg }}
    >
      {/* Ambient glow */}
      <div className="absolute top-[20%] left-[-5%] w-[50%] h-[50%] rounded-full blur-[180px] pointer-events-none" style={{ background: "rgba(var(--color-accent-rgb), 0.05)" }} />
      <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] rounded-full blur-[150px] pointer-events-none" style={{ background: "rgba(var(--color-accent-rgb), 0.04)" }} />

      <div className="max-w-[82.5rem] mx-auto relative z-10">
        {/* Header */}
        <div className="mb-10 sm:mb-14 max-w-3xl">
          {surtitre && (
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center gap-2.5 mb-4 sm:mb-5">
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
            </motion.div>
          )}
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="font-heading font-medium text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] mb-4 sm:mb-5 text-primary">
            {title}{" "}
            {titleHighlight && <span className="text-accent">{titleHighlight}</span>}
          </motion.h2>
          {description && (
            <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className={`text-base sm:text-lg font-[var(--font-body)] leading-relaxed text-muted`}>
              {description}
            </motion.p>
          )}
        </div>

        {/* Tabs */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="mb-8 sm:mb-10">
          <div className={`relative border-b ${isDark ? "border-white/10" : "border-black/10"} overflow-x-auto scrollbar-hide`}>
            <div className="flex min-w-max">
              {tabs.map((tab, i) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-4 font-[var(--font-body)] font-semibold text-xs sm:text-sm tracking-[-0.01em] transition-colors duration-200 whitespace-nowrap ${
                    activeTab === tab.id
                      ? "text-primary"
                      : "text-muted hover:text-primary"
                  }`}
                >
                  <span className={`font-bold text-[10px] sm:text-[11px] ${activeTab === tab.id ? "text-accent" : "text-muted/40"}`}>
                    {tab.number || String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{tab.label}</span>
                  {activeTab === tab.id && (
                    <motion.div layoutId="tabbedShowcaseIndicator" className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent" transition={{ type: "spring", stiffness: 500, damping: 35 }} />
                  )}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div key={activeTab} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }} className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Main content */}
            <div className={`lg:col-span-2 p-6 sm:p-8 md:p-10 ${isDark ? "bg-white/[0.03] border border-white/[0.06]" : "bg-white border border-black/[0.06]"}`}>
              {activeCase.icon && (
                <div className="w-12 h-12 sm:w-14 sm:h-14 mb-5 sm:mb-6 flex items-center justify-center bg-accent/10">
                  <activeCase.icon size={24} className="text-accent" />
                </div>
              )}
              <h3 className="font-heading font-medium text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4 leading-snug text-primary">
                {activeCase.title}
              </h3>
              <p className={`text-sm sm:text-base font-[var(--font-body)] leading-relaxed mb-6 sm:mb-8 text-muted`}>
                {activeCase.description}
              </p>
              {activeCase.example && (
                <div className={`p-4 sm:p-5 ${isDark ? "bg-white/[0.03] border border-white/[0.06]" : "bg-card border border-black/[0.06]"}`}>
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-accent uppercase mb-2 block">Exemple concret</span>
                  <p className="text-sm font-[var(--font-body)] leading-relaxed text-primary">{activeCase.example}</p>
                </div>
              )}
            </div>

            {/* Right column */}
            <div className="flex flex-col gap-4">
              {activeCase.image && (
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <Image src={activeCase.image} alt={activeCase.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              )}
              {activeCase.metric && (
                <div className="bg-accent p-6 sm:p-8 flex flex-col justify-center items-center text-center">
                  <span className="font-[var(--font-body)] font-[900] text-4xl sm:text-5xl md:text-6xl tracking-[-0.03em] text-primary leading-none mb-3">
                    {activeCase.metric}
                  </span>
                  {activeCase.metricLabel && (
                    <span className="text-sm font-[var(--font-body)] font-medium text-primary/70">{activeCase.metricLabel}</span>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Footnote */}
        {footnote && (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} className={`mt-10 sm:mt-14 p-5 sm:p-6 border ${isDark ? "border-white/10 bg-white/[0.02]" : "border-black/10 bg-white"}`}>
            <p className={`text-sm sm:text-base font-[var(--font-body)] leading-relaxed text-center max-w-3xl mx-auto text-muted`}>{footnote}</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
