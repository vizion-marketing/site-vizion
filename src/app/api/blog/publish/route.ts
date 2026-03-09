import { NextResponse } from "next/server";
import { createClient } from "next-sanity";
import { slugify } from "@/lib/slug";

// Sanity write client (needs token with write access)
const writeClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "odavbqx4",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-03-06",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

const MAX_BODY_SIZE_BYTES = 1024 * 1024; // 1 Mo

function getApiKey(request: Request): string | null {
  const auth = request.headers.get("authorization");
  if (auth?.startsWith("Bearer ")) {
    return auth.slice(7).trim() || null;
  }
  const xKey = request.headers.get("x-api-key");
  return xKey?.trim() || null;
}

const ALLOWED_IMAGE_DOMAINS = ["unsplash.com", "images.unsplash.com", "pexels.com", "images.pexels.com", "cdn.sanity.io", "placehold.co"];

function isValidUrl(s: string): boolean {
  try {
    const u = new URL(s);
    if (u.protocol !== "http:" && u.protocol !== "https:") return false;

    const hostname = u.hostname;
    // Block private/internal IPs (SSRF prevention)
    if (/^(localhost|127\.|10\.|172\.(1[6-9]|2\d|3[0-1])\.|192\.168\.|169\.254\.|::1$|fe80:)/i.test(hostname)) {
      return false;
    }

    // Whitelist allowed image CDNs
    if (!ALLOWED_IMAGE_DOMAINS.some(d => hostname === d || hostname.endsWith(`.${d}`))) {
      return false;
    }

    return true;
  } catch {
    return false;
  }
}

function isValidDate(s: string): boolean {
  const d = new Date(s);
  return !Number.isNaN(d.getTime());
}

interface PublishBody {
  title?: string;
  description?: string;
  date?: string;
  category?: string;
  author?: string;
  tags?: string[];
  featuredImageUrl?: string;
  draft?: boolean;
  body?: string;
  resources?: Array<{
    title?: string;
    url?: string;
    type?: string;
    description?: string;
  }>;
  ctaTitle?: string;
  ctaDescription?: string;
  ctaLink?: string;
  slug?: string;
}

interface ValidatedData {
  title: string;
  description: string;
  date: string;
  category: string;
  author: string;
  tags: string[];
  featuredImageUrl?: string;
  draft: boolean;
  body: string;
  resources: Array<{
    title: string;
    url: string;
    type: "internal" | "external";
    description?: string;
  }>;
  ctaTitle?: string;
  ctaDescription?: string;
  ctaLink?: string;
  slug: string;
}

const FIELD_MAX_LENGTHS = {
  title: 300,
  description: 1000,
  body: 100000,
  author: 100,
  category: 100,
  slug: 200,
};
const MAX_TAGS = 20;
const MAX_RESOURCES = 50;

function validateBody(
  body: PublishBody,
):
  | { ok: true; data: ValidatedData }
  | { ok: false; error: string; status: number } {
  if (!body.title || typeof body.title !== "string" || !body.title.trim()) {
    return {
      ok: false,
      error: "Le champ 'title' est requis et doit être une chaîne non vide.",
      status: 400,
    };
  }
  if (
    !body.description ||
    typeof body.description !== "string" ||
    !body.description.trim()
  ) {
    return {
      ok: false,
      error:
        "Le champ 'description' est requis et doit être une chaîne non vide.",
      status: 400,
    };
  }
  if (!body.date || typeof body.date !== "string" || !body.date.trim()) {
    return {
      ok: false,
      error: "Le champ 'date' est requis (format ISO 8601).",
      status: 400,
    };
  }
  if (!isValidDate(body.date)) {
    return {
      ok: false,
      error: "Le champ 'date' doit être une date valide (ISO 8601).",
      status: 400,
    };
  }
  if (
    !body.category ||
    typeof body.category !== "string" ||
    !body.category.trim()
  ) {
    return {
      ok: false,
      error: "Le champ 'category' est requis et doit être une chaîne non vide.",
      status: 400,
    };
  }

  // Field length validation
  if (body.title.length > FIELD_MAX_LENGTHS.title) {
    return { ok: false, error: `Le titre ne doit pas dépasser ${FIELD_MAX_LENGTHS.title} caractères.`, status: 400 };
  }
  if (body.description.length > FIELD_MAX_LENGTHS.description) {
    return { ok: false, error: `La description ne doit pas dépasser ${FIELD_MAX_LENGTHS.description} caractères.`, status: 400 };
  }
  if (body.body && body.body.length > FIELD_MAX_LENGTHS.body) {
    return { ok: false, error: `Le corps ne doit pas dépasser ${FIELD_MAX_LENGTHS.body} caractères.`, status: 400 };
  }
  if (body.author && body.author.length > FIELD_MAX_LENGTHS.author) {
    return { ok: false, error: `L'auteur ne doit pas dépasser ${FIELD_MAX_LENGTHS.author} caractères.`, status: 400 };
  }
  if (body.category.length > FIELD_MAX_LENGTHS.category) {
    return { ok: false, error: `La catégorie ne doit pas dépasser ${FIELD_MAX_LENGTHS.category} caractères.`, status: 400 };
  }

  // Array bounds validation
  if (Array.isArray(body.tags) && body.tags.length > MAX_TAGS) {
    return { ok: false, error: `Maximum ${MAX_TAGS} tags autorisés.`, status: 400 };
  }

  if (
    body.featuredImageUrl !== undefined &&
    body.featuredImageUrl !== null &&
    body.featuredImageUrl !== ""
  ) {
    if (
      typeof body.featuredImageUrl !== "string" ||
      !isValidUrl(body.featuredImageUrl)
    ) {
      return {
        ok: false,
        error:
          "Le champ 'featuredImageUrl' doit être une URL valide (http ou https).",
        status: 400,
      };
    }
  }

  if (body.resources !== undefined) {
    if (!Array.isArray(body.resources)) {
      return {
        ok: false,
        error: "Le champ 'resources' doit être un tableau.",
        status: 400,
      };
    }
    if (body.resources.length > MAX_RESOURCES) {
      return {
        ok: false,
        error: `Maximum ${MAX_RESOURCES} ressources autorisées.`,
        status: 400,
      };
    }
    for (let i = 0; i < body.resources.length; i++) {
      const r = body.resources[i];
      if (
        !r ||
        typeof r !== "object" ||
        !r.title ||
        !r.url ||
        (r.type !== "internal" && r.type !== "external")
      ) {
        return {
          ok: false,
          error: `L'élément resources[${i}] doit avoir title, url et type ('internal' ou 'external').`,
          status: 400,
        };
      }
    }
  }

  const slug = body.slug?.trim() ? slugify(body.slug) : slugify(body.title);
  if (!slug) {
    return {
      ok: false,
      error:
        "Impossible de générer un slug à partir du titre. Fournissez un 'slug' explicite.",
      status: 400,
    };
  }

  const tags = Array.isArray(body.tags)
    ? body.tags
        .filter(
          (t): t is string => typeof t === "string" && t.trim().length > 0,
        )
        .map((t) => t.trim())
    : [];

  const resources = Array.isArray(body.resources)
    ? body.resources.map((r) => ({
        title: String(r?.title || ""),
        url: String(r?.url || ""),
        type: (r?.type === "internal" ? "internal" : "external") as
          | "internal"
          | "external",
        description: r?.description ? String(r.description) : undefined,
      }))
    : [];

  return {
    ok: true,
    data: {
      title: body.title.trim(),
      description: body.description.trim(),
      date: body.date.trim(),
      category: body.category.trim(),
      author: body.author?.trim() || "Vizion",
      tags,
      featuredImageUrl: body.featuredImageUrl?.trim() || undefined,
      draft: body.draft === true,
      body: typeof body.body === "string" ? body.body : "",
      resources,
      ctaTitle: body.ctaTitle?.trim() || undefined,
      ctaDescription: body.ctaDescription?.trim() || undefined,
      ctaLink: body.ctaLink?.trim() || undefined,
      slug,
    },
  };
}

/**
 * Convert plain text body to Portable Text blocks.
 * Splits on double newlines for paragraphs.
 */
function textToPortableText(text: string) {
  if (!text.trim()) return [];

  const paragraphs = text.split(/\n\n+/).filter((p) => p.trim());
  return paragraphs.map((p, i) => ({
    _type: "block" as const,
    _key: `block-${i}`,
    style: "normal" as const,
    children: [
      {
        _type: "span" as const,
        _key: `span-${i}`,
        text: p.trim(),
        marks: [] as string[],
      },
    ],
    markDefs: [] as never[],
  }));
}

export async function POST(request: Request) {
  try {
    const apiKey = getApiKey(request);
    const expectedKey = process.env.BLOG_PUBLISH_API_KEY;
    if (!expectedKey || !apiKey || apiKey !== expectedKey) {
      return NextResponse.json(
        {
          error:
            "Non autorisé. Fournissez un token valide (Authorization: Bearer <token> ou x-api-key).",
        },
        { status: 401 },
      );
    }

    if (!process.env.SANITY_API_TOKEN) {
      return NextResponse.json(
        {
          error:
            "Configuration serveur incomplète (SANITY_API_TOKEN manquant).",
        },
        { status: 503 },
      );
    }

    const contentLength = request.headers.get("content-length");
    if (contentLength) {
      const len = parseInt(contentLength, 10);
      if (!Number.isNaN(len) && len > MAX_BODY_SIZE_BYTES) {
        return NextResponse.json(
          {
            error: `Corps de la requête trop volumineux (max ${MAX_BODY_SIZE_BYTES / 1024 / 1024} Mo).`,
          },
          { status: 400 },
        );
      }
    }

    const raw = await request.text();
    if (raw.length > MAX_BODY_SIZE_BYTES) {
      return NextResponse.json(
        {
          error: `Corps de la requête trop volumineux (max ${MAX_BODY_SIZE_BYTES / 1024 / 1024} Mo).`,
        },
        { status: 400 },
      );
    }

    let body: PublishBody;
    try {
      body = JSON.parse(raw) as PublishBody;
    } catch {
      return NextResponse.json(
        { error: "Le corps de la requête doit être un JSON valide." },
        { status: 400 },
      );
    }

    const validated = validateBody(body);
    if (!validated.ok) {
      return NextResponse.json(
        { error: validated.error },
        { status: validated.status },
      );
    }

    const { data } = validated;

    // Check if a post with this slug already exists
    const existing = await writeClient.fetch(
      `count(*[_type == "post" && slug.current == $slug])`,
      { slug: data.slug },
    );
    if (existing > 0) {
      return NextResponse.json(
        {
          error: `Un article avec le slug '${data.slug}' existe déjà. Choisissez un autre slug ou titre.`,
        },
        { status: 409 },
      );
    }

    // Create Sanity document
    const doc = {
      _type: "post",
      title: data.title,
      slug: { _type: "slug", current: data.slug },
      description: data.description,
      date: data.date,
      author: data.author,
      category: data.category,
      tags: data.tags.length > 0 ? data.tags : undefined,
      featuredImageUrl: data.featuredImageUrl,
      draft: data.draft,
      body: textToPortableText(data.body),
      resources:
        data.resources.length > 0
          ? data.resources.map((r, i) => ({
              _type: "resource",
              _key: `res-${i}`,
              title: r.title,
              url: r.url,
              type: r.type,
              description: r.description,
            }))
          : undefined,
      ctaTitle: data.ctaTitle,
      ctaDescription: data.ctaDescription,
      ctaLink: data.ctaLink,
    };

    const result = await writeClient.create(doc);

    return NextResponse.json(
      {
        success: true,
        slug: data.slug,
        documentId: result._id,
        url: `/blog/${data.slug}`,
      },
      { status: 200 },
    );
  } catch (err) {
    console.error("Blog publish API error:", err);
    return NextResponse.json(
      { error: "Une erreur est survenue lors de la publication. Réessayez plus tard." },
      { status: 500 },
    );
  }
}
