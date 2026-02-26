"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const MANIFESTO_TITLE = "Les entreprises toulousaines méritent mieux qu'un coup de communication.";

const MANIFESTO_PARAGRAPHS = [
  "Vos cycles de vente durent des mois. Vos décideurs comparent, challengent, arbitrent. Ils ne cherchent pas de la créativité. Ils veulent de la clarté, de la structure, des preuves.",
  "Ce qui fonctionne pour vous, c'est la répétition. Un positionnement ancré. Un discours cohérent à chaque étape. Des fondations solides qui tiennent sur des cycles longs.",
  "On construit le socle que personne ne pose : positionnement, architecture de message, alignement marketing-ventes. Vous cherchez la rigueur nécessaire pour transformer votre offre en référence sur votre marché.",
];

const MISSION_STATEMENT = "Alors on s'est donné une mission : faire de votre produit une évidence.";

/** Split text into lines for line-by-line scroll animation */
function LineSplit({ text, className, as: Tag = "p" }: { text: string; className?: string; as?: "p" | "h2" }) {
  // Split by sentence (period + space) for natural line breaks
  const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];

  return (
    <Tag className={className}>
      {sentences.map((sentence, idx) => (
        <span
          key={idx}
          className="manifesto-line inline-block"
          style={{ color: "rgba(26, 26, 26, 0.15)" }}
        >
          {sentence}
          {idx < sentences.length - 1 && " "}
        </span>
      ))}
    </Tag>
  );
}

export function IntroSection() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!contentRef.current) return;

    const blocks = contentRef.current.querySelectorAll(".manifesto-block");

    const mm = gsap.matchMedia();

    // Desktop & Mobile: line-by-line color reveal
    mm.add("(min-width: 768px)", () => {
      blocks.forEach((block) => {
        const lines = block.querySelectorAll(".manifesto-line");

        gsap.fromTo(
          lines,
          { color: "rgba(26, 26, 26, 0.15)" },
          {
            color: "rgba(26, 26, 26, 1)",
            duration: 0.4,
            ease: "power2.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: block,
              start: "top 80%",
              end: "bottom 50%",
              scrub: 1.2,
            },
          }
        );
      });

      return () => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    });

    // Mobile: faster line-by-line reveal
    mm.add("(max-width: 767px)", () => {
      blocks.forEach((block) => {
        const lines = block.querySelectorAll(".manifesto-line");

        gsap.fromTo(
          lines,
          { color: "rgba(26, 26, 26, 0.15)" },
          {
            color: "rgba(26, 26, 26, 1)",
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: block,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      return () => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section className="relative py-20 sm:py-28 md:py-36 lg:py-44 px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden grain-overlay">
      {/* Background — full-bleed light */}
      <div
        className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[100vw] max-w-none bg-card"
        style={{ minWidth: "100vw" }}
        aria-hidden
      />

      {/* Gradient blobs */}
      <div
        className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[100vw] max-w-none pointer-events-none overflow-hidden"
        style={{ minWidth: "100vw" }}
        aria-hidden
      >
        <div
          className="absolute w-[80%] h-[60%] top-[-20%] left-[-20%] animate-gradient-float-1"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.12) 0%, transparent 55%)",
          }}
        />
        <div
          className="absolute w-[60%] h-[50%] bottom-[-15%] right-[-15%] animate-gradient-float-3"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.08) 0%, transparent 55%)",
          }}
        />
      </div>

      <div className="max-w-[82.5rem] mx-auto relative z-10">
        {/* Surtitre */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-14 md:mb-16"
        >
          <div className="flex items-center gap-2.5">
            <div className="relative flex items-center justify-center w-2 h-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </div>
            <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-muted uppercase">
              Notre manifeste
            </span>
          </div>
        </motion.div>

        <div ref={contentRef} className="max-w-4xl space-y-6 sm:space-y-8 md:space-y-10">
          {/* Title */}
          <LineSplit
            as="h2"
            text={MANIFESTO_TITLE}
            className="manifesto-block font-heading font-medium text-[28px] sm:text-[38px] md:text-[48px] lg:text-[60px] xl:text-[68px] leading-[1.05] tracking-[-0.03em] mb-4 sm:mb-6 md:mb-8"
          />

          {/* Paragraphs */}
          {MANIFESTO_PARAGRAPHS.map((paragraph, i) => (
            <LineSplit
              key={i}
              text={paragraph}
              className="manifesto-block text-[15px] sm:text-[17px] md:text-[19px] lg:text-[21px] leading-[1.65] font-light"
            />
          ))}

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="pt-6 sm:pt-8 md:pt-10"
          >
            <p className="font-heading font-medium text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] leading-[1.2] tracking-[-0.01em] text-primary">
              Alors on s'est donné une mission :{" "}
              <span className="text-primary">
                faire de votre produit une évidence
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
