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
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const el = document.querySelector(location.hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 50);
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
          document.querySelector(`#${hash}`)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        document.querySelector(`#${hash}`)?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(item.to);
      if (item.to === "/") window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Floating pill navbar */}
      <nav className="fixed top-5 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
        <div
          className={cn(
            "pointer-events-auto flex items-center gap-1 px-2 py-2 rounded-full border transition-all duration-500",
            isScrolled
              ? "bg-background/85 backdrop-blur-xl border-foreground/12 shadow-2xl shadow-black/40"
              : "bg-background/50 backdrop-blur-md border-foreground/8 shadow-lg shadow-black/20"
          )}
        >
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-sm font-black tracking-tight px-3 py-1.5 rounded-full hover:bg-foreground/6 transition-colors cursor-pointer"
          >
            <span className="text-primary">A</span>
            <span className="text-foreground/80">thalla</span>
          </a>

          {/* Separator */}
          <div className="hidden md:block w-px h-4 bg-foreground/12 mx-1" />

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.to}
                onClick={(e) => handleNavClick(e, item)}
                className="text-xs font-medium text-foreground/45 hover:text-foreground px-3 py-1.5 rounded-full hover:bg-foreground/6 transition-all duration-200 cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground/60 hover:text-foreground p-2 rounded-full hover:bg-foreground/8 transition-all"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      <div
        className={cn(
          "fixed inset-0 bg-background/97 backdrop-blur-2xl flex flex-col items-center justify-center gap-6 transition-all duration-300 z-40 md:hidden",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 text-foreground/40 hover:text-foreground transition-colors"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col items-center gap-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.to}
              onClick={(e) => handleNavClick(e, item)}
              className="text-3xl font-black text-foreground/50 hover:text-foreground transition-colors duration-200 cursor-pointer tracking-tight py-1"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
