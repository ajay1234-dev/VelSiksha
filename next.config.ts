import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize images for production
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    unoptimized: process.env.NODE_ENV === "development",
  },

  // Production optimizations
  productionBrowserSourceMaps: false,
  poweredByHeader: false,

  // Vercel-specific optimizations
  compress: true,

  // Prevent workspace conflicts
  transpilePackages: [],

  // Optimize module resolution
  experimental: {
    optimizePackageImports: ["framer-motion", "lucide-react"],
  },
};

export default nextConfig;
