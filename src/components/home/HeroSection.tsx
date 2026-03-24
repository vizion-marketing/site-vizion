"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { homeContent, type HeroContent } from "@/content/home";
import { ArrowUpRightIcon } from "@/components/icons";
import { TestimonialMarquee } from "./TestimonialMarquee";

gsap.registerPlugin(ScrollTrigger);

interface HeroSectionProps {
  content?: HeroContent;
}

export function HeroSection({ content: contentProp }: HeroSectionProps = {}) {
  const hero = contentProp ?? homeContent.hero;
  const sectionRef = useRef<HTMLElement>(null);

  // GSAP entrance animations
  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from("[data-hero='image']", {
        scale: 1.08,
        opacity: 0,
        duration: 1.4,
        ease: "expo.out",
      }, 0);

      tl.from("[data-hero='badge']", { opacity: 0, y: -12, scale: 0.9, duration: 0.6 }, 0.2);
      tl.from("[data-hero='h1']", { opacity: 0, y: 24, duration: 0.8 }, 0.3);
      tl.from("[data-hero='baseline']", { opacity: 0, y: 16, duration: 0.6 }, 0.45);
      tl.from("[data-hero='ctas']", { opacity: 0, y: 12, duration: 0.5 }, 0.6);
      tl.from("[data-hero='stats']", { opacity: 0, y: 12, duration: 0.5 }, 0.7);
    },
    { scope: sectionRef }
  );

  // Scroll parallax
  useGSAP(
    () => {
      gsap.to("[data-hero='image']", {
        y: -30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        },
      });

      gsap.to("[data-hero='text-col']", {
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        },
      });
    },
    { scope: sectionRef }
  );

  // Parse h1 to add highlight
  const renderH1 = () => {
    const text = hero.h1;
    const highlightWord = hero.h1Highlight;
    if (!highlightWord || !text.includes(highlightWord)) return text;
    const hlIdx = text.indexOf(highlightWord);
    return [
      text.slice(0, hlIdx),
      <span key="highlight" className="relative inline-block">
        <span className="relative z-10 text-accent">{highlightWord}</span>
        <span
          className="absolute bottom-2 left-0 w-full h-3 bg-accent/20 -z-0"
          style={{ transform: 'skewX(-3deg)' }}
        />
      </span>,
      text.slice(hlIdx + highlightWord.length),
    ];
  };

  return (
    <section
      ref={sectionRef}
      className="dark-section relative overflow-hidden"
      style={{ background: "var(--bg-dark)" }}
    >
      {/* ===== MOBILE LAYOUT ===== */}
      <div className="lg:hidden grain-overlay relative px-4 sm:px-6 pt-28 sm:pt-32 pb-12 sm:pb-16">
        {/* Mobile image with bottom fade */}
        <div className="relative overflow-hidden -mb-2 aspect-[3/4] max-h-[50vh]">
          <Image
            src="/images/hero-header.avif"
            alt="Agence marketing B2B Vizion Toulouse"
            fill
            priority
            className="object-cover object-top"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(to top, var(--bg-dark) 0%, var(--bg-dark) 5%, transparent 50%)",
            }}
          />
        </div>

        {/* Mobile content */}
        <div className="flex flex-col gap-3">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-50"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-br from-[var(--color-accent)] via-[var(--color-accent)]/80 to-[var(--color-accent)]/50 shadow-[0_0_8px_rgba(var(--color-accent-rgb),0.5)]"></span>
            </span>
            <span
              className="text-[9px] sm:text-[10px] font-medium tracking-[0.08em] uppercase"
              style={{ color: "rgba(255,255,255,0.9)" }}
            >
              {hero.badge}
            </span>
          </div>

          <h1
            className="font-heading font-normal text-[28px] min-[400px]:text-[32px] sm:text-[44px] leading-[0.95] tracking-[-0.03em]"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.92) 50%, rgba(255,255,255,0.88) 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {renderH1()}
          </h1>

          <p
            className="text-sm sm:text-base leading-relaxed max-w-2xl"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            {hero.baseline}
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-4 mt-4">
            <Link href={hero.cta.primary.href} className="btn btn-primary group">
              {hero.cta.primary.text}{" "}
              <ArrowUpRightIcon className="shrink-0 inline-block group-hover:translate-x-0.5 transition-transform" size={16} />
            </Link>
            <Link href={hero.cta.secondary.href} className="btn btn-secondary group">
              {hero.cta.secondary.text}{" "}
              <ArrowUpRightIcon className="shrink-0 inline-block group-hover:translate-x-0.5 transition-transform" size={16} />
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center gap-3 mt-3 pt-3 border-t border-white/5">
            <div className="flex items-center gap-2">
              <span className="text-accent font-heading font-bold text-xl">70+</span>
              <span className="text-white/50 text-[10px] leading-tight">clients<br/>accompagnés</span>
            </div>
            <div className="w-px h-8 bg-white/10 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-accent font-heading font-bold text-xl">5 ans</span>
              <span className="text-white/50 text-[10px] leading-tight">d&apos;expertise</span>
            </div>
            <div className="w-px h-8 bg-white/10 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-accent font-heading font-bold text-xl">+500</span>
              <span className="text-white/50 text-[10px] leading-tight">assets marketing<br/>déjà livrés</span>
            </div>
          </div>

        </div>
      </div>

      {/* ===== DESKTOP LAYOUT — Image pleine hauteur à droite ===== */}
      <div className="hidden lg:block relative min-h-screen">
        <div className="grain-overlay absolute inset-0 z-0" style={{ background: "var(--bg-dark)" }} />

        {/* Image — pleine hauteur, colonne droite */}
        <div
          data-hero="image"
          className="absolute top-0 right-0 bottom-0 w-[45%] z-[1]"
        >
          <Image
            src="/images/hero-header.avif"
            alt="Agence marketing B2B Vizion Toulouse"
            fill
            priority
            sizes="50vw"
            className="object-cover object-[center_25%]"
          />
          {/* Gradient fade to left */}
          <div
            className="absolute -left-1 top-0 bottom-0 right-0 pointer-events-none"
            style={{
              background: "linear-gradient(to right, var(--bg-dark) 0%, rgba(12,12,10,0.7) 30%, rgba(12,12,10,0.2) 60%, transparent 100%)",
            }}
          />
          {/* Bottom fade */}
          <div
            className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
            style={{
              background: "linear-gradient(to top, var(--bg-dark) 0%, transparent 100%)",
            }}
          />
        </div>

        {/* Accent lime glow — left side */}
        <div className="absolute inset-0 pointer-events-none z-[2] overflow-hidden">
          <div
            className="absolute w-[60%] h-[80%] top-[10%] left-[-10%]"
            style={{
              background:
                "radial-gradient(ellipse 100% 100% at 30% 50%, rgba(var(--color-accent-rgb), 0.10) 0%, transparent 55%)",
            }}
          />
          <div
            className="absolute w-[40%] h-[50%] bottom-[5%] left-[5%]"
            style={{
              background:
                "radial-gradient(ellipse 100% 100% at 40% 70%, rgba(var(--color-accent-rgb), 0.06) 0%, transparent 50%)",
            }}
          />
        </div>

        {/* Content — left column */}
        <div className="relative z-10 max-w-[82.5rem] mx-auto min-h-screen px-6 md:px-12">
          <div data-hero="text-col" className="relative z-10 w-[60%] flex flex-col justify-center min-h-screen py-20">
            <div className="relative z-10">
              {/* Badge */}
              <div
                data-hero="badge"
                className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full w-fit mb-6"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-50"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-br from-[var(--color-accent)] via-[var(--color-accent)]/80 to-[var(--color-accent)]/50 shadow-[0_0_8px_rgba(var(--color-accent-rgb),0.5)]"></span>
                </span>
                <span
                  className="text-[10px] font-medium tracking-[0.08em] uppercase"
                  style={{ color: "rgba(255,255,255,0.9)" }}
                >
                  {hero.badge}
                </span>
              </div>

              {/* H1 */}
              <h1
                data-hero="h1"
                className="font-heading font-normal text-[44px] lg:text-[58px] xl:text-[72px] leading-[0.92] tracking-[-0.04em] mb-6"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.92) 50%, rgba(255,255,255,0.88) 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                {renderH1()}
              </h1>

              {/* Baseline */}
              <p
                data-hero="baseline"
                className="text-base md:text-lg leading-relaxed max-w-xl mb-8"
                style={{ color: "rgba(255,255,255,0.8)" }}
              >
                {hero.baseline}
              </p>

              {/* CTAs */}
              <div data-hero="ctas" className="flex items-center gap-4 mb-8">
                <Link href={hero.cta.primary.href} className="btn btn-primary group">
                  {hero.cta.primary.text}{" "}
                  <ArrowUpRightIcon className="shrink-0 inline-block group-hover:translate-x-0.5 transition-transform" size={16} />
                </Link>
                <Link href={hero.cta.secondary.href} className="btn btn-secondary group">
                  {hero.cta.secondary.text}{" "}
                  <ArrowUpRightIcon className="shrink-0 inline-block group-hover:translate-x-0.5 transition-transform" size={16} />
                </Link>
              </div>

              {/* Stats Bar */}
              <div
                data-hero="stats"
                className="flex items-center gap-6 pt-4 border-t border-white/5 mb-8"
              >
                <div className="flex items-center gap-2">
                  <span className="text-accent font-heading font-bold text-2xl">70+</span>
                  <span className="text-white/50 text-xs leading-tight">clients<br/>accompagnés</span>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div className="flex items-center gap-2">
                  <span className="text-accent font-heading font-bold text-2xl">5 ans</span>
                  <span className="text-white/50 text-xs leading-tight">d&apos;expertise</span>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div className="flex items-center gap-2">
                  <span className="text-accent font-heading font-bold text-2xl">+500</span>
                  <span className="text-white/50 text-xs leading-tight">assets marketing<br/>déjà livrés</span>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Testimonial marquee — pleine largeur, collé sous le contenu */}
      <div className="relative z-20">
        <TestimonialMarquee embedded />
      </div>

      {/* Bottom gradient — transition vers la section suivante */}
      <div
        className="absolute inset-x-0 bottom-0 h-40 pointer-events-none z-30"
        style={{
          background: "linear-gradient(to top, var(--bg-dark) 0%, transparent 100%)",
        }}
      />
    </section>
  );
}
