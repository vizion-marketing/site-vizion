import { withContentlayer } from "next-contentlayer2";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
      {
        protocol: "https",
        hostname: "placehold.co",
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
