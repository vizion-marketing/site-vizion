"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { CaseStudy } from "../../../sanity/lib/types";
import { resolveImageUrl } from "../../../sanity/lib/image";

interface CaseStudyHighlightProps {
  caseStudies: CaseStudy[];
}

export function CaseStudyHighlight({ caseStudies }: CaseStudyHighlightProps) {
  if (!caseStudies || caseStudies.length === 0) return null;

  const isSingle = caseStudies.length === 1;

  return (
    <section
      className="dark-section grain-overlay relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12"
      style={{ background: "var(--bg-dark)" }}
    >
      {/* Blob décoratif */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(var(--color-accent-rgb), 0.06) 0%, transparent 50%)",
        }}
      />

      <div className="max-w-[82.5rem] mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="flex items-center gap-2.5 mb-4 justify-center">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-accent uppercase">
              Résultats terrain
            </span>
          </div>
          <h2 className="font-heading font-normal text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] text-white">
            Des résultats concrets
          </h2>
        </motion.div>

        {/* Cards */}
        <div
          className={
            isSingle
              ? "max-w-5xl mx-auto"
              : "grid grid-cols-1 md:grid-cols-2 gap-6"
          }
        >
          {caseStudies.map((cs) => {
            const imgUrl = resolveImageUrl(cs.heroImage, 800);
            const href = cs.url || `/cas-clients/${cs.clientSlug}/${cs.slug}`;

            return (
              <motion.div
                key={cs._id}
                initial={{ opacity: 0, y: 50, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white light-card shadow-[0_25px_60px_rgba(0,0,0,0.3)] overflow-hidden"
              >
                <div
                  className={
                    isSingle
                      ? "grid grid-cols-1 lg:grid-cols-[0.45fr_1fr]"
                      : "flex flex-col"
                  }
                >
                  {/* Image */}
                  {imgUrl && (
                    <div
                      className={`relative overflow-hidden ${
                        isSingle ? "h-full min-h-[240px]" : "aspect-[16/9]"
                      }`}
                    >
                      <motion.div
                        initial={{ scale: 1.05 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={imgUrl}
                          alt={cs.title}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                      {isSingle && (
                        <div
                          className="absolute inset-0 pointer-events-none hidden lg:block"
                          style={{
                            background:
                              "linear-gradient(to right, transparent 60%, rgba(255,255,255,0.1) 100%)",
                          }}
                        />
                      )}
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-8 sm:p-10 flex flex-col justify-center">
                    <p className="text-xs uppercase tracking-wider text-secondary mb-1">
                      {cs.sector} — {cs.company}
                    </p>
                    <h3 className="text-lg font-normal text-primary mb-6">
                      {cs.title}
                    </h3>

                    {/* Metrics */}
                    {cs.metrics && cs.metrics.length > 0 && (
                      <div className="flex flex-wrap gap-8 mb-6">
                        {cs.metrics.slice(0, 3).map((m, i) => (
                          <div key={i} className="border-t-2 border-accent pt-3">
                            <p className="text-2xl font-semibold text-primary">
                              {m.value}
                            </p>
                            <p className="text-xs text-secondary">{m.label}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    <Link
                      href={href}
                      className="group inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors"
                    >
                      <span className="border-b border-transparent group-hover:border-current transition-colors">
                        Lire l&apos;étude de cas
                      </span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
