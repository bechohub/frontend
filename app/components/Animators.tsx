"use client";

import { motion } from "framer-motion";

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

export const StaggerItem = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const ScaleOnHover = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={className}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
            {children}
        </motion.div>
    );
};
