"use client";

import { useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Check } from "lucide-react";

interface ServiceHeroProps {
  category: string;
  title: string;
  subtitle: string;
  badge?: string;
  imageUrl?: string;
  imageAlt?: string;
  breadcrumbLabel: string;
}

const FALLBACK_IMAGE = "/images/landing-dashboard.avif";

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

  // Scroll parallax for desktop image
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -40]);

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

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="dark-section grain-overlay relative overflow-hidden px-4 sm:px-6 md:px-12 py-20 sm:py-24 md:py-32 lg:py-40"
      style={{ background: "var(--bg-dark)" }}
    >
      {/* Blobs décoratifs — mouse-reactive */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute w-[80%] h-[60%] top-[10%] left-[-20%] animate-gradient-float-1 transition-transform duration-700 ease-out"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.12) 0%, transparent 55%)",
            transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`,
          }}
        />
        <div
          className="absolute w-[70%] h-[50%] top-[-10%] right-[-10%] animate-gradient-float-2 transition-transform duration-700 ease-out"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.08) 0%, transparent 55%)",
            transform: `translate(${mousePos.x * -15}px, ${mousePos.y * -15}px)`,
          }}
        />
        <div
          className="absolute w-[60%] h-[70%] bottom-[-15%] left-[15%] animate-gradient-float-3 transition-transform duration-700 ease-out"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.06) 0%, transparent 55%)",
            transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 10}px)`,
          }}
        />
      </div>

      <div className="max-w-[82.5rem] mx-auto relative z-10">
        {/* Breadcrumbs */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="hidden md:flex items-center gap-2 text-sm text-white/60 mb-10"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-white/80 transition-colors">
            Accueil
          </Link>
          <span>/</span>
          <Link
            href="/services"
            className="hover:text-white/80 transition-colors"
          >
            Services
          </Link>
          <span>/</span>
          <span className="text-white/90">{breadcrumbLabel}</span>
        </motion.nav>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.85fr] gap-10 lg:gap-16 items-end">
          {/* Image mobile — au-dessus du texte */}
          <motion.div
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="relative lg:hidden aspect-[16/9] overflow-hidden border border-white/10"
          >
            <Image
              src={heroSrc}
              alt={imageAlt || title}
              fill
              priority
              className="object-cover"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, rgba(12,12,10,0.6) 0%, transparent 40%)",
              }}
            />
          </motion.div>

          {/* Colonne texte */}
          <div className="flex flex-col gap-6">
            {/* Surtitre */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="flex items-center gap-2.5"
            >
              <div className="w-2 h-2 bg-accent" />
              <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] uppercase text-white/60">
                {category}
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="font-heading font-normal text-[28px] min-[400px]:text-[32px] sm:text-[44px] md:text-[58px] lg:text-[72px] leading-[0.95] tracking-[-0.03em]"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.92) 50%, rgba(255,255,255,0.88) 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              {title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
              className="text-sm sm:text-base md:text-lg leading-relaxed text-white/80 max-w-xl"
            >
              {subtitle}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 mt-2"
            >
              <Link
                href="/contact"
                className="relative inline-flex items-center justify-center gap-3 bg-accent text-black font-semibold px-8 py-4 hover:bg-accent/90 hover:scale-[1.02] active:scale-[0.97] transition-all duration-200 overflow-hidden group"
              >
                <span className="w-2 h-2 bg-black" />
                Discuter de votre projet
              </Link>
              <button
                onClick={handleScrollToProcess}
                className="group inline-flex items-center justify-center gap-3 border border-white/20 text-white px-8 py-4 hover:bg-white/5 hover:border-white/30 active:scale-[0.97] transition-all duration-200"
              >
                Voir notre méthode
                <span className="inline-block group-hover:translate-y-1.5 transition-transform duration-300">
                  ↓
                </span>
              </button>
            </motion.div>

            {/* Badge */}
            {badge && (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 0.55,
                  type: "spring",
                  stiffness: 200,
                }}
                className="hidden sm:inline-flex items-center gap-2.5 px-4 py-2 bg-white/[0.08] backdrop-blur-sm border border-white/[0.15] w-fit"
              >
                <Check className="w-4 h-4 text-accent" />
                <span className="text-sm text-white/90">{badge}</span>
              </motion.div>
            )}
          </div>

          {/* Image desktop — colonne droite with scroll parallax */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="relative hidden lg:block self-end overflow-visible lg:-mb-40"
          >
            {/* Accent border frames */}
            <div className="absolute -inset-3 border border-accent/20 pointer-events-none" />
            <div className="absolute -inset-6 border border-accent/10 pointer-events-none" />

            {/* Corner accents */}
            <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-accent" />
            <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-accent" />

            <motion.div
              style={{ y: imageY }}
              className="relative aspect-[3/4] overflow-hidden shadow-2xl"
            >
              <Image
                src={heroSrc}
                alt={imageAlt || title}
                fill
                priority
                sizes="(max-width: 1023px) 0px, 45vw"
                className="object-cover object-top"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
