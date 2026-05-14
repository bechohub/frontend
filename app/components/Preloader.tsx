"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Truck } from "lucide-react";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let timer: NodeJS.Timeout;

        const completeLoading = () => {
            // Minimal artificial delay to ensure the truck animation has played sufficiently
            // and the browser has painted completely before removing the curtain
            timer = setTimeout(() => {
                setIsLoading(false);
            }, 1000);
        };

        if (document.readyState === "complete") {
            completeLoading();
        } else {
            window.addEventListener("load", completeLoading);
            // Safety fallback in case the load event never fires
            timer = setTimeout(completeLoading, 7000);
        }

        return () => {
            window.removeEventListener("load", completeLoading);
            if (timer) clearTimeout(timer);
        };
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ y: 0, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
                    exit={{
                        y: "-100%",
                        borderBottomLeftRadius: "100px",
                        borderBottomRightRadius: "100px",
                        transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
                    }}
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-zinc-950 overflow-hidden shadow-2xl shadow-cyan-900/20"
                >
                    <div className="relative w-full max-w-md h-64 flex flex-col items-center justify-center">
                        {/* Truck Moving Container */}
                        <div className="w-full relative h-24 mb-6">
                            <motion.div
                                initial={{ x: "-150%", opacity: 0 }}
                                animate={{
                                    x: ["-100%", "0%", "100%"],
                                    opacity: [0, 1, 1, 0],
                                }}
                                transition={{
                                    duration: 2.0,
                                    times: [0, 0.4, 1],
                                    ease: "easeInOut",
                                }}
                                className="absolute left-1/2 -ml-12"
                            >
                                <div className="relative">
                                    {/* Bolder Truck */}
                                    <Truck className="h-24 w-24 text-slate-50" strokeWidth={2.5} />

                                    {/* Speed Lines - Thicker */}
                                    <motion.div
                                        animate={{ opacity: [0, 1, 0], x: [-5, 0, -5] }}
                                        transition={{ duration: 0.2, repeat: Infinity }}
                                        className="absolute -left-8 top-1/2 -translate-y-1/2 flex flex-col gap-2"
                                    >
                                        <div className="h-1.5 w-8 bg-slate-100 rounded-full" />
                                        <div className="h-1.5 w-5 bg-slate-100 rounded-full" />
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>

                        {/* bechoHub Pop Up - Massive */}
                        <div className="overflow-hidden">
                            <motion.div
                                initial={{ y: "100%", opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    delay: 0.6,
                                    duration: 0.5,
                                    type: "spring",
                                    stiffness: 120,
                                    damping: 20,
                                }}
                                className="text-6xl md:text-8xl font-black tracking-tighter text-white block leading-none font-heading"
                            >
                                becho<span className="text-cyan-600">Hub</span>
                            </motion.div>
                        </div>

                        {/* Shadow/Road Line - Thicker */}
                        <motion.div
                            initial={{ scaleX: 0, opacity: 0 }}
                            animate={{ scaleX: 1, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="h-1 bg-zinc-800 w-full max-w-[200px] mt-6"
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
