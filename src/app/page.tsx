import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ExperienceSection from "@/components/ExperienceSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/NavBar";
import ProjectsSection from "@/components/ProjectsSection";
import TechsSection from "@/components/TechsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar/>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <HeroSection />
        <AboutSection/>
        <ExperienceSection/>
        <TechsSection/>
        <ProjectsSection/>
        <ContactSection/>
      </div>
    </main>
  );
}
