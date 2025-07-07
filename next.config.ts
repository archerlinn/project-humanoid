import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/humanoid-website',
  assetPrefix: '/humanoid-website/',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
