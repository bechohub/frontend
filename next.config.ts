import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false, // Hides "X-Powered-By: Next.js" header
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-DNS-Prefetch-Control',
          value: 'on'
        },
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=63072000; includeSubDomains; preload'
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block' // Stops pages from loading when they detect reflected XSS attacks
        },
        {
          key: 'X-Frame-Options',
          value: 'SAMEORIGIN' // Prevents clickjacking (iframe embedding)
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff' // Prevents MIME-sniffing
        },
        {
          key: 'Referrer-Policy',
          value: 'origin-when-cross-origin'
        }
      ]
    }
  ],
  experimental: {
    // @ts-expect-error - turbopack root is a valid config but missing from types
    turbopack: {
      root: process.cwd(),
    },
  },
};

export default nextConfig;
