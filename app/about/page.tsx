"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FadeIn, StaggerContainer, StaggerItem } from "../components/Animators";
import { Zap, Globe, Users, TrendingUp } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white text-slate-950 font-sans selection:bg-cyan-500/10">
            <Navbar />

            <main className="pt-32 md:pt-48 pb-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <FadeIn>
                        <div className="text-center mb-32">
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-600 mb-6 block">Our Mission</span>
                            <h1 className="text-5xl md:text-8xl font-black tracking-tightest uppercase mb-12 text-slate-950 leading-[0.85]">
                                Scaling <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-600 to-indigo-700">Indian</span> <br />
                                Trade.
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto font-light leading-relaxed">
                                We are building the digital infrastructure for the next billion manufacturers in India. Our mission is to eliminate the friction in B2B trade.
                            </p>
                        </div>
                    </FadeIn>

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-40">
                        <StaggerItem className="p-10 md:p-16 rounded-[48px] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500">
                            <div className="h-14 w-14 rounded-2xl bg-cyan-50 flex items-center justify-center text-cyan-600 mb-10 border border-cyan-100">
                                <Zap className="h-7 w-7" />
                            </div>
                            <h2 className="text-3xl font-black tracking-tight uppercase mb-6 text-slate-950">The Vision.</h2>
                            <p className="text-slate-500 leading-relaxed text-lg font-light">
                                For too long, Indian manufacturers have been limited by local networks. We are breaking those boundaries by providing a hyper-verified digital bridge to high-intent buyers globally.
                            </p>
                        </StaggerItem>
                        <StaggerItem className="p-10 md:p-16 rounded-[48px] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500">
                            <div className="h-14 w-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-10 border border-indigo-100">
                                <Globe className="h-7 w-7" />
                            </div>
                            <h2 className="text-3xl font-black tracking-tight uppercase mb-6 text-slate-950">The Ecosystem.</h2>
                            <p className="text-slate-500 leading-relaxed text-lg font-light">
                                bechoHub represents a trade OS. We handle everything from discovery and verification to secure escrow payments and quality-controlled logistics.
                            </p>
                        </StaggerItem>
                    </StaggerContainer>

                    <FadeIn>
                        <div className="bg-slate-950 rounded-[48px] md:rounded-[80px] px-6 py-20 md:p-32 relative overflow-hidden text-center mb-40 shadow-2xl shadow-slate-200">
                            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />
                            <h2 className="text-4xl md:text-7xl font-black tracking-tightest uppercase mb-20 relative z-10 text-white leading-none">Built for <br /><span className="text-cyan-400">Industry Scale.</span></h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
                                <div>
                                    <div className="text-5xl font-black text-white mb-3 tracking-tighter">24K+</div>
                                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Verified Sellers</div>
                                </div>
                                <div>
                                    <div className="text-5xl font-black text-white mb-3 tracking-tighter">100Cr+</div>
                                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Trade Volume</div>
                                </div>
                                <div>
                                    <div className="text-5xl font-black text-white mb-3 tracking-tighter">150+</div>
                                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Industry Lanes</div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    <div className="text-center mb-20">
                        <FadeIn>
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-600 mb-8 block">Join the Future</span>
                            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tightest mb-12 text-slate-950">Ready to <br /> scale?</h3>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <button className="px-12 py-6 bg-slate-950 text-white rounded-full font-black uppercase tracking-widest text-xs hover:bg-slate-800 transition-all active:scale-95 shadow-2xl">
                                    Become a Buyer
                                </button>
                                <button className="px-12 py-6 bg-white text-slate-950 border-2 border-slate-950 rounded-full font-black uppercase tracking-widest text-xs hover:bg-slate-50 transition-all active:scale-95">
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
