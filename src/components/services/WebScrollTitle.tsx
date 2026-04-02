"use client";

import { useRef, useMemo, useState, useCallback } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { X, ChevronDown, Maximize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { ScrollTitleContent } from "@/content/services/types";

gsap.registerPlugin(ScrollTrigger);

interface WebScrollTitleProps {
  content: ScrollTitleContent;
}

/**
 * Distribute images across 3 columns for parallax effect.
 * Returns [col1, col2, col3] arrays of image paths.
 */
function splitIntoColumns(images: string[]): [string[], string[], string[]] {
  const cols: [string[], string[], string[]] = [[], [], []];
  images.forEach((img, i) => cols[i % 3].push(img));
  return cols;
}

export function WebScrollTitle({ content }: WebScrollTitleProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const brefRef = useRef<HTMLSpanElement>(null);
  const phraseRef = useRef<HTMLDivElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);
  const col3Ref = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const blurOverlayRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollHintRef = useRef<HTMLDivElement>(null);
  const tapHintRef = useRef<HTMLDivElement>(null);

  const [galleryRevealed, setGalleryRevealed] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const hasImages = content.showcaseImages && content.showcaseImages.length > 0;
  const allImages = content.showcaseImages ?? [];
  const columns = useMemo(
    () => (hasImages ? splitIntoColumns(allImages) : null),
    [hasImages, allImages],
  );

  // Split phrase on \n for line breaks
  const phraseLines = content.phrase.split("\n");

  const handleImageClick = useCallback(
    (src: string) => {
      if (galleryRevealed) setSelectedImage(src);
    },
    [galleryRevealed],
  );

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          onUpdate: (self) => {
            if (progressBarRef.current) {
              progressBarRef.current.style.transform = `scaleX(${self.progress})`;
            }
            // Enable gallery interactivity when scroll is near the end (phase 4)
            if (hasImages) {
              const revealed = self.progress > 0.9;
              setGalleryRevealed(revealed);
            }
          },
        },
      });

      // Init: hide everything except hook
      gsap.set(phraseRef.current, { opacity: 0, y: 40 });
      wordRefs.current.forEach((el) => {
        if (el) gsap.set(el, { opacity: 0 });
      });

      // ── Parallax columns (different speeds per column) ──
      if (hasImages) {
        // Gallery fades in during phase 1
        gsap.set(galleryRef.current, { opacity: 0 });

        // Separate ScrollTrigger for continuous parallax movement
        const colRefs = [col1Ref.current, col2Ref.current, col3Ref.current];
        const speeds = [-15, 25, -20]; // % of movement - alternating directions

        colRefs.forEach((col, i) => {
          if (!col) return;
          gsap.fromTo(
            col,
            { yPercent: speeds[i] > 0 ? -Math.abs(speeds[i]) : Math.abs(speeds[i]) },
            {
              yPercent: speeds[i],
              ease: "none",
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            },
          );
        });

        // Gallery opacity: fade in at start, stay visible
        tl.to(galleryRef.current, {
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        }, 0);
      }

      // PHASE 1: Hook - zooms until it flies past you
      tl.fromTo(
        brefRef.current,
        { scale: 1, opacity: 1 },
        { scale: 35, opacity: 0, duration: 1.5, ease: "power3.in" },
      );

      // PHASE 2: Phrase
      tl.fromTo(
        phraseRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "+=0.1",
      );
      tl.to({}, { duration: 0.8 }); // hold
      tl.to(phraseRef.current, {
        opacity: 0,
        y: -30,
        duration: 0.5,
        ease: "power2.inOut",
      });

      // PHASE 3: Adjectives - each with unique effect
      const [w0, w1, w2] = wordRefs.current;

      // 1. bouncy scale from bottom
      if (w0) {
        tl.fromTo(
          w0,
          { opacity: 0, y: 100, scale: 0.8 },
          { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "back.out(1.7)" },
          "+=0.1",
        );
        tl.to({}, { duration: 0.6 }); // hold
        tl.to(w0, { opacity: 0, y: -60, duration: 0.5, ease: "power3.in" });
      }

      // 2. clip-path wipe left to right
      if (w1) {
        tl.set(w1, { opacity: 1, clipPath: "inset(0 100% 0 0)" });
        tl.to(
          w1,
          { clipPath: "inset(0 0% 0 0)", duration: 0.7, ease: "power3.inOut" },
          "+=0.1",
        );
        tl.to({}, { duration: 0.6 }); // hold
        tl.to(w1, {
          clipPath: "inset(0 0 0 100%)",
          duration: 0.5,
          ease: "power3.inOut",
        });
      }

      // 3. blur reveal
      if (w2) {
        tl.fromTo(
          w2,
          { opacity: 0, filter: "blur(20px)", y: 20 },
          {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "+=0.1",
        );
        tl.to({}, { duration: 0.6 }); // hold
        tl.to(w2, { opacity: 0, y: -40, duration: 0.5, ease: "power3.in" });
      }

      // PHASE 4: Gallery reveal - full opacity, no blur
      if (hasImages) {
        // Hide scroll hint before gallery reveal
        tl.to(scrollHintRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
        });

        // Remove blur overlay
        tl.to(blurOverlayRef.current, {
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        }, "-=0.3");

        // All images to full opacity
        const imgs = imageRefs.current.filter(Boolean);
        tl.to(imgs, {
          opacity: 1,
          duration: 0.8,
          stagger: 0.05,
          ease: "power2.out",
        }, "<");

        // Show tap hint
        tl.fromTo(tapHintRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          "-=0.3",
        );

        tl.to({}, { duration: 1 }); // final hold
      }
    },
    { scope: containerRef },
  );

  return (
    <>
      <div ref={containerRef} style={{ height: "420vh" }}>
        <div className="sticky top-0 h-screen bg-card relative overflow-hidden">
          {/* Decorative accent gradient */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(var(--color-accent-rgb), 0.06) 0%, transparent 60%)",
            }}
          />

          {/* ── Parallax showcase gallery ── */}
          {hasImages && columns && (
            <div
              ref={galleryRef}
              className={`absolute inset-0 z-0 ${galleryRevealed ? "pointer-events-auto" : "pointer-events-none"}`}
              style={{ opacity: 0 }}
            >
              {/* Blur + dim overlay on images */}
              <div ref={blurOverlayRef} className="absolute inset-0 z-[1] backdrop-blur-[1px] pointer-events-none" />

              <div className="absolute inset-0 flex gap-3 sm:gap-4 px-4 sm:px-8 lg:px-16 justify-center items-center">
                {columns.map((colImages, colIndex) => (
                  <div
                    key={colIndex}
                    ref={colIndex === 0 ? col1Ref : colIndex === 1 ? col2Ref : col3Ref}
                    className="flex-1 max-w-[320px] flex flex-col gap-3 sm:gap-4"
                  >
                    {colImages.map((src, imgIndex) => {
                      const globalIdx = imgIndex * 3 + colIndex;
                      return (
                        <div
                          key={imgIndex}
                          ref={(el) => { imageRefs.current[globalIdx] = el; }}
                          className={`relative w-full aspect-[4/3] overflow-hidden border border-black/[0.06] shadow-lg opacity-45 ${galleryRevealed ? "cursor-pointer" : ""}`}
                          onClick={() => handleImageClick(src)}
                        >
                          <Image
                            src={src}
                            alt=""
                            fill
                            sizes="320px"
                            className="object-cover"
                          />
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Phase 1: Hook */}
          <span
            ref={brefRef}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 font-heading font-medium text-[80px] sm:text-[120px] lg:text-[180px] leading-[1.05] tracking-[-0.04em] text-primary select-none"
          >
            {content.hook}
          </span>

          {/* Phase 2: Phrase */}
          <div
            ref={phraseRef}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full px-6"
          >
            <p className="font-heading font-normal text-[36px] sm:text-[52px] lg:text-[68px] leading-[1.05] tracking-[-0.035em] text-primary max-w-5xl mx-auto text-center">
              {phraseLines.map((line, i) => (
                <span key={i}>
                  {i > 0 && <br />}
                  {line}
                </span>
              ))}
            </p>
          </div>

          {/* Phase 3: Adjective words */}
          {content.adjectives.map((word, i) => (
            <span
              key={word}
              ref={(el) => {
                wordRefs.current[i] = el;
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 font-heading font-normal text-[44px] sm:text-[68px] lg:text-[96px] leading-[1.05] tracking-[-0.04em] bg-accent text-black px-6 sm:px-8 py-2 sm:py-3 whitespace-nowrap"
              style={{ opacity: 0 }}
            >
              {word}
            </span>
          ))}

          {/* Mobile scroll hint */}
          <div
            ref={scrollHintRef}
            className="lg:hidden absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5"
          >
            <span className="text-[11px] font-light tracking-[0.1em] uppercase text-primary/50">
              Scroll
            </span>
            <ChevronDown size={16} className="text-primary/40 animate-bounce" />
          </div>

          {/* Mobile tap hint (gallery revealed) */}
          <div
            ref={tapHintRef}
            className="lg:hidden absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 bg-black/60 backdrop-blur-sm px-4 py-2 opacity-0"
          >
            <Maximize2 size={14} className="text-white/80" />
            <span className="text-[11px] font-light tracking-[0.05em] text-white/80">
              Appuyez pour agrandir
            </span>
          </div>

          {/* Progress bar */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 w-32 h-[3px] bg-black/[0.06]">
            <div
              ref={progressBarRef}
              className="h-full bg-accent origin-left"
              style={{
                transform: "scaleX(0)",
                boxShadow: "0 0 8px rgba(var(--color-accent-rgb), 0.3)",
              }}
            />
          </div>
        </div>
      </div>

      {/* ── Lightbox modal ── */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-8"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-10 h-10 flex items-center justify-center bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-4xl aspect-[16/10] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Exemple de réalisation Vizion"
                fill
                sizes="(max-width: 768px) 100vw, 900px"
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
