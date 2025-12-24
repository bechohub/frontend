"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Factory, ShoppingBag } from "lucide-react";

export default function SignUp() {
    const [userType, setUserType] = useState<'buyer' | 'supplier'>('buyer');

    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
            {/* Left Side - Branding & Testimonial */}
            <div className="hidden md:flex flex-col justify-between bg-teal-900 p-12 text-white relative overflow-hidden">
                {/* Abstract Background Pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <circle cx="0" cy="0" r="40" fill="white" />
                        <circle cx="100" cy="100" r="40" fill="white" />
                    </svg>
                </div>

                <div className="relative z-10">
                    <Link href="/" className="flex items-center gap-2 text-white/90 hover:text-white transition-colors">
                        <ArrowLeft className="h-5 w-5" /> Back to Home
                    </Link>
                </div>

                <div className="relative z-10 space-y-6">
                    <div className="h-12 w-12 rounded-lg bg-white/10 flex items-center justify-center mb-4 border border-white/20">
                        <CheckCircle2 className="h-6 w-6 text-teal-300" />
                    </div>
                    <blockquote className="text-2xl font-medium leading-relaxed">
                        "Finding reliable suppliers used to take weeks. With B2B Connect, we posted an RFQ and closed the deal in 3 days."
                    </blockquote>
                    <div>
                        <p className="font-bold text-lg">Anita Desai</p>
                        <p className="text-teal-200">CEO, Desai Electronics</p>
                    </div>
                </div>

                <div className="relative z-10 text-sm text-teal-200">
                    &copy; 2024 B2B Connect. All rights reserved.
                </div>
            </div>

            {/* Right Side - Sign Up Form */}
            <div className="flex items-center justify-center p-8 bg-white">
                <div className="w-full max-w-md space-y-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Create an account</h2>
                        <p className="mt-2 text-sm text-gray-500">
                            Join thousands of businesses trading securely
                        </p>
                    </div>

                    {/* User Type Toggle */}
                    <div className="grid grid-cols-2 gap-4 p-1 bg-gray-100 rounded-lg">
                        <button
                            onClick={() => setUserType('buyer')}
                            className={`flex items-center justify-center gap-2 py-3 rounded-md text-sm font-semibold transition-all
                        ${userType === 'buyer' ? 'bg-white text-slate-900 shadow-sm ring-1 ring-gray-200' : 'text-gray-500 hover:text-gray-700'}
                    `}
                        >
                            <ShoppingBag className="h-4 w-4" /> I am a Buyer
                        </button>
                        <button
                            onClick={() => setUserType('supplier')}
                            className={`flex items-center justify-center gap-2 py-3 rounded-md text-sm font-semibold transition-all
                        ${userType === 'supplier' ? 'bg-white text-slate-900 shadow-sm ring-1 ring-gray-200' : 'text-gray-500 hover:text-gray-700'}
                    `}
                        >
                            <Factory className="h-4 w-4" /> I am a Supplier
                        </button>
                    </div>

                    <form className="mt-8 space-y-6">
                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-700">First Name</label>
                                    <input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        required
                                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-slate-900 placeholder-gray-400 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 sm:text-sm"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-700">Last Name</label>
                                    <input
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        required
                                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-slate-900 placeholder-gray-400 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700">Work Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-slate-900 placeholder-gray-400 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 sm:text-sm"
                                    placeholder="you@company.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="company" className="block text-sm font-medium text-slate-700">Company Name</label>
                                <input
                                    id="company"
                                    name="company"
                                    type="text"
                                    required
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-slate-900 placeholder-gray-400 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 sm:text-sm"
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-slate-700">Password</label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-slate-900 placeholder-gray-400 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 sm:text-sm"
                                    placeholder="••••••••"
                                />
                                <p className="mt-1 text-xs text-gray-500">Must be at least 8 characters</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <input
                                id="terms"
                                name="terms"
                                type="checkbox"
                                required
                                className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                            />
                            <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                                I agree to the <a href="#" className="text-teal-600 hover:text-teal-500 underline">Terms</a> and <a href="#" className="text-teal-600 hover:text-teal-500 underline">Privacy Policy</a>
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-[#008ba3] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#007b91] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 transition-all"
                        >
                            Create Account
                        </button>

                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Already have an account?{" "}
                        <Link href="/login" className="font-semibold leading-6 text-teal-600 hover:text-teal-500">
                            Log in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
