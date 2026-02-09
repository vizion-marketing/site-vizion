"use client";

import { LogoMarquee } from "@/components/sections";

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
  return <LogoMarquee items={INDUSTRIES} />;
}

export default IndustriesMarquee;
