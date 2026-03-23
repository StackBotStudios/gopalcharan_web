import { motion } from "framer-motion";

const VISION_BG = "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?w=1920&q=80";

const pillars = [
    {
        num: "01",
        title: "Sustainable Growth",
        desc: "Forward-thinking developments designed with environmental and urban responsibility.",
    },
    {
        num: "02",
        title: "Premium Developments",
        desc: "Architectural excellence that reflects quality, exclusivity, and modern lifestyle demands.",
    },
    {
        num: "03",
        title: "Long-Term Investment Value",
        desc: "Projects engineered for appreciation and enduring market relevance.",
    },
];

export function OurVision() {
    return (
        <section
            data-testid="our-vision-section"
            className="relative py-28 lg:py-40 overflow-hidden"
        >
            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${VISION_BG})` }}
            />
            <div className="absolute inset-0 bg-[#1E1E1E]/80" />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-[#D4A76A] text-xs tracking-[0.32em] uppercase mb-4">
                        Our Vision
                    </p>
                    <h2 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
                        Shaping the Future of Modern Real Estate
                    </h2>
                    <p className="text-white/55 text-base max-w-2xl mx-auto leading-relaxed">
                        We create developments that combine architectural excellence, sustainable
                        growth, and long-term investment value.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {pillars.map((pillar, idx) => (
                        <motion.div
                            key={pillar.num}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.15 }}
                            data-testid={`vision-pillar-${pillar.num}`}
                            className="bg-[#1E1E1E]/65 backdrop-blur-sm border border-[#D4A76A]/20 p-8 hover:border-[#D4A76A]/50 hover:bg-[#1E1E1E]/80 transition-all duration-300 group"
                        >
                            <span className="text-[#D4A76A] text-4xl font-light mb-5 block opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                                {pillar.num}
                            </span>
                            <h3 className="text-white text-xl font-semibold mb-3">
                                {pillar.title}
                            </h3>
                            <p className="text-white/50 text-sm leading-relaxed">{pillar.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
