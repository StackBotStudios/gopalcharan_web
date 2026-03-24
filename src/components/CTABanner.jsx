import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTA_BG = "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80";

export function CTABanner() {
    return (
        <section
            data-testid="cta-banner-section"
            className="relative overflow-hidden min-h-[320px] md:min-h-[380px]"
        >
            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${CTA_BG})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#454D57]/96 via-[#454D57]/88 to-[#15181E]/58" />
            <div className="absolute inset-0 bg-[#0E1014]/22" />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="max-w-4xl"
                >
                    <p className="text-white text-xs tracking-[0.30em] uppercase mb-4 font-medium">
                        Let&apos;s Build Your Future
                    </p>
                    <h2 className="text-3xl md:text-[44px] font-semibold text-white mb-4 leading-tight">
                        Discover Your Next Landmark Investment
                    </h2>
                    <p className="text-white text-base md:text-[22px] leading-snug mb-8 md:mb-10 max-w-4xl">
                        Connect with our team to explore residential, commercial, and industrial
                        opportunities.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            to="/contact"
                            data-testid="cta-channel-partner-btn"
                            className="bg-[#D8B98B] text-[#1D2025] px-7 py-3.5 text-lg md:text-[24px] leading-none font-medium rounded-lg hover:bg-[#CCAB79] transition-colors duration-200 inline-block"
                        >
                            Become a channel partner
                        </Link>
                        <Link
                            to="/projects"
                            data-testid="cta-explore-projects-btn"
                            className="border border-[#B89663] text-[#D8B98B] px-7 py-3.5 text-lg md:text-[24px] leading-none font-medium rounded-lg hover:bg-[#B89663] hover:text-[#1D2025] transition-all duration-200 inline-block"
                        >
                            Explore Projects
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
