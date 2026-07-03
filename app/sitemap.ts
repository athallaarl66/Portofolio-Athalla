import type { MetadataRoute } from "next";
import { getAllProjects } from "@/lib/projectsData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://athalla-works.vercel.app";
  const projects = getAllProjects();

  const projectPages = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...projectPages,
  ];
}
