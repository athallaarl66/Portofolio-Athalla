"use client";

import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Github, Figma, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import type { Project } from "@/lib/projectsData";

interface ProjectDetailClientProps {
  id: string;
  project: Project;
}

export default function ProjectDetailClient({ id, project }: ProjectDetailClientProps) {
  const router = useRouter();

  return (
    <article className="relative min-h-screen">
      <Navbar />

      <main className="pt-28 md:pt-32 pb-16 px-6 md:px-16 relative z-10">
        <div className="max-w-[1024px] mx-auto">
          {/* Back button */}
          <button
            onClick={() => router.push("/projects")}
            className="group flex items-center gap-2 mb-10 text-[11px] font-mono uppercase tracking-widest text-muted transition-colors hover:text-[var(--sage)]"
          >
            <ArrowLeft
              size={14}
              className="group-hover:-translate-x-1 transition-transform"
            />
            back to projects
          </button>

          {/* Hero Image */}
          <div
            className="relative rounded-2xl overflow-hidden mb-12 p-2 surface-chip"
          >
            <div className="w-full h-full rounded-xl overflow-hidden">
              <img
                src={project.hero}
                alt={project.title}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Header Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-7 flex flex-col gap-6">
              <div>
                <span className="text-[11px] font-mono tracking-widest uppercase mb-2 block text-muted">
                  {project.category}
                </span>
                <h1 className="text-[clamp(2.5rem,5vw,3.5rem)] font-black text-white leading-[1.1] tracking-tight">
                  {project.title}
                </h1>
                <p className="text-base md:text-lg leading-relaxed font-light mt-4 text-muted">
                  {project.tagline}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {project.liveUrl && (
                  <Button variant="default" className="rounded-full btn-primary" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      Live Demo
                      <ArrowUpRight size={14} className="ml-1" />
                    </a>
                  </Button>
                )}
                {project.figmaUrl && (
                  <Button variant="ghost" className="rounded-full btn-ghost" asChild>
                    <a href={project.figmaUrl} target="_blank" rel="noopener noreferrer">
                      <Figma size={14} /> Figma
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button variant="ghost" className="rounded-full btn-ghost" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={14} /> {project.githubBackendUrl ? "Source (FE)" : "Source"}
                    </a>
                  </Button>
                )}
                {project.githubBackendUrl && (
                  <Button variant="ghost" className="rounded-full btn-ghost" asChild>
                    <a href={project.githubBackendUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={14} /> Source (BE)
                    </a>
                  </Button>
                )}
              </div>
            </div>

            {/* Metadata Sidebar */}
            <div className="md:col-span-5 flex flex-col justify-center">
              {[
                { label: "Role", value: project.role },
                { label: "Year", value: project.year },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="flex flex-col gap-1 py-4 border-b border-[var(--border)] first:border-t"
                >
                  <span className="text-[10px] font-mono tracking-widest uppercase text-muted">
                    {label}
                  </span>
                  <span className="text-sm font-semibold text-white">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Helper for section headers */}
          {(() => {
            const SectionHeader = ({ title }: { title: string }) => (
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[11px] font-mono tracking-widest uppercase whitespace-nowrap text-muted">
                  {title}
                </span>
                <Separator className="flex-1 bg-[var(--border)]" />
              </div>
            );

            return (
              <>
                {/* Overview */}
                <section className="mb-16">
                  <SectionHeader title="Overview" />
                  <p className="leading-relaxed text-base md:text-lg font-light max-w-[800px] text-muted">
                    {project.overview}
                  </p>
                </section>

                {/* Tech Stack */}
                <section className="mb-16">
                  <SectionHeader title="Tech Stack" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {Object.entries(project.techStack).map(([category, techs]) => (
                      <div key={category} className="space-y-3">
                        <span className="text-xs font-mono capitalize text-muted">
                          {category}
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {techs.map((tech: string) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="rounded-full px-3 py-1.5 text-xs font-medium bg-[rgba(var(--deep-rgb),0.5)] border-white/10 text-white/75"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Features */}
                <section className="mb-16">
                  <SectionHeader title="Features" />
                  <ul className="space-y-3 max-w-[800px]">
                    {project.keyFeatures.map((feature: string, idx: number) => (
                      <Card key={idx} className="p-4 rounded-xl surface-chip">
                        <CardContent className="p-0 flex items-start gap-4">
                          <span className="font-mono text-xs mt-1 shrink-0 text-[var(--teal)]">
                            {(idx + 1).toString().padStart(2, '0')}
                          </span>
                          <span className="leading-relaxed text-sm md:text-base font-light">
                            {feature}
                          </span>
                        </CardContent>
                      </Card>
                    ))}
                  </ul>
                </section>

                {/* Challenges (if any) */}
                {project.challenges && project.challenges.length > 0 && (
                  <section className="mb-16">
                    <SectionHeader title="Challenges" />
                    <div className="grid gap-4 max-w-[800px]">
                      {project.challenges.map((challenge: any, idx: number) => (
                        <Card key={idx} className="p-6 rounded-2xl flex flex-col gap-4 surface-chip">
                          <CardContent className="p-0 flex flex-col gap-4">
                            <h3 className="text-base font-bold text-white">
                              {challenge.title}
                            </h3>
                            <div className="grid gap-4">
                              <div>
                                <span className="text-[10px] font-mono tracking-widest uppercase mb-1 block text-red-400">
                                  Problem
                                </span>
                                <p className="text-sm font-light leading-relaxed text-muted">
                                  {challenge.problem}
                                </p>
                              </div>
                              <Separator className="w-full bg-[var(--border)]" />
                              <div>
                                <span className="text-[10px] font-mono tracking-widest uppercase mb-1 block text-[var(--sage)]">
                                  Solution
                                </span>
                                <p className="text-sm font-light leading-relaxed text-muted">
                                  {challenge.solution}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </section>
                )}

                {/* Results */}
                <section className="mb-16">
                  <SectionHeader title="Results" />
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.results.map((result: string, idx: number) => (
                      <Card key={idx} className="p-5 rounded-2xl flex items-start gap-3 surface-chip">
                        <CardContent className="p-0 flex items-start gap-3 w-full">
                          <span className="shrink-0 mt-0.5 text-[var(--sage)]">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span className="text-sm font-light leading-relaxed">
                            {result}
                          </span>
                        </CardContent>
                      </Card>
                    ))}
                  </ul>
                </section>

                {/* Screenshots */}
                <section className="mb-16">
                  <SectionHeader title="Screenshots" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.screenshots.map((screenshot: any, idx: number) => (
                      <figure key={idx} className="flex flex-col gap-3">
                        <Card className="rounded-xl overflow-hidden border p-1" surface-inset>
                          <CardContent className="p-0 rounded-lg overflow-hidden h-full">
                            <img
                              src={screenshot.url}
                              alt={screenshot.caption}
                              className="w-full h-auto object-cover"
                              loading="lazy"
                            />
                          </CardContent>
                        </Card>
                        <figcaption className="text-[11px] font-mono tracking-wide text-center text-muted">
                          {screenshot.caption}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </section>
              </>
            );
          })()}

          {/* Bottom Back Button */}
          <div className="pt-8 border-t flex justify-center border-[var(--border)]">
            <button
              onClick={() => router.push("/projects")}
              className="group flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest transition-colors hover:text-[var(--sage)] text-muted"
            >
              <ArrowLeft
                size={14}
                className="group-hover:-translate-x-1 transition-transform"
              />
              back to all projects
            </button>
          </div>
        </div>
      </main>
    </article>
  );
}
