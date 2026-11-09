"use client";

import { Mail, Linkedin, Github, Instagram, ArrowUpRight } from "lucide-react";

const socials = [
  { name: "LinkedIn",  icon: Linkedin,  url: "https://www.linkedin.com/in/athalla-arli-baa7b72b7/",  handle: "@athalla-arli" },
  { name: "GitHub",    icon: Github,    url: "https://github.com/athallaarl66",                        handle: "@athallaarl66" },
  { name: "Email",     icon: Mail,      url: "mailto:athallaarli@gmail.com",                           handle: "athallaarli@gmail.com" },
  { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/athallaarl/",                  handle: "@athallaarl" },
];

export default function ContactContainer() {
  return (
    <section id="contact" className="contact-surface relative py-24 md:py-32 overflow-hidden before:pointer-events-none before:absolute before:inset-0 before:bg-[linear-gradient(110deg,rgba(17,21,25,0.22),transparent_55%,rgba(244,180,94,0.11))]">
      <div className="max-w-[1280px] w-full mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <div className="section-label mb-10">
          Contact
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 lg:gap-24 items-start">
          {/* Left — CTA */}
          <div>
            <h2 className="text-[clamp(2.4rem,6vw,5.5rem)] font-black tracking-[-0.04em] leading-[0.98] text-white mb-7">
              Let's build
              <br />
              something useful.
            </h2>

            <p className="text-base md:text-lg font-light leading-relaxed max-w-lg mb-10 text-muted">
              I'm open to software engineering roles, freelance projects, or collaborations.
              Feel free to reach out if you'd like to discuss opportunities.
            </p>

            <a
              href="mailto:athallaarli@gmail.com"
              className="btn-primary inline-flex items-center text-sm font-semibold px-6 py-3 rounded-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Send me an email
              <ArrowUpRight className="w-4 h-4 ml-1.5" />
            </a>


          </div>

          {/* Contact channels */}
          <div className="flex flex-col w-full lg:w-80 border-t border-white/30">
            {socials.map(({ name, icon: Icon, url, handle }) => (
              <a
                key={name}
                href={url}
                target={name !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 py-5 border-b border-white/20 transition-colors duration-200 hover:bg-white/[0.04] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4" style={{ color: "var(--teal)" }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-white">{name}</p>
                  <p className="text-[11px] font-mono truncate text-muted">{handle}</p>
                </div>
                <ArrowUpRight
                  className="w-4 h-4 opacity-70 group-hover:opacity-100 motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:translate-x-1 motion-safe:group-hover:-translate-y-1 flex-shrink-0"
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
