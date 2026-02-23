"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const MANIFESTO_TITLE = "Votre offre est solide. Votre marché ne le sait pas encore.";

const MANIFESTO_PARAGRAPHS = [
  "Vous avez investi dans votre produit, recruté des commerciaux, lancé des campagnes. Pourtant, quand un prospect arrive sur votre site, il ne comprend pas ce que vous faites. Quand votre commercial argumente, il improvise. Quand votre client compare, il ne voit pas la différence.",
  "Le problème n'est pas l'exécution. C'est l'absence de fondations. Pas de positionnement clair. Pas de message unifié. Pas de continuité entre le marketing et les ventes. Résultat : chaque livrable part dans une direction différente.",
  "Vizion est une agence de marketing stratégique à Toulouse. Nous construisons le socle que personne ne pose : positionnement, architecture de message, tunnel de vente aligné. Chaque campagne, chaque page, chaque présentation commerciale découle de ces fondations.",
  "Nous ne commençons jamais par produire. Nous diagnostiquons, nous challengeons, nous posons le cadre stratégique. Ensuite seulement, nous construisons, et tout est connecté, du premier clic publicitaire à la signature.",
  "Nos clients ne nous consultent pas pour un logo ou un post LinkedIn. Ils viennent parce qu'ils veulent que leur offre devienne l'évidence sur leur marché.",
];

/** Split text into character spans (grouped by word) for per-letter scroll animation */
function CharSplit({ text, className, as: Tag = "p" }: { text: string; className?: string; as?: "p" | "h2" }) {
  const words = text.split(" ");
  return (
    <Tag className={className}>
      {words.map((word, wi) => (
        <span key={wi} className="inline-block mr-[0.25em]">
          {word.split("").map((char, ci) => (
            <span
              key={ci}
              className="manifesto-char inline-block"
              style={{ color: "rgba(26, 26, 26, 0.15)" }}
            >
              {char}
            </span>
          ))}
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

    // Desktop: scroll-scrubbed letter-by-letter color reveal
    mm.add("(min-width: 768px)", () => {
      blocks.forEach((block) => {
        const chars = block.querySelectorAll(".manifesto-char");

        gsap.fromTo(
          chars,
          { color: "rgba(26, 26, 26, 0.15)" },
          {
            color: "rgba(26, 26, 26, 1)",
            ease: "none",
            stagger: 0.01,
            scrollTrigger: {
              trigger: block,
              start: "top 85%",
              end: "bottom 40%",
              scrub: 1,
            },
          }
        );
      });

      return () => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    });

    // Mobile: simple reveal (whole block)
    mm.add("(max-width: 767px)", () => {
      blocks.forEach((block) => {
        const chars = block.querySelectorAll(".manifesto-char");

        gsap.fromTo(
          chars,
          { color: "rgba(26, 26, 26, 0.15)" },
          {
            color: "rgba(26, 26, 26, 1)",
            duration: 0.6,
            stagger: 0.005,
            ease: "power2.out",
            scrollTrigger: {
              trigger: block,
              start: "top 90%",
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
        className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[100vw] max-w-none bg-[#f8f8f6]"
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
              "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.12) 0%, transparent 55%)",
          }}
        />
        <div
          className="absolute w-[60%] h-[50%] bottom-[-15%] right-[-15%] animate-gradient-float-3"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.08) 0%, transparent 55%)",
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
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D4FD00] opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#D4FD00]" />
            </div>
            <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-muted uppercase">
              Notre manifeste
            </span>
          </div>
        </motion.div>

        <div ref={contentRef} className="max-w-4xl space-y-6 sm:space-y-8 md:space-y-10">
          {/* Title */}
          <CharSplit
            as="h2"
            text={MANIFESTO_TITLE}
            className="manifesto-block font-heading font-medium text-[28px] sm:text-[38px] md:text-[48px] lg:text-[60px] xl:text-[68px] leading-[1.05] tracking-[-0.03em] mb-4 sm:mb-6 md:mb-8"
          />

          {/* Paragraphs */}
          {MANIFESTO_PARAGRAPHS.map((paragraph, i) => (
            <CharSplit
              key={i}
              text={paragraph}
              className="manifesto-block text-[15px] sm:text-[17px] md:text-[19px] lg:text-[21px] leading-[1.65] font-light"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
