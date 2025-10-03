import React, { useState, useEffect } from "react"; // Added useEffect
import { motion } from "framer-motion";
import { Linkedin, Github, Mail, Instagram } from "lucide-react";
import emailjs from "@emailjs/browser";

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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Added for better UX during send

  // ✅ Initialize EmailJS with public key (required for new SDK)
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    } else {
      console.warn(
        "EmailJS public key not found. Check environment variables."
      );
    }
  }, []); // Runs once on mount

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      // Slightly stricter regex
      newErrors.email = "Invalid email address";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = async (e) => {
    // Made async for better error handling
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess(false);
      return;
    }

    setIsLoading(true); // Show loading state
    setErrors({}); // Clear previous errors

    try {
      // ✅ Updated EmailJS send (no public key param; init handles it)
      // Removed all hardcoded fallbacks – must use env vars
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        }
      );

      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSuccess(false), 4000);
    } catch (error) {
      console.error("EmailJS error:", error);
      // More specific error handling
      if (error.status === 400 || error.status === 401) {
        alert("❌ Invalid EmailJS configuration. Check your dashboard.");
      } else {
        alert("❌ Failed to send message. Please try again later.");
      }
      setErrors({ submit: "Failed to send. Please try again." }); // Optional: Add submit error
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative container max-w-6xl mx-auto mt-24 p-8 rounded-xl bg-card text-card-foreground shadow-xl flex flex-col md:flex-row gap-10 overflow-hidden"
      aria-label="Contact form with CTA"
    >
      {/* Left: Info + CTA */}
      <motion.div
        className="flex-1 flex flex-col justify-center space-y-6 z-10"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-emerald-100 text-glow select-none leading-tight">
          Let's Collaborate!
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground">
          If you are interested in collaborating, discussing a project, or just
          saying hello, feel free to fill out the form on the right. I'm happy
          to help and listen to your creative ideas.
        </p>

        <div className="flex flex-wrap gap-3 mt-2">
          {contacts.map(({ name, url, icon: Icon }) => (
            <motion.a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-input hover:bg-primary/20 transition-colors duration-300 cursor-pointer shadow-sm"
              aria-label={`Open ${name}`}
            >
              <Icon size={20} className="text-emerald-100" />
              <span className="text-sm font-medium">{name}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Right: Contact Form */}
      <motion.form
        id="contact-form"
        onSubmit={handleSubmit}
        noValidate
        className="flex-1 flex flex-col gap-4 z-10 w-full max-w-lg mx-auto"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        {["name", "email"].map((field) => (
          <div key={field} className="w-full">
            <motion.input
              type={field === "email" ? "email" : "text"}
              name={field}
              placeholder={field === "name" ? "Name" : "Email"}
              value={formData[field]}
              onChange={handleChange}
              disabled={isLoading} // Disable during send
              whileFocus={{
                scale: 1.02,
                boxShadow: "0 0 12px hsl(var(--primary))",
              }}
              aria-invalid={errors[field] ? "true" : "false"}
              aria-describedby={`${field}-error`}
              className={`w-full rounded-md bg-input px-4 py-3 text-foreground placeholder-muted-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary transition ${
                errors[field]
                  ? "border-destructive ring-2 ring-destructive"
                  : ""
              } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
            />
            {errors[field] && (
              <p
                id={`${field}-error`}
                className="text-destructive text-sm mt-1 select-none"
                role="alert"
              >
                {errors[field]}
              </p>
            )}
          </div>
        ))}

        <div className="w-full">
          <motion.textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            disabled={isLoading}
            whileFocus={{
              scale: 1.02,
              boxShadow: "0 0 12px hsl(var(--primary))",
            }}
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby="message-error"
            className={`w-full rounded-md bg-input px-4 py-3 text-foreground placeholder-muted-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary transition resize-y ${
              errors.message ? "border-destructive ring-2 ring-destructive" : ""
            } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
          />
          {errors.message && (
            <p
              id="message-error"
              className="text-destructive text-sm mt-1 select-none"
              role="alert"
            >
              {errors.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isLoading || success} // Disable during loading/success
          whileHover={isLoading || success ? {} : { scale: 1.03 }} // No hover if disabled
          whileTap={isLoading || success ? {} : { scale: 0.97 }}
          className={`px-6 py-3 font-semibold rounded-full shadow-md transition-colors duration-300 self-center mt-2 cursor-pointer ${
            isLoading
              ? "bg-primary/50 text-white cursor-not-allowed"
              : success
              ? "bg-green-500 text-white"
              : "bg-primary text-white hover:bg-primary/90"
          }`}
          aria-label={isLoading ? "Sending..." : "Send message"}
        >
          {isLoading ? "Sending..." : "Send"}
        </motion.button>

        {success && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-4 text-center text-primary font-semibold bg-primary/10 rounded-full px-4 py-2 w-fit mx-auto"
            role="alert"
          >
            Message sent successfully ✅
          </motion.p>
        )}

        {errors.submit && (
          <p className="text-destructive text-sm mt-2 text-center" role="alert">
            {errors.submit}
          </p>
        )}
      </motion.form>
    </motion.section>
  );
};

export default ContactContainer;
