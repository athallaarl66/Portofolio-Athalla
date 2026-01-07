import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "DiajarAksara — Learning Platform",
    description:
      "Frontend-focused learning platform with structured layout, responsive design, and clean UI patterns.",
    image: "/projects1/homediajar.png",
    tags: ["Next.js", "Quiz", "Responsive", "css"],
  },
  {
    title: "law-firm-website",
    description:
      "Professional company profile with integrated legal consultation booking system and case management.",
    image: "/projects2/homerk.jpg",
    tags: ["Company Profile", "HTML/CSS", "UI/UX", "Laravel"],
  },
  {
    title: "UMKM POS Web",
    description:
      "Website for small business that have Digital checkout system that operates through an internet browser that allows business owners to manage sales, inventory, and customer data in real-time using an internet connection.",
    image: "/projects3/Dashboard1.png",
    tags: ["React", "Portfolio", "Modern"],
  },
];

export const ProjectSection = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? projects.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === projects.length - 1 ? 0 : i + 1));

  const project = projects[index];

  return (
    <section
      id="projects"
      className="relative min-h-screen py-16 md:py-24 px-4 flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Surface Card */}
        <div className="rounded-2xl md:rounded-3xl bg-background/80 backdrop-blur-xl border border-border/40 shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="px-6 pt-8 md:px-12 md:pt-12 pb-6 text-center border-b border-border/30">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
              Selected <span className="text-primary">Projects</span>
            </h2>
            <p className="mt-3 text-muted-foreground text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              A curated selection of projects highlighting my frontend and UI/UX
              experience.
            </p>
          </div>

          {/* Content Grid - TRUE 50/50 */}
          <div className="grid md:grid-cols-2">
            {/* Image Side - PERFECT FIT */}
            <div className="relative aspect-[4/3] md:aspect-square lg:aspect-[5/4] overflow-hidden bg-muted/10">
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-contain bg-muted/5"
              />
            </div>

            {/* Text Side - BALANCED */}
            <div className="relative flex flex-col justify-center px-6 py-8 md:p-10 lg:p-12 bg-background/40 backdrop-blur-sm">
              {/* Meta & Tags Row */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="text-[10px] md:text-xs uppercase tracking-[0.15em] text-muted-foreground font-semibold">
                  Project {index + 1} / {projects.length}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 md:px-2.5 py-1 text-[10px] md:text-xs font-medium rounded-md bg-primary/10 text-primary border border-primary/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Title - PERFECT SIZE */}
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-3 md:mb-4 leading-tight tracking-tight">
                {project.title}
              </h3>

              {/* Description - READABLE */}
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6 md:mb-8">
                {project.description}
              </p>

              {/* Actions Row */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4">
                {/* CTA Button */}
                <button
                  onClick={() => navigate("/projects")}
                  className="group cursor-pointer px-5 md:px-6 py-2.5 md:py-3 rounded-lg md:rounded-xl bg-primary text-primary-foreground text-xs md:text-sm font-bold uppercase tracking-wide hover:bg-primary/90 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/25 hover:scale-[1.02] active:scale-[0.98]"
                >
                  View Project
                  <ExternalLink
                    size={14}
                    className="md:w-4 md:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                  />
                </button>

                {/* Navigation Arrows */}
                <div className="flex items-center gap-2 md:gap-3">
                  <button
                    onClick={prev}
                    aria-label="Previous project"
                    className="cursor-pointer w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-border text-foreground hover:bg-muted hover:border-primary/50 transition-all duration-300 flex items-center justify-center hover:scale-105 active:scale-95"
                  >
                    <ChevronLeft
                      size={16}
                      className="md:w-5 md:h-5"
                      strokeWidth={2.5}
                    />
                  </button>

                  <button
                    onClick={next}
                    aria-label="Next project"
                    className="cursor-pointer w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-border text-foreground hover:bg-muted hover:border-primary/50 transition-all duration-300 flex items-center justify-center hover:scale-105 active:scale-95"
                  >
                    <ChevronRight
                      size={16}
                      className="md:w-5 md:h-5"
                      strokeWidth={2.5}
                    />
                  </button>
                </div>
              </div>

              {/* Progress Indicator */}
              <div className="flex gap-1.5 md:gap-2 mt-6 md:mt-8">
                {projects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Go to project ${i + 1}`}
                    className={`h-1 md:h-1.5 rounded-full transition-all duration-300 ${
                      i === index
                        ? "w-8 md:w-10 bg-primary"
                        : "w-4 md:w-6 bg-border hover:bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* end surface */}
      </div>
    </section>
  );
};
