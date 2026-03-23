import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const projects = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80",
        category: "Industrial",
        status: "Ongoing",
        title: "Industrial Hub",
        location: "Bakrol, Ahmedabad",
        size: "2.4M sq Ft | 2026",
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
        category: "Industrial",
        status: "Ongoing",
        title: "Industrial Landmark",
        location: "Kuha, Ahmedabad",
        size: "2.4M Sq Ft | 2026",
    },
    {
        id: 3,
        image: "https://images.pexels.com/photos/8556704/pexels-photo-8556704.jpeg?auto=compress&cs=tinysrgb&w=800",
        category: "Industrial",
        status: "Ongoing",
        title: "Industrial Park",
        location: "Vahelal, Ahmedabad",
        size: "2.4M Sq Ft | 2026",
    },
];

export function SignatureDevelopments({ showAll = false }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start", dragFree: true });
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(true);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on("select", onSelect);
        onSelect();
    }, [emblaApi, onSelect]);

    const displayProjects = showAll ? projects : projects;

    return (
        <section
            data-testid="signature-developments-section"
            className="py-24 lg:py-32 bg-[#282828] overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-[#D4A76A] text-xs tracking-[0.32em] uppercase mb-4">
                        Our Portfolio
                    </p>
                    <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
                        Signature Developments
                    </h2>
                    <p className="text-white/50 text-base max-w-2xl mx-auto leading-relaxed">
                        A curated portfolio of landmark projects across residential, commercial
                        and industrial sectors.
                    </p>
                </motion.div>

                {/* Embla Carousel */}
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex gap-6">
                        {displayProjects.map((project, idx) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                data-testid={`project-card-${project.id}`}
                                className="flex-none w-[320px] md:w-[380px] bg-[#1E1E1E] border border-[#D4A76A]/10 hover:border-[#D4A76A]/30 hover:-translate-y-1 transition-all duration-300 group"
                            >
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4 flex gap-2">
                                        <span className="bg-[#D4A76A] text-[#1E1E1E] text-xs px-3 py-1 font-semibold">
                                            {project.category}
                                        </span>
                                        <span className="bg-[#1E1E1E]/80 text-white/80 text-xs px-3 py-1 backdrop-blur-sm">
                                            {project.status}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-white text-xl font-semibold mb-1">
                                        {project.title}
                                    </h3>
                                    <p className="text-white/50 text-sm mb-1">{project.location}</p>
                                    <p className="text-[#D4A76A] text-sm mb-5">{project.size}</p>
                                    <button
                                        data-testid={`view-details-btn-${project.id}`}
                                        className="border border-[#D4A76A] text-[#D4A76A] px-5 py-2 text-sm font-medium hover:bg-[#D4A76A] hover:text-[#1E1E1E] transition-all duration-200"
                                    >
                                        View Details
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Carousel Controls */}
                <div className="flex justify-center items-center gap-4 mt-10">
                    <button
                        onClick={() => emblaApi?.scrollPrev()}
                        disabled={!canScrollPrev}
                        data-testid="carousel-prev"
                        className="w-11 h-11 border border-[#D4A76A]/40 flex items-center justify-center text-[#D4A76A] hover:bg-[#D4A76A] hover:text-[#1E1E1E] transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                        <ChevronLeft size={18} />
                    </button>
                    <button
                        onClick={() => emblaApi?.scrollNext()}
                        disabled={!canScrollNext}
                        data-testid="carousel-next"
                        className="w-11 h-11 border border-[#D4A76A]/40 flex items-center justify-center text-[#D4A76A] hover:bg-[#D4A76A] hover:text-[#1E1E1E] transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                        <ChevronRight size={18} />
                    </button>
                </div>

                {/* View All */}
                <div className="flex justify-center mt-10">
                    <Link
                        to="/projects"
                        data-testid="view-all-projects-btn"
                        className="border border-[#D4A76A] text-[#D4A76A] px-8 py-4 text-sm font-semibold hover:bg-[#D4A76A] hover:text-[#1E1E1E] transition-all duration-200 tracking-wide"
                    >
                        View All Projects
                    </Link>
                </div>
            </div>
        </section>
    );
}
