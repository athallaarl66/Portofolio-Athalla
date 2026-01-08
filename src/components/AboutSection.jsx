import { BriefcaseBusiness, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <h2
          className="text-zinc-200 text-3xl md:text-4xl font-bold mb-12 text-center opacity-0 animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div
            className="space-y-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <h3 className="text-xl font-bold text-foreground">
              Design-Driven Full-Stack Web Developer
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              I’m a full-stack developer with a strong foundation in frontend
              development and UI/UX, focused on building clean, structured, and
              user-friendly web experiences.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I enjoy translating ideas and designs into real products, with
              close attention to layout, interaction, and performance. With an
              understanding of backend systems, I’m able to collaborate
              effectively and build features with a complete technical
              perspective.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center items-center">
              <a href="#contact" className="cosmic-button">
                Contact
              </a>

              <a
                href="/projects2/CV_Athalla Arli Abhinaya_English_1.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Image */}
          <div
            className="relative group opacity-0 animate-fade-in flex justify-center"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-lg transition-transform duration-700 ease-out group-hover:scale-[1.05] group-hover:rotate-1">
              <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-tr from-primary/50 to-transparent pointer-events-none" />

              <img
                src="/icons/Logo.jpg"
                alt="About me"
                className="w-full h-72 md:h-96 object-cover rounded-2xl relative z-10 transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
