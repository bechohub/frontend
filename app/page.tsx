"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
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

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-cyan-100 selection:text-cyan-900 overflow-x-hidden">

      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-50 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-fuchsia-50 rounded-full blur-[120px] opacity-60" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none" />
      </div>

      {/* Modern Navigation */}
      <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tighter text-slate-900">
            bechoHub
          </Link>

          <div className="hidden md:flex items-center gap-10 text-sm font-semibold text-slate-500">
            <Link href="/login" className="hover:text-slate-900 transition-colors">Sign in</Link>
            <Link href="#onboarding" className="bg-slate-900 text-white px-7 py-3 rounded-full hover:bg-slate-800 transition-all active:scale-95 shadow-xl shadow-slate-200">
              Get Started
            </Link>
          </div>

          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <main>
        {/* Hero Section - The "Good Marketing" Impact */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto text-center relative">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/5 text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-12">
                <Zap className="h-3 w-3 text-cyan-500 fill-cyan-500" /> Currently in Public Beta
              </div>

              <h1 className="text-6xl md:text-[110px] font-black tracking-tightest leading-[0.85] mb-12 font-heading text-slate-900">
                The Future of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-600">Indian B2B.</span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto mb-16 font-light leading-relaxed">
                We are building the infrastructure for a million manufacturers. <br className="hidden md:block" />
                Verified trade, secure payments, and frictionless logistics.
              </p>

              {/* Directly Accessible Registration CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24">
                <Link
                  href="/signup?type=buyer"
                  className="group w-full sm:w-auto px-10 py-5 bg-slate-900 text-white rounded-full font-bold text-lg hover:bg-slate-800 transition-all hover:scale-[1.05] active:scale-95 shadow-2xl shadow-slate-200 flex items-center justify-center gap-3"
                >
                  Register as Buyer
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/signup?type=supplier"
                  className="w-full sm:w-auto px-10 py-5 bg-white text-slate-900 border border-slate-200 rounded-full font-bold text-lg hover:bg-slate-50 transition-all active:scale-95 hover:border-slate-300 shadow-sm flex items-center justify-center gap-3"
                >
                  <Plus className="h-5 w-5 text-slate-400 group-hover:rotate-90 transition-transform" />
                  Join as Seller
                </Link>
              </div>

              {/* Value Summary - Marketing on Top */}
              <StaggerContainer className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto border-t border-slate-100 pt-16">
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

          {/* Activity Ticker - Onboarding Proof */}
          <div className="mt-32 max-w-full overflow-hidden border-y border-slate-100 py-6 bg-slate-50/50">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="flex gap-16 whitespace-nowrap text-[10px] font-bold text-slate-400 uppercase tracking-widest px-8"
            >
              <div className="flex gap-4 items-center"><span className="h-2 w-2 rounded-full bg-cyan-500" /> NETWORK BUILDING: 24 MANUFACTURERS VERIFIED TODAY</div>
              <div className="flex gap-4 items-center"><span className="h-2 w-2 rounded-full bg-blue-500" /> QUALITY CHECK: ISO-COMPLIANCE AUDITS UNDERWAY</div>
              <div className="flex gap-4 items-center"><span className="h-2 w-2 rounded-full bg-indigo-500" /> LOGISTICS: HYDERABAD-NCR LANE NOW ACTIVE</div>
              <div className="flex gap-4 items-center"><span className="h-2 w-2 rounded-full bg-cyan-500" /> BETA ACCESS: NEW SUPPLIER SLOTS OPEN IN GUJARAT</div>
              {/* Duplicate for seamless scroll */}
              <div className="flex gap-4 items-center"><span className="h-2 w-2 rounded-full bg-cyan-500" /> NETWORK BUILDING: 24 MANUFACTURERS VERIFIED TODAY</div>
              <div className="flex gap-4 items-center"><span className="h-2 w-2 rounded-full bg-blue-500" /> QUALITY CHECK: ISO-COMPLIANCE AUDITS UNDERWAY</div>
              <div className="flex gap-4 items-center"><span className="h-2 w-2 rounded-full bg-indigo-500" /> LOGISTICS: HYDERABAD-NCR LANE NOW ACTIVE</div>
            </motion.div>
          </div>
        </section>

        {/* Rapid Onboarding Bridge */}
        <section id="onboarding" className="py-40 px-6 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[160px] -z-10" />
          <div className="max-w-6xl mx-auto text-center mb-24">
            <FadeIn>
              <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">Day One is here.</h2>
              <p className="text-slate-400 text-xl font-light">Join the builders shaping the future of Indian trade.</p>
            </FadeIn>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
            <FadeIn delay={0.1}>
              <Link href="/signup?type=buyer" className="group block bg-white/[0.03] border border-white/5 hover:border-cyan-500/40 p-12 rounded-[48px] transition-all hover:bg-white/[0.06] relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 group-hover:text-cyan-400 transition-all transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0">
                  <ArrowRight className="h-10 w-10 -rotate-45" />
                </div>
                <Users2 className="h-14 w-14 text-cyan-400 mb-8" />
                <h3 className="text-3xl font-bold mb-6 tracking-tight">Access as Buyer</h3>
                <p className="text-slate-400 text-lg mb-12 font-light leading-relaxed">Secure your supply chain with the next generation of Indian manufacturers.</p>
                <div className="inline-flex items-center text-sm font-black uppercase tracking-[0.2em] text-cyan-400 gap-2">
                  Apply for Beta <ChevronRight className="h-4 w-4" />
                </div>
              </Link>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Link href="/signup?type=supplier" className="group block bg-white/[0.03] border border-white/5 hover:border-indigo-500/40 p-12 rounded-[48px] transition-all hover:bg-white/[0.06] relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 group-hover:text-indigo-400 transition-all transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0">
                  <ArrowRight className="h-10 w-10 -rotate-45" />
                </div>
                <Building2 className="h-14 w-14 text-indigo-400 mb-8" />
                <h3 className="text-3xl font-bold mb-6 tracking-tight">Scale as Seller</h3>
                <p className="text-slate-400 text-lg mb-12 font-light leading-relaxed">Get your manufacturing capacity verified and reach high-intent global buyers.</p>
                <div className="inline-flex items-center text-sm font-black uppercase tracking-[0.2em] text-indigo-400 gap-2">
                  List Capacity <ChevronRight className="h-4 w-4" />
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
