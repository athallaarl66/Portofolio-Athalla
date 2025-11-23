import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Some Projects That I Have Created",
    description:
      "Showcasing my expertise in building modern, responsive, and user-friendly websites with clean Front-End code and intuitive UI/UX designs.",
    images: ["/projects1/homediajar.png", "/projects2/homerk.jpg"],
  },
];

// Hook decrypt
const useDecryptText = (text, speed = 30, start = false) => {
  const [decrypted, setDecrypted] = useState("");
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

  useEffect(() => {
    if (!start) {
      setDecrypted("");
      return;
    }

    let frame = 0;
    const maxFrames = Math.max(8, text.length * 2);
    const interval = setInterval(() => {
      frame++;
      const progress = Math.min(frame / maxFrames, 1);
      const result = text
        .split("")
        .map((ch, i) => {
          if (i < Math.floor(text.length * progress)) return ch;
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");
      setDecrypted(result);

      if (frame >= maxFrames) {
        setDecrypted(text);
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, start]);

  return decrypted;
};

export const ProjectSection = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  const project = projects[0];

  const sectionRef = useRef(null);
  const [sectionInView, setSectionInView] = useState(false);
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSectionInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const cardRef = useRef(null);
  const [cardInView, setCardInView] = useState(false);
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCardInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const decryptedTitle = useDecryptText(project.title, 40, cardInView);
  const decryptedDesc = useDecryptText(project.description, 18, cardInView);
  const decryptedFeatured = useDecryptText("Featured", 40, sectionInView);
  const decryptedProjects = useDecryptText("Projects", 40, sectionInView);

  useEffect(() => {
    if (!project.images || project.images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [project.images.length]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="projects" className="py-24 px-4 relative" ref={sectionRef}>
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-zinc-200 text-3xl md:text-4xl font-bold mb-4 text-center">
          <span aria-hidden>{decryptedFeatured}</span>{" "}
          <span className="text-primary" aria-hidden>
            {decryptedProjects}
          </span>
          <span className="sr-only">Featured Projects</span>
        </h2>
        <p className="text-center text-white mb-4 max-w-2xl mx-auto animate-pulse">
          Some of the highlighted projects I’ve worked on recently.
        </p>

        <div className="flex flex-col items-center text-center mb-12">
          <p className="text-lg md:text-base text-white animate-bounce animate-pulse">
            Hover over a project image to explore my work
          </p>
          <span className="block w-8 h-8 border-b-2 border-r-2 border-white  transform rotate-45 mt-2 animate-pulse"></span>
        </div>

        <div className="relative flex items-center justify-center">
          {/* Tombol Panah Kiri */}
          {project.images.length > 1 && (
            <button
              onClick={prevSlide}
              aria-label="Previous"
              className="absolute -left-12 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-black/50 text-white 
                hover:bg-primary hover:scale-110 transition transform cursor-pointer"
            >
              ‹
            </button>
          )}

          {/* Card */}
          <div
            ref={cardRef}
            className={`group relative bg-card rounded-xl overflow-hidden shadow-md transition-all duration-700 max-w-4xl w-full
              ${
                cardInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
          >
            {/* Carousel */}
            <div className="relative h-96 md:h-[36rem] lg:h-[42rem] overflow-hidden">
              {project.images.map((src, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out transform
                    ${
                      index === current
                        ? "opacity-100 translate-x-0 scale-100"
                        : "opacity-0 translate-x-10 scale-95"
                    }`}
                >
                  <img
                    src={src}
                    alt={`${project.title} ${index + 1}`}
                    className="w-full h-full object-cover rounded-xl"
                    draggable={false}
                  />
                </div>
              ))}

              {/* Overlay Glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"></div>

              {/* Indicators */}
              {project.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {project.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrent(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={`w-3 h-3 rounded-full transition transform cursor-pointer ${
                        current === idx
                          ? "bg-primary scale-125 shadow-md"
                          : "bg-white/50 hover:bg-white/80"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6 relative z-10">
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-primary transition-colors">
                <span className="sr-only">{project.title}</span>
                <span aria-hidden>{decryptedTitle}</span>
              </h3>
              <p className="text-sm md:text-base text-muted-foreground mb-4">
                {decryptedDesc}
              </p>

              {/* Tags */}
            </div>

            {/* Hover CTA */}
            <div
              onClick={() => navigate("/projects")}
              className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 cursor-pointer"
            >
              <button className="px-6 py-3 bg-primary text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:bg-primary/90 transition-all duration-300 cursor-pointer">
                View Project
              </button>
            </div>
          </div>

          {/* Tombol Panah Kanan */}
          {project.images.length > 1 && (
            <button
              onClick={nextSlide}
              aria-label="Next"
              className="absolute -right-12 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-black/50 text-white 
                hover:bg-primary hover:scale-110 transition transform cursor-pointer"
            >
              ›
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
