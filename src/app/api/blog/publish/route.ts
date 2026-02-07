import { NextResponse } from "next/server";
import { slugify } from "@/lib/slug";
import {
  buildMdxDocument,
  type BlogFrontmatterInput,
  type BlogResource,
} from "@/lib/blog-frontmatter";

const MAX_BODY_SIZE_BYTES = 1024 * 1024; // 1 Mo

function getApiKey(request: Request): string | null {
  const auth = request.headers.get("authorization");
  if (auth?.startsWith("Bearer ")) {
    return auth.slice(7).trim() || null;
  }
  const xKey = request.headers.get("x-api-key");
  return xKey?.trim() || null;
}

function isValidUrl(s: string): boolean {
  try {
    const u = new URL(s);
    return u.protocol === "http:" || u.protocol === "https:";
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
  featuredImage?: string;
  draft?: boolean;
  body?: string;
  resources?: Array< { title?: string; url?: string; type?: string; description?: string } >;
  ctaTitle?: string;
  ctaDescription?: string;
  ctaLink?: string;
  slug?: string;
}

function validateResource(r: unknown): r is BlogResource {
  if (!r || typeof r !== "object") return false;
  const o = r as Record<string, unknown>;
  return (
    typeof o.title === "string" &&
    o.title.length > 0 &&
    typeof o.url === "string" &&
    o.url.length > 0 &&
    (o.type === "internal" || o.type === "external")
  );
}

function validateBody(body: PublishBody): { ok: true; data: BlogFrontmatterInput & { body: string; slug: string } } | { ok: false; error: string; status: number } {
  if (!body.title || typeof body.title !== "string" || !body.title.trim()) {
    return { ok: false, error: "Le champ 'title' est requis et doit être une chaîne non vide.", status: 400 };
  }
  if (!body.description || typeof body.description !== "string" || !body.description.trim()) {
    return { ok: false, error: "Le champ 'description' est requis et doit être une chaîne non vide.", status: 400 };
  }
  if (!body.date || typeof body.date !== "string" || !body.date.trim()) {
    return { ok: false, error: "Le champ 'date' est requis (format ISO 8601).", status: 400 };
  }
  if (!isValidDate(body.date)) {
    return { ok: false, error: "Le champ 'date' doit être une date valide (ISO 8601).", status: 400 };
  }
  if (!body.category || typeof body.category !== "string" || !body.category.trim()) {
    return { ok: false, error: "Le champ 'category' est requis et doit être une chaîne non vide.", status: 400 };
  }

  if (body.featuredImage !== undefined && body.featuredImage !== null && body.featuredImage !== "") {
    if (typeof body.featuredImage !== "string" || !isValidUrl(body.featuredImage)) {
      return { ok: false, error: "Le champ 'featuredImage' doit être une URL valide (http ou https).", status: 400 };
    }
  }

  if (body.resources !== undefined) {
    if (!Array.isArray(body.resources)) {
      return { ok: false, error: "Le champ 'resources' doit être un tableau.", status: 400 };
    }
    for (let i = 0; i < body.resources.length; i++) {
      const r = body.resources[i];
      if (!validateResource(r)) {
        return { ok: false, error: `L'élément resources[${i}] doit avoir title, url et type ('internal' ou 'external').`, status: 400 };
      }
    }
  }

  const slug = body.slug?.trim()
    ? slugify(body.slug)
    : slugify(body.title);
  if (!slug) {
    return { ok: false, error: "Impossible de générer un slug à partir du titre. Fournissez un 'slug' explicite.", status: 400 };
  }

  const tags = Array.isArray(body.tags)
    ? body.tags.filter((t): t is string => typeof t === "string" && t.trim().length > 0).map((t) => t.trim())
    : [];

  const resources: BlogResource[] = Array.isArray(body.resources)
    ? body.resources.map((r) => ({
        title: (r as BlogResource).title,
        url: (r as BlogResource).url,
        type: (r as BlogResource).type,
        description: (r as BlogResource).description,
      }))
    : [];

  const frontmatter: BlogFrontmatterInput = {
    title: body.title.trim(),
    description: body.description.trim(),
    date: body.date.trim(),
    category: body.category.trim(),
    author: body.author?.trim() || "Vizion",
    tags: tags.length > 0 ? tags : undefined,
    featuredImage: body.featuredImage?.trim() || undefined,
    draft: body.draft === true,
    resources: resources.length > 0 ? resources : undefined,
    ctaTitle: body.ctaTitle?.trim() || undefined,
    ctaDescription: body.ctaDescription?.trim() || undefined,
    ctaLink: body.ctaLink?.trim() || undefined,
  };

  const bodyContent = typeof body.body === "string" ? body.body : "";

  return {
    ok: true,
    data: { ...frontmatter, body: bodyContent, slug },
  };
}

async function getGitHubRepo(): Promise<{ owner: string; repo: string } | null> {
  const repo = process.env.GITHUB_REPO;
  if (repo && repo.includes("/")) {
    const [owner, name] = repo.split("/", 2);
    if (owner && name) return { owner: owner.trim(), repo: name.trim() };
  }
  const owner = process.env.GITHUB_REPO_OWNER;
  const name = process.env.GITHUB_REPO_NAME;
  if (owner && name) return { owner: owner.trim(), repo: name.trim() };
  return null;
}

async function githubFileExists(
  token: string,
  owner: string,
  repo: string,
  path: string,
  branch: string
): Promise<boolean> {
  const res = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${encodeURIComponent(branch)}`,
    {
      headers: {
        Accept: "application/vnd.github.v3+json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (res.status === 404) return false;
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`GitHub GET failed: ${res.status} ${text}`);
  }
  return true;
}

async function githubCreateFile(
  token: string,
  owner: string,
  repo: string,
  path: string,
  content: string,
  branch: string,
  message: string
): Promise<void> {
  const res = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
    {
      method: "PUT",
      headers: {
        Accept: "application/vnd.github.v3+json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message,
        content: Buffer.from(content, "utf-8").toString("base64"),
        branch,
      }),
    }
  );
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`GitHub PUT failed: ${res.status} ${text}`);
  }
}

export async function POST(request: Request) {
  try {
    const apiKey = getApiKey(request);
    const expectedKey = process.env.BLOG_PUBLISH_API_KEY;
    if (!expectedKey || !apiKey || apiKey !== expectedKey) {
      return NextResponse.json(
        { error: "Non autorisé. Fournissez un token valide (Authorization: Bearer <token> ou x-api-key)." },
        { status: 401 }
      );
    }

    const contentLength = request.headers.get("content-length");
    if (contentLength) {
      const len = parseInt(contentLength, 10);
      if (!Number.isNaN(len) && len > MAX_BODY_SIZE_BYTES) {
        return NextResponse.json(
          { error: `Corps de la requête trop volumineux (max ${MAX_BODY_SIZE_BYTES / 1024 / 1024} Mo).` },
          { status: 400 }
        );
      }
    }

    const raw = await request.text();
    if (raw.length > MAX_BODY_SIZE_BYTES) {
      return NextResponse.json(
        { error: `Corps de la requête trop volumineux (max ${MAX_BODY_SIZE_BYTES / 1024 / 1024} Mo).` },
        { status: 400 }
      );
    }

    let body: PublishBody;
    try {
      body = JSON.parse(raw) as PublishBody;
    } catch {
      return NextResponse.json(
        { error: "Le corps de la requête doit être un JSON valide." },
        { status: 400 }
      );
    }

    const validated = validateBody(body);
    if (!validated.ok) {
      return NextResponse.json(
        { error: validated.error },
        { status: validated.status }
      );
    }

    const { data } = validated;
    const token = process.env.GITHUB_TOKEN;
    if (!token) {
      console.error("GITHUB_TOKEN non configuré");
      return NextResponse.json(
        { error: "Configuration serveur incomplète (GitHub)." },
        { status: 503 }
      );
    }

    const repoInfo = await getGitHubRepo();
    if (!repoInfo) {
      console.error("GITHUB_REPO (ou GITHUB_REPO_OWNER + GITHUB_REPO_NAME) non configuré");
      return NextResponse.json(
        { error: "Configuration serveur incomplète (répo GitHub)." },
        { status: 503 }
      );
    }

    const branch = process.env.GITHUB_BRANCH || "main";
    const filePath = `content/blog/${data.slug}.mdx`;

    const exists = await githubFileExists(
      token,
      repoInfo.owner,
      repoInfo.repo,
      filePath,
      branch
    );
    if (exists) {
      return NextResponse.json(
        { error: `Un article avec le slug '${data.slug}' existe déjà. Choisissez un autre slug ou titre.` },
        { status: 409 }
      );
    }

    const frontmatter: BlogFrontmatterInput = {
      title: data.title,
      description: data.description,
      date: data.date,
      category: data.category,
      author: data.author,
      tags: data.tags,
      featuredImage: data.featuredImage,
      draft: data.draft,
      resources: data.resources,
      ctaTitle: data.ctaTitle,
      ctaDescription: data.ctaDescription,
      ctaLink: data.ctaLink,
    };
    const mdxContent = buildMdxDocument(frontmatter, data.body);

    await githubCreateFile(
      token,
      repoInfo.owner,
      repoInfo.repo,
      filePath,
      mdxContent,
      branch,
      `Blog: ajout de l'article "${data.title}" (${data.slug})`
    );

    let deployTriggered = false;
    const deployHookUrl = process.env.VERCEL_DEPLOY_HOOK_URL;
    if (deployHookUrl) {
      try {
        const hookRes = await fetch(deployHookUrl, { method: "POST" });
        deployTriggered = hookRes.ok || hookRes.status === 202;
        if (!deployTriggered) {
          console.warn("Deploy hook returned", hookRes.status, await hookRes.text());
        }
      } catch (err) {
        console.error("Deploy hook failed:", err);
      }
    }

    return NextResponse.json(
      {
        success: true,
        slug: data.slug,
        path: filePath,
        deployTriggered,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Blog publish API error:", err);
    const message = err instanceof Error ? err.message : "Erreur serveur";
    const isGitHub = message.includes("GitHub");
    return NextResponse.json(
      { error: isGitHub ? "Erreur lors de l’écriture sur GitHub. Réessayez plus tard." : "Une erreur est survenue." },
      { status: isGitHub ? 502 : 500 }
    );
  }
}
