"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Building2,
  Users2,
  ChevronRight,
  Menu,
  X,
  Plus,
  Zap
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./components/Animators";
import Footer from "./components/Footer";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-cyan-100 selection:text-cyan-900 overflow-x-hidden">

      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] md:w-[40%] h-[40%] bg-cyan-50 rounded-full blur-[80px] md:blur-[120px] opacity-60" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] md:w-[40%] h-[40%] bg-fuchsia-50 rounded-full blur-[80px] md:blur-[120px] opacity-60" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none" />
      </div>

      {/* Modern Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-slate-100 py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tighter text-slate-900">
            bechoHub
          </Link>

          <div className="hidden md:flex items-center gap-10 text-sm font-semibold text-slate-500">
            <Link href="#onboarding" className="bg-slate-900 text-white px-7 py-3 rounded-full hover:bg-slate-800 transition-all active:scale-95 shadow-xl shadow-slate-200">
              Get Started
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-slate-900 z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 z-40 bg-white flex flex-col pt-24 px-8 md:hidden"
            >
              <div className="flex flex-col gap-10">
                <Link
                  href="/signup"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-5xl font-black text-slate-900 tracking-tightest leading-tight"
                >
                  Get Started
                </Link>
                <div className="h-px bg-slate-100" />
                <div className="grid grid-cols-1 gap-4">
                  <Link href="/signup?type=buyer" onClick={() => setIsMenuOpen(false)} className="p-6 bg-slate-50 rounded-[32px] group active:scale-95 transition-all">
                    <Users2 className="h-6 w-6 text-cyan-600 mb-4" />
                    <h4 className="font-bold text-lg mb-1">Buyers</h4>
                    <p className="text-xs text-slate-500 leading-relaxed uppercase font-bold tracking-widest">Register as Buyer</p>
                  </Link>
                  <Link href="/signup?type=supplier" onClick={() => setIsMenuOpen(false)} className="p-6 bg-slate-50 rounded-[32px] group active:scale-95 transition-all">
                    <Building2 className="h-6 w-6 text-indigo-600 mb-4" />
                    <h4 className="font-bold text-lg mb-1">Sellers</h4>
                    <p className="text-xs text-slate-500 leading-relaxed uppercase font-bold tracking-widest">Join as Seller</p>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>
        {/* Hero Section - Optimized for Mobile Headroom */}
        <section className="relative pt-12 pb-16 sm:pt-24 sm:pb-20 md:pt-32 md:pb-24 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto text-center relative">
            <FadeIn>
              <h1 className="text-[42px] sm:text-7xl md:text-8xl lg:text-[110px] font-black tracking-tightest leading-[1] sm:leading-[0.85] mb-8 sm:mb-12 font-heading text-slate-900">
                The Future of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-600">Indian B2B.</span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto mb-12 sm:mb-16 font-light leading-relaxed px-4">
                Scalable infrastructure for the next million manufacturers. <br className="hidden md:block" />
                Verified trade, secure payments, and frictionless logistics.
              </p>

              {/* Single Unified Registration CTA */}
              <div className="flex justify-center mb-20 sm:mb-24 px-4">
                <Link
                  href="/signup"
                  className="group w-full sm:w-auto px-12 sm:px-16 py-5 sm:py-6 bg-slate-900 text-white rounded-full font-black text-xl hover:bg-slate-800 transition-all hover:scale-[1.05] active:scale-95 shadow-2xl shadow-slate-200 flex items-center justify-center gap-4"
                >
                  Get Started
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>

              {/* Value Summary - Stacked on Mobile, Grid on Desktop */}
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto border-t border-slate-100 pt-12 md:pt-16 px-4">
                <StaggerItem className="flex items-start gap-4 text-left">
                  <div className="mt-1 h-8 w-8 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-600 flex-shrink-0">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Direct Access</h3>
                    <p className="text-sm text-slate-500 mt-1">Connect directly with verified Indian factories.</p>
                  </div>
                </StaggerItem>
                <StaggerItem className="flex items-start gap-4 text-left">
                  <div className="mt-1 h-8 w-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Secure Trade</h3>
                    <p className="text-sm text-slate-500 mt-1">Escrow protection for high-value orders.</p>
                  </div>
                </StaggerItem>
                <StaggerItem className="flex items-start gap-4 text-left">
                  <div className="mt-1 h-8 w-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 flex-shrink-0">
                    <TrendingUp className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Built for Growth</h3>
                    <p className="text-sm text-slate-500 mt-1">Scale your manufacturing volume with ease.</p>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </FadeIn>
          </div>

          {/* Activity Ticker - Faster transition, smooth on mobile */}
          <div className="mt-24 md:mt-32 max-w-full overflow-hidden border-y border-slate-100 py-6 bg-slate-50/50">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex gap-12 sm:gap-16 whitespace-nowrap text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-widest px-8"
            >
              <div className="flex gap-4 items-center"><span className="h-2 w-2 rounded-full bg-cyan-500" /> NETWORK BUILDING: 24 MANUFACTURERS VERIFIED TODAY</div>
              <div className="flex gap-4 items-center"><span className="h-2 w-2 rounded-full bg-blue-500" /> QUALITY CHECK: ISO-COMPLIANCE AUDITS UNDERWAY</div>
              <div className="flex gap-4 items-center"><span className="h-2 w-2 rounded-full bg-indigo-500" /> LOGISTICS: HYDERABAD-NCR LANE NOW ACTIVE</div>
              <div className="flex gap-4 items-center"><span className="h-2 w-2 rounded-full bg-cyan-500" /> BETA ACCESS: NEW SUPPLIER SLOTS OPEN</div>
              {/* Duplicate for seamless scroll */}
              <div className="flex gap-4 items-center"><span className="h-2 w-2 rounded-full bg-cyan-500" /> NETWORK BUILDING: 24 MANUFACTURERS VERIFIED TODAY</div>
              <div className="flex gap-4 items-center"><span className="h-2 w-2 rounded-full bg-blue-500" /> QUALITY CHECK: ISO-COMPLIANCE AUDITS UNDERWAY</div>
              <div className="flex gap-4 items-center"><span className="h-2 w-2 rounded-full bg-indigo-500" /> LOGISTICS: HYDERABAD-NCR LANE NOW ACTIVE</div>
            </motion.div>
          </div>
        </section>

        {/* Rapid Onboarding Bridge - Optimized Padding */}
        <section id="onboarding" className="py-24 sm:py-32 md:py-40 px-6 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[160px] -z-10" />
          <div className="max-w-6xl mx-auto text-center mb-16 sm:mb-24">
            <FadeIn>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 tracking-tighter leading-tight">Day One is here.</h2>
              <p className="text-slate-400 text-lg sm:text-xl font-light">Join the builders shaping the future of Indian trade.</p>
            </FadeIn>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
            <FadeIn delay={0.1}>
              <Link href="/signup?type=buyer" className="group block bg-white/[0.03] border border-white/5 hover:border-cyan-500/40 p-10 sm:p-12 rounded-[40px] sm:rounded-[48px] transition-all hover:bg-white/[0.06] relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 group-hover:text-cyan-400 transition-all transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 hidden sm:block">
                  <ArrowRight className="h-10 w-10 -rotate-45" />
                </div>
                <Users2 className="h-12 w-12 sm:h-14 sm:w-14 text-cyan-400 mb-6 sm:mb-8" />
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 tracking-tight">Access as Buyer</h3>
                <p className="text-slate-400 text-base sm:text-lg mb-8 sm:mb-12 font-light leading-relaxed">Secure your supply chain with the next generation of verified Indian manufacturers.</p>
                <div className="inline-flex items-center text-xs sm:text-sm font-bold uppercase tracking-[0.1em] text-cyan-400 gap-2 group-hover:gap-3 transition-all">
                  Register as Buyer <ChevronRight className="h-4 w-4" />
                </div>
              </Link>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Link href="/signup?type=supplier" className="group block bg-white/[0.03] border border-white/5 hover:border-indigo-500/40 p-10 sm:p-12 rounded-[40px] sm:rounded-[48px] transition-all hover:bg-white/[0.06] relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 group-hover:text-indigo-400 transition-all transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 hidden sm:block">
                  <ArrowRight className="h-10 w-10 -rotate-45" />
                </div>
                <Building2 className="h-12 w-12 sm:h-14 sm:w-14 text-indigo-400 mb-6 sm:mb-8" />
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 tracking-tight">Scale as Seller</h3>
                <p className="text-slate-400 text-base sm:text-lg mb-8 sm:mb-12 font-light leading-relaxed">Get your manufacturing capacity verified and reach high-intent global buyers.</p>
                <div className="inline-flex items-center text-xs sm:text-sm font-bold uppercase tracking-[0.1em] text-indigo-400 gap-2 group-hover:gap-3 transition-all">
                  Join as Seller <ChevronRight className="h-4 w-4" />
                </div>
              </Link>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
