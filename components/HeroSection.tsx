"use client";

import { ArrowDownRight, ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="hero-surface relative flex flex-col justify-center pt-20 pb-12 lg:pt-24 lg:pb-16 overflow-hidden"
    >
      <div className="page-container relative z-10">

        <div className="hero-frame relative flex min-h-[440px] flex-col justify-center overflow-hidden border border-[var(--border)] px-6 py-20 md:min-h-[470px] md:px-12 md:py-16 lg:min-h-[480px] lg:px-16">
          <div className="relative z-10 max-w-[720px]">
            <p className="mb-8 text-xs font-semibold uppercase tracking-[.18em] text-[var(--film-amber)]">Athalla Arli / Software Engineer</p>
            <h1 className="cinema-title mb-5">Software shaped<br />by curiosity.</h1>
            <p className="max-w-[54ch] text-sm leading-relaxed text-[var(--foreground)] md:text-base">I build web experiences and reliable systems, from cultural education platforms to enterprise dashboards.</p>
            <a href="#projects" className="mt-6 inline-flex min-h-11 items-center gap-2 border-b border-[var(--film-amber)] text-sm font-semibold text-[var(--film-amber)] transition-colors hover:text-[var(--foreground)]">Explore my work <ArrowDownRight className="h-4 w-4" /></a>
          </div>
          <span aria-hidden="true" className="absolute right-6 top-6 text-xs font-medium uppercase tracking-[.18em] text-[var(--muted-fg)] md:right-12">Bandung / Indonesia</span>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-sm text-muted">
          <span>.NET · Laravel · Next.js</span>
          <a href="#contact" className="inline-flex min-h-11 items-center gap-2 hover:text-[var(--foreground)]">Contact <ArrowRight className="h-4 w-4" /></a>
        </div>
      </div>


    </section>
  );
};
