"use client";

import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";
import Link from "next/link";
import { homeContent, type LocalSEOContent } from "@/content/home";

interface AboutLocalSectionProps {
  content?: LocalSEOContent;
}

export function AboutLocalSection({ content }: AboutLocalSectionProps = {}) {
  const localData = content ?? homeContent.localSEO;

  return (
    <section
      id="agence"
      className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24 grain-light"
    >
      {/* Background */}
      <div
        className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[100vw] max-w-none bg-card"
        style={{ minWidth: "100vw" }}
        aria-hidden
      />

      {/* Gradient blobs */}
      <div
        className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[100vw] max-w-none pointer-events-none overflow-hidden"
        style={{ minWidth: "100vw" }}
        aria-hidden
      >
        <div
          className="absolute w-[50%] h-[60%] top-[-10%] left-[-10%]"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.10) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute w-[40%] h-[40%] bottom-[-10%] right-[-5%]"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.06) 0%, transparent 55%)",
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
          <div className="flex items-center gap-2.5 mb-3 sm:mb-5">
            <div className="relative flex items-center justify-center w-2 h-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </div>
            <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-muted uppercase">
              {localData.surtitre}
            </span>
          </div>

          <h2 className="font-heading font-medium text-[26px] sm:text-[36px] md:text-[42px] lg:text-[48px] leading-[1.08] tracking-[-0.02em] text-primary mb-4 sm:mb-5">
            {localData.h2Highlight ? (
              <>
                {localData.h2.split(localData.h2Highlight)[0]}
                <span className="text-accent">{localData.h2Highlight}</span>
                {localData.h2.split(localData.h2Highlight)[1]}
              </>
            ) : (
              localData.h2
            )}
          </h2>

          <p className="text-muted text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed max-w-3xl">
            {localData.description}
          </p>
        </motion.div>

        {/* ========== INTRO PARAGRAPHS ========== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10 sm:mb-12"
        >
          {localData.paragraphs.map((paragraph, i) => (
            <p
              key={i}
              className="text-[15px] sm:text-[16px] leading-relaxed text-muted max-w-4xl mb-4 last:mb-0"
            >
              {paragraph}
            </p>
          ))}
        </motion.div>

        {/* ========== MAP + VILLES ========== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="font-heading font-semibold text-[20px] sm:text-[24px] leading-[1.1] tracking-[-0.01em] text-primary mb-6">
            Notre zone d'intervention
          </h3>

          {/* Map + Horaires */}
          <div className="flex flex-col lg:flex-row gap-4 mb-6 items-stretch">
            <div className="relative flex-1 aspect-[16/7] lg:aspect-auto lg:min-h-[260px] overflow-hidden border border-black/[0.06] shadow-sm">
              <iframe
                src={localData.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                title={`Vizion - ${localData.h2}`}
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>

            <div className="lg:w-[200px] shrink-0 bg-white border border-black/[0.06] p-5 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-accent" strokeWidth={1.5} />
                <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-black/50">
                  Horaires
                </span>
              </div>
              <div className="flex flex-col gap-2">
                {[
                  { day: "Lundi", hours: "9h - 19h" },
                  { day: "Mardi", hours: "9h - 19h" },
                  { day: "Mercredi", hours: "9h - 19h" },
                  { day: "Jeudi", hours: "9h - 19h" },
                  { day: "Vendredi", hours: "9h - 19h" },
                ].map(({ day, hours }) => (
                  <div key={day} className="flex items-center justify-between">
                    <span className="text-[12px] text-black/60">{day}</span>
                    <span className="text-[12px] font-medium text-primary">{hours}</span>
                  </div>
                ))}
                <div className="pt-2 border-t border-black/[0.06]">
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] text-black/40">Sam - Dim</span>
                    <span className="text-[12px] text-black/40">Fermé</span>
                  </div>
                </div>
              </div>
              <div className="mt-auto pt-3 border-t border-black/[0.06]">
                <div className="flex items-start gap-1.5">
                  <MapPin size={12} className="text-accent mt-0.5 shrink-0" strokeWidth={1.5} />
                  <span className="text-[11px] text-black/50 leading-snug">
                    Labège, Toulouse
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Villes badges */}
          <div className="flex flex-wrap gap-2 mb-8">
            {localData.villes.map((ville) => {
              const baseClasses =
                "inline-flex items-center gap-1.5 px-3 py-1.5 bg-white light-card border border-black/[0.06] rounded-full text-xs font-medium text-primary";
              const inner = (
                <>
                  {ville.name === "Toulouse" && (
                    <MapPin size={12} className="text-accent" />
                  )}
                  {ville.name}
                  <span className="text-[10px] text-muted">
                    • {ville.label}
                  </span>
                </>
              );

              return ville.href ? (
                <Link
                  key={ville.name}
                  href={ville.href}
                  className={`${baseClasses} hover:border-accent hover:shadow-sm transition-all duration-300`}
                >
                  {inner}
                </Link>
              ) : (
                <span key={ville.name} className={baseClasses}>
                  {inner}
                </span>
              );
            })}
          </div>

          {/* CTA */}
          <a
            href={localData.cta.href}
            className="group inline-flex items-center gap-2 text-[13px] sm:text-[14px] font-semibold text-primary hover:text-accent transition-colors duration-300"
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
        </motion.div>
      </div>
    </section>
  );
}

export default AboutLocalSection;
