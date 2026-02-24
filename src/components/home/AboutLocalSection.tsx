"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MapPin, Flame, TrendingUp, HeartHandshake } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { homeContent } from "@/content/home";

const MILESTONES = [
  {
    number: "01",
    title: "Un directeur marketing, pas un chef de projet",
    description: "Votre interlocuteur est un expert en marketing produit qui conçoit la stratégie et dialogue avec votre comité de direction. Pas un coordinateur qui transmet vos briefs à des exécutants.",
    icon: Flame,
  },
  {
    number: "02",
    title: "Du positionnement à la signature",
    description: "Nous intervenons sur l'ensemble du cycle de vente. Positionnement, campagnes, supports commerciaux, outils de conclusion. Votre prospect reçoit le même message à chaque étape, et ça change tout sur le taux de conversion.",
    icon: TrendingUp,
  },
  {
    number: "03",
    title: "Vos équipes montent en compétence",
    description: "Nous ne créons pas de dépendance. Transfert de compétences, formation, co-construction. À la fin de la mission, votre équipe est plus autonome qu'avant.",
    icon: HeartHandshake,
  },
];

export function AboutLocalSection() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      if (!timelineRef.current) return;

      const milestones = timelineRef.current.querySelectorAll(".milestone-item");

      milestones.forEach((milestone, index) => {
        gsap.fromTo(
          milestone,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: milestone,
              start: "top 85%",
              end: "top 60%",
              scrub: false,
            },
          }
        );
      });
    });

    return () => {
      mm.revert();
    };
  }, []);

  const localData = homeContent.localSEO;

  return (
    <section
      id="agence"
      className="relative w-full py-12 sm:py-16 md:py-20 lg:py-32 grain-overlay"
    >
      {/* Background base — full-bleed */}
      <div
        className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[100vw] max-w-none bg-[#f8f8f6]"
        style={{ minWidth: "100vw" }}
        aria-hidden
      />

      {/* Subtle gradient blobs */}
      <div
        className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[100vw] max-w-none pointer-events-none overflow-hidden"
        style={{ minWidth: "100vw" }}
        aria-hidden
      >
        <div
          className="absolute w-[70%] h-[60%] top-[-10%] left-[-15%]"
          style={{
            background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.12) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute w-[50%] h-[50%] top-[20%] right-[-10%]"
          style={{
            background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.08) 0%, transparent 55%)",
          }}
        />
        <div
          className="absolute w-[60%] h-[50%] bottom-[-15%] left-[20%]"
          style={{
            background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.06) 0%, transparent 55%)",
          }}
        />
      </div>

      <div className="max-w-[82.5rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        {/* ========== HEADER ========== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-10 md:mb-12"
        >
          {/* Overline */}
          <div className="flex items-center gap-2.5 mb-3 sm:mb-5">
            <div className="relative flex items-center justify-center w-2 h-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D4FD00] opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#D4FD00]" />
            </div>
            <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-muted uppercase">
              {localData.surtitre}
            </span>
          </div>

          <h2 className="font-heading font-medium text-[26px] sm:text-[36px] md:text-[42px] lg:text-[48px] leading-[1.08] tracking-[-0.02em] text-primary mb-4 sm:mb-5">
            <span className="text-[#D4FD00]">Vizion</span>, une agence toulousaine
            <br className="hidden sm:inline" /> au service des entreprises d&apos;Occitanie et d&apos;ailleurs
          </h2>

          <p className="text-muted text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed max-w-3xl">
            Basés à Labège dans la technopole de Toulouse, nous accompagnons les entreprises B2B de toute l'Occitanie et de France. Proximité pour les clients locaux, efficacité à distance pour les autres.
          </p>
        </motion.div>

        {/* ========== INTRO PARAGRAPH ========== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 sm:mb-16"
        >
          <p className="text-[15px] sm:text-[16px] leading-relaxed text-muted max-w-4xl">
            Plus de 70 entreprises nous font confiance depuis 2021 pour structurer leur marketing produit, aligner leurs équipes commerciales et transformer leur offre en évidence sur leur marché. L'expertise reste la même, seule la distance change.
          </p>
        </motion.div>

        {/* ========== PHOTO + STATS GRID ========== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 mb-16 sm:mb-20 lg:mb-24">
          {/* Left: Photo Vizion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-black/[0.06] shadow-sm">
              <Image
                src="/images/why-vizion/equipe-vizion.avif"
                alt="Équipe Vizion - Agence marketing B2B Toulouse"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <p className="mt-3 text-xs text-muted">
              <span className="font-medium text-primary">Équipe Vizion</span> — Agence marketing B2B, Toulouse
            </p>
          </motion.div>

          {/* Right: Statistiques */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {/* Stat 1 */}
              <div className="bg-white light-card rounded-lg p-6 border border-black/[0.06]">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl sm:text-5xl font-heading font-bold text-primary">70+</span>
                  <span className="text-sm text-muted">clients</span>
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  entreprises accompagnées depuis 2021
                </p>
              </div>

              {/* Stat 2 */}
              <div className="bg-white light-card rounded-lg p-6 border border-black/[0.06]">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl sm:text-5xl font-heading font-bold text-primary">5 ans</span>
                  <span className="text-sm text-muted">d'expertise</span>
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  spécialisés en marketing B2B
                </p>
              </div>

              {/* Stat 3 */}
              <div className="bg-white light-card rounded-lg p-6 border border-black/[0.06] sm:col-span-2 lg:col-span-1">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl sm:text-5xl font-heading font-bold text-primary">+500</span>
                  <span className="text-sm text-muted">assets marketing déjà livrés</span>
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  Présentations, pages, emails, supports de vente...
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ========== TIMELINE + MAP GRID ========== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16">
          {/* Left: Pourquoi Vizion (Timeline) */}
          <motion.div
            ref={timelineRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="font-heading font-semibold text-[22px] sm:text-[26px] md:text-[30px] leading-[1.1] tracking-[-0.01em] text-primary mb-8">
              Pourquoi choisir Vizion ?
            </h3>

            <div className="space-y-8">
              {MILESTONES.map((milestone, index) => {
                const Icon = milestone.icon;
                return (
                  <div
                    key={milestone.number}
                    className="milestone-item relative flex gap-4 sm:gap-5"
                  >
                    {/* Icon + Line */}
                    <div className="relative flex flex-col items-center">
                      <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#D4FD00] shrink-0">
                        <Icon size={20} className="text-[#0c0c0a]" />
                      </div>
                      {index < MILESTONES.length - 1 && (
                        <div className="absolute top-12 bottom-[-2rem] left-1/2 -translate-x-1/2 w-px bg-black/[0.08]" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-4">
                      <span className="inline-block text-[10px] font-bold text-[#D4FD00] tracking-wider mb-2">
                        {milestone.number}
                      </span>
                      <h4 className="font-heading font-semibold text-[16px] sm:text-[18px] leading-[1.3] text-primary mb-2">
                        {milestone.title}
                      </h4>
                      <p className="text-[13px] sm:text-[14px] leading-relaxed text-muted">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Map + Villes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="font-heading font-semibold text-[22px] sm:text-[26px] md:text-[30px] leading-[1.1] tracking-[-0.01em] text-primary mb-6">
              Notre zone d'intervention
            </h3>

            {/* Map */}
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-black/[0.06] shadow-sm mb-6">
              <iframe
                src={localData.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                title="Vizion - Agence marketing Toulouse, Occitanie"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>

            {/* Villes badges */}
            <div className="flex flex-wrap gap-2">
              {localData.villes.map((ville) => (
                <span
                  key={ville.name}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white light-card border border-black/[0.06] rounded-full text-xs font-medium text-primary"
                >
                  {ville.name === "Toulouse" && <MapPin size={12} className="text-[#D4FD00]" />}
                  {ville.name}
                  <span className="text-[10px] text-muted">• {ville.label}</span>
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8">
              <a
                href={localData.cta.href}
                className="group inline-flex items-center gap-2 text-[13px] sm:text-[14px] font-semibold text-primary hover:text-[#D4FD00] transition-colors duration-300"
              >
                {localData.cta.text}
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutLocalSection;
