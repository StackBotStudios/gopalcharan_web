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
            className="py-20 md:py-24 bg-[#171A1F]"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 md:mb-14"
                >
                    <p className="text-white text-xs tracking-[0.30em] uppercase mb-3 font-medium">
                        Our Impact
                    </p>
                    <h2 className="text-3xl md:text-[50px] font-semibold text-white mb-4 leading-tight">
                        Four Decades of Measurable Excellence
                    </h2>
                    <p className="text-white text-base md:text-[22px] leading-snug">
                        Delivering scale, precision, and trust across every development.
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-y-0">
                    {stats.map((stat, idx) => (
                        <StatCard key={idx} stat={stat} idx={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function StatCard({ stat, idx }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            data-testid={`stat-card-${idx}`}
            className="text-left py-2 px-2"
        >
            <div className="text-[44px] md:text-[56px] font-semibold text-[#D8B98B] mb-2 tracking-tight leading-none">
                {stat.display}
            </div>
            <p className="text-white text-base md:text-[21px] leading-tight">{stat.label}</p>
        </motion.div>
    );
}
