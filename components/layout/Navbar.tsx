"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { navItems, type NavItem } from "./navItems";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname === "/" && window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 50);
    }
  }, [pathname]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleNavClick = (e: React.MouseEvent, item: NavItem) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (item.label === "Projects") {
      if (pathname === "/projects") {
        window.scrollTo({ top: 0, behavior: "smooth" });
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
          document.querySelector(`#${hash}`)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        document.querySelector(`#${hash}`)?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(item.to);
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
              ? "backdrop-blur-xl shadow-2xl shadow-black/50"
              : "backdrop-blur-md shadow-lg shadow-black/30"
          )}
          style={{
            background: isScrolled ? "rgba(8,8,15,0.92)" : "rgba(8,8,15,0.65)",
            borderColor: isScrolled ? "rgba(var(--teal-rgb), 0.18)" : "rgba(255,255,255,0.07)",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              router.push("/");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="px-2 py-1.5 rounded-full transition-colors cursor-pointer hover:bg-white/5"
          >
            <img
              src="/icons/Logo.jpg"
              alt="Athalla Logo"
              className="h-6 w-6 rounded-full object-cover"
            />
          </Link>

          {/* Separator */}
          <div className="hidden md:block w-px h-4 mx-1" style={{ background: "rgba(255,255,255,0.08)" }} />

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.to}
                onClick={(e) => handleNavClick(e, item)}
                className="text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer nav-item-hover"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Hire me CTA */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, { label: "Contact", to: "/#contact" })}
            className="hidden md:flex items-center ml-1 px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 hire-me-hover"
            style={{
              border: "1px solid rgba(var(--teal-rgb), 0.35)",
              color: "var(--sage)",
              background: "rgba(var(--teal-rgb), 0.07)",
            }}
          >
            Hire me
          </a>

          {/* Mobile burger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2.5 rounded-full hover:bg-white/6 transition-all"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span
              className="block w-4 h-px transition-all duration-300 origin-center"
              style={{
                background: "rgba(255,255,255,0.6)",
                transform: isMenuOpen ? "rotate(45deg) translateY(3px)" : "none",
              }}
            />
            <span
              className="block w-4 h-px transition-all duration-300 origin-center"
              style={{
                background: "rgba(255,255,255,0.6)",
                transform: isMenuOpen ? "rotate(-45deg) translateY(-3px)" : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      {isMounted && (
        <div
          className="fixed inset-0 flex flex-col transition-all duration-300 z-40 md:hidden"
          style={{
            background: "rgba(8,8,15,0.97)",
            backdropFilter: "blur(24px)",
            opacity: isMenuOpen ? 1 : 0,
            pointerEvents: isMenuOpen ? "auto" : "none",
          }}
        >
        {/* Mobile menu header */}
        <div className="flex items-center justify-between px-8 py-6">
          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setIsMenuOpen(false);
              router.push("/");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="transition-colors cursor-pointer hover:opacity-80"
          >
            <img
              src="/icons/Logo.jpg"
              alt="Athalla Logo"
              className="h-10 w-10 rounded-full object-cover"
            />
          </Link>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-4xl leading-none transition-colors hover:text-[rgba(255,255,255,0.8)]"
            style={{ color: "rgba(255,255,255,0.25)" }}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* Menu items */}
        <div className="flex-1 flex flex-col items-center justify-center gap-8 px-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.to}
              onClick={(e) => handleNavClick(e, item)}
              className="text-5xl font-black tracking-tight py-4 px-10 transition-colors duration-200 cursor-pointer hover:text-[rgba(255,255,255,0.9)]"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA button */}
        <div className="px-8 pb-12">
          <Button
            variant="default"
            className="w-full rounded-full py-5 text-xl font-semibold"
            style={{
              background: "linear-gradient(135deg, var(--deep) 0%, var(--teal) 100%)",
              color: "var(--pale)",
            }}
            onClick={(e) => {
              e.preventDefault();
              setIsMenuOpen(false);
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            asChild
          >
            <a href="#contact">
              Hire me
            </a>
          </Button>
        </div>
      </div>
      )}
    </>
  );
};
