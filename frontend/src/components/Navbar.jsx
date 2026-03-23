import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Career", path: "/career" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    return (
        <nav
            data-testid="navbar"
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
                scrolled
                    ? "bg-[#1E1E1E]/90 backdrop-blur-xl border-b border-[#D4A76A]/20 shadow-lg shadow-black/20"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link
                        to="/"
                        data-testid="navbar-logo"
                        className="flex items-center gap-3 group"
                    >
                        <div className="w-10 h-10 bg-[#D4A76A] flex items-center justify-center flex-shrink-0 group-hover:bg-[#E0CC9C] transition-colors duration-200">
                            <span className="text-[#1E1E1E] font-bold text-base leading-none">GC</span>
                        </div>
                        <div className="leading-none">
                            <div className="text-white font-bold text-sm tracking-wider">GOPAL CHARAN</div>
                            <div className="text-[#D4A76A] text-[10px] tracking-[0.18em] uppercase mt-0.5">BUILD THE BEST Since 1979</div>
                        </div>
                    </Link>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path + link.name}
                                to={link.path}
                                data-testid={`nav-link-${link.name.toLowerCase()}`}
                                className={`text-sm font-medium transition-colors duration-200 relative group ${
                                    location.pathname === link.path
                                        ? "text-[#D4A76A]"
                                        : "text-white/75 hover:text-white"
                                }`}
                            >
                                {link.name}
                                <span className={`absolute -bottom-0.5 left-0 h-px bg-[#D4A76A] transition-all duration-300 ${location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"}`} />
                            </Link>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:block">
                        <Link
                            to="/contact"
                            data-testid="navbar-contact-btn"
                            className="bg-[#D4A76A] text-[#1E1E1E] px-6 py-2.5 text-sm font-semibold hover:bg-[#E0CC9C] transition-colors duration-200 tracking-wide"
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        data-testid="mobile-menu-toggle"
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-white p-2 hover:text-[#D4A76A] transition-colors duration-200"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div
                    data-testid="mobile-menu"
                    className="md:hidden bg-[#1E1E1E]/97 backdrop-blur-xl border-t border-[#D4A76A]/20"
                >
                    <div className="px-6 py-8 flex flex-col gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path + link.name}
                                to={link.path}
                                data-testid={`mobile-nav-link-${link.name.toLowerCase()}`}
                                className={`text-base font-medium transition-colors duration-200 ${
                                    location.pathname === link.path ? "text-[#D4A76A]" : "text-white/75"
                                }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            data-testid="mobile-contact-btn"
                            className="bg-[#D4A76A] text-[#1E1E1E] px-6 py-3 text-sm font-semibold text-center mt-2 hover:bg-[#E0CC9C] transition-colors duration-200"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
