import { motion } from "framer-motion";
import { SignatureDevelopments } from "../components/SignatureDevelopments";

function PageHeader({ label, title, subtitle }) {
    return (
        <div
            className="relative pt-40 pb-20 bg-[#282828] border-b border-[#D4A76A]/10 overflow-hidden"
            data-testid="services-page-header"
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

export default function ServicesPage() {
    return (
        <>
            <PageHeader
                label="Our Portfolio"
                title="Signature Developments"
                subtitle="A curated portfolio of landmark projects across residential, commercial and industrial sectors."
            />
            <SignatureDevelopments showAll />
        </>
    );
}
