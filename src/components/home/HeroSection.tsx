"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { homeContent, type HeroContent } from "@/content/home";
import { ArrowUpRightIcon } from "@/components/icons";

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
        {/* Mobile cloud effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute w-[80%] h-[50%] top-[10%] left-[10%]"
            style={{
              background: "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(255,255,255,0.07) 0%, transparent 65%)",
              filter: "blur(40px)",
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
            className="font-heading font-normal text-[28px] min-[400px]:text-[32px] sm:text-[40px] leading-[0.95] tracking-[-0.035em]"
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

        {/* Mobile image — floating, after CTAs */}
        <div className="relative mt-6 -mb-2 aspect-[3/4] max-h-[50vh] mx-auto max-w-[280px] sm:max-w-[320px]">
          <Image
            src="/images/hero-jumelles.avif"
            alt="Agence marketing B2B Vizion Toulouse"
            fill
            priority
            className="object-contain object-bottom"
          />
          <div
            className="absolute inset-x-0 bottom-0 h-16 pointer-events-none"
            style={{
              background: "linear-gradient(to top, var(--bg-dark) 0%, transparent 100%)",
            }}
          />
        </div>
      </div>

      {/* ===== DESKTOP LAYOUT — Image flottante avec effet nuages ===== */}
      <div className="hidden lg:block relative min-h-screen">
        <div className="grain-overlay absolute inset-0 z-0" style={{ background: "var(--bg-dark)" }} />

        {/* Cloud / mist effect behind the photo */}
        <div className="absolute inset-0 pointer-events-none z-[2] overflow-hidden">
          {/* Large cloud mass — behind person */}
          <div
            className="absolute w-[60%] h-[80%] top-[5%] right-[0%]"
            style={{
              background: "radial-gradient(ellipse 70% 60% at 55% 45%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.08) 30%, rgba(255,255,255,0.02) 55%, transparent 70%)",
              filter: "blur(35px)",
            }}
          />
          {/* Upper cloud wisp */}
          <div
            className="absolute w-[45%] h-[35%] top-[5%] right-[8%]"
            style={{
              background: "radial-gradient(ellipse 90% 70% at 50% 40%, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.04) 50%, transparent 70%)",
              filter: "blur(45px)",
            }}
          />
          {/* Mid-level cloud — tighter behind shoulders */}
          <div
            className="absolute w-[35%] h-[45%] top-[20%] right-[10%]"
            style={{
              background: "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.06) 40%, transparent 65%)",
              filter: "blur(25px)",
            }}
          />
          {/* Lower mist — fading down */}
          <div
            className="absolute w-[50%] h-[40%] bottom-[8%] right-[2%]"
            style={{
              background: "radial-gradient(ellipse 100% 80% at 50% 60%, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.03) 45%, transparent 65%)",
              filter: "blur(50px)",
            }}
          />
          {/* Accent tint in the cloud */}
          <div
            className="absolute w-[30%] h-[40%] top-[25%] right-[15%]"
            style={{
              background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.06) 0%, transparent 50%)",
              filter: "blur(35px)",
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
        </div>

        {/* Photo — floating, no edges */}
        <div
          data-hero="image"
          className="absolute bottom-0 right-[12%] z-[3] w-[44%] h-[92%]"
        >
          <Image
            src="/images/hero-jumelles.avif"
            alt="Agence marketing B2B Vizion Toulouse"
            fill
            priority
            sizes="40vw"
            className="object-contain object-bottom"
          />
          {/* Soft bottom fade into background */}
          <div
            className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
            style={{
              background: "linear-gradient(to top, var(--bg-dark) 0%, transparent 100%)",
            }}
          />
        </div>

        {/* Content — left column */}
        <div className="relative z-10 max-w-[82.5rem] mx-auto min-h-screen px-6 md:px-12">
          <div data-hero="text-col" className="relative z-10 w-[55%] flex flex-col justify-center min-h-screen pt-28 pb-20">
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
                className="font-heading font-normal text-[36px] lg:text-[44px] xl:text-[48px] leading-[0.95] tracking-[-0.035em] mb-6"
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


            </div>
          </div>
        </div>

        {/* Stats cards — floating over the photo */}
        <div
          data-hero="stats"
          className="absolute bottom-[14%] right-[5%] z-[5] flex gap-3"
        >
          {[
            { value: "70+", label: "clients\naccompagnés" },
            { value: "5 ans", label: "d'expertise" },
            { value: "+500", label: "assets marketing\ndéjà livrés" },
          ].map((stat) => (
            <div
              key={stat.value}
              className="bg-white/5 backdrop-blur-md border border-white/10 px-5 py-3 flex items-center gap-3"
            >
              <span className="text-accent font-heading font-bold text-xl">{stat.value}</span>
              <span className="text-white/60 text-[11px] leading-tight whitespace-pre-line">{stat.label}</span>
            </div>
          ))}
        </div>

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
