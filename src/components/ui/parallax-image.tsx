"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface ParallaxImageProps {
    children: React.ReactNode;
    speed?: number;
    className?: string;
    reveal?: boolean;
}

export function ParallaxImage({
    children,
    speed = 0.15,
    className,
    reveal = true,
}: ParallaxImageProps) {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [speed * 100, speed * -100]);
    const clipPath = useTransform(
        scrollYProgress,
        [0, 0.3],
        reveal
            ? ["inset(100% 0% 0% 0%)", "inset(0% 0% 0% 0%)"]
            : ["inset(0% 0% 0% 0%)", "inset(0% 0% 0% 0%)"]
    );

    return (
        <div ref={ref} className={cn("overflow-hidden", className)}>
            <motion.div
                style={{ y, clipPath }}
                className="w-full h-full"
            >
                {children}
            </motion.div>
        </div>
    );
}
