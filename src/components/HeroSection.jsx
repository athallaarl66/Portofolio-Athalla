import { ArrowDownRight, Github, Linkedin } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import profileImg from "/projects/propil.jpg";

/* ============================================
   HERO SECTION
   ============================================ */
export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-4 md:px-16 overflow-hidden"
    >
      {/* Grid lines - responsive */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px md:60px 60px",
        }}
      />

      {/* Glow top-left - responsive */}
      <div
        className="absolute -top-40 -left-40 w-[400px] h-[400px] md:-top-60 md:-left-60 md:w-[700px] md:h-[700px] rounded-full -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(74,222,128,0.10) 0%, transparent 65%)",
        }}
      />

      {/* Glow bottom-right - responsive */}
      <div
        className="absolute -bottom-40 right-0 w-[300px] h-[300px] md:-bottom-60 md:right-0 md:w-[500px] md:h-[500px] rounded-full -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(74,222,128,0.06) 0%, transparent 65%)",
        }}
      />

      {/* Accent lines - hide di mobile */}
      <div className="hidden md:block absolute top-0 right-0 w-px h-64 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
      <div className="hidden md:block absolute top-0 right-24 w-px h-40 bg-gradient-to-b from-transparent via-primary/15 to-transparent" />
      <div className="hidden md:block absolute bottom-16 left-0 w-40 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-0 items-center w-full pt-20 md:pt-0">
          {/* Left — Text */}
          <div className="md:col-span-7 space-y-6 md:space-y-8 z-10">
            {/* Name */}
            <div
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              <h1
                className="font-black leading-none tracking-tight"
                style={{ fontSize: "clamp(2.25rem, 8vw, 7rem)" }}
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
              className="text-foreground/55 text-sm md:text-lg leading-relaxed max-w-md font-light opacity-0 animate-fade-in"
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
              className="flex flex-wrap items-center gap-3 pt-2 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 bg-foreground text-background px-5 py-2.5 md:px-6 md:py-3 rounded-full text-xs md:text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                View My Work
                <ArrowDownRight className="h-3.5 w-3.5 md:h-4 md:w-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-foreground/20 text-foreground/60 px-5 py-2.5 md:px-6 md:py-3 rounded-full text-xs md:text-sm font-semibold hover:border-primary hover:text-primary transition-all duration-300"
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
                  <Github className="h-4 w-4 md:h-5 md:w-5" />
                </a>
                <a
                  href="https://linkedin.com/in/athalla-arli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/35 hover:text-primary transition-colors duration-200"
                >
                  <Linkedin className="h-4 w-4 md:h-5 md:w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right — Photo */}
          <div
            className="md:col-span-5 flex items-center justify-center md:justify-end mt-8 md:mt-0 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            <div className="relative py-8 pl-8 pr-6 md:py-12 md:pl-16 md:pr-10">
              {/* Corner accents - responsive */}
              <div className="absolute top-6 right-5 w-10 h-10 md:top-9 md:right-7 md:w-16 md:h-16 border-t border-r border-primary/40 rounded-tr-xl md:rounded-tr-2xl pointer-events-none" />
              <div className="absolute bottom-6 left-8 w-10 h-10 md:bottom-9 md:left-12 md:w-16 md:h-16 border-b border-l border-primary/20 rounded-bl-xl md:rounded-bl-2xl pointer-events-none" />

              {/* Photo */}
              <div
                className="w-48 h-60 md:w-64 md:h-80 rounded-xl md:rounded-2xl overflow-hidden"
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

              {/* Floating tags - HIDE DI MOBILE, show di md+ */}
              <div
                className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-background/90 backdrop-blur-sm border border-foreground/10 rounded-xl px-4 py-3"
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

              <div
                className="hidden md:block absolute right-0 bottom-1/2 translate-y-4 bg-background/90 backdrop-blur-sm border border-foreground/10 rounded-xl px-4 py-2"
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

        {/* Scroll hint - responsive */}
        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
        >
          <span className="text-xs font-mono text-foreground/30 tracking-widest uppercase">
            scroll
          </span>
          <div className="w-px h-6 md:h-8 bg-gradient-to-b from-foreground/30 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
};
