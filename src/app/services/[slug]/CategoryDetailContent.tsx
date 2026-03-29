"use client";

import type {
  ServiceContent,
  RelatedService,
  PilierTiming,
  PilierTargets,
} from "@/content/services";
import {
  PilierHero,
  PilierMethodology,
  PilierMetrics,
  TestimonialShowcase,
  InlineCTA,
  ServiceFAQ,
  ServiceCTA,
} from "@/components/services";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { useRef, useState, useCallback, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useEmblaCarousel from "embla-carousel-react";
import { getServiceBySlug } from "@/content/services";

gsap.registerPlugin(ScrollTrigger);

const SERVICE_ARTICLES: Record<string, string> = {
  "creation-refonte-site-web": "la",
  "creation-landing-page": "la",
  "audit-marketing": "l'",
  "roadmap-strategique": "la",
  "positionnement-messaging": "le",
  "creation-contenu-b2b": "la",
  "seo-contenu-organique": "le",
  "campagnes-publicitaires": "les",
  "cold-outreach-prospection": "le",
  "pitch-decks-argumentaires": "les",
  "battlecards-case-studies": "les",
  "deploiement-crm": "le",
  "lead-nurturing": "le",
  "creation-workflows": "la",
  "applications-ia": "les",
  "audit-site-web": "l'",
  "direction-marketing-externalisee": "la",
  "strategie-personal-branding": "la",
  "stack-acquisition": "la",
};

function getServiceCTA(slug: string, title: string): string {
  const article = SERVICE_ARTICLES[slug];
  if (!article) return `En savoir plus sur ${title.toLowerCase()}`;
  const separator = article.endsWith("'") ? "" : " ";
  return `En savoir plus sur ${article}${separator}${title.toLowerCase()}`;
}

interface CategoryDetailContentProps {
  service: ServiceContent;
}

/* ─── Icône dynamique via Lucide ─── */
function DynamicIcon({ name, size = 24, className }: { name: string; size?: number; className?: string }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Icon = (LucideIcons as any)[name];
  if (!Icon) return <ArrowRight size={size} className={className} />;
  return <Icon size={size} className={className} />;
}

/* ════════════════════════════════════════════════════════════════
   Section 2 — CategoryIntro (bg-card) — Carousel + progress in cards
   ════════════════════════════════════════════════════════════════ */
const AUTOPLAY_DELAY = 5000;

function CategoryIntro({ service }: { service: ServiceContent }) {
  const ref = useRef<HTMLDivElement>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: false,
    slidesToScroll: 1,
    loop: true,
  });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [progress, setProgress] = useState(0);
  const [selectedSnap, setSelectedSnap] = useState(0);
  const [slidesInView, setSlidesInView] = useState<number[]>([]);
  const autoplayTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRaf = useRef<number | null>(null);
  const startTime = useRef(Date.now());
  const isPaused = useRef(false);

  const fallbackImage = service.solutionImage || service.heroImage || "/images/services/default-hero.png";
  const statements = service.constat.statements || [];

  // Build slides: strict alternation text / image (per-statement image if available)
  type Slide = { type: "text"; index: number } | { type: "image"; src: string };
  const slides: Slide[] = [];
  statements.forEach((s, i) => {
    slides.push({ type: "text", index: i });
    slides.push({ type: "image", src: s.image || fallbackImage });
  });

  const resetProgress = useCallback(() => {
    startTime.current = Date.now();
    setProgress(0);
  }, []);

  const startAutoplay = useCallback(() => {
    if (autoplayTimer.current) clearInterval(autoplayTimer.current);
    isPaused.current = false;
    resetProgress();
    autoplayTimer.current = setInterval(() => {
      emblaApi?.scrollNext();
      resetProgress();
    }, AUTOPLAY_DELAY);
  }, [emblaApi, resetProgress]);

  const stopAutoplay = useCallback(() => {
    isPaused.current = true;
    if (autoplayTimer.current) {
      clearInterval(autoplayTimer.current);
      autoplayTimer.current = null;
    }
  }, []);

  // Progress bar via RAF
  useEffect(() => {
    const tick = () => {
      if (!isPaused.current) {
        const elapsed = Date.now() - startTime.current;
        setProgress(Math.min(elapsed / AUTOPLAY_DELAY, 1));
      }
      progressRaf.current = requestAnimationFrame(tick);
    };
    progressRaf.current = requestAnimationFrame(tick);
    return () => {
      if (progressRaf.current) cancelAnimationFrame(progressRaf.current);
    };
  }, []);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
    setSelectedSnap(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const updateSlidesInView = useCallback(() => {
    if (!emblaApi) return;
    setSlidesInView(emblaApi.slidesInView());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    updateSlidesInView();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("slidesInView", updateSlidesInView);
    emblaApi.on("scroll", updateSlidesInView);
    startAutoplay();
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
      emblaApi.off("slidesInView", updateSlidesInView);
      emblaApi.off("scroll", updateSlidesInView);
      stopAutoplay();
    };
  }, [emblaApi, onSelect, updateSlidesInView, startAutoplay, stopAutoplay]);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
    startAutoplay();
  }, [emblaApi, startAutoplay]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
    startAutoplay();
  }, [emblaApi, startAutoplay]);

  useGSAP(() => {
    if (!ref.current) return;
    const els = ref.current.querySelectorAll("[data-intro]");
    gsap.set(els, { opacity: 0, y: 30 });
    gsap.to(els, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
    });
  }, { scope: ref });

  // Determine which text slide index is currently active (for progress bar)
  const activeTextSlideIndex = slides[selectedSnap]?.type === "text"
    ? selectedSnap
    : selectedSnap > 0 ? selectedSnap - 1 : 0;

  return (
    <section
      ref={ref}
      className="bg-card py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12 overflow-hidden"
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
    >
      <div className="max-w-[82.5rem] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="max-w-4xl">
            {/* Surtitre pattern */}
            <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
              <div className="w-2 h-2 bg-accent" />
              <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-muted uppercase">
                {service.constat.surtitre}
              </span>
            </div>

            {/* Title */}
            <h2 className="font-heading font-medium text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] text-primary mb-8 sm:mb-10">
              {service.constat.title}
            </h2>

            {/* Paragraphs */}
            {service.constat.paragraphs && service.constat.paragraphs.length > 0 && (
              <div className="flex flex-col gap-4 max-w-3xl mb-8 sm:mb-10">
                {service.constat.paragraphs.map((p: string, i: number) => (
                  <p key={i} className="text-secondary text-[15px] sm:text-[16px] leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            )}

            {/* Definition blockquote */}
            {service.constat.definition && (
              <blockquote className="border-l-2 border-accent pl-6 py-1 max-w-3xl">
                <p className="text-muted text-[13px] sm:text-[15px] leading-relaxed">
                  {service.constat.definition}
                </p>
              </blockquote>
            )}
          </div>

          {/* Navigation arrows (square) */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={scrollPrev}
              disabled={!canPrev}
              aria-label="Slide precedent"
              className={`w-12 h-12 border border-black/[0.06] flex items-center justify-center transition-all duration-300 ${
                canPrev
                  ? "bg-white hover:bg-black hover:text-white hover:border-black/[0.12] cursor-pointer"
                  : "bg-white opacity-30 cursor-default"
              }`}
            >
              <ArrowRight size={20} className="rotate-180" />
            </button>
            <button
              onClick={scrollNext}
              disabled={!canNext}
              aria-label="Slide suivant"
              className={`w-12 h-12 border border-black/[0.06] flex items-center justify-center transition-all duration-300 ${
                canNext
                  ? "bg-white hover:bg-black hover:text-white hover:border-black/[0.12] cursor-pointer"
                  : "bg-white opacity-30 cursor-default"
              }`}
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </motion.div>

        {/* Carousel */}
        <div ref={emblaRef} className="overflow-hidden -mr-4 sm:-mr-6 md:-mr-12" data-intro>
          <div className="flex">
            {slides.map((slide, i) => {
              const isInView = slidesInView.includes(i);

              if (slide.type === "image") {
                return (
                  <div
                    key={`img-${i}`}
                    className="flex-none w-[75vw] sm:w-[50%] lg:w-[45%] pr-4 sm:pr-5 transition-opacity duration-500"
                    style={{ opacity: isInView ? 1 : 0.3 }}
                  >
                    <div className="relative h-[320px] sm:h-[380px] lg:h-[420px] overflow-hidden">
                      <Image
                        src={slide.src}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 75vw, 45vw"
                      />
                    </div>
                  </div>
                );
              }

              const s = statements[slide.index];
              const isActive = i === activeTextSlideIndex;

              return (
                <div
                  key={`txt-${slide.index}`}
                  className="flex-none w-[75vw] sm:w-[40%] lg:w-[32%] pr-4 sm:pr-5 transition-opacity duration-500"
                  style={{ opacity: isInView ? 1 : 0.3 }}
                >
                  <div className="bg-white border border-black/[0.06] hover:border-black/[0.12] hover:shadow-lg transition-all duration-300 h-[320px] sm:h-[380px] lg:h-[420px] p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden">
                    <div>
                      <div className="w-12 h-12 bg-accent flex items-center justify-center text-primary mb-6 lg:mb-8">
                        <DynamicIcon name={s.icon || "ArrowRight"} size={24} />
                      </div>
                      <h3 className="font-heading font-medium text-[22px] sm:text-[26px] lg:text-[30px] leading-[1.1] tracking-[-0.02em] text-primary">
                        {s.headline}
                      </h3>
                    </div>

                    <div className="w-full">
                      {/* Decorative line separator */}
                      <div className="w-12 border-t border-black/[0.08] mb-6" />
                      <p className="text-muted text-[13px] lg:text-[14px] leading-relaxed">
                        {s.description}
                      </p>
                    </div>

                    {/* Progress bar inside card */}
                    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-black/[0.06]">
                      <div
                        className="h-full bg-accent origin-left"
                        style={{
                          transform: `scaleX(${isActive ? progress : 0})`,
                          transition: isActive ? "none" : "transform 0.3s ease",
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════
   Section 2b — CategoryMetrics (dark-section) — Split stats + image
   ════════════════════════════════════════════════════════════════ */
function CategoryMetrics({ service }: { service: ServiceContent }) {
  const ref = useRef<HTMLDivElement>(null);
  const metrics = service.pilierMetrics?.metrics || [];
  const [metricValues, setMetricValues] = useState<number[]>([]);
  const metricRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    if (!ref.current || metrics.length === 0) return;

    const trigger = { trigger: ref.current, start: "top 75%", once: true };

    // Image reveal — clip from left
    const img = ref.current.querySelector("[data-metric='image']");
    if (img) {
      gsap.set(img, { clipPath: "inset(0 100% 0 0)" });
      gsap.to(img, {
        clipPath: "inset(0 0% 0 0)",
        duration: 1.2,
        ease: "power3.inOut",
        scrollTrigger: trigger,
      });
    }

    // Header fade in
    const header = ref.current.querySelector("[data-metric='header']");
    if (header) {
      gsap.set(header, { opacity: 0, y: 40 });
      gsap.to(header, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: trigger,
      });
    }

    // Metric rows — staggered slide from right
    const rows = ref.current.querySelectorAll("[data-metric='row']");
    gsap.set(rows, { opacity: 0, x: 60 });
    gsap.to(rows, {
      opacity: 1,
      x: 0,
      duration: 0.8,
      stagger: 0.25,
      delay: 0.3,
      ease: "power3.out",
      scrollTrigger: trigger,
    });

    // CountUp — starts after row appears
    metrics.forEach((metric, i) => {
      const el = metricRefs.current[i];
      if (!el) return;
      const counter = { val: 0 };
      gsap.to(counter, {
        val: metric.value,
        duration: 2.2,
        delay: 0.5 + i * 0.25,
        ease: "power2.out",
        scrollTrigger: trigger,
        onUpdate: () => {
          setMetricValues((prev) => {
            const next = [...prev];
            next[i] = Math.round(counter.val);
            return next;
          });
        },
      });
    });

    // Progress bars — grow after rows land
    const bars = ref.current.querySelectorAll("[data-metric='bar']");
    gsap.set(bars, { scaleX: 0 });
    gsap.to(bars, {
      scaleX: 1,
      duration: 1.4,
      stagger: 0.25,
      delay: 0.6,
      ease: "power2.out",
      scrollTrigger: trigger,
    });

    // Source buttons — pop in last
    const btns = ref.current.querySelectorAll("[data-metric='source']");
    gsap.set(btns, { opacity: 0, scale: 0.8 });
    gsap.to(btns, {
      opacity: 1,
      scale: 1,
      duration: 0.4,
      stagger: 0.15,
      delay: 1.2,
      ease: "back.out(1.7)",
      scrollTrigger: trigger,
    });
  }, { scope: ref, dependencies: [metrics.length] });

  if (metrics.length === 0) return null;

  const heroImage = service.solutionImage || service.heroImage || "/images/services/default-hero.png";

  return (
    <section
      ref={ref}
      className="dark-section grain-overlay relative py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12 overflow-hidden"
      style={{ background: "var(--bg-dark)" }}
    >
      {/* Accent blob */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute w-[60%] h-[60%] top-[20%] right-[-10%]"
          style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.06) 0%, transparent 55%)" }}
        />
      </div>

      <div className="max-w-[82.5rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 relative z-10">
        {/* Left — Image with vignette */}
        <div className="hidden lg:flex items-center justify-center">
          <div data-metric="image" className="relative w-full h-full min-h-[400px] overflow-hidden">
            <Image
              src={heroImage}
              alt={service.pilierMetrics?.title || service.title}
              fill
              className="object-cover object-top"
              sizes="50vw"
            />
            {/* Vignette on all 4 sides */}
            <div
              className="absolute inset-x-0 top-0 h-1/6 pointer-events-none z-10"
              style={{ background: "linear-gradient(to bottom, var(--bg-dark) 0%, transparent 100%)" }}
            />
            <div
              className="absolute inset-x-0 bottom-0 h-1/5 pointer-events-none z-10"
              style={{ background: "linear-gradient(to top, var(--bg-dark) 0%, transparent 100%)" }}
            />
            <div
              className="absolute inset-y-0 left-0 w-1/6 pointer-events-none z-10"
              style={{ background: "linear-gradient(to right, var(--bg-dark) 0%, transparent 100%)" }}
            />
            <div
              className="absolute inset-y-0 right-0 w-1/6 pointer-events-none z-10"
              style={{ background: "linear-gradient(to left, var(--bg-dark) 0%, transparent 100%)" }}
            />
          </div>
        </div>

        {/* Right — Title + Stats */}
        <div className="flex flex-col justify-center">
          <div data-metric="header" className="mb-10 sm:mb-12">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-2 h-2 bg-accent" />
              <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-white/50 uppercase">
                {service.pilierMetrics?.surtitre || "EN QUELQUES CHIFFRES"}
              </span>
            </div>
            <h2 className="font-heading font-normal text-[28px] sm:text-[36px] md:text-[42px] leading-[1.05] tracking-[-0.035em] text-white mb-4">
              {service.pilierMetrics?.title || "Ce que les chiffres disent"}
            </h2>
            {service.pilierMetrics?.subtitle && (
              <p className="text-white/60 text-base sm:text-[17px] leading-relaxed max-w-xl">
                {service.pilierMetrics.subtitle}
              </p>
            )}
          </div>

          {/* Metric rows */}
          <div className="flex flex-col gap-8 sm:gap-10">
            {metrics.map((metric, i) => (
              <div
                key={i}
                ref={(el) => { metricRefs.current[i] = el; }}
                data-metric="row"
              >
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <span className="text-[40px] sm:text-[52px] font-bold text-white leading-none tracking-tight">
                    {metricValues[i] || 0}
                    <span className="text-accent">{metric.suffix}</span>
                  </span>
                  <p className="text-white/70 text-[13px] sm:text-[14px] leading-snug text-right max-w-[260px]">
                    {metric.label}
                  </p>
                </div>
                {/* Progress bar */}
                <div className="w-full h-[3px] bg-white/10 overflow-hidden">
                  <div
                    data-metric="bar"
                    className="h-full bg-accent origin-left"
                    style={{ width: `${Math.min(metric.value, 100)}%` }}
                  />
                </div>
                {metric.context && (
                  <div className="flex items-start justify-between gap-3 mt-2.5">
                    <p className="text-white/40 text-[11px] sm:text-[12px] leading-relaxed flex-1">
                      {metric.context}
                    </p>
                    {metric.sourceUrl && (
                      <a
                        href={metric.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-metric="source"
                        className="inline-flex items-center gap-1.5 bg-accent text-black text-[11px] font-medium px-3 py-1.5 shrink-0 hover:bg-accent/90 transition-colors group"
                      >
                        Source
                        <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {service.pilierMetrics?.source && (
            <p className="text-white/30 text-[11px] italic mt-8">
              {service.pilierMetrics.source}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════
   Section 3 — CategoryServices / Sticky scroll (dark-section)
   Image alignée avec la 1re carte, pinnée au centre vertical
   ════════════════════════════════════════════════════════════════ */
function CategoryServices({ service }: { service: ServiceContent }) {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const [reachedIndex, setReachedIndex] = useState(-1);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Track highest reached card
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    cardRefs.current.forEach((ref, i) => {
      if (!ref) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setReachedIndex((prev) => Math.max(prev, i));
          }
        },
        { threshold: 0.4 },
      );
      observer.observe(ref);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [service.relatedServices?.length]);

  // Scroll progress
  const [scrollProgress, setScrollProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      if (!cardsContainerRef.current) return;
      const rect = cardsContainerRef.current.getBoundingClientRect();
      const containerHeight = rect.height;
      const scrolled = -rect.top;
      const progress = Math.min(Math.max(scrolled / (containerHeight - window.innerHeight), 0), 1);
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(() => {
    if (!sectionRef.current) return;

    // Title
    gsap.from("[data-hub='title']", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
    });

    // Image
    gsap.from("[data-hub='image']", {
      opacity: 0,
      scale: 1.04,
      duration: 1,
      ease: "expo.out",
      scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
    });

    // Cards
    gsap.fromTo(
      "[data-hub='card']",
      { opacity: 0, x: -60 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: "[data-hub='cards']", start: "top 85%" },
      },
    );

    // Pin the image while cards scroll — only on desktop
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      if (!imageWrapRef.current || !cardsContainerRef.current) return;
      ScrollTrigger.create({
        trigger: cardsContainerRef.current,
        start: () => {
          // Start pinning when image center aligns with viewport center
          const imgH = imageWrapRef.current?.offsetHeight || 0;
          return `top ${(window.innerHeight - imgH) / 2}px`;
        },
        end: () => {
          // End pinning when the cards container bottom reaches the image bottom
          const containerH = cardsContainerRef.current?.offsetHeight || 0;
          const imgH = imageWrapRef.current?.offsetHeight || 0;
          return `+=${containerH - imgH}`;
        },
        pin: imageWrapRef.current,
        pinSpacing: false,
      });
    });

    return () => mm.revert();
  }, { scope: sectionRef });

  const relatedServices = service.relatedServices || [];
  if (relatedServices.length === 0) return null;

  const heroImage = service.solutionImage || service.heroImage || "/images/services/default-hero.png";

  return (
    <section
      ref={sectionRef}
      className="dark-section grain-overlay relative py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12"
      style={{ background: "var(--bg-dark)" }}
    >
      {/* Accent blobs */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute w-[50%] h-[50%] top-[10%] left-[-10%]"
          style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.08) 0%, transparent 55%)" }}
        />
        <div
          className="absolute w-[40%] h-[40%] bottom-[5%] right-[-5%]"
          style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.06) 0%, transparent 55%)" }}
        />
      </div>

      <div className="max-w-[82.5rem] mx-auto relative z-10">
        {/* Header — full width above the grid */}
        <div data-hub="title" className="mb-10 sm:mb-14 max-w-2xl">
          <div className="flex items-center gap-2.5 mb-3 sm:mb-5">
            <div className="w-2 h-2 bg-accent" />
            <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-muted uppercase">
              NOTRE MISSION
            </span>
          </div>
          <h2 className="font-heading font-medium text-[28px] min-[400px]:text-[32px] sm:text-[40px] md:text-[44px] lg:text-[48px] leading-[1.05] tracking-[-0.02em] text-white mb-4">
            {service.relatedServicesTitle || `Les services ${service.title.toLowerCase()}`}
          </h2>
          {service.relatedServicesSubtitle && (
            <p className="text-white/60 text-base sm:text-[17px] leading-relaxed">
              {service.relatedServicesSubtitle}
            </p>
          )}
        </div>

        {/* Grid: cards left, image right — image aligned with first card */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16">
          {/* Left — scrolling service cards */}
          <div ref={cardsContainerRef} data-hub="cards">
            <div className="relative lg:pl-5 flex flex-col gap-4 sm:gap-5">
              {relatedServices.map((rs, i) => {
                const isReached = i <= reachedIndex;
                const num = String(i + 1).padStart(2, "0");

                return (
                  <div key={rs.slug}>
                    {i > 0 && <div className="h-px bg-white/[0.08]" />}
                    <Link
                      href={rs.href}
                      ref={(el) => { cardRefs.current[i] = el as HTMLDivElement | null; }}
                      data-hub="card"
                      className={`block py-7 sm:py-8 px-6 sm:px-8 transition-all duration-500 group ${
                        isReached
                          ? "bg-white/[0.06] backdrop-blur-sm"
                          : "hover:bg-white/[0.03]"
                      }`}
                    >
                      <div className="flex items-start gap-5">
                        <span
                          className={`text-[13px] font-medium tracking-wide shrink-0 mt-1 transition-colors duration-500 ${
                            isReached ? "text-accent" : "text-white/30"
                          }`}
                        >
                          {num}
                        </span>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className={`transition-colors duration-500 ${isReached ? "text-accent" : "text-white/40"}`}>
                              <DynamicIcon name={rs.icon} size={18} />
                            </span>
                            <h3 className="text-[17px] sm:text-[19px] font-semibold text-white leading-snug group-hover:text-accent transition-colors duration-300">
                              {rs.title}
                            </h3>
                          </div>
                          <p className="text-[14px] sm:text-[15px] text-white/60 leading-relaxed">
                            {rs.description}
                          </p>
                          <span className="inline-flex items-center gap-2 text-accent text-sm font-medium mt-3 group-hover:gap-3 transition-all duration-200">
                            {getServiceCTA(rs.slug, rs.title)}
                            <ArrowRight size={14} />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}

              {/* Scroll progress bar */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-white/[0.08] hidden lg:block">
                <div
                  className="w-full bg-accent origin-top transition-none"
                  style={{ height: `${scrollProgress * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Right — Pinned image (aligned with first card) */}
          <div className="hidden lg:block">
            <div
              ref={imageWrapRef}
              data-hub="image"
              className="relative overflow-hidden h-[70vh] max-h-[600px] group"
            >
              <Image
                src={heroImage}
                alt={service.relatedServicesTitle || service.title}
                fill
                className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                sizes="50vw"
              />
              {/* Gradient top */}
              <div
                className="absolute inset-x-0 top-0 h-1/4 pointer-events-none z-10"
                style={{ background: "linear-gradient(to bottom, var(--bg-dark) 0%, transparent 100%)" }}
              />
              {/* Gradient bottom */}
              <div
                className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none z-10"
                style={{ background: "linear-gradient(to top, var(--bg-dark) 0%, transparent 100%)" }}
              />
              {/* Gradient left */}
              <div
                className="absolute inset-y-0 left-0 w-1/4 pointer-events-none z-10"
                style={{ background: "linear-gradient(to right, var(--bg-dark) 0%, transparent 100%)" }}
              />
              {/* Gradient right */}
              <div
                className="absolute inset-y-0 right-0 w-1/4 pointer-events-none z-10"
                style={{ background: "linear-gradient(to left, var(--bg-dark) 0%, transparent 100%)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════
   Section 6 — CategoryTiming (bg-card) — Bento Grid
   ════════════════════════════════════════════════════════════════ */
function CategoryTiming({ timing }: { timing: PilierTiming }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!ref.current) return;
    const els = ref.current.querySelectorAll("[data-animate]");
    gsap.set(els, { opacity: 0, y: 30 });
    gsap.to(els, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
    });
  }, { scope: ref });

  const firstRow = timing.items.slice(0, 3);
  const secondRow = timing.items.slice(3);

  return (
    <section
      ref={ref}
      className="bg-card py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12"
    >
      <div className="max-w-[82.5rem] mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span data-animate className="inline-flex items-center gap-2 text-[11px] font-light tracking-[0.12em] uppercase text-muted mb-6">
            <span className="w-1.5 h-1.5 bg-accent inline-block" />
            {timing.surtitre}
          </span>
          <h2 data-animate className="font-heading font-normal text-[28px] sm:text-[36px] md:text-[40px] leading-[1.05] tracking-[-0.035em] text-primary mb-4">
            {timing.title}
          </h2>
          <p data-animate className="text-secondary text-base sm:text-[17px] leading-relaxed">
            {timing.subtitle}
          </p>
        </div>

        {/* Bento Grid — 6 colonnes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 sm:gap-5 lg:gap-6">

          {/* Row 1 — 3 cartes standard */}
          {firstRow.map((item, i) => (
            <div
              key={i}
              data-animate
              className="col-span-1 md:col-span-2 group"
            >
              <div className="relative h-full min-h-[260px] lg:min-h-[280px] bg-white border border-black/[0.06] overflow-hidden transition-all duration-500 hover:bg-accent hover:-translate-y-1 flex flex-col">
                {/* Accent line bottom */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[var(--text-primary)] group-hover:w-full transition-all duration-500" />

                <div className="flex flex-col p-6 sm:p-7 lg:p-8 h-full">
                  {/* Icon */}
                  <div className="mb-5">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 bg-[#f5f5f5] group-hover:bg-[var(--text-primary)] flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <DynamicIcon name={item.icon} size={24} className="text-primary group-hover:text-accent transition-colors duration-500" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-medium text-[18px] sm:text-[20px] leading-[1.1] tracking-[-0.02em] text-primary mb-3 transition-colors duration-500">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted group-hover:text-primary/80 text-[13px] lg:text-[14px] leading-relaxed transition-colors duration-500">
                    {item.description}
                  </p>

                  <div className="flex-grow" />

                  {/* Number */}
                  <div className="pt-4 border-t border-black/10 group-hover:border-black/20 transition-colors duration-500 mt-5">
                    <span className="text-primary/15 font-heading font-bold text-3xl lg:text-4xl">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Row 2 — cartes restantes + CTA sombre */}
          {secondRow.map((item, i) => (
            <div
              key={i + 3}
              data-animate
              className="col-span-1 md:col-span-2 group"
            >
              <div className="relative h-full min-h-[260px] lg:min-h-[280px] bg-white border border-black/[0.06] overflow-hidden transition-all duration-500 hover:bg-accent hover:-translate-y-1 flex flex-col">
                {/* Accent line bottom */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[var(--text-primary)] group-hover:w-full transition-all duration-500" />

                <div className="flex flex-col p-6 sm:p-7 lg:p-8 h-full">
                  {/* Icon */}
                  <div className="mb-5">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 bg-[#f5f5f5] group-hover:bg-[var(--text-primary)] flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <DynamicIcon name={item.icon} size={24} className="text-primary group-hover:text-accent transition-colors duration-500" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-medium text-[18px] sm:text-[20px] leading-[1.1] tracking-[-0.02em] text-primary mb-3 transition-colors duration-500">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted group-hover:text-primary/80 text-[13px] lg:text-[14px] leading-relaxed transition-colors duration-500">
                    {item.description}
                  </p>

                  <div className="flex-grow" />

                  {/* Number */}
                  <div className="pt-4 border-t border-black/10 group-hover:border-black/20 transition-colors duration-500 mt-5">
                    <span className="text-primary/15 font-heading font-bold text-3xl lg:text-4xl">
                      {String(i + 4).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* CTA sombre — remplit les colonnes restantes */}
          <div
            data-animate
            className={`col-span-1 sm:col-span-2 ${secondRow.length === 1 ? "md:col-span-4" : "md:col-span-2"} group`}
          >
            <div
              className="dark-section grain-overlay relative overflow-hidden h-full min-h-[260px] lg:min-h-[280px] flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-10 sm:py-14"
              style={{ background: "var(--bg-dark)" }}
            >
              {/* Lueurs accent */}
              <div className="absolute -top-20 -left-20 w-80 h-80 pointer-events-none" style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.12) 0%, transparent 55%)" }} />
              <div className="absolute -bottom-24 -right-16 w-96 h-96 pointer-events-none" style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.10) 0%, transparent 50%)" }} />

              <p className="relative z-10 text-white font-heading font-normal text-[20px] sm:text-[24px] lg:text-[28px] leading-[1.05] tracking-[-0.02em] mb-3">
                Vous vous reconnaissez dans l&#39;une de ces situations ?
              </p>
              <p className="relative z-10 text-white/60 text-[14px] sm:text-[15px] leading-relaxed mb-8 max-w-lg">
                Échangez 30 minutes avec un fondateur pour identifier vos priorités.
              </p>
              <div className="relative z-10">
                <Link
                  href="/contact"
                  className="group/btn inline-flex items-center gap-2 bg-accent text-black font-medium px-7 py-3.5 hover:scale-[1.02] active:scale-[0.97] transition-all duration-200 whitespace-nowrap"
                >
                  Discuter de votre situation
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════
   Section 7 — CategoryTargets (bg-white) — Grid avec hover amélioré
   ════════════════════════════════════════════════════════════════ */
function CategoryTargets({ targets }: { targets: PilierTargets }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!ref.current) return;
    const els = ref.current.querySelectorAll("[data-animate]");
    gsap.set(els, { opacity: 0, y: 30 });
    gsap.to(els, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.12,
      ease: "power2.out",
      scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
    });
  }, { scope: ref });

  // Highlight specific words in the title with accent color
  function renderTitle(title: string, highlights?: string[]) {
    if (!highlights || highlights.length === 0) return title;
    let result = title;
    const parts: (string | { text: string; highlight: true })[] = [];
    let remaining = result;
    for (const word of highlights) {
      const idx = remaining.toLowerCase().indexOf(word.toLowerCase());
      if (idx === -1) continue;
      if (idx > 0) parts.push(remaining.slice(0, idx));
      parts.push({ text: remaining.slice(idx, idx + word.length), highlight: true });
      remaining = remaining.slice(idx + word.length);
    }
    if (remaining) parts.push(remaining);
    return parts.map((p, i) =>
      typeof p === "string" ? (
        <span key={i}>{p}</span>
      ) : (
        <span key={i} className="text-accent">{p.text}</span>
      )
    );
  }

  const featuredIdx = targets.featuredIndex ?? 1;

  return (
    <section
      ref={ref}
      className="bg-white py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12"
    >
      <div className="max-w-[82.5rem] mx-auto">
        {/* Header — centered */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-20">
          <span data-animate className="inline-flex items-center gap-2 text-[11px] font-light tracking-[0.12em] uppercase text-muted mb-6">
            <span className="w-1.5 h-1.5 bg-accent inline-block" />
            {targets.surtitre}
          </span>
          <h2 data-animate className="font-heading font-normal text-[28px] sm:text-[36px] md:text-[44px] leading-[1.05] tracking-[-0.035em] text-primary mb-5">
            {renderTitle(targets.title, targets.highlightWords)}
          </h2>
          <p data-animate className="text-secondary text-base sm:text-[17px] leading-relaxed">
            {targets.subtitle}
          </p>
        </div>

        {/* 3-column grid — last row centered */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {targets.items.map((item, i) => {
            const isFeatured = i === featuredIdx;
            return (
              <div
                key={i}
                data-animate
                className={`w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] group relative overflow-hidden transition-all duration-500 ${
                  isFeatured
                    ? "bg-accent shadow-xl"
                    : "bg-card border border-black/[0.06] hover:bg-accent hover:-translate-y-1"
                }`}
              >
                {/* Accent line bottom (white cards only) */}
                {!isFeatured && (
                  <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[var(--text-primary)] group-hover:w-full transition-all duration-500" />
                )}

                <div className="p-6 sm:p-8 lg:p-10 flex flex-col h-full">
                  {/* Icon container */}
                  <div
                    className={`w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${
                      isFeatured
                        ? "bg-[var(--text-primary)]"
                        : "bg-[#f5f5f5] group-hover:bg-[var(--text-primary)]"
                    }`}
                  >
                    <DynamicIcon
                      name={item.icon}
                      size={24}
                      className={
                        isFeatured
                          ? "text-accent"
                          : "text-primary group-hover:text-accent transition-colors duration-500"
                      }
                    />
                  </div>
                  {/* Title */}
                  <h3 className="font-heading font-medium text-[18px] sm:text-[20px] leading-tight mb-3 text-primary transition-colors duration-500">
                    {item.title}
                  </h3>
                  {/* Description */}
                  <p
                    className={`text-[14px] sm:text-[15px] leading-relaxed transition-colors duration-500 ${
                      isFeatured ? "text-primary/80" : "text-muted group-hover:text-primary/80"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════
   Page pilier complète — 11 sections
   ════════════════════════════════════════════════════════════════ */
export function CategoryDetailContent({ service }: CategoryDetailContentProps) {
  return (
    <main>
      {/* 1. Hero (bg-white) */}
      <PilierHero
        category={service.category}
        title={service.heroTitle}
        subtitle={service.heroSubtitle}
        imageUrl={service.heroImage}
        imageAlt={service.heroTitle}
        breadcrumbLabel={service.category}
      />

      {/* 2. Intro / Constat (bg-card) — split asymétrique */}
      <CategoryIntro service={service} />

      {/* 3. Services Hub (dark-section) — bento grid */}
      <CategoryServices service={service} />

      {/* 5. Timing (bg-card) — grid desktop / carousel mobile */}
      {service.pilierTiming && (
        <CategoryTiming timing={service.pilierTiming} />
      )}

      {/* 5b. Metrics (dark-section) — split stats + image */}
      <CategoryMetrics service={service} />

      {/* 7. Targets (bg-white) — grid avec hover amélioré */}
      {service.pilierTargets && (
        <CategoryTargets targets={service.pilierTargets} />
      )}

      {/* 10. FAQ (bg-card) */}
      {service.faqs.length > 0 && (
        <ServiceFAQ
          title={service.faqTitle}
          faqs={service.faqs}
        />
      )}

      {/* 11. CTA final (dark-section) */}
      <ServiceCTA
        title={service.ctaTitle}
        description={service.ctaDescription}
        buttonText={service.ctaButtonText}
        buttonLink={service.ctaButtonLink}
      />
    </main>
  );
}
