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
    <section className="bg-[#D4FD00] py-4 overflow-hidden">
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
                <span className="text-black font-heading font-medium text-sm sm:text-base md:text-lg tracking-tight whitespace-nowrap px-4 sm:px-6 md:px-8">
                  {industry}
                </span>
                <span className="text-black/30 text-lg">•</span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default IndustriesMarquee;
