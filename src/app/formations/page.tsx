import type { Metadata } from "next";
import { getAllFormations } from "@/lib/sanity/formations";
import { FormationsListContent } from "./FormationsListContent";

export const metadata: Metadata = {
  title: "Nos formations B2B | Vizion",
  description:
    "Formations intra-entreprise pour équipes commerciales et marketing B2B. LinkedIn, prospection multi-canal, IA, CRM. Animées par des praticiens.",
  openGraph: {
    title: "Nos formations B2B | Vizion",
    description:
      "Formations intra-entreprise pour équipes commerciales et marketing B2B. Animées par des praticiens.",
    url: "https://by-vizion.com/formations",
  },
  alternates: {
    canonical: "https://by-vizion.com/formations",
  },
};

export default async function FormationsPage() {
  const formations = await getAllFormations();

  return <FormationsListContent formations={formations} />;
}
