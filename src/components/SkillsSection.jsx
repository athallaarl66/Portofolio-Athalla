import { Terminal, Database, Layout } from "lucide-react";

const skills = [
  { name: "HTML",              category: "Frontend", icon: "/icons/html.png" },
  { name: "CSS",               category: "Frontend", icon: "/icons/css.png" },
  { name: "JavaScript",        category: "Frontend", icon: "/icons/javascript.png" },
  { name: "TypeScript",        category: "Frontend", icon: "/icons/typescript.png" },
  { name: "React",             category: "Frontend", icon: "/icons/react.png" },
  { name: "Next.js",           category: "Frontend", icon: "/icons/next.png" },
  { name: "Tailwind CSS",      category: "Frontend", icon: "/icons/tailwind.png" },
  { name: "Node.js",           category: "Backend",  icon: "/icons/node.png" },
  { name: "Laravel",           category: "Backend",  icon: "/icons/laravel.png" },
  { name: "Spring Boot",       category: "Backend",  icon: "/icons/springboot.png" },
  { name: "Java",              category: "Backend",  icon: "/icons/java.png" },
  { name: "Next.js API",       category: "Backend",  icon: "/icons/next.png" },
  { name: "PostgreSQL",        category: "Database & Ops", icon: "/icons/postgree.png" },
  { name: "Prisma ORM",        category: "Database & Ops", icon: "/icons/prisma.png" },
  { name: "MySQL",             category: "Database & Ops", icon: "/icons/mysql.png" },
];

const categories = [
  { title: "Frontend",       icon: Layout,   span: "lg:col-span-2" },
  { title: "Backend",        icon: Terminal, span: "lg:col-span-1" },
  { title: "Database & Ops", icon: Database, span: "lg:col-span-3" },
];

export const SkillSection = () => {
  return (
    <section id="skills" className="relative">
      <div className="max-w-[1400px] w-full mx-auto px-4 md:px-8 lg:px-12">
        <div className="border-x border-b border-white/10 p-6 md:p-12 lg:p-16 bg-white/[0.01]">
          
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest">Tech Stack</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white mb-4">
              Tools I work <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 font-bold">with.</span>
            </h2>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <div key={idx} className={`${cat.span} rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8 hover:border-emerald-400/30 transition-all duration-300 group`}>
                  
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {cat.title}
                    </h3>
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-emerald-400/10 transition-colors shrink-0">
                      <Icon className="w-4 h-4 md:w-5 md:h-5 text-white/50 group-hover:text-emerald-400 transition-colors" />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {skills
                      .filter((s) => s.category === cat.title)
                      .map((skill, i) => (
                      <div 
                        key={i} 
                        className="flex items-center gap-2 px-3 md:px-4 py-2 border border-white/10 bg-white/5 rounded-full hover:border-emerald-400/50 hover:bg-emerald-400/10 transition-all cursor-default"
                      >
                        <img 
                          src={skill.icon} 
                          alt={skill.name} 
                          className="w-4 h-4 object-contain filter drop-shadow-md"
                        />
                        <span className="text-xs md:text-sm text-white/80 font-medium">{skill.name}</span>
                      </div>
                    ))}
                  </div>

                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
