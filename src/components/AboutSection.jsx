import { GraduationCap, Briefcase, Code2 } from "lucide-react";

export const AboutSection = () => {
  const highlights = [
    {
      label: "Telkom University",
      sub: "Informatics · S1",
      icon: <GraduationCap className="w-4 h-4" />,
      badge: "GPA 3.20",
      badgeColor: "rgba(78,141,156,0.15)",
      badgeText: "var(--teal)"
    },
    {
      label: "Software Engineer",
      sub: "GITS.id",
      icon: <Code2 className="w-4 h-4" />,
      badge: "Current",
      badgeColor: "rgba(59,130,246,0.15)",
      badgeText: "#60a5fa"
    },
    {
      label: "Fullstack Intern",
      sub: "RK Law Firm",
      icon: <Briefcase className="w-4 h-4" />,
      badge: "Intern",
      badgeColor: "rgba(124,58,237,0.15)",
      badgeText: "#a78bfa"
    },
    { 
      label: "Diajar Aksara", 
      sub: "Thesis · UCD", 
      icon: <img src="/icons/thesis.png" alt="Thesis" className="w-4 h-4 object-contain" />, 
      badge: "Product", 
      badgeColor: "rgba(133,199,154,0.15)", 
      badgeText: "var(--sage)" 
    },
  ];

  return (
    <section id="about" className="relative py-20 md:py-24">
      <div className="max-w-[1140px] w-full mx-auto px-6 md:px-10 lg:px-12">
        <div className="section-label mb-10 w-fit text-sm">
          About me
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-start">
          
          <div>
            <h2 className="text-[clamp(1.75rem,3vw,2.75rem)] font-black tracking-tighter leading-[1.1] text-white mb-5">
              From crafting UIs,
              <br />
              <span className="text-gradient-primary">to building robust systems.</span>
            </h2>

            <div className="space-y-4 text-[14px] md:text-[15px] leading-relaxed font-light mb-8" style={{ color: "var(--muted-fg)" }}>
              <p>
                I'm a Software Engineer with an Informatics degree from{" "}
                <strong className="text-white font-medium">Telkom University</strong>. My background started in frontend development during my internship at Firma Hukum Rantai Khatulistiwa, which naturally evolved into fullstack development when I built my thesis,{" "}
                <strong className="text-white font-medium">Diajar Aksara</strong>.
              </p>
              <p>
                Currently, I work as a Software Engineer at{" "}
                <strong className="text-white font-medium">GITS.id</strong>. I handle client CMS projects—building frontend pages and developing backend APIs consumed by mobile apps (including iOS). Additionally, I developed a full web Point of Sale (POS) system, complete with its own dedicated CMS.
              </p>
              <p>
                Outside of my day job, I enjoy exploring other areas of tech. I build side projects as a hobby, such as creating enterprise-level IoT monitoring dashboards using .NET and Next.js.
              </p>
            </div>

            <a
              href="/projects2/CV_IT_Athalla-Arli-Abhinaya_ENGLISH.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost w-fit text-[13px] px-4 py-2"
            >
              Download Resume
              <svg className="w-3.5 h-3.5 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
              </svg>
            </a>
          </div>

          <div className="flex flex-col p-5 rounded-[1.5rem] border" style={{ background: "var(--surface-1)", borderColor: "var(--border)" }}>
            
            <div className="mb-6">
              <h3 className="text-[10px] font-mono uppercase tracking-widest mb-3" style={{ color: "var(--muted-fg)" }}>Background</h3>
              <div className="flex flex-col gap-2">
                {highlights.map((h) => (
                  <div
                    key={h.label}
                    className="flex items-center justify-between p-3 rounded-xl border transition-all duration-300"
                    style={{ background: "rgba(var(--deep-rgb), 0.4)", borderColor: "var(--border)" }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}
                      >
                        {h.icon}
                      </div>
                      <div>
                        <p className="text-[13px] font-semibold text-white leading-tight">{h.label}</p>
                        <p className="text-[11px] font-light mt-0.5" style={{ color: "var(--muted-fg)" }}>{h.sub}</p>
                      </div>
                    </div>
                    <div 
                      className="px-2.5 py-0.5 rounded-full border text-[10px] font-medium"
                      style={{ background: h.badgeColor, color: h.badgeText, borderColor: `rgba(255,255,255,0.05)` }}
                    >
                      {h.badge}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full h-px mb-5" style={{ background: "var(--border)" }} />

            <div className="grid grid-cols-3 gap-2">
              {[
                { value: "4+",  label: "Projects" },
                { value: "S1",  label: "Informatics" },
                { value: "'25", label: "Graduated" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="p-3 rounded-xl border text-center flex flex-col justify-center"
                  style={{ background: "rgba(var(--deep-rgb), 0.4)", borderColor: "var(--border)" }}
                >
                  <p className="text-xl font-black tracking-tight mb-0.5" style={{ color: "var(--foreground)" }}>
                    {s.value}
                  </p>
                  <p className="text-[9px] font-mono uppercase tracking-widest" style={{ color: "var(--muted-fg)" }}>
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