import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const contacts = [
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
    name: "Email",
    url: "mailto:emailkamu@example.com",
    icon: "/icons/email.png",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/usernamekamu",
    icon: "/icons/instagram.png",
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

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Nama wajib diisi";
    if (!formData.email.trim()) newErrors.email = "Email wajib diisi";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email tidak valid";
    if (!formData.message.trim()) newErrors.message = "Pesan wajib diisi";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess(false);
    } else {
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
      setTimeout(() => setSuccess(false), 4000);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative container max-w-6xl mx-auto mt-12 p-8 rounded-xl bg-card text-card-foreground shadow-xl flex flex-col md:flex-row gap-10 overflow-hidden"
      aria-label="Contact form with CTA"
    >
      {/* Kiri: Info + CTA */}
      <motion.div
        className="flex-1 flex flex-col justify-center space-y-6 z-10"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-primary text-glow select-none leading-tight">
          Mari Berkolaborasi!
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground">
          Jika kamu tertarik untuk bekerja sama, berdiskusi proyek, atau sekadar
          menyapa, jangan ragu untuk mengisi form di sebelah kanan. Saya siap
          membantu dan mendengarkan ide kreatifmu.
        </p>

        <div className="flex flex-wrap gap-4 mt-2">
          {contacts.map(({ name, url, icon }) => (
            <motion.a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-3 py-2 rounded-md cursor-pointer transition bg-input hover:bg-primary/20"
              aria-label={`Buka ${name}`}
            >
              <img
                src={icon}
                alt={`${name} logo`}
                className="w-5 h-5"
                loading="lazy"
                draggable={false}
              />
              <span className="text-sm font-medium">{name}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Kanan: Form Kontak */}
      <motion.form
        id="contact-form"
        onSubmit={handleSubmit}
        noValidate
        className="flex-1 flex flex-col gap-4 z-10"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        {["name", "email"].map((field) => (
          <div key={field} className="w-full">
            <motion.input
              type={field === "email" ? "email" : "text"}
              name={field}
              placeholder={field === "name" ? "Nama" : "Email"}
              value={formData[field]}
              onChange={handleChange}
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
              }`}
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
            placeholder="Pesan"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            whileFocus={{
              scale: 1.02,
              boxShadow: "0 0 12px hsl(var(--primary))",
            }}
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby="message-error"
            className={`w-full rounded-md bg-input px-4 py-3 text-foreground placeholder-muted-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary transition resize-y ${
              errors.message ? "border-destructive ring-2 ring-destructive" : ""
            }`}
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

        <motion.button
          type="submit"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="cosmic-button self-center mt-2 cursor-pointer"
          aria-label="Kirim pesan"
        >
          Kirim
        </motion.button>

        {success && (
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-4 text-center text-primary-foreground font-semibold select-none animate-fade-in"
            role="alert"
          >
            Pesan berhasil dikirim! Terima kasih.
          </motion.p>
        )}
      </motion.form>
    </motion.section>
  );
};

export default ContactContainer;
