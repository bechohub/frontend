"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FadeIn } from "../components/Animators";
import { Gavel, Scale, AlertCircle, CheckCircle2 } from "lucide-react";

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-zinc-950 text-[#f0f0fa] font-sans selection:bg-cyan-600/30 selection:text-white">
            <Navbar />

            <main className="pt-32 md:pt-48 pb-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <FadeIn>
                        <div className="flex items-center gap-6 mb-12">
                            <div className="h-16 w-16 bg-zinc-900 flex items-center justify-center text-cyan-600 border border-zinc-900">
                                <Gavel className="h-8 w-8" />
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-white">
                                Operating <br className="md:hidden" />
                                <span className="text-cyan-600">Terms.</span>
                            </h1>
                        </div>

                        <div className="prose prose-invert max-w-none space-y-16">
                            <section className="bg-zinc-900 p-10 md:p-12 border border-zinc-900 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-900/10 rounded-full blur-[80px] pointer-events-none" />
                                <h2 className="text-2xl font-black mb-6 uppercase tracking-wider text-white">
                                    Structural Framework
                                </h2>
                                <p className="text-sm text-zinc-400 leading-relaxed font-medium uppercase tracking-widest mb-8">
                                    bechoHub functions as a **Trade Engine**. It provides a secure, audited environment
                                    for B2B transactions. Our operational architecture is maintained via strict
                                    enforcement parameters:
                                </p>
                                <ul className="space-y-6 text-zinc-500 font-medium tracking-wide">
                                    <li className="flex gap-4">
                                        <Scale className="h-5 w-5 text-cyan-600 mt-1 shrink-0" />
                                        <span>
                                            <strong className="text-white">Commercial Jurisdiction:</strong> Agreements
                                            processed on the network observe global B2B frameworks and domestic
                                            commercial mandates.
                                        </span>
                                    </li>
                                    <li className="flex gap-4">
                                        <FileSignature className="h-5 w-5 text-cyan-600 mt-1 shrink-0" />
                                        <span>
                                            <strong className="text-white">Encrypted Cryptographic Contracts:</strong>{" "}
                                            We utilize binding digital signatures authenticating terms before execution
                                            flow begins.
                                        </span>
                                    </li>
                                    <li className="flex gap-4">
                                        <AlertCircle className="h-5 w-5 text-cyan-600 mt-1 shrink-0" />
                                        <span>
                                            <strong className="text-white">Resolution Protocol:</strong> Expedited
                                            dispute arbitration logic supersedes traditional litigation paths to protect
                                            network momentum.
                                        </span>
                                    </li>
                                </ul>
                            </section>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-900 border border-zinc-900 my-16">
                                <div className="p-10 bg-zinc-950 border border-transparent hover:border-cyan-900 transition-colors flex flex-col items-start gap-6">
                                    <div className="p-4 bg-zinc-900 border border-zinc-900">
                                        <CheckCircle2 className="h-6 w-6 text-cyan-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-black mb-3 uppercase tracking-widest text-lg text-white">
                                            Entity Conduct
                                        </h3>
                                        <p className="text-sm text-zinc-500 leading-relaxed font-medium">
                                            All network nodes must engage in highly deterministic trade practices.
                                            Unprofessional comms result in immediate sector isolation.
                                        </p>
                                    </div>
                                </div>
                                <div className="p-10 bg-zinc-950 border border-transparent hover:border-cyan-900 transition-colors flex flex-col items-start gap-6">
                                    <div className="p-4 bg-zinc-900 border border-zinc-900">
                                        <ShieldCheck className="h-6 w-6 text-cyan-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-black mb-3 uppercase tracking-widest text-lg text-white">
                                            Escrow Execution
                                        </h3>
                                        <p className="text-sm text-zinc-500 leading-relaxed font-medium">
                                            Capital transactions route through the automated secure proxy layer to
                                            protect liquidity until physical delivery completes.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <section className="space-y-6">
                                <h2 className="text-3xl font-black text-white uppercase tracking-wider">
                                    1. Protocol Initialization
                                </h2>
                                <p className="text-zinc-500 leading-relaxed font-medium tracking-wide">
                                    You acknowledge your status as an authorized corporate operator. We actively
                                    terminate access for entities transmitting falsified or synthetic authentication
                                    payloads.
                                </p>
                            </section>

                            <section className="space-y-6">
                                <h2 className="text-3xl font-black text-white uppercase tracking-wider">
                                    2. System Parameters
                                </h2>
                                <div className="grid grid-cols-1 gap-px bg-zinc-900 border border-zinc-900">
                                    {[
                                        "Manufacturers must define absolute, verifiable output capacity constraints.",
                                        "Sourcing entities must deposit valid, actionable RFQ parameters.",
                                        "Bypassing network escrow logic after digital handshake initiates an immediate permanent ban.",
                                        "Clearance levels (badges) require recurring compliance verification.",
                                    ].map((rule, i) => (
                                        <div key={i} className="flex gap-4 items-center p-6 bg-zinc-950">
                                            <div className="text-cyan-600 font-black text-lg">0{i + 1}</div>
                                            <p className="text-zinc-400 font-medium tracking-wide text-sm">{rule}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section className="space-y-6 border-t border-zinc-900 pt-16">
                                <h2 className="text-xs font-black text-zinc-600 uppercase tracking-[0.4em] mb-4">
                                    Transmission Halt
                                </h2>
                                <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest leading-relaxed">
                                    Revision Iteration: Alpha Protocol 2026. <br />
                                    Terms are subject to automatic updates as system architecture expands.
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

// Inline fallback for icons missing from lucide-react direct import above
function FileSignature(props: React.ComponentProps<"svg">) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 19.5v.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h5.5" />
            <path d="m22 7-6-6-4 4 6 6z" />
            <path d="M12 11v4h4" />
            <path d="M5.5 15.5 8 18" />
            <path d="m11 15-2.5 2.5" />
        </svg>
    );
}
function ShieldCheck(props: React.ComponentProps<"svg">) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2-1 4-2 7-2 2.95 0 5 1 7 2a1 1 0 0 1 1 1z" />
            <path d="m9 12 2 2 4-4" />
        </svg>
    );
}
