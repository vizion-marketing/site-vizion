"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface LocalFAQProps {
  city: string;
  faq: FAQItem[];
}

function FAQAccordion({ item, index, isOpen, onToggle }: {
  item: FAQItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="border-b border-neutral-200 last:border-b-0"
    >
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-start justify-between text-left group"
        aria-expanded={isOpen}
      >
        <span
          className="font-bold text-lg text-black pr-8 group-hover:text-neutral-600 transition-colors"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 mt-1"
        >
          <ChevronDown size={20} className="text-neutral-400" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p
              className="pb-6 text-neutral-600 leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function LocalFAQ({ city, faq }: LocalFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faq || faq.length === 0) return null;

  // Replace [Ville] placeholders with actual city name
  const processedFaq = faq.map((item) => ({
    question: item.question.replace(/\[Ville\]/g, city),
    answer: item.answer.replace(/\[Ville\]/g, city),
  }));

  return (
    <section className="section-padding bg-[var(--bg-grey)]">
      <div className="container-base mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="w-12 h-12 mx-auto rounded-full bg-white border border-neutral-200 flex items-center justify-center mb-6">
            <HelpCircle size={24} className="text-neutral-600" />
          </div>
          <span className="surtitre text-neutral-500 mb-4 block">QUESTIONS FRÉQUENTES</span>
          <h2
            className="text-3xl md:text-4xl font-black uppercase tracking-tight leading-[1.1] text-black mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Vos questions sur Vizion à{" "}
            <span className="text-neutral-400">{city}</span>
          </h2>
          <p
            className="text-neutral-600 max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Tout ce que vous devez savoir sur notre accompagnement marketing
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto bg-white rounded-[var(--radius-lg)] p-8 shadow-sm">
          {processedFaq.map((item, idx) => (
            <FAQAccordion
              key={idx}
              item={item}
              index={idx}
              isOpen={openIndex === idx}
              onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// JSON-LD Schema for FAQ (to be included in the page)
export function generateFAQSchema(city: string, faq: FAQItem[]) {
  const processedFaq = faq.map((item) => ({
    question: item.question.replace(/\[Ville\]/g, city),
    answer: item.answer.replace(/\[Ville\]/g, city),
  }));

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: processedFaq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
