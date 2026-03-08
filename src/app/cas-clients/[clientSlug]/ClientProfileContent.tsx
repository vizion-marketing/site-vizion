"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "@/components/icons";
import {
  ChevronRight,
  Building2,
  Globe,
  Star,
} from "lucide-react";
import type { Client, CaseStudy } from "../../../../sanity/lib/types";
import { resolveImageUrl } from "../../../../sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { portableTextComponents } from "../../../../sanity/lib/portable-text";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { sectorIconMap } from "@/lib/sectorIcons";

interface ClientProfileContentProps {
  client: Client;
  caseStudies: CaseStudy[];
}

export function ClientProfileContent({ client, caseStudies }: ClientProfileContentProps) {
  const SectorIcon = sectorIconMap[client.sectorIcon] || Building2;
  const testimonial = client.testimonial;
  const carouselStat = client.carouselStat;

  return (
    <main className="min-h-screen bg-white font-[var(--font-body)]">

      {/* ═══════════════════════════════════════════════════════════
          SECTION 1 — HERO (dark, premium, like homepage)
      ═══════════════════════════════════════════════════════════ */}
      <section
        className="dark-section relative pt-20 sm:pt-24 md:pt-28 lg:pt-36 pb-0 overflow-hidden grain-overlay"
        style={{ background: "var(--bg-dark)" }}
      >
        {/* Animated radial gradients */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div
            className="absolute w-[80%] h-[60%] top-[10%] left-[-20%] animate-gradient-float-1"
            style={{
              background:
                "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.12) 0%, transparent 55%)",
            }}
          />
          <div
            className="absolute w-[70%] h-[50%] top-[-10%] right-[-10%] animate-gradient-float-2"
            style={{
              background:
                "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.08) 0%, transparent 55%)",
            }}
          />
          <div
            className="absolute w-[60%] h-[70%] bottom-[-15%] left-[15%] animate-gradient-float-3"
            style={{
              background:
                "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.06) 0%, transparent 55%)",
            }}
          />
        </div>

        <div className="max-w-[82.5rem] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center gap-2 text-sm text-white/60">
              <Link href="/cas-clients" className="hover:text-white transition-colors font-medium">
                Cas clients
              </Link>
              <ChevronRight size={14} />
              <span className="text-white/80">{client.name}</span>
            </div>
          </motion.div>

          {/* Two columns: H1 left | description + CTAs right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-10 md:mb-14">
            {/* LEFT — Badge + H1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
            >
              {/* Glassmorphism sector badge with ping */}
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-50" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-br from-[var(--color-accent)] via-[var(--color-accent)]/80 to-[var(--color-accent)]/50 shadow-[0_0_8px_rgba(var(--color-accent-rgb),0.5)]" />
                </span>
                <span className="text-[9px] sm:text-[10px] font-medium tracking-[0.08em] uppercase text-white/90">
                  {client.sector}
                </span>
              </div>

              {/* H1 with gradient text — problématique */}
              <h1
                className="font-heading font-normal text-[22px] min-[400px]:text-[26px] sm:text-[30px] md:text-[36px] lg:text-[42px] leading-[1.15] tracking-[-0.02em]"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.92) 50%, rgba(255,255,255,0.88) 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                {client.headline || client.name}
              </h1>
            </motion.div>

            {/* RIGHT — Logo + Description + CTAs + meta */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1], delay: 0.15 }}
              className="flex flex-col justify-end"
            >
              {/* Logo glassmorphism */}
              {client.logo && (
                <div className="w-14 h-14 bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center overflow-hidden mb-5">
                  <Image
                    src={resolveImageUrl(client.logo)}
                    alt={client.name}
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain"
                  />
                </div>
              )}

              <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-6 max-w-lg">
                {client.description}
              </p>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <a href="#etudes-de-cas" className="btn btn-primary group">
                  Découvrir les projets
                  <ArrowUpRightIcon className="shrink-0 inline-block group-hover:translate-x-0.5 transition-transform" size={16} />
                </a>
                {client.website && (
                  <a
                    href={client.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary group"
                  >
                    Voir le site web
                    <Globe size={16} className="shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                )}
              </div>

            </motion.div>
          </div>

          {/* Full-width image with accent frames + testimonial overlay */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.3 }}
            className="relative w-full aspect-[16/7] sm:aspect-[16/6] overflow-visible mb-8 sm:mb-12"
          >
            {/* Accent border frames (like homepage hero) */}
            <div className="absolute -inset-2 sm:-inset-3 border border-accent/20 pointer-events-none hidden lg:block z-10" />
            <div className="absolute -inset-4 sm:-inset-6 border border-accent/10 pointer-events-none hidden lg:block z-10" />

            {/* Corner accents */}
            <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-accent pointer-events-none hidden lg:block z-10" />
            <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-accent pointer-events-none hidden lg:block z-10" />

            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={resolveImageUrl(client.mainImage, 1600)}
                alt={client.name}
                width={1600}
                height={700}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            {/* Glassmorphism testimonial card overlay (bottom-left, like homepage) */}
            {testimonial && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 z-20 bg-black/40 backdrop-blur-xl border border-white/10 px-5 py-4 sm:px-6 sm:py-5 shadow-2xl max-w-[90%] sm:max-w-md lg:max-w-lg"
              >
                {/* Stars */}
                <div className="flex items-center gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="var(--color-accent)" aria-hidden="true">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[12px] sm:text-[13px] leading-relaxed text-white mb-3 line-clamp-3">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author with photo */}
                <div className="flex items-center gap-3">
                  {testimonial.photo ? (
                    <Image
                      src={resolveImageUrl(testimonial.photo)}
                      alt={testimonial.author}
                      width={36}
                      height={36}
                      className="w-9 h-9 object-cover border-2 border-accent/40 shrink-0 rounded-full"
                    />
                  ) : (
                    <div className="w-9 h-9 bg-white/10 border-2 border-accent/40 shrink-0 rounded-full flex items-center justify-center">
                      <span className="text-white/80 text-[11px] font-bold">{testimonial.author.charAt(0)}</span>
                    </div>
                  )}
                  <div>
                    <span className="text-white text-[11px] sm:text-[12px] font-semibold block">{testimonial.author}</span>
                    <span className="text-white/50 text-[10px] sm:text-[11px]">{testimonial.role}, {client.name}</span>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3 — À PROPOS DE NOTRE COLLABORATION (light accent bg)
          Body content (Portable Text)
      ═══════════════════════════════════════════════════════════ */}
      <section
        className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12"
        style={{ background: "rgba(var(--color-accent-rgb), 0.05)" }}
      >
        <div className="max-w-[82.5rem] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* LEFT — Sticky: title + image with glassmorphism info cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:sticky lg:top-24 lg:self-start"
            >
              <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
                <div className="w-2 h-2 bg-accent" />
                <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-muted uppercase">
                  Le client
                </span>
              </div>
              <h2 className="font-heading font-normal text-[28px] sm:text-[36px] md:text-[44px] leading-[1.05] tracking-[-0.02em] text-primary mb-8">
                À propos de {client.name}
              </h2>

              {/* Image with glassmorphism info cards overlay */}
              <div className="relative">
                {client.secondaryImage && (
                  <div className="relative w-full aspect-square overflow-hidden">
                    <Image
                      src={resolveImageUrl(client.secondaryImage, 800)}
                      alt={`Vizion × ${client.name}`}
                      width={800}
                      height={1067}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Glassmorphism info cards overlay */}
                <div className="absolute inset-x-3 sm:inset-x-4 bottom-3 sm:bottom-4 z-10 grid grid-cols-2 gap-2 sm:gap-3">
                  <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-3 sm:p-4">
                    <span className="text-[9px] sm:text-[10px] font-medium tracking-wider text-white/60 uppercase block mb-1">Secteur</span>
                    <span className="font-heading text-sm sm:text-base font-normal tracking-tight text-white">{client.sector}</span>
                  </div>
                  <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-3 sm:p-4">
                    <span className="text-[9px] sm:text-[10px] font-medium tracking-wider text-white/60 uppercase block mb-1">{carouselStat.label}</span>
                    <span className="font-heading text-sm sm:text-base font-normal tracking-tight text-white">{carouselStat.value}</span>
                  </div>
                  {client.location && (
                    <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-3 sm:p-4">
                      <span className="text-[9px] sm:text-[10px] font-medium tracking-wider text-white/60 uppercase block mb-1">Localisation</span>
                      <span className="font-heading text-sm sm:text-base font-normal tracking-tight text-white">{client.location}</span>
                    </div>
                  )}
                  {client.size && (
                    <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-3 sm:p-4">
                      <span className="text-[9px] sm:text-[10px] font-medium tracking-wider text-white/60 uppercase block mb-1">Taille</span>
                      <span className="font-heading text-sm sm:text-base font-normal tracking-tight text-white">{client.size}</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

            {/* RIGHT — Body content (Portable Text) */}
            {client.body && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="prose prose-lg max-w-none text-secondary"
              >
                <PortableText value={client.body} components={portableTextComponents} />
              </motion.div>
            )}
          </div>
        </div>
      </section>



      {/* ═══════════════════════════════════════════════════════════
          SECTION 5 — CASE STUDIES COLLECTION (bg-card)
      ═══════════════════════════════════════════════════════════ */}
      {caseStudies.length > 0 && (
        <section id="etudes-de-cas" className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12 bg-white scroll-mt-20">
          <div className="max-w-[82.5rem] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-2 h-2 bg-accent" />
                <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-muted uppercase">
                  Études de cas
                </span>
              </div>
              <h2 className="font-heading font-normal text-[28px] sm:text-[36px] md:text-[44px] leading-[1.05] tracking-[-0.02em] text-primary">
                Nos missions avec {client.name}
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {caseStudies.map((cs) => {
                const CsSectorIcon = sectorIconMap[cs.sectorIcon] || Building2;
                return (
                  <motion.div key={cs.slug} variants={fadeInUp}>
                    <Link
                      href={cs.url || `/cas-clients/${cs.clientSlug}/${cs.slug}`}
                      className="block bg-white border border-black/[0.06] overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full"
                    >
                      {/* Hero image or placeholder */}
                      <div className="relative w-full aspect-[16/9] overflow-hidden bg-card">
                        {cs.heroImage ? (
                          <Image
                            src={resolveImageUrl(cs.heroImage, 600)}
                            alt={cs.title}
                            width={600}
                            height={338}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <CsSectorIcon size={40} className="text-muted/30" />
                          </div>
                        )}
                      </div>

                      <div className="p-6 pb-0">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-card flex items-center justify-center">
                              <CsSectorIcon size={16} className="text-primary" />
                            </div>
                            <span className="text-[10px] font-bold tracking-widest text-muted uppercase">
                              {cs.sector}
                            </span>
                          </div>
                          {cs.featured && (
                            <Star size={14} className="fill-[var(--color-accent)] text-accent" />
                          )}
                        </div>

                        <h3 className="font-heading font-medium text-lg tracking-tight text-primary mb-3 group-hover:text-secondary transition-colors line-clamp-2 min-h-[56px]">
                          {cs.title}
                        </h3>

                        <p className="text-secondary text-sm leading-relaxed mb-4 line-clamp-2 min-h-[44px]">
                          {cs.description}
                        </p>
                      </div>

                      {cs.metrics && cs.metrics.length > 0 && (
                        <div className="px-6 py-4 bg-card border-t border-black/[0.06]">
                          <div className="grid grid-cols-3 gap-3">
                            {cs.metrics.slice(0, 3).map((metric, mIdx) => (
                              <div key={mIdx} className="text-center">
                                <span className="text-lg font-black text-primary block leading-tight">
                                  {metric.value}
                                </span>
                                <span className="text-[9px] font-medium text-muted leading-tight block">
                                  {metric.label}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="px-6 py-4 flex items-center justify-between border-t border-black/[0.06]">
                        <span className="text-[10px] font-medium text-muted">
                          {cs.projectDuration} &bull; {cs.projectYear}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold tracking-wider text-primary group-hover:gap-2 transition-all">
                          Lire <ChevronRight size={14} />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════
          SECTION 6 — CTA FINAL (dark background)
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 md:px-12 bg-white">
        <div className="max-w-[82.5rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 md:p-16 text-center relative overflow-hidden grain-overlay dark-section"
            style={{ background: "var(--bg-dark)" }}
          >
            <div className="absolute inset-0 pointer-events-none z-0">
              <div
                className="absolute w-[80%] h-[60%] top-[10%] left-[-20%] animate-gradient-float-1"
                style={{
                  background:
                    "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.12) 0%, transparent 55%)",
                }}
              />
              <div
                className="absolute w-[70%] h-[50%] top-[-10%] right-[-10%] animate-gradient-float-2"
                style={{
                  background:
                    "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.08) 0%, transparent 55%)",
                }}
              />
            </div>

            <div className="relative z-10">
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-[11px] font-bold tracking-widest text-white mb-6">
                Vous avez un projet similaire ?
              </span>

              <h2 className="font-heading font-normal text-[32px] md:text-[48px] leading-[1.1] tracking-tight mb-6 text-white">
                Écrivons ensemble votre <span className="text-white/50">success story</span>
              </h2>

              <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                Chaque entreprise est unique. Prenons le temps d&apos;échanger sur vos défis et de définir ensemble la meilleure approche.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn btn-primary group">
                  Prendre rendez-vous
                  <ArrowUpRightIcon className="shrink-0 inline-block group-hover:translate-x-0.5 transition-transform" size={16} />
                </Link>
                <Link href="/cas-clients" className="btn btn-secondary group">
                  Voir tous les cas clients
                  <ArrowUpRightIcon className="shrink-0 inline-block group-hover:translate-x-0.5 transition-transform" size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
