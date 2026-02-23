"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";

export interface ComparisonRow {
  feature: string;
  /** true = check, false = cross, string = custom text, "partial" = dash */
  left: boolean | string;
  right: boolean | string;
}

export interface ComparisonTableProps {
  surtitre?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  leftLabel: string;
  rightLabel: string;
  rows: ComparisonRow[];
  /** Highlight column: "left" or "right" */
  highlightColumn?: "left" | "right";
  variant?: "light" | "dark";
}

function CellValue({ value, highlighted, isDark }: { value: boolean | string; highlighted?: boolean; isDark?: boolean }) {
  if (value === true) {
    return (
      <div className={`w-7 h-7 flex items-center justify-center ${highlighted ? "bg-[#D4FD00]" : "bg-[#D4FD00]/20"}`}>
        <Check size={16} className={highlighted ? "text-primary" : "text-[#D4FD00]"} />
      </div>
    );
  }
  if (value === false) {
    return (
      <div className={`w-7 h-7 flex items-center justify-center ${isDark ? "bg-white/5" : "bg-black/5"}`}>
        <X size={14} className={isDark ? "text-white/25" : "text-black/25"} />
      </div>
    );
  }
  if (value === "partial") {
    return (
      <div className={`w-7 h-7 flex items-center justify-center ${isDark ? "bg-white/5" : "bg-black/5"}`}>
        <Minus size={14} className={isDark ? "text-white/30" : "text-black/30"} />
      </div>
    );
  }
  return (
    <span className={`text-[13px] font-[var(--font-body)] font-medium text-primary`}>
      {value}
    </span>
  );
}

export function ComparisonTable({
  surtitre,
  title,
  titleHighlight,
  description,
  leftLabel,
  rightLabel,
  rows,
  highlightColumn = "right",
  variant = "light",
}: ComparisonTableProps) {
  const isDark = variant === "dark";
  const bg = isDark ? "#0c0c0a" : "#ffffff";

  return (
    <section
      className={`py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12 relative overflow-hidden ${isDark ? "grain-overlay dark-section" : ""}`}
      style={{ background: bg }}
    >
      {isDark && (
        <>
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] animate-gradient-float-1 pointer-events-none" style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.12) 0%, transparent 55%)" }} />
          <div className="absolute bottom-[-15%] right-[-10%] w-[50%] h-[50%] animate-gradient-float-2 pointer-events-none" style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.08) 0%, transparent 55%)" }} />
          <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] animate-gradient-float-3 pointer-events-none" style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.06) 0%, transparent 55%)" }} />
        </>
      )}
      <div className="max-w-[52rem] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          {surtitre && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-2.5 mb-3 sm:mb-5"
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

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`font-heading font-medium text-[28px] sm:text-[36px] md:text-[44px] leading-[1.05] tracking-[-0.02em] mb-3 text-primary`}
          >
            {title}{" "}
            {titleHighlight && <span className="text-[#D4FD00]">{titleHighlight}</span>}
          </motion.h2>

          {description && (
            <p className={`text-[14px] sm:text-[15px] font-[var(--font-body)] leading-relaxed max-w-lg mx-auto text-muted`}>
              {description}
            </p>
          )}
        </div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`border ${isDark ? "border-white/10" : "border-black/10"} overflow-hidden`}
        >
          {/* Header row */}
          <div className={`grid grid-cols-[1fr_120px_120px] sm:grid-cols-[1fr_160px_160px] ${isDark ? "bg-white/5" : "bg-[#f8f8f6]"}`}>
            <div className="p-4 sm:p-5" />
            <div className={`p-4 sm:p-5 text-center border-l ${isDark ? "border-white/10" : "border-black/10"} ${highlightColumn === "left" ? "bg-[#D4FD00] text-primary" : ""}`}>
              <span className={`font-heading font-semibold text-[13px] sm:text-[14px] ${highlightColumn !== "left" ? "text-primary" : ""}`}>
                {leftLabel}
              </span>
            </div>
            <div className={`p-4 sm:p-5 text-center border-l ${isDark ? "border-white/10" : "border-black/10"} ${highlightColumn === "right" ? "bg-[#D4FD00] text-primary" : ""}`}>
              <span className={`font-heading font-semibold text-[13px] sm:text-[14px] ${highlightColumn !== "right" ? "text-primary" : ""}`}>
                {rightLabel}
              </span>
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, index) => (
            <div
              key={row.feature}
              className={`grid grid-cols-[1fr_120px_120px] sm:grid-cols-[1fr_160px_160px] border-t ${isDark ? "border-white/5" : "border-black/[0.06]"}`}
            >
              <div className={`p-4 sm:p-5 flex items-center text-primary`}>
                <span className="text-[13px] sm:text-[14px] font-[var(--font-body)]">
                  {row.feature}
                </span>
              </div>
              <div className={`p-4 sm:p-5 flex items-center justify-center border-l ${isDark ? "border-white/5" : "border-black/[0.06]"} ${highlightColumn === "left" ? (isDark ? "bg-[#D4FD00]/5" : "bg-[#D4FD00]/5") : ""}`}>
                <CellValue value={row.left} highlighted={highlightColumn === "left"} isDark={isDark} />
              </div>
              <div className={`p-4 sm:p-5 flex items-center justify-center border-l ${isDark ? "border-white/5" : "border-black/[0.06]"} ${highlightColumn === "right" ? (isDark ? "bg-[#D4FD00]/5" : "bg-[#D4FD00]/5") : ""}`}>
                <CellValue value={row.right} highlighted={highlightColumn === "right"} isDark={isDark} />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
