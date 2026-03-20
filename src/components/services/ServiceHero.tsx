"use client";

import { useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ServiceHeroProps {
  category: string;
  title: string;
  subtitle: string;
  badge?: string;
  imageUrl?: string;
  imageAlt?: string;
  breadcrumbLabel: string;
}

const FALLBACK_IMAGE = "/images/services/default-hero.png";

export function ServiceHero({
  category,
  title,
  subtitle,
  badge,
  imageUrl,
  imageAlt,
  breadcrumbLabel,
}: ServiceHeroProps) {
  const heroSrc = imageUrl || FALLBACK_IMAGE;
  const sectionRef = useRef<HTMLElement>(null);
  const rafRef = useRef<number>(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Mouse parallax for blobs
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        const rect = sectionRef.current?.getBoundingClientRect();
        if (!rect) {
          rafRef.current = 0;
          return;
        }
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setMousePos({ x, y });
        rafRef.current = 0;
      });
    },
    [],
  );

  const handleScrollToProcess = () => {
    const el = document.getElementById("processus");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // GSAP entrance timeline
  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Image container fades in and scales
      tl.from("[data-hero='image-inner']", {
        scale: 0.95,
        opacity: 0,
        duration: 1.2,
        ease: "expo.out",
      }, 0.2);

      // Text elements stagger in
      tl.from("[data-hero='breadcrumb']", { opacity: 0, y: -15, duration: 0.6 }, 0.3);
      tl.from("[data-hero='surtitre']", { opacity: 0, x: -20, duration: 0.6 }, 0.4);
      tl.from("[data-hero='title']", { opacity: 0, y: 40, duration: 0.9, ease: "expo.out" }, 0.45);
      tl.from("[data-hero='subtitle']", { opacity: 0, y: 30, duration: 0.7 }, 0.6);
      tl.from("[data-hero='ctas']", { opacity: 0, y: 25, duration: 0.6 }, 0.75);
      tl.from("[data-hero='google-badge']", { opacity: 0, y: 20, scale: 0.9, duration: 0.6, ease: "back.out(1.4)" }, 0.9);

      // Mobile
      tl.from("[data-hero='image-mobile']", { opacity: 0, scale: 1.08, duration: 1, ease: "expo.out" }, 0.1);
    },
    { scope: sectionRef },
  );

  // Floating animation — accent elements only
  useGSAP(
    () => {
      // Accent square pulse
      gsap.to("[data-hero='accent-square']", {
        scale: 1.3,
        opacity: 0.6,
        duration: 1.2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      // Phone icon — subtle ring
      gsap.to("[data-hero='phone-icon']", {
        rotation: 8,
        duration: 0.15,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
        repeatDelay: 3,
      });

      // CTA shimmer
      gsap.fromTo("[data-hero='cta-shimmer']", {
        x: "-100%",
      }, {
        x: "200%",
        duration: 2,
        ease: "power2.inOut",
        repeat: -1,
        repeatDelay: 4,
      });
    },
    { scope: sectionRef },
  );

  // Scroll parallax — text and accent only (no image parallax)
  useGSAP(
    () => {
      // Image parallax — subtle shift
      gsap.to("[data-hero='image-inner']", {
        y: -20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        },
      });

      // Text parallax — moves up faster (foreground feel)
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
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="dark-section relative overflow-hidden"
      style={{ background: "var(--bg-dark)" }}
    >
      {/* ===== MOBILE LAYOUT ===== */}
      <div className="lg:hidden grain-overlay relative px-4 sm:px-6 pt-28 sm:pt-32 pb-12 sm:pb-16">
        {/* Mobile image */}
        <div
          data-hero="image-mobile"
          className="relative overflow-hidden -mb-2"
        >
          <Image
            src={heroSrc}
            alt={imageAlt || title}
            width={732}
            height={844}
            priority
            className="w-full h-auto"
          />
          <div
            className="absolute inset-x-0 bottom-0 h-1/2 pointer-events-none"
            style={{
              background: "linear-gradient(to top, var(--bg-dark) 0%, var(--bg-dark) 10%, transparent 100%)",
            }}
          />
        </div>

        {/* Mobile text */}
        <div className="flex flex-col gap-5">
          <div data-hero="surtitre" className="flex items-center gap-2.5">
            <div className="w-2 h-2 bg-accent" />
            <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] uppercase text-white/60">
              {category}
            </span>
          </div>

          <h1
            data-hero="title"
            className="font-heading font-normal text-[28px] min-[400px]:text-[32px] sm:text-[44px] leading-[0.92] tracking-[-0.04em] text-white"
          >
            {title}
          </h1>

          <p data-hero="subtitle" className="text-sm sm:text-base leading-relaxed text-white/80">
            {subtitle}
          </p>

          <div data-hero="ctas" className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-2">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 bg-accent text-black font-semibold px-8 py-4 hover:bg-accent/90 active:scale-[0.97] transition-all duration-200"
            >
              Discuter de votre projet
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </div>

      {/* ===== DESKTOP SPLIT LAYOUT ===== */}
      <div className="hidden lg:block relative min-h-[85vh]">
        {/* Dark background — full width */}
        <div className="grain-overlay absolute inset-0 z-0" style={{ background: "var(--bg-dark)" }} />

        {/* Background blurs — accent lime */}
        <div className="absolute inset-0 pointer-events-none z-[1] overflow-hidden">
          <div
            className="absolute w-[60%] h-[70%] top-[-10%] right-[-5%] transition-transform duration-700 ease-out"
            style={{
              background:
                "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.10) 0%, transparent 55%)",
              transform: `translate(${mousePos.x * -15}px, ${mousePos.y * -15}px)`,
            }}
          />
          <div
            className="absolute w-[50%] h-[60%] bottom-[-5%] left-[-10%] transition-transform duration-700 ease-out"
            style={{
              background:
                "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.07) 0%, transparent 55%)",
              transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 10}px)`,
            }}
          />
          <div
            className="absolute w-[40%] h-[40%] top-[30%] left-[25%] transition-transform duration-700 ease-out"
            style={{
              background:
                "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.05) 0%, transparent 50%)",
              transform: `translate(${mousePos.x * -8}px, ${mousePos.y * 8}px)`,
            }}
          />
        </div>

        {/* Content grid */}
        <div className="relative z-10 max-w-[82.5rem] mx-auto min-h-[85vh] px-6 md:px-12">
          {/* LEFT — Text content, centered vertically */}
          <div data-hero="text-col" className="relative z-10 w-1/2 flex flex-col justify-center pt-36 pb-20">
            <div className="relative z-10 max-w-2xl">
              {/* Breadcrumbs */}
              <nav
                data-hero="breadcrumb"
                className="flex items-center gap-2 text-sm text-white/60 mb-10"
                aria-label="Breadcrumb"
              >
                <Link href="/" className="hover:text-white/80 transition-colors">
                  Accueil
                </Link>
                <span>/</span>
                <Link href="/services" className="hover:text-white/80 transition-colors">
                  Services
                </Link>
                <span>/</span>
                <span className="text-white/90">{breadcrumbLabel}</span>
              </nav>

              {/* Surtitre */}
              <div data-hero="surtitre" className="flex items-center gap-2.5 mb-6">
                <div className="relative w-2 h-2">
                  <div className="absolute inset-0 bg-accent" />
                  <div data-hero="accent-square" className="absolute inset-0 bg-accent" />
                </div>
                <span className="text-[11px] font-light tracking-[0.12em] uppercase text-white/60">
                  {category}
                </span>
              </div>

              {/* H1 */}
              <h1
                data-hero="title"
                className="font-heading font-normal text-[52px] lg:text-[64px] xl:text-[72px] leading-[0.92] tracking-[-0.04em] mb-6 text-white"
              >
                {title}
              </h1>

              {/* Subtitle */}
              <p
                data-hero="subtitle"
                className="text-base md:text-lg leading-relaxed text-white/75 max-w-xl mb-8"
              >
                {subtitle}
              </p>

              {/* CTAs */}
              <div
                data-hero="ctas"
                className="flex items-center gap-6 mb-10"
              >
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center gap-3 bg-accent text-black font-semibold px-8 py-4 hover:bg-accent/90 active:scale-[0.97] transition-all duration-200 overflow-hidden"
                >
                  <span data-hero="cta-shimmer" className="absolute inset-y-0 w-[40%] bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
                  Discuter de votre projet
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  />
                </Link>

                {/* Google rating badge */}
                <div
                  data-hero="google-badge"
                  className="flex items-center gap-3 px-5 py-3 bg-white/[0.06] backdrop-blur-sm border border-white/[0.12]"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A11.96 11.96 0 0 0 1 12c0 1.94.46 3.77 1.18 5.07l3.66-2.98z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={13} fill="currentColor" strokeWidth={0} className="text-accent" />
                    ))}
                  </div>
                  <span className="text-sm text-white/80">5/5 sur Google</span>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT — Image flush to bottom, oversized */}
          <div className="absolute right-0 bottom-0 w-[55%] pointer-events-none">
            <div
              data-hero="image-inner"
              className="relative w-full"
            >
              <Image
                src={heroSrc}
                alt={imageAlt || title}
                width={800}
                height={600}
                priority
                sizes="55vw"
                className="block w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
