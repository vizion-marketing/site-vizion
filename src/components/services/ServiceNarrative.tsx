"use client";

import { useRef } from "react";
import { Users, BarChart3, Clock, AlertTriangle } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { NarrativeBlock, NarrativeStatement } from "@/content/services";

gsap.registerPlugin(ScrollTrigger);

const statementIcons = [Users, BarChart3, Clock, AlertTriangle];

function StatementCard({
  statement,
  index,
}: {
  statement: NarrativeStatement;
  index: number;
}) {
  const Icon = statementIcons[index % statementIcons.length];
  return (
    <div
      data-narrative="card"
      className="relative bg-white border border-black/[0.06] p-6 hover:border-black/[0.12] hover:shadow-lg transition-all duration-300 group overflow-hidden"
    >
      <div className="w-10 h-10 bg-accent flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
        <Icon size={18} className="text-black" />
      </div>
      <h3 className="text-[15px] sm:text-[17px] font-semibold text-primary leading-snug mb-2">
        {statement.headline}
      </h3>
      <p className="text-[13px] sm:text-[14px] text-muted leading-relaxed">
        {statement.description}
      </p>
    </div>
  );
}

export function ServiceNarrative({ constat }: { constat: NarrativeBlock }) {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Left column: surtitre + title
      gsap.from("[data-narrative='surtitre']", {
        opacity: 0,
        y: 25,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from("[data-narrative='title']", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Paragraph
      gsap.from("[data-narrative='paragraph']", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Accent vertical line
      gsap.from("[data-narrative='line']", {
        scaleY: 0,
        duration: 0.8,
        delay: 0.3,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Statement cards — stagger
      gsap.fromTo(
        "[data-narrative='card']",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-narrative='cards-grid']",
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
      className="bg-card py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12"
    >
      <div className="max-w-[82.5rem] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
          {/* Gauche — Titre + description */}
          <div className="relative">
            {/* Ligne accent verticale animée */}
            <div
              data-narrative="line"
              className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent origin-top hidden lg:block"
            />

            <div className="lg:pl-6">
              <div data-narrative="surtitre">
                <div className="flex items-center gap-2.5 mb-3 sm:mb-5">
                  <div className="w-2 h-2 bg-accent" />
                  <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-muted uppercase">
                    {constat.surtitre}
                  </span>
                </div>
              </div>

              <h2
                data-narrative="title"
                className="font-heading font-medium text-[24px] sm:text-[34px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] text-primary mb-4 sm:mb-6"
              >
                {constat.title}
              </h2>

              {constat.paragraphs[0] && (
                <p
                  data-narrative="paragraph"
                  className="text-[14px] sm:text-[15px] leading-relaxed text-muted max-w-lg"
                >
                  {constat.paragraphs[0]}
                </p>
              )}
            </div>
          </div>

          {/* Droite — Grille 2×2 de statements */}
          <div
            data-narrative="cards-grid"
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
          >
            {constat.statements?.map((statement, i) => (
              <StatementCard key={i} statement={statement} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
