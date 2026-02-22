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
        <div className="relative w-full bg-zinc-50 dark:bg-zinc-900 overflow-hidden py-5 sm:py-6 flex items-center border-b border-zinc-200 dark:border-zinc-800/50">

            {/* Decorative Gradients for smooth fade out at edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-zinc-50 dark:from-zinc-900 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-zinc-50 dark:from-zinc-900 to-transparent z-10 pointer-events-none" />

            {/* Marquee Track */}
            <div className="flex w-fit animate-marquee hover:[animation-play-state:paused] transition-all duration-300 items-center">
                {duplicatedServices.map((service, idx) => (
                    <div
                        key={idx}
                        className="flex items-center gap-6 sm:gap-10 group cursor-default"
                    >
                        <span className="text-xs sm:text-sm font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-[0.2em] group-hover:text-zinc-900 dark:group-hover:text-zinc-200 transition-colors duration-300 whitespace-nowrap font-[family-name:var(--font-outfit)] pl-6 sm:pl-10">
                            {service}
                        </span>

                        {/* Minimal Separator */}
                        <span className="text-zinc-300 dark:text-zinc-700 text-lg font-light select-none">
                            /
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
