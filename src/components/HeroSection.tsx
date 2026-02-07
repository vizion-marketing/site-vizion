"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { homeContent } from "@/content/home";
import { ArrowUpRightIcon } from "@/components/icons";

gsap.registerPlugin(useGSAP);

const HERO_LOGOS = [
  { name: "easyVirtual.tours", src: "/images/clients/easyvirtual.svg" },
  { name: "Eldo Wallet", src: "/images/clients/eldo.svg" },
  { name: "Ensenat Coaching", src: "/images/clients/ensenat.svg" },
  { name: "Olivier Bas", src: "/images/clients/olivierbas.svg" },
  { name: "Précision Industries", src: "/images/clients/precision.svg" },
  { name: "SaaS Corp", src: "/images/clients/saas.svg" },
];

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const baselineRef = useRef<HTMLParagraphElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);
  const logosRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const scatterRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const socialProofRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: -12 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
        .fromTo(
          h1Ref.current,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.3"
        )
        .fromTo(
          baselineRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.5"
        )
        .fromTo(
          badgesRef.current,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.3"
        )
        .fromTo(
          ctasRef.current,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.2"
        )
        .fromTo(
          logosRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.5 },
          "-=0.2"
        )
        .fromTo(
          imageRef.current,
          { opacity: 0, x: 40 },
          { opacity: 1, x: 0, duration: 0.9 },
          "-=0.9"
        )
        .fromTo(
          scatterRef.current,
          { opacity: 0, x: -16 },
          { opacity: 1, x: 0, duration: 0.5 },
          "-=0.3"
        )
        .fromTo(
          phoneRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.4"
        )
        .fromTo(
          socialProofRef.current,
          { opacity: 0, x: 16 },
          { opacity: 1, x: 0, duration: 0.5 },
          "-=0.4"
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-10 sm:pb-12 md:pb-[40px] px-4 sm:px-6 md:px-12 flex items-center min-h-[100svh] overflow-hidden grain-overlay"
      style={{ background: "#0c0c0a" }}
    >
      {/* Base + radial gradients jaune Vizion animés */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute w-[80%] h-[60%] top-[10%] left-[-20%] animate-gradient-float-1"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.12) 0%, transparent 55%)",
          }}
        />
        <div
          className="absolute w-[70%] h-[50%] top-[-10%] right-[-10%] animate-gradient-float-2"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.08) 0%, transparent 55%)",
          }}
        />
        <div
          className="absolute w-[60%] h-[70%] bottom-[-15%] left-[15%] animate-gradient-float-3"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.06) 0%, transparent 55%)",
          }}
        />
        <div
          className="absolute w-[50%] h-[50%] bottom-[5%] right-[-15%] animate-gradient-float-4"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.05) 0%, transparent 55%)",
          }}
        />
        <div
          className="absolute w-[45%] h-[45%] top-[20%] left-[-10%] animate-gradient-float-5"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.06) 0%, transparent 55%)",
          }}
        />
      </div>

      <div className="max-w-[82.5rem] mx-auto w-full relative z-10 lg:grid lg:grid-cols-2 lg:gap-6 lg:items-stretch">
        {/* CONTENT AREA */}
        <div className="w-full p-4 sm:p-6 md:p-8 relative z-10 flex flex-col justify-center gap-4">
          <div
            ref={badgeRef}
            className="flex items-center gap-2 opacity-0"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-[#D4FD00] opacity-50"></span>
              <span className="relative inline-flex rounded-none h-2 w-2 bg-gradient-to-br from-[#D4FD00] via-[#D4FD00]/80 to-[#D4FD00]/50 shadow-[0_0_8px_rgba(212,253,0,0.5)]"></span>
            </span>
            <span
              className="text-[9px] sm:text-[10px] font-light tracking-[0.12em]"
              style={{ color: "rgba(255,255,255,0.8)" }}
            >
              {homeContent.hero.badge}
            </span>
          </div>

          <h1
            ref={h1Ref}
            className="font-heading font-normal text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px] leading-[0.95] tracking-[-0.03em] opacity-0"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.92) 50%, rgba(255,255,255,0.88) 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {homeContent.hero.h1}
          </h1>

          <p
            ref={baselineRef}
            className="text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl opacity-0"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            {homeContent.hero.baseline}
          </p>

          <div
            ref={badgesRef}
            className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 pb-4 border-b border-white/10 opacity-0"
          >
            {homeContent.hero.badges.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-[11px] sm:text-xs font-semibold tracking-tight"
                style={{ color: "rgba(255,255,255,0.8)" }}
              >
                <CheckCircle2 size={14} className="shrink-0" style={{ color: "#D4FD00" }} />
                {item}
              </div>
            ))}
          </div>

          <div ref={ctasRef} className="flex flex-col sm:flex-row gap-2.5 mt-4 opacity-0">
            <Link
              href={homeContent.hero.cta.primary.href}
              className="btn btn-primary group"
            >
              {homeContent.hero.cta.primary.text}{" "}
              <ArrowUpRightIcon
                className="shrink-0 inline-block group-hover:translate-x-0.5 transition-transform"
                size={16}
              />
            </Link>
            <Link
              href={homeContent.hero.cta.secondary.href}
              className="btn btn-secondary group"
            >
              {homeContent.hero.cta.secondary.text}{" "}
              <ArrowUpRightIcon
                className="shrink-0 inline-block group-hover:translate-x-0.5 transition-transform"
                size={16}
              />
            </Link>
          </div>

          <div
            ref={logosRef}
            className="relative overflow-hidden w-full mt-4 opacity-0"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
            }}
          >
            <div className="flex animate-scroll-left gap-8 w-max">
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex gap-8 items-center shrink-0">
                  {HERO_LOGOS.map((logo) => (
                    <img
                      key={`${setIndex}-${logo.name}`}
                      src={logo.src}
                      alt={logo.name}
                      className="h-6 sm:h-7 w-auto opacity-50 hover:opacity-80 transition-opacity brightness-0 invert"
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          ref={imageRef}
          className="relative z-30 group overflow-hidden rounded-none shadow-2xl aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[420px] my-6 lg:my-0 opacity-0"
        >
          <img
            src="/hero-binoculars.png"
            alt="Strategie"
            className="absolute inset-0 w-full h-full object-contain object-center"
          />

          {/* 1. Scatter plot (top-left) */}
          <div
            ref={scatterRef}
            className="hidden lg:block absolute top-10 left-12 z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-none p-4 shadow-lg opacity-0"
          >
            <svg width="96" height="48" viewBox="0 0 96 48" fill="none">
              <defs>
                <linearGradient id="curveGrad" x1="0" y1="48" x2="96" y2="0">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
                  <stop offset="100%" stopColor="#D4FD00" />
                </linearGradient>
                <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="48">
                  <stop offset="0%" stopColor="#D4FD00" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#D4FD00" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0 42 C8 40, 16 38, 24 34 C32 30, 40 28, 48 24 C56 20, 60 16, 68 13 C76 10, 84 6, 96 2"
                stroke="url(#curveGrad)"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M0 42 C8 40, 16 38, 24 34 C32 30, 40 28, 48 24 C56 20, 60 16, 68 13 C76 10, 84 6, 96 2 L96 48 L0 48 Z"
                fill="url(#areaGrad)"
              />
            </svg>
          </div>

          {/* 2. CTA téléphone (bottom-left) */}
          <div
            ref={phoneRef}
            className="hidden lg:block absolute bottom-20 left-5 z-20 opacity-0"
          >
            <a
              href="tel:+33750836543"
              className="block bg-white/10 backdrop-blur-md border border-white/20 rounded-none p-4 shadow-lg hover:bg-white/20 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-none bg-[#D4FD00]/15 flex items-center justify-center group-hover:bg-[#D4FD00]/25 transition-colors">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#D4FD00"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white text-xs font-semibold leading-tight">
                    Notre équipe est disponible
                  </div>
                  <div className="text-white/70 text-[11px] font-bold mt-0.5">
                    07 50 83 65 43
                  </div>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="relative flex h-2 w-2 shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-none h-2 w-2 bg-green-500" />
                    </span>
                    <span className="text-[#D4FD00]/70 text-[10px] font-semibold group-hover:text-[#D4FD00] transition-colors">
                      Nous appeler
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* 3. Social proof — +70 clients (bottom-right) */}
          <div
            ref={socialProofRef}
            className="hidden lg:block absolute bottom-36 right-5 z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-none p-4 shadow-lg opacity-0"
          >
            <div className="flex items-center gap-3">
              <div className="text-white font-[var(--font-body)] font-semibold text-2xl leading-none">
                +70
              </div>
              <div>
                <div className="text-white text-xs font-semibold leading-tight">
                  clients accompagnés
                </div>
                <div className="text-white/40 text-[10px] font-medium mt-0.5">
                  De la PME à l&apos;ETI
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
