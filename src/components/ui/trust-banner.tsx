import React from "react";

export const servicesList = [
    "Heat Proofing",
    "Water Proofing",
    "Water Tank Treatment",
    "Washroom Treatment",
    "Walls Water & Heat Proofing",
    "Termite Control",
];

export function TrustBanner() {
    // Duplicate the list to create a seamless infinite loop
    const duplicatedServices = [...servicesList, ...servicesList, ...servicesList, ...servicesList];

    return (
        <div className="relative w-full bg-white overflow-hidden py-5 sm:py-6 flex items-center border-y border-zinc-100">

            {/* Decorative Gradients for smooth fade out at edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            {/* Marquee Track */}
            <div className="flex w-fit animate-marquee hover:[animation-play-state:paused] transition-all duration-300 items-center">
                {duplicatedServices.map((service, idx) => (
                    <div
                        key={idx}
                        className="flex items-center gap-6 sm:gap-10 group cursor-default"
                    >
                        <span className="text-xs sm:text-sm font-semibold text-zinc-400 uppercase tracking-[0.2em] group-hover:text-teal-700 transition-colors duration-300 whitespace-nowrap font-[family-name:var(--font-heading)] pl-6 sm:pl-10">
                            {service}
                        </span>

                        {/* Minimal Separator */}
                        <span className="text-teal-500 text-xs select-none animate-spin" style={{ animationDuration: "3s" }}>
                            ✱
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
