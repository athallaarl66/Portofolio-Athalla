import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/heroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillSection } from "../components/SkillsSection";
import { ProjectSection } from "../components/ProjectSection";
import ContactContainer from "@/components/ContactContainer";
import Footer from "@/components/Footer";
// import { ThemeToggle } from "@/components/ThemeToggle";
import { BackgroundAurora } from "@/components/BackgroundAurora";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-border overflow-x-hidden">
      {/* Mode Web */}
      {/* <ThemeToggle /> */}
      {/* Background effects */}
      <BackgroundAurora />
      {/* Navbar */}
      <Navbar />
      {/* Konten */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillSection />
        <ProjectSection />
        <ContactContainer />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};
