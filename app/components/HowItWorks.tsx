"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn, SlideUp } from "./Animators";
import { FileText, UserCheck, ShieldCheck } from "lucide-react"; // Added for new icons

export default function HowItWorks() {
    const steps = [
        {
            id: 1,
            title: "Post Your Requirement",
            description: "Create a detailed range of buying requests. bechoHub.com's AI helps you specify grades, quantities, and delivery terms.",
            icon: FileText,
        },
        {
            id: 2,
            title: "Get Verified Quotes",
            description: "Receive competitive quotes from GST-verified suppliers within 24 hours. Compare prices and supplier ratings.",
            icon: UserCheck,
        },
        {
            id: 3,
            title: "Secure Payment & Delivery",
            description: "Pay via vibrant bechoHub.com Escrow. Funds are released only after you approve the goods. End-to-end tracking included.",
            icon: ShieldCheck,
        },
    ];

    return (
        <div className="relative py-24 sm:py-32 overflow-hidden">
            <div className="absolute inset-0 bg-slate-950 -z-10"></div>
            {/* Soft gradient blob */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">

                    {/* Left Column: Steps */}
                    <div>
                        <FadeIn>
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6 font-heading">
                                How It Works
                            </h2>
                            <p className="text-lg text-slate-400 mb-12">
                                Streamline your procurement process in three simple steps.
                            </p>
                        </FadeIn>

                        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent before:hidden">
                            {/* Manual line connector if needed, simplified for now */}

                            {steps.map((step, index) => (
                                <SlideUp key={step.id} delay={index * 0.2} className="relative flex gap-6">
                                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-bold shadow-lg shadow-black/20 z-10 border transition-all duration-300
                                ${step.id === 2 ? 'bg-white border-white text-slate-950 scale-110' : 'bg-slate-900 border-white/10 text-slate-500'}
                             `}>
                                        {step.id}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white">
                                            {step.title}
                                        </h3>
                                        <p className="mt-2 text-base text-slate-400">
                                            {step.description}
                                        </p>
                                    </div>
                                </SlideUp>
                            ))}
                            <FadeIn delay={0.6} className="pt-6">
                                <button className="bg-white text-slate-950 px-6 py-3 rounded-full font-semibold hover:bg-slate-200 transition-colors transform hover:-translate-y-1 duration-200 shadow-lg shadow-white/5 hover:shadow-white/10">
                                    Start Sourcing Now
                                </button>
                            </FadeIn>
                        </div>

                    </div>

                    {/* Right Column: Visualization */}
                    <div className="mt-12 lg:mt-0 relative">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative rounded-2xl bg-slate-900 p-2 sm:p-4 shadow-2xl ring-1 ring-white/10 transform hover:scale-[1.01] transition-transform duration-500 shadow-black/50"
                        >
                            <Image
                                src="/dashboard-mockup.png"
                                alt="Becho.com Dashboard Interface"
                                width={800}
                                height={600}
                                className="w-full rounded-lg shadow-inner"
                            />
                        </motion.div>
                    </div>

                </div>
            </div>
        </div>
    );
}
