"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import type { Metric } from "../../../sanity/lib/types";

interface MetricsBarProps {
  metrics: Metric[];
}

function parseMetricValue(value: string): {
  prefix: string;
  number: number;
  suffix: string;
} {
  const match = value.match(/^([+]?)(\d+(?:[.,]\d+)?)(.*)$/);
  if (!match) return { prefix: "", number: 0, suffix: "" };
  return {
    prefix: match[1],
    number: parseFloat(match[2].replace(",", ".")),
    suffix: match[3],
  };
}

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function AnimatedCounter({
  value,
  started,
}: {
  value: string;
  started: boolean;
}) {
  const { prefix, number, suffix } = parseMetricValue(value);
  const [current, setCurrent] = useState(0);
  const isDecimal = value.includes(".") || value.includes(",");

  useEffect(() => {
    if (!started) return;
    const duration = 1800;
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutExpo(progress);
      setCurrent(eased * number);
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [started, number]);

  const display = isDecimal ? current.toFixed(1) : Math.round(current);

  return (
    <>
      {prefix && <span className="text-accent">{prefix}</span>}
      {display}
      {suffix && <span className="text-accent">{suffix}</span>}
    </>
  );
}

export function MetricsBar({ metrics }: MetricsBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [startedIndices, setStartedIndices] = useState<Set<number>>(new Set());

  const triggerStagger = useCallback(() => {
    metrics.forEach((_, i) => {
      setTimeout(() => {
        setStartedIndices((prev) => new Set(prev).add(i));
      }, i * 150);
    });
  }, [metrics]);

  useEffect(() => {
    if (isInView) triggerStagger();
  }, [isInView, triggerStagger]);

  const cols =
    metrics.length <= 2
      ? "grid-cols-2"
      : metrics.length === 3
        ? "grid-cols-2 md:grid-cols-3"
        : "grid-cols-2 md:grid-cols-4";

  return (
    <section className="bg-card py-10 sm:py-12 px-4 sm:px-6 md:px-12">
      <div ref={ref} className={`max-w-[82.5rem] mx-auto grid ${cols} gap-8`}>
        {metrics.map((metric, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className={`text-center ${
              i < metrics.length - 1
                ? "border-r border-black/[0.06] max-md:border-r-0 max-md:[&:nth-child(even)]:border-r-0 md:border-r"
                : ""
            } ${i < metrics.length - 2 ? "max-md:border-b max-md:border-black/[0.06] max-md:pb-8" : ""}`}
          >
            <div className="w-8 h-0.5 bg-accent mb-4 mx-auto" />
            <div className="text-3xl sm:text-4xl md:text-5xl font-semibold text-primary tabular-nums">
              <AnimatedCounter
                value={metric.value}
                started={startedIndices.has(i)}
              />
            </div>
            <p className="text-sm text-secondary mt-2">{metric.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
