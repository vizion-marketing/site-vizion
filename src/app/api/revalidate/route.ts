import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

// Webhook Sanity → revalidation on-demand
export async function POST(request: Request) {
  const secret = request.headers.get("x-sanity-webhook-secret");
  if (secret !== process.env.SANITY_STUDIO_PREVIEW_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const type = body?._type;

    // Map Sanity document types to cache tags
    const tagMap: Record<string, string> = {
      post: "posts",
      client: "clients",
      caseStudy: "caseStudies",
      service: "services",
    };

    const tag = tagMap[type];
    if (tag) {
      revalidateTag(tag, "default");
      return NextResponse.json({ revalidated: true, tag });
    }

    return NextResponse.json({ revalidated: false, message: "Unknown type" });
  } catch {
    return NextResponse.json(
      { message: "Error revalidating" },
      { status: 500 },
    );
  }
}
