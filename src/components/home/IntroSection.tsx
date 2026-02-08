"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// Animation variants for staggered text reveal
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export function IntroSection() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12 overflow-hidden grain-overlay">
      {/* Background base */}
      <div className="absolute inset-0 bg-[#f8f8f6]" />

      {/* Subtle gradient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-[70%] h-[60%] top-[-10%] left-[-15%]"
          style={{
            background: 'radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.12) 0%, transparent 60%)',
          }}
        />
        <div
          className="absolute w-[50%] h-[50%] top-[20%] right-[-10%]"
          style={{
            background: 'radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.08) 0%, transparent 55%)',
          }}
        />
        <div
          className="absolute w-[60%] h-[50%] bottom-[-15%] left-[20%]"
          style={{
            background: 'radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.06) 0%, transparent 55%)',
          }}
        />
      </div>

      <div className="max-w-[82.5rem] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Texte avec animations staggered */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Quote decorative element */}
            <motion.div variants={itemVariants} className="mb-6">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                className="text-[#D4FD00] opacity-80"
              >
                <path
                  d="M14 24C14 17.373 19.373 12 26 12V8C17.163 8 10 15.163 10 24V40H26V24H14ZM34 24C34 17.373 39.373 12 46 12V8C37.163 8 30 15.163 30 24V40H46V24H34Z"
                  fill="currentColor"
                />
              </svg>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="font-heading font-medium text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] leading-[1.1] tracking-[-0.02em] text-[#1a1a1a] mb-6 sm:mb-8"
            >
              Les meilleurs produits ne gagnent pas toujours.
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">Les plus clairs, si.</span>
                <span
                  className="absolute bottom-1 left-0 w-full h-3 bg-[#D4FD00]/40 -z-0"
                  style={{ transform: 'skewX(-3deg)' }}
                />
              </span>
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="space-y-4 sm:space-y-5 text-[#6b6b6b] text-[15px] sm:text-base font-[var(--font-body)] leading-relaxed"
            >
              <p>
                Votre produit est excellent. Vos clients satisfaits le confirment. Pourtant,
                vos prospects ne le voient pas. Ils comparent, hésitent, et finissent par
                choisir un concurrent moins bon mais plus lisible. Le problème n'est pas
                votre offre — c'est la façon dont elle est perçue.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-4 sm:mt-5 text-[#6b6b6b] text-[15px] sm:text-base font-[var(--font-body)] leading-relaxed"
            >
              <p>
                Dans un marché saturé, la clarté est devenue l'avantage concurrentiel ultime.
                Les entreprises qui gagnent ne sont pas celles qui ont le meilleur produit,
                mais celles qui savent le rendre évident. Chaque jour, vous perdez des deals
                non pas parce que vous êtes moins bons, mais parce que vous êtes moins clairs.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8 sm:mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 h-[48px] sm:h-[52px] px-6 sm:px-8 text-[13px] sm:text-[14px] font-[var(--font-body)] font-semibold tracking-[-0.01em] bg-[#1a1a1a] text-white rounded-md hover:bg-black/90 hover:-translate-y-0.5 transition-all duration-300 active:scale-95"
              >
                Clarifier mon offre
                <ArrowUpRight size={16} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Image avec bordure accent et overlay amélioré */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            {/* Accent border frame */}
            <div className="absolute -inset-3 sm:-inset-4 border-2 border-[#D4FD00] rounded-lg opacity-60" />
            <div className="absolute -inset-1.5 sm:-inset-2 border border-[#1a1a1a]/10 rounded-lg" />

            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200"
                alt="Équipe en réunion stratégique"
                className="w-full h-full object-cover"
              />
              {/* Overlay amélioré avec gradient diagonal */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a]/20 via-transparent to-[#D4FD00]/10" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Badge flottant avec design amélioré */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white border border-black/10 rounded-lg p-4 sm:p-5 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#D4FD00] flex items-center justify-center">
                  <span className="text-[#1a1a1a] font-heading font-bold text-lg sm:text-xl">70+</span>
                </div>
                <div>
                  <p className="text-[#1a1a1a] font-[var(--font-body)] font-semibold text-sm">Entreprises</p>
                  <p className="text-[#6b6b6b] text-xs">accompagnées</p>
                </div>
              </div>
            </motion.div>

            {/* Petit accent décoratif en haut à droite */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#D4FD00] rounded-sm" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
