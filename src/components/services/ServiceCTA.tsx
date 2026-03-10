"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ServiceCTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

export function ServiceCTA({
  title = "Prêt à transformer votre marketing ?",
  description = "Premier échange sans engagement",
  buttonText = "Discuter de votre projet",
  buttonLink = "/contact",
}: ServiceCTAProps) {
  return (
    <section
      className="dark-section grain-overlay relative overflow-hidden py-24 sm:py-32 md:py-40 px-4 sm:px-6 md:px-12"
      style={{ background: "var(--bg-dark)" }}
    >
      {/* Blob */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.07 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(var(--color-accent-rgb), 0.07) 0%, transparent 50%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-[40rem] mx-auto relative z-10"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-white font-normal leading-tight">
          {title}
        </h2>
        <p className="text-lg text-white/70 mt-4 mb-10">{description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={buttonLink}
            className="inline-flex items-center justify-center gap-3 bg-accent text-black font-medium px-10 py-4 hover:bg-accent/90 hover:scale-[1.02] transition-all duration-200"
          >
            <span className="w-2 h-2 bg-black" />
            {buttonText}
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center border border-white/20 text-white px-10 py-4 hover:bg-white/5 transition-all duration-200"
          >
            Découvrir nos services
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
