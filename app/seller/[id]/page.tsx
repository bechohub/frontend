import { MOCK_SELLERS } from "@/lib/mock-data";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Star, MapPin, ShieldCheck, MessageSquare, PhoneCall, Mail, Award, ArrowLeft, Factory } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import ProductGallery from "@/app/components/ProductGallery";

export default async function SellerPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const id = resolvedParams.id;

    const seller = MOCK_SELLERS.find((s) => String(s.id) === String(id));

    if (!seller) {
        return notFound();
    }

    return (
        <div className="min-h-screen bg-zinc-950 font-sans text-white selection:bg-cyan-600/30">
            <Navbar />

            <main className="pt-24 md:pt-32 pb-24 border-t border-zinc-900">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Back Link */}
                    <Link
                        href="/browse"
                        className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 hover:text-cyan-500 transition-colors mb-12 group"
                    >
                        <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform text-cyan-600" />{" "}
                        Return to Network
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-zinc-900 border border-zinc-900 mb-16">
                        {/* MAIN CONTENT AREA */}
                        <div className="lg:col-span-8 bg-zinc-950 flex flex-col">
                            {/* Hero Banner Space */}
                            <div className="h-64 md:h-96 relative overflow-hidden group border-b border-zinc-900">
                                <Image
                                    src={
                                        seller.image ||
                                        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200"
                                    }
                                    alt={seller.name || "Company Image"}
                                    fill
                                    className="object-cover opacity-30 grayscale mix-blend-luminosity group-hover:scale-105 group-hover:opacity-50 transition-all duration-1000"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent flex items-end p-8 md:p-12">
                                    <div className="flex items-end gap-6 w-full">
                                        <div className="h-24 w-24 md:h-32 md:w-32 bg-zinc-900 border border-zinc-800 text-white flex items-center justify-center font-black text-4xl md:text-6xl uppercase tracking-tighter shrink-0">
                                            {seller.name?.charAt(0)}
                                        </div>
                                        <div className="flex-1 pb-2">
                                            <div className="flex items-center gap-4 mb-3">
                                                <h1 className="text-4xl md:text-6xl font-black text-white tracking-widest uppercase leading-none">
                                                    {seller.name}
                                                </h1>
                                                {seller.verified && (
                                                    <div className="bg-cyan-950/50 border border-cyan-800 text-cyan-500 p-1.5 shrink-0">
                                                        <ShieldCheck className="h-5 w-5 md:h-6 md:w-6" />
                                                    </div>
                                                )}
                                            </div>
                                            <div className="flex items-center gap-3 text-zinc-400 font-black tracking-widest text-xs uppercase">
                                                <MapPin className="h-4 w-4 text-cyan-600" /> {seller.location}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Metrics Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-4 border-b border-zinc-900 bg-zinc-900/20">
                                {[
                                    { label: "Performance", value: seller.rating, icon: Star, highlight: false },
                                    { label: "Min Order", value: seller.moq, icon: Award, highlight: false },
                                    { label: "Output Cap", value: seller.capacity, icon: Factory, highlight: false },
                                    { label: "Clearance", value: "Verified", icon: ShieldCheck, highlight: true },
                                ].map((stat, idx) => (
                                    <div
                                        key={stat.label}
                                        className={`p-6 md:p-8 border-r border-zinc-900 last:border-none ${idx % 2 !== 0 ? "border-b md:border-b-0" : "border-b md:border-b-0"} hover:bg-zinc-900/40 transition-colors`}
                                    >
                                        <div className="flex items-center gap-3 mb-3">
                                            <stat.icon
                                                className={`h-4 w-4 ${stat.highlight ? "text-cyan-600" : "text-zinc-600"}`}
                                            />
                                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
                                                {stat.label}
                                            </span>
                                        </div>
                                        <div
                                            className={`text-xl md:text-2xl font-black tracking-wider uppercase ${stat.highlight ? "text-cyan-500" : "text-white"}`}
                                        >
                                            {stat.value}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Data Payload */}
                            <div className="p-8 md:p-12">
                                <h2 className="text-sm font-black text-white mb-6 uppercase tracking-[0.3em] flex items-center gap-4">
                                    <div className="h-px w-8 bg-cyan-600" /> Corporate Topology
                                </h2>
                                <p className="text-zinc-400 text-sm leading-loose font-medium tracking-wide mb-12 max-w-3xl">
                                    {seller.description}
                                </p>

                                {/* Product Gallery Showcase */}
                                <div className="mb-12 border-t border-zinc-900 pt-12">
                                    <ProductGallery images={seller.images} />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-900 mt-8 border border-zinc-900">
                                    <div className="bg-zinc-950 p-8">
                                        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-600 mb-6">
                                            Production Vectors
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {seller.tags.map((t) => (
                                                <span
                                                    key={t}
                                                    className="px-4 py-2 bg-zinc-900 text-white text-[10px] uppercase font-black tracking-widest border border-zinc-800 hover:border-cyan-800 transition-colors"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="bg-zinc-950 p-8">
                                        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-600 mb-6">
                                            Compliance Log
                                        </h3>
                                        <ul className="space-y-4">
                                            {["ISO 9001:2015", "Oeko-Tex Standard 100", "SA8000 Ethical Cert"].map(
                                                (c) => (
                                                    <li
                                                        key={c}
                                                        className="flex items-start gap-4 text-xs text-zinc-400 font-bold uppercase tracking-wider"
                                                    >
                                                        <div className="h-4 w-4 rounded-full bg-zinc-900 flex items-center justify-center shrink-0 mt-0.5">
                                                            <div className="h-1.5 w-1.5 rounded-full bg-cyan-600" />
                                                        </div>
                                                        {c}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* SIDEBAR PROTOCOLS */}
                        <aside className="lg:col-span-4 bg-zinc-950 flex flex-col border-l border-zinc-900">
                            {/* Command Console */}
                            <div className="p-8 md:p-10 relative overflow-hidden flex-1 border-b border-zinc-900">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-900/10 rounded-full blur-[80px] pointer-events-none" />

                                <h3 className="text-xs font-black text-white mb-10 uppercase tracking-[0.3em] flex items-center gap-4 relative z-10">
                                    <div className="h-2 w-2 bg-cyan-600 shadow-[0_0_8px_rgba(6,182,212,0.8)]" /> Direct
                                    Comm
                                </h3>

                                <div className="space-y-4 relative z-10 mb-12">
                                    <button className="w-full bg-cyan-700 hover:bg-cyan-600 text-white px-8 py-5 font-black text-[10px] uppercase tracking-[0.3em] transition-colors flex items-center justify-center gap-4">
                                        <MessageSquare className="h-4 w-4" /> Initialize RFQ
                                    </button>
                                    <div className="grid grid-cols-2 gap-4">
                                        <button className="flex items-center justify-center gap-3 bg-zinc-900 border border-zinc-800 hover:border-cyan-800 py-4 text-[10px] font-black text-white uppercase tracking-[0.2em] transition-colors">
                                            <PhoneCall className="h-4 w-4 text-cyan-600" /> Voice
                                        </button>
                                        <button className="flex items-center justify-center gap-3 bg-zinc-900 border border-zinc-800 hover:border-cyan-800 py-4 text-[10px] font-black text-white uppercase tracking-[0.2em] transition-colors">
                                            <Mail className="h-4 w-4 text-cyan-600" /> Data
                                        </button>
                                    </div>
                                </div>

                                <div className="space-y-6 pt-8 border-t border-zinc-900 relative z-10">
                                    <div className="flex flex-col gap-2">
                                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600">
                                            Distribution Radius
                                        </span>
                                        <span className="text-sm font-black uppercase tracking-widest text-white">
                                            Global Routing
                                        </span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600">
                                            Fulfillment Cycle
                                        </span>
                                        <span className="text-sm font-black uppercase tracking-widest text-white">
                                            15 Standard Days
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Trust Block */}
                            <div className="p-8 md:p-10 bg-zinc-900/30">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="p-3 border border-cyan-900/50 bg-cyan-950/20">
                                        <ShieldCheck className="h-6 w-6 text-cyan-500" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white leading-loose">
                                            Network Trust Protocol
                                        </div>
                                        <div className="text-[10px] font-black text-cyan-600 uppercase tracking-widest">
                                            A+ Verified Node
                                        </div>
                                    </div>
                                </div>
                                <p className="text-[10px] text-zinc-500 leading-wider font-bold uppercase tracking-widest border-l-2 border-zinc-800 pl-4">
                                    Entity has cleared Level 3 Audits. GST + Physical infrastructure verified by
                                    independent logic layer.
                                </p>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
