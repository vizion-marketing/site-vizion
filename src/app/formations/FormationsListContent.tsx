"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, BarChart, Users, MapPin } from "lucide-react";
import type { Formation } from "../../../sanity/lib/types";

interface FormationsListContentProps {
  formations: Formation[];
}

const THEME_LABELS: Record<string, string> = {
  linkedin: "LinkedIn & Personal Branding",
  prospection: "Prospection multi-canal",
  "base-donnees": "Base de données",
  ia: "Intelligence Artificielle",
  alternant: "Alternant",
  crm: "CRM & Outils",
  strategie: "Stratégie B2B",
};

const TARGET_LABELS: Record<string, string> = {
  commerciaux: "Équipes commerciales",
  marketing: "Équipes marketing",
  dirigeants: "Dirigeants",
  alternants: "Alternants",
};

const FORMAT_LABELS: Record<string, string> = {
  presentiel: "Présentiel",
  visio: "Visio",
  mixte: "Mixte",
};

const DURATION_LABELS: Record<string, string> = {
  "demi-journee": "Demi-journée",
  "1-jour": "1 journée",
  "2-jours": "2 journées",
  "sur-mesure": "Sur mesure",
};

const LEVEL_LABELS: Record<string, string> = {
  fondamentaux: "Fondamentaux",
  intermediaire: "Intermédiaire",
  expert: "Expert",
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export function FormationsListContent({ formations }: FormationsListContentProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const themes = useMemo(() => {
    const uniqueThemes = Array.from(new Set(formations.map((f) => f.theme)));
    return ["all", ...uniqueThemes];
  }, [formations]);

  const filteredFormations = useMemo(() => {
    if (activeFilter === "all") return formations;
    return formations.filter((f) => f.theme === activeFilter);
  }, [activeFilter, formations]);

  return (
    <main>
      {/* HERO */}
      <section
        className="dark-section grain-overlay relative py-20 sm:py-24 md:py-32 lg:py-40 px-4 sm:px-6 md:px-12 overflow-hidden"
        style={{ background: "var(--bg-dark)" }}
      >
        <div className="max-w-[82.5rem] mx-auto relative z-10">
          <motion.div {...fadeInUp}>
            <span className="inline-block text-[11px] font-light tracking-[0.12em] uppercase mb-8 text-primary opacity-70">
              NOS FORMATIONS
            </span>
            <h1
              className="text-primary font-normal leading-[0.92] tracking-[-0.04em] mb-8"
              style={{ fontSize: "clamp(48px, 8vw, 72px)" }}
            >
              Formations B2B
              <br />
              intra-entreprise
            </h1>
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mt-12">
            <motion.p
              className="text-secondary text-lg md:text-xl max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Montée en compétences de vos équipes commerciales et marketing,
              animée par des praticiens.
            </motion.p>

            <motion.div
              className="flex gap-12 border-l border-white/10 pl-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div>
                <div
                  className="text-accent font-normal leading-none mb-2"
                  style={{ fontSize: "clamp(32px, 4vw, 42px)" }}
                >
                  5
                </div>
                <div className="text-[11px] font-light tracking-widest uppercase opacity-60 text-primary">
                  Thématiques
                </div>
              </div>
              <div>
                <div
                  className="text-accent font-normal leading-none mb-2"
                  style={{ fontSize: "clamp(32px, 4vw, 42px)" }}
                >
                  Intra
                </div>
                <div className="text-[11px] font-light tracking-widest uppercase opacity-60 text-primary">
                  Entreprise
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FILTRES */}
      <section className="bg-white border-b border-black/[0.06] sticky top-0 z-40">
        <div className="max-w-[82.5rem] mx-auto px-4 sm:px-6 md:px-12">
          <div className="flex overflow-x-auto gap-2 py-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {themes.map((theme) => (
              <button
                key={theme}
                onClick={() => setActiveFilter(theme)}
                className={`whitespace-nowrap px-5 py-2.5 text-sm font-medium transition-all duration-200 border ${
                  activeFilter === theme
                    ? "bg-black text-white border-black"
                    : "bg-transparent text-secondary border-black/10 hover:border-black/30"
                }`}
              >
                {theme === "all"
                  ? "Toutes les formations"
                  : (THEME_LABELS[theme] ?? theme)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GRILLE */}
      <section className="bg-card py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12 min-h-[600px]">
        <div className="max-w-[82.5rem] mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredFormations.map((formation) => (
                <motion.div
                  layout
                  key={formation._id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                >
                  <Link
                    href={`/formations/${formation.slug}`}
                    className="group flex flex-col h-full bg-white border border-black/[0.06] hover:border-black/[0.12] hover:shadow-lg transition-all duration-300 overflow-hidden"
                  >
                    <div className="p-8 flex flex-col h-full">
                      <div className="mb-6">
                        <span className="inline-block bg-accent text-black text-[10px] font-bold tracking-wider uppercase px-2 py-1">
                          {THEME_LABELS[formation.theme] ?? formation.theme}
                        </span>
                      </div>

                      <h3 className="text-2xl font-normal tracking-tight mb-4 group-hover:text-accent transition-colors duration-300 text-primary">
                        {formation.title}
                      </h3>

                      <p className="text-secondary text-sm leading-relaxed mb-8 line-clamp-3">
                        {formation.description}
                      </p>

                      <div className="mt-auto pt-8 border-t border-black/[0.04] space-y-4">
                        <div className="grid grid-cols-2 gap-y-3 gap-x-2">
                          {formation.duration && (
                            <div className="flex items-center gap-2 text-[12px] text-muted">
                              <Clock size={14} className="text-black/40" />
                              <span>
                                {DURATION_LABELS[formation.duration] ??
                                  formation.duration}
                              </span>
                            </div>
                          )}
                          {formation.level && (
                            <div className="flex items-center gap-2 text-[12px] text-muted">
                              <BarChart size={14} className="text-black/40" />
                              <span>
                                {LEVEL_LABELS[formation.level] ??
                                  formation.level}
                              </span>
                            </div>
                          )}
                          {formation.format && (
                            <div className="flex items-center gap-2 text-[12px] text-muted">
                              <MapPin size={14} className="text-black/40" />
                              <span>
                                {FORMAT_LABELS[formation.format] ??
                                  formation.format}
                              </span>
                            </div>
                          )}
                          {formation.targets?.[0] && (
                            <div className="flex items-center gap-2 text-[12px] text-muted">
                              <Users size={14} className="text-black/40" />
                              <span className="truncate">
                                {TARGET_LABELS[formation.targets[0]] ??
                                  formation.targets[0]}
                              </span>
                            </div>
                          )}
                        </div>

                        <div className="flex items-center gap-2 text-sm font-medium mt-4 group-hover:translate-x-1 transition-transform duration-300">
                          Découvrir le programme
                          <ArrowRight size={16} className="text-accent" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredFormations.length === 0 && (
            <div className="flex flex-col items-center justify-center py-32 text-center">
              <p className="text-secondary text-lg">
                Aucune formation ne correspond à ce filtre.
              </p>
              <button
                onClick={() => setActiveFilter("all")}
                className="mt-4 text-black border-b border-black font-medium"
              >
                Voir tout le catalogue
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section
        className="dark-section grain-overlay relative py-20 sm:py-24 md:py-32 lg:py-40 px-4 sm:px-6 md:px-12 text-center overflow-hidden"
        style={{ background: "var(--bg-dark)" }}
      >
        <div className="max-w-[82.5rem] mx-auto relative z-10">
          <motion.div {...fadeInUp}>
            <h2
              className="text-primary font-normal leading-[1.05] tracking-[-0.035em] mb-10 max-w-3xl mx-auto"
              style={{ fontSize: "clamp(32px, 5vw, 52px)" }}
            >
              Une formation sur mesure
              <br />
              pour votre équipe ?
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center bg-white text-black px-10 py-4 font-medium text-sm hover:-translate-y-0.5 transition-all duration-300"
            >
              NOUS CONTACTER
              <ArrowRight size={18} className="ml-3" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
