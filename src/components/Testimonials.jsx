import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
        id: 1,
        quote: "Gopal Charan delivered our industrial project with precision, transparency, and unmatched quality. Their professionalism reflects decades of expertise.",
        name: "Ramesh Patel",
        title: "Industrial Investor",
        project: "Industrial Landmark Kuha | Ahmedabad",
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=120&q=80",
    },
    {
        id: 2,
        quote: "Working with Gopal Charan was a truly exceptional experience. Their attention to detail, commitment to timelines, and quality of construction is unparalleled.",
        name: "Vikram Shah",
        title: "Commercial Developer",
        project: "Industrial Hub Bakrol | Ahmedabad",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80",
    },
];

export function Testimonials() {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);

    const navigate = (dir) => {
        setDirection(dir);
        setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length);
    };

    const active = testimonials[current];

    return (
        <section
            data-testid="testimonials-section"
            className="py-20 md:py-24 bg-[#F2F1EE]"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="flex items-start justify-between gap-6 mb-12 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-[#2C2D30] text-xs tracking-[0.30em] uppercase mb-3 font-medium">
                            Client Trust
                        </p>
                        <h2 className="text-3xl md:text-[50px] font-semibold text-[#1D2025] mb-4 leading-tight">
                            What Our Clients Say
                        </h2>
                        <p className="text-[#2C2D30] text-base md:text-[22px] leading-snug">
                            Built on relationships, strengthened through trust.
                        </p>
                    </motion.div>

                    <div className="hidden md:flex gap-3">
                        <button
                            onClick={() => navigate(-1)}
                            data-testid="testimonial-prev"
                            className="w-16 h-16 rounded-full bg-[#DED0B8] text-[#7D7D80] flex items-center justify-center hover:bg-[#D2C2A8] transition-colors duration-200"
                        >
                            <ChevronLeft size={28} />
                        </button>
                        <button
                            onClick={() => navigate(1)}
                            data-testid="testimonial-next"
                            className="w-16 h-16 rounded-full bg-[#DED0B8] text-[#7D7D80] flex items-center justify-center hover:bg-[#D2C2A8] transition-colors duration-200"
                        >
                            <ChevronRight size={28} />
                        </button>
                    </div>
                </div>

                <div className="grid md:grid-cols-[150px_1fr] items-start gap-6 md:gap-10">
                    <div className="text-[120px] md:text-[170px] leading-none text-[#DED0B8] font-semibold select-none">
                        &ldquo;
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active.id}
                            initial={{ opacity: 0, y: direction > 0 ? 20 : -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: direction > 0 ? -20 : 20 }}
                            transition={{ duration: 0.4 }}
                        >
                            <blockquote
                                data-testid="testimonial-quote"
                                className="text-[#2A2D33] text-xl md:text-[36px] leading-tight font-semibold mb-8 md:mb-10 text-center md:text-right"
                            >
                                &ldquo;{active.quote}&rdquo;
                            </blockquote>

                            <div className="text-center md:text-right">
                                <p className="text-[#1F2126] text-xl md:text-[28px] font-semibold" data-testid="testimonial-author">
                                    {active.name}
                                </p>
                                <p className="text-[#7F8086] text-base md:text-[20px] mt-1">{active.title}</p>
                                <p className="text-[#7F8086] text-sm md:text-[18px] mt-1">{active.project}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="flex md:hidden gap-3 justify-end mt-8">
                    <button
                        onClick={() => navigate(-1)}
                        data-testid="testimonial-prev-mobile"
                        className="w-12 h-12 rounded-full bg-[#DED0B8] text-[#7D7D80] flex items-center justify-center"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={() => navigate(1)}
                        data-testid="testimonial-next-mobile"
                        className="w-12 h-12 rounded-full bg-[#DED0B8] text-[#7D7D80] flex items-center justify-center"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
}
