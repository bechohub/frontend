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
                The safest way to buy directly from the source. We connect you with verified factories across India with <span className="text-slate-900 font-medium italic">guaranteed payment safety</span>.
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
                  <div className="p-8 rounded-[32px] bg-white/[0.03] border border-white/5 backdrop-blur-sm group hover:bg-white/[0.05] transition-all">
                    <h4 className="text-2xl font-black mb-3 uppercase tracking-tight text-cyan-500">Safe Escrow</h4>
                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">Pay with confidence. Money is released only after your order passes quality checks.</p>
                  </div>
                  <div className="p-8 rounded-[32px] bg-white/[0.03] border border-white/5 backdrop-blur-sm group hover:bg-white/[0.05] transition-all">
                    <h4 className="text-2xl font-black mb-3 uppercase tracking-tight text-indigo-500">Legal Cover</h4>
                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">Don't worry about disputes. Every trade is protected by strong, legally-binding contracts.</p>
                  </div>
                </div>
                <div className="space-y-4 pt-8 md:pt-16">
                  <div className="p-8 rounded-[32px] bg-white/[0.03] border border-white/5 backdrop-blur-sm group hover:bg-white/[0.05] transition-all">
                    <h4 className="text-2xl font-black mb-3 uppercase tracking-tight text-blue-500">Buy Direct</h4>
                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">Cut out the middleman. We connect your order straight to the factory to get you the lowest possible price.</p>
                  </div>
                  <div className="p-8 rounded-[32px] bg-white/[0.03] border border-white/5 backdrop-blur-sm group hover:bg-white/[0.05] transition-all">
                    <h4 className="text-2xl font-black mb-3 uppercase tracking-tight text-fuchsia-500">Total Logistics</h4>
                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">We handle the hard part. From factory quality checks to shipping right to your door.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Protocol Matrix - Proper Full Width & Heavy visibility */}
            <FadeIn delay={0.4}>
              <div className="mt-32 p-8 md:p-12 rounded-[40px] bg-white/[0.02] border border-white/5 backdrop-blur-md relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
                  <div className="shrink-0 text-center lg:text-left">
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-cyan-500 block mb-4">How it works</span>
                    <h4 className="text-4xl md:text-5xl font-black tracking-tightest uppercase text-white leading-[0.8]">Trade <br /> Steps.</h4>
                  </div>

                  <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      { label: "01 / You Pay", sub: "You pay us, and we hold your money safely. The factory knows the funds are ready but can't touch them yet." },
                      { label: "02 / We Check", sub: "We visit the factory to inspect your goods. We make sure everything is perfect before it ships." },
                      { label: "03 / They Get Paid", sub: "Once the quality is confirmed and the goods are on their way, we release the money to the factory." }
                    ].map((step, i) => (
                      <div key={i} className="bg-white/[0.03] p-10 rounded-[32px] border border-white/5 flex flex-col items-center lg:items-start text-center lg:text-left hover:bg-white/[0.05] transition-all">
                        <h5 className="text-sm font-black uppercase tracking-widest text-cyan-500 mb-4">{step.label}</h5>
                        <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider leading-relaxed">{step.sub}</p>
                      </div>
                    ))}
                  </div>
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
