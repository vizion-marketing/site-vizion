"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";

export interface TabbedFeature {
  id: string;
  label: string;
  icon?: LucideIcon;
  title: string;
  description: string;
  bullets?: string[];
  image?: string;
}

export interface TabbedFeaturesProps {
  surtitre?: string;
  title: string;
  titleHighlight?: string;
  features: TabbedFeature[];
  variant?: "white" | "light";
}

export function TabbedFeatures({
  surtitre,
  title,
  titleHighlight,
  features,
  variant = "white",
}: TabbedFeaturesProps) {
  const [activeId, setActiveId] = useState(features[0]?.id ?? "");
  const active = features.find((f) => f.id === activeId) || features[0];
  const bg = variant === "light" ? "var(--bg-card)" : "#ffffff";

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12 relative overflow-hidden grain-light" style={{ background: bg }}>
      <div className="max-w-[82.5rem] mx-auto relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-10 sm:mb-14">
          {surtitre && (
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center gap-2.5 mb-3 sm:mb-5">
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
                className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-muted uppercase"
              >
                {surtitre}
              </motion.span>
            </motion.div>
          )}
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-heading font-medium text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] text-primary">
            {title}{" "}
            {titleHighlight && <span className="text-accent">{titleHighlight}</span>}
          </motion.h2>
        </div>

        {/* Tab buttons */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-10">
          {features.map((feature) => {
            const Icon = feature.icon;
            const isActive = feature.id === activeId;
            return (
              <button
                key={feature.id}
                onClick={() => setActiveId(feature.id)}
                className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 text-[12px] sm:text-[13px] font-semibold font-[var(--font-body)] transition-all duration-300 ${
                  isActive
                    ? "bg-[var(--text-primary)] text-white"
                    : "bg-white border border-black/10 text-muted hover:border-black/20 hover:text-primary"
                }`}
              >
                {Icon && <Icon size={16} className={isActive ? "text-accent" : ""} />}
                {feature.label}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          >
            {/* Text */}
            <div>
              <h3 className="font-heading font-medium text-[24px] sm:text-[30px] md:text-[36px] leading-[1.1] tracking-[-0.02em] text-primary mb-4">
                {active.title}
              </h3>
              <p className="text-muted text-[15px] sm:text-base font-[var(--font-body)] leading-relaxed mb-6">
                {active.description}
              </p>
              {active.bullets && (
                <ul className="space-y-3">
                  {active.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      <span className="text-[14px] text-primary font-[var(--font-body)] leading-snug">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Image */}
            {active.image && (
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={active.image} alt={active.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                <div className="absolute -top-3 -right-3 w-full h-full border-2 border-accent/20 -z-10 hidden lg:block" />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
