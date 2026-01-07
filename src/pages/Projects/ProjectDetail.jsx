import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  User,
  Layers,
  Figma,
} from "lucide-react";
import { BackgroundAurora } from "@/components/effects/BackgroundAurora";
import { Navbar } from "@/components/layout/Navbar";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import Footer from "@/components/FooterGallery";
import { getProject } from "../../../data/projectsData";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = getProject(id);

  // Project Not Found State
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="opacity-40">
          <BackgroundAurora amplitude={0.6} blend={0.3} speed={0.4} />
        </div>
        <div className="relative z-10 text-center p-8 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            404
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Project Not Found
          </p>
          <button
            onClick={() => navigate("/projects")}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/30"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <article className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Aurora Background */}
      <div className="opacity-40">
        <BackgroundAurora amplitude={0.6} blend={0.3} speed={0.4} />
      </div>

      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 pt-24 md:pt-32 pb-12 md:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* Back Button */}
          <button
            onClick={() => navigate("/projects")}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6 md:mb-8 group animate-fade-in"
          >
            <ArrowLeft
              size={20}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span className="font-medium text-sm md:text-base">
              Back to Projects
            </span>
          </button>

          {/* Hero Image */}
          <div className="relative aspect-video rounded-xl md:rounded-2xl overflow-hidden mb-6 md:mb-10 shadow-2xl border border-border/50 animate-fade-in-delay-1">
            <img
              src={project.hero}
              alt={`${project.title} hero`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Project Header */}
          <div className="mb-8 md:mb-12 animate-fade-in-delay-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4 leading-tight">
              {project.title}
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-8 leading-relaxed">
              {project.tagline}
            </p>

            {/* Action Buttons - MOBILE OPTIMIZED */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-3 md:gap-4 mb-6 md:mb-8">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 sm:px-5 md:px-6 py-2.5 md:py-3 bg-primary text-primary-foreground rounded-xl text-sm md:text-base font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/30 hover:scale-[1.02]"
                >
                  <ExternalLink size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span>View Live Demo</span>
                </a>
              )}

              {project.figmaUrl && (
                <a
                  href={project.figmaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 sm:px-5 md:px-6 py-2.5 md:py-3 border-2 border-border rounded-xl text-sm md:text-base font-bold hover:bg-muted transition-all hover:scale-[1.02]"
                >
                  <Figma size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span>View Figma Design</span>
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 sm:px-5 md:px-6 py-2.5 md:py-3 border-2 border-border rounded-xl text-sm md:text-base font-bold hover:bg-muted transition-all hover:scale-[1.02]"
                >
                  <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span>View Source Code</span>
                </a>
              )}
            </div>

            {/* Meta Info Cards - PERFECTLY CENTERED */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/40 border border-border/50 backdrop-blur-md hover:bg-muted/50 transition-colors">
                <User className="text-primary flex-shrink-0" size={20} />
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground mb-1">Role</p>
                  <p className="font-semibold text-sm md:text-base leading-tight">
                    {project.role}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/40 border border-border/50 backdrop-blur-md hover:bg-muted/50 transition-colors">
                <Calendar className="text-primary flex-shrink-0" size={20} />
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground mb-1">Duration</p>
                  <p className="font-semibold text-sm md:text-base leading-tight">
                    {project.duration}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/40 border border-border/50 backdrop-blur-md hover:bg-muted/50 transition-colors">
                <Layers className="text-primary flex-shrink-0" size={20} />
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground mb-1">Category</p>
                  <p className="font-semibold text-sm md:text-base leading-tight">
                    {project.category}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Overview */}
          <section
            id="overview"
            className="mb-8 md:mb-12 animate-fade-in-delay-3"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4">
              Overview
            </h2>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base md:text-lg">
              {project.overview}
            </p>
          </section>

          {/* Tech Stack - CENTERED & CLEAN */}
          <section
            id="tech-stack"
            className="mb-8 md:mb-12 animate-fade-in-delay-4"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center">
              Tech Stack
            </h2>
            <div className="space-y-4 md:space-y-5">
              {Object.entries(project.techStack).map(([category, techs]) => (
                <div key={category} className="text-center">
                  <span className="font-semibold text-primary capitalize text-sm md:text-base block mb-2.5">
                    {category}:
                  </span>
                  <div className="flex flex-wrap justify-center gap-2 md:gap-2.5">
                    {techs.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-xs md:text-sm rounded-lg bg-primary/10 text-primary border border-primary/30 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Key Features */}
          <section id="features" className="mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6">
              Key Features
            </h2>
            <ul className="space-y-2.5 md:space-y-3">
              {project.keyFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5 md:gap-3">
                  <span className="text-primary font-bold text-base md:text-lg flex-shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Challenges & Solutions */}
          {project.challenges && project.challenges.length > 0 && (
            <section id="challenges" className="mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6">
                Challenges & Solutions
              </h2>
              <div className="space-y-4 md:space-y-6">
                {project.challenges.map((challenge, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 md:p-6 rounded-xl bg-muted/40 border border-border/50 backdrop-blur-md hover:bg-muted/50 transition-colors"
                  >
                    <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 md:mb-4">
                      {challenge.title}
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <span className="text-xs md:text-sm font-semibold text-red-400">
                          Problem:
                        </span>
                        <p className="text-muted-foreground mt-1.5 text-sm md:text-base leading-relaxed">
                          {challenge.problem}
                        </p>
                      </div>
                      <div>
                        <span className="text-xs md:text-sm font-semibold text-green-400">
                          Solution:
                        </span>
                        <p className="text-muted-foreground mt-1.5 text-sm md:text-base leading-relaxed">
                          {challenge.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Results */}
          <section id="results" className="mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6">
              Results & Impact
            </h2>
            <ul className="space-y-2.5 md:space-y-3">
              {project.results.map((result, idx) => (
                <li key={idx} className="flex items-start gap-2.5 md:gap-3">
                  <span className="text-primary font-bold text-base md:text-lg flex-shrink-0 mt-0.5">
                    •
                  </span>
                  <span className="text-muted-foreground leading-relaxed font-medium text-sm md:text-base">
                    {result}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Screenshots Gallery - MOBILE OPTIMIZED */}
          <section id="screenshots" className="mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6">
              Screenshots
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {project.screenshots.map((screenshot, idx) => (
                <figure key={idx} className="space-y-2 group">
                  <div className="rounded-xl overflow-hidden border border-border/50 shadow-lg bg-muted/20 group-hover:border-primary/50 transition-colors">
                    <img
                      src={screenshot.url}
                      alt={screenshot.caption}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="text-xs md:text-sm text-muted-foreground text-center px-2 leading-tight">
                    {screenshot.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          {/* Back to Projects CTA */}
          <div className="text-center pt-6 md:pt-8 border-t border-border/50">
            <button
              onClick={() => navigate("/projects")}
              className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-primary text-primary-foreground rounded-xl text-sm md:text-base font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/30 hover:scale-[1.02]"
            >
              View More Projects
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </article>
  );
}
