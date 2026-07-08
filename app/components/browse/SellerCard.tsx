"use client";

import Link from "next/link";
import { MapPin, ArrowUpRight, PhoneCall, Mail, CheckCircle } from "lucide-react";
import type { Seller } from "@/types";

export const SellerCard = ({ seller }: { seller: Seller }) => {
    return (
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
                            <MapPin className="h-3 w-3 text-cyan-600" /> {seller.location}
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
                        <div className="text-sm font-black text-white uppercase tracking-wider">{seller.moq}</div>
                    </div>
                    <div className="bg-zinc-900 border border-zinc-900 p-4">
                        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600 mb-1">
                            Output Cap
                        </div>
                        <div className="text-sm font-black text-white uppercase tracking-wider">{seller.capacity}</div>
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
    );
};
