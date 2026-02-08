"use client";

import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CheckCircle2, ChevronDown } from "lucide-react";
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

const TESTIMONIALS = [
  {
    quote: "Vizion a transformé notre approche commerciale.",
    author: "Marie Dupont",
    role: "CEO, TechStart",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
  },
  {
    quote: "Un ROI visible dès le premier trimestre.",
    author: "Thomas Laurent",
    role: "DG, IndusPro",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  },
  {
    quote: "L'équipe la plus réactive du marché.",
    author: "Sophie Martin",
    role: "CMO, SaaSify",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  },
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
  const socialProofRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // Rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Mouse parallax effect
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: -12, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6 }
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
          statsRef.current,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.3"
        )
        .fromTo(
          logosRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.5 },
          "-=0.2"
        )
        .fromTo(
          imageRef.current,
          { opacity: 0, x: 40, scale: 0.95 },
          { opacity: 1, x: 0, scale: 1, duration: 0.9, ease: "back.out(1.2)" },
          "-=0.9"
        )
        .fromTo(
          scatterRef.current,
          { opacity: 0, x: -20, scale: 0.8 },
          { opacity: 1, x: 0, scale: 1, duration: 0.6, ease: "back.out(1.5)" },
          "-=0.4"
        )
        .fromTo(
          socialProofRef.current,
          { opacity: 0, x: -20, scale: 0.8 },
          { opacity: 1, x: 0, scale: 1, duration: 0.6, ease: "back.out(1.5)" },
          "-=0.4"
        )
        .fromTo(
          scrollIndicatorRef.current,
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.2"
        );
    },
    { scope: containerRef }
  );

  // Parse h1 to add highlight effect
  const renderH1WithHighlight = () => {
    const text = homeContent.hero.h1;
    // Highlight "clarté" or key word - adjust based on your actual h1 content
    const highlightWord = "clarté";
    if (text.includes(highlightWord)) {
      const parts = text.split(highlightWord);
      return (
        <>
          {parts[0]}
          <span className="relative inline-block">
            <span className="relative z-10 text-[#D4FD00]">{highlightWord}</span>
            <span
              className="absolute bottom-2 left-0 w-full h-3 bg-[#D4FD00]/20 -z-0"
              style={{ transform: 'skewX(-3deg)' }}
            />
          </span>
          {parts[1]}
        </>
      );
    }
    return text;
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative pt-20 sm:pt-24 md:pt-28 lg:pt-36 pb-8 sm:pb-10 md:pb-12 px-4 sm:px-6 md:px-8 lg:px-12 flex items-center min-h-[100svh] overflow-hidden grain-overlay"
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
        {/* CONTENT AREA - mobile-first: moins de padding, gaps serrés */}
        <div className="w-full px-0 py-2 sm:p-4 md:p-6 lg:p-8 relative z-10 flex flex-col justify-center gap-3 sm:gap-4">
          {/* Premium Badge with Glassmorphism */}
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full w-fit opacity-0"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4FD00] opacity-50"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-br from-[#D4FD00] via-[#D4FD00]/80 to-[#D4FD00]/50 shadow-[0_0_8px_rgba(212,253,0,0.5)]"></span>
            </span>
            <span
              className="text-[9px] sm:text-[10px] font-medium tracking-[0.08em] uppercase"
              style={{ color: "rgba(255,255,255,0.9)" }}
            >
              {homeContent.hero.badge}
            </span>
          </div>

          {/* H1 with highlighted word */}
          <h1
            ref={h1Ref}
            className="font-heading font-normal text-[28px] min-[400px]:text-[32px] sm:text-[44px] md:text-[58px] lg:text-[80px] leading-[0.95] tracking-[-0.03em] opacity-0"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.92) 50%, rgba(255,255,255,0.88) 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {renderH1WithHighlight()}
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
            className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 pb-3 sm:pb-4 border-b border-white/10 opacity-0"
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

          <div ref={ctasRef} className="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-4 mt-4 opacity-0">
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

          {/* Stats Bar - plus compact sur mobile */}
          <div
            ref={statsRef}
            className="flex flex-wrap items-center gap-3 sm:gap-6 mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-white/5 opacity-0"
          >
            <div className="flex items-center gap-2">
              <span className="text-[#D4FD00] font-heading font-bold text-xl sm:text-2xl">70+</span>
              <span className="text-white/50 text-[10px] sm:text-xs leading-tight">clients<br/>accompagnés</span>
            </div>
            <div className="w-px h-8 bg-white/10 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-[#D4FD00] font-heading font-bold text-xl sm:text-2xl">150+</span>
              <span className="text-white/50 text-[10px] sm:text-xs leading-tight">projets<br/>livrés</span>
            </div>
            <div className="w-px h-8 bg-white/10 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-[#D4FD00] font-heading font-bold text-xl sm:text-2xl">4.9</span>
              <span className="text-white/50 text-[10px] sm:text-xs leading-tight">note<br/>moyenne</span>
            </div>
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

        {/* RIGHT IMAGE - mobile: hauteur raisonnable, moins de marge */}
        <div
          ref={imageRef}
          className="relative z-30 group overflow-visible aspect-[4/3] max-h-[280px] sm:max-h-[320px] md:max-h-[360px] lg:max-h-none lg:aspect-auto lg:h-full lg:min-h-[420px] mt-4 mb-2 sm:my-6 lg:my-0 opacity-0"
        >
          {/* Accent border frames */}
          <div className="absolute -inset-2 sm:-inset-3 border border-[#D4FD00]/20 rounded-lg pointer-events-none hidden lg:block" />
          <div className="absolute -inset-4 sm:-inset-6 border border-[#D4FD00]/10 rounded-xl pointer-events-none hidden lg:block" />

          {/* Corner accents */}
          <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-[#D4FD00] rounded-tr-lg hidden lg:block" />
          <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-[#D4FD00] rounded-bl-lg hidden lg:block" />

          <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl">
            <img
              src="/hero-binoculars.png"
              alt="Strategie"
              className="absolute inset-0 w-full h-full object-contain object-center"
            />
          </div>

          {/* 1. Scatter plot (top-left) with parallax */}
          <div
            ref={scatterRef}
            className="hidden lg:block absolute top-10 left-12 z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 shadow-lg opacity-0 transition-transform duration-300"
            style={{
              transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)`,
            }}
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
            <div className="flex items-center justify-between mt-2">
              <span className="text-white/60 text-[10px]">Performance</span>
              <span className="text-[#D4FD00] text-xs font-bold">+127%</span>
            </div>
          </div>

          {/* 2. Social proof with rotating testimonial (bottom-left) with parallax */}
          <div
            ref={socialProofRef}
            className="hidden lg:block absolute bottom-16 left-5 z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-6 py-4 shadow-lg opacity-0 transition-transform duration-300 w-[320px]"
            style={{
              transform: `translate(${mousePosition.x * -10}px, ${mousePosition.y * -10}px)`,
            }}
          >
            {/* Rotating testimonial */}
            <div className="relative h-[90px] overflow-hidden">
              {TESTIMONIALS.map((testimonial, i) => (
                <div
                  key={i}
                  className="absolute inset-0 flex items-center gap-4"
                  style={{
                    opacity: i === testimonialIndex ? 1 : 0,
                    transform: `translateY(${i === testimonialIndex ? 0 : 10}px)`,
                    transition: 'opacity 0.4s ease, transform 0.4s ease',
                    pointerEvents: i === testimonialIndex ? 'auto' : 'none',
                  }}
                >
                  {/* Client Photo */}
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#D4FD00]/40 shrink-0"
                  />

                  <div className="flex-1 min-w-0">
                    {/* 5 Yellow Stars */}
                    <div className="flex items-center gap-0.5 mb-1.5">
                      {[...Array(5)].map((_, starIndex) => (
                        <svg
                          key={starIndex}
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="#D4FD00"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>

                    {/* Testimonial Quote */}
                    <p className="text-[12px] leading-snug mb-1.5" style={{ color: '#ffffff' }}>
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>

                    {/* Client Info */}
                    <div className="flex items-center gap-1.5">
                      <span className="text-white text-[11px] font-semibold">
                        {testimonial.author}
                      </span>
                      <span className="text-white/40">•</span>
                      <span className="text-white/50 text-[10px]">{testimonial.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Google Rating Card (top-right) */}
          <div
            className="hidden lg:block absolute top-16 right-8 z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 shadow-lg transition-transform duration-300"
            style={{
              transform: `translate(${mousePosition.x * -8}px, ${mousePosition.y * -8}px)`,
            }}
          >
            <div className="flex items-center gap-3">
              {/* Google logo */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#FBBF24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                  <span className="text-white/80 text-xs font-bold ml-1">5/5</span>
                </div>
                <span className="text-white/50 text-[10px]">Note Google Business</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - plus petit sur mobile */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 sm:gap-2 opacity-0"
      >
        <span className="text-white/40 text-[9px] sm:text-[10px] tracking-widest uppercase">Découvrir</span>
        <div className="w-5 h-8 sm:w-6 sm:h-10 border border-white/20 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#D4FD00] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
