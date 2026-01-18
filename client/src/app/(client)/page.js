'use client'



import Navbar from "@/components/front-UI/nav-layout/navbar";
import AboutSection from "@/components/front-UI/home/about-section";
import SkillSection from "@/components/front-UI/home/skill-section";
import HeroSection from "@/components/front-UI/home/hero-section";
import ProjectSection from "@/components/front-UI/home/project-section";
import ContactPage from "@/components/front-UI/home/contact-page";
import FooterSection from "@/components/front-UI/home/footer-section";


export default function Home() {

    return (
        <div className="">
            {/* Navbar */}
            <Navbar />

            {/* Hero */}
            <HeroSection />

            {/* About me*/}
            <AboutSection />

            {/* Skills - simplified version */}
            <SkillSection />

            {/* Projects - teaser */}
            <ProjectSection />

        </div>
    );
}