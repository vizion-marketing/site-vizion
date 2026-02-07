"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const MANIFESTO_LINES = [
  { text: "Les meilleurs produits ne gagnent pas toujours.", type: "bold" },
  { text: "Les plus clairs, si.", type: "bold" },
  { text: "", type: "spacer" },
  { text: "Vous avez construit quelque chose de solide. Un produit, un service,", type: "normal" },
  { text: "un concept, une expertise. Mais sur votre marché, être bon ne suffit", type: "normal" },
  { text: "pas. Il faut être clair.", type: "normal" },
  { text: "", type: "spacer" },
  { text: "Clair dans ce que vous promettez. Clair dans pourquoi vous et pas", type: "normal" },
  { text: "un autre. Clair à chaque point de contact : votre site, vos pubs,", type: "normal" },
  { text: "vos commerciaux, votre présence LinkedIn, vos supports de vente.", type: "normal" },
  { text: "", type: "spacer" },
  { text: "Votre entreprise perd tous les jours des deals non pas parce que", type: "normal" },
  { text: "votre offre est moins bonne, mais parce qu'elle est moins lisible.", type: "normal" },
  { text: "Le concurrent qui gagne, c'est rarement le meilleur.", type: "normal" },
  { text: "C'est le plus évident.", type: "normal" },
  { text: "", type: "spacer" },
  { text: "C'est pour cette raison que nous nous sommes investis d'une mission :", type: "normal" },
  { text: "faire de votre produit une évidence.", type: "mission" },
];

const textLines = MANIFESTO_LINES.filter(l => l.type !== "spacer");
const totalLines = textLines.length;

function ManifestoLine({
  text,
  type,
  lineIndex,
  scrollYProgress
}: {
  text: string;
  type: string;
  lineIndex: number;
  scrollYProgress: any;
}) {
  const start = lineIndex / totalLines;
  const end = (lineIndex + 0.8) / totalLines;

  const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);

  const getClassName = () => {
    switch (type) {
      case "bold":
        return "font-heading font-medium text-[18px] sm:text-[22px] md:text-[28px] lg:text-[32px] leading-[1.1] tracking-[-0.02em] text-black";
      case "mission":
        return "font-heading font-medium text-[16px] sm:text-[18px] md:text-[22px] lg:text-[26px] leading-[1.2] tracking-[-0.02em] text-black border-l-[3px] border-[#D4FD00] pl-4 sm:pl-5";
      default:
        return "font-[var(--font-body)] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] leading-[1.4] tracking-[-0.01em] text-black";
    }
  };

  return (
    <motion.p style={{ opacity }} className={getClassName()}>
      {text}
    </motion.p>
  );
}

export function ManifestoSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.5", "end 0.5"]
  });

  let lineIndex = 0;

  return (
    <section
      ref={sectionRef}
      className="bg-white py-20 sm:py-28 md:py-36 lg:py-44 px-4 sm:px-6 md:px-12"
    >
      <div className="max-w-[64rem] mx-auto">
        <div className="space-y-0">
          {MANIFESTO_LINES.map((line, i) => {
            if (line.type === "spacer") {
              return <div key={i} className="h-5 sm:h-6" />;
            }
            const currentLineIndex = lineIndex;
            lineIndex++;
            return (
              <ManifestoLine
                key={i}
                text={line.text}
                type={line.type}
                lineIndex={currentLineIndex}
                scrollYProgress={scrollYProgress}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ManifestoSection;
