export interface Service {
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    title: "Web App & SaaS Development",
    description:
      "Custom web applications and SaaS products built with Next.js, React, and TypeScript, from first screen to production deploy.",
    icon: "LayoutDashboard",
  },
  {
    title: "POS System Development & Integration",
    description:
      "Point-of-sale systems with order management, inventory, multi-store allocation, and payment confirmation flows.",
    icon: "ShoppingCart",
  },
  {
    title: "CMS Development & Integration",
    description:
      "Content management systems with REST APIs consumed by web, Android, and iOS clients.",
    icon: "FileText",
  },
  {
    title: "Backend API Development",
    description:
      "Backend services and REST or real-time APIs with .NET, Node.js, Laravel, and Spring Boot, backed by PostgreSQL.",
    icon: "Server",
  },
  {
    title: "Mobile App Integration",
    description:
      "Backend APIs and integrations that power Android and iOS mobile applications.",
    icon: "Smartphone",
  },
  {
    title: "UI/UX Design",
    description:
      "User-centered interface design and prototyping in Figma, validated with real users.",
    icon: "Palette",
  },
  {
    title: "Workflow Automation Setup",
    description:
      "Automation tooling and CLI workflows that remove repetitive development and documentation work.",
    icon: "Workflow",
  },
];
