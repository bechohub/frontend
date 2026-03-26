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
import { Suspense } from "react";
import FormSuccess from "../components/FormSuccess";

function SignUpForm() {
    const searchParams = useSearchParams();
    const initialType = searchParams.get("type") as "buyer" | "seller" | null;

    const [step, setStep] = useState(1);
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

    const nextStep = () => setStep((s) => Math.min(s + 1, totalSteps + 1));
    const prevStep = () => setStep((s) => Math.max(s - 1, 1));

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
        } else {
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
        <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-cyan-100 selection:text-cyan-950 overflow-hidden flex flex-col relative">
            {/* Background Ambience - Tinge of Dark Blue */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-50/60 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-50/60 rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />
            </div>

            {/* Header / Navigation */}
            <header className="sticky top-0 z-50 w-full p-6 md:p-10 flex justify-between items-center transition-opacity duration-500 bg-white/80 backdrop-blur-xl border-b border-slate-100">
                <Link
                    href="/"
                    className="text-xl md:text-2xl font-black tracking-tighter text-slate-950 hover:opacity-80 transition-opacity"
                >
                    bechoHub
                </Link>
                {step <= totalSteps && (
                    <div className="flex gap-1.5 md:gap-2">
                        {Array.from({ length: totalSteps }).map((_, i) => (
                            <div
                                key={i}
                                className={`h-1 md:h-1.5 rounded-full transition-all duration-500 ${
                                    i + 1 <= step
                                        ? "w-6 md:w-8 bg-slate-950 shadow-[0_0_15px_rgba(2,6,23,0.1)]"
                                        : "w-1.5 md:w-2 bg-slate-100"
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
                            className="w-full max-w-2xl text-center"
                        >
                            <h2 className="text-4xl md:text-7xl font-black tracking-tightest mb-6 uppercase text-slate-950">
                                Registration <br />
                                <span className="text-cyan-600">Type.</span>
                            </h2>
                            <p className="text-slate-500 text-lg mb-12 font-light max-w-md mx-auto">
                                Select your path to start scaling your global business presence.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-4">
                                <button
                                    onClick={() => {
                                        setUserType("buyer");
                                        setTimeout(nextStep, 150);
                                    }}
                                    className="group p-6 md:p-10 rounded-[32px] md:rounded-[40px] border border-slate-100 bg-white hover:border-cyan-200 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all text-left relative overflow-hidden active:scale-[0.97]"
                                >
                                    <div className="h-14 w-14 rounded-2xl bg-cyan-50 flex items-center justify-center mb-8 border border-cyan-100 transition-colors group-hover:bg-cyan-100">
                                        <ShoppingBag className="h-7 w-7 text-cyan-600" />
                                    </div>
                                    <h3 className="text-2xl font-black mb-3 text-slate-900 tracking-tight">
                                        I am a Buyer
                                    </h3>
                                    <p className="text-sm text-slate-500 font-light leading-relaxed">
                                        Sourcing high-quality goods from verified manufacturers.
                                    </p>
                                    <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                                        Continue <ArrowRight className="h-3 w-3" />
                                    </div>
                                </button>

                                <button
                                    onClick={() => {
                                        setUserType("seller");
                                        setTimeout(nextStep, 150);
                                    }}
                                    className="group p-6 md:p-10 rounded-[32px] md:rounded-[40px] border border-slate-100 bg-white hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all text-left relative overflow-hidden active:scale-[0.97]"
                                >
                                    <div className="h-14 w-14 rounded-2xl bg-indigo-50 flex items-center justify-center mb-8 border border-indigo-100 transition-colors group-hover:bg-indigo-100">
                                        <Factory className="h-7 w-7 text-indigo-600" />
                                    </div>
                                    <h3 className="text-2xl font-black mb-3 text-slate-900 tracking-tight">
                                        I am a Seller
                                    </h3>
                                    <p className="text-sm text-slate-500 font-light leading-relaxed">
                                        Listing manufacturing capacity and connecting with buyers.
                                    </p>
                                    <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-indigo-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                                        Continue <ArrowRight className="h-3 w-3" />
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
                                className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-900 transition-colors mb-6 md:mb-8 text-xs md:text-sm font-bold uppercase tracking-widest py-2"
                            >
                                <ChevronLeft className="h-4 w-4" /> Go Back
                            </button>
                            <h2 className="text-3xl md:text-5xl font-black tracking-tightest mb-6 md:mb-10 uppercase text-slate-950">
                                Identity <br />
                                <span className="text-cyan-600">Details.</span>
                            </h2>

                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                                        Full Name
                                    </label>
                                    <div className="relative group">
                                        <User className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-cyan-600 transition-colors" />
                                        <input
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            placeholder="John Doe"
                                            className="w-full bg-slate-50 border border-slate-100 rounded-3xl py-5 pl-14 pr-5 focus:bg-white focus:border-cyan-500 focus:shadow-xl focus:shadow-cyan-500/5 outline-none transition-all text-slate-900 placeholder:text-slate-300"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                                        Work Email
                                    </label>
                                    <div className="relative group">
                                        <Briefcase className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-cyan-600 transition-colors" />
                                        <input
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="john@company.com"
                                            className="w-full bg-slate-50 border border-slate-100 rounded-3xl py-5 pl-14 pr-5 focus:bg-white focus:border-cyan-500 focus:shadow-xl focus:shadow-cyan-500/5 outline-none transition-all text-slate-900 placeholder:text-slate-300"
                                        />
                                        {formData.email && !isValidEmail(formData.email) && (
                                            <p className="text-red-500 text-[10px] font-bold mt-1.5 ml-4 uppercase tracking-wider">
                                                Invalid Email Address
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                                        Phone Number
                                    </label>
                                    <div className="relative group">
                                        <Smartphone className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-cyan-600 transition-colors" />
                                        <input
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            placeholder="+91 98765 43210"
                                            className="w-full bg-slate-50 border border-slate-100 rounded-3xl py-5 pl-14 pr-5 focus:bg-white focus:border-cyan-500 focus:shadow-xl focus:shadow-cyan-500/5 outline-none transition-all text-slate-900 placeholder:text-slate-300"
                                        />
                                        {formData.phone && !isValidPhone(formData.phone) && (
                                            <p className="text-red-500 text-[10px] font-bold mt-1.5 ml-4 uppercase tracking-wider">
                                                Invalid Phone Number (Min 10 digits)
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                                        Password
                                    </label>
                                    <div className="relative group">
                                        <ShieldCheck className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-cyan-600 transition-colors" />
                                        <input
                                            name="password"
                                            type={showPassword ? "text" : "password"}
                                            value={formData.password}
                                            onChange={handleInputChange}
                                            placeholder="Min. 8 characters"
                                            className="w-full bg-slate-50 border border-slate-100 rounded-3xl py-5 pl-14 pr-12 focus:bg-white focus:border-cyan-500 focus:shadow-xl focus:shadow-cyan-500/5 outline-none transition-all text-slate-900 placeholder:text-slate-300"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-cyan-600 transition-colors"
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
                                className="w-full mt-10 py-6 rounded-3xl bg-slate-950 text-white font-black uppercase tracking-[0.2em] hover:bg-slate-800 transition-all active:scale-[0.98] disabled:opacity-10 disabled:grayscale disabled:pointer-events-none shadow-2xl shadow-slate-200 text-xs md:text-sm"
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
                            <button
                                onClick={prevStep}
                                className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-900 transition-colors mb-6 md:mb-8 text-xs md:text-sm font-bold uppercase tracking-widest py-2"
                            >
                                <ChevronLeft className="h-4 w-4" /> Go Back
                            </button>
                            <h2 className="text-3xl md:text-5xl font-black tracking-tightest mb-6 md:mb-10 uppercase text-slate-950">
                                Business <br />
                                <span className="text-cyan-600">Information.</span>
                            </h2>

                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                                        Company Registered Name
                                    </label>
                                    <div className="relative group">
                                        <Building2 className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-cyan-600 transition-colors" />
                                        <input
                                            name="companyName"
                                            value={formData.companyName}
                                            onChange={handleInputChange}
                                            placeholder="Acme Corporation Ltd"
                                            className="w-full bg-slate-50 border border-slate-100 rounded-3xl py-5 pl-14 pr-5 focus:bg-white focus:border-cyan-500 focus:shadow-xl focus:shadow-cyan-500/5 outline-none transition-all text-slate-900 placeholder:text-slate-300"
                                        />
                                    </div>
                                </div>

                                {userType === "buyer" ? (
                                    <>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                                                Sourcing Category
                                            </label>
                                            <div className="relative group">
                                                <ShoppingBag className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-cyan-600 transition-colors" />
                                                <select
                                                    name="category"
                                                    value={formData.category}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-slate-50 border border-slate-100 rounded-3xl py-5 pl-14 pr-5 focus:bg-white focus:border-cyan-500 focus:shadow-xl focus:shadow-cyan-500/5 outline-none transition-all text-slate-900 appearance-none"
                                                >
                                                    <option value="">Select Category</option>
                                                    <option value="textiles">Textiles & Apparel</option>
                                                    <option value="electronics">Electronics & Electrical</option>
                                                    <option value="industrial">Industrial Machinery</option>
                                                    <option value="raw_materials">Raw Materials & Chemicals</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                                                Monthly Sourcing Volume
                                            </label>
                                            <div className="grid grid-cols-2 gap-4 mt-4">
                                                {["< 10L", "10L - 1Cr", "1Cr - 10Cr", "10Cr+"].map((vol) => (
                                                    <button
                                                        key={vol}
                                                        onClick={() =>
                                                            setFormData((prev) => ({ ...prev, businessScale: vol }))
                                                        }
                                                        className={`py-4 px-4 rounded-2xl border text-[10px] font-black uppercase tracking-widest transition-all ${
                                                            formData.businessScale === vol
                                                                ? "bg-slate-950 border-slate-950 text-white shadow-xl shadow-slate-200"
                                                                : "bg-white border-slate-100 text-slate-400 hover:bg-slate-50"
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
                                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                                                Product Category
                                            </label>
                                            <div className="relative group">
                                                <Factory className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-cyan-600 transition-colors" />
                                                <select
                                                    name="category"
                                                    value={formData.category}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-slate-50 border border-slate-100 rounded-3xl py-5 pl-14 pr-5 focus:bg-white focus:border-cyan-500 focus:shadow-xl focus:shadow-cyan-500/5 outline-none transition-all text-slate-900 appearance-none"
                                                >
                                                    <option value="">Select Category</option>
                                                    <option value="footwear">Footwear & Leather</option>
                                                    <option value="tea_coffee">Tea & Coffee</option>
                                                    <option value="grains">Grains & Rice</option>
                                                    <option value="apparel">Apparel & Textiles</option>
                                                    <option value="electronics">Consumer Electronics</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                                                Supply Capacity
                                            </label>
                                            <div className="grid grid-cols-2 gap-4 mt-4">
                                                {[
                                                    "Retail Orders",
                                                    "Small Wholesale",
                                                    "Bulk Supplier",
                                                    "Large Enterprise",
                                                ].map((cap) => (
                                                    <button
                                                        key={cap}
                                                        onClick={() =>
                                                            setFormData((prev) => ({ ...prev, businessScale: cap }))
                                                        }
                                                        className={`py-4 px-4 rounded-2xl border text-[10px] font-black uppercase tracking-widest transition-all ${
                                                            formData.businessScale === cap
                                                                ? "bg-slate-950 border-slate-950 text-white shadow-xl shadow-slate-200"
                                                                : "bg-white border-slate-100 text-slate-400 hover:bg-slate-50"
                                                        }`}
                                                    >
                                                        {cap}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                                                GST Number (Required for Verification)
                                            </label>
                                            <div className="relative group">
                                                <BadgeCheck className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-cyan-600 transition-colors" />
                                                <input
                                                    name="gstNumber"
                                                    value={formData.gstNumber}
                                                    onChange={handleInputChange}
                                                    placeholder="22AAAAA0000A1Z5"
                                                    className="w-full bg-slate-50 border border-slate-100 rounded-3xl py-5 pl-14 pr-5 focus:bg-white focus:border-cyan-500 focus:shadow-xl focus:shadow-cyan-500/5 outline-none transition-all text-slate-900 placeholder:text-slate-300"
                                                />
                                            </div>
                                            <p className="text-[10px] text-cyan-600 font-bold tracking-tight">
                                                Verified sellers receive 4x more buyer queries.
                                            </p>
                                        </div>
                                    </>
                                )}
                            </div>

                            <button
                                onClick={handleFinalSubmit}
                                disabled={!isStepValid() || isSubmitting}
                                className="w-full mt-10 py-6 rounded-3xl bg-slate-950 text-white font-black uppercase tracking-[0.2em] hover:bg-slate-800 transition-all active:scale-[0.98] disabled:opacity-50 disabled:grayscale disabled:pointer-events-none shadow-2xl shadow-slate-200 text-xs md:text-sm flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? <Loader2 className="h-5 w-5 animate-spin" /> : "Complete Registration"}
                            </button>
                        </motion.div>
                    )}

                    {/* Step 4: Success */}
                    {step === 4 && (
                        <FormSuccess
                            title={
                                (
                                    <span>
                                        Welcome to <br />
                                        <span className="text-cyan-600">bechoHub.</span>
                                    </span>
                                ) as unknown as string
                            }
                            subtitle="Your application is under review. You will receive a verification call within 24 hours."
                            actionLabel="Continue to Home"
                            actionLink="/"
                        />
                    )}
                </AnimatePresence>
            </main>

            {/* Footer Watermark */}
            <div className="p-10 text-center opacity-50 hidden md:block select-none pointer-events-none">
                <div className="text-[12vw] font-black tracking-tighter text-slate-50">BECHOHUB</div>
            </div>
        </div>
    );
}

export default function SignUp() {
    return (
        <Suspense
            fallback={
                <div className="min-h-screen bg-white flex items-center justify-center text-slate-900 font-black uppercase tracking-widest">
                    Loading...
                </div>
            }
        >
            <SignUpForm />
        </Suspense>
    );
}
