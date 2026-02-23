"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useMDXComponent } from "next-contentlayer2/hooks";
import type { Service, CaseStudy } from "contentlayer/generated";
import * as LucideIcons from "lucide-react";
import { ArrowUpRightIcon } from "@/components/icons";

// Dynamic icon component
function DynamicIcon({ name, ...props }: { name: string; size?: number; className?: string }) {
  const icons = LucideIcons as unknown as Record<string, React.ComponentType<{ size?: number; className?: string }>>;
  const IconComponent = icons[name];
  if (!IconComponent) return null;
  return <IconComponent {...props} />;
}

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

interface ServiceContentProps {
  service: Service;
  relatedCases: CaseStudy[];
}

export function ServiceContent({ service, relatedCases }: ServiceContentProps) {
  const MDXContent = useMDXComponent(service.body.code);

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#fafaf8] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative z-10 max-w-[82.5rem] mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            {/* Badge */}
            {service.heroBadge && (
              <motion.div variants={fadeInUp} className="mb-6">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#D4FD00] text-black text-[11px] font-bold tracking-wide">
                  <DynamicIcon name={service.icon} size={14} />
                  {service.heroBadge}
                </span>
              </motion.div>
            )}

            {/* Title */}
            <motion.h1
              variants={fadeInUp}
              className="text-[2.5rem] sm:text-[3rem] lg:text-[3.5rem] font-bold text-primary leading-[1.1] tracking-tight mb-6"
            >
              {service.heroTitle}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-black/60 leading-relaxed mb-10 max-w-2xl"
            >
              {service.heroSubtitle}
            </motion.p>

            {/* Metrics */}
            {service.metrics && service.metrics.length > 0 && (
              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap gap-8 mb-10"
              >
                {service.metrics.map((metric: { value: string; label: string }, index: number) => (
                  <div key={index} className="flex flex-col">
                    <span className="text-3xl sm:text-4xl font-bold text-primary">
                      {metric.value}
                    </span>
                    <span className="text-sm text-black/50">{metric.label}</span>
                  </div>
                ))}
              </motion.div>
            )}

            {/* CTA */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn btn-dark">
                Parlons de votre projet
                <ArrowUpRightIcon size={16} />
              </Link>
              <Link href="/#services" className="btn btn-outline">
                Voir tous les services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pain Points Section */}
      {service.painPoints && service.painPoints.length > 0 && (
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-[82.5rem] mx-auto px-4 sm:px-6 md:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <span className="text-[10px] font-bold tracking-[0.2em] text-black/40 mb-4 block">
                  VOUS RECONNAISSEZ-VOUS ?
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4">
                  {service.painPointsTitle || "Les problèmes que nous résolvons"}
                </h2>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {service.painPoints.map((pain: { icon: string; title: string; description: string }, index: number) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="p-6 bg-[#fafaf8] border border-black/5 hover:border-black/10 transition-colors"
                  >
                    <div className="w-10 h-10 flex items-center justify-center bg-red-50 text-red-500 mb-4">
                      <DynamicIcon name={pain.icon || "AlertCircle"} size={20} />
                    </div>
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      {pain.title}
                    </h3>
                    <p className="text-sm text-black/60 leading-relaxed">
                      {pain.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Features Section */}
      {service.features && service.features.length > 0 && (
        <section className="py-20 lg:py-28 bg-[#1a1a1a] dark-section">
          <div className="max-w-[82.5rem] mx-auto px-4 sm:px-6 md:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#D4FD00] mb-4 block">
                  CE QUE NOUS LIVRONS
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                  {service.featuresTitle || "Notre accompagnement"}
                </h2>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {service.features.map((feature: { icon: string; title: string; description: string }, index: number) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="p-6 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <div className="w-10 h-10 flex items-center justify-center bg-[#D4FD00] text-black mb-4">
                      <DynamicIcon name={feature.icon || "CheckCircle"} size={20} />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-white/60 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Process Section */}
      {service.processSteps && service.processSteps.length > 0 && (
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-[82.5rem] mx-auto px-4 sm:px-6 md:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <span className="text-[10px] font-bold tracking-[0.2em] text-black/40 mb-4 block">
                  NOTRE MÉTHODOLOGIE
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4">
                  {service.processTitle || "Comment nous travaillons"}
                </h2>
                {service.processSubtitle && (
                  <p className="text-lg text-black/60 max-w-2xl mx-auto">
                    {service.processSubtitle}
                  </p>
                )}
              </motion.div>

              <motion.div variants={staggerContainer} className="space-y-6">
                {service.processSteps.map((step: { step: string; title: string; description: string; duration?: string; deliverables?: string[] }, index: number) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex gap-6 p-6 bg-[#fafaf8] border border-black/5"
                  >
                    <div className="shrink-0 w-12 h-12 flex items-center justify-center bg-[#D4FD00] text-black font-bold text-lg">
                      {step.step || String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-primary">
                          {step.title}
                        </h3>
                        {step.duration && (
                          <span className="text-[10px] px-2 py-0.5 bg-black/5 text-black/50 font-medium">
                            {step.duration}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-black/60 leading-relaxed mb-3">
                        {step.description}
                      </p>
                      {step.deliverables && step.deliverables.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {step.deliverables.map((deliverable: string, i: number) => (
                            <span
                              key={i}
                              className="text-[10px] px-2 py-1 bg-[#D4FD00]/20 text-black/70 font-medium"
                            >
                              {deliverable}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}

      {/* MDX Content (if any) */}
      {service.body.raw.trim() && (
        <section className="py-20 lg:py-28 bg-[#fafaf8]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="prose prose-lg max-w-none">
              <MDXContent />
            </div>
          </div>
        </section>
      )}

      {/* Related Case Studies */}
      {relatedCases.length > 0 && (
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-[82.5rem] mx-auto px-4 sm:px-6 md:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <span className="text-[10px] font-bold tracking-[0.2em] text-black/40 mb-4 block">
                  CAS CLIENTS
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">
                  Ils nous ont fait confiance
                </h2>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                className="grid sm:grid-cols-2 gap-6"
              >
                {relatedCases.map((caseStudy) => (
                  <motion.div key={caseStudy.slug} variants={fadeInUp}>
                    <Link
                      href={caseStudy.url}
                      className="group block p-6 bg-[#fafaf8] border border-black/5 hover:border-black/10 transition-all"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-[10px] px-2 py-0.5 bg-[#D4FD00] text-black font-bold">
                          {caseStudy.sector}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-primary group-hover:text-black mb-2">
                        {caseStudy.company}
                      </h3>
                      <p className="text-sm text-black/60 mb-4 line-clamp-2">
                        {caseStudy.description}
                      </p>
                      <div className="flex flex-wrap gap-4">
                        {caseStudy.metrics?.slice(0, 2).map((metric: { value: string; label: string }, i: number) => (
                          <div key={i}>
                            <span className="text-lg font-bold text-primary">
                              {metric.value}
                            </span>
                            <span className="text-xs text-black/50 ml-1">
                              {metric.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={fadeInUp} className="text-center mt-10">
                <Link href="/cas-clients" className="btn btn-outline">
                  Voir tous les cas clients
                  <LucideIcons.ArrowRight size={16} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-20 lg:py-28 bg-[#fafaf8]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <span className="text-[10px] font-bold tracking-[0.2em] text-black/40 mb-4 block">
                  FAQ
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">
                  {service.faqTitle || "Questions fréquentes"}
                </h2>
              </motion.div>

              <motion.div variants={staggerContainer} className="space-y-4">
                {service.faqs.map((faq: { question: string; answer: string }, index: number) => (
                  <motion.details
                    key={index}
                    variants={fadeInUp}
                    className="group bg-white border border-black/5 p-6"
                  >
                    <summary className="flex items-center justify-between cursor-pointer list-none">
                      <h3 className="text-base font-semibold text-primary pr-4">
                        {faq.question}
                      </h3>
                      <LucideIcons.ChevronDown
                        size={20}
                        className="shrink-0 text-black/40 transition-transform group-open:rotate-180"
                      />
                    </summary>
                    <p className="mt-4 text-sm text-black/60 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.details>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-[#1a1a1a] dark-section">
        <div className="max-w-[82.5rem] mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4"
            >
              {service.ctaTitle || "Prêt à passer à l'action ?"}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-white/60 mb-10 max-w-2xl mx-auto"
            >
              {service.ctaDescription || "Discutons de votre projet et voyons comment nous pouvons vous aider."}
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link
                href={service.ctaButtonLink || "/contact"}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4FD00] text-black font-semibold hover:bg-[#c4ed00] transition-colors"
              >
                {service.ctaButtonText || "Prendre rendez-vous"}
                <ArrowUpRightIcon size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
