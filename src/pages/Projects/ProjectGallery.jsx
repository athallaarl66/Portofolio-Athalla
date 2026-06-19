import { useNavigate } from "react-router-dom";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import ContactContainer from "@/components/ContactContainer";
import Footer from "@/components/layout/Footer";
import { getAllProjects } from "../../../data/projectsData";

export default function ProjectsGallery() {
  const navigate = useNavigate();
  const projects = getAllProjects();

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div
        className="fixed -top-60 -left-60 w-[700px] h-[700px] rounded-full pointer-events-none -z-10"
        style={{ background: "radial-gradient(circle, rgba(var(--deep-rgb), 0.3) 0%, transparent 65%)" }}
        aria-hidden="true"
      />

      <Navbar />

      <main className="pt-28 md:pt-32 pb-16 px-6 md:px-16">
        <div className="max-w-[1280px] w-full mx-auto">
          {/* Section label */}
          <div className="section-label mb-10 w-fit">
            <span className="section-label-dot" />
            Projects
          </div>

          {/* Heading */}
          <div className="mb-16 space-y-3">
            <h1 className="text-[clamp(2.8rem,6vw,5rem)] font-black leading-none tracking-tighter text-white">
              Things I've
              <br />
              <span className="text-gradient-primary">built.</span>
            </h1>
            <p className="text-base font-light max-w-md mt-4" style={{ color: "var(--muted-fg)" }}>
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
  // Map hardcoded overlay colors based on project ID
  const getColor = (id) => {
    if (id === "sundanese-learning") return "rgba(40,28,89,0.35)";
    if (id === "money-tracker") return "rgba(78,141,156,0.2)";
    if (id === "Crazwash-umkm-dashboard") return "rgba(133,199,154,0.15)";
    if (id === "industrial-iot") return "rgba(78,141,156,0.25)";
    if (id === "law-firm-website") return "rgba(237,247,189,0.1)";
    return "rgba(255,255,255,0.05)"; // safe fallback
  };

  const overlayColor = getColor(project.id);

  return (
    <article
      className="group rounded-2xl overflow-hidden border card-hover flex flex-col cursor-pointer h-full"
      style={{ background: "var(--surface-1)", borderColor: "var(--border)" }}
      onClick={onViewDetails}
    >
      {/* Thumbnail */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
          loading="lazy"
        />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: overlayColor }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(8,8,15,0.65) 0%, transparent 50%)" }}
        />

        {/* Year badge */}
        <div
          className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[11px] font-mono"
          style={{
            background: "rgba(8,8,15,0.75)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.08)",
            color: "rgba(255,255,255,0.55)",
          }}
        >
          {project.year}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow gap-4">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-widest mb-1.5 block" style={{ color: "var(--muted-fg)" }}>
            {project.category}
          </span>
          <h3 className="text-xl font-bold text-white leading-tight tracking-tight">
            {project.title}
          </h3>
        </div>

        <p className="text-sm line-clamp-2 leading-relaxed font-light flex-grow" style={{ color: "var(--muted-fg)" }}>
          {project.shortDesc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="tag-pill">{tag}</span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 mt-2 border-t" style={{ borderColor: "var(--border)" }}>
          <button
            className="group/btn inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200"
            style={{ color: "var(--muted-fg)" }}
            onMouseEnter={e => e.currentTarget.style.color = "var(--sage)"}
            onMouseLeave={e => e.currentTarget.style.color = "var(--muted-fg)"}
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
                className="p-2 transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.25)" }}
                onMouseEnter={e => e.currentTarget.style.color = "var(--sage)"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.25)"}
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
                className="p-2 transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.25)" }}
                onMouseEnter={e => e.currentTarget.style.color = "var(--sage)"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.25)"}
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
