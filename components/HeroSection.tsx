"use client";

import { ArrowDownRight, ArrowRight } from "lucide-react";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="hero-surface relative min-h-[85dvh] flex flex-col justify-center pt-24 pb-10 overflow-hidden"
    >
      <div className="max-w-[1140px] w-full mx-auto px-6 md:px-10 lg:px-12 relative z-10">

        {/* Main hero grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">
          {/* Left — headline + CTA */}
          <div className="flex flex-col">
            <p className="cinema-credit">ATHALLA ARLI <span>/</span> SOFTWARE ENGINEER</p>
            <h1 className="cinema-title">
              Building useful<br /><span>software.</span>
            </h1>

            <p className="text-[14px] md:text-[15px] leading-relaxed font-light max-w-[460px] mb-8 text-muted">
              I'm a software engineer at GITS.id, working primarily with .NET,
              Laravel, and Next.js. Beyond my day job, I enjoy building side
              projects—ranging from enterprise IoT monitoring dashboards to
              cultural education platforms.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <a
                href="#projects"
                className="btn-primary inline-flex min-h-11 items-center text-sm font-semibold px-5 rounded-lg"
              >
                See my projects <ArrowDownRight className="w-4 h-4 ml-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-11 items-center text-sm font-medium text-[var(--sage)] transition-colors hover:text-white"
              >
                Contact me <ArrowRight className="w-4 h-4 ml-1.5" />
              </a>
            </div>
          </div>

          <a href="/projects/sundanese-learning" className="group block border border-[rgba(var(--sage-rgb),0.3)] bg-[var(--surface-2)]">
            <div className="relative aspect-video overflow-hidden">
              <Image src="/projects1/HOMEPAGE.png" alt="DiajarAksara learning platform" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]" priority />
            </div>
            <div className="flex items-center justify-between px-5 py-5 text-[var(--sage)]">
              <div><span className="block text-xs mb-1">Featured project</span><strong className="text-lg text-[#FFC6E0]">DiajarAksara</strong><span className="block text-sm text-[#EE7B5E] mt-1">View project</span></div>
              <ArrowDownRight className="w-5 h-5" />
            </div>
          </a>
        </div>
      </div>


    </section>
  );
};
