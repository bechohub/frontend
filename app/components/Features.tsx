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
            color: "text-teal-500",
            bg: "bg-teal-50",
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
        <div className="bg-slate-50 py-24 sm:py-32 overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Why Choose B2B Connect
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-gray-600">
                        Built for speed, clarity, and trust in every B2B transaction.
                    </p>
                </div>

                <StaggerContainer className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {features.map((feature) => (
                            <StaggerItem key={feature.name}>
                                <ScaleOnHover className="flex flex-col h-full bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                                    <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-slate-900 mb-4">
                                        <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${feature.bg}`}>
                                            <feature.icon className={`h-6 w-6 ${feature.color}`} aria-hidden="true" />
                                        </div>
                                    </dt>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.name}</h3>
                                    <dd className="flex flex-auto flex-col text-base leading-7 text-gray-600">
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
