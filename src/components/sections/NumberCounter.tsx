"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export interface CounterItem {
  value: number;
  /** Prefix (e.g. "+", "$", "€") */
  prefix?: string;
  /** Suffix (e.g. "%", "k", "M", "+") */
  suffix?: string;
  label: string;
  description?: string;
}

export interface NumberCounterProps {
  surtitre?: string;
  title?: string;
  titleHighlight?: string;
  description?: string;
  counters: CounterItem[];
  /** Animation duration in ms */
  duration?: number;
  /** Number of columns: 2, 3, or 4 */
  columns?: 2 | 3 | 4;
  variant?: "light" | "dark" | "accent";
}

function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
  duration = 2000,
  isInView,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration: number;
  isInView: boolean;
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();
    const isDecimal = value % 1 !== 0;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * value;

      setDisplayValue(isDecimal ? Math.round(current * 10) / 10 : Math.round(current));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  const formatted = displayValue % 1 !== 0
    ? displayValue.toFixed(1)
    : displayValue.toLocaleString("fr-FR");

  return (
    <span className="tabular-nums">
      {prefix}{formatted}{suffix}
    </span>
  );
}

export function NumberCounter({
  surtitre,
  title,
  titleHighlight,
  description,
  counters,
  duration = 2000,
  columns = 4,
  variant = "dark",
}: NumberCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isDark = variant === "dark";
  const isAccent = variant === "accent";

  const bg = isAccent ? "#D4FD00" : isDark ? "#0c0c0a" : "#ffffff";
  const colsClass = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-4",
  }[columns];

  return (
    <section
      className={`py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12 relative overflow-hidden ${isDark ? "grain-overlay" : ""}`}
      style={{ background: bg }}
    >
      {isDark && (
        <>
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] animate-gradient-float-1 pointer-events-none" style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.12) 0%, transparent 55%)" }} />
          <div className="absolute bottom-[-15%] right-[-10%] w-[50%] h-[50%] animate-gradient-float-2 pointer-events-none" style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.08) 0%, transparent 55%)" }} />
          <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] animate-gradient-float-3 pointer-events-none" style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.06) 0%, transparent 55%)" }} />
        </>
      )}
      <div ref={ref} className="max-w-[82.5rem] mx-auto relative z-10">
        {/* Header */}
        {(surtitre || title) && (
          <div className="text-center mb-12 sm:mb-16">
            {surtitre && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center justify-center gap-2.5 mb-4 sm:mb-5"
              >
                <div className={`w-2 h-2 rounded-full ${isAccent ? "bg-[#1a1a1a]" : "bg-[#D4FD00]"}`} />
                <span className={`text-[10px] sm:text-[11px] font-light tracking-[0.12em] uppercase ${
                  isAccent ? "text-[#1a1a1a]/60" : isDark ? "text-white/50" : "text-[#6b6b6b]"
                }`}>
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
                className={`font-heading font-medium text-[28px] sm:text-[36px] md:text-[44px] leading-[1.05] tracking-[-0.02em] mb-3 ${
                  isAccent ? "text-[#1a1a1a]" : isDark ? "!text-white" : "text-[#1a1a1a]"
                }`}
              >
                {title}{" "}
                {titleHighlight && (
                  <span className={isAccent ? "text-white" : "text-[#D4FD00]"}>
                    {titleHighlight}
                  </span>
                )}
              </motion.h2>
            )}
            {description && (
              <p className={`text-[14px] sm:text-[15px] font-[var(--font-body)] leading-relaxed max-w-xl mx-auto ${
                isAccent ? "text-[#1a1a1a]/60" : isDark ? "!text-white/60" : "text-[#6b6b6b]"
              }`}>
                {description}
              </p>
            )}
          </div>
        )}

        {/* Counter grid */}
        <div className={`grid ${colsClass} gap-6 sm:gap-8`}>
          {counters.map((counter, index) => (
            <motion.div
              key={counter.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`text-center p-6 sm:p-8 border ${
                isAccent
                  ? "border-[#1a1a1a]/10"
                  : isDark
                    ? "border-white/10 bg-white/[0.02]"
                    : "border-black/[0.06] bg-[#f8f8f6]"
              }`}
            >
              <div className={`font-[var(--font-body)] font-[900] text-[36px] sm:text-[48px] md:text-[56px] leading-none tracking-[-0.03em] mb-2 ${
                isAccent ? "text-[#1a1a1a]" : isDark ? "!text-white" : "text-[#1a1a1a]"
              }`}>
                <AnimatedNumber
                  value={counter.value}
                  prefix={counter.prefix}
                  suffix={counter.suffix}
                  duration={duration}
                  isInView={isInView}
                />
              </div>
              <p className={`font-heading font-medium text-[14px] sm:text-[15px] mb-1 ${
                isAccent ? "text-[#1a1a1a]" : isDark ? "!text-white" : "text-[#1a1a1a]"
              }`}>
                {counter.label}
              </p>
              {counter.description && (
                <p className={`text-[12px] sm:text-[13px] font-[var(--font-body)] ${
                  isAccent ? "text-[#1a1a1a]/50" : isDark ? "!text-white/40" : "text-[#6b6b6b]"
                }`}>
                  {counter.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
