"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Factory, ShoppingBag } from "lucide-react";

export default function SignUp() {
    const [userType, setUserType] = useState<'buyer' | 'supplier'>('buyer');

    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-slate-950">
            {/* Left Side - Branding & Testimonial */}
            <div className="hidden md:flex flex-col justify-between bg-slate-950 p-12 text-white relative overflow-hidden border-r border-white/5">
                {/* Abstract Background Pattern */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <circle cx="0" cy="0" r="40" fill="white" />
                        <circle cx="100" cy="100" r="40" fill="white" />
                    </svg>
                </div>

                <div className="relative z-10">
                    <Link href="/" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                        <ArrowLeft className="h-4 w-4" /> Back to Home
                    </Link>
                </div>

                <div className="relative z-10 space-y-8">
                    <div className="h-14 w-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 border border-white/10 backdrop-blur-sm">
                        <CheckCircle2 className="h-7 w-7 text-white" />
                    </div>
                    <blockquote className="text-3xl font-medium leading-tight tracking-tight">
                        &quot;Finding reliable suppliers used to take weeks. With bechoHub.com, we posted an RFQ and closed the deal in 3 days.&quot;
                    </blockquote>
                    <div>
                        <p className="font-bold text-lg">Anita Desai</p>
                        <p className="text-zinc-400">CEO, Desai Electronics</p>
                    </div>
                </div>

                <div className="relative z-10 text-sm text-zinc-500">
                    &copy; 2024 Becho.com. All rights reserved.
                </div>
            </div>

            {/* Right Side - Sign Up Form */}
            <div className="flex items-center justify-center p-8 bg-slate-900">
                <div className="w-full max-w-md space-y-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-white font-heading">Create an account</h2>
                        <p className="mt-2 text-sm text-slate-400">
                            Join thousands of businesses trading securely
                        </p>
                    </div>

                    {/* User Type Toggle */}
                    <div className="grid grid-cols-2 gap-4 p-1 bg-black/20 rounded-lg">
                        <button
                            onClick={() => setUserType('buyer')}
                            className={`flex items-center justify-center gap-2 py-3 rounded-md text-sm font-semibold transition-all
                        ${userType === 'buyer' ? 'bg-teal-500 text-white shadow-sm ring-1 ring-white/10' : 'text-slate-400 hover:text-white hover:bg-white/5'}
                    `}
                        >
                            <ShoppingBag className="h-4 w-4" /> I am a Buyer
                        </button>
                        <button
                            onClick={() => setUserType('supplier')}
                            className={`flex items-center justify-center gap-2 py-3 rounded-md text-sm font-semibold transition-all
                        ${userType === 'supplier' ? 'bg-teal-500 text-white shadow-sm ring-1 ring-white/10' : 'text-slate-400 hover:text-white hover:bg-white/5'}
                    `}
                        >
                            <Factory className="h-4 w-4" /> I am a Supplier
                        </button>
                    </div>

                    <form className="mt-8 space-y-6">
                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-300">First Name</label>
                                    <input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        required
                                        className="mt-1 block w-full rounded-md border border-white/10 bg-slate-950 px-3 py-2 text-white placeholder-slate-500 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 sm:text-sm"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-300">Last Name</label>
                                    <input
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        required
                                        className="mt-1 block w-full rounded-md border border-white/10 bg-slate-950 px-3 py-2 text-white placeholder-slate-500 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-300">Work Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className="mt-1 block w-full rounded-md border border-white/10 bg-slate-950 px-3 py-2 text-white placeholder-slate-500 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 sm:text-sm"
                                    placeholder="you@company.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="company" className="block text-sm font-medium text-slate-300">Company Name</label>
                                <input
                                    id="company"
                                    name="company"
                                    type="text"
                                    required
                                    className="mt-1 block w-full rounded-md border border-white/10 bg-slate-950 px-3 py-2 text-white placeholder-slate-500 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 sm:text-sm"
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-slate-300">Password</label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    className="mt-1 block w-full rounded-md border border-white/10 bg-slate-950 px-3 py-2 text-white placeholder-slate-500 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 sm:text-sm"
                                    placeholder="••••••••"
                                />
                                <p className="mt-1 text-xs text-slate-500">Must be at least 8 characters</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <input
                                id="terms"
                                name="terms"
                                type="checkbox"
                                required
                                className="h-4 w-4 rounded border-white/20 bg-slate-950 text-teal-600 focus:ring-teal-500"
                            />
                            <label htmlFor="terms" className="ml-2 block text-sm text-slate-400">
                                I agree to the <a href="#" className="text-teal-400 hover:text-teal-300 underline">Terms</a> and <a href="#" className="text-teal-400 hover:text-teal-300 underline">Privacy Policy</a>
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-teal-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 transition-all"
                        >
                            Create Account
                        </button>

                    </form>

                    <p className="mt-10 text-center text-sm text-slate-500">
                        Already have an account?{" "}
                        <Link href="/login" className="font-semibold leading-6 text-teal-400 hover:text-teal-300">
                            Log in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
