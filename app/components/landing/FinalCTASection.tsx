"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "./FadeIn";

export const FinalCTASection = () => {
    return (
        <section className="relative min-h-[80vh] bg-zinc-950 flex justify-center items-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/container_ship.png"
                    alt="Global Logistics"
                    fill
                    className="object-cover opacity-[0.55] grayscale mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
            </div>

            <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center">
                <FadeIn>
                    <h2 className="text-5xl md:text-7xl lg:text-[100px] font-black tracking-tighter uppercase mb-16 leading-[0.85] text-white">
                        START YOUR <br className="hidden md:block" />
                        FIRST DEAL <span className="text-cyan-600 block sm:inline">TODAY.</span>
                    </h2>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link
                            href="/signup?role=seller"
                            className="group inline-flex items-center justify-center px-12 py-6 bg-cyan-700 text-white font-black uppercase tracking-[0.2em] text-sm hover:bg-cyan-600 transition-colors duration-300"
                        >
                            Join as Supplier
                            <ArrowRight className="ml-4 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};
