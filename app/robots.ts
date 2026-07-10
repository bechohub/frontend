import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/api/", "/bechohub-hq-gate-99x/"],
        },
        sitemap: "https://bechohub.com/sitemap.xml",
    };
}
