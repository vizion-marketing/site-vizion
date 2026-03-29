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
  Linkedin,
} from "lucide-react";
import type { Client, CaseStudy } from "../../../../sanity/lib/types";
import { resolveImageUrl } from "../../../../sanity/lib/image";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { sectorIconMap } from "@/lib/sectorIcons";
import { DeliverablesGallery } from "@/components/sections/DeliverablesGallery";

interface ClientProfileContentProps {
  client: Client;
  caseStudies: CaseStudy[];
}

export function ClientProfileContent({ client, caseStudies }: ClientProfileContentProps) {
  const SectorIcon = sectorIconMap[client.sectorIcon] || Building2;
  const testimonial = client.testimonial;

  return (
    <main className="min-h-screen bg-white font-[var(--font-body)]">

      {/* ═══════════════════════════════════════════════════════════
          SECTION 1 - HERO (full-screen background image)
      ═══════════════════════════════════════════════════════════ */}
      <section className="dark-section relative min-h-[85vh] flex flex-col justify-end overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={resolveImageUrl(client.mainImage, 1920)}
            alt={`${client.name}, ${client.companyType} ${client.sector}`}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        </div>

        {/* Grain overlay */}
        <div className="absolute inset-0 grain-overlay pointer-events-none z-[1]" />

        {/* Content */}
        <div className="max-w-[82.5rem] mx-auto px-4 sm:px-6 md:px-12 relative z-10 w-full pb-12 sm:pb-16 md:pb-20 pt-32 sm:pt-36">
          {/* Breadcrumb */}
          <motion.nav
            aria-label="Fil d'Ariane"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 sm:mb-12"
          >
            <div className="flex items-center gap-2 text-sm text-white/60">
              <Link href="/cas-clients" className="hover:text-white transition-colors font-medium">
                Cas clients
              </Link>
              <ChevronRight size={14} />
              <span className="text-white/80">{client.name}</span>
            </div>
          </motion.nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* LEFT - Badge + H1 + description + CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
              className="lg:col-span-7"
            >
              {/* Badges : type + secteur */}
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/15 text-[10px] font-medium tracking-[0.08em] uppercase text-white/90">
                  {client.companyType}
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 backdrop-blur-md border border-white/10 text-[10px] font-medium tracking-[0.08em] uppercase text-white/70">
                  <SectorIcon size={12} />
                  {client.sector}
                </span>
              </div>

              {/* Logo + Client name as surtitre */}
              <div className="flex items-center gap-3 mb-3">
                {client.logo && (
                  <Image
                    src={resolveImageUrl(client.logo)}
                    alt={`Logo ${client.name}`}
                    width={120}
                    height={40}
                    className="h-8 sm:h-9 w-auto object-contain"
                  />
                )}
                <span className="text-white/60 text-sm sm:text-base font-medium tracking-wide uppercase">
                  {client.name}
                </span>
              </div>

              {/* H1 = Problematique */}
              <h1
                className="font-heading font-normal leading-[1.08] tracking-[-0.03em] text-white mb-6 max-w-2xl"
                style={{ fontSize: "clamp(26px, 4.5vw, 52px)" }}
              >
                {client.headline}
              </h1>

              <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl">
                {client.description}
              </p>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <a href="#etudes-de-cas" className="btn btn-primary group">
                  Decouvrir les projets
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

              {/* Client metadata chips */}
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {client.location && (
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 px-3 py-2 sm:px-4 sm:py-3">
                    <span className="text-[9px] sm:text-[10px] font-medium tracking-wider text-white/50 uppercase block mb-0.5">Localisation</span>
                    <span className="font-heading text-sm font-normal tracking-tight text-white">{client.location}</span>
                  </div>
                )}
                {client.size && (
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 px-3 py-2 sm:px-4 sm:py-3">
                    <span className="text-[9px] sm:text-[10px] font-medium tracking-wider text-white/50 uppercase block mb-0.5">Taille</span>
                    <span className="font-heading text-sm font-normal tracking-tight text-white">{client.size}</span>
                  </div>
                )}
              </div>
            </motion.div>

            {/* RIGHT - Testimonial card */}
            {testimonial && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
                className="lg:col-span-5 flex items-end"
              >
                <div className="w-full bg-black/40 backdrop-blur-xl border border-white/10 p-6 sm:p-8 shadow-2xl">
                  {/* Stars */}
                  <div className="flex items-center gap-0.5 mb-4">
                    {[...Array(testimonial.rating || 5)].map((_, i) => (
                      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="var(--color-accent)" aria-hidden="true">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-[14px] sm:text-[15px] leading-relaxed text-white/90 mb-6">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    {testimonial.photo ? (
                      <Image
                        src={resolveImageUrl(testimonial.photo)}
                        alt={`${testimonial.author}, ${testimonial.role || client.name}`}
                        width={44}
                        height={44}
                        className="w-11 h-11 object-cover border-2 border-accent/40 shrink-0 rounded-full"
                      />
                    ) : (
                      <div className="w-11 h-11 bg-white/10 border-2 border-accent/40 shrink-0 rounded-full flex items-center justify-center">
                        <span className="text-white/80 text-sm font-bold">{testimonial.author.charAt(0)}</span>
                      </div>
                    )}
                    <div className="flex-1">
                      <span className="text-white text-[13px] font-semibold block">{testimonial.author}</span>
                      <span className="text-white/50 text-[11px] sm:text-[12px]">{testimonial.role}, {client.name}</span>
                    </div>
                    {testimonial.linkedinUrl && (
                      <a
                        href={testimonial.linkedinUrl}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="w-9 h-9 bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors shrink-0"
                        aria-label={`Profil LinkedIn de ${testimonial.author}`}
                      >
                        <Linkedin size={16} className="text-white" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2 - BANDE CHIFFRES CLES
      ═══════════════════════════════════════════════════════════ */}
      {client.highlightMetrics && client.highlightMetrics.length > 0 && (
        <section className="py-10 sm:py-12 md:py-14 px-4 sm:px-6 md:px-12 bg-card border-b border-black/[0.06]">
          <div className="max-w-[82.5rem] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row md:items-center gap-6 md:gap-0"
            >
              <div className="md:pr-8 md:border-r md:border-black/[0.08] shrink-0">
                <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-muted uppercase">
                  Notre accompagnement en chiffres
                </span>
              </div>
              <div className="flex-1 grid grid-cols-3 gap-6 md:gap-8 md:pl-8">
                {client.highlightMetrics.slice(0, 3).map((metric, idx) => (
                  <div key={idx} className="text-center md:text-left">
                    <span className="text-2xl sm:text-3xl md:text-4xl font-black text-primary block leading-tight">
                      {metric.value}
                    </span>
                    <span className="text-[11px] sm:text-[12px] font-medium text-muted">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3 - GALERIE DE LIVRABLES
      ═══════════════════════════════════════════════════════════ */}
      {client.galleryImages && client.galleryImages.length > 0 && (
        <DeliverablesGallery
          images={client.galleryImages}
          clientName={client.name}
        />
      )}

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4 - CASE STUDIES COLLECTION
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
                  Etudes de cas
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
                            alt={`${cs.title}, etude de cas ${client.name}`}
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
          SECTION 5 - CTA FINAL (dark background)
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
                Ecrivons ensemble votre <span className="text-white/50">success story</span>
              </h2>

              <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                Chaque entreprise est unique. Prenons le temps d&apos;echanger sur vos defis et de definir ensemble la meilleure approche.
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
