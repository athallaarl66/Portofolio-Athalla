export interface Service {
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    title: "Web applications",
    description:
      "I build web apps with Next.js, React, and TypeScript, from the interface through the application logic.",
    icon: "LayoutDashboard",
  },
  {
    title: "Point-of-sale systems",
    description:
      "Admin tools for orders, accounts, and store access, shaped around how staff actually work.",
    icon: "ShoppingCart",
  },
  {
    title: "Content management systems",
    description:
      "CMS interfaces and REST APIs that serve web, Android, and iOS clients.",
    icon: "FileText",
  },
  {
    title: "Backend APIs",
    description:
      "REST APIs and backend services built with Laravel, .NET, Node.js, or Spring Boot.",
    icon: "Server",
  },
  {
    title: "Mobile app integration",
    description:
      "APIs that connect Android and iOS apps to their CMS and backend data.",
    icon: "Smartphone",
  },
  {
    title: "Interface design",
    description:
      "User research and Figma prototypes that guide the interface before development.",
    icon: "Palette",
  },
  {
    title: "Developer tools",
    description:
      "CLI tools for project setup, codebase analysis, and repetitive development tasks.",
    icon: "Workflow",
  },
];
