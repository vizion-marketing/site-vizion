"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export interface MetricCardProps {
  value: string;
  label: string;
  size?: "sm" | "md" | "lg" | "xxl";
  animate?: boolean;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function MetricCard({
  value,
  label,
  size = "md",
  animate = true,
  prefix = "",
  suffix = "",
  className = "",
}: MetricCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(animate ? "0" : value);

  // Extract numeric part for animation
  const numericValue = parseFloat(value.replace(/[^0-9.-]/g, ""));
  const isNumeric = !isNaN(numericValue);

  useEffect(() => {
    if (!animate || !isInView || !isNumeric) {
      setDisplayValue(value);
      return;
    }

    const duration = 1500;
    const steps = 60;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.round(numericValue * easeOutQuart);

      // Preserve original format (e.g., +1000% → +500% → +1000%)
      let formattedValue = value.replace(
        /[\d.]+/,
        currentValue.toString()
      );

      setDisplayValue(formattedValue);

      if (currentStep >= steps) {
        clearInterval(interval);
        setDisplayValue(value);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [animate, isInView, isNumeric, numericValue, value]);

  const sizeClasses = {
    sm: {
      value: "text-xl sm:text-2xl",
      label: "text-[9px] sm:text-[10px]",
      padding: "p-3 sm:p-4",
    },
    md: {
      value: "text-2xl sm:text-3xl md:text-4xl",
      label: "text-[10px] sm:text-[11px]",
      padding: "p-4 sm:p-5",
    },
    lg: {
      value: "text-3xl sm:text-4xl md:text-5xl",
      label: "text-[11px] sm:text-xs",
      padding: "p-5 sm:p-6",
    },
    xxl: {
      value: "text-5xl sm:text-6xl md:text-7xl lg:text-8xl",
      label: "text-xs sm:text-sm",
      padding: "p-6 sm:p-8",
    },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
      className={`
        bg-card border border-black/[0.06]
        ${sizeClasses[size].padding}
        flex flex-col gap-1 sm:gap-2
        ${className}
      `}
    >
      <span
        className={`
          font-[var(--font-body)] font-[900] tracking-[-0.03em] text-primary leading-none
          ${sizeClasses[size].value}
        `}
      >
        {prefix}
        {displayValue}
        {suffix}
      </span>
      <span
        className={`
          font-[var(--font-body)] font-semibold tracking-wider text-[#999] leading-tight uppercase
          ${sizeClasses[size].label}
        `}
      >
        {label}
      </span>
    </motion.div>
  );
}

export default MetricCard;
