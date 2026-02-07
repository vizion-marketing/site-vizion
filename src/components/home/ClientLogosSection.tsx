"use client";

import React from "react";
import { motion } from "framer-motion";

const CLIENT_LOGOS = [
  { name: "easyVirtual.tours", src: "/images/clients/easyvirtual.svg" },
  { name: "Eldo Wallet", src: "/images/clients/eldo.svg" },
  { name: "Ensenat Coaching", src: "/images/clients/ensenat.svg" },
  { name: "Olivier Bas", src: "/images/clients/olivierbas.svg" },
  { name: "Précision Industries", src: "/images/clients/precision.svg" },
  { name: "SaaS Corp", src: "/images/clients/saas.svg" },
];

export function ClientLogosSection() {
  const duplicatedLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="py-10 sm:py-12 md:py-14 px-4 sm:px-6 md:px-12 bg-[#F2F2F2] relative overflow-hidden">
      <div className="max-w-[82.5rem] mx-auto">
        {/* Surtitre */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="h-[1px] w-8 sm:w-12 bg-black/20" />
          <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-[#6b6b6b]">
            Ils nous font confiance
          </span>
          <div className="h-[1px] w-8 sm:w-12 bg-black/20" />
        </motion.div>

        {/* Logo marquee */}
        <div
          className="relative overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="flex gap-10 sm:gap-14 md:gap-20 w-max animate-scroll-left hover:[animation-play-state:paused]">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="shrink-0 flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-7 sm:h-8 md:h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientLogosSection;
