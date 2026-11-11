"use client";

import { Terminal, Database, Layout } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  SiDocker,
  SiDotnet,
  SiLaravel,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const skills = [
  { name: "TypeScript", category: "Frontend", icon: SiTypescript },
  { name: "React", category: "Frontend", icon: SiReact },
  { name: "Next.js", category: "Frontend", icon: SiNextdotjs },
  { name: "Tailwind CSS", category: "Frontend", icon: SiTailwindcss },
  { name: "Laravel", category: "Backend", icon: SiLaravel },
  { name: ".NET 8", category: "Backend", icon: SiDotnet },
  { name: "Node.js", category: "Backend", icon: SiNodedotjs },
  { name: "Spring Boot", category: "Backend", icon: SiSpringboot },
  { name: "PostgreSQL", category: "Data & Delivery", icon: SiPostgresql },
  { name: "MySQL", category: "Data & Delivery", icon: SiMysql },
  { name: "Docker", category: "Data & Delivery", icon: SiDocker },
];

const categories = [
  { title: "Frontend", icon: Layout },
  { title: "Backend", icon: Terminal },
  { title: "Data & Delivery", icon: Database },
];

const additionalSkills = ["SignalR", "MQTT", "Git", "Figma", "REST APIs"];

export const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-16 md:py-20">
      <div className="max-w-[1200px] w-full mx-auto px-6 md:px-10 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
          <div>
            <h2 className="text-[clamp(2.4rem,5vw,4.5rem)] font-normal tracking-[0.02em] leading-[1.12] text-white [text-wrap:balance]">
              Tools I work with.
            </h2>
          </div>
          <p className="text-[15px] leading-[1.7] max-w-sm lg:text-right text-muted [text-wrap:pretty]">
            Core tools across my software projects.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const catSkills = skills.filter((s) => s.category === cat.title);
            return (
              <Card
                key={cat.title}
                className="rounded-none border-0 border-t border-[var(--border)] bg-transparent px-0 py-6 shadow-none"
              >
                <CardContent className="p-0">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="font-[family-name:var(--font-body)] text-lg font-semibold tracking-normal leading-[1.4] text-white">
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

                  <div className="flex flex-col gap-3">
                    {catSkills.map((skill) => {
                      const IconComponent = skill.icon;
                      return (
                        <div
                          key={skill.name}
                          className="flex items-center gap-3 text-sm font-medium"
                        >
                          <IconComponent className="w-3.5 h-3.5 text-[var(--film-amber)] shrink-0" />
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

        <p className="mt-6 text-center text-xs font-mono text-muted">
          Also: {additionalSkills.join(" · ")}
        </p>
      </div>
    </section>
  );
};
