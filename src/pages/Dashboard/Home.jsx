import { Navbar } from "@/components/layout/Navbar";
import { AboutSection } from "@/components/AboutSection";
import { SkillSection } from "@/components/SkillsSection";
import { ProjectSection } from "@/components/ProjectSection";
import ContactContainer from "@/components/ContactContainer";
import Footer from "@/components/layout/Footer";
import { BackgroundAurora } from "@/components/effects/BackgroundAurora";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background effects */}
      <BackgroundAurora />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection id="about" />
        <SkillSection id="skills" />
        <ProjectSection id="projects" />
        <ContactContainer id="contact" />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
