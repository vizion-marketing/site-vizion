"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CaseStudy } from "../../../sanity/lib/types";
import { resolveImageUrl } from "../../../sanity/lib/image";

interface RecentProjectsProps {
  caseStudies: CaseStudy[];
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export function RecentProjects({ caseStudies }: RecentProjectsProps) {
  if (caseStudies.length === 0) return null;

  return (
    <section className="bg-card py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12">
      <div className="max-w-[82.5rem] mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10 sm:mb-14"
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-2.5 mb-3 sm:mb-5">
              <div className="w-2 h-2 bg-accent" />
              <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-muted uppercase">
                Nos réalisations
              </span>
            </div>
            <h2 className="font-heading font-medium text-[24px] sm:text-[34px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] text-primary">
              Nos derniers projets
            </h2>
          </motion.div>

          <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
            <Link
              href="/cas-clients"
              className="inline-flex items-center gap-2 text-[13px] sm:text-[14px] font-semibold text-primary group"
            >
              Voir tous les projets
              <ArrowRight
                size={15}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {caseStudies.map((cs) => {
            const imageUrl = resolveImageUrl(cs.heroImage, 800);
            const href = `/cas-clients/${cs.clientSlug}/${cs.slug}`;

            return (
              <motion.div
                key={cs._id}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
              >
                <Link href={href} className="group block">
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-[16/10] bg-white border border-black/[0.06]">
                    {imageUrl ? (
                      <Image
                        src={imageUrl}
                        alt={cs.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-grey flex items-center justify-center">
                        <span className="text-muted text-sm">
                          {cs.company}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="pt-4 sm:pt-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] sm:text-[11px] font-light tracking-[0.1em] text-muted uppercase">
                        {cs.sector}
                      </span>
                      {cs.projectYear && (
                        <>
                          <span className="text-muted/40">·</span>
                          <span className="text-[10px] sm:text-[11px] text-muted">
                            {cs.projectYear}
                          </span>
                        </>
                      )}
                    </div>
                    <h3 className="text-[16px] sm:text-[18px] font-semibold text-primary leading-snug group-hover:text-accent transition-colors duration-200">
                      {cs.title}
                    </h3>
                    {cs.description && (
                      <p className="text-[13px] sm:text-[14px] text-muted leading-relaxed mt-1.5 line-clamp-2">
                        {cs.description}
                      </p>
                    )}

                    {/* Metrics preview */}
                    {cs.metrics && cs.metrics.length > 0 && (
                      <div className="flex items-center gap-4 mt-3 pt-3 border-t border-black/[0.06]">
                        {cs.metrics.slice(0, 3).map((metric, i) => (
                          <div key={i} className="flex items-center gap-1.5">
                            <span className="text-[14px] sm:text-[15px] font-bold text-primary">
                              {metric.value}
                            </span>
                            <span className="text-[10px] text-muted leading-tight">
                              {metric.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
