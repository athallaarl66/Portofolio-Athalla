"use client";

import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { getAllProjects } from "@/lib/projectsData";

export const ProjectSection = () => {
  const projects = getAllProjects();

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="max-w-[1280px] w-full mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2 md:gap-4 mb-8 md:mb-14">
          <div>
            <div className="section-label mb-5">
              Portfolio
            </div>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-black tracking-tighter leading-tight text-white">
              Selected works.
            </h2>
          </div>
          <a
            href="/projects"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-[var(--film-amber)] transition-colors duration-200 hover:text-[var(--foreground)]"
          >
            View all projects <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {projects.map((project) => (
            <a
              key={project.id}
              href={`/projects/${project.id}`}
              className="group flex flex-col"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[rgba(var(--deep-rgb),0.25)] to-transparent to-40%" />
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[11px] font-mono text-white/55 bg-[rgba(var(--deep-rgb),0.75)] backdrop-blur-sm border border-white/10">
                  {project.year}
                </div>
              </div>

              {/* Content */}
              <div className="py-5 flex flex-col flex-grow gap-3 border-b border-[var(--border)]">
                <div>
                  <p className="text-[11px] font-mono uppercase tracking-widest mb-1.5 text-muted">
                    {project.category}
                  </p>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {project.title}
                  </h3>
                </div>

                <p className="text-sm leading-relaxed font-light line-clamp-2 flex-grow text-muted">
                  {project.shortDesc}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-[var(--border)]">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="rounded-full px-3 py-1 text-xs font-medium bg-[var(--surface-2)] border-[var(--border)] text-[var(--foreground)]"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 border border-[var(--border)] text-[var(--muted-fg)] transition-colors duration-200 group-hover:text-[var(--film-amber)] group-hover:border-[var(--border-hover)]">
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
