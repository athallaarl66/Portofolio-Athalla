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
  description: "Full Stack Developer specializing in Next.js, React, .NET, and modern web technologies. Based in Bandung, Indonesia.",
  keywords: ["Full Stack Developer", "Next.js", "React", ".NET", "Software Engineer", "Bandung", "Athalla Arli"],
  authors: [{ name: "Athalla Arli" }],
  creator: "Athalla Arli",
  metadataBase: new URL("https://athalla.pages.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Athalla Arli - Full Stack Developer",
    description: "Full Stack Developer specializing in Next.js, React, .NET, and modern web technologies.",
    siteName: "Athalla Arli",
    images: [
      {
        url: "/projects/propil.jpg",
        width: 1200,
        height: 630,
        alt: "Athalla Arli",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Athalla Arli - Full Stack Developer",
    description: "Full Stack Developer specializing in Next.js, React, .NET, and modern web technologies.",
    images: ["/projects/propil.jpg"],
    creator: "@athallaarl",
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
