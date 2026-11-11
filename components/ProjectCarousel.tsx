"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { getAllProjects } from "@/lib/projectsData";

export function ProjectCarousel({ gallery = false }: { gallery?: boolean }) {
  const projects = getAllProjects();
  const [active, setActive] = useState(0);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const project = projects[active];
  const move = (step: number) => setActive((index) => (index + step + projects.length) % projects.length);

  return (
    <section id="projects" aria-label="Project showcase"
      aria-roledescription="carousel"
      className={`project-console${gallery ? " project-console--gallery" : ""}`}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          move(event.key === "ArrowLeft" ? -1 : 1);
        }
      }}
      onTouchStart={(event) => {
        const touch = event.touches.length === 1 ? event.touches[0] : null;
        touchStart.current = touch ? { x: touch.clientX, y: touch.clientY } : null;
      }}
      onTouchEnd={(event) => {
        const start = touchStart.current;
        touchStart.current = null;
        const touch = event.changedTouches[0];
        if (!start || !touch) return;
        const dx = touch.clientX - start.x;
        const dy = touch.clientY - start.y;
        if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy)) move(dx < 0 ? 1 : -1);
      }}
      onTouchCancel={() => { touchStart.current = null; }}
      tabIndex={0}
    >
      <header className="project-console__header">
        <p className="instrument-label">{gallery ? "PROJECT ARCHIVE" : "SELECTED WORK"}</p>
        <p className="instrument-count" aria-live="polite" aria-atomic="true"><span className="sr-only">{project.title}, project </span>{String(active + 1).padStart(2, "0")} <span>/</span> {String(projects.length).padStart(2, "0")}</p>
      </header>

      <article className="project-frame" aria-roledescription="slide" aria-label={`${active + 1} of ${projects.length}: ${project.title}`} key={project.id}>
        <figure className="project-frame__image">
          <Image src={project.thumbnail} alt={`${project.title} project screenshot`} fill priority={active === 0} sizes="(max-width: 767px) 100vw, 58vw" />
          <figcaption>{project.year} <span>·</span> {project.category}</figcaption>
        </figure>
        <div className="project-frame__copy">
          <p className="instrument-label">{project.role}</p>
          <h2>{project.title}</h2>
          <p className="project-frame__description">{project.shortDesc}</p>
          <p className="project-frame__stack" aria-label="Technologies">{project.tags.slice(0, 4).join("  /  ")}</p>
          <a className="project-frame__link" href={`/projects/${project.id}`}>
            Open project <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </article>

      <footer className="project-console__controls">
        {gallery && (
          <div className="project-selector" role="group" aria-label="Choose project">
            {projects.map((item, index) => (
              <button key={item.id} type="button" aria-label={`Show ${item.title}`} aria-current={active === index ? "true" : undefined} onClick={() => setActive(index)}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span className="project-selector__name">{item.title}</span>
              </button>
            ))}
          </div>
        )}
        <div className="project-arrows">
          <button type="button" aria-label="Previous project" onClick={() => move(-1)}><ArrowLeft size={18} /></button>
          <button type="button" aria-label="Next project" onClick={() => move(1)}><ArrowRight size={18} /></button>
        </div>
      </footer>
    </section>
  );
}
