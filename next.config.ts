import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Flower-Shop",
  images: {
    unoptimized: true,
  },
  devIndicators: false,
};

export default nextConfig;
