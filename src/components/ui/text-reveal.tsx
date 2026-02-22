"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealProps {
    children: string;
    className?: string;
    delay?: number;
    staggerSpeed?: number;
    blur?: boolean;
    once?: boolean;
    as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

export function TextReveal({
    children,
    className,
    delay = 0,
    staggerSpeed = 0.06,
    blur = true,
    once = true,
    as: Tag = "h2",
}: TextRevealProps) {
    const words = children.split(" ");

    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: staggerSpeed,
                delayChildren: delay,
            },
        },
    };

    const wordVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 20,
            filter: blur ? "blur(8px)" : "blur(0px)",
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount: 0.3 }}
        >
            <Tag className={cn(className)}>
                {words.map((word, i) => (
                    <motion.span
                        key={`${word}-${i}`}
                        variants={wordVariants}
                        className="inline-block mr-[0.25em]"
                    >
                        {word}
                    </motion.span>
                ))}
            </Tag>
        </motion.div>
    );
}
