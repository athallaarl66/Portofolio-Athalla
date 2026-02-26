import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navItems } from "./navItems";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 50);
      }
    }
  }, [location]);

  const handleNavClick = (e, item) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (item.label === "Projects") {
      if (location.pathname === "/projects") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate("/#projects");
      }
      return;
    }

    if (item.to.includes("#")) {
      const hash = item.to.split("#")[1];
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          document
            .querySelector(`#${hash}`)
            ?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        document
          .querySelector(`#${hash}`)
          ?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(item.to);
      if (item.to === "/") window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-foreground/8 py-3"
          : "bg-transparent py-5",
      )}
    >
      {/* FIX: max-w-7xl konsisten sama semua section */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex justify-between items-center">
        {/* Logo */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-lg font-black tracking-tight cursor-pointer"
        >
          <span className="text-primary">Athalla</span>
          <span className="text-foreground"> Works</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.to}
              onClick={(e) => handleNavClick(e, item)}
              className="text-sm font-medium text-foreground/50 hover:text-foreground transition-colors duration-200 cursor-pointer"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Button — lucide icon, bukan text */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-foreground/70 hover:text-foreground transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-background/97 backdrop-blur-xl flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      >
        {/* Close button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-5 right-6 text-foreground/50 hover:text-foreground transition-colors"
        >
          <X size={22} />
        </button>

        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.to}
            onClick={(e) => handleNavClick(e, item)}
            className="text-2xl font-black text-foreground/60 hover:text-primary transition-colors duration-200 cursor-pointer tracking-tight"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};
