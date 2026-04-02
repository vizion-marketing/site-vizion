"use client";

import { FAQAccordion } from "@/components/sections";
import type { FAQContent } from "@/content/home";

interface FAQSectionProps {
  content?: FAQContent;
}

export function FAQSection({ content }: FAQSectionProps = {}) {
  return (
    <FAQAccordion
      surtitre={content!.surtitre}
      title={content!.h2}
      titleHighlight={content!.h2Highlight}
      description={content!.description}
      ctaText={content!.ctaText}
      ctaHref={content!.ctaButton.href}
      faqs={content!.questions}
    />
  );
}

export default FAQSection;
