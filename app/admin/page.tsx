

"use client";

import { createClient } from "@/utils/supabase/client";
import {
    Users,
    Factory,
    ShoppingBag,
    TrendingUp,
    Search,
    Filter,
    MoreHorizontal,
    ShieldCheck,
    CheckCircle2,
    Eye,
    EyeOff
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

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
    const [filterRole, setFilterRole] = useState<'all' | 'buyer' | 'supplier'>('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [showProfileMenu, setShowProfileMenu] = useState(false);

    // Auth State
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [authLoading, setAuthLoading] = useState(true); // Initial check

    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        // Check session storage on mount
        const session = sessionStorage.getItem('admin_session');
        if (session === 'active') {
            setIsAuthenticated(true);
        }
        setAuthLoading(false);
    }, []);

    useEffect(() => {
        if (!isAuthenticated) return;

        const fetchProfiles = async () => {
            const supabase = createClient();
            const { data, error } = await supabase
                .from('profiles')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) {
                console.error("Supabase Error:", error);
                setErrorMsg(error.message);
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
            sessionStorage.setItem('admin_session', 'active');
            setIsAuthenticated(true);
        } else {
            alert("Invalid Credentials! Access Denied.");
        }
    };

    if (authLoading) return null; // Prevent flash

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-sans">
                <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10 border border-slate-100">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-slate-900 text-white mb-4">
                            <ShieldCheck className="h-8 w-8" />
                        </div>
                        <h1 className="text-2xl font-black text-slate-900 tracking-tight">Restricted Access</h1>
                        <p className="text-slate-500 text-sm mt-2">Authorized Personnel Only</p>
                    </div>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Admin ID</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3 px-4 mt-1 focus:outline-none focus:border-cyan-500 transition-colors"
                            />
                        </div>
                        <div>
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3 px-4 pr-12 mt-1 focus:outline-none focus:border-cyan-500 transition-colors"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 pt-1 text-slate-400 hover:text-slate-900 transition-colors"
                                >
                                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                </button>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-slate-900 text-white rounded-xl py-4 font-bold uppercase tracking-widest text-xs hover:bg-slate-800 transition-all shadow-lg shadow-slate-200 mt-4"
                        >
                            Enter Dashboard
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    // Filter Logic
    const filteredProfiles = profiles.filter(profile => {
        const matchesRole = filterRole === 'all' ||
            profile.role === filterRole ||
            profile.role === 'both'; // Include 'both' in specific filters

        // Refined Logic:
        // If filter is 'buyer', show 'buyer' AND 'both'
        // If filter is 'supplier', show 'supplier' AND 'both'
        if (filterRole === 'buyer' && profile.role !== 'buyer' && profile.role !== 'both') return false;
        if (filterRole === 'supplier' && profile.role !== 'supplier' && profile.role !== 'both') return false;

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
    const buyers = profiles.filter(p => p.role === 'buyer' || p.role === 'both').length;
    const suppliers = profiles.filter(p => p.role === 'supplier' || p.role === 'both').length;

    // Calculate New Users This Week
    const now = new Date();
    const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const newUsersCount = profiles.filter(p => new Date(p.created_at) > oneWeekAgo).length;

    // Export Logic
    const handleExport = async () => {
        try {
            const jsPDF = (await import('jspdf')).default;
            const autoTable = (await import('jspdf-autotable')).default;

            const doc = new jsPDF();

            // Add Title
            doc.setFontSize(20);
            doc.text("bechoHub User Data Export", 14, 22);
            doc.setFontSize(11);
            doc.text(`Generated on: ${new Date().toLocaleString()}`, 14, 30);

            // Define Table Data
            const tableColumn = ["Name", "Email", "Company", "Role", "Joined Date"];
            const tableRows: any[] = [];

            filteredProfiles.forEach(profile => {
                const displayRole = profile.role === 'supplier' ? 'seller' : profile.role;
                const profileData = [
                    `${profile.first_name} ${profile.last_name}`,
                    profile.email,
                    profile.company_name,
                    displayRole.toUpperCase(),
                    new Date(profile.created_at).toLocaleDateString()
                ];
                tableRows.push(profileData);
            });

            // Add Table
            autoTable(doc, {
                head: [tableColumn],
                body: tableRows,
                startY: 40,
                styles: { fontSize: 10, cellPadding: 3 },
                headStyles: { fillColor: [15, 23, 42], textColor: [255, 255, 255] }, // Slate-900 like
                alternateRowStyles: { fillColor: [248, 250, 252] } // Slate-50 like
            });

            // Save PDF
            doc.save(`bechohub_users_${new Date().toISOString().split('T')[0]}.pdf`);
        } catch (error) {
            console.error("Export Error:", error);
            alert("Failed to export PDF. Please try again.");
        }
    };



    const handleLogout = () => {
        sessionStorage.removeItem('admin_session');
        setIsAuthenticated(false);
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900" onClick={() => setShowProfileMenu(false)}>
            {/* Top Navigation */}
            <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="text-xl font-black tracking-tighter text-slate-950">
                            becho<span className="text-cyan-600">Hub</span>
                        </span>
                        <div className="px-2 py-0.5 rounded-full bg-slate-100 text-[10px] font-black uppercase tracking-wider text-slate-500 border border-slate-200">
                            Admin Console
                        </div>
                    </div>
                    <div className="flex items-center gap-4 relative">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setShowProfileMenu(!showProfileMenu);
                            }}
                            className="h-8 w-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200 cursor-pointer"
                        >
                            AD
                        </button>

                        {showProfileMenu && (
                            <div className="absolute top-10 right-0 w-48 bg-white rounded-xl shadow-2xl border border-slate-100 p-2 z-50 animate-in fade-in zoom-in-95 duration-200 origin-top-right">
                                <div className="px-3 py-2 border-b border-slate-50 mb-1">
                                    <p className="text-xs font-bold text-slate-900">Administrator</p>
                                    <p className="text-[10px] text-slate-400">Master Access</p>
                                </div>
                                <button
                                    onClick={handleLogout}
                                    className="w-full text-left px-3 py-2 text-xs font-bold text-red-500 hover:bg-red-50 rounded-lg transition-colors flex items-center gap-2"
                                >
                                    Log Out
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-10">
                <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <h1 className="text-3xl font-black tracking-tight text-slate-900 mb-2">Overview</h1>
                        <p className="text-slate-500 text-sm">Welcome back. Real-time platform insights.</p>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={handleExport}
                            className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-slate-50 transition-colors"
                        >
                            Export Data
                        </button>
                    </div>
                </div>

                {/* KPI Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                            <Users className="h-16 w-16 text-slate-900" />
                        </div>
                        <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2">Total Users</div>
                        <div className="text-4xl font-black text-slate-900">{totalUsers}</div>
                        <div className="text-xs text-green-500 font-bold mt-2 flex items-center gap-1">
                            <TrendingUp className="h-3 w-3" /> +{newUsersCount} this week
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                            <ShoppingBag className="h-16 w-16 text-cyan-600" />
                        </div>
                        <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2">Active Buyers</div>
                        <div className="text-4xl font-black text-slate-900">{buyers}</div>
                        <div className="text-xs text-slate-400 mt-2">
                            {totalUsers > 0 ? ((buyers / totalUsers) * 100).toFixed(0) : 0}% of userbase
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                            <Factory className="h-16 w-16 text-indigo-600" />
                        </div>
                        <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2">Verified Sellers</div>
                        <div className="text-4xl font-black text-slate-900">{suppliers}</div>
                        <div className="text-xs text-slate-400 mt-2">
                            {totalUsers > 0 ? ((suppliers / totalUsers) * 100).toFixed(0) : 0}% of userbase
                        </div>
                    </div>
                </div>

                {/* User Table */}
                <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
                    <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex gap-4 items-center">
                            <h2 className="font-bold text-lg text-slate-900">Registrations</h2>
                            <div className="flex bg-slate-100 p-1 rounded-lg">
                                <button
                                    onClick={() => setFilterRole('all')}
                                    className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${filterRole === 'all' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500 hover:text-slate-900'}`}
                                >
                                    All
                                </button>
                                <button
                                    onClick={() => setFilterRole('buyer')}
                                    className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${filterRole === 'buyer' ? 'bg-white shadow-sm text-cyan-700' : 'text-slate-500 hover:text-slate-900'}`}
                                >
                                    Buyers
                                </button>
                                <button
                                    onClick={() => setFilterRole('supplier')}
                                    className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${filterRole === 'supplier' ? 'bg-white shadow-sm text-indigo-700' : 'text-slate-500 hover:text-slate-900'}`}
                                >
                                    Sellers
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search users..."
                                    className="pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm outline-none focus:border-cyan-500 transition-colors w-64"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm text-slate-600">
                            <thead className="bg-slate-50 text-xs uppercase font-black text-slate-500 tracking-wider">
                                <tr>
                                    <th className="px-6 py-4">User Identity</th>
                                    <th className="px-6 py-4">Company</th>
                                    <th className="px-6 py-4">Role</th>
                                    <th className="px-6 py-4">Status</th>
                                    <th className="px-6 py-4">Joined</th>
                                    <th className="px-6 py-4 text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {loading ? (
                                    <tr>
                                        <td colSpan={6} className="text-center py-12">
                                            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-slate-200 border-r-slate-900 align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
                                        </td>
                                    </tr>
                                ) : filteredProfiles.map((profile) => (
                                    <tr key={profile.id} className="hover:bg-slate-50/50 transition-colors group">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center font-bold text-slate-500 text-xs">
                                                    {profile.first_name?.[0]}{profile.last_name?.[0]}
                                                </div>
                                                <div>
                                                    <div className="font-bold text-slate-900">{profile.first_name} {profile.last_name}</div>
                                                    <div className="text-xs text-slate-400">{profile.email}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 font-medium">{profile.company_name}</td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider
                                                ${profile.role === 'buyer' ? 'bg-cyan-50 text-cyan-700 border border-cyan-100' :
                                                    profile.role === 'supplier' ? 'bg-indigo-50 text-indigo-700 border border-indigo-100' :
                                                        'bg-purple-50 text-purple-700 border border-purple-100'} 
                                            `}>
                                                {profile.role === 'both' ? 'Hybrid' : profile.role === 'supplier' ? 'seller' : profile.role}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-1.5">
                                                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                                                <span className="text-xs font-semibold text-slate-700">Active</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-xs text-slate-400">
                                            {new Date(profile.created_at).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="p-1 hover:bg-slate-200 rounded transition-colors text-slate-400 hover:text-slate-900">
                                                <MoreHorizontal className="h-4 w-4" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}

                                {!loading && filteredProfiles.length === 0 && (
                                    <tr>
                                        <td colSpan={6} className="px-6 py-12 text-center text-slate-400">
                                            {errorMsg ? (
                                                <div className="text-red-500 font-bold">
                                                    Error fetching data: {errorMsg}
                                                    <br />
                                                    <span className="text-xs font-normal text-slate-400">Please run the 'fix_permissions.sql' script in Supabase.</span>
                                                </div>
                                            ) : (
                                                "No users found matching your criteria."
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
