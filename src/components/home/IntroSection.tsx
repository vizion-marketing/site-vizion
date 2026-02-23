"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const MANIFESTO_TITLE = "Le marketing B2B mérite mieux.";

const MANIFESTO_PARAGRAPHS = [
  "Trop d'entreprises confient leur marketing à des agences qui produisent sans réfléchir. Un logo par-ci, une campagne par-là, des contenus que personne ne lit. Aucune vision d'ensemble. Aucun lien avec la réalité commerciale.",
  "Résultat : des sites web où personne ne comprend ce que vous vendez. Des commerciaux qui réinventent le pitch à chaque rendez-vous. Des supports qui restent au fond d'un drive. Et un budget marketing qui ne génère aucun retour mesurable.",
  "Chez Vizion, on ne commence jamais par produire. On commence par comprendre : votre offre, votre marché, vos cycles de vente. On pose le positionnement et le messaging. Et seulement ensuite, on construit le système qui les porte — les pages, les campagnes, les outils de vente.",
  "La différence entre une agence d'exécution et un partenaire stratégique ? L'agence d'exécution vous livre ce que vous demandez. Le partenaire stratégique vous dit ce dont vous avez vraiment besoin — et vous aide à le construire.",
  "Nous challengeons vos priorités. Nous refusons de produire pour produire. Et nous vous rendons plus autonomes, pas plus dépendants.",
];

/** Split text into word spans for per-word scroll animation */
function WordSplit({ text, className, as: Tag = "p" }: { text: string; className?: string; as?: "p" | "h2" }) {
  const words = text.split(" ");
  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <span key={i} className="manifesto-word inline" style={{ color: "rgba(26, 26, 26, 0.15)" }}>
          {word}{i < words.length - 1 ? " " : ""}
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

    // Desktop: scroll-scrubbed word-by-word color reveal
    mm.add("(min-width: 768px)", () => {
      blocks.forEach((block) => {
        const words = block.querySelectorAll(".manifesto-word");

        gsap.fromTo(
          words,
          { color: "rgba(26, 26, 26, 0.15)" },
          {
            color: "rgba(26, 26, 26, 1)",
            ease: "none",
            stagger: 0.05,
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
        const words = block.querySelectorAll(".manifesto-word");

        gsap.fromTo(
          words,
          { color: "rgba(26, 26, 26, 0.15)" },
          {
            color: "rgba(26, 26, 26, 1)",
            duration: 0.6,
            stagger: 0.02,
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
          <WordSplit
            as="h2"
            text={MANIFESTO_TITLE}
            className="manifesto-block font-heading font-medium text-[28px] sm:text-[38px] md:text-[48px] lg:text-[60px] xl:text-[68px] leading-[1.05] tracking-[-0.03em] mb-4 sm:mb-6 md:mb-8"
          />

          {/* Paragraphs */}
          {MANIFESTO_PARAGRAPHS.map((paragraph, i) => (
            <WordSplit
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
