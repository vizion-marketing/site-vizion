"use client";

import React from 'react';

interface Logo {
  id: string | number;
  src: string;
  alt: string;
}

interface LogoWallProps {
  logos: Logo[];
  speed?: 'slow' | 'medium' | 'fast';
  className?: string;
}

const LogoWall: React.FC<LogoWallProps> = ({ 
  logos, 
  speed = 'medium',
  className = "" 
}) => {
  const durations = {
    slow: '40s',
    medium: '25s',
    fast: '15s',
  };

  const duration = durations[speed];
  const duplicatedLogos = [...logos, ...logos, ...logos];

  if (logos.length === 0) return null;

  return (
    <section 
      className={`relative w-full overflow-hidden py-12 ${className}`}
      aria-label="Client Logos"
    >
      {/* Edge Fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-white to-transparent" />

      <div className="flex w-full overflow-hidden">
        <div 
          className="flex shrink-0 animate-scroll-horizontal items-center gap-12 px-6 group hover:[animation-play-state:paused]"
          style={{ 
            animationDuration: duration,
            width: 'fit-content'
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div 
              key={`${logo.id}-${index}`}
              className="flex w-[120px] shrink-0 items-center justify-center transition-all duration-250 ease-in-out hover:scale-105"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-12 w-auto object-contain grayscale opacity-60 transition-all duration-250 hover:grayscale-0 hover:opacity-100"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll-horizontal {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333333%);
          }
        }

        .animate-scroll-horizontal {
          animation: scroll-horizontal linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-scroll-horizontal {
            animation: none;
            flex-wrap: wrap;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default LogoWall;
export { LogoWall };
