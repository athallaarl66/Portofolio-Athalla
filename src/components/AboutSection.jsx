export const AboutSection = () => {
  const highlights = [
    { 
      label: "Telkom University", 
      sub: "Informatics · S1", 
      icon: "🎓", 
      badge: "GPA 3.20", 
      badgeColor: "rgba(78,141,156,0.15)", 
      badgeText: "var(--teal)" 
    },
    { 
      label: "Fullstack Dev Intern", 
      sub: "RK Law Firm", 
      icon: "💼", 
      badge: "Intern", 
      badgeColor: "rgba(124,58,237,0.15)", 
      badgeText: "#a78bfa" 
    },
    { 
      label: "User-Centered Design", 
      sub: "Thesis · Aksara Sunda App", 
      icon: <img src="/icons/thesis.png" alt="Thesis" className="w-5 h-5 object-contain" />, 
      badge: "Thesis", 
      badgeColor: "rgba(133,199,154,0.15)", 
      badgeText: "var(--sage)" 
    },
  ];

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(78,141,156,0.07) 0%, transparent 65%)" }}
        aria-hidden="true"
      />

      <div className="max-w-[1280px] w-full mx-auto px-6 md:px-10 lg:px-16">
        <div className="section-label mb-12 w-fit">
          <span className="section-label-dot" />
          About me
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24 items-start">
          {/* Left — bio */}
          <div>
            <h2 className="text-[clamp(2.2rem,4vw,3.5rem)] font-black tracking-tighter leading-[1.05] text-white mb-6">
              Engineering <span className="text-gradient-primary">with purpose.</span>
              <br />
              <span className="font-light" style={{ color: "var(--subtle-fg)" }}>Designing with care.</span>
            </h2>

            <div className="space-y-5 text-[15px] md:text-base leading-relaxed font-light mb-10" style={{ color: "var(--muted-fg)" }}>
              <p>
                I'm an Informatics graduate from{" "}
                <strong className="text-white font-medium">Telkom University</strong> (GPA 3.20/4.00)
                with a strong foundation in UI and frontend development, now actively
                transitioning into fullstack engineering.
              </p>
              <p>
                I worked as a{" "}
                <strong className="text-white font-medium">Fullstack Developer Intern</strong> at
                Firma Hukum Rantai Khatulistiwa in Jakarta, where I built their corporate
                website and integrated online legal service features end-to-end.
              </p>
              <p>
                My thesis applied{" "}
                <strong className="text-white font-medium">User-Centered Design</strong> to create
                a Sundanese script learning platform — research, iteration, and ship.
              </p>
            </div>

            <a
              href="/projects2/CV_IT_Athalla-Arli-Abhinaya_ENGLISH.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost w-fit"
            >
              Download Resume
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
              </svg>
            </a>
          </div>

          {/* Right — Unified Card: Background + Activity + Stats */}
          <div className="flex flex-col p-6 rounded-[2rem] border" style={{ background: "var(--surface-1)", borderColor: "var(--border)" }}>
            
            {/* BACKGROUND */}
            <div className="mb-8">
              <h3 className="text-[11px] font-mono uppercase tracking-widest mb-4" style={{ color: "var(--muted-fg)" }}>Background</h3>
              <div className="flex flex-col gap-3">
                {highlights.map((h) => (
                  <div
                    key={h.label}
                    className="flex items-center justify-between p-4 rounded-2xl border transition-all duration-300"
                    style={{ background: "rgba(8,8,15,0.4)", borderColor: "var(--border)" }}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                        style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}
                      >
                        {h.icon}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">{h.label}</p>
                        <p className="text-[12px] font-light mt-0.5" style={{ color: "var(--muted-fg)" }}>{h.sub}</p>
                      </div>
                    </div>
                    {/* Badge */}
                    <div 
                      className="px-3 py-1 rounded-full border text-[11px] font-medium"
                      style={{ background: h.badgeColor, color: h.badgeText, borderColor: `rgba(255,255,255,0.05)` }}
                    >
                      {h.badge}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* DIVIDER */}
            <div className="w-full h-px mb-6" style={{ background: "var(--border)" }} />

            {/* STATS */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: "4+",  label: "Projects" },
                { value: "1",   label: "Internship" },
                { value: "'25", label: "Graduate" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="p-4 rounded-2xl border text-center flex flex-col justify-center"
                  style={{ background: "rgba(8,8,15,0.4)", borderColor: "var(--border)" }}
                >
                  <p className="text-2xl font-black tracking-tight mb-1" style={{ color: "var(--foreground)" }}>
                    {s.value}
                  </p>
                  <p className="text-[10px] font-mono uppercase tracking-widest" style={{ color: "var(--muted-fg)" }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
