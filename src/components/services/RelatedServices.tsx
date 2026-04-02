"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useEmblaCarousel from "embla-carousel-react";
import type { RelatedService } from "@/content/services";
import { resolveIcon } from "@/lib/icon-resolver";

const ARTICLE_MAP: Record<string, string> = {
  "strategie": "la ",
  "product-marketing": "le ",
  "growth-marketing": "le ",
  "sales-enablement": "le ",
  "transformation-digitale": "la ",
  "audit-marketing": "l'",
  "audit-site-web": "l'",
  "seo-contenu-organique": "le ",
  "campagnes-publicitaires": "les ",
  "cold-outreach-prospection": "la ",
  "creation-refonte-site-web": "la ",
  "creation-landing-page": "la ",
  "positionnement-messaging": "le ",
  "roadmap-strategique": "la ",
  "direction-marketing-externalisee": "la ",
  "deploiement-crm": "le ",
  "lead-nurturing": "le ",
  "creation-workflows": "la ",
  "applications-ia": "les ",
  "battlecards-case-studies": "les ",
  "pitch-decks-argumentaires": "les ",
  "strategie-personal-branding": "la ",
  "stack-acquisition": "la ",
};

function getArticle(slug: string): string {
  return ARTICLE_MAP[slug] ?? "le ";
}

// Images utilisées dans la section 2 des pages piliers (CategoryIntro)
const PILIER_IMAGE_MAP: Record<string, string> = {
  // Stratégie
  "audit-marketing":                    "/images/piliers/strategie/diagnostic.avif",
  "roadmap-strategique":                "/images/piliers/strategie/feuille-de-route.avif",
  "direction-marketing-externalisee":   "/images/piliers/strategie/pilotage-strategique.avif",
  // Marketing Produit
  "positionnement-messaging":           "/images/piliers/product-marketing/positionnement.avif",
  "creation-landing-page":              "/images/piliers/product-marketing/discours.avif",
  // Growth Marketing
  "seo-contenu-organique":              "/images/piliers/growth-marketing/visibilite.avif",
  "campagnes-publicitaires":            "/images/piliers/growth-marketing/publicite.avif",
  "cold-outreach-prospection":          "/images/piliers/growth-marketing/prospection.avif",
  "strategie-personal-branding":        "/images/piliers/growth-marketing/visibilite.avif",
  // Activation des Ventes
  "pitch-decks-argumentaires":          "/images/piliers/sales-enablement/supports.avif",
  "battlecards-case-studies":           "/images/piliers/sales-enablement/objections.avif",
  "lead-nurturing":                     "/images/piliers/sales-enablement/sequences-automatisees.avif",
  "creation-workflows":                 "/images/piliers/sales-enablement/supports.avif",
  // Transformation Digitale
  "creation-refonte-site-web":          "/images/piliers/transformation-digitale/site.avif",
  "deploiement-crm":                    "/images/piliers/transformation-digitale/crm.avif",
  "applications-ia":                    "/images/piliers/transformation-digitale/applications-ia.avif",
  "stack-acquisition":                  "/images/piliers/transformation-digitale/crm.avif",
  "audit-site-web":                     "/images/piliers/transformation-digitale/site.avif",
};

gsap.registerPlugin(ScrollTrigger);

const AUTOPLAY_DELAY = 5000;

interface RelatedServicesProps {
  title?: string;
  subtitle?: string;
  services: RelatedService[];
}

export function RelatedServices({
  title = "Découvrez nos autres services",
  subtitle,
  services,
}: RelatedServicesProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: false,
    slidesToScroll: 1,
    loop: true,
  });

  const [progress, setProgress] = useState(0);
  const [selectedSnap, setSelectedSnap] = useState(0);
  const [slidesInView, setSlidesInView] = useState<number[]>([]);
  const progressRaf = useRef<number | null>(null);
  const startTime = useRef(Date.now());
  const isPaused = useRef(false);

  // Slides: alternating text/image per service
  type Slide = { type: "text"; service: RelatedService } | { type: "image"; service: RelatedService };
  const slides: Slide[] = [];
  services.forEach((service) => {
    slides.push({ type: "text", service });
    slides.push({ type: "image", service });
  });

  const resetAutoplay = useCallback(() => {
    startTime.current = Date.now();
    setProgress(0);
  }, []);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
    resetAutoplay();
  }, [emblaApi, resetAutoplay]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
    resetAutoplay();
  }, [emblaApi, resetAutoplay]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedSnap(emblaApi.selectedScrollSnap());
    resetAutoplay();
  }, [emblaApi, resetAutoplay]);

  const updateSlidesInView = useCallback(() => {
    if (!emblaApi) return;
    setSlidesInView(emblaApi.slidesInView());
  }, [emblaApi]);

  const startAutoplay = useCallback(() => {
    isPaused.current = false;
  }, []);

  const stopAutoplay = useCallback(() => {
    isPaused.current = true;
  }, []);

  // Progress RAF + auto-advance
  useEffect(() => {
    const tick = () => {
      if (!isPaused.current) {
        const elapsed = Date.now() - startTime.current;
        const p = Math.min(elapsed / AUTOPLAY_DELAY, 1);
        setProgress(p);
        if (p >= 1) {
          emblaApi?.scrollNext();
          resetAutoplay();
        }
      }
      progressRaf.current = requestAnimationFrame(tick);
    };
    progressRaf.current = requestAnimationFrame(tick);
    return () => {
      if (progressRaf.current) cancelAnimationFrame(progressRaf.current);
    };
  }, [emblaApi, resetAutoplay]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    updateSlidesInView();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("slidesInView", updateSlidesInView);
    emblaApi.on("scroll", updateSlidesInView);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
      emblaApi.off("slidesInView", updateSlidesInView);
      emblaApi.off("scroll", updateSlidesInView);
    };
  }, [emblaApi, onSelect, updateSlidesInView]);

  useGSAP(
    () => {
      gsap.from("[data-related='header']", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
      });
      gsap.from("[data-related='carousel']", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });
    },
    { scope: sectionRef },
  );

  if (!services || services.length === 0) return null;

  return (
    <section
      ref={sectionRef}
      className="bg-card py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12 overflow-hidden"
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
    >
      <div className="max-w-[82.5rem] mx-auto">
        {/* Header avec flèches nav */}
        <div
          data-related="header"
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="max-w-4xl">
            <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
              <div className="w-2 h-2 bg-accent" />
              <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-muted uppercase">
                Services complémentaires
              </span>
            </div>
            <h2 className="font-heading font-normal text-[28px] min-[400px]:text-[32px] sm:text-[40px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.035em] text-primary">
              {title}
            </h2>
            {subtitle && (
              <p className="text-base sm:text-lg text-secondary leading-relaxed mt-4 max-w-2xl">
                {subtitle}
              </p>
            )}
          </div>
          {/* Flèches de navigation */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={scrollPrev}
              aria-label="Slide précédent"
              className="w-12 h-12 border border-black/[0.06] bg-white hover:bg-black hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <ArrowRight size={20} className="rotate-180" />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Slide suivant"
              className="w-12 h-12 border border-black/[0.06] bg-white hover:bg-black hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          data-related="carousel"
          ref={emblaRef}
          className="overflow-hidden -mr-4 sm:-mr-6 md:-mr-12"
        >
          <div className="flex">
            {slides.map((slide, i) => {
              const isInView = slidesInView.includes(i);
              const { service } = slide;
              // progress bar only on the active text slide
              const isActiveText = slide.type === "text" && i === selectedSnap;

              if (slide.type === "image") {
                return (
                  <div
                    key={`img-${service.slug}`}
                    className="flex-none w-[75vw] sm:w-[50%] lg:w-[45%] pr-4 sm:pr-5 transition-opacity duration-500"
                    style={{ opacity: isInView ? 1 : 0.3 }}
                  >
                    <div className="relative h-[320px] sm:h-[380px] lg:h-[420px] overflow-hidden">
                      <Image
                        src={PILIER_IMAGE_MAP[service.slug] ?? `/images/services/${service.slug}/hero.avif`}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 75vw, 45vw"
                      />
                    </div>
                  </div>
                );
              }

              const Icon = resolveIcon(service.icon);

              return (
                <div
                  key={`txt-${service.slug}`}
                  className="flex-none w-[75vw] sm:w-[40%] lg:w-[32%] pr-4 sm:pr-5 transition-opacity duration-500"
                  style={{ opacity: isInView ? 1 : 0.3 }}
                >
                  <Link
                    href={service.href}
                    className="group bg-white border border-black/[0.06] hover:border-black/[0.12] hover:shadow-lg h-[320px] sm:h-[380px] lg:h-[420px] p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden transition-all duration-300"
                  >
                    <div>
                      <div className="w-12 h-12 bg-accent flex items-center justify-center text-primary mb-6 lg:mb-8 transition-transform duration-300 group-hover:scale-110">
                        <Icon size={24} />
                      </div>
                      <h3 className="font-heading font-medium text-[22px] sm:text-[26px] lg:text-[30px] leading-[1.1] tracking-[-0.02em] text-primary">
                        {service.title}
                      </h3>
                    </div>
                    <div className="w-full">
                      <div className="w-12 border-t border-black/[0.08] mb-6" />
                      <p className="text-muted text-[13px] lg:text-[14px] leading-relaxed mb-4 line-clamp-2">
                        {service.description}
                      </p>
                      <div className="flex items-center gap-2 text-[13px] font-medium text-primary group-hover:gap-3 transition-all duration-300">
                        <span>
                          En savoir plus sur {getArticle(service.slug)}
                          {service.title.charAt(0).toLowerCase() + service.title.slice(1)}
                        </span>
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                    {/* Barre de progression */}
                    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-black/[0.06]">
                      <div
                        className="h-full bg-accent origin-left"
                        style={{
                          transform: `scaleX(${isActiveText ? progress : 0})`,
                          transition: isActiveText ? "none" : "transform 0.3s ease",
                        }}
                      />
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
