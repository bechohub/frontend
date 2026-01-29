import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // @ts-expect-error - turbopack root is a valid config but missing from types
    turbopack: {
      root: process.cwd(),
    },
  },
};

export default nextConfig;
