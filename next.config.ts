import { withContentlayer } from "next-contentlayer2";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Headers de sécurité
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
  // Optimisations de performance
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
    ],
    // Pour export statique, décommenter la ligne suivante :
    // unoptimized: true,
  },
  // Pour export statique (Netlify, GitHub Pages, etc.), décommenter :
  // output: "export",
  // trailingSlash: true,
  // Configuration Turbopack (Next.js 16+)
  turbopack: {},
  // Optimisations de production
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
    optimizeCss: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default withContentlayer(nextConfig);
