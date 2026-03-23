import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const stats = [
    { display: "45+", label: "Years of Excellence" },
    { display: "40+", label: "Landmark Projects" },
    { display: "2.4M+", label: "Sq Ft Developed" },
    { display: "100%", label: "Commitment to Quality" },
];

export function OurImpact() {
    return (
        <section
            data-testid="our-impact-section"
            className="py-24 lg:py-32 bg-[#1E1E1E] border-y border-[#D4A76A]/10"
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
                        Our Impact
                    </p>
                    <h2 className="text-4xl md:text-5xl font-light text-white mb-5">
                        Four Decades of Measurable Excellence
                    </h2>
                    <p className="text-white/50 text-base leading-relaxed">
                        Delivering scale, precision, and trust across every development.
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#D4A76A]/10">
                    {stats.map((stat, idx) => (
                        <StatCard key={idx} stat={stat} idx={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function StatCard({ stat, idx }) {
    const [visible, setVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setVisible(true), idx * 120);
                    observer.disconnect();
                }
            },
            { threshold: 0.4 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [idx]);

    return (
        <div
            ref={ref}
            data-testid={`stat-card-${idx}`}
            className={`bg-[#282828] text-center py-12 px-6 transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
            <div className="text-5xl lg:text-6xl font-light text-[#D4A76A] mb-3 tracking-tight">
                {stat.display}
            </div>
            <p className="text-white/55 text-sm tracking-wide">{stat.label}</p>
        </div>
    );
}
