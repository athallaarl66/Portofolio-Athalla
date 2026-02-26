import { ArrowUpRight } from "lucide-react";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-20 md:py-32 px-4 md:px-16 relative bg-background overflow-hidden"
    >
      {/* Accent line - hide di mobile */}
      <div className="hidden md:block absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-foreground/8 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-12 md:mb-16">
          <span className="text-xs font-mono text-foreground/30 tracking-widest uppercase">
            02 — About
          </span>
          <div className="flex-1 h-px bg-foreground/8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
          {/* Left — heading + identity + image */}
          <div className="md:col-span-5 space-y-5 md:space-y-6">
            {/* Heading - responsive font size */}
            <h2
              className="font-black leading-none tracking-tight text-foreground opacity-0 animate-fade-in"
              style={{
                fontSize: "clamp(2rem, 5vw, 4.5rem)",
                animationDelay: "0.1s",
                animationFillMode: "forwards",
              }}
            >
              Building
              <br />
              <span
                style={{
                  WebkitTextStroke: "1px rgba(74,222,128,0.3)",
                  color: "transparent",
                }}
              >
                things
              </span>
              <br />
              that work.
            </h2>
            <div
              className="flex flex-wrap gap-2 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
            >
              {["Full-Stack Dev", "Frontend Background", "UI/UX"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-3 py-1 rounded-full border border-primary/40 text-primary/80 bg-primary/8"
                  style={{ boxShadow: "0 0 8px rgba(74,222,128,0.12)" }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* highlight card */}
            <div
              className="relative w-full mt-4 p-4 rounded-xl border border-primary/15 bg-primary/5 opacity-0 animate-fade-in"
              style={{
                boxShadow: "0 0 16px rgba(74,222,128,0.06)",
                animationDelay: "0.2s",
                animationFillMode: "forwards",
              }}
            >
              <p className="text-xs font-mono text-primary/50 mb-2">
                currently open to
              </p>{" "}
              <p className="text-sm text-foreground/70 font-light leading-relaxed">
                Frontend, Full-Stack, Software Engineer, or UI/UX — remote,
                onsite, hybrid. Anywhere works.
              </p>
            </div>
          </div>

          {/* Right — bio + CTA */}
          <div
            className="md:col-span-7 space-y-6 md:space-y-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
          >
            {/* Available tag */}
            <div className="inline-flex items-center gap-2 border border-foreground/10 rounded-full px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-mono text-foreground/50">
                Available for work
              </span>
            </div>

            {/* Bio - responsive text size */}
            <div className="space-y-4 md:space-y-5 text-foreground/60 leading-relaxed text-sm md:text-lg font-light">
              <p>
                Informatics grad from Telkom University, 2025. Frontend is where
                I'm most comfortable — React, Next.js, Tailwind — but I've
                shipped full-stack projects on my own too. A POS web app for a
                laundry UMKM, a corporate site for a Jakarta law firm, and a
                Sundanese script learning platform for my undergraduate thesis.
              </p>
              <p>
                The thesis was a proper research project — used the
                User-Centered Design method, went to SMAN 24 Bandung to
                understand how students actually struggled with the script,
                built prototypes, tested them, then built the final app based on
                what I found.
              </p>
              <p>
                I started from the frontend but I'm pushing further — system
                design, backend architecture, and how everything connects at
                scale is where I'm headed. I want to understand the full
                picture, not just the surface.
              </p>
            </div>

            {/* Stats - responsive */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 py-5 md:py-6 border-t border-b border-foreground/8">
              {[
                { num: "3", label: "Projects shipped" },
                { num: "1", label: "Internship" },
                { num: "2025", label: "Graduated" },
              ].map(({ num, label }) => (
                <div key={label}>
                  <p className="text-xl md:text-2xl font-black text-foreground">
                    {num}
                  </p>
                  <p className="text-xs text-foreground/40 font-mono mt-1">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA - responsive */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-foreground text-background px-5 py-2.5 md:px-6 md:py-3 rounded-full text-xs md:text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Get in touch
                <ArrowUpRight className="h-3.5 w-3.5 md:h-4 md:w-4" />
              </a>
              <a
                href="/projects2/CV_IT_Athalla-Arli-Abhinaya_ENGLISH.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-foreground/15 text-foreground/60 px-5 py-2.5 md:px-6 md:py-3 rounded-full text-xs md:text-sm font-semibold hover:border-foreground/40 hover:text-foreground transition-all duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
