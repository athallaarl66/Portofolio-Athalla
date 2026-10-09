import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection as SkillSection } from "@/components/SkillsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProjectSection } from "@/components/ProjectSection";
import { FaqSection } from "@/components/FaqSection";
import ContactContainer from "@/components/ContactContainer";
import { GithubActivity } from "@/components/GithubActivity";
import { PersonSchema, FAQSchema } from "@/components/StructuredData";
import { SITE_URL } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Athalla Arli - Software Engineer",
  description:
    "Software Engineer building backend APIs for CMS and POS systems with Next.js, React, .NET, and Laravel. Based in Bandung, Indonesia.",
  keywords: [
    "Software Engineer",
    "Next.js",
    "React",
    ".NET",
    "Full Stack Developer",
    "Bandung",
    "Indonesia",
    "TypeScript",
    "Web Developer",
    "Portfolio",
    "Athalla Arli",
  ],
  authors: [{ name: "Athalla Arli", url: SITE_URL }],
  creator: "Athalla Arli",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${SITE_URL}/`,
    title: "Athalla Arli - Software Engineer",
    description:
      "Software Engineer building backend APIs for CMS and POS systems with Next.js, React, .NET, and Laravel. Based in Bandung, Indonesia.",
    siteName: "Athalla Arli",
    images: [
      {
        url: "/projects/propil.jpg",
        width: 1200,
        height: 630,
        alt: "Athalla Arli - Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Athalla Arli - Software Engineer",
    description:
      "Software Engineer building backend APIs for CMS and POS systems with Next.js, React, .NET, and Laravel. Based in Bandung, Indonesia.",
    site: "@athallaarl",
    creator: "@athallaarl",
    images: [
      {
        url: "/projects/propil.jpg",
        alt: "Athalla Arli - Software Engineer Portfolio",
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
      <FAQSchema />
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ServicesSection />
      <ProjectSection />
      <FaqSection />
      <GithubActivity />
      <ContactContainer />
    </>
  );
}
