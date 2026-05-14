"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronRight, UploadCloud, ChevronLeft, Send, Sparkles } from "lucide-react";
import { usePostHog } from "posthog-js/react";

export default function RFQForm() {
    const [step, setStep] = useState(1);
    const posthog = usePostHog();

    const nextStep = () => {
        setStep((s: number) => {
            const next = Math.min(s + 1, 3);
            posthog.capture("rfq_form_step_next", {
                from_step: s,
                to_step: next,
            });
            return next;
        });
    };

    const prevStep = () => {
        setStep((s: number) => {
            const prev = Math.max(s - 1, 1);
            posthog.capture("rfq_form_step_prev", {
                from_step: s,
                to_step: prev,
            });
            return prev;
        });
    };

    const steps = [
        { id: 1, name: "Product" },
        { id: 2, name: "Specs" },
        { id: 3, name: "Identity" },
    ];

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async () => {
        setIsSubmitting(true);
        posthog.capture("rfq_form_submit_start");
        
        // Simulating API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        setIsSubmitting(false);
        setIsSubmitted(true);
        posthog.capture("rfq_form_submit_success", {
            timestamp: new Date().toISOString(),
        });
    };

    if (isSubmitted) {
        return (
            <div className="bg-white/[0.03] backdrop-blur-3xl rounded-[32px] md:rounded-[48px] border border-white/5 overflow-hidden shadow-2xl p-12 flex items-center justify-center min-h-[500px]">
                <div className="text-center">
                    <div className="w-20 h-20 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-cyan-500/20 shadow-[0_0_30px_rgba(6,182,212,0.1)]">
                        <Check className="h-8 w-8 text-cyan-400" strokeWidth={3} />
                    </div>
                    <h3 className="text-3xl font-black text-white uppercase mb-4 tracking-tight">RFQ Broadcasted</h3>
                    <p className="text-slate-400 mb-8 max-w-md mx-auto leading-relaxed">
                        Your request has been sent to <span className="text-cyan-400 font-bold">142 verified suppliers</span> matching your criteria. Expect bids within 24 hours.
                    </p>
                    <button
                        onClick={() => window.location.href = '/'}
                        className="px-8 py-4 bg-white text-slate-950 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-cyan-50 transition-all font-bold"
                    >
                        Return to Hub
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white/[0.03] backdrop-blur-3xl rounded-[32px] md:rounded-[48px] border border-white/5 overflow-hidden shadow-2xl">
            {/* Progress Bar */}
            <div className="px-8 py-6 border-b border-white/5 bg-white/[0.02]">
                <div className="flex items-center justify-between max-w-sm mx-auto">
                    {steps.map((s, i) => (
                        <div key={s.id} className="flex items-center relative">
                            <div className={`flex items-center justify-center w-8 h-8 rounded-xl font-bold text-xs transition-all duration-500
                            ${step >= s.id ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.5)]' : 'bg-white/10 text-slate-500'}
                         `}>
                                {step > s.id ? <Check className="h-4 w-4 stroke-[3]" /> : s.id}
                            </div>
                            {i < steps.length - 1 && (
                                <div className={`w-8 h-0.5 mx-3 rounded-full transition-all duration-500
                                ${step > s.id ? 'bg-cyan-500' : 'bg-white/5'}
                             `}></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Form Content */}
            <div className="p-6 md:p-12">
                <AnimatePresence mode="wait">
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-8"
                        >
                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">What are you looking for?</label>
                                <input
                                    type="text"
                                    placeholder="e.g. Cotton Yarn 40s Combed"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 focus:bg-white/10 focus:border-cyan-500/50 outline-none transition-all text-white placeholder:text-slate-600 text-lg"
                                />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Category</label>
                                    <select className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 focus:bg-white/10 focus:border-cyan-500/50 outline-none transition-all text-white appearance-none cursor-pointer">
                                        <option className="bg-slate-900">Select Category</option>
                                        <option className="bg-slate-900">Textiles</option>
                                        <option className="bg-slate-900">Electronics</option>
                                        <option className="bg-slate-900">Agriculture</option>
                                    </select>
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Quantity</label>
                                    <input type="text" placeholder="e.g. 5000 Units" className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 focus:bg-white/10 focus:border-cyan-500/50 outline-none transition-all text-white placeholder:text-slate-600" />
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-8"
                        >
                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Full Specifications</label>
                                <textarea rows={5} placeholder="Include material grade, packaging requirements, port of delivery, etc." className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 focus:bg-white/10 focus:border-cyan-500/50 outline-none transition-all text-white placeholder:text-slate-600 resize-none"></textarea>
                            </div>
                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Attachments</label>
                                <div className="border-2 border-dashed border-white/10 rounded-2xl md:rounded-[32px] p-6 md:p-10 flex flex-col items-center justify-center text-center hover:bg-white/5 transition-all cursor-pointer group">
                                    <div className="p-4 bg-cyan-500/10 text-cyan-400 rounded-2xl mb-4 group-hover:scale-110 transition-transform border border-cyan-500/20">
                                        <UploadCloud className="h-6 w-6" />
                                    </div>
                                    <p className="text-sm font-bold text-white mb-1 tracking-tight">Drop drawings or reference images</p>
                                    <p className="text-xs text-slate-500 font-medium">PDF, CAD, JPG (up to 20MB)</p>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-8"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Full Name</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 focus:bg-white/10 focus:border-cyan-500/50 outline-none transition-all text-white" />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Business Name</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 focus:bg-white/10 focus:border-cyan-500/50 outline-none transition-all text-white" />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Work Email</label>
                                <input type="email" placeholder="you@company.com" className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 focus:bg-white/10 focus:border-cyan-500/50 outline-none transition-all text-white" />
                            </div>
                            <div className="pt-4">
                                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-relaxed">
                                    By submitting this RFQ, you agree to our <span className="text-cyan-400">Trading Standard Agreement</span> and Privacy Policy.
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center mt-12 pt-8 border-t border-white/5">
                    <button
                        onClick={prevStep}
                        className={`group flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest text-slate-500 hover:text-white transition-all
                        ${step === 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'}
                    `}
                    >
                        <ChevronLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Back
                    </button>

                    {step < 3 ? (
                        <button
                            onClick={nextStep}
                            className="px-8 py-4 bg-white text-slate-950 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-cyan-400 transition-all flex items-center gap-2 active:scale-95 shadow-2xl shadow-white/5"
                        >
                            Continue <ChevronRight className="h-4 w-4" />
                        </button>
                    ) : (
                        <button
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                            className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all flex items-center gap-3 active:scale-95 disabled:opacity-50 disabled:grayscale"
                        >
                            {isSubmitting ? "Broadcasting..." : <>Broadcast RFQ <Sparkles className="h-4 w-4" /></>}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
