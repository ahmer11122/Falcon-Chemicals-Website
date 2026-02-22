"use client";
// Force re-index for lucide-react resolution
import React from "react";
import { ArrowRight, FlaskConical } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const services = [
    { label: "Roof Leakage Solutions", href: "#" },
    { label: "Termite & Heat Proofing", href: "#" },
    { label: "Water Tank Waterproofing", href: "#" },
    { label: "Bathroom Leakage Repair", href: "#" },
    { label: "Walls Water & Heat Proofing", href: "#" },
];

const companyLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "Gallery", href: "/#gallery" },
];

const legalLinks = [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
];

export function FooterSection() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative border-t border-zinc-200 bg-white pt-24 pb-12 font-outfit overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-6 md:px-10 z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
                    {/* Brand Column (Span 4) */}
                    <div className="lg:col-span-4 space-y-6">
                        <Link href="/" className="flex items-center gap-3 group" prefetch={true}>
                            <span className="text-2xl font-bold text-zinc-900 tracking-tight">
                                Falcon Chemicals
                            </span>
                        </Link>
                        <p className="text-zinc-600 text-sm leading-relaxed max-w-sm">
                            Premium chemical construction solutions engineered for durability. We protect your structures with advanced waterproofing and heat-proofing technologies.
                        </p>
                        <div className="flex items-center gap-3 pt-4">
                            {/* Facebook */}
                            <a
                                href="https://www.facebook.com/share/p/1aSR3wV1ow/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/icon p-2 rounded-full bg-white border border-zinc-200 hover:border-blue-500 hover:shadow-md transition-all duration-300 ease-in-out cursor-pointer"
                                aria-label="Facebook"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-5 h-5 text-zinc-600 group-hover/icon:text-[#1877F2] transition-colors duration-300"
                                >
                                    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036c-2.148 0-2.971.747-2.971 2.28v1.69h4.757l-.871 3.667h-3.886v7.98c5.093-.773 9-5.19 9-10.381 0-5.833-4.729-10.562-10.562-10.562-5.833 0-10.562 4.729-10.562 10.562 0 5.191 3.907 9.608 9 10.381z" />
                                </svg>
                            </a>
                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/923206377227"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/icon p-2 rounded-full bg-white border border-zinc-200 hover:border-green-500 hover:shadow-md transition-all duration-300 ease-in-out cursor-pointer"
                                aria-label="WhatsApp"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-5 h-5 text-zinc-600 group-hover/icon:text-[#25D366] transition-colors duration-300"
                                >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Company Links (Span 2) */}
                    <div className="lg:col-span-2 space-y-6">
                        <h3 className="text-zinc-900 font-semibold text-lg tracking-wide">Company</h3>
                        <ul className="space-y-3">
                            {companyLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        prefetch={true}
                                        className="text-zinc-600 hover:text-teal-700 text-sm transition-colors duration-200 flex items-center gap-1 group w-fit"
                                    >
                                        <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-teal-700" />
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                                            {link.label}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services (Span 3) */}
                    <div className="lg:col-span-3 space-y-6">
                        <h3 className="text-zinc-900 font-semibold text-lg tracking-wide">Services</h3>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service.label}>
                                    <Link
                                        href={service.href}
                                        prefetch={true}
                                        className="text-zinc-600 hover:text-teal-700 text-sm transition-colors duration-200 flex items-center gap-2 group w-fit"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-zinc-400 group-hover:bg-teal-700 transition-colors duration-300" />
                                        <span>{service.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact (Span 3) */}
                    <div className="lg:col-span-3 space-y-6">
                        <h3 className="text-zinc-900 font-semibold text-lg tracking-wide">Contact</h3>
                        <div className="space-y-5">
                            <div className="flex items-start gap-4 group">
                                <div>
                                    <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider mb-0.5">Phone</p>
                                    <a href="tel:+923206377227" className="text-zinc-700 hover:text-zinc-900 transition-colors font-medium text-sm">
                                        +92 320 6377227
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div>
                                    <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider mb-2">Location</p>
                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-[11px] text-zinc-500 font-semibold mb-1">Islamabad Office</p>
                                            <p className="text-zinc-600 text-sm leading-snug">
                                                Ghauri town phase 5 Islamabad
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-[11px] text-zinc-500 font-semibold mb-1">Lahore Office</p>
                                            <p className="text-zinc-600 text-sm leading-snug">
                                                Pak Arab Commercial Area Ferozpur road Lahore
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-zinc-200 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
                    <p className="text-zinc-500 text-sm">
                        © {currentYear} Falcon Chemical Construction. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 justify-center md:justify-start">
                        {legalLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                prefetch={true}
                                className="text-zinc-500 hover:text-teal-700 text-sm transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
