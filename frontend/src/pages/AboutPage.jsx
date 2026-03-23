import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HERO_BG    = "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80";
const WORKERS_IMG = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80";
const CTA_BG      = "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80";

/* ─── helpers ─────────────────────────────────────────────── */
function FadeIn({ children, delay = 0, className = "" }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

/* ─── 1. HERO ─────────────────────────────────────────────── */
function AboutHero() {
    return (
        <section
            data-testid="about-hero"
            className="relative flex items-center overflow-hidden"
            style={{ minHeight: "56vh" }}
        >
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${HERO_BG})` }}
            />
            <div className="absolute inset-0 bg-[#1C1C1E]/75" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="max-w-xl"
                >
                    <p className="text-[#D4A76A]/80 text-xs tracking-[0.3em] uppercase mb-4">
                        About Us
                    </p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
                        Building Landmarks Since 1979
                    </h1>
                    <p className="text-white/65 text-base leading-relaxed mb-8">
                        Gopal Charan has been delivering trusted real estate developments across
                        residential, commercial, and industrial sectors for over four decades.
                    </p>
                    <Link
                        to="/projects"
                        data-testid="about-hero-cta"
                        className="inline-block bg-[#D4A76A] text-[#1C1C1E] px-7 py-3.5 text-sm font-semibold hover:bg-[#E0CC9C] transition-colors duration-200 tracking-wide"
                    >
                        View Projects
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

/* ─── 2. WHO WE ARE ───────────────────────────────────────── */
function WhoWeAre() {
    const stats = [
        { value: "45+", label: "Years of experience" },
        { value: "40+", label: "Projects completed" },
        { value: "2.4M+", label: "Sq ft developed" },
    ];

    return (
        <section
            data-testid="who-we-are"
            className="py-20 lg:py-28 bg-[#F5F0E8]"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 items-center">
                    {/* Left image */}
                    <FadeIn delay={0} className="w-full lg:w-[42%] flex-shrink-0">
                        <div className="rounded-2xl overflow-hidden shadow-lg">
                            <img
                                src={WORKERS_IMG}
                                alt="Construction workers"
                                className="w-full h-[420px] object-cover"
                            />
                        </div>
                    </FadeIn>

                    {/* Right content */}
                    <FadeIn delay={0.1} className="flex-1">
                        <p className="text-[#D4A76A] text-xs tracking-[0.3em] uppercase mb-3 font-semibold">
                            About Gopal Charan
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1E] mb-5 leading-tight">
                            Who We Are
                        </h2>
                        <p className="text-gray-600 text-base leading-relaxed mb-4">
                            Gopal Charan is a trusted real estate developer with a legacy of
                            delivering high-quality infrastructure and landmark developments since 1979.
                        </p>
                        <p className="text-gray-600 text-base leading-relaxed mb-10">
                            With decades of experience across residential, commercial, and industrial
                            projects, the company has built a reputation for reliability, quality, and
                            long-term value creation.
                        </p>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-10">
                            {stats.map((s, i) => (
                                <div key={i} data-testid={`who-stat-${i}`}>
                                    <p className="text-3xl font-bold text-[#1C1C1E]">{s.value}</p>
                                    <p className="text-gray-500 text-sm mt-1">{s.label}</p>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}

/* ─── 3. FOUNDER QUOTE ────────────────────────────────────── */
function FounderQuote() {
    return (
        <section
            data-testid="founder-quote"
            className="py-20 lg:py-28 bg-[#1C1C1E]"
        >
            <div className="max-w-3xl mx-auto px-6 text-center">
                {/* Large quote marks */}
                <div className="flex justify-center mb-6">
                    <svg width="64" height="48" viewBox="0 0 64 48" fill="none">
                        <path
                            d="M0 48V28.8C0 18.4 3.2 10.4 9.6 4.8C16 1.6 23.2 0 31.2 0V9.6C26.4 9.6 22.4 11.2 19.2 14.4C16 17.6 14.4 22.4 14.4 28.8H25.6V48H0ZM38.4 48V28.8C38.4 18.4 41.6 10.4 48 4.8C54.4 1.6 61.6 0 64 0V9.6C59.2 9.6 55.2 11.2 52 14.4C48.8 17.6 47.2 22.4 47.2 28.8H58.4V48H38.4Z"
                            fill="#555"
                        />
                    </svg>
                </div>

                <FadeIn>
                    <blockquote
                        data-testid="founder-quote-text"
                        className="text-white/90 text-2xl md:text-3xl leading-relaxed font-light italic mb-10"
                        style={{ fontFamily: "Georgia, serif" }}
                    >
                        "Over four decades in real estate has taught us that true success is not
                        measured by the buildings we construct, but by the trust we build and the
                        communities we nurture."
                    </blockquote>

                    <div className="flex flex-col items-center gap-1">
                        <p className="text-white text-base font-medium">Manoj Patel</p>
                        {/* Decorative signature-style text */}
                        <p
                            className="text-[#D4A76A]/70 text-2xl"
                            style={{ fontFamily: "'Brush Script MT', cursive" }}
                        >
                            Manoj Patel
                        </p>
                        <p className="text-gray-500 text-sm">Founder &amp; Director</p>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}

/* ─── 4. GROWTH TIMELINE ──────────────────────────────────── */
const milestones = [
    { year: "1979", event: "Company founded",         side: "right" },
    { year: "1995", event: "Expansion phase",          side: "left"  },
    { year: "2010", event: "Commercial Developments",  side: "right" },
    { year: "2020", event: "Industrial Growth",        side: "left"  },
    { year: "Today", event: "40+ Landmarks",           side: "right" },
];

function GrowthTimeline() {
    return (
        <section
            data-testid="growth-timeline"
            className="py-20 lg:py-28 bg-[#F5F0E8]"
        >
            <div className="max-w-4xl mx-auto px-6">
                <FadeIn className="text-center mb-14">
                    <p className="text-[#D4A76A] text-xs tracking-[0.3em] uppercase mb-3 font-semibold">
                        Our Journey
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1E] mb-4">
                        Our Growth Journey
                    </h2>
                    <p className="text-gray-500 text-base">
                        Over four decades of delivering landmark developments across residential,
                        commercial, and industrial sectors.
                    </p>
                </FadeIn>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#D4A76A]/40 -translate-x-1/2" />

                    <div className="space-y-10">
                        {milestones.map((m, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: m.side === "right" ? 30 : -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                data-testid={`timeline-item-${i}`}
                                className={`relative flex items-center ${
                                    m.side === "right"
                                        ? "justify-start pl-[calc(50%+28px)]"
                                        : "justify-end pr-[calc(50%+28px)]"
                                }`}
                            >
                                {/* Dot */}
                                <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#D4A76A] border-2 border-[#F5F0E8] z-10" />

                                {/* Card */}
                                <div className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 py-4 w-[220px] md:w-[260px]">
                                    <p className="text-[#1C1C1E] font-bold text-lg">{m.year}</p>
                                    <p className="text-gray-500 text-sm mt-0.5">{m.event}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ─── 5. OUR IMPACT ───────────────────────────────────────── */
function OurImpactAbout() {
    const stats = [
        { value: "45+",   label: "Years of Excellence" },
        { value: "40+",   label: "Landmark Projects" },
        { value: "2.4M+", label: "Sq Ft Developed" },
        { value: "100%",  label: "Commitment to Quality" },
    ];

    return (
        <section
            data-testid="about-impact"
            className="py-20 lg:py-28 bg-[#1C1C1E]"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <FadeIn className="mb-14">
                    <p className="text-[#D4A76A] text-xs tracking-[0.3em] uppercase mb-3 font-semibold">
                        Our Impact
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                        Four Decades of Measurable Excellence
                    </h2>
                    <p className="text-white/50 text-base">
                        Delivering scale, precision, and trust across every development.
                    </p>
                </FadeIn>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            data-testid={`about-stat-${i}`}
                            className="py-8"
                        >
                            <p className="text-5xl font-light text-[#D4A76A] mb-2">{s.value}</p>
                            <p className="text-white/50 text-sm">{s.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ─── 6. CTA BANNER ───────────────────────────────────────── */
function AboutCTA() {
    return (
        <section
            data-testid="about-cta"
            className="relative py-24 lg:py-32 overflow-hidden"
        >
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${CTA_BG})` }}
            />
            <div className="absolute inset-0 bg-[#1C1C1E]/85" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
                <FadeIn className="max-w-2xl">
                    <p className="text-[#D4A76A] text-xs tracking-[0.3em] uppercase mb-4 font-semibold">
                        Let's Build Something Great
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                        Explore Our Landmark Developments
                    </h2>
                    <p className="text-white/55 text-base leading-relaxed mb-8">
                        Discover developments built on over four decades of experience.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            to="/projects"
                            data-testid="about-cta-projects"
                            className="inline-block bg-[#D4A76A] text-[#1C1C1E] px-7 py-3.5 text-sm font-semibold hover:bg-[#E0CC9C] transition-colors duration-200 tracking-wide"
                        >
                            View Projects
                        </Link>
                        <Link
                            to="/contact"
                            data-testid="about-cta-contact"
                            className="inline-block border border-white/50 text-white px-7 py-3.5 text-sm font-semibold hover:border-[#D4A76A] hover:text-[#D4A76A] transition-all duration-200 tracking-wide"
                        >
                            Contact Us
                        </Link>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}

/* ─── PAGE ────────────────────────────────────────────────── */
export default function AboutPage() {
    return (
        <>
            <AboutHero />
            <WhoWeAre />
            <FounderQuote />
            <GrowthTimeline />
            <OurImpactAbout />
            <AboutCTA />
        </>
    );
}
