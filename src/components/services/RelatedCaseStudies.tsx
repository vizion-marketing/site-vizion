"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, TrendingDown, Minus } from "lucide-react";

interface Metric {
  value: string;
  label: string;
  trend?: "up" | "down" | "neutral";
}

interface ServiceCaseStudy {
  _id: string;
  title: string;
  slug: string;
  company: string;
  companyType: string;
  sector: string;
  clientSlug: string;
  url: string;
  heroImageUrl?: string;
  metrics: Metric[];
  resultsDescription?: string;
}

interface RelatedCaseStudiesProps {
  caseStudies: ServiceCaseStudy[];
}

export function RelatedCaseStudies({ caseStudies }: RelatedCaseStudiesProps) {
  if (!caseStudies || caseStudies.length === 0) return null;

  const isSingle = caseStudies.length === 1;

  return (
    <section className="bg-card py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12">
      <div className="max-w-[82.5rem] mx-auto">
        <div className="mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2.5 mb-5"
          >
            <div className="w-2 h-2 bg-accent" />
            <span className="text-[11px] font-light tracking-[0.12em] text-muted uppercase">
              Impact & Résultats
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-normal text-[clamp(32px,5vw,52px)] leading-[1.05] tracking-[-0.035em] text-primary max-w-2xl"
          >
            Ce que ça donne en pratique
          </motion.h2>
        </div>

        {isSingle ? (
          <FeaturedCard study={caseStudies[0]} />
        ) : (
          <div className={`grid grid-cols-1 md:grid-cols-2 ${caseStudies.length === 3 ? "lg:grid-cols-3" : ""} gap-6 md:gap-8`}>
            {caseStudies.map((study, index) => (
              <GridCard key={study._id} study={study} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function FeaturedCard({ study }: { study: ServiceCaseStudy }) {
  const primaryMetric = study.metrics[0];
  const secondaryMetrics = study.metrics.slice(1, 3);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-1 lg:grid-cols-2 bg-white border border-black/[0.06] overflow-hidden group hover:shadow-xl transition-all duration-500"
    >
      {/* Left — Photo + métriques en overlay */}
      <div className="relative min-h-[400px] lg:min-h-[580px] overflow-hidden flex flex-col justify-end p-8 md:p-12">
        {study.heroImageUrl ? (
          <Image
            src={study.heroImageUrl}
            alt={study.company}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        ) : (
          <div className="absolute inset-0 bg-dark" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        <div className="relative z-10 space-y-8">
          {primaryMetric && (
            <div>
              <div className="text-[clamp(64px,7vw,110px)] leading-[0.9] font-normal text-white tracking-[-0.04em]">
                {primaryMetric.value}
              </div>
              <div className="flex items-center gap-3 mt-4">
                <TrendIcon trend={primaryMetric.trend} className="text-accent" />
                <span className="text-[11px] uppercase tracking-[0.12em] font-light text-white/70">
                  {primaryMetric.label}
                </span>
              </div>
            </div>
          )}

          {secondaryMetrics.length > 0 && (
            <div className="flex flex-wrap gap-4">
              {secondaryMetrics.map((m, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 p-5 min-w-[160px]">
                  <div className="text-2xl font-normal text-white">{m.value}</div>
                  <div className="text-[10px] uppercase tracking-[0.12em] font-light text-white/50 mt-1">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Right — Contenu */}
      <div className="p-8 md:p-16 flex flex-col justify-center">
        <div className="flex items-center gap-2.5 mb-6">
          <span className="text-[11px] uppercase tracking-[0.12em] font-light text-muted">{study.company}</span>
          <div className="w-1 h-1 bg-black/10" />
          <span className="text-[11px] uppercase tracking-[0.12em] font-light text-muted">{study.sector}</span>
        </div>
        <h3 className="text-[clamp(28px,4vw,42px)] font-normal text-primary tracking-[-0.03em] leading-[1.1] mb-8">
          {study.title}
        </h3>
        {study.resultsDescription && (
          <p className="text-secondary text-[16px] leading-relaxed mb-12 max-w-lg">
            {study.resultsDescription}
          </p>
        )}
        <Link href={study.url} className="inline-flex items-center gap-3 text-[13px] font-medium text-primary group/link w-fit">
          <span className="relative">
            Explorer le cas complet
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-black/10 transition-all duration-300 group-hover/link:bg-accent" />
          </span>
          <div className="w-8 h-8 border border-black/10 flex items-center justify-center group-hover/link:border-accent group-hover/link:bg-accent transition-all duration-300">
            <ArrowUpRight size={14} />
          </div>
        </Link>
      </div>
    </motion.div>
  );
}

function GridCard({ study, index }: { study: ServiceCaseStudy; index: number }) {
  const primaryMetric = study.metrics[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col bg-white border border-black/[0.06] hover:border-black/[0.12] hover:shadow-xl transition-all duration-300 h-full"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        {study.heroImageUrl ? (
          <Image
            src={study.heroImageUrl}
            alt={study.company}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 bg-card flex items-center justify-center">
            <div className="w-12 h-12 bg-accent/20 rotate-45" />
          </div>
        )}
        {primaryMetric && (
          <div className="absolute bottom-4 left-4 z-10">
            <div className="bg-white/90 backdrop-blur-sm p-4 border border-black/5">
              <div className="text-2xl font-normal text-primary leading-none mb-1">{primaryMetric.value}</div>
              <div className="text-[9px] uppercase tracking-[0.1em] font-light text-muted">{primaryMetric.label}</div>
            </div>
          </div>
        )}
      </div>

      {/* Contenu */}
      <div className="p-8 flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-[10px] uppercase tracking-[0.1em] font-light text-muted">{study.company}</span>
          <div className="w-1 h-1 bg-black/10" />
          <span className="text-[10px] uppercase tracking-[0.1em] font-light text-muted">{study.sector}</span>
        </div>

        <h3 className="text-[20px] font-normal text-primary tracking-[-0.02em] leading-[1.2] mb-5">
          {study.title}
        </h3>

        {study.resultsDescription && (
          <p className="text-secondary text-[14px] leading-relaxed mb-8 line-clamp-2">
            {study.resultsDescription}
          </p>
        )}

        <div className="mt-auto pt-6 border-t border-black/[0.06]">
          <Link href={study.url} className="flex items-center justify-between group/link">
            <span className="text-[12px] font-medium text-primary">Découvrir le projet</span>
            <ArrowUpRight size={14} className="text-muted group-hover/link:text-primary group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all duration-300" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

function TrendIcon({ trend, className = "" }: { trend?: "up" | "down" | "neutral"; className?: string }) {
  if (!trend) return null;
  const classes = `shrink-0 ${className}`;
  switch (trend) {
    case "up": return <TrendingUp size={16} className={classes} />;
    case "down": return <TrendingDown size={16} className={classes} />;
    default: return <Minus size={16} className={classes} />;
  }
}
