import { Code2, Layers, Database } from "lucide-react";

const skills = [
  { name: "HTML", category: "frontend", icon: "/icons/html.png" },
  { name: "CSS", category: "frontend", icon: "/icons/css.png" },
  { name: "JavaScript", category: "frontend", icon: "/icons/javascript.png" },
  { name: "TypeScript", category: "frontend", icon: "/icons/typescript.png" },
  { name: "React", category: "frontend", icon: "/icons/react.png" },
  { name: "Next.js", category: "frontend", icon: "/icons/next.png" },
  { name: "Tailwind CSS", category: "frontend", icon: "/icons/tailwind.png" },
  { name: "Node.js", category: "backend", icon: "/icons/node.png" },
  { name: "Laravel", category: "backend", icon: "/icons/laravel.png" },
  { name: "Next.js API Routes", category: "backend", icon: "/icons/next.png" },
  { name: "PostgreSQL", category: "database", icon: "/icons/postgree.png" },
  { name: "Prisma ORM", category: "database", icon: "/icons/prisma.png" },
  { name: "MySQL", category: "database", icon: "/icons/mysql.png" },
];

const categories = [
  {
    key: "frontend",
    label: "Frontend",
    icon: Code2,
    note: "Where I spend most of my time",
  },
  {
    key: "backend",
    label: "Backend",
    icon: Layers,
    note: "API routes, server logic, auth",
  },
  {
    key: "database",
    label: "Database & ORM",
    icon: Database,
    note: "Schema design, queries, migrations",
  },
];

export const SkillSection = () => {
  return (
    <section
      id="skills"
      className="py-20 md:py-32 px-4 md:px-16 relative bg-background"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-10 md:mb-16">
          <span className="text-xs font-mono text-foreground/30 tracking-widest uppercase">
            03 — Stack
          </span>
          <div className="flex-1 h-px bg-foreground/8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          {/* Left — heading */}
          <div className="md:col-span-5 space-y-4">
            <h2
              className="font-black leading-none tracking-tight text-foreground"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
            >
              What I
              <br />
              <span
                style={{
                  WebkitTextStroke: "1px rgba(74,222,128,0.3)",
                  color: "transparent",
                }}
              >
                work
              </span>
              <br />
              with.
            </h2>
            <p className="text-foreground/40 text-sm font-light leading-relaxed max-w-xs">
              Tools and technologies I've actually shipped production code with
              — not just tutorials.
            </p>
          </div>

          {/* Right — skill groups */}
          <div className="md:col-span-7 space-y-8 md:space-y-12">
            {categories.map(({ key, label, icon: Icon, note }) => (
              <div key={key} className="space-y-4">
                {/* Category header */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-7 h-7 rounded-md border border-foreground/10 bg-foreground/5">
                    <Icon className="w-3.5 h-3.5 text-foreground/50" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {label}
                    </p>
                    <p className="text-xs text-foreground/30 font-mono">
                      {note}
                    </p>
                  </div>
                </div>

                {/* Pills - responsive grid */}
                <div className="flex flex-wrap gap-2">
                  {skills
                    .filter((s) => s.category === key)
                    .map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center gap-2 px-3.5 py-2 md:px-4 md:py-2 rounded-full border border-foreground/10 bg-foreground/5 hover:border-foreground/25 hover:bg-foreground/10 transition-all duration-200 cursor-default"
                      >
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-4 h-4 object-contain"
                        />
                        <span className="text-xs md:text-sm text-foreground/70 font-medium">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                </div>

                <div className="h-px bg-foreground/6" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
