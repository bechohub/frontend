"use client";

import Link from "next/link";
import { ArrowLeft, SearchX, Home } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
            {/* Background elements to match the industrial theme */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="max-w-md w-full relative z-10"
            >
                <div className="flex justify-center mb-8">
                    <div className="h-24 w-24 bg-zinc-900 rounded-3xl shadow-2xl flex items-center justify-center rotate-3 border border-zinc-800">
                        <SearchX className="h-10 w-10 text-cyan-500" strokeWidth={1.5} />
                    </div>
                </div>

                <h1 className="text-8xl font-black tracking-tighter mb-4 select-none bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-600">
                    404
                </h1>

                <h2 className="text-xl font-black text-white mb-4 uppercase tracking-widest">Sector Not Found</h2>

                <p className="text-zinc-400 mb-10 leading-relaxed font-bold tracking-widest text-[10px] uppercase">
                    The supply route you are looking for has been disconnected or never existed in our manifest.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center px-8 py-3.5 bg-cyan-600 text-white font-black text-xs uppercase tracking-widest hover:bg-cyan-500 transition-all active:scale-95 gap-2"
                    >
                        <Home className="h-4 w-4" />
                        Return to Hub
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center justify-center px-8 py-3.5 bg-zinc-900 text-zinc-300 border border-zinc-800 font-black text-xs uppercase tracking-widest hover:bg-zinc-800 hover:text-white transition-all active:scale-95 gap-2"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Go Back
                    </button>
                </div>
            </motion.div>

            {/* Footer Branding */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-800 font-black text-xs uppercase tracking-[0.3em] select-none">
                bechoHub
            </div>
        </div>
    );
}
