"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import * as LucideIcons from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AUTOPLAY_DELAY = 5000;

export interface CarouselItem {
  icon?: string;
  title: string;
  description: string;
  href?: string;
  image?: string;
}

interface EnjeuxCarouselProps {
  surtitre: string;
  title: string;
  subtitle?: string;
  items: CarouselItem[];
  background?: "card" | "white";
}

function DynamicIcon({ name, size = 24, className }: { name?: string; size?: number; className?: string }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Icon = name ? (LucideIcons as any)[name] : null;
  if (!Icon) return <ArrowRight size={size} className={className} />;
  return <Icon size={size} className={className} />;
}

export function EnjeuxCarousel({
  surtitre,
  title,
  subtitle,
  items,
  background = "card",
}: EnjeuxCarouselProps) {
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
    const els = ref.current.querySelectorAll("[data-carousel]");
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

  const bgClass = background === "white" ? "bg-white" : "bg-card";

  return (
    <section
      ref={ref}
      className={`${bgClass} py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12 overflow-hidden`}
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
          data-carousel
        >
          <div className="max-w-4xl">
            <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
              <div className="w-2 h-2 bg-accent" />
              <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-muted uppercase">
                {surtitre}
              </span>
            </div>
            <h2 className="font-heading font-medium text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] text-primary mb-6">
              {title}
            </h2>
            {subtitle && (
              <p className="text-secondary text-[15px] sm:text-[16px] leading-relaxed max-w-2xl">
                {subtitle}
              </p>
            )}
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={scrollPrev}
              disabled={!canPrev}
              aria-label="Slide précédent"
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

        {/* Carousel — alternance texte / image */}
        <div ref={emblaRef} className="overflow-hidden -mr-4 sm:-mr-6 md:-mr-12" data-carousel>
          <div className="flex">
            {items.flatMap((item, i) => {
              const textSlideIndex = i * 2;
              const imgSlideIndex = i * 2 + 1;
              const isTextInView = slidesInView.includes(textSlideIndex);
              const isImgInView = slidesInView.includes(imgSlideIndex);
              const isActive = textSlideIndex === selectedSnap;

              const cardClassName =
                "bg-white border border-black/[0.06] hover:border-black/[0.12] hover:shadow-lg transition-all duration-300 h-[320px] sm:h-[380px] lg:h-[420px] p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden group";

              const cardContent = (
                <>
                  <div>
                    <div className="w-12 h-12 bg-accent flex items-center justify-center text-primary mb-6 lg:mb-8">
                      <DynamicIcon name={item.icon} size={24} />
                    </div>
                    <h3 className="font-heading font-medium text-[22px] sm:text-[26px] lg:text-[30px] leading-[1.1] tracking-[-0.02em] text-primary">
                      {item.title}
                    </h3>
                  </div>
                  <div className="w-full">
                    <div className="w-12 border-t border-black/[0.08] mb-6" />
                    <p className="text-muted text-[13px] lg:text-[14px] leading-relaxed">
                      {item.description}
                    </p>
                    {item.href && (
                      <div className="flex items-center gap-2 text-primary text-[12px] font-medium mt-4 group-hover:text-accent group-hover:gap-3 transition-all duration-200">
                        En savoir plus
                        <ArrowRight size={12} />
                      </div>
                    )}
                  </div>
                  {/* Progress bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-black/[0.06]">
                    <div
                      className="h-full bg-accent origin-left"
                      style={{
                        transform: `scaleX(${isActive ? progress : 0})`,
                        transition: isActive ? "none" : "transform 0.3s ease",
                      }}
                    />
                  </div>
                </>
              );

              return [
                /* Carte texte */
                <div
                  key={`txt-${i}`}
                  className="flex-none w-[75vw] sm:w-[40%] lg:w-[32%] pr-4 sm:pr-5 transition-opacity duration-500"
                  style={{ opacity: isTextInView ? 1 : 0.3 }}
                >
                  {item.href ? (
                    <Link href={item.href} className={cardClassName}>
                      {cardContent}
                    </Link>
                  ) : (
                    <div className={cardClassName}>{cardContent}</div>
                  )}
                </div>,

                /* Carte image */
                item.image ? (
                  <div
                    key={`img-${i}`}
                    className="flex-none w-[75vw] sm:w-[50%] lg:w-[45%] pr-4 sm:pr-5 transition-opacity duration-500"
                    style={{ opacity: isImgInView ? 1 : 0.3 }}
                  >
                    <div className="relative h-[320px] sm:h-[380px] lg:h-[420px] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 75vw, 45vw"
                      />
                    </div>
                  </div>
                ) : null,
              ];
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
