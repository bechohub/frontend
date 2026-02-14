"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FadeIn, StaggerContainer, StaggerItem, TextScramble, Magnetic } from "../components/Animators";
import {
    Factory,
    Truck,
    ShieldCheck,
    Zap,
    ArrowRight,
    Target,
    Sparkles,
    Shield,
    Globe2,
    Cpu
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HowItWorksPage() {
    return (
        <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-cyan-100 selection:text-cyan-950 overflow-x-hidden">
            <Navbar />

            {/* Ambient Backgrounds */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-50/40 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-50/40 rounded-full blur-[120px]" />
            </div>

            <main className="pt-24 md:pt-64 pb-20 md:pb-32">
                {/* Hero section - Cinematic Narrative */}
                <section className="px-6 relative mb-20 md:mb-40 lg:mb-48">
                    <div className="max-w-7xl mx-auto text-center relative z-10">
                        <FadeIn>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 mb-10">
                                <Sparkles className="h-4 w-4 text-cyan-600" />
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">Our Manifest</span>
                            </div>

                            <h1 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tightest mb-12 uppercase leading-[0.85] text-slate-950">
                                Trade is <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-700">
                                    <TextScramble text="Evolution." delay={0.5} />
                                </span>
                            </h1>
                            <p className="text-xl md:text-3xl text-slate-500 max-w-3xl mx-auto font-light leading-relaxed mb-16">
                                We're not just a marketplace. We're a technology protocol built to accelerate the Indian manufacturing renaissance.
                            </p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 1 }}
                                className="flex justify-center"
                            >
                                <div className="h-24 w-px bg-gradient-to-b from-cyan-500 to-transparent" />
                            </motion.div>
                        </FadeIn>
                    </div>
                </section>

                {/* The Unified Protocol Matrix - Sharp, Technical, Compact */}
                <section className="px-6 max-w-7xl mx-auto">
                    <FadeIn>
                        <div className="border border-slate-200 rounded-[32px] overflow-hidden bg-white shadow-2xl shadow-slate-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

                            {/* Cell 1: Direct Access */}
                            <div className="p-10 border-b md:border-r border-slate-100 hover:bg-slate-50 transition-colors group">
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-600 mb-8 block">01 / Source</span>
                                <h3 className="text-3xl font-black tracking-tighter uppercase mb-4 text-slate-950 leading-[0.9]">Straight to <br /> Factory.</h3>
                                <p className="text-slate-500 text-sm font-light leading-relaxed">
                                    No middlemen. We connect your order directly to the factory floor for the best price.
                                </p>
                            </div>

                            {/* Cell 2: 3-Tier Audit */}
                            <div className="p-10 border-b lg:border-r border-slate-100 hover:bg-slate-50 transition-colors group">
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-600 mb-8 block">02 / Trust</span>
                                <h3 className="text-3xl font-black tracking-tighter uppercase mb-4 text-slate-950 leading-[0.9]">Fully <br /> Checked.</h3>
                                <p className="text-slate-500 text-sm font-light leading-relaxed">
                                    We physically audit every factory to ensure they can deliver exactly what they promise.
                                </p>
                            </div>

                            {/* Cell 3: Secure Escrow */}
                            <div className="p-10 border-b md:border-r border-slate-100 hover:bg-slate-50 transition-colors group">
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-600 mb-8 block">03 / Security</span>
                                <h3 className="text-3xl font-black tracking-tighter uppercase mb-4 text-slate-950 leading-[0.9]">Safe <br /> Payments.</h3>
                                <p className="text-slate-500 text-sm font-light leading-relaxed">
                                    We hold your money safely and only pay the factory after our team verifies the quality.
                                </p>
                            </div>

                            {/* Cell 4: Legal Shield */}
                            <div className="p-10 border-b border-slate-100 hover:bg-slate-50 transition-colors group">
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-900 mb-8 block">04 / Law</span>
                                <h3 className="text-3xl font-black tracking-tighter uppercase mb-4 text-slate-950 leading-[0.9]">Real <br /> Contracts.</h3>
                                <p className="text-slate-500 text-sm font-light leading-relaxed">
                                    Every trade is protected by strong legal contracts under Indian commercial jurisdiction.
                                </p>
                            </div>

                            {/* Full Width Metric Row */}
                            <div className="lg:col-span-4 bg-slate-950 p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
                                <div className="flex-1 text-center md:text-left">
                                    <h4 className="text-3xl md:text-5xl font-black tracking-tightest uppercase leading-none mb-4">Scale from Bharat.</h4>
                                    <p className="text-slate-400 font-light text-sm max-w-md">Empowering 63M+ MSMEs to compete on the global stage.</p>
                                </div>
                                <div className="flex gap-8 md:gap-16 border-l border-white/10 pl-8 md:pl-16 hidden md:flex">
                                    <div>
                                        <div className="text-2xl font-black text-cyan-400 tracking-tight">100%</div>
                                        <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Verified</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-black text-indigo-400 tracking-tight">Zero</div>
                                        <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Middlemen</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-black text-fuchsia-400 tracking-tight">Iron</div>
                                        <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Escrow</div>
                                    </div>
                                </div>
                                <Link href="/signup" className="px-10 py-5 bg-white text-slate-950 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-cyan-400 transition-all shadow-xl whitespace-nowrap">
                                    Join Beta
                                </Link>
                            </div>
                        </div>
                    </FadeIn>
                </section>

                {/* Become part of the story */}
                <section className="mt-32 md:mt-64 px-6 overflow-hidden">
                    <FadeIn>
                        <div className="max-w-6xl mx-auto px-6 py-20 md:p-32 rounded-[32px] md:rounded-[64px] bg-slate-950 text-white text-center relative overflow-hidden group">
                            {/* Animated Background Sparks */}
                            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-500/10 blur-[150px] -z-10 group-hover:bg-cyan-500/20 transition-all duration-1000" />

                            <h2 className="text-5xl md:text-8xl lg:text-[100px] font-black tracking-tightest uppercase mb-16 leading-[0.85]">
                                Become part <br /> of the story.
                            </h2>

                            <div className="flex justify-center">
                                <Magnetic intensity={0.2}>
                                    <Link
                                        href="/signup"
                                        className="px-16 py-6 bg-white text-slate-950 rounded-full font-black text-sm uppercase tracking-[0.2em] hover:bg-cyan-400 transition-all active:scale-95 shadow-2xl block"
                                    >
                                        Join the Protocol
                                    </Link>
                                </Magnetic>
                            </div>
                        </div>
                    </FadeIn>
                </section>
            </main>

            <Footer />
        </div>
    );
}
