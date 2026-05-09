"use client";

import { createClient } from "@/utils/supabase/client";
import {
    Users,
    Factory,
    ShoppingBag,
    TrendingUp,
    Search,
    MoreHorizontal,
    ShieldCheck,
    Eye,
    EyeOff,
} from "lucide-react";
import { useEffect, useState } from "react";
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

export default function AdminDashboard() {
    const [profiles, setProfiles] = useState<Profile[]>([]);
    const [filterRole, setFilterRole] = useState<"all" | "buyer" | "seller">("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [showProfileMenu, setShowProfileMenu] = useState(false);

    // Auth State
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [authLoading, setAuthLoading] = useState(true); // Initial check

    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        // Check session storage on mount
        const session = sessionStorage.getItem("admin_session");
        if (session === "active") {
            setIsAuthenticated(true);
        }
        setAuthLoading(false);
    }, []);

    useEffect(() => {
        if (!isAuthenticated) return;

        const fetchProfiles = async () => {
            const supabase = createClient();
            const { data, error } = await supabase
                .from("profiles")
                .select("*")
                .order("created_at", { ascending: false });

            if (error) {
                console.error("Supabase Error:", error);
                setErrorMsg(error.message || JSON.stringify(error) || "Unknown Error");
            } else if (data) {
                setProfiles(data);
            }
            setLoading(false);
        };
        fetchProfiles();
    }, [isAuthenticated]);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (username === "Adminhumein" && password === "Chalhatmaalikhu") {
            sessionStorage.setItem("admin_session", "active");
            setIsAuthenticated(true);
        } else {
            alert("Invalid Credentials! Access Denied.");
        }
    };

    if (authLoading) return null; // Prevent flash

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center p-6 font-sans text-white selection:bg-cyan-600/30">
                <div className="w-full max-w-md bg-zinc-950 p-10 border border-zinc-900 shadow-2xl overflow-hidden relative group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-900/10 rounded-full blur-[80px] pointer-events-none" />

                    <div className="text-center mb-10 relative z-10">
                        <div className="inline-flex items-center justify-center h-16 w-16 bg-black border border-cyan-900 text-cyan-600 mb-6">
                            <ShieldCheck className="h-8 w-8" />
                        </div>
                        <h1 className="text-3xl font-black text-white tracking-widest uppercase mb-2">
                            Command Center
                        </h1>
                        <p className="text-zinc-500 text-[10px] font-black tracking-[0.3em] uppercase">
                            Authorized Personnel Only
                        </p>
                    </div>
                    <form onSubmit={handleLogin} className="space-y-6 relative z-10">
                        <div>
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-1 mb-2 block">
                                Operator ID
                            </label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full bg-black border border-zinc-900 py-4 px-5 text-white focus:outline-none focus:border-cyan-600 focus:bg-zinc-950 transition-colors uppercase tracking-widest text-xs font-black placeholder:text-zinc-700"
                                placeholder="ENTER ID"
                            />
                        </div>
                        <div>
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-1 mb-2 block">
                                Passcode
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-black border border-zinc-900 py-4 px-5 pr-12 text-white focus:outline-none focus:border-cyan-600 focus:bg-zinc-950 transition-colors uppercase tracking-widest text-xs font-black placeholder:text-zinc-700"
                                    placeholder="ENTER PASSCODE"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-5 top-1/2 -translate-y-1/2 text-zinc-600 hover:text-cyan-500 transition-colors"
                                >
                                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                </button>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-cyan-700 hover:bg-cyan-600 text-white py-5 font-black uppercase tracking-[0.3em] text-[10px] transition-colors mt-4 border-t border-cyan-500/50"
                        >
                            Authorize Entry
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    // Filter Logic
    const filteredProfiles = profiles.filter((profile) => {
        if (filterRole === "buyer" && profile.role !== "buyer" && profile.role !== "both") return false;
        if (filterRole === "seller" && profile.role !== "seller" && profile.role !== "both") return false;

        const searchLower = searchQuery.toLowerCase();
        const matchesSearch =
            profile.first_name?.toLowerCase().includes(searchLower) ||
            profile.last_name?.toLowerCase().includes(searchLower) ||
            profile.company_name?.toLowerCase().includes(searchLower) ||
            profile.email?.toLowerCase().includes(searchLower);

        return matchesSearch;
    });

    // Calculate Stats (Real Data)
    const totalUsers = profiles.length;
    const buyers = profiles.filter((p) => p.role === "buyer" || p.role === "both").length;
    const sellers = profiles.filter((p) => p.role === "seller" || p.role === "both").length;

    // Calculate New Users This Week
    const now = new Date();
    const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const newUsersCount = profiles.filter((p) => new Date(p.created_at) > oneWeekAgo).length;

    // Export Logic
    const handleExport = async () => {
        try {
            const jsPDF = (await import("jspdf")).default;
            const autoTable = (await import("jspdf-autotable")).default;

            const doc = new jsPDF();
            doc.setFontSize(20);
            doc.text("bechoHub System Export", 14, 22);
            doc.setFontSize(11);
            doc.text(`Generated: ${new Date().toLocaleString()}`, 14, 30);

            const tableColumn = ["Name", "Email", "Entity", "Role", "Timestamp"];
            const tableRows: string[][] = [];

            filteredProfiles.forEach((profile) => {
                const displayRole = profile.role === "seller" ? "seller" : profile.role;
                const profileData = [
                    `${profile.first_name} ${profile.last_name}`,
                    profile.email,
                    profile.company_name,
                    displayRole.toUpperCase(),
                    new Date(profile.created_at).toLocaleDateString(),
                ];
                tableRows.push(profileData);
            });

            autoTable(doc, {
                head: [tableColumn],
                body: tableRows,
                startY: 40,
                styles: { fontSize: 10, cellPadding: 3 },
                headStyles: { fillColor: [0, 0, 0], textColor: [255, 255, 255] },
                alternateRowStyles: { fillColor: [20, 20, 20], textColor: [200, 200, 200] },
            });

            doc.save(`bechohub_dump_${new Date().toISOString().split("T")[0]}.pdf`);
        } catch (error) {
            console.error("Export Error:", error);
            alert("Failed to export PDF.");
        }
    };

    const handleLogout = () => {
        sessionStorage.removeItem("admin_session");
        setIsAuthenticated(false);
    };

    return (
        <div
            className="min-h-screen bg-black font-sans text-white selection:bg-cyan-600/30"
            onClick={() => setShowProfileMenu(false)}
        >
            {/* Top Navigation */}
            <header className="bg-black border-b border-zinc-900 sticky top-0 z-30">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <span className="text-2xl font-black tracking-tighter text-white font-heading">
                            becho<span className="text-cyan-600">Hub</span>
                        </span>
                        <div className="px-3 py-1 bg-zinc-950 text-[10px] font-black uppercase tracking-[0.2em] text-cyan-600 border border-zinc-900">
                            Command Console
                        </div>
                    </div>
                    <div className="flex items-center gap-4 relative">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setShowProfileMenu(!showProfileMenu);
                            }}
                            className="h-10 w-10 bg-zinc-900 text-white flex items-center justify-center font-black text-xs hover:bg-zinc-800 transition-colors border border-zinc-800 cursor-pointer"
                        >
                            AD
                        </button>

                        {showProfileMenu && (
                            <div className="absolute top-14 right-0 w-48 bg-zinc-950 border border-zinc-900 p-2 z-50 animate-in fade-in zoom-in-95 duration-200">
                                <div className="px-4 py-3 border-b border-zinc-900 mb-1">
                                    <p className="text-xs font-black text-white uppercase tracking-wider">
                                        Root Access
                                    </p>
                                    <p className="text-[10px] uppercase tracking-widest text-cyan-600 mt-1">Level 0</p>
                                </div>
                                <button
                                    onClick={handleLogout}
                                    className="w-full text-left px-4 py-3 text-[10px] font-black tracking-widest text-orange-500 hover:bg-zinc-900 transition-colors uppercase"
                                >
                                    Terminate Session
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-12">
                <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h1 className="text-4xl font-black tracking-widest text-white uppercase mb-2">
                            Metrics Overview
                        </h1>
                        <p className="text-zinc-500 text-xs font-black uppercase tracking-[0.2em]">
                            Real-time system telemetry
                        </p>
                    </div>
                    <button
                        onClick={handleExport}
                        className="px-6 py-4 bg-zinc-950 border border-zinc-900 text-[10px] font-black uppercase tracking-[0.2em] text-white hover:border-cyan-600 hover:text-cyan-500 transition-colors w-fit"
                    >
                        Export Data Dump
                    </button>
                </div>

                {/* KPI Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-900 border border-zinc-900 mb-12">
                    <div className="bg-black p-8 relative overflow-hidden group border border-transparent hover:border-cyan-900 transition-colors">
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
                    <div className="bg-black p-8 relative overflow-hidden group border border-transparent hover:border-cyan-900 transition-colors">
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
                    <div className="bg-black p-8 relative overflow-hidden group border border-transparent hover:border-cyan-900 transition-colors">
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

                {/* User Table Header & Controls */}
                <div className="bg-black border border-zinc-900 overflow-hidden">
                    <div className="p-6 md:p-8 border-b border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex flex-col md:flex-row gap-6 items-center w-full md:w-auto">
                            <h2 className="font-black text-xs uppercase tracking-[0.3em] text-zinc-500">
                                Node Directory
                            </h2>
                            <div className="flex bg-zinc-950 border border-zinc-900 p-px">
                                <button
                                    onClick={() => setFilterRole("all")}
                                    className={`px-6 py-3 text-[10px] font-black uppercase tracking-widest transition-colors ${filterRole === "all" ? "bg-cyan-900 text-white border border-cyan-800" : "text-zinc-600 hover:text-white hover:bg-black"}`}
                                >
                                    Global
                                </button>
                                <button
                                    onClick={() => setFilterRole("buyer")}
                                    className={`px-6 py-3 text-[10px] font-black uppercase tracking-widest transition-colors ${filterRole === "buyer" ? "bg-cyan-900 text-white border border-cyan-800" : "text-zinc-600 hover:text-white hover:bg-black"}`}
                                >
                                    Buyers
                                </button>
                                <button
                                    onClick={() => setFilterRole("seller")}
                                    className={`px-6 py-3 text-[10px] font-black uppercase tracking-widest transition-colors ${filterRole === "seller" ? "bg-cyan-900 text-white border border-cyan-800" : "text-zinc-600 hover:text-white hover:bg-black"}`}
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
                                className="w-full md:w-72 pl-12 pr-4 py-4 bg-zinc-950 border border-zinc-900 text-xs font-black uppercase tracking-widest text-white outline-none focus:border-cyan-600 transition-colors placeholder:text-zinc-700"
                            />
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left bg-black">
                            <thead className="bg-zinc-950 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 border-b border-zinc-900">
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
                                        <td colSpan={6} className="text-center py-20 bg-black">
                                            <div className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-zinc-800 border-t-cyan-600 align-[-0.125em]" />
                                        </td>
                                    </tr>
                                ) : (
                                    filteredProfiles.map((profile) => (
                                        <tr key={profile.id} className="hover:bg-zinc-950 transition-colors group">
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
                                                            ? "bg-black text-white border-zinc-800"
                                                            : profile.role === "seller"
                                                              ? "bg-black text-cyan-500 border-cyan-900"
                                                              : "bg-black text-orange-500 border-orange-900"
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
                                                {new Date(profile.created_at)
                                                    .toLocaleDateString("en-GB")
                                                    .replace(/\//g, ".")}
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
                                        <td colSpan={6} className="px-8 py-20 text-center bg-black">
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
            </main>
        </div>
    );
}
