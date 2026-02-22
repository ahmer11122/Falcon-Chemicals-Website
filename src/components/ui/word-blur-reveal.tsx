"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";

interface WordBlurRevealProps {
    children: string;
    className?: string;
    activeWordStyles?: { word: string; className: string }[];
    offset?: any;
}

export function WordBlurReveal({
    children,
    className = "",
    activeWordStyles = [],
    offset,
}: WordBlurRevealProps) {
    const words = children.split(" ");
    const containerRef = useRef<HTMLParagraphElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: offset ?? (["start 90%", "end 60%"] as any),
    });

    // Apply a spring to the scroll progress for that buttery smooth lag feel
    const springProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <p ref={containerRef} className={className}>
            {words.map((word, i) => {
                // Calculate overlapping ranges for a wave effect, not typewriter
                // Each word's animation starts before the previous one finishes
                const start = i / words.length;
                // Extend the end point slightly beyond what a uniform division would be to create overlap
                // The earlier a word appears, the longer its tail overlap factor
                const end = Math.min(start + (2.5 / words.length), 1);

                let wordClassName = "inline-block";
                for (const style of activeWordStyles) {
                    if (word.includes(style.word)) {
                        wordClassName = `inline-block ${style.className}`;
                    }
                }

                return (
                    <React.Fragment key={i}>
                        <ScrollLinkedWord
                            word={word}
                            progress={springProgress}
                            range={[start, end]}
                            className={wordClassName}
                        />
                        {i < words.length - 1 && " "}
                    </React.Fragment>
                );
            })}
        </p>
    );
}

function ScrollLinkedWord({
    word,
    progress,
    range,
    className,
}: {
    word: string;
    progress: MotionValue<number>;
    range: [number, number];
    className: string;
}) {
    // Translate the progress through the specified range
    const opacity = useTransform(progress, range, [0.2, 1]);
    const blurValue = useTransform(progress, range, [12, 0]);
    const y = useTransform(progress, range, [20, 0]);

    const blur = useTransform(blurValue, (v) => `blur(${v}px)`);

    return (
        <motion.span
            style={{
                opacity,
                filter: blur,
                y,
                willChange: "opacity, filter, transform"
            }}
            className={className}
        >
            {word}
        </motion.span>
    );
}
