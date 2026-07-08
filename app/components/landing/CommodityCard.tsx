"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "./FadeIn";

export const CommodityCard = ({
    href,
    src,
    alt,
    title,
    subtitle,
    delay,
}: {
    href: string;
    src: string;
    alt: string;
    title: string;
    subtitle: string;
    delay: number;
}) => {
    const ref = useRef(null);
    // On mobile screens, trigger 'active' state when scrolling through the middle of the screen
    const isInView = useInView(ref, { margin: "-20% 0px -20% 0px" });

    return (
        <FadeIn delay={delay}>
            <Link
                ref={ref}
                href={href}
                data-active={isInView}
                className="group block relative h-[300px] md:h-[400px] border border-zinc-800 hover:border-zinc-500 transition-colors duration-500 overflow-hidden bg-zinc-900"
            >
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover opacity-[0.55] grayscale mix-blend-luminosity transition-all duration-1000 group-hover:mix-blend-normal group-hover:scale-105 group-hover:opacity-[1] group-hover:grayscale-0 max-md:group-data-[active=true]:mix-blend-normal max-md:group-data-[active=true]:scale-105 max-md:group-data-[active=true]:opacity-[1] max-md:group-data-[active=true]:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                <div className="absolute top-4 right-4 md:top-6 md:right-6">
                    <div className="w-8 h-8 rounded-full border border-zinc-700 flex flex-col justify-center items-center transition-colors duration-500 group-hover:bg-cyan-600 group-hover:border-cyan-600 max-md:group-data-[active=true]:bg-cyan-600 max-md:group-data-[active=true]:border-cyan-600">
                        <ArrowRight className="text-white w-3 h-3 -rotate-45 transition-transform duration-500 group-hover:rotate-0 max-md:group-data-[active=true]:rotate-0" />
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 p-4 md:p-6 w-full">
                    <div className="min-w-0 w-full pr-2">
                        <h3 className="text-lg xl:text-xl font-black uppercase tracking-wider mb-1 text-white transition-colors duration-500 group-hover:text-cyan-500 max-md:group-data-[active=true]:text-cyan-500 truncate">
                            {title}
                        </h3>
                        <p className="text-zinc-400 font-bold tracking-[0.2em] uppercase text-[8px] md:text-[9px] truncate">
                            {subtitle}
                        </p>
                    </div>
                </div>
            </Link>
        </FadeIn>
    );
};
