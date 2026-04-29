import { ArrowDownRight, Github, Linkedin, ArrowRight } from "lucide-react";
import profileImg from "/projects/propil.jpg";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col justify-center pt-20 pb-8 overflow-hidden"
    >
      {/* Subtle radial glows */}
      <div
        className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none -z-0"
        style={{ background: "radial-gradient(circle, rgba(40,28,89,0.4) 0%, transparent 65%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none -z-0"
        style={{ background: "radial-gradient(circle, rgba(78,141,156,0.12) 0%, transparent 65%)" }}
        aria-hidden="true"
      />

      <div className="max-w-[1280px] w-full mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        {/* Top status bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-12 md:mb-16">
          <div 
            className="flex items-center gap-2.5 px-3.5 py-2 rounded-full border"
            style={{ background: "rgba(8,8,15,0.4)", borderColor: "var(--border)", backdropFilter: "blur(8px)" }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--sage)", boxShadow: "0 0 8px var(--sage)" }} />
            <span className="text-[11px] font-mono uppercase tracking-widest text-white/90">
              Available for fullstack roles
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              {[
                { href: "https://github.com/athallaarl66", label: "GitHub", icon: <Github className="w-4 h-4" /> },
                { href: "https://www.linkedin.com/in/athalla-arli-baa7b72b7/", label: "LinkedIn", icon: <Linkedin className="w-4 h-4" /> },
              ].map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200 hover:-translate-y-0.5"
                  style={{ 
                    background: "rgba(8,8,15,0.4)", 
                    borderColor: "var(--border)", 
                    color: "white", 
                    backdropFilter: "blur(8px)" 
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--sage)"; e.currentTarget.style.color = "var(--sage)"; e.currentTarget.style.boxShadow = "0 4px 12px rgba(133,199,154,0.2)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "white"; e.currentTarget.style.boxShadow = "none"; }}
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
            </div>
            <div 
              className="px-3.5 py-2 rounded-full border text-[11px] font-mono text-white/90 uppercase tracking-widest"
              style={{ background: "rgba(8,8,15,0.4)", borderColor: "var(--border)", backdropFilter: "blur(8px)" }}
            >
              Bandung, ID
            </div>
          </div>
        </div>

        {/* Main hero grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-end">
          {/* Left — headline + CTA */}
          <div className="flex flex-col">
            <div className="section-label mb-6 w-fit">
              <span className="section-label-dot" />
              Fullstack Developer
            </div>

            <h1 className="text-[clamp(3.2rem,8vw,7rem)] font-black leading-[0.95] tracking-tighter text-white mb-6">
              Athalla Arli
              <br />
              <span className="text-gradient-primary">Abhinaya.</span>
            </h1>

            <p className="text-base md:text-lg leading-relaxed font-light max-w-lg mb-10" style={{ color: "var(--muted-fg)" }}>
              I build robust backend systems and craft polished frontend
              interfaces — from Spring Boot APIs to React UIs that feel
              like products, not demos.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="btn-primary"
                onClick={e => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
              >
                View my work <ArrowDownRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="btn-ghost"
                onClick={e => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
              >
                Get in touch <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 mt-12 pt-10 border-t" style={{ borderColor: "var(--border)" }}>
              {[
                { value: "4+",   label: "Projects shipped" },
                { value: "1",    label: "Internship" },
                { value: "2025", label: "Graduated" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-black tracking-tight mb-0.5" style={{ color: "var(--teal)" }}>
                    {s.value}
                  </div>
                  <div className="text-[11px] font-mono uppercase tracking-widest" style={{ color: "var(--muted-fg)" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — photo */}
          <div className="w-full max-w-[280px] mx-auto lg:mx-0 flex-shrink-0 relative">
            <div
              className="absolute -inset-8 rounded-[2rem] pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(40,28,89,0.5) 0%, transparent 70%)" }}
              aria-hidden="true"
            />
            <div
              className="relative aspect-[3/4] rounded-[1.75rem] overflow-hidden p-2 shadow-2xl"
              style={{
                background: "linear-gradient(135deg, rgba(40,28,89,0.6) 0%, rgba(78,141,156,0.3) 100%)",
                border: "1px solid rgba(78,141,156,0.2)",
              }}
            >
              <div className="w-full h-full rounded-[1.35rem] overflow-hidden relative">
                <img
                  src={profileImg}
                  alt="Athalla Arli Abhinaya"
                  className="w-full h-full object-cover object-top"
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: "linear-gradient(to top, rgba(8,8,15,0.45) 0%, transparent 40%)" }}
                />
              </div>

              {/* Location badge */}
              <div
                className="absolute bottom-5 left-5 right-5 flex items-center justify-between px-3 py-2 rounded-xl"
                style={{
                  background: "rgba(8,8,15,0.8)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(78,141,156,0.15)",
                }}
              >
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest" style={{ color: "var(--muted-fg)" }}>Location</p>
                  <p className="text-xs font-semibold text-white">Bandung, Indonesia</p>
                </div>
                <div
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-full"
                  style={{ background: "rgba(133,199,154,0.12)", border: "1px solid rgba(133,199,154,0.25)" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--sage)" }} />
                  <span className="text-[10px] font-mono" style={{ color: "var(--sage)" }}>Open</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ opacity: 0.25 }}>
        <span className="text-[9px] font-mono uppercase tracking-widest" style={{ color: "var(--muted-fg)" }}>Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
};
