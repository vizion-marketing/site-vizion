import { notFound } from "next/navigation";
import { getAllClients } from "@/lib/sanity/clients";
import { getAllCaseStudies } from "@/lib/sanity/caseStudies";
import { CasClientsContent } from "./CasClientsContent";
import { createMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Cas Clients — Résultats de notre agence marketing B2B",
  description: "Études de cas de notre agence marketing B2B : franchise, SaaS, industrie, services. Résultats concrets et mesurables pour des PME et ETI accompagnées par Vizion.",
  path: "/cas-clients",
});

export default async function CasClientsPage() {
  // Temporarily disabled — return 404
  return notFound();
}
