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
                Connect directly with the next generation of verified manufacturers.
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

              {/* Trust Strip - Mobile Cards */}
              <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 pt-12 md:pt-16 md:border-t border-slate-100">
                <div className="flex flex-col items-center md:items-start text-center md:text-left bg-slate-50 md:bg-transparent p-6 md:p-0 rounded-2xl md:rounded-none border border-slate-100 md:border-none">
                  <div className="h-10 w-10 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-600 mb-4 border border-cyan-100">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">Verified Factories</h3>
                  <p className="text-sm text-slate-500 font-light">Direct access to audited manufacturing clusters across India.</p>
                </div>
                <div className="flex flex-col items-center md:items-start text-center md:text-left bg-slate-50 md:bg-transparent p-6 md:p-0 rounded-2xl md:rounded-none border border-slate-100 md:border-none">
                  <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4 border border-blue-100">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">Secure Escrow</h3>
                  <p className="text-sm text-slate-500 font-light">Protection for high-value orders through our secure payment bridge.</p>
                </div>
                <div className="flex flex-col items-center md:items-start text-center md:text-left bg-slate-50 md:bg-transparent p-6 md:p-0 rounded-2xl md:rounded-none border border-slate-100 md:border-none">
                  <div className="h-10 w-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-4 border border-indigo-100">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">Built for Scale</h3>
                  <p className="text-sm text-slate-500 font-light">Scale production seamlessly from prototyping to bulk export.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Dynamic Activity Strip */}
        <section className="py-8 md:py-12 bg-slate-50 border-y border-slate-100 overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex gap-12 sm:gap-20 whitespace-nowrap text-[11px] sm:text-xs font-black text-slate-400 uppercase tracking-[0.2em] md:tracking-[0.3em] px-4"
          >
            <div className="flex gap-4 items-center">NETWORK: 24 FACTORIES VERIFIED IN SURAT CLUSTER</div>
            <div className="flex gap-4 items-center">LOGISTICS: NEW DELHI-NCR TRADE LANE ACTIVE</div>
            <div className="flex gap-4 items-center">QUALITY: ISO-9001 COMPLIANCE PORTAL UPDATED</div>
            <div className="flex gap-4 items-center">RFQ: 120CR+ QUOTES PROCESSED THIS WEEK</div>
            {/* Duplicates */}
            <div className="flex gap-4 items-center">NETWORK: 24 FACTORIES VERIFIED IN SURAT CLUSTER</div>
            <div className="flex gap-4 items-center">LOGISTICS: NEW DELHI-NCR TRADE LANE ACTIVE</div>
            <div className="flex gap-4 items-center">QUALITY: ISO-9001 COMPLIANCE PORTAL UPDATED</div>
          </motion.div>
        </section>

        {/* Comparison Section - High Impact */}
        <section className="py-16 md:py-32 px-6 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <div className="text-center mb-16 md:mb-24">
                <h2 className="text-3xl md:text-6xl font-black tracking-tightest uppercase mb-6 text-slate-950">Why bechoHub?</h2>
                <p className="text-slate-500 text-lg max-w-2xl mx-auto font-light">
                  A complete infrastructure rewrite of the Indian manufacturing ecosystem.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 relative">
                {/* Vertical Divider for Desktop */}
                <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-100 -translate-x-1/2" />

                {/* Traditional Side */}
                <div className="space-y-12 p-6 md:p-0 bg-slate-50 md:bg-transparent rounded-2xl md:rounded-none">
                  <div className="flex items-center gap-4 mb-8 md:mb-12">
                    <div className="h-2 w-12 bg-slate-200 rounded-full" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Traditional Marketplaces</span>
                  </div>

                  <div className="space-y-8 md:space-y-10">
                    <div className="group">
                      <h4 className="text-lg md:text-xl font-bold text-slate-400 mb-2 md:mb-3 group-hover:text-slate-950 transition-colors">Fragmented Search</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">Endless scrolling through unverified listings with zero data on actual factory capacity.</p>
                    </div>
                    <div className="group">
                      <h4 className="text-lg md:text-xl font-bold text-slate-400 mb-2 md:mb-3 group-hover:text-slate-950 transition-colors">Hidden Intermediaries</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">Multiple layers of traders inflating costs without adding manufacturing value.</p>
                    </div>
                    <div className="group">
                      <h4 className="text-lg md:text-xl font-bold text-slate-400 mb-2 md:mb-3 group-hover:text-slate-950 transition-colors">Manual QC & Risk</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">Verification is purely manual, prone to error, and payments are often unprotected.</p>
                    </div>
                  </div>
                </div>

                {/* bechoHub Side */}
                <div className="space-y-12 p-6 md:p-0 bg-white md:bg-transparent rounded-2xl md:rounded-none shadow-xl md:shadow-none border border-slate-100 md:border-none relative z-10">
                  <div className="flex items-center gap-4 mb-8 md:mb-12">
                    <div className="h-2 w-12 bg-cyan-500 rounded-full" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-600">The bechoHub Advantage</span>
                  </div>

                  <div className="space-y-8 md:space-y-10">
                    <div className="group">
                      <h4 className="text-xl font-black text-slate-950 mb-2 md:mb-3 flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-cyan-600" /> Real-time Capacity
                      </h4>
                      <p className="text-slate-500 text-sm leading-relaxed font-light">Direct visibility into live assembly lines and verified production benchmarks.</p>
                    </div>
                    <div className="group">
                      <h4 className="text-xl font-black text-slate-950 mb-2 md:mb-3 flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-cyan-600" /> Direct-to-Factory
                      </h4>
                      <p className="text-slate-500 text-sm leading-relaxed font-light">Eliminate middlemen. Our protocol connects you straight to the factory floor floor for primary pricing.</p>
                    </div>
                    <div className="group">
                      <h4 className="text-xl font-black text-slate-950 mb-2 md:mb-3 flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-cyan-600" /> Automated Trust
                      </h4>
                      <p className="text-slate-500 text-sm leading-relaxed font-light">Smart-escrow and IoT-enabled quality tracking built into every production cycle.</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Brand New: USP & Infrastructure Deep-Dive */}
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
                    <h4 className="text-xl font-bold mb-3 uppercase tracking-tight">Escrow 2.0</h4>
                    <p className="text-slate-500 text-sm leading-relaxed font-light">Milestone-based fund release. Pay only when QC is verified.</p>
                  </div>
                  <div className="p-8 rounded-[32px] bg-white/[0.03] border border-white/5 backdrop-blur-sm">
                    <Gavel className="h-10 w-10 text-indigo-500 mb-6" />
                    <h4 className="text-xl font-bold mb-3 uppercase tracking-tight">Legal Shield</h4>
                    <p className="text-slate-500 text-sm leading-relaxed font-light">Binding digital contracts recognized under Indian commercial law.</p>
                  </div>
                </div>
                <div className="space-y-4 pt-8 md:pt-16">
                  <div className="p-8 rounded-[32px] bg-white/[0.03] border border-white/5 backdrop-blur-sm">
                    <Factory className="h-10 w-10 text-blue-500 mb-6" />
                    <h4 className="text-xl font-bold mb-3 uppercase tracking-tight">Direct Access</h4>
                    <p className="text-slate-500 text-sm leading-relaxed font-light">Bypass traders. Direct factory transparency from day zero.</p>
                  </div>
                  <div className="p-8 rounded-[32px] bg-white/[0.03] border border-white/5 backdrop-blur-sm">
                    <TrendingUp className="h-10 w-10 text-fuchsia-500 mb-6" />
                    <h4 className="text-xl font-bold mb-3 uppercase tracking-tight">Trade OS</h4>
                    <p className="text-slate-500 text-sm leading-relaxed font-light">Everything from discovery to delivery in one unified protocol.</p>
                  </div>
                </div>
              </div>
            </div>
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
