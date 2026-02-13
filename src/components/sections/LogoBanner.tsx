"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export interface LogoBannerItem {
  name: string;
  src: string;
}

export interface LogoBannerProps {
  surtitre?: string;
  title?: string;
  logos: LogoBannerItem[];
  variant?: "light" | "dark";
}

export function LogoBanner({
  surtitre,
  title,
  logos,
  variant = "light",
}: LogoBannerProps) {
  const isDark = variant === "dark";
  const bg = isDark ? "#0c0c0a" : "#f8f8f6";

  return (
    <section
      className={`py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 relative overflow-hidden ${isDark ? "grain-overlay" : "grain-light"}`}
      style={{ background: bg }}
    >
      <div className="max-w-[82.5rem] mx-auto relative z-10">
        {/* Header */}
        {(surtitre || title) && (
          <div className="text-center mb-10 sm:mb-12">
            {surtitre && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center justify-center gap-2.5 mb-3 sm:mb-4"
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
                  className={`text-[10px] sm:text-[11px] font-light tracking-[0.12em] uppercase ${isDark ? "text-white/70" : "text-[#6b6b6b]"}`}
                >
                  {surtitre}
                </motion.span>
              </motion.div>
            )}
            {title && (
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={`font-heading font-medium text-[22px] sm:text-[28px] md:text-[36px] leading-[1.1] tracking-[-0.02em] ${isDark ? "text-white" : "text-[#1a1a1a]"}`}
              >
                {title}
              </motion.h2>
            )}
          </div>
        )}

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 items-center">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex items-center justify-center py-4"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={140}
                height={48}
                className={`object-contain max-h-10 sm:max-h-12 ${isDark ? "brightness-0 invert opacity-40 hover:opacity-70" : "grayscale opacity-50 hover:grayscale-0 hover:opacity-100"} transition-all duration-300`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
