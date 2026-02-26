import { ArrowUpRight } from "lucide-react";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-32 px-6 md:px-16 relative bg-background overflow-hidden"
    >
      <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-foreground/8 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-16">
          <span className="text-xs font-mono text-foreground/30 tracking-widest uppercase">
            02 — About
          </span>
          <div className="flex-1 h-px bg-foreground/8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
          {/* Left — heading + identity + image */}
          <div className="md:col-span-5 space-y-6">
            <h2
              className="font-black leading-none tracking-tight text-foreground opacity-0 animate-fade-in"
              style={{
                fontSize: "clamp(2.8rem, 6vw, 5rem)",
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

            {/* Identity tags — kasih tau siapa kamu sebelum baca bio */}
            <div
              className="flex flex-wrap gap-2 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
            >
              {["Full-Stack Dev", "Frontend Background", "UI/UX"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-3 py-1 rounded-full border border-foreground/10 text-foreground/40"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Image */}
            <div
              className="relative w-full max-w-xs mt-4 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
            >
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t border-l border-primary/40" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b border-r border-primary/20" />
              <img
                src="/icons/Logo.jpg"
                alt="Athalla Arli"
                className="w-full h-56 object-cover rounded-lg transition-all duration-700"
                style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.06)" }}
              />
            </div>
          </div>

          {/* Right — bio + CTA */}
          <div
            className="md:col-span-7 space-y-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
          >
            {/* Available tag */}
            <div className="inline-flex items-center gap-2 border border-foreground/10 rounded-full px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-mono text-foreground/50">
                Available for work
              </span>
            </div>

            <div className="space-y-5 text-foreground/60 leading-relaxed text-base md:text-lg font-light">
              <p>
                Informatics grad from Telkom University, 2025. Frontend is where
                I'm most comfortable — React, Next.js, Tailwind — but I've
                shipped full-stack projects on my own too: a POS web app for a
                laundry UMKM with ordering flow, admin dashboard, and auth; a
                corporate site for a Jakarta law firm; and a Sundanese script
                learning platform for my undergraduate thesis.
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

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 py-6 border-t border-b border-foreground/8">
              {[
                { num: "3", label: "Projects shipped" },
                { num: "1", label: "Internship" },
                { num: "2025", label: "Graduated" },
              ].map(({ num, label }) => (
                <div key={label}>
                  <p className="text-2xl font-black text-foreground">{num}</p>
                  <p className="text-xs text-foreground/40 font-mono mt-1">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Get in touch
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="/projects2/CV_IT_Athalla-Arli-Abhinaya_ENGLISH.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-foreground/15 text-foreground/60 px-6 py-3 rounded-full text-sm font-semibold hover:border-foreground/40 hover:text-foreground transition-all duration-300"
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
