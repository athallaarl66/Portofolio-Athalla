import { Linkedin, Instagram, Github, Mail } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "Home",     href: "#hero" },
  { name: "About",    href: "#about" },
  { name: "Skills",   href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact",  href: "#contact" },
];

const socialLinks = [
  { name: "LinkedIn",  href: "https://www.linkedin.com/in/athalla-arli-baa7b72b7/", icon: Linkedin },
  { name: "GitHub",    href: "https://github.com/athallaarl66", icon: Github },
  { name: "Instagram", href: "https://www.instagram.com/athallaarl/", icon: Instagram },
  { name: "Email",     href: "mailto:athallaarli@gmail.com", icon: Mail },
];

const Footer = () => {
  return (
    <footer
      className="border-t px-6 md:px-16 py-8"
      style={{ borderColor: "var(--border)", background: "var(--surface-1)" }}
    >
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
        {/* Left — name */}
        <div className="flex items-center gap-2.5">
          <span className="text-sm font-black tracking-tight text-white">
            Athalla Arli
          </span>
          <span className="w-px h-4 bg-white/10" />
          <span className="text-xs font-mono" style={{ color: "var(--muted-fg)" }}>
            © {new Date().getFullYear()}
          </span>
        </div>

        {/* Center — nav */}
        <nav className="flex flex-wrap justify-center gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-mono transition-colors duration-200 hover:text-[var(--primary-light)]"
              style={{ color: "var(--muted-fg)" }}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right — socials */}
        <div className="flex items-center gap-3">
          {socialLinks.map(({ name, href, icon: Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="transition-colors duration-200 hover:text-[var(--primary-light)]"
              style={{ color: "var(--muted-fg)" }}
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
