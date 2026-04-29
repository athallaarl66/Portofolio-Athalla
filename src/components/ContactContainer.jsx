import { Mail, Linkedin, Github, Instagram, ArrowUpRight } from "lucide-react";

const socials = [
  { name: "LinkedIn",  icon: Linkedin,  url: "https://www.linkedin.com/in/athalla-arli-baa7b72b7/",  handle: "@athalla-arli" },
  { name: "GitHub",    icon: Github,    url: "https://github.com/athallaarl66",                        handle: "@athallaarl66" },
  { name: "Email",     icon: Mail,      url: "mailto:athallaarli@gmail.com",                           handle: "athallaarli@gmail.com" },
  { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/athallaarl/",                  handle: "@athallaarl" },
];

export default function ContactContainer() {
  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(40,28,89,0.35) 0%, transparent 65%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(78,141,156,0.08) 0%, transparent 65%)" }}
        aria-hidden="true"
      />

      <div className="max-w-[1280px] w-full mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <div className="section-label mb-10 w-fit">
          <span className="section-label-dot" />
          Contact
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 lg:gap-24 items-start">
          {/* Left — CTA */}
          <div>
            <h2 className="text-[clamp(2.4rem,5vw,4.5rem)] font-black tracking-tighter leading-[1.0] text-white mb-6">
              Let's build something
              <br />
              <span className="text-gradient-primary">remarkable.</span>
            </h2>

            <p className="text-base md:text-lg font-light leading-relaxed max-w-lg mb-10" style={{ color: "var(--muted-fg)" }}>
              I'm actively looking for new opportunities — fullstack roles,
              freelance projects, or just a good conversation about software
              and design. My inbox is always open.
            </p>

            <a href="mailto:athallaarli@gmail.com" className="btn-primary text-base">
              Start a conversation
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <div className="flex items-center gap-2 mt-6">
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--sage)" }} />
              <span className="text-xs font-mono" style={{ color: "var(--muted-fg)" }}>
                Typically responds within 24 hours
              </span>
            </div>
          </div>

          {/* Right — social cards */}
          <div className="flex flex-col gap-3 w-full lg:w-64">
            {socials.map(({ name, icon: Icon, url, handle }) => (
              <a
                key={name}
                href={url}
                target={name !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-2xl border transition-all duration-200"
                style={{ background: "var(--surface-1)", borderColor: "var(--border)" }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "rgba(78,141,156,0.35)";
                  e.currentTarget.style.background = "rgba(78,141,156,0.07)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.background = "var(--surface-1)";
                }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(78,141,156,0.1)", border: "1px solid rgba(78,141,156,0.18)" }}
                >
                  <Icon className="w-4 h-4" style={{ color: "var(--teal)" }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-white">{name}</p>
                  <p className="text-[11px] font-mono truncate" style={{ color: "var(--muted-fg)" }}>{handle}</p>
                </div>
                <ArrowUpRight
                  className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0"
                  style={{ color: "var(--sage)" }}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
