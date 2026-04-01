import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Github, Figma, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/FooterGallery";
import { getProject } from "../../../data/projectsData";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = getProject(id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center p-8">
          <h1 className="text-6xl font-black text-foreground mb-4">404</h1>
          <p className="text-foreground/50 mb-8 font-mono text-sm">
            project not found
          </p>
          <button
            onClick={() => navigate("/projects")}
            className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <article className="relative min-h-screen bg-background text-foreground">
      <div
        className="fixed -top-60 -left-60 w-[700px] h-[700px] rounded-full pointer-events-none -z-10"
        style={{
          background:
            "radial-gradient(circle, rgba(74,222,128,0.06) 0%, transparent 65%)",
        }}
      />

      <Navbar />

      <main className="pt-28 md:pt-32 pb-16 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <button
            onClick={() => navigate("/projects")}
            className="group flex items-center gap-2 text-foreground/40 hover:text-primary transition-colors mb-10 text-sm font-mono"
          >
            <ArrowLeft
              size={14}
              className="group-hover:-translate-x-1 transition-transform"
            />
            back to projects
          </button>

          <div
            className="relative rounded-2xl overflow-hidden mb-12 border border-foreground/8"
            style={{ boxShadow: "0 32px 64px rgba(0,0,0,0.4)" }}
          >
            <img
              src={project.hero}
              alt={project.title}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono text-foreground/30 tracking-widest uppercase">
                  {project.category}
                </span>
                <h1 className="text-3xl md:text-4xl font-black text-foreground leading-tight tracking-tight">
                  {project.title}
                </h1>
                <p className="text-foreground/55 text-base leading-relaxed font-light pt-1">
                  {project.tagline}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 bg-foreground text-background px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    Live Demo
                    <ArrowUpRight
                      size={14}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </a>
                )}
                {project.figmaUrl && (
                  <a
                    href={project.figmaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-foreground/15 text-foreground/60 px-5 py-2.5 rounded-full text-sm font-semibold hover:border-foreground/40 hover:text-foreground transition-all duration-300"
                  >
                    <Figma size={14} />
                    Figma
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-foreground/15 text-foreground/60 px-5 py-2.5 rounded-full text-sm font-semibold hover:border-foreground/40 hover:text-foreground transition-all duration-300"
                  >
                    <Github size={14} />
                    {project.githubUrlBe ? "Source (FE)" : "Source"}
                  </a>
                )}
                {project.githubUrlBe && (
                  <a
                    href={project.githubUrlBe}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-foreground/15 text-foreground/60 px-5 py-2.5 rounded-full text-sm font-semibold hover:border-foreground/40 hover:text-foreground transition-all duration-300"
                  >
                    <Github size={14} />
                    Source (BE)
                  </a>
                )}
              </div>
            </div>

            <div className="md:col-span-5 space-y-0">
              {[
                { label: "Role", value: project.role },
                { label: "Duration", value: project.duration },
                { label: "Year", value: project.year },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="flex flex-col gap-1 py-4 border-b border-foreground/8 first:border-t first:border-foreground/8"
                >
                  <span className="text-xs font-mono text-foreground/30 tracking-widest uppercase">
                    {label}
                  </span>
                  <span className="text-sm font-semibold text-foreground">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-mono text-foreground/30 tracking-widest uppercase">
                Overview
              </span>
              <div className="flex-1 h-px bg-foreground/8" />
            </div>
            <p className="text-foreground/60 leading-relaxed text-base md:text-lg font-light max-w-3xl">
              {project.overview}
            </p>
          </section>

          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-mono text-foreground/30 tracking-widest uppercase">
                Tech Stack
              </span>
              <div className="flex-1 h-px bg-foreground/8" />
            </div>
            <div className="space-y-5">
              {Object.entries(project.techStack).map(([category, techs]) => (
                <div key={category} className="space-y-2">
                  <span className="text-xs font-mono text-foreground/40 capitalize">
                    {category}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {techs.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono rounded-full border border-primary/20 bg-primary/5 text-primary/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-mono text-foreground/30 tracking-widest uppercase">
                Features
              </span>
              <div className="flex-1 h-px bg-foreground/8" />
            </div>
            <ul className="space-y-3">
              {project.keyFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-primary/60 font-mono text-xs mt-1.5 flex-shrink-0">
                    —
                  </span>
                  <span className="text-foreground/60 leading-relaxed text-sm md:text-base">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {project.challenges?.length > 0 && (
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-mono text-foreground/30 tracking-widest uppercase">
                  Challenges
                </span>
                <div className="flex-1 h-px bg-foreground/8" />
              </div>
              <div className="space-y-4">
                {project.challenges.map((challenge, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-xl border border-foreground/8 bg-foreground/3 space-y-4"
                  >
                    <h3 className="text-sm font-bold text-foreground">
                      {challenge.title}
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <span className="text-xs font-mono text-red-400/60 tracking-widest uppercase">
                          Problem
                        </span>
                        <p className="text-foreground/55 mt-1.5 text-sm leading-relaxed">
                          {challenge.problem}
                        </p>
                      </div>
                      <div>
                        <span className="text-xs font-mono text-primary/60 tracking-widest uppercase">
                          Solution
                        </span>
                        <p className="text-foreground/55 mt-1.5 text-sm leading-relaxed">
                          {challenge.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-mono text-foreground/30 tracking-widest uppercase">
                Results
              </span>
              <div className="flex-1 h-px bg-foreground/8" />
            </div>
            <ul className="space-y-3">
              {project.results.map((result, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-primary/60 font-mono text-xs mt-1.5 flex-shrink-0">
                    —
                  </span>
                  <span className="text-foreground/60 leading-relaxed text-sm md:text-base">
                    {result}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-mono text-foreground/30 tracking-widest uppercase">
                Screenshots
              </span>
              <div className="flex-1 h-px bg-foreground/8" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.screenshots.map((screenshot, idx) => (
                <figure key={idx} className="space-y-2">
                  <div className="rounded-xl overflow-hidden border border-foreground/8">
                    <img
                      src={screenshot.url}
                      alt={screenshot.caption}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="text-xs text-foreground/30 font-mono px-1">
                    {screenshot.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          <div className="pt-8 border-t border-foreground/8">
            <button
              onClick={() => navigate("/projects")}
              className="group inline-flex items-center gap-2 text-foreground/40 hover:text-primary transition-colors text-sm font-mono"
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
