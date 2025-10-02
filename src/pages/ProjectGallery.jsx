import { BackgroundAurora } from "@/components/BackgroundAurora";
import { Navbar } from "@/components/Navbar";
import { ThemeToggle } from "@/components/ThemeToggle";

export const ProjectGallery = () => {
  return (
    <div className="min-h-screen bg-background text-border overflow-x-hidden">
      {/* Mode Web */}
      <ThemeToggle />
      {/* Background effects */}
      <BackgroundAurora />
      {/* Navbar */}
      <Navbar />
      {/* Konten */}
      <main></main>
      {/* Footer */}
    </div>
  );
};
