"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { ServiceContent } from "@/content/services";
import { SERVICE_MENU_CATEGORIES } from "@/lib/constants";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

interface ServicesPageContentProps {
  piliers: ServiceContent[];
  services: ServiceContent[];
}

export function ServicesPageContent({
  piliers,
  services,
}: ServicesPageContentProps) {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section
        className="dark-section grain-overlay py-20 sm:py-24 md:py-32 lg:py-40 px-4 sm:px-6 md:px-12"
        style={{ background: "var(--bg-dark)" }}
      >
        <div className="max-w-[82.5rem] mx-auto">
          <motion.div {...fadeIn} className="max-w-3xl">
            <p className="text-[11px] font-light tracking-[0.12em] uppercase text-muted mb-6 flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 bg-accent" />
              Nos services
            </p>
            <h1 className="text-primary font-normal leading-[0.92] tracking-[-0.04em] text-[clamp(48px,8vw,72px)] mb-6">
              Marketing B2B sur mesure
            </h1>
            <p className="text-secondary text-lg sm:text-xl leading-relaxed max-w-2xl">
              De la strategie au closing, Vizion structure, active et accelere
              votre croissance. Decouvrez nos piliers d&apos;intervention et
              services specialises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Piliers */}
      <section className="bg-card py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12">
        <div className="max-w-[82.5rem] mx-auto">
          <motion.div {...fadeIn} className="mb-12">
            <p className="text-[11px] font-light tracking-[0.12em] uppercase text-muted mb-4 flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 bg-accent" />
              Piliers
            </p>
            <h2 className="text-primary font-normal leading-[1.05] tracking-[-0.035em] text-[clamp(32px,5vw,52px)]">
              5 piliers pour structurer votre croissance
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {piliers.map((pilier, i) => {
              const category = SERVICE_MENU_CATEGORIES.find(
                (c) => c.href === `/services/${pilier.slug}`
              );
              const childCount = category?.items.length || 0;

              return (
                <motion.div
                  key={pilier.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.08,
                    ease: [0.19, 1, 0.22, 1],
                  }}
                >
                  <Link
                    href={`/services/${pilier.slug}`}
                    className="group block bg-white border border-black/[0.06] p-8 h-full hover:border-black/[0.12] hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-primary font-normal leading-[1.15] tracking-[-0.02em] text-[clamp(20px,3vw,28px)]">
                        {pilier.category}
                      </h3>
                      <ArrowRight className="w-5 h-5 text-muted group-hover:text-accent group-hover:translate-x-1 transition-all duration-300 shrink-0 mt-1" />
                    </div>
                    <p className="text-secondary text-sm leading-relaxed mb-6">
                      {pilier.heroSubtitle}
                    </p>
                    {childCount > 0 && (
                      <p className="text-muted text-xs uppercase tracking-wider">
                        {childCount} service{childCount > 1 ? "s" : ""}
                      </p>
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tous les services */}
      <section className="bg-white py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12">
        <div className="max-w-[82.5rem] mx-auto">
          <motion.div {...fadeIn} className="mb-12">
            <p className="text-[11px] font-light tracking-[0.12em] uppercase text-muted mb-4 flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 bg-accent" />
              Catalogue
            </p>
            <h2 className="text-primary font-normal leading-[1.05] tracking-[-0.035em] text-[clamp(32px,5vw,52px)]">
              Tous nos services
            </h2>
          </motion.div>

          {SERVICE_MENU_CATEGORIES.map((category) => (
            <div key={category.title} className="mb-12 last:mb-0">
              <h3 className="text-primary font-medium text-lg mb-4 flex items-center gap-2">
                {category.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.items.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href || "#"}
                    className="group block bg-card border border-black/[0.06] p-6 hover:border-black/[0.12] hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-primary font-normal text-base">
                        {item.label}
                      </h4>
                      <ArrowRight className="w-4 h-4 text-muted group-hover:text-accent group-hover:translate-x-1 transition-all duration-300 shrink-0 mt-0.5" />
                    </div>
                    <p className="text-secondary text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="dark-section grain-overlay py-20 sm:py-24 md:py-32 lg:py-40 px-4 sm:px-6 md:px-12"
        style={{ background: "var(--bg-dark)" }}
      >
        <div className="max-w-[82.5rem] mx-auto text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-primary font-normal leading-[1.05] tracking-[-0.035em] text-[clamp(32px,5vw,52px)] mb-6">
              Parlons de votre projet
            </h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto mb-10">
              Chaque entreprise a ses enjeux. Echangeons pour identifier les
              leviers qui accelereront votre croissance.
            </p>
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center gap-2"
            >
              Prendre rendez-vous
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
