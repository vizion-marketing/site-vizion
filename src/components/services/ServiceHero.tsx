"use client";

import { useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Phone } from "lucide-react";
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

      // Accent panel slides in from right
      tl.from("[data-hero='accent-col']", {
        xPercent: 100,
        opacity: 0,
        duration: 1.2,
        ease: "expo.out",
      }, 0);

      // Image scales up from center
      tl.from("[data-hero='image-inner']", {
        scale: 1.15,
        opacity: 0,
        duration: 1.4,
        ease: "expo.out",
      }, 0.2);

      // Text elements stagger in
      tl.from("[data-hero='breadcrumb']", { opacity: 0, y: -15, duration: 0.6 }, 0.3);
      tl.from("[data-hero='surtitre']", { opacity: 0, x: -20, duration: 0.6 }, 0.4);
      tl.from("[data-hero='title']", { opacity: 0, y: 40, duration: 0.9, ease: "expo.out" }, 0.45);
      tl.from("[data-hero='subtitle']", { opacity: 0, y: 30, duration: 0.7 }, 0.6);
      tl.from("[data-hero='ctas']", { opacity: 0, y: 25, duration: 0.6 }, 0.75);
      tl.from("[data-hero='badge']", { opacity: 0, y: 15, scale: 0.95, duration: 0.5 }, 0.85);

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

      // Badge glow pulse
      gsap.to("[data-hero='badge']", {
        boxShadow: "0 0 20px rgba(var(--color-accent-rgb), 0.15)",
        duration: 2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
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
      // Accent panel parallax — subtle shift
      gsap.to("[data-hero='accent-col']", {
        y: -30,
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

        {/* Accent panel — right side with oblique left edge */}
        <div
          data-hero="accent-col"
          className="absolute inset-y-0 right-0 z-[1] bg-accent"
          style={{
            width: "45%",
            clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
        />

        {/* Content grid */}
        <div className="relative z-10 max-w-[82.5rem] mx-auto grid grid-cols-[1fr_40%] min-h-[85vh] px-6 md:px-12">
          {/* LEFT — Text content, centered vertically */}
          <div data-hero="text-col" className="relative flex flex-col justify-center pt-36 pb-20 pr-12">
            {/* Decorative blobs — mouse-reactive */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <div
                className="absolute w-[70%] h-[60%] top-[5%] right-[-15%] transition-transform duration-700 ease-out"
                style={{
                  background:
                    "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.10) 0%, transparent 55%)",
                  transform: `translate(${mousePos.x * -15}px, ${mousePos.y * -15}px)`,
                }}
              />
              <div
                className="absolute w-[60%] h-[50%] bottom-[-10%] left-[-10%] transition-transform duration-700 ease-out"
                style={{
                  background:
                    "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.06) 0%, transparent 55%)",
                  transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 10}px)`,
                }}
              />
            </div>

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
                className="font-heading font-normal text-[52px] lg:text-[64px] xl:text-[72px] leading-[0.92] tracking-[-0.04em] mb-6"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.92) 50%, rgba(255,255,255,0.88) 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
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

                <div className="flex items-center gap-3 text-white/70">
                  <div className="w-10 h-10 border border-white/20 flex items-center justify-center">
                    <Phone data-hero="phone-icon" size={16} className="text-white/80" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-light tracking-[0.05em] uppercase text-white/50">
                      Ou appelez-nous
                    </span>
                    <span className="text-sm font-medium text-white/90">07 50 83 65 43</span>
                  </div>
                </div>
              </div>

              {/* Badge */}
              {badge && (
                <div
                  data-hero="badge"
                  className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/[0.08] backdrop-blur-sm border border-white/[0.15] w-fit"
                >
                  <Check className="w-4 h-4 text-accent" />
                  <span className="text-sm text-white/90">{badge}</span>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT — Image large, flush to absolute bottom */}
          <div className="relative">
            <div
              data-hero="image-inner"
              className="absolute left-[-35%] right-[-30%] z-20"
              style={{
                top: "-15%",
                bottom: "-20%",
              }}
            >
              <Image
                src={heroSrc}
                alt={imageAlt || title}
                fill
                priority
                sizes="50vw"
                className="object-contain object-bottom"
                style={{ objectPosition: "center bottom" }}
              />
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
