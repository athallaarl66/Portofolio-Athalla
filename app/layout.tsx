import type { Metadata } from "next";
import { Bebas_Neue, Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SITE_URL } from "@/lib/site";


const filmDisplay = Bebas_Neue({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400",
});


const montserrat = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Athalla Arli - Software Engineer",
    template: "%s | Athalla Arli",
  },
  description:
    "Portfolio of Athalla Arli, a Software Engineer specializing in Next.js, React, .NET, and modern web technologies. Based in Bandung, Indonesia.",
  keywords: [
    "Software Engineer",
    "Next.js",
    "React",
    ".NET",
    "Software Engineer",
    "Bandung",
    "Indonesia",
    "TypeScript",
    "Web Developer",
  ],
  authors: [{ name: "Athalla Arli", url: `${SITE_URL}/` }],
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
      "en-US": `${SITE_URL}/`,
      "id-ID": `${SITE_URL}/`,
    },
    canonical: `${SITE_URL}/`,
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
      className={`${filmDisplay.variable} ${montserrat.variable} h-full antialiased`}
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
        <meta name="theme-color" content="#0B192C" />
        <meta name="msapplication-TileColor" content="#0B192C" />

        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Hreflang Tags */}
        <link
          rel="alternate"
          hrefLang="en-US"
          href={`${SITE_URL}/`}
        />
        <link
          rel="alternate"
          hrefLang="id-ID"
          href={`${SITE_URL}/`}
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href={`${SITE_URL}/`}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
