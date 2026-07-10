"use client";

import { Search, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

type Profile = {
    id: string;
    email: string;
    first_name: string;
    last_name: string;
    company_name: string;
    role: string;
    created_at: string;
};

export const AdminTable = ({
    loading,
    filteredProfiles,
    errorMsg,
    filterRole,
    setFilterRole,
    searchQuery,
    setSearchQuery,
}: {
    loading: boolean;
    filteredProfiles: Profile[];
    errorMsg: string | null;
    filterRole: string;
    setFilterRole: React.Dispatch<React.SetStateAction<"all" | "buyer" | "seller">>;
    searchQuery: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}) => {
    return (
        <div className="bg-zinc-950 border border-zinc-900 overflow-hidden">
            <div className="p-6 md:p-8 border-b border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col md:flex-row gap-6 items-center w-full md:w-auto">
                    <h2 className="font-black text-xs uppercase tracking-[0.3em] text-zinc-500">Node Directory</h2>
                    <div className="flex bg-zinc-900 border border-zinc-900 p-px">
                        <button
                            onClick={() => setFilterRole("all")}
                            className={`px-6 py-3 text-[10px] font-black uppercase tracking-widest transition-colors ${filterRole === "all" ? "bg-cyan-900 text-white border border-cyan-800" : "text-zinc-600 hover:text-white hover:bg-zinc-950"}`}
                        >
                            Global
                        </button>
                        <button
                            onClick={() => setFilterRole("buyer")}
                            className={`px-6 py-3 text-[10px] font-black uppercase tracking-widest transition-colors ${filterRole === "buyer" ? "bg-cyan-900 text-white border border-cyan-800" : "text-zinc-600 hover:text-white hover:bg-zinc-950"}`}
                        >
                            Buyers
                        </button>
                        <button
                            onClick={() => setFilterRole("seller")}
                            className={`px-6 py-3 text-[10px] font-black uppercase tracking-widest transition-colors ${filterRole === "seller" ? "bg-cyan-900 text-white border border-cyan-800" : "text-zinc-600 hover:text-white hover:bg-zinc-950"}`}
                        >
                            Sellers
                        </button>
                    </div>
                </div>
                <div className="relative w-full md:w-auto">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-600" />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="QUERY DATABASE..."
                        className="w-full md:w-72 pl-12 pr-4 py-4 bg-zinc-900 border border-zinc-900 text-xs font-black uppercase tracking-widest text-white outline-none focus:border-cyan-600 transition-colors placeholder:text-zinc-700"
                    />
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left bg-zinc-950">
                    <thead className="bg-zinc-900 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 border-b border-zinc-900">
                        <tr>
                            <th className="px-8 py-6">Entity Core</th>
                            <th className="px-8 py-6">Corporate ID</th>
                            <th className="px-8 py-6">Type Node</th>
                            <th className="px-8 py-6">Status Code</th>
                            <th className="px-8 py-6">Init Signal</th>
                            <th className="px-8 py-6 text-right">Execute</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-900">
                        {loading ? (
                            <tr>
                                <td colSpan={6} className="text-center py-20 bg-zinc-950">
                                    <div className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-zinc-800 border-t-cyan-600 align-[-0.125em]" />
                                </td>
                            </tr>
                        ) : (
                            filteredProfiles.map((profile) => (
                                <tr key={profile.id} className="hover:bg-zinc-900 transition-colors group">
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-4">
                                            <div className="h-10 w-10 bg-zinc-900 border border-zinc-800 flex items-center justify-center font-black text-zinc-400 text-xs shrink-0">
                                                {profile.first_name?.[0]}
                                                {profile.last_name?.[0]}
                                            </div>
                                            <div>
                                                <div className="font-black text-sm uppercase tracking-wider text-white">
                                                    {profile.first_name} {profile.last_name}
                                                </div>
                                                <div className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">
                                                    {profile.email}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 font-black text-xs uppercase tracking-widest text-zinc-300">
                                        {profile.company_name}
                                    </td>
                                    <td className="px-8 py-6">
                                        <span
                                            className={cn(
                                                "inline-flex items-center px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] border",
                                                profile.role === "buyer"
                                                    ? "bg-zinc-950 text-white border-zinc-800"
                                                    : profile.role === "seller"
                                                      ? "bg-zinc-950 text-cyan-500 border-cyan-900"
                                                      : "bg-zinc-950 text-orange-500 border-orange-900"
                                            )}
                                        >
                                            {profile.role === "both"
                                                ? "HYBRID"
                                                : profile.role === "seller"
                                                  ? "SELLER"
                                                  : profile.role}
                                        </span>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-3">
                                            <div className="h-2 w-2 bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                                            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
                                                ONLINE
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 text-[10px] font-black text-zinc-600 uppercase tracking-widest">
                                        {new Date(profile.created_at).toLocaleDateString("en-GB").replace(/\//g, ".")}
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        <button className="p-2 border border-transparent hover:border-zinc-800 hover:bg-zinc-900 transition-colors text-zinc-600 hover:text-white">
                                            <MoreHorizontal className="h-5 w-5" />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}

                        {!loading && filteredProfiles.length === 0 && (
                            <tr>
                                <td colSpan={6} className="px-8 py-20 text-center bg-zinc-950">
                                    {errorMsg ? (
                                        <div className="text-orange-500 text-xs font-black uppercase tracking-widest">
                                            SYSTEM FAULT: {errorMsg}
                                            <br />
                                            <span className="text-[10px] text-zinc-600 mt-2 block">
                                                Run database sync protocols to restore connection.
                                            </span>
                                        </div>
                                    ) : (
                                        <span className="text-zinc-600 text-xs font-black uppercase tracking-widest">
                                            NO MATCHING THREADS FOUND
                                        </span>
                                    )}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
