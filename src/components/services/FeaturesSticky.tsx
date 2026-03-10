"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Feature } from "../../../sanity/lib/types";

interface FeaturesStickyProps {
  title?: string;
  subtitle?: string;
  features: Feature[];
}

export function FeaturesSticky({
  title,
  subtitle,
  features,
}: FeaturesStickyProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    cardRefs.current.forEach((ref, i) => {
      if (!ref) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveIndex(i);
        },
        { threshold: 0.6 },
      );
      observer.observe(ref);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [features.length]);

  return (
    <section className="bg-card py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12">
      <div className="max-w-[82.5rem] mx-auto grid grid-cols-1 lg:grid-cols-[38%_1fr] gap-12 lg:gap-16">
        {/* Left column — sticky */}
        <div className="lg:sticky lg:top-[120px] lg:self-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-muted uppercase">
                Notre approche
              </span>
            </div>
            {title && (
              <h2 className="font-heading font-normal text-[28px] sm:text-[36px] md:text-[44px] leading-[1.05] tracking-[-0.02em] text-primary">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-base text-secondary leading-relaxed mt-4">
                {subtitle}
              </p>
            )}
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-sm font-medium text-primary mt-8 hover:text-accent transition-colors"
            >
              Voir tous nos services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Right column — cards */}
        <div className="flex flex-col gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className={`bg-white border p-8 transition-colors duration-300 ${
                activeIndex === i
                  ? "border-accent/30"
                  : "border-black/[0.06]"
              }`}
            >
              <span className="text-5xl max-lg:text-3xl font-extralight text-accent/20">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="w-16 h-px bg-accent/40 mb-4 mt-2" />
              <h3 className="text-xl font-medium text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-secondary leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
