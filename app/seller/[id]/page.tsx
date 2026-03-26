import { MOCK_SELLERS } from "@/lib/mock-data";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import {
    Star,
    MapPin,
    ShieldCheck,
    CheckCircle,
    MessageSquare,
    PhoneCall,
    Mail,
    Award,
    ArrowLeft,
    Factory, // Use Lucide's Factory instead of custom component for safety
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

// Next.js 16/15 Async Server Component
export default async function SellerPage({ params }: { params: Promise<{ id: string }> }) {
    // Correct way to await params in Next.js 15+
    const resolvedParams = await params;
    const id = resolvedParams.id;

    // String cast to ensure matching if types vary slightly
    const seller = MOCK_SELLERS.find((s) => String(s.id) === String(id));

    if (!seller) {
        return notFound();
    }

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <Navbar />

            <main className="pt-24 md:pt-32 pb-24">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Breadcrumbs & Back */}
                    <Link
                        href="/browse"
                        className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-slate-400 hover:text-slate-900 transition-all mb-12 group"
                    >
                        <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Back to Browse
                    </Link>

                    {/* Industrial Profile Header */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
                        {/* Company Visuals & Branding */}
                        <div className="lg:col-span-8 space-y-8">
                            <div className="bg-white rounded-[40px] border border-slate-100 overflow-hidden shadow-2xl shadow-slate-200/50">
                                {/* Hero Banner */}
                                <div className="h-64 md:h-96 relative group overflow-hidden">
                                    <Image
                                        src={
                                            seller.image ||
                                            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200"
                                        }
                                        alt={seller.name || "Company Image"}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent flex items-end p-8 md:p-12">
                                        <div className="flex items-center gap-6">
                                            <div className="h-20 w-20 md:h-28 md:w-28 rounded-[24px] bg-white text-slate-950 flex items-center justify-center font-black text-3xl md:text-5xl tracking-tightest shadow-2xl">
                                                {seller.name?.charAt(0)}
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-3 mb-2">
                                                    <h1 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-none">
                                                        {seller.name}
                                                    </h1>
                                                    {seller.verified && (
                                                        <div className="bg-cyan-500 text-white rounded-full p-1 shadow-lg shadow-cyan-500/30">
                                                            <CheckCircle className="h-4 w-4 md:h-6 md:w-6" />
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="flex items-center gap-2 text-cyan-200 font-bold tracking-widest text-xs uppercase">
                                                    <MapPin className="h-4 w-4" /> {seller.location}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Quick Stats Section */}
                                <div className="grid grid-cols-2 md:grid-cols-4 border-t border-slate-50">
                                    {[
                                        { label: "Rating", value: seller.rating, icon: Star, color: "text-amber-400" },
                                        { label: "MOQ", value: seller.moq, icon: Award, color: "text-cyan-600" },
                                        {
                                            label: "Capacity",
                                            value: seller.capacity,
                                            icon: Factory,
                                            color: "text-slate-600",
                                        },
                                        {
                                            label: "Status",
                                            value: "Verified",
                                            icon: ShieldCheck,
                                            color: "text-emerald-500",
                                        },
                                    ].map((stat) => (
                                        <div
                                            key={stat.label}
                                            className="p-6 md:p-8 border-r border-slate-50 last:border-none hover:bg-slate-50/50 transition-colors"
                                        >
                                            <div className="flex items-center gap-2 mb-2">
                                                <stat.icon className={`h-4 w-4 ${stat.color}`} />
                                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                                                    {stat.label}
                                                </span>
                                            </div>
                                            <div className="text-lg md:text-xl font-black text-slate-950">
                                                {stat.value}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Detailed Description Section */}
                            <div className="bg-white rounded-[40px] border border-slate-100 p-8 md:p-12 shadow-sm">
                                <h2 className="text-xl md:text-2xl font-black text-slate-950 mb-6 uppercase tracking-widest border-b border-slate-100 pb-4">
                                    Corporate Overview
                                </h2>
                                <p className="text-slate-600 text-lg leading-relaxed font-normal mb-8">
                                    {seller.description}
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-4">
                                        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-cyan-600">
                                            Core Expertise
                                        </h3>
                                        <div className="flex flex-wrap gap-2 text-[10px] font-bold">
                                            {seller.tags.map((t) => (
                                                <span
                                                    key={t}
                                                    className="px-5 py-3 bg-slate-50 rounded-2xl text-slate-950 uppercase tracking-widest border border-slate-100"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-cyan-600">
                                            Certifications
                                        </h3>
                                        <ul className="space-y-2">
                                            {[
                                                "ISO 9001:2015",
                                                "Oeko-Tex Standard 100",
                                                "SA8000 Ethical Certification",
                                            ].map((c) => (
                                                <li
                                                    key={c}
                                                    className="flex items-center gap-2 text-sm text-slate-500 font-medium"
                                                >
                                                    <CheckCircle className="h-4 w-4 text-emerald-400" /> {c}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sticky Action Sidebar */}
                        <aside className="lg:col-span-4 lg:sticky lg:top-36 h-fit overflow-visible space-y-6">
                            {/* Contact Card */}
                            <div className="bg-slate-950 text-white rounded-[40px] p-8 md:p-10 shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                                <h3 className="text-lg font-black uppercase tracking-[0.2em] mb-8 relative z-10">
                                    Direct Connect
                                </h3>

                                <div className="space-y-4 relative z-10 mb-10">
                                    <button className="w-full bg-white text-slate-950 px-8 py-5 rounded-3xl font-black text-xs uppercase tracking-[0.2em] hover:scale-[1.02] transition-all flex items-center justify-center gap-3 shadow-xl">
                                        <MessageSquare className="h-4 w-4" /> Get Quote Now
                                    </button>
                                    <div className="grid grid-cols-2 gap-3">
                                        <button className="flex items-center justify-center gap-2 border border-white/10 hover:border-white/40 py-4 rounded-3xl text-[10px] font-black uppercase tracking-widest transition-all">
                                            <PhoneCall className="h-3 w-3" /> Call
                                        </button>
                                        <button className="flex items-center justify-center gap-2 border border-white/10 hover:border-white/40 py-4 rounded-3xl text-[10px] font-black uppercase tracking-widest transition-all">
                                            <Mail className="h-3 w-3" /> Email
                                        </button>
                                    </div>
                                </div>

                                <div className="space-y-4 pt-6 border-t border-white/5 relative z-10">
                                    <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-slate-500">
                                        <span>Industry Reach</span>
                                        <span className="text-cyan-400">Global</span>
                                    </div>
                                    <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-slate-500">
                                        <span>Avg. Lead Time</span>
                                        <span className="text-white">15 Days</span>
                                    </div>
                                </div>
                            </div>

                            {/* Trust Badge Card */}
                            <div className="bg-white rounded-[40px] border border-slate-100 p-8 shadow-sm">
                                <div className="flex items-center gap-3 mb-4">
                                    <ShieldCheck className="h-8 w-8 text-cyan-500" />
                                    <div>
                                        <div className="text-xs font-black uppercase tracking-widest text-slate-950">
                                            bechoHub Trust
                                        </div>
                                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                            A+ Tier Manufacturer
                                        </div>
                                    </div>
                                </div>
                                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                                    This manufacturer has passed our 12-point quality check including on-site visit and
                                    GST verification.
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
