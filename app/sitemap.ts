import type { MetadataRoute } from "next";
import { getAllProjects } from "@/lib/projectsData";
import { SITE_URL, CONTENT_LAST_MODIFIED } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = getAllProjects();

  const projectPages = projects.map((project) => ({
    url: `${SITE_URL}/projects/${project.id}`,
    lastModified: CONTENT_LAST_MODIFIED,
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: CONTENT_LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/projects`,
      lastModified: CONTENT_LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...projectPages,
  ];
}
