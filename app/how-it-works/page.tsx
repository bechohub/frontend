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
            question: "Is there a fee to join B2B Connect?",
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
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
            <Navbar />

            <main>
                {/* Header */}
                <div className="bg-slate-900 py-24 text-center text-white">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <FadeIn>
                            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                                Simplifying B2B Trade
                            </h1>
                            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                                Whether you're buying materials or selling products, we make the process transparent, secure, and efficient.
                            </p>
                        </FadeIn>
                    </div>
                </div>

                {/* Toggle & Steps */}
                <div className="py-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-center mb-16">
                        <div className="bg-white p-1 rounded-full shadow-sm border border-gray-200 inline-flex">
                            <button
                                onClick={() => setActiveTab('buyer')}
                                className={`px-8 py-3 rounded-full text-sm font-bold transition-all
                            ${activeTab === 'buyer' ? 'bg-[#008ba3] text-white shadow-md' : 'text-gray-500 hover:text-gray-900'}
                        `}
                            >
                                For Buyers
                            </button>
                            <button
                                onClick={() => setActiveTab('supplier')}
                                className={`px-8 py-3 rounded-full text-sm font-bold transition-all
                            ${activeTab === 'supplier' ? 'bg-[#008ba3] text-white shadow-md' : 'text-gray-500 hover:text-gray-900'}
                        `}
                            >
                                For Suppliers
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <SlideUp key={step.id} delay={index * 0.1}>
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full hover:shadow-lg transition-shadow">
                                    <div className={`h-14 w-14 rounded-xl flex items-center justify-center mb-6 ${step.color}`}>
                                        <step.icon className="h-7 w-7" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                                    <p className="text-gray-500 leading-relaxed">{step.desc}</p>
                                </div>
                            </SlideUp>
                        ))}
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="bg-white py-24 border-t border-gray-100">
                    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Frequently Asked Questions</h2>
                        </div>

                        <div className="space-y-4">
                            {faqs.map((faq) => (
                                <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
                                    <button
                                        onClick={() => toggleFaq(faq.id)}
                                        className="flex w-full items-center justify-between px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                                    >
                                        <span className="font-semibold text-slate-900">{faq.question}</span>
                                        {openFaq === faq.id ? <ChevronUp className="h-5 w-5 text-gray-400" /> : <ChevronDown className="h-5 w-5 text-gray-400" />}
                                    </button>
                                    {openFaq === faq.id && (
                                        <div className="px-6 py-4 bg-white border-t border-gray-100 text-gray-600 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-[#008ba3] py-24 text-center">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                            Ready to get started?
                        </h2>
                        <p className="text-teal-100 mb-10 max-w-2xl mx-auto text-lg">
                            Join thousands of businesses growing with B2B Connect today.
                        </p>
                        <div className="flex justify-center gap-4">
                            <a href="/signup" className="bg-white text-[#008ba3] px-8 py-3 rounded-full font-bold shadow-lg hover:bg-gray-100 hover:shadow-xl transition-all">
                                Create Free Account
                            </a>
                        </div>
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
}
