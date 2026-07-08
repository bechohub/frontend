"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { CommodityCard } from "./CommodityCard";

export const CategoryFocusSection = () => {
    return (
        <section className="py-32 bg-zinc-950 border-t border-zinc-900">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                    <div>
                        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 text-white">
                            Commodities.
                        </h2>
                        <p className="text-zinc-500 tracking-[0.2em] uppercase font-bold text-sm">
                            Deep liquidity in strategic sectors
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
                    <CommodityCard
                        href="/category/agriculture"
                        src="/images/agriculture_supplies.png"
                        alt="Agriculture"
                        title="Agriculture"
                        subtitle="Tea, Grain, Spices"
                        delay={0}
                    />
                    <CommodityCard
                        href="/category/textile"
                        src="/images/textile_mill.png"
                        alt="Textile"
                        title="Textile"
                        subtitle="Yarn, Fabric, Garments"
                        delay={0.1}
                    />
                    <CommodityCard
                        href="/category/chemicals"
                        src="/images/chemicals_trade.png"
                        alt="Chemicals"
                        title="Chemicals"
                        subtitle="Industrial, Organic, Polymers"
                        delay={0.2}
                    />
                    <CommodityCard
                        href="/category/construction"
                        src="/images/construction_materials.png"
                        alt="Construction"
                        title="Construction"
                        subtitle="Cement, Steel, Machinery"
                        delay={0.3}
                    />
                    <CommodityCard
                        href="/category/electronics"
                        src="/images/electronics_electrical.png"
                        alt="Electronics"
                        title="Electronics"
                        subtitle="Components, Devices, Wiring"
                        delay={0.4}
                    />
                </div>

                <FadeIn delay={0.5} className="flex justify-center">
                    <Link
                        href="/categories"
                        className="group inline-flex items-center justify-center px-10 py-5 border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 text-white font-bold uppercase tracking-[0.2em] text-xs transition-colors duration-300"
                    >
                        Explore All Categories
                        <ArrowRight className="ml-4 h-4 w-4 group-hover:translate-x-1 transition-transform text-cyan-600" />
                    </Link>
                </FadeIn>
            </div>
        </section>
    );
};
