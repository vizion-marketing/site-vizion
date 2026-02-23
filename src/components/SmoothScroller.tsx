"use client";

import { useEffect, useRef, createContext, useContext, type ReactNode } from "react";

// Lenis instance type (imported dynamically)
type LenisInstance = {
  scroll: number;
  scrollTo: (target: number | string | HTMLElement, options?: Record<string, unknown>) => void;
  raf: (time: number) => void;
  on: (event: string, callback: (...args: unknown[]) => void) => void;
  off: (event: string, callback: (...args: unknown[]) => void) => void;
  destroy: () => void;
};

const LenisContext = createContext<LenisInstance | null>(null);

export const useLenis = () => useContext(LenisContext);

interface SmoothScrollerProps {
  children: ReactNode;
}

export default function SmoothScroller({ children }: SmoothScrollerProps) {
  const lenisRef = useRef<LenisInstance | null>(null);

  useEffect(() => {
    let cancelled = false;
    let lenis: LenisInstance | null = null;
    let tickerCallback: ((time: number) => void) | null = null;

    // Dynamic import — keeps Lenis + GSAP ScrollTrigger out of the initial bundle
    Promise.all([
      import("lenis"),
      import("gsap"),
      import("gsap/ScrollTrigger"),
    ]).then(([LenisModule, gsapModule, ScrollTriggerModule]) => {
      if (cancelled) return;

      const Lenis = LenisModule.default;
      const { gsap } = gsapModule;
      const { ScrollTrigger } = ScrollTriggerModule;

      gsap.registerPlugin(ScrollTrigger);

      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        touchMultiplier: 2,
        infinite: false,
      }) as LenisInstance;

      lenisRef.current = lenis;

      ScrollTrigger.scrollerProxy(document.body, {
        scrollTop(value?: number) {
          if (arguments.length && value !== undefined) {
            lenis!.scrollTo(value, { immediate: true });
          }
          return lenis!.scroll;
        },
        getBoundingClientRect() {
          return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
      });

      lenis.on("scroll", ScrollTrigger.update);

      tickerCallback = (time: number) => {
        lenis!.raf(time * 1000);
      };
      gsap.ticker.add(tickerCallback);
      gsap.ticker.lagSmoothing(0);
    });

    return () => {
      cancelled = true;
      if (lenis) {
        lenis.destroy();
        lenisRef.current = null;
      }
      if (tickerCallback) {
        import("gsap").then(({ gsap }) => {
          gsap.ticker.remove(tickerCallback!);
        });
      }
    };
  }, []);

  return (
    <LenisContext.Provider value={lenisRef.current}>
      {children}
    </LenisContext.Provider>
  );
}
