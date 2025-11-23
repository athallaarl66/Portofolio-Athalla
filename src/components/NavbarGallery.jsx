import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"; // ✅ Tambah useLocation
import { cn } from "@/lib/utils";

// 🔑 Nav Items: Home pakai Link, lainnya pakai anchor
const navItems = [
  { name: "Home", type: "link", to: "/" },
  { name: "Projects", type: "anchor", href: "#projects" },
  { name: "Contacts", type: "anchor", href: "#contact" },
];

export const NavbarGallery = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      const currentScroll = window.scrollY;
      setScrollPosition(currentScroll);
      document.body.style.position = "fixed";
      document.body.style.top = `-${currentScroll}px`;
      document.body.style.width = "100%";
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, scrollPosition);
    }
  }, [isMenuOpen, scrollPosition]);

  useEffect(() => {
    const sections = navItems
      .filter((item) => item.type === "anchor")
      .map((item) => document.querySelector(item.href));

    const handleSpy = () => {
      const scrollPos = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          const sectionId = section.id || navItems[i].href.replace("#", "");
          setActiveSection(sectionId);
          return;
        }
      }
      if (activeSection !== "hero") {
        setActiveSection("hero");
      }
    };

    window.addEventListener("scroll", handleSpy);
    handleSpy();
    return () => window.removeEventListener("scroll", handleSpy);
  }, [activeSection]);

  useEffect(() => {
    if (location.pathname === "/" && location.hash === "#hero") {
      const targetElement = document.querySelector("#hero");
      if (targetElement) {
        setTimeout(() => {
          const offsetTop =
            targetElement.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: offsetTop, behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out",
        isScrolled
          ? "py-3 bg-background/70 backdrop-blur-md shadow-[0_2px_12px_rgba(0,0,0,0.25)] border-b border-border/40"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between max-w-6xl">
        {/* 🌟 Logo: selalu balik ke "/" */}
        <Link
          to="/"
          className="text-xl font-bold flex items-center gap-1 group relative"
        >
          <span className="text-primary group-hover:text-primary/90 transition-colors duration-300">
            Athalla
          </span>
          <span className="text-foreground group-hover:text-primary transition-colors duration-300">
            Portfolio
          </span>
          <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
        </Link>

        {/* 🖥️ Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) =>
            item.type === "link" ? (
              <Link
                key={item.name}
                to={item.to}
                className={cn(
                  "relative font-medium transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300",
                  location.pathname === item.to
                    ? "text-primary after:w-full"
                    : "text-foreground hover:text-primary hover:after:w-full"
                )}
              >
                {item.name}
              </Link>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "relative font-medium transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300",
                  activeSection === item.href.replace("#", "")
                    ? "text-primary after:w-full"
                    : "text-foreground hover:text-primary hover:after:w-full"
                )}
              >
                {item.name}
              </a>
            )
          )}
        </div>

        {/* 🍔 Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md text-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary z-[60] transition"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <svg
            className={cn(
              "w-7 h-7 transition-transform duration-300",
              isMenuOpen && "rotate-90"
            )}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* 📱 Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 flex flex-col items-center justify-center bg-background/95 backdrop-blur-xl transition-all duration-500 ease-in-out md:hidden",
          isMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-5 pointer-events-none"
        )}
      >
        {navItems.map((item, index) =>
          item.type === "link" ? (
            <Link
              key={item.name}
              to={item.to}
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                "text-2xl font-medium transition-all duration-300 transform",
                location.pathname === item.to
                  ? "text-primary scale-105"
                  : "text-foreground hover:text-primary",
                isMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-3"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {item.name}
            </Link>
          ) : (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                "text-2xl font-medium transition-all duration-300 transform",
                activeSection === item.href.replace("#", "")
                  ? "text-primary scale-105"
                  : "text-foreground hover:text-primary",
                isMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-3"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {item.name}
            </a>
          )
        )}
      </div>
    </nav>
  );
};
