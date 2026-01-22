"use client";

import React from "react";
import { motion } from "framer-motion";
import { LogoWall } from "@/components/ui/LogoWall";

interface Logo {
  id: string | number;
  src: string;
  alt: string;
}

interface SocialProofSectionProps {
  logos?: Logo[];
  title?: string;
  surtitre?: string;
}

const SocialProofSection: React.FC<SocialProofSectionProps> = ({
  logos = [],
  title = "Ils nous font confiance",
  surtitre = "Partenaires & Clients",
}) => {
  if (!logos || logos.length === 0) {
    return null;
  }

  return (
    <section className="relative w-full bg-white py-12 md:py-20 overflow-hidden border-y border-neutral-100">
      <div className="container mx-auto px-4 mb-10 md:mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center space-y-3"
        >
          {surtitre && (
            <span className="font-['Inter'] text-[11px] uppercase tracking-[0.25em] text-neutral-400 font-medium">
              {surtitre}
            </span>
          )}
          {title && (
            <h2 className="font-['Roboto'] text-2xl md:text-3xl font-black uppercase tracking-tight text-neutral-900">
              {title}
            </h2>
          )}
        </motion.div>
      </div>

      <LogoWall
        logos={logos}
        speed="slow"
        className="bg-white"
      />
    </section>
  );
};

export default SocialProofSection;
export { SocialProofSection };
