"use client";

import React from "react";

const INDUSTRIES = [
  "SaaS",
  "Franchises",
  "Produits industriels",
  "Marque employeur",
  "Services B2B",
  "Tech & Innovation",
  "Conseil",
  "Formation",
  "E-commerce B2B",
  "Logiciels métier",
];

export function IndustriesMarquee() {
  return (
    <section className="bg-[#D4FD00] py-3 sm:py-4 overflow-hidden" aria-label="Secteurs d'activité">
      <div
        className="flex animate-scroll-left"
        style={{
          width: "max-content",
        }}
      >
        {[...Array(4)].map((_, setIndex) => (
          <div key={setIndex} className="flex items-center shrink-0">
            {INDUSTRIES.map((industry, i) => (
              <React.Fragment key={`${setIndex}-${i}`}>
                <span className="text-black font-heading font-medium text-xs sm:text-sm md:text-base lg:text-lg tracking-tight whitespace-nowrap px-3 sm:px-4 md:px-6 lg:px-8">
                  {industry}
                </span>
                <span className="text-black/30 text-sm sm:text-lg">•</span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default IndustriesMarquee;
