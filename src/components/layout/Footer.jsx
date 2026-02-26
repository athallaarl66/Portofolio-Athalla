import { Linkedin, Instagram, Github, Mail } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/athalla-arli-baa7b72b7/",
    icon: Linkedin,
  },
  { name: "GitHub", href: "https://github.com/athallaarl66", icon: Github },
  {
    name: "Instagram",
    href: "https://www.instagram.com/athallaarl/",
    icon: Instagram,
  },
  { name: "Email", href: "mailto:athallaarli@gmail.com", icon: Mail },
];

const Footer = () => {
  return (
    <footer className="border-t border-foreground/8 px-6 md:px-16 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left — name + copyright */}
        <div className="flex items-center gap-3">
          <span className="text-sm font-black text-foreground tracking-tight">
            Athalla Arli
          </span>
          <span className="w-px h-4 bg-foreground/15" />
          <span className="text-xs text-foreground/30 font-mono">
            © {new Date().getFullYear()}
          </span>
        </div>

        {/* Center — nav */}
        <nav className="flex flex-wrap justify-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-mono text-foreground/35 hover:text-primary transition-colors duration-200 tracking-wide"
            >
              {link.name}
            </a>
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
              className="text-foreground/30 hover:text-primary transition-colors duration-200"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
