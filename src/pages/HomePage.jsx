import { Hero } from "../components/Hero";
import { AboutLegacy } from "../components/AboutLegacy";
import { SignatureDevelopments } from "../components/SignatureDevelopments";
import { OurVision } from "../components/OurVision";
import { OurImpact } from "../components/OurImpact";
import { Testimonials } from "../components/Testimonials";
import { CTABanner } from "../components/CTABanner";

export default function HomePage() {
    return (
        <>
            <Hero
                title="Building Landmarks That Define Tomorrow"
                cta1Label="View Projects"
                cta1Path="/projects"
                cta2Label="Contact Sales"
                cta2Path="/contact"
            />
            <AboutLegacy />
            <SignatureDevelopments />
            <OurVision />
            <OurImpact />
            <Testimonials />
            <CTABanner />
        </>
    );
}
