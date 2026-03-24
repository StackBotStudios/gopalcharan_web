import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import footerLogo from "@/assets/FooterLogo.svg";

export function Footer() {
    const quickLinks = [
        { label: "About Us", path: "/about" },
        { label: "Ongoing Projects", path: "/projects" },
        { label: "Completed Projects", path: "/projects" },
        { label: "Investor Relations", path: "/contact" },
        { label: "Contact", path: "/contact" },
        { label: "Career", path: "/career" },
    ];

    const developments = [
        { label: "Residential", path: "/projects" },
        { label: "Commercial", path: "/projects" },
        { label: "Industrial", path: "/projects" },
    ];

    return (
        <footer data-testid="footer" className="bg-[#161A20] border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-14 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.45fr_0.7fr_0.7fr_1.35fr] gap-10 mb-10">
                    {/* Logo & Mission */}
                    <div className="lg:col-span-1">
                        <img
                            src={footerLogo}
                            alt="Gopal Charan Footer Logo"
                            className="w-24 h-24 object-contain mb-5"
                        />
                        <p className="text-white text-base md:text-[17px] leading-relaxed max-w-[360px]">
                            Building landmark developments across residential, commercial, and industrial sectors since 1979.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white text-base md:text-[19px] font-semibold mb-4">
                            Quick Links
                        </h4>
                        <ul className="space-y-2.5">
                            {quickLinks.map((item) => (
                                <li key={item.label}>
                                    <Link
                                        to={item.path}
                                        className="text-white/55 text-sm md:text-[16px] hover:text-white transition-colors duration-200"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Our Developments */}
                    <div>
                        <h4 className="text-white text-base md:text-[19px] font-semibold mb-4">
                            Our Developments
                        </h4>
                        <ul className="space-y-2.5">
                            {developments.map((item) => (
                                <li key={item.label}>
                                    <Link
                                        to={item.path}
                                        className="text-white/55 text-sm md:text-[16px] hover:text-white transition-colors duration-200"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white text-base md:text-[19px] font-semibold mb-4">
                            Contact Us
                        </h4>
                        <div className="space-y-4">
                            <div className="flex gap-3 items-start">
                                <MapPin size={20} className="text-[#D8B98B] flex-shrink-0 mt-1" />
                                <p className="text-white/55 text-sm md:text-[15px] leading-relaxed">
                                    17 to 20, First Floor, Trimurti Complex, B/s, Devraj Mall, Thakkarbapa Nagar Road, India Colony, Ahmedabad&#8209;382350
                                </p>
                            </div>
                            <div className="flex gap-3 items-center">
                                <Phone size={20} className="text-[#D8B98B] flex-shrink-0" />
                                <a
                                    href="tel:+919638188188"
                                    className="text-white/55 text-sm md:text-[15px] hover:text-white transition-colors duration-200"
                                >
                                    +91 96381 88188
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <Mail size={20} className="text-[#D8B98B] flex-shrink-0" />
                                <a
                                    href="mailto:gcindhub@yahoo.com"
                                    className="text-white/55 text-sm md:text-[15px] hover:text-white transition-colors duration-200"
                                >
                                    gcindhub@yahoo.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-[#C9AC7A]/55 pt-5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/90 text-xs md:text-sm">
                        &copy; 2026 Gopal Charan. All Rights Reserved.
                    </p>
                    <div className="flex flex-wrap justify-center gap-8">
                        <a href="#" className="text-white/90 text-xs md:text-sm hover:text-[#D8B98B] transition-colors duration-200">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-white/90 text-xs md:text-sm hover:text-[#D8B98B] transition-colors duration-200">
                            Terms &amp; Conditions
                        </a>
                        <a href="#" className="text-white/90 text-xs md:text-sm hover:text-[#D8B98B] transition-colors duration-200">
                            RERA Registration No. (To be provided by client)
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
