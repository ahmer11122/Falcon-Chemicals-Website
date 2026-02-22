"use client";
// Force re-index for framer-motion resolution
import React, { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { WordBlurReveal } from "@/components/ui/word-blur-reveal";
import {
    CloudRain,
    Bug,
    Droplets,
    ShowerHead,
    Layers,
    ArrowRight,
    X,
    Calculator,
    Ruler,
    Sun,
} from "lucide-react";
import Image from "next/image";
import { ServicePathLine } from "@/components/ui/service-path-line";

/* ─── Unit conversion to sq ft (base) ─── */
const UNIT_TO_SQFT: Record<string, number> = {
    "sq ft": 1,
    "sq m": 10.764,
    marla: 272.25,
    kanal: 5445,
};

const units = Object.keys(UNIT_TO_SQFT);

/* ─── Services data with pricing model ─── */
const services = [
    {
        title: "Heat Proofing",
        description:
            "Thermal insulation treatments that reflect sunlight and reduce indoor temperature significantly, lowering energy costs.",
        icon: Sun,
        featured: false,
        price: 45,
        pricingModel: "sqft" as const,
        image: "/images/services/heat-proofing.webp",
        // Heat Proofing: Thermal insulation treatments that reflect sunlight and reduce indoor temperature significantly, lowering energy costs.
    },
    {
        title: "Water Proofing",
        description:
            "Advanced polymer-based coatings and membrane systems that seal roof surfaces permanently — eliminating leaks, dampness, and structural water damage.",
        icon: CloudRain,
        featured: true,
        price: 45,
        pricingModel: "sqft" as const,
        image: "/images/services/water-proofing.webp",
        // Water Proofing: Advanced polymer-based coatings and membrane systems that seal roof surfaces permanently — eliminating leaks, dampness, and structural water damage.
    },
    {
        title: "Water Tank Treatment",
        description:
            "High-grade epoxy and cementitious waterproofing for underground, overhead, and industrial water storage tanks.",
        icon: Droplets,
        featured: false,
        price: 15000,
        pricingModel: "starting_from" as const,
        image: "/images/services/water-tank-treatment.webp",
        // Water Tank Treatment: High-grade epoxy and cementitious waterproofing for underground, overhead, and industrial water storage tanks.
    },
    {
        title: "Washroom Treatment",
        description:
            "Professional chemical-based leakage and seepage repair for washrooms and toilets — providing a permanent seal without demolition or messy injections.",
        icon: ShowerHead,
        featured: false,
        price: 15000,
        pricingModel: "starting_from" as const,
        image: "/images/services/washroom-treatment.webp",
        // Washroom Treatment: Professional chemical-based leakage and seepage repair for washrooms and toilets — providing a permanent seal without demolition or messy injections.
    },
    {
        title: "Walls Water & Heat Proofing",
        description:
            "Industrial-grade chemical sheets and plaster membranes for damp-proofing walls, ceilings, and foundations.",
        icon: Layers,
        featured: false,
        price: 45,
        pricingModel: "sqft" as const,
        image: "/images/services/walls-water-heat-proofing.webp",
        // Walls Water & Heat Proofing: Industrial-grade chemical sheets and plaster membranes for damp-proofing walls, ceilings, and foundations.
    },
    {
        title: "Termite Control",
        description:
            "Chemical barriers and treatments that protect structures from termite infestation.",
        icon: Bug,
        featured: false,
        price: 25000,
        pricingModel: "starting_from" as const,
        image: "/images/services/termite-control.webp",
        // Termite Control: Chemical barriers and treatments that protect structures from termite infestation.
    },
];

type Service = (typeof services)[number];

/* ─── Animations ─── */
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

/* ─── Format currency ─── */
function formatPKR(value: number): string {
    if (value >= 100000) {
        return `PKR ${(value / 100000).toFixed(2)} Lakh`;
    }
    return `PKR ${value.toLocaleString("en-PK")}`;
}

/* ════════════════════════════════════════════════
   Quotation Modal
   ════════════════════════════════════════════════ */
function QuotationModal({
    service,
    onClose,
}: {
    service: Service;
    onClose: () => void;
}) {
    const [areaValue, setAreaValue] = useState<string>("");
    const [selectedUnit, setSelectedUnit] = useState("sq ft");

    // Lock body scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    // Close on Escape key
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [onClose]);

    const numericArea = parseFloat(areaValue) || 0;
    const areaInSqFt = numericArea * UNIT_TO_SQFT[selectedUnit];

    let estimatedCost = 0;
    if (service.pricingModel === "sqft") {
        estimatedCost = Math.round(areaInSqFt * service.price);
    } else {
        estimatedCost = service.price;
    }

    const ServiceIcon = service.icon;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-6"
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

            {/* Modal */}
            <motion.div
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "100%" }}
                transition={{
                    type: "spring",
                    damping: 25,
                    stiffness: 300,
                }}
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
                className="relative w-full max-w-lg rounded-t-2xl md:rounded-2xl bg-white/95 backdrop-blur-2xl border-t md:border border-zinc-200 shadow-[0_-8px_40px_rgba(0,0,0,0.12)] md:shadow-[0_24px_80px_rgba(0,0,0,0.15)] overflow-hidden"
            >
                {/* Top edge highlight */}
                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />

                {/* Subtle corner glow */}
                <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-teal-100/50 blur-[80px] pointer-events-none" />

                {/* ─── Header ─── */}
                <div className="relative flex items-start justify-between p-5 md:p-6 pb-0">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl bg-zinc-50 border border-zinc-100 shadow-sm shrink-0">
                            <ServiceIcon className="w-5 h-5 text-zinc-500" />
                        </div>
                        <div>
                            <h3 className="text-[17px] md:text-lg font-semibold tracking-[-0.01em] text-zinc-900 leading-tight">
                                {service.title}
                            </h3>
                            <p className="text-[11px] md:text-[12px] text-zinc-500 mt-0.5">
                                Get an instant cost estimate
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-100/50 text-zinc-400 hover:text-zinc-800 hover:bg-zinc-100 transition-all duration-200 -mt-1 -mr-1"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>

                {/* ─── Form ─── */}
                <div className="relative p-5 md:p-6 space-y-6">
                    {/* Rate info */}
                    <div className="flex items-center gap-2 px-3.5 py-3 rounded-xl bg-zinc-50 border border-zinc-100">
                        <Calculator className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                        <span className="text-[13px] text-zinc-500">
                            {service.pricingModel === "sqft" ? "Rate: " : "Price: "}
                            <span className="text-zinc-900 font-medium">
                                PKR {service.price.toLocaleString("en-PK")}
                            </span>{" "}
                            {service.pricingModel === "sqft" ? "per sq ft" : "Starting From"}
                        </span>
                    </div>

                    {/* Area input (Only for sqft model) */}
                    {service.pricingModel === "sqft" && (
                        <div className="space-y-3">
                            <label className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.15em] uppercase text-zinc-400">
                                <Ruler className="w-3 h-3" />
                                Property Area
                            </label>
                            <div className="flex flex-col md:flex-row gap-3">
                                <input
                                    type="number"
                                    min="0"
                                    step="any"
                                    placeholder="Enter area"
                                    value={areaValue}
                                    onChange={(e) => setAreaValue(e.target.value)}
                                    // text-base prevents iOS zoom
                                    className={cn(
                                        "w-full px-4 py-3.5 rounded-xl text-base md:text-[15px] font-medium text-zinc-900 placeholder:text-zinc-300",
                                        "bg-white border border-zinc-200 shadow-sm",
                                        "focus:outline-none focus:border-zinc-400 focus:ring-4 focus:ring-zinc-100",
                                        "transition-all duration-300",
                                        "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                    )}
                                />
                                {/* Unit selector - Scrolls horizontally on mobile if needed */}
                                <div className="flex rounded-xl overflow-x-auto border border-zinc-200 bg-zinc-50 shrink-0 scrollbar-hide">
                                    {units.map((unit) => (
                                        <button
                                            key={unit}
                                            onClick={() => setSelectedUnit(unit)}
                                            className={cn(
                                                "px-4 py-3 text-[13px] font-semibold tracking-[0.02em] whitespace-nowrap transition-all duration-200 flex-1 md:flex-none",
                                                selectedUnit === unit
                                                    ? "bg-white text-zinc-900 shadow-sm border border-zinc-200 rounded-lg my-0.5 mx-0.5"
                                                    : "text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100"
                                            )}
                                        >
                                            {unit}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Conversion reference */}
                    {service.pricingModel === "sqft" && numericArea > 0 && selectedUnit !== "sq ft" && (
                        <motion.p
                            initial={{ opacity: 0, y: 4 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-[12px] text-zinc-400 -mt-2"
                        >
                            ≈ {areaInSqFt.toLocaleString("en-PK", { maximumFractionDigits: 0 })} sq ft
                        </motion.p>
                    )}

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-zinc-100 to-transparent" />

                    {/* ─── Cost Estimate ─── */}
                    <div className="space-y-3 pb-8 md:pb-0">
                        <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-zinc-400">
                            Estimated Cost
                        </span>

                        <AnimatePresence mode="wait">
                            {(service.pricingModel === "sqft" && numericArea > 0) || service.pricingModel !== "sqft" ? (
                                <motion.div
                                    key="cost"
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="space-y-1"
                                >
                                    <div className="text-[32px] md:text-4xl font-semibold tracking-[-0.03em] text-zinc-900 leading-none">
                                        {service.pricingModel === "starting_from" && <span className="text-lg text-zinc-500 font-normal mr-2 align-middle">From</span>}
                                        {formatPKR(estimatedCost)}
                                    </div>
                                    <p className="text-[12px] text-zinc-400">
                                        {service.pricingModel === "sqft"
                                            ? `${areaInSqFt.toLocaleString("en-PK", { maximumFractionDigits: 0 })} sq ft × PKR ${service.price}/sq ft`
                                            : "Base price, subject to inspection"
                                        }
                                    </p>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="empty"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-2xl font-semibold tracking-[-0.02em] text-zinc-200"
                                >
                                    —
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Disclaimer */}
                    <p className="text-[11px] text-zinc-400 leading-relaxed">
                        * This is an approximate estimate. Final pricing may vary based on
                        site inspection, material requirements, and project complexity.
                    </p>

                    {/* CTA — WhatsApp */}
                    <a
                        href={
                            (service.pricingModel === "sqft" && numericArea > 0) || service.pricingModel !== "sqft"
                                ? `https://wa.me/923206377227?text=${encodeURIComponent(
                                    service.pricingModel === "sqft"
                                        ? `Hi, I'd like a detailed quote for *${service.title}*.\n\nProperty Area: ${numericArea} ${selectedUnit}${selectedUnit !== "sq ft" ? ` (≈ ${areaInSqFt.toLocaleString("en-PK", { maximumFractionDigits: 0 })} sq ft)` : ""}\nEstimated Cost: ${formatPKR(estimatedCost)}\n\nPlease share final pricing after site inspection.`
                                        : `Hi, I'd like a detailed quote for *${service.title}*.\n\nType: Fixed/Starting Price Service\nBase Price: ${formatPKR(estimatedCost)}\n\nPlease share final pricing after site inspection.`
                                )}`
                                : "#"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(service.pricingModel === "sqft" && numericArea > 0) || service.pricingModel !== "sqft" ? onClose : undefined}
                        className={cn(
                            "group flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-[14px] font-semibold transition-all duration-300",
                            (service.pricingModel === "sqft" && numericArea > 0) || service.pricingModel !== "sqft"
                                ? "bg-teal-700 text-white hover:bg-teal-600 shadow-md hover:shadow-lg"
                                : "bg-zinc-100 text-zinc-300 pointer-events-none"
                        )}
                    >
                        Request Detailed Quote
                        <ArrowRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300" />
                    </a>
                </div>
            </motion.div>
        </motion.div>
    );
}

/* ════════════════════════════════════════════════
   Services Section (Single Column / Squircle Masking)
   ════════════════════════════════════════════════ */
export function ServicesSection() {
    const [selectedService, setSelectedService] = useState<Service | null>(null);
    const containerRef = useRef<HTMLElement>(null);

    const handleClose = useCallback(() => setSelectedService(null), []);

    return (
        <>
            <section id="services" ref={containerRef} className="relative bg-teal-50 overflow-hidden py-24 md:py-32">
                {/* SVG Definition for Squircle Clip Path - The "Superellipse" */}
                {/* m = 4 (Hyperellipse/Squircle standard for UI) */}
                <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
                    <defs>
                        <clipPath id="squircle-clip" clipPathUnits="objectBoundingBox">
                            <path d="M 0.5,1
                                     C 0.1,1 0,0.9 0,0.5
                                     C 0,0.1 0.1,0 0.5,0
                                     C 0.9,0 1,0.1 1,0.5
                                     C 1,0.9 0.9,1 0.5,1
                                     Z" />
                        </clipPath>
                    </defs>
                </svg>

                {/* Subtile Grid Background */}
                <div
                    className="absolute inset-0 opacity-[0.3]"
                    style={{
                        backgroundImage: `linear-gradient(#c8e6e6 1px, transparent 1px), linear-gradient(90deg, #c8e6e6 1px, transparent 1px)`,
                        backgroundSize: "64px 64px",
                        maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)"
                    }}
                />

                <div className="relative z-20 mx-auto max-w-7xl px-6 md:px-10">
                    {/* ─── Header ─── */}
                    <div className="mb-24 md:mb-32 space-y-6 text-center max-w-3xl mx-auto">
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
                                Our Expertise
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
                            Engineered for <br />
                            <span className="text-teal-900">Total Protection.</span>
                        </motion.h2>

                        <motion.p
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            custom={2}
                            className="text-base md:text-[17px] text-zinc-600 leading-[1.75] max-w-xl mx-auto"
                        >
                            We deliver industry-leading waterproofing and insulation solutions,
                            combining advanced chemical science with precision application.
                        </motion.p>
                    </div>

                    {/* ─── Services Stack ─── */}
                    <div className="relative space-y-16 md:space-y-32">
                        <ServicePathLine containerRef={containerRef} numServices={services.length} />
                        {services.map((service, i) => {
                            const isOdd = i % 2 !== 0;
                            return (
                                <motion.div
                                    key={service.title}
                                    initial={{ opacity: 0, y: 48 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.25 }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    className={cn(
                                        "flex flex-col gap-12 md:gap-20 items-center",
                                        isOdd ? "md:flex-row-reverse" : "md:flex-row"
                                    )}
                                >
                                    {/* Image Side (Squircle Mask) */}
                                    <div className="flex-1 w-full max-w-xl relative group cursor-pointer" onClick={() => setSelectedService(service)}>
                                        {/* Decorative Shadow/Glow behind the Squircle */}
                                        <div
                                            className="absolute inset-4 bg-teal-200/40 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                                        />

                                        <div
                                            className="relative aspect-[4/3] w-full bg-white shadow-2xl transition-transform duration-700 group-hover:scale-[1.02] group-hover:-rotate-1"
                                            style={{ clipPath: "url(#squircle-clip)" }}
                                        >
                                            <div className="absolute inset-0 bg-zinc-200 animate-pulse" />
                                            <Image
                                                src={service.image}
                                                alt={service.title}
                                                fill
                                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                            />
                                            {/* Inner Highlight Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10 opacity-60 pointer-events-none" />
                                        </div>
                                    </div>

                                    {/* Content Side */}
                                    <div className="flex-1 w-full text-center md:text-left space-y-6 md:space-y-8 pl-0 md:px-6">


                                        <div className="space-y-4">
                                            <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">
                                                {service.title}
                                            </h3>

                                            {/* DESKTOP: Smooth Word Reveal - Finishes at 50% so you don't scroll too high */}
                                            <div className="hidden md:block">
                                                <WordBlurReveal
                                                    className="text-lg text-zinc-600 leading-relaxed max-w-lg mx-auto md:mx-0"
                                                    offset={["start 85%", "start 50%"]}
                                                >
                                                    {service.description}
                                                </WordBlurReveal>
                                            </div>

                                            {/* MOBILE: Simple performant fade-up to prevent stuttering/lag */}
                                            <motion.p
                                                initial={{ opacity: 0, y: 10 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true, amount: 0.5 }}
                                                transition={{ duration: 0.5 }}
                                                className="block md:hidden text-base text-zinc-600 leading-relaxed max-w-lg mx-auto"
                                            >
                                                {service.description}
                                            </motion.p>
                                        </div>



                                        <div className="pt-4">
                                            <button
                                                onClick={() => setSelectedService(service)}
                                                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900 text-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:bg-zinc-700 hover:scale-[1.03] hover:-translate-y-0.5 active:scale-[0.97] hover:ring-2 hover:ring-white hover:ring-offset-2 hover:ring-offset-teal-50"
                                            >
                                                <span className="relative z-10 text-sm font-semibold tracking-wide">
                                                    Calculate Estimate
                                                </span>
                                                <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section >

            {/* ─── Quotation Modal ─── */}
            <AnimatePresence>
                {
                    selectedService && (
                        <QuotationModal
                            service={selectedService}
                            onClose={handleClose}
                        />
                    )
                }
            </AnimatePresence >
        </>
    );
}
