"use client";

import { useRef } from "react";
import { AlertCircle, TrendingDown, SearchX, MessageCircleQuestion } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { NarrativeBlock, NarrativeStatement } from "@/content/services";

gsap.registerPlugin(ScrollTrigger);

const statementIcons = [AlertCircle, TrendingDown, SearchX, MessageCircleQuestion];

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
      <div data-narrative="card-icon" className="w-10 h-10 bg-accent flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
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
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        defaults: { ease: "power3.out" },
      });

      // Accent line grows from top
      tl.from("[data-narrative='line']", {
        scaleY: 0,
        duration: 1,
        ease: "expo.out",
      }, 0);

      // Surtitre slides in from left
      tl.from("[data-narrative='surtitre']", {
        opacity: 0,
        x: -30,
        duration: 0.6,
      }, 0.1);

      // Paragraph fades up
      tl.from("[data-narrative='paragraph']", {
        opacity: 0,
        y: 25,
        duration: 0.7,
      }, 0.2);

      // Title — big reveal
      tl.from("[data-narrative='title']", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "expo.out",
      }, 0.35);

      // Cards — stagger from bottom with slight scale
      tl.fromTo(
        "[data-narrative='card']",
        { opacity: 0, y: 40, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
        },
        0.3,
      );

      // Card icons — pop in after cards
      tl.from("[data-narrative='card-icon']", {
        opacity: 0,
        scale: 0,
        rotation: -15,
        duration: 0.4,
        stagger: 0.08,
        ease: "back.out(2)",
      }, 0.7);
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="bg-card py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12"
    >
      <div className="max-w-[82.5rem] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-end">
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

              {constat.paragraphs[0] && (
                <p
                  data-narrative="paragraph"
                  className="text-[14px] sm:text-[15px] leading-relaxed text-muted max-w-lg mb-5 sm:mb-7"
                >
                  {constat.paragraphs[0]}
                </p>
              )}

              <h2
                data-narrative="title"
                className="font-heading font-medium text-[28px] sm:text-[38px] md:text-[48px] lg:text-[56px] leading-[1.05] tracking-[-0.03em] text-primary mb-4 sm:mb-6"
              >
                {constat.title}
              </h2>

              {constat.paragraphs[1] && (
                <p
                  data-narrative="paragraph"
                  className="text-[14px] sm:text-[15px] leading-relaxed text-muted max-w-lg"
                >
                  {constat.paragraphs[1]}
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
