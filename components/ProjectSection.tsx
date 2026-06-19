"use client";

import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const projects = [
  {
    title: "DiajarAksara",
    category: "Learning Platform",
    description:
      "Thesis project — iterative UCD process at SMAN 24 Bandung. Full app for learning Sundanese script, from user research to shipped product.",
    image: "/projects1/HOMEPAGE.png",
    tags: ["Next.js", "CSS Modules", "UI/UX", "UCD"],
    year: "2025",
    link: "/projects/sundanese-learning",
    overlayColor: "rgba(var(--deep-rgb), 0.35)",
    accentBorder: "rgba(var(--teal-rgb), 0.35)",
  },
  {
    title: "Money Tracker",
    category: "Financial System",
    description:
      "Fullstack app with JWT auth, recurring transaction logic, and analytics dashboard. Containerised and deployed with Docker + PostgreSQL.",
    image: "/Projects5/Dashboard.png",
    tags: ["Spring Boot", "React", "PostgreSQL", "Docker"],
    year: "2026",
    link: "/projects/money-tracker",
    overlayColor: "rgba(var(--teal-rgb), 0.2)",
    accentBorder: "rgba(var(--sage-rgb), 0.35)",
  },
  {
    title: "Crazwash",
    category: "POS & Operations",
    description:
      "Full-stack laundry business POS — public ordering flows, staff dashboard, and admin panel. Type-safe with Prisma + PostgreSQL.",
    image: "/projects3/Dashboard.png",
    tags: ["Next.js", "Prisma", "PostgreSQL", "TypeScript"],
    year: "2026",
    link: "/projects/crazwash-umkm-dashboard",
    overlayColor: "rgba(var(--sage-rgb), 0.15)",
    accentBorder: "rgba(var(--sage-rgb), 0.3)",
  },
  {
    title: "RK Law Firm",
    category: "Corporate Website",
    description:
      "Built during internship — professional company profile with integrated online legal service booking, responsive and deployed.",
    image: "/projects2/homerk.jpg",
    tags: ["Laravel", "HTML/CSS", "Figma"],
    year: "2024",
    link: "/projects/law-firm-website",
    overlayColor: "rgba(var(--pale-rgb), 0.1)",
    accentBorder: "rgba(var(--pale-rgb), 0.25)",
  },
  {
    title: "Industrial IoT Dashboard",
    category: "Enterprise System",
    description:
      "Enterprise-grade asset intelligence platform. High-frequency telemetry ingestion via MQTT, predictive analytics, and SignalR real-time sync.",
    image: "/projects6/DashboardIOThero.png",
    tags: [".NET 8", "React", "MQTT", "PostgreSQL"],
    year: "2026",
    link: "/projects/industrial-iot",
    overlayColor: "rgba(var(--teal-rgb), 0.25)",
    accentBorder: "rgba(var(--sage-rgb), 0.35)",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(var(--deep-rgb), 0.3) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1280px] w-full mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <div>
            <div className="section-label mb-5 w-fit">
              <span className="section-label-dot" />
              Portfolio
            </div>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-black tracking-tighter leading-tight text-white">
              Selected <span className="text-gradient-primary">works.</span>
            </h2>
          </div>
          <a
            href="/projects"
            className="flex items-center gap-2 text-sm font-mono transition-colors duration-200 hover:text-[var(--sage)]"
            style={{ color: "var(--muted-fg)" }}
          >
            View all projects <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              className="group rounded-2xl overflow-hidden border card-hover flex flex-col"
              style={{
                background: "var(--surface-1)",
                borderColor: "var(--border)",
              }}
            >
              {/* Image */}
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: "16/9" }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: project.overlayColor }}
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(var(--deep-rgb), 0.65) 0%, transparent 50%)",
                  }}
                />
                <div
                  className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[11px] font-mono"
                  style={{
                    background: "rgba(var(--deep-rgb), 0.75)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.55)",
                  }}
                >
                  {project.year}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow gap-3">
                <div>
                  <p
                    className="text-[11px] font-mono uppercase tracking-widest mb-1.5"
                    style={{ color: "var(--muted-fg)" }}
                  >
                    {project.category}
                  </p>
                  <h3
                    className="text-lg font-bold text-white"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {project.title}
                  </h3>
                </div>

                <p
                  className="text-sm leading-relaxed font-light line-clamp-2 flex-grow"
                  style={{ color: "var(--muted-fg)" }}
                >
                  {project.description}
                </p>

                <div
                  className="flex items-center justify-between pt-3 border-t"
                  style={{ borderColor: "var(--border)" }}
                >
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="rounded-full px-3 py-1.5 text-xs font-medium"
                        style={{
                          background: "rgba(var(--deep-rgb), 0.5)",
                          border: "1px solid rgba(255,255,255,0.07)",
                          color: "rgba(255,255,255,0.75)",
                        }}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 shrink-0"
                    style={{
                      border: `1px solid ${project.accentBorder}`,
                      background: project.overlayColor,
                      color: "rgba(255,255,255,0.45)",
                    }}
                  >
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
