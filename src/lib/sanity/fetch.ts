import { client } from "../../../sanity/lib/client";
import { draftMode } from "next/headers";

type FetchParams = Record<string, unknown>;

interface FetchOptions {
  tags?: string[];
  revalidate?: number;
}

export async function sanityFetch<T>(
  query: string,
  params: FetchParams = {},
  options: FetchOptions = {},
): Promise<T> {
  const { tags, revalidate } = options;

  // draftMode() throws when called outside a request scope (e.g. generateStaticParams)
  let isDraft = false;
  try {
    isDraft = (await draftMode()).isEnabled;
  } catch {
    // Not in a request context — use published data
  }

  return client.fetch<T>(query, params, {
    ...(isDraft && {
      perspective: "previewDrafts" as const,
      useCdn: false,
      token: process.env.SANITY_API_TOKEN,
    }),
    next: {
      ...(tags && { tags }),
      ...(revalidate !== undefined && { revalidate }),
    },
  });
}
