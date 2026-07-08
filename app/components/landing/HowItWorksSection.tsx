"use client";

import { FadeIn } from "./FadeIn";

export const HowItWorksSection = () => {
    return (
        <section className="py-32 bg-zinc-950">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* For Buyers */}
                    <FadeIn>
                        <div className="space-y-12">
                            <div className="border-b-2 border-zinc-900 pb-8">
                                <div className="text-cyan-700 text-sm font-black tracking-[0.3em] uppercase mb-4">
                                    Command Center
                                </div>
                                <h3 className="text-5xl font-black uppercase tracking-tighter text-white">
                                    For Buyers
                                </h3>
                            </div>
                            <div className="space-y-10">
                                {[
                                    {
                                        step: "01",
                                        title: "Post Requirement",
                                        desc: "Define your specs in under 30 seconds.",
                                    },
                                    {
                                        step: "02",
                                        title: "Get Verified Suppliers",
                                        desc: "Smart matching brings the best directly to you.",
                                    },
                                    {
                                        step: "03",
                                        title: "Close Deal Securely",
                                        desc: "Execute contracts and pay via built-in Escrow.",
                                    },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-8 items-start group">
                                        <span className="text-4xl font-black text-zinc-800 group-hover:text-cyan-600 transition-colors leading-none">
                                            {item.step}
                                        </span>
                                        <div>
                                            <h4 className="text-xl font-bold uppercase tracking-widest mb-3 text-white">
                                                {item.title}
                                            </h4>
                                            <p className="text-zinc-400 font-medium tracking-wide">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>

                    {/* For Sellers */}
                    <FadeIn delay={0.2}>
                        <div className="space-y-12">
                            <div className="border-b-2 border-zinc-900 pb-8">
                                <div className="text-cyan-700 text-sm font-black tracking-[0.3em] uppercase mb-4">
                                    Sales Engine
                                </div>
                                <h3 className="text-5xl font-black uppercase tracking-tighter text-white">
                                    For Sellers
                                </h3>
                            </div>
                            <div className="space-y-10">
                                {[
                                    {
                                        step: "01",
                                        title: "Get High-Intent Buyers",
                                        desc: "No spam. Only verified RFQs with real intent score.",
                                    },
                                    {
                                        step: "02",
                                        title: "Send Quotes Fast",
                                        desc: "Quick quote system baked right in to your dashboard.",
                                    },
                                    {
                                        step: "03",
                                        title: "Get Paid Securely",
                                        desc: "Funds held in Escrow. Zero default risk on payouts.",
                                    },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-8 items-start group">
                                        <span className="text-4xl font-black text-zinc-800 group-hover:text-cyan-600 transition-colors leading-none">
                                            {item.step}
                                        </span>
                                        <div>
                                            <h4 className="text-xl font-bold uppercase tracking-widest mb-3 text-white">
                                                {item.title}
                                            </h4>
                                            <p className="text-zinc-400 font-medium tracking-wide">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};
