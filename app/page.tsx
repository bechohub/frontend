"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ShieldCheck, CheckCircle2, Key, FastForward } from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// We keep a simple FadeIn for blocks
const FadeIn = ({
    children,
    delay = 0,
    className = "",
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
        className={className}
    >
        {children}
    </motion.div>
);

export default function Home() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <div className="min-h-screen bg-zinc-950 text-[#f0f0fa] font-sans overflow-x-hidden" ref={containerRef}>
            <Navbar />

            <main>
                {/* 1. HERO SECTION */}
                <section className="relative h-screen w-full flex items-center overflow-hidden bg-zinc-950">
                    <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 z-0">
                        <Image
                            src="/images/hero_industrial.png"
                            alt="Industrial scale B2B trade"
                            fill
                            className="object-cover opacity-30 mix-blend-luminosity grayscale"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent" />
                    </motion.div>

                    <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-start mt-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="inline-block border border-zinc-800 bg-zinc-900/50 px-4 py-2 mb-8 uppercase tracking-[0.3em] text-xs text-cyan-600 font-bold backdrop-blur-sm">
                                Next-Gen B2B Trade Engine
                            </div>
                            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[110px] font-black tracking-tighter leading-[0.85] uppercase mb-8 max-w-6xl text-white">
                                Close Real Deals.
                                <br />
                                <span className="text-cyan-700">Not Just Leads.</span>
                            </h1>
                            <p className="text-lg md:text-2xl text-zinc-400 max-w-2xl font-medium tracking-widest mb-12 uppercase leading-snug">
                                Verified buyers. Trusted suppliers. Secure transactions.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6">
                                <Link
                                    href="/signup?role=seller"
                                    className="group relative inline-flex items-center justify-center px-10 py-5 bg-cyan-700 text-white font-bold uppercase tracking-[0.2em] text-sm hover:bg-cyan-600 transition-colors duration-300"
                                >
                                    Become a Supplier
                                    <ArrowRight className="ml-4 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* 2. TRUST SECTION */}
                <section className="py-24 bg-zinc-950 border-y border-zinc-900 relative z-20">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-20">
                            <FadeIn>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-4 text-white">
                                    Every Business is <span className="text-zinc-600">Verified.</span>
                                    <br />
                                    Every Deal is <span className="text-zinc-600">Protected.</span>
                                </h2>
                            </FadeIn>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {[
                                {
                                    icon: ShieldCheck,
                                    title: "Verified Suppliers",
                                    desc: "Rigorous KYC & active verification. No shell companies.",
                                },
                                {
                                    icon: CheckCircle2,
                                    title: "Verified Buyers",
                                    desc: "High intent, financially vetted procurement teams.",
                                },
                                {
                                    icon: Key,
                                    title: "Secure Escrow",
                                    desc: "Your capital is locked safely until fulfillment.",
                                },
                                {
                                    icon: FastForward,
                                    title: "Faster Closures",
                                    desc: "From RFQ to PO in days, not months. Zero friction.",
                                },
                            ].map((item, i) => (
                                <FadeIn key={i} delay={i * 0.1} className="h-full">
                                    <div className="h-full p-8 border border-zinc-800 bg-zinc-900/30 flex flex-col items-start hover:bg-zinc-900/50 hover:border-zinc-700 transition-all duration-300">
                                        <div className="p-3 bg-cyan-950/30 border border-cyan-900/30 mb-6 group-hover:bg-cyan-900/50 transition-colors">
                                            <item.icon className="h-8 w-8 text-cyan-600" />
                                        </div>
                                        <h3 className="text-lg font-black uppercase tracking-widest mb-4 text-white">
                                            {item.title}
                                        </h3>
                                        <p className="text-zinc-500 font-medium text-sm tracking-wide leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3. HOW IT WORKS (SIMPLIFIED) */}
                <section className="py-32 bg-zinc-950">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                            {/* For Buyers */}
                            <FadeIn>
                                <div className="space-y-12">
                                    <div className="border-b-2 border-zinc-900 pb-8">
                                        <div className="text-cyan-700 text-sm font-black tracking-[0.3em] uppercase mb-4">
                                            Command Center
                                        </div>
                                        <h3 className="text-5xl font-black uppercase tracking-tighter text-white">
                                            For Buyers
                                        </h3>
                                    </div>
                                    <div className="space-y-10">
                                        {[
                                            {
                                                step: "01",
                                                title: "Post Requirement",
                                                desc: "Define your specs in under 30 seconds.",
                                            },
                                            {
                                                step: "02",
                                                title: "Get Verified Suppliers",
                                                desc: "Smart matching brings the best directly to you.",
                                            },
                                            {
                                                step: "03",
                                                title: "Close Deal Securely",
                                                desc: "Execute contracts and pay via built-in Escrow.",
                                            },
                                        ].map((item, i) => (
                                            <div key={i} className="flex gap-8 items-start group">
                                                <span className="text-4xl font-black text-zinc-800 group-hover:text-cyan-600 transition-colors leading-none">
                                                    {item.step}
                                                </span>
                                                <div>
                                                    <h4 className="text-xl font-bold uppercase tracking-widest mb-3 text-white">
                                                        {item.title}
                                                    </h4>
                                                    <p className="text-zinc-400 font-medium tracking-wide">
                                                        {item.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </FadeIn>

                            {/* For Sellers */}
                            <FadeIn delay={0.2}>
                                <div className="space-y-12">
                                    <div className="border-b-2 border-zinc-900 pb-8">
                                        <div className="text-cyan-700 text-sm font-black tracking-[0.3em] uppercase mb-4">
                                            Sales Engine
                                        </div>
                                        <h3 className="text-5xl font-black uppercase tracking-tighter text-white">
                                            For Sellers
                                        </h3>
                                    </div>
                                    <div className="space-y-10">
                                        {[
                                            {
                                                step: "01",
                                                title: "Get High-Intent Buyers",
                                                desc: "No spam. Only verified RFQs with real intent score.",
                                            },
                                            {
                                                step: "02",
                                                title: "Send Quotes Fast",
                                                desc: "Quick quote system baked right in to your dashboard.",
                                            },
                                            {
                                                step: "03",
                                                title: "Get Paid Securely",
                                                desc: "Funds held in Escrow. Zero default risk on payouts.",
                                            },
                                        ].map((item, i) => (
                                            <div key={i} className="flex gap-8 items-start group">
                                                <span className="text-4xl font-black text-zinc-800 group-hover:text-cyan-600 transition-colors leading-none">
                                                    {item.step}
                                                </span>
                                                <div>
                                                    <h4 className="text-xl font-bold uppercase tracking-widest mb-3 text-white">
                                                        {item.title}
                                                    </h4>
                                                    <p className="text-zinc-400 font-medium tracking-wide">
                                                        {item.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </section>

                {/* 4. PROBLEM VS SOLUTION */}
                <section className="py-40 bg-zinc-900 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem]" />

                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-center mb-24 max-w-4xl mx-auto leading-tight text-white">
                            STOP WASTING TIME ON <span className="text-cyan-700">FAKE LEADS.</span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-900 border border-zinc-900">
                            <FadeIn className="bg-zinc-950">
                                <div className="p-12 md:p-16 h-full">
                                    <h3 className="text-3xl font-black uppercase tracking-widest text-zinc-600 mb-12 flex items-center gap-4">
                                        <span className="text-zinc-800">✕</span> The Old Way
                                    </h3>
                                    <ul className="space-y-8">
                                        {[
                                            "Spam buyer leads & unqualified RFQs",
                                            "Zero trust or physical verification",
                                            "Endless non-transparent price wars",
                                            "No payment security or legal cover",
                                            "Weeks of follow-ups to finalize a deal",
                                        ].map((text, i) => (
                                            <li
                                                key={i}
                                                className="flex items-start gap-5 text-zinc-500 font-medium tracking-wide text-lg"
                                            >
                                                <div className="h-1.5 w-1.5 mt-2.5 rounded-full bg-zinc-800 shrink-0" />
                                                {text}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.2} className="bg-zinc-950">
                                <div className="p-12 md:p-16 relative overflow-hidden h-full">
                                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none" />
                                    <h3 className="text-3xl font-black tracking-widest text-white mb-12 flex items-center gap-4 relative z-10">
                                        <span className="text-cyan-600">✓</span>
                                        <span className="flex items-center gap-2">
                                            <span className="font-heading lowercase tracking-tighter">
                                                becho<span className="text-cyan-600">Hub</span>
                                            </span>
                                            <span className="uppercase">WAY</span>
                                        </span>
                                    </h3>
                                    <ul className="space-y-8 relative z-10">
                                        {[
                                            "Verified buyers only, intent scored",
                                            "Smart matchmaking by precise spec",
                                            "Premium pricing protected by Escrow",
                                            "100% Secure payments and legal cover",
                                            "Deals close in 48 hours autonomously",
                                        ].map((text, i) => (
                                            <li
                                                key={i}
                                                className="flex items-start gap-5 text-white font-bold tracking-wide text-lg"
                                            >
                                                <div className="p-0.5 bg-cyan-600/20 border border-cyan-600/50 rounded-full mt-1 shrink-0">
                                                    <CheckCircle2 className="h-4 w-4 text-cyan-600" />
                                                </div>
                                                {text}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </section>

                {/* 5. CATEGORY FOCUS */}
                <section className="py-32 bg-zinc-950 border-t border-zinc-900">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                            <div>
                                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 text-white">
                                    Commodities.
                                </h2>
                                <p className="text-zinc-500 tracking-[0.2em] uppercase font-bold text-sm">
                                    Deep liquidity in strategic sectors
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
                            <FadeIn>
                                <Link
                                    href="/category/agriculture"
                                    className="group block relative h-[300px] md:h-[400px] border border-zinc-800 hover:border-zinc-500 transition-colors duration-500 overflow-hidden bg-zinc-900"
                                >
                                    <Image
                                        src="/images/agriculture_supplies.png"
                                        alt="Agriculture and Farm Supplies"
                                        fill
                                        className="object-cover opacity-40 grayscale mix-blend-luminosity group-hover:scale-105 group-hover:opacity-70 group-hover:grayscale-0 transition-all duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                                    <div className="absolute top-4 right-4 md:top-6 md:right-6">
                                        <div className="w-8 h-8 rounded-full border border-zinc-700 flex flex-col justify-center items-center group-hover:bg-cyan-600 group-hover:border-cyan-600 transition-colors duration-500">
                                            <ArrowRight className="text-white w-3 h-3 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 p-4 md:p-6 w-full">
                                        <div className="min-w-0 w-full pr-2">
                                            <h3 className="text-lg xl:text-xl font-black uppercase tracking-wider mb-1 text-white group-hover:text-cyan-500 transition-colors duration-500 truncate">
                                                Agriculture
                                            </h3>
                                            <p className="text-zinc-400 font-bold tracking-[0.2em] uppercase text-[8px] md:text-[9px] truncate">
                                                Tea, Grain, Spices
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </FadeIn>

                            <FadeIn delay={0.1}>
                                <Link
                                    href="/category/textile"
                                    className="group block relative h-[300px] md:h-[400px] border border-zinc-800 hover:border-zinc-500 transition-colors duration-500 overflow-hidden bg-zinc-900"
                                >
                                    <Image
                                        src="/images/textile_mill.png"
                                        alt="Apparel & textile material"
                                        fill
                                        className="object-cover opacity-40 grayscale mix-blend-luminosity group-hover:scale-105 group-hover:opacity-70 group-hover:grayscale-0 transition-all duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                                    <div className="absolute top-4 right-4 md:top-6 md:right-6">
                                        <div className="w-8 h-8 rounded-full border border-zinc-700 flex flex-col justify-center items-center group-hover:bg-cyan-600 group-hover:border-cyan-600 transition-colors duration-500">
                                            <ArrowRight className="text-white w-3 h-3 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 p-4 md:p-6 w-full">
                                        <div className="min-w-0 w-full pr-2">
                                            <h3 className="text-lg xl:text-xl font-black uppercase tracking-wider mb-1 text-white group-hover:text-cyan-500 transition-colors duration-500 truncate">
                                                Textile
                                            </h3>
                                            <p className="text-zinc-400 font-bold tracking-[0.2em] uppercase text-[8px] md:text-[9px] truncate">
                                                Yarn, Fabric, Garments
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </FadeIn>

                            <FadeIn delay={0.2}>
                                <Link
                                    href="/category/chemicals"
                                    className="group block relative h-[300px] md:h-[400px] border border-zinc-800 hover:border-zinc-500 transition-colors duration-500 overflow-hidden bg-zinc-900"
                                >
                                    <Image
                                        src="/images/chemicals_trade.png"
                                        alt="Chemical & Raw Material"
                                        fill
                                        className="object-cover opacity-40 grayscale mix-blend-luminosity group-hover:scale-105 group-hover:opacity-70 group-hover:grayscale-0 transition-all duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                                    <div className="absolute top-4 right-4 md:top-6 md:right-6">
                                        <div className="w-8 h-8 rounded-full border border-zinc-700 flex flex-col justify-center items-center group-hover:bg-cyan-600 group-hover:border-cyan-600 transition-colors duration-500">
                                            <ArrowRight className="text-white w-3 h-3 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 p-4 md:p-6 w-full">
                                        <div className="min-w-0 w-full pr-2">
                                            <h3 className="text-lg xl:text-xl font-black uppercase tracking-wider mb-1 text-white group-hover:text-cyan-500 transition-colors duration-500 truncate">
                                                Chemicals
                                            </h3>
                                            <p className="text-zinc-400 font-bold tracking-[0.2em] uppercase text-[8px] md:text-[9px] truncate">
                                                Industrial, Organic, Polymers
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </FadeIn>

                            <FadeIn delay={0.3}>
                                <Link
                                    href="/category/electronics"
                                    className="group block relative h-[300px] md:h-[400px] border border-zinc-800 hover:border-zinc-500 transition-colors duration-500 overflow-hidden bg-zinc-900"
                                >
                                    <Image
                                        src="/images/electronics_electrical.png"
                                        alt="Electronics and electrical"
                                        fill
                                        className="object-cover opacity-40 grayscale mix-blend-luminosity group-hover:scale-105 group-hover:opacity-70 group-hover:grayscale-0 transition-all duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                                    <div className="absolute top-4 right-4 md:top-6 md:right-6">
                                        <div className="w-8 h-8 rounded-full border border-zinc-700 flex flex-col justify-center items-center group-hover:bg-cyan-600 group-hover:border-cyan-600 transition-colors duration-500">
                                            <ArrowRight className="text-white w-3 h-3 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 p-4 md:p-6 w-full">
                                        <div className="min-w-0 w-full pr-2">
                                            <h3 className="text-lg xl:text-xl font-black uppercase tracking-wider mb-1 text-white group-hover:text-cyan-500 transition-colors duration-500 truncate">
                                                Electronics
                                            </h3>
                                            <p className="text-zinc-400 font-bold tracking-[0.2em] uppercase text-[8px] md:text-[9px] truncate">
                                                Components, Devices, Wiring
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </FadeIn>
                        </div>

                        <FadeIn delay={0.5} className="flex justify-center">
                            <Link
                                href="/categories"
                                className="group inline-flex items-center justify-center px-10 py-5 border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 text-white font-bold uppercase tracking-[0.2em] text-xs transition-colors duration-300"
                            >
                                Explore All Categories
                                <ArrowRight className="ml-4 h-4 w-4 group-hover:translate-x-1 transition-transform text-cyan-600" />
                            </Link>
                        </FadeIn>
                    </div>
                </section>

                {/* 6. OUR GUARANTEE */}
                <section className="py-32 bg-zinc-900 border-y border-zinc-900 relative">
                    <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-16 md:gap-8">
                        <FadeIn className="text-center md:text-left w-full border-b border-zinc-800 pb-16 md:border-b-0 md:pb-0 md:border-r md:pr-8">
                            <h3 className="text-7xl md:text-8xl lg:text-[120px] font-black text-white mb-4 tracking-tighter leading-none">
                                100<span className="text-cyan-700">%</span>
                            </h3>
                            <p className="text-zinc-500 font-bold uppercase tracking-[0.3em] text-sm text-balance">
                                Verified Network
                            </p>
                        </FadeIn>
                        <FadeIn
                            delay={0.1}
                            className="text-center md:text-left w-full border-b border-zinc-800 pb-16 md:border-b-0 md:pb-0 md:border-r md:px-8"
                        >
                            <h3 className="text-7xl md:text-8xl lg:text-[120px] font-black text-white mb-4 tracking-tighter leading-none">
                                0<span className="text-4xl md:text-6xl text-cyan-700">%</span>
                            </h3>
                            <p className="text-zinc-500 font-bold uppercase tracking-[0.3em] text-sm text-balance">
                                Fake Leads
                            </p>
                        </FadeIn>
                        <FadeIn delay={0.2} className="text-center md:text-left w-full md:pl-8">
                            <h3 className="text-7xl md:text-8xl lg:text-[120px] font-black text-white mb-4 tracking-tighter leading-none">
                                24<span className="text-4xl md:text-6xl text-cyan-700">/7</span>
                            </h3>
                            <p className="text-zinc-500 font-bold uppercase tracking-[0.3em] text-sm text-balance">
                                Trade Monitoring
                            </p>
                        </FadeIn>
                    </div>
                </section>

                {/* 7. FINAL CTA */}
                <section className="relative min-h-[80vh] bg-zinc-950 flex justify-center items-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/images/container_ship.png"
                            alt="Global Logistics"
                            fill
                            className="object-cover opacity-40 grayscale mix-blend-luminosity"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
                    </div>

                    <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center">
                        <FadeIn>
                            <h2 className="text-5xl md:text-7xl lg:text-[100px] font-black tracking-tighter uppercase mb-16 leading-[0.85] text-white">
                                START YOUR <br className="hidden md:block" />
                                FIRST DEAL <span className="text-cyan-600 block sm:inline">TODAY.</span>
                            </h2>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <Link
                                    href="/signup?role=seller"
                                    className="group inline-flex items-center justify-center px-12 py-6 bg-cyan-700 text-white font-black uppercase tracking-[0.2em] text-sm hover:bg-cyan-600 transition-colors duration-300"
                                >
                                    Join as Supplier
                                    <ArrowRight className="ml-4 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </FadeIn>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
