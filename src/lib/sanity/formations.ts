import { sanityFetch } from "./fetch";
import {
  ALL_FORMATIONS_QUERY,
  FORMATION_BY_SLUG_QUERY,
  ALL_FORMATION_SLUGS_QUERY,
} from "../../../sanity/lib/queries";
import type { Formation } from "../../../sanity/lib/types";

export async function getAllFormations(): Promise<Formation[]> {
  return sanityFetch<Formation[]>(
    ALL_FORMATIONS_QUERY,
    {},
    { tags: ["formations"] },
  );
}

export async function getFormationBySlug(
  slug: string,
): Promise<Formation | null> {
  return sanityFetch<Formation | null>(
    FORMATION_BY_SLUG_QUERY,
    { slug },
    { tags: ["formations"] },
  );
}

export async function getAllFormationSlugs(): Promise<string[]> {
  return sanityFetch<string[]>(
    ALL_FORMATION_SLUGS_QUERY,
    {},
    { tags: ["formations"] },
  );
}
