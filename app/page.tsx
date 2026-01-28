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
  X
} from "lucide-react";
import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from "./components/Animators";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const words = ["certainty.", "speed.", "trust.", "bechoHub."];

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-cyan-100 selection:text-cyan-900 overflow-x-hidden">

      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-50 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-fuchsia-50 rounded-full blur-[120px] opacity-60" />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600">
            bechoHub
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <Link href="#how-it-works" className="hover:text-slate-900 transition-colors">How it works</Link>
            <Link href="#onboarding" className="bg-slate-900 text-white px-6 py-2.5 rounded-full hover:bg-slate-800 transition-all active:scale-95 shadow-lg shadow-slate-200">
              Get Started
            </Link>
          </div>

          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-32 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <FadeIn>

              <div className="relative mb-8">
                <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[1.1] pb-2 font-heading">
                  Trade with <br className="sm:hidden" />
                  <div className="inline-block relative md:min-w-[460px] text-center align-middle">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={wordIndex}
                        initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600"
                      >
                        {words[wordIndex]}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </h1>
              </div>

              <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
                Connect directly with India&apos;s manufacturers. <br className="hidden md:block" />
                Verified partners, secured escrow, and guaranteed fulfillment.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link href="#onboarding" className="group w-full sm:w-auto px-10 py-5 bg-slate-900 text-white rounded-full font-bold text-lg hover:bg-slate-800 transition-all hover:translate-y-[-4px] shadow-2xl shadow-slate-300 active:scale-95 flex flex-col items-center">
                  <div className="flex items-center gap-2">
                    Get Started Free
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
                <Link href="#how-it-works" className="w-full sm:w-auto px-10 py-5 bg-white text-slate-900 border border-slate-200 rounded-full font-bold text-lg hover:bg-slate-50 transition-all active:scale-95">
                  See the Process
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Subtle Live Feed */}
          <FadeIn delay={0.5} className="mt-24 max-w-4xl mx-auto flex items-center justify-center gap-4 text-xs font-semibold text-slate-400 uppercase tracking-widest overflow-hidden whitespace-nowrap">
            <span className="flex items-center gap-2 text-cyan-500">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 animate-pulse" />
              LIVE FEED:
            </span>
            <motion.div
              animate={{ x: ["0%", "-100%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex gap-12"
            >
              <span>Order Placed: Industrial Bearings (12,000 units) to Pune</span>
              <span>RFQ Received: Medical Grade Textiles (50 tons) from Surat</span>
              <span>Payment Released: MSME Hub Bangalore (₹12,40,000)</span>
              <span>Order Placed: Industrial Bearings (12,000 units) to Pune</span>
              <span>RFQ Received: Medical Grade Textiles (50 tons) from Surat</span>
            </motion.div>
          </FadeIn>
        </section>

        {/* The Value Props */}
        <section className="py-24 bg-slate-50/50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <StaggerContainer className="grid md:grid-cols-3 gap-12">
              <StaggerItem className="space-y-4">
                <div className="h-12 w-12 rounded-2xl bg-cyan-50 flex items-center justify-center text-cyan-600">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">100% Pre-Vetted</h3>
                <p className="text-slate-600 leading-relaxed">Every business is GST-verified. No more guesswork, just reliable trade partners.</p>
              </StaggerItem>
              <StaggerItem className="space-y-4">
                <div className="h-12 w-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Escrow Protection</h3>
                <p className="text-slate-600 leading-relaxed">Your capital is safe. We hold payments until you approve the delivered quality.</p>
              </StaggerItem>
              <StaggerItem className="space-y-4">
                <div className="h-12 w-12 rounded-2xl bg-fuchsia-50 flex items-center justify-center text-fuchsia-600">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Logistics Solved</h3>
                <p className="text-slate-600 leading-relaxed">From factory floor to your warehouse. Real-time tracking and optimized routes.</p>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* Simplified How It Works */}
        <section id="how-it-works" className="py-32 px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-4xl font-bold mb-16 text-center">Seamless in 3 steps</h2>
            </FadeIn>
            <div className="space-y-20">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1">
                  <span className="text-sm font-bold text-cyan-500 uppercase tracking-widest mb-2 block">Step 01</span>
                  <h3 className="text-3xl font-bold mb-4">Tell us your needs</h3>
                  <p className="text-slate-600 text-lg">Post your specific buying requirements. Our system matches you with the best-fit manufacturers instantly.</p>
                </div>
                <div className="flex-1 bg-slate-50 p-8 rounded-3xl aspect-video flex items-center justify-center border border-slate-100 shadow-inner">
                  <div className="w-full h-4 bg-slate-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "70%" }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-cyan-500"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                <div className="flex-1">
                  <span className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-2 block">Step 02</span>
                  <h3 className="text-3xl font-bold mb-4">Review verified quotes</h3>
                  <p className="text-slate-600 text-lg">Compare competitive offers from pre-vetted sellers. Negotiate terms directly on our secure platform.</p>
                </div>
                <div className="flex-1 bg-slate-50 p-8 rounded-3xl aspect-video flex lg:flex-row gap-4 items-center justify-center border border-slate-100 shadow-inner">
                  <div className="w-1/3 h-24 bg-white rounded-2xl shadow-sm border border-slate-100" />
                  <div className="w-1/3 h-32 bg-white rounded-2xl shadow-md border border-slate-200 scale-110" />
                  <div className="w-1/3 h-24 bg-white rounded-2xl shadow-sm border border-slate-100" />
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1">
                  <span className="text-sm font-bold text-fuchsia-500 uppercase tracking-widest mb-2 block">Step 03</span>
                  <h3 className="text-3xl font-bold mb-4">Inspect & Release</h3>
                  <p className="text-slate-600 text-lg">Payments are held in escrow. Funds move only after you confirm the goods meet your standards.</p>
                </div>
                <div className="flex-1 bg-slate-50 p-8 rounded-3xl aspect-video flex items-center justify-center border border-slate-100 shadow-inner">
                  <ShieldCheck className="w-24 h-24 text-slate-300" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Direct Onboarding Section */}
        <section id="onboarding" className="py-32 px-6 bg-slate-900 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] -z-10" />
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <FadeIn>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Choose your path</h2>
                <p className="text-slate-400 text-lg">Select how you want to engage with the network today.</p>
              </FadeIn>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <FadeIn delay={0.1}>
                <Link href="/signup?type=buyer" className="group block bg-white/5 border border-white/10 hover:border-cyan-500/50 p-10 rounded-3xl transition-all hover:bg-white/[0.08] relative overflow-hidden h-full">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 group-hover:text-cyan-400 transition-all">
                    <ArrowRight className="h-8 w-8 -rotate-45" />
                  </div>
                  <Users2 className="h-12 w-12 text-cyan-400 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">I want to buy</h3>
                  <p className="text-slate-400 mb-8 leading-relaxed">Source industrial goods from India's most reliable manufacturers with escrow protection.</p>
                  <div className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-cyan-400 gap-2">
                    Begin Sourcing <ChevronRight className="h-4 w-4" />
                  </div>
                </Link>
              </FadeIn>

              <FadeIn delay={0.2}>
                <Link href="/signup?type=supplier" className="group block bg-white/5 border border-white/10 hover:border-fuchsia-500/50 p-10 rounded-3xl transition-all hover:bg-white/[0.08] relative overflow-hidden h-full">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 group-hover:text-fuchsia-400 transition-all">
                    <ArrowRight className="h-8 w-8 -rotate-45" />
                  </div>
                  <Building2 className="h-12 w-12 text-fuchsia-400 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">I want to sell</h3>
                  <p className="text-slate-400 mb-8 leading-relaxed">Expose your manufacturing capabilities to verified buyers and grow your order book.</p>
                  <div className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-fuchsia-400 gap-2">
                    Start Selling <ChevronRight className="h-4 w-4" />
                  </div>
                </Link>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-20 border-t border-slate-100 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-bold text-slate-900">bechoHub</div>
          <div className="flex gap-8 text-sm text-slate-500">
            <Link href="#" className="hover:text-slate-900 transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-slate-900 transition-colors">Terms</Link>
            <Link href="#" className="hover:text-slate-900 transition-colors">Contact</Link>
          </div>
          <div className="text-sm text-slate-400">
            &copy; 2025 bechoHub. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
