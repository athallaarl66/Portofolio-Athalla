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
      // Kontainer tetap di max-w-4xl agar ringkas
      className="relative container max-w-4xl mx-auto my-32 p-8 sm:p-12 rounded-3xl bg-card text-card-foreground shadow-2xl flex flex-col items-center overflow-hidden border border-emerald-500/30"
      aria-label="Contact and Social Media Links"
    >
      {/* Background Glow Effect - Pertahankan glow halus */}
      <div className="absolute top-0 left-1/2 w-[300px] h-[300px] bg-emerald-500/15 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 z-0"></div>

      <motion.div
        className="flex flex-col items-center text-center space-y-7 z-10 w-full"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-emerald-100 text-glow select-none leading-tight">
          Let's Connect! 🤝
        </h2>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-xl">
          Have a project in mind, a job opportunity, or just want to say hi?
          Feel free to reach out through any my social links below, I’m always
          open to new ideas and collaborations.
        </p>

        {/* email button */}
        <motion.a
          href="mailto:athallarli@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-8 py-3 bg-primary text-white font-extrabold text-lg rounded-full shadow-xl shadow-primary/40 hover:bg-emerald-600 transition-all duration-300 transform hover:scale-[1.02]"
          whileHover={{
            scale: 1.02,
            boxShadow: "0 0 15px rgba(52, 211, 153, 0.5)",
          }}
          whileTap={{ scale: 0.99 }}
          aria-label="Send me an Email directly"
        >
          <Send size={24} />
          <span>Send an Email</span>
        </motion.a>

        {/* Social Links */}
        <div className="pt-8 w-full max-w-md">
          <p className="text-md font-semibold mb-4 text-muted-foreground/90">
            — Or connect via social media —
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {contacts.map(({ name, url, icon: Icon }) => (
              <motion.a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="p-3 rounded-full bg-secondary/80 hover:bg-emerald-500 transition-colors duration-300 cursor-pointer shadow-lg border border-input/50"
                aria-label={`Open ${name}`}
              >
                <Icon size={24} className="text-emerald-300 hover:text-white" />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ContactContainer;
