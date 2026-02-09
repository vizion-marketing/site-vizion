"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export interface StatItem {
  value: string;
  label: string;
}

export interface StatsBarProps {
  stats: StatItem[];
  variant?: "dark" | "light" | "accent";
}

/** Parse a stat value string like "+70", "98%", "4 ans", "x3" into parts */
function parseStatValue(value: string): { prefix: string; number: number; suffix: string; isDecimal: boolean } | null {
  const match = value.match(/^([^\d]*?)([\d]+(?:[.,]\d+)?)(.*)$/);
  if (!match) return null;
  const num = parseFloat(match[2].replace(",", "."));
  if (isNaN(num)) return null;
  return {
    prefix: match[1],
    number: num,
    suffix: match[3],
    isDecimal: match[2].includes(".") || match[2].includes(","),
  };
}

function AnimatedStatValue({
  value,
  isInView,
  className,
}: {
  value: string;
  isInView: boolean;
  className: string;
}) {
  const parsed = parseStatValue(value);
  const [displayValue, setDisplayValue] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!parsed || !isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const target = parsed.number;
    const duration = 1800;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;

      setDisplayValue(parsed.isDecimal ? Math.round(current * 10) / 10 : Math.round(current));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, parsed]);

  if (!parsed) {
    return <span className={className}>{value}</span>;
  }

  const formatted = parsed.isDecimal
    ? displayValue.toFixed(1)
    : displayValue.toLocaleString("fr-FR");

  return (
    <span className={`${className} tabular-nums`}>
      {parsed.prefix}{formatted}{parsed.suffix}
    </span>
  );
}

export function StatsBar({ stats, variant = "dark" }: StatsBarProps) {
  const isAccent = variant === "accent";
  const isDark = variant === "dark";
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const bg = isAccent ? "#D4FD00" : isDark ? "#0c0c0a" : "#f8f8f6";
  const valueColor = isAccent ? "text-[#1a1a1a]" : isDark ? "text-white" : "text-[#1a1a1a]";
  const labelColor = isAccent ? "text-[#1a1a1a]/70" : isDark ? "text-white/50" : "text-[#6b6b6b]";
  const dividerColor = isAccent ? "bg-[#1a1a1a]/15" : isDark ? "bg-white/10" : "bg-black/10";
  const grain = isDark ? "grain-overlay" : isAccent ? "" : "grain-light";

  return (
    <section
      className={`py-10 sm:py-12 md:py-14 px-4 sm:px-6 md:px-12 relative overflow-hidden ${grain}`}
      style={{ background: bg }}
    >
      <div ref={ref} className="max-w-[82.5rem] mx-auto relative z-10">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-0">
          {stats.map((stat, index) => (
            <React.Fragment key={stat.label}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: index * 0.12,
                }}
                whileHover={{ y: -3, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                className="flex flex-col items-center text-center px-4 sm:px-8 md:px-12 cursor-default"
              >
                <AnimatedStatValue
                  value={stat.value}
                  isInView={isInView}
                  className={`font-heading font-bold text-[32px] sm:text-[40px] md:text-[48px] leading-none tracking-[-0.02em] ${valueColor}`}
                />
                <span className={`text-[11px] sm:text-xs font-[var(--font-body)] mt-1.5 ${labelColor}`}>
                  {stat.label}
                </span>
              </motion.div>
              {index < stats.length - 1 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (index + 0.5) * 0.12 }}
                  style={{ transformOrigin: "center" }}
                  className={`hidden md:block w-px h-12 ${dividerColor}`}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
