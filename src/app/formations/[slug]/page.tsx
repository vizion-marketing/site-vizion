import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getFormationBySlug,
  getAllFormationSlugs,
} from "@/lib/sanity/formations";
import { FormationDetailContent } from "./FormationDetailContent";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllFormationSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const formation = await getFormationBySlug(slug);

  if (!formation) return {};

  const title = formation.metaTitle || `${formation.title} | Vizion Formations`;
  const description =
    formation.metaDescription ||
    formation.description;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://by-vizion.com/formations/${slug}`,
    },
    alternates: {
      canonical: `https://by-vizion.com/formations/${slug}`,
    },
  };
}

export default async function FormationPage({ params }: Props) {
  const { slug } = await params;
  const formation = await getFormationBySlug(slug);

  if (!formation) notFound();

  return <FormationDetailContent formation={formation} />;
}
