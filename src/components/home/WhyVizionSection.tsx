"use client";

import { motion } from "framer-motion";
import { UserCheck, Users, GraduationCap, Cpu, TrendingUp, Puzzle } from "lucide-react";

const MILESTONES = [
  {
    number: "01",
    title: "Un directeur marketing dédié",
    description: "Votre interlocuteur unique est un expert stratégique, capable de dialoguer avec vos équipes dirigeantes et d'apporter une valeur ajoutée à chaque échange.",
    icon: UserCheck,
  },
  {
    number: "02",
    title: "Structure hybride et agile",
    description: "Une équipe interne qui assure la continuité, des experts freelances mobilisés selon vos besoins. Le meilleur des deux modèles.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
  },
  {
    number: "03",
    title: "La pédagogie comme engagement",
    description: "Nous travaillons avec vos équipes, pas à leur place. Transfert de compétences et montée en autonomie font partie de chaque mission.",
    icon: GraduationCap,
  },
  {
    number: "04",
    title: "L'IA comme levier",
    description: "Nous intégrons l'intelligence artificielle là où elle apporte une valeur ajoutée mesurable — lead magnets, tri de prospection, personnalisation à l'échelle.",
    icon: Cpu,
  },
  {
    number: "05",
    title: "Le marketing au service de la vente",
    description: "Notre intervention couvre l'ensemble du cycle commercial, y compris les phases de négociation et de closing.",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
  },
  {
    number: "06",
    title: "Stratégie + Exécution",
    description: "Lucas conçoit le positionnement et le discours, Hugo rend tout cela opérationnel. La vision et les mains, réunies dans une même équipe.",
    icon: Puzzle,
  },
];

export function WhyVizionSection() {
  return (
    <section
      className="relative w-full py-12 sm:py-16 md:py-20 lg:py-32 overflow-hidden grain-overlay"
    >
      {/* Background base — full-bleed sur toute la largeur de la section */}
      <div
        className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[100vw] max-w-none bg-[#f8f8f6]"
        style={{ minWidth: "100vw" }}
        aria-hidden
      />

      {/* Subtle gradient blobs — full-bleed, même que section Manifeste */}
      <div
        className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[100vw] max-w-none pointer-events-none overflow-hidden"
        style={{ minWidth: "100vw" }}
        aria-hidden
      >
        <div
          className="absolute w-[70%] h-[60%] top-[-10%] left-[-15%]"
          style={{
            background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.12) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute w-[50%] h-[50%] top-[20%] right-[-10%]"
          style={{
            background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.08) 0%, transparent 55%)",
          }}
        />
        <div
          className="absolute w-[60%] h-[50%] bottom-[-15%] left-[20%]"
          style={{
            background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.06) 0%, transparent 55%)",
          }}
        />
      </div>

      <div className="max-w-[82.5rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8">

          {/* Left Column - Sticky pour rester visible au scroll (compatible Lenis) */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24 lg:pt-0 pt-0 lg:pb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col"
              >
                {/* Overline */}
                <div className="flex items-center gap-2.5 mb-3 sm:mb-5">
                  <div className="w-2 h-2 rounded-full bg-[#D4FD00]" />
                  <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-[#6b6b6b] uppercase">
                    Pourquoi nous choisir
                  </span>
                </div>

                <h2 className="font-heading font-medium text-[26px] sm:text-[36px] md:text-[42px] lg:text-[48px] leading-[1.08] tracking-[-0.02em] text-[#1a1a1a] mb-4 sm:mb-6">
                  Ce qui fait la différence, à chaque étape
                </h2>

                <p className="text-[#6b6b6b] text-[14px] sm:text-[15px] md:text-[16px] font-[var(--font-body)] leading-relaxed mb-6 sm:mb-8">
                  De la stratégie à l'exécution, voici comment Vizion transforme votre marketing en levier de croissance.
                </p>

                {/* Stats row */}
                <div className="flex gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
                  <div>
                    <span className="block font-heading font-semibold text-[28px] sm:text-[32px] text-[#1a1a1a] leading-none">
                      +70
                    </span>
                    <span className="text-[11px] sm:text-[12px] text-[#6b6b6b] font-medium">
                      clients accompagnés
                    </span>
                  </div>
                  <div className="w-px bg-black/10" />
                  <div>
                    <span className="block font-heading font-semibold text-[28px] sm:text-[32px] text-[#1a1a1a] leading-none">
                      4 ans
                    </span>
                    <span className="text-[11px] sm:text-[12px] text-[#6b6b6b] font-medium">
                      d'expertise B2B
                    </span>
                  </div>
                </div>

                {/* Photo sous les chiffres */}
                <div className="rounded-xl overflow-hidden border border-black/[0.06] shadow-sm aspect-[4/3] max-h-[260px] sm:max-h-[320px] md:max-h-[380px]">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                    alt="Équipe Vizion — Agence marketing Toulouse"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Vertical Separator - Desktop only */}
          <div className="hidden lg:flex lg:col-span-1 justify-center">
            <div className="w-px bg-gradient-to-b from-transparent via-black/10 to-transparent h-full" />
          </div>

          {/* Right Column - Timeline */}
          <div className="lg:col-span-6 relative">
            {/* Timeline line */}
            <div className="absolute left-5 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#D4FD00] via-[#e5e5e5] to-[#e5e5e5]" />

            <div className="space-y-6 sm:space-y-8 md:space-y-10">
              {MILESTONES.map((milestone, index) => {
                const Icon = milestone.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="relative pl-12 sm:pl-14 md:pl-16 group"
                  >
                    {/* Timeline dot with icon */}
                    <div className="absolute left-0 top-0 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl bg-white border border-black/[0.08] shadow-sm flex items-center justify-center group-hover:border-[#D4FD00]/50 group-hover:shadow-md transition-all duration-300">
                      <Icon size={18} className="text-[#1a1a1a] group-hover:text-[#0c0c0a] transition-colors" />
                    </div>

                    {/* Content card */}
                    <div className="bg-white/60 backdrop-blur-sm border border-black/[0.04] rounded-xl p-4 sm:p-5 md:p-6 hover:bg-white hover:border-black/[0.08] hover:shadow-sm transition-all duration-300">
                      {/* Number badge */}
                      <div className="inline-flex items-center gap-2 mb-3">
                        <span className="text-[#D4FD00] text-[12px] sm:text-[13px] font-bold tracking-wider bg-[#0c0c0a] px-2.5 py-1 rounded">
                          {milestone.number}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-heading font-semibold text-[18px] sm:text-[20px] text-[#1a1a1a] mb-2 leading-tight">
                        {milestone.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[#6b6b6b] text-[13px] sm:text-[14px] font-[var(--font-body)] leading-relaxed">
                        {milestone.description}
                      </p>

                      {/* Optional Image */}
                      {milestone.image && (
                        <div className="mt-4 rounded-lg overflow-hidden">
                          <img
                            src={milestone.image}
                            alt={milestone.title}
                            className="w-full h-auto max-h-[200px] object-cover hover:scale-[1.02] transition-transform duration-500"
                          />
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyVizionSection;
