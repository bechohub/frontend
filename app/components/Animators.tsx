"use client";

import { motion } from "framer-motion";
import { cn } from "@/app/utils/cn";

// Apple-like smooth spring/ease
const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1]; // easeOutQuint-ish

export const FadeIn = ({
    children,
    className,
    delay = 0,
    duration = 0.4, // Faster for responsive feel
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }} // Subtle movement
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration, delay, ease: smoothEase }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const SlideUp = ({
    children,
    className,
    delay = 0,
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay, ease: smoothEase }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const StaggerContainer = ({
    children,
    className,
    staggerChildren = 0.1,
}: {
    children: React.ReactNode;
    className?: string;
    staggerChildren?: number;
}) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
                hidden: {},
                show: {
                    transition: {
                        staggerChildren,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const StaggerItem = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const ScaleOnHover = ({
    children,
    className
}: {
    children: React.ReactNode;
    className?: string
}) => {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={className}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
            {children}
        </motion.div>
    )
}

import { useState, useEffect, useRef } from "react";

export const TextScramble = ({
    text,
    className,
    delay = 0
}: {
    text: string;
    className?: string;
    delay?: number;
}) => {
    const [displayText, setDisplayText] = useState("");
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const duration = 2000;
    const speed = 50;

    useEffect(() => {
        let frame = 0;
        let timeout: NodeJS.Timeout;

        const startScramble = () => {
            const interval = setInterval(() => {
                setDisplayText(
                    text
                        .split("")
                        .map((char, index) => {
                            if (char === " ") return " ";
                            if (index < frame / 2) return text[index];
                            return characters[Math.floor(Math.random() * characters.length)];
                        })
                        .join("")
                );

                if (frame >= text.length * 2) {
                    clearInterval(interval);
                    setDisplayText(text);
                }
                frame++;
            }, speed);
        };

        timeout = setTimeout(startScramble, delay * 1000);
        return () => {
            clearTimeout(timeout);
        };
    }, [text, delay]);

    return <span className={className}>{displayText}</span>;
};

export const Magnetic = ({
    children,
    intensity = 0.5
}: {
    children: React.ReactElement;
    intensity?: number;
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current!.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX * intensity, y: middleY * intensity });
    };

    const reset = () => setPosition({ x: 0, y: 0 });

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={reset}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        >
            {children}
        </motion.div>
    );
};
