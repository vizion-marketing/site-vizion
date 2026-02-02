import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Blog | Stratégies Marketing B2B",
  description: "Découvrez nos articles sur le marketing B2B, la génération de leads, le CRM et la croissance commerciale. Insights et stratégies pour PME et ETI.",
  path: "/blog",
});

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
