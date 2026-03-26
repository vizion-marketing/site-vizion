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
import { ArrowRight } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { useRef, useState, useCallback, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useEmblaCarousel from "embla-carousel-react";
import { getServiceBySlug } from "@/content/services";

gsap.registerPlugin(ScrollTrigger);

interface CategoryDetailContentProps {
  service: ServiceContent;
}

/* ─── Icône dynamique via Lucide ─── */
function DynamicIcon({ name, size = 24 }: { name: string; size?: number }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Icon = (LucideIcons as any)[name];
  if (!Icon) return <ArrowRight size={size} />;
  return <Icon size={size} />;
}

/* ════════════════════════════════════════════════════════════════
   Section 2 — CategoryIntro (bg-card) — Split asymétrique
   ════════════════════════════════════════════════════════════════ */
function CategoryIntro({ service }: { service: ServiceContent }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!ref.current) return;

    // Left column
    const leftEls = ref.current.querySelectorAll("[data-intro='left']");
    gsap.set(leftEls, { opacity: 0, y: 30 });
    gsap.to(leftEls, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
    });

    // Right column cards
    const cards = ref.current.querySelectorAll("[data-intro='card']");
    gsap.set(cards, { opacity: 0, y: 40 });
    gsap.to(cards, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.12,
      delay: 0.2,
      ease: "power2.out",
      scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
    });

    // Accent bars
    const bars = ref.current.querySelectorAll("[data-intro='bar']");
    gsap.set(bars, { scaleX: 0 });
    gsap.to(bars, {
      scaleX: 1,
      duration: 0.4,
      stagger: 0.15,
      delay: 0.4,
      ease: "power2.out",
      scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
    });
  }, { scope: ref });

  // CountUp for metrics
  const metricRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [metricValues, setMetricValues] = useState<number[]>([]);
  const metrics = service.pilierMetrics?.metrics || [];

  useGSAP(() => {
    if (!ref.current || metrics.length === 0) return;

    metrics.forEach((metric, i) => {
      const el = metricRefs.current[i];
      if (!el) return;
      const counter = { val: 0 };
      gsap.to(counter, {
        val: metric.value,
        duration: 2,
        delay: i * 0.2,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
        onUpdate: () => {
          setMetricValues((prev) => {
            const next = [...prev];
            next[i] = Math.round(counter.val);
            return next;
          });
        },
      });
    });
  }, { scope: ref, dependencies: [metrics.length] });

  return (
    <section
      ref={ref}
      className="bg-card py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12"
    >
      <div className="max-w-[82.5rem] mx-auto">
        {/* Text content */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <span
            data-intro="left"
            className="text-[11px] font-light tracking-[0.12em] uppercase text-muted mb-6 block"
          >
            {service.constat.surtitre}
          </span>
          <h2
            data-intro="left"
            className="font-heading font-normal text-[28px] sm:text-[36px] md:text-[40px] leading-[1.05] tracking-[-0.035em] text-primary mb-8"
          >
            {service.constat.title}
          </h2>
          {service.constat.paragraphs.map((p, i) => (
            <p
              key={i}
              data-intro="left"
              className="text-secondary text-base sm:text-[17px] leading-relaxed mb-4 last:mb-0"
            >
              {p}
            </p>
          ))}
        </div>

        {/* Statement cards — horizontal row */}
        {service.constat.statements && service.constat.statements.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {service.constat.statements.map((s, i) => (
              <div
                key={i}
                data-intro="card"
                className="bg-white border border-black/[0.06] p-6 sm:p-7"
              >
                <div className="flex items-center gap-3 mb-4">
                  {s.icon && (
                    <div className="w-9 h-9 bg-accent flex items-center justify-center shrink-0">
                      <DynamicIcon name={s.icon} size={18} />
                    </div>
                  )}
                  <h3 className="font-heading font-medium text-[16px] sm:text-[17px] text-primary leading-tight">
                    {s.headline}
                  </h3>
                </div>
                <p className="text-secondary text-[14px] sm:text-[15px] leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Bottom — Metrics row */}
        {metrics.length > 0 && (
          <div className="mt-14 sm:mt-16 pt-10 sm:pt-12 border-t border-black/[0.06]">
            <span className="text-[11px] font-light tracking-[0.12em] uppercase text-muted mb-8 block">
              EN QUELQUES CHIFFRES
            </span>
            <div className={`grid grid-cols-2 gap-8 sm:gap-10 ${
              metrics.length >= 4 ? "lg:grid-cols-4" : metrics.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"
            }`}>
              {metrics.map((metric, i) => (
                <div
                  key={i}
                  ref={(el) => { metricRefs.current[i] = el; }}
                >
                  <div className="flex items-baseline gap-1.5">
                    <span className={`text-[32px] sm:text-[40px] font-bold leading-none ${metric.direction === "down" ? "text-red-500 rotate-180 inline-block" : "text-accent"}`}>
                      &#8593;
                    </span>
                    <span className="text-[40px] sm:text-[48px] font-bold text-primary leading-none">
                      {metricValues[i] || 0}
                    </span>
                    <span className="text-[24px] sm:text-[28px] font-bold text-primary">{metric.suffix}</span>
                  </div>
                  <p className="text-[13px] sm:text-[14px] text-primary font-medium mt-2 leading-snug">
                    {metric.label}
                  </p>
                  {metric.context && (
                    <p className="text-[11px] sm:text-[12px] text-muted mt-1 leading-relaxed">
                      {metric.context}
                      {metric.sourceUrl && (
                        <>
                          {" "}
                          <a
                            href={metric.sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent hover:underline"
                          >
                            Source
                          </a>
                        </>
                      )}
                    </p>
                  )}
                </div>
              ))}
            </div>
            {service.pilierMetrics?.source && (
              <p className="text-[11px] text-muted italic mt-8">
                {service.pilierMetrics.source}
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════
   Section 3 — CategoryServices / Sticky scroll (dark-section)
   ════════════════════════════════════════════════════════════════ */
function CategoryServices({ service }: { service: ServiceContent }) {
  const sectionRef = useRef<HTMLElement>(null);
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
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const scrolled = -rect.top;
      const progress = Math.min(Math.max(scrolled / (sectionHeight - window.innerHeight), 0), 1);
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

      <div className="max-w-[82.5rem] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 relative z-10">
        {/* Left — Title + scrolling service cards */}
        <div data-hub="cards" className="flex flex-col gap-5 lg:gap-6">
          {/* Header */}
          <div data-hub="title" className="mb-2">
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

          {/* Service cards with progress bar */}
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
                          En savoir plus
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

        {/* Right — Sticky image */}
        <div className="lg:sticky lg:top-[100px] lg:self-start hidden lg:block">
          <div
            data-hub="image"
            className="relative overflow-hidden lg:h-[70vh] group"
          >
            <Image
              src={heroImage}
              alt={service.relatedServicesTitle || service.title}
              fill
              className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
              sizes="50vw"
            />
            {/* Gradient bottom */}
            <div
              className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
              style={{ background: "linear-gradient(to top, var(--bg-dark) 0%, transparent 100%)" }}
            />
            {/* Gradient right */}
            <div
              className="absolute inset-y-0 right-0 w-1/4 pointer-events-none"
              style={{ background: "linear-gradient(to left, var(--bg-dark) 0%, transparent 100%)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════
   Section 6 — CategoryTiming (bg-card) — Grid desktop / Carousel mobile
   ════════════════════════════════════════════════════════════════ */
function CategoryTiming({ timing }: { timing: PilierTiming }) {
  const ref = useRef<HTMLDivElement>(null);
  const [emblaRef] = useEmblaCarousel({ align: "start", containScroll: "trimSnaps" });

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

  return (
    <section
      ref={ref}
      className="bg-card py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12"
    >
      <div className="max-w-[82.5rem] mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span data-animate className="text-[11px] font-light tracking-[0.12em] uppercase text-muted mb-6 block">
            {timing.surtitre}
          </span>
          <h2 data-animate className="font-heading font-normal text-[28px] sm:text-[36px] md:text-[40px] leading-[1.05] tracking-[-0.035em] text-primary mb-4">
            {timing.title}
          </h2>
          <p data-animate className="text-secondary text-base sm:text-[17px] leading-relaxed">
            {timing.subtitle}
          </p>
        </div>

        {/* Desktop grid */}
        <div className="hidden sm:grid sm:grid-cols-2 gap-6">
          {timing.items.map((item, i) => (
            <div
              key={i}
              data-animate
              className="bg-white border border-black/[0.06] p-6 sm:p-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 flex items-center justify-center bg-accent/10">
                  <span className="text-accent">
                    <DynamicIcon name={item.icon} size={20} />
                  </span>
                </div>
                <h3 className="font-heading font-medium text-[17px] text-primary leading-tight">
                  {item.title}
                </h3>
              </div>
              <p className="text-secondary text-[15px] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="sm:hidden overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {timing.items.map((item, i) => (
              <div key={i} className="flex-none w-[85vw] pr-4">
                <div className="bg-white border border-black/[0.06] p-6 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-accent/10">
                      <span className="text-accent">
                        <DynamicIcon name={item.icon} size={20} />
                      </span>
                    </div>
                    <h3 className="font-heading font-medium text-[17px] text-primary leading-tight">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-secondary text-[15px] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
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
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
    });
  }, { scope: ref });

  return (
    <section
      ref={ref}
      className="bg-white py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12"
    >
      <div className="max-w-[82.5rem] mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span data-animate className="text-[11px] font-light tracking-[0.12em] uppercase text-muted mb-6 block">
            {targets.surtitre}
          </span>
          <h2 data-animate className="font-heading font-normal text-[28px] sm:text-[36px] md:text-[40px] leading-[1.05] tracking-[-0.035em] text-primary mb-4">
            {targets.title}
          </h2>
          <p data-animate className="text-secondary text-base sm:text-[17px] leading-relaxed">
            {targets.subtitle}
          </p>
        </div>

        {/* Grid with enhanced hover */}
        <div className="grid sm:grid-cols-2 gap-6">
          {targets.items.map((item, i) => (
            <div
              key={i}
              data-animate
              className="bg-card border border-black/[0.06] p-6 sm:p-8 group hover:border-black/[0.12] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 flex items-center justify-center bg-accent/10 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-accent">
                    <DynamicIcon name={item.icon} size={20} />
                  </span>
                </div>
                <h3 className="font-heading font-medium text-[17px] text-primary leading-tight">
                  {item.title}
                </h3>
              </div>
              <p className="text-secondary text-[15px] leading-relaxed">
                {item.description}
              </p>
              {/* Accent bar reveal on hover */}
              <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[2px] bg-accent transition-all duration-500" />
            </div>
          ))}
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

      {/* 7. Targets (bg-white) — grid avec hover amélioré */}
      {service.pilierTargets && (
        <CategoryTargets targets={service.pilierTargets} />
      )}

      {/* 8. Témoignages (dark-section) — carousel Embla */}
      {service.testimonials.length > 0 && (
        <TestimonialShowcase
          testimonials={service.testimonials}
          sectionTitle={service.testimonialsTitle}
          sectionSubtitle={service.testimonialsSubtitle}
        />
      )}

      {/* 9. Inline CTA (bg-card) */}
      {service.inlineCTAs?.beforeFaq && (
        <div className="py-8 sm:py-12 px-4 sm:px-6 md:px-12 bg-card">
          <InlineCTA
            text={service.inlineCTAs.beforeFaq.text}
            buttonText={service.inlineCTAs.beforeFaq.buttonText}
            href={service.inlineCTAs.beforeFaq.href}
          />
        </div>
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
