"use client";
import React from "react";
import { motion, useInView } from "framer-motion";

interface TimelineContentProps<T extends React.ElementType> {
    as?: T;
    animationNum?: number;
    timelineRef?: React.RefObject<any>;
    customVariants?: any;
    children: React.ReactNode;
    className?: string;
}

export const TimelineContent = <T extends React.ElementType = "div">({
    as,
    animationNum,
    timelineRef,
    customVariants,
    children,
    className,
    ...props
}: TimelineContentProps<T> & React.ComponentPropsWithoutRef<T>) => {
    const Component = motion.create ? motion.create(as || "div") : motion(as || "div") as any;

    return (
        <Component
            variants={customVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={animationNum}
            className={className}
            {...props}
        >
            {children}
        </Component>
    );
};
