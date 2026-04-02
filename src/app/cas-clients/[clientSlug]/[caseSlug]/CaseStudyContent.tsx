"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "@/components/icons";
import {
  CheckCircle2,
  Quote,
  Clock,
  Calendar,
  TrendingUp,
  TrendingDown,
  Minus,
  ChevronRight,
  BookOpen,
  Target,
  Zap,
  FileText,
  BarChart3,
  Settings,
  GraduationCap,
  Palette,
  Globe,
  User,
  PenTool,
  Database,
  ShoppingCart,
  MapPin,
  Star,
  Building2,
  Handshake,
  Rocket
} from "lucide-react";
import type { CaseStudy } from "../../../../../sanity/lib/types";
import type { RelatedService } from "@/lib/sanity/services";
import { resolveImageUrl } from "../../../../../sanity/lib/image";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { sectorIconMap } from "@/lib/sectorIcons";

// Icon mapping
const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  BookOpen, Target, Zap, FileText, BarChart3, Settings, GraduationCap, Palette,
  Globe, User, PenTool, Database, ShoppingCart, MapPin, Star, Building2, Handshake, Rocket, TrendingUp
};

// Get trend icon
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

interface CaseStudyContentProps {
  caseStudy: CaseStudy;
  relatedCases: CaseStudy[];
  relatedServices?: RelatedService[];
  clientSlug: string;
  clientName?: string;
  clientHeadline?: string;
  clientDescription?: string;
}

export function CaseStudyContent({ caseStudy, relatedCases, relatedServices, clientSlug, clientName, clientHeadline, clientDescription }: CaseStudyContentProps) {
  const readingTime = "1 min de lecture";

  // Get sector icon
  const SectorIcon = sectorIconMap[caseStudy.sectorIcon] || Building2;

  return (
    <main className="min-h-screen bg-white font-[var(--font-body)]">

      {/* HERO SECTION */}
      <section className="relative min-h-[72vh] flex flex-col justify-end pt-[120px] pb-[60px] md:pt-[140px] md:pb-[80px] px-6 md:px-12 overflow-hidden grain-overlay dark-section" style={{ background: "var(--bg-dark)" }}>
        {/* Background : image hero si disponible, sinon blobs animés */}
        {caseStudy.heroImage ? (
          <div className="absolute inset-0 z-0">
            <Image
              src={resolveImageUrl(caseStudy.heroImage, 1920)}
              alt={caseStudy.title}
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/25" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
          </div>
        ) : (
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
            <div
              className="absolute w-[50%] h-[50%] bottom-[5%] right-[-15%] animate-gradient-float-4"
              style={{
                background:
                  "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.05) 0%, transparent 55%)",
              }}
            />
            <div
              className="absolute w-[45%] h-[45%] top-[20%] left-[-10%] animate-gradient-float-5"
              style={{
                background:
                  "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.06) 0%, transparent 55%)",
              }}
            />
          </div>
        )}

        <div className="max-w-[82.5rem] mx-auto relative z-10">
          {/* Breadcrumb */}
          <motion.nav
            aria-label="Fil d'Ariane"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center gap-2 text-sm text-white/60">
              <Link
                href="/cas-clients"
                className="hover:text-white transition-colors font-medium"
              >
                Cas clients
              </Link>
              {clientName && (
                <>
                  <ChevronRight size={14} />
                  <Link
                    href={`/cas-clients/${clientSlug}`}
                    className="hover:text-white transition-colors font-medium"
                  >
                    {clientName}
                  </Link>
                </>
              )}
            </div>
          </motion.nav>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            >
              {/* Sector badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-none border border-white/20 mb-6">
                <SectorIcon size={14} className="text-white" />
                <span className="text-[11px] font-bold tracking-widest text-white">
                  {caseStudy.sector}
                </span>
              </div>

              {/* Title */}
              <h1 className="font-heading font-normal text-[32px] md:text-[48px] lg:text-[56px] leading-[1.05] tracking-tight !text-white mb-6">
                {caseStudy.title}
              </h1>

              {/* Description */}
              <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-3xl mb-8">
                {caseStudy.description}
              </p>

              {/* Meta info */}
              <div className="flex flex-wrap items-center gap-6 text-white/60">
                <div className="flex items-center gap-2">
                  <Building2 size={16} />
                  <span className="text-sm font-medium">{caseStudy.company}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span className="text-sm font-medium">{caseStudy.projectDuration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span className="text-sm font-medium">{caseStudy.projectYear}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText size={16} />
                  <span className="text-sm font-medium">{readingTime}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-white">
        <div className="max-w-[82.5rem] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

            {/* LEFT COLUMN — Client summary */}
            <aside className="lg:col-span-4 order-2 lg:order-1">
              <div className="lg:sticky lg:top-32 space-y-6">

                {/* Client Card */}
                <motion.div
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                  className="bg-card border border-black/[0.06] p-8"
                >
                  {/* Type / Sector badge */}
                  <div className="flex items-center gap-2 mb-5">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black">
                      <SectorIcon size={11} className="text-white" />
                      <span className="text-[10px] font-bold tracking-widest text-white uppercase">{caseStudy.sector}</span>
                    </div>
                    {caseStudy.companyType && (
                      <span className="text-[10px] font-medium tracking-wider text-neutral-400 uppercase">{caseStudy.companyType}</span>
                    )}
                  </div>

                  {/* Client name */}
                  <h3 className="font-heading font-normal text-2xl tracking-tight text-black mb-5">
                    {clientName || caseStudy.company}
                  </h3>

                  {/* Headline with accent border */}
                  {clientHeadline && (
                    <p className="border-l-2 border-accent pl-4 text-base leading-relaxed text-neutral-700 mb-5">
                      {clientHeadline}
                    </p>
                  )}

                  {/* Description */}
                  {clientDescription && (
                    <p className="text-sm text-neutral-500 leading-relaxed">
                      {clientDescription}
                    </p>
                  )}

                  {/* Mission meta */}
                  <div className="border-t border-black/[0.06] mt-6 pt-6 grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase block mb-1">Durée</span>
                      <div className="flex items-center gap-1.5">
                        <Clock size={13} className="text-neutral-400" />
                        <span className="text-sm font-medium text-black">{caseStudy.projectDuration}</span>
                      </div>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase block mb-1">Année</span>
                      <div className="flex items-center gap-1.5">
                        <Calendar size={13} className="text-neutral-400" />
                        <span className="text-sm font-medium text-black">{caseStudy.projectYear}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Related Services */}
                {relatedServices && relatedServices.length > 0 && (
                  <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    className="bg-white border border-black/[0.06] p-6"
                  >
                    <h4 className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase mb-4">
                      Services associés
                    </h4>
                    <ul className="space-y-2">
                      {relatedServices.map((service) => (
                        <li key={service._id}>
                          <Link
                            href={service.url}
                            className="flex items-center gap-3 text-sm text-neutral-600 hover:text-black transition-colors group"
                          >
                            <div className="w-7 h-7 bg-card flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors">
                              <ChevronRight size={12} className="text-black" />
                            </div>
                            <span className="font-medium">{service.title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>
            </aside>

            {/* RIGHT COLUMN — Narrative content */}
            <div className="lg:col-span-8 order-1 lg:order-2 space-y-16">

              {/* 1. Contexte */}
              {caseStudy.context && (
                <motion.div
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                >
                  <span className="text-[10px] font-bold tracking-[0.4em] text-neutral-400 uppercase block mb-3">
                    Contexte
                  </span>
                  <p className="text-neutral-700 text-lg leading-relaxed">
                    {caseStudy.context}
                  </p>
                </motion.div>
              )}

              {/* 2. Enjeux clés */}
              {caseStudy.challenges && caseStudy.challenges.length > 0 && (
                <motion.div
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                >
                  <span className="text-[10px] font-bold tracking-[0.4em] text-neutral-400 uppercase block mb-3">
                    Enjeux
                  </span>
                  <h2 className="font-heading font-normal text-2xl md:text-3xl tracking-tight text-black mb-8">
                    Les enjeux de la mission
                  </h2>
                  <div className="space-y-3">
                    {caseStudy.challenges.map((challenge, idx) => (
                      <div key={idx} className="flex gap-5 items-start border-b border-black/[0.06] pb-5">
                        <span className="text-[40px] font-black text-black/[0.06] leading-none shrink-0 select-none">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <p className="text-neutral-700 text-base leading-relaxed pt-2">{challenge}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* 3. Ce qu'on a mis en place */}
              {caseStudy.approachPhases && caseStudy.approachPhases.length > 0 && (
                <motion.div
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                >
                  <span className="text-[10px] font-bold tracking-[0.4em] text-neutral-400 uppercase block mb-3">
                    Notre approche
                  </span>
                  <h2 className="font-heading font-normal text-2xl md:text-3xl tracking-tight text-black mb-10">
                    Ce qu&apos;on a mis en place
                  </h2>

                  <div className="space-y-6">
                    {caseStudy.approachPhases.map((phase, idx) => (
                      <motion.div
                        key={idx}
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        className="bg-card border border-black/[0.06] p-6 md:p-8"
                      >
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-9 h-9 bg-black flex items-center justify-center shrink-0">
                            <span className="text-[11px] font-black text-white">{String(idx + 1).padStart(2, "0")}</span>
                          </div>
                          <div>
                            {phase.phase && (
                              <span className="text-[10px] font-bold tracking-[0.3em] text-neutral-400 uppercase block mb-1">
                                Phase {phase.phase}
                              </span>
                            )}
                            <h3 className="font-heading font-normal text-xl tracking-tight text-black">
                              {phase.title}
                            </h3>
                          </div>
                        </div>
                        <p className="text-neutral-600 text-base leading-relaxed mb-5">
                          {phase.description}
                        </p>

                        {phase.deliverables && phase.deliverables.length > 0 && (
                          <div className="border-t border-black/[0.06] pt-5 ml-0">
                            <span className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase block mb-3">
                              Livrables
                            </span>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {phase.deliverables.map((deliverable, dIdx) => (
                                <li key={dIdx} className="flex items-start gap-2 text-sm text-neutral-600">
                                  <CheckCircle2 size={14} className="text-black shrink-0 mt-0.5" />
                                  <span>{deliverable}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>

                  {/* Gallery photos */}
                  {caseStudy.galleryImages && caseStudy.galleryImages.length > 0 && (
                    <div className="mt-8">
                      <span className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase block mb-4">
                        Visuels des livrables
                      </span>
                      <div className="grid grid-cols-2 gap-3">
                        {caseStudy.galleryImages.map((img, idx) => (
                          <motion.div
                            key={img._key}
                            variants={fadeInUp}
                            initial="initial"
                            whileInView="whileInView"
                            viewport={{ once: true }}
                            className={`relative overflow-hidden bg-card ${idx === 0 && caseStudy.galleryImages!.length % 2 !== 0 ? "col-span-2" : ""}`}
                          >
                            <div className="relative aspect-[16/10]">
                              <Image
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                src={resolveImageUrl(img as any, 900)}
                                alt={img.title || img.caption || `Livrable ${idx + 1}`}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                              />
                            </div>
                            {(img.title || img.caption) && (
                              <div className="px-3 py-2 bg-card border-t border-black/[0.06]">
                                <p className="text-[11px] text-neutral-500 font-medium">{img.title || img.caption}</p>
                              </div>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Project Links */}
                  {caseStudy.projectLinks && caseStudy.projectLinks.length > 0 && (
                    <div className="mt-8 p-6 bg-black dark-section">
                      <span className="text-[10px] font-bold tracking-widest text-white/60 uppercase block mb-4">
                        Liens du projet
                      </span>
                      <div className="flex flex-wrap gap-3">
                        {caseStudy.projectLinks.map((link, idx) => {
                          const IconComponent = iconMap[link.icon || ""] || Globe;
                          return (
                            <a
                              key={idx}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-accent hover:text-black border border-white/20 hover:border-accent text-white text-sm font-medium transition-all duration-200 group"
                            >
                              <IconComponent size={14} />
                              <span>{link.label}</span>
                              <ArrowUpRightIcon size={12} className="opacity-60 group-hover:opacity-100" />
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </motion.div>
              )}

              {/* 4. Résultats */}
              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
              >
                <span className="text-[10px] font-bold tracking-[0.4em] text-neutral-400 uppercase block mb-3">
                  Résultats
                </span>
                <h2 className="font-heading font-normal text-2xl md:text-3xl tracking-tight text-black mb-8">
                  Les résultats obtenus
                </h2>

                {caseStudy.resultsDescription && (
                  <p className="text-neutral-700 text-base md:text-lg leading-relaxed mb-10 border-l-2 border-accent pl-5">
                    {caseStudy.resultsDescription}
                  </p>
                )}

                {caseStudy.metrics && caseStudy.metrics.length > 0 && (
                  <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-3 gap-px bg-black/[0.06]"
                  >
                    {caseStudy.metrics.map((metric, idx) => (
                      <motion.div
                        key={idx}
                        variants={fadeInUp}
                        className="bg-white p-6 md:p-8"
                      >
                        <div className="flex items-start gap-2 mb-2">
                          <span className="font-heading font-normal text-[42px] md:text-[52px] leading-none tracking-tighter text-black">
                            {metric.value}
                          </span>
                          <TrendIcon trend={metric.trend || "neutral"} />
                        </div>
                        <p className="text-sm text-neutral-500 leading-snug font-medium">{metric.label}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </motion.div>

            </div>
          </div>
        </div>
      </section>


      {/* TESTIMONIAL SECTION */}
      {caseStudy.testimonial && (
        <section className="py-16 md:py-24 px-6 md:px-12 bg-grey">
          <div className="max-w-[82.5rem] mx-auto">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="bg-white rounded-none p-8 md:p-12 lg:p-16 shadow-xl relative overflow-hidden"
            >
              <Quote className="absolute top-8 right-8 w-24 h-24 text-neutral-100 -rotate-12 pointer-events-none" />

              <div className="relative z-10 max-w-4xl">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-black text-black" />
                  ))}
                </div>

                <blockquote className="font-[var(--font-body)] text-xl md:text-2xl lg:text-3xl font-medium text-black leading-relaxed mb-8 italic">
                  &quot;{caseStudy.testimonial.quote}&quot;
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-none bg-grey overflow-hidden">
                    {caseStudy.testimonial.photo ? (
                      <Image
                        src={resolveImageUrl(caseStudy.testimonial.photo)}
                        alt={caseStudy.testimonial.author}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <User size={24} className="text-neutral-400" />
                      </div>
                    )}
                  </div>
                  <div>
                    <h4 className="font-heading font-normal text-lg tracking-tight text-black">
                      {caseStudy.testimonial.author}
                    </h4>
                    <p className="text-neutral-500 text-sm">
                      {caseStudy.testimonial.role}, {caseStudy.testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* RELATED CASES */}
      {relatedCases.length > 0 && (
        <section className="py-16 md:py-24 px-6 md:px-12 bg-white">
          <div className="max-w-[82.5rem] mx-auto">
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="font-mono text-[10px] tracking-[0.4em] text-neutral-400 font-bold block mb-2">
                  Autres cas clients
                </span>
                <h2 className="font-heading font-normal text-3xl md:text-4xl tracking-tight text-black">
                  Découvrez d&apos;autres succès
                </h2>
              </div>
              <Link
                href="/cas-clients"
                className="hidden md:flex items-center gap-2 text-sm font-bold text-black hover:gap-3 transition-all"
              >
                Voir tous les cas <ArrowUpRightIcon size={16} />
              </Link>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {relatedCases.map((relatedCase, idx) => {
                const RelatedSectorIcon = sectorIconMap[relatedCase.sectorIcon] || Building2;
                const relatedHeroUrl = relatedCase.heroImage
                  ? resolveImageUrl(relatedCase.heroImage, 800)
                  : null;
                return (
                  <motion.div key={idx} variants={fadeInUp}>
                    <Link
                      href={relatedCase.url || "#"}
                      className="block hover:-translate-y-1 transition-all duration-300 group h-full overflow-hidden"
                    >
                      {/* Hero image background */}
                      <div className="relative h-48 overflow-hidden dark-section" style={{ background: "var(--bg-dark)" }}>
                        {relatedHeroUrl && (
                          <Image
                            src={relatedHeroUrl}
                            alt={relatedCase.title}
                            fill
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                        {/* Sector badge */}
                        <div className="absolute bottom-4 left-4 flex items-center gap-1.5">
                          <RelatedSectorIcon size={12} className="text-white/70" />
                          <span className="text-[10px] font-bold tracking-widest text-white/70 uppercase">
                            {relatedCase.sector}
                          </span>
                        </div>
                      </div>

                      {/* Card body */}
                      <div className="bg-white border border-black/[0.06] border-t-0 p-5">
                        <p className="text-[11px] font-bold tracking-widest text-neutral-400 uppercase mb-2">
                          {relatedCase.company}
                        </p>
                        <h3 className="font-heading font-normal text-base tracking-tight text-black mb-3 line-clamp-2 group-hover:text-neutral-600 transition-colors">
                          {relatedCase.title}
                        </h3>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {relatedCase.metrics.slice(0, 2).map((metric, mIdx) => (
                            <span
                              key={mIdx}
                              className="px-2 py-1 bg-card text-[10px] font-bold text-black"
                            >
                              {metric.value} {metric.label}
                            </span>
                          ))}
                        </div>

                        <span className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-black group-hover:gap-3 transition-all">
                          Lire l&apos;étude <ChevronRight size={12} />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>

            <div className="mt-8 text-center md:hidden">
              <Link
                href="/cas-clients"
                className="inline-flex items-center gap-2 text-sm font-bold text-black"
              >
                Voir tous les cas <ArrowUpRightIcon size={16} />
              </Link>
            </div>
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
            className="rounded-none p-8 md:p-16 text-center relative overflow-hidden grain-overlay dark-section"
            style={{ background: "var(--bg-dark)" }}
          >
            {/* Base + radial gradients jaune Vizion animés */}
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
              <div
                className="absolute w-[50%] h-[50%] bottom-[5%] right-[-15%] animate-gradient-float-4"
                style={{
                  background:
                    "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.05) 0%, transparent 55%)",
                }}
              />
              <div
                className="absolute w-[45%] h-[45%] top-[20%] left-[-10%] animate-gradient-float-5"
                style={{
                  background:
                    "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.06) 0%, transparent 55%)",
                }}
              />
            </div>

            <div className="relative z-10">
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-none border border-white/20 text-[11px] font-bold tracking-widest text-white mb-6">
                Vous avez un projet similaire ?
              </span>

              <h2 className="font-heading font-normal text-[32px] md:text-[48px] leading-[1.1] tracking-tight mb-6 text-white">
                Discutons de vos enjeux
              </h2>

              <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-[var(--font-body)]">
                Chaque entreprise est unique. Prenons le temps d&apos;échanger sur vos défis et de définir ensemble la meilleure approche.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="h-[56px] px-8 text-[15px] font-bold flex items-center justify-center gap-2 bg-white text-black hover:bg-white/90 rounded-none transition-all"
                >
                  Prendre rendez-vous <ArrowUpRightIcon size={16} />
                </Link>
                <Link
                  href="/services"
                  className="h-[56px] px-8 text-[15px] font-bold flex items-center justify-center border-2 border-white/20 text-white hover:bg-white/10 rounded-none transition-all"
                >
                  Découvrir nos services
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
