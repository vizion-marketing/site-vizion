"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { SolutionItem } from "@/content/services";

gsap.registerPlugin(ScrollTrigger);

interface SolutionStickyProps {
  title: string;
  subtitle?: string;
  image: string;
  items: SolutionItem[];
}

export function SolutionSticky({
  title,
  subtitle,
  image,
  items,
}: SolutionStickyProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [reachedIndex, setReachedIndex] = useState(-1);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Track highest reached card — once activated, stays activated
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    cardRefs.current.forEach((ref, i) => {
      if (!ref) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setReachedIndex((prev) => Math.max(prev, i));
          }
        },
        { threshold: 0.4 },
      );
      observer.observe(ref);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [items.length]);

  // Scroll progress for the section
  const [scrollProgress, setScrollProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const scrolled = -rect.top;
      const progress = Math.min(Math.max(scrolled / (sectionHeight - window.innerHeight), 0), 1);
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP entrance animations
  useGSAP(
    () => {
      // Title
      gsap.from("[data-solution='title']", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Subtitle
      gsap.from("[data-solution='subtitle']", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        delay: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Image
      gsap.from("[data-solution='image']", {
        opacity: 0,
        scale: 1.04,
        duration: 1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Chart container — fade in
      gsap.from("[data-solution='chart']", {
        opacity: 0, y: 20, duration: 0.6, delay: 0.4,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });

      // Bars — grow from bottom with stagger
      gsap.from("[data-solution='bar']", {
        scaleY: 0, duration: 0.8, stagger: 0.1, delay: 0.6,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });

      // Continuous floating motion on chart
      gsap.to("[data-solution='chart']", {
        y: "-=8", duration: 3, ease: "sine.inOut", repeat: -1, yoyo: true,
      });

      // Cards — slide in from right
      gsap.fromTo(
        "[data-solution='card']",
        { opacity: 0, x: 80 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-solution='cards']",
            start: "top 85%",
          },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="dark-section grain-overlay relative py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12"
      style={{ background: "var(--bg-dark)" }}
    >
      {/* Accent blobs */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute w-[50%] h-[50%] top-[10%] right-[-10%]"
          style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.08) 0%, transparent 55%)" }}
        />
        <div
          className="absolute w-[40%] h-[40%] bottom-[5%] left-[-5%]"
          style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.06) 0%, transparent 55%)" }}
        />
      </div>

      <div className="max-w-[82.5rem] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 relative z-10">
        {/* Left — Image sticky with gradients + floating UI elements */}
        <div className="lg:sticky lg:top-[100px] lg:self-start">
          <div
            data-solution="image"
            className="relative overflow-hidden aspect-[4/5] sm:aspect-[3/4] lg:aspect-auto lg:h-[70vh] group"
          >
            <Image
              src={image}
              alt="Mockup site web Vizion"
              fill
              className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Gradient bottom — black fade */}
            <div
              className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
              style={{ background: "linear-gradient(to top, var(--bg-dark) 0%, transparent 100%)" }}
            />
            {/* Gradient left — black fade */}
            <div
              className="absolute inset-y-0 left-0 w-1/4 pointer-events-none"
              style={{ background: "linear-gradient(to right, var(--bg-dark) 0%, transparent 100%)" }}
            />

            {/* Floating bar chart */}
            <div
              data-solution="chart"
              className="absolute bottom-[28%] left-[6%] bg-white/[0.08] backdrop-blur-md border border-white/15 p-4"
            >
              <div className="flex items-end gap-[6px] h-[80px]">
                <div data-solution="bar" className="w-[10px] bg-accent origin-bottom" style={{ height: "35%" }} />
                <div data-solution="bar" className="w-[10px] bg-accent origin-bottom" style={{ height: "55%" }} />
                <div data-solution="bar" className="w-[10px] bg-accent origin-bottom" style={{ height: "40%" }} />
                <div data-solution="bar" className="w-[10px] bg-accent origin-bottom" style={{ height: "75%" }} />
                <div data-solution="bar" className="w-[10px] bg-accent origin-bottom" style={{ height: "60%" }} />
                <div data-solution="bar" className="w-[10px] bg-accent origin-bottom" style={{ height: "90%" }} />
                <div data-solution="bar" className="w-[10px] bg-accent origin-bottom" style={{ height: "70%" }} />
              </div>
            </div>
          </div>
        </div>

        {/* Right — Titre + sous-titre + cards défilantes */}
        <div data-solution="cards" className="flex flex-col gap-5 lg:gap-6">
          {/* Titre + sous-paragraphe */}
          <div className="mb-2">
            <h2
              data-solution="title"
              className="font-heading font-medium text-[24px] sm:text-[30px] md:text-[36px] lg:text-[42px] leading-[1.1] tracking-[-0.02em] text-white mb-4"
            >
              {title}
            </h2>
            {subtitle && (
              <p
                data-solution="subtitle"
                className="text-[14px] sm:text-[15px] text-white/60 leading-relaxed max-w-lg"
              >
                {subtitle}
              </p>
            )}
          </div>

          {/* Cards with progress bar */}
          <div className="relative lg:pl-5 flex flex-col gap-4 sm:gap-5">
          {items.map((item, i) => {
            const isReached = i <= reachedIndex;
            const num = String(i + 1).padStart(2, "0");

            return (
              <div key={i}>
                {i > 0 && (
                  <div className="h-px bg-white/[0.08]" />
                )}
                <div
                  ref={(el) => {
                    cardRefs.current[i] = el;
                  }}
                  data-solution="card"
                  className={`py-7 sm:py-8 px-6 sm:px-8 transition-all duration-500 ${
                    isReached
                      ? "bg-white/[0.06] backdrop-blur-sm"
                      : "hover:bg-white/[0.03]"
                  }`}
                >
                  <div className="flex items-start gap-5">
                    <span
                      className={`text-[13px] font-medium tracking-wide shrink-0 mt-1 transition-colors duration-500 ${
                        isReached ? "text-accent" : "text-white/30"
                      }`}
                    >
                      {num}
                    </span>
                    <div>
                      <h3 className="text-[17px] sm:text-[19px] font-semibold text-white leading-snug mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[14px] sm:text-[15px] text-white/60 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          {/* Scroll progress bar — left edge of cards only */}
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-white/[0.08] hidden lg:block">
            <div
              className="w-full bg-accent origin-top transition-none"
              style={{ height: `${scrollProgress * 100}%` }}
            />
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
