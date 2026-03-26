"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
    Settings,
    ShieldCheck,
    Zap,
    TrendingUp,
    Clock,
    Briefcase,
    CheckCircle,
    Share2,
    ArrowUpRight,
    Camera,
} from "lucide-react";
import { motion } from "framer-motion";
import { ScaleOnHover } from "../components/Animators";
import { cn } from "@/lib/utils";

// Mock Active User Data
const MOCK_USER = {
    name: "Vikram Malhotra",
    company: "Everest Textiles Ltd",
    role: "Seller",
    account_level: "Diamond Tier",
    trust_score: 98,
    joined: "March 2024",
    verified: true,
    email: "vikram@everest.com",
    stats: [
        { label: "Active RFQs", value: "24", icon: Briefcase, color: "text-cyan-500", bg: "bg-cyan-50" },
        { label: "Total Bids", value: "152", icon: Zap, color: "text-amber-500", bg: "bg-amber-50" },
        { label: "Conversion", value: "88%", icon: TrendingUp, color: "text-emerald-500", bg: "bg-emerald-50" },
        { label: "Trust Index", value: "A+", icon: ShieldCheck, color: "text-fuchsia-500", bg: "bg-fuchsia-50" },
    ],
    recent_activity: [
        { type: "BID", title: "Bid placed on 'Sustainable Cotton Order'", time: "2 hours ago", status: "Pending" },
        { type: "VERIFIED", title: "GST Verification Successful", time: "1 day ago", status: "Completed" },
        { type: "CHAT", title: "New message from Global Sourcing Inc", time: "3 days ago", status: "Unread" },
    ],
};

export default function ProfilePage() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans selection:bg-cyan-100 selection:text-cyan-950">
            <Navbar />

            <main className="pt-24 md:pt-32 pb-24">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Header: The Glass Identity Hub */}
                    <div className="relative mb-16">
                        {/* Background Gradient Blurs */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-200/20 rounded-full blur-[120px] -z-10" />
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-fuchsia-200/20 rounded-full blur-[120px] -z-10" />

                        <div className="bg-white rounded-[40px] border border-slate-100 p-8 md:p-12 shadow-2xl shadow-slate-200/50 relative overflow-hidden group">
                            {/* Decorative Accent */}
                            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-50 to-transparent flex items-center justify-end pr-20 opacity-40 pointer-events-none">
                                <TrendingUp className="h-64 w-64 text-slate-100 -rotate-12" />
                            </div>

                            <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
                                {/* Avatar with Glow */}
                                <div className="relative group/avatar">
                                    <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-400 to-fuchsia-500 rounded-full blur-2xl opacity-0 group-hover/avatar:opacity-30 transition-all duration-700" />
                                    <div className="h-32 w-32 md:h-48 md:w-48 rounded-full border-4 border-white shadow-2xl overflow-hidden relative bg-slate-100">
                                        <div className="h-full w-full flex items-center justify-center text-5xl font-black text-slate-300">
                                            {MOCK_USER.name.charAt(0)}
                                        </div>
                                        {/* Camera Overlay */}
                                        <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover/avatar:opacity-100 flex items-center justify-center transition-all cursor-pointer">
                                            <Camera className="h-8 w-8 text-white" />
                                        </div>
                                    </div>
                                    {/* Verification Badge */}
                                    {MOCK_USER.verified && (
                                        <div className="absolute bottom-2 right-2 md:bottom-6 md:right-6 bg-cyan-600 p-2 rounded-full border-4 border-white shadow-xl">
                                            <ShieldCheck className="h-6 w-6 text-white" />
                                        </div>
                                    )}
                                </div>

                                {/* Identity Info */}
                                <div className="text-center md:text-left flex-1">
                                    <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                                        <span className="bg-slate-950 text-white text-[10px] font-black tracking-widest uppercase px-4 py-1.5 rounded-full">
                                            {MOCK_USER.account_level}
                                        </span>
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                            <Clock className="h-3.5 w-3.5" /> Joined {MOCK_USER.joined}
                                        </span>
                                    </div>
                                    <h1 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter leading-none mb-4">
                                        {MOCK_USER.name}
                                    </h1>
                                    <h2 className="text-xl md:text-2xl font-black text-slate-400 tracking-tight flex items-center justify-center md:justify-start gap-2">
                                        {MOCK_USER.company} <CheckCircle className="h-5 w-5 text-emerald-500" />
                                    </h2>

                                    <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-3">
                                        <button className="bg-slate-50 border border-slate-100 px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-600 hover:bg-slate-900 hover:text-white transition-all flex items-center gap-2 group">
                                            <Settings className="h-3.5 w-3.5 group-hover:rotate-90 transition-transform" />{" "}
                                            Edit Profile
                                        </button>
                                        <button className="bg-slate-50 border border-slate-100 px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-600 hover:border-slate-300 transition-all flex items-center gap-2">
                                            <Share2 className="h-3.5 w-3.5" /> Share ID
                                        </button>
                                    </div>
                                </div>

                                {/* Performance Score Island */}
                                <div className="bg-slate-50 rounded-[32px] p-8 border border-slate-100 text-center w-full md:w-64">
                                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">
                                        Trust Score
                                    </div>
                                    <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-600 to-fuchsia-600 leading-none mb-4">
                                        {MOCK_USER.trust_score}
                                    </div>
                                    <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${MOCK_USER.trust_score}%` }}
                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                            className="h-full bg-gradient-to-r from-cyan-500 to-fuchsia-500"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats Grid: The Action Center */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {MOCK_USER.stats.map((stat) => (
                            <ScaleOnHover key={stat.label}>
                                <div className="bg-white rounded-[40px] p-8 border border-slate-100 flex flex-col justify-between h-54 shadow-sm relative group overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 -translate-y-12 translate-x-12 rounded-full group-hover:scale-150 transition-transform duration-700 -z-0" />

                                    <div className={cn("p-4 rounded-3xl w-fit mb-10 relative z-10", stat.bg)}>
                                        <stat.icon className={cn("h-6 w-6", stat.color)} />
                                    </div>
                                    <div className="relative z-10">
                                        <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">
                                            {stat.label}
                                        </div>
                                        <div className="text-3xl font-black text-slate-950">{stat.value}</div>
                                    </div>
                                </div>
                            </ScaleOnHover>
                        ))}
                    </div>

                    {/* Lower Sections: Double Column */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Left: Deep Data & Actions */}
                        <div className="lg:col-span-8 space-y-12">
                            {/* Visual Chart Placeholder Area */}
                            <div className="bg-slate-950 rounded-[40px] p-10 md:p-12 text-white shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[100px]" />
                                <div className="flex flex-col md:flex-row items-center justify-between mb-12">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-black tracking-tight mb-2">
                                            Revenue Analytics
                                        </h3>
                                        <p className="text-slate-500 text-sm font-medium">
                                            Growth performance over last 30 days.
                                        </p>
                                    </div>
                                    <div className="flex bg-white/5 p-1 rounded-2xl border border-white/10 mt-6 md:mt-0">
                                        <button className="px-6 py-2 bg-white text-slate-950 rounded-xl text-[10px] font-black uppercase tracking-widest">
                                            Growth
                                        </button>
                                        <button className="px-6 py-2 text-slate-400 hover:text-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-colors">
                                            Yield
                                        </button>
                                    </div>
                                </div>

                                {/* Mock Glowing "Lines" of Chart */}
                                <div className="h-64 relative flex items-end gap-2 px-10">
                                    {[30, 60, 45, 80, 55, 95, 70, 40, 65, 85, 90, 100].map((h, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ height: 0 }}
                                            animate={{ height: `${h}%` }}
                                            transition={{ delay: i * 0.05, duration: 1, ease: "easeOut" }}
                                            className="flex-1 bg-gradient-to-t from-cyan-900 to-cyan-400 rounded-t-lg opacity-80 hover:opacity-100 transition-opacity relative group/bar"
                                        >
                                            <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white text-slate-950 px-3 py-1 rounded-lg text-xs font-black opacity-0 group-hover/bar:opacity-100 transition-opacity shadow-2xl">
                                                {h}%
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Verification Center */}
                            <div className="bg-white rounded-[40px] border border-slate-100 p-10 shadow-sm">
                                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-cyan-600 mb-8">
                                    Business Identity Status
                                </h3>
                                <div className="space-y-6">
                                    {[
                                        {
                                            label: "GST Registration",
                                            status: "Verified",
                                            desc: "Valid until 2026",
                                            color: "text-emerald-500",
                                        },
                                        {
                                            label: "Corporate Bank Account",
                                            status: "Verified",
                                            desc: "HDFC Bank - Active",
                                            color: "text-emerald-500",
                                        },
                                        {
                                            label: "Industrial License",
                                            status: "Pending",
                                            desc: "Inspection scheduled for Monday",
                                            color: "text-amber-500",
                                        },
                                    ].map((item) => (
                                        <div
                                            key={item.label}
                                            className="flex items-center justify-between p-6 bg-slate-50 rounded-3xl border border-slate-100/50"
                                        >
                                            <div>
                                                <div className="text-sm font-black text-slate-900 mb-1">
                                                    {item.label}
                                                </div>
                                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                                    {item.desc}
                                                </div>
                                            </div>
                                            <span
                                                className={cn(
                                                    "text-[10px] font-black uppercase tracking-widest",
                                                    item.color
                                                )}
                                            >
                                                {item.status}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right: Social & Activity */}
                        <aside className="lg:col-span-4 space-y-6">
                            {/* Activity Feed */}
                            <div className="bg-white rounded-[40px] border border-slate-100 p-10 shadow-sm h-full">
                                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-8 flex items-center justify-between">
                                    Recent Pulse <ArrowUpRight className="h-4 w-4" />
                                </h3>
                                <div className="space-y-10 relative">
                                    {/* Timeline line */}
                                    <div className="absolute top-0 bottom-0 left-[11px] w-px bg-slate-100" />

                                    {MOCK_USER.recent_activity.map((act) => (
                                        <div key={act.title} className="flex gap-6 relative z-10">
                                            <div
                                                className={cn(
                                                    "h-[22px] w-[22px] rounded-full mt-1 border-[4px] border-white ring-1 ring-slate-100",
                                                    act.status === "Pending"
                                                        ? "bg-amber-400"
                                                        : act.status === "Unread"
                                                          ? "bg-cyan-500"
                                                          : "bg-emerald-500"
                                                )}
                                            />
                                            <div>
                                                <div className="text-xs font-black text-slate-900 leading-snug mb-1">
                                                    {act.title}
                                                </div>
                                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                                    {act.time}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <button className="w-full mt-12 py-5 border border-slate-100 rounded-3xl text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-950 hover:border-slate-900 transition-all">
                                    View Detailed Logs
                                </button>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
