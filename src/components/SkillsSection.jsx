import { Code2, Layers, Database } from "lucide-react";

const skills = [
  // FRONTEND (CORE)
  { name: "HTML", category: "frontend", icon: "/icons/html.png" },
  { name: "CSS", category: "frontend", icon: "/icons/css.png" },
  { name: "JavaScript", category: "frontend", icon: "/icons/javascript.png" },
  { name: "TypeScript", category: "frontend", icon: "/icons/typescript.png" },
  { name: "React", category: "frontend", icon: "/icons/react.png" },
  { name: "Next.js", category: "frontend", icon: "/icons/next.png" },
  {
    name: "Tailwind CSS",
    category: "frontend",
    icon: "/icons/tailwind.png",
  },

  // FULLSTACK / BACKEND SUPPORT
  { name: "Node.js", category: "backend", icon: "/icons/node.png" },
  { name: "Laravel", category: "backend", icon: "/icons/laravel.png" },
  {
    name: "Next.js API Routes",
    category: "backend",
    icon: "/icons/next.png",
  },

  // DATABASE & ORM
  { name: "PostgreSQL", category: "database", icon: "/icons/postgree.png" },
  { name: "Prisma ORM", category: "database", icon: "/icons/prisma.png" },
  { name: "MySQL", category: "database", icon: "/icons/mysql.png" },
];

const categoryMeta = {
  frontend: {
    label: "Frontend Development",
    icon: Code2,
  },
  backend: {
    label: "Fullstack & Backend Support",
    icon: Layers,
  },
  database: {
    label: "Database & ORM",
    icon: Database,
  },
};

export const SkillSection = () => {
  return (
    <section
      id="skills"
      className="relative z-10 py-24 px-4 bg-secondary/30 backdrop-blur-sm"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-foreground">
          Technical <span className="text-primary">Skills</span>
        </h2>

        <div className="space-y-20">
          {Object.keys(categoryMeta).map((category) => {
            const Icon = categoryMeta[category].icon;

            return (
              <div key={category}>
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Icon className="w-7 h-7 text-primary" />
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                    {categoryMeta[category].label}
                  </h3>
                </div>

                <div className="w-24 h-[2px] bg-primary mx-auto mb-12 rounded-full" />

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill) => (
                      <div
                        key={skill.name}
                        className="
                          flex flex-col items-center gap-3 p-6
                          rounded-xl bg-card/70 backdrop-blur
                          border border-border/40
                          hover:-translate-y-1 hover:shadow-xl
                          transition-all duration-300
                        "
                      >
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-8 h-8"
                        />
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
