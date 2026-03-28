import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { CloudUpload, ChevronDown, X, FileText } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { submitToFormBold } from "@/lib/formbold";

const CAREER_BG = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80";

const positions = [
    "Site Engineer",
    "Project Manager",
    "Civil Engineer",
    "Sales Executive",
    "Business Development Manager",
    "Admin & Operations",
    "Finance & Accounts",
    "Other",
];

const experienceOptions = [
    "0 - 1 Year (Fresher)",
    "1 - 3 Years",
    "3 - 5 Years",
    "5 - 10 Years",
    "10+ Years",
];

const channelFocusOptions = [
    "Residential",
    "Commercial",
    "Industrial",
    "Mixed / Multiple",
];

function FormInput({ label, id, type = "text", placeholder, value, onChange, error, required }) {
    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1.5">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <input
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                data-testid={`career-${id}`}
                className={`w-full bg-white border rounded px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none transition-colors duration-200 ${
                    error
                        ? "border-red-400 focus:border-red-500"
                        : "border-gray-300 focus:border-[#D4A76A]"
                }`}
            />
            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>
    );
}

function FormSelect({ label, id, value, onChange, options, placeholder, error, required }) {
    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1.5">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <div className="relative">
                <select
                    id={id}
                    value={value}
                    onChange={onChange}
                    data-testid={`career-${id}`}
                    className={`w-full bg-white border rounded px-4 py-3 text-sm appearance-none cursor-pointer focus:outline-none transition-colors duration-200 ${
                        value === "" ? "text-gray-400" : "text-gray-800"
                    } ${
                        error
                            ? "border-red-400 focus:border-red-500"
                            : "border-gray-300 focus:border-[#D4A76A]"
                    }`}
                >
                    <option value="" disabled>{placeholder}</option>
                    {options.map((opt) => (
                        <option key={opt} value={opt} className="text-gray-800">
                            {opt}
                        </option>
                    ))}
                </select>
                <ChevronDown
                    size={16}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                />
            </div>
            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>
    );
}

export default function CareerPage() {
    const fileInputRef = useRef(null);
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        phone: "",
        location: "",
        position: "",
        experience: "",
        message: "",
    });
    const [resume, setResume] = useState(null);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [dragOver, setDragOver] = useState(false);
    const [careerSubmitting, setCareerSubmitting] = useState(false);
    const [careerSubmitError, setCareerSubmitError] = useState("");

    const [partnerForm, setPartnerForm] = useState({
        companyName: "",
        contactName: "",
        email: "",
        phone: "",
        city: "",
        channelFocus: "",
        message: "",
    });
    const [partnerErrors, setPartnerErrors] = useState({});
    const [partnerSubmitted, setPartnerSubmitted] = useState(false);
    const [partnerSubmitting, setPartnerSubmitting] = useState(false);
    const [partnerSubmitError, setPartnerSubmitError] = useState("");

    const [activeTab, setActiveTab] = useState("career");

    useEffect(() => {
        const hash = window.location.hash.slice(1);
        if (hash === "channel-partner") setActiveTab("partner");
    }, []);

    const handleChange = (field) => (e) => {
        setForm((prev) => ({ ...prev, [field]: e.target.value }));
        if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
    };

    const handlePartnerChange = (field) => (e) => {
        setPartnerForm((prev) => ({ ...prev, [field]: e.target.value }));
        if (partnerErrors[field]) setPartnerErrors((prev) => ({ ...prev, [field]: "" }));
    };

    const validatePartner = () => {
        const e = {};
        if (!partnerForm.companyName.trim()) e.companyName = "Company or firm name is required.";
        if (!partnerForm.contactName.trim()) e.contactName = "Contact name is required.";
        if (!partnerForm.email.trim()) e.email = "Email is required.";
        else if (!/^\S+@\S+\.\S+$/.test(partnerForm.email)) e.email = "Enter a valid email address.";
        if (!partnerForm.phone.trim()) e.phone = "Phone number is required.";
        if (!partnerForm.city.trim()) e.city = "City is required.";
        if (!partnerForm.channelFocus) e.channelFocus = "Please select an area of interest.";
        return e;
    };

    const handlePartnerSubmit = async (e) => {
        e.preventDefault();
        setPartnerSubmitError("");
        const validationErrors = validatePartner();
        if (Object.keys(validationErrors).length > 0) {
            setPartnerErrors(validationErrors);
            return;
        }
        const fd = new FormData();
        fd.append("email", partnerForm.email.trim());
        fd.append("subject", `Channel partner — ${partnerForm.companyName.trim()}`);
        fd.append(
            "message",
            `Company / firm: ${partnerForm.companyName.trim()}\nContact: ${partnerForm.contactName.trim()}\nPhone: ${partnerForm.phone.trim()}\nCity: ${partnerForm.city.trim()}\nPrimary focus: ${partnerForm.channelFocus}\n\n${(partnerForm.message || "").trim() || "(no additional message)"}`
        );
        setPartnerSubmitting(true);
        try {
            const res = await submitToFormBold(fd);
            if (!res.ok) throw new Error("Bad response");
            setPartnerSubmitted(true);
            setPartnerForm({
                companyName: "",
                contactName: "",
                email: "",
                phone: "",
                city: "",
                channelFocus: "",
                message: "",
            });
        } catch {
            setPartnerSubmitError("Could not send. Please try again or contact us by phone or email.");
        } finally {
            setPartnerSubmitting(false);
        }
    };

    const handleFile = (file) => {
        if (!file) return;
        const validTypes = ["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
        if (!validTypes.includes(file.type)) {
            setErrors((prev) => ({ ...prev, resume: "Only PDF or DOCX files are accepted." }));
            return;
        }
        if (file.size > 5 * 1024 * 1024) {
            setErrors((prev) => ({ ...prev, resume: "File size must be under 5 MB." }));
            return;
        }
        setResume(file);
        setErrors((prev) => ({ ...prev, resume: "" }));
    };

    const validate = () => {
        const e = {};
        if (!form.fullName.trim()) e.fullName = "Full name is required.";
        if (!form.email.trim()) e.email = "Email is required.";
        else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email address.";
        if (!form.phone.trim()) e.phone = "Phone number is required.";
        if (!form.location.trim()) e.location = "Current location is required.";
        if (!form.position) e.position = "Please select a position.";
        if (!form.experience) e.experience = "Please select your experience.";
        return e;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setCareerSubmitError("");
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        const fd = new FormData();
        fd.append("email", form.email.trim());
        fd.append("subject", `Career application — ${form.position}`);
        fd.append(
            "message",
            `Name: ${form.fullName.trim()}\nPhone: ${form.phone.trim()}\nLocation: ${form.location.trim()}\nPosition: ${form.position}\nExperience: ${form.experience}\n\n${(form.message || "").trim() || "(no message)"}`
        );
        if (resume) fd.append("file", resume, resume.name);
        setCareerSubmitting(true);
        try {
            const res = await submitToFormBold(fd);
            if (!res.ok) throw new Error("Bad response");
            setSubmitted(true);
            setResume(null);
            if (fileInputRef.current) fileInputRef.current.value = "";
            setForm({
                fullName: "",
                email: "",
                phone: "",
                location: "",
                position: "",
                experience: "",
                message: "",
            });
        } catch {
            setCareerSubmitError("Could not send. Please try again or email your resume directly.");
        } finally {
            setCareerSubmitting(false);
        }
    };

    return (
        <>
            {/* Hero Section */}
            <section
                data-testid="career-hero-section"
                className="relative flex items-center overflow-hidden"
                style={{ minHeight: "56vh" }}
            >
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${CAREER_BG})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/50" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <p className="text-[#D4A76A] text-xs tracking-[0.35em] uppercase mb-4">
                            Career
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight max-w-3xl">
                            Build Your Career With Gopal Charan
                        </h1>
                        <p className="text-white/75 text-base mb-8 max-w-2xl leading-relaxed">
                            Join a team building landmark developments across residential, commercial,
                            and industrial sectors.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="#career-forms"
                                data-testid="career-apply-now-hero"
                                onClick={() => setActiveTab("career")}
                                className="bg-[#D4A76A] text-[#1E1E1E] px-7 py-3.5 text-sm font-semibold hover:bg-[#E0CC9C] transition-colors duration-200 inline-block text-center"
                            >
                                Apply Now
                            </a>
                            <a
                                href="#career-forms"
                                data-testid="career-channel-partner-btn"
                                onClick={() => setActiveTab("partner")}
                                className="border border-[#D4A76A] text-[#D4A76A] px-7 py-3.5 text-sm font-semibold hover:bg-[#D4A76A] hover:text-[#1E1E1E] transition-all duration-200 inline-block text-center"
                            >
                                Become a channel partner
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Forms (tabs) */}
            <section
                id="career-forms"
                data-testid="career-form-section"
                className="py-20 lg:py-28 bg-[#F8F5F0]"
            >
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-10"
                    >
                        <p className="text-[#D4A76A] text-xs tracking-[0.32em] uppercase mb-3">
                            Join Our Team
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                            Get started
                        </h2>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-xl mx-auto">
                            Apply for a role or register as a channel partner — choose a tab below.
                        </p>
                    </motion.div>

                    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                        <TabsList
                            className="grid w-full max-w-lg mx-auto grid-cols-2 h-12 rounded-lg bg-[#E8E4DD] p-1 text-gray-600 mb-8"
                            data-testid="career-forms-tabs"
                        >
                            <TabsTrigger
                                value="career"
                                className="rounded-md text-sm font-semibold data-[state=active]:bg-white data-[state=active]:text-[#1E1E1E] data-[state=active]:shadow-sm"
                            >
                                Job application
                            </TabsTrigger>
                            <TabsTrigger
                                value="partner"
                                className="rounded-md text-sm font-semibold data-[state=active]:bg-white data-[state=active]:text-[#1E1E1E] data-[state=active]:shadow-sm"
                            >
                                Channel partner
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="career" className="mt-0 outline-none">
                            <p className="text-center text-gray-500 text-sm mb-6 max-w-lg mx-auto">
                                Share your details and our team will reach out if a suitable opportunity is available.
                            </p>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 lg:p-10"
                    >
                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center justify-center py-16 text-center"
                                data-testid="career-form-success"
                            >
                                <div className="w-16 h-16 bg-[#D4A76A]/15 rounded-full flex items-center justify-center mb-5">
                                    <svg className="w-8 h-8 text-[#D4A76A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-gray-800 text-2xl font-semibold mb-2">
                                    Application Submitted!
                                </h3>
                                <p className="text-gray-500 text-sm max-w-sm">
                                    Thank you for your interest in Gopal Charan. Our team will review
                                    your application and get back to you soon.
                                </p>
                            </motion.div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                data-testid="career-form"
                                noValidate
                            >
                                {/* Row 1: Full Name + Email */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <FormInput
                                        label="Full name"
                                        id="fullName"
                                        placeholder="Enter your full name"
                                        value={form.fullName}
                                        onChange={handleChange("fullName")}
                                        error={errors.fullName}
                                        required
                                    />
                                    <FormInput
                                        label="Email Address"
                                        id="email"
                                        type="email"
                                        placeholder="Enter your email"
                                        value={form.email}
                                        onChange={handleChange("email")}
                                        error={errors.email}
                                        required
                                    />
                                </div>

                                {/* Row 2: Phone + Location */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <FormInput
                                        label="Phone Number"
                                        id="phone"
                                        type="tel"
                                        placeholder="+91 XXXXX XXXXX"
                                        value={form.phone}
                                        onChange={handleChange("phone")}
                                        error={errors.phone}
                                        required
                                    />
                                    <FormInput
                                        label="Current Location"
                                        id="location"
                                        placeholder="City, State"
                                        value={form.location}
                                        onChange={handleChange("location")}
                                        error={errors.location}
                                        required
                                    />
                                </div>

                                {/* Row 3: Position + Experience */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <FormSelect
                                        label="Position Applying For"
                                        id="position"
                                        value={form.position}
                                        onChange={handleChange("position")}
                                        options={positions}
                                        placeholder="Select Position"
                                        error={errors.position}
                                        required
                                    />
                                    <FormSelect
                                        label="Years of experience"
                                        id="experience"
                                        value={form.experience}
                                        onChange={handleChange("experience")}
                                        options={experienceOptions}
                                        placeholder="Select Experience"
                                        error={errors.experience}
                                        required
                                    />
                                </div>

                                {/* Upload Resume */}
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                        Upload Resume
                                    </label>
                                    <div
                                        data-testid="career-resume-upload"
                                        onClick={() => fileInputRef.current?.click()}
                                        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                                        onDragLeave={() => setDragOver(false)}
                                        onDrop={(e) => {
                                            e.preventDefault();
                                            setDragOver(false);
                                            const file = e.dataTransfer.files[0];
                                            if (file) handleFile(file);
                                        }}
                                        className={`border-2 border-dashed rounded-lg p-8 flex flex-col items-center justify-center cursor-pointer transition-colors duration-200 ${
                                            dragOver
                                                ? "border-[#D4A76A] bg-[#D4A76A]/5"
                                                : resume
                                                ? "border-[#D4A76A]/60 bg-[#D4A76A]/5"
                                                : "border-gray-300 hover:border-[#D4A76A]/50 bg-gray-50"
                                        }`}
                                    >
                                        {resume ? (
                                            <div className="flex items-center gap-3">
                                                <FileText size={24} className="text-[#D4A76A]" />
                                                <div>
                                                    <p className="text-gray-800 text-sm font-medium">{resume.name}</p>
                                                    <p className="text-gray-400 text-xs">
                                                        {(resume.size / 1024 / 1024).toFixed(2)} MB
                                                    </p>
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={(e) => { e.stopPropagation(); setResume(null); }}
                                                    className="ml-2 text-gray-400 hover:text-red-500 transition-colors"
                                                >
                                                    <X size={16} />
                                                </button>
                                            </div>
                                        ) : (
                                            <>
                                                <CloudUpload size={32} className="text-gray-400 mb-3" />
                                                <p className="text-gray-700 text-sm font-medium">
                                                    Click to upload your resume
                                                </p>
                                                <p className="text-gray-400 text-xs mt-1">
                                                    Acceptable file type : DOCX, PDF (5 MB max)
                                                </p>
                                            </>
                                        )}
                                    </div>
                                    <input
                                        ref={fileInputRef}
                                        type="file"
                                        accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                        className="hidden"
                                        onChange={(e) => handleFile(e.target.files[0])}
                                    />
                                    {errors.resume && (
                                        <p className="text-red-500 text-xs mt-1">{errors.resume}</p>
                                    )}
                                </div>

                                {/* Message */}
                                <div className="mb-8">
                                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                        Message <span className="text-gray-400 font-normal">(optional)</span>
                                    </label>
                                    <textarea
                                        data-testid="career-message"
                                        value={form.message}
                                        onChange={handleChange("message")}
                                        rows={4}
                                        placeholder="Tell us more about yourself or your interest..."
                                        className="w-full bg-white border border-gray-300 rounded px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#D4A76A] transition-colors duration-200 resize-none"
                                    />
                                </div>

                                {careerSubmitError && (
                                    <p className="text-red-600 text-sm text-center mb-4" data-testid="career-submit-error">
                                        {careerSubmitError}
                                    </p>
                                )}
                                {/* Submit Button */}
                                <div className="flex justify-center">
                                    <button
                                        type="submit"
                                        disabled={careerSubmitting}
                                        data-testid="career-submit-btn"
                                        className="bg-[#D4A76A] text-[#1E1E1E] px-16 py-4 text-sm font-semibold hover:bg-[#E0CC9C] transition-colors duration-200 tracking-wide disabled:opacity-60 disabled:cursor-not-allowed"
                                    >
                                        {careerSubmitting ? "Sending…" : "Apply Now"}
                                    </button>
                                </div>
                            </form>
                        )}
                    </motion.div>
                        </TabsContent>

                        <TabsContent
                            value="partner"
                            className="mt-0 outline-none"
                            data-testid="career-channel-partner-section"
                        >
                            <p className="text-center text-gray-500 text-sm mb-6 max-w-lg mx-auto">
                                Register your interest to collaborate with Gopal Charan on residential, commercial, and industrial opportunities.
                            </p>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.05 }}
                        className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 lg:p-10"
                    >
                        {partnerSubmitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center justify-center py-16 text-center"
                                data-testid="career-channel-partner-success"
                            >
                                <div className="w-16 h-16 bg-[#D4A76A]/15 rounded-full flex items-center justify-center mb-5">
                                    <svg className="w-8 h-8 text-[#D4A76A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-gray-800 text-2xl font-semibold mb-2">
                                    Inquiry received
                                </h3>
                                <p className="text-gray-500 text-sm max-w-sm">
                                    Thank you. Our partnerships team will contact you shortly.
                                </p>
                            </motion.div>
                        ) : (
                            <form
                                onSubmit={handlePartnerSubmit}
                                data-testid="career-channel-partner-form"
                                noValidate
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <FormInput
                                        label="Company / firm name"
                                        id="partnerCompanyName"
                                        placeholder="Registered business name"
                                        value={partnerForm.companyName}
                                        onChange={handlePartnerChange("companyName")}
                                        error={partnerErrors.companyName}
                                        required
                                    />
                                    <FormInput
                                        label="Contact person"
                                        id="partnerContactName"
                                        placeholder="Full name"
                                        value={partnerForm.contactName}
                                        onChange={handlePartnerChange("contactName")}
                                        error={partnerErrors.contactName}
                                        required
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <FormInput
                                        label="Email address"
                                        id="partnerEmail"
                                        type="email"
                                        placeholder="you@company.com"
                                        value={partnerForm.email}
                                        onChange={handlePartnerChange("email")}
                                        error={partnerErrors.email}
                                        required
                                    />
                                    <FormInput
                                        label="Phone number"
                                        id="partnerPhone"
                                        type="tel"
                                        placeholder="+91 XXXXX XXXXX"
                                        value={partnerForm.phone}
                                        onChange={handlePartnerChange("phone")}
                                        error={partnerErrors.phone}
                                        required
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <FormInput
                                        label="City"
                                        id="partnerCity"
                                        placeholder="City, State"
                                        value={partnerForm.city}
                                        onChange={handlePartnerChange("city")}
                                        error={partnerErrors.city}
                                        required
                                    />
                                    <FormSelect
                                        label="Primary focus"
                                        id="partnerChannelFocus"
                                        value={partnerForm.channelFocus}
                                        onChange={handlePartnerChange("channelFocus")}
                                        options={channelFocusOptions}
                                        placeholder="Select focus area"
                                        error={partnerErrors.channelFocus}
                                        required
                                    />
                                </div>
                                <div className="mb-8">
                                    <label htmlFor="partnerMessage" className="block text-sm font-medium text-gray-700 mb-1.5">
                                        Message <span className="text-gray-400 font-normal">(optional)</span>
                                    </label>
                                    <textarea
                                        id="partnerMessage"
                                        data-testid="career-partnerMessage"
                                        value={partnerForm.message}
                                        onChange={handlePartnerChange("message")}
                                        rows={4}
                                        placeholder="Briefly describe your business and how you would like to partner with us..."
                                        className="w-full bg-white border border-gray-300 rounded px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#D4A76A] transition-colors duration-200 resize-none"
                                    />
                                </div>
                                {partnerSubmitError && (
                                    <p className="text-red-600 text-sm text-center mb-4" data-testid="career-partner-submit-error">
                                        {partnerSubmitError}
                                    </p>
                                )}
                                <div className="flex justify-center">
                                    <button
                                        type="submit"
                                        disabled={partnerSubmitting}
                                        data-testid="career-channel-partner-submit"
                                        className="bg-[#D4A76A] text-[#1E1E1E] px-16 py-4 text-sm font-semibold hover:bg-[#E0CC9C] transition-colors duration-200 tracking-wide disabled:opacity-60 disabled:cursor-not-allowed"
                                    >
                                        {partnerSubmitting ? "Sending…" : "Submit inquiry"}
                                    </button>
                                </div>
                            </form>
                        )}
                    </motion.div>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>
        </>
    );
}
