"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
    const [phase, setPhase] = useState(0);

    useEffect(() => {
        // Phase 1 (0ms): Draw SVG Path
        const t1 = setTimeout(() => setPhase(1), 0);
        // Phase 2 (800ms): Fill SVG and reveal "FALCON" 
        const t2 = setTimeout(() => setPhase(2), 700);
        // Phase 3 (1500ms): Reveal "CHEMICAL CONSTRUCTION"
        const t3 = setTimeout(() => setPhase(3), 1400);
        // Phase 4 (2500ms): Scale up and fade out (Exit sequence)
        const t4 = setTimeout(() => setPhase(4), 2600);
        // Complete (3200ms) - Faster overall duration
        const t5 = setTimeout(() => onComplete(), 3300);

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
            clearTimeout(t4);
            clearTimeout(t5);
        };
    }, [onComplete]);

    // Creative Custom SVG: An abstract, elegant droplet merging into a wing shape
    // This fits "Chemical" (drop) and "Falcon" (wing)
    const customSvgPath = "M 50 10 C 65 30 90 50 90 70 C 90 92.1 72.1 110 50 110 C 27.9 110 10 92.1 10 70 C 10 50 35 30 50 10 Z";

    return (
        <>


            {/* The Outer Wrapper that animates the background color and exits smoothly */}
            <motion.div
                className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden pointer-events-auto bg-[#f9f9f9]"
                initial={{ opacity: 1 }}
                animate={{ opacity: phase >= 4 ? 0 : 1 }}
                transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                style={{
                    // Add the subtle grid background from services section for brand alignment
                    backgroundImage: `linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)`,
                    backgroundSize: "64px 64px",
                }}
            >
                {/* Radial mask to soften the grid on the edges */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: "radial-gradient(circle at center, transparent 30%, #f9f9f9 80%)"
                    }}
                />

                <div className="relative w-full h-full flex flex-col items-center justify-center">

                    <motion.div
                        className="relative flex flex-col items-center"
                        animate={{
                            scale: phase >= 4 ? 1.1 : 1,
                            y: phase >= 4 ? -20 : 0,
                        }}
                        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    >
                        {/* 1. Custom Abstract SVG Icon (Chemical Drop + Wing) */}
                        <div className="w-[80px] h-[100px] mb-8 relative">
                            <svg
                                viewBox="0 0 100 120"
                                className="w-full h-full drop-shadow-sm"
                            >
                                <motion.path
                                    d={customSvgPath}
                                    fill="rgba(13, 148, 136, 0)" // transparent teal initially
                                    stroke="#0d9488" // teal-600
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    initial={{ pathLength: 0, fill: "rgba(13, 148, 136, 0)" }}
                                    animate={{
                                        pathLength: phase >= 1 ? 1 : 0,
                                        fill: phase >= 2 ? "rgba(13, 148, 136, 1)" : "rgba(13, 148, 136, 0)"
                                    }}
                                    transition={{
                                        pathLength: { duration: 1, ease: "easeInOut" },
                                        fill: { duration: 0.8, ease: "easeOut", delay: 0.2 }
                                    }}
                                />
                            </svg>
                        </div>

                        {/* 2. FALCON Logotype */}
                        <div className="relative flex justify-center items-center overflow-hidden h-[90px] sm:h-[120px]">
                            <div
                                className="flex font-[family-name:var(--font-display)] font-semibold tracking-[0.12em] text-zinc-900"
                                style={{ fontSize: 'clamp(56px, 10vw, 110px)', lineHeight: 0.85 }}
                            >
                                {"FALCON".split("").map((letter, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{ y: '100%' }}
                                        animate={{ y: phase >= 2 ? '0%' : '100%' }}
                                        transition={{
                                            duration: 0.8,
                                            ease: [0.16, 1, 0.3, 1], // Very sleek spring-like ease
                                            delay: phase >= 2 ? i * 0.05 : 0
                                        }}
                                        className="block relative"
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </div>
                        </div>

                        {/* 3. Subtext: CHEMICAL CONSTRUCTION */}
                        <motion.div
                            className="font-[family-name:var(--font-mono)] font-medium text-[11px] sm:text-[13px] tracking-[0.35em] sm:tracking-[0.45em] text-teal-700 uppercase mt-4 ml-[0.5em] overflow-hidden"
                            initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
                            animate={{
                                clipPath: phase >= 3 ? 'inset(0 0% 0 0)' : 'inset(0 100% 0 0)',
                                opacity: phase >= 3 ? 1 : 0
                            }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <span className="opacity-80">CHEMICAL CONSTRUCTION</span>
                        </motion.div>
                    </motion.div>

                    {/* Bottom Progress Line (Minimalist) */}
                    <motion.div
                        className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[120px] h-[1px] bg-zinc-200 overflow-hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: phase >= 1 && phase < 4 ? 1 : 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <motion.div
                            className="h-full bg-teal-600 rounded-full"
                            initial={{ width: "0%" }}
                            animate={{ width: phase >= 4 ? "100%" : (phase >= 1 ? `${(phase / 3) * 100}%` : "0%") }}
                            transition={{ duration: phase >= 4 ? 0.2 : 0.8, ease: "linear" }}
                        />
                    </motion.div>

                </div>
            </motion.div>
        </>
    );
}

export default SplashScreen;
