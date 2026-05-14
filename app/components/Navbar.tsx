"use client";

import Link from "next/link";
import { User, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createClient } from "@/utils/supabase/client";
import { User as SupabaseUser } from "@supabase/supabase-js";
import { cn } from "@/lib/utils";

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
                    "pointer-events-auto flex items-center justify-between px-6 rounded-none transition-all duration-500 border",
                    isScrolled
                        ? "w-full max-w-7xl py-2 bg-zinc-950/95 backdrop-blur-md border-zinc-800 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
                        : "w-full max-w-7xl py-6 bg-zinc-950/50 backdrop-blur-md border-zinc-800/50 shadow-sm"
                )}
            >
                {/* Logo */}
                <div className="flex-1 flex items-center">
                    <Link href="/" className="group flex items-center gap-2">
                        <span className="text-xl md:text-2xl font-black tracking-tighter text-white font-heading group-hover:opacity-70 transition-opacity">
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
                            className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Right Action */}
                <div className="flex-1 flex items-center justify-end gap-4">
                    {/* Dashboard Icon - Only visible when logged in */}
                    {user && (
                        <Link
                            href="/profile"
                            title="Command Center"
                            className="flex items-center justify-center p-2 border border-zinc-800 hover:bg-zinc-900 transition-all text-white group"
                        >
                            <User className="h-4 w-4 group-hover:text-cyan-500 transition-colors" />
                        </Link>
                    )}

                    <Link
                        href={user ? "/profile" : "/signup"}
                        className={cn(
                            "hidden md:inline-flex items-center justify-center font-bold text-xs uppercase tracking-[0.2em] transition-all duration-500",
                            isScrolled
                                ? "bg-cyan-600 text-white px-6 py-2 hover:bg-cyan-500"
                                : "bg-transparent border border-zinc-700 text-white px-8 py-3 hover:border-white hover:bg-white/5"
                        )}
                    >
                        {user ? "Command Center" : "Join Network"}
                    </Link>

                    {/* Mobile Menu Trigger */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden text-white p-2 hover:bg-zinc-900 transition-colors flex items-center justify-center border border-zinc-800"
                    >
                        {isMobileMenuOpen ? <X className="h-5 w-5 text-cyan-500" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </motion.div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-24 left-4 right-4 p-8 bg-zinc-950 border border-zinc-800 shadow-2xl flex flex-col gap-8 md:hidden pointer-events-auto z-40"
                    >
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-2xl font-black text-white uppercase tracking-wider hover:text-cyan-500 transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            {user && (
                                <Link
                                    href="/profile"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-2xl font-black text-cyan-600 uppercase tracking-wider hover:text-cyan-500 transition-colors"
                                >
                                    Command Center
                                </Link>
                            )}
                        </div>
                        <hr className="border-zinc-900" />
                        <Link
                            href={user ? "/profile" : "/signup"}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="w-full py-5 bg-cyan-600 hover:bg-cyan-700 text-white text-center font-black uppercase tracking-[0.2em] text-sm transition-colors"
                        >
                            {user ? "Access Protocol" : "Join Network Now"}
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
