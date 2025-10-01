import { BriefcaseBusiness, Code, User } from "lucide-react";

export const AboutSection = () => {
  const cards = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Web Development",
      desc: "Building interactive and scalable websites...",
      delay: "0.7s",
    },
    {
      icon: <User className="h-6 w-6" />,
      title: "Frontend Developer",
      desc: "Creating responsive modern interfaces...",
      delay: "1s",
    },
    {
      icon: <BriefcaseBusiness className="h-6 w-6" />,
      title: "UI/UX Design",
      desc: "Designing user-friendly digital experiences...",
      delay: "1.3s",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 relative bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* 📝 Judul */}
        <h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center opacity-0 animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          About <span className="text-primary">Me</span>
        </h2>

        {/* 🧭 Grid utama: teks & gambar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* 📄 Teks */}
          <div
            className="space-y-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <h3 className="text-xl font-bold text-foreground">
              UI/UX Designer, Web Developer, Frontend Developer
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I specialize in creating beautiful, user-friendly, and scalable
              digital experiences. With a passion for design and code, I love to
              bring ideas to life on the web.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My focus is on combining modern design principles with solid
              frontend development to craft responsive and interactive websites.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <a href="#contact" className="cosmic-button">
                Contact
              </a>
              <a
                href="/cv.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* 🧍 Gambar */}
          <div
            className="relative group opacity-0 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg transform transition duration-500 group-hover:scale-[1.05] group-hover:rotate-1">
              <img
                src="/projects/profile.jpg"
                alt="About me"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
          </div>
        </div>

        {/* 🪄 Section Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {cards.map((card, i) => (
            <div
              key={i}
              className="gradient-border p-6 rounded-xl card-hover opacity-0 animate-fade-in hover:scale-[1.05] hover:shadow-2xl transition-transform duration-500"
              style={{ animationDelay: card.delay }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  {card.icon}
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg text-foreground">
                    {card.title}
                  </h4>
                  <p className="text-muted-foreground">{card.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
