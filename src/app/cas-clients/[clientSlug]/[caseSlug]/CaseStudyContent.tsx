"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { PortableText } from "@portabletext/react";
import type { PortableTextComponents } from "@portabletext/react";
import { ArrowUpRightIcon } from "@/components/icons";
import {
  ArrowLeft,
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
import { urlFor } from "../../../../../sanity/lib/image";
import { calculateReadingTime } from "@/lib/portable-text-utils";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { sectorIconMap } from "@/lib/sectorIcons";
import { DeliverablesGallery } from "@/components/sections/DeliverablesGallery";

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

// ============================================================================
// PORTABLE TEXT COMPONENTS (case-study-specific styling)
// ============================================================================

const caseStudyPTComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="font-heading font-normal text-2xl md:text-3xl tracking-tight text-black mt-16 mb-6 scroll-mt-24">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-heading font-normal text-xl tracking-tight text-black mt-10 mb-4">{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="text-neutral-600 text-lg leading-relaxed mb-6 font-[var(--font-body)]">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-black pl-6 py-4 my-8 bg-neutral-50 rounded-none">
        <p className="text-xl font-medium text-black italic font-[var(--font-body)]">{children}</p>
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-black">{children}</strong>
    ),
    em: ({ children }) => <em>{children}</em>,
    link: ({ value, children }) => {
      const href = value?.href || "#";
      const isExternal = href.startsWith("http");
      if (isExternal) {
        return (
          <a href={href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-black transition-colors">
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className="underline underline-offset-2 hover:text-black transition-colors">
          {children}
        </Link>
      );
    },
    code: ({ children }) => (
      <code className="bg-neutral-100 px-1.5 py-0.5 text-sm font-mono">{children}</code>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="space-y-3 mb-6">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="space-y-3 mb-6 list-decimal list-inside">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="text-neutral-600 text-lg leading-relaxed font-[var(--font-body)] flex items-start gap-3">
        <span className="w-1.5 h-1.5 bg-black rounded-none mt-3 shrink-0" />
        <span>{children}</span>
      </li>
    ),
    number: ({ children }) => (
      <li className="text-neutral-600 text-lg leading-relaxed font-[var(--font-body)]">{children}</li>
    ),
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      return (
        <figure className="my-8">
          <Image
            src={urlFor(value).width(1200).url()}
            alt={value.alt || ""}
            width={1200}
            height={675}
            className="w-full h-auto rounded-none shadow-lg"
          />
          {value.caption && (
            <figcaption className="mt-3 text-sm text-neutral-500 text-center font-medium">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
    figure: ({ value }) => {
      if (!value?.image?.asset) return null;
      const typeStyles: Record<string, string> = {
        default: "bg-neutral-50 p-4",
        mockup: "bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 md:p-10",
        chart: "bg-white border border-neutral-200 p-4",
        screenshot: "bg-neutral-100 p-2 shadow-lg",
      };
      const figType = value.type || "default";
      return (
        <figure className="my-10 md:my-14">
          <div className={`${typeStyles[figType] || typeStyles.default} overflow-hidden`}>
            <div className={figType === "mockup" ? "rounded-lg overflow-hidden shadow-2xl" : ""}>
              <Image
                src={urlFor(value.image).width(1200).url()}
                alt={value.alt || ""}
                width={1200}
                height={675}
                className="w-full h-auto"
              />
            </div>
          </div>
          {value.caption && (
            <figcaption className="mt-3 text-sm text-neutral-500 text-center font-medium">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
    callout: ({ value }) => {
      const styles: Record<string, { bg: string; icon: React.ReactNode; defaultTitle: string }> = {
        insight: {
          bg: "bg-accent/10 border-accent",
          icon: <Zap className="w-5 h-5 text-black" />,
          defaultTitle: "Point clé",
        },
        result: {
          bg: "bg-emerald-50 border-emerald-500",
          icon: <TrendingUp className="w-5 h-5 text-emerald-600" />,
          defaultTitle: "Résultat",
        },
        warning: {
          bg: "bg-amber-50 border-amber-500",
          icon: <Target className="w-5 h-5 text-amber-600" />,
          defaultTitle: "Attention",
        },
      };
      const calloutType = value.type || "insight";
      const style = styles[calloutType] || styles.insight;
      return (
        <div className={`my-8 p-6 border-l-4 ${style.bg}`}>
          <div className="flex items-center gap-2 mb-3">
            {style.icon}
            <span className="text-sm font-bold tracking-wide text-black">
              {value.title || style.defaultTitle}
            </span>
          </div>
          <div className="text-neutral-700 leading-relaxed">{value.body}</div>
        </div>
      );
    },
    statHighlight: ({ value }) => (
      <div className="my-10 p-6 md:p-8 bg-black text-white">
        <div className="flex items-start gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-4xl md:text-5xl font-black tracking-tight">{value.value}</span>
              {value.trend === "up" && <TrendingUp className="w-6 h-6 text-accent" />}
              {value.trend === "down" && <TrendingDown className="w-6 h-6 text-accent" />}
            </div>
            <span className="text-lg font-semibold text-white/80">{value.label}</span>
            {value.description && (
              <p className="mt-3 text-sm text-white/60 leading-relaxed">{value.description}</p>
            )}
          </div>
        </div>
      </div>
    ),
  },
};

interface CaseStudyContentProps {
  caseStudy: CaseStudy;
  relatedCases: CaseStudy[];
  relatedServices?: RelatedService[];
  clientSlug: string;
  clientName?: string;
}

export function CaseStudyContent({ caseStudy, relatedCases, relatedServices, clientSlug, clientName }: CaseStudyContentProps) {
  // Compute reading time from body
  const readingTime = caseStudy.body
    ? calculateReadingTime(caseStudy.body)
    : "1 min de lecture";

  // Get sector icon
  const SectorIcon = sectorIconMap[caseStudy.sectorIcon] || Building2;

  return (
    <main className="min-h-screen bg-white font-[var(--font-body)]">

      {/* HERO SECTION */}
      <section className="relative pt-[120px] pb-[60px] md:pt-[140px] md:pb-[80px] px-6 md:px-12 overflow-hidden grain-overlay dark-section" style={{ background: "var(--bg-dark)" }}>
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

              {/* Executive Summary */}
              <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-3xl mb-8">
                {caseStudy.executiveSummary}
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

            {/* Sidebar - Table of contents & Info */}
            <aside className="lg:col-span-4 order-2 lg:order-1">
              <div className="lg:sticky lg:top-32 space-y-8">

                {/* Context Card */}
                <motion.div
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                  className="bg-grey rounded-none p-6"
                >
                  <h3 className="font-heading font-normal text-sm tracking-wider text-black mb-4">
                    En bref
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {caseStudy.context}
                  </p>
                </motion.div>

                {/* Challenges */}
                <motion.div
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                  className="bg-white border border-neutral-100 rounded-none p-6 shadow-sm"
                >
                  <h3 className="font-heading font-normal text-sm tracking-wider text-black mb-4">
                    Enjeux clés
                  </h3>
                  <ul className="space-y-3">
                    {caseStudy.challenges.map((challenge, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-neutral-600">
                        <span className="w-5 h-5 bg-black text-white rounded-none flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Deliverables */}
                {caseStudy.deliverables && caseStudy.deliverables.length > 0 && (
                  <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    className="rounded-none p-6 relative overflow-hidden grain-overlay dark-section"
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
                    </div>
                    <div className="relative z-10">
                      <h3 className="font-heading font-normal text-sm tracking-wider text-white mb-4">
                        Livrables clés
                      </h3>
                      <ul className="space-y-4">
                        {caseStudy.deliverables.map((deliverable, idx) => {
                          const IconComponent = iconMap[deliverable.icon || ""] || FileText;
                          return (
                            <li key={idx} className="flex items-start gap-3">
                              <div className="w-8 h-8 bg-white/10 rounded-none flex items-center justify-center shrink-0">
                                <IconComponent size={16} className="text-white" />
                              </div>
                              <div>
                                <span className="text-sm font-bold text-white block">{deliverable.title}</span>
                                <span className="text-xs text-white/60">{deliverable.description}</span>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </motion.div>
                )}

                {/* Metrics */}
                {caseStudy.metrics && caseStudy.metrics.length > 0 && (
                  <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    className="bg-black rounded-none p-6 dark-section"
                  >
                    <h3 className="font-heading font-normal text-sm tracking-wider text-white mb-4">
                      Chiffres clés
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {caseStudy.metrics.map((metric, idx) => (
                        <div key={idx} className="text-center">
                          <div className="flex items-center justify-center gap-1 mb-1">
                            <span className="text-2xl font-black text-white">{metric.value}</span>
                            <TrendIcon trend={metric.trend || "neutral"} />
                          </div>
                          <span className="text-[10px] text-white/60 font-medium leading-tight block">{metric.label}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Testimonial Mini */}
                {caseStudy.testimonial && (
                  <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    className="bg-white border border-neutral-100 rounded-none p-6 shadow-sm"
                  >
                    <Quote size={24} className="text-neutral-200 mb-3" />
                    <p className="text-sm text-neutral-600 italic leading-relaxed mb-4 line-clamp-4">
                      &quot;{caseStudy.testimonial.quote}&quot;
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-none bg-grey overflow-hidden shrink-0">
                        {caseStudy.testimonial.photo ? (
                          <Image
                            src={resolveImageUrl(caseStudy.testimonial.photo)}
                            alt={caseStudy.testimonial.author}
                            width={40}
                            height={40}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <User size={16} className="text-neutral-400" />
                          </div>
                        )}
                      </div>
                      <div>
                        <span className="text-xs font-bold text-black block">{caseStudy.testimonial.author}</span>
                        <span className="text-[10px] text-neutral-500">{caseStudy.testimonial.role}</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Related Services */}
                {relatedServices && relatedServices.length > 0 && (
                  <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    className="bg-white border border-neutral-100 rounded-none p-6 shadow-sm"
                  >
                    <h3 className="font-heading font-normal text-sm tracking-wider text-black mb-4">
                      Services associés
                    </h3>
                    <ul className="space-y-3">
                      {relatedServices.map((service) => (
                        <li key={service._id}>
                          <Link
                            href={service.url}
                            className="flex items-center gap-3 text-sm text-neutral-600 hover:text-black transition-colors group"
                          >
                            <div className="w-8 h-8 bg-grey rounded-none flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors">
                              <ChevronRight size={14} className="text-black" />
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

            {/* Main Content */}
            <div className="lg:col-span-8 order-1 lg:order-2">
              {/* Portable Text Content */}
              <div className="prose max-w-none">
                {caseStudy.body && caseStudy.body.length > 0 && (
                  <PortableText
                    value={caseStudy.body}
                    components={caseStudyPTComponents}
                  />
                )}
              </div>

              {/* Results Details */}
              {caseStudy.resultsDetails && (
                <motion.div
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                  className="mt-16 p-8 bg-grey rounded-none"
                >
                  <h3 className="font-heading font-normal text-xl tracking-tight text-black mb-4">
                    Impact & ROI
                  </h3>
                  <p className="text-neutral-600 text-lg leading-relaxed">
                    {caseStudy.resultsDetails}
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERABLES GALLERY */}
      {caseStudy.galleryImages && caseStudy.galleryImages.length > 0 && (
        <DeliverablesGallery
          images={caseStudy.galleryImages}
          clientName={caseStudy.company}
        />
      )}

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
                return (
                  <motion.div key={idx} variants={fadeInUp}>
                    <Link
                      href={relatedCase.url || "#"}
                      className="block bg-white border border-neutral-100 rounded-none p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full"
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 bg-grey rounded-none flex items-center justify-center">
                          <RelatedSectorIcon size={16} className="text-black" />
                        </div>
                        <span className="text-[10px] font-bold tracking-widest text-neutral-400">
                          {relatedCase.sector}
                        </span>
                      </div>

                      <h3 className="font-heading font-normal text-lg tracking-tight text-black mb-3 group-hover:text-neutral-600 transition-colors line-clamp-2">
                        {relatedCase.title}
                      </h3>

                      <p className="text-neutral-500 text-sm leading-relaxed mb-4 line-clamp-2">
                        {relatedCase.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {relatedCase.metrics.slice(0, 2).map((metric, mIdx) => (
                          <span
                            key={mIdx}
                            className="px-2 py-1 bg-grey text-[10px] font-bold text-black rounded-none"
                          >
                            {metric.value} {metric.label}
                          </span>
                        ))}
                      </div>

                      <span className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-black group-hover:gap-3 transition-all">
                        Lire l&apos;étude <ChevronRight size={14} />
                      </span>
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
