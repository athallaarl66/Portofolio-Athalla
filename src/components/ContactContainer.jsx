import { Linkedin, Github, Mail, Instagram, ArrowUpRight } from "lucide-react";

const contacts = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/athalla-arli-baa7b72b7/",
    icon: Linkedin,
  },
  { name: "GitHub", url: "https://github.com/athallaarl66", icon: Github },
  { name: "Email", url: "mailto:athallaarli@gmail.com", icon: Mail },
  {
    name: "Instagram",
    url: "https://www.instagram.com/athallaarl/",
    icon: Instagram,
  },
];

const ContactContainer = () => {
  return (
    <section id="contact" className="relative py-20 md:py-32 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-10 md:mb-16">
          <span className="text-xs font-mono text-foreground/30 tracking-widest uppercase">
            05 — Contact
          </span>
          <div className="flex-1 h-px bg-foreground/8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
          {/* Left — heading */}
          <div className="md:col-span-5 space-y-5 md:space-y-6">
            <h2
              className="font-black leading-none tracking-tight text-foreground"
              style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}
            >
              Got a
              <br />
              <span
                style={{
                  WebkitTextStroke: "1px rgba(74,222,128,0.3)",
                  color: "transparent",
                }}
              >
                project
              </span>
              <br />
              in mind?
            </h2>
            <p className="text-foreground/50 text-sm md:text-base font-light leading-relaxed max-w-sm">
              I'm looking for frontend or full-stack roles. Open to freelance
              work too — if there's a fit, let's talk.
            </p>

            {/* Email CTA - responsive */}
            <a
              href="mailto:athallaarli@gmail.com"
              className="group inline-flex items-center gap-2 bg-foreground text-background px-5 py-2.5 md:px-6 md:py-3 rounded-full text-xs md:text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <span className="max-w-[180px] md:max-w-none truncate">
                athallaarli@gmail.com
              </span>
              <ArrowUpRight className="h-3.5 w-3.5 md:h-4 md:w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform flex-shrink-0" />
            </a>
          </div>

          {/* Right — social links - responsive grid */}
          <div className="md:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-3">
            {contacts.map(({ name, url, icon: Icon }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 md:p-5 rounded-xl border border-foreground/8 bg-foreground/3 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg border border-foreground/10 bg-foreground/5 group-hover:border-primary/30 group-hover:bg-primary/10 transition-all duration-300">
                  <Icon className="w-5 h-5 text-foreground/50 group-hover:text-primary transition-colors duration-300" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300 truncate">
                    {name}
                  </p>
                  <p className="text-xs text-foreground/30 font-mono mt-0.5 truncate">
                    @athallaarl
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-foreground/20 group-hover:text-primary ml-auto transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactContainer;
