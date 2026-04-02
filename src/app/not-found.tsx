"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

export default function NotFound() {
  return (
    <section
      className="dark-section grain-overlay relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-4 sm:px-6 md:px-12"
      style={{ background: "var(--bg-dark)" }}
    >
      {/* Gradient décoratif centré */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(var(--color-accent-rgb), 0.07) 0%, transparent 65%)",
            width: "100%",
            height: "100%",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Grand 404 typographique */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0}
          aria-hidden="true"
          className="select-none font-bold leading-none"
          style={{
            fontSize: "clamp(120px, 20vw, 240px)",
            letterSpacing: "-0.06em",
            color: "transparent",
            WebkitTextStroke: "1.5px rgba(var(--color-accent-rgb), 0.5)",
          }}
        >
          404
        </motion.div>

        {/* Surtitre */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.12}
          className="text-muted mb-4 mt-2 text-xs font-light uppercase tracking-[0.12em]"
        >
          Erreur 404
        </motion.p>

        {/* Titre principal */}
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="text-primary mb-5"
          style={{
            fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: 400,
            lineHeight: 1.05,
            letterSpacing: "-0.035em",
          }}
        >
          Page introuvable
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
          className="text-secondary mb-10 max-w-md text-base font-light leading-relaxed"
        >
          Cette page n&apos;existe pas ou a été déplacée. Revenez à l&apos;accueil
          pour explorer nos services et ressources.
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.42}
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-2 border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-medium text-primary backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white/10 active:scale-95"
          >
            Retour à l&apos;accueil
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
