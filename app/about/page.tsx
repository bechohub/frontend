"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FadeIn, StaggerContainer, StaggerItem } from "../components/Animators";
import { Zap, Globe, Users, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-zinc-950 text-[#f0f0fa] font-sans selection:bg-cyan-600/30 selection:text-white">
            <Navbar />

            <main className="pt-32 md:pt-48 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <FadeIn>
                        <div className="text-center mb-32">
                            <span className="text-xs font-black uppercase tracking-[0.4em] text-cyan-600 mb-6 block">
                                Our Mission
                            </span>
                            <h1 className="text-6xl md:text-8xl lg:text-[120px] font-black tracking-tighter uppercase mb-12 text-white leading-[0.85]">
                                The Engine <br />
                                <span className="text-cyan-600">of Trade.</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto font-medium tracking-wide uppercase leading-snug">
                                We are building the heavy-duty digital infrastructure for verified manufacturers.
                                Accelerating B2B trade with absolute trust.
                            </p>
                        </div>
                    </FadeIn>

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-900 border border-zinc-900 mb-40">
                        <StaggerItem className="p-10 md:p-16 bg-zinc-950 hover:bg-zinc-900 transition-colors duration-500 relative group">
                            <div className="h-16 w-16 bg-zinc-900 flex items-center justify-center text-zinc-500 mb-10 border border-zinc-800 group-hover:text-cyan-500 group-hover:border-cyan-900 transition-colors">
                                <Zap className="h-8 w-8" />
                            </div>
                            <h2 className="text-4xl font-black tracking-wider uppercase mb-6 text-white group-hover:text-cyan-500 transition-colors">
                                The Protocol.
                            </h2>
                            <p className="text-zinc-500 leading-relaxed text-sm font-medium tracking-wide">
                                For too long, industrial trade has been limited by inefficient sourcing networks. We
                                provide a hyper-verified digital bridge bypassing middlemen, routing high-intent POs
                                directly to manufacturers.
                            </p>
                        </StaggerItem>
                        <StaggerItem className="p-10 md:p-16 bg-zinc-950 hover:bg-zinc-900 transition-colors duration-500 relative group">
                            <div className="h-16 w-16 bg-zinc-900 flex items-center justify-center text-zinc-500 mb-10 border border-zinc-800 group-hover:text-cyan-500 group-hover:border-cyan-900 transition-colors">
                                <Globe className="h-8 w-8" />
                            </div>
                            <h2 className="text-4xl font-black tracking-wider uppercase mb-6 text-white group-hover:text-cyan-500 transition-colors">
                                Global Scope.
                            </h2>
                            <p className="text-zinc-500 leading-relaxed text-sm font-medium tracking-wide">
                                bechoHub represents a comprehensive trade OS. Handling verification, secure escrow
                                payments, and structured logistics to guarantee execution on a global scale.
                            </p>
                        </StaggerItem>
                    </StaggerContainer>

                    <FadeIn>
                        <div className="bg-zinc-900 px-6 py-24 md:p-32 border-y border-zinc-900 relative overflow-hidden text-center mb-40">
                            <h2 className="text-5xl md:text-7xl lg:text-[100px] font-black tracking-tighter uppercase mb-20 relative z-10 text-white leading-[0.85]">
                                Built for <br />
                                <span className="text-cyan-600">Scale.</span>
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
                                <div className="border-b md:border-b-0 md:border-r border-zinc-800 pb-12 md:pb-0">
                                    <div className="text-6xl md:text-8xl font-black text-white mb-4 tracking-tighter">
                                        24<span className="text-cyan-600">K</span>
                                    </div>
                                    <div className="text-xs font-black uppercase tracking-[0.3em] text-zinc-500">
                                        Verified Sellers
                                    </div>
                                </div>
                                <div className="border-b md:border-b-0 md:border-r border-zinc-800 pb-12 md:pb-0">
                                    <div className="text-6xl md:text-8xl font-black text-white mb-4 tracking-tighter">
                                        100<span className="text-cyan-600">Cr+</span>
                                    </div>
                                    <div className="text-xs font-black uppercase tracking-[0.3em] text-zinc-500">
                                        Trade Volume
                                    </div>
                                </div>
                                <div>
                                    <div className="text-6xl md:text-8xl font-black text-white mb-4 tracking-tighter">
                                        150<span className="text-cyan-600">+</span>
                                    </div>
                                    <div className="text-xs font-black uppercase tracking-[0.3em] text-zinc-500">
                                        Industry Lanes
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    <div className="text-center mb-20">
                        <FadeIn>
                            <span className="text-xs font-black uppercase tracking-[0.4em] text-cyan-600 mb-8 block">
                                Initialize Protocol
                            </span>
                            <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-12 text-white">
                                Ready for <br /> Deployment?
                            </h3>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <Link
                                    href="/signup?type=buyer"
                                    className="group inline-flex items-center justify-center px-12 py-6 bg-cyan-700 text-white font-black uppercase tracking-[0.2em] text-sm hover:bg-cyan-600 transition-colors duration-300"
                                >
                                    Start Sourcing
                                    <ArrowRight className="ml-4 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    href="/signup?type=seller"
                                    className="group inline-flex items-center justify-center px-12 py-6 bg-transparent border border-zinc-800 text-white font-black uppercase tracking-[0.2em] text-sm hover:border-white transition-colors duration-300"
                                >
                                    Join Network
                                </Link>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
