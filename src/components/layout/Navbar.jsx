// src/components/layout/Navbar.jsx
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { navItems } from "./navItems";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Background blur on scroll
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll to section when hash changes (only on home page)
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 50);
      }
    }
  }, [location]);

  // Smart navigation handler
  const handleNavClick = (e, item) => {
    e.preventDefault();
    setIsMenuOpen(false);

    // Special handling for Projects
    if (item.label === "Projects") {
      if (location.pathname === "/projects") {
        // Already on Projects page → scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        // On other pages → go to home #projects section
        navigate("/#projects");
      }
      return;
    }

    // Handle other nav items (Home, About, Skills, Contacts)
    if (item.to.includes("#")) {
      const hash = item.to.split("#")[1];

      if (location.pathname !== "/") {
        // Not on home → navigate to home first, then scroll
        navigate("/");
        setTimeout(() => {
          const el = document.querySelector(`#${hash}`);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        // On home → just scroll
        const el = document.querySelector(`#${hash}`);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Regular navigation (no hash)
      navigate(item.to);
      if (item.to === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border/50 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-xl font-bold cursor-pointer"
        >
          <span className="text-primary">Athalla</span>{" "}
          <span className="text-foreground">Works</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.to}
              onClick={(e) => handleNavClick(e, item)}
              className="font-medium text-foreground/80 hover:text-primary transition-colors duration-300 cursor-pointer"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-foreground text-2xl"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-6 transition-all duration-300 md:hidden",
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.to}
            onClick={(e) => handleNavClick(e, item)}
            className="text-2xl font-medium text-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};
