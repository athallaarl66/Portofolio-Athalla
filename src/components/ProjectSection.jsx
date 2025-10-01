const projects = [
  {
    id: 1,
    title: "RK Landing Page",
    description: "Law Firm Landing Page",
    image: "/projects/project1.jpg",
    tags: ["HTML/CSS", "Laravel"],
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Diajar Aksara Landing Page",
    description:
      "Ancient Sundanese Language Web app For learning in Highschool Landing Page",
    image: "/projects/projects2.png",
    tags: ["HTML/CSS", "TypeScript", "JavaScript", "Next.js", "Vercel"],
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Diajar Aksara Landing Page",
    description:
      "Ancient Sundanese Language Web app For learning in Highschool Landing Page",
    image: "/projects/projects2.png",
    tags: ["Vite", "React", "JavaScript", "Tailwind Css", "Vercel"],
    githubUrl: "#",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Judul */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center opacity-0 animate-fade-up">
          Featured <span className="text-primary"> Projects </span>
        </h2>
        <p
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto opacity-0 animate-fade-up"
          style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
        >
          Some of the highlighted projects I’ve worked on recently.
        </p>

        {/* Grid Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-card rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 opacity-0 animate-fade-up"
              style={{
                animationDelay: `${0.3 + index * 0.2}s`,
                animationFillMode: "forwards",
              }}
            >
              {/* Image */}
              <div className="h-48 md:h-56 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="transform transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
              </div>

              {/* Content */}
              <div className="p-6 relative z-10">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Button (CTA) */}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500"
              >
                <button className="px-4 py-2 bg-primary text-white rounded-lg shadow-lg hover:scale-105 transition">
                  View Project
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Animasi CSS */}
      <style jsx>{`
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-up {
          animation-name: fadeUp;
          animation-duration: 0.8s;
          animation-timing-function: ease-out;
          animation-fill-mode: forwards;
        }
      `}</style>
    </section>
  );
};
