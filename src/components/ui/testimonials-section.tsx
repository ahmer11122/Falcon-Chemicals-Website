"use client";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials = [
    {
        text: "بہت ہی زبردست سروس! چھت کی لیکیج کا مسئلہ ہمیشہ کے لیے حل ہو گیا اور اب گھر کا درجہ حرارت بھی کافی بہتر ہے۔",
        image: "https://images.unsplash.com/photo-1621243804936-775306a8f2e3?q=80&w=100&h=100&auto=format&fit=crop",
        name: "Muhammad Siddique",
        role: "Lahore, Punjab",
    },
    {
        text: "The water tank treatment was professional and efficient. No more leakages or dampness issues. Highly satisfied with the quality of work.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&h=100&auto=format&fit=crop",
        name: "Ayesha Malik",
        role: "Islamabad",
    },
    {
        text: "Falcon Chemicals ne hamare ghar ka termite masla bohat achi tarah hal kiya. Team bohat professional thi aur kaam safai se kiya.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&h=100&auto=format&fit=crop",
        name: "Kamran Akmal",
        role: "Peshawar, KPK",
    },
    {
        text: "واش روم کی لیکیج کی وجہ سے ہم بہت پریشان تھے، لیکن ان کے بغیر توڑ پھوڑ کے علاج نے ہمارا مسئلہ حل کر دیا۔ بہترین کام!",
        image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=100&h=100&auto=format&fit=crop",
        name: "Zainab Bibi",
        role: "Muzaffarabad, Azad Kashmir",
    },
    {
        text: "Garmi ki wajah se upar wala portion bohat garam hota tha, par heat proofing k baad kafi sukoon mil gaya hai. Shukriya Falcon team.",
        image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=100&h=100&auto=format&fit=crop",
        name: "Hafiz Ahmed",
        role: "Multan, Punjab",
    },
    {
        text: "Their wall waterproofing system is exceptional. It's been over a year and we haven't seen any signs of dampness or paint peeling.",
        image: "https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=100&h=100&auto=format&fit=crop",
        name: "Sana Javed",
        role: "Islamabad",
    },
    {
        text: "دیمک کے خاتمے کے لیے ان کی سروس لاجواب ہے۔ اب ہمیں فرنیچر کے خراب ہونے کا کوئی ڈر نہیں رہا۔",
        image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=100&h=100&auto=format&fit=crop",
        name: "Rashid Ali",
        role: "Abbottabad, KPK",
    },
    {
        text: "Professional service at competitive rates. They explained the entire process clearly and delivered exactly what was promised on time.",
        image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=100&h=100&auto=format&fit=crop",
        name: "Fatima Noor",
        role: "Mirpur, Azad Kashmir",
    },
    {
        text: "Industrial tank waterproofing k liye inho ne bohat acha kaam kiya. Advanced chemical coatings use ki hain jo waqai asar dikha rahi hain.",
        image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=100&h=100&auto=format&fit=crop",
        name: "Bilal Sheikh",
        role: "Faisalabad, Punjab",
    },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export const TestimonialsSection = () => {
    return (
        <section className="bg-white py-16 md:py-24 relative overflow-hidden">
            <div className="container z-10 mx-auto px-4">
                <div className="mb-12 md:mb-20 space-y-6 text-center max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-3"
                    >
                        <div className="h-px w-8 bg-gradient-to-r from-transparent to-blue-600/60" />
                        <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-zinc-500">
                            Trusted Clients
                        </span>
                        <div className="h-px w-8 bg-gradient-to-l from-transparent to-indigo-600/60" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-[3.5rem] font-semibold leading-[1.1] tracking-[-0.02em] text-zinc-900"
                    >
                        Voice of <br />
                        <span className="text-zinc-400">Our Clients.</span>
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

                <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] max-h-[740px] overflow-hidden">
                    <TestimonialsColumn testimonials={firstColumn} duration={20} />
                    <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={25} />
                    <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={22} />
                </div>
            </div>
        </section>
    );
};
