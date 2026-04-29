import { Terminal, Database, Layout } from "lucide-react";

const skills = [
  { name: "HTML", category: "Frontend", icon: "/icons/html.png" },
  { name: "CSS", category: "Frontend", icon: "/icons/css.png" },
  { name: "JavaScript", category: "Frontend", icon: "/icons/javascript.png" },
  { name: "TypeScript", category: "Frontend", icon: "/icons/typescript.png" },
  { name: "React", category: "Frontend", icon: "/icons/react.png" },
  { name: "Next.js", category: "Frontend", icon: "/icons/next.png" },
  { name: "Tailwind CSS", category: "Frontend", icon: "/icons/tailwind.png" },
  { name: "Node.js", category: "Backend", icon: "/icons/node.png" },
  { name: ".NET 8", category: "Backend", icon: "/icons/.net.png" },
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

// Each category uses a tint from the palette
const categories = [
  {
    title: "Frontend",
    icon: Layout,
    bg: "rgba(40,28,89,0.25)",
    border: "rgba(78,141,156,0.22)",
    hoverBorder: "rgba(78,141,156,0.45)",
  },
  {
    title: "Backend",
    icon: Terminal,
    bg: "rgba(78,141,156,0.1)",
    border: "rgba(78,141,156,0.2)",
    hoverBorder: "rgba(133,199,154,0.4)",
  },
  {
    title: "Database & Ops",
    icon: Database,
    bg: "rgba(133,199,154,0.07)",
    border: "rgba(133,199,154,0.18)",
    hoverBorder: "rgba(237,247,189,0.35)",
  },
];

export const SkillSection = () => {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(40,28,89,0.3) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1280px] w-full mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="section-label mb-5 w-fit">
              <span className="section-label-dot" />
              Tech stack
            </div>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-black tracking-tighter leading-tight text-white">
              Tools I build <span className="text-gradient-accent">with.</span>
            </h2>
          </div>
          <p
            className="text-sm font-light max-w-xs md:text-right"
            style={{ color: "var(--muted-fg)" }}
          >
            Full-spectrum stack from database to deployment.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const catSkills = skills.filter((s) => s.category === cat.title);
            return (
              <div
                key={cat.title}
                className="rounded-2xl p-6 border card-hover"
                style={{ background: cat.bg, borderColor: cat.border }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {cat.title}
                    </h3>
                    <p
                      className="text-[11px] font-mono mt-0.5"
                      style={{ color: "var(--muted-fg)" }}
                    >
                      {catSkills.length} skills
                    </p>
                  </div>
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    <Icon
                      className="w-4 h-4"
                      style={{ color: "var(--muted-fg)" }}
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {catSkills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full cursor-default transition-all duration-200"
                      style={{
                        background: "rgba(8,8,15,0.5)",
                        border: `1px solid rgba(255,255,255,0.07)`,
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.borderColor = cat.hoverBorder)
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.borderColor =
                          "rgba(255,255,255,0.07)")
                      }
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
              </div>
            );
          })}
        </div>

        {/* Also familiar with */}
        <div
          className="mt-5 px-6 py-4 rounded-2xl border flex flex-wrap items-center gap-x-6 gap-y-2"
          style={{
            background: "var(--surface-1)",
            borderColor: "var(--border)",
          }}
        >
          <span
            className="text-[11px] font-mono uppercase tracking-widest flex-shrink-0"
            style={{ color: "var(--muted-fg)" }}
          >
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
            <span key={t} className="tag-pill">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
