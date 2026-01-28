import Link from "next/link";
import {
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    Globe,
    ShieldCheck,
    Heart,
    ArrowUpRight,
    Mail
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative bg-slate-950 text-white pt-32 pb-12 overflow-hidden">

            {/* Background Ambience */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px] -z-10" />

            {/* Massive Background Logo Watermark */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 text-[20vw] font-black text-white/[0.02] select-none pointer-events-none whitespace-nowrap">
                bechoHub
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">

                    {/* Brand Column */}
                    <div className="lg:col-span-1 space-y-8">
                        <Link href="/" className="text-3xl font-black tracking-tighter text-white">
                            bechoHub
                        </Link>
                        <p className="text-slate-400 text-lg font-light leading-relaxed max-w-xs">
                            Modernizing Indian trade. The premiere operating system for MSME growth.
                        </p>
                        <div className="flex gap-5">
                            {[Linkedin, Twitter, Instagram, Facebook].map((Icon, i) => (
                                <Link
                                    key={i}
                                    href="#"
                                    className="h-10 w-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all group"
                                >
                                    <Icon className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-8">
                        <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-500">Network</h4>
                        <ul className="space-y-4">
                            {['Browse Suppliers', 'Post RFQ', 'Verified Badges', 'Trade Finance'].map((link) => (
                                <li key={link}>
                                    <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm font-medium flex items-center group">
                                        {link}
                                        <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="space-y-8">
                        <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-500">Trust Center</h4>
                        <ul className="space-y-4">
                            {['Security Protocol', 'Privacy Policy', 'Seller Standards', 'Buyers Rights'].map((link) => (
                                <li key={link}>
                                    <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm font-medium flex items-center group">
                                        {link}
                                        <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter Column */}
                    <div className="space-y-8 lg:col-span-1">
                        <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-500">Updates</h4>
                        <div className="space-y-4">
                            <p className="text-slate-400 text-sm font-light">Join 12,000+ businesses receiving our trade insights.</p>
                            <div className="relative group">
                                <input
                                    type="email"
                                    placeholder="Enter your work email"
                                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-cyan-500/50 transition-all placeholder:text-slate-600"
                                />
                                <button className="absolute right-2 top-2 bottom-2 px-4 bg-white text-slate-950 rounded-xl font-bold text-xs hover:bg-slate-200 transition-colors">
                                    Join
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 text-emerald-500/80">
                            <ShieldCheck className="h-4 w-4" />
                            <span className="text-[10px] font-bold uppercase tracking-widest">ISO 27001 Certified System</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                            <Globe className="h-3 w-3" />
                            IND / GLOBAL OPERATIONS
                        </div>
                        <div className="h-4 w-px bg-white/10 hidden md:block" />
                        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                            BUILT WITH <Heart className="h-3 w-3 text-rose-500 fill-rose-500" /> FOR BHARAT
                        </div>
                    </div>

                    <div className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.4em]">
                        &copy; 2025 BECHOHUB HOLDINGS. ALL RIGHTS SECURED.
                    </div>
                </div>
            </div>
        </footer>
    );
}
