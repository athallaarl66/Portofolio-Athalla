import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "DiajarAksara — Sundanese Script Learning Platform",
    description:
      "Undergraduate thesis built using the User-Centered Design method. Researched learning challenges at SMAN 24 Bandung, designed prototypes, and shipped the final web app — script reference, writing practice, and quiz.",
    image: "/projects1/HOMEPAGE.png",
    tags: ["Next.js", "CSS Modules", "UI/UX", "UCD"],
    year: "2025",
  },
  {
    title: "RK Law Firm — Corporate Website",
    description:
      "Built and customized the company profile site for Rantai Khatulistiwa during internship in Jakarta. Added online legal service features and integrated frontend components into the existing Laravel stack.",
    image: "/projects2/homerk.jpg",
    tags: ["React", "Laravel", "Figma", "UI/UX"],
    year: "2024",
  },
  {
    title: "Crazwash — POS Web App for UMKM",
    description:
      "Full-stack POS app for a laundry UMKM. Public multi-step ordering flow, manual payment via WhatsApp, admin dashboard for managing services and orders, CSV export, and NextAuth authentication.",
    image: "/projects3/adminDashboard.png",
    tags: ["Next.js", "Prisma", "PostgreSQL", "TypeScript"],
    year: "2026",
  },
];

export const ProjectSection = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? projects.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === projects.length - 1 ? 0 : i + 1));

  const project = projects[index];

  return (
    <section id="projects" className="relative py-32 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-16">
          <span className="text-xs font-mono text-foreground/30 tracking-widest uppercase">
            04 — Projects
          </span>
          <div className="flex-1 h-px bg-foreground/8" />
        </div>

        {/* Card */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden border border-foreground/8"
          style={{
            boxShadow:
              "0 0 0 1px rgba(255,255,255,0.04), 0 32px 64px rgba(0,0,0,0.4)",
          }}
        >
          {/* Image */}
          <div className="relative aspect-[4/3] md:aspect-auto bg-foreground/5 overflow-hidden">
            <img
              key={project.image}
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-contain transition-opacity duration-500"
            />
            {/* Year badge */}
            <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm border border-foreground/10 rounded-full px-3 py-1">
              <span className="text-xs font-mono text-foreground/50">
                {project.year}
              </span>
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col justify-between p-8 md:p-10 bg-background/60 backdrop-blur-sm">
            {/* Top */}
            <div className="space-y-5">
              <span className="text-xs font-mono text-foreground/30 tracking-widest">
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(projects.length).padStart(2, "0")}
              </span>

              <h3 className="text-xl md:text-2xl font-black text-foreground leading-tight tracking-tight">
                {project.title}
              </h3>

              <p className="text-foreground/55 text-sm md:text-base leading-relaxed font-light">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-mono rounded-full border border-primary/20 bg-primary/5 text-primary/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom — actions */}
            <div className="flex items-center justify-between pt-8 mt-8 border-t border-foreground/8">
              <button
                onClick={() => navigate("/projects")}
                className="group inline-flex items-center gap-2 bg-foreground text-background px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                View Project
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <div className="flex items-center gap-4">
                {/* Dots */}
                <div className="flex gap-1.5">
                  {projects.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === index
                          ? "w-6 bg-primary"
                          : "w-3 bg-foreground/20 hover:bg-foreground/40"
                      }`}
                    />
                  ))}
                </div>
                {/* Arrows */}
                <div className="flex gap-2">
                  <button
                    onClick={prev}
                    className="w-8 h-8 rounded-full border border-foreground/15 flex items-center justify-center text-foreground/50 hover:border-primary/50 hover:text-primary transition-all duration-200"
                  >
                    <ChevronLeft size={14} />
                  </button>
                  <button
                    onClick={next}
                    className="w-8 h-8 rounded-full border border-foreground/15 flex items-center justify-center text-foreground/50 hover:border-primary/50 hover:text-primary transition-all duration-200"
                  >
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
