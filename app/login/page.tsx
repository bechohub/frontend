"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, ShieldCheck, Briefcase } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        if (!email || !password) {
            setError("Please enter email and password");
            return;
        }
        // Dynamically import the loginWithRoles function
        const { loginWithRoles } = await import("../actions/loginWithRoles");
        const result = await loginWithRoles(email, password);
        if (result.error) {
            setError(result.error);
            return;
        }
        if (result.roles && result.roles.length === 1) {
            localStorage.setItem("lastRole", result.roles[0]);
            router.push(`/${result.roles[0]}`);
        } else if (result.roles && result.roles.length > 1) {
            router.push("/role-selection");
        } else {
            setError("Unknown error. Please try again.");
        }
    };

    return (
        <div className="min-h-screen bg-black text-[#f0f0fa] font-sans selection:bg-cyan-600/30 selection:text-white overflow-hidden flex flex-col relative z-0">
            {/* Background Ambience */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-900/10 rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.1] mix-blend-overlay pointer-events-none" />
            </div>

            {/* Header / Navigation */}
            <header className="sticky top-0 z-50 w-full p-6 md:p-10 flex justify-between items-center transition-opacity duration-500 border-b border-zinc-900 bg-black/50 backdrop-blur-md">
                <Link
                    href="/"
                    className="text-2xl font-black tracking-tighter text-white font-heading hover:opacity-80 transition-opacity"
                >
                    becho<span className="text-cyan-600">Hub</span>
                </Link>
            </header>

            <main className="flex-1 flex items-center justify-center p-6 relative">
                <div className="w-full max-w-md">
                    <h2 className="text-6xl md:text-7xl font-black tracking-tightest mb-8 uppercase text-center text-white">
                        Access <br />
                        <span className="text-cyan-600">Protocol.</span>
                    </h2>
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 ml-1">
                                Work Email
                            </label>
                            <div className="relative group">
                                <Briefcase className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500 group-focus-within:text-cyan-500 transition-colors" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="john@company.com"
                                    className="w-full bg-zinc-950 border border-zinc-800 py-5 pl-14 pr-5 focus:bg-zinc-900 focus:border-cyan-600 focus:ring-4 focus:ring-cyan-600/10 outline-none transition-all text-white placeholder:text-zinc-600 font-medium"
                                    required
                                    autoComplete="email"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 ml-1">
                                Password
                            </label>
                            <div className="relative group">
                                <ShieldCheck className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500 group-focus-within:text-cyan-500 transition-colors" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Your password"
                                    className="w-full bg-zinc-950 border border-zinc-800 py-5 pl-14 pr-12 focus:bg-zinc-900 focus:border-cyan-600 focus:ring-4 focus:ring-cyan-600/10 outline-none transition-all text-white placeholder:text-zinc-600 font-medium"
                                    required
                                    autoComplete="current-password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-cyan-500 transition-colors"
                                    tabIndex={-1}
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                >
                                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                </button>
                            </div>
                        </div>
                        {error && (
                            <div className="text-red-500 text-xs font-bold uppercase tracking-wider ml-1">{error}</div>
                        )}
                        <button
                            type="submit"
                            className="w-full mt-8 py-6 bg-cyan-700 text-white font-black uppercase tracking-[0.2em] hover:bg-cyan-600 transition-all active:scale-[0.98] disabled:opacity-50 disabled:grayscale disabled:pointer-events-none text-sm border-t border-cyan-500/50"
                        >
                            Authorize Start
                        </button>
                    </form>
                    <div className="flex justify-between items-center mt-8">
                        <Link
                            href="/forgot-password"
                            className="text-xs text-zinc-400 hover:text-white font-bold uppercase tracking-widest transition-colors"
                        >
                            Forgot Password?
                        </Link>
                        <span className="text-xs text-zinc-500 uppercase tracking-wider font-medium">
                            No clearance?{" "}
                            <Link
                                href="/signup"
                                className="text-cyan-500 hover:text-cyan-400 font-black tracking-widest transition-colors ml-1"
                            >
                                Request Access
                            </Link>
                        </span>
                    </div>
                </div>
            </main>

            {/* Footer Watermark */}
            <div className="p-10 text-center hidden md:block select-none pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 -z-10">
                <div className="text-[12vw] font-black tracking-tighter text-zinc-900 opacity-20">bechoHub</div>
            </div>
        </div>
    );
}
