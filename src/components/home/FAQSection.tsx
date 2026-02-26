"use client";

import { FAQAccordion } from "@/components/sections";
import { homeContent, type FAQContent } from "@/content/home";

interface FAQSectionProps {
  content?: FAQContent;
}

export function FAQSection({ content }: FAQSectionProps = {}) {
  const faq = content ?? homeContent.faq;

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
