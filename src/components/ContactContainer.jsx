import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Mail, Instagram, Send } from "lucide-react";

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
    <section
      id="contact"
      className="relative py-20 md:py-28 px-4"
      aria-label="Contact and Social Media Links"
    >
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative p-8 md:p-12 lg:p-16 rounded-2xl md:rounded-3xl bg-background/80 backdrop-blur-xl border border-border/40 shadow-2xl overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute top-0 left-1/2 w-[250px] h-[250px] bg-primary/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center space-y-6 md:space-y-8">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
              Let's Work Together
            </h2>

            {/* Description */}
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              I'm actively looking for frontend or full-stack roles. If you
              think there's a fit, I'd love to hear from you.
            </p>

            {/* Email CTA Button */}
            <motion.a
              href="mailto:athallarli@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-7 md:px-8 py-3 md:py-3.5 bg-primary text-primary-foreground font-bold text-sm md:text-base rounded-full shadow-lg shadow-primary/25 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
              aria-label="Send me an email directly"
            >
              <Send size={20} className="md:w-5 md:h-5" />
              <span>Send an Email</span>
            </motion.a>

            {/* Divider */}
            <div className="pt-4 md:pt-6 w-full max-w-md">
              <p className="text-xs md:text-sm font-medium text-muted-foreground/80 mb-6">
                — Or find me on —
              </p>

              {/* Social Links */}
              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                {contacts.map(({ name, url, icon: Icon }) => (
                  <motion.a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="p-3 md:p-4 rounded-full bg-muted/50 hover:bg-primary/20 border border-border/50 hover:border-primary/50 transition-all duration-300 shadow-md hover:shadow-lg"
                    aria-label={`Connect on ${name}`}
                  >
                    <Icon
                      size={22}
                      className="md:w-6 md:h-6 text-muted-foreground hover:text-primary transition-colors duration-300"
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactContainer;
