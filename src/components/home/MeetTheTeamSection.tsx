"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRightIcon } from "@/components/icons";

gsap.registerPlugin(ScrollTrigger);

const ROTATING_WORDS = ["agence", "cabinet", "collectif"];

interface ClientLogo {
  name: string;
  logoUrl?: string;
}

interface MeetTheTeamSectionProps {
  clientLogos?: ClientLogo[];
}


export function MeetTheTeamSection({ clientLogos = [] }: MeetTheTeamSectionProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.from("[data-meet='surtitre']", { opacity: 0, y: 12, duration: 0.5 }, 0);
      tl.from("[data-meet='h2']",       { opacity: 0, y: 24, duration: 0.7 }, 0.1);
      tl.from("[data-meet='body']",     { opacity: 0, y: 16, duration: 0.6 }, 0.25);
      tl.from("[data-meet='label']",    { opacity: 0, y: 10, duration: 0.4 }, 0.38);
      tl.from("[data-meet='tag']",      { opacity: 0, y: 10, duration: 0.4, stagger: 0.08 }, 0.45);
      tl.from("[data-meet='cta']",      { opacity: 0, y: 8,  duration: 0.4 }, 0.7);
      tl.from("[data-meet='logos']",    { opacity: 0, x: 30, duration: 0.7 }, 0.3);
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="bg-card grain-light py-20 sm:py-28 md:py-36 px-4 sm:px-6 md:px-12 relative overflow-hidden"
    >
      {/* Accent blob */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.12) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-[82.5rem] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — texte */}
          <div>
            <span data-meet="surtitre" className="text-muted uppercase tracking-[0.12em] text-[11px] font-light mb-4 block">
              Qui sommes-nous
            </span>
            <h2 data-meet="h2" className="font-heading font-normal text-[clamp(32px,5vw,52px)] leading-[1.05] tracking-[-0.035em] mb-8 text-primary">
              Vizion, un.e{" "}
              <span className="relative inline-block overflow-hidden align-bottom pb-[0.15em]">
                <span className="invisible">collectif</span>
                <AnimatePresence mode="sync">
                  <motion.span
                    key={wordIndex}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                    className="text-accent absolute inset-0 flex items-end"
                  >
                    {ROTATING_WORDS[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>{" "}
              dédié au Marketing B2B et qui n'aime pas les étiquettes.
            </h2>

            <p data-meet="body" className="text-secondary text-[16px] leading-relaxed mb-8 max-w-xl">
              Il faut qu'on vous avoue un truc : on n'est toujours pas arrivé à savoir si nous sommes une agence, un cabinet de conseil, ou des freelances qui rêvent d'être une agence.
            </p>

            <p data-meet="label" className="text-muted text-[13px] uppercase tracking-[0.1em] font-light mb-4">
              Pourtant, ça ne nous a jamais empêché de :
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                "Contractualiser avec +70 clients dans plus d'une dizaine de secteurs",
                "Travailler avec des entreprises 100x plus grosses que nous",
                "Être recommandé par +90% de nos clients",
              ].map((tag) => (
                <span
                  key={tag}
                  data-meet="tag"
                  className="inline-flex items-center px-4 py-2 bg-white border border-black/[0.08] text-primary text-[13px] font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            <Link
              data-meet="cta"
              href="#services"
              className="inline-flex items-center gap-1.5 mt-6 text-[13px] text-secondary underline underline-offset-4 hover:text-primary transition-colors duration-200 group"
            >
              Découvrir nos services
              <ArrowUpRightIcon size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </Link>
          </div>

          {/* Right — marquee vertical logos */}
          {clientLogos.length > 0 && (
            <div data-meet="logos" className="hidden lg:flex gap-4 h-[420px] overflow-hidden relative">
              {/* Fade top */}
              <div className="absolute inset-x-0 top-0 h-16 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to bottom, var(--bg-card) 0%, transparent 100%)" }} />
              {/* Fade bottom */}
              <div className="absolute inset-x-0 bottom-0 h-16 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to top, var(--bg-card) 0%, transparent 100%)" }} />

              {[
                { items: clientLogos, cls: "animate-scroll-up" },
                { items: [...clientLogos].reverse(), cls: "animate-scroll-up-slow" },
                { items: clientLogos, cls: "animate-scroll-up-fast" },
              ].map((col, colIdx) => {
                const repeated = [...col.items, ...col.items];
                return (
                  <div key={colIdx} className="flex-1 flex flex-col overflow-hidden">
                    <div className={`flex flex-col gap-4 ${col.cls}`}>
                      {repeated.map((client, idx) => (
                        <div
                          key={`${client.name}-${idx}`}
                          className="bg-white border border-black/[0.06] px-4 py-4 flex items-center justify-center h-16 shrink-0 hover:border-black/[0.12] transition-all duration-300"
                        >
                          {client.logoUrl ? (
                            <Image
                              src={client.logoUrl}
                              alt={client.name}
                              width={100}
                              height={32}
                              className="h-7 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                            />
                          ) : (
                            <span className="text-primary text-[12px] font-semibold tracking-tight text-center leading-tight">
                              {client.name}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
