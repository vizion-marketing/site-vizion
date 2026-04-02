"use client";

import { useState, useEffect } from "react";

interface StarData {
  id: number;
  top: number;
  left: number;
  delay: number;    // initial delay (court) — s
  cycle: number;    // durée totale du cycle — s (longue, avec pause invisible)
  length: number;
  opacity: number;
}

// Le tir se passe dans les 10 premiers % du cycle.
// Le reste du temps l'étoile est invisible → effet "pluie espacée naturelle".
const KEYFRAMES = `
@keyframes shootStar {
  0% {
    transform: translateX(0) translateY(0) rotate(-45deg);
    opacity: 0;
  }
  2% {
    opacity: var(--star-op, 0.9);
  }
  10% {
    transform: translateX(-520px) translateY(520px) rotate(-45deg);
    opacity: 0;
  }
  10.001%, 100% {
    transform: translateX(-520px) translateY(520px) rotate(-45deg);
    opacity: 0;
  }
}
`;

function generateStars(count: number): StarData[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    top: Math.random() * 55,
    left: 15 + Math.random() * 80,
    // Délai court au démarrage : les premières étoiles partent quasi immédiatement
    delay: (i / count) * 2.5 + Math.random() * 1,
    // Cycle long = pause naturelle entre chaque passage
    cycle: 8 + Math.random() * 10,
    length: 80 + Math.random() * 130,
    opacity: 0.55 + Math.random() * 0.45,
  }));
}

export function ShootingStars({ count = 14 }: { count?: number }) {
  const [stars, setStars] = useState<StarData[]>([]);

  useEffect(() => {
    setStars(generateStars(count));
  }, [count]);

  if (stars.length === 0) return null;

  return (
    <>
      <style>{KEYFRAMES}</style>
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{ zIndex: 4 }}
      >
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: `${star.length}px`,
              height: "1.5px",
              background:
                "linear-gradient(to left, transparent 0%, rgba(255,255,255,0.3) 35%, rgba(255,255,255,0.9) 80%, #ffffff 100%)",
              borderRadius: "999px",
              transform: "rotate(-45deg)",
              transformOrigin: "right center",
              animation: `shootStar ${star.cycle}s linear ${star.delay}s infinite`,
              ["--star-op" as string]: star.opacity,
            }}
          />
        ))}
      </div>
    </>
  );
}
