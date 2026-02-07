"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, User } from "lucide-react";

interface ArticleHeroProps {
  title: string;
  category: string;
  date: string;
  author: string;
  readingTime: string;
  featuredImage?: string;
  tags?: string[];
}

export function ArticleHero({
  title,
  category,
  date,
  author,
  readingTime,
  featuredImage,
  tags = [],
}: ArticleHeroProps) {
  return (
    <>
      {/* Hero Section - Style Home Page */}
      <section
        className="relative pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 md:px-12 overflow-hidden grain-overlay"
        style={{ background: "#0c0c0a" }}
      >
        {/* Base + radial gradients jaune Vizion → transparent (comme home hero) */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          aria-hidden
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 20% 30%, rgba(212, 253, 0, 0.12) 0%, transparent 55%),
              radial-gradient(ellipse 70% 50% at 80% 20%, rgba(212, 253, 0, 0.08) 0%, transparent 55%),
              radial-gradient(ellipse 60% 70% at 50% 85%, rgba(212, 253, 0, 0.06) 0%, transparent 55%),
              radial-gradient(ellipse 50% 50% at 90% 70%, rgba(212, 253, 0, 0.05) 0%, transparent 55%),
              radial-gradient(ellipse 45% 45% at 8% 60%, rgba(212, 253, 0, 0.06) 0%, transparent 55%)
            `,
          }}
        />

        <div className="max-w-[82.5rem] mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="w-full flex flex-col justify-center gap-4"
          >
            {/* Surtitre - style design system */}
            <div className="flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full bg-[#D4FD00] shrink-0" />
              <span className="surtitre text-[10px] sm:text-[11px] font-light tracking-[0.12em]" style={{ color: "rgba(255,255,255,0.8)" }}>
                {category}
              </span>
            </div>

            {/* H1 - gradient text comme home */}
            <h1
              className="font-heading font-normal text-[36px] sm:text-[48px] md:text-[56px] lg:text-[72px] leading-[0.95] tracking-[-0.03em] max-w-4xl"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.92) 50%, rgba(255,255,255,0.88) 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              {title}
            </h1>

            {/* Metadata badges - style CheckCircle2 comme home */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2 text-[11px] sm:text-xs font-semibold tracking-tight" style={{ color: "rgba(255,255,255,0.8)" }}>
                <Calendar size={14} className="shrink-0" style={{ color: "#D4FD00" }} />
                {date}
              </div>
              <div className="flex items-center gap-2 text-[11px] sm:text-xs font-semibold tracking-tight" style={{ color: "rgba(255,255,255,0.8)" }}>
                <User size={14} className="shrink-0" style={{ color: "#D4FD00" }} />
                {author}
              </div>
              <div className="flex items-center gap-2 text-[11px] sm:text-xs font-semibold tracking-tight" style={{ color: "rgba(255,255,255,0.8)" }}>
                <Clock size={14} className="shrink-0" style={{ color: "#D4FD00" }} />
                {readingTime}
              </div>
            </div>

            {/* Tags */}
            {tags.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap items-center gap-2 mt-4"
              >
                {tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[9px] font-bold tracking-wider px-3 py-1 bg-white/5 border border-white/10 text-white/60 rounded-none"
                  >
                    #{tag}
                  </span>
                ))}
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Cover Image Section - style home avec cadres décoratifs */}
      {featuredImage && (
        <section className="relative px-4 sm:px-6 md:px-12 -mt-12 lg:-mt-20 z-20">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="max-w-[82.5rem] mx-auto relative group"
          >
            <div className="relative aspect-[21/9] rounded-none overflow-hidden border border-white/10 bg-zinc-950 shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_20px_50px_-12px_rgba(0,0,0,0.8)]">
              <Image
                src={featuredImage}
                alt={title}
                fill
                className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-none pointer-events-none" />
            </div>

            {/* Cadres décoratifs style home - accent D4FD00 */}
            <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-[#D4FD00]/40 pointer-events-none z-20" />
            <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b-2 border-l-2 border-white/30 pointer-events-none z-20" />
          </motion.div>
        </section>
      )}
    </>
  );
}
