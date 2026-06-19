import { Navbar } from "@/components/layout/Navbar";
import { AboutSection } from "@/components/AboutSection";
import { SkillSection } from "@/components/SkillsSection";
import { ProjectSection } from "@/components/ProjectSection";
import ContactContainer from "@/components/ContactContainer";
import Footer from "@/components/layout/Footer";
import { BackgroundAurora } from "@/components/effects/BackgroundAurora";
import { HeroSection } from "@/components/HeroSection";
import { GithubActivity } from "@/components/GithubActivity";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: "var(--background)", color: "var(--foreground)" }}>
      <div className="grain-overlay" aria-hidden="true" />

      {/* Aurora — deep green → forest green tones */}
      <BackgroundAurora
        colorStops={["#091413", "#285A48", "#408A71"]}
        amplitude={0.85}
        blend={0.38}
        speed={0.5}
      />

      <Navbar />

      <main>
        <HeroSection />
        <AboutSection id="about" />
        <SkillSection id="skills" />
        <GithubActivity />
        <ProjectSection id="projects" />
        <ContactContainer id="contact" />
      </main>

      <Footer />
    </div>
  );
}
