"use client";

import { Terminal, Database, Layout } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  { name: "HTML", category: "Frontend", icon: "/icons/html.png" },
  { name: "CSS", category: "Frontend", icon: "/icons/css.png" },
  { name: "JavaScript", category: "Frontend", icon: "/icons/javascript.png" },
  { name: "TypeScript", category: "Frontend", icon: "/icons/typescript.png" },
  { name: "React", category: "Frontend", icon: "/icons/react.png" },
  { name: "Next.js", category: "Frontend", icon: "/icons/next.png" },
  { name: "Tailwind CSS", category: "Frontend", icon: "/icons/tailwind.png" },
  { name: "Node.js", category: "Backend", icon: "/icons/node.png" },
  { name: ".NET 8", category: "Backend", icon: "/icons/net.png" },
  { name: "C#", category: "Backend", icon: "/icons/cSHARP.png" },
  { name: "Laravel", category: "Backend", icon: "/icons/laravel.png" },
  { name: "Spring Boot", category: "Backend", icon: "/icons/springboot.png" },
  { name: "Next.js API", category: "Backend", icon: "/icons/next.png" },
  {
    name: "PostgreSQL",
    category: "Database & Ops",
    icon: "/icons/postgree.png",
  },
  { name: "Prisma ORM", category: "Database & Ops", icon: "/icons/prisma.png" },
  { name: "MySQL", category: "Database & Ops", icon: "/icons/mysql.png" },
];

// All category cards use the same neutral surface; restraint over rainbow
const categories = [
  { title: "Frontend", icon: Layout },
  { title: "Backend", icon: Terminal },
  { title: "Database & Ops", icon: Database },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="max-w-[1280px] w-full mx-auto px-6 md:px-10 lg:px-16">
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
                    {catSkills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full cursor-default transition-colors duration-200 bg-[rgba(var(--deep-rgb),0.5)] border border-white/10 hover:border-[rgba(var(--sage-rgb),0.4)]"
                      >
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-3.5 h-3.5 object-contain"
                          loading="lazy"
                        />
                        <span className="text-xs font-medium text-white/75">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Also familiar with */}
        <div className="mt-5 px-6 py-4 rounded-2xl flex flex-wrap items-center gap-x-6 gap-y-2 surface-chip">
          <span className="text-[11px] font-mono uppercase tracking-widest flex-shrink-0 text-muted">
            Also familiar with
          </span>
          {[
            "SignalR",
            "MQTT",
            "Docker",
            "Git",
            "Figma",
            "REST APIs",
            "Postman",
          ].map((t) => (
            <Badge
              key={t}
              variant="outline"
              className="rounded-full px-3 py-1.5 text-xs font-medium bg-[rgba(var(--deep-rgb),0.5)] border-white/10 text-white/75"
            >
              {t}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};
