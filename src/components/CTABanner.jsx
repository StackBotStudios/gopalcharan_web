import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTA_BG = "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80";

export function CTABanner() {
    return (
        <section
            data-testid="cta-banner-section"
            className="relative py-28 lg:py-40 overflow-hidden"
        >
            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${CTA_BG})` }}
            />
            <div className="absolute inset-0 bg-[#1E1E1E]/82" />
            {/* Gold edge accent */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#D4A76A]/40" />

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <p className="text-[#D4A76A] text-xs tracking-[0.35em] uppercase mb-5">
                        Let&apos;s Build Your Future
                    </p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
                        Discover Your Next Landmark Investment
                    </h2>
                    <p className="text-white/55 text-base leading-relaxed mb-12 max-w-2xl mx-auto">
                        Connect with our team to explore residential, commercial, and industrial
                        opportunities.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            data-testid="cta-channel-partner-btn"
                            className="bg-[#D4A76A] text-[#1E1E1E] px-8 py-4 text-sm font-semibold tracking-wide hover:bg-[#E0CC9C] transition-colors duration-200 inline-block"
                        >
                            Become a channel partner
                        </Link>
                        <Link
                            to="/projects"
                            data-testid="cta-explore-projects-btn"
                            className="border border-[#D4A76A] text-[#D4A76A] px-8 py-4 text-sm font-semibold tracking-wide hover:bg-[#D4A76A] hover:text-[#1E1E1E] transition-all duration-200 inline-block"
                        >
                            Explore Projects
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
