"use client";
import React from "react";

export interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

/* ─── Minimal Testimonial Card ─── */
export const TestimonialCard = ({ text, name, role }: Testimonial) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="relative flex-shrink-0 w-[280px] md:w-[360px] p-5 md:p-7 rounded-2xl border border-zinc-200 bg-zinc-50/80 group transition-all duration-300 hover:border-teal-300 hover:shadow-md">
      {/* Decorative quote mark */}
      <span
        className="absolute top-4 right-5 text-[64px] leading-none font-serif text-teal-50 select-none pointer-events-none transition-colors duration-300 group-hover:text-teal-100"
        aria-hidden="true"
      >
        &ldquo;
      </span>

      {/* Star Rating */}
      <div className="flex gap-0.5 mb-3">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Testimonial text */}
      <p className="relative text-[15px] text-zinc-600 leading-[1.7] mb-5 line-clamp-4">
        {text}
      </p>

      {/* Author */}
      <div className="relative flex items-center gap-3">
        <div className="flex items-center justify-center h-9 w-9 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold shrink-0 transition-colors duration-300 group-hover:bg-teal-700 group-hover:text-white">
          {initials}
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-zinc-900 leading-tight">
            {name}
          </span>
          <span className="text-xs text-zinc-400 leading-tight">{role}</span>
        </div>
      </div>
    </div>
  );
};

/* ─── Horizontal Marquee Row ─── */
export const MarqueeRow = ({
  testimonials,
  reverse = false,
  duration = 40,
}: {
  testimonials: Testimonial[];
  reverse?: boolean;
  duration?: number;
}) => {
  // Double the testimonials for seamless infinite loop
  const doubled = [...testimonials, ...testimonials];

  return (
    <div className="relative w-full overflow-hidden group/marquee">
      {/* Left gradient mask */}
      <div className="absolute left-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      {/* Right gradient mask */}
      <div className="absolute right-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div
        className={`flex gap-4 md:gap-5 w-max ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        {doubled.map((testimonial, i) => (
          <TestimonialCard key={`${testimonial.name}-${i}`} {...testimonial} />
        ))}
      </div>
    </div>
  );
};
