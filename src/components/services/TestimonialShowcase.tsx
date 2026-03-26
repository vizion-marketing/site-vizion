"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Linkedin } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { ServiceTestimonial } from "@/content/services";

gsap.registerPlugin(ScrollTrigger);

interface TestimonialShowcaseProps {
  testimonials: ServiceTestimonial[];
  sectionTitle?: string;
  sectionSubtitle?: string;
}

type Slide = {
  type: "photo" | "text";
  testimonial: ServiceTestimonial;
};

export function TestimonialShowcase({
  testimonials,
  sectionTitle,
  sectionSubtitle,
}: TestimonialShowcaseProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 4000, stopOnInteraction: true })],
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  // GSAP entrance animations
  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Header: surtitre + title + description
      tl.from("[data-testimonial='header']", {
        opacity: 0,
        y: 30,
        duration: 0.8,
      });

      // Navigation desktop
      tl.from(
        "[data-testimonial='nav-desktop']",
        { opacity: 0, y: 20, duration: 0.6 },
        "-=0.5",
      );

      // Carousel
      tl.from(
        "[data-testimonial='carousel']",
        { opacity: 0, y: 25, duration: 0.8 },
        "-=0.4",
      );

      // Mobile navigation
      tl.from(
        "[data-testimonial='nav-mobile']",
        { opacity: 0, duration: 0.5 },
        "-=0.3",
      );
    },
    { scope: sectionRef },
  );

  if (testimonials.length === 0) return null;

  // Build slides: photo card + text card for each testimonial with a photo, else just text
  const slides: Slide[] = [];
  testimonials.forEach((t) => {
    if (t.photo) {
      slides.push({ type: "photo", testimonial: t });
    }
    slides.push({ type: "text", testimonial: t });
  });

  return (
    <section
      ref={sectionRef}
      className="dark-section grain-overlay py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12 relative overflow-hidden"
      style={{ background: "var(--bg-dark)" }}
    >
      {/* Decorative gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(var(--color-accent-rgb), 0.08) 0%, transparent 55%)",
        }}
      />
      <div className="max-w-[82.5rem] mx-auto relative">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 sm:gap-8 mb-10 sm:mb-14">
          <div data-testimonial="header" className="max-w-xl">
            <div className="flex items-center gap-2.5 mb-3 sm:mb-5">
              <div className="w-2 h-2 bg-accent" />
              <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-muted uppercase">
                Témoignages clients
              </span>
            </div>
            <h2 className="font-heading font-medium text-[28px] min-[400px]:text-[32px] sm:text-[40px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] text-primary">
              {sectionTitle || "Ce qu\u2019ils disent de nous"}
            </h2>
            <p className="text-[14px] sm:text-[15px] text-muted leading-relaxed mt-3">
              {sectionSubtitle || "Découvrez les retours de nos clients sur leur collaboration avec Vizion."}
            </p>
          </div>

          {/* Navigation — desktop */}
          <div
            data-testimonial="nav-desktop"
            className="hidden sm:flex items-center gap-3 flex-shrink-0"
          >
            <button
              onClick={scrollPrev}
              className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white/5 hover:border-accent/40 active:scale-95 transition-all duration-200 cursor-pointer"
              aria-label="Précédent"
            >
              <ChevronLeft size={18} className="text-primary" />
            </button>

            {/* Progress dots */}
            <div className="flex items-center gap-1.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollTo(i)}
                  className={`h-[3px] transition-all duration-300 cursor-pointer ${
                    i === selectedIndex
                      ? "bg-primary w-6"
                      : "w-[6px] bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={scrollNext}
              className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white/5 hover:border-accent/40 active:scale-95 transition-all duration-200 cursor-pointer"
              aria-label="Suivant"
            >
              <ChevronRight size={18} className="text-primary" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          data-testimonial="carousel"
          ref={emblaRef}
          className="overflow-hidden"
        >
          <div className="flex">
            {slides.map((slide, i) => (
              <div
                key={`${slide.type}-${i}`}
                className="flex-none w-[75vw] min-[480px]:w-[55vw] sm:w-[290px] lg:w-[320px] pr-4 sm:pr-5"
              >
                {slide.type === "photo" ? (
                  <PhotoCard testimonial={slide.testimonial} />
                ) : (
                  <TextCard testimonial={slide.testimonial} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation — mobile */}
        <div
          data-testimonial="nav-mobile"
          className="flex sm:hidden items-center justify-center gap-3 mt-8"
        >
          <button
            onClick={scrollPrev}
            className="w-10 h-10 border border-white/20 flex items-center justify-center active:scale-95 transition-all cursor-pointer"
            aria-label="Précédent"
          >
            <ChevronLeft size={18} className="text-primary" />
          </button>
          <div className="flex items-center gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`h-[3px] transition-all duration-300 cursor-pointer ${
                  i === selectedIndex
                    ? "bg-primary w-5"
                    : "w-[6px] bg-white/30"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={scrollNext}
            className="w-10 h-10 border border-white/20 flex items-center justify-center active:scale-95 transition-all cursor-pointer"
            aria-label="Suivant"
          >
            <ChevronRight size={18} className="text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ── Photo Card ── */
function PhotoCard({ testimonial }: { testimonial: ServiceTestimonial }) {
  return (
    <div className="relative overflow-hidden aspect-[4/5] sm:aspect-[3/4] group">
      <Image
        src={testimonial.photo!}
        alt={testimonial.author}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-700"
        sizes="(max-width: 640px) 260px, (max-width: 1024px) 300px, 340px"
      />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
        <div>
          <p className="text-white font-semibold text-[13px] uppercase tracking-[0.06em]">
            {testimonial.author}
          </p>
          <p className="text-white/60 text-[12px] mt-0.5">
            {testimonial.role} &mdash; {testimonial.company}
          </p>
        </div>
        {testimonial.linkedin && (
          <a
            href={testimonial.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-accent transition-colors duration-300"
          >
            <Linkedin size={16} />
          </a>
        )}
      </div>
    </div>
  );
}

/* ── Text Card ── */
function TextCard({ testimonial }: { testimonial: ServiceTestimonial }) {
  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 sm:p-6 lg:p-7 flex flex-col justify-between aspect-[4/5] sm:aspect-[3/4] relative overflow-hidden group hover:border-white/20 transition-all duration-300">
      {/* Avatar */}
      {testimonial.photo ? (
        <div className="w-10 h-10 relative overflow-hidden border border-white/10">
          <Image
            src={testimonial.photo}
            alt={testimonial.author}
            fill
            className="object-cover"
          />
        </div>
      ) : (
        <div className="w-10 h-10 bg-accent flex items-center justify-center">
          <span className="text-[14px] font-semibold text-black">
            {testimonial.author
              .split(" ")
              .map((w) => w[0])
              .join("")}
          </span>
        </div>
      )}

      {/* Decorative accent circle */}
      <div
        className="absolute top-8 right-4 w-28 h-28 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(var(--color-accent-rgb), 0.12) 0%, rgba(var(--color-accent-rgb), 0.03) 50%, transparent 70%)",
        }}
      />

      {/* Quote content */}
      <div className="flex-1 flex flex-col justify-center relative z-10">
        <h3 className="font-heading font-medium text-[15px] sm:text-[18px] lg:text-[20px] leading-[1.25] tracking-[-0.01em] text-primary mb-2 sm:mb-3">
          &laquo;&nbsp;{testimonial.quote}&nbsp;&raquo;
        </h3>
        {testimonial.detail && (
          <p className="text-[12px] sm:text-[13px] text-muted leading-relaxed line-clamp-3">
            {testimonial.detail}
          </p>
        )}
      </div>

      {/* Author */}
      <div className="pt-4 border-t border-white/10 flex items-end justify-between">
        <div>
          <p className="text-[13px] font-semibold text-primary uppercase tracking-[0.06em]">
            {testimonial.author}
          </p>
          <p className="text-[12px] text-muted mt-0.5">
            {testimonial.role} &mdash; {testimonial.company}
          </p>
        </div>
        {testimonial.linkedin && (
          <a
            href={testimonial.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-accent transition-colors duration-300"
          >
            <Linkedin size={16} />
          </a>
        )}
      </div>
    </div>
  );
}
