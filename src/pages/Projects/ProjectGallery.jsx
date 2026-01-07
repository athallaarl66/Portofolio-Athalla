import { useNavigate } from "react-router-dom";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { BackgroundAurora } from "@/components/effects/BackgroundAurora";
import { Navbar } from "@/components/layout/Navbar";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import ContactContainer from "@/components/ContactContainer";
import Footer from "@/components/FooterGallery";
import { getAllProjects } from "../../../data/projectsData";

export default function ProjectsGallery() {
  const navigate = useNavigate();
  const projects = getAllProjects();

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Aurora Background - MORE VISIBLE */}
      <div className=" opacity-50">
        <BackgroundAurora amplitude={0.8} blend={0.4} speed={0.5} />
      </div>

      {/* Subtle Radial Glow */}
      <div className=" pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[120px]" />
      </div>

      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 pt-28 md:pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header with Fade-in Animation */}
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              All <span className="text-primary">Projects</span>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              A collection of web development projects showcasing frontend,
              backend, and full-stack capabilities
            </p>
          </div>

          {/* Projects Grid with Stagger Animation */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                className="animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <ProjectCard
                  project={project}
                  onViewDetails={() => navigate(`/projects/${project.id}`)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <ContactContainer />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

function ProjectCard({ project, onViewDetails }) {
  return (
    <article className="group relative bg-background/80 backdrop-blur-md border border-border/50 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1">
      {/* Thumbnail */}
      <div className="relative aspect-[16/10] overflow-hidden bg-muted/20">
        <img
          src={project.thumbnail}
          alt={`${project.title} thumbnail`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80" />

        {/* Badges */}
        <div className="absolute top-3 left-3 md:top-4 md:left-4 z-10">
          <span className="px-2.5 py-1 md:px-3 md:py-1 text-xs font-bold rounded-full bg-primary/90 text-primary-foreground backdrop-blur-sm shadow-lg">
            {project.category}
          </span>
        </div>

        <div className="absolute top-3 right-3 md:top-4 md:right-4 z-10">
          <span className="px-2.5 py-1 md:px-3 md:py-1 text-xs font-medium rounded-full bg-background/80 text-foreground backdrop-blur-sm border border-border/50 shadow-lg">
            {project.year}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 md:p-6 space-y-3 md:space-y-4">
        {/* Title */}
        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-tight">
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="text-sm md:text-base text-muted-foreground line-clamp-3 leading-relaxed">
          {project.shortDesc}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 md:gap-2 pt-2">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 md:px-3 md:py-1 text-xs font-medium rounded-lg bg-primary/10 text-primary border border-primary/30"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3 md:pt-4">
          <button
            onClick={onViewDetails}
            className="flex-1 px-4 md:px-5 py-2.5 bg-primary text-primary-foreground rounded-xl text-sm font-bold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-2 group/btn"
          >
            View Case Study
            <ArrowRight
              size={16}
              className="group-hover/btn:translate-x-1 transition-transform"
            />
          </button>

          <div className="flex gap-2 justify-center sm:justify-start">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 border border-border rounded-xl hover:bg-primary/10 hover:border-primary/50 transition-all"
                title="View Live Demo"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={18} />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 border border-border rounded-xl hover:bg-primary/10 hover:border-primary/50 transition-all"
                title="View Source Code"
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
