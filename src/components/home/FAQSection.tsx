"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Plus, ArrowRight } from "lucide-react";

const FAQS = [
  {
    question: "Quel est votre modèle de tarification ?",
    answer: "Nous fonctionnons en accompagnement mensuel, avec des budgets allant de 4 500 € à 15 000 € selon l'envergure du projet. Ce modèle nous permet de travailler dans la durée et d'obtenir des résultats mesurables. Nous ne vendons pas de prestations au jour ou à l'heure.",
  },
  {
    question: "Quelle est la durée d'engagement minimum ?",
    answer: "Nous recommandons un engagement de 6 mois minimum pour voir des résultats tangibles. Le marketing B2B prend du temps : construire un positionnement, déployer une stratégie, mesurer les premiers retours. Les missions plus courtes sont possibles pour des projets ponctuels (lancement, audit).",
  },
  {
    question: "Comment se déroule une collaboration avec Vizion ?",
    answer: "Vous avez un directeur marketing dédié comme interlocuteur unique. Il pilote l'ensemble des travaux, coordonne les experts mobilisés et assure le lien avec vos équipes. Points hebdomadaires, reporting mensuel, accès direct par email et téléphone.",
  },
  {
    question: "Sous quel délai peut-on attendre des résultats ?",
    answer: "Les premiers livrables arrivent dès les premières semaines (positionnement, supports). Les premiers leads qualifiés entre 2 et 4 mois selon votre cycle de vente. L'impact sur le pipeline commercial se mesure généralement entre 4 et 6 mois.",
  },
  {
    question: "Qu'est-ce qui différencie Vizion des autres agences ?",
    answer: "Nous sommes des stratèges, pas des exécutants. Votre interlocuteur est un directeur marketing, pas un chef de projet. Nous intervenons jusqu'au closing, pas uniquement sur la notoriété. Et nous intégrons l'IA là où elle apporte une vraie valeur ajoutée.",
  },
  {
    question: "Travaillez-vous avec des startups early-stage ?",
    answer: "Nous accompagnons principalement des PME et ETI établies (10 à 250 collaborateurs) avec un produit ou service déjà validé par le marché. Les startups en phase d'amorçage ne correspondent généralement pas à notre modèle d'accompagnement.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12 relative overflow-hidden grain-light"
      style={{ background: "#f8f8f6" }}
    >
      <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-[#D4FD00] opacity-[0.04] rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-[82.5rem] mx-auto relative z-10">
        {/* Bento Layout: left header/image + right accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5">

          {/* Left Column - Header + Image card */}
          <div className="lg:col-span-4 flex flex-col gap-4 sm:gap-5">
            {/* Header card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-black/[0.06] p-6 sm:p-8"
            >
              <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 500, damping: 20, delay: 0.05 }}
                  className="w-2 h-2 rounded-full bg-[#D4FD00]"
                />
                <motion.span
                  initial={{ opacity: 0, x: -6 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                  className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] uppercase text-[#6b6b6b]"
                >
                  Questions fréquentes
                </motion.span>
              </div>

              <h2 className="font-heading font-medium text-[28px] sm:text-[36px] md:text-[40px] leading-[1.08] tracking-[-0.02em] mb-4 sm:mb-5 text-[#1a1a1a]">
                Vous avez des questions ?
              </h2>

              <p className="text-[15px] sm:text-base font-[var(--font-body)] leading-relaxed mb-6 text-[#6b6b6b]">
                Voici les réponses aux questions que nos prospects nous posent le plus souvent.
              </p>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 text-[14px] font-[var(--font-body)] font-semibold text-[#1a1a1a] hover:text-[#0a0a0a] transition-colors"
              >
                Une autre question ? Contactez-nous
                <motion.span
                  className="inline-flex"
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <ArrowRight size={16} />
                </motion.span>
              </Link>
            </motion.div>

            {/* Image card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative overflow-hidden border border-black/[0.06] flex-1 min-h-[220px] hidden lg:block"
            >
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="Équipe Vizion en discussion"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <span className="inline-block px-3 py-1.5 bg-[#D4FD00] text-[11px] font-bold tracking-wide text-[#1a1a1a] mb-2">
                  +70 entreprises
                </span>
                <p className="text-white text-[14px] font-[var(--font-body)] leading-snug">
                  nous font confiance depuis 2021
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column - FAQ Accordion */}
          <div className="lg:col-span-8">
            <div className="space-y-3 sm:space-y-4">
              {FAQS.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <div
                    className={`relative overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] border ${
                      openIndex === index
                        ? "bg-white border-[#D4FD00]/30 shadow-[0_4px_16px_rgba(212,253,0,0.1)]"
                        : "bg-white border-black/[0.06] hover:border-black/[0.15] hover:shadow-sm"
                    }`}
                  >
                    {/* Left accent bar */}
                    <motion.div
                      className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#D4FD00]"
                      initial={false}
                      animate={{ scaleY: openIndex === index ? 1 : 0 }}
                      transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                      style={{ transformOrigin: "top" }}
                    />

                    {/* Question */}
                    <button
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
                    >
                      <span className="font-heading font-semibold text-[15px] sm:text-[16px] leading-snug pr-4 text-[#1a1a1a]">
                        {faq.question}
                      </span>
                      <motion.div
                        animate={{ rotate: openIndex === index ? 45 : 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className={`shrink-0 w-8 h-8 flex items-center justify-center transition-colors duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${
                          openIndex === index
                            ? "bg-[#D4FD00] text-[#1a1a1a] shadow-[0_0_16px_rgba(212,253,0,0.5)]"
                            : "bg-black/5 text-[#6b6b6b] hover:bg-black/10 hover:text-[#1a1a1a]"
                        }`}
                      >
                        <Plus size={16} strokeWidth={2.5} />
                      </motion.div>
                    </button>

                    {/* Answer */}
                    <AnimatePresence initial={false}>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                        >
                          <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                            <motion.div
                              initial={{ scaleX: 0 }}
                              animate={{ scaleX: 1 }}
                              transition={{ duration: 0.4, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
                              style={{ transformOrigin: "left" }}
                              className="h-px mb-4 sm:mb-5 bg-black/[0.06]"
                            />
                            <p className="text-[14px] sm:text-[15px] font-[var(--font-body)] leading-relaxed text-[#6b6b6b]">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
