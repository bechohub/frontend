"use client";

import Image from "next/image";
import { CheckCircle2, ShieldCheck, ArrowRight, LayoutGrid } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn, SlideUp } from "./Animators";

export default function Hero() {
    return (
        <div className="relative overflow-hidden bg-white pb-16 pt-12 sm:pb-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">

                    {/* Text Content */}
                    <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
                        <FadeIn delay={0.1}>
                            <div className="inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-600 mb-6">
                                <span className="flex h-2 w-2 rounded-full bg-orange-500 mr-2 animate-pulse"></span>
                                TRUSTED BY 10,000+ INDIAN MSMES
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <h1>
                                <span className="block text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-[3.5rem] leading-tight">
                                    Sourcing from Indian MSMEs made{" "}
                                    <span className="text-[#008ba3]">simple</span>.
                                </span>
                            </h1>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <p className="mt-6 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                                Connect with verified manufacturers and wholesalers instantly.
                                Experience secure payments, transparent pricing, and end-to-end
                                logistics support.
                            </p>
                        </FadeIn>

                        <SlideUp delay={0.4} className="mt-8 sm:mx-auto sm:max-w-lg sm:flex sm:justify-center lg:mx-0 lg:justify-start gap-4">
                            <div className="w-full sm:w-auto">
                                <Link
                                    href="/rfq"
                                    className="group flex w-full items-center justify-center rounded-md border border-transparent bg-[#008ba3] px-8 py-3 text-base font-bold text-white shadow-sm hover:bg-[#007b91] hover:shadow-lg hover:-translate-y-0.5 md:py-4 md:px-10 md:text-lg transition-all whitespace-nowrap"
                                >
                                    Post Request for Quote
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                            <div className="mt-3 sm:mt-0 w-full sm:w-auto">
                                <Link
                                    href="/browse"
                                    className="flex w-full items-center justify-center rounded-md border border-gray-200 bg-white px-8 py-3 text-base font-bold text-slate-800 shadow-sm hover:bg-gray-50 hover:shadow-lg hover:-translate-y-0.5 md:py-4 md:px-10 md:text-lg transition-all whitespace-nowrap"
                                >
                                    <LayoutGrid className="mr-2 h-5 w-5 text-slate-800" />
                                    Browse Suppliers
                                </Link>
                            </div>
                        </SlideUp>

                        <FadeIn delay={0.5} className="mt-8 flex items-center gap-6 text-sm text-gray-500 font-medium">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-5 w-5 text-green-500" />
                                <span>GST Verified</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="h-5 w-5 text-green-500" />
                                <span>Escrow Payments</span>
                            </div>
                        </FadeIn>

                    </div>

                    {/* Hero Image */}
                    <div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md overflow-visible"
                        >
                            {/* Main Image */}
                            <div className="relative block w-full overflow-hidden rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
                                <Image
                                    src="/hero-image.png"
                                    alt="Warehouse logistics"
                                    width={800}
                                    height={600}
                                    className="w-full object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                            </div>

                            {/* Overlay Card - Floating Animation */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                                whileHover={{ y: -5 }}
                                className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-xl border border-gray-100 cursor-default"
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <div className="flex items-center gap-2">
                                        <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse"></span>
                                        <span className="text-xs font-bold text-slate-800 uppercase tracking-widest">Live RFQ</span>
                                    </div>
                                    <span className="text-xs text-gray-400">Just now</span>
                                </div>
                                <p className="font-semibold text-slate-800 text-sm mb-1">Looking for Cotton Yarn (Combed, 40s count)</p>
                                <p className="text-xs text-gray-500">Qty: 500 kg</p>
                                <p className="text-xs text-[#008ba3] font-medium text-right mt-1">Ahmedabad, India</p>

                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
