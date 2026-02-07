"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

export interface BentoGridProps {
  children: ReactNode;
  columns?: 2 | 3 | 4;
  gap?: "sm" | "md" | "lg";
  className?: string;
}

export interface BentoCardProps {
  span?: "normal" | "wide" | "tall" | "featured";
  children: ReactNode;
  className?: string;
  index?: number;
  hover?: boolean;
}

const gapClasses = {
  sm: "gap-2 sm:gap-3",
  md: "gap-3 sm:gap-4 md:gap-5",
  lg: "gap-4 sm:gap-6 md:gap-8",
};

const columnClasses = {
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
};

export function BentoGrid({
  children,
  columns = 3,
  gap = "md",
  className = "",
}: BentoGridProps) {
  return (
    <div
      className={`
        grid auto-rows-[minmax(180px,auto)]
        ${columnClasses[columns]}
        ${gapClasses[gap]}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

const spanClasses = {
  normal: "",
  wide: "sm:col-span-2",
  tall: "sm:row-span-2",
  featured: "sm:col-span-2 sm:row-span-2",
};

export function BentoCard({
  span = "normal",
  children,
  className = "",
  index = 0,
  hover = true,
}: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.19, 1, 0.22, 1],
      }}
      className={`
        ${spanClasses[span]}
        ${className}
        ${
          hover
            ? "group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
            : ""
        }
      `}
    >
      {children}
    </motion.div>
  );
}

// Preset card styles
export function BentoCardLight({
  span,
  children,
  className = "",
  index = 0,
}: BentoCardProps) {
  return (
    <BentoCard span={span} index={index} className={className}>
      <div className="h-full bg-white border border-black/[0.06] p-5 sm:p-6 md:p-8 overflow-hidden relative">
        {children}
      </div>
    </BentoCard>
  );
}

export function BentoCardGrey({
  span,
  children,
  className = "",
  index = 0,
}: BentoCardProps) {
  return (
    <BentoCard span={span} index={index} className={className}>
      <div className="h-full bg-[#fafaf8] border border-black/[0.06] p-5 sm:p-6 md:p-8 overflow-hidden relative">
        {children}
      </div>
    </BentoCard>
  );
}

export function BentoCardDark({
  span,
  children,
  className = "",
  index = 0,
}: BentoCardProps) {
  return (
    <BentoCard span={span} index={index} className={className}>
      <div
        className="h-full p-5 sm:p-6 md:p-8 overflow-hidden relative border border-white/10"
        style={{
          background:
            "linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 50%, #1a1a1a 100%)",
        }}
      >
        {/* Carbon fibre texture */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('/carbon-fibre.png')]" />
        <div className="relative z-10">{children}</div>
      </div>
    </BentoCard>
  );
}

export function BentoCardAccent({
  span,
  children,
  className = "",
  index = 0,
}: BentoCardProps) {
  return (
    <BentoCard span={span} index={index} className={className}>
      <div
        className="h-full p-5 sm:p-6 md:p-8 overflow-hidden relative"
        style={{
          background:
            "linear-gradient(135deg, #D4FD00 0%, #c8ff00 50%, #b8ef00 100%)",
        }}
      >
        {children}
      </div>
    </BentoCard>
  );
}

export default BentoGrid;
