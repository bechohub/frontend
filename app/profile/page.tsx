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
        { label: "Active RFQs", value: "24", icon: Briefcase, color: "text-zinc-400", bg: "bg-zinc-900" },
        { label: "Total Bids", value: "152", icon: Zap, color: "text-zinc-400", bg: "bg-zinc-900" },
        { label: "Conversion", value: "88%", icon: TrendingUp, color: "text-zinc-400", bg: "bg-zinc-900" },
        { label: "Trust Index", value: "A+", icon: ShieldCheck, color: "text-cyan-500", bg: "bg-cyan-950" },
    ],
    recent_activity: [
        { type: "BID", title: "Bid placed on 'Sustainable Cotton Order'", time: "2 hours ago", status: "Pending" },
        { type: "VERIFIED", title: "GST Verification Successful", time: "1 day ago", status: "Completed" },
        { type: "CHAT", title: "New message from Global Sourcing Inc", time: "3 days ago", status: "Unread" },
    ],
};

export default function ProfilePage() {
    return (
        <div className="min-h-screen bg-zinc-950 font-sans selection:bg-cyan-600/30 selection:text-white">
            <Navbar />

            <main className="pt-28 md:pt-36 pb-24">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Header: The Industrial Identity Hub */}
                    <div className="relative mb-16">
                        {/* Background Industrial Gradient glow */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-900/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

                        <div className="bg-zinc-900 border border-zinc-900 p-8 md:p-12 relative overflow-hidden group">
                            <div className="flex flex-col md:flex-row items-center md:items-start gap-10 relative z-10">
                                {/* Avatar */}
                                <div className="relative group/avatar shrink-0">
                                    <div className="h-32 w-32 md:h-48 md:w-48 border-2 border-zinc-800 bg-zinc-950 overflow-hidden relative flex items-center justify-center">
                                        <div className="text-5xl md:text-7xl font-black text-zinc-700 font-heading">
                                            {MOCK_USER.name.charAt(0)}
                                        </div>
                                        {/* Camera Overlay */}
                                        <div className="absolute inset-0 bg-zinc-950/60 opacity-0 group-hover/avatar:opacity-100 flex items-center justify-center transition-all cursor-pointer">
                                            <Camera className="h-8 w-8 text-cyan-600" />
                                        </div>
                                    </div>
                                    {/* Verification Badge */}
                                    {MOCK_USER.verified && (
                                        <div className="absolute -bottom-4 -right-4 bg-zinc-950 p-2 border border-cyan-600">
                                            <ShieldCheck className="h-8 w-8 text-cyan-500" />
                                        </div>
                                    )}
                                </div>

                                {/* Identity Info */}
                                <div className="text-center md:text-left flex-1">
                                    <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                                        <span className="bg-cyan-700 text-white text-[10px] font-black tracking-widest uppercase px-4 py-1.5 border border-cyan-600">
                                            {MOCK_USER.account_level}
                                        </span>
                                        <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                                            <Clock className="h-3.5 w-3.5" /> Initialized {MOCK_USER.joined}
                                        </span>
                                    </div>
                                    <h1 className="text-4xl md:text-6xl font-black text-white tracking-widest uppercase mb-4">
                                        {MOCK_USER.name}
                                    </h1>
                                    <h2 className="text-xl md:text-2xl font-black text-zinc-500 tracking-wider uppercase flex items-center justify-center md:justify-start gap-3">
                                        {MOCK_USER.company} <CheckCircle className="h-5 w-5 text-cyan-600" />
                                    </h2>

                                    <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-3">
                                        <button className="bg-zinc-950 border border-zinc-800 px-8 py-4 text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:bg-zinc-900 hover:text-white hover:border-zinc-700 transition-all flex items-center gap-3">
                                            <Settings className="h-4 w-4" /> Edit Specs
                                        </button>
                                        <button className="bg-zinc-950 border border-zinc-800 px-8 py-4 text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:bg-zinc-900 hover:text-white hover:border-zinc-700 transition-all flex items-center gap-3">
                                            <Share2 className="h-4 w-4" /> Export Token
                                        </button>
                                    </div>
                                </div>

                                {/* Performance Score Block */}
                                <div className="bg-zinc-950 p-8 border border-zinc-900 text-center w-full md:w-64 shrink-0">
                                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-2">
                                        Trust Protocol
                                    </div>
                                    <div className="text-6xl md:text-7xl font-black text-white leading-none mb-4 tracking-tighter">
                                        {MOCK_USER.trust_score}
                                    </div>
                                    <div className="h-1 w-full bg-zinc-900 overflow-hidden mt-6">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${MOCK_USER.trust_score}%` }}
                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                            className="h-full bg-cyan-600"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-900 border border-zinc-900 mb-16">
                        {MOCK_USER.stats.map((stat) => (
                            <ScaleOnHover key={stat.label}>
                                <div className="bg-zinc-950 p-8 flex flex-col justify-between h-54 relative group overflow-hidden border border-transparent hover:border-cyan-900 transition-colors">
                                    <div className={cn("p-4 w-fit mb-10 border border-zinc-800", stat.bg)}>
                                        <stat.icon className={cn("h-6 w-6", stat.color)} />
                                    </div>
                                    <div className="relative z-10">
                                        <div className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-2">
                                            {stat.label}
                                        </div>
                                        <div className="text-4xl font-black text-white tracking-widest">
                                            {stat.value}
                                        </div>
                                    </div>
                                </div>
                            </ScaleOnHover>
                        ))}
                    </div>

                    {/* Lower Sections */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Left: Deep Data */}
                        <div className="lg:col-span-8 space-y-8">
                            {/* Visual Chart Placeholder */}
                            <div className="bg-zinc-900 p-10 md:p-12 text-white border border-zinc-900 relative">
                                <div className="flex flex-col md:flex-row items-center justify-between mb-12">
                                    <div className="text-center md:text-left">
                                        <h3 className="text-2xl font-black tracking-widest uppercase mb-2">
                                            Revenue Trajectory
                                        </h3>
                                        <p className="text-zinc-500 text-xs font-bold uppercase tracking-[0.2em]">
                                            Performance / Last 30 Cycles
                                        </p>
                                    </div>
                                    <div className="flex bg-zinc-950 border border-zinc-800 p-px mt-6 md:mt-0">
                                        <button className="px-8 py-3 bg-cyan-900 text-white text-[10px] font-black uppercase tracking-widest border border-cyan-800">
                                            Volume
                                        </button>
                                        <button className="px-8 py-3 text-zinc-500 hover:text-white bg-zinc-950 hover:bg-zinc-900 text-[10px] font-black uppercase tracking-widest transition-colors">
                                            Yield
                                        </button>
                                    </div>
                                </div>

                                <div className="h-64 relative flex items-end gap-1 px-4 md:px-10 border-b border-zinc-800">
                                    {[30, 60, 45, 80, 55, 95, 70, 40, 65, 85, 90, 100].map((h, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ height: 0 }}
                                            animate={{ height: `${h}%` }}
                                            transition={{ delay: i * 0.05, duration: 1, ease: "easeOut" }}
                                            className="flex-1 bg-cyan-900/40 hover:bg-cyan-600 transition-colors border-t border-cyan-500 relative group/bar"
                                        >
                                            <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-zinc-950 border border-zinc-800 text-white px-3 py-2 text-[10px] font-black opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap">
                                                {h}% YLD
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Verification Center */}
                            <div className="bg-zinc-950 border border-zinc-900 p-10">
                                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-600 mb-8 border-b border-zinc-900 pb-4">
                                    Identity & Security Status
                                </h3>
                                <div className="space-y-4">
                                    {[
                                        {
                                            label: "GST Registry",
                                            status: "Verified",
                                            desc: "Valid to 2026",
                                            color: "text-cyan-500",
                                        },
                                        {
                                            label: "Corporate Bank",
                                            status: "Verified",
                                            desc: "HDFC - Active",
                                            color: "text-cyan-500",
                                        },
                                        {
                                            label: "Industrial License",
                                            status: "Pending Check",
                                            desc: "Queue position #4",
                                            color: "text-orange-500",
                                        },
                                    ].map((item) => (
                                        <div
                                            key={item.label}
                                            className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-zinc-900 border border-zinc-900 gap-4"
                                        >
                                            <div>
                                                <div className="text-sm font-black text-white uppercase tracking-wider mb-1">
                                                    {item.label}
                                                </div>
                                                <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em]">
                                                    {item.desc}
                                                </div>
                                            </div>
                                            <span
                                                className={cn(
                                                    "text-[10px] font-black uppercase tracking-widest px-4 py-2 border bg-zinc-950",
                                                    item.color === "text-cyan-500"
                                                        ? "border-cyan-900"
                                                        : "border-orange-900/50",
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
                        <aside className="lg:col-span-4 space-y-8">
                            <div className="bg-zinc-950 border border-zinc-900 p-10 h-full">
                                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-8 flex items-center justify-between border-b border-zinc-900 pb-4">
                                    Network Pulse <ArrowUpRight className="h-4 w-4 text-cyan-600" />
                                </h3>
                                <div className="space-y-8 relative pt-4">
                                    {/* Timeline line */}
                                    <div className="absolute top-4 bottom-0 left-[7px] w-px bg-zinc-800" />

                                    {MOCK_USER.recent_activity.map((act) => (
                                        <div key={act.title} className="flex gap-6 relative z-10">
                                            <div
                                                className={cn(
                                                    "h-4 w-4 mt-1 border border-black",
                                                    act.status === "Pending"
                                                        ? "bg-orange-500 border-orange-900"
                                                        : act.status === "Unread"
                                                          ? "bg-cyan-500 border-cyan-900"
                                                          : "bg-zinc-500 border-zinc-800"
                                                )}
                                            />
                                            <div>
                                                <div className="text-xs font-black text-white uppercase tracking-wide leading-snug mb-2">
                                                    {act.title}
                                                </div>
                                                <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                                                    {act.time}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <button className="w-full mt-12 py-5 bg-zinc-900 border border-zinc-900 text-[10px] font-black uppercase tracking-widest text-white hover:bg-cyan-900 hover:border-cyan-800 transition-colors">
                                    Access Full Logs
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
