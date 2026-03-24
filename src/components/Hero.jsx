import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HERO_BG = "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80";

export function Hero({
    title = "Building Landmarks That\u00A0Define Tomorrow",
    cta1Label = "View Projects",
    cta1Path = "/projects",
    cta2Label = "Contact Sales",
    cta2Path = "/contact",
    bgImage = HERO_BG,
    minHeight = "78vh",
}) {
    return (
        <section
            data-testid="hero-section"
            className="relative flex items-center overflow-hidden"
            style={{ minHeight }}
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${bgImage})` }}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-[#0D1118]/58" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0D1118]/72 via-[#0D1118]/58 to-[#0D1118]/65" />

            {/* Noise Texture */}
            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
                <div className="max-w-2xl pt-14 md:pt-16 pb-14">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    className="text-5xl md:text-[64px] font-semibold text-white leading-[1.05] mb-8 tracking-tight"
                >
                    {title}
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.35 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <Link
                        to={cta1Path}
                        data-testid="hero-cta1"
                        className="bg-[#D8B98B] text-[#1D2025] px-8 py-3 text-sm md:text-[17px] font-semibold rounded-lg hover:bg-[#CCAB79] transition-colors duration-200 inline-block text-center"
                    >
                        {cta1Label}
                    </Link>
                    <Link
                        to={cta2Path}
                        data-testid="hero-cta2"
                        className="border border-[#D8B98B]/80 text-[#D8B98B] px-8 py-3 text-sm md:text-[17px] font-semibold rounded-lg hover:bg-[#D8B98B] hover:text-[#1D2025] transition-all duration-200 inline-block text-center"
                    >
                        {cta2Label}
                    </Link>
                </motion.div>
                </div>
            </div>
        </section>
    );
}
