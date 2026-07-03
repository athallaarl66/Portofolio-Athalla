import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection as SkillSection } from "@/components/SkillsSection";
import { ProjectSection } from "@/components/ProjectSection";
import ContactContainer from "@/components/ContactContainer";
import { GithubActivity } from "@/components/GithubActivity";
import { PersonSchema } from "@/components/StructuredData";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Athalla Arli - Full Stack Developer",
  description:
    "Full Stack Developer specializing in Next.js, React, .NET, and modern web technologies. Based in Bandung, Indonesia.",
  keywords: [
    "Full Stack Developer",
    "Next.js",
    "React",
    ".NET",
    "Software Engineer",
    "Bandung",
    "Indonesia",
    "TypeScript",
    "Web Developer",
    "Portfolio",
    "Athalla Arli",
  ],
  authors: [{ name: "Athalla Arli", url: "https://athalla-works.vercel.app/" }],
  creator: "Athalla Arli",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://athalla-works.vercel.app/",
    title: "Athalla Arli - Full Stack Developer",
    description:
      "Full Stack Developer specializing in Next.js, React, .NET, and modern web technologies. Based in Bandung, Indonesia.",
    siteName: "Athalla Arli",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Athalla Arli - Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Athalla Arli - Full Stack Developer",
    description:
      "Full Stack Developer specializing in Next.js, React, .NET, and modern web technologies. Based in Bandung, Indonesia.",
    site: "@athallaarl",
    creator: "@athallaarl",
    images: [
      {
        url: "/og-image.png",
        alt: "Athalla Arli - Full Stack Developer Portfolio",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Home() {
  return (
    <>
      <PersonSchema />
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      <GithubActivity />
      <ContactContainer />
    </>
  );
}
