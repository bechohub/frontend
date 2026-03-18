"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
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
import { FadeIn, StaggerContainer, StaggerItem, SlideUp, Magnetic } from "./components/Animators";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const blurValue = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(10px)"]);

  return (
    <div className="min-h-[100svh] bg-white text-slate-900 font-sans selection:bg-cyan-100 selection:text-cyan-950 overflow-x-hidden" ref={containerRef}>
      <Navbar />

      <main>
        {/* Hero Section - Clean Light */}
        <section className="relative pt-40 pb-24 md:pt-64 md:pb-40 px-6 overflow-hidden min-h-[100svh] flex flex-col justify-center items-center">
          {/* subtle awwwards grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
          
          {/* Ambient Backgrounds - Lightened & Disabled on Mobile for Performance */}
          <motion.div 
             animate={{ rotate: 360, scale: [1, 1.1, 1] }} 
             transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
             className="hidden md:block absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-cyan-200/20 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" 
          />
          <motion.div 
             animate={{ rotate: -360, scale: [1, 1.2, 1] }} 
             transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
             className="hidden md:block absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-fuchsia-200/20 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" 
          />

          <motion.div style={{ y: heroY, opacity: heroOpacity, filter: blurValue }} className="max-w-7xl w-full mx-auto text-center relative z-10 flex flex-col items-center">
            <StaggerContainer>
              <StaggerItem>
                <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[120px] font-black tracking-tighter leading-[0.9] sm:leading-[0.85] mb-6 font-heading text-slate-950 px-4">
                  The Future of <br className="hidden sm:block" />
                  <span className="relative">
                    Indian B2B.
                    <motion.svg className="absolute w-full h-4 -bottom-2 left-0 text-cyan-500" viewBox="0 0 100 20" preserveAspectRatio="none">
                      <motion.path 
                        d="M0 10 Q 50 20 100 10" 
                        fill="transparent" 
                        stroke="currentColor" 
                        strokeWidth="3"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
                      />
                    </motion.svg>
                  </span>
                </h1>
              </StaggerItem>

              <StaggerItem>
                <div className="mb-14 flex justify-center gap-3 sm:gap-4 md:gap-5 flex-wrap">
                  {["Connect.", "Trade.", "Grow."].map((word, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{
                        delay: 0.8 + i * 0.15,
                        duration: 0.8,
                        ease: [0.2, 0.65, 0.3, 0.9],
                      }}
                      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-space font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-600 to-fuchsia-600 drop-shadow-sm selection:text-fuchsia-900"
                    >
                      {word}
                    </motion.span>
                  ))}
                </div>
              </StaggerItem>

              <StaggerItem>
                <p className="text-lg sm:text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto mb-14 font-light leading-relaxed px-2 md:px-0">
                  The safest way to buy directly from the source. We connect you with verified factories across India via our <span className="text-slate-900 font-medium italic">escrow-backed</span> security protocol.
                </p>
              </StaggerItem>

              <StaggerItem>
                <div className="flex justify-center mb-16 sm:mb-24 px-4 w-full h-[80px]">
                  <Magnetic intensity={0.2}>
                    <Link
                      href="/signup"
                      className="group inline-flex items-center justify-center w-full sm:w-auto px-8 sm:px-14 py-5 bg-slate-950 text-white rounded-full font-black text-xs md:text-sm uppercase tracking-widest sm:tracking-[0.25em] hover:bg-slate-900 transition-all active:scale-95 shadow-2xl shadow-slate-300 gap-3 sm:gap-4 overflow-hidden relative whitespace-nowrap"
                    >
                      <span className="relative z-10">Get Started</span>
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center relative z-10 group-hover:bg-white group-hover:text-slate-950 transition-colors duration-300 shrink-0">
                        <ArrowRight className="h-4 w-4 transform -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                      </div>
                    </Link>
                  </Magnetic>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </motion.div>
        </section>
        {/* Brand New: USP & Infrastructure Deep-Dive - Moved Up for Visibility */}
        <section className="py-32 md:py-48 px-6 bg-slate-950 text-white overflow-hidden relative rounded-t-[40px] md:rounded-t-[80px] -mt-10 z-20 shadow-[0_-20px_60px_rgba(0,0,0,0.1)]">
          <motion.div 
             animate={{ rotate: 360, scale: [1, 1.2, 1] }} 
             transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
             className="hidden md:block absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" 
          />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                <StaggerContainer>
                  <StaggerItem>
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-500 mb-8 block">Zero Risk Trade</span>
                  </StaggerItem>
                  <StaggerItem>
                    <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-[90px] font-black tracking-tightest uppercase mb-12 leading-[0.85] text-slate-50 break-words">
                      Reliability <br /> as a Service.
                    </h2>
                  </StaggerItem>
                  <StaggerItem>
                    <p className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed mb-16 max-w-xl">
                      We've built a multi-layered security protocol to ensure your capital and your reputation are always protected.
                    </p>
                  </StaggerItem>
                  <StaggerItem>
                    <Magnetic intensity={0.15}>
                      <Link
                        href="/about"
                        className="inline-flex items-center gap-4 text-xs font-black uppercase tracking-widest text-white group"
                      >
                        View Technical Manifest <ArrowRight className="h-4 w-4 group-hover:translate-x-3 transition-transform text-cyan-500" />
                      </Link>
                    </Magnetic>
                  </StaggerItem>
                </StaggerContainer>
              </div>

              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <StaggerItem>
                    <div className="p-10 rounded-[40px] bg-white/[0.02] border border-white/5 md:backdrop-blur-sm group hover:bg-white/[0.04] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <h4 className="text-3xl font-black mb-4 uppercase tracking-tight text-cyan-500 relative z-10">Safe Escrow</h4>
                      <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] relative z-10">We hold your money safely. Pay only after you verify the quality.</p>
                    </div>
                  </StaggerItem>
                  <StaggerItem>
                    <div className="p-10 rounded-[40px] bg-white/[0.02] border border-white/5 md:backdrop-blur-sm group hover:bg-white/[0.04] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <h4 className="text-3xl font-black mb-4 uppercase tracking-tight text-indigo-500 relative z-10">Legal Cover</h4>
                      <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] relative z-10">Every trade is protected by strong, Indian-law contracts.</p>
                    </div>
                  </StaggerItem>
                </div>
                <div className="space-y-4 mt-4 sm:mt-0 sm:pt-8 md:pt-20">
                  <StaggerItem>
                    <div className="p-10 rounded-[40px] bg-white/[0.02] border border-white/5 md:backdrop-blur-sm group hover:bg-white/[0.04] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <h4 className="text-3xl font-black mb-4 uppercase tracking-tight text-blue-500 relative z-10">Buy Direct</h4>
                      <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] relative z-10">Skip the middlemen. We connect you straight to the factory floor.</p>
                    </div>
                  </StaggerItem>
                  <StaggerItem>
                    <div className="p-10 rounded-[40px] bg-white/[0.02] border border-white/5 md:backdrop-blur-sm group hover:bg-white/[0.04] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/20 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <h4 className="text-3xl font-black mb-4 uppercase tracking-tight text-fuchsia-500 relative z-10">Done For You</h4>
                      <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] relative z-10">We handle quality checks and shipping to your doorstep.</p>
                    </div>
                  </StaggerItem>
                </div>
              </StaggerContainer>
            </div>

            {/* Protocol Matrix - Proper Full Width & Heavy visibility */}
            <FadeIn delay={0.2}>
              <div className="mt-32 p-8 md:p-16 rounded-[40px] md:rounded-[64px] bg-white/[0.02] border border-white/5 md:backdrop-blur-md relative overflow-hidden group hover:border-white/10 transition-colors duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
                  <div className="shrink-0 text-center lg:text-left">
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-cyan-500 block mb-4">How it works</span>
                    <h4 className="text-4xl sm:text-5xl md:text-7xl lg:text-[80px] font-black tracking-tightest uppercase text-white leading-[0.85] break-words">Trade <br /> Steps.</h4>
                  </div>

                  <div className="flex-1 w-full flex flex-col md:flex-row gap-6">
                    {[
                      { label: "01 / You Pay", sub: "We hold your money safely until delivery." },
                      { label: "02 / We Check", sub: "We inspect the goods at the factory floor." },
                      { label: "03 / Release", sub: "Factory is paid only after quality is verified." }
                    ].map((step, i) => (
                      <div key={i} className="flex-1 bg-white/[0.03] p-10 md:p-12 rounded-[32px] border border-transparent hover:border-white/10 flex flex-col items-center lg:items-start text-center lg:text-left hover:bg-white/[0.05] hover:-translate-y-2 transition-all duration-500 cursor-default">
                        <h5 className="text-sm md:text-base font-black uppercase tracking-widest text-cyan-500 mb-4">{step.label}</h5>
                        <p className="text-[11px] md:text-xs text-slate-400 font-bold uppercase tracking-wider leading-relaxed">{step.sub}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>





        {/* Final CTA - Ultra Minimal with Parallax Scale effect */}
        <section className="py-20 md:pt-40 md:pb-40 px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 lg:py-32 rounded-[40px] md:rounded-[80px] bg-slate-950 text-white text-center relative overflow-hidden group shadow-2xl shadow-slate-900/50">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] pointer-events-none mix-blend-overlay" />
              
              <motion.div 
                className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
              />

              <div className="relative z-10 flex flex-col items-center">
                <h2 className="text-4xl sm:text-5xl md:text-[90px] lg:text-[120px] font-black tracking-tighter uppercase mb-10 sm:mb-14 leading-[0.8] text-slate-50">Build the <br /> Future.</h2>
                <div className="flex justify-center w-full px-2 sm:px-4">
                  <Magnetic intensity={0.2}>
                    <Link href="/signup" className="px-8 md:px-16 py-4 md:py-6 bg-white text-slate-950 rounded-full font-black text-[10px] sm:text-xs md:text-sm uppercase tracking-widest md:tracking-[0.2em] hover:bg-cyan-400 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] transition-all duration-300 whitespace-nowrap inline-flex justify-center items-center shrink-0">
                      Get Started Now
                    </Link>
                  </Magnetic>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
