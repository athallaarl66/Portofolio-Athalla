import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BackgroundAurora } from "@/components/effects/BackgroundAurora";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://athalla-works.vercel.app/"),
  title: {
    default: "Athalla Arli - Full Stack Developer",
    template: "%s | Athalla Arli",
  },
  description:
    "Portfolio of Athalla Arli, a Full Stack Developer specializing in Next.js, React, .NET, and modern web technologies. Based in Bandung, Indonesia.",
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
  ],
  authors: [{ name: "Athalla Arli", url: "https://athalla-works.vercel.app/" }],
  creator: "Athalla Arli",
  publisher: "Athalla Arli",
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
  icons: {
    icon: "/icons/Logo.jpg",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    languages: {
      "en-US": "https://athalla-works.vercel.app/",
      "id-ID": "https://athalla-works.vercel.app/",
    },
    canonical: "https://athalla-works.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${jakartaSans.variable} ${montserrat.variable} h-full antialiased`}
    >
      <head>
        {/* Preconnect for Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Theme Color for Mobile Browser Chrome */}
        <meta name="theme-color" content="#080810" />
        <meta name="msapplication-TileColor" content="#080810" />

        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Hreflang Tags */}
        <link
          rel="alternate"
          hrefLang="en-US"
          href="https://athalla-works.vercel.app/"
        />
        <link
          rel="alternate"
          hrefLang="id-ID"
          href="https://athalla-works.vercel.app/"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://athalla-works.vercel.app/"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <BackgroundAurora />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
