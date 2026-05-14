"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, LockKeyhole } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function BrowseComingSoon() {
    return (
        <div className="min-h-screen flex flex-col bg-zinc-950 text-[#f0f0fa] font-sans overflow-x-hidden">
            <Navbar />

            <main className="flex-grow flex items-center justify-center relative overflow-hidden pt-28 pb-24">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:2rem_2rem] sm:bg-[size:4rem_4rem]" />

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] sm:w-[800px] sm:h-[800px] bg-cyan-900/5 rounded-full blur-[80px] sm:blur-[150px] pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="relative z-10 text-center max-w-4xl px-4 sm:px-6 flex flex-col items-center w-full"
                >
                    <div className="mb-6 sm:mb-8 relative group">
                        <div className="absolute inset-0 bg-cyan-600 blur-[30px] sm:blur-[50px] opacity-10 group-hover:opacity-30 transition-opacity duration-1000 rounded-full" />
                        <div className="relative p-5 sm:p-6 bg-zinc-900/50 border border-zinc-800/50 rounded-full flex items-center justify-center backdrop-blur-md">
                            <LockKeyhole className="w-8 h-8 sm:w-12 sm:h-12 text-zinc-500" />
                        </div>
                    </div>

                    <div className="inline-flex items-center gap-2 sm:gap-3 border border-zinc-800 bg-zinc-900/50 px-4 py-2 sm:px-5 sm:py-2.5 mb-6 sm:mb-8 uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[8px] sm:text-[10px] text-cyan-600 font-bold backdrop-blur-sm">
                        <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        Access Pending
                    </div>

                    <h1 className="text-[13vw] sm:text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter mb-4 sm:mb-6 text-white leading-[0.85]">
                        Arriving <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-zinc-500 to-zinc-800">
                            Soon.
                        </span>
                    </h1>

                    <p className="text-xs sm:text-sm md:text-base text-zinc-400 font-medium tracking-widest mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed uppercase px-2">
                        The next generation of global B2B trade is preparing for launch. We are finalizing the network
                        to ensure absolute security and liquidity.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full sm:w-auto">
                        <Link
                            href="/"
                            className="group relative inline-flex items-center justify-center px-8 py-4 sm:px-10 sm:py-5 bg-cyan-700 text-white font-bold uppercase tracking-[0.2em] text-[10px] sm:text-xs hover:bg-cyan-600 transition-colors duration-300 w-full sm:w-auto"
                        >
                            <ArrowLeft className="mr-3 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                            Return to Base
                        </Link>
                    </div>
                </motion.div>
            </main>

            <Footer />
        </div>
    );
}
