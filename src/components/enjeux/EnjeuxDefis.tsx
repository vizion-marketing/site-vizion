"use client";

import React, { ComponentType } from "react";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";

interface DefiItem {
  icon: string;
  title: string;
  description: string;
}

interface EnjeuxDefisProps {
  surtitre: string;
  title: string;
  subtitle: string;
  defis: DefiItem[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
};

// Spans bento : large / small / small / large
const SPAN_PATTERN = [2, 1, 1, 2];
// Cartes sombres : index 0 et 3 — cartes claires : index 1 et 2
const DARK_CARDS = new Set([0, 3]);

export function EnjeuxDefis({ surtitre, title, subtitle, defis }: EnjeuxDefisProps) {
  const getIcon = (iconName: string) => {
    const Icon = (
      LucideIcons as unknown as Record<
        string,
        ComponentType<{ size?: number; className?: string; strokeWidth?: number }>
      >
    )[iconName] ?? LucideIcons.AlertCircle;
    return <Icon size={18} />;
  };

  return (
    <section
      className="dark-section grain-overlay py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12"
      style={{ background: "var(--bg-dark)" }}
    >
      <div className="max-w-[82.5rem] mx-auto">
        {/* Header */}
        <div className="mb-12 sm:mb-14 lg:mb-16">
          <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-40" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-white/60 uppercase">
              {surtitre}
            </span>
          </div>
          <h2 className="font-heading font-normal text-[clamp(26px,3.5vw,44px)] leading-[1.05] tracking-[-0.035em] text-white mb-4 sm:mb-5">
            {title}
          </h2>
          <p className="text-white/60 text-[15px] leading-[1.7] max-w-xl">
            {subtitle}
          </p>
        </div>

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {defis.map((defi, index) => {
            const span = SPAN_PATTERN[index] ?? 1;
            const isDark = DARK_CARDS.has(index);
            const colSpan = span === 2 ? "lg:col-span-2" : "";

            if (isDark) {
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`${colSpan} dark-section grain-overlay p-8 sm:p-10 flex flex-col min-h-[280px] relative overflow-hidden group hover:shadow-2xl transition-shadow duration-300`}
                  style={{ background: "var(--bg-dark)" }}
                >
                  {/* Blob décoratif */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-40 group-hover:opacity-70 transition-opacity duration-700"
                    style={{
                      background:
                        "radial-gradient(ellipse 80% 80% at 30% 70%, rgba(var(--color-accent-rgb), 0.10) 0%, transparent 55%)",
                    }}
                  />
                  <div className="relative z-10">
                    <div className="w-10 h-10 bg-white/10 flex items-center justify-center mb-5 group-hover:bg-accent transition-all duration-300">
                      <div className="text-white group-hover:text-black transition-colors duration-300">
                        {getIcon(defi.icon)}
                      </div>
                    </div>
                    <h3 className="font-heading font-medium text-[22px] sm:text-[26px] leading-[1.1] tracking-[-0.02em] text-white mb-3">
                      {defi.title}
                    </h3>
                    <p className="text-[14px] text-white/60 leading-relaxed max-w-md">
                      {defi.description}
                    </p>
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`${colSpan} bg-card border border-black/[0.06] p-6 sm:p-8 flex flex-col min-h-[280px] group hover:bg-accent hover:-translate-y-1 transition-all duration-500`}
              >
                <div className="w-10 h-10 bg-accent flex items-center justify-center mb-5 group-hover:bg-black/10 transition-colors duration-300">
                  <div className="text-black">{getIcon(defi.icon)}</div>
                </div>
                <h3 className="text-[15px] sm:text-[17px] font-semibold text-primary mb-2 group-hover:text-black transition-colors duration-300">
                  {defi.title}
                </h3>
                <p className="text-[13px] text-muted leading-relaxed group-hover:text-black/70 transition-colors duration-300">
                  {defi.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
