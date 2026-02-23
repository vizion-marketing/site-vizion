import { NextRequest, NextResponse } from "next/server";
import { allPosts, allServices, allCaseStudies } from "contentlayer/generated";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://by-vizion.com";

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

    // Collect all URLs from sitemap
    const urls: string[] = [];

    // Static pages
    const staticRoutes = [
      "",
      "/blog",
      "/contact",
      "/cas-clients",
    ];

    urls.push(...staticRoutes.map((route) => `${baseUrl}${route}`));

    // Blog posts
    const blogUrls = allPosts
      .filter((post) => !post.draft && !post._raw.sourceFileName.startsWith("_"))
      .map((post) => `${baseUrl}${post.url}`);

    urls.push(...blogUrls);

    // Service pages
    const serviceUrls = allServices.map((service) => `${baseUrl}${service.url}`);
    urls.push(...serviceUrls);

    // Case studies
    const caseStudyUrls = allCaseStudies
      .filter((cs) => !cs._raw.sourceFileName.startsWith("_"))
      .map((cs) => `${baseUrl}${cs.url}`);

    urls.push(...caseStudyUrls);

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
