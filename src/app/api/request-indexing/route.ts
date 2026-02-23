import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://by-vizion.com";

interface IndexingResponse {
  success: boolean;
  results: {
    url: string;
    status: "success" | "error";
    message: string;
  }[];
  summary: {
    total: number;
    successful: number;
    failed: number;
  };
}

/**
 * Request indexing for URLs using Google Indexing API
 *
 * Note: Google Indexing API is primarily for JobPosting and BroadcastEvent.
 * For regular pages, submitting sitemap to Search Console is recommended.
 *
 * Setup required:
 * 1. Create service account in Google Cloud Console
 * 2. Enable Google Indexing API
 * 3. Add service account email to Search Console as owner
 * 4. Set GOOGLE_INDEXING_CREDENTIALS env var with service account JSON
 */
async function requestGoogleIndexing(urls: string[]): Promise<IndexingResponse> {
  const results: IndexingResponse["results"] = [];

  try {
    // Check if credentials are configured
    if (!process.env.GOOGLE_INDEXING_CREDENTIALS) {
      return {
        success: false,
        results: urls.map((url) => ({
          url,
          status: "error",
          message: "Google Indexing API not configured. Set GOOGLE_INDEXING_CREDENTIALS env var.",
        })),
        summary: {
          total: urls.length,
          successful: 0,
          failed: urls.length,
        },
      };
    }

    // Parse credentials
    const credentials = JSON.parse(process.env.GOOGLE_INDEXING_CREDENTIALS);

    // Initialize Google Auth
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/indexing"],
    });

    const authClient = await auth.getClient();
    const indexing = google.indexing({ version: "v3", auth: authClient as any });

    // Request indexing for each URL
    for (const url of urls) {
      try {
        await indexing.urlNotifications.publish({
          requestBody: {
            url,
            type: "URL_UPDATED",
          },
        });

        results.push({
          url,
          status: "success",
          message: "Indexing requested successfully",
        });
      } catch (error: any) {
        results.push({
          url,
          status: "error",
          message: error.message || "Failed to request indexing",
        });
      }
    }

    const successful = results.filter((r) => r.status === "success").length;
    const failed = results.filter((r) => r.status === "error").length;

    return {
      success: successful > 0,
      results,
      summary: {
        total: urls.length,
        successful,
        failed,
      },
    };
  } catch (error: any) {
    return {
      success: false,
      results: urls.map((url) => ({
        url,
        status: "error",
        message: error.message || "Failed to initialize Google Indexing API",
      })),
      summary: {
        total: urls.length,
        successful: 0,
        failed: urls.length,
      },
    };
  }
}

/**
 * Submit URLs to IndexNow (Bing, Yandex)
 * Much simpler than Google - just needs an API key
 *
 * Setup:
 * 1. Generate a random API key (e.g., UUID)
 * 2. Create /public/{apikey}.txt with the key as content
 * 3. Set INDEXNOW_KEY env var
 */
async function submitToIndexNow(urls: string[]): Promise<IndexingResponse> {
  const indexNowKey = process.env.INDEXNOW_KEY;

  if (!indexNowKey) {
    return {
      success: false,
      results: urls.map((url) => ({
        url,
        status: "error",
        message: "IndexNow not configured. Set INDEXNOW_KEY env var.",
      })),
      summary: {
        total: urls.length,
        successful: 0,
        failed: urls.length,
      },
    };
  }

  try {
    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        host: new URL(baseUrl).hostname,
        key: indexNowKey,
        keyLocation: `${baseUrl}/${indexNowKey}.txt`,
        urlList: urls,
      }),
    });

    if (response.ok || response.status === 202) {
      return {
        success: true,
        results: urls.map((url) => ({
          url,
          status: "success",
          message: "Submitted to IndexNow",
        })),
        summary: {
          total: urls.length,
          successful: urls.length,
          failed: 0,
        },
      };
    } else {
      const errorText = await response.text();
      return {
        success: false,
        results: urls.map((url) => ({
          url,
          status: "error",
          message: `IndexNow error: ${errorText}`,
        })),
        summary: {
          total: urls.length,
          successful: 0,
          failed: urls.length,
        },
      };
    }
  } catch (error: any) {
    return {
      success: false,
      results: urls.map((url) => ({
        url,
        status: "error",
        message: error.message || "Failed to submit to IndexNow",
      })),
      summary: {
        total: urls.length,
        successful: 0,
        failed: urls.length,
      },
    };
  }
}

export async function POST(request: NextRequest) {
  try {
    // Verify authorization
    const authHeader = request.headers.get("authorization");
    const cronSecret = process.env.CRON_SECRET;

    if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    // Get URLs from request body
    const body = await request.json();
    const urls: string[] = body.urls || [];

    if (!urls.length) {
      return NextResponse.json(
        { error: "No URLs provided" },
        { status: 400 }
      );
    }

    // Submit to both services in parallel
    const [googleResult, indexNowResult] = await Promise.all([
      requestGoogleIndexing(urls),
      submitToIndexNow(urls),
    ]);

    return NextResponse.json({
      google: googleResult,
      indexNow: indexNowResult,
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error("Error requesting indexing:", error);
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}

// Allow GET for testing
export async function GET(request: NextRequest) {
  return NextResponse.json({
    message: "Indexing API endpoint",
    note: "Use POST with URLs array to request indexing",
    example: {
      urls: ["https://by-vizion.com/", "https://by-vizion.com/blog"],
    },
  });
}
