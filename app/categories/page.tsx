"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Search } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

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
        transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={className}
    >
        {children}
    </motion.div>
);

const categories = [
    {
        id: "agriculture",
        name: "Agriculture",
        subtitle: "Tea, Grain, Spices",
        image: "/images/agriculture_supplies.png",
        subcategories: ["Raw Tea Leaves", "Processed Spices", "Bulk Grains", "Fertilizers", "Farm Machinery"],
    },
    {
        id: "textile",
        name: "Textile",
        subtitle: "Yarn, Fabric, Garments",
        image: "/images/textile_mill.png",
        subcategories: ["Cotton Yarn", "Synthetic Fabrics", "Industrial Textiles", "Finished Garments", "Dyes"],
    },
    {
        id: "chemicals",
        name: "Chemicals",
        subtitle: "Industrial, Organic, Polymers",
        image: "/images/chemicals_trade.png",
        subcategories: ["Petrochemicals", "Agrochemicals", "Polymers", "Specialty Chemicals", "Industrial Gases"],
    },
    {
        id: "electronics",
        name: "Electronics",
        subtitle: "Components, Devices, Wiring",
        image: "/images/electronics_electrical.png",
        subcategories: ["Circuit Boards", "Microcontrollers", "Industrial Wiring", "Sensors", "Power Supplies"],
    },
    {
        id: "construction",
        name: "Construction",
        subtitle: "Marble, Granite, Cement",
        image: "/images/construction_materials.png",
        subcategories: ["Raw Marble", "Granite Slabs", "Portland Cement", "Structural Steel", "Heavy Equipment"],
    },
    {
        id: "packaging",
        name: "Packaging",
        subtitle: "Corrugated, Plastics, Glass",
        image: "/images/packaging_materials.png",
        subcategories: [
            "Corrugated Boxes",
            "Industrial Plastics",
            "Glass Containers",
            "Biodegradable Packaging",
            "Pallets",
        ],
    },
    {
        id: "machinery",
        name: "Machinery",
        subtitle: "Heavy Duty, Parts, Tools",
        image: "/images/steel_trade.png",
        subcategories: ["CNC Machines", "Industrial Lathes", "Replacement Parts", "Power Tools", "Automation Systems"],
    },
];

export default function CategoriesPage() {
    return (
        <main className="min-h-screen bg-zinc-950 text-zinc-400 selection:bg-cyan-900 selection:text-cyan-50">
            <Navbar />

            {/* HEADER */}
            <section className="pt-40 pb-20 px-6 border-b border-zinc-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-zinc-900/40 via-zinc-950 to-zinc-950 -z-10" />
                <div className="max-w-7xl mx-auto">
                    <FadeIn>
                        <p className="text-cyan-600 font-bold tracking-[0.2em] uppercase text-sm mb-4">
                            Global Catalog
                        </p>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white mb-8">
                            Explore <br /> All Categories.
                        </h1>
                        <p className="max-w-2xl text-lg md:text-xl text-zinc-400 leading-relaxed">
                            Discover deep liquidity across India&apos;s strategic B2B sectors. Browse verified
                            suppliers, access wholesale pricing, and source materials at an industrial scale.
                        </p>

                        <div className="mt-12 max-w-xl relative">
                            <input
                                type="text"
                                placeholder="Search for commodities, materials, or parts..."
                                className="w-full bg-zinc-900 border border-zinc-800 text-white px-6 py-4 pl-12 focus:outline-none focus:border-cyan-600 transition-colors placeholder:text-zinc-600"
                            />
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-600" />
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* CATEGORIES GRID */}
            <section className="py-24 px-6 bg-zinc-950">
                <div className="max-w-7xl mx-auto space-y-32">
                    {categories.map((category, index) => (
                        <FadeIn key={category.id} delay={0.1 * (index % 3)}>
                            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
                                {/* IMAGE SIDE */}
                                <div className="w-full lg:w-1/2">
                                    <Link
                                        href={`/category/${category.id}`}
                                        className="group block relative h-[400px] md:h-[500px] border border-zinc-800 hover:border-zinc-500 transition-colors duration-500 overflow-hidden bg-zinc-900"
                                    >
                                        <Image
                                            src={category.image}
                                            alt={category.name}
                                            fill
                                            className="object-cover opacity-50 grayscale mix-blend-luminosity group-hover:scale-105 group-hover:opacity-80 group-hover:grayscale-0 transition-all duration-1000"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                                        <div className="absolute bottom-0 left-0 p-8 w-full">
                                            <div className="w-12 h-12 rounded-full border border-zinc-700 flex flex-col justify-center items-center group-hover:bg-cyan-600 group-hover:border-cyan-600 transition-colors duration-500 mb-6">
                                                <ArrowRight className="text-white w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                                            </div>
                                            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white group-hover:text-cyan-500 transition-colors duration-500">
                                                {category.name}
                                            </h2>
                                            <p className="text-zinc-400 font-bold tracking-[0.2em] uppercase text-xs mt-2">
                                                {category.subtitle}
                                            </p>
                                        </div>
                                    </Link>
                                </div>

                                {/* CONTENT SIDE */}
                                <div className="w-full lg:w-1/2 lg:py-12">
                                    <div className="mb-12">
                                        <h3 className="text-2xl font-bold text-white mb-4">Popular Subcategories</h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                                            {category.subcategories.map((sub, i) => (
                                                <Link
                                                    key={i}
                                                    href={`/category/${category.id}`}
                                                    className="group flex items-center gap-3 py-3 border-b border-zinc-900 hover:border-zinc-700 transition-colors"
                                                >
                                                    <ChevronRight className="w-4 h-4 text-zinc-700 group-hover:text-cyan-500 transition-colors" />
                                                    <span className="text-zinc-400 group-hover:text-white transition-colors">
                                                        {sub}
                                                    </span>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>

                                    <Link
                                        href={`/category/${category.id}`}
                                        className="inline-flex items-center text-cyan-600 font-bold uppercase tracking-[0.2em] text-sm hover:text-white transition-colors group"
                                    >
                                        View All {category.name} Products
                                        <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
