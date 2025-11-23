import { BackgroundAurora } from "@/components/BackgroundAurora";
import Carousel from "@/components/Carousel";
import ContactContainer from "@/components/ContactContainer";
import Footer from "@/components/FooterGallery";
import { NavbarGallery } from "@/components/NavbarGallery";
import { ThemeToggle } from "@/components/ThemeToggle";

export const ProjectGallery = () => {
  return (
    <div className="min-h-screen bg-background text-border overflow-x-hidden">
      {/* Mode Web */}
      <ThemeToggle />
      {/* Background effects */}
      <BackgroundAurora />
      {/* Navbar */}
      <NavbarGallery />
      {/* Konten */}
      <main>
        <Carousel />
        <ContactContainer />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};
