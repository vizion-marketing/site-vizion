"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ADJECTIVES = ["simples", "performants", "qui convertissent"];

export function WebScrollTitle() {
  const containerRef = useRef<HTMLDivElement>(null);
  const brefRef = useRef<HTMLSpanElement>(null);
  const phraseRef = useRef<HTMLDivElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const progressBarRef = useRef<HTMLDivElement>(null);

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
          },
        },
      });

      // Init: hide everything except Bref
      gsap.set(phraseRef.current, { opacity: 0, y: 40 });
      wordRefs.current.forEach((el) => {
        if (el) gsap.set(el, { opacity: 0 });
      });

      // PHASE 1: "Bref." — zooms until it flies past you
      tl.fromTo(
        brefRef.current,
        { scale: 1, opacity: 1 },
        { scale: 35, opacity: 0, duration: 1.5, ease: "power3.in" },
      );

      // PHASE 2: "Chez Vizion, on crée des sites internet..."
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

      // PHASE 3: Adjectives — each with unique effect
      const [w0, w1, w2] = wordRefs.current;

      // 1. "simples" — bouncy scale from bottom
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

      // 2. "performants" — clip-path wipe left to right
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

      // 3. "qui convertissent" — blur reveal, stays visible
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
        tl.to({}, { duration: 0.8 }); // final hold
      }
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} style={{ height: "350vh" }}>
      <div className="sticky top-0 h-screen bg-card relative overflow-hidden">
        {/* Decorative accent gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(var(--color-accent-rgb), 0.06) 0%, transparent 60%)",
          }}
        />

        {/* Phase 1: "Bref." */}
        <span
          ref={brefRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 font-heading font-medium text-[80px] sm:text-[120px] lg:text-[180px] leading-none tracking-[-0.04em] text-primary select-none"
        >
          Bref.
        </span>

        {/* Phase 2: "Chez Vizion..." */}
        <div
          ref={phraseRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full px-6"
        >
          <p className="font-heading font-normal text-[36px] sm:text-[52px] lg:text-[68px] leading-[1.05] tracking-[-0.035em] text-primary max-w-5xl mx-auto text-center">
            Chez Vizion, on crée
            <br />
            des sites internet...
          </p>
        </div>

        {/* Phase 3: Adjective words */}
        {ADJECTIVES.map((word, i) => (
          <span
            key={word}
            ref={(el) => {
              wordRefs.current[i] = el;
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 font-heading font-normal text-[44px] sm:text-[68px] lg:text-[96px] leading-none tracking-[-0.04em] bg-accent text-black px-6 sm:px-8 py-2 sm:py-3 whitespace-nowrap"
            style={{ opacity: 0 }}
          >
            {word}
          </span>
        ))}

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
  );
}
