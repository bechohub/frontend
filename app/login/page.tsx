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
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-cyan-100 selection:text-cyan-950 overflow-hidden flex flex-col relative">
      {/* Background Ambience - Tinge of Dark Blue */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-50/60 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-50/60 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />
      </div>

      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 w-full p-6 md:p-10 flex justify-between items-center transition-opacity duration-500 bg-white/80 backdrop-blur-xl border-b border-slate-100">
        <Link href="/" className="text-xl md:text-2xl font-black tracking-tighter text-slate-950 hover:opacity-80 transition-opacity">
          bechoHub
        </Link>
      </header>

      <main className="flex-1 flex items-center justify-center p-6 relative">
        <div className="w-full max-w-md">
          <h2 className="text-4xl md:text-7xl font-black tracking-tightest mb-6 uppercase text-center"><span className="text-cyan-600">Login</span></h2>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Work Email</label>
              <div className="relative group">
                <Briefcase className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-cyan-600 transition-colors" />
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="john@company.com"
                  className="w-full bg-slate-50 border border-slate-100 rounded-3xl py-5 pl-14 pr-5 focus:bg-white focus:border-cyan-500 focus:shadow-xl focus:shadow-cyan-500/5 outline-none transition-all text-slate-900 placeholder:text-slate-300"
                  required
                  autoComplete="email"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Password</label>
              <div className="relative group">
                <ShieldCheck className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-cyan-600 transition-colors" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Your password"
                  className="w-full bg-slate-50 border border-slate-100 rounded-3xl py-5 pl-14 pr-12 focus:bg-white focus:border-cyan-500 focus:shadow-xl focus:shadow-cyan-500/5 outline-none transition-all text-slate-900 placeholder:text-slate-300"
                  required
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-cyan-600 transition-colors"
                  tabIndex={-1}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>
            {error && <div className="text-red-500 text-xs font-bold uppercase tracking-wider ml-1">{error}</div>}
            <button
              type="submit"
              className="w-full mt-6 py-6 rounded-3xl bg-slate-950 text-white font-black uppercase tracking-[0.2em] hover:bg-slate-800 transition-all active:scale-[0.98] disabled:opacity-50 disabled:grayscale disabled:pointer-events-none shadow-2xl shadow-slate-200 text-xs md:text-sm"
            >
              Login
            </button>
          </form>
          <div className="flex justify-between items-center mt-6">
            <Link href="/forgot-password" className="text-xs text-cyan-600 hover:underline font-bold uppercase tracking-widest">Forgot Password?</Link>
            <span className="text-xs">Don't have an account? <Link href="/signup" className="text-cyan-600 hover:underline font-bold uppercase tracking-widest">Sign up</Link></span>
          </div>
        </div>
      </main>

      {/* Footer Watermark */}
      <div className="p-10 text-center opacity-50 hidden md:block select-none pointer-events-none">
        <div className="text-[12vw] font-black tracking-tighter text-slate-50">
          BECHOHUB
        </div>
      </div>
    </div>
  );
}
