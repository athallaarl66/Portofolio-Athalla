import React from "react";
import { Linkedin, Instagram, Github } from "lucide-react";

const navLinks = [
  { name: "Projects", href: "#projects" },
  { name: "Contacts", href: "#contact" },
];

const socialLinks = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/athalla-arli-baa7b72b7/",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/athallaarl/",
    icon: Instagram,
  },
  { name: "GitHub", href: "https://github.com/athallaarl66", icon: Github },
];

const Footer = () => {
  return (
    <footer className="bg-card bg-opacity-80 backdrop-blur-md border-t border-border text-muted-foreground mt-36 pt-10 pb-8 transition-opacity duration-300 hover:opacity-100">
      <div className="container flex flex-col items-center gap-6">
        {/* 🧭 Navigation */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="transition-colors hover:text-primary"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* 🌐 Social Icons */}
        <div className="flex gap-5">
          {socialLinks.map(({ name, href, icon: Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
              aria-label={name}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        {/* 📝 Bottom Text */}
        <div className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-foreground font-medium">Athalla Arli</span>. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
