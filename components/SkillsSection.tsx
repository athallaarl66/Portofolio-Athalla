"use client";

import { Terminal, Database, Layout } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiDotnet,
  SiLaravel,
  SiSpringboot,
  SiPostgresql,
  SiPrisma,
  SiMysql,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

const skills = [
  { name: "HTML", category: "Frontend", icon: SiHtml5 },
  { name: "CSS", category: "Frontend", icon: SiCss3 },
  { name: "JavaScript", category: "Frontend", icon: SiJavascript },
  { name: "TypeScript", category: "Frontend", icon: SiTypescript },
  { name: "React", category: "Frontend", icon: SiReact },
  { name: "Next.js", category: "Frontend", icon: SiNextdotjs },
  { name: "Tailwind CSS", category: "Frontend", icon: SiTailwindcss },
  { name: "Node.js", category: "Backend", icon: SiNodedotjs },
  { name: ".NET 8", category: "Backend", icon: SiDotnet },
  { name: "C#", category: "Backend", icon: TbBrandCSharp },
  { name: "Laravel", category: "Backend", icon: SiLaravel },
  { name: "Spring Boot", category: "Backend", icon: SiSpringboot },
  { name: "Next.js API", category: "Backend", icon: SiNextdotjs },
  { name: "PostgreSQL", category: "Database & Ops", icon: SiPostgresql },
  { name: "Prisma ORM", category: "Database & Ops", icon: SiPrisma },
  { name: "MySQL", category: "Database & Ops", icon: SiMysql },
];

const categories = [
  { title: "Frontend", icon: Layout },
  { title: "Backend", icon: Terminal },
  { title: "Database & Ops", icon: Database },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-24 md:py-28">
      <div className="max-w-[1200px] w-full mx-auto px-6 md:px-10 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="section-label mb-5">
              Tech stack
            </div>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-black tracking-tighter leading-tight text-white">
              Technologies I use every day.
            </h2>
          </div>
          <p className="text-sm font-light max-w-xs md:text-right text-muted">
            Frontend, backend, databases, and deployment tools I use in my projects.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const catSkills = skills.filter((s) => s.category === cat.title);
            return (
              <Card
                key={cat.title}
                className="rounded-2xl p-6 card-hover surface-chip"
              >
                <CardContent className="p-0">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-base font-bold text-white">
                        {cat.title}
                      </h3>
                      <p className="text-[11px] font-mono mt-0.5 text-muted">
                        {catSkills.length} skills
                      </p>
                    </div>
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center border border-white/10 bg-white/[0.04]">
                      <Icon className="w-4 h-4 text-muted" />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {catSkills.map((skill) => {
                      const IconComponent = skill.icon;
                      return (
                        <div
                          key={skill.name}
                          className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium bg-[rgba(var(--deep-rgb),0.5)] border border-white/10 hover:border-[rgba(var(--sage-rgb),0.4)] transition-colors"
                        >
                          <IconComponent className="w-3.5 h-3.5 text-[var(--sage)] shrink-0" />
                          <span className="text-white/80">
                            {skill.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Auxiliary & Protocols */}
        <div className="mt-6 px-6 py-4 rounded-2xl flex flex-wrap items-center gap-x-6 gap-y-2 surface-chip">
          <span className="text-[11px] font-mono uppercase tracking-widest flex-shrink-0 text-muted">
            Specialized & Protocols
          </span>
          {[
            "SignalR",
            "MQTT",
            "Docker",
            "Git",
            "Figma",
            "REST APIs",
            "Playwright",
          ].map((t) => (
            <span
              key={t}
              className="text-xs font-mono text-white/70 hover:text-white transition-colors"
            >
              #{t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
