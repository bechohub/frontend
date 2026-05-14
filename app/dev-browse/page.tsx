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
        <div className="min-h-screen bg-zinc-950 text-[#f0f0fa] font-sans selection:bg-cyan-600/30 selection:text-white">
            <Navbar />

            <main className="pt-28 md:pt-36 pb-24">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Persistent Search Bar under Dark Theme */}
                    <div className="sticky top-[88px] z-40 bg-zinc-950/90 backdrop-blur-md py-6 border-b border-zinc-900 mb-12">
                        <div className="flex flex-col gap-6">
                            {/* Search Input */}
                            <div className="relative group w-full">
                                <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500 group-focus-within:text-cyan-500 transition-colors" />
                                <input
                                    type="text"
                                    placeholder="SEARCH NETWORK COMMAND..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-zinc-900 border border-zinc-800 py-5 pl-16 pr-6 outline-none focus:bg-zinc-900 focus:border-cyan-600 transition-all font-black text-sm uppercase tracking-widest text-white placeholder:text-zinc-600"
                                />
                            </div>

                            {/* Categories */}
                            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
                                <div className="flex items-center gap-2">
                                    {INDUSTRY_CATEGORIES.map((cat) => {
                                        const Icon = getIndustryIcon(cat.icon);
                                        return (
                                            <button
                                                key={cat.id}
                                                onClick={() => setSelectedCategory(cat.id)}
                                                className={`flex items-center gap-3 px-6 py-4 uppercase tracking-widest text-[10px] font-black transition-colors ${
                                                    selectedCategory === cat.id
                                                        ? "bg-cyan-700 text-white"
                                                        : "bg-zinc-900 border border-zinc-900 text-zinc-500 hover:text-white hover:border-zinc-700"
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
                        <div className="border border-zinc-800 bg-zinc-900/50 p-8 md:p-12 mb-16 flex flex-col md:flex-row items-center justify-between text-white relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-900/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-cyan-900/20 transition-colors" />
                            <div className="mb-8 md:mb-0 relative z-10">
                                <h2 className="text-3xl md:text-5xl font-black mb-4 flex items-center gap-4 tracking-tighter uppercase text-white">
                                    <Package className="h-8 w-8 text-cyan-600" /> Unknown Entity?
                                </h2>
                                <p className="text-zinc-400 font-bold uppercase tracking-widest text-sm">
                                    Post an RFQ. Verified manufacturers will contact you instantly.
                                </p>
                            </div>
                            <Link
                                href="/rfq"
                                className="relative z-10 bg-cyan-700 text-white px-10 py-5 font-black text-xs uppercase tracking-[0.2em] hover:bg-cyan-600 transition-colors border-t border-cyan-500/50"
                            >
                                Initiate RFQ
                            </Link>
                        </div>
                    </FadeIn>

                    {/* Result Header */}
                    <div className="mb-10 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-500">
                                Verified Entities
                            </h2>
                            <div className="h-1.5 w-1.5 rounded-full bg-zinc-700" />
                            <span className="text-xs font-black uppercase tracking-[0.3em] text-white">
                                {filteredSellers.length} MATCHES
                            </span>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.3em] text-cyan-600 cursor-pointer hover:text-cyan-500 transition-colors">
                            <Filter className="h-4 w-4" /> Parameters
                        </div>
                    </div>

                    {/* Industrial Listing View */}
                    <AnimatePresence>
                        {filteredSellers.length > 0 ? (
                            <StaggerContainer key={`results-${selectedCategory}-${searchQuery}`} className="space-y-4">
                                {filteredSellers.map((seller) => (
                                    <StaggerItem key={seller.id}>
                                        <div className="group bg-zinc-950 border border-zinc-900 hover:border-zinc-700 transition-colors duration-300 p-6 md:p-8 relative">
                                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-l-2 border-transparent group-hover:border-cyan-600 pl-4 md:pl-8 -ml-6 md:-ml-8 transition-colors">
                                                {/* Left: Branding & Core Info */}
                                                <div className="lg:col-span-4 border-b border-zinc-900 lg:border-none pb-6 lg:pb-0">
                                                    <div className="flex flex-col items-start gap-4 mb-4">
                                                        <div className="flex items-center gap-2 group/name">
                                                            <Link href={`/seller/${seller.id}`}>
                                                                <h3 className="text-2xl font-black text-white tracking-wider group-hover/name:text-cyan-500 transition-colors uppercase truncate max-w-xs">
                                                                    {seller.name}
                                                                </h3>
                                                            </Link>
                                                            {seller.verified && (
                                                                <div className="bg-cyan-600/20 p-1 border border-cyan-600/50">
                                                                    <CheckCircle className="h-3 w-3 text-cyan-600" />
                                                                </div>
                                                            )}
                                                        </div>
                                                        <div className="flex items-center gap-2 text-[10px] text-zinc-500 font-bold uppercase tracking-[0.2em] bg-zinc-900 px-3 py-1 border border-zinc-900">
                                                            <MapPin className="h-3 w-3 text-cyan-600" />{" "}
                                                            {seller.location}
                                                        </div>
                                                    </div>
                                                    <p className="text-xs text-zinc-400 font-medium leading-relaxed uppercase tracking-wide line-clamp-2 pr-6 border-l border-zinc-800 pl-4">
                                                        {seller.description}
                                                    </p>
                                                </div>

                                                {/* Center: Specs */}
                                                <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                                                    <div className="bg-zinc-900 border border-zinc-900 p-4">
                                                        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600 mb-1">
                                                            MOQ Spec
                                                        </div>
                                                        <div className="text-sm font-black text-white uppercase tracking-wider">
                                                            {seller.moq}
                                                        </div>
                                                    </div>
                                                    <div className="bg-zinc-900 border border-zinc-900 p-4">
                                                        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600 mb-1">
                                                            Output Cap
                                                        </div>
                                                        <div className="text-sm font-black text-white uppercase tracking-wider">
                                                            {seller.capacity}
                                                        </div>
                                                    </div>
                                                    <div className="col-span-full pt-2 flex flex-wrap gap-2">
                                                        {seller.tags.map((tag) => (
                                                            <span
                                                                key={tag}
                                                                className="px-3 py-1 bg-zinc-900 text-[10px] font-black text-zinc-400 uppercase tracking-widest"
                                                            >
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Right: Actions */}
                                                <div className="lg:col-span-3 flex flex-col gap-3">
                                                    <button className="w-full bg-cyan-700 text-white px-6 py-4 font-black text-[10px] uppercase tracking-[0.2em] hover:bg-cyan-600 transition-colors group/btn overflow-hidden relative border-t border-cyan-500/50">
                                                        <span className="relative z-10 flex items-center justify-center gap-2">
                                                            Request Data{" "}
                                                            <ArrowUpRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                                                        </span>
                                                    </button>
                                                    <div className="grid grid-cols-2 gap-3">
                                                        <button className="flex items-center justify-center gap-2 border border-zinc-800 bg-zinc-900 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 hover:border-zinc-500 hover:text-white transition-colors">
                                                            <PhoneCall className="h-3 w-3 text-cyan-600" /> Comm
                                                        </button>
                                                        <button className="flex items-center justify-center gap-2 border border-zinc-800 bg-zinc-900 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 hover:border-zinc-500 hover:text-white transition-colors">
                                                            <Mail className="h-3 w-3 text-cyan-600" /> Ping
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
                                <div className="inline-flex items-center justify-center h-24 w-24 bg-zinc-900 text-zinc-700 mb-8 border border-zinc-800">
                                    <Search className="h-10 w-10 text-zinc-600" />
                                </div>
                                <h3 className="text-3xl font-black text-white uppercase tracking-wider mb-4">
                                    Entity Missing
                                </h3>
                                <p className="text-zinc-500 font-bold tracking-widest uppercase text-sm mb-8">
                                    No parameters match your query in the network.
                                </p>
                                <button
                                    onClick={() => {
                                        setSearchQuery("");
                                        setSelectedCategory("all");
                                    }}
                                    className="text-xs font-black uppercase tracking-[0.3em] text-cyan-600 hover:text-cyan-500 transition-colors border-b border-transparent hover:border-cyan-500 pb-1"
                                >
                                    Reset Protocol
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
