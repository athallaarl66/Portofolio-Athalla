import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "DiajarAksara",
    category: "Sundanese Script Learning App",
    description: "Thesis project built around user research at SMAN 24 Bandung. Designed iteratively through UCD and shipped a full app.",
    image: "/projects1/HOMEPAGE.png",
    tags: ["Next.js", "CSS Modules", "UI/UX", "UCD"],
    year: "2025",
    link: "/projects",
  },
  {
    title: "Money Tracker",
    category: "Financial Management System",
    description: "Fullstack application to manage accounts and budgets. Features JWT auth, recurring logic, analytics, deployed via Docker.",
    image: "/Projects5/Dashboard.png",
    tags: ["Spring Boot", "React", "PostgreSQL", "Docker"],
    year: "2026",
    link: "/projects",
  },
  {
    title: "Crazwash",
    category: "Service Management POS",
    description: "Full-stack web app for a laundry business to handle operations. Includes public ordering flows and admin dashboard.",
    image: "/projects3/Dashboard.png",
    tags: ["Next.js", "Prisma", "PostgreSQL", "TypeScript"],
    year: "2026",
    link: "/projects",
  },
  {
    title: "RK Law Firm",
    category: "Corporate Website",
    description: "Built a professional company profile site from scratch during an internship. Added online legal service features.",
    image: "/projects2/homerk.jpg",
    tags: ["Laravel", "HTML/CSS", "Figma"],
    year: "2024",
    link: "/projects",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="relative">
      <div className="max-w-[1400px] w-full mx-auto px-4 md:px-8 lg:px-12">
        <div className="border-x border-b border-white/10">
          
          {/* Header Row */}
          <div className="p-8 md:p-12 border-b border-white/10 flex justify-between items-end bg-white/[0.01]">
            <div className="flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest">Portfolio</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white">
                Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 font-bold">Works.</span>
              </h2>
            </div>
            <a href="/projects" className="text-xs font-mono text-white/40 uppercase tracking-widest hover:text-emerald-400 transition-colors hidden md:block">
              View All Projects
            </a>
          </div>

          {/* Grid of Image Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {projects.map((project, idx) => (
              <a 
                key={idx}
                href={project.link}
                className="group flex flex-col border-b md:border-b-0 border-white/10 hover:bg-white/[0.02] transition-colors md:[&:nth-child(even)]:border-l [&:nth-child(1)]:border-b [&:nth-child(2)]:border-b"
              >
                {/* Image Panel */}
                <div className="aspect-[4/3] w-full overflow-hidden relative border-b border-white/10 p-4 md:p-8">
                  <div className="w-full h-full rounded-xl overflow-hidden border border-white/10 bg-black/50 relative">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay pointer-events-none" />
                  </div>
                  {/* Floating Year */}
                  <div className="absolute top-8 right-8 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
                    <span className="text-xs font-mono text-white">{project.year}</span>
                  </div>
                </div>

                {/* Text Panel */}
                <div className="p-8 flex flex-col flex-grow justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm font-mono text-emerald-400/80 uppercase tracking-widest mb-4">
                      {project.category}
                    </p>
                    <p className="text-white/50 text-sm leading-relaxed font-light line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="text-[10px] font-mono text-white/40 uppercase border border-white/10 bg-white/5 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-emerald-400 group-hover:bg-emerald-400/10 transition-all text-white/30 group-hover:text-emerald-400 shrink-0">
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
