"use client";

import { motion } from "motion/react";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { TextReveal } from "@/components/ui/text-reveal";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function AuroraBackgroundDemo() {
    return (
        <AuroraBackground className="items-start justify-start pt-36 pb-16 md:justify-center md:pt-0 md:pb-0">
            <div className="relative flex flex-col gap-4 md:gap-8 items-start justify-center px-6 md:px-16 lg:px-32 h-full w-full font-[family-name:var(--font-body)]">

                {/* ─── Hero Heading with Word-by-Word Reveal ─── */}
                <div className="text-left w-full max-w-7xl">
                    <TextReveal
                        as="h1"
                        className="text-3xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-display)] tracking-tight dark:text-white leading-[1.1] mb-2 md:mb-3"
                        delay={0.2}
                        staggerSpeed={0.08}
                    >
                        Pakistan's Premier
                    </TextReveal>

                    <ScrollReveal delay={0.6} blur>
                        <span className="text-teal-700 dark:text-zinc-400 font-semibold text-lg md:text-4xl lg:text-5xl mt-2 block font-[family-name:var(--font-heading)] leading-snug">
                            Waterproofing &amp; Heat Proofing Experts
                        </span>
                    </ScrollReveal>
                </div>

                {/* ─── Subtitle with Blur Reveal ─── */}
                <ScrollReveal delay={0.8} blur>
                    <p className="font-light text-base md:text-2xl dark:text-neutral-300 max-w-7xl text-left leading-relaxed mt-2 md:mt-0 font-[family-name:var(--font-body)]">
                        Protect your property with industrial-grade chemical solutions. From permanent roof leakage repairs to advanced heat insulation, we deliver guaranteed results for homes and industries across Pakistan using premium imported materials.
                    </p>
                </ScrollReveal>

                {/* ─── Hero CTA Buttons with Staggered Entrance ─── */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: { staggerChildren: 0.15, delayChildren: 1.0 },
                        },
                    }}
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 md:mt-6 w-full sm:w-auto"
                >
                    {/* Primary — WhatsApp */}
                    <motion.a
                        variants={{
                            hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
                            visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
                        }}
                        href="https://wa.me/923206377227"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:px-8 sm:py-4 text-[14px] sm:text-[15px] font-semibold text-white rounded-xl bg-teal-700 hover:bg-teal-600 shadow-lg hover:shadow-xl hover:scale-[1.03] hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-300 w-full sm:w-auto"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-[18px] h-[18px] shrink-0"
                        >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                        </svg>
                        WhatsApp Us
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-4 h-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300"
                        >
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    </motion.a>

                    {/* Secondary — Phone Call */}
                    <motion.a
                        variants={{
                            hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
                            visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
                        }}
                        href="tel:+923206377227"
                        className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:px-8 sm:py-4 text-[14px] sm:text-[15px] font-medium text-zinc-700 rounded-xl border border-zinc-300 bg-white/60 backdrop-blur-sm hover:bg-white hover:border-zinc-400 hover:text-zinc-900 shadow-sm hover:shadow-md transition-all duration-300 w-full sm:w-auto"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-4 h-4 shrink-0"
                        >
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        +92 320 6377227
                    </motion.a>
                </motion.div>

            </div>
        </AuroraBackground>
    );
}
