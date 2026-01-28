"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowLeft,
    CheckCircle2,
    Factory,
    ShoppingBag,
    ArrowRight,
    Building2,
    User,
    ShieldCheck,
    ChevronLeft,
    Briefcase,
    Smartphone,
    Check,
    BadgeCheck
} from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";
import { Suspense } from "react";

function SignUpForm() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const initialType = searchParams.get('type') as 'buyer' | 'supplier' | null;

    const [step, setStep] = useState(1);
    const [userType, setUserType] = useState<'buyer' | 'supplier' | null>(initialType);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        companyName: "",
        gstNumber: "",
        category: "",
        businessScale: "",
        password: "",
    });

    const totalSteps = 4;

    const nextStep = () => setStep(s => Math.min(s + 1, totalSteps + 1));
    const prevStep = () => setStep(s => Math.max(s - 1, 1));

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const isStepValid = () => {
        if (step === 1) return true; // Role is already selected
        if (step === 2) return formData.firstName && formData.email && formData.phone;
        if (step === 3) return formData.companyName && formData.category && formData.businessScale;
        if (step === 4) return formData.password.length >= 8;
        return true;
    };

    return (
        <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-cyan-500/30 overflow-hidden flex flex-col">

            {/* Background Ambience */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-fuchsia-500/10 rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />
            </div>

            {/* Header / Navigation */}
            <header className="p-6 md:p-10 flex justify-between items-center transition-opacity duration-500">
                <Link href="/" className="text-2xl font-black tracking-tighter hover:opacity-80 transition-opacity">
                    bechoHub
                </Link>
                {step <= totalSteps && (
                    <div className="flex gap-2">
                        {Array.from({ length: totalSteps }).map((_, i) => (
                            <div
                                key={i}
                                className={`h-1.5 rounded-full transition-all duration-500 ${i + 1 <= step ? 'w-8 bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]' : 'w-2 bg-white/10'
                                    }`}
                            />
                        ))}
                    </div>
                )}
            </header>

            <main className="flex-1 flex items-center justify-center p-6 relative">
                <AnimatePresence mode="wait">

                    {/* Step 1: Welcome & Role */}
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="w-full max-w-xl text-center"
                        >
                            <h2 className="text-4xl md:text-6xl font-black tracking-tightest mb-6 uppercase">Registration <br /><span className="text-cyan-400">Type.</span></h2>
                            <p className="text-slate-400 text-lg mb-12 font-light">Select your path to start scaling your business.</p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4">
                                <button
                                    onClick={() => { setUserType('buyer'); setTimeout(nextStep, 150); }}
                                    className="group p-8 rounded-[32px] border border-white/5 bg-white/5 hover:bg-white/10 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all text-left relative overflow-hidden active:scale-95"
                                >
                                    <ShoppingBag className="h-10 w-10 mb-6 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                                    <h3 className="text-xl font-bold mb-2">I am a Buyer</h3>
                                    <p className="text-sm text-slate-400 font-light leading-relaxed">Sourcing high-quality goods from verified manufacturers.</p>
                                    <ArrowRight className="absolute bottom-8 right-8 h-6 w-6 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-cyan-400" />
                                </button>

                                <button
                                    onClick={() => { setUserType('supplier'); setTimeout(nextStep, 150); }}
                                    className="group p-8 rounded-[32px] border border-white/5 bg-white/5 hover:bg-white/10 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all text-left relative overflow-hidden active:scale-95"
                                >
                                    <Factory className="h-10 w-10 mb-6 text-slate-500 group-hover:text-indigo-400 transition-colors" />
                                    <h3 className="text-xl font-bold mb-2">I am a Seller</h3>
                                    <p className="text-sm text-slate-400 font-light leading-relaxed">Listing manufacturing capacity and connecting with buyers.</p>
                                    <ArrowRight className="absolute bottom-8 right-8 h-6 w-6 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-indigo-400" />
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {/* Step 2: Personal Identity */}
                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="w-full max-w-md"
                        >
                            <button onClick={prevStep} className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors mb-8 text-sm font-bold uppercase tracking-widest">
                                <ChevronLeft className="h-4 w-4" /> Go Back
                            </button>
                            <h2 className="text-4xl font-black tracking-tightest mb-8 uppercase">Identity <br /><span className="text-cyan-400">Details.</span></h2>

                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Full Name</label>
                                    <div className="relative group">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500 group-focus-within:text-cyan-400 transition-colors" />
                                        <input
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            placeholder="John Doe"
                                            className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 pl-12 pr-4 focus:bg-white/10 focus:border-cyan-500/50 outline-none transition-all text-white placeholder:text-slate-600"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Work Email</label>
                                    <div className="relative group">
                                        <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500 group-focus-within:text-cyan-400 transition-colors" />
                                        <input
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="john@company.com"
                                            className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 pl-12 pr-4 focus:bg-white/10 focus:border-cyan-500/50 outline-none transition-all text-white placeholder:text-slate-600"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Phone Number</label>
                                    <div className="relative group">
                                        <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500 group-focus-within:text-cyan-400 transition-colors" />
                                        <input
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            placeholder="+91 98765 43210"
                                            className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 pl-12 pr-4 focus:bg-white/10 focus:border-cyan-500/50 outline-none transition-all text-white placeholder:text-slate-600"
                                        />
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={nextStep}
                                disabled={!isStepValid()}
                                className="w-full mt-10 py-5 rounded-2xl bg-cyan-500 text-slate-950 font-black uppercase tracking-widest hover:bg-cyan-400 transition-all active:scale-[0.98] disabled:opacity-20 disabled:grayscale disabled:pointer-events-none shadow-[0_20px_40px_rgba(6,182,212,0.2)]"
                            >
                                Continue
                            </button>
                        </motion.div>
                    )}

                    {/* Step 3: Business Identity - Diverged by Role */}
                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="w-full max-w-md"
                        >
                            <button onClick={prevStep} className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors mb-8 text-sm font-bold uppercase tracking-widest">
                                <ChevronLeft className="h-4 w-4" /> Go Back
                            </button>
                            <h2 className="text-4xl font-black tracking-tightest mb-8 uppercase">Business <br /><span className="text-cyan-400">Information.</span></h2>

                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Company Registered Name</label>
                                    <div className="relative group">
                                        <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500 group-focus-within:text-cyan-400 transition-colors" />
                                        <input
                                            name="companyName"
                                            value={formData.companyName}
                                            onChange={handleInputChange}
                                            placeholder="Acme Corporation Ltd"
                                            className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 pl-12 pr-4 focus:bg-white/10 focus:border-cyan-500/50 outline-none transition-all text-white placeholder:text-slate-600"
                                        />
                                    </div>
                                </div>

                                {userType === 'buyer' ? (
                                    <>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Sourcing Category</label>
                                            <div className="relative group">
                                                <ShoppingBag className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500 group-focus-within:text-cyan-400 transition-colors" />
                                                <select
                                                    name="category"
                                                    value={formData.category}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 pl-12 pr-4 focus:bg-white/10 focus:border-cyan-500/50 outline-none transition-all text-white appearance-none"
                                                >
                                                    <option value="" className="bg-slate-900">Select Category</option>
                                                    <option value="textiles" className="bg-slate-900">Textiles & Apparel</option>
                                                    <option value="electronics" className="bg-slate-900">Electronics & Electrical</option>
                                                    <option value="industrial" className="bg-slate-900">Industrial Machinery</option>
                                                    <option value="raw_materials" className="bg-slate-900">Raw Materials & Chemicals</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Monthly Sourcing Volume</label>
                                            <div className="grid grid-cols-2 gap-3 mt-2">
                                                {['< 10L', '10L - 1Cr', '1Cr - 10Cr', '10Cr+'].map((vol) => (
                                                    <button
                                                        key={vol}
                                                        onClick={() => setFormData(prev => ({ ...prev, businessScale: vol }))}
                                                        className={`py-3 px-4 rounded-xl border text-[10px] font-bold uppercase transition-all ${formData.businessScale === vol
                                                            ? 'bg-cyan-500 border-cyan-500 text-slate-950'
                                                            : 'bg-white/5 border-white/5 text-slate-400 hover:bg-white/10'
                                                            }`}
                                                    >
                                                        {vol}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Product Category</label>
                                            <div className="relative group">
                                                <Factory className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500 group-focus-within:text-cyan-400 transition-colors" />
                                                <select
                                                    name="category"
                                                    value={formData.category}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 pl-12 pr-4 focus:bg-white/10 focus:border-cyan-500/50 outline-none transition-all text-white appearance-none"
                                                >
                                                    <option value="" className="bg-slate-900">Select Category</option>
                                                    <option value="footwear" className="bg-slate-900">Footwear & Leather</option>
                                                    <option value="tea_coffee" className="bg-slate-900">Tea & Coffee</option>
                                                    <option value="grains" className="bg-slate-900">Grains & Rice</option>
                                                    <option value="apparel" className="bg-slate-900">Apparel & Textiles</option>
                                                    <option value="electronics" className="bg-slate-900">Consumer Electronics</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Supply Capacity</label>
                                            <div className="grid grid-cols-2 gap-3 mt-2">
                                                {['Retail Orders', 'Small Wholesale', 'Bulk Supplier', 'Large Enterprise'].map((cap) => (
                                                    <button
                                                        key={cap}
                                                        onClick={() => setFormData(prev => ({ ...prev, businessScale: cap }))}
                                                        className={`py-3 px-4 rounded-xl border text-[10px] font-bold uppercase transition-all ${formData.businessScale === cap
                                                            ? 'bg-indigo-500 border-indigo-500 text-white'
                                                            : 'bg-white/5 border-white/5 text-slate-400 hover:bg-white/10'
                                                            }`}
                                                    >
                                                        {cap}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">GST Number (Required for Verification)</label>
                                            <div className="relative group">
                                                <BadgeCheck className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500 group-focus-within:text-cyan-400 transition-colors" />
                                                <input
                                                    name="gstNumber"
                                                    value={formData.gstNumber}
                                                    onChange={handleInputChange}
                                                    placeholder="22AAAAA0000A1Z5"
                                                    className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 pl-12 pr-4 focus:bg-white/10 focus:border-cyan-500/50 outline-none transition-all text-white placeholder:text-slate-600"
                                                />
                                            </div>
                                            <p className="text-[10px] text-cyan-400/60 font-medium tracking-tight">Verified sellers receive 4x more buyer queries.</p>
                                        </div>
                                    </>
                                )}
                            </div>

                            <button
                                onClick={nextStep}
                                disabled={!isStepValid()}
                                className="w-full mt-10 py-5 rounded-2xl bg-cyan-500 text-slate-950 font-black uppercase tracking-widest hover:bg-cyan-400 transition-all active:scale-[0.98] disabled:opacity-20 disabled:grayscale disabled:pointer-events-none shadow-[0_20px_40px_rgba(6,182,212,0.2)]"
                            >
                                Continue
                            </button>
                        </motion.div>
                    )}

                    {/* Step 4: Security */}
                    {step === 4 && (
                        <motion.div
                            key="step4"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="w-full max-w-md"
                        >
                            <button onClick={prevStep} className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors mb-8 text-sm font-bold uppercase tracking-widest">
                                <ChevronLeft className="h-4 w-4" /> Go Back
                            </button>
                            <h2 className="text-4xl font-black tracking-tightest mb-8 uppercase">Account <br /><span className="text-cyan-400">Security.</span></h2>

                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Create Password</label>
                                    <div className="relative group">
                                        <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500 group-focus-within:text-cyan-400 transition-colors" />
                                        <input
                                            name="password"
                                            type="password"
                                            value={formData.password}
                                            onChange={handleInputChange}
                                            placeholder="••••••••"
                                            className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 pl-12 pr-4 focus:bg-white/10 focus:border-cyan-500/50 outline-none transition-all text-white placeholder:text-slate-600"
                                        />
                                    </div>
                                    <p className="text-[10px] text-slate-600 font-bold tracking-tight uppercase tracking-wider">Must be at least 8 characters.</p>
                                </div>
                                <div className="flex items-start gap-3 p-4 bg-white/5 rounded-2xl border border-white/5 mt-4">
                                    <input type="checkbox" className="mt-1 h-4 w-4 rounded bg-white/10 border-white/10 text-cyan-500 focus:ring-cyan-500" required />
                                    <p className="text-[11px] text-slate-400 leading-relaxed font-light">
                                        I agree to the <Link href="#" className="text-cyan-400 hover:underline">Terms of Service</Link> and <Link href="#" className="text-cyan-400 hover:underline">Privacy Policy</Link>.
                                    </p>
                                </div>
                            </div>

                            <button
                                onClick={nextStep}
                                disabled={!isStepValid()}
                                className="w-full mt-10 py-5 rounded-2xl bg-cyan-500 text-slate-950 font-black uppercase tracking-widest hover:bg-cyan-400 transition-all active:scale-[0.98] disabled:opacity-20 disabled:grayscale disabled:pointer-events-none shadow-[0_20px_40px_rgba(6,182,212,0.2)]"
                            >
                                Finish Setup
                            </button>
                        </motion.div>
                    )}

                    {/* Step 5: Success */}
                    {step === 5 && (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="w-full max-w-xl text-center"
                        >
                            <div className="w-24 h-24 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-10 shadow-[0_0_50px_rgba(6,182,212,0.2)]">
                                <Check className="h-10 w-10 text-cyan-400" strokeWidth={4} />
                            </div>
                            <h2 className="text-5xl md:text-7xl font-black tracking-tightest mb-6">Welcome to <br /><span className="text-cyan-400">bechoHub.</span></h2>
                            <p className="text-slate-400 text-xl mb-12 font-light">Your application is under review. <br />You will receive a verification call within 24 hours.</p>

                            <button
                                onClick={() => router.push("/")}
                                className="px-12 py-5 rounded-full bg-white text-slate-950 font-black uppercase tracking-widest hover:bg-slate-100 transition-all active:scale-[0.95]"
                            >
                                Continue to Home
                            </button>
                        </motion.div>
                    )}

                </AnimatePresence>
            </main>

            {/* Footer Watermark */}
            <div className="p-10 text-center opacity-20 hidden md:block select-none pointer-events-none">
                <div className="text-[12vw] font-black tracking-tighter text-white/[0.03]">
                    BECHOHUB
                </div>
            </div>
        </div >
    );
}

export default function SignUp() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">Loading...</div>}>
            <SignUpForm />
        </Suspense>
    );
}
