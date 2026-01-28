import Link from "next/link";
import {
    Linkedin,
    Globe,
    Heart,
    ArrowUpRight,
    Mail
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative bg-slate-950 text-white pt-24 pb-12 overflow-hidden">

            {/* Background Ambience */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

            {/* Background Logo Watermark */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 text-[20vw] font-black text-white/[0.02] select-none pointer-events-none whitespace-nowrap">
                bechoHub
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">

                    {/* Brand Column */}
                    <div className="space-y-6 max-w-sm">
                        <Link href="/" className="text-3xl font-black tracking-tighter text-white">
                            bechoHub
                        </Link>
                        <p className="text-slate-400 text-lg font-light leading-relaxed">
                            India&apos;s premiere B2B network. <br />
                            Connecting verified manufacturers with high-intent buyers.
                        </p>
                        <div className="flex gap-4">
                            <Link
                                href="#"
                                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all group group"
                            >
                                <Linkedin className="h-4 w-4 text-slate-400 group-hover:text-blue-400 transition-colors" />
                                <span className="text-xs font-bold text-slate-400 group-hover:text-white transition-colors">Follow growth</span>
                            </Link>
                            <Link
                                href="mailto:hello@bechohub.com"
                                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all group"
                            >
                                <Mail className="h-4 w-4 text-slate-400 group-hover:text-white transition-colors" />
                                <span className="text-xs font-bold text-slate-400 group-hover:text-white transition-colors">Contact</span>
                            </Link>
                        </div>
                    </div>

                    {/* Minimal Links */}
                    <div className="flex gap-16 md:gap-32">
                        <div className="space-y-6">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">Explore</h4>
                            <ul className="space-y-4">
                                {['How it works', 'Find Suppliers', 'About'].map((link) => (
                                    <li key={link}>
                                        <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm font-medium flex items-center group">
                                            {link}
                                            <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">Legal</h4>
                            <ul className="space-y-4">
                                {['Privacy Policy', 'Terms of Use'].map((link) => (
                                    <li key={link}>
                                        <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm font-medium flex items-center group">
                                            {link}
                                            <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-600 uppercase tracking-widest">
                            <Globe className="h-3 w-3" />
                            IND OPERATIONS
                        </div>
                        <div className="h-3 w-px bg-white/5 hidden md:block" />
                        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-600 uppercase tracking-widest">
                            BUILT WITH <Heart className="h-3 w-3 text-rose-500/50 fill-rose-500/20" /> FOR BHARAT
                        </div>
                    </div>

                    <div className="text-[10px] font-bold text-slate-700 uppercase tracking-[0.3em]">
                        &copy; 2025 BECHOHUB.
                    </div>
                </div>
            </div>
        </footer>
    );
}
