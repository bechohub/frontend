"use client";

import { FadeIn } from "./FadeIn";

export const GuaranteeSection = () => {
    return (
        <section className="py-32 bg-zinc-900 border-y border-zinc-900 relative">
            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-16 md:gap-8">
                <FadeIn className="text-center md:text-left w-full border-b border-zinc-800 pb-16 md:border-b-0 md:pb-0 md:border-r md:pr-8">
                    <h3 className="text-7xl md:text-8xl lg:text-[120px] font-black text-white mb-4 tracking-tighter leading-none">
                        100<span className="text-cyan-700">%</span>
                    </h3>
                    <p className="text-zinc-500 font-bold uppercase tracking-[0.3em] text-sm text-balance">
                        Verified Network
                    </p>
                </FadeIn>
                <FadeIn
                    delay={0.1}
                    className="text-center md:text-left w-full border-b border-zinc-800 pb-16 md:border-b-0 md:pb-0 md:border-r md:px-8"
                >
                    <h3 className="text-7xl md:text-8xl lg:text-[120px] font-black text-white mb-4 tracking-tighter leading-none">
                        0<span className="text-4xl md:text-6xl text-cyan-700">%</span>
                    </h3>
                    <p className="text-zinc-500 font-bold uppercase tracking-[0.3em] text-sm text-balance">
                        Fake Leads
                    </p>
                </FadeIn>
                <FadeIn delay={0.2} className="text-center md:text-left w-full md:pl-8">
                    <h3 className="text-7xl md:text-8xl lg:text-[120px] font-black text-white mb-4 tracking-tighter leading-none">
                        24<span className="text-4xl md:text-6xl text-cyan-700">/7</span>
                    </h3>
                    <p className="text-zinc-500 font-bold uppercase tracking-[0.3em] text-sm text-balance">
                        Trade Monitoring
                    </p>
                </FadeIn>
            </div>
        </section>
    );
};
