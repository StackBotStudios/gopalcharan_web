import { motion } from "framer-motion";
import { ContactForm } from "../components/ContactForm";
import { Phone, Mail, MapPin } from "lucide-react";

const CONTACT_HERO_BG = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80";

function PageHeader() {
    return (
        <div
            className="relative min-h-[350px] md:min-h-[420px] overflow-hidden"
            data-testid="contact-page-header"
        >
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${CONTACT_HERO_BG})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#404852]/92 via-[#404852]/84 to-[#10141A]/56" />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-20 md:pt-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="max-w-3xl"
                >
                    <p className="text-white text-xs tracking-[0.30em] uppercase mb-4">Let&apos;s Build Your Future</p>
                    <h1 className="text-3xl md:text-[44px] font-semibold text-white leading-tight mb-3">
                        Let&apos;s Start a Conversation
                    </h1>
                    <p className="text-white text-sm md:text-base max-w-xl leading-relaxed mb-7">
                        Our team is here to assist you with project inquiries, investor interest, and partnership opportunities.
                    </p>
                    <a
                        href="#contact-form"
                        data-testid="contact-send-enquiry-cta"
                        className="inline-block bg-[#D8B98B] text-[#1D2025] px-6 py-2.5 rounded-md text-sm font-medium hover:bg-[#CCAB79] transition-colors duration-200"
                    >
                        Send an enquiry
                    </a>
                </motion.div>
            </div>
        </div>
    );
}

export default function ContactPage() {
    return (
        <>
            <PageHeader />
            <section className="bg-[#171A20] py-6">
                <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    <div className="flex items-start gap-3 text-white">
                        <Phone size={16} className="text-[#D8B98B] mt-1 flex-shrink-0" />
                        <div>
                            <p className="text-sm font-semibold mb-0.5">Call Us</p>
                            <p className="text-xs text-white/70">+91 96381 88188</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 text-white">
                        <Mail size={16} className="text-[#D8B98B] mt-1 flex-shrink-0" />
                        <div>
                            <p className="text-sm font-semibold mb-0.5">Email Us</p>
                            <p className="text-xs text-white/70">gcindhub@yahoo.com</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 text-white">
                        <MapPin size={16} className="text-[#D8B98B] mt-1 flex-shrink-0" />
                        <div>
                            <p className="text-sm font-semibold mb-0.5">Visit Office</p>
                            <p className="text-xs text-white/70">17 to 20, Ahmedabad, India</p>
                        </div>
                    </div>
                </div>
            </section>
            <ContactForm />
        </>
    );
}
