import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Github, Figma, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getProject } from "../../../data/projectsData";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = getProject(id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <div className="text-center p-8">
          <h1 className="text-6xl font-black text-white mb-4">404</h1>
          <p className="text-[11px] font-mono tracking-widest uppercase mb-8" style={{ color: "var(--muted-fg)" }}>
            project not found
          </p>
          <Button
            variant="ghost"
            className="rounded-full"
            style={{
              color: "rgba(255,255,255,0.65)",
              border: "1px solid rgba(var(--teal-rgb), 0.3)",
            }}
            onClick={() => navigate("/projects")}
          >
            Back to Projects
          </Button>
        </div>
      </div>
    );
  }

  return (
    <article className="relative min-h-screen" style={{ background: "var(--background)", color: "var(--foreground)" }}>
      {/* Background glow */}
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full pointer-events-none -z-10"
        style={{ background: "radial-gradient(ellipse, rgba(var(--deep-rgb), 0.3) 0%, transparent 65%)" }}
        aria-hidden="true"
      />
      <div className="grain-overlay" aria-hidden="true" />

      <Navbar />

      <main className="pt-28 md:pt-32 pb-16 px-6 md:px-16 relative z-10">
        <div className="max-w-[1024px] mx-auto">
          {/* Back button */}
          <button
            onClick={() => navigate("/projects")}
            className="group flex items-center gap-2 mb-10 text-[11px] font-mono uppercase tracking-widest transition-colors hover:text-[var(--sage)]"
            style={{ color: "var(--muted-fg)" }}
          >
            <ArrowLeft
              size={14}
              className="group-hover:-translate-x-1 transition-transform"
            />
            back to projects
          </button>

          {/* Hero Image */}
          <div
            className="relative rounded-[2rem] overflow-hidden mb-12 border p-2"
            style={{
              background: "linear-gradient(135deg, rgba(40,28,89,0.4) 0%, rgba(78,141,156,0.1) 100%)",
              borderColor: "rgba(78,141,156,0.2)",
              boxShadow: "0 32px 64px rgba(8,8,15,0.6)",
            }}
          >
            <div className="w-full h-full rounded-[1.5rem] overflow-hidden">
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
                <span className="text-[11px] font-mono tracking-widest uppercase mb-2 block" style={{ color: "var(--muted-fg)" }}>
                  {project.category}
                </span>
                <h1 className="text-[clamp(2.5rem,5vw,3.5rem)] font-black text-white leading-[1.1] tracking-tight">
                  {project.title}
                </h1>
                <p className="text-base md:text-lg leading-relaxed font-light mt-4" style={{ color: "var(--muted-fg)" }}>
                  {project.tagline}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {project.liveUrl && (
                  <Button
                    variant="default"
                    className="rounded-full"
                    style={{
                      background: "linear-gradient(135deg, var(--deep) 0%, var(--teal) 100%)",
                      color: "var(--pale)",
                    }}
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      Live Demo
                      <ArrowUpRight size={14} className="ml-1" />
                    </a>
                  </Button>
                )}
                {project.figmaUrl && (
                  <Button
                    variant="ghost"
                    className="rounded-full"
                    style={{
                      color: "rgba(255,255,255,0.65)",
                      border: "1px solid rgba(var(--teal-rgb), 0.3)",
                    }}
                    asChild
                  >
                    <a href={project.figmaUrl} target="_blank" rel="noopener noreferrer">
                      <Figma size={14} /> Figma
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button
                    variant="ghost"
                    className="rounded-full"
                    style={{
                      color: "rgba(255,255,255,0.65)",
                      border: "1px solid rgba(var(--teal-rgb), 0.3)",
                    }}
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={14} /> {project.githubBackendUrl ? "Source (FE)" : "Source"}
                    </a>
                  </Button>
                )}
                {project.githubBackendUrl && (
                  <Button
                    variant="ghost"
                    className="rounded-full"
                    style={{
                      color: "rgba(255,255,255,0.65)",
                      border: "1px solid rgba(var(--teal-rgb), 0.3)",
                    }}
                    asChild
                  >
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
                { label: "Duration", value: project.duration },
                { label: "Year", value: project.year },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="flex flex-col gap-1 py-4 border-b first:border-t"
                  style={{ borderColor: "var(--border)" }}
                >
                  <span className="text-[10px] font-mono tracking-widest uppercase" style={{ color: "var(--muted-fg)" }}>
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
            const SectionHeader = ({ title }) => (
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[11px] font-mono tracking-widest uppercase whitespace-nowrap" style={{ color: "var(--muted-fg)" }}>
                  {title}
                </span>
                <Separator className="flex-1" style={{ background: "var(--border)" }} />
              </div>
            );

            return (
              <>
                {/* Overview */}
                <section className="mb-16">
                  <SectionHeader title="Overview" />
                  <p className="leading-relaxed text-base md:text-lg font-light max-w-[800px]" style={{ color: "var(--muted-fg)" }}>
                    {project.overview}
                  </p>
                </section>

                {/* Tech Stack */}
                <section className="mb-16">
                  <SectionHeader title="Tech Stack" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {Object.entries(project.techStack).map(([category, techs]) => (
                      <div key={category} className="space-y-3">
                        <span className="text-xs font-mono capitalize" style={{ color: "var(--muted-fg)" }}>
                          {category}
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {techs.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="rounded-full px-3 py-1.5 text-xs font-medium"
                              style={{
                                background: "rgba(var(--deep-rgb), 0.5)",
                                border: "1px solid rgba(255,255,255,0.07)",
                                color: "rgba(255,255,255,0.75)",
                              }}
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
                    {project.keyFeatures.map((feature, idx) => (
                      <Card key={idx} className="p-4 rounded-xl" style={{ background: "var(--surface-1)", borderColor: "var(--border)" }}>
                        <CardContent className="p-0 flex items-start gap-4">
                          <span className="font-mono text-xs mt-1 shrink-0" style={{ color: "var(--teal)" }}>
                            {(idx + 1).toString().padStart(2, '0')}
                          </span>
                          <span className="leading-relaxed text-sm md:text-base font-light" style={{ color: "var(--foreground)" }}>
                            {feature}
                          </span>
                        </CardContent>
                      </Card>
                    ))}
                  </ul>
                </section>

                {/* Challenges (if any) */}
                {project.challenges?.length > 0 && (
                  <section className="mb-16">
                    <SectionHeader title="Challenges" />
                    <div className="grid gap-4 max-w-[800px]">
                      {project.challenges.map((challenge, idx) => (
                        <Card key={idx} className="p-6 rounded-2xl flex flex-col gap-4" style={{ background: "var(--surface-1)", borderColor: "var(--border)" }}>
                          <CardContent className="p-0 flex flex-col gap-4">
                            <h3 className="text-base font-bold text-white">
                              {challenge.title}
                            </h3>
                            <div className="grid gap-4">
                              <div>
                                <span className="text-[10px] font-mono tracking-widest uppercase mb-1 block" style={{ color: "#f87171" }}>
                                  Problem
                                </span>
                                <p className="text-sm font-light leading-relaxed" style={{ color: "var(--muted-fg)" }}>
                                  {challenge.problem}
                                </p>
                              </div>
                              <Separator className="w-full" style={{ background: "var(--border)" }} />
                              <div>
                                <span className="text-[10px] font-mono tracking-widest uppercase mb-1 block" style={{ color: "var(--sage)" }}>
                                  Solution
                                </span>
                                <p className="text-sm font-light leading-relaxed" style={{ color: "var(--muted-fg)" }}>
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
                    {project.results.map((result, idx) => (
                      <Card key={idx} className="p-5 rounded-2xl flex items-start gap-3" style={{ background: "var(--surface-1)", borderColor: "var(--border)" }}>
                        <CardContent className="p-0 flex items-start gap-3 w-full">
                          <span className="shrink-0 mt-0.5" style={{ color: "var(--sage)" }}>
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span className="text-sm font-light leading-relaxed" style={{ color: "var(--foreground)" }}>
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
                    {project.screenshots.map((screenshot, idx) => (
                      <figure key={idx} className="flex flex-col gap-3">
                        <Card className="rounded-xl overflow-hidden border p-1" style={{ background: "rgba(var(--deep-rgb), 0.1)", borderColor: "var(--border)" }}>
                          <CardContent className="p-0 rounded-lg overflow-hidden h-full">
                            <img
                              src={screenshot.url}
                              alt={screenshot.caption}
                              className="w-full h-auto object-cover"
                              loading="lazy"
                            />
                          </CardContent>
                        </Card>
                        <figcaption className="text-[11px] font-mono tracking-wide text-center" style={{ color: "var(--muted-fg)" }}>
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
          <div className="pt-8 border-t flex justify-center" style={{ borderColor: "var(--border)" }}>
            <button
              onClick={() => navigate("/projects")}
              className="group flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest transition-colors hover:text-[var(--sage)]"
              style={{ color: "var(--muted-fg)" }}
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

      <Footer />
    </article>
  );
}
