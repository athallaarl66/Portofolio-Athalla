import type { Metadata } from "next";

interface SiteMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
}

const siteName = "Athalla Arli";
const siteUrl = "https://athalla-works.vercel.app/";
const defaultOgImage = "/projects/propil.jpg";

export const generateMetadata = ({
  title,
  description,
  keywords = [],
  ogImage,
}: SiteMetadata): Metadata => {
  const fullTitle = title === siteName ? title : `${title} | ${siteName}`;

  return {
    title: fullTitle,
    description,
    keywords: [
      ...keywords,
      "Athalla Arli",
      "Full Stack Developer",
      "Next.js",
      "React",
      ".NET",
      "Software Engineer",
    ],
    authors: [{ name: "Athalla Arli" }],
    creator: "Athalla Arli",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteUrl,
      title: fullTitle,
      description,
      siteName,
      images: [
        {
          url: ogImage || defaultOgImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage || defaultOgImage],
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
    verification: {
      google: "your-google-verification-code",
    },
  };
};

export const siteConfig = {
  name: siteName,
  description:
    "Portfolio of Athalla Arli, a Full Stack Developer specializing in Next.js, React, and modern web technologies.",
  url: siteUrl,
  ogImage: defaultOgImage,
  links: {
    github: "https://github.com/athallaarl66",
    linkedin: "https://www.linkedin.com/in/athalla-arli-baa7b72b7/",
    email: "mailto:athallaarli@gmail.com",
  },
};
