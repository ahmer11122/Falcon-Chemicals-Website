"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const galleryImages = [
    {
        src: "/images/services/heat-proofing.webp",
        alt: "Heat Proofing",
    },
    {
        src: "/images/services/water-proofing.webp",
        alt: "Water Proofing",
    },
    {
        src: "/images/services/water-tank-treatment.webp",
        alt: "Water Tank Treatment",
    },
    {
        src: "/images/services/washroom-treatment.webp",
        alt: "Washroom Treatment",
    },
    {
        src: "/images/services/walls-water-heat-proofing.webp",
        alt: "Walls Water & Heat Proofing",
    },
    {
        src: "/images/services/termite-control.webp",
        alt: "Termite Control",
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.1 + i * 0.12,
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        },
    }),
};

export function GallerySection() {
    const [mobileVisibleCount, setMobileVisibleCount] = useState(3);

    const handleShowMore = () => {
        if (mobileVisibleCount >= galleryImages.length) {
            setMobileVisibleCount(3);
        } else {
            setMobileVisibleCount((prev) => Math.min(prev + 3, galleryImages.length));
        }
    };

    return (
        <section id="gallery" className="relative bg-white overflow-hidden">
            {/* Background texture */}
            <div
                className="absolute inset-0 opacity-[0.4]"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #e4e4e7 1px, transparent 0)`,
                    backgroundSize: "48px 48px",
                }}
            />

            {/* Accent glows */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full bg-blue-100/50 blur-[140px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-indigo-100/40 blur-[120px] pointer-events-none" />

            <div className="relative z-20 mx-auto max-w-[90%] md:max-w-7xl px-4 md:px-6 pt-16 md:pt-24 pb-8 md:pb-12">
                {/* ─── Section Header ─── */}
                <div className="mb-12 md:mb-20 space-y-6 text-center">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        custom={0}
                        className="flex items-center justify-center gap-3"
                    >
                        <div className="h-px w-8 bg-gradient-to-r from-transparent to-blue-600/60" />
                        <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-zinc-500">
                            Our Work
                        </span>
                        <div className="h-px w-8 bg-gradient-to-l from-transparent to-indigo-600/60" />
                    </motion.div>

                    <motion.h2
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        custom={1}
                        className="text-4xl md:text-5xl lg:text-[3.5rem] font-semibold leading-[1.1] tracking-[-0.02em] text-zinc-900"
                    >
                        Our Latest <br /> <span className="text-zinc-400">Work.</span>
                    </motion.h2>

                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        custom={2}
                        className="text-base md:text-[17px] text-zinc-500 leading-[1.75] max-w-xl mx-auto"
                    >
                        A visual collection of our most recent projects — each executed
                        with precision, quality materials, and lasting results.
                    </motion.p>
                </div>

                {/* ─── Gallery ─── */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    custom={3}
                    className="flex flex-col md:flex-row w-full gap-4 md:gap-2 h-auto md:h-[500px] rounded-2xl overflow-hidden border-none md:border md:border-zinc-200 bg-transparent md:bg-zinc-50 p-0 md:p-2 shadow-none md:shadow-sm"
                >
                    {galleryImages.map((img, idx) => (
                        <div
                            key={idx}
                            className={cn(
                                "relative group overflow-hidden rounded-xl",
                                "transition-[flex] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",
                                // Mobile styles
                                "w-full h-[300px]",
                                idx >= mobileVisibleCount ? "hidden md:block" : "block",
                                // Desktop styles
                                "md:h-full md:w-auto",
                                "md:flex-[1] md:hover:flex-[4]",
                                "md:min-h-auto"
                            )}
                        >
                            <Image
                                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                src={img.src}
                                alt={img.alt}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                            />

                            {/* Dark overlay — lighter on hover */}
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-500" />

                            {/* Bottom label — visible on hover */}
                            <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                                <div className="px-3 py-2 rounded-lg bg-white/90 backdrop-blur-md border border-zinc-200 shadow-md">
                                    <span className="text-[12px] font-medium text-zinc-800">
                                        {img.alt}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Mobile Show More Button */}
                <div className="mt-8 flex justify-center md:hidden">
                    <button
                        onClick={handleShowMore}
                        className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900 text-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:bg-zinc-800"
                    >
                        <span className="relative z-10 text-sm font-semibold tracking-wide">
                            {mobileVisibleCount >= galleryImages.length ? "Show Less" : "Show More"}
                        </span>
                        <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                </div>
            </div>
        </section>
    );
}
