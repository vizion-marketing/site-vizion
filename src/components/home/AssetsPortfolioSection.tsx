"use client";

import { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { SectionDiagonalTop, SectionDiagonalBottom } from "./shared/SectionDiagonal";

// Assets Portfolio Card with 3D tilt effect
const PortfolioAssetCard = ({
  title,
  category,
  description,
  image,
  className,
}: {
  title: string;
  category: string;
  description: string;
  image: string;
  className?: string;
}) => {
  const [imageError, setImageError] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={`relative group h-full min-h-[320px] rounded-xl border border-white/10 bg-black/60 backdrop-blur-sm overflow-hidden transition-colors hover:border-white/20 ${className}`}
    >
      {/* Image de fond ou placeholder */}
      <div className="absolute inset-0">
        {!imageError ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#3a3a3a] to-[#1a1a1a] flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-white/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-white/30 text-xs uppercase tracking-wider">Ajoutez votre image</p>
              <p className="text-white/20 text-[10px] mt-1">{image.split('/').pop()}</p>
            </div>
          </div>
        )}
        {/* Overlay gradient pour lisibilité du texte */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
      </div>

      {/* Contenu texte */}
      <div style={{ transform: "translateZ(30px)" }} className="relative z-10 h-full flex flex-col justify-end p-8">
        <span className="text-[11px] font-normal uppercase tracking-[1.65px] text-[#B7B7B7] mb-2 block">{category}</span>
        <h3 className="font-['Roboto'] text-xl font-black uppercase text-white leading-none tracking-tight mb-3">
          {title}
        </h3>
        <p className="font-['Inter'] text-sm text-[#B7B7B7] max-w-[280px]">
          {description}
        </p>
      </div>

      {/* Decorative gradient flare on hover */}
      <div className="absolute -inset-px bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none" />
    </motion.div>
  );
};

// Assets Portfolio Section
export function AssetsPortfolioSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#B7B7B7] via-[#000] to-[#6D6D6D] py-20 sm:py-28 md:py-36 px-4 sm:px-6 md:px-12">
      {/* Diagonal top overlay - covers gap from previous section */}
      <SectionDiagonalTop fillColor="#D0D0D0" direction="left" />
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-white/5 blur-[100px] rounded-full"
        />
        <motion.div
          animate={{ y: [0, 30, 0], opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full"
        />
      </div>

      <div className="max-w-[82.5rem] mx-auto relative z-10">
        <div className="mb-12 md:mb-20">
          <span className="text-[11px] font-normal uppercase tracking-[1.65px] text-[#F2F2F2] opacity-70 mb-4 block">Portfolio d&apos;Expertise</span>
          <h2 className="font-['Roboto'] font-black text-[clamp(32px,5vw,52px)] leading-[1.05] tracking-[-0.035em] uppercase text-white max-w-3xl">
            Des supports <span className="text-[#B7B7B7]">impactants</span> pour votre croissance B2B
          </h2>
        </div>

        {/*
          INSTRUCTIONS POUR REMPLACER LES IMAGES :
          Uploadez vos images dans /public/assets/ avec ces noms :
          - plaquettes.jpg (ratio 16:9 recommandé)
          - publicites.jpg (ratio 1:1 recommandé)
          - landing-pages.jpg (ratio 9:16 recommandé - vertical)
          - sales-deck.jpg (ratio 16:9 recommandé)
          - social-media.jpg (ratio 1:1 recommandé)
        */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[340px]">

          {/* 1. Plaquettes A4 - Big span */}
          <div className="md:col-span-8 md:row-span-1">
            <PortfolioAssetCard
              category="Édition"
              title="Plaquettes A4"
              description="Brochures institutionnelles et fiches produits haut de gamme."
              image="/assets/plaquettes.jpg"
            />
          </div>

          {/* 2. Publicités - Small span */}
          <div className="md:col-span-4 md:row-span-1">
            <PortfolioAssetCard
              category="Performance"
              title="Publicités"
              description="Campagnes display et formats print."
              image="/assets/publicites.jpg"
            />
          </div>

          {/* 3. Landing Pages - Tall span */}
          <div className="md:col-span-4 md:row-span-2">
            <PortfolioAssetCard
              category="Digital"
              title="Landing Pages"
              description="Conversion optimisée et design orienté utilisateur pour vos leads."
              image="/assets/landing-pages.jpg"
              className="h-full"
            />
          </div>

          {/* 4. Sales Deck - Small span */}
          <div className="md:col-span-4 md:row-span-1">
            <PortfolioAssetCard
              category="Vente"
              title="Sales Deck"
              description="Présentations commerciales stratégiques."
              image="/assets/sales-deck.jpg"
            />
          </div>

          {/* 5. Réseaux Sociaux - Small span */}
          <div className="md:col-span-4 md:row-span-1">
            <PortfolioAssetCard
              category="Notoriété"
              title="Contenu Social"
              description="Posts LinkedIn et visuels engageants."
              image="/assets/social-media.jpg"
            />
          </div>

        </div>
      </div>

      {/* Diagonal bottom → next section */}
      <SectionDiagonalBottom fillColor="#F2F2F2" direction="right" />
    </section>
  );
}
