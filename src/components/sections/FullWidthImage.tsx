"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";

export interface FullWidthImageProps {
  image: string;
  imageAlt?: string;
  surtitre?: string;
  title?: string;
  description?: string;
  cta?: { text: string; href: string };
  /** Overlay darkness: 0 = no overlay, 1 = full black */
  overlayOpacity?: number;
  /** Fixed height or auto based on aspect ratio */
  height?: "sm" | "md" | "lg" | "xl";
}

export function FullWidthImage({
  image,
  imageAlt = "",
  surtitre,
  title,
  description,
  cta,
  overlayOpacity = 0.5,
  height = "md",
}: FullWidthImageProps) {
  const heightClass = {
    sm: "min-h-[300px] sm:min-h-[350px]",
    md: "min-h-[400px] sm:min-h-[500px]",
    lg: "min-h-[500px] sm:min-h-[600px] md:min-h-[700px]",
    xl: "min-h-[600px] sm:min-h-[700px] md:min-h-[80vh]",
  }[height];

  const hasContent = surtitre || title || description || cta;

  return (
    <section className={`relative overflow-hidden ${heightClass}`}>
      {/* Image */}
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />

      {/* Overlay */}
      {hasContent && (
        <div
          className="absolute inset-0"
          style={{ background: `rgba(0,0,0,${overlayOpacity})` }}
        />
      )}

      {/* Content */}
      {hasContent && (
        <div className="absolute inset-0 flex items-end z-10">
          <div className="max-w-[82.5rem] mx-auto w-full px-4 sm:px-6 md:px-12 pb-10 sm:pb-14 md:pb-20">
            {surtitre && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-2.5 mb-3 sm:mb-4"
              >
                <div className="w-2 h-2 rounded-full bg-[#D4FD00]" />
                <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-white/60 uppercase">
                  {surtitre}
                </span>
              </motion.div>
            )}

            {title && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-heading font-medium text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] tracking-[-0.02em] text-white max-w-3xl mb-4"
              >
                {title}
              </motion.h2>
            )}

            {description && (
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-white/70 text-[15px] sm:text-base font-[var(--font-body)] leading-relaxed max-w-xl mb-6"
              >
                {description}
              </motion.p>
            )}

            {cta && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <Link href={cta.href} className="btn btn-primary group">
                  {cta.text}
                  <ArrowUpRightIcon className="shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" size={16} />
                </Link>
              </motion.div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
