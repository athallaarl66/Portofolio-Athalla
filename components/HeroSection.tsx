"use client";

import { ArrowDownRight, Github, Linkedin, ArrowRight } from "lucide-react";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col justify-center pt-24 pb-8 overflow-hidden"
    >
      <div className="max-w-[1200px] w-full mx-auto px-6 md:px-10 lg:px-12 relative z-10">
        {/* Availability — single plain line */}
        <div className="flex items-center justify-between gap-3 mb-12 md:mb-16">
          <div className="flex items-center gap-2">
            {[
              {
                href: "https://github.com/athallaarl66",
                label: "GitHub",
                icon: <Github className="w-4.5 h-4.5" />,
              },
              {
                href: "https://www.linkedin.com/in/athalla-arli-baa7b72b7/",
                label: "LinkedIn",
                icon: <Linkedin className="w-4.5 h-4.5" />,
              },
            ].map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center text-white/60 transition-colors duration-200 hover:text-white hover:bg-white/5"
                aria-label={label}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Main hero grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">
          {/* Left — headline + CTA */}
          <div className="flex flex-col">
            <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black leading-[1.05] tracking-tighter text-white mb-6">
              Athalla Arli.
              <br />
              Software Engineer
            </h1>

            <p className="text-[14px] md:text-[15px] leading-relaxed font-light max-w-[460px] mb-8 text-muted">
              Software Engineer at GITS.id, building and integrating backend
              APIs for CMS and POS systems, plus mobile app integration. Focused
              on well-documented code and workflow automation.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <a
                href="#projects"
                className="btn-primary inline-flex items-center text-[13px] font-semibold px-5 py-2.5 rounded-full"
              >
                See my projects <ArrowDownRight className="w-4 h-4 ml-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center text-[13px] font-medium text-white/60 transition-colors hover:text-white"
              >
                Contact me <ArrowRight className="w-4 h-4 ml-1.5" />
              </a>
            </div>
          </div>

          {/* Right — photo */}
          <div className="w-full max-w-[260px] mx-auto lg:mx-auto flex-shrink-0 relative">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden surface-chip p-2">
              <div className="w-full h-full rounded-xl overflow-hidden relative">
                <Image
                  src="/projects/propil.jpg"
                  alt="Athalla Arli Abhinaya"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-25">
        <span className="text-[8px] font-mono uppercase tracking-widest text-muted">
          Scroll
        </span>
        <div className="w-px h-6 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
};
