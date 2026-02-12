"use client";

import Image from "next/image";
import { CheckCircle2, ShieldCheck, ArrowRight, LayoutGrid } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn, SlideUp } from "./Animators";

export default function Hero() {
    return (
        <div className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Aurora Gradients - Vibrant & Deep */}
                {/* Aurora Gradients - Subtle & Clean for Light Mode */}
                <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-fuchsia-300/30 rounded-full blur-[60px] sm:blur-[100px] pointer-events-none mix-blend-multiply" />
                <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-cyan-300/30 rounded-full blur-[60px] sm:blur-[100px] pointer-events-none mix-blend-multiply" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-300/20 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none -z-10" />

                <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center relative z-10">

                    {/* Text Content */}
                    <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
                        <FadeIn delay={0.1}>
                            <div className="inline-flex items-center rounded-full bg-slate-50 border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 mb-6 tracking-wide uppercase">
                                <span className="flex h-1.5 w-1.5 rounded-full bg-cyan-500 mr-2 shadow-[0_0_8px_rgba(6,182,212,0.5)]"></span>
                                India's Premiere B2B Network
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <h1 className="text-5xl font-black tracking-tight text-slate-900 sm:text-6xl md:text-7xl lg:text-8xl leading-[1.0] sm:leading-[0.95] font-heading mb-6">
                                <span className="block text-slate-700">Banega.</span>
                                <span className="block text-slate-800">Bikega.</span>
                                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-600 to-fuchsia-600 drop-shadow-sm">
                                    Badhega.
                                </span>
                            </h1>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <p className="mt-6 text-base text-slate-600 sm:text-lg md:mt-8 md:text-xl leading-relaxed lg:mx-0 font-light">
                                The all-in-one platform for buyers to source smarter and suppliers to grow faster.
                                Verified businesses, secure payments, and end-to-end logistics.
                            </p>
                        </FadeIn>

                        <SlideUp delay={0.4} className="mt-8 sm:mt-10 sm:mx-auto sm:max-w-lg sm:flex sm:justify-center lg:mx-0 lg:justify-start gap-3">
                            <div className="w-full sm:w-auto">
                                <Link
                                    href="/signup?type=buyer"
                                    className="group flex w-full items-center justify-center rounded-full bg-slate-900 px-8 py-4 text-sm sm:text-base font-semibold text-white shadow-xl hover:bg-slate-800 hover:scale-[1.02] transition-all duration-300 active:scale-95"
                                >
                                    Join as Buyer
                                    <ArrowRight className="ml-2 h-4 w-4 opacity-70 group-hover:translate-x-1 group-hover:opacity-100 transition-all text-white" />
                                </Link>
                            </div>
                            <div className="mt-3 sm:mt-0 w-full sm:w-auto">
                                <Link
                                    href="/signup?type=supplier"
                                    className="flex w-full items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-4 text-sm sm:text-base font-semibold text-slate-900 shadow-sm hover:bg-slate-50 transition-all duration-300 active:scale-95"
                                >
                                    Register as Seller
                                </Link>
                            </div>
                        </SlideUp>

                        <FadeIn delay={0.5} className="mt-10 flex items-center justify-center lg:justify-start gap-8 border-t border-slate-100 pt-8">
                            <div className="flex items-center gap-2.5">
                                <CheckCircle2 className="h-5 w-5 text-cyan-500" />
                                <span className="text-sm font-medium text-slate-600">GST Verified</span>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <ShieldCheck className="h-5 w-5 text-cyan-500" />
                                <span className="text-sm font-medium text-slate-600">Escrow Secured</span>
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
                            className="relative mx-auto w-full rounded-2xl shadow-2xl shadow-slate-200/50 lg:max-w-md overflow-hidden bg-slate-50 border border-slate-200"
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
                                className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-5 rounded-xl shadow-2xl border border-slate-100"
                            >
                                <div className="flex justify-between items-start mb-3">
                                    <div className="flex items-center gap-2">
                                        <span className="flex h-2 w-2 rounded-full bg-cyan-500 animate-pulse"></span>
                                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Active Order</span>
                                    </div>
                                    <span className="text-[10px] text-slate-400 font-mono">Today</span>
                                </div>
                                <p className="font-semibold text-slate-900 text-sm mb-1 leading-snug">Precision Gears (Steel C45)</p>
                                <div className="flex justify-between items-end mt-2">
                                    <p className="text-xs text-slate-500 font-medium">10,000 Pcs • Pune Hub</p>
                                    <div className="h-6 w-6 rounded-full bg-slate-100 flex items-center justify-center">
                                        <ArrowRight className="h-3 w-3 text-slate-600" />
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
