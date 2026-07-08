"use client";

import { useState } from "react";
import { ShieldCheck, Eye, EyeOff } from "lucide-react";

export const AdminLogin = ({
    setIsAuthenticated,
}: {
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (username === "Adminhumein" && password === "Chalhatmaalikhu") {
            sessionStorage.setItem("admin_session", "active");
            setIsAuthenticated(true);
        } else {
            alert("Invalid Credentials! Access Denied.");
        }
    };

    return (
        <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-6 font-sans text-white selection:bg-cyan-600/30">
            <div className="w-full max-w-md bg-zinc-900 p-10 border border-zinc-900 shadow-2xl overflow-hidden relative group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-900/10 rounded-full blur-[80px] pointer-events-none" />

                <div className="text-center mb-10 relative z-10">
                    <div className="inline-flex items-center justify-center h-16 w-16 bg-zinc-950 border border-cyan-900 text-cyan-600 mb-6">
                        <ShieldCheck className="h-8 w-8" />
                    </div>
                    <h1 className="text-3xl font-black text-white tracking-widest uppercase mb-2">Command Center</h1>
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
                            className="w-full bg-zinc-950 border border-zinc-900 py-4 px-5 text-white focus:outline-none focus:border-cyan-600 focus:bg-zinc-900 transition-colors uppercase tracking-widest text-xs font-black placeholder:text-zinc-700"
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
                                className="w-full bg-zinc-950 border border-zinc-900 py-4 px-5 pr-12 text-white focus:outline-none focus:border-cyan-600 focus:bg-zinc-900 transition-colors uppercase tracking-widest text-xs font-black placeholder:text-zinc-700"
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
};
