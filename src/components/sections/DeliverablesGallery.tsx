"use client";

import React, { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryImage } from "../../../sanity/lib/types";
import { resolveImageUrl } from "../../../sanity/lib/image";

interface DeliverablesGalleryProps {
  images: GalleryImage[];
  clientName: string;
}

export function DeliverablesGallery({
  images,
  clientName,
}: DeliverablesGalleryProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
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

  if (!images?.length) return null;

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12 bg-white">
      <div className="max-w-[82.5rem] mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-14">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2.5 mb-4 sm:mb-5"
            >
              <div className="w-2 h-2 bg-accent" />
              <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-muted uppercase">
                Nos livrables
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-normal text-[28px] sm:text-[36px] md:text-[44px] leading-[1.05] tracking-[-0.02em] text-primary"
            >
              Ce que nous avons produit
            </motion.h2>
          </div>

          {images.length > 1 && (
            <div className="flex items-center gap-2">
              <span className="text-sm mr-3 tabular-nums text-muted">
                {String(selectedIndex + 1).padStart(2, "0")} /{" "}
                {String(scrollSnaps.length).padStart(2, "0")}
              </span>
              <button
                onClick={scrollPrev}
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-black/10 text-primary hover:bg-black hover:text-white transition-colors"
                aria-label="Livrable précédent"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={scrollNext}
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-black/10 text-primary hover:bg-black hover:text-white transition-colors"
                aria-label="Livrable suivant"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {images.map((img, index) => (
                <div
                  key={img._key || index}
                  className="flex-[0_0_85%] min-w-0 sm:flex-[0_0_65%] lg:flex-[0_0_45%] pr-4 sm:pr-6"
                >
                  <div className="bg-card border border-black/[0.06] overflow-hidden group">
                    <div className="relative w-full aspect-[4/3] overflow-hidden">
                      <Image
                        src={resolveImageUrl(img, 800)}
                        alt={img.title || `Livrable produit pour ${clientName}`}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {(img.title || img.caption) && (
                      <div className="p-4 sm:p-5">
                        {img.title && (
                          <h3 className="font-heading font-medium text-sm sm:text-base tracking-tight text-primary mb-1">
                            {img.title}
                          </h3>
                        )}
                        {img.caption && (
                          <p className="text-secondary text-xs sm:text-sm leading-relaxed">
                            {img.caption}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Dots */}
        {scrollSnaps.length > 1 && (
          <div className="flex justify-center gap-2 mt-6 sm:mt-8">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`h-2 transition-all duration-300 ${
                  index === selectedIndex
                    ? "bg-accent w-6"
                    : "bg-black/20 hover:bg-black/40 w-2"
                }`}
                aria-label={`Aller au livrable ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
