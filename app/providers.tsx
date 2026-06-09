"use client";

import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import React from "react";

if (typeof window !== "undefined") {
    const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST;

    if (posthogKey && posthogHost) {
        posthog.init(posthogKey, {
            api_host: posthogHost,
            person_profiles: "identified_only", // or 'always' to create profiles for anonymous users as well
            capture_pageview: false, // Disable automatic pageview capture, as we will use a hook (custom hook recommended for Next.js app router)
        });
    }
}

export function PHProvider({ children }: { children: React.ReactNode }) {
    return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
