"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    Factory,
    ShoppingBag,
    ArrowRight,
    Building2,
    User,
    ShieldCheck,
    ChevronLeft,
    Briefcase,
    Smartphone,
    BadgeCheck,
    Loader2,
    Eye,
    EyeOff,
} from "lucide-react";
import { useSearchParams } from "next/navigation";
import { usePostHog } from "posthog-js/react";
import { Suspense } from "react";
import FormSuccess from "../components/FormSuccess";
import { INDUSTRY_CATEGORIES } from "@/constants";

function SignUpForm() {
    const searchParams = useSearchParams();
    const initialType = searchParams.get("type") as "buyer" | "seller" | null;

    const [step, setStep] = useState(1);
    const posthog = usePostHog();
    const [userType, setUserType] = useState<"buyer" | "seller" | null>(initialType);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        companyName: "",
        gstNumber: "",
        category: "",
        businessScale: "",
    });

    const totalSteps = 3;

    const nextStep = () => {
        setStep((s) => {
            const next = Math.min(s + 1, totalSteps + 1);
            posthog.capture("signup_step_next", {
                from_step: s,
                to_step: next,
                user_type: userType,
            });
            return next;
        });
    };

    const prevStep = () => {
        setStep((s) => {
            const prev = Math.max(s - 1, 1);
            posthog.capture("signup_step_prev", {
                from_step: s,
                to_step: prev,
            });
            return prev;
        });
    };

    const handleFinalSubmit = async () => {
        setIsSubmitting(true);

        const data = new FormData();
        data.append("email", formData.email);
        data.append("password", formData.password);
        data.append("firstName", formData.firstName);
        data.append("companyName", formData.companyName);
        data.append("role", userType || "buyer");
        data.append("category", formData.category);
        data.append("businessScale", formData.businessScale);
        data.append("gstNumber", formData.gstNumber);

        // Dynamic import to avoid server/client issues if not handled properly,
        // though typically we import at top. Let's assume we import 'signup' from actions.
        const { signup } = await import("../actions/auth");

        const result = await signup(null, data);

        setIsSubmitting(false);

        if (result?.error) {
            alert("Error: " + result.error);
            posthog.capture("signup_failed", {
                error: result.error,
                user_type: userType,
            });
        } else {
            posthog.capture("signup_success", {
                user_type: userType,
                email: formData.email,
            });
            // Also identify the user in PostHog
            posthog.identify(formData.email, {
                email: formData.email,
                firstName: formData.firstName,
                name: `${formData.firstName} ${formData.lastName}`,
                company: formData.companyName,
                role: userType,
            });
            setStep(4);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValidPhone = (phone: string) => /^\+?[0-9\s-]{10,}$/.test(phone);

    const isStepValid = () => {
        if (step === 1) return true;
        if (step === 2) {
            return (
                formData.firstName &&
                isValidEmail(formData.email) &&
                isValidPhone(formData.phone) &&
                formData.password &&
                formData.password.length >= 6
            );
        }
        if (step === 3) return formData.companyName && formData.category && formData.businessScale;
        return true;
    };

    return (
        <div className="min-h-screen bg-zinc-950 text-[#f0f0fa] font-sans selection:bg-cyan-600/30 selection:text-white overflow-hidden flex flex-col relative z-0">
            {/* Background Ambience */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
                <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-900/10 rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.1] mix-blend-overlay pointer-events-none" />
            </div>

            {/* Header / Navigation */}
            <header className="sticky top-0 z-50 w-full p-6 md:p-10 flex justify-between items-center transition-opacity duration-500 bg-zinc-950/50 backdrop-blur-xl border-b border-zinc-900">
                <Link
                    href="/"
                    className="text-2xl font-black tracking-tighter text-white font-heading hover:opacity-80 transition-opacity"
                >
                    becho<span className="text-cyan-600">Hub</span>
                </Link>
                {step <= totalSteps && (
                    <div className="flex gap-1.5 md:gap-2">
                        {Array.from({ length: totalSteps }).map((_, i) => (
                            <div
                                key={i}
                                className={`h-1.5 rounded-none transition-all duration-500 ${
                                    i + 1 <= step ? "w-8 md:w-10 bg-cyan-500" : "w-4 md:w-6 bg-zinc-800"
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
                            className="w-full max-w-4xl text-center"
                        >
                            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 uppercase text-white">
                                Select <br />
                                <span className="text-cyan-600">Protocol.</span>
                            </h2>
                            <p className="text-zinc-400 text-lg md:text-xl mb-16 font-bold uppercase tracking-widest max-w-2xl mx-auto">
                                Establish your clearance level on the network.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-zinc-800 border border-zinc-800">
                                <button
                                    onClick={() => {
                                        setUserType("buyer");
                                        setTimeout(nextStep, 150);
                                    }}
                                    className="group p-10 md:p-14 bg-zinc-950 hover:bg-zinc-900 transition-all text-left relative overflow-hidden active:scale-[0.98]"
                                >
                                    <div className="h-16 w-16 bg-zinc-900 flex items-center justify-center mb-10 border border-zinc-800 group-hover:bg-cyan-950 group-hover:border-cyan-900 transition-colors">
                                        <ShoppingBag className="h-8 w-8 text-zinc-500 group-hover:text-cyan-500 transition-colors" />
                                    </div>
                                    <h3 className="text-3xl font-black mb-4 text-white uppercase tracking-wider group-hover:text-cyan-500 transition-colors">
                                        Buyer Access
                                    </h3>
                                    <p className="text-sm text-zinc-500 font-medium tracking-wide leading-relaxed">
                                        I require high-quality commodities from verified manufacturers. No spam.
                                    </p>
                                    <div className="mt-10 flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-cyan-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                                        Initialize <ArrowRight className="h-4 w-4" />
                                    </div>
                                </button>

                                <button
                                    onClick={() => {
                                        setUserType("seller");
                                        setTimeout(nextStep, 150);
                                    }}
                                    className="group p-10 md:p-14 bg-zinc-950 hover:bg-zinc-900 transition-all text-left relative overflow-hidden active:scale-[0.98]"
                                >
                                    <div className="h-16 w-16 bg-zinc-900 flex items-center justify-center mb-10 border border-zinc-800 group-hover:bg-cyan-950 group-hover:border-cyan-900 transition-colors">
                                        <Factory className="h-8 w-8 text-zinc-500 group-hover:text-cyan-500 transition-colors" />
                                    </div>
                                    <h3 className="text-3xl font-black mb-4 text-white uppercase tracking-wider group-hover:text-cyan-500 transition-colors">
                                        Seller Access
                                    </h3>
                                    <p className="text-sm text-zinc-500 font-medium tracking-wide leading-relaxed">
                                        I am a manufacturer looking to secure verified, high-intent industrial POs.
                                    </p>
                                    <div className="mt-10 flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-cyan-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                                        Initialize <ArrowRight className="h-4 w-4" />
                                    </div>
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
                            <button
                                onClick={prevStep}
                                className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-6 md:mb-8 text-xs md:text-sm font-black uppercase tracking-widest py-2"
                            >
                                <ChevronLeft className="h-4 w-4" /> Go Back
                            </button>
                            <h2 className="text-4xl md:text-6xl font-black tracking-tightest mb-8 md:mb-12 uppercase text-white">
                                Identity <br />
                                <span className="text-cyan-600">Specs.</span>
                            </h2>

                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 ml-1">
                                        Full Name
                                    </label>
                                    <div className="relative group">
                                        <User className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-600 group-focus-within:text-cyan-500 transition-colors" />
                                        <input
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            placeholder="John Doe"
                                            className="w-full bg-zinc-900 border border-zinc-900 py-5 pl-14 pr-5 focus:bg-zinc-900 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600/20 outline-none transition-all text-white placeholder:text-zinc-600 font-medium"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 ml-1">
                                        Work Email
                                    </label>
                                    <div className="relative group">
                                        <Briefcase className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-600 group-focus-within:text-cyan-500 transition-colors" />
                                        <input
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="john@company.com"
                                            className="w-full bg-zinc-900 border border-zinc-900 py-5 pl-14 pr-5 focus:bg-zinc-900 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600/20 outline-none transition-all text-white placeholder:text-zinc-600 font-medium"
                                        />
                                        {formData.email && !isValidEmail(formData.email) && (
                                            <p className="text-red-500 text-xs font-bold mt-2 ml-2 uppercase tracking-wider">
                                                Invalid Email Address
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 ml-1">
                                        Phone Number
                                    </label>
                                    <div className="relative group">
                                        <Smartphone className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-600 group-focus-within:text-cyan-500 transition-colors" />
                                        <input
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            placeholder="+91 98765 43210"
                                            className="w-full bg-zinc-900 border border-zinc-900 py-5 pl-14 pr-5 focus:bg-zinc-900 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600/20 outline-none transition-all text-white placeholder:text-zinc-600 font-medium"
                                        />
                                        {formData.phone && !isValidPhone(formData.phone) && (
                                            <p className="text-red-500 text-xs font-bold mt-2 ml-2 uppercase tracking-wider">
                                                Invalid Phone Number (Min 10 digits)
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 ml-1">
                                        Password
                                    </label>
                                    <div className="relative group">
                                        <ShieldCheck className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-600 group-focus-within:text-cyan-500 transition-colors" />
                                        <input
                                            name="password"
                                            type={showPassword ? "text" : "password"}
                                            value={formData.password}
                                            onChange={handleInputChange}
                                            placeholder="Min. 8 characters"
                                            className="w-full bg-zinc-900 border border-zinc-900 py-5 pl-14 pr-12 focus:bg-zinc-900 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600/20 outline-none transition-all text-white placeholder:text-zinc-600 font-medium"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-cyan-500 transition-colors"
                                        >
                                            {showPassword ? (
                                                <EyeOff className="h-5 w-5" />
                                            ) : (
                                                <Eye className="h-5 w-5" />
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={nextStep}
                                disabled={!isStepValid()}
                                className="w-full mt-10 py-6 bg-cyan-700 text-white font-black uppercase tracking-[0.2em] hover:bg-cyan-600 transition-all active:scale-[0.98] disabled:opacity-20 disabled:grayscale disabled:pointer-events-none text-sm border-t border-cyan-500/50"
                            >
                                Continue Phase 1
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
                            <button
                                onClick={prevStep}
                                className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-6 md:mb-8 text-xs md:text-sm font-black uppercase tracking-widest py-2"
                            >
                                <ChevronLeft className="h-4 w-4" /> Go Back
                            </button>
                            <h2 className="text-4xl md:text-6xl font-black tracking-tightest mb-8 md:mb-12 uppercase text-white">
                                Entity <br />
                                <span className="text-cyan-600">Payload.</span>
                            </h2>

                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 ml-1">
                                        Company Registered Name
                                    </label>
                                    <div className="relative group">
                                        <Building2 className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-600 group-focus-within:text-cyan-500 transition-colors" />
                                        <input
                                            name="companyName"
                                            value={formData.companyName}
                                            onChange={handleInputChange}
                                            placeholder="Acme Manufacturing Ltd"
                                            className="w-full bg-zinc-900 border border-zinc-900 py-5 pl-14 pr-5 focus:bg-zinc-900 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600/20 outline-none transition-all text-white placeholder:text-zinc-600 font-medium"
                                        />
                                    </div>
                                </div>

                                {userType === "buyer" ? (
                                    <>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 ml-1">
                                                Sourcing Category
                                            </label>
                                            <div className="relative group">
                                                <ShoppingBag className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-600 group-focus-within:text-cyan-500 transition-colors" />
                                                <select
                                                    name="category"
                                                    value={formData.category}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-zinc-900 border border-zinc-900 py-5 pl-14 pr-5 focus:bg-zinc-900 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600/20 outline-none transition-all text-white placeholder:text-zinc-600 font-medium appearance-none"
                                                >
                                                    <option value="" className="text-zinc-600">
                                                        Select Commodity
                                                    </option>
                                                    {INDUSTRY_CATEGORIES.filter((c) => c.id !== "all").map((c) => (
                                                        <option key={c.id} value={c.id}>
                                                            {c.name}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 ml-1">
                                                Monthly Trade Volume
                                            </label>
                                            <div className="grid grid-cols-2 gap-4 mt-4 bg-zinc-900 p-px border border-zinc-900">
                                                {["< 10L", "10L - 1Cr", "1Cr - 10Cr", "10Cr+"].map((vol) => (
                                                    <button
                                                        key={vol}
                                                        onClick={() =>
                                                            setFormData((prev) => ({ ...prev, businessScale: vol }))
                                                        }
                                                        className={`py-5 px-4 font-black uppercase tracking-widest transition-all text-xs ${
                                                            formData.businessScale === vol
                                                                ? "bg-cyan-700 text-white border-t border-cyan-500/50"
                                                                : "bg-zinc-950 text-zinc-500 hover:text-white hover:bg-zinc-900"
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
                                            <label className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 ml-1">
                                                Product Category
                                            </label>
                                            <div className="relative group">
                                                <Factory className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-600 group-focus-within:text-cyan-500 transition-colors" />
                                                <select
                                                    name="category"
                                                    value={formData.category}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-zinc-900 border border-zinc-900 py-5 pl-14 pr-5 focus:bg-zinc-900 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600/20 outline-none transition-all text-white placeholder:text-zinc-600 font-medium appearance-none"
                                                >
                                                    <option value="" className="text-zinc-600">
                                                        Select Production Focus
                                                    </option>
                                                    {INDUSTRY_CATEGORIES.filter((c) => c.id !== "all").map((c) => (
                                                        <option key={c.id} value={c.id}>
                                                            {c.name}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 ml-1">
                                                Manufacturing Capacity
                                            </label>
                                            <div className="grid grid-cols-2 gap-px mt-4 bg-zinc-900 border border-zinc-900">
                                                {[
                                                    "Retail Quantities",
                                                    "Small Wholesale",
                                                    "Bulk Manufacturer",
                                                    "Large Enterprise",
                                                ].map((cap) => (
                                                    <button
                                                        key={cap}
                                                        onClick={() =>
                                                            setFormData((prev) => ({ ...prev, businessScale: cap }))
                                                        }
                                                        className={`py-5 px-4 font-black uppercase tracking-widest transition-all text-[10px] sm:text-xs ${
                                                            formData.businessScale === cap
                                                                ? "bg-cyan-700 text-white border-t border-cyan-500/50"
                                                                : "bg-zinc-950 text-zinc-500 hover:text-white hover:bg-zinc-900"
                                                        }`}
                                                    >
                                                        {cap}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 ml-1">
                                                GST Number
                                            </label>
                                            <div className="relative group">
                                                <BadgeCheck className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-600 group-focus-within:text-cyan-500 transition-colors" />
                                                <input
                                                    name="gstNumber"
                                                    value={formData.gstNumber}
                                                    onChange={handleInputChange}
                                                    placeholder="22AAAAA0000A1Z5"
                                                    className="w-full bg-zinc-900 border border-zinc-900 py-5 pl-14 pr-5 focus:bg-zinc-900 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600/20 outline-none transition-all text-white placeholder:text-zinc-600 font-medium uppercase"
                                                />
                                            </div>
                                            <p className="text-xs text-cyan-500 font-bold tracking-wider mt-2 ml-2">
                                                Verified sellers receive 4x more buyer queries.
                                            </p>
                                        </div>
                                    </>
                                )}
                            </div>

                            <button
                                onClick={handleFinalSubmit}
                                disabled={!isStepValid() || isSubmitting}
                                className="w-full mt-10 py-6 bg-cyan-700 text-white font-black uppercase tracking-[0.2em] hover:bg-cyan-600 transition-all active:scale-[0.98] disabled:opacity-20 disabled:grayscale disabled:pointer-events-none text-sm border-t border-cyan-500/50 flex items-center justify-center gap-3"
                            >
                                {isSubmitting ? <Loader2 className="h-5 w-5 animate-spin" /> : "Initiate Verification"}
                            </button>
                        </motion.div>
                    )}

                    {/* Step 4: Success */}
                    {step === 4 && (
                        <FormSuccess
                            title={
                                <span>
                                    <span className="block font-heading text-white tracking-[0.08em] uppercase leading-tight drop-shadow-[0_6px_18px_rgba(6,182,212,0.06)] mb-0">
                                        Welcome
                                    </span>
                                    <span className="block font-heading text-white tracking-[0.08em] uppercase leading-tight -mt-4">
                                        To
                                    </span>
                                    <span className="block text-cyan-600 -mt-3 text-[1.05em]">bechoHub.</span>
                                </span>
                            }
                            subtitle="Your entity application is under evaluation. A clearance call will be placed within Phase 1 (24h)."
                            actionLabel="Enter Protocol"
                            actionLink="/"
                        />
                    )}
                </AnimatePresence>
            </main>

            {/* Footer Watermark */}
            <div className="p-10 text-center hidden md:block select-none pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 -z-10">
                <div className="text-[12vw] font-black tracking-tighter text-zinc-900 opacity-20">bechoHub</div>
            </div>
        </div>
    );
}

export default function SignUp() {
    return (
        <Suspense
            fallback={
                <div className="min-h-screen bg-zinc-950 flex items-center justify-center text-white font-black uppercase tracking-[0.3em]">
                    Initializing...
                </div>
            }
        >
            <SignUpForm />
        </Suspense>
    );
}
