"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useSpring } from "framer-motion";
import {
    Menu,
    X,
    ArrowRight,
} from "lucide-react";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "Gallery", href: "/#gallery" },
];

export function GlassNavbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: "-50% 0px -50% 0px" }
        );

        const sections = document.querySelectorAll("section[id]");
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    // Click outside to close
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                mobileOpen &&
                navRef.current &&
                !navRef.current.contains(event.target as Node)
            ) {
                setMobileOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [mobileOpen]);

    // Close mobile menu on resize
    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth >= 768) setMobileOpen(false);
        };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    const closeMobile = useCallback(() => setMobileOpen(false), []);

    return (
        <nav
            ref={navRef}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
                scrolled ? "py-2" : "py-4"
            )}
        >
            <div className="mx-auto max-w-5xl px-4">
                <div
                    className={cn(
                        "relative rounded-2xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
                        // Dark frosted glass — visible against aurora bg
                        scrolled
                            ? "bg-black/60 backdrop-blur-2xl border border-white/[0.12] shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
                            : "bg-black/50 backdrop-blur-xl border border-white/[0.1] shadow-[0_4px_24px_rgba(0,0,0,0.2)]"
                    )}
                >
                    {/* Subtle top edge highlight */}
                    <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent" />

                    <div className="relative flex items-center justify-between px-5 py-3">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2.5 group" prefetch={true}>
                            <span className="text-[13px] font-semibold tracking-[0.12em] text-white/90 uppercase">
                                Falcon Chemicals
                            </span>
                        </Link>

                        {/* Desktop nav — centered, minimal */}
                        <div className="hidden md:flex items-center gap-0.5">
                            {navLinks.map((link) => {
                                const isActive =
                                    (link.href === "/" && activeSection === "") ||
                                    link.href === `/#${activeSection}` ||
                                    (pathname === link.href && activeSection === "");

                                return (
                                    <div
                                        key={link.label}
                                        className="relative"
                                    >
                                        <Link
                                            href={link.href}
                                            prefetch={true}
                                            data-active={isActive}
                                            className={cn(
                                                "relative flex items-center gap-1 px-3.5 py-1.5 text-[13px] font-medium rounded-lg transition-all duration-300",
                                                "text-white/55 hover:text-white/95",
                                                "hover:bg-white/[0.06]",
                                                "data-[active=true]:text-white data-[active=true]:bg-white/[0.08]"
                                            )}
                                        >
                                            {link.label}
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Right side — single clean CTA */}
                        <div className="hidden md:flex items-center">
                            <a
                                href="https://wa.me/923206377227"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative flex items-center gap-1.5 px-4 py-1.5 text-[13px] font-medium text-white/90 rounded-lg bg-white/[0.08] border border-white/[0.1] hover:bg-white/[0.13] hover:border-white/[0.18] transition-all duration-300"
                            >
                                Contact
                                <ArrowRight className="w-3 h-3 opacity-50 group-hover:opacity-90 group-hover:translate-x-0.5 transition-all duration-300" />
                            </a>
                        </div>

                        {/* Mobile toggle */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="md:hidden flex items-center justify-center w-8 h-8 rounded-lg text-white/50 hover:text-white/90 hover:bg-white/[0.06] transition-all duration-300"
                            aria-label="Toggle menu"
                        >
                            <div className="relative w-4 h-4">
                                <Menu
                                    className={cn(
                                        "w-4 h-4 absolute inset-0 transition-all duration-300",
                                        mobileOpen ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"
                                    )}
                                />
                                <X
                                    className={cn(
                                        "w-4 h-4 absolute inset-0 transition-all duration-300",
                                        mobileOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"
                                    )}
                                />
                            </div>
                        </button>
                    </div>

                    {/* Mobile menu — minimal, spacious */}
                    <div
                        className={cn(
                            "md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                            mobileOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
                        )}
                    >
                        <div className="border-t border-white/[0.08] px-4 py-4 space-y-1">
                            {navLinks.map((link) => {
                                const isActive =
                                    (link.href === "/" && activeSection === "") ||
                                    link.href === `/#${activeSection}` ||
                                    (pathname === link.href && activeSection === "");

                                return (
                                    <div key={link.label}>
                                        <Link
                                            href={link.href}
                                            prefetch={true}
                                            data-active={isActive}
                                            className={cn(
                                                "flex items-center justify-between px-4 py-3 text-[14px] font-medium text-white/70 hover:text-white hover:bg-white/[0.08] rounded-xl transition-all duration-300",
                                                "data-[active=true]:text-white data-[active=true]:bg-white/[0.08]"
                                            )}
                                            onClick={closeMobile}
                                        >
                                            {link.label}
                                        </Link>
                                    </div>
                                );
                            })}

                            {/* Mobile CTA */}
                            <div className="pt-4 mt-2 border-t border-white/[0.08]">
                                <a
                                    href="https://wa.me/923206377227"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-full px-4 py-3 text-[14px] font-semibold text-white bg-teal-600/80 border border-teal-500/40 rounded-xl hover:bg-teal-600 transition-all duration-300"
                                    onClick={closeMobile}
                                >
                                    Contact
                                    <ArrowRight className="w-4 h-4 opacity-70" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Premium Scroll Progress Bar - Contained within the pill */}
                <div className="absolute bottom-0 inset-x-0 h-[1px] overflow-hidden rounded-b-2xl opacity-60">
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-500 origin-left"
                        style={{ scaleX }}
                    />
                </div>
            </div>
        </nav>
    );
}
