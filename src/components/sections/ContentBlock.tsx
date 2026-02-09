"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export interface ContentBlockProps {
  surtitre?: string;
  title: string;
  titleHighlight?: string;
  /** Rich paragraphs — each string is one <p> */
  paragraphs: string[];
  /** Optional bullet list */
  bullets?: string[];
  /** Optional image inserted after paragraphs */
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
  /** Optional secondary block of paragraphs after image */
  afterImageParagraphs?: string[];
  variant?: "white" | "light" | "dark";
  /** Max-width for text readability: "narrow" (680px), "medium" (820px), "wide" (1000px) */
  textWidth?: "narrow" | "medium" | "wide";
}

const pContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.06 } } };
const pItem = { hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } };

export function ContentBlock({
  surtitre,
  title,
  titleHighlight,
  paragraphs,
  bullets,
  image,
  imageAlt = "",
  imageCaption,
  afterImageParagraphs,
  variant = "white",
  textWidth = "medium",
}: ContentBlockProps) {
  const isDark = variant === "dark";
  const bg = variant === "dark" ? "#0c0c0a" : variant === "light" ? "#f8f8f6" : "#ffffff";
  const grain = isDark ? "grain-overlay" : "grain-light";
  const maxW = { narrow: "max-w-[680px]", medium: "max-w-[820px]", wide: "max-w-[1000px]" }[textWidth];

  return (
    <section
      className={`py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12 relative overflow-hidden ${grain}`}
      style={{ background: bg }}
    >
      <div className={`${maxW} mx-auto relative z-10`}>
        {/* Surtitre */}
        {surtitre && (
          <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 500, damping: 20, delay: 0.05 }}
              className="w-2 h-2 rounded-full bg-[#D4FD00]"
            />
            <motion.span
              initial={{ opacity: 0, x: -6 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className={`text-[10px] sm:text-[11px] font-light tracking-[0.12em] uppercase ${isDark ? "text-white/50" : "text-[#6b6b6b]"}`}
            >
              {surtitre}
            </motion.span>
          </div>
        )}

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`font-heading font-medium text-[28px] sm:text-[36px] md:text-[44px] leading-[1.1] tracking-[-0.02em] mb-6 sm:mb-8 ${isDark ? "text-white" : "text-[#1a1a1a]"}`}
        >
          {title}{" "}
          {titleHighlight && <span className="text-[#D4FD00]">{titleHighlight}</span>}
        </motion.h2>

        {/* Paragraphs */}
        <motion.div
          variants={pContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4 sm:space-y-5"
        >
          {paragraphs.map((p, i) => (
            <motion.p
              key={i}
              variants={pItem}
              className={`text-[15px] sm:text-[16px] md:text-[17px] font-[var(--font-body)] leading-[1.8] ${isDark ? "text-white/70" : "text-[#4a4a4a]"}`}
            >
              {p}
            </motion.p>
          ))}
        </motion.div>

        {/* Bullets */}
        {bullets && bullets.length > 0 && (
          <motion.ul
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 sm:mt-8 space-y-3"
          >
            {bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4FD00] mt-2 shrink-0" />
                <span className={`text-[14px] sm:text-[15px] font-[var(--font-body)] leading-relaxed ${isDark ? "text-white/65" : "text-[#4a4a4a]"}`}>
                  {bullet}
                </span>
              </li>
            ))}
          </motion.ul>
        )}

        {/* Image */}
        {image && (
          <motion.figure
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8 sm:mt-10"
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1000px) 100vw, 1000px"
              />
            </div>
            {imageCaption && (
              <figcaption className={`mt-3 text-[12px] sm:text-[13px] font-[var(--font-body)] ${isDark ? "text-white/40" : "text-[#999]"}`}>
                {imageCaption}
              </figcaption>
            )}
          </motion.figure>
        )}

        {/* After-image paragraphs */}
        {afterImageParagraphs && afterImageParagraphs.length > 0 && (
          <motion.div
            variants={pContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-8 sm:mt-10 space-y-4 sm:space-y-5"
          >
            {afterImageParagraphs.map((p, i) => (
              <motion.p
                key={i}
                variants={pItem}
                className={`text-[15px] sm:text-[16px] md:text-[17px] font-[var(--font-body)] leading-[1.8] ${isDark ? "text-white/70" : "text-[#4a4a4a]"}`}
              >
                {p}
              </motion.p>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
