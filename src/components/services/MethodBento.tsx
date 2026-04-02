"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Layers,
  PenTool,
  FileCode2,
  Palette,
  Gauge,
  ShieldCheck,
  Target,
  UserCheck,
  Clock,
  ArrowUpRight,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const ITEMS = [
  {
    icon: Target,
    tag: "Marketing Produit",
    title: "Votre positionnement avant votre site",
    description:
      "Persona, proposition de valeur, architecture de message : on structure votre discours commercial avant d'écrire la première ligne.",
    span: 2,
  },
  {
    icon: Palette,
    tag: "Design",
    title: "Maquettes Figma validées avant le code",
    description:
      "Chaque page est maquettée, itérée avec vos équipes, puis développée au pixel près. Zéro surprise à la livraison.",
    span: 1,
  },
  {
    icon: PenTool,
    tag: "Copywriting",
    title: "Des textes écrits à la main",
    description:
      "Chaque mot est rédigé par un stratège qui comprend votre marché. L'IA assiste, elle ne rédige jamais à votre place.",
    span: 1,
  },
  {
    icon: Layers,
    tag: "CMS",
    title: "CMS headless sur-mesure",
    description:
      "Sanity, Contentlayer : le contrôle total sur votre contenu, sans dépendre de nous pour chaque modification.",
    span: 1,
  },
  {
    icon: FileCode2,
    tag: "Code",
    title: "Next.js, React, TypeScript",
    description:
      "Les mêmes technologies que les scale-ups. Pas de page builder, pas de dette technique cachée.",
    span: 1,
  },
  {
    icon: Gauge,
    tag: "Performance",
    title: "Lighthouse 90+ garanti",
    description:
      "Images AVIF/WebP, lazy loading, code splitting. Moins de 2 secondes sur mobile.",
    span: 1,
  },
  {
    icon: ShieldCheck,
    tag: "SEO",
    title: "SEO technique dès le jour 1",
    description:
      "Schema.org, sitemap dynamique, Core Web Vitals. Le référencement est dans l'ADN du site.",
    span: 1,
  },
  {
    icon: UserCheck,
    tag: "Engagement",
    title: "Un interlocuteur unique, de A à Z",
    description:
      "Un directeur marketing dédié pilote votre projet. Pas de turnover, pas de perte de contexte.",
    span: 1,
  },
  {
    icon: Clock,
    tag: "Engagement",
    title: "Délais tenus, résultats mesurables",
    description:
      "Planning détaillé dès le kickoff. Rapports mensuels transparents avec KPIs concrets.",
    span: 1,
  },
];

export function MethodBento() {
  return (
    <section
      className="dark-section grain-overlay py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12 relative overflow-hidden"
      style={{ background: "var(--bg-dark)" }}
    >
      {/* ── Gradient blobs ── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute w-[70%] h-[60%] top-[-10%] right-[-15%]"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.08) 0%, transparent 55%)",
          }}
        />
        <div
          className="absolute w-[60%] h-[50%] bottom-[-10%] left-[-10%]"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.06) 0%, transparent 55%)",
          }}
        />
      </div>

      <div className="max-w-[82.5rem] mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
        >
          {/* ─── Header ─── */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mb-12 sm:mb-14 lg:mb-16 max-w-2xl"
          >
            <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-40" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-white/60 uppercase">
                Notre méthode &amp; engagements
              </span>
            </div>
            <h2 className="font-heading font-medium text-[24px] sm:text-[34px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] text-white mb-4 sm:mb-5">
              Ce qui change quand
              <br />
              on fait les choses bien
            </h2>
            <p className="text-white/60 text-[15px] sm:text-base leading-[1.7] max-w-xl">
              Pas de raccourcis. Chaque décision technique et créative est prise
              pour maximiser l&apos;impact commercial de votre site.
            </p>
          </motion.div>

          {/* ─── Bento Grid ─── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {ITEMS.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className={`group relative bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] p-6 sm:p-7 overflow-hidden hover:bg-white/[0.07] hover:border-white/[0.15] transition-all duration-300 ${
                  item.span === 2 ? "lg:col-span-2" : ""
                }`}
              >
                {/* Accent top bar on hover */}
                <div className="absolute top-0 left-0 h-[2px] w-0 bg-accent group-hover:w-full transition-all duration-500" />

                {/* Number watermark */}
                <span className="absolute top-3 right-4 text-white/[0.04] font-heading font-bold text-[56px] leading-none select-none group-hover:text-accent/[0.08] transition-colors duration-500">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Tag */}
                <div className="mb-4">
                  <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-medium tracking-[0.08em] uppercase px-2.5 py-1 bg-accent/10 text-accent border border-accent/20">
                    <item.icon size={12} />
                    {item.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading font-medium text-[17px] sm:text-[19px] leading-[1.15] tracking-[-0.01em] text-white mb-2.5">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[13px] sm:text-[14px] text-white/50 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* ─── Bottom CTA ─── */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pt-8 border-t border-white/[0.08]"
          >
            <p className="text-[14px] sm:text-[15px] text-white/50">
              Chaque projet est piloté avec la même rigueur, pas de promesses
              vagues.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 text-[13px] sm:text-[14px] font-semibold text-white group shrink-0"
            >
              Discuter de votre projet
              <ArrowUpRight
                size={15}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
