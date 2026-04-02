"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Rocket, RefreshCw, Compass, TrendingUp, Layers, ArrowRight } from "lucide-react";

const USE_CASES = [
  {
    slug: "lancement-produit",
    icon: Rocket,
    title: "Vous lancez un produit sur le marché.",
    description: "Positionnement flou, équipe commerciale non préparée, date de lancement sans plan marketing. On structure votre go-to-market de A à Z.",
    cta: "Go-to-market et lancement produit B2B",
    image: "/images/services/roadmap-strategique/hero.avif",
  },
  {
    slug: "restructuration-commerciale",
    icon: RefreshCw,
    title: "Vos ventes ne décollent plus.",
    description: "Les RDV n'aboutissent pas, les cycles s'allongent, les commerciaux ne savent plus quoi dire. On remet la machine en ordre de marche.",
    cta: "Restructuration commerciale B2B",
    image: null,
  },
  {
    slug: "changement-de-cap",
    icon: Compass,
    title: "Vous changez de cap.",
    description: "Pivot, nouvelle offre, nouveau marché. Un changement sans réalignement du message et des canaux, c'est deux fois plus de travail pour deux fois moins de résultats.",
    cta: "Repositionnement stratégique et nouveau marché",
    image: null,
  },
  {
    slug: "acceleration-croissance",
    icon: TrendingUp,
    title: "Vous êtes prêt à scaler.",
    description: "Vous avez validé votre marché, vos premiers clients sont là. Maintenant il faut accélérer. On industrialise ce qui fonctionne et on élimine ce qui ralentit.",
    cta: "Accélérer sa croissance B2B",
    image: null,
  },
  {
    slug: "post-rachat",
    icon: Layers,
    title: "Vous venez de racheter ou fusionner.",
    description: "Un rachat crée de la valeur sur le papier. Dans la réalité, sans réalignement marketing et commercial, les équipes partent dans tous les sens.",
    cta: "Marketing et commercial post-rachat",
    image: null,
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  }),
};

export function UseCasesSection() {
  return (
    <section className="bg-card py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12">
      <div className="max-w-[82.5rem] mx-auto">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="text-[11px] font-light tracking-[0.12em] text-secondary uppercase">Vos enjeux</span>
            </div>
            <h2 className="font-heading font-normal text-[clamp(28px,4vw,48px)] leading-[1.05] tracking-[-0.035em] text-primary max-w-2xl">
              Un partenaire qui intervient aux moments les plus stratégiques de votre histoire.
            </h2>
          </div>
          <Link
            href="/enjeux"
            className="group inline-flex items-center gap-2 text-[13px] font-medium text-secondary hover:text-primary transition-colors duration-200 shrink-0"
          >
            Voir tous les cas
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>

        {/* Cards grid — featured first + 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {USE_CASES.map((uc, i) => {
            const Icon = uc.icon;
            const isFeatured = i === 0;
            return (
              <motion.div
                key={uc.slug}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeInUp}
                className={isFeatured ? "lg:col-span-1 lg:row-span-2 md:col-span-2 lg:md:col-span-1" : ""}
              >
                <Link
                  href={`/enjeux/${uc.slug}`}
                  className={`group flex flex-col gap-5 p-7 sm:p-8 bg-white border border-black/[0.06] hover:border-black/[0.14] hover:shadow-lg transition-all duration-300 h-full ${
                    isFeatured ? "min-h-[280px] lg:min-h-full" : ""
                  }`}
                >
                  {/* Image (featured only) */}
                  {uc.image && (
                    <div className="relative w-full overflow-hidden -mx-7 sm:-mx-8 -mt-7 sm:-mt-8 mb-1 w-[calc(100%+3.5rem)] sm:w-[calc(100%+4rem)]" style={{ height: "296px" }}>
                      <Image
                        src={uc.image}
                        alt={uc.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/80" />
                    </div>
                  )}

                  {/* Icon */}
                  <div className="w-10 h-10 flex items-center justify-center bg-card border border-black/[0.06] group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                    <Icon size={18} className="text-primary group-hover:text-black transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-3 flex-1">
                    <h3 className={`font-heading font-medium text-primary leading-snug tracking-[-0.02em] ${
                      isFeatured ? "text-[22px] sm:text-[24px]" : "text-[17px] sm:text-[18px]"
                    }`}>
                      {uc.title}
                    </h3>
                    <p className={`text-secondary leading-relaxed ${isFeatured ? "text-[15px]" : "text-[13px] sm:text-[14px]"}`}>
                      {uc.description}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="mt-auto pt-4 border-t border-black/[0.06]">
                    <span className="inline-flex items-center gap-2 text-[13px] font-medium text-secondary group-hover:text-primary transition-colors duration-200">
                      {uc.cta}
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default UseCasesSection;
