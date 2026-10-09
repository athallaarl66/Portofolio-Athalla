import { SITE_URL } from "@/lib/site";
import { services } from "@/lib/services";
import { faqItems } from "@/lib/faq";

export const PersonSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "Athalla Arli",
    url: `${SITE_URL}/`,
    image: `${SITE_URL}/projects/propil.jpg`,
    sameAs: [
      "https://github.com/athallaarl66",
      "https://www.linkedin.com/in/athalla-arli-baa7b72b7/",
      "https://www.instagram.com/athallaarl/",
    ],
    jobTitle: "Software Engineer",
    hasOccupation: {
      "@type": "Occupation",
      name: "Software Engineer",
      occupationLocation: {
        "@type": "City",
        name: "Bandung",
      },
      skills: "Full Stack Development, Backend API Development, CMS and POS Systems",
    },
    makesOffer: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        serviceType: service.title,
      },
    })),
    description:
      "Software Engineer building backend APIs for CMS and POS systems, with Next.js, React, .NET, and Laravel. Based in Bandung, Indonesia.",
    knowsAbout: [
      "Next.js",
      "React",
      ".NET",
      "C#",
      "TypeScript",
      "JavaScript",
      "PostgreSQL",
      "Node.js",
      "Laravel",
      "PHP",
      "Docker",
      "Tailwind CSS",
      "Prisma ORM",
      "Spring Boot",
      "Java",
      "React Query",
      "Zustand",
      "MQTT",
      "SignalR",
      "Clean Architecture",
      "Domain-Driven Design",
    ],
    skills: [
      {
        "@type": "DefinedTerm",
        name: "Frontend Development",
        description: "Next.js, React, TypeScript, Tailwind CSS",
      },
      {
        "@type": "DefinedTerm",
        name: "Backend Development",
        description: ".NET, Node.js, Spring Boot, Laravel",
      },
      {
        "@type": "DefinedTerm",
        name: "Database",
        description: "PostgreSQL, MySQL",
      },
      {
        "@type": "DefinedTerm",
        name: "DevOps",
        description: "Docker, Vercel, Koyeb",
      },
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Telkom University",
      url: "https://telkomuniversity.ac.id",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bandung",
      addressRegion: "West Java",
      addressCountry: "ID",
    },
    nationality: {
      "@type": "Country",
      name: "Indonesia",
    },
    email: "athallaarli@gmail.com",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const CreativeWorkSchema = ({ project }: { project: any }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.shortDesc,
    image: `${SITE_URL}${project.hero}`,
    dateCreated: project.year,
    author: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Athalla Arli",
      url: `${SITE_URL}/`,
    },
    keywords: project.tags.join(", "),
    applicationCategory: project.category,
    mainEntity: {
      "@type": "SoftwareSourceCode",
      name: project.title,
    },
    url: `${SITE_URL}/projects/${project.id}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const SoftwareSourceCodeSchema = ({ project }: { project: any }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: project.title,
    description: project.shortDesc,
    codeRepository: project.githubUrl || "https://github.com/athallaarl66",
    author: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Athalla Arli",
    },
    programmingLanguage: project.tags.filter((tag: string) =>
      [
        "Next.js",
        "React",
        ".NET",
        "C#",
        "TypeScript",
        "JavaScript",
        "Node.js",
        "Laravel",
        "PHP",
        "Java",
        "Spring Boot",
      ].includes(tag),
    ),
    runtimePlatform: "Web",
    url: `${SITE_URL}/projects/${project.id}`,
    dateCreated: project.year,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const BreadcrumbListSchema = ({
  items,
}: {
  items: Array<{ name: string; url: string }>;
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const FAQSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
