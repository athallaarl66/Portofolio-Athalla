"use client";

import { useRouter } from "next/navigation";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import ContactContainer from "@/components/ContactContainer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getAllProjects } from "@/lib/projectsData";

export default function ProjectsGallery() {
  const router = useRouter();
  const projects = getAllProjects();

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-28 md:pt-32 pb-16 px-6 md:px-16">
        <div className="max-w-[1280px] w-full mx-auto">
          {/* Section label */}
          <div className="section-label mb-10">
            Projects
          </div>

          {/* Heading */}
          <div className="mb-16 space-y-3">
            <h1 className="text-[clamp(2.8rem,6vw,5rem)] font-black leading-none tracking-tighter text-white">
              Things I've built.
            </h1>
            <p className="text-base font-light max-w-md mt-4 text-muted">
              A curated selection of my work — from academic theses to production-ready enterprise applications.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                className="opacity-0 animate-fade-in"
                style={{
                  animationDelay: `${idx * 0.1}s`,
                  animationFillMode: "forwards",
                }}
              >
                <ProjectCard
                  project={project}
                  onViewDetails={() => router.push(`/projects/${project.id}`)}
                />
              </div>
            ))}
          </div>
        </div>

        <ContactContainer />
      </main>
    </div>
  );
}

function ProjectCard({ project, onViewDetails }: { project: any; onViewDetails: () => void }) {
  return (
    <Card
      className="group rounded-2xl overflow-hidden card-hover flex flex-col cursor-pointer h-full surface-chip"
      onClick={onViewDetails}
    >
      <CardContent className="p-0 flex flex-col h-full">
        {/* Thumbnail */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[rgba(8,8,15,0.65)] to-transparent to-50%" />

          {/* Year badge */}
          <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[11px] font-mono text-white/55 bg-[rgba(8,8,15,0.75)] backdrop-blur-sm border border-white/10">
            {project.year}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow gap-4">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest mb-1.5 block text-muted">
              {project.category}
            </span>
            <h3 className="text-xl font-bold text-white leading-tight tracking-tight">
              {project.title}
            </h3>
          </div>

          <p className="text-sm line-clamp-2 leading-relaxed font-light flex-grow text-muted">
            {project.shortDesc}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 4).map((tag: string) => (
              <Badge
                key={tag}
                variant="outline"
                className="rounded-full px-3 py-1.5 text-xs font-medium bg-[rgba(var(--deep-rgb),0.5)] border-white/10 text-white/75"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-4 mt-2 border-t border-[var(--border)]">
            <button className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-muted transition-colors duration-200 hover:text-[var(--sage)]">
              View project
              <ArrowUpRight
                size={14}
                className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
              />
            </button>

            <div className="flex gap-1">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 text-white/25 transition-colors duration-200 hover:text-[var(--sage)]"
                  title="Live Demo"
                >
                  <ExternalLink size={15} />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 text-white/25 transition-colors duration-200 hover:text-[var(--sage)]"
                  title="Source"
                >
                  <Github size={15} />
                </a>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
