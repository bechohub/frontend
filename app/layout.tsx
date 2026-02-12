import type { Metadata } from "next";
import { Inter, Outfit, Space_Grotesk } from "next/font/google"; // Import Space Grotesk
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bechohub.com'),
  title: {
    default: "bechoHub | India's Premiere B2B Network",
    template: "%s | bechoHub"
  },
  description: "Connect. Trade. Grow. India's leading B2B marketplace connecting verified manufacturers with high-intent buyers. Source smarter, grow faster.",
  keywords: ["B2B Marketplace", "India Manufacturing", "Industrial Goods", "Supply Chain", "Wholesale", "Sourcing", "Factory Direct"],
  authors: [{ name: "bechoHub Team" }],
  creator: "bechoHub",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://bechohub.com",
    title: "bechoHub | India's Premiere B2B Network",
    description: "The all-in-one platform for buyers to source smarter and suppliers to grow faster.",
    siteName: "bechoHub",
    images: [{
      url: "/opengraph-image",
      width: 1200,
      height: 630,
      alt: "bechoHub - India's Premiere B2B Network"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "bechoHub | India's Premiere B2B Network",
    description: "The all-in-one platform for buyers to source smarter and suppliers to grow faster.",
    creator: "@bechohub",
    images: ["/opengraph-image"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import { Analytics } from "@vercel/analytics/react";
import Preloader from "./components/Preloader";
import ClientProtection from "./components/ClientProtection";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} ${spaceGrotesk.variable} antialiased font-sans bg-slate-50 text-slate-900 selection:bg-cyan-200 selection:text-cyan-900`}
        suppressHydrationWarning
      >
        <ClientProtection />
        <Preloader />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
