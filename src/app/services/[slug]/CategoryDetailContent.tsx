"use client";

import type { ServiceContent, RelatedService } from "@/content/services";
import { ServiceHeroV2, ServiceFAQ, ServiceCTA } from "@/components/services";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getServiceBySlug } from "@/content/services";

gsap.registerPlugin(ScrollTrigger);

interface CategoryDetailContentProps {
  service: ServiceContent;
}

/* ─── Icône dynamique via Lucide ─── */
function DynamicIcon({ name }: { name: string }) {
  // Utilise un petit set d'icônes inline pour éviter l'import dynamique
  const icons: Record<string, React.ReactNode> = {
    Compass: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>,
    Map: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>,
    UserCog: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="15" r="3"/><circle cx="9" cy="7" r="4"/><path d="M10 15H6a4 4 0 0 0-4 4v2"/><path d="m21.7 16.4-.9-.3"/><path d="m15.2 13.9-.9-.3"/><path d="m16.6 18.7.3-.9"/><path d="m19.1 12.2.3-.9"/><path d="m19.6 18.7-.4-.9"/><path d="m16.8 12.3-.4-.9"/><path d="m14.3 16.6.9-.3"/><path d="m20.7 13.8.9-.3"/></svg>,
  };
  return <span className="text-accent">{icons[name] || <ArrowRight size={24} />}</span>;
}

/* ─── Section "Qu'est-ce que..." ─── */
function CategoryIntro({ service }: { service: ServiceContent }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!ref.current) return;
    const els = ref.current.querySelectorAll("[data-animate]");
    gsap.set(els, { opacity: 0, y: 30 });
    gsap.to(els, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
    });
  }, { scope: ref });

  return (
    <section
      ref={ref}
      className="bg-card py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12"
    >
      <div className="max-w-[82.5rem] mx-auto">
        <div className="max-w-3xl">
          <span data-animate className="text-[11px] font-light tracking-[0.12em] uppercase text-muted mb-6 block">
            {service.constat.surtitre}
          </span>
          <h2 data-animate className="font-heading font-normal text-[28px] sm:text-[36px] md:text-[40px] leading-[1.05] tracking-[-0.035em] text-primary mb-8">
            {service.constat.title}
          </h2>
          {service.constat.paragraphs.map((p, i) => (
            <p key={i} data-animate className="text-secondary text-base sm:text-[17px] leading-relaxed mb-4 last:mb-0">
              {p}
            </p>
          ))}
        </div>

        {/* Statements */}
        {service.constat.statements && service.constat.statements.length > 0 && (
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {service.constat.statements.map((s, i) => (
              <div
                key={i}
                data-animate
                className="bg-white border border-black/[0.06] p-6 sm:p-8"
              >
                <div className="w-8 h-1 bg-accent mb-5" />
                <h3 className="font-heading font-medium text-lg text-primary mb-3">
                  {s.headline}
                </h3>
                <p className="text-secondary text-[15px] leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ─── Carte service individuelle ─── */
function ServiceCard({ rs, index }: { rs: RelatedService; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const linkedService = getServiceBySlug(rs.slug);

  useGSAP(() => {
    if (!ref.current) return;
    gsap.set(ref.current, { opacity: 0, y: 40 });
    gsap.to(ref.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      delay: index * 0.1,
      ease: "power2.out",
      scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
    });
  }, { scope: ref });

  return (
    <div ref={ref}>
      <Link
        href={rs.href}
        className="group block bg-white border border-black/[0.06] hover:border-black/[0.12] hover:shadow-lg transition-all duration-300"
      >
        <div className="p-6 sm:p-8 md:p-10">
          {/* Numéro + icône */}
          <div className="flex items-start justify-between mb-6">
            <span className="text-[11px] font-light tracking-[0.12em] uppercase text-muted">
              Service {String(index + 1).padStart(2, "0")}
            </span>
            <DynamicIcon name={rs.icon} />
          </div>

          {/* Titre */}
          <h3 className="font-heading font-normal text-[22px] sm:text-[26px] leading-[1.1] tracking-[-0.02em] text-primary mb-4 group-hover:text-accent transition-colors duration-300">
            {rs.title}
          </h3>

          {/* Description */}
          <p className="text-secondary text-[15px] leading-relaxed mb-6">
            {rs.description}
          </p>

          {/* Détails du service lié (si trouvé) */}
          {linkedService && linkedService.solutionItems.length > 0 && (
            <div className="border-t border-black/[0.06] pt-5 mt-2">
              <ul className="space-y-2">
                {linkedService.solutionItems.slice(0, 3).map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14px] text-secondary">
                    <span className="w-1.5 h-1.5 bg-accent mt-1.5 shrink-0" />
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA arrow */}
          <div className="flex items-center gap-2 text-accent text-sm font-medium mt-6">
            En savoir plus
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
          </div>
        </div>
      </Link>
    </div>
  );
}

/* ─── Section services de la catégorie ─── */
function CategoryServices({ service }: { service: ServiceContent }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!ref.current) return;
    const header = ref.current.querySelectorAll("[data-animate]");
    gsap.set(header, { opacity: 0, y: 20 });
    gsap.to(header, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.08,
      ease: "power2.out",
      scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
    });
  }, { scope: ref });

  const relatedServices = service.relatedServices || [];

  return (
    <section
      ref={ref}
      className="bg-white py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12"
    >
      <div className="max-w-[82.5rem] mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span data-animate className="text-[11px] font-light tracking-[0.12em] uppercase text-muted mb-6 block">
            NOS SERVICES
          </span>
          <h2 data-animate className="font-heading font-normal text-[28px] sm:text-[36px] md:text-[40px] leading-[1.05] tracking-[-0.035em] text-primary mb-4">
            {service.relatedServicesTitle || `Les services ${service.title.toLowerCase()}`}
          </h2>
          {service.relatedServicesSubtitle && (
            <p data-animate className="text-secondary text-base sm:text-[17px] leading-relaxed">
              {service.relatedServicesSubtitle}
            </p>
          )}
        </div>

        {/* Grille de services */}
        <div className="grid md:grid-cols-2 gap-6">
          {relatedServices.map((rs, i) => (
            <ServiceCard key={rs.slug} rs={rs} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Page catégorie complète ─── */
export function CategoryDetailContent({ service }: CategoryDetailContentProps) {
  return (
    <main>
      {/* 1. Hero */}
      <ServiceHeroV2
        category={service.category}
        title={service.heroTitle}
        subtitle={service.heroSubtitle}
        badge={service.heroBadge}
        imageUrl={service.heroImage}
        imageAlt={service.heroTitle}
        breadcrumbLabel={service.title}
        isPilier
      />

      {/* 2. Qu'est-ce que [catégorie] */}
      <CategoryIntro service={service} />

      {/* 3. Services de la catégorie */}
      <CategoryServices service={service} />

      {/* 4. FAQ */}
      {service.faqs.length > 0 && (
        <ServiceFAQ
          title={service.faqTitle}
          faqs={service.faqs}
        />
      )}

      {/* 5. CTA final */}
      <ServiceCTA
        title={service.ctaTitle}
        description={service.ctaDescription}
        buttonText={service.ctaButtonText}
        buttonLink={service.ctaButtonLink}
      />
    </main>
  );
}
