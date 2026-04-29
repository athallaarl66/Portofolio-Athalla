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
      {/* Grain texture overlay — subtle handcrafted feel */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Aurora — pure green tones, no purple */}
      <BackgroundAurora
        colorStops={["#020617", "#10b981", "#06b6d4"]}
        amplitude={1.1}
        blend={0.45}
        speed={0.8}
      />

      <Navbar />

      <main>
        <HeroSection />
        <AboutSection id="about" />
        <SkillSection id="skills" />
        <ProjectSection id="projects" />
        <ContactContainer id="contact" />
      </main>

      <Footer />
    </div>
  );
}
