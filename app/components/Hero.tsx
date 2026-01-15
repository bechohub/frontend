"use client";

import Image from "next/image";
import { CheckCircle2, ShieldCheck, ArrowRight, LayoutGrid } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn, SlideUp } from "./Animators";

export default function Hero() {
    return (
        <div className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Aurora Gradients - Vibrant & Deep */}
                <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
                <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

                <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center relative z-10">

                    {/* Text Content */}
                    <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
                        <FadeIn delay={0.1}>
                            <div className="inline-flex items-center rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-semibold text-slate-300 mb-8 tracking-wide uppercase">
                                <span className="flex h-1.5 w-1.5 rounded-full bg-teal-400 mr-2 shadow-[0_0_8px_rgba(45,212,191,0.5)]"></span>
                                Trusted by 10,000+ Enterprises
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] font-heading">
                                Sourcing made <br className="hidden lg:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-violet-500">intelligent</span>.
                            </h1>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <p className="mt-8 text-lg text-slate-400 sm:text-lg md:mt-8 md:text-xl leading-relaxed lg:mx-0 font-light">
                                Connect with verified Indian manufacturers.
                                Secure payments, transparent pricing, and seamless logistics
                                for the modern enterprise.
                            </p>
                        </FadeIn>

                        <SlideUp delay={0.4} className="mt-10 sm:mx-auto sm:max-w-lg sm:flex sm:justify-center lg:mx-0 lg:justify-start gap-4">
                            <div className="w-full sm:w-auto">
                                <Link
                                    href="/rfq"
                                    className="group flex w-full items-center justify-center rounded-full bg-gradient-to-r from-teal-500 to-blue-600 px-8 py-4 text-base font-semibold text-white shadow-[0_0_20px_rgba(45,212,191,0.3)] hover:shadow-[0_0_30px_rgba(45,212,191,0.5)] hover:scale-[1.02] transition-all duration-300 active:scale-95 border border-transparent hover:border-white/20"
                                >
                                    Post Request
                                    <ArrowRight className="ml-2 h-4 w-4 opacity-70 group-hover:translate-x-1 group-hover:opacity-100 transition-all text-white" />
                                </Link>
                            </div>
                            <div className="mt-4 sm:mt-0 w-full sm:w-auto">
                                <Link
                                    href="/browse"
                                    className="flex w-full items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-white/10 hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300 active:scale-95"
                                >
                                    <LayoutGrid className="mr-2 h-4 w-4 text-slate-400 group-hover:text-blue-400 transition-colors" />
                                    Browse Suppliers
                                </Link>
                            </div>
                        </SlideUp>

                        <FadeIn delay={0.5} className="mt-10 flex items-center justify-center lg:justify-start gap-8 border-t border-gray-100 pt-8">
                            <div className="flex items-center gap-2.5">
                                <CheckCircle2 className="h-5 w-5 text-teal-400" />
                                <span className="text-sm font-medium text-slate-400">GST Verified</span>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <ShieldCheck className="h-5 w-5 text-teal-400" />
                                <span className="text-sm font-medium text-slate-400">Escrow Secured</span>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Hero Image - Abstract & Clean */}
                    <div className="relative mt-16 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">
                        <div className="absolute -inset-4 bg-slate-100/50 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className="relative mx-auto w-full rounded-2xl shadow-2xl shadow-black/50 lg:max-w-md overflow-hidden bg-slate-900 border border-white/10"
                        >
                            {/* Main Image */}
                            <div className="relative block w-full aspect-[4/3] overflow-hidden">
                                <Image
                                    src="/hero-image.png"
                                    alt="Modern logistics"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-1000"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/10 to-transparent"></div>
                            </div>

                            {/* Minimal Glass Card */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8, duration: 0.8 }}
                                className="absolute bottom-6 left-6 right-6 bg-slate-950/80 backdrop-blur-md p-5 rounded-xl shadow-2xl border border-white/10"
                            >
                                <div className="flex justify-between items-start mb-3">
                                    <div className="flex items-center gap-2">
                                        <span className="flex h-2 w-2 rounded-full bg-teal-500 animate-pulse"></span>
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Live RFQ</span>
                                    </div>
                                    <span className="text-[10px] text-slate-500 font-mono">2m ago</span>
                                </div>
                                <p className="font-semibold text-white text-sm mb-1 leading-snug">Cotton Yarn (Combed, 40s)</p>
                                <div className="flex justify-between items-end mt-2">
                                    <p className="text-xs text-slate-400 font-medium">500 kg • Ahmedabad</p>
                                    <div className="h-6 w-6 rounded-full bg-white/10 flex items-center justify-center">
                                        <ArrowRight className="h-3 w-3 text-white" />
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
