import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, CheckCircle } from "lucide-react";

function InputField({ label, id, type = "text", placeholder, error, register }) {
    return (
        <div>
            <label htmlFor={id} className="text-white/60 text-sm mb-2 block">
                {label}
            </label>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                {...register}
                className={`w-full bg-transparent border-b py-3 text-white placeholder-white/25 focus:outline-none transition-colors duration-200 text-sm ${
                    error
                        ? "border-red-500/60 focus:border-red-500"
                        : "border-[#D4A76A]/30 focus:border-[#D4A76A]"
                }`}
            />
            {error && (
                <p className="text-red-400 text-xs mt-1.5">{error}</p>
            )}
        </div>
    );
}

export function ContactForm() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }
        if (!formData.message.trim()) newErrors.message = "Message is required";
        else if (formData.message.trim().length < 10) newErrors.message = "Message must be at least 10 characters";
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        console.log("Contact Form Submission:", formData);
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <section
            data-testid="contact-form-section"
            className="py-24 lg:py-32 bg-[#1E1E1E]"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">
                    {/* Left: Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="lg:col-span-2"
                    >
                        <p className="text-[#D4A76A] text-xs tracking-[0.32em] uppercase mb-5">
                            Get In Touch
                        </p>
                        <h2 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
                            Let&apos;s Build Something Remarkable
                        </h2>
                        <p className="text-white/50 text-base leading-relaxed mb-12">
                            Connect with our team to explore residential, commercial, and industrial
                            investment opportunities.
                        </p>

                        <div className="space-y-7">
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 border border-[#D4A76A]/25 flex items-center justify-center flex-shrink-0">
                                    <MapPin size={15} className="text-[#D4A76A]" />
                                </div>
                                <div>
                                    <p className="text-white/80 text-sm font-medium mb-1">Office Address</p>
                                    <p className="text-white/45 text-sm leading-relaxed">
                                        17 to 20, First Floor, Trimurti Complex, B/s, Devraj Mall,
                                        Thakkarbapa Nagar Road, India Colony, Ahmedabad&#8209;382350
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="w-10 h-10 border border-[#D4A76A]/25 flex items-center justify-center flex-shrink-0">
                                    <Phone size={15} className="text-[#D4A76A]" />
                                </div>
                                <div>
                                    <p className="text-white/80 text-sm font-medium mb-0.5">Phone</p>
                                    <a
                                        href="tel:+919638188188"
                                        className="text-white/45 text-sm hover:text-[#D4A76A] transition-colors duration-200"
                                    >
                                        +91 96381 88188
                                    </a>
                                </div>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="w-10 h-10 border border-[#D4A76A]/25 flex items-center justify-center flex-shrink-0">
                                    <Mail size={15} className="text-[#D4A76A]" />
                                </div>
                                <div>
                                    <p className="text-white/80 text-sm font-medium mb-0.5">Email</p>
                                    <a
                                        href="mailto:gcindhub@yahoo.com"
                                        className="text-white/45 text-sm hover:text-[#D4A76A] transition-colors duration-200"
                                    >
                                        gcindhub@yahoo.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="lg:col-span-3"
                    >
                        <div className="bg-[#282828] border border-[#D4A76A]/10 p-8 lg:p-10">
                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center py-12 text-center"
                                    data-testid="form-success"
                                >
                                    <CheckCircle size={48} className="text-[#D4A76A] mb-4" />
                                    <h3 className="text-white text-xl font-semibold mb-2">
                                        Message Sent!
                                    </h3>
                                    <p className="text-white/50 text-sm">
                                        Thank you for reaching out. We will get back to you shortly.
                                    </p>
                                </motion.div>
                            ) : (
                                <form
                                    onSubmit={handleSubmit}
                                    data-testid="contact-form"
                                    className="space-y-7"
                                    noValidate
                                >
                                    <div>
                                        <label className="text-white/60 text-sm mb-2 block">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            data-testid="contact-name-input"
                                            placeholder="Your full name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={`w-full bg-transparent border-b py-3 text-white placeholder-white/25 focus:outline-none transition-colors duration-200 text-sm ${
                                                errors.name
                                                    ? "border-red-500/60 focus:border-red-500"
                                                    : "border-[#D4A76A]/30 focus:border-[#D4A76A]"
                                            }`}
                                        />
                                        {errors.name && (
                                            <p data-testid="name-error" className="text-red-400 text-xs mt-1.5">
                                                {errors.name}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="text-white/60 text-sm mb-2 block">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            data-testid="contact-email-input"
                                            placeholder="your@email.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`w-full bg-transparent border-b py-3 text-white placeholder-white/25 focus:outline-none transition-colors duration-200 text-sm ${
                                                errors.email
                                                    ? "border-red-500/60 focus:border-red-500"
                                                    : "border-[#D4A76A]/30 focus:border-[#D4A76A]"
                                            }`}
                                        />
                                        {errors.email && (
                                            <p data-testid="email-error" className="text-red-400 text-xs mt-1.5">
                                                {errors.email}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="text-white/60 text-sm mb-2 block">
                                            Message
                                        </label>
                                        <textarea
                                            name="message"
                                            data-testid="contact-message-input"
                                            placeholder="Tell us about your requirement..."
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className={`w-full bg-transparent border-b py-3 text-white placeholder-white/25 focus:outline-none transition-colors duration-200 text-sm resize-none ${
                                                errors.message
                                                    ? "border-red-500/60 focus:border-red-500"
                                                    : "border-[#D4A76A]/30 focus:border-[#D4A76A]"
                                            }`}
                                        />
                                        {errors.message && (
                                            <p data-testid="message-error" className="text-red-400 text-xs mt-1.5">
                                                {errors.message}
                                            </p>
                                        )}
                                    </div>

                                    <button
                                        type="submit"
                                        data-testid="contact-form-submit"
                                        className="w-full bg-[#D4A76A] text-[#1E1E1E] py-4 font-semibold text-sm tracking-wide hover:bg-[#E0CC9C] transition-colors duration-200"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
