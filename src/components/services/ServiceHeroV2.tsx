"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ServiceHeroV2Props {
  category: string;
  title: string;
  subtitle: string;
  badge?: string;
  imageUrl?: string;
  imageAlt?: string;
  breadcrumbLabel: string;
}

const FALLBACK_IMAGE = "/images/services/default-hero.png";

export function ServiceHeroV2({
  category,
  title,
  subtitle,
  imageUrl,
  imageAlt,
  breadcrumbLabel,
}: ServiceHeroV2Props) {
  const heroSrc = imageUrl || FALLBACK_IMAGE;
  const sectionRef = useRef<HTMLElement>(null);

  // GSAP entrance
  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from("[data-v2='image']", {
        scale: 1.08,
        opacity: 0,
        duration: 1.4,
        ease: "expo.out",
      }, 0);

      tl.from("[data-v2='breadcrumb']", { opacity: 0, y: -15, duration: 0.6 }, 0.3);
      tl.from("[data-v2='surtitre']", { opacity: 0, x: -20, duration: 0.6 }, 0.4);
      tl.from("[data-v2='title']", { opacity: 0, y: 40, duration: 0.9, ease: "expo.out" }, 0.45);
      tl.from("[data-v2='subtitle']", { opacity: 0, y: 30, duration: 0.7 }, 0.6);
      tl.from("[data-v2='ctas']", { opacity: 0, y: 25, duration: 0.6 }, 0.75);
      tl.from("[data-v2='google-badge']", { opacity: 0, y: 20, scale: 0.9, duration: 0.6, ease: "back.out(1.4)" }, 0.9);

      // Accent square pulse
      gsap.to("[data-v2='accent-square']", {
        scale: 1.3,
        opacity: 0.6,
        duration: 1.2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      // CTA shimmer
      gsap.fromTo("[data-v2='cta-shimmer']", {
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

  // Scroll parallax
  useGSAP(
    () => {
      gsap.to("[data-v2='image']", {
        y: -30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        },
      });

      gsap.to("[data-v2='text-col']", {
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
      className="dark-section relative overflow-hidden"
      style={{ background: "var(--bg-dark)" }}
    >
      {/* ===== MOBILE LAYOUT ===== */}
      <div className="lg:hidden grain-overlay relative px-4 sm:px-6 pt-28 sm:pt-32 pb-12 sm:pb-16 min-h-dvh flex flex-col justify-end">
        {/* Mobile image — full width with edge fades */}
        <div className="relative overflow-hidden -mb-2 aspect-[3/4] max-h-[50vh]">
          <Image
            src={heroSrc}
            alt={imageAlt || title}
            fill
            priority
            className="object-cover object-top"
          />
          {/* Bottom fade */}
          <div
            className="absolute inset-x-0 bottom-0 h-[50%] pointer-events-none"
            style={{
              background: "linear-gradient(to top, var(--bg-dark) 0%, var(--bg-dark) 5%, transparent 100%)",
            }}
          />
          {/* Top fade */}
          <div
            className="absolute inset-x-0 top-0 h-24 pointer-events-none"
            style={{
              background: "linear-gradient(to bottom, var(--bg-dark) 0%, transparent 100%)",
            }}
          />
          {/* Left fade */}
          <div
            className="absolute inset-y-0 left-0 w-16 pointer-events-none"
            style={{
              background: "linear-gradient(to right, var(--bg-dark) 0%, transparent 100%)",
            }}
          />
          {/* Right fade */}
          <div
            className="absolute inset-y-0 right-0 w-16 pointer-events-none"
            style={{
              background: "linear-gradient(to left, var(--bg-dark) 0%, transparent 100%)",
            }}
          />
        </div>

        {/* Mobile text */}
        <div className="flex flex-col gap-5">
          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-2 text-xs text-white/60"
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

          <h1
            data-v2="title"
            className="font-heading font-normal !text-[28px] min-[400px]:!text-[32px] sm:!text-[40px] !leading-[0.95] !tracking-[-0.035em] text-white"
          >
            {title}
          </h1>

          <p data-v2="subtitle" className="text-[13px] sm:text-[14px] leading-relaxed text-white/80">
            {subtitle}
          </p>

          <div data-v2="ctas" className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-2">
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

      {/* ===== DESKTOP LAYOUT — Image pleine hauteur à droite ===== */}
      <div className="hidden lg:block relative min-h-dvh">
        <div className="grain-overlay absolute inset-0 z-0" style={{ background: "var(--bg-dark)" }} />

        {/* Image — pleine hauteur, colonne droite */}
        <div
          data-v2="image"
          className="absolute top-0 right-0 bottom-0 w-[45%] z-[1]"
        >
          <Image
            src={heroSrc}
            alt={imageAlt || title}
            fill
            priority
            sizes="50vw"
            className="object-cover object-[center_25%]"
          />
          {/* Dégradé noir fondu à gauche — -left-1 évite le trait blanc */}
          <div
            className="absolute -left-1 top-0 bottom-0 right-0 pointer-events-none"
            style={{
              background: "linear-gradient(to right, var(--bg-dark) 0%, rgba(12,12,10,0.7) 30%, rgba(12,12,10,0.2) 60%, transparent 100%)",
            }}
          />
          {/* Dégradé subtil en bas */}
          <div
            className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
            style={{
              background: "linear-gradient(to top, var(--bg-dark) 0%, transparent 100%)",
            }}
          />
          {/* Dégradé subtil en haut */}
          <div
            className="absolute inset-x-0 top-0 h-24 pointer-events-none"
            style={{
              background: "linear-gradient(to bottom, var(--bg-dark) 0%, transparent 100%)",
            }}
          />
        </div>

        {/* Lueur accent lime — côté gauche */}
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

        {/* Content — colonne gauche */}
        <div className="relative z-10 max-w-[82.5rem] mx-auto min-h-dvh px-6 md:px-12">
          <div data-v2="text-col" className="relative z-10 w-[55%] flex flex-col justify-center min-h-dvh">
            <div className="relative z-10">
              {/* Breadcrumbs */}
              <nav
                data-v2="breadcrumb"
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

              {/* H1 */}
              <h1
                data-v2="title"
                className="font-heading font-normal !text-[36px] lg:!text-[44px] xl:!text-[48px] !leading-[0.95] !tracking-[-0.035em] mb-6 text-white"
              >
                {title}
              </h1>

              {/* Subtitle */}
              <p
                data-v2="subtitle"
                className="text-[14px] md:text-[15px] leading-relaxed text-white/75 max-w-xl mb-8"
              >
                {subtitle}
              </p>

              {/* CTAs */}
              <div
                data-v2="ctas"
                className="flex items-center gap-6 mb-10"
              >
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center gap-3 bg-accent text-black font-semibold px-8 py-4 hover:bg-accent/90 active:scale-[0.97] transition-all duration-200 overflow-hidden"
                >
                  <span data-v2="cta-shimmer" className="absolute inset-y-0 w-[40%] bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
                  Discuter de votre projet
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  />
                </Link>

                <button
                  data-v2="google-badge"
                  onClick={() => {
                    const el = document.getElementById("processus");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/[0.15] text-white font-medium hover:bg-white/[0.06] active:scale-[0.97] transition-all duration-200"
                >
                  Découvrir
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
