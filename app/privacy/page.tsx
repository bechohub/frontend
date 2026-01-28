"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FadeIn } from "../components/Animators";
import { ShieldCheck, Lock, Eye, FileText } from "lucide-react";

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-cyan-500/30">
            <Navbar />

            <main className="pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <FadeIn>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-12 w-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/20">
                                <ShieldCheck className="h-6 w-6" />
                            </div>
                            <h1 className="text-4xl md:text-5xl font-black tracking-tightest uppercase">Privacy <span className="text-cyan-400">Policy.</span></h1>
                        </div>

                        <div className="prose prose-invert prose-cyan max-w-none space-y-12">
                            <section>
                                <p className="text-xl text-slate-400 leading-relaxed font-light">
                                    At bechoHub, we take your business data seriously. This policy outlines how we handle your identity, company information, and trade secrets with the highest level of security.
                                </p>
                            </section>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-16">
                                <div className="p-8 rounded-3xl bg-white/5 border border-white/5">
                                    <Lock className="h-8 w-8 text-cyan-400 mb-4" />
                                    <h3 className="text-lg font-bold mb-2">Encryption</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">All transaction and business data is encrypted at rest and in transit.</p>
                                </div>
                                <div className="p-8 rounded-3xl bg-white/5 border border-white/5">
                                    <Eye className="h-8 w-8 text-indigo-400 mb-4" />
                                    <h3 className="text-lg font-bold mb-2">Transparency</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">We never sell your contact leads to third-party marketing firms.</p>
                                </div>
                                <div className="p-8 rounded-3xl bg-white/5 border border-white/5">
                                    <FileText className="h-8 w-8 text-fuchsia-400 mb-4" />
                                    <h3 className="text-lg font-bold mb-2">Compliance</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">Compliant with Indian IT laws and global data protection standards.</p>
                                </div>
                            </div>

                            <section className="space-y-6">
                                <h2 className="text-2xl font-bold text-white uppercase tracking-wider">1. Information Collection</h2>
                                <p className="text-slate-400 leading-relaxed">
                                    We collect information necessary to verify your business identity and facilitate trade. This includes:
                                </p>
                                <ul className="list-disc pl-6 text-slate-400 space-y-2">
                                    <li>Personal contact details (Name, Email, Phone)</li>
                                    <li>Business registration data (GST, Company Name)</li>
                                    <li>Sourcing requirements and manufacturing capacity</li>
                                    <li>Transaction history and communication logs</li>
                                </ul>
                            </section>

                            <section className="space-y-6">
                                <h2 className="text-2xl font-bold text-white uppercase tracking-wider">2. How We Use Data</h2>
                                <p className="text-slate-400 leading-relaxed">
                                    Your data is used solely to match Buyers with relevant Suppliers and to ensure the security of the marketplace. We use anonymized aggregate data to improve our matching algorithms and network logistics.
                                </p>
                                <p className="text-slate-400 leading-relaxed">
                                    Verified sellers' capacity information is shared with high-intent buyers to facilitate requests for quotes (RFQs).
                                </p>
                            </section>

                            <section className="space-y-6 border-t border-white/10 pt-12">
                                <h2 className="text-2xl font-bold text-white uppercase tracking-wider">Contact Us</h2>
                                <p className="text-slate-400 leading-relaxed">
                                    If you have questions about your data or wish to request data deletion, contact our privacy team at:
                                </p>
                                <p className="text-cyan-400 font-bold">privacy@bechohub.com</p>
                            </section>
                        </div>
                    </FadeIn>
                </div>
            </main>

            <Footer />
        </div>
    );
}
