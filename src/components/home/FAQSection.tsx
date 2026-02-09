"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Plus, Minus, ArrowRight } from "lucide-react";

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
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12 relative overflow-hidden grain-light"
      style={{ background: 'linear-gradient(135deg, #fafaf8 0%, #f0f0eb 100%)' }}
    >
      {/* Ambient glow */}
      <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-[#D4FD00] opacity-[0.04] rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-[82.5rem] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left Column - Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            {/* Overline */}
            <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
              <div className="w-2 h-2 rounded-full bg-[#D4FD00]" />
              <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-[#6b6b6b] uppercase">
                Questions fréquentes
              </span>
            </div>

            <h2 className="font-heading font-medium text-[28px] sm:text-[36px] md:text-[40px] leading-[1.08] tracking-[-0.02em] text-[#1a1a1a] mb-4 sm:mb-5">
              Vous avez des questions ?
            </h2>

            <p className="text-[#6b6b6b] text-[15px] sm:text-base font-[var(--font-body)] leading-relaxed mb-6 sm:mb-8">
              Voici les réponses aux questions que nos prospects nous posent le plus souvent.
            </p>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-[14px] font-[var(--font-body)] font-semibold text-[#1a1a1a] hover:text-[#0a0a0a] transition-colors"
            >
              Une autre question ? Contactez-nous
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right Column - Accordion */}
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
                    className={`bg-white border rounded-xl overflow-hidden transition-all duration-300 ${
                      openIndex === index
                        ? "border-black/[0.12] shadow-sm"
                        : "border-black/[0.06] hover:border-black/[0.1]"
                    }`}
                  >
                    {/* Question */}
                    <button
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
                    >
                      <span className="font-heading font-semibold text-[15px] sm:text-[16px] text-[#1a1a1a] leading-snug pr-4">
                        {faq.question}
                      </span>
                      <div
                        className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                          openIndex === index
                            ? "bg-[#D4FD00] text-[#1a1a1a]"
                            : "bg-black/5 text-[#6b6b6b]"
                        }`}
                      >
                        {openIndex === index ? (
                          <Minus size={16} strokeWidth={2.5} />
                        ) : (
                          <Plus size={16} strokeWidth={2.5} />
                        )}
                      </div>
                    </button>

                    {/* Answer */}
                    <AnimatePresence initial={false}>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                            <div className="h-px bg-black/[0.06] mb-4 sm:mb-5" />
                            <p className="text-[#6b6b6b] text-[14px] sm:text-[15px] font-[var(--font-body)] leading-relaxed">
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
