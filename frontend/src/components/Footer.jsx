import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
    const quickLinks = [
        { label: "About Us", path: "/about" },
        { label: "Ongoing Projects", path: "/projects" },
        { label: "Completed Projects", path: "/projects" },
        { label: "Investor Relations", path: "/contact" },
        { label: "Contact", path: "/contact" },
    ];

    const developments = [
        { label: "Residential", path: "/projects" },
        { label: "Commercial", path: "/projects" },
        { label: "Industrial", path: "/projects" },
    ];

    return (
        <footer data-testid="footer" className="bg-[#282828] border-t border-[#D4A76A]/15">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Logo & Mission */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-10 h-10 bg-[#D4A76A] flex items-center justify-center flex-shrink-0">
                                <span className="text-[#1E1E1E] font-bold text-base">GC</span>
                            </div>
                            <div className="leading-none">
                                <div className="text-white font-bold text-sm tracking-wider">GOPAL CHARAN</div>
                                <div className="text-[#D4A76A] text-[10px] tracking-[0.18em] uppercase mt-0.5">BUILD THE BEST Since 1979</div>
                            </div>
                        </div>
                        <p className="text-white/50 text-sm leading-relaxed">
                            Building landmark developments across residential, commercial, and industrial sectors since 1979.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-[#D4A76A] text-xs tracking-[0.25em] uppercase mb-6 font-semibold">
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((item) => (
                                <li key={item.label}>
                                    <Link
                                        to={item.path}
                                        className="text-white/50 text-sm hover:text-[#D4A76A] transition-colors duration-200"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Our Developments */}
                    <div>
                        <h4 className="text-[#D4A76A] text-xs tracking-[0.25em] uppercase mb-6 font-semibold">
                            Our Developments
                        </h4>
                        <ul className="space-y-3">
                            {developments.map((item) => (
                                <li key={item.label}>
                                    <Link
                                        to={item.path}
                                        className="text-white/50 text-sm hover:text-[#D4A76A] transition-colors duration-200"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-[#D4A76A] text-xs tracking-[0.25em] uppercase mb-6 font-semibold">
                            Contact Us
                        </h4>
                        <div className="space-y-4">
                            <div className="flex gap-3 items-start">
                                <MapPin size={15} className="text-[#D4A76A] flex-shrink-0 mt-0.5" />
                                <p className="text-white/50 text-sm leading-relaxed">
                                    17 to 20, First Floor, Trimurti Complex, B/s, Devraj Mall, Thakkarbapa Nagar Road, India Colony, Ahmedabad&#8209;382350
                                </p>
                            </div>
                            <div className="flex gap-3 items-center">
                                <Phone size={15} className="text-[#D4A76A] flex-shrink-0" />
                                <a
                                    href="tel:+919638188188"
                                    className="text-white/50 text-sm hover:text-[#D4A76A] transition-colors duration-200"
                                >
                                    +91 96381 88188
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <Mail size={15} className="text-[#D4A76A] flex-shrink-0" />
                                <a
                                    href="mailto:gcindhub@yahoo.com"
                                    className="text-white/50 text-sm hover:text-[#D4A76A] transition-colors duration-200"
                                >
                                    gcindhub@yahoo.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-[#D4A76A]/15 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/35 text-xs">
                        &copy; 2026 Gopal Charan. All Rights Reserved.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <a href="#" className="text-white/35 text-xs hover:text-[#D4A76A] transition-colors duration-200">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-white/35 text-xs hover:text-[#D4A76A] transition-colors duration-200">
                            Terms &amp; Conditions
                        </a>
                        <a href="#" className="text-white/35 text-xs hover:text-[#D4A76A] transition-colors duration-200">
                            RERA Registration No. (To be provided by client)
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
