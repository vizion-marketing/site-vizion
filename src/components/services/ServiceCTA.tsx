"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ServiceCTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

export function ServiceCTA({
  title = "Prêt à transformer votre marketing ?",
  description = "Premier échange sans engagement",
  buttonText = "Discuter de votre projet",
  buttonLink = "/contact",
}: ServiceCTAProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Word-by-word reveal on title
      if (!titleRef.current) return;
      const words = titleRef.current.querySelectorAll(".cta-word");

      gsap.set(words, { yPercent: 100, opacity: 0 });
      gsap.set(contentRef.current, { opacity: 0, y: 20 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.to(words, {
        yPercent: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.04,
        ease: "power3.out",
      });

      tl.to(
        contentRef.current,
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
        "-=0.3",
      );
    },
    { scope: sectionRef },
  );

  // Split title into words for animation
  const titleWords = title.split(" ");

  return (
    <section
      ref={sectionRef}
      className="dark-section grain-overlay relative overflow-hidden py-24 sm:py-32 md:py-40 px-4 sm:px-6 md:px-12"
      style={{ background: "var(--bg-dark)" }}
    >
      {/* Primary glow - center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(var(--color-accent-rgb), 0.10) 0%, transparent 55%)",
        }}
      />
      {/* Secondary glow - top-left */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 15% 20%, rgba(var(--color-accent-rgb), 0.06) 0%, transparent 50%)",
        }}
      />
      {/* Tertiary glow - bottom-right */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 45% 45% at 85% 80%, rgba(var(--color-accent-rgb), 0.05) 0%, transparent 50%)",
        }}
      />

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 right-[15%] w-3 h-3 border border-white/10 animate-gradient-float-2 pointer-events-none" />
      <div className="absolute bottom-1/3 left-[10%] w-2 h-2 bg-accent/20 animate-gradient-float-4 pointer-events-none" />
      <div className="absolute top-[60%] right-[8%] w-1.5 h-1.5 bg-white/10 animate-gradient-float-3 pointer-events-none" />

      <div className="text-center max-w-[40rem] mx-auto relative z-10">
        {/* Title with word-by-word reveal */}
        <h2
          ref={titleRef}
          className="text-[28px] min-[400px]:text-[32px] sm:text-[40px] md:text-5xl text-white font-normal leading-tight flex flex-wrap justify-center gap-x-[0.3em]"
        >
          {titleWords.map((word, i) => (
            <span key={i} className="overflow-hidden inline-block">
              <span className="cta-word inline-block">{word}</span>
            </span>
          ))}
        </h2>

        {/* Description + buttons */}
        <div ref={contentRef}>
          <p className="text-lg text-white/70 mt-4 mb-10">{description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={buttonLink}
              className="inline-flex items-center justify-center gap-3 bg-accent text-black font-medium px-10 py-4 hover:bg-accent/90 hover:scale-[1.02] active:scale-[0.97] transition-all duration-200"
            >
              <span className="w-2 h-2 bg-black animate-[accent-pulse_2s_ease-in-out_infinite]" />
              {buttonText}
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center border border-white/20 text-white px-10 py-4 hover:border-accent/40 hover:bg-white/5 active:scale-[0.97] transition-all duration-300"
            >
              Découvrir nos services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
