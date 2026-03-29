"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRightIcon } from "@/components/icons";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface PilierHeroProps {
  category: string;
  title: string;
  subtitle: string;
  imageUrl?: string;
  imageAlt?: string;
  breadcrumbLabel: string;
}

const FALLBACK_IMAGE = "/images/services/default-hero.png";

export function PilierHero({
  category,
  title,
  subtitle,
  imageUrl,
  imageAlt,
  breadcrumbLabel,
}: PilierHeroProps) {
  const heroSrc = imageUrl || FALLBACK_IMAGE;
  const sectionRef = useRef<HTMLElement>(null);

  // GSAP entrance
  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from("[data-v2='breadcrumb']", { opacity: 0, y: -12, duration: 0.5 }, 0.2);
      tl.from("[data-v2='title']", { opacity: 0, y: 50, duration: 1, ease: "expo.out" }, 0.35);
      tl.from("[data-v2='subtitle']", { opacity: 0, y: 25, duration: 0.7 }, 0.6);
      tl.from("[data-v2='cta']", { opacity: 0, y: 20, duration: 0.6 }, 0.75);
    },
    { scope: sectionRef },
  );

  // Scroll parallax on background image
  useGSAP(
    () => {
      gsap.to("[data-v2='bg-image']", {
        y: 80,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="dark-section relative overflow-hidden min-h-[85vh] sm:min-h-[90vh] flex items-center"
      style={{ background: "var(--bg-dark)" }}
    >
      {/* ===== Background image with parallax ===== */}
      <div
        data-v2="bg-image"
        className="absolute inset-0 z-0"
      >
        <Image
          src={heroSrc}
          alt={imageAlt || title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Base overlay - darken the whole image */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />

        {/* Gradient: dark at top fading into image at bottom */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, var(--bg-dark) 0%, var(--bg-dark) 16%, rgba(12,12,10,0.8) 30%, rgba(12,12,10,0.4) 50%, rgba(12,12,10,0.1) 70%, transparent 100%)",
          }}
        />
      </div>

      {/* ===== Grain overlay ===== */}
      <div className="grain-overlay absolute inset-0 z-[1] pointer-events-none" />

      {/* ===== Content ===== */}
      <div className="relative z-10 w-full pt-32 sm:pt-36 md:pt-40 lg:pt-44 pb-20 sm:pb-24 md:pb-32 lg:pb-40 px-4 sm:px-6 md:px-12">
        <div className="max-w-[82.5rem] mx-auto flex flex-col items-center text-center">
          {/* Breadcrumb */}
          <nav
            data-v2="breadcrumb"
            className="flex items-center gap-2 text-xs sm:text-sm text-white/50 mb-8 sm:mb-10"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Accueil
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-white">{breadcrumbLabel}</span>
          </nav>

          {/* Title */}
          <h1
            data-v2="title"
            className="font-heading font-normal text-[clamp(36px,7vw,72px)] leading-[0.92] tracking-[-0.04em] text-white max-w-4xl mb-6 sm:mb-8"
          >
            {title}
          </h1>

          {/* Subtitle */}
          <p
            data-v2="subtitle"
            className="text-white/70 text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed max-w-2xl mb-10 sm:mb-12"
          >
            {subtitle}
          </p>

          {/* CTA */}
          <div data-v2="cta">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 bg-accent text-black font-medium px-8 py-4 hover:bg-accent/90 hover:scale-[1.02] active:scale-[0.97] transition-all duration-200"
            >
              Discuter de votre projet
              <ArrowUpRightIcon size={16} className="shrink-0 inline-block group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
