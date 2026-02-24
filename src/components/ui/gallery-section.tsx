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

    // Pair images into rows of 2 for the asymmetric grid
    const rows: { left: (typeof galleryImages)[number]; right: (typeof galleryImages)[number] }[] = [];
    for (let i = 0; i < galleryImages.length; i += 2) {
        if (i + 1 < galleryImages.length) {
            rows.push({ left: galleryImages[i], right: galleryImages[i + 1] });
        }
    }

    return (
        <section id="gallery" className="relative bg-teal-50 overflow-hidden">
            {/* Background texture */}
            <div
                className="absolute inset-0 opacity-[0.4]"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #e4e4e7 1px, transparent 0)`,
                    backgroundSize: "48px 48px",
                    maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
                }}
            />

            {/* Accent glows */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full bg-teal-100/50 blur-[140px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-cyan-100/40 blur-[120px] pointer-events-none" />

            <div className="relative z-20 mx-auto max-w-7xl px-6 md:px-10 pt-16 md:pt-24 pb-8 md:pb-16">
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
                        <div className="h-px w-8 bg-gradient-to-r from-transparent to-teal-600/60" />
                        <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-teal-800">
                            Our Work
                        </span>
                        <div className="h-px w-8 bg-gradient-to-l from-transparent to-cyan-600/60" />
                    </motion.div>

                    <motion.h2
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        custom={1}
                        className="text-4xl md:text-5xl lg:text-[3.5rem] font-semibold leading-[1.1] tracking-[-0.02em] text-zinc-900"
                    >
                        Our Latest <br /> <span className="text-teal-900">Work.</span>
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

                {/* ─── Desktop: Asymmetric 2-Column Grid ─── */}
                <div className="hidden md:flex flex-col gap-4">
                    {rows.map((row, rowIdx) => {
                        const isOdd = rowIdx % 2 !== 0;
                        return (
                            <motion.div
                                key={rowIdx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{ duration: 0.7, delay: rowIdx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className={cn(
                                    "grid gap-5",
                                    isOdd ? "grid-cols-[2fr_3fr]" : "grid-cols-[3fr_2fr]"
                                )}
                            >
                                {/* Left image */}
                                <div className="relative group overflow-hidden rounded-3xl cursor-pointer">
                                    <div className={cn(
                                        "relative w-full overflow-hidden rounded-3xl",
                                        isOdd ? "h-[340px]" : "h-[400px]"
                                    )}>
                                        <Image
                                            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                            src={row.left.src}
                                            alt={row.left.alt}
                                            fill
                                            sizes="(max-width: 1200px) 60vw, 50vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-all duration-500" />
                                        <div className="absolute inset-0 bg-teal-900/0 group-hover:bg-teal-900/10 transition-all duration-500" />
                                    </div>
                                    {/* Always-visible label */}
                                    <div className="absolute bottom-0 inset-x-0 p-5">
                                        <div className="inline-flex px-3.5 py-2 rounded-lg bg-white/90 backdrop-blur-md border border-zinc-200/80 shadow-sm">
                                            <span className="text-[13px] font-medium text-zinc-800">
                                                {row.left.alt}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Right image */}
                                <div className="relative group overflow-hidden rounded-3xl cursor-pointer">
                                    <div className={cn(
                                        "relative w-full overflow-hidden rounded-3xl",
                                        isOdd ? "h-[340px]" : "h-[400px]"
                                    )}>
                                        <Image
                                            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                            src={row.right.src}
                                            alt={row.right.alt}
                                            fill
                                            sizes="(max-width: 1200px) 40vw, 35vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-all duration-500" />
                                        <div className="absolute inset-0 bg-teal-900/0 group-hover:bg-teal-900/10 transition-all duration-500" />
                                    </div>
                                    {/* Always-visible label */}
                                    <div className="absolute bottom-0 inset-x-0 p-5">
                                        <div className="inline-flex px-3.5 py-2 rounded-lg bg-white/90 backdrop-blur-md border border-zinc-200/80 shadow-sm">
                                            <span className="text-[13px] font-medium text-zinc-800">
                                                {row.right.alt}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* ─── Mobile: Single Column Stack ─── */}
                <div className="flex flex-col gap-4 md:hidden">
                    {galleryImages.map((img, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className={cn(
                                "relative group overflow-hidden rounded-2xl",
                                idx >= mobileVisibleCount ? "hidden" : "block"
                            )}
                        >
                            <div className="relative w-full h-[260px] overflow-hidden rounded-3xl">
                                <Image
                                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    sizes="100vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-all duration-500" />
                                <div className="absolute inset-0 bg-teal-900/0 group-hover:bg-teal-900/10 transition-all duration-500" />
                            </div>
                            {/* Always-visible label */}
                            <div className="absolute bottom-0 inset-x-0 p-4">
                                <div className="inline-flex px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-md border border-zinc-200/80 shadow-sm">
                                    <span className="text-[12px] font-medium text-zinc-800">
                                        {img.alt}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile Show More Button */}
                <div className="mt-8 flex justify-center md:hidden">
                    <button
                        onClick={handleShowMore}
                        className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-teal-700 text-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:bg-teal-600 hover:scale-[1.03] hover:-translate-y-0.5 active:scale-[0.97]"
                    >
                        <span className="relative z-10 text-sm font-semibold tracking-wide">
                            {mobileVisibleCount >= galleryImages.length ? "Show Less" : "Show More"}
                        </span>
                        <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                </div>

                {/* Section CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <p className="text-zinc-500 text-sm mb-4">Like what you see?</p>
                    <a
                        href="https://wa.me/923206377227"
                        target="_blank"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-teal-700 text-white rounded-xl text-sm font-semibold hover:bg-teal-600 hover:shadow-lg hover:scale-[1.03] hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-300"
                    >
                        Discuss Your Project <ArrowRight className="w-4 h-4" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
