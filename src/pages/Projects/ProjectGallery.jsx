import { useNavigate } from "react-router-dom";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import ContactContainer from "@/components/ContactContainer";
import Footer from "@/components/FooterGallery";
import { getAllProjects } from "../../../data/projectsData";

export default function ProjectsGallery() {
  const navigate = useNavigate();
  const projects = getAllProjects();

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* Subtle glow — sama persis kayak homepage, BUKAN aurora */}
      <div
        className="fixed -top-60 -left-60 w-[700px] h-[700px] rounded-full pointer-events-none -z-10"
        style={{
          background:
            "radial-gradient(circle, rgba(74,222,128,0.08) 0%, transparent 65%)",
        }}
      />

      <Navbar />

      <main className="pt-28 md:pt-32 pb-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Section label — konsisten sama homepage */}
          <div className="flex items-center gap-3 mb-16">
            <span className="text-xs font-mono text-foreground/30 tracking-widest uppercase">
              Projects
            </span>
            <div className="flex-1 h-px bg-foreground/8" />
          </div>

          {/* Heading */}
          <div className="mb-16 space-y-3">
            <h1
              className="font-black leading-none tracking-tight text-foreground"
              style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
            >
              Things I've
              <br />
              <span
                style={{
                  WebkitTextStroke: "1px rgba(74,222,128,0.3)",
                  color: "transparent",
                }}
              >
                built.
              </span>
            </h1>
            <p className="text-foreground/40 text-sm font-light max-w-md">
              Three projects — a law firm site, a laundry POS app, and a thesis
              platform. Each one shipped and deployed.
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
                  onViewDetails={() => navigate(`/projects/${project.id}`)}
                />
              </div>
            ))}
          </div>
        </div>

        <ContactContainer />
      </main>

      <Footer />
    </div>
  );
}

function ProjectCard({ project, onViewDetails }) {
  return (
    <article className="group bg-foreground/3 border border-foreground/8 rounded-2xl overflow-hidden hover:border-primary/25 transition-all duration-300">
      {/* Thumbnail */}
      <div className="relative aspect-[16/10] overflow-hidden bg-foreground/5">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />

        {/* Year badge — subtle, bukan category badge yang norak */}
        <div className="absolute top-3 right-3">
          <span className="px-2.5 py-1 text-xs font-mono rounded-full bg-background/80 text-foreground/50 border border-foreground/10 backdrop-blur-sm">
            {project.year}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <span className="text-xs font-mono text-foreground/30 tracking-widest uppercase">
          {project.category}
        </span>

        <h3 className="text-lg md:text-xl font-black text-foreground group-hover:text-primary transition-colors leading-tight tracking-tight">
          {project.title}
        </h3>

        <p className="text-sm text-foreground/50 line-clamp-2 leading-relaxed font-light">
          {project.shortDesc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-mono rounded-full border border-primary/15 bg-primary/5 text-primary/60"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-2 border-t border-foreground/8">
          <button
            onClick={onViewDetails}
            className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-foreground/50 hover:text-primary transition-colors duration-200"
          >
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
                className="p-2 text-foreground/25 hover:text-primary transition-colors"
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
                className="p-2 text-foreground/25 hover:text-primary transition-colors"
                title="Source"
              >
                <Github size={15} />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
