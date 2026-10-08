"use client";

import dynamic from "next/dynamic";
import { Card, CardContent } from "@/components/ui/card";

const GitHubCalendar = dynamic(() => import("react-github-calendar").then(mod => ({ default: mod.GitHubCalendar })), {
  ssr: false,
  loading: () => <div className="min-w-max h-32 flex items-center justify-center">Loading...</div>
});

export const GithubActivity = () => {
  const customTheme = {
    dark: [
      "rgba(255,255,255,0.03)",
      "rgba(var(--sage-rgb),0.25)",
      "rgba(var(--sage-rgb),0.5)",
      "rgba(var(--sage-rgb),0.75)",
      "var(--sage)"
    ],
  };

  return (
    <section className="relative py-24 md:py-28 border-t border-[var(--border)]">
      <div className="max-w-[1200px] w-full mx-auto px-6 md:px-10 lg:px-12">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <div className="section-label section-label--center mb-5">
            Activity
          </div>
          <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-black tracking-tighter text-white">
            Days I Code.
          </h2>
          <p className="text-sm font-light mt-3 max-w-lg mx-auto text-muted">
            A visualization of my open-source contributions and personal project commits pulled directly from GitHub.
          </p>
        </div>

        <Card className="p-6 md:p-10 rounded-2xl overflow-x-auto surface-chip">
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
