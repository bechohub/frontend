"use client";

import Link from "next/link";
import Image from "next/image";
import { Search, Menu, X, User } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createClient } from "@/utils/supabase/client";
import { User as SupabaseUser } from "@supabase/supabase-js";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [user, setUser] = useState<SupabaseUser | null>(null);

    useEffect(() => {
        const supabase = createClient();
        const checkUser = async () => {
            const {
                data: { user },
            } = await supabase.auth.getUser();
            setUser(user);
        };
        checkUser();

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
        });

        return () => subscription.unsubscribe();
    }, []);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Browse", href: "/browse" },
        { name: "About", href: "/about" },
    ];

    return (
        <nav className="fixed w-full top-0 left-0 z-50 pointer-events-none flex justify-center p-4 md:p-8">
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                    "pointer-events-auto flex items-center justify-between px-5 py-3 rounded-full transition-all duration-300",
                    isScrolled
                        ? "w-full max-w-4xl bg-white/95 md:bg-white/80 md:backdrop-blur-xl border border-slate-200/50 shadow-[0_8px_32px_rgba(0,0,0,0.04)]"
                        : "w-full max-w-7xl bg-white/95 md:bg-white/40 md:backdrop-blur-md border border-slate-100/20 shadow-sm"
                )}
            >
                {/* Logo */}
                <div className="flex-1 flex items-center">
                    <Link href="/" className="group flex items-center gap-2">
                        <span className="text-lg md:text-xl font-black tracking-tighter text-slate-950 font-heading group-hover:opacity-70 transition-opacity">
                            becho<span className="text-cyan-600">Hub</span>
                        </span>
                    </Link>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex flex-1 items-center justify-center gap-12">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-slate-950 transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Right Action */}
                <div className="flex-1 flex items-center justify-end gap-3">
                    {/* Dashboard Icon - Only visible when logged in */}
                    {user && (
                        <Link
                            href="/profile"
                            title="Identity Hub"
                            className="flex items-center justify-center p-2 rounded-full border border-slate-200/50 hover:bg-slate-50 transition-all text-slate-900 group"
                        >
                            <User className="h-4 w-4 group-hover:scale-110 transition-transform" />
                        </Link>
                    )}

                    <Link
                        href={user ? "/profile" : "/signup"}
                        className={cn(
                            "hidden md:inline-flex items-center justify-center rounded-full font-black text-[10px] uppercase tracking-widest transition-all active:scale-95",
                            isScrolled
                                ? "bg-slate-950 text-white px-6 py-2.5 shadow-xl shadow-slate-200"
                                : "bg-white text-slate-950 px-6 py-2.5 shadow-sm"
                        )}
                    >
                        {user ? "Identity Hub" : "Join Beta"}
                    </Link>

                    {/* Mobile Menu Trigger */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden text-slate-950 p-2 hover:bg-slate-100/50 rounded-full transition-colors flex items-center justify-center"
                    >
                        {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </motion.div>

            {/* Mobile Menu Dropdown - Matching Island Aesthetic */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        className="fixed top-20 left-4 right-4 p-6 bg-white border border-slate-200/50 rounded-[32px] shadow-2xl flex flex-col gap-6 md:hidden pointer-events-auto z-40"
                    >
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-2xl font-black text-slate-950 tracking-tighter hover:opacity-50 transition-all"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            {user && (
                                <Link
                                    href="/profile"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-2xl font-black text-cyan-600 tracking-tighter hover:opacity-50 transition-all"
                                >
                                    Dashboard
                                </Link>
                            )}
                        </div>
                        <hr className="border-slate-50" />
                        <Link
                            href={user ? "/profile" : "/signup"}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="w-full py-4 bg-slate-950 text-white text-center rounded-2xl font-black uppercase tracking-widest text-xs"
                        >
                            {user ? "Go to Dashboard" : "Get Started Now"}
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
