"use client";

import { BadgeCheck, Lock, Truck } from "lucide-react";
import { StaggerContainer, StaggerItem, ScaleOnHover } from "./Animators";

export default function Features() {
    const features = [
        {
            name: "100% Verified Suppliers",
            description:
                "Say goodbye to fraud. Every MSME is GST verified and background checked rigorously before they can list on our platform.",
            icon: BadgeCheck,
            color: "text-orange-500",
            bg: "bg-orange-50",
        },
        {
            name: "Secure Escrow Payments",
            description:
                "Your money is safe. Funds are held in a secure escrow account and only released to the supplier after you confirm product quality.",
            icon: Lock,
            color: "text-blue-600",
            bg: "bg-blue-50",
        },
        {
            name: "End-to-End Logistics",
            description:
                "From warehouse to your doorstep. We partner with top logistics providers to ensure timely and trackable delivery across India.",
            icon: Truck,
            color: "text-green-500",
            bg: "bg-green-50",
        },
    ];

    return (
        <div className="bg-slate-950 py-24 sm:py-32 overflow-hidden relative">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-heading">
                        Why Choose bechoHub.com
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-slate-400">
                        Built for speed, clarity, and trust in every B2B transaction.
                    </p>
                </div>

                <StaggerContainer className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {features.map((feature) => (
                            <StaggerItem key={feature.name}>
                                <ScaleOnHover className="flex flex-col h-full bg-white/5 p-8 rounded-2xl shadow-lg shadow-black/20 border border-white/5 hover:border-transparent relative group overflow-hidden transition-all duration-300">
                                    {/* Gradient Border Effect */}
                                    <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:from-teal-500 group-hover:via-blue-500 group-hover:to-violet-500 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="absolute inset-[1px] bg-slate-950/90 rounded-[15px] -z-10"></div>

                                    <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-white mb-4">
                                        <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300`}>
                                            <feature.icon className={`h-6 w-6 ${feature.color}`} aria-hidden="true" />
                                        </div>
                                    </dt>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">{feature.name}</h3>
                                    <dd className="flex flex-auto flex-col text-base leading-7 text-slate-400">
                                        <p className="flex-auto">{feature.description}</p>
                                    </dd>
                                </ScaleOnHover>
                            </StaggerItem>
                        ))}
                    </dl>
                </StaggerContainer>
            </div>
        </div>
    );
}
