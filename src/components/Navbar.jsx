import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "@/assets/logo.svg";

const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Career", path: "/career" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    return (
        <nav
            data-testid="navbar"
            className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#E5E1DA]"
        >
            <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
                <div className="flex items-center justify-between h-24">
                    {/* Logo */}
                    <Link
                        to="/"
                        data-testid="navbar-logo"
                        className="flex items-center"
                    >
                        <img src={logo} alt="Gopal Charan" className="h-14 w-auto" />
                    </Link>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex items-center gap-14">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path + link.name}
                                to={link.path}
                                data-testid={`nav-link-${link.name.toLowerCase()}`}
                                className={`text-[23px] font-semibold leading-none transition-colors duration-200 flex items-center gap-1.5 ${
                                    location.pathname === link.path
                                        ? "text-[#121212]"
                                        : "text-[#2D2D2D] hover:text-[#121212]"
                                }`}
                            >
                                {link.name}
                                {link.name === "Projects" && <ChevronDown size={18} strokeWidth={2.2} />}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:block">
                        <Link
                            to="/contact"
                            data-testid="navbar-contact-btn"
                            className="bg-[#D4A76A] text-[#272727] px-7 py-3 text-[23px] font-semibold rounded-[10px] hover:bg-[#C99C62] transition-colors duration-200 leading-none"
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        data-testid="mobile-menu-toggle"
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-[#272727] p-2 hover:text-[#121212] transition-colors duration-200"
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
                    className="md:hidden bg-white border-t border-[#E5E1DA]"
                >
                    <div className="px-6 py-8 flex flex-col gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path + link.name}
                                to={link.path}
                                data-testid={`mobile-nav-link-${link.name.toLowerCase()}`}
                                className={`text-xl font-semibold transition-colors duration-200 ${
                                    location.pathname === link.path ? "text-[#121212]" : "text-[#2D2D2D]"
                                }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            data-testid="mobile-contact-btn"
                            className="bg-[#D4A76A] text-[#272727] px-6 py-3 text-xl font-semibold text-center mt-2 rounded-[10px] hover:bg-[#C99C62] transition-colors duration-200"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
