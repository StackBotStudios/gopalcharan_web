import { Hero } from "../components/Hero";
import { AboutLegacy } from "../components/AboutLegacy";
import { SignatureDevelopments } from "../components/SignatureDevelopments";
import { OurImpact } from "../components/OurImpact";
import { Testimonials } from "../components/Testimonials";

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
            <OurImpact />
            <Testimonials />
        </>
    );
}
