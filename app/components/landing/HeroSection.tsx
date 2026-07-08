"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, MotionValue } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const HeroSection = ({
    heroY,
    heroOpacity,
}: {
    heroY: MotionValue<string>;
    heroOpacity: MotionValue<number>;
}) => {
    return (
        <section className="relative h-screen w-full flex items-center overflow-hidden bg-zinc-950">
            <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 z-0">
                <Image
                    src="/images/hero_industrial.png"
                    alt="Industrial scale B2B trade"
                    fill
                    className="object-cover opacity-30 mix-blend-luminosity grayscale"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent" />
            </motion.div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-start mt-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="inline-block border border-zinc-800 bg-zinc-900/50 px-4 py-2 mb-8 uppercase tracking-[0.3em] text-xs text-cyan-600 font-bold backdrop-blur-sm">
                        Next-Gen B2B Trade Engine
                    </div>
                    <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[110px] font-black tracking-tighter leading-[0.85] uppercase mb-8 max-w-6xl text-white">
                        Close Real Deals.
                        <br />
                        <span className="text-cyan-700">Not Just Leads.</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-zinc-400 max-w-2xl font-medium tracking-widest mb-12 uppercase leading-snug">
                        Verified buyers. Trusted suppliers. Secure transactions.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6">
                        <Link
                            href="/signup?role=seller"
                            className="group relative inline-flex items-center justify-center px-10 py-5 bg-cyan-700 text-white font-bold uppercase tracking-[0.2em] text-sm hover:bg-cyan-600 transition-colors duration-300"
                        >
                            Become a Supplier
                            <ArrowRight className="ml-4 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
