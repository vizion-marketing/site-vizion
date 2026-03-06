"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "@/components/icons";
import {
  ArrowLeft,
  Quote,
  ChevronRight,
  Building2,
  MapPin,
  Users,
  Globe,
  TrendingUp,
  TrendingDown,
  Minus,
  Star,
} from "lucide-react";
import type { Client, CaseStudy } from "../../../../sanity/lib/types";
import { resolveImageUrl } from "../../../../sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { portableTextComponents } from "../../../../sanity/lib/portable-text";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { sectorIconMap } from "@/lib/sectorIcons";

function TrendIcon({ trend }: { trend: string }) {
  switch (trend) {
    case "up":
      return <TrendingUp size={16} className="text-emerald-500" />;
    case "down":
      return <TrendingDown size={16} className="text-emerald-500" />;
    default:
      return <Minus size={16} className="text-neutral-400" />;
  }
}

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

      {/* HERO SECTION */}
      <section
        className="relative pt-[120px] pb-[60px] md:pt-[140px] md:pb-[80px] px-6 md:px-12 overflow-hidden grain-overlay dark-section"
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

        <div className="max-w-[82.5rem] mx-auto relative z-10">
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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              className="lg:col-span-8"
            >
              {/* Sector badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <SectorIcon size={14} className="text-white" />
                <span className="text-[11px] font-bold tracking-widest text-white">
                  {client.sector}
                </span>
              </div>

              {/* Client name */}
              <div className="flex items-center gap-4 mb-6">
                {client.logo && (
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center overflow-hidden shrink-0">
                    <Image
                      src={resolveImageUrl(client.logo)}
                      alt={client.name}
                      width={48}
                      height={48}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                )}
                <h1 className="font-heading font-normal text-[32px] md:text-[48px] lg:text-[56px] leading-[1.05] tracking-tight text-white">
                  {client.name}
                </h1>
              </div>

              {/* Description */}
              <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-3xl mb-8">
                {client.description}
              </p>

              {/* Meta info */}
              <div className="flex flex-wrap items-center gap-6 text-white/60">
                {client.location && (
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span className="text-sm font-medium">{client.location}</span>
                  </div>
                )}
                {client.size && (
                  <div className="flex items-center gap-2">
                    <Users size={16} />
                    <span className="text-sm font-medium">{client.size}</span>
                  </div>
                )}
                {client.website && (
                  <a
                    href={client.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <Globe size={16} />
                    <span className="text-sm font-medium">Site web</span>
                  </a>
                )}
              </div>
            </motion.div>

            {/* Right — Stat + case count */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
              className="lg:col-span-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-md p-5 border border-white/20 text-center">
                  <span className="text-3xl md:text-4xl font-black text-white block mb-1">
                    {carouselStat.value}
                  </span>
                  <span className="text-[10px] font-medium text-white/60 tracking-wider">
                    {carouselStat.label}
                  </span>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-5 border border-white/20 text-center">
                  <span className="text-3xl md:text-4xl font-black text-white block mb-1">
                    {caseStudies.length}
                  </span>
                  <span className="text-[10px] font-medium text-white/60 tracking-wider">
                    {caseStudies.length > 1 ? "cas clients" : "cas client"}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      {testimonial && (
        <section className="py-16 md:py-20 px-6 md:px-12 bg-card">
          <div className="max-w-[82.5rem] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 border border-black/[0.06] relative overflow-hidden"
            >
              <Quote className="absolute top-8 right-8 w-24 h-24 text-neutral-100 -rotate-12 pointer-events-none" />

              <div className="relative z-10 max-w-4xl">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-black text-black" />
                  ))}
                </div>

                <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium text-primary leading-relaxed mb-8 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-4">
                  {testimonial.photo ? (
                    <div className="w-14 h-14 overflow-hidden shrink-0">
                      <Image
                        src={resolveImageUrl(testimonial.photo)}
                        alt={testimonial.author}
                        width={56}
                        height={56}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-14 h-14 bg-card flex items-center justify-center shrink-0">
                      <Building2 size={20} className="text-muted" />
                    </div>
                  )}
                  <div>
                    <span className="font-heading text-lg font-medium text-primary block">
                      {testimonial.author}
                    </span>
                    <span className="text-sm text-secondary">
                      {testimonial.role}, {client.name}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* PORTABLE TEXT CONTENT — Client description */}
      {client.body && client.body.length > 0 && (
        <section className="py-16 md:py-20 px-6 md:px-12 bg-white">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <PortableText value={client.body} components={portableTextComponents} />
          </div>
        </section>
      )}

      {/* CASE STUDIES GRID */}
      {caseStudies.length > 0 && (
        <section className="py-16 md:py-24 px-6 md:px-12 bg-card">
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
              <h2 className="font-heading font-normal text-[28px] md:text-[40px] leading-[1.1] tracking-tight text-primary">
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
                      {/* Card Header */}
                      <div className="p-6 pb-0">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-card flex items-center justify-center">
                              <CsSectorIcon size={16} className="text-primary" />
                            </div>
                            <span className="text-[10px] font-bold tracking-widest text-muted">
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

                      {/* Metrics */}
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

                      {/* Footer */}
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

      {/* CTA SECTION */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-white">
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
                <Link
                  href="/contact"
                  className="h-[56px] px-8 text-[15px] font-bold flex items-center justify-center gap-2 bg-white text-black hover:bg-white/90 transition-all"
                >
                  Prendre rendez-vous <ArrowUpRightIcon size={16} />
                </Link>
                <Link
                  href="/cas-clients"
                  className="h-[56px] px-8 text-[15px] font-bold flex items-center justify-center border-2 border-white/20 text-white hover:bg-white/10 transition-all"
                >
                  Voir tous les cas clients
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
