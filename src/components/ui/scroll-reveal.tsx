"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

type Direction = "up" | "down" | "left" | "right";

interface ScrollRevealProps {
    children: React.ReactNode;
    direction?: Direction;
    delay?: number;
    duration?: number;
    blur?: boolean;
    className?: string;
    once?: boolean;
    amount?: number;
}

const directionOffset: Record<Direction, { x: number; y: number }> = {
    up: { x: 0, y: 40 },
    down: { x: 0, y: -40 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
};

export function ScrollReveal({
    children,
    direction = "up",
    delay = 0,
    duration = 0.7,
    blur = false,
    className,
    once = true,
    amount = 0.2,
}: ScrollRevealProps) {
    const offset = directionOffset[direction];

    const variants: Variants = {
        hidden: {
            opacity: 0,
            x: offset.x,
            y: offset.y,
            filter: blur ? "blur(8px)" : "blur(0px)",
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
    };

    return (
        <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount }}
            className={cn(className)}
        >
            {children}
        </motion.div>
    );
}
