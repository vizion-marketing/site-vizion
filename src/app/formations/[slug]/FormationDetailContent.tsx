"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Check,
  ChevronDown,
  Clock,
  Users,
  BarChart,
  Monitor,
  User,
  Info,
  Layers,
  ArrowRight,
} from "lucide-react";
import type { Formation } from "../../../../sanity/lib/types";

interface FormationDetailContentProps {
  formation: Formation;
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

export function FormationDetailContent({ formation }: FormationDetailContentProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div>
      {/* HERO SPLIT */}
      <section
        className="dark-section grain-overlay relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12"
        style={{ background: "var(--bg-dark)" }}
      >
        <div className="max-w-[82.5rem] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Gauche */}
            <motion.div className="lg:col-span-7" {...fadeInUp}>
              <span className="inline-block bg-accent text-black text-[11px] font-light tracking-[0.12em] uppercase px-3 py-1 mb-8">
                {THEME_LABELS[formation.theme] ?? formation.theme}
              </span>
              <h1
                className="text-primary font-normal leading-[0.92] tracking-[-0.04em] mb-8"
                style={{ fontSize: "clamp(48px, 8vw, 72px)" }}
              >
                {formation.title}
              </h1>
              <p className="text-secondary text-base md:text-lg leading-relaxed max-w-xl">
                {formation.description}
              </p>
            </motion.div>

            {/* Droite : fiche pratique */}
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-white light-card border border-black/5 shadow-2xl p-8 sm:p-10">
                <h3 className="text-[11px] font-light tracking-[0.12em] uppercase text-black/40 mb-8 border-b border-black/5 pb-4">
                  Fiche pratique
                </h3>

                <div className="space-y-5">
                  {formation.format && (
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-card border border-black/[0.06] flex items-center justify-center flex-shrink-0">
                        <Monitor size={18} className="text-black/60" />
                      </div>
                      <div>
                        <p className="text-[11px] text-black/40 uppercase tracking-wider leading-none mb-1">
                          Format
                        </p>
                        <p className="text-sm font-medium text-black">
                          {FORMAT_LABELS[formation.format] ?? formation.format}
                        </p>
                      </div>
                    </div>
                  )}

                  {formation.duration && (
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-card border border-black/[0.06] flex items-center justify-center flex-shrink-0">
                        <Clock size={18} className="text-black/60" />
                      </div>
                      <div>
                        <p className="text-[11px] text-black/40 uppercase tracking-wider leading-none mb-1">
                          Durée
                        </p>
                        <p className="text-sm font-medium text-black">
                          {DURATION_LABELS[formation.duration] ??
                            formation.duration}
                        </p>
                      </div>
                    </div>
                  )}

                  {formation.level && (
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-card border border-black/[0.06] flex items-center justify-center flex-shrink-0">
                        <BarChart size={18} className="text-black/60" />
                      </div>
                      <div>
                        <p className="text-[11px] text-black/40 uppercase tracking-wider leading-none mb-1">
                          Niveau
                        </p>
                        <p className="text-sm font-medium text-black">
                          {LEVEL_LABELS[formation.level] ?? formation.level}
                        </p>
                      </div>
                    </div>
                  )}

                  {formation.targets && formation.targets.length > 0 && (
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-card border border-black/[0.06] flex items-center justify-center flex-shrink-0">
                        <Users size={18} className="text-black/60" />
                      </div>
                      <div>
                        <p className="text-[11px] text-black/40 uppercase tracking-wider leading-none mb-1">
                          Cibles
                        </p>
                        <p className="text-sm font-medium text-black">
                          {formation.targets
                            .map((t) => TARGET_LABELS[t] ?? t)
                            .join(", ")}
                        </p>
                      </div>
                    </div>
                  )}

                  {formation.maxParticipants && (
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-card border border-black/[0.06] flex items-center justify-center flex-shrink-0">
                        <Layers size={18} className="text-black/60" />
                      </div>
                      <div>
                        <p className="text-[11px] text-black/40 uppercase tracking-wider leading-none mb-1">
                          Max. participants
                        </p>
                        <p className="text-sm font-medium text-black">
                          {formation.maxParticipants} personnes
                        </p>
                      </div>
                    </div>
                  )}

                  {formation.formateur && (
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-card border border-black/[0.06] flex items-center justify-center flex-shrink-0">
                        <User size={18} className="text-black/60" />
                      </div>
                      <div>
                        <p className="text-[11px] text-black/40 uppercase tracking-wider leading-none mb-1">
                          Formateur
                        </p>
                        <p className="text-sm font-medium text-black">
                          {formation.formateur}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <Link
                  href="/contact"
                  className="mt-10 flex items-center justify-center gap-3 w-full bg-accent text-black px-7 py-4 font-medium text-sm hover:-translate-y-0.5 transition-transform"
                >
                  Demander cette formation
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* OBJECTIFS */}
      {formation.objectives && formation.objectives.length > 0 && (
        <section className="bg-card py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12">
          <div className="max-w-[82.5rem] mx-auto">
            <motion.div className="mb-16" {...fadeInUp}>
              <span className="text-[11px] font-light tracking-[0.12em] uppercase text-muted block mb-4">
                Objectifs pédagogiques
              </span>
              <h2
                className="text-primary font-normal leading-[1.05] tracking-[-0.035em]"
                style={{ fontSize: "clamp(32px, 5vw, 52px)" }}
              >
                Ce que vos équipes vont apprendre
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {formation.objectives.map((obj, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start gap-4 p-6 bg-white border border-black/[0.06]"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-accent flex items-center justify-center mt-0.5">
                    <Check size={14} className="text-black" />
                  </div>
                  <p className="text-primary text-base leading-relaxed">{obj}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PROGRAMME */}
      {formation.programme && formation.programme.length > 0 && (
        <section className="bg-white py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12">
          <div className="max-w-[82.5rem] mx-auto">
            <motion.div className="mb-20" {...fadeInUp}>
              <span className="text-[11px] font-light tracking-[0.12em] uppercase text-muted block mb-4">
                Parcours pédagogique
              </span>
              <h2
                className="text-primary font-normal leading-[1.05] tracking-[-0.035em]"
                style={{ fontSize: "clamp(32px, 5vw, 52px)" }}
              >
                Programme
              </h2>
            </motion.div>

            <div className="max-w-3xl space-y-6">
              {formation.programme.map((module, idx) => (
                <motion.div
                  key={idx}
                  className="flex gap-6"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.07 }}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-accent flex items-center justify-center text-black text-xs font-bold flex-shrink-0">
                      {String(idx + 1).padStart(2, "0")}
                    </div>
                    {idx < (formation.programme?.length ?? 0) - 1 && (
                      <div className="w-px flex-1 bg-black/10 mt-2" />
                    )}
                  </div>
                  <div className="pb-8 flex-1">
                    {module.module && (
                      <span className="text-[10px] font-bold tracking-wider uppercase text-muted mb-2 block">
                        {module.module}
                      </span>
                    )}
                    <h3 className="text-xl font-normal tracking-tight mb-3 text-primary">
                      {module.title}
                    </h3>
                    {module.description && (
                      <p className="text-secondary text-sm leading-relaxed mb-4">
                        {module.description}
                      </p>
                    )}
                    {module.points && module.points.length > 0 && (
                      <ul className="space-y-1.5">
                        {module.points.map((point, pIdx) => (
                          <li
                            key={pIdx}
                            className="flex items-center gap-2 text-sm text-secondary"
                          >
                            <span className="w-1 h-1 bg-accent flex-shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PREREQUIS */}
      {formation.prerequisites && (
        <section className="bg-card py-16 sm:py-20 px-4 sm:px-6 md:px-12 border-y border-black/[0.04]">
          <div className="max-w-[82.5rem] mx-auto">
            <motion.div
              className="flex flex-col md:flex-row items-start md:items-center gap-6 bg-white border border-black/[0.06] p-8"
              {...fadeInUp}
            >
              <div className="flex-shrink-0 w-12 h-12 bg-black/[0.03] flex items-center justify-center">
                <Info size={24} className="text-black/40" />
              </div>
              <div>
                <h3 className="text-[11px] font-light tracking-[0.12em] uppercase text-muted mb-2">
                  Prérequis
                </h3>
                <p className="text-primary text-base leading-relaxed">
                  {formation.prerequisites}
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {formation.faqs && formation.faqs.length > 0 && (
        <section className="bg-white py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12">
          <div className="max-w-[82.5rem] mx-auto">
            <motion.div className="mb-16" {...fadeInUp}>
              <h2
                className="text-primary font-normal leading-[1.05] tracking-[-0.035em]"
                style={{ fontSize: "clamp(32px, 5vw, 52px)" }}
              >
                Questions fréquentes
              </h2>
            </motion.div>

            <div className="max-w-3xl space-y-0">
              {formation.faqs.map((faq, idx) => (
                <div key={idx} className="border-b border-black/10">
                  <button
                    onClick={() =>
                      setActiveFaq(activeFaq === idx ? null : idx)
                    }
                    className="w-full py-6 flex items-center justify-between text-left"
                  >
                    <span className="text-lg font-normal pr-8 text-primary">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-300 flex-shrink-0 text-muted ${
                        activeFaq === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {activeFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 text-secondary leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA FINAL */}
      <section
        className="dark-section grain-overlay relative py-20 sm:py-24 md:py-32 lg:py-40 px-4 sm:px-6 md:px-12 text-center overflow-hidden"
        style={{ background: "var(--bg-dark)" }}
      >
        <div className="max-w-[82.5rem] mx-auto relative z-10">
          <motion.div {...fadeInUp}>
            <h2
              className="text-primary font-normal leading-[1.05] tracking-[-0.035em] mb-6"
              style={{ fontSize: "clamp(32px, 5vw, 52px)" }}
            >
              Prêt à former vos équipes ?
            </h2>
            <p className="text-secondary text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10">
              Formation intra-entreprise, adaptée à votre contexte. Nous
              construisons ensemble le parcours idéal pour vos collaborateurs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-accent text-black px-10 py-4 font-medium text-sm hover:-translate-y-0.5 transition-transform"
            >
              Discuter de votre projet
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
