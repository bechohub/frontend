"use client";

import { useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Search, Filter, Star, MapPin, ArrowUpRight, Package, PhoneCall, Mail, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// New Centralized Imports
import { INDUSTRY_CATEGORIES, getIndustryIcon } from "@/constants";
import { MOCK_SELLERS } from "@/lib/mock-data";
import { FadeIn, StaggerContainer, StaggerItem } from "../components/Animators";
import Link from "next/link";

export default function BrowsePage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");

    const filteredSellers = useMemo(() => {
        const query = searchQuery.trim().toLowerCase();
        return MOCK_SELLERS.filter((seller) => {
            const matchesSearch =
                !query ||
                seller.name?.toLowerCase().includes(query) ||
                seller.tags.some((t) => t.toLowerCase().includes(query));
            const matchesCategory = selectedCategory === "all" || seller.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, selectedCategory]);

    return (
        <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-cyan-100 selection:text-cyan-950">
            <Navbar />

            <main className="pt-24 md:pt-32 pb-24">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Simplified Persistent Search Bar */}
                    <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-xl py-6 border-b border-slate-100 mb-12">
                        <div className="flex flex-col gap-6">
                            {/* Search Input - Full Width for better UX */}
                            <div className="relative group w-full">
                                <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-cyan-600 transition-colors" />
                                <input
                                    type="text"
                                    placeholder="Search products, sellers or industries..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-3xl py-5 pl-16 pr-6 outline-none focus:bg-white focus:border-cyan-500 transition-all font-medium text-lg shadow-sm"
                                />
                            </div>

                            {/* Categories - Scrollable underneath */}
                            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
                                <div className="flex items-center gap-2">
                                    {INDUSTRY_CATEGORIES.map((cat) => {
                                        const Icon = getIndustryIcon(cat.icon);
                                        return (
                                            <button
                                                key={cat.id}
                                                onClick={() => setSelectedCategory(cat.id)}
                                                className={`flex items-center gap-2 px-6 py-4 rounded-2xl border transition-all whitespace-nowrap text-[10px] font-black uppercase tracking-widest ${
                                                    selectedCategory === cat.id
                                                        ? "bg-slate-900 border-slate-900 text-white shadow-xl"
                                                        : "bg-white border-slate-200 text-slate-400 hover:border-slate-950 hover:text-slate-950"
                                                }`}
                                            >
                                                <Icon className="h-4 w-4" />
                                                {cat.name}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Action RFQ Bar */}
                    <FadeIn delay={0.1}>
                        <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-3xl p-6 md:p-10 mb-16 flex flex-col md:flex-row items-center justify-between text-white shadow-2xl shadow-cyan-500/10">
                            <div className="mb-6 md:mb-0">
                                <h2 className="text-2xl md:text-3xl font-black mb-2 flex items-center gap-3 tracking-tighter">
                                    <Package className="h-8 w-8" /> Can&apos;t find what you need?
                                </h2>
                                <p className="text-cyan-100 font-medium">
                                    Post a request and let verified manufacturers find you. It&apos;s faster.
                                </p>
                            </div>
                            <Link
                                href="/rfq"
                                className="bg-white text-slate-900 px-10 py-5 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-xl"
                            >
                                Post RFQ Now
                            </Link>
                        </div>
                    </FadeIn>

                    {/* Result Header */}
                    <div className="mb-10 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <h2 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400">
                                Verified Sellers
                            </h2>
                            <div className="h-1.5 w-1.5 rounded-full bg-slate-200" />
                            <span className="text-xs font-bold text-slate-950">{filteredSellers.length} Results</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-bold text-cyan-600">
                            <Filter className="h-4 w-4" /> Filter Advanced
                        </div>
                    </div>

                    {/* Minimal & Efficient List-View Listing (The "Beater" Layout) */}
                    <AnimatePresence>
                        {filteredSellers.length > 0 ? (
                            <StaggerContainer key={`results-${selectedCategory}-${searchQuery}`} className="space-y-6">
                                {filteredSellers.map((seller) => (
                                    <StaggerItem key={seller.id}>
                                        <div className="group bg-white rounded-[40px] border border-slate-100 hover:bg-slate-50 hover:border-slate-200 transition-all duration-300 overflow-hidden p-6 md:p-10 relative">
                                            {/* Grid layout for info */}
                                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                                                {/* Left: Branding & Core Info */}
                                                <div className="lg:col-span-4 border-b border-slate-100 lg:border-none pb-6 lg:pb-0">
                                                    <div className="flex items-center gap-3 mb-4">
                                                        <div className="h-14 w-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-black text-2xl tracking-tighter">
                                                            {seller.name?.charAt(0)}
                                                        </div>
                                                        <div>
                                                            <div className="flex items-center gap-2 mb-1 group/name">
                                                                <Link href={`/seller/${seller.id}`}>
                                                                    <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-none group-hover/name:text-cyan-600 transition-colors uppercase">
                                                                        {seller.name}
                                                                    </h3>
                                                                </Link>
                                                                {seller.verified && (
                                                                    <div
                                                                        className="h-5 w-5 bg-cyan-600 rounded-full flex items-center justify-center"
                                                                        title="Verified Manufacturer"
                                                                    >
                                                                        <CheckCircle className="h-3 w-3 text-white" />
                                                                    </div>
                                                                )}
                                                            </div>
                                                            <div className="flex items-center gap-1.5 text-xs text-slate-400 font-bold uppercase tracking-widest">
                                                                <MapPin className="h-3 w-3" /> {seller.location}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="text-sm text-slate-500 font-medium leading-relaxed line-clamp-2 pr-6">
                                                        {seller.description}
                                                    </p>
                                                </div>

                                                {/* Center: Specs (Simplified for speed) */}
                                                <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-6">
                                                    <div className="space-y-1">
                                                        <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                                                            MOQ
                                                        </div>
                                                        <div className="text-sm font-black text-slate-900">
                                                            {seller.moq}
                                                        </div>
                                                    </div>
                                                    <div className="space-y-1">
                                                        <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                                                            Capacity
                                                        </div>
                                                        <div className="text-sm font-black text-slate-900">
                                                            {seller.capacity}
                                                        </div>
                                                    </div>
                                                    <div className="space-y-1">
                                                        <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                                                            Rating
                                                        </div>
                                                        <div className="flex items-center gap-1 text-sm font-black text-slate-900">
                                                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />{" "}
                                                            {seller.rating}
                                                        </div>
                                                    </div>
                                                    <div className="col-span-full pt-2 flex flex-wrap gap-2">
                                                        {seller.tags.map((tag) => (
                                                            <span
                                                                key={tag}
                                                                className="px-3 py-1 bg-white border border-slate-100 rounded-lg text-[10px] font-bold text-slate-400 uppercase tracking-widest"
                                                            >
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Right: Actions */}
                                                <div className="lg:col-span-3 flex flex-col gap-3">
                                                    <button className="w-full bg-slate-900 text-white px-6 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-800 transition-all shadow-xl group/btn overflow-hidden relative">
                                                        <span className="relative z-10 flex items-center justify-center gap-2">
                                                            Get Quotes{" "}
                                                            <ArrowUpRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                                                        </span>
                                                        <div className="absolute inset-0 bg-cyan-600 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                                                    </button>
                                                    <div className="grid grid-cols-2 gap-3">
                                                        <button className="flex items-center justify-center gap-2 border border-slate-200 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-400 hover:border-slate-400 hover:text-slate-900 transition-all">
                                                            <PhoneCall className="h-3 w-3" /> Call
                                                        </button>
                                                        <button className="flex items-center justify-center gap-2 border border-slate-200 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-400 hover:border-slate-400 hover:text-slate-900 transition-all">
                                                            <Mail className="h-3 w-3" /> Email
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                        ) : (
                            <motion.div
                                key="empty"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="py-32 text-center"
                            >
                                <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-slate-50 text-slate-300 mb-8 border-4 border-dashed border-slate-100">
                                    <Search className="h-10 w-10 text-slate-200" />
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-2">
                                    No results for your discovery
                                </h3>
                                <p className="text-slate-500 font-medium">
                                    Try searching for a simpler term or a broader category.
                                </p>
                                <button
                                    onClick={() => {
                                        setSearchQuery("");
                                        setSelectedCategory("all");
                                    }}
                                    className="mt-8 text-xs font-black uppercase tracking-widest text-cyan-600 hover:opacity-70 transition-opacity"
                                >
                                    Clear all filters
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </main>

            <Footer />
        </div>
    );
}
