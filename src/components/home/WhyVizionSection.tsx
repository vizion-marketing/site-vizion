"use client";

import { useRef, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRightIcon } from "@/components/icons";

gsap.registerPlugin(ScrollTrigger);

const ARGUMENTS = [
  {
    num: "01",
    title: "Parce qu'on veut (vraiment) avoir de l'impact.",
    description:
      "La plupart de nos clients travaillent avec nous sur plusieurs projets, sur le long terme. Nos relations durent en moyenne plusieurs années. On s'implique comme si c'était notre propre boite. La réussite de votre mission est notre réussite.",
  },
  {
    num: "02",
    title: "Parce qu'on est passionné par ce qu'on fait.",
    description:
      "On n'est pas une agence de com. On n'est pas des graphistes. Notre métier c'est la stratégie, les systèmes, la croissance grâce au digital. On pense business avant de penser créatif, et chaque décision qu'on prend sert un objectif concret.",
  },
  {
    num: "03",
    title: "Parce qu'on est bien plus qu'un prestataire.",
    description:
      "On est proches, ultra-disponibles, on se remet en question constamment. On co-construit avec nos clients : on fait avec, pas à leur place. Plusieurs d'entre eux sont devenus des amis. C'est aussi pour ça que 90% nous recommandent.",
  },
  {
    num: "04",
    title: "Parce qu'on est au top de l'innovation.",
    description:
      "On intègre les dernières avancées IA dans nos pratiques avant que tout le monde le fasse. Automatisations, personnalisation à l'échelle, outils de prospection augmentés : on s'assure que vous avez toujours un temps d'avance.",
  },
  {
    num: "05",
    title: "Parce qu'on ne fait jamais de promesses en l'air.",
    description:
      "On n'est pas des magiciens. On travaille avec des dirigeants qui savent que la croissance, ça se structure. On pose des bases solides, on fixe des objectifs réalistes, et on avance méthodiquement. Pas de raccourcis, pas de bullshit.",
  },
];

export function WhyVizionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [fondateursOpen, setFondateursOpen] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: true },
    [Autoplay({ delay: 3500, stopOnInteraction: false })]
  );
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useGSAP(
    () => {
      gsap.from("[data-why='title']", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });

      gsap.from("[data-why='image']", {
        opacity: 0,
        scale: 1.04,
        duration: 1,
        ease: "expo.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });

      gsap.fromTo(
        "[data-why='card']",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="dark-section grain-overlay relative min-h-screen flex flex-col"
      style={{ background: "var(--bg-dark)" }}
    >
      {/* Accent blobs */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute w-[50%] h-[50%] top-[10%] right-[-10%]"
          style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.07) 0%, transparent 55%)" }}
        />
        <div
          className="absolute w-[40%] h-[40%] bottom-[5%] left-[-5%]"
          style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.05) 0%, transparent 55%)" }}
        />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen">

        {/* Left — Photo pleine hauteur bord à bord */}
        <div className="relative lg:w-[50%] h-[50vh] lg:h-auto flex-shrink-0">
          <div data-why="image" className="absolute inset-0 overflow-hidden">
            <Image
              src="/images/why-vizion/equipe-vizion.avif"
              alt="Equipe Vizion, agence marketing strategique B2B a Toulouse"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Filtre sombre uniforme */}
            <div className="absolute inset-0 bg-black/35 pointer-events-none" />
            {/* Dégradé bas */}
            <div
              className="absolute inset-x-0 bottom-0 h-[55%] pointer-events-none"
              style={{ background: "linear-gradient(to top, var(--bg-dark) 0%, transparent 100%)" }}
            />
            {/* Dégradé droite */}
            <div
              className="absolute inset-y-0 right-0 w-[45%] pointer-events-none"
              style={{ background: "linear-gradient(to left, var(--bg-dark) 0%, transparent 100%)" }}
            />
            {/* Dégradé gauche */}
            <div
              className="absolute inset-y-0 left-0 w-[30%] pointer-events-none"
              style={{ background: "linear-gradient(to right, var(--bg-dark) 0%, transparent 100%)" }}
            />
          </div>

          {/* Chiffres clés + fondateurs */}
          <div className="absolute bottom-[8%] left-6 md:left-10 z-[30] flex flex-col gap-6">
            {/* Stats */}
            <div className="flex flex-col gap-4">
              {[
                { value: "+70", label: "clients nous ont fait confiance" },
                { value: "90%", label: "nous recommandent" },
                { value: "5/5", label: "sur Google" },
              ].map((stat) => (
                <div key={stat.value} className="flex items-baseline gap-3">
                  <span className="font-heading font-medium text-[42px] leading-none tracking-[-0.04em] text-accent">{stat.value}</span>
                  <span className="text-[12px] text-white/50 leading-snug max-w-[120px]">{stat.label}</span>
                </div>
              ))}
            </div>

          {/* Rencontrez nos fondateurs */}
          <div className="z-[30]">
            <div
              className="relative"
              onMouseEnter={() => setFondateursOpen(true)}
              onMouseLeave={() => setFondateursOpen(false)}
            >
              {/* Modale hover */}
              <div
                className={`absolute left-0 top-0 transition-all duration-300 ${
                  fondateursOpen ? "opacity-100 pointer-events-auto -translate-y-[calc(100%+12px)]" : "opacity-0 pointer-events-none -translate-y-[calc(100%+4px)]"
                }`}
              >
                <div className="bg-[#111110] border border-white/10 p-5 flex gap-4 shadow-2xl w-[min(320px,calc(100vw-3rem))]">
                  {[
                    { src: "/images/about/lucas-gonzalez.avif", name: "Lucas Gonzalez", role: "Stratégie & Positionnement", href: "/equipe/lucas-gonzalez" },
                    { src: "/images/about/hugo-schuppe.avif", name: "Hugo Schuppe", role: "Systèmes & Automatisation", href: "/equipe/hugo-schuppe" },
                  ].map((f) => (
                    <Link key={f.name} href={f.href} className="group flex-1 flex flex-col gap-2">
                      <div className="relative w-full aspect-[3/4] overflow-hidden">
                        <Image src={f.src} alt={f.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="140px" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
                      </div>
                      <div>
                        <p className="text-white text-[13px] font-medium leading-tight">{f.name}</p>
                        <p className="text-white/50 text-[11px] leading-tight mt-0.5">{f.role}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Trigger */}
              <Link href="/equipe" className="group inline-flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 px-4 py-3">
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 rounded-full overflow-hidden border border-white/20 relative">
                    <Image src="/images/about/lucas-gonzalez.avif" alt="Lucas Gonzalez" fill className="object-cover" sizes="28px" />
                  </div>
                  <div className="w-7 h-7 rounded-full overflow-hidden border border-white/20 relative">
                    <Image src="/images/about/hugo-schuppe.avif" alt="Hugo Schuppe" fill className="object-cover" sizes="28px" />
                  </div>
                </div>
                <span className="text-[12px] text-white/80 font-medium">Découvrez la vizion de nos fondateurs</span>
                <ArrowUpRightIcon size={13} className="text-white/50 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
              </Link>
            </div>
          </div>
          </div>
        </div>

        {/* Right — titre + 3 colonnes centrées verticalement */}
        <div className="flex-1 min-w-0 flex flex-col justify-center px-6 md:px-10 py-16 lg:py-0 gap-8 overflow-hidden">
          {/* Titre */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="relative flex items-center justify-center w-2 h-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </div>
              <span className="text-[11px] font-light tracking-[0.12em] text-white/70 uppercase">
                POURQUOI VIZION
              </span>
            </div>
            <h2
              data-why="title"
              className="font-heading font-medium text-[28px] sm:text-[34px] md:text-[38px] leading-[1.05] tracking-[-0.03em] text-white"
            >
              Pourquoi faire de Vizion le partenaire de votre croissance ?
            </h2>
          </div>

          {/* Slider Embla */}
          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {ARGUMENTS.map((arg, i) => (
                  <div
                    key={i}
                    className="flex-none w-[80%] sm:w-[45%] lg:w-[42%] pl-4"
                  >
                  <div
                    data-why="card"
                    className="h-full flex flex-col gap-4 p-7 border border-white/[0.08] hover:bg-white/[0.04] hover:border-white/[0.14] transition-all duration-300"
                  >
                    <span className="text-accent text-[13px] font-medium tracking-wide">{arg.num}</span>
                    <h3 className="font-semibold text-white leading-snug" style={{ fontSize: "16px" }}>
                      {arg.title}
                    </h3>
                    <p className="text-[13px] sm:text-[14px] text-white/55 leading-relaxed">
                      {arg.description}
                    </p>
                  </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Flèches */}
            <div className="flex items-center gap-2 mt-4">
              <button onClick={scrollPrev} className="w-8 h-8 flex items-center justify-center border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all duration-200 text-white/50 hover:text-white">
                ←
              </button>
              <button onClick={scrollNext} className="w-8 h-8 flex items-center justify-center border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all duration-200 text-white/50 hover:text-white">
                →
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>

  );
}

export default WhyVizionSection;
