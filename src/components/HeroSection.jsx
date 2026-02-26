import { ArrowDownRight, Github, Linkedin } from "lucide-react";
import profileImg from "/projects/propil.jpg";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 md:px-16 overflow-hidden"
    >
      {/* Grid lines */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow top-left */}
      <div
        className="absolute -top-60 -left-60 w-[700px] h-[700px] rounded-full -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(74,222,128,0.10) 0%, transparent 65%)",
        }}
      />
      {/* Glow bottom-right */}
      <div
        className="absolute -bottom-60 right-0 w-[500px] h-[500px] rounded-full -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(74,222,128,0.06) 0%, transparent 65%)",
        }}
      />

      {/* Accent lines */}
      <div className="absolute top-0 right-0 w-px h-64 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-0 right-24 w-px h-40 bg-gradient-to-b from-transparent via-primary/15 to-transparent" />
      <div className="absolute bottom-16 left-0 w-40 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="w-full max-w-7xl mx-auto">
        {/* FIX: min-h-screen ada di section bukan di grid child, grid cukup items-center */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0 items-center w-full pt-20 md:pt-0">
          {/* Left — Text */}
          <div className="md:col-span-7 space-y-8 z-10">
            {/* Name */}
            <div
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              <h1
                className="font-black leading-none tracking-tight"
                style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)" }}
              >
                <span className="block text-foreground">Athalla</span>
                <span
                  className="block"
                  style={{
                    WebkitTextStroke: "1.5px rgba(74, 222, 128, 0.35)",
                    color: "transparent",
                  }}
                >
                  Arli
                </span>
              </h1>
            </div>

            {/* Desc */}
            <p
              className="text-foreground/55 text-base md:text-lg leading-relaxed max-w-md font-light opacity-0 animate-fade-in"
              style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
            >
              Informatics grad from Telkom University, 2025. I design in Figma
              and ship in Next.js — built a POS app for a laundry business, a
              website for a Jakarta law firm, and a learning platform for my
              thesis. Frontend is where I live, full-stack when the project
              needs it.
            </p>

            {/* CTA */}
            <div
              className="flex flex-wrap items-center gap-4 pt-2 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                View My Work
                <ArrowDownRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-foreground/20 text-foreground/60 px-6 py-3 rounded-full text-sm font-semibold hover:border-primary hover:text-primary transition-all duration-300"
              >
                Contact
              </a>

              <div className="flex items-center gap-3 ml-1">
                <a
                  href="https://github.com/athallaarl66"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/35 hover:text-primary transition-colors duration-200"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/in/athalla-arli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/35 hover:text-primary transition-colors duration-200"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right — Photo + floating tags */}
          <div
            className="md:col-span-5 flex items-center justify-center md:justify-end opacity-0 animate-fade-in"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            {/* FIX: padding seimbang atas-bawah, floating tags pakai top-1/4 bukan fixed px */}
            <div className="relative py-12 pl-16 pr-10">
              {/* Corner accents */}
              <div className="absolute top-9 right-7 w-16 h-16 border-t border-r border-primary/40 rounded-tr-2xl pointer-events-none" />
              <div className="absolute bottom-9 left-12 w-16 h-16 border-b border-l border-primary/20 rounded-bl-2xl pointer-events-none" />

              {/* Photo */}
              <div
                className="w-56 h-64 md:w-64 md:h-80 rounded-2xl overflow-hidden"
                style={{
                  boxShadow:
                    "0 0 0 1px rgba(255,255,255,0.08), 0 24px 48px rgba(0,0,0,0.5)",
                }}
              >
                <img
                  src={profileImg}
                  alt="Athalla Arli"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating tag — stack */}
              <div
                className="absolute left-0 top-1/4 bg-background/90 backdrop-blur-sm border border-foreground/10 rounded-xl px-4 py-3"
                style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.35)" }}
              >
                <p className="text-xs text-foreground/40 font-mono mb-1">
                  stack
                </p>
                <p className="text-sm font-semibold text-foreground">
                  Next.js · React
                </p>
                <p className="text-sm font-semibold text-foreground">
                  Prisma · Postgres
                </p>
              </div>

              {/* Floating tag — based */}
              <div
                className="absolute right-0 bottom-1/4 bg-background/90 backdrop-blur-sm border border-foreground/10 rounded-xl px-4 py-2"
                style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.35)" }}
              >
                <p className="text-xs text-foreground/40 font-mono">based in</p>
                <p className="text-sm font-semibold text-foreground">
                  Bandung 🇮🇩
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
        >
          <span className="text-xs font-mono text-foreground/30 tracking-widest uppercase">
            scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-foreground/30 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
};
