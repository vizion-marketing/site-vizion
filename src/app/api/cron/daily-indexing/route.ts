import { NextRequest, NextResponse } from "next/server";
import { SITEMAP_QUERY } from "../../../../../sanity/lib/queries";
import { sanityFetch } from "@/lib/sanity/fetch";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://by-vizion.com";

interface SitemapData {
  posts: { url: string }[];
  clients: { url: string }[];
  caseStudies: { url: string }[];
  services: { url: string }[];
}

/**
 * Vercel Cron endpoint - runs daily to request indexing for all site URLs
 *
 * This endpoint is called automatically by Vercel Cron (configured in vercel.json)
 * It collects all URLs from the sitemap and submits them to Google and IndexNow
 */
export async function GET(request: NextRequest) {
  try {
    // Verify this is a valid cron request from Vercel
    const authHeader = request.headers.get("authorization");
    const cronSecret = process.env.CRON_SECRET;

    if (!cronSecret) {
      console.error("CRON_SECRET not configured");
      return NextResponse.json(
        { error: "Cron not configured" },
        { status: 500 }
      );
    }

    if (authHeader !== `Bearer ${cronSecret}`) {
      console.error("Unauthorized cron request");
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    // Fetch all URLs from Sanity
    const data = await sanityFetch<SitemapData>(
      SITEMAP_QUERY,
      {},
      { tags: ["posts", "clients", "caseStudies", "services"] },
    );

    // Collect all URLs
    const urls: string[] = [];

    // Static pages
    const staticRoutes = [
      "",
      "/blog",
      "/contact",
      "/cas-clients",
    ];

    urls.push(...staticRoutes.map((route) => `${baseUrl}${route}`));

    // Dynamic pages from Sanity
    if (data.posts) {
      urls.push(...data.posts.map((p) => `${baseUrl}${p.url}`));
    }
    if (data.clients) {
      urls.push(...data.clients.map((c) => `${baseUrl}${c.url}`));
    }
    if (data.caseStudies) {
      urls.push(...data.caseStudies.map((cs) => `${baseUrl}${cs.url}`));
    }
    if (data.services) {
      urls.push(...data.services.map((s) => `${baseUrl}${s.url}`));
    }

    console.log(`Requesting indexing for ${urls.length} URLs`);

    // Call the indexing API
    const indexingResponse = await fetch(`${baseUrl}/api/request-indexing`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${cronSecret}`,
      },
      body: JSON.stringify({ urls }),
    });

    if (!indexingResponse.ok) {
      const errorText = await indexingResponse.text();
      console.error("Indexing API error:", errorText);
      return NextResponse.json(
        {
          error: "Failed to request indexing",
          details: errorText,
        },
        { status: 500 }
      );
    }

    const result = await indexingResponse.json();

    console.log("Indexing requested successfully:", {
      totalUrls: urls.length,
      googleSuccess: result.google?.summary?.successful || 0,
      indexNowSuccess: result.indexNow?.summary?.successful || 0,
    });

    return NextResponse.json({
      success: true,
      message: "Daily indexing completed",
      urls: urls.length,
      results: result,
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error("Error in daily indexing cron:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
        message: error.message,
      },
      { status: 500 }
    );
  }
}
