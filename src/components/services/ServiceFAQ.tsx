"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FAQLink {
  text: string;
  href: string;
}

interface FAQ {
  question: string;
  answer: string;
  answerLinks?: FAQLink[];
}

interface ServiceFAQProps {
  title?: string;
  faqs: FAQ[];
}

/** Rend le texte de la reponse en remplacant les sous-chaines par des liens */
function renderAnswer(answer: string, links?: FAQLink[]) {
  if (!links || links.length === 0) return answer;

  const parts: (string | { text: string; href: string })[] = [];
  let remaining = answer;

  // Trie les liens par position d'apparition dans le texte
  const sorted = [...links].sort(
    (a, b) => remaining.indexOf(a.text) - remaining.indexOf(b.text),
  );

  for (const link of sorted) {
    const idx = remaining.indexOf(link.text);
    if (idx === -1) continue;
    if (idx > 0) parts.push(remaining.slice(0, idx));
    parts.push({ text: link.text, href: link.href });
    remaining = remaining.slice(idx + link.text.length);
  }
  if (remaining) parts.push(remaining);

  return (
    <>
      {parts.map((part, i) =>
        typeof part === "string" ? (
          <span key={i}>{part}</span>
        ) : (
          <Link
            key={i}
            href={part.href}
            className="underline decoration-accent decoration-1 underline-offset-2 hover:text-primary transition-colors"
          >
            {part.text}
          </Link>
        ),
      )}
    </>
  );
}

export function ServiceFAQ({ title, faqs }: ServiceFAQProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState(0);

  // GSAP entrance animations
  useGSAP(
    () => {
      // Left column
      gsap.from("[data-faq='left']", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Accordion column
      gsap.from("[data-faq='accordion']", {
        opacity: 0,
        y: 25,
        duration: 0.8,
        delay: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    },
    { scope: sectionRef },
  );

  if (!faqs || faqs.length === 0) return null;

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? -1 : i);
  };

  return (
    <section
      ref={sectionRef}
      className="bg-card py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12"
    >
      <div className="max-w-[82.5rem] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16">
        {/* Left column — sticky on desktop */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <div data-faq="left">
            <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
              <div className="w-2 h-2 bg-accent" />
              <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-muted uppercase">
                Questions fréquentes
              </span>
            </div>
            {title && (
              <h2 className="font-heading font-normal text-[28px] min-[400px]:text-[32px] sm:text-[40px] md:text-[44px] leading-[1.05] tracking-[-0.02em] text-primary">
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
          </div>
        </div>

        {/* Right column — accordion */}
        <div data-faq="accordion">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`border-b border-black/[0.06] transition-all duration-300 ${
                  isOpen
                    ? "bg-white px-5 -mx-5 shadow-sm border-b-transparent"
                    : ""
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full py-5 flex justify-between items-center text-left group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[14px] font-light text-muted/50 tabular-nums shrink-0 w-6">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`text-base font-medium transition-all duration-200 ${
                        isOpen
                          ? "text-primary underline decoration-accent decoration-2 underline-offset-4"
                          : "text-primary group-hover:underline group-hover:decoration-accent group-hover:decoration-2 group-hover:underline-offset-4"
                      }`}
                    >
                      {faq.question}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 ml-4"
                  >
                    <Plus className="w-5 h-5 text-secondary" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, y: -8 }}
                      animate={{ height: "auto", opacity: 1, y: 0 }}
                      exit={{ height: 0, opacity: 0, y: -8 }}
                      transition={{
                        duration: 0.35,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm text-secondary leading-relaxed pb-5 pl-9">
                        {renderAnswer(faq.answer, faq.answerLinks)}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          {/* Mobile CTA duplicate */}
          <div className="lg:hidden mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
            >
              Nous contacter →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
