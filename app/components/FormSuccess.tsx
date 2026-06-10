"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

interface FormSuccessProps {
    title: ReactNode;
    subtitle: string;
    actionLabel: string;
    actionLink: string;
}

export default function FormSuccess({ title, subtitle, actionLabel, actionLink }: FormSuccessProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-xl text-center mx-auto"
        >
            <div className="w-24 h-24 bg-cyan-50 rounded-full flex items-center justify-center mx-auto mb-10 border border-cyan-100 shadow-xl shadow-cyan-500/5">
                <Check className="h-10 w-10 text-cyan-600" strokeWidth={4} />
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-[80px] font-black tracking-tight mb-6 text-white uppercase leading-[0.95]">
                {title}
            </h2>
            <p className="text-slate-500 text-lg md:text-xl mb-12 font-light">{subtitle}</p>

            <Link
                href={actionLink}
                className="inline-flex px-12 py-5 rounded-full bg-slate-950 text-white font-black uppercase tracking-[0.2em] hover:bg-slate-800 transition-all active:scale-[0.95] shadow-2xl shadow-slate-200 gap-3 items-center"
            >
                {actionLabel} <ArrowRight className="h-4 w-4" />
            </Link>
        </motion.div>
    );
}
