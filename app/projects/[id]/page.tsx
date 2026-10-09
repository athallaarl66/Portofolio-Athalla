import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject } from "@/lib/projectsData";
import {
  CreativeWorkSchema,
  SoftwareSourceCodeSchema,
  BreadcrumbListSchema,
} from "@/components/StructuredData";
import ProjectDetailClient from "./ProjectDetailClient";
import { SITE_URL } from "@/lib/site";

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
      url: `${SITE_URL}/projects/${id}`,
      title: `${project.title} | Athalla Arli`,
      description: project.tagline || project.shortDesc,
      siteName: "Athalla Arli",
      images: [
        {
          url: `${SITE_URL}${project.hero}`,
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
      images: [`${SITE_URL}${project.hero}`],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `/projects/${id}`,
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const project = getProject(id);

  if (!project) {
    notFound();
  }

  const breadcrumbItems = [
    { name: "Home", url: `${SITE_URL}/` },
    { name: "Projects", url: `${SITE_URL}/projects` },
    { name: project.title, url: `${SITE_URL}/projects/${id}` },
  ];

  return (
    <>
      <CreativeWorkSchema project={project} />
      <SoftwareSourceCodeSchema project={project} />
      <BreadcrumbListSchema items={breadcrumbItems} />
      <ProjectDetailClient id={id} project={project} />
    </>
  );
}
