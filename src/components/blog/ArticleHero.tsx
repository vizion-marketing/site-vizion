"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, Clock, User, Tag } from "lucide-react";

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
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 lg:pt-56 lg:pb-48 bg-gradient-to-br from-[#B7B7B7] via-black to-[#6D6D6D] overflow-hidden">
        {/* Carbon texture overlay */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
        
        {/* Decorative Light Rays */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.08),transparent_50%)] pointer-events-none" />

        <div className="max-w-[82.5rem] mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-black/20 backdrop-blur-md border border-white/10 rounded-[var(--radius-xl)] p-8 lg:p-16 relative overflow-hidden group"
          >
            {/* Internal Accent Border */}
            <div className="absolute inset-0 border border-white/5 m-1 rounded-[calc(var(--radius-xl)-4px)] pointer-events-none" />

            {/* Category Badge */}
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-8"
            >
              <div className="w-8 h-[1px] bg-white/40" />
              <span className="text-[12px] font-bold uppercase tracking-[3px] text-white/80">
                {category}
              </span>
            </motion.div>

            {/* H1 Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-10 text-[36px] md:text-[56px] lg:text-[72px] font-black leading-[0.95] uppercase tracking-[-3px] text-white font-['Roboto'] max-w-4xl"
            >
              {title}
            </motion.h1>

            {/* Metadata Grid */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center gap-x-10 gap-y-6 text-white/60 text-sm font-['Inter'] border-t border-white/10 pt-10"
            >
              <div className="flex items-center gap-3 transition-colors hover:text-white">
                <div className="p-2 rounded-lg bg-white/5 border border-white/5"><Calendar size={18} className="text-white/40" /></div>
                <span className="font-medium tracking-wide uppercase text-[11px]">{date}</span>
              </div>
              <div className="flex items-center gap-3 transition-colors hover:text-white">
                <div className="p-2 rounded-lg bg-white/5 border border-white/5"><User size={18} className="text-white/40" /></div>
                <span className="font-medium tracking-wide uppercase text-[11px]">{author}</span>
              </div>
              <div className="flex items-center gap-3 transition-colors hover:text-white">
                <div className="p-2 rounded-lg bg-white/5 border border-white/5"><Clock size={18} className="text-white/40" /></div>
                <span className="font-medium tracking-wide uppercase text-[11px]">{readingTime}</span>
              </div>
            </motion.div>

            {/* Tags Redesigned */}
            {tags.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap items-center gap-3 mt-10"
              >
                {tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white/60 hover:text-white rounded-full transition-all cursor-default"
                  >
                    # {tag}
                  </span>
                ))}
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Cover Image Section */}
      {featuredImage && (
        <section className="relative px-6 -mt-20 lg:-mt-32 z-20">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="max-w-[82.5rem] mx-auto relative group"
          >
            {/* Decorative Ambient Light */}
            <div className="absolute -inset-8 bg-gradient-to-r from-white/0 via-white/5 to-white/0 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            {/* Multi-layered Shadow Container */}
            <div className="relative aspect-[21/9] rounded-[var(--radius-xl)] overflow-hidden border border-white/10 bg-zinc-950 shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_20px_50px_-12px_rgba(0,0,0,0.8),0_40px_100px_-20px_rgba(0,0,0,0.6)]">
              {/* Background Grid Pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none z-10" />
              
              <Image
                src={featuredImage}
                alt={title}
                fill
                className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                priority
              />
              
              {/* Premium Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none z-10" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[var(--radius-xl)] pointer-events-none z-20" />
            </div>

            {/* Signature Corner Frames (Top-Right & Bottom-Left) */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-white/60 pointer-events-none transition-transform duration-700 ease-out group-hover:translate-x-1 group-hover:-translate-y-1 z-30" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-white/60 pointer-events-none transition-transform duration-700 ease-out group-hover:-translate-x-1 group-hover:translate-y-1 z-30" />

            {/* Floating Geometric Elements */}
            <motion.div 
              animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-16 -left-12 w-32 h-32 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hidden lg:block pointer-events-none z-0 shadow-2xl"
            />
            <motion.div 
              animate={{ y: [0, 15, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-12 -right-16 w-40 h-40 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full hidden lg:block pointer-events-none z-0 shadow-2xl"
            />
          </motion.div>
        </section>
      )}
    </>
  );
}
