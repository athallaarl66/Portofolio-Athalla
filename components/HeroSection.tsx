"use client";

import { ArrowDownRight, ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="hero-surface relative flex flex-col justify-center overflow-hidden"
    >
      <div className="hero-container relative z-10">

        <div className="hero-frame relative flex min-h-0 flex-col justify-center overflow-hidden px-6 py-[17rem] pb-12 md:min-h-[470px] md:px-12 md:py-16 lg:min-h-[833px] lg:px-0">
          <div className="hero-collage" aria-hidden="true">
            <img className="hero-collage__project hero-collage__project--one" src="/projects1/BACA.png" alt="" />
            <img className="hero-collage__project hero-collage__project--two" src="/projects7/cli-thumb.png" alt="" />
            <img className="hero-collage__project hero-collage__project--three" src="/projects6/detailsIOT.png" alt="" />
            <img className="hero-collage__project hero-collage__project--four" src="/projects3/adminDashboard.png" alt="" />
            <img className="hero-collage__project hero-collage__project--five" src="/projects2/fix.jpg" alt="" />
            <img className="hero-collage__project hero-collage__project--six" src="/projects1/homediajar.png" alt="" />
            <img className="hero-collage__project hero-collage__project--seven" src="/snipecode.png" alt="" />
            <img className="hero-collage__portrait" src="/projects/gwej-cutout.png" alt="" />
          </div>
          <div className="hero-copy z-10">
            <h1 className="cinema-title"><strong>Software</strong>{" "}<span>shaped</span>{" "}<em>by curiosity.</em></h1>
            <p className="max-w-[54ch] text-sm leading-relaxed text-[var(--foreground)] md:text-base">I build web experiences and reliable systems, from cultural education platforms to enterprise dashboards.</p>
            <a href="#projects" className="mt-6 inline-flex min-h-11 items-center gap-2 border-b border-[var(--film-amber)] text-sm font-semibold text-[var(--film-amber)] transition-colors hover:text-[var(--foreground)]">Explore my work <ArrowDownRight className="h-4 w-4" /></a>
          </div>
          <span className="hero-location">Bandung / Indonesia</span>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-sm text-muted">
          <span>Athalla Arli / Software Engineer</span>
          <a href="#contact" className="inline-flex min-h-11 items-center gap-2 hover:text-[var(--foreground)]">Contact <ArrowRight className="h-4 w-4" /></a>
        </div>
      </div>


    </section>
  );
};
