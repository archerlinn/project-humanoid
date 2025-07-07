import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/project-humanoid',
  assetPrefix: '/project-humanoid/',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
