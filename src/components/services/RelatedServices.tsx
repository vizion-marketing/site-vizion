"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { RelatedService } from "@/content/services";
import { resolveIcon } from "@/lib/icon-resolver";

gsap.registerPlugin(ScrollTrigger);

interface RelatedServicesProps {
  title?: string;
  subtitle?: string;
  services: RelatedService[];
}

export function RelatedServices({
  title = "Découvrez nos autres services",
  subtitle,
  services,
}: RelatedServicesProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Header entrance
      gsap.from("[data-related='header']", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
      });

      // Staggered cards
      gsap.from("[data-related='card']", {
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
      });
    },
    { scope: sectionRef },
  );

  if (!services || services.length === 0) return null;

  return (
    <section
      ref={sectionRef}
      className="bg-white py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12"
    >
      <div className="max-w-[82.5rem] mx-auto">
        {/* Header */}
        <div data-related="header" className="max-w-2xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
            <div className="w-2 h-2 bg-accent" />
            <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-muted uppercase">
              Services complémentaires
            </span>
          </div>
          <h2 className="font-heading font-normal text-[28px] sm:text-[36px] md:text-[44px] leading-[1.05] tracking-[-0.035em] text-primary">
            {title}
          </h2>
          {subtitle && (
            <p className="text-base sm:text-lg text-secondary leading-relaxed mt-4">
              {subtitle}
            </p>
          )}
        </div>

        {/* Cards grid — dark / accent alternating */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {services.map((service, i) => {
            const Icon = resolveIcon(service.icon);
            const isAccent = i === 1;

            return (
              <Link
                key={service.slug}
                href={service.href}
                data-related="card"
                className={`group relative p-8 sm:p-10 flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  isAccent
                    ? "bg-accent"
                    : "dark-section"
                }`}
                style={isAccent ? undefined : { background: "var(--bg-dark)" }}
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 flex items-center justify-center mb-8 border transition-transform duration-300 group-hover:scale-110 ${
                    isAccent
                      ? "bg-black/10 border-black/10"
                      : "bg-white/10 border-white/10"
                  }`}
                >
                  <Icon
                    className={`w-6 h-6 ${
                      isAccent ? "text-black" : "text-accent"
                    }`}
                  />
                </div>

                {/* Title */}
                <h3
                  className={`font-heading font-medium text-[20px] sm:text-[22px] leading-tight tracking-[-0.02em] mb-3 ${
                    isAccent ? "text-black" : "text-white"
                  }`}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-[14px] sm:text-[15px] leading-relaxed flex-1 ${
                    isAccent ? "text-black/70" : "text-white/60"
                  }`}
                >
                  {service.description}
                </p>

                {/* CTA */}
                <div
                  className={`flex items-center gap-2 mt-8 text-[13px] sm:text-[14px] font-medium transition-all duration-300 ${
                    isAccent
                      ? "text-black group-hover:gap-3"
                      : "text-white group-hover:text-accent group-hover:gap-3"
                  }`}
                >
                  <span>En savoir plus</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
