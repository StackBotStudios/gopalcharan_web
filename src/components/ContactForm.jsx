import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        inquiryType: "",
        message: "",
    });
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
        if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
        if (!formData.inquiryType.trim()) newErrors.inquiryType = "Please select an inquiry type";
        if (!formData.message.trim()) newErrors.message = "Message is required";
        else if (formData.message.trim().length < 8) newErrors.message = "Message must be at least 8 characters";
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
        setFormData({ name: "", email: "", phone: "", inquiryType: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <section
            data-testid="contact-form-section"
            id="contact-form"
            className="py-14 md:py-16 bg-[#F2F1EE]"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-7"
                    >
                        <p className="text-[#2A2D33] text-xs tracking-[0.30em] uppercase mb-3">
                            Get In Touch
                        </p>
                        <h2 className="text-3xl md:text-[40px] font-semibold text-[#1F2228] mb-2 leading-tight">
                            Send Us a Message
                        </h2>
                        <p className="text-[#494D54] text-sm md:text-base">
                            Fill out the form and our team will respond shortly.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.05 }}
                    >
                        <div className="bg-white border border-[#DDDAD4] rounded-lg p-6 md:p-8 shadow-sm">
                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center py-12 text-center"
                                    data-testid="form-success"
                                >
                                    <CheckCircle size={48} className="text-[#CFAF7A] mb-4" />
                                    <h3 className="text-[#1F2228] text-xl font-semibold mb-2">
                                        Message Sent!
                                    </h3>
                                    <p className="text-[#494D54] text-sm">
                                        Thank you for reaching out. We will get back to you shortly.
                                    </p>
                                </motion.div>
                            ) : (
                                <form
                                    onSubmit={handleSubmit}
                                    data-testid="contact-form"
                                    className="space-y-5"
                                    noValidate
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="text-[#4D5158] text-xs mb-1.5 block">Full Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                data-testid="contact-name-input"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className={`w-full bg-[#F9F8F6] border rounded-md px-3 py-2.5 text-[#1F2228] focus:outline-none text-sm ${
                                                    errors.name ? "border-red-500" : "border-[#E2DDD5] focus:border-[#D0AF7A]"
                                                }`}
                                            />
                                            {errors.name && <p data-testid="name-error" className="text-red-500 text-xs mt-1">{errors.name}</p>}
                                        </div>
                                        <div>
                                            <label className="text-[#4D5158] text-xs mb-1.5 block">Email Address</label>
                                            <input
                                                type="email"
                                                name="email"
                                                data-testid="contact-email-input"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className={`w-full bg-[#F9F8F6] border rounded-md px-3 py-2.5 text-[#1F2228] focus:outline-none text-sm ${
                                                    errors.email ? "border-red-500" : "border-[#E2DDD5] focus:border-[#D0AF7A]"
                                                }`}
                                            />
                                            {errors.email && <p data-testid="email-error" className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                        </div>
                                        <div>
                                            <label className="text-[#4D5158] text-xs mb-1.5 block">Phone Number</label>
                                            <input
                                                type="text"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className={`w-full bg-[#F9F8F6] border rounded-md px-3 py-2.5 text-[#1F2228] focus:outline-none text-sm ${
                                                    errors.phone ? "border-red-500" : "border-[#E2DDD5] focus:border-[#D0AF7A]"
                                                }`}
                                            />
                                            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                                        </div>
                                        <div>
                                            <label className="text-[#4D5158] text-xs mb-1.5 block">Inquiry Type</label>
                                            <select
                                                name="inquiryType"
                                                value={formData.inquiryType}
                                                onChange={handleChange}
                                                className={`w-full bg-[#F9F8F6] border rounded-md px-3 py-2.5 text-[#1F2228] focus:outline-none text-sm ${
                                                    errors.inquiryType ? "border-red-500" : "border-[#E2DDD5] focus:border-[#D0AF7A]"
                                                }`}
                                            >
                                                <option value="">Select Inquiry Type</option>
                                                <option value="residential">Residential</option>
                                                <option value="commercial">Commercial</option>
                                                <option value="industrial">Industrial</option>
                                            </select>
                                            {errors.inquiryType && <p className="text-red-500 text-xs mt-1">{errors.inquiryType}</p>}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-[#4D5158] text-xs mb-1.5 block">Message</label>
                                        <textarea
                                            name="message"
                                            data-testid="contact-message-input"
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className={`w-full bg-[#F9F8F6] border rounded-md px-3 py-2.5 text-[#1F2228] focus:outline-none text-sm resize-none ${
                                                errors.message ? "border-red-500" : "border-[#E2DDD5] focus:border-[#D0AF7A]"
                                            }`}
                                        />
                                        {errors.message && <p data-testid="message-error" className="text-red-500 text-xs mt-1">{errors.message}</p>}
                                    </div>

                                    <button
                                        type="submit"
                                        data-testid="contact-form-submit"
                                        className="mx-auto block bg-[#D8B98B] text-[#1D2025] px-7 py-2.5 rounded-md text-sm font-medium hover:bg-[#CCAB79] transition-colors duration-200"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className="mt-12">
                <iframe
                    title="Office location map"
                    src="https://maps.google.com/maps?q=Ahmedabad%20India&t=&z=12&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-[220px] md:h-[280px] border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </section>
    );
}
