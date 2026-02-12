import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
                heading: ["var(--font-outfit)", "sans-serif"],
                space: ["var(--font-space)", "sans-serif"],
            },
            colors: {
                slate: {
                    850: "#151f32", // Custom premium slate
                }
            }
        },
    },
    plugins: [],
};
export default config;
