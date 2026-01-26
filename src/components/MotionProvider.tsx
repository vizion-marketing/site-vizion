"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import type { ReactNode } from "react";

interface MotionProviderProps {
  children: ReactNode;
}

// LazyMotion avec domAnimation réduit le bundle Framer Motion
// en chargeant uniquement les fonctionnalités DOM nécessaires
// Note: sans "strict" pour compatibilité avec les composants `motion` existants
export function MotionProvider({ children }: MotionProviderProps) {
  return (
    <LazyMotion features={domAnimation}>
      {children}
    </LazyMotion>
  );
}
