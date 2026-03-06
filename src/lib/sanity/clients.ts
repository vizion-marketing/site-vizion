import { sanityFetch } from "./fetch";
import {
  ALL_CLIENTS_QUERY,
  CLIENT_BY_SLUG_QUERY,
  ALL_CLIENT_SLUGS_QUERY,
  FEATURED_CLIENTS_QUERY,
} from "../../../sanity/lib/queries";
import type { Client } from "../../../sanity/lib/types";

export async function getAllClients(): Promise<Client[]> {
  return sanityFetch<Client[]>(ALL_CLIENTS_QUERY, {}, { tags: ["clients"] });
}

export async function getClientBySlug(slug: string): Promise<Client | null> {
  return sanityFetch<Client | null>(
    CLIENT_BY_SLUG_QUERY,
    { slug },
    { tags: ["clients"] },
  );
}

export async function getAllClientSlugs(): Promise<string[]> {
  return sanityFetch<string[]>(
    ALL_CLIENT_SLUGS_QUERY,
    {},
    { tags: ["clients"] },
  );
}

export async function getFeaturedClients(): Promise<Client[]> {
  return sanityFetch<Client[]>(
    FEATURED_CLIENTS_QUERY,
    {},
    { tags: ["clients"] },
  );
}
