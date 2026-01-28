"use client";

import Link from "next/link";
import Image from "next/image";
import { Search, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "../utils/cn";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { name: "Browse Suppliers", href: "/browse" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Sign Up", href: "/signup" },
  ];

  return (
    <nav className="fixed w-full top-0 left-0 z-50 pointer-events-none flex justify-center p-6 md:p-8">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "pointer-events-auto flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500",
          isScrolled
            ? "w-full max-w-4xl bg-white/70 backdrop-blur-xl border border-slate-200/50 shadow-[0_8px_32px_rgba(0,0,0,0.04)]"
            : "w-full max-w-7xl bg-white/20 backdrop-blur-sm border border-transparent"
        )}
      >
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="group flex items-center gap-2">
            <span className="text-xl font-black tracking-tighter text-slate-950 font-heading group-hover:opacity-70 transition-opacity">
              bechoHub
            </span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {[
            { name: "Browse", href: "/browse" },
            { name: "Story", href: "/how-it-works" },
          ].map((link) => (
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
        <div className="flex items-center gap-4">
          <Link
            href="/signup"
            className={cn(
              "hidden md:inline-flex items-center justify-center rounded-full font-black text-[10px] uppercase tracking-widest transition-all active:scale-95",
              isScrolled
                ? "bg-slate-950 text-white px-6 py-2.5 shadow-xl shadow-slate-200"
                : "bg-white text-slate-950 px-6 py-2.5"
            )}
          >
            Join Beta
          </Link>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-slate-950 p-2 hover:bg-slate-100 rounded-full transition-colors"
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
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-24 left-6 right-6 p-8 bg-white border border-slate-100 rounded-[32px] shadow-2xl flex flex-col gap-6 md:hidden pointer-events-auto"
          >
            <div className="flex flex-col gap-4">
              {["Browse", "Story"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-black text-slate-950 tracking-tighter hover:opacity-50 transition-all"
                >
                  {item}
                </Link>
              ))}
            </div>
            <hr className="border-slate-50" />
            <Link
              href="/signup"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-4 bg-slate-950 text-white text-center rounded-2xl font-black uppercase tracking-widest text-xs"
            >
              Get Started Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
