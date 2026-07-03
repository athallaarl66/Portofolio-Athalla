import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject } from "@/lib/projectsData";
import ProjectDetailClient from "./ProjectDetailClient";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProject(id);

  if (!project) {
    return {
      title: "Project Not Found | Athalla Arli",
    };
  }

  return {
    title: project.title,
    description: project.tagline || project.shortDesc,
    keywords: project.tags,
    openGraph: {
      type: "article",
      locale: "en_US",
      url: `https://athalla-works.vercel.app//projects/${id}`,
      title: `${project.title} | Athalla Arli`,
      description: project.tagline || project.shortDesc,
      siteName: "Athalla Arli",
      images: [
        {
          url: project.hero,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Athalla Arli`,
      description: project.tagline || project.shortDesc,
      images: [project.hero],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const project = getProject(id);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient id={id} project={project} />;
}
