"use client";

import { motion } from "motion/react";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";

export function AuroraBackgroundDemo() {
    return (
        <AuroraBackground className="items-start justify-start pt-36 pb-16 md:justify-center md:pt-0 md:pb-0">
            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="relative flex flex-col gap-4 md:gap-8 items-start justify-center px-6 md:px-16 lg:px-32 h-full w-full font-[family-name:var(--font-outfit)]"
            >
                <div className="text-left w-full max-w-7xl">
                    <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tight dark:text-white leading-[1.1] mb-3 md:mb-0">
                        Pakistan’s Premier <br />
                        <span className="text-zinc-400 dark:text-zinc-400 font-medium text-xl md:text-5xl lg:text-6xl mt-2 block">
                            Waterproofing & Heat Proofing Experts
                        </span>
                    </h1>
                </div>

                <p className="font-light text-base md:text-2xl dark:text-neutral-300 max-w-7xl text-left leading-relaxed mt-2 md:mt-0">
                    Protect your property with industrial-grade chemical solutions. From permanent roof leakage repairs to advanced heat insulation, we deliver guaranteed results for homes and industries across Pakistan using premium imported materials.
                </p>


            </motion.div>
        </AuroraBackground>
    );
}
