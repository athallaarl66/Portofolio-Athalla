import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection as SkillSection } from "@/components/SkillsSection";
import { ProjectCarousel } from "@/components/ProjectCarousel";
import { ServicesSection } from "@/components/ServicesSection";
import { FaqSection } from "@/components/FaqSection";
import ContactContainer from "@/components/ContactContainer";
import { GithubActivity } from "@/components/GithubActivity";
import { PersonSchema, FAQSchema } from "@/components/StructuredData";
import { SITE_URL } from "@/lib/site";
import type { Metadata } from "next";

const homeDescription =
  "Athalla Arli is a Software Engineer in Bandung, Indonesia, building REST APIs, web applications, CMS platforms, and internal tools.";

export const metadata: Metadata = {
  title: "Software Engineer in Bandung, Indonesia | Athalla Arli",
  description: homeDescription,
  keywords: [
    "Athalla Arli",
    "Software Engineer Bandung",
    "Backend Engineer Indonesia",
    "REST API development",
    "CMS development",
    "Laravel",
    ".NET",
    "Next.js",
    "React",
  ],
  authors: [{ name: "Athalla Arli", url: `${SITE_URL}/` }],
  creator: "Athalla Arli",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${SITE_URL}/`,
    title: "Software Engineer in Bandung, Indonesia | Athalla Arli",
    description: homeDescription,
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
    title: "Software Engineer in Bandung, Indonesia | Athalla Arli",
    description: homeDescription,
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
      <ProjectCarousel />
      <AboutSection />
      <SkillSection />
      <ServicesSection />
      <FaqSection />
      <GithubActivity />
      <ContactContainer />
    </>
  );
}
