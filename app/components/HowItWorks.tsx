"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn, SlideUp } from "./Animators";

export default function HowItWorks() {
    const steps = [
        {
            id: 1,
            title: "Post Your Requirement",
            description:
                "Specify product details, quantity, and budget. It takes less than 2 minutes.",
            bg: "bg-orange-500",
        },
        {
            id: 2,
            title: "Receive Quotes",
            description:
                "Get competitive quotes from verified suppliers within 24 hours.",
            bg: "border border-teal-500 text-teal-600",
            textColor: "text-teal-600",
        },
        {
            id: 3,
            title: "Select & Pay Securely",
            description:
                "Choose the best offer, pay via secure gateway, and track your shipment.",
            bg: "bg-green-500",
        },
    ];

    return (
        <div className="bg-white py-24 sm:py-32 overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">

                    {/* Left Column: Steps */}
                    <div>
                        <FadeIn>
                            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
                                How It Works
                            </h2>
                            <p className="text-lg text-gray-500 mb-12">
                                Streamline your procurement process in three simple steps.
                            </p>
                        </FadeIn>

                        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent before:hidden">
                            {/* Manual line connector if needed, simplified for now */}

                            {steps.map((step, index) => (
                                <SlideUp key={step.id} delay={index * 0.2} className="relative flex gap-6">
                                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-bold shadow-sm z-10 
                                ${step.id === 2 ? 'bg-white border-2 border-teal-500 text-teal-600' : 'text-white'}
                                ${step.id === 1 ? 'bg-orange-500' : ''}
                                ${step.id === 3 ? 'bg-green-500' : ''}
                             `}>
                                        {step.id}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900">
                                            {step.title}
                                        </h3>
                                        <p className="mt-2 text-base text-gray-500">
                                            {step.description}
                                        </p>
                                    </div>
                                </SlideUp>
                            ))}
                            <FadeIn delay={0.6} className="pt-6">
                                <button className="bg-slate-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-slate-800 transition-colors transform hover:-translate-y-1 duration-200 shadow-sm hover:shadow-lg">
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
                            className="relative rounded-2xl bg-gray-50 p-2 sm:p-4 shadow-2xl ring-1 ring-gray-900/10 transform hover:scale-[1.01] transition-transform duration-500"
                        >
                            <Image
                                src="/dashboard-mockup.png"
                                alt="B2B Connect Dashboard Interface"
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
