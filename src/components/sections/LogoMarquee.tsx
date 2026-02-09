"use client";

import React from "react";

export interface LogoMarqueeProps {
  items: string[];
  bgColor?: string;
  textColor?: string;
  dotColor?: string;
  /** Number of duplicated sets for seamless loop */
  repeatCount?: number;
}

export function LogoMarquee({
  items,
  bgColor = "#D4FD00",
  textColor = "text-black",
  dotColor = "text-black/30",
  repeatCount = 4,
}: LogoMarqueeProps) {
  return (
    <section className="py-3 sm:py-4 overflow-hidden" style={{ background: bgColor }} aria-label="Bandeau défilant">
      <div
        className="flex animate-scroll-left"
        style={{
          width: "max-content",
        }}
      >
        {[...Array(repeatCount)].map((_, setIndex) => (
          <div key={setIndex} className="flex items-center shrink-0">
            {items.map((item, i) => (
              <React.Fragment key={`${setIndex}-${i}`}>
                <span className={`${textColor} font-heading font-medium text-xs sm:text-sm md:text-base lg:text-lg tracking-tight whitespace-nowrap px-3 sm:px-4 md:px-6 lg:px-8`}>
                  {item}
                </span>
                <span className={`${dotColor} text-sm sm:text-lg`}>&bull;</span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
