"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Link from "next/link";
import type { FAQ } from "../../../sanity/lib/types";

interface ServiceFAQProps {
  title?: string;
  faqs: FAQ[];
}

export function ServiceFAQ({ title, faqs }: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState(0);

  if (!faqs || faqs.length === 0) return null;

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? -1 : i);
  };

  return (
    <section className="bg-card py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12">
      <div className="max-w-[82.5rem] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16">
        {/* Left column */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-muted uppercase">
                Questions fréquentes
              </span>
            </div>
            {title && (
              <h2 className="font-heading font-normal text-[28px] sm:text-[36px] md:text-[44px] leading-[1.05] tracking-[-0.02em] text-primary">
                {title}
              </h2>
            )}
            <p className="text-base text-secondary leading-relaxed mt-4">
              Vous avez d&apos;autres questions ? Notre équipe est là pour vous
              répondre.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent mt-6 hover:underline"
            >
              Nous contacter →
            </Link>
          </motion.div>
        </div>

        {/* Right column — accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-black/[0.06]">
              <button
                onClick={() => toggle(i)}
                className="w-full py-5 flex justify-between items-center text-left group cursor-pointer"
              >
                <span
                  className={`text-base font-medium transition-colors duration-200 ${
                    openIndex === i
                      ? "text-accent"
                      : "text-primary group-hover:text-accent"
                  }`}
                >
                  {faq.question}
                </span>
                {openIndex === i ? (
                  <Minus className="w-5 h-5 text-secondary shrink-0 ml-4" />
                ) : (
                  <Plus className="w-5 h-5 text-secondary shrink-0 ml-4" />
                )}
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm text-secondary leading-relaxed pb-5">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          {/* Mobile CTA duplicate */}
          <div className="lg:hidden mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
            >
              Nous contacter →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
