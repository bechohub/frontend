"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FadeIn, SlideUp } from "../components/Animators";
import { Search, ShoppingCart, Truck, CreditCard, Factory, UploadCloud, BadgeCheck, DollarSign, ChevronDown, ChevronUp } from "lucide-react";

export default function HowItWorksPage() {
    const [activeTab, setActiveTab] = useState<'buyer' | 'supplier'>('buyer');
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (id: number) => {
        setOpenFaq(openFaq === id ? null : id);
    };

    const buyerSteps = [
        {
            id: 1,
            title: "Post Your Requirement",
            desc: "Tell us what you need, including quantity, specifications, and target price.",
            icon: Search,
            color: "bg-blue-100 text-blue-600",
        },
        {
            id: 2,
            title: "Receive Quotes",
            desc: "Verified suppliers submit competitive bids within 24 hours.",
            icon: DollarSign,
            color: "bg-green-100 text-green-600",
        },
        {
            id: 3,
            title: "Secure Payment",
            desc: "Pay into our secure escrow account. Funds are released only after delivery.",
            icon: CreditCard,
            color: "bg-purple-100 text-purple-600",
        },
        {
            id: 4,
            title: "Delivery & Feedback",
            desc: "Track your shipment and rate your supplier to build trust.",
            icon: Truck,
            color: "bg-orange-100 text-orange-600",
        },
    ];

    const supplierSteps = [
        {
            id: 1,
            title: "Create Profile",
            desc: "Sign up and complete your business profile with GST and certifications.",
            icon: Factory,
            color: "bg-teal-100 text-teal-600",
        },
        {
            id: 2,
            title: "Browse Leads",
            desc: "Access thousands of verified buy requirements from across the country.",
            icon: Search,
            color: "bg-indigo-100 text-indigo-600",
        },
        {
            id: 3,
            title: "Submit Quotes",
            desc: "Send your best offers directly to buyers without intermediaries.",
            icon: UploadCloud,
            color: "bg-pink-100 text-pink-600",
        },
        {
            id: 4,
            title: "Get Paid Fast",
            desc: "Receive payments securely upon successful delivery of goods.",
            icon: BadgeCheck,
            color: "bg-yellow-100 text-yellow-600",
        },
    ];

    const faqs = [
        {
            id: 1,
            question: "Is there a fee to join Becho.com?",
            answer: "Registration is free for both buyers and suppliers. We charge a small transaction fee only when a deal is successfully closed.",
        },
        {
            id: 2,
            question: "How do you verify suppliers?",
            answer: "We verify GST registration, business address, and bank details. We also conduct physical site visits for premium suppliers.",
        },
        {
            id: 3,
            question: "Is my payment safe?",
            answer: "Yes, we use an escrow system. Your payment is held securely and only released to the supplier after you confirm receipt of goods.",
        },
        {
            id: 4,
            question: "Can I source custom manufactured products?",
            answer: "Absolutely! You can upload technical specifications and drawings when posting an RFQ.",
        },
    ];

    const steps = activeTab === 'buyer' ? buyerSteps : supplierSteps;

    return (
        <div className="min-h-screen bg-slate-950 font-sans text-white">
            <Navbar />

            <main>
                {/* Header */}
                <div className="bg-slate-950 py-32 text-center text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                        <FadeIn>
                            <h1 className="text-4xl font-bold tracking-tight mb-6 font-heading">
                                How <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">bechoHub.com</span> Works
                            </h1>
                            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                                A simple, secure, and transparent process designed for modern B2B trade.
                                The most secure and efficient way to source from verified Indian manufacturers.
                                No ambiguity, just business.
                            </p>
                        </FadeIn>
                    </div>
                </div>

                {/* Toggle & Steps */}
                <div className="py-32 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-center mb-20">
                        <div className="bg-white/5 p-1.5 rounded-full inline-flex border border-white/10">
                            <button
                                onClick={() => setActiveTab('buyer')}
                                className={`px-10 py-3 rounded-full text-sm font-bold transition-all duration-300
                            ${activeTab === 'buyer' ? 'bg-teal-500 text-white shadow-lg shadow-teal-500/20' : 'text-slate-400 hover:text-white hover:bg-white/5'}
                        `}
                            >
                                For Buyers
                            </button>
                            <button
                                onClick={() => setActiveTab('supplier')}
                                className={`px-10 py-3 rounded-full text-sm font-bold transition-all duration-300
                            ${activeTab === 'supplier' ? 'bg-teal-500 text-white shadow-lg shadow-teal-500/20' : 'text-slate-400 hover:text-white hover:bg-white/5'}
                        `}
                            >
                                For Suppliers
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {steps.map((step, index) => (
                            <SlideUp key={step.id} delay={index * 0.1}>
                                <div className="bg-white/5 p-10 rounded-[2rem] shadow-lg shadow-black/20 border border-white/5 h-full hover:shadow-teal-500/10 hover:border-white/10 transition-all duration-500 group">
                                    <div className={`h-16 w-16 rounded-2xl flex items-center justify-center mb-8 ${step.color.replace('text-', 'bg-opacity-10 text-')}`}>
                                        <step.icon className="h-8 w-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                                    <p className="text-slate-400 leading-relaxed text-lg">{step.desc}</p>
                                </div>
                            </SlideUp>
                        ))}
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="bg-slate-900/50 py-32 border-t border-white/5">
                    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold tracking-tight text-white font-heading">Expert Answers</h2>
                        </div>

                        <div className="space-y-6">
                            {faqs.map((faq) => (
                                <div key={faq.id} className="bg-white/5 border border-white/5 rounded-2xl overflow-hidden shadow-sm hover:bg-white/10 transition-colors">
                                    <button
                                        onClick={() => toggleFaq(faq.id)}
                                        className="flex w-full items-center justify-between px-8 py-6 text-left"
                                    >
                                        <span className="font-bold text-white text-lg">{faq.question}</span>
                                        {openFaq === faq.id ? <ChevronUp className="h-5 w-5 text-slate-400" /> : <ChevronDown className="h-5 w-5 text-slate-400" />}
                                    </button>
                                    {openFaq === faq.id && (
                                        <div className="px-8 pb-8 pt-0 text-slate-400 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA - Premium Dark */}
                <div className="bg-slate-950 py-32 text-center text-white">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-8 font-heading">
                            Ready to modernize your supply chain?
                        </h2>
                        <div className="flex justify-center gap-6">
                            <a href="/signup" className="bg-white text-slate-950 px-10 py-4 rounded-full font-bold shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:bg-slate-200 transition-all active:scale-95">
                                Start Free Account
                            </a>
                        </div>
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
}
