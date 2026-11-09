"use client";

import { GraduationCap, Briefcase, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const AboutSection = () => {
  const highlights = [
    {
      label: "Telkom University",
      sub: "Informatics · S1",
      icon: <GraduationCap className="w-4 h-4" />,
      badge: "GPA 3.20",
    },
    {
      label: "Software Engineer",
      sub: "GITS.id",
      icon: <Code2 className="w-4 h-4" />,
      badge: "Current",
    },
    {
      label: "Fullstack Intern",
      sub: "RK Law Firm",
      icon: <Briefcase className="w-4 h-4" />,
      badge: "Intern",
    },
    {
      label: "Diajar Aksara",
      sub: "Thesis · UCD",
      icon: <img src="/icons/thesis.png" alt="Thesis" className="w-4 h-4 object-contain" />,
      badge: "Product",
    },
  ];

  return (
    <section id="about" className="relative overflow-hidden py-20 md:py-28 before:pointer-events-none before:absolute before:inset-0 before:bg-[linear-gradient(115deg,rgba(var(--teal-rgb),0.09),transparent_42%,rgba(86,28,44,0.18))]">
      <div className="relative max-w-[1140px] w-full mx-auto px-6 md:px-10 lg:px-12">
        <div className="section-label mb-10">
          About me
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-start">

          <div>
            <h2 className="text-[clamp(2.1rem,4vw,3.75rem)] font-black tracking-[-0.04em] leading-[1.04] text-white mb-7">
              From crafting UIs,
              <br />
              to building robust systems.
            </h2>

            <div className="space-y-4 text-[14px] md:text-[15px] leading-relaxed font-light mb-8 text-muted">
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

            <Button
              variant="ghost"
              className="w-fit text-[13px] px-5 py-3 rounded-none border border-[rgba(var(--sage-rgb),0.6)] text-white hover:bg-[rgba(var(--sage-rgb),0.14)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              asChild
            >
              <a
                href="/projects2/CV_IT_Athalla-Arli-Abhinaya_ENGLISH.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
                <svg className="w-3.5 h-3.5 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
                </svg>
              </a>
            </Button>
          </div>

          <div className="relative lg:pt-8">
            <div className="relative overflow-hidden bg-[#183535] after:pointer-events-none after:absolute after:inset-0 after:bg-[linear-gradient(0deg,rgba(25,37,35,0.65),transparent_55%)]">
              <img src="/projects/propil.jpg" alt="Athalla Arli Abhinaya" className="w-full h-72 md:h-96 object-cover object-top motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-out hover:scale-[1.03]" loading="lazy" />
            </div>
            <div className="relative bg-[var(--surface-1)] px-5 py-6 md:px-7 border-t border-[rgba(var(--sage-rgb),0.5)]">
              <div>
                <h3 className="mono-label mb-3">Background</h3>
                <div className="flex flex-col gap-2">
                  {highlights.map((h) => (
                    <div
                      key={h.label}
                      className="flex items-center justify-between gap-3 py-3 border-b border-[var(--border)] last:border-0"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 text-[var(--sage)]">
                          {h.icon}
                        </div>
                        <div>
                          <p className="text-[13px] font-semibold text-white leading-tight">{h.label}</p>
                          <p className="text-[11px] font-light mt-0.5 text-muted">{h.sub}</p>
                        </div>
                      </div>
                      <div className="text-[10px] uppercase tracking-[0.12em] font-medium text-[var(--sage)]">
                        {h.badge}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
