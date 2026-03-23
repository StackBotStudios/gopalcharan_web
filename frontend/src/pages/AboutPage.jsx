import { motion } from "framer-motion";
import { AboutLegacy } from "../components/AboutLegacy";
import { OurImpact } from "../components/OurImpact";
import { CTABanner } from "../components/CTABanner";

function PageHeader({ label, title, subtitle }) {
    return (
        <div
            className="relative pt-40 pb-20 bg-[#282828] border-b border-[#D4A76A]/10 overflow-hidden"
            data-testid="about-page-header"
        >
            <div className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `repeating-linear-gradient(90deg, #D4A76A 0, #D4A76A 1px, transparent 0, transparent 50%)`,
                    backgroundSize: "60px 60px",
                }}
            />
            <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <p className="text-[#D4A76A] text-xs tracking-[0.35em] uppercase mb-5">{label}</p>
                    <h1 className="text-5xl md:text-6xl font-light text-white leading-tight">{title}</h1>
                    {subtitle && (
                        <p className="text-white/50 text-base mt-5 max-w-2xl leading-relaxed">{subtitle}</p>
                    )}
                </motion.div>
            </div>
        </div>
    );
}

export default function AboutPage() {
    return (
        <>
            <PageHeader
                label="About Gopal Charan"
                title="Four Decades of Excellence"
                subtitle="A legacy built on quality, trust, and landmark developments across residential, commercial and industrial sectors."
            />
            <AboutLegacy />
            <OurImpact />
            <CTABanner />
        </>
    );
}
