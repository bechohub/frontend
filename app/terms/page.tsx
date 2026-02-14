"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FadeIn } from "../components/Animators";
import { Gavel, Scale, AlertCircle, CheckCircle2 } from "lucide-react";

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-cyan-500/30">
            <Navbar />

            <main className="pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <FadeIn>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-12 w-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20">
                                <Gavel className="h-6 w-6" />
                            </div>
                            <h1 className="text-4xl md:text-5xl font-black tracking-tightest uppercase">Terms of <span className="text-indigo-400">Use.</span></h1>
                        </div>

                        <div className="prose prose-invert prose-indigo max-w-none space-y-12">
                            <section className="bg-white/5 p-8 rounded-[32px] border border-white/10">
                                <h2 className="text-xl font-bold mb-4 uppercase tracking-widest text-indigo-400">Legal Framework</h2>
                                <p className="text-lg text-slate-400 leading-relaxed font-light">
                                    bechoHub operates as a **Technology Facilitator** under the Information Technology Act (India), providing a secure, audited environment for B2B commerce. Our legal architecture is built on three pillars:
                                </p>
                                <ul className="mt-6 space-y-4 text-slate-400 font-light">
                                    <li><strong className="text-white">Commercial Jurisdiction:</strong> All agreements initiated on the platform are governed by the laws of India and are enforceable in Indian Commercial Courts.</li>
                                    <li><strong className="text-white">Standardized Digital Contracts:</strong> We utilize legally binding digital templates that comply with the Indian Evidence Act for electronic signatures.</li>
                                    <li><strong className="text-white">Dispute Resolution:</strong> Mandatory arbitration in accordance with the Arbitration and Conciliation Act, providing a faster alternative to traditional litigation.</li>
                                </ul>
                            </section>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-16">
                                <div className="p-8 rounded-3xl bg-white/5 border border-white/5 flex gap-4">
                                    <Scale className="h-6 w-6 text-indigo-400 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-bold mb-2 uppercase tracking-wide text-sm">Professional Conduct</h3>
                                        <p className="text-xs text-slate-500 leading-relaxed">All users must engage in fair trade practices and maintain professional communication standards.</p>
                                    </div>
                                </div>
                                <div className="p-8 rounded-3xl bg-white/5 border border-white/5 flex gap-4">
                                    <AlertCircle className="h-6 w-6 text-cyan-400 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-bold mb-2 uppercase tracking-wide text-sm">Escrow Protection</h3>
                                        <p className="text-xs text-slate-500 leading-relaxed">High-value transactions must utilize our secure payment bridge to ensure delivery and payment safety.</p>
                                    </div>
                                </div>
                            </div>

                            <section className="space-y-6">
                                <h2 className="text-2xl font-bold text-white uppercase tracking-wider">1. Acceptance of Terms</h2>
                                <p className="text-slate-400 leading-relaxed">
                                    BechoHub provides a platform to connect Buyers and Suppliers. By accessing the site, you acknowledge that you are a business entity or a representative of one. We reserve the right to suspend accounts that provide false business information or GST details.
                                </p>
                            </section>

                            <section className="space-y-6">
                                <h2 className="text-2xl font-bold text-white uppercase tracking-wider">2. Marketplace Rules</h2>
                                <div className="grid grid-cols-1 gap-4">
                                    {[
                                        "Suppliers must accurately represent their manufacturing capacity.",
                                        "Buyers must provide authentic and clear sourcing requirements.",
                                        "Direct circumvention of the platform for transactions initiated via bechoHub is prohibited.",
                                        "Verified badges are granted subject to ongoing compliance audits."
                                    ].map((rule, i) => (
                                        <div key={i} className="flex gap-3 items-start">
                                            <CheckCircle2 className="h-5 w-5 text-indigo-400 mt-1 flex-shrink-0" />
                                            <p className="text-slate-400">{rule}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section className="space-y-6">
                                <h2 className="text-2xl font-bold text-white uppercase tracking-wider">3. Liability</h2>
                                <p className="text-slate-400 leading-relaxed">
                                    While we verify all participants, bechoHub is not liable for the quality of final goods outside the scope of our quality-assurance logistics package. Users are encouraged to perform their own due diligence using the data provided on the platform.
                                </p>
                            </section>

                            <section className="space-y-6 border-t border-white/10 pt-12">
                                <h2 className="text-2xl font-bold text-white uppercase tracking-wider">Legal Notice</h2>
                                <p className="text-slate-400 leading-relaxed">
                                    Last updated: January 2026. These terms are subject to change as we expand our infrastructure.
                                </p>
                            </section>
                        </div>
                    </FadeIn>
                </div>
            </main>

            <Footer />
        </div>
    );
}
