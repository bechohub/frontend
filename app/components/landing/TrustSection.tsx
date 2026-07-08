"use client";

import { ShieldCheck, CheckCircle2, Key, FastForward } from "lucide-react";
import { FadeIn } from "./FadeIn";

export const TrustSection = () => {
    return (
        <section className="py-24 bg-zinc-950 border-y border-zinc-900 relative z-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <FadeIn>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-4 text-white">
                            Every Business is <span className="text-zinc-600">Verified.</span>
                            <br />
                            Every Deal is <span className="text-zinc-600">Protected.</span>
                        </h2>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                        {
                            icon: ShieldCheck,
                            title: "Verified Suppliers",
                            desc: "Rigorous KYC & active verification. No shell companies.",
                        },
                        {
                            icon: CheckCircle2,
                            title: "Verified Buyers",
                            desc: "High intent, financially vetted procurement teams.",
                        },
                        {
                            icon: Key,
                            title: "Secure Escrow",
                            desc: "Your capital is locked safely until fulfillment.",
                        },
                        {
                            icon: FastForward,
                            title: "Faster Closures",
                            desc: "From RFQ to PO in days, not months. Zero friction.",
                        },
                    ].map((item, i) => (
                        <FadeIn key={i} delay={i * 0.1} className="h-full">
                            <div className="h-full p-8 border border-zinc-800 bg-zinc-900/30 flex flex-col items-start hover:bg-zinc-900/50 hover:border-zinc-700 transition-all duration-300">
                                <div className="p-3 bg-cyan-950/30 border border-cyan-900/30 mb-6 group-hover:bg-cyan-900/50 transition-colors">
                                    <item.icon className="h-8 w-8 text-cyan-600" />
                                </div>
                                <h3 className="text-lg font-black uppercase tracking-widest mb-4 text-white">
                                    {item.title}
                                </h3>
                                <p className="text-zinc-500 font-medium text-sm tracking-wide leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};
