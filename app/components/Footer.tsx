import Link from "next/link";
import {
    Globe,
    Heart,
    ArrowUpRight,
    Mail
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative bg-white text-slate-900 pt-24 pb-12 overflow-hidden border-t border-slate-100">

            {/* Background Logo Watermark - Adjusted for light theme */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 text-[20vw] font-black text-slate-50 select-none pointer-events-none whitespace-nowrap">
                bechoHub
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">

                    {/* Brand Column */}
                    <div className="space-y-6 max-w-sm">
                        <Link href="/" className="text-3xl font-black tracking-tighter text-slate-950">
                            becho<span className="text-cyan-600">Hub</span>
                        </Link>
                        <p className="text-slate-500 text-lg font-light leading-relaxed">
                            India&apos;s premiere B2B network. <br />
                            Connecting verified manufacturers with high-intent buyers.
                        </p>
                        <div className="flex gap-4">
                            <Link
                                href="mailto:hello@bechohub.com"
                                className="flex items-center gap-3 px-6 py-2.5 rounded-xl bg-slate-50 border border-slate-100 hover:bg-slate-100 hover:border-slate-200 transition-all group"
                            >
                                <Mail className="h-4 w-4 text-slate-400 group-hover:text-slate-900 transition-colors" />
                                <span className="text-xs font-bold text-slate-400 group-hover:text-slate-900 transition-colors">Contact Support</span>
                            </Link>
                        </div>
                    </div>

                    {/* Minimal Links */}
                    <div className="flex gap-16 md:gap-32">
                        <div className="space-y-6">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 font-heading">Explore</h4>
                            <ul className="space-y-4">
                                <li>
                                    <Link href="/browse" className="text-slate-500 hover:text-slate-900 transition-colors text-sm font-medium flex items-center group">
                                        Find Suppliers
                                        <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about" className="text-slate-500 hover:text-slate-900 transition-colors text-sm font-medium flex items-center group">
                                        About
                                        <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 font-heading">Legal</h4>
                            <ul className="space-y-4">
                                <li>
                                    <Link href="/privacy" className="text-slate-500 hover:text-slate-900 transition-colors text-sm font-medium flex items-center group">
                                        Privacy Policy
                                        <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/terms" className="text-slate-500 hover:text-slate-900 transition-colors text-sm font-medium flex items-center group">
                                        Terms of Use
                                        <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-slate-50 flex flex-col items-center text-center gap-8 md:flex-row md:justify-between md:text-left">
                    <div className="flex flex-col sm:flex-row items-center gap-6">
                        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                            <Globe className="h-3 w-3" />
                            IND OPERATIONS
                        </div>
                        <div className="h-3 w-px bg-slate-100 hidden sm:block" />
                        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                            BUILT WITH <Heart className="h-3 w-3 text-rose-500" /> FOR BHARAT
                        </div>
                    </div>

                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">
                        &copy; 2026 BECHOHUB.
                    </div>
                </div>
            </div>
        </footer>
    );
}
