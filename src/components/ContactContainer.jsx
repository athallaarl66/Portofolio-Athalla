import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Mail, Instagram, Send } from "lucide-react";

// Data kontak Anda tetap sama
const contacts = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/athalla-arli-baa7b72b7/",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    url: "https://github.com/athallaarl66",
    icon: Github,
  },
  {
    name: "Email",
    url: "mailto:athallarli@gmail.com",
    icon: Mail,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/athallaarl/",
    icon: Instagram,
  },
];

const ContactContainer = () => {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="relative container max-w-5xl mx-auto my-24 p-8 sm:p-12 rounded-2xl bg-card text-card-foreground shadow-2xl flex flex-col items-center overflow-hidden border border-primary/20"
      aria-label="Contact and Social Media Links"
    >
      {/* Background Glow Effect (Optional - makes it look cooler) */}
      <div className="absolute top-0 left-1/2 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 z-0"></div>

      <motion.div
        className="flex flex-col items-center text-center space-y-6 z-10 w-full"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-emerald-100 text-glow select-none leading-tight">
          Let's Connect!
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
          Whether you have a project idea, a job opportunity, or just want to
          say hello, you can find me through any of the channels below. I'm
          always ready to collaborate.
        </p>

        {/* Primary Call-to-Action Button (e.g., Email) */}
        <motion.a
          href="mailto:athallarli@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-8 py-4 bg-primary text-white font-bold text-lg rounded-full shadow-lg shadow-primary/30 hover:bg-primary/90 transition-all duration-300 transform hover:scale-[1.03]"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 20px rgba(52, 211, 153, 0.5)",
          }}
          whileTap={{ scale: 0.98 }}
          aria-label="Send me an Email directly"
        >
          <Send size={24} />
          <span>Send an Email</span>
        </motion.a>

        {/* Social Links */}
        <div className="pt-6 w-full max-w-md">
          <p className="text-sm font-semibold mb-3 text-muted-foreground/70">
            Or connect via social media:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {contacts.map(({ name, url, icon: Icon }) => (
              <motion.a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="p-3 rounded-full bg-input hover:bg-primary/20 transition-colors duration-300 cursor-pointer shadow-md border border-input/50"
                aria-label={`Open ${name}`}
              >
                <Icon
                  size={24}
                  className="text-emerald-300 hover:text-primary"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ContactContainer;
