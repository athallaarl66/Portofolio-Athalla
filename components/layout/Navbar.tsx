"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navItems, type NavItem } from "./navItems";
import { cn } from "@/lib/utils";

const scrollBehavior = (): ScrollBehavior => window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";

export const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (pathname === "/" && window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: scrollBehavior() }), 50);
    }
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) return;
    closeButtonRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleNavClick = (e: React.MouseEvent, item: NavItem) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (item.label === "Projects") {
      if (pathname === "/projects") {
        window.scrollTo({ top: 0, behavior: scrollBehavior() });
      } else {
        router.push("/#projects");
      }
      return;
    }

    if (item.to.includes("#")) {
      const hash = item.to.split("#")[1];
      if (pathname !== "/") {
        router.push("/");
        setTimeout(() => {
          document.querySelector(`#${hash}`)?.scrollIntoView({ behavior: scrollBehavior() });
        }, 100);
      } else {
        document.querySelector(`#${hash}`)?.scrollIntoView({ behavior: scrollBehavior() });
      }
    } else {
      router.push(item.to);
      if (item.to === "/") window.scrollTo({ top: 0, behavior: scrollBehavior() });
    }
  };

  const goHome = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(false);
    router.push("/");
    window.scrollTo({ top: 0, behavior: scrollBehavior() });
  };

  return (
    <>
      {/* Top bar — hidden while mobile menu is open */}
      {!isMenuOpen && (
        <nav className="fixed top-0 inset-x-0 z-50 flex justify-center px-5 md:px-8 bg-[rgba(var(--deep-rgb),0.94)] backdrop-blur border-b border-[var(--border)]">
          <div className="w-full max-w-6xl flex items-center justify-between gap-4 py-2">
            {/* Logo */}
            <Link
              href="/"
              onClick={goHome}
              className="p-1.5 rounded-full transition-colors cursor-pointer hover:bg-white/5"
              aria-label="Home"
            >
              <img
                src="/icons/Logo.jpg"
                alt="Athalla Logo"
                className="h-6 w-6 rounded-full object-cover"
              />
            </Link>



            {/* Desktop nav links */}
            <div className="hidden md:flex items-center">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.to}
                  onClick={(e) => handleNavClick(e, item)}
                  className="text-xs font-medium px-3 py-2 rounded-full transition-colors duration-200 cursor-pointer nav-item-hover text-[var(--muted-fg)]"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Hire me CTA (desktop) */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, { label: "Contact", to: "/#contact" })}
              className="hidden md:flex items-center ml-1 px-4 py-1.5 rounded-full text-xs font-semibold transition-colors duration-200 hire-me-hover border border-[var(--border-hover)] text-[var(--film-amber)]"
            >
              Hire me
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden flex items-center justify-center w-11 h-11 -my-1.5 rounded-full text-white/70 hover:bg-white/5 transition-colors"
              aria-label="Open menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </nav>
      )}

      {/* Mobile fullscreen menu */}
      <div
        id="mobile-navigation"
        className={cn(
          "fixed inset-0 z-50 flex flex-col overflow-y-auto md:hidden transition-opacity duration-300",
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        style={{ background: "var(--background)" }}
        aria-hidden={!isMenuOpen}
        inert={!isMenuOpen}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5">
          <Link
            href="/"
            onClick={goHome}
            className="transition-opacity cursor-pointer hover:opacity-80"
            aria-label="Home"
          >
            <img
              src="/icons/Logo.jpg"
              alt="Athalla Logo"
              className="h-8 w-8 rounded-full object-cover"
            />
          </Link>
          <button
            ref={closeButtonRef}
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center justify-center w-11 h-11 rounded-full text-white/60 hover:bg-white/5 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Menu items — left aligned, indexed */}
        <nav className="flex-1 flex flex-col justify-center px-8 gap-1">
          {navItems.map((item, i) => (
            <a
              key={item.label}
              href={item.to}
              onClick={(e) => handleNavClick(e, item)}
              className="group flex items-baseline gap-4 py-4 border-b cursor-pointer border-[var(--border)] last:border-b-0"
            >
              <span className="text-xs font-mono text-muted">0{i + 1}</span>
              <span className="text-2xl font-semibold tracking-tight text-white/80 transition-colors group-hover:text-white">
                {item.label}
              </span>
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="px-8 pb-10">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, { label: "Contact", to: "/#contact" })}
            className="btn-primary flex items-center justify-center w-full rounded-full py-3.5 text-sm font-semibold"
          >
            Hire me
          </a>
        </div>
      </div>
    </>
  );
};
