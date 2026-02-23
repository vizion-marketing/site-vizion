"use client";

import { FAQAccordion } from "@/components/sections";
import { homeContent } from "@/content/home";

export function FAQSection() {
  const faq = homeContent.faq;

  return (
    <FAQAccordion
      surtitre={faq.surtitre}
      title={faq.h2}
      titleHighlight={faq.h2Highlight}
      description={faq.description}
      ctaText={faq.ctaText}
      ctaHref={faq.ctaButton.href}
      faqs={faq.questions}
    />
  );
}

export default FAQSection;
