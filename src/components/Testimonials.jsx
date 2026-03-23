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
            className="py-24 lg:py-32 bg-[#282828]"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-[#D4A76A] text-xs tracking-[0.32em] uppercase mb-4">
                        Client Trust
                    </p>
                    <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-white/50 text-base">
                        Built on relationships, strengthened through trust.
                    </p>
                </motion.div>

                {/* Testimonial Card */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative bg-[#1E1E1E] border border-[#D4A76A]/15 p-10 lg:p-14">
                        {/* Giant Quote Mark */}
                        <div className="absolute top-6 left-10 text-[120px] leading-none font-light text-[#D4A76A]/10 select-none">
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
                                    className="relative z-10 text-white/80 text-lg md:text-xl font-light leading-relaxed mb-10 italic"
                                >
                                    &ldquo;{active.quote}&rdquo;
                                </blockquote>

                                <div className="flex items-center gap-4">
                                    <img
                                        src={active.avatar}
                                        alt={active.name}
                                        className="w-12 h-12 rounded-full object-cover border-2 border-[#D4A76A]/30"
                                    />
                                    <div>
                                        <p className="text-white font-semibold text-sm" data-testid="testimonial-author">
                                            {active.name}
                                        </p>
                                        <p className="text-[#D4A76A] text-xs mt-0.5">{active.title}</p>
                                        <p className="text-white/40 text-xs mt-0.5">{active.project}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Arrows */}
                        <div className="flex gap-3 justify-end mt-8">
                            <button
                                onClick={() => navigate(-1)}
                                data-testid="testimonial-prev"
                                className="w-10 h-10 border border-[#D4A76A]/30 flex items-center justify-center text-[#D4A76A] hover:bg-[#D4A76A] hover:text-[#1E1E1E] transition-all duration-200"
                            >
                                <ChevronLeft size={16} />
                            </button>
                            <button
                                onClick={() => navigate(1)}
                                data-testid="testimonial-next"
                                className="w-10 h-10 border border-[#D4A76A]/30 flex items-center justify-center text-[#D4A76A] hover:bg-[#D4A76A] hover:text-[#1E1E1E] transition-all duration-200"
                            >
                                <ChevronRight size={16} />
                            </button>
                        </div>
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-6">
                        {testimonials.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => { setDirection(idx > current ? 1 : -1); setCurrent(idx); }}
                                className={`h-1 transition-all duration-300 ${idx === current ? "w-8 bg-[#D4A76A]" : "w-4 bg-[#D4A76A]/30"}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
