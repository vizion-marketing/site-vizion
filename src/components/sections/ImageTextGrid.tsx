"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export interface ImageTextItem {
  id: string;
  title: string;
  paragraphs: string[];
  image: string;
  imageAlt?: string;
  bullets?: string[];
}

export interface ImageTextGridProps {
  surtitre?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  items: ImageTextItem[];
  variant?: "white" | "light" | "dark";
}

function GridItem({ item, index, isDark }: { item: ImageTextItem; index: number; isDark: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center ${!isEven ? "lg:grid-flow-dense" : ""}`}
    >
      {/* Text */}
      <div className={!isEven ? "lg:col-start-2" : ""}>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className={`text-[12px] font-bold tracking-wider px-2.5 py-1 ${isDark ? "bg-[#D4FD00] text-[#0c0c0a]" : "bg-[#0c0c0a] text-[#D4FD00]"}`}>
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <h3 className={`font-heading font-semibold text-[22px] sm:text-[26px] md:text-[30px] leading-[1.15] tracking-[-0.01em] mb-4 ${isDark ? "text-white" : "text-[#1a1a1a]"}`}>
            {item.title}
          </h3>

          <div className="space-y-3 sm:space-y-4">
            {item.paragraphs.map((p, i) => (
              <p key={i} className={`text-[14px] sm:text-[15px] font-[var(--font-body)] leading-[1.75] ${isDark ? "text-white/65" : "text-[#4a4a4a]"}`}>
                {p}
              </p>
            ))}
          </div>

          {item.bullets && item.bullets.length > 0 && (
            <ul className="mt-5 space-y-2.5">
              {item.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4FD00] mt-[7px] shrink-0" />
                  <span className={`text-[13px] sm:text-[14px] font-[var(--font-body)] leading-relaxed ${isDark ? "text-white/60" : "text-[#4a4a4a]"}`}>
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      </div>

      {/* Image */}
      <div className={`relative ${!isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}>
        <div className="relative aspect-[4/3] overflow-hidden group/img">
          <motion.div style={{ y: imageY }} className="absolute inset-0">
            <Image
              src={item.image}
              alt={item.imageAlt || item.title}
              fill
              className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover/img:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
          <div className={`absolute -top-3 ${isEven ? "-right-3" : "-left-3"} w-full h-full border-2 border-[#D4FD00]/20 -z-10 hidden lg:block`} />
        </div>
      </div>
    </motion.div>
  );
}

export function ImageTextGrid({
  surtitre,
  title,
  titleHighlight,
  description,
  items,
  variant = "white",
}: ImageTextGridProps) {
  const isDark = variant === "dark";
  const bg = variant === "dark" ? "#0c0c0a" : variant === "light" ? "#f8f8f6" : "#ffffff";
  const grain = isDark ? "grain-overlay" : "grain-light";

  return (
    <section
      className={`py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12 relative overflow-hidden ${grain}`}
      style={{ background: bg }}
    >
      <div className="max-w-[82.5rem] mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 text-center max-w-3xl mx-auto"
        >
          {surtitre && (
            <div className="flex items-center justify-center gap-2.5 mb-4 sm:mb-5">
              <div className="w-2 h-2 rounded-full bg-[#D4FD00]" />
              <span className={`text-[10px] sm:text-[11px] font-light tracking-[0.12em] uppercase ${isDark ? "text-white/50" : "text-[#6b6b6b]"}`}>
                {surtitre}
              </span>
            </div>
          )}
          <h2 className={`font-heading font-medium text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] mb-4 ${isDark ? "text-white" : "text-[#1a1a1a]"}`}>
            {title}{" "}
            {titleHighlight && <span className="text-[#D4FD00]">{titleHighlight}</span>}
          </h2>
          {description && (
            <p className={`text-[15px] sm:text-base font-[var(--font-body)] leading-relaxed ${isDark ? "text-white/60" : "text-[#6b6b6b]"}`}>
              {description}
            </p>
          )}
        </motion.div>

        {/* Items */}
        <div className="space-y-16 sm:space-y-20 lg:space-y-24">
          {items.map((item, index) => (
            <GridItem key={item.id} item={item} index={index} isDark={isDark} />
          ))}
        </div>
      </div>
    </section>
  );
}
