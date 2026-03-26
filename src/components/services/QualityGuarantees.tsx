"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, UserCheck } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { QualityGuaranteesContent } from "@/content/services/types";
import { resolveIcon } from "@/lib/icon-resolver";

gsap.registerPlugin(ScrollTrigger);

interface QualityGuaranteesProps {
  content: QualityGuaranteesContent;
}

export function QualityGuarantees({ content }: QualityGuaranteesProps) {
  const sectionRef = useRef<HTMLElement>(null);

  // Split titles on \n for line breaks
  const sectionTitleLines = content.sectionTitle.split("\n");
  const cardTitleLines = content.cardTitle.split("\n");
  const featureTitleLines = content.featureCard.title.split("\n");

  useGSAP(
    () => {
      // Header block
      gsap.from("[data-quality='header']", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Grid columns — stagger
      gsap.fromTo(
        "[data-quality='column']",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-quality='grid']",
            start: "top 85%",
          },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="dark-section grain-overlay py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12 relative overflow-hidden"
      style={{ background: "var(--bg-dark)" }}
    >
      {/* Decorative gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(var(--color-accent-rgb), 0.08) 0%, transparent 55%)",
        }}
      />
      <div className="max-w-[82.5rem] mx-auto relative">
        <div data-quality="header" className="mb-10 sm:mb-14">
          <div className="flex items-center gap-2.5 mb-3 sm:mb-4">
            <div className="w-2 h-2 bg-accent" />
            <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-muted uppercase">
              {content.surtitre}
            </span>
          </div>
          <h2 className="font-heading font-medium text-[28px] min-[400px]:text-[32px] sm:text-[40px] md:text-[48px] leading-[1.05] tracking-[-0.035em] text-primary max-w-3xl">
            {sectionTitleLines.map((line, i) => (
              <span key={i}>
                {i > 0 && <br />}
                {line}
              </span>
            ))}
          </h2>
          <p className="text-[15px] sm:text-[16px] text-muted leading-relaxed mt-4 sm:mt-5 max-w-xl">
            {content.sectionDescription}
          </p>
        </div>

        <div
          data-quality="grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr] gap-4 sm:gap-5"
        >
          {/* ─── LEFT: Title + Description + Feature rows ─── */}
          <div
            data-quality="column"
            className="bg-white/5 backdrop-blur-md border border-white/10 p-7 sm:p-8 lg:p-10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-3 sm:mb-5">
                <div className="w-2 h-2 bg-accent" />
                <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-secondary uppercase">
                  {content.cardSurtitre}
                </span>
              </div>
              <h2 className="font-heading font-medium text-[28px] min-[400px]:text-[32px] sm:text-[40px] md:text-[44px] lg:text-[46px] leading-[1.05] tracking-[-0.02em] text-primary mb-4 sm:mb-6">
                {cardTitleLines.map((line, i) => (
                  <span key={i}>
                    {i > 0 && <br />}
                    {line}
                  </span>
                ))}
              </h2>
              <p className="text-[14px] sm:text-[15px] text-muted leading-relaxed max-w-md">
                {content.cardDescription}
              </p>
            </div>

            {/* Feature rows with hover */}
            <div className="mt-8 space-y-0">
              {content.guarantees.map((guarantee, i) => {
                const Icon = resolveIcon(guarantee.icon);
                return (
                  <div
                    key={i}
                    className="flex items-start gap-4 py-4 border-t border-white/10 hover:bg-white/[0.03] hover:pl-2 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 shrink-0 bg-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon size={18} className="text-black" />
                    </div>
                    <div>
                      <h4 className="text-[14px] sm:text-[15px] font-semibold text-primary leading-snug">
                        {guarantee.title}
                      </h4>
                      <p className="text-[13px] text-muted leading-relaxed mt-1">
                        {guarantee.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ─── CENTER: Portrait photo (full height) ─── */}
          <div
            data-quality="column"
            className="border border-white/10 overflow-hidden relative min-h-[320px] md:min-h-0 group"
          >
            <Image
              src="/images/portrait-lucas.png"
              alt="Lucas Gonzalez, Fondateur de Vizion"
              fill
              className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 30vw"
            />
          </div>

          {/* ─── RIGHT: Feature card + Photo stacked ─── */}
          <div
            data-quality="column"
            className="flex flex-col gap-4 sm:gap-5"
          >
            {/* Feature card */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-7 sm:p-8 flex flex-col justify-between flex-1">
              <div>
                <div className="w-10 h-10 bg-accent/10 flex items-center justify-center mb-5">
                  <UserCheck size={18} className="text-primary" />
                </div>
                {content.featureCard.surtitre && (
                  <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-muted uppercase mb-3 block">
                    {content.featureCard.surtitre}
                  </span>
                )}
                <h3 className="text-[18px] sm:text-[20px] font-semibold text-primary leading-snug mb-3">
                  {featureTitleLines.map((line, i) => (
                    <span key={i}>
                      {i > 0 && <br />}
                      {line}
                    </span>
                  ))}
                </h3>
                <p className="text-[14px] sm:text-[15px] text-muted leading-relaxed">
                  {content.featureCard.description}
                </p>
              </div>
              <Link
                href={content.featureCard.linkHref}
                className="relative inline-flex items-center gap-2 mt-6 text-[13px] sm:text-[14px] font-semibold text-primary group"
              >
                <span className="relative">
                  {content.featureCard.linkText}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent group-hover:w-full transition-all duration-300" />
                </span>
                <ArrowUpRight
                  size={15}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                />
              </Link>
            </div>

            {/* Second photo */}
            <div className="border border-white/10 overflow-hidden relative min-h-[200px] flex-1 group">
              <Image
                src="/images/why-vizion/equipe-vizion.avif"
                alt="L'équipe Vizion en action"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
