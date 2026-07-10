"use client";

import { Users, ShoppingBag, Factory, TrendingUp } from "lucide-react";

export const AdminMetrics = ({
    totalUsers,
    buyers,
    sellers,
    newUsersCount,
}: {
    totalUsers: number;
    buyers: number;
    sellers: number;
    newUsersCount: number;
}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-900 border border-zinc-900 mb-12">
            <div className="bg-zinc-950 p-8 relative overflow-hidden group border border-transparent hover:border-cyan-900 transition-colors">
                <div className="absolute -top-4 -right-4 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Users className="h-32 w-32 text-white" />
                </div>
                <div className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.3em] mb-4">
                    Global Entities
                </div>
                <div className="text-5xl font-black text-white tracking-tighter">{totalUsers}</div>
                <div className="text-[10px] font-black tracking-widest text-cyan-500 uppercase mt-4 flex items-center gap-2">
                    <TrendingUp className="h-3 w-3" /> +{newUsersCount} THREADS ACTIVE
                </div>
            </div>
            <div className="bg-zinc-950 p-8 relative overflow-hidden group border border-transparent hover:border-cyan-900 transition-colors">
                <div className="absolute -top-4 -right-4 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <ShoppingBag className="h-32 w-32 text-cyan-600" />
                </div>
                <div className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.3em] mb-4">
                    Sourcing Nodes
                </div>
                <div className="text-5xl font-black text-white tracking-tighter">{buyers}</div>
                <div className="text-[10px] font-black tracking-widest text-zinc-600 uppercase mt-4">
                    {totalUsers > 0 ? ((buyers / totalUsers) * 100).toFixed(0) : 0}% OF NETWORK
                </div>
            </div>
            <div className="bg-zinc-950 p-8 relative overflow-hidden group border border-transparent hover:border-cyan-900 transition-colors">
                <div className="absolute -top-4 -right-4 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Factory className="h-32 w-32 text-white" />
                </div>
                <div className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.3em] mb-4">
                    Verified Manufacturers
                </div>
                <div className="text-5xl font-black text-white tracking-tighter">{sellers}</div>
                <div className="text-[10px] font-black tracking-widest text-zinc-600 uppercase mt-4">
                    {totalUsers > 0 ? ((sellers / totalUsers) * 100).toFixed(0) : 0}% OF NETWORK
                </div>
            </div>
        </div>
    );
};
