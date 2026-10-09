import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Athalla Arli's portfolio of projects - from undergraduate thesis to enterprise-grade applications. Featuring Full Stack, IoT, and Developer Tools projects.",
  keywords: [
    "Portfolio",
    "Projects",
    "Full Stack Developer",
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
    images: [
      {
        url: "/projects/propil.jpg",
        width: 1200,
        height: 630,
        alt: "Athalla Arli's Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Athalla Arli",
    description:
      "Explore Athalla Arli's portfolio of projects - from undergraduate thesis to enterprise-grade applications.",
    images: ["/projects/propil.jpg"],
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
