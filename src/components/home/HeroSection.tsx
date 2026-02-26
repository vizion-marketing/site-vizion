"use client";

import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { homeContent, type HeroContent } from "@/content/home";
import { ArrowUpRightIcon } from "@/components/icons";

gsap.registerPlugin(useGSAP);

const TESTIMONIALS = [
  {
    quote: "L'accompagnement d'Hugo et Lucas est vraiment qualitatif ! Compétents et très bons formateurs. Je recommande cette agence de Marketing digital à Toulouse !",
    author: "Thomas Ensenat",
    role: "Fondateur, Ensenat Coaching",
    image: "/images/clients/ensenat.avif"
  },
  {
    quote: "Je recommande fortement cette agence toulousaine ! Équipe professionnelle et répondant à tous types de besoins. Lucas est mon Directeur Marketing externalisé et j'en suis ravie.",
    author: "Tamia",
    role: "Fondatrice, Tatamia",
    image: "/images/clients/tatamia.avif"
  },
  {
    quote: "Nous avons confié la refonte de notre site web à Lucas et son équipe, nous en sommes très satisfaits bien que tout ait été fait à distance, depuis Toulouse jusqu'à Paris.",
    author: "Barthélémy Delcampe",
    role: "Responsable développement, Quai Liberté",
    image: "/images/clients/quai-liberte.avif"
  },
  {
    quote: "Hugo nous accompagne depuis un an maintenant pour restructurer tout notre CRM. Nous en sommes très satisfaits.",
    author: "Olivier Mounié",
    role: "Ojetables",
    image: "/images/clients/placeholder.avif"
  },
  {
    quote: "Vizion m'a accompagné dans le développement de mon image sur LinkedIn. Nous avons dépassé le million d'impressions en quelques mois, j'en suis très satisfait.",
    author: "Olivier Bas",
    role: "Vice-Président, Havas Paris",
    image: "/images/clients/olivierbas.avif"
  },
  {
    quote: "Nous externalisons une grosse partie de notre marketing auprès de Vizion : stratégie produit, aide à la vente, automatisation CRM, gestion de nos campagnes. Nous en sommes toujours très satisfaits, même deux ans après.",
    author: "Clément Carrere",
    role: "Co-fondateur, easyVirtual.tours",
    image: "/images/clients/easyvirtual.avif"
  },
];

interface HeroSectionProps {
  content?: HeroContent;
}

export function HeroSection({ content: contentProp }: HeroSectionProps = {}) {
  const hero = contentProp ?? homeContent.hero;
  const containerRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const baselineRef = useRef<HTMLParagraphElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const scatterRef = useRef<HTMLDivElement>(null);
  const socialProofRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const wordRef = useRef<HTMLSpanElement>(null);

  // Rotate testimonials with auto-play that resets on manual navigation
  const testimonialIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTestimonialAutoPlay = () => {
    if (testimonialIntervalRef.current) clearInterval(testimonialIntervalRef.current);
    testimonialIntervalRef.current = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
  };

  useEffect(() => {
    startTestimonialAutoPlay();
    return () => {
      if (testimonialIntervalRef.current) clearInterval(testimonialIntervalRef.current);
    };
  }, []);

  const goToTestimonial = (direction: "prev" | "next") => {
    setTestimonialIndex((prev) =>
      direction === "next"
        ? (prev + 1) % TESTIMONIALS.length
        : (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );
    startTestimonialAutoPlay();
  };

  // Rotate H1 words
  const rotatingWords = hero.h1RotatingWords;
  useEffect(() => {
    if (rotatingWords.length <= 1) return;
    const interval = setInterval(() => {
      if (!wordRef.current) return;
      const el = wordRef.current;
      gsap.to(el, {
        y: -20,
        opacity: 0,
        duration: 0.35,
        ease: "power2.in",
        onComplete: () => {
          setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
          gsap.set(el, { y: 20 });
          gsap.to(el, { y: 0, opacity: 1, duration: 0.35, ease: "power2.out" });
        },
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [rotatingWords]);

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
        );
    },
    { scope: containerRef }
  );

  // Parse h1 to add highlight + rotating word
  const renderH1 = () => {
    const text = hero.h1;
    const highlightWord = hero.h1Highlight;
    const baseWord = rotatingWords[0]; // "produit" — the word to replace with slider

    // Build fragments by splitting on both special words
    // The h1 is: "Faites de votre produit une évidence sur son marché."
    // We need to handle the rotating word AND the highlight
    const parts: React.ReactNode[] = [];
    let remaining = text;

    // First, split on the rotating base word
    const rotatingIdx = remaining.indexOf(baseWord);
    if (rotatingIdx !== -1) {
      parts.push(remaining.slice(0, rotatingIdx));
      parts.push(
        <span key="rotating" className="inline-block relative align-baseline" style={{ minWidth: '3ch', paddingBottom: '0.15em' }}>
          <span
            ref={wordRef}
            className="inline-block text-accent"
          >
            {rotatingWords[currentWordIndex]}
          </span>
        </span>
      );
      remaining = remaining.slice(rotatingIdx + baseWord.length);
    }

    // Then handle highlight in the remaining text
    if (highlightWord && remaining.includes(highlightWord)) {
      const hlIdx = remaining.indexOf(highlightWord);
      parts.push(remaining.slice(0, hlIdx));
      parts.push(
        <span key="highlight" className="relative inline-block">
          <span className="relative z-10 text-accent">{highlightWord}</span>
          <span
            className="absolute bottom-2 left-0 w-full h-3 bg-accent/20 -z-0"
            style={{ transform: 'skewX(-3deg)' }}
          />
        </span>
      );
      parts.push(remaining.slice(hlIdx + highlightWord.length));
    } else {
      parts.push(remaining);
    }

    return parts;
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="dark-section relative pt-20 sm:pt-24 md:pt-28 lg:pt-36 pb-8 sm:pb-10 md:pb-12 px-4 sm:px-6 md:px-8 lg:px-12 flex items-center min-h-[100svh] overflow-hidden grain-overlay"
      style={{ background: "var(--bg-dark)" }}
    >
      {/* Base + radial gradients jaune Vizion animés */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute w-[80%] h-[60%] top-[10%] left-[-20%] animate-gradient-float-1"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.12) 0%, transparent 55%)",
          }}
        />
        <div
          className="absolute w-[70%] h-[50%] top-[-10%] right-[-10%] animate-gradient-float-2"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.08) 0%, transparent 55%)",
          }}
        />
        <div
          className="absolute w-[60%] h-[70%] bottom-[-15%] left-[15%] animate-gradient-float-3"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.06) 0%, transparent 55%)",
          }}
        />
        <div
          className="absolute w-[50%] h-[50%] bottom-[5%] right-[-15%] animate-gradient-float-4"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.05) 0%, transparent 55%)",
          }}
        />
        <div
          className="absolute w-[45%] h-[45%] top-[20%] left-[-10%] animate-gradient-float-5"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.06) 0%, transparent 55%)",
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
            {renderH1()}
          </h1>

          <p
            ref={baselineRef}
            className="text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl opacity-0"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            {hero.baseline}
          </p>

          <div
            ref={badgesRef}
            className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 pb-3 sm:pb-4 border-b border-white/10 opacity-0"
          >
            {hero.badges.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-[11px] sm:text-xs font-semibold tracking-tight"
                style={{ color: "rgba(255,255,255,0.8)" }}
              >
                <CheckCircle2 size={14} className="shrink-0" style={{ color: "var(--color-accent)" }} />
                {item}
              </div>
            ))}
          </div>

          <div ref={ctasRef} className="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-4 mt-4 opacity-0">
            <Link
              href={hero.cta.primary.href}
              className="btn btn-primary group"
            >
              {hero.cta.primary.text}{" "}
              <ArrowUpRightIcon
                className="shrink-0 inline-block group-hover:translate-x-0.5 transition-transform"
                size={16}
              />
            </Link>
            <Link
              href={hero.cta.secondary.href}
              className="btn btn-secondary group"
            >
              {hero.cta.secondary.text}{" "}
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
              <span className="text-accent font-heading font-bold text-xl sm:text-2xl">70+</span>
              <span className="text-white/50 text-[10px] sm:text-xs leading-tight">clients<br/>accompagnés</span>
            </div>
            <div className="w-px h-8 bg-white/10 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-accent font-heading font-bold text-xl sm:text-2xl">5 ans</span>
              <span className="text-white/50 text-[10px] sm:text-xs leading-tight">d&apos;expertise</span>
            </div>
            <div className="w-px h-8 bg-white/10 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-accent font-heading font-bold text-xl sm:text-2xl">+500</span>
              <span className="text-white/50 text-[10px] sm:text-xs leading-tight">assets marketing<br/>déjà livrés</span>
            </div>
          </div>

          {/* Mobile Testimonial */}
          <div className="lg:hidden mt-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-4 py-4">
            <div className="relative min-h-[140px]">
              {TESTIMONIALS.map((testimonial, i) => (
                <div
                  key={i}
                  className="absolute inset-0 flex items-start gap-3"
                  style={{
                    opacity: i === testimonialIndex ? 1 : 0,
                    transform: `translateY(${i === testimonialIndex ? 0 : 10}px)`,
                    transition: 'opacity 0.4s ease, transform 0.4s ease',
                    pointerEvents: i === testimonialIndex ? 'auto' : 'none',
                  }}
                >
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover border-2 border-accent/40 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-0.5 mb-2">
                      {[...Array(5)].map((_, starIndex) => (
                        <svg key={starIndex} width="12" height="12" viewBox="0 0 24 24" fill="var(--color-accent)" aria-hidden="true">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-[12px] leading-relaxed text-white mb-2">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-1.5 mt-2">
                      <span className="text-white text-[11px] font-semibold">{testimonial.author}</span>
                      <span className="text-white/40 text-[11px]">•</span>
                      <span className="text-white/60 text-[10px]">{testimonial.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT IMAGE - masquée sur mobile, visible desktop */}
        <div
          ref={imageRef}
          className="relative z-30 group overflow-visible hidden lg:block lg:aspect-auto lg:h-full lg:min-h-[420px] lg:my-0 opacity-0"
        >
          {/* Accent border frames */}
          <div className="absolute -inset-2 sm:-inset-3 border border-accent/20 rounded-lg pointer-events-none hidden lg:block" />
          <div className="absolute -inset-4 sm:-inset-6 border border-accent/10 rounded-xl pointer-events-none hidden lg:block" />

          {/* Corner accents */}
          <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-accent rounded-tr-lg hidden lg:block" />
          <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-accent rounded-bl-lg hidden lg:block" />

          <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/hero-binoculars.avif"
              alt="Agence marketing Toulouse Vizion - positionnement stratégique, sales enablement et tunnel de vente aligné pour PME et ETI"
              fill
              priority
              sizes="(max-width: 640px) 280px, (max-width: 1024px) 360px, 420px"
              className="object-contain object-center"
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
                  <stop offset="100%" stopColor="var(--color-accent)" />
                </linearGradient>
                <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="48">
                  <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
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
              <span className="text-accent text-xs font-bold">+127%</span>
            </div>
          </div>

          {/* 2. Social proof with rotating testimonial (bottom-left) with parallax */}
          <div
            ref={socialProofRef}
            className="hidden lg:block absolute bottom-12 left-5 z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-6 py-5 shadow-lg opacity-0 transition-transform duration-300 w-[520px]"
            style={{
              transform: `translate(${mousePosition.x * -10}px, ${mousePosition.y * -10}px)`,
            }}
          >
            {/* Rotating testimonial */}
            <div className="relative h-[120px] overflow-hidden">
              {TESTIMONIALS.map((testimonial, i) => (
                <div
                  key={i}
                  className="absolute inset-0 flex items-start gap-4"
                  style={{
                    opacity: i === testimonialIndex ? 1 : 0,
                    transform: `translateY(${i === testimonialIndex ? 0 : 10}px)`,
                    transition: 'opacity 0.4s ease, transform 0.4s ease',
                    pointerEvents: i === testimonialIndex ? 'auto' : 'none',
                  }}
                >
                  {/* Client Photo */}
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover border-2 border-accent/40 shrink-0 mt-0.5"
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
                          fill="var(--color-accent)"
                          aria-hidden="true"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>

                    {/* Testimonial Quote */}
                    <p className="text-[12px] leading-snug mb-2" style={{ color: '#ffffff' }}>
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

            {/* Navigation arrows — positioned on edges, vertically centered */}
            <button
              onClick={() => goToTestimonial("prev")}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-colors z-10"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft size={14} className="text-white/70" />
            </button>
            <button
              onClick={() => goToTestimonial("next")}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-colors z-10"
              aria-label="Témoignage suivant"
            >
              <ChevronRight size={14} className="text-white/70" />
            </button>
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
                    <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#FBBF24" aria-hidden="true">
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

    </section>
  );
}
