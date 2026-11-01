import type { NextConfig } from "next";

// PREVIEW=1 : export statique avec chemins relatifs, pour un aperçu hébergé hors Vercel.
const preview = process.env.PREVIEW === "1";

const nextConfig: NextConfig = preview
  ? { output: "export", assetPrefix: "/__ASSET__", images: { unoptimized: true } }
  : {};

export default nextConfig;
