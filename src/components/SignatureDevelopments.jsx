import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
        image: "",
        category: "Industrial",
        status: "Ongoing",
        title: "Industrial Landmark",
        location: "Kuha, Ahmedabad",
        size: "2.4M Sq Ft | 2026",
    },
    {
        id: 3,
        image: "",
        category: "Industrial",
        status: "Ongoing",
        title: "Industrial Park",
        location: "Vahelal, Ahmedabad",
        size: "2.4M Sq Ft | 2026",
    },
];

export function SignatureDevelopments({ showAll = false }) {
    const displayProjects = showAll ? projects : projects;

    return (
        <section
            data-testid="signature-developments-section"
            className="py-20 md:py-24 bg-[#171A1F]"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-10 md:mb-12"
                >
                    <p className="text-white text-xs tracking-[0.32em] uppercase mb-3 font-semibold">
                        Our Portfolio
                    </p>
                    <h2 className="text-3xl md:text-[44px] font-semibold text-white mb-4 leading-tight">
                        Signature Developments
                    </h2>
                    <p className="text-white text-base md:text-[23px] leading-snug max-w-[1320px]">
                        A curated portfolio of landmark projects across residential, commercial
                        and industrial sectors.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {displayProjects.map((project, idx) => (
                        <motion.article
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.08 }}
                            data-testid={`project-card-${project.id}`}
                            className="bg-[#1F252E] rounded-[18px] overflow-hidden"
                        >
                            <div className="h-[270px] bg-[#20262F]">
                                {project.image && (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                )}
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="bg-[#515151] text-white text-sm md:text-[22px] leading-none px-4 py-2 rounded-full">
                                        {project.category}
                                    </span>
                                    <span className="bg-[#515151] text-white text-sm md:text-[22px] leading-none px-4 py-2 rounded-full">
                                        {project.status}
                                    </span>
                                </div>
                                <h3 className="text-white text-lg md:text-[20px] leading-none font-semibold mb-3">
                                    {project.title}
                                </h3>
                                <p className="text-white text-sm md:text-[16px] leading-none mb-4">{project.location}</p>
                                <p className="text-white text-sm md:text-[16px] leading-none font-semibold mb-5">
                                    {project.size}
                                </p>
                                <button
                                    data-testid={`view-details-btn-${project.id}`}
                                    className="border border-[#B18A56] text-[#D2A66A] px-4 py-2 text-sm md:text-[14px] leading-none rounded-xl hover:bg-[#B18A56] hover:text-[#111315] transition-colors duration-200 mt-2"
                                >
                                    View Details
                                </button>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* View All */}
                <div className="flex justify-center mt-10 md:mt-12">
                    <Link
                        to="/projects"
                        data-testid="view-all-projects-btn"
                        className="bg-[#ffffff] text-[#101114] px-6 py-3 text-sm md:text-[14px] leading-none rounded-xl font-semibold hover:bg-[#9EA2A9] transition-colors duration-200 mt-2"
                    >
                        View All Projects
                    </Link>
                </div>
            </div>
        </section>
    );
}
