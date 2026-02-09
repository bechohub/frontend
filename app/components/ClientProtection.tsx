"use client";

import { useEffect } from "react";

export default function ClientProtection() {
    useEffect(() => {
        // 1. Disable Right Click
        const handleContextMenu = (e: MouseEvent) => {
            e.preventDefault();
        };

        // 2. Disable Keyboard Shortcuts (F12, Cmd+Opt+I, Ctrl+Shift+I, etc.)
        const handleKeyDown = (e: KeyboardEvent) => {
            // F12
            if (e.key === "F12") {
                e.preventDefault();
            }

            // Ctrl+Shift+I (Inspect) or Cmd+Option+I (Mac)
            if ((e.ctrlKey && e.shiftKey && e.key === "I") || (e.metaKey && e.altKey && e.key === "i")) {
                e.preventDefault();
            }

            // Ctrl+Shift+C (Inspect Element) or Cmd+Shift+C (Mac)
            if ((e.ctrlKey && e.shiftKey && e.key === "C") || (e.metaKey && e.shiftKey && e.key === "c")) {
                e.preventDefault();
            }

            // Ctrl+Shift+J (Console) or Cmd+Option+J (Mac)
            if ((e.ctrlKey && e.shiftKey && e.key === "J") || (e.metaKey && e.altKey && e.key === "j")) {
                e.preventDefault();
            }

            // Ctrl+U (View Source) or Cmd+Option+U (Mac)
            if ((e.ctrlKey && e.key === "u") || (e.metaKey && e.altKey && e.key === "u")) {
                e.preventDefault();
            }
        };

        document.addEventListener("contextmenu", handleContextMenu);
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("contextmenu", handleContextMenu);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return null; // This component renders nothing visually
}
