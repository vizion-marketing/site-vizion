"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";

export interface StickyRevealItem {
  id: string;
  icon?: LucideIcon;
  label?: string;
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
}

export interface StickyScrollRevealProps {
  surtitre?: string;
  title?: string;
  titleHighlight?: string;
  items: StickyRevealItem[];
  variant?: "light" | "dark";
}

export function StickyScrollReveal({
  surtitre,
  title,
  titleHighlight,
  items,
  variant = "light",
}: StickyScrollRevealProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={`relative overflow-hidden ${isDark ? "grain-overlay dark-section" : ""}`}
      style={{ background: isDark ? "#0c0c0a" : "#ffffff" }}
    >
      {isDark && (
        <>
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] animate-gradient-float-1 pointer-events-none" style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.12) 0%, transparent 55%)" }} />
          <div className="absolute bottom-[-15%] right-[-10%] w-[50%] h-[50%] animate-gradient-float-2 pointer-events-none" style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.08) 0%, transparent 55%)" }} />
          <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] animate-gradient-float-3 pointer-events-none" style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.06) 0%, transparent 55%)" }} />
        </>
      )}
      {/* Header */}
      {(surtitre || title) && (
        <div className="py-16 sm:py-20 px-4 sm:px-6 md:px-12">
          <div className="max-w-[82.5rem] mx-auto">
            {surtitre && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-2.5 mb-4 sm:mb-5"
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
            {title && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={`font-heading font-medium text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] max-w-3xl text-primary`}
              >
                {title}{" "}
                {titleHighlight && <span className="text-[#D4FD00]">{titleHighlight}</span>}
              </motion.h2>
            )}
          </div>
        </div>
      )}

      {/* Sticky scroll area */}
      <div className="px-4 sm:px-6 md:px-12 pb-16 sm:pb-20 md:pb-28">
        <div className="max-w-[82.5rem] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left: sticky image */}
            <div className="hidden lg:block relative">
              <div className="sticky top-32 h-[70vh]">
                {items.map((item, index) => (
                  <StickyImage
                    key={item.id}
                    item={item}
                    index={index}
                    total={items.length}
                    isDark={isDark}
                  />
                ))}
              </div>
            </div>

            {/* Right: scrolling content */}
            <div className="space-y-16 sm:space-y-24 lg:space-y-[40vh]">
              {items.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className={`${index === 0 ? "" : ""} ${index === items.length - 1 ? "lg:pb-[30vh]" : ""}`}
                  >
                    {/* Mobile image */}
                    <div className="lg:hidden relative aspect-video mb-6 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.imageAlt || item.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>

                    <div className="flex items-start gap-4">
                      {/* Number */}
                      <span className={`font-[var(--font-body)] font-[900] text-[40px] sm:text-[56px] leading-none tracking-[-0.03em] shrink-0 ${isDark ? "text-white/[0.06]" : "text-black/[0.06]"}`}>
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="flex-1 pt-2">
                        {Icon && (
                          <div className="w-10 h-10 flex items-center justify-center bg-[#D4FD00] mb-4">
                            <Icon size={20} className="text-primary" />
                          </div>
                        )}
                        {item.label && (
                          <span className={`text-[10px] font-bold tracking-wider uppercase block mb-2 ${isDark ? "text-[#D4FD00]/60" : "text-[#D4FD00]"}`}>
                            {item.label}
                          </span>
                        )}
                        <h3 className={`font-heading font-medium text-[22px] sm:text-[28px] leading-[1.1] tracking-[-0.01em] mb-3 text-primary`}>
                          {item.title}
                        </h3>
                        <p className={`text-[14px] sm:text-[15px] font-[var(--font-body)] leading-relaxed text-muted`}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Individual sticky image with scroll-based opacity */
function StickyImage({
  item,
  index,
  total,
  isDark,
}: {
  item: StickyRevealItem;
  index: number;
  total: number;
  isDark: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Each image fades in and out based on scroll position
  const segmentSize = 1 / total;
  const start = index * segmentSize;
  const end = (index + 1) * segmentSize;

  const opacity = useTransform(
    scrollYProgress,
    [start, start + segmentSize * 0.2, end - segmentSize * 0.2, end],
    [0, 1, 1, index === total - 1 ? 1 : 0]
  );

  return (
    <motion.div
      ref={ref}
      className="absolute inset-0 overflow-hidden"
      style={{ opacity, zIndex: index }}
    >
      <Image
        src={item.image}
        alt={item.imageAlt || item.title}
        fill
        className="object-cover"
        sizes="50vw"
      />
      {/* Subtle accent border */}
      <div className="absolute inset-0 border border-[#D4FD00]/10" />
    </motion.div>
  );
}
