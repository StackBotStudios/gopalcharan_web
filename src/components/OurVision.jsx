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
            className="relative py-20 md:py-24 overflow-hidden"
        >
            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${VISION_BG})` }}
            />
            <div className="absolute inset-0 bg-[#12161C]/62" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#10141A]/70 via-[#10141A]/45 to-[#10141A]/70" />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 md:mb-14"
                >
                    <p className="text-white text-xs tracking-[0.30em] uppercase mb-3 font-medium">
                        Our Vision
                    </p>
                    <h2 className="text-3xl md:text-[50px] font-semibold text-white mb-4 leading-tight max-w-5xl">
                        Shaping the Future of Modern Real Estate
                    </h2>
                    <p className="text-white text-base md:text-[25px] leading-snug max-w-6xl">
                        We create developments that combine architectural excellence, sustainable
                        growth, and long-term investment value.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 mt-12 md:mt-16">
                    {pillars.map((pillar, idx) => (
                        <motion.div
                            key={pillar.num}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.12 }}
                            data-testid={`vision-pillar-${pillar.num}`}
                            className={`px-5 md:px-8 text-center min-h-[250px] ${
                                idx !== 0 ? "border-t md:border-t-0 md:border-l border-white/45" : ""
                            }`}
                        >
                            <span className="text-[#D8B98B] text-5xl md:text-[54px] font-medium mb-5 block leading-none">
                                {pillar.num}
                            </span>
                            <h3 className="text-white text-2xl md:text-[34px] font-semibold mb-4 leading-tight">
                                {pillar.title}
                            </h3>
                            <p className="text-white text-base md:text-[24px] leading-snug">{pillar.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
