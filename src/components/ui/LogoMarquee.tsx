"use client";

import React from "react";
import { motion } from "framer-motion";

export interface Logo {
  src: string;
  alt: string;
}

export interface LogoMarqueeProps {
  logos: Logo[];
  direction?: "left" | "right";
  speed?: "slow" | "normal" | "fast";
  pauseOnHover?: boolean;
  grayscale?: boolean;
  className?: string;
}

const speedDurations = {
  slow: "60s",
  normal: "40s",
  fast: "25s",
};

export function LogoMarquee({
  logos,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  grayscale = true,
  className = "",
}: LogoMarqueeProps) {
  // Double the logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div
      className={`
        relative overflow-hidden
        ${className}
      `}
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <motion.div
        className={`
          flex gap-8 sm:gap-12 md:gap-16 w-max
          ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}
        `}
        style={{
          animation: `scroll-${direction} ${speedDurations[speed]} linear infinite`,
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo.alt}-${index}`}
            className={`
              shrink-0 flex items-center justify-center
              transition-all duration-300
              ${
                grayscale
                  ? "grayscale opacity-50 hover:grayscale-0 hover:opacity-100 hover:scale-105"
                  : "opacity-80 hover:opacity-100 hover:scale-105"
              }
            `}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-6 sm:h-8 md:h-10 w-auto object-contain"
            />
          </div>
        ))}
      </motion.div>

      <style jsx>{`
        @keyframes scroll-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-right {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}

export default LogoMarquee;
