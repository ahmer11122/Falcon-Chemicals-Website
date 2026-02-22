"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ServicePathLineProps {
    containerRef: React.RefObject<HTMLElement | null>;
    numServices?: number;
}

function generatePath(numServices: number): string {
    const yStep = 200;

    // Organic feel: alternate between x=155 (right lean) and x=45 (left lean)
    // with asymmetric control points so it doesn't look like a sine wave
    let d = `M 100 0`;

    for (let i = 0; i < numServices; i++) {
        const isRight = i % 2 === 0;
        const peakX = isRight ? 158 : 42;
        const y0 = i * yStep;
        const y1 = y0 + yStep;
        const peakY = y0 + yStep * 0.5;

        // Asymmetric control points — entry steep, exit shallow
        d += ` C 100 ${y0 + yStep * 0.3}, ${peakX} ${peakY - yStep * 0.15}, ${peakX} ${peakY}`;
        d += ` C ${peakX} ${peakY + yStep * 0.15}, 100 ${y1 - yStep * 0.3}, 100 ${y1}`;
    }

    return d;
}

export function ServicePathLine({ containerRef, numServices = 6 }: ServicePathLineProps) {
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const height = numServices * 200;
    const pathString = generatePath(numServices);

    return (
        <div className="absolute inset-x-0 top-0 h-full hidden md:block z-0 pointer-events-none">
            <svg
                viewBox={`0 0 200 ${height}`}
                className="w-full h-full"
                // none = stretch to fill container, matching layout
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient id="path-gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0d9488" />
                        <stop offset="100%" stopColor="#22d3ee" />
                    </linearGradient>
                </defs>

                {/* The path itself */}
                <motion.path
                    d={pathString}
                    stroke="url(#path-gradient)"
                    strokeWidth="1.5"
                    fill="none"
                    opacity={0.35}
                    style={{ pathLength }}
                    strokeLinecap="round"
                />
            </svg>
        </div>
    );
}
