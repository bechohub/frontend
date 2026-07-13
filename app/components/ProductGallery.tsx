"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";

interface ProductGalleryProps {
    images?: string[];
}

export default function ProductGallery({ images = [] }: ProductGalleryProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    if (images.length === 0) return null;

    const handlePrev = () => {
        setActiveIndex((prev) => Math.max(prev - 1, 0));
    };

    const handleNext = () => {
        setActiveIndex((prev) => Math.min(prev + 1, images.length - 1));
    };

    return (
        <div className="space-y-8">
            <h2 className="text-sm font-black text-white uppercase tracking-[0.3em] flex items-center gap-4">
                <div className="h-px w-8 bg-cyan-600" /> Catalog Showcase
            </h2>

            {/* Active Preview */}
            <div className="relative h-64 md:h-96 w-full overflow-hidden border border-zinc-900 bg-zinc-900/10">
                <Image
                    src={images[activeIndex]}
                    alt={`Product Detail ${activeIndex + 1}`}
                    fill
                    className="object-cover transition-all duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent p-6 flex justify-between items-end">
                    <span className="px-3 py-1 bg-zinc-900/80 border border-zinc-800 text-[10px] font-black tracking-widest text-cyan-500 uppercase backdrop-blur-sm">
                        Image {activeIndex + 1} of {images.length}
                    </span>
                    <div className="flex gap-2">
                        <button
                            onClick={handlePrev}
                            disabled={activeIndex === 0}
                            className="p-3 bg-zinc-900/80 border border-zinc-800 hover:border-cyan-500/50 text-white disabled:opacity-50 disabled:pointer-events-none transition-colors backdrop-blur-sm cursor-pointer"
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </button>
                        <button
                            onClick={handleNext}
                            disabled={activeIndex === images.length - 1}
                            className="p-3 bg-zinc-900/80 border border-zinc-800 hover:border-cyan-500/50 text-white disabled:opacity-50 disabled:pointer-events-none transition-colors backdrop-blur-sm cursor-pointer"
                        >
                            <ChevronRight className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Swipeable Thumbnails Row */}
            <div className="relative">
                <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-zinc-950 to-transparent pointer-events-none z-10" />
                <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-zinc-950 to-transparent pointer-events-none z-10" />

                <motion.div
                    ref={carouselRef}
                    className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory cursor-grab active:cursor-grabbing py-2 px-1"
                    whileTap={{ cursor: "grabbing" }}
                >
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`relative h-20 w-32 shrink-0 snap-start border transition-all duration-300 cursor-pointer overflow-hidden group
                                ${activeIndex === index ? "border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.3)]" : "border-zinc-900 hover:border-zinc-700"}
                            `}
                        >
                            <Image
                                src={img}
                                alt={`Product Thumbnail ${index + 1}`}
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-100 group-hover:opacity-0 transition-opacity flex items-center justify-center">
                                <Eye className="h-4 w-4 text-white opacity-40 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
