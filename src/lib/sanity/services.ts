import { sanityFetch } from "./fetch";
import {
  ALL_SERVICES_QUERY,
  SERVICE_BY_SLUG_QUERY,
} from "../../../sanity/lib/queries";
import type { Service } from "../../../sanity/lib/types";

export async function getAllServices(): Promise<Service[]> {
  return sanityFetch<Service[]>(
    ALL_SERVICES_QUERY,
    {},
    { tags: ["services"] },
  );
}

export async function getServiceBySlug(
  slug: string,
): Promise<Service | null> {
  return sanityFetch<Service | null>(
    SERVICE_BY_SLUG_QUERY,
    { slug },
    { tags: ["services"] },
  );
}
