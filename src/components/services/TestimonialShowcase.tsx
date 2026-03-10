"use client";

import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Star } from "lucide-react";
import type { ServiceTestimonial } from "@/content/services";

interface TestimonialShowcaseProps {
  testimonials: ServiceTestimonial[];
}

export function TestimonialShowcase({
  testimonials,
}: TestimonialShowcaseProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 7000, stopOnInteraction: true })],
  );
  if (testimonials.length === 0) return null;

  return (
    <section className="bg-card py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12">
      <div className="max-w-[82.5rem] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2.5 mb-10 sm:mb-14"
        >
          <div className="w-2 h-2 bg-accent" />
          <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-muted uppercase">
            Témoignages clients
          </span>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {testimonials.map((testimonial, i) => (
                <div
                  key={i}
                  className="flex-[0_0_100%] min-w-0"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
                    {/* Left — Photo + info */}
                    <div className="relative overflow-hidden bg-white border border-black/[0.06] aspect-square">
                      {testimonial.photo ? (
                        <Image
                          src={testimonial.photo}
                          alt={testimonial.author}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-grey flex items-center justify-center">
                          <span className="text-4xl font-light text-muted">
                            {testimonial.author
                              .split(" ")
                              .map((w) => w[0])
                              .join("")}
                          </span>
                        </div>
                      )}

                      {/* Gradient overlay bottom */}
                      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />

                      {/* Bottom overlay — author + thumbnails + rating */}
                      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                        {/* Row: author left, rating right */}
                        <div className="flex items-end justify-between mb-3">
                          <div>
                            <p className="text-white font-semibold text-[15px] sm:text-base leading-tight">
                              {testimonial.author}
                            </p>
                            <p className="text-white/70 text-[12px] sm:text-[13px] leading-tight mt-0.5">
                              {testimonial.company}
                            </p>
                          </div>

                          {/* Google rating — glassmorphism */}
                          {testimonial.rating && (
                            <div className="bg-white/15 backdrop-blur-md border border-white/20 px-3 py-2 flex items-center gap-2">
                              <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" fill="#4285F4"/>
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                              </svg>
                              <div className="flex gap-0.5">
                                {Array.from({ length: 5 }).map((_, j) => (
                                  <Star
                                    key={j}
                                    size={10}
                                    className={
                                      j < (testimonial.rating || 5)
                                        ? "fill-accent text-accent"
                                        : "text-white/30"
                                    }
                                  />
                                ))}
                              </div>
                              <span className="text-[13px] font-semibold text-white leading-none">
                                {testimonial.rating}.0
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Thumbnail navigation — on the photo */}
                        {testimonials.length > 1 && (
                          <div className="flex items-center gap-2">
                            {testimonials.map((t, index) => (
                              <button
                                key={index}
                                onClick={() => emblaApi?.scrollTo(index)}
                                className={`relative overflow-hidden flex-shrink-0 transition-all duration-300 ${
                                  index === i
                                    ? "w-14 h-14 sm:w-16 sm:h-16 ring-2 ring-accent"
                                    : "w-12 h-12 sm:w-14 sm:h-14 opacity-60 hover:opacity-90 border border-white/20"
                                }`}
                                aria-label={`Voir le témoignage de ${t.author}`}
                              >
                                {t.photo ? (
                                  <Image
                                    src={t.photo}
                                    alt={t.author}
                                    fill
                                    className="object-cover"
                                    sizes="64px"
                                  />
                                ) : (
                                  <div className="w-full h-full bg-white/10 flex items-center justify-center">
                                    <span className="text-xs font-medium text-white">
                                      {t.author.split(" ").map((w) => w[0]).join("")}
                                    </span>
                                  </div>
                                )}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Right — Quote content */}
                    <div className="flex flex-col justify-center py-2 lg:py-4">
                      {/* Stars + label */}
                      <div className="flex items-center gap-3 mb-5 sm:mb-6">
                        <div className="flex gap-0.5">
                          {Array.from({ length: 5 }).map((_, j) => (
                            <Star
                              key={j}
                              size={16}
                              className={
                                j < (testimonial.rating || 5)
                                  ? "fill-accent text-accent"
                                  : "text-muted/30"
                              }
                            />
                          ))}
                        </div>
                        <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.06em] text-muted uppercase">
                          {testimonial.role}
                        </span>
                      </div>

                      {/* Quote */}
                      <blockquote className="font-heading font-medium text-[22px] sm:text-[28px] md:text-[32px] lg:text-[36px] leading-[1.15] tracking-[-0.02em] text-primary mb-4 sm:mb-5">
                        {testimonial.quote}
                      </blockquote>

                      {/* Detail */}
                      {testimonial.detail && (
                        <p className="text-[14px] sm:text-[15px] text-muted leading-relaxed max-w-2xl">
                          {testimonial.detail}
                        </p>
                      )}

                      {/* Clients count */}
                      <div className="mt-6 sm:mt-8 pt-5 border-t border-black/[0.06]">
                        <span className="text-[12px] sm:text-[13px] text-muted">
                          +70 clients accompagnés
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
