import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/usernamekamu",
    icon: "/icons/linkedin.png",
  },
  {
    name: "GitHub",
    url: "https://github.com/usernamekamu",
    icon: "/icons/github.png",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/usernamekamu",
    icon: "/icons/instagram.png",
  },
];

const Footer = () => {
  const containerRef = useRef(null);

  return (
    <footer
      ref={containerRef}
      className="relative bg-card text-card-foreground overflow-hidden mt-12"
    >
      {/* Aurora gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-700/30 via-indigo-600/20 to-transparent pointer-events-none -z-10 animate-fade-in" />

      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        {/* Logo */}
        <motion.div
          className="text-2xl font-bold text-primary cursor-pointer select-none text-glow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          whileHover={{
            scale: 1.05,
            textShadow: "0 0 15px rgba(139,92,246,0.7)",
          }}
        >
          <span className="container mx-auto px-6 flex items-center justify-between max-w-6xl">
            Athalla
          </span>
          Portofolio
        </motion.div>

        {/* Navigation */}
        <nav className="flex flex-wrap gap-6 justify-center">
          {["Home", "About", "Projects", "Contact"].map((item, idx) => (
            <motion.a
              key={idx}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium hover:underline transition-colors"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              whileHover={{ scale: 1.15, color: "hsl(var(--primary))" }}
            >
              {item}
            </motion.a>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex gap-4">
          {socialLinks.map(({ name, url, icon }, idx) => (
            <motion.a
              key={idx}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              whileHover={{
                scale: 1.4,
                rotate: 15,
                textShadow: "0 0 12px rgba(139,92,246,0.8)",
                boxShadow: "0 0 15px rgba(139,92,246,0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              aria-label={name}
            >
              <img
                src={icon}
                alt={name}
                className="w-6 h-6"
                draggable={false}
              />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-border mt-4 pt-4 text-center text-sm text-muted-foreground select-none">
        &copy; {new Date().getFullYear()} <span> My </span>Portfolio.{" "}
        <span>All </span> rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
