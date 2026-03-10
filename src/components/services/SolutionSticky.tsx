"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import type { SolutionItem } from "@/content/services";

interface SolutionStickyProps {
  title: string;
  image: string;
  items: SolutionItem[];
}

export function SolutionSticky({ title, image, items }: SolutionStickyProps) {
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
  }, [items.length]);

  return (
    <section
      className="dark-section grain-overlay py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12"
      style={{ background: "var(--bg-dark)" }}
    >
      <div className="max-w-[82.5rem] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16">
        {/* Left — Image sticky avec titre overlay */}
        <div className="lg:sticky lg:top-[100px] lg:self-start">
          <div className="relative overflow-hidden aspect-[4/5] sm:aspect-[3/4] lg:aspect-auto lg:h-[70vh]">
            <Image
              src={image}
              alt="L'équipe Vizion"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Title overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
              <h2 className="font-heading font-medium text-[22px] sm:text-[28px] md:text-[34px] lg:text-[40px] leading-[1.1] tracking-[-0.02em] text-white">
                {title}
              </h2>
            </div>
          </div>
        </div>

        {/* Right — Items qui défilent */}
        <div className="flex flex-col gap-5 lg:gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className={`border p-7 sm:p-8 transition-all duration-300 ${
                activeIndex === i
                  ? "bg-white/[0.08] border-accent/30"
                  : "bg-white/[0.03] border-white/10"
              }`}
            >
              <div className="flex items-start gap-5">
                {/* Numéro */}
                <span
                  className={`text-[40px] sm:text-[48px] font-extralight leading-none transition-colors duration-300 ${
                    activeIndex === i ? "text-accent" : "text-white/15"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="pt-2">
                  <h3 className="text-[17px] sm:text-[19px] font-semibold text-white leading-snug mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[14px] sm:text-[15px] text-white/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
