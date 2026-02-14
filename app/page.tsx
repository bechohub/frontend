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
  Zap,
  Star,
  Globe,
  ArrowUpRight,
  Gavel,
  Factory
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./components/Animators";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-cyan-100 selection:text-cyan-950 overflow-x-hidden">
      <Navbar />

      <main>
        {/* Hero Section - Clean Light */}
        <section className="relative pt-32 pb-16 sm:pt-64 sm:pb-32 px-6 overflow-hidden">
          {/* Ambient Backgrounds - Lightened */}
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-50/50 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto text-center relative z-10">
            <FadeIn>
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[100px] font-black tracking-tightest leading-[0.95] sm:leading-[0.9] mb-4 font-heading text-slate-950">
                The Future of <br className="hidden sm:block" />
                Indian B2B.
              </h1>

              <div className="mb-12 flex justify-center gap-3 sm:gap-4 md:gap-5 flex-wrap">
                {["Connect.", "Trade.", "Grow."].map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.2 + i * 0.2,
                      duration: 0.8,
                      ease: [0.2, 0.65, 0.3, 0.9],
                    }}
                    className="text-3xl sm:text-4xl md:text-6xl font-space font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-600 to-fuchsia-600 drop-shadow-sm selection:text-fuchsia-900"
                  >
                    {word}
                  </motion.span>
                ))}
              </div>

              <p className="text-lg sm:text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto mb-12 font-light leading-relaxed px-2 md:px-0">
                Secure your supply chain with our <span className="text-slate-900 font-medium italic">Escrow-backed</span>, factory-direct protocol.
                Full-stack infrastructure built for global scale.
              </p>

              <div className="flex justify-center mb-16 sm:mb-24 px-4">
                <Link
                  href="/signup"
                  className="group w-full sm:w-auto px-12 sm:px-16 py-5 sm:py-6 bg-slate-950 text-white rounded-full font-black text-sm uppercase tracking-[0.2em] hover:bg-slate-800 transition-all active:scale-95 shadow-2xl shadow-slate-200 flex items-center justify-center gap-3"
                >
                  Get Started <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>


            </FadeIn>
          </div>
        </section>
        {/* Brand New: USP & Infrastructure Deep-Dive - Moved Up for Visibility */}
        <section className="py-24 md:py-48 px-6 bg-slate-950 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                <FadeIn>
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-500 mb-8 block">Zero Risk Trade</span>
                  <h2 className="text-5xl md:text-8xl font-black tracking-tightest uppercase mb-12 leading-none">
                    Reliability <br /> as a Service.
                  </h2>
                  <p className="text-xl text-slate-400 font-light leading-relaxed mb-16 max-w-xl">
                    We've built a multi-layered security protocol to ensure your capital and your reputation are always protected.
                  </p>

                  <Link
                    href="/how-it-works"
                    className="inline-flex items-center gap-4 text-xs font-black uppercase tracking-widest text-white group"
                  >
                    View Technical Manifest <ArrowRight className="h-4 w-4 group-hover:translate-x-3 transition-transform text-cyan-500" />
                  </Link>
                </FadeIn>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="p-8 rounded-[32px] bg-white/[0.03] border border-white/5 backdrop-blur-sm">
                    <ShieldCheck className="h-10 w-10 text-cyan-500 mb-6" />
                    <h4 className="text-xl font-bold mb-3 uppercase tracking-tight">escrow</h4>
                    <p className="text-slate-500 text-xs font-black uppercase tracking-widest">Milestone Release • Verified QC</p>
                  </div>
                  <div className="p-8 rounded-[32px] bg-white/[0.03] border border-white/5 backdrop-blur-sm">
                    <Gavel className="h-10 w-10 text-indigo-500 mb-6" />
                    <h4 className="text-xl font-bold mb-3 uppercase tracking-tight">Legal Shield</h4>
                    <p className="text-slate-500 text-xs font-black uppercase tracking-widest">Digital Contracts • Indian Law</p>
                  </div>
                </div>
                <div className="space-y-4 pt-8 md:pt-16">
                  <div className="p-8 rounded-[32px] bg-white/[0.03] border border-white/5 backdrop-blur-sm">
                    <Factory className="h-10 w-10 text-blue-500 mb-6" />
                    <h4 className="text-xl font-bold mb-3 uppercase tracking-tight">Direct Access</h4>
                    <p className="text-slate-500 text-xs font-black uppercase tracking-widest">No Middleman • Primary Pricing</p>
                  </div>
                  <div className="p-8 rounded-[32px] bg-white/[0.03] border border-white/5 backdrop-blur-sm">
                    <TrendingUp className="h-10 w-10 text-fuchsia-500 mb-6" />
                    <h4 className="text-xl font-bold mb-3 uppercase tracking-tight">Trade OS</h4>
                    <p className="text-slate-500 text-xs font-black uppercase tracking-widest">Discovery • Logistics • Audit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brand New: Escrow Simplified Section */}
        <section className="py-24 md:py-48 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <div className="text-center mb-20">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-500 mb-6 block">The Trust Bridge</span>
                <h2 className="text-4xl md:text-7xl font-black tracking-tightest uppercase text-slate-950 mb-8">What is <br /> Escrow?</h2>
                <p className="text-xl text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
                  Think of it as a neutral middle-ground. We hold your payment safe until the factory delivers exactly what you ordered.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                {/* Connection Line */}
                <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-px bg-slate-100 -z-10" />

                <div className="group text-center">
                  <div className="h-24 w-24 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mx-auto mb-10 group-hover:scale-110 transition-transform bg-white shadow-xl shadow-slate-200/50">
                    <ShieldCheck className="h-10 w-10 text-cyan-600" />
                  </div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-slate-950 mb-4">1. Fund Lock</h4>
                  <p className="text-slate-500 text-sm font-light leading-relaxed px-6">Buyer deposits funds. Money is 100% secured by bechoHub, but the factory can't touch it yet.</p>
                </div>

                <div className="group text-center">
                  <div className="h-24 w-24 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mx-auto mb-10 group-hover:scale-110 transition-transform bg-white shadow-xl shadow-slate-200/50">
                    <Factory className="h-10 w-10 text-indigo-600" />
                  </div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-slate-950 mb-4">2. Factory Ships</h4>
                  <p className="text-slate-500 text-sm font-light leading-relaxed px-6">The factory builds the order knowing the money is ready. bechoHub verifies the quality at the source.</p>
                </div>

                <div className="group text-center">
                  <div className="h-24 w-24 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mx-auto mb-10 group-hover:scale-110 transition-transform bg-white shadow-xl shadow-slate-200/50">
                    <Zap className="h-10 w-10 text-emerald-600" />
                  </div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-slate-950 mb-4">3. Safe Release</h4>
                  <p className="text-slate-500 text-sm font-light leading-relaxed px-6">Once QC is verified and delivery is confirmed, funds are released to the factory. Zero risk trade.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>





        {/* Final CTA - Ultra Minimal */}
        <section className="py-20 md:pt-32 md:pb-32 px-6">
          <FadeIn>
            <div className="max-w-6xl mx-auto px-6 py-20 md:p-32 rounded-[32px] md:rounded-[64px] bg-slate-950 text-white text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />
              <h2 className="text-4xl md:text-9xl font-black tracking-tightest uppercase mb-12 leading-[0.8]">Build the <br /> Future.</h2>
              <div className="flex justify-center">
                <Link href="/signup" className="px-16 py-6 bg-white text-slate-950 rounded-full font-black text-sm uppercase tracking-[0.2em] hover:bg-cyan-400 transition-all active:scale-95 shadow-2xl">
                  Get Started Now
                </Link>
              </div>
            </div>
          </FadeIn>
        </section>
      </main>

      <Footer />
    </div>
  );
}
