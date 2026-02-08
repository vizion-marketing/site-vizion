"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function IntroSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12 bg-white">
      <div className="max-w-[82.5rem] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Texte */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-medium text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] leading-[1.1] tracking-[-0.02em] text-[#1a1a1a] mb-6 sm:mb-8">
              Les meilleurs produits ne gagnent pas toujours.
              <br />
              <span className="text-[#1a1a1a]">Les plus clairs, si.</span>
            </h2>

            <div className="space-y-4 sm:space-y-5 text-[#6b6b6b] text-[15px] sm:text-base font-[var(--font-body)] leading-relaxed">
              <p>
                Votre produit est excellent. Vos clients satisfaits le confirment. Pourtant,
                vos prospects ne le voient pas. Ils comparent, hésitent, et finissent par
                choisir un concurrent moins bon mais plus lisible. Le problème n'est pas
                votre offre — c'est la façon dont elle est perçue.
              </p>
              <p>
                Dans un marché saturé, la clarté est devenue l'avantage concurrentiel ultime.
                Les entreprises qui gagnent ne sont pas celles qui ont le meilleur produit,
                mais celles qui savent le rendre évident. Chaque jour, vous perdez des deals
                non pas parce que vous êtes moins bons, mais parce que vous êtes moins clairs.
              </p>
            </div>

            <div className="mt-8 sm:mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 h-[48px] sm:h-[52px] px-6 sm:px-8 text-[13px] sm:text-[14px] font-[var(--font-body)] font-semibold tracking-[-0.01em] bg-[#1a1a1a] text-white rounded-md hover:bg-black/90 hover:-translate-y-0.5 transition-all duration-300 active:scale-95"
              >
                Clarifier mon offre
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200"
                alt="Équipe en réunion stratégique"
                className="w-full h-full object-cover"
              />
              {/* Overlay subtil */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent" />
            </div>

            {/* Badge flottant optionnel */}
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white border border-black/10 rounded-lg p-4 sm:p-5 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#D4FD00]/20 flex items-center justify-center">
                  <span className="text-[#1a1a1a] font-heading font-medium text-lg sm:text-xl">70+</span>
                </div>
                <div>
                  <p className="text-[#1a1a1a] font-[var(--font-body)] font-semibold text-sm">Entreprises</p>
                  <p className="text-[#6b6b6b] text-xs">accompagnées</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
