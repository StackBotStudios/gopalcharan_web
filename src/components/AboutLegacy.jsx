import { motion } from "framer-motion";

const PORTRAIT_IMG = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80";

const timeline = [
    { year: "1979", event: "First Project" },
    { year: "1995", event: "Expansion Phase" },
    { year: "2010", event: "Commercial Developments" },
    { year: "2020", event: "Industrial Growth" },
    { year: "Today", event: "40+ Landmarks" },
];

const pillars = [
    {
        title: "Legacy",
        desc: "40+ years of consistent development excellence.",
    },
    {
        title: "Quality",
        desc: "Engineered precision and durable construction standards.",
    },
    {
        title: "Trust",
        desc: "Long-term relationships built through transparency.",
    },
];

export function AboutLegacy() {
    return (
        <section
            data-testid="about-legacy-section"
            className="py-24 lg:py-32 bg-[#ffffff] overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    {/* Left: Portrait */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative overflow-hidden">
                            <img
                                src={PORTRAIT_IMG}
                                alt="Founder - Gopal Charan"
                                className="w-full max-h-[620px] object-cover object-top"
                            />
                            {/* Gold corner accent */}
                            <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-[#D4A76A]/50" />
                            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#D4A76A]/30" />
                        </div>
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="py-4"
                    >
                        <p className="text-[#1E1E1E] text-xs tracking-[0.32em] uppercase mb-5">
                            About Us
                        </p>
                        <h2 className="text-4xl md:text-5xl text-[#1E1E1E] mb-6 font-semibold leading-tight">
                            Building Legacy Since 1979
                        </h2>
                        <p className="text-[#1E1E1E]/55 text-base leading-relaxed mb-10">
                            Over four decades of delivering landmark developments across residential,
                            commercial and industrial sectors.
                        </p>

                        {/* Timeline */}
                        <div className="relative pl-7 mb-12">
                            <div className="absolute left-0 top-2 bottom-2 w-px bg-[#D4A76A]/35" />
                            {timeline.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.1 + idx * 0.1 }}
                                    className="relative mb-5 last:mb-0 flex items-baseline gap-3"
                                >
                                    <div
                                        className="absolute -left-7 top-2 w-2 h-2 rounded-full bg-[#D4A76A] flex-shrink-0"
                                        style={{ marginLeft: "-3.5px" }}
                                    />
                                    <span className="text-[#1E1E1E] text-sm font-semibold min-w-[3.5rem]">
                                        {item.year}
                                    </span>
                                    <span className="text-[#1E1E1E] text-sm">&mdash; {item.event}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Pillars */}
                        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#D4A76A]/15">
                            {pillars.map((p, idx) => (
                                <motion.div
                                    key={p.title}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                                    data-testid={`about-pillar-${p.title.toLowerCase()}`}
                                >
                                    <h4 className="text-[#1E1E1E] font-semibold text-sm mb-2">{p.title}</h4>
                                    <p className="text-[#1E1E1E]/45 text-xs leading-relaxed">{p.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
