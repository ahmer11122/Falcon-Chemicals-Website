"use client";
// Force re-index for lucide-react resolution
import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

import { useRef } from "react";

export function AboutSection() {
    const heroRef = useRef<HTMLElement>(null);
    const revealVariants = {
        visible: (i: number) => ({
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            transition: {
                delay: i * 0.4,
                duration: 0.5,
            },
        }),
        hidden: {
            filter: "blur(10px)",
            y: -20,
            opacity: 0,
        },
    };
    const scaleVariants = {
        visible: (i: number) => ({
            opacity: 1,
            filter: "blur(0px)",
            transition: {
                delay: i * 0.4,
                duration: 0.5,
            },
        }),
        hidden: {
            filter: "blur(10px)",
            opacity: 0,
        },
    };
    return (
        <section className="py-8 px-4 bg-[#f9f9f9]" ref={heroRef} id="about">
            <div className="max-w-6xl mx-auto">
                <div className="relative flex flex-col">
                    {/* Header with social icons */}
                    <div className="flex justify-between items-center mb-4 lg:mb-8 w-full lg:w-[85%] lg:absolute lg:top-4 z-10">
                        <div className="flex items-center gap-2 text-lg lg:text-xl">
                            <span className="text-black animate-spin">✱</span>
                            <TimelineContent
                                as="span"
                                animationNum={0}
                                timelineRef={heroRef}
                                customVariants={revealVariants}
                                className="text-sm font-medium text-gray-600"
                            >
                                WHO WE ARE
                            </TimelineContent>
                        </div>
                        {/* Social Icons */}
                        <div className="flex gap-3 lg:gap-4">
                            <TimelineContent
                                as="a"
                                animationNum={0}
                                timelineRef={heroRef}
                                customVariants={revealVariants}
                                href="https://www.facebook.com/share/p/1aSR3wV1ow/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/icon p-2 rounded-full bg-white border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all duration-300 ease-in-out cursor-pointer"
                                aria-label="Facebook"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-5 h-5 text-gray-600 group-hover/icon:text-[#1877F2] transition-colors duration-300"
                                >
                                    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036c-2.148 0-2.971.747-2.971 2.28v1.69h4.757l-.871 3.667h-3.886v7.98c5.093-.773 9-5.19 9-10.381 0-5.833-4.729-10.562-10.562-10.562-5.833 0-10.562 4.729-10.562 10.562 0 5.191 3.907 9.608 9 10.381z" />
                                </svg>
                            </TimelineContent>
                            <TimelineContent
                                as="a"
                                animationNum={1}
                                timelineRef={heroRef}
                                customVariants={revealVariants}
                                href="https://wa.me/923206377227"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/icon p-2 rounded-full bg-white border border-gray-200 hover:border-green-500 hover:shadow-md transition-all duration-300 ease-in-out cursor-pointer"
                                aria-label="WhatsApp"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-5 h-5 text-gray-600 group-hover/icon:text-[#25D366] transition-colors duration-300"
                                >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                                </svg>
                            </TimelineContent>
                        </div>
                    </div>

                    <TimelineContent
                        as="figure"
                        animationNum={4}
                        timelineRef={heroRef}
                        customVariants={scaleVariants}
                        className="relative group w-full"
                    >
                        <svg
                            className="w-full h-[250px] sm:h-[400px] md:h-[500px] lg:h-auto"
                            width={"100%"}
                            height={"100%"}
                            viewBox="0 0 100 40"
                            preserveAspectRatio="xMidYMid slice"
                        >
                            <defs>
                                <clipPath
                                    id="clip-inverted"
                                    clipPathUnits={"objectBoundingBox"}
                                >
                                    <path
                                        d="M0.0998072 1H0.422076H0.749756C0.767072 1 0.774207 0.961783 0.77561 0.942675V0.807325C0.777053 0.743631 0.791844 0.731953 0.799059 0.734076H0.969813C0.996268 0.730255 1.00088 0.693206 0.999875 0.675159V0.0700637C0.999875 0.0254777 0.985045 0.00477707 0.977629 0H0.902473C0.854975 0 0.890448 0.138535 0.850165 0.138535H0.0204424C0.00408849 0.142357 0 0.180467 0 0.199045V0.410828C0.0016 0.449045 0.0136283 0.46603 0.0204424 0.469745H0.0523086C0.0696245 0.471019 0.0735527 0.497877 0.0733523 0.511146V0.915605C0.0723903 0.983121 0.090588 1 0.0998072 1Z"
                                        fill="#D9D9D9"
                                    />
                                </clipPath>
                            </defs>
                            <image
                                clipPath="url(#clip-inverted)"
                                preserveAspectRatio="xMidYMid slice"
                                width={"100%"}
                                height={"100%"}
                                xlinkHref="/images/about-us.webp"
                            ></image>
                        </svg>
                    </TimelineContent>

                    {/* Stats */}
                    <div className="flex flex-wrap lg:justify-start justify-between items-center py-3 text-sm">
                        <TimelineContent
                            as="div"
                            animationNum={5}
                            timelineRef={heroRef}
                            customVariants={revealVariants}
                            className="flex gap-4"
                        >
                            <div className="flex items-center gap-2 mb-2 sm:text-base text-xs">
                                <AnimatedCounter target={25} suffix="+" className="text-amber-600 font-bold font-[family-name:var(--font-geist-mono)]" />
                                <span className="text-gray-600">years of excellence</span>
                                <span className="text-gray-300">|</span>
                            </div>
                            <div className="flex items-center gap-2 mb-2 sm:text-base text-xs">
                                <AnimatedCounter target={500} suffix="+" className="text-amber-600 font-bold font-[family-name:var(--font-geist-mono)]" />
                                <span className="text-gray-600">chemical solutions</span>
                            </div>
                        </TimelineContent>

                    </div>
                </div>
                {/* Main Content */}
                <div className="mt-8 flex flex-col items-center text-center max-w-4xl mx-auto">
                    <h1 className="sm:text-4xl md:text-5xl text-2xl !leading-[110%] font-semibold font-manrope text-gray-900 mb-8">
                        <VerticalCutReveal
                            splitBy="words"
                            staggerDuration={0.1}
                            staggerFrom="first"
                            reverse={true}
                            transition={{
                                type: "spring",
                                stiffness: 250,
                                damping: 30,
                                delay: 0.2,
                            }}
                        >
                            Precision chemistry for a world that demands more.
                        </VerticalCutReveal>
                    </h1>

                    <ScrollReveal delay={0.2} blur>
                        <div className="text-gray-600 sm:text-base text-sm text-left">
                            <p className="leading-relaxed font-[family-name:var(--font-manrope)]">
                                Falcon Chemical Construction provides permanent solutions for roof leakage, seepage, and heat. We serve homes, offices, factories, and more using imported chemical and polyester sheets. Our services include Walls Water & Heat Proofing, water tank treatments, and heat-proofing roofs with temperature control. We guarantee quality with a 5-year warranty across Punjab, KPK, and Azad Kashmir.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
