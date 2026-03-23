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
    minHeight = "100vh",
}) {
    return (
        <section
            data-testid="hero-section"
            className="relative flex items-center justify-center overflow-hidden"
            style={{ minHeight }}
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${bgImage})` }}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/55 to-[#1E1E1E]" />

            {/* Noise Texture */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                    backgroundSize: "200px",
                }}
            />

            {/* Content */}
            <div className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-24 pb-16">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-[#D4A76A] text-xs tracking-[0.35em] uppercase mb-6"
                >
                    Gopal Charan &mdash; Since 1979
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight mb-10 tracking-tight"
                >
                    {title}
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.35 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link
                        to={cta1Path}
                        data-testid="hero-cta1"
                        className="bg-[#D4A76A] text-[#1E1E1E] px-8 py-4 text-sm font-semibold tracking-wide hover:bg-[#E0CC9C] transition-colors duration-200 inline-block"
                    >
                        {cta1Label}
                    </Link>
                    <Link
                        to={cta2Path}
                        data-testid="hero-cta2"
                        className="border border-[#D4A76A] text-[#D4A76A] px-8 py-4 text-sm font-semibold tracking-wide hover:bg-[#D4A76A] hover:text-[#1E1E1E] transition-all duration-200 inline-block"
                    >
                        {cta2Label}
                    </Link>
                </motion.div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1E1E1E] to-transparent" />
        </section>
    );
}
