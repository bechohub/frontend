import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
            {
                protocol: "https",
                hostname: "images.pexel.com",
            },
            {
                protocol: "https",
                hostname: "plus.unsplash.com",
            },
        ],
    },
    poweredByHeader: false, // Hides "X-Powered-By: Next.js" header
    headers: async () => [
        {
            source: "/:path*",
            headers: [
                {
                    key: "X-DNS-Prefetch-Control",
                    value: "on",
                },
                {
                    key: "Strict-Transport-Security",
                    value: "max-age=63072000; includeSubDomains; preload",
                },
                {
                    key: "X-XSS-Protection",
                    value: "1; mode=block", // Stops pages from loading when they detect reflected XSS attacks
                },
                {
                    key: "X-Frame-Options",
                    value: "SAMEORIGIN", // Prevents clickjacking (iframe embedding)
                },
                {
                    key: "X-Content-Type-Options",
                    value: "nosniff", // Prevents MIME-sniffing
                },
                {
                    key: "Referrer-Policy",
                    value: "origin-when-cross-origin",
                },
            ],
        },
        {
            source: "/profile/:path*",
            headers: [
                {
                    key: "Cache-Control",
                    value: "no-store, max-age=0",
                },
            ],
        },
        {
            source: "/seller/:path*",
            headers: [
                {
                    key: "Cache-Control",
                    value: "no-store, max-age=0",
                },
            ],
        },
        {
            source: "/admin/:path*",
            headers: [
                {
                    key: "Cache-Control",
                    value: "no-store, max-age=0",
                },
            ],
        },
        {
            source: "/rfq/:path*",
            headers: [
                {
                    key: "Cache-Control",
                    value: "no-store, max-age=0",
                },
            ],
        },
    ],
};

export default nextConfig;
