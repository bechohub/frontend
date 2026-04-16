import Link from "next/link";
import {
    Globe,
    Shield,
    ArrowUpRight,
    Mail
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative bg-black text-white pt-32 pb-16 overflow-hidden border-t border-zinc-900">

            {/* Background Logo Watermark */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 text-[22vw] font-black text-zinc-900 opacity-20 select-none pointer-events-none whitespace-nowrap tracking-tighter">
                bechoHub
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">

                    {/* Brand Column */}
                    <div className="space-y-8 max-w-sm">
                        <Link href="/" className="text-4xl font-black tracking-tighter text-white font-heading block">
                            becho<span className="text-cyan-600">Hub</span>
                        </Link>
                        <p className="text-zinc-400 text-lg font-medium leading-relaxed tracking-wide">
                            The trust-first, transaction-first platform. <br />
                            Connecting verified buyers with serious suppliers.
                        </p>
                        <div className="flex gap-4">
                            <Link
                                href="mailto:trade@bechohub.com"
                                className="flex items-center gap-3 px-8 py-4 bg-zinc-950 border border-zinc-800 hover:border-zinc-500 transition-all group"
                            >
                                <Mail className="h-5 w-5 text-cyan-600 group-hover:text-cyan-500 transition-colors" />
                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-white">Contact Support</span>
                            </Link>
                        </div>
                    </div>

                    {/* Minimal Links */}
                    <div className="flex gap-16 md:gap-32">
                        <div className="space-y-8">
                            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-600">Market</h4>
                            <ul className="space-y-5">
                                <li>
                                    <Link href="/browse" className="text-zinc-400 font-bold uppercase text-sm hover:text-white transition-colors flex items-center group tracking-widest">
                                        Trade Hub
                                        <ArrowUpRight className="h-4 w-4 ml-2 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all text-cyan-600" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about" className="text-zinc-400 font-bold uppercase text-sm hover:text-white transition-colors flex items-center group tracking-widest">
                                        Manifesto
                                        <ArrowUpRight className="h-4 w-4 ml-2 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all text-cyan-600" />
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-8">
                            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-600">Protocol</h4>
                            <ul className="space-y-5">
                                <li>
                                    <Link href="/privacy" className="text-zinc-400 font-bold uppercase text-sm hover:text-white transition-colors flex items-center group tracking-widest">
                                        Privacy Policy
                                        <ArrowUpRight className="h-4 w-4 ml-2 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all text-cyan-600" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/terms" className="text-zinc-400 font-bold uppercase text-sm hover:text-white transition-colors flex items-center group tracking-widest">
                                        Trade Terms
                                        <ArrowUpRight className="h-4 w-4 ml-2 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all text-cyan-600" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-zinc-900 flex flex-col items-center text-center gap-8 md:flex-row md:justify-between md:text-left">
                    <div className="flex flex-col sm:flex-row items-center gap-6">
                        <div className="flex items-center gap-3 text-xs font-bold text-zinc-500 uppercase tracking-[0.3em]">
                            <Globe className="h-4 w-4 text-cyan-600" />
                            IND OPERATIONS
                        </div>
                        <div className="h-4 w-px bg-zinc-800 hidden sm:block" />
                        <div className="flex items-center gap-3 text-xs font-bold text-zinc-500 uppercase tracking-[0.3em]">
                            <Shield className="h-4 w-4 text-cyan-600 bg-cyan-600/10 rounded-full p-0.5" />
                            SECURE ESCROW PROTOCOL
                        </div>
                    </div>

                    <div className="text-xs font-bold text-zinc-600 uppercase tracking-[0.4em]">
                        &copy; 2026 BECHOHUB INC.
                    </div>
                </div>
            </div>
        </footer>
    );
}
