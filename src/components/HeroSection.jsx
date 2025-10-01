import { ArrowDown, Sparkles } from "lucide-react";
import profileImg from "/projects/Profile2.jpg";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 gap-12 overflow-hidden"
    >
      {/* 🌌 Background Gradients */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-background to-background" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.15),transparent_70%)]" />
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-primary/20 rounded-full blur-3xl animate-pulse-subtle" />
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-green-400/20 rounded-full blur-3xl animate-pulse-subtle delay-300" />

      {/* 🧍 Foto Profil */}
      <div className="flex justify-center md:justify-end w-full md:w-auto">
        <div className="relative w-48 h-48 md:w-64 md:h-72 rounded-[2rem] overflow-hidden border-2 border-primary/30 shadow-lg shadow-primary/30 animate-fade-in">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-primary/20 to-green-400/20 blur-xl -z-10" />
          <img
            src={profileImg}
            alt="Profile"
            className="w-full h-full object-cover transform scale-105 hover:scale-110 transition-transform duration-700 ease-out animate-float"
          />
        </div>
      </div>

      {/* 📝 Text Content */}
      <div className="text-center md:text-left max-w-xl space-y-6 z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
          <span className="block text-foreground opacity-0 animate-fade-in">
            Hi, I'm
          </span>
          <span className="block bg-gradient-to-r from-cyan-400 via-green-400 to-teal-500 bg-clip-text text-transparent opacity-0 animate-fade-in-delay-1">
            Athalla Arli
          </span>
        </h1>

        <p className="text-foreground/80 text-lg md:text-xl opacity-0 animate-fade-in-delay-2 leading-relaxed">
          A passionate <span className="text-primary font-semibold">UI/UX</span>{" "}
          and{" "}
          <span className="text-primary font-semibold">Frontend Developer</span>{" "}
          who loves building smooth, modern, and engaging digital experiences.
        </p>

        {/* ✨ CTA Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start opacity-0 animate-fade-in-delay-3">
          <a
            href="#projects"
            className="cosmic-button flex items-center gap-2 px-6 py-3 text-base font-semibold"
          >
            <Sparkles className="h-4 w-4" />
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary hover:text-background transition-all duration-300 font-semibold"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* 🖱️ Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce opacity-80">
        <span className="text-sm font-semibold text-foreground/60 mb-1">
          Scroll
        </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
