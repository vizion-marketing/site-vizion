"use client";

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ItemsPerView {
  mobile: number;
  tablet: number;
  desktop: number;
}

interface CarouselProps {
  children: React.ReactNode[];
  autoplay?: boolean;
  autoplayInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  itemsPerView?: ItemsPerView;
  className?: string;
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  autoplay = false,
  autoplayInterval = 5000,
  showDots = true,
  showArrows = true,
  itemsPerView = { mobile: 1, tablet: 2, desktop: 3 },
  className,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const totalItems = children.length;

  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const newIndex = Math.round(scrollLeft / clientWidth);
    if (newIndex !== activeIndex && newIndex >= 0 && newIndex < totalItems) {
      setActiveIndex(newIndex);
    }
  }, [activeIndex, totalItems]);

  const scrollTo = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const itemWidth = container.querySelector('[data-carousel-item]')?.clientWidth || 0;
    const gap = 24;
    
    container.scrollTo({
      left: index * (itemWidth + gap),
      behavior: 'smooth',
    });
    setActiveIndex(index);
  };

  const next = useCallback(() => {
    const nextIndex = activeIndex + 1 >= totalItems ? 0 : activeIndex + 1;
    scrollTo(nextIndex);
  }, [activeIndex, totalItems]);

  const prev = () => {
    const prevIndex = activeIndex - 1 < 0 ? totalItems - 1 : activeIndex - 1;
    scrollTo(prevIndex);
  };

  useEffect(() => {
    if (!autoplay || isPaused) return;
    
    const interval = setInterval(() => {
      next();
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [autoplay, isPaused, next, autoplayInterval]);

  return (
    <div 
      className={cn("group relative w-full select-none", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Scroll Container */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className={cn(
          "flex w-full overflow-x-auto scroll-smooth snap-x snap-mandatory",
          "gap-6"
        )}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {children.map((child, index) => (
          <div
            key={index}
            data-carousel-item
            className="flex-shrink-0 snap-start snap-always w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
          >
            {child}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {showArrows && totalItems > 1 && (
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 pointer-events-none flex justify-between px-4 z-10">
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={prev}
            className={cn(
              "pointer-events-auto w-12 h-12 rounded-full flex items-center justify-center transition-all duration-250",
              "bg-white text-black shadow-md border border-neutral-100",
              "hover:bg-neutral-50"
            )}
            aria-label="Précédent"
          >
            <ChevronLeft size={24} strokeWidth={1.5} />
          </motion.button>

          <motion.button
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={next}
            className={cn(
              "pointer-events-auto w-12 h-12 rounded-full flex items-center justify-center transition-all duration-250",
              "bg-black text-white shadow-md",
              "hover:bg-neutral-800"
            )}
            aria-label="Suivant"
          >
            <ChevronRight size={24} strokeWidth={1.5} />
          </motion.button>
        </div>
      )}

      {/* Progress Dots */}
      {showDots && totalItems > 1 && (
        <div className="flex justify-center items-center gap-3 mt-8">
          {Array.from({ length: totalItems }).map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className="relative p-1 group"
              aria-label={`Aller au slide ${i + 1}`}
            >
              <div
                className={cn(
                  "h-1.5 rounded-full transition-all duration-250 ease-out",
                  activeIndex === i 
                    ? "w-8 bg-black" 
                    : "w-1.5 bg-neutral-200 group-hover:bg-neutral-300"
                )}
              />
            </button>
          ))}
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </div>
  );
};

export default Carousel;
export { Carousel };
