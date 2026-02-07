"use client";

import React from "react";

/**
 * Flèche haut-droite (boutons CTA).
 * Utilise le SVG fourni : viewBox 24, stroke 1.5, currentColor.
 */
export function ArrowUpRightIcon({
  className,
  size = 24,
  strokeWidth = 1.25,
}: {
  className?: string;
  size?: number;
  strokeWidth?: number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke="currentColor"
      className={className}
      width={size}
      height={size}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
      />
    </svg>
  );
}
