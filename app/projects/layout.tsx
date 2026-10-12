import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Athalla Arli's portfolio of projects - from undergraduate thesis to enterprise-grade applications. Featuring Full Stack, IoT, and Developer Tools projects.",
  keywords: [
    "Portfolio",
    "Projects",
    "Backend Engineer",
    "Next.js",
    "React",
    ".NET",
    "Work Samples",
    "Athalla Arli",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${SITE_URL}/projects`,
    title: "Projects | Athalla Arli",
    description:
      "Explore Athalla Arli's portfolio of projects - from undergraduate thesis to enterprise-grade applications.",
    siteName: "Athalla Arli",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Athalla Arli",
    description:
      "Explore Athalla Arli's portfolio of projects - from undergraduate thesis to enterprise-grade applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
