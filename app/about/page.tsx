"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FadeIn, StaggerContainer, StaggerItem } from "../components/Animators";
import { Zap, Globe, Users, TrendingUp } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-cyan-500/30">
            <Navbar />

            <main className="pt-32 pb-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <FadeIn>
                        <div className="text-center mb-24">
                            <h1 className="text-5xl md:text-8xl font-black tracking-tightest uppercase mb-8">
                                Scaling <span className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-indigo-600">Indian</span> <br />
                                Trade.
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
                                We are building the digital infrastructure for the next billion manufacturers in India. Our mission is to eliminate the friction in B2B trade.
                            </p>
                        </div>
                    </FadeIn>

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                        <StaggerItem className="p-8 md:p-12 rounded-[32px] md:rounded-[48px] bg-white/[0.03] border border-white/5">
                            <Zap className="h-12 w-12 text-cyan-400 mb-8" />
                            <h2 className="text-3xl font-bold mb-6 tracking-tight">The Vision.</h2>
                            <p className="text-slate-400 leading-relaxed text-lg font-light">
                                For too long, Indian manufacturers have been limited by local networks. We are breaking those boundaries by providing a hyper-verified, high-speed digital bridge to high-intent buyers globally and domestically.
                            </p>
                        </StaggerItem>
                        <StaggerItem className="p-8 md:p-12 rounded-[32px] md:rounded-[48px] bg-white/[0.03] border border-white/5">
                            <Globe className="h-12 w-12 text-indigo-400 mb-8" />
                            <h2 className="text-3xl font-bold mb-6 tracking-tight">The Ecosystem.</h2>
                            <p className="text-slate-400 leading-relaxed text-lg font-light">
                                bechoHub isn't just a directory; it's a trade OS. We handle everything from discovery and verification to secure escrow payments and quality-controlled logistics.
                            </p>
                        </StaggerItem>
                    </StaggerContainer>

                    <FadeIn>
                        <div className="bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 rounded-[32px] md:rounded-[64px] px-6 py-16 md:p-24 border border-white/5 relative overflow-hidden text-center mb-40">
                            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
                            <h2 className="text-4xl md:text-6xl font-black tracking-tightest uppercase mb-20 relative z-10">The <span className="text-cyan-400">Founders.</span></h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10 max-w-4xl mx-auto">
                                <div className="group">
                                    <div className="aspect-[4/5] rounded-[24px] overflow-hidden mb-8 border border-white/10 group-hover:border-white/20 transition-all shadow-2xl">
                                        <img
                                            src="/founders/founder1.png"
                                            alt="Founder 1"
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
                                        />
                                    </div>
                                    <h4 className="text-2xl font-black uppercase tracking-tighter mb-2">Founder A</h4>
                                    <p className="text-slate-500 text-xs font-black uppercase tracking-[0.2em] mb-4">Co-Founder • Product</p>
                                    <p className="text-slate-400 text-lg font-light leading-relaxed">"Solving the trust gap for Bharat's manufacturers."</p>
                                </div>
                                <div className="group">
                                    <div className="aspect-[4/5] rounded-[24px] overflow-hidden mb-8 border border-white/10 group-hover:border-white/20 transition-all shadow-2xl">
                                        <img
                                            src="/founders/founder2.png"
                                            alt="Founder 2"
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
                                        />
                                    </div>
                                    <h4 className="text-2xl font-black uppercase tracking-tighter mb-2">Founder B</h4>
                                    <p className="text-slate-500 text-xs font-black uppercase tracking-[0.2em] mb-4">Co-Founder • Strategy</p>
                                    <p className="text-slate-400 text-lg font-light leading-relaxed">"Building the trade operating system for the world."</p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    <div className="mt-40 text-center">
                        <FadeIn>
                            <h3 className="text-2xl font-bold mb-8 uppercase tracking-widest">Join the Future</h3>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="px-10 py-5 bg-white text-slate-950 rounded-full font-black uppercase tracking-widest hover:bg-slate-200 transition-all active:scale-95 shadow-2xl shadow-white/10">
                                    Become a Buyer
                                </button>
                                <button className="px-10 py-5 bg-slate-900 text-white border border-white/10 rounded-full font-black uppercase tracking-widest hover:bg-slate-800 transition-all active:scale-95">
                                    Partner as Supplier
                                </button>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
