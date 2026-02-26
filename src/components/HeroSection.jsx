import { Sparkles } from "lucide-react";
import profileImg from "/projects/propil.jpg";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 gap-12 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-background to-background" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.12),transparent_70%)]" />
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-primary/20 rounded-full blur-3xl animate-pulse-subtle" />
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-green-400/20 rounded-full blur-3xl animate-pulse-subtle delay-300" />

      {/* Profile Image */}
      <div className="flex justify-center md:justify-end w-full md:w-auto relative">
        <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-[2rem] bg-gradient-to-tr from-primary/20 to-green-400/20 blur-2xl -z-10" />
        <div className="relative w-48 h-48 md:w-64 md:h-72 rounded-[2rem] overflow-hidden border border-primary/30 shadow-lg shadow-primary/20">
          <img
            src={profileImg}
            alt="Athalla Arli"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Text */}
      <div className="text-center md:text-left max-w-xl space-y-6 z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
          <span className="block text-foreground opacity-0 animate-fade-in">
            Hi, I'm
          </span>
          <span className="block bg-gradient-to-r from-cyan-400 via-green-400 to-teal-500 bg-clip-text text-transparent opacity-0 animate-fade-in-delay-1">
            Athalla Arli
          </span>
        </h1>

        <p className="text-foreground/80 text-lg md:text-xl leading-relaxed opacity-0 animate-fade-in-delay-2">
          CS grad from Telkom University who builds web apps from design to
          deployment. I work mostly in React and Next.js, and I've shipped real
          products — for a law firm, a small business, and a school.
        </p>

        {/* CTA */}
        <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center opacity-0 animate-fade-in-delay-3">
          <a
            href="#projects"
            className="cosmic-button flex items-center gap-2 px-6 py-3 text-base font-semibold w-full sm:w-auto"
          >
            <Sparkles className="h-4 w-4" />
            View My Work
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary hover:text-background transition-all duration-300 font-semibold text-center"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};
