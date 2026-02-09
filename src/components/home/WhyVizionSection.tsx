"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { UserCheck, Users, GraduationCap, Cpu, TrendingUp, Puzzle } from "lucide-react";

const MILESTONES = [
  {
    number: "01",
    title: "Un directeur marketing dédié",
    description: "Votre interlocuteur unique est un expert stratégique, capable de dialoguer avec vos équipes dirigeantes et d'apporter une valeur ajoutée à chaque échange.",
    icon: UserCheck,
    span: "normal" as const,
  },
  {
    number: "02",
    title: "Structure hybride et agile",
    description: "Une équipe interne qui assure la continuité, des experts freelances mobilisés selon vos besoins. Le meilleur des deux modèles.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    span: "tall" as const,
  },
  {
    number: "03",
    title: "La pédagogie comme engagement",
    description: "Nous travaillons avec vos équipes, pas à leur place. Transfert de compétences et montée en autonomie font partie de chaque mission.",
    icon: GraduationCap,
    span: "normal" as const,
  },
  {
    number: "04",
    title: "L'IA comme levier",
    description: "Nous intégrons l'intelligence artificielle là où elle apporte une valeur ajoutée mesurable — lead magnets, tri de prospection, personnalisation à l'échelle.",
    icon: Cpu,
    span: "normal" as const,
  },
  {
    number: "05",
    title: "Le marketing au service de la vente",
    description: "Notre intervention couvre l'ensemble du cycle commercial, y compris les phases de négociation et de closing.",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
    span: "wide" as const,
  },
  {
    number: "06",
    title: "Stratégie + Exécution",
    description: "Lucas conçoit le positionnement et le discours, Hugo rend tout cela opérationnel. La vision et les mains, réunies dans une même équipe.",
    icon: Puzzle,
    span: "normal" as const,
  },
];

export function WhyVizionSection() {
  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 lg:py-32 grain-overlay">
      {/* Background */}
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-14"
        >
          <div className="flex items-center gap-2.5 mb-3 sm:mb-5">
            <div className="w-2 h-2 rounded-full bg-[#D4FD00]" />
            <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-[#6b6b6b] uppercase">
              Pourquoi nous choisir
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-12">
            <h2 className="font-heading font-medium text-[26px] sm:text-[36px] md:text-[42px] lg:text-[48px] leading-[1.08] tracking-[-0.02em] text-[#1a1a1a] max-w-2xl">
              Ce qui fait la différence, à chaque étape
            </h2>

            <div className="flex gap-6 sm:gap-8">
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
                  d&apos;expertise B2B
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 auto-rows-[minmax(200px,auto)]">
          {MILESTONES.map((milestone, index) => {
            const Icon = milestone.icon;
            const isWide = milestone.span === "wide";
            const isTall = milestone.span === "tall";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.19, 1, 0.22, 1],
                }}
                className={`
                  group relative overflow-hidden
                  bg-white/80 backdrop-blur-sm border border-black/[0.06]
                  hover:border-[#D4FD00]/40 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(212,253,0,0.12)]
                  transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]
                  ${isWide ? "sm:col-span-2" : ""}
                  ${isTall ? "sm:row-span-2" : ""}
                `}
              >
                {/* Accent line top */}
                <div className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full bg-[#D4FD00] transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] z-10" />

                {/* Image background for cards with images */}
                {milestone.image && (
                  <div className={`relative overflow-hidden ${isTall ? "h-[55%]" : "h-[180px]"}`}>
                    <Image
                      src={milestone.image}
                      alt={milestone.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
                  </div>
                )}

                {/* Content */}
                <div className={`p-5 sm:p-6 md:p-7 ${milestone.image ? "" : "h-full flex flex-col"}`}>
                  {/* Number badge + Icon */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[#D4FD00] text-[12px] sm:text-[13px] font-bold tracking-wider bg-[#0c0c0a] px-2.5 py-1 rounded">
                      {milestone.number}
                    </span>
                    <motion.div
                      whileHover={{ rotate: 6, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-[#D4FD00]/10 group-hover:bg-[#D4FD00]/20 transition-colors duration-500"
                    >
                      <Icon size={18} className="text-[#D4FD00]" />
                    </motion.div>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-semibold text-[18px] sm:text-[20px] text-[#1a1a1a] mb-2 leading-tight">
                    {milestone.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#6b6b6b] text-[13px] sm:text-[14px] font-[var(--font-body)] leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyVizionSection;
