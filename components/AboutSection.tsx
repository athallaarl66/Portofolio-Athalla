"use client";

import { GraduationCap, Briefcase, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
    <section id="about" className="relative py-20 md:py-24">
      <div className="max-w-[1140px] w-full mx-auto px-6 md:px-10 lg:px-12">
        <div className="section-label mb-10">
          About me
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-start">

          <div>
            <h2 className="text-[clamp(1.75rem,3vw,2.75rem)] font-black tracking-tighter leading-[1.1] text-white mb-5">
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
              className="w-fit text-[13px] px-4 py-2 rounded-full border border-[rgba(var(--teal-rgb),0.3)] text-white/65"
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

          <Card className="flex flex-col p-5 rounded-2xl surface-chip">
            <CardContent className="p-0">
              <div>
                <h3 className="mono-label mb-3">Background</h3>
                <div className="flex flex-col gap-2">
                  {highlights.map((h) => (
                    <div
                      key={h.label}
                      className="flex items-center justify-between p-3 rounded-xl surface-inset"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 border border-white/5 bg-white/[0.03] text-muted">
                          {h.icon}
                        </div>
                        <div>
                          <p className="text-[13px] font-semibold text-white leading-tight">{h.label}</p>
                          <p className="text-[11px] font-light mt-0.5 text-muted">{h.sub}</p>
                        </div>
                      </div>
                      <div className="px-2.5 py-0.5 rounded-full border border-white/5 bg-[rgba(var(--sage-rgb),0.1)] text-[10px] font-medium text-[var(--sage)]">
                        {h.badge}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
