"use client";

import { CheckCircle2 } from "lucide-react";
import { FadeIn } from "./FadeIn";

export const ProblemSolutionSection = () => {
    return (
        <section className="py-40 bg-zinc-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-center mb-24 max-w-4xl mx-auto leading-tight text-white">
                    STOP WASTING TIME ON <span className="text-cyan-700">FAKE LEADS.</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-900 border border-zinc-900">
                    <FadeIn className="bg-zinc-950">
                        <div className="p-12 md:p-16 h-full">
                            <h3 className="text-3xl font-black uppercase tracking-widest text-zinc-600 mb-12 flex items-center gap-4">
                                <span className="text-zinc-800">✕</span> The Old Way
                            </h3>
                            <ul className="space-y-8">
                                {[
                                    "Spam buyer leads & unqualified RFQs",
                                    "Zero trust or physical verification",
                                    "Endless non-transparent price wars",
                                    "No payment security or legal cover",
                                    "Weeks of follow-ups to finalize a deal",
                                ].map((text, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-5 text-zinc-500 font-medium tracking-wide text-lg"
                                    >
                                        <div className="h-1.5 w-1.5 mt-2.5 rounded-full bg-zinc-800 shrink-0" />
                                        {text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2} className="bg-zinc-950">
                        <div className="p-12 md:p-16 relative overflow-hidden h-full">
                            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none" />
                            <h3 className="text-3xl font-black tracking-widest text-white mb-12 flex items-center gap-4 relative z-10">
                                <span className="text-cyan-600">✓</span>
                                <span className="flex items-center gap-2">
                                    <span className="font-heading lowercase tracking-tighter">
                                        becho<span className="text-cyan-600">Hub</span>
                                    </span>
                                    <span className="uppercase">WAY</span>
                                </span>
                            </h3>
                            <ul className="space-y-8 relative z-10">
                                {[
                                    "Verified buyers only, intent scored",
                                    "Smart matchmaking by precise spec",
                                    "Premium pricing protected by Escrow",
                                    "100% Secure payments and legal cover",
                                    "Deals close in 48 hours autonomously",
                                ].map((text, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-5 text-white font-bold tracking-wide text-lg"
                                    >
                                        <div className="p-0.5 bg-cyan-600/20 border border-cyan-600/50 rounded-full mt-1 shrink-0">
                                            <CheckCircle2 className="h-4 w-4 text-cyan-600" />
                                        </div>
                                        {text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};
