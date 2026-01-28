"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FadeIn, StaggerContainer, StaggerItem, TextScramble, Magnetic } from "../components/Animators";
import {
    Factory,
    Truck,
    ShieldCheck,
    Zap,
    ArrowRight,
    Target,
    Sparkles,
    Shield,
    Globe2,
    Cpu
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HowItWorksPage() {
    const chapters = [
        {
            id: "01",
            label: "The Renaissance",
            title: "Rebuilding the Backbone.",
            description: "Traditional B2B is broken. Hidden middlemen, manual QC, and opaque pricing have held back Indian manufacturing for decades. We're here to rewrite the protocol.",
            icon: Factory,
            bg: "bg-cyan-50"
        },
        {
            id: "02",
            label: "The Protocol",
            title: "Direct Digital Sourcing.",
            description: "We connect high-intent global buyers directly to the factory floor. No noise, no brokers. Just verified capacity and primary pricing, unlocked by data.",
            icon: Cpu,
            bg: "bg-indigo-50"
        },
        {
            id: "03",
            label: "Verification",
            title: "Trust at Scale.",
            description: "Every factory on bechoHub undergoes a rigorous 3-tier audit. We track live production benchmarks to ensure quality is a guarantee, not a gamble.",
            icon: ShieldCheck,
            bg: "bg-blue-50"
        },
        {
            id: "04",
            label: "The Mission",
            title: "Global Scale from Bharat.",
            description: "Empowering 63 million MSMEs to compete on the global stage. From local clusters to international shipments, we handle the infrastructure, you build the future.",
            icon: Globe2,
            bg: "bg-fuchsia-50"
        }
    ];

    return (
        <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-cyan-100 selection:text-cyan-950 overflow-x-hidden">
            <Navbar />

            {/* Ambient Backgrounds */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-50/40 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-50/40 rounded-full blur-[120px]" />
            </div>

            <main className="pt-64 pb-32">
                {/* Hero section - Cinematic Narrative */}
                <section className="px-6 relative mb-40 lg:mb-64">
                    <div className="max-w-7xl mx-auto text-center relative z-10">
                        <FadeIn>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 mb-10">
                                <Sparkles className="h-4 w-4 text-cyan-600" />
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">Our Manifest</span>
                            </div>

                            <h1 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tightest mb-12 uppercase leading-[0.85] text-slate-950">
                                Trade is <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-700">
                                    <TextScramble text="Evolution." delay={0.5} />
                                </span>
                            </h1>
                            <p className="text-xl md:text-3xl text-slate-500 max-w-3xl mx-auto font-light leading-relaxed mb-16">
                                We're not just a marketplace. We're a technology protocol built to accelerate the Indian manufacturing renaissance.
                            </p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 1 }}
                                className="flex justify-center"
                            >
                                <div className="h-24 w-px bg-gradient-to-b from-cyan-500 to-transparent" />
                            </motion.div>
                        </FadeIn>
                    </div>
                </section>

                {/* The Chapters - Interactive Storytelling */}
                <section className="px-6 max-w-7xl mx-auto">
                    <StaggerContainer className="space-y-40 lg:space-y-64">
                        {chapters.map((chapter, index) => (
                            <StaggerItem key={chapter.id}>
                                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 lg:gap-24`}>
                                    {/* Visual Side */}
                                    <div className="flex-1 w-full flex justify-center">
                                        <motion.div
                                            whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                                            className={`relative w-full aspect-[4/3] max-w-md rounded-[64px] ${chapter.bg} border-2 border-slate-50 flex items-center justify-center shadow-2xl shadow-slate-200/50 group overflow-hidden`}
                                        >
                                            <div className="absolute inset-0 bg-white/50 backdrop-blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                            <chapter.icon className="h-32 w-32 text-slate-950 group-hover:scale-110 transition-transform duration-700 relative z-10" strokeWidth={1} />
                                            <span className="absolute bottom-12 right-12 text-9xl font-black text-slate-950/5 select-none">{chapter.id}</span>
                                        </motion.div>
                                    </div>

                                    {/* Content Side */}
                                    <div className="flex-1 text-center md:text-left">
                                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-600 mb-6 block">Chapter {chapter.id}: {chapter.label}</span>
                                        <h2 className="text-4xl lg:text-7xl font-black tracking-tightest uppercase mb-8 text-slate-950 leading-none">
                                            {chapter.title}
                                        </h2>
                                        <p className="text-lg lg:text-xl text-slate-500 font-light leading-relaxed mb-10 max-w-lg mx-auto md:mx-0">
                                            {chapter.description}
                                        </p>
                                        <div className="flex justify-center md:justify-start">
                                            <button className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-slate-950 group">
                                                Learn more <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </section>

                {/* Final Vision CTA */}
                <section className="mt-64 px-6 overflow-hidden">
                    <FadeIn>
                        <div className="max-w-6xl mx-auto p-12 md:p-32 rounded-[64px] bg-slate-950 text-white text-center relative overflow-hidden group">
                            {/* Animated Background Sparks */}
                            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-500/10 blur-[150px] -z-10 group-hover:bg-cyan-500/20 transition-all duration-1000" />

                            <h2 className="text-5xl md:text-8xl lg:text-[100px] font-black tracking-tightest uppercase mb-16 leading-[0.85]">
                                Become part <br /> of the story.
                            </h2>

                            <div className="flex flex-col sm:flex-row justify-center gap-6">
                                <Magnetic intensity={0.2}>
                                    <Link
                                        href="/signup"
                                        className="px-16 py-6 bg-white text-slate-950 rounded-full font-black text-sm uppercase tracking-[0.2em] hover:bg-cyan-400 transition-all active:scale-95 shadow-2xl block"
                                    >
                                        Join the Protocol
                                    </Link>
                                </Magnetic>
                                <Magnetic intensity={0.2}>
                                    <Link
                                        href="/signup"
                                        className="px-16 py-6 bg-transparent border border-white/20 text-white rounded-full font-black text-sm uppercase tracking-[0.2em] hover:bg-white/5 transition-all active:scale-95 block"
                                    >
                                        Partner with Us
                                    </Link>
                                </Magnetic>
                            </div>
                        </div>
                    </FadeIn>
                </section>
            </main>

            <Footer />
        </div>
    );
}

