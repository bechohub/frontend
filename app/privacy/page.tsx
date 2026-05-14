"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FadeIn } from "../components/Animators";
import { ShieldCheck, Lock, Eye, FileText } from "lucide-react";

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-zinc-950 text-[#f0f0fa] font-sans selection:bg-cyan-600/30 selection:text-white">
            <Navbar />

            <main className="pt-32 md:pt-48 pb-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <FadeIn>
                        <div className="flex items-center gap-6 mb-12">
                            <div className="h-16 w-16 bg-zinc-900 flex items-center justify-center text-cyan-600 border border-zinc-900">
                                <ShieldCheck className="h-8 w-8" />
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-white">
                                Privacy <br className="md:hidden" />
                                <span className="text-cyan-600">Protocol.</span>
                            </h1>
                        </div>

                        <div className="prose prose-invert max-w-none space-y-16">
                            <section>
                                <p className="text-lg md:text-xl text-zinc-400 leading-relaxed font-medium tracking-wide uppercase">
                                    At bechoHub, we take your entity data seriously. This protocol outlines how we
                                    handle your identity, operational information, and trade secrets with military-grade
                                    security.
                                </p>
                            </section>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-900 border border-zinc-900 my-16">
                                <div className="p-10 bg-zinc-950 border border-transparent hover:border-cyan-900 transition-colors">
                                    <Lock className="h-8 w-8 text-cyan-600 mb-6" />
                                    <h3 className="text-xl font-black mb-3 uppercase tracking-wider text-white">
                                        Encryption
                                    </h3>
                                    <p className="text-xs text-zinc-500 leading-relaxed font-medium uppercase tracking-widest">
                                        All transaction and entity data is encrypted at rest and in transit.
                                    </p>
                                </div>
                                <div className="p-10 bg-zinc-950 border border-transparent hover:border-cyan-900 transition-colors">
                                    <Eye className="h-8 w-8 text-cyan-600 mb-6" />
                                    <h3 className="text-xl font-black mb-3 uppercase tracking-wider text-white">
                                        Isolation
                                    </h3>
                                    <p className="text-xs text-zinc-500 leading-relaxed font-medium uppercase tracking-widest">
                                        We strictly isolate data. No unsolicited sharing with third-party networks.
                                    </p>
                                </div>
                                <div className="p-10 bg-zinc-950 border border-transparent hover:border-cyan-900 transition-colors">
                                    <FileText className="h-8 w-8 text-cyan-600 mb-6" />
                                    <h3 className="text-xl font-black mb-3 uppercase tracking-wider text-white">
                                        Compliance
                                    </h3>
                                    <p className="text-xs text-zinc-500 leading-relaxed font-medium uppercase tracking-widest">
                                        Compliant with highest global data protection and IT protocols.
                                    </p>
                                </div>
                            </div>

                            <section className="space-y-6">
                                <h2 className="text-3xl font-black text-white uppercase tracking-wider">
                                    1. Data Capture
                                </h2>
                                <p className="text-zinc-500 leading-relaxed font-medium text-sm tracking-wide">
                                    We collect critical data structures necessary to verify authenticity and execute
                                    secure trade. Parameters include:
                                </p>
                                <ul className="list-none space-y-4 text-zinc-400 text-sm tracking-wide bg-zinc-900 p-8 border border-zinc-900">
                                    <li className="flex items-start gap-4">
                                        <div className="h-1.5 w-1.5 bg-cyan-600 mt-2 rounded-full" />
                                        Identity verification (Name, Comm links)
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="h-1.5 w-1.5 bg-cyan-600 mt-2 rounded-full" />
                                        Entity metrics (GST, Legal Nomenclature)
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="h-1.5 w-1.5 bg-cyan-600 mt-2 rounded-full" />
                                        Operational capacity and execution volumes
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="h-1.5 w-1.5 bg-cyan-600 mt-2 rounded-full" />
                                        Encrypted transaction payloads
                                    </li>
                                </ul>
                            </section>

                            <section className="space-y-6">
                                <h2 className="text-3xl font-black text-white uppercase tracking-wider">
                                    2. System Utilization
                                </h2>
                                <p className="text-zinc-500 leading-relaxed font-medium text-sm tracking-wide">
                                    Your data drives our hyper-matching engine. It is utilized exclusively to align
                                    verified Buyers with capable Manufacturers, ensuring rapid deal execution. We map
                                    anonymized logic vectors to improve network routing.
                                </p>
                                <p className="text-zinc-500 leading-relaxed font-medium text-sm tracking-wide">
                                    Manufacturer capacity and compliance status are broadcasted to high-intent nodes to
                                    facilitate immediate RFQ response.
                                </p>
                            </section>

                            <section className="bg-zinc-900 border-t border-b border-zinc-900 py-12 px-6 md:px-12 mt-16 text-center">
                                <h2 className="text-2xl font-black text-white uppercase tracking-wider mb-4">
                                    Command Channel
                                </h2>
                                <p className="text-zinc-500 text-sm font-medium tracking-wide mb-6">
                                    Direct inquiries regarding extraction or deletion of entity payload across the
                                    network:
                                </p>
                                <div className="inline-block px-8 py-4 bg-zinc-950 border border-cyan-900 text-cyan-600 font-black tracking-widest text-sm uppercase">
                                    protocol@bechohub.com
                                </div>
                            </section>
                        </div>
                    </FadeIn>
                </div>
            </main>

            <Footer />
        </div>
    );
}
