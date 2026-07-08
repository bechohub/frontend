"use client";

import Link from "next/link";
import { Package } from "lucide-react";
import { FadeIn } from "../Animators";

export const RFQBanner = () => {
    return (
        <FadeIn delay={0.1}>
            <div className="border border-zinc-800 bg-zinc-900/50 p-8 md:p-12 mb-16 flex flex-col md:flex-row items-center justify-between text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-900/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-cyan-900/20 transition-colors" />
                <div className="mb-8 md:mb-0 relative z-10">
                    <h2 className="text-3xl md:text-5xl font-black mb-4 flex items-center gap-4 tracking-tighter uppercase text-white">
                        <Package className="h-8 w-8 text-cyan-600" /> Unknown Entity?
                    </h2>
                    <p className="text-zinc-400 font-bold uppercase tracking-widest text-sm">
                        Post an RFQ. Verified manufacturers will contact you instantly.
                    </p>
                </div>
                <Link
                    href="/rfq"
                    className="relative z-10 bg-cyan-700 text-white px-10 py-5 font-black text-xs uppercase tracking-[0.2em] hover:bg-cyan-600 transition-colors border-t border-cyan-500/50"
                >
                    Initiate RFQ
                </Link>
            </div>
        </FadeIn>
    );
};
