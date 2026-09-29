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
  },
  {
    title: "DEV CLI – SDD Automation Tool",
    category: "Developer Tools",
    description:
      "Built to accelerate the development process by generating PRDs, Technical Designs, Spec Tests, and QA Reports automatically. Integrates with AI agent workflows.",
    image: "/projects7/cli-thumb.png",
    tags: ["Node.js", "CLI", "Automation", "Playwright"],
    year: "2026",
    link: "/projects/dev-cli-sdd",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="max-w-[1280px] w-full mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <div>
            <div className="section-label mb-5">
              Portfolio
            </div>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-black tracking-tighter leading-tight text-white">
              Selected works.
            </h2>
          </div>
          <a
            href="/projects"
            className="flex items-center gap-2 text-sm font-mono text-muted transition-colors duration-200 hover:text-[var(--sage)]"
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
              className="group rounded-2xl overflow-hidden card-hover flex flex-col surface-chip"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[rgba(var(--deep-rgb),0.65)] to-transparent to-50%" />
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[11px] font-mono text-white/55 bg-[rgba(var(--deep-rgb),0.75)] backdrop-blur-sm border border-white/10">
                  {project.year}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow gap-3">
                <div>
                  <p className="text-[11px] font-mono uppercase tracking-widest mb-1.5 text-muted">
                    {project.category}
                  </p>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {project.title}
                  </h3>
                </div>

                <p className="text-sm leading-relaxed font-light line-clamp-2 flex-grow text-muted">
                  {project.description}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-[var(--border)]">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="rounded-full px-3 py-1.5 text-xs font-medium bg-[rgba(var(--deep-rgb),0.5)] border-white/10 text-white/75"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 border border-[rgba(var(--teal-rgb),0.3)] text-white/45 transition-colors duration-200 group-hover:text-[var(--sage)] group-hover:border-[rgba(var(--sage-rgb),0.5)]">
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
