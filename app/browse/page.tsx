"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Factory, Globe, ShieldCheck, Zap, ArrowRight, Star, Users2, Sparkles } from "lucide-react";
import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from "../components/Animators";
import Link from "next/link";

export default function BrowseSuppliers() {
    const industrialGlimpse = [
        { name: "Electronics & Tech", icon: <Zap className="h-5 w-5" />, count: "42+ Manufacturers Enrolling" },
        { name: "Textiles & Apparel", icon: <Users2 className="h-5 w-5" />, count: "120+ Clusters Mapping" },
        { name: "Raw Materials", icon: <Factory className="h-5 w-5" />, count: "85+ Verified Bulk Suppliers" },
        { name: "Industrial Components", icon: <ShieldCheck className="h-5 w-5" />, count: "60+ Precision Units Joining" }
    ];

    return (
        <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-cyan-100 selection:text-cyan-950 overflow-x-hidden">
            <Navbar />

            {/* Background Ambience */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
                <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-50/50 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-50/50 rounded-full blur-[120px]" />
            </div>

            <main className="pt-40 pb-32">
                <div className="mx-auto max-w-7xl px-6">
                    {/* Coming Soon Hero */}
                    <div className="text-center mb-24 max-w-6xl mx-auto">
                        <FadeIn>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 mb-8 pointer-events-none">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-600"></span>
                                </span>
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">Under Construction</span>
                            </div>

                            <h1 className="text-5xl md:text-8xl lg:text-[120px] font-black tracking-tightest uppercase mb-8 leading-[0.9] text-slate-950">
                                The Marketplace <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-700">is Awakening.</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-500 font-light max-w-2xl mx-auto mb-12">
                                We are currently auditing and onboarding India's most elite manufacturers.
                                The vault opens soon.
                            </p>

                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link
                                    href="/signup"
                                    className="px-12 py-5 bg-slate-950 text-white rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-slate-800 transition-all active:scale-95 shadow-2xl shadow-slate-200"
                                >
                                    Join the Waitlist
                                </Link>
                                <button className="px-12 py-5 bg-white text-slate-950 border border-slate-200 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                                    Explore Road-map <ArrowRight className="h-4 w-4" />
                                </button>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Industrial Sneak Peek */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <StaggerContainer className="contents">
                            {industrialGlimpse.map((item, idx) => (
                                <StaggerItem key={idx}>
                                    <div className="group p-8 rounded-[40px] bg-slate-50 border border-slate-100 hover:bg-white hover:border-cyan-200 hover:shadow-2xl hover:shadow-cyan-500/5 transition-all duration-500 relative overflow-hidden h-full">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-100/20 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-cyan-200/30 transition-all" />

                                        <div className="h-14 w-14 rounded-2xl bg-white flex items-center justify-center text-slate-950 mb-8 border border-slate-100 group-hover:bg-cyan-600 group-hover:text-white transition-all shadow-sm">
                                            {item.icon}
                                        </div>

                                        <h3 className="text-xl font-black mb-2 text-slate-950">{item.name}</h3>
                                        <p className="text-sm text-slate-500 font-light flex items-center gap-2">
                                            <Sparkles className="h-3 w-3 text-cyan-600 animate-pulse" />
                                            {item.count}
                                        </p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* Bottom Utility Strip */}
                    <FadeIn delay={0.4} className="mt-20 pt-16 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-2">Network Status</p>
                            <div className="flex items-center gap-3">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-slate-200" />
                                    ))}
                                </div>
                                <span className="text-sm font-bold text-slate-700">850+ Businesses Waiting</span>
                            </div>
                        </div>
                        <div className="flex gap-12">
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-2">Verification Pipeline</p>
                                <p className="text-xl font-black text-slate-950 uppercase">72 Factories</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-2">Next Update In</p>
                                <p className="text-xl font-black text-slate-950 uppercase">48 Hours</p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </main>

            <Footer />
        </div>
    );
}

