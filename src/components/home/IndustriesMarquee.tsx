"use client";

import { LogoMarquee } from "@/components/sections";

const INDUSTRIES = [
  "SaaS",
  "Cybersécurité",
  "Industrie",
  "Franchise",
  "Retail",
  "Ressources humaines",
  "Tech",
  "Formation",
  "Services",
  "Logiciels métier",
  "Conseil",
  "FinTech",
  "E-commerce",
  "Santé",
  "Énergie",
  "Immobilier",
];

export function IndustriesMarquee() {
  return <LogoMarquee items={INDUSTRIES} />;
}

export default IndustriesMarquee;
