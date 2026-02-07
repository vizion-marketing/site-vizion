"use client";

import React, { useCallback, useEffect, useState, ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface CarouselProps {
  children: ReactNode[];
  autoPlay?: boolean;
  interval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  loop?: boolean;
  className?: string;
  slideClassName?: string;
}

export function Carousel({
  children,
  autoPlay = false,
  interval = 5000,
  showDots = true,
  showArrows = true,
  loop = true,
  className = "",
  slideClassName = "",
}: CarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const autoplayPlugin = autoPlay
    ? [
        Autoplay({
          delay: interval,
          stopOnInteraction: true,
          stopOnMouseEnter: true,
        }),
      ]
    : [];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop,
      align: "start",
      skipSnaps: false,
    },
    autoplayPlugin
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className={`relative ${className}`}>
      {/* Carousel viewport */}
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex touch-pan-y">
          {React.Children.map(children, (child, index) => (
            <div
              key={index}
              className={`flex-[0_0_100%] min-w-0 ${slideClassName}`}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      {showArrows && children.length > 1 && (
        <>
          <button
            onClick={scrollPrev}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10
              w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center
              bg-white/90 backdrop-blur-sm border border-black/10
              text-[#1a1a1a] hover:bg-white hover:border-black/20
              transition-all duration-200 hover:-translate-y-1/2 hover:scale-105
              shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
            aria-label="Slide précédente"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10
              w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center
              bg-white/90 backdrop-blur-sm border border-black/10
              text-[#1a1a1a] hover:bg-white hover:border-black/20
              transition-all duration-200 hover:-translate-y-1/2 hover:scale-105
              shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
            aria-label="Slide suivante"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      {/* Pagination dots */}
      {showDots && children.length > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`
                w-2 h-2 transition-all duration-300
                ${
                  index === selectedIndex
                    ? "bg-[#D4FD00] w-6"
                    : "bg-black/20 hover:bg-black/40"
                }
              `}
              aria-label={`Aller à la slide ${index + 1}`}
              aria-current={index === selectedIndex ? "true" : "false"}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Carousel;
