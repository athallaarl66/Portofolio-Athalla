"use client";

import { ArrowDownRight, Github, Linkedin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col justify-center pt-20 pb-8 overflow-hidden"
    >
      {/* Subtle radial glows */}
      <div
        className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none -z-0"
        style={{ background: "radial-gradient(circle, rgba(40,28,89,0.3) 0%, transparent 65%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 right-1/4 w-[350px] h-[350px] rounded-full pointer-events-none -z-0"
        style={{ background: "radial-gradient(circle, rgba(78,141,156,0.1) 0%, transparent 65%)" }}
        aria-hidden="true"
      />

      <div className="max-w-[1140px] w-full mx-auto px-6 md:px-10 lg:px-12 relative z-10">
        {/* Top status bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-10 md:mb-14">
          <div
            className="flex items-center gap-2.5 px-3 py-1.5 rounded-full border"
            style={{ background: "rgba(var(--deep-rgb), 0.4)", borderColor: "var(--border)", backdropFilter: "blur(8px)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--sage)", boxShadow: "0 0 8px var(--sage)" }} />
            <span className="text-[10px] font-mono uppercase tracking-widest text-white/90">
              Open to new opportunities
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              {[
                { href: "https://github.com/athallaarl66", label: "GitHub", icon: <Github className="w-3.5 h-3.5" /> },
                { href: "https://www.linkedin.com/in/athalla-arli-baa7b72b7/", label: "LinkedIn", icon: <Linkedin className="w-3.5 h-3.5" /> },
              ].map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--sage)] hover:text-[var(--sage)] hover:shadow-[0_4px_12px_rgba(var(--sage-rgb),0.2)]"
                  style={{
                    background: "rgba(var(--deep-rgb), 0.4)",
                    borderColor: "var(--border)",
                    color: "white",
                    backdropFilter: "blur(8px)"
                  }}
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
            </div>
            <div 
              className="px-3 py-1.5 rounded-full border text-[10px] font-mono text-white/90 uppercase tracking-widest"
              style={{ background: "rgba(8,8,15,0.4)", borderColor: "var(--border)", backdropFilter: "blur(8px)" }}
            >
              Bandung, ID
            </div>
          </div>
        </div>

        {/* Main hero grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">
          {/* Left — headline + CTA */}
          <div className="flex flex-col">
            
            <div className="section-label mb-5 w-fit text-[12px]">
              Based in Bandung
            </div>

            {/* HEADLINE: Nama langsung digabung sama Role biar bold */}
            <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black leading-[1.05] tracking-tighter text-white mb-6">
              Athalla Arli.
              <br />
              <span className="text-gradient-primary">Software Engineer.</span>
            </h1>

            {/* COPYWRITING: Natural, pisahen kerjaan kantor & side project */}
            <p className="text-[14px] md:text-[15px] leading-relaxed font-light max-w-[460px] mb-8" style={{ color: "var(--muted-fg)" }}>
              I'm a fullstack engineer at GITS.id, working primarily with .NET, Laravel, and Next.js. Beyond my day job, I enjoy building side projects—ranging from enterprise IoT monitoring dashboards to cultural education platforms.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Button
                variant="default"
                className="text-[13px] px-5 py-2.5 rounded-full"
                style={{
                  background: "linear-gradient(135deg, var(--deep) 0%, var(--teal) 100%)",
                  color: "var(--pale)",
                }}
                asChild
              >
                <a href="#projects">
                  See my projects <ArrowDownRight className="w-4 h-4 ml-1" />
                </a>
              </Button>
              <Button
                variant="ghost"
                className="text-[13px] px-5 py-2.5 rounded-full"
                style={{
                  color: "rgba(255,255,255,0.65)",
                  border: "1px solid rgba(var(--teal-rgb), 0.3)",
                }}
                asChild
              >
                <a href="#contact">
                  Contact me <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </Button>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 mt-10 pt-8 border-t" style={{ borderColor: "var(--border)" }}>
              {[
                { value: "4+",   label: "Projects shipped" },
                { value: "S1",   label: "Informatics" },
                { value: "2025", label: "Graduated" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-black tracking-tight mb-1" style={{ color: "var(--teal)" }}>
                    {s.value}
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-widest" style={{ color: "var(--muted-fg)" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — photo */}
          <div className="w-full max-w-[260px] mx-auto lg:mx-auto flex-shrink-0 relative">
            <div
              className="absolute -inset-6 rounded-[2rem] pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(var(--deep-rgb), 0.5) 0%, transparent 70%)" }}
              aria-hidden="true"
            />
            <div
              className="relative aspect-[3/4] rounded-[1.5rem] overflow-hidden p-2 shadow-2xl"
              style={{
                background: "linear-gradient(135deg, rgba(var(--deep-rgb), 0.6) 0%, rgba(var(--teal-rgb), 0.3) 100%)",
                border: "1px solid rgba(var(--teal-rgb), 0.2)",
              }}
            >
              <div className="w-full h-full rounded-[1.2rem] overflow-hidden relative">
                <Image
                  src="/projects/propil.jpg"
                  alt="Athalla Arli Abhinaya"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top"
                  priority
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: "linear-gradient(to top, rgba(8,8,15,0.45) 0%, transparent 40%)" }}
                />
              </div>

              {/* Location badge */}
              <div
                className="absolute bottom-4 left-4 right-4 flex items-center justify-between px-3 py-2 rounded-xl"
                style={{
                  background: "rgba(8,8,15,0.8)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(78,141,156,0.15)",
                }}
              >
                <div>
                  <p className="text-[9px] font-mono uppercase tracking-widest" style={{ color: "var(--muted-fg)" }}>Location</p>
                  <p className="text-[11px] font-semibold text-white">Bandung, ID</p>
                </div>
                <div
                  className="flex items-center gap-1.5 px-2 py-1 rounded-full"
                  style={{ background: "rgba(var(--sage-rgb), 0.12)", border: "1px solid rgba(var(--sage-rgb), 0.25)" }}
                >
                  <span className="w-1 h-1 rounded-full animate-pulse" style={{ background: "var(--sage)" }} />
                  <span className="text-[9px] font-mono" style={{ color: "var(--sage)" }}>Open</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ opacity: 0.25 }}>
        <span className="text-[8px] font-mono uppercase tracking-widest" style={{ color: "var(--muted-fg)" }}>Scroll</span>
        <div className="w-px h-6 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
};
