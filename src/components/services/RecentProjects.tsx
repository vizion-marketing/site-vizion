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

function buildRow(source: CaseStudy[], offset: number, count = 8): CaseStudy[] {
  const result: CaseStudy[] = [];
  for (let i = 0; i < count; i++) {
    result.push(source[(i + offset) % source.length]);
  }
  return result;
}

function MarqueeCol({
  items,
  direction = "up",
  speed = 32,
}: {
  items: CaseStudy[];
  direction?: "up" | "down";
  speed?: number;
}) {
  const looped = [...items, ...items];
  const yFrom = direction === "up" ? "0%" : "-50%";
  const yTo = direction === "up" ? "-50%" : "0%";

  return (
    <div className="overflow-hidden flex-1">
      <motion.div
        className="flex flex-col gap-3 sm:gap-4"
        style={{ height: "max-content" }}
        animate={{ y: [yFrom, yTo] }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
      >
        {looped.map((cs, i) => {
          const imageUrl = resolveImageUrl(cs.heroImage, 600);
          const href = `/cas-clients/${cs.clientSlug}/${cs.slug}`;

          return (
            <Link
              key={`${cs._id}-${i}`}
              href={href}
              className="relative flex-shrink-0 overflow-hidden group w-full"
              style={{ aspectRatio: "3 / 4" }}
            >
              {imageUrl ? (
                <Image
                  src={imageUrl}
                  alt={cs.company}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="33vw"
                />
              ) : (
                <div className="absolute inset-0 bg-grey" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <span className="absolute bottom-4 left-4 text-white font-semibold text-[15px] leading-tight">
                {cs.company}
              </span>
            </Link>
          );
        })}
      </motion.div>
    </div>
  );
}

export function RecentProjects({ caseStudies }: RecentProjectsProps) {
  if (caseStudies.length === 0) return null;

  const row1 = buildRow(caseStudies, 0);
  const row2 = buildRow(caseStudies, 1);
  const row3 = buildRow(caseStudies, 2);

  return (
    <section className="bg-card py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden">
      {/* Header */}
      <div className="max-w-[82.5rem] mx-auto px-4 sm:px-6 md:px-12 mb-10 sm:mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
        >
          <div>
            <div className="flex items-center gap-2.5 mb-3 sm:mb-5">
              <div className="w-2 h-2 bg-accent" />
              <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-muted uppercase">
                Nos réalisations
              </span>
            </div>
            <h2 className="font-heading font-medium text-[24px] sm:text-[34px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] text-primary">
              Nos derniers projets
            </h2>
          </div>

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
      </div>

      {/* Marquee — 3 colonnes verticales pleine largeur */}
      <div className="flex gap-3 sm:gap-4 px-4 sm:px-6 md:px-12" style={{ height: "600px" }}>
        <MarqueeCol items={row1} direction="up" speed={35} />
        <MarqueeCol items={row2} direction="down" speed={28} />
        <MarqueeCol items={row3} direction="up" speed={32} />
      </div>
    </section>
  );
}
