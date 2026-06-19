"use client";

import dynamic from "next/dynamic";
import { Card, CardContent } from "@/components/ui/card";

const GitHubCalendar = dynamic(() => import("react-github-calendar").then(mod => ({ default: mod.GitHubCalendar })), {
  ssr: false,
  loading: () => <div className="min-w-max h-32 flex items-center justify-center">Loading...</div>
});

export const GithubActivity = () => {
  // Use the "Deep Ocean" sage green for the contribution squares
  // to match the portfolio's bespoke design system
  const customTheme = {
    dark: [
      "rgba(255,255,255,0.03)",
      "rgba(133,199,154,0.25)",
      "rgba(133,199,154,0.5)",
      "rgba(133,199,154,0.75)",
      "var(--sage)"
    ],
  };

  return (
    <section className="relative py-24 border-t" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-[1280px] w-full mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <div className="section-label mb-5 mx-auto">
            Activity
          </div>
          <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-black tracking-tighter text-white">
            Days I <span className="text-gradient-primary">Code.</span>
          </h2>
          <p className="text-sm font-light mt-3 max-w-lg mx-auto" style={{ color: "var(--muted-fg)" }}>
            A visualization of my open-source contributions and personal project commits pulled directly from GitHub.
          </p>
        </div>

        <Card className="p-6 md:p-10 rounded-2xl overflow-x-auto" style={{ background: "var(--surface-1)", borderColor: "var(--border)" }}>
          <CardContent className="p-0 flex justify-center">
            <div className="min-w-max">
              <GitHubCalendar
                username="athallaarl66"
                blockSize={14}
                blockMargin={6}
                colorScheme="dark"
                theme={customTheme}
                fontSize={14}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
