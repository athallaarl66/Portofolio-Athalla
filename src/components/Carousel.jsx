import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import DecryptedText from "@/components/DecryptedText"; // pastikan path sesuai

// Data untuk tiap project
const projects = [
  {
    title: "Web App For a studying Sundanese ancient language",
    description:
      "A website application designed as a learning platform for Sundanese script, providing interactive materials and supporting features to help users study and practice effectively",
    images: [
      "/projects1/HOMEPAGE.png",
      "/projects1/BACA.png",
      "/projects1/BacaAksara.png",
      "/projects1/Nulisaksaara.png",
    ],
  },
  {
    title: "Web App For Law Firm",
    description:
      "A website application designed as a company profile that also has legal services on the website as a supporting feature.",
    images: [
      "/projects2/fix.jpg",
      "/projects2/kontak.jpg",
      "/projects2/Kumpulan Profile Konsultasi hukum.jpg",
      "/projects2/Profile Konsultasi hukum (OK).jpg",
      "/projects2/Sub Bidang hukum 14.jpg",
    ],
  },
];

export default function Carousel() {
  return (
    <section id="projects" className="relative w-full pt-24 pb-12 space-y-20">
      {projects.map((project, idx) => (
        <ProjectCarousel key={idx} project={project} />
      ))}
    </section>
  );
}

// Komponen untuk 1 project
function ProjectCarousel({ project }) {
  const [current, setCurrent] = useState(0);

  // Auto-slide setiap 5 detik
  useEffect(() => {
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
    <div>
      {/* Judul + Deskripsi */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center mb-10 px-4"
      >
        <DecryptedText
          text={project.title}
          speed={40}
          maxIterations={12}
          sequential
          revealDirection="start"
          animateOn="view"
          className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-green-400 to-teal-500 bg-clip-text text-transparent"
          encryptedClassName="text-muted-foreground"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed"
        >
          {project.description}
        </motion.p>
      </motion.div>

      {/* Carousel */}
      <div className="relative mx-auto max-w-6xl h-[32rem] md:h-[40rem] overflow-hidden rounded-2xl bg-card shadow-lg">
        {project.images.map((src, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transform transition-all duration-700 ease-in-out 
              ${
                index === current
                  ? "opacity-100 scale-100 animate-fade-in"
                  : "opacity-0 scale-95"
              }
            `}
          >
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-contain rounded-2xl bg-black"
            />
          </div>
        ))}

        {/* Controls */}
        <button
          onClick={prevSlide}
          type="button"
          className="absolute top-1/2 left-4 -translate-y-1/2 z-30 flex items-center justify-center p-2 cursor-pointer group"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-background/60 backdrop-blur-md group-hover:bg-primary/60 transition">
            ‹
          </span>
        </button>
        <button
          onClick={nextSlide}
          type="button"
          className="absolute top-1/2 right-4 -translate-y-1/2 z-30 flex items-center justify-center p-2 cursor-pointer group"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-background/60 backdrop-blur-md group-hover:bg-primary/60 transition">
            ›
          </span>
        </button>

        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
          {project.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 
                ${
                  current === index
                    ? "bg-primary shadow-[0_0_8px_rgba(139,92,246,0.7)] scale-125"
                    : "bg-muted/70"
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
