"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WORDS = [
  "simples à utiliser",
  "simples à comprendre",
  "performants",
  "qui convertissent",
];

export function WebScrollTitle() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const progressRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useGSAP(
    () => {
      // Initial states — all words hidden except first
      wordRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.set(el, { opacity: i === 0 ? 1 : 0, y: i === 0 ? 0 : 28 });
      });

      const holdDuration = 1;
      const transDuration = 0.5;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
          onUpdate: (self) => {
            setCurrentIndex(
              Math.min(
                Math.floor(self.progress * WORDS.length),
                WORDS.length - 1,
              ),
            );
          },
        },
      });

      // Progress bar scrubs with the full timeline
      tl.to(progressRef.current, { scaleX: 1, ease: "none", duration: (WORDS.length - 1) * (holdDuration + transDuration) + holdDuration }, 0);

      // Word transitions
      for (let i = 0; i < WORDS.length - 1; i++) {
        const t = i * (holdDuration + transDuration);

        // Exit — current word lifts up and fades
        tl.to(
          wordRefs.current[i],
          { opacity: 0, y: -28, ease: "power2.inOut", duration: transDuration },
          t + holdDuration,
        );

        // Enter — next word rises from below
        tl.fromTo(
          wordRefs.current[i + 1],
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, ease: "power2.inOut", duration: transDuration },
          t + holdDuration,
        );
      }
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} style={{ height: `${WORDS.length * 100}vh` }}>
      <div className="sticky top-0 h-screen bg-white flex items-center justify-center px-4 sm:px-6 md:px-12 relative">
        <div className="max-w-[82.5rem] mx-auto w-full text-center">

          {/* Label */}
          <div className="flex items-center justify-center gap-2.5 mb-6 sm:mb-8">
            <div className="w-2 h-2 bg-accent" />
            <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-muted uppercase">
              Notre approche
            </span>
          </div>

          {/* Static first line */}
          <p className="font-heading font-medium text-[30px] sm:text-[44px] md:text-[56px] lg:text-[64px] leading-[1.1] tracking-[-0.035em] text-primary mb-2 sm:mb-3">
            Nous créons des sites webs
          </p>

          {/* Animated word — stacked absolute */}
          <div
            className="relative mx-auto"
            style={{ height: "1.4em", maxWidth: "100%" }}
          >
            {WORDS.map((word, i) => (
              <span
                key={word}
                ref={(el) => {
                  wordRefs.current[i] = el;
                }}
                className="absolute left-1/2 -translate-x-1/2 font-heading font-medium text-[30px] sm:text-[44px] md:text-[56px] lg:text-[64px] leading-[1.1] tracking-[-0.035em] bg-accent text-black px-4 sm:px-6 whitespace-nowrap"
                style={{ opacity: i === 0 ? 1 : 0 }}
              >
                {word}
              </span>
            ))}
          </div>

          {/* Counter */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <span className="text-[11px] tracking-[0.18em] text-muted font-light uppercase tabular-nums">
              0{currentIndex + 1}&ensp;—&ensp;0{WORDS.length}
            </span>
          </div>
        </div>

        {/* Progress bar — bottom of screen */}
        <div
          ref={progressRef}
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent"
          style={{ transform: "scaleX(0)", transformOrigin: "left center" }}
        />
      </div>
    </div>
  );
}
