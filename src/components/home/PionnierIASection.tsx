"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function PionnierIASection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section
      className="dark-section grain-overlay relative overflow-hidden min-h-[85vh] lg:min-h-screen flex items-center border-y border-white/5"
      style={{ background: "var(--bg-dark)" }}
    >
      {/* Glow accent gauche */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 20% 50%, rgba(var(--color-accent-rgb), 0.07) 0%, transparent 50%)`,
        }}
      />

      {/* Grille décorative */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 w-full max-w-[82.5rem] mx-auto px-4 sm:px-6 md:px-12 py-20 sm:py-24 md:py-32 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center">

          {/* Colonne texte gauche */}
          <motion.div
            className="lg:col-span-7 xl:col-span-6 z-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Titre */}
            <motion.h2
              variants={itemVariants}
              className="font-heading text-white mb-8 leading-[1.05] tracking-[-0.035em]"
              style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 400 }}
            >
              Vizion, une agence pionnière de l&apos;IA appliquée aux{" "}
              <span className="text-accent">sales</span> et au{" "}
              <span className="text-accent">marketing B2B.</span>
            </motion.h2>

            {/* Paragraphe */}
            <motion.p
              variants={itemVariants}
              className="text-white/60 text-lg md:text-xl max-w-xl mb-12 leading-relaxed font-light"
            >
              Chez Vizion, nous n&apos;avons pas attendu qu&apos;elle devienne mainstream pour innover,
              tester, itérer avec l&apos;intelligence artificielle. Aujourd&apos;hui nous déployons des
              outils véritablement utiles à nos clients, dupliquant leur performance Marketing et
              Commerciale.
            </motion.p>

            {/* CTA */}
            <motion.div variants={itemVariants}>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-white text-black font-semibold px-8 py-4 border border-black/[0.12] hover:bg-white/90 active:scale-[0.97] transition-all duration-200"
              >
                Contactez-nous
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Image droite — full height bleed */}
          <motion.div
            className="lg:col-span-5 xl:col-span-6 lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-[45vw] h-[400px] lg:h-auto overflow-hidden group"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/services/creation-landing-page/hero.avif"
              alt="Vizion, agence pionnière de l'IA appliquée au marketing B2B"
              fill
              className="object-cover transition-transform duration-[3000ms] ease-out group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            {/* Fondu vers le fond sombre */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "linear-gradient(to right, var(--bg-dark) 0%, rgba(12,12,10,0.4) 40%, transparent 70%)",
              }}
            />
            <div
              className="absolute inset-0 pointer-events-none lg:hidden"
              style={{
                background: "linear-gradient(to top, var(--bg-dark) 0%, transparent 60%)",
              }}
            />

            {/* Tag flottant */}
            <div className="absolute bottom-8 right-8 hidden xl:block">
              <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-6 max-w-[240px]">
                <p className="text-[10px] text-accent uppercase tracking-[0.2em] font-bold mb-2">Technologie</p>
                <p className="text-white/80 text-sm leading-relaxed font-light">
                  Algorithmes de scoring prédictif et génération de contenu augmentée, déployés chez nos clients.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
