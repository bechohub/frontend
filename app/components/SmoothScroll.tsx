"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const lenis = useLenis();

    useEffect(() => {
        // Force scroll to top instantly on every route change
        if (lenis) {
            lenis.scrollTo(0, { immediate: true });
        }
    }, [pathname, lenis]);

    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.0, smoothWheel: true, syncTouch: false }}>
            {children}
        </ReactLenis>
    );
}
