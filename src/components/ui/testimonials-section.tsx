"use client";
import { MarqueeRow, Testimonial } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials: Testimonial[] = [
    {
        text: "بہت ہی زبردست سروس! چھت کی لیکیج کا مسئلہ ہمیشہ کے لیے حل ہو گیا اور اب گھر کا درجہ حرارت بھی کافی بہتر ہے۔",
        image: "",
        name: "Muhammad Siddique",
        role: "Lahore, Punjab",
    },
    {
        text: "The water tank treatment was professional and efficient. No more leakages or dampness issues. Highly satisfied with the quality of work.",
        image: "",
        name: "Ayesha Malik",
        role: "Islamabad",
    },
    {
        text: "Falcon Chemicals ne hamare ghar ka termite masla bohat achi tarah hal kiya. Team bohat professional thi aur kaam safai se kiya.",
        image: "",
        name: "Kamran Akmal",
        role: "Peshawar, KPK",
    },
    {
        text: "واش روم کی لیکیج کی وجہ سے ہم بہت پریشان تھے، لیکن ان کے بغیر توڑ پھوڑ کے علاج نے ہمارا مسئلہ حل کر دیا۔ بہترین کام!",
        image: "",
        name: "Zainab Bibi",
        role: "Muzaffarabad, Azad Kashmir",
    },
    {
        text: "Garmi ki wajah se upar wala portion bohat garam hota tha, par heat proofing k baad kafi sukoon mil gaya hai. Shukriya Falcon team.",
        image: "",
        name: "Hafiz Ahmed",
        role: "Multan, Punjab",
    },
    {
        text: "Their wall waterproofing system is exceptional. It's been over a year and we haven't seen any signs of dampness or paint peeling.",
        image: "",
        name: "Sana Javed",
        role: "Islamabad",
    },
    {
        text: "دیمک کے خاتمے کے لیے ان کی سروس لاجواب ہے۔ اب ہمیں فرنیچر کے خراب ہونے کا کوئی ڈر نہیں رہا۔",
        image: "",
        name: "Rashid Ali",
        role: "Abbottabad, KPK",
    },
    {
        text: "Professional service at competitive rates. They explained the entire process clearly and delivered exactly what was promised on time.",
        image: "",
        name: "Fatima Noor",
        role: "Mirpur, Azad Kashmir",
    },
    {
        text: "Industrial tank waterproofing k liye inho ne bohat acha kaam kiya. Advanced chemical coatings use ki hain jo waqai asar dikha rahi hain.",
        image: "",
        name: "Bilal Sheikh",
        role: "Faisalabad, Punjab",
    },
];

const firstRow = testimonials.slice(0, 5);
const secondRow = testimonials.slice(4, 9);

export const TestimonialsSection = () => {
    return (
        <section className="bg-white py-20 md:py-28 overflow-hidden">
            <div className="container mx-auto px-4">
                {/* ─── Section Header ─── */}
                <div className="mb-14 md:mb-20 space-y-6 text-center max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-3"
                    >
                        <div className="h-px w-8 bg-gradient-to-r from-transparent to-teal-600/60" />
                        <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-zinc-500">
                            Trusted Clients
                        </span>
                        <div className="h-px w-8 bg-gradient-to-l from-transparent to-cyan-600/60" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-[3.5rem] font-semibold leading-[1.1] tracking-[-0.02em] text-zinc-900"
                    >
                        Voice of <br />
                        <span className="text-teal-800/50">Our Clients.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className="text-base md:text-[17px] text-zinc-500 leading-[1.75] max-w-xl mx-auto"
                    >
                        See how Falcon Chemicals is protecting Pakistani homes and businesses with
                        advanced waterproofing and insulation solutions.
                    </motion.p>
                </div>

                {/* ─── Marquee Rows ─── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="space-y-4 md:space-y-5"
                >
                    <MarqueeRow testimonials={firstRow} duration={45} />
                    <div className="hidden md:block">
                        <MarqueeRow testimonials={secondRow} duration={50} reverse />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
