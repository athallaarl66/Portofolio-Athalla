const BASE_URL = "https://athalla-works.vercel.app/";

export const PersonSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${BASE_URL}/#person`,
    name: "Athalla Arli",
    url: BASE_URL,
    image: `${BASE_URL}/projects/propil.jpg`,
    sameAs: [
      "https://github.com/athallaarl66",
      "https://www.linkedin.com/in/athalla-arli-baa7b72b7/",
      "https://www.instagram.com/athallaarl/",
    ],
    jobTitle: "Software Engineer",
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
    worksFor: {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "GITS.id",
      url: "https://gits.id",
    },
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
    image: `${BASE_URL}${project.hero}`,
    dateCreated: project.year,
    author: {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      name: "Athalla Arli",
      url: BASE_URL,
    },
    keywords: project.tags.join(", "),
    applicationCategory: project.category,
    mainEntity: {
      "@type": "SoftwareSourceCode",
      name: project.title,
    },
    url: `${BASE_URL}/projects/${project.id}`,
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
      "@id": `${BASE_URL}/#person`,
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
    url: `${BASE_URL}/projects/${project.id}`,
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
    mainEntity: [
      {
        "@type": "Question",
        name: "Are you available for freelance or full-time opportunities?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, I'm open to freelance projects and full-time opportunities. Contact me via email or LinkedIn.",
        },
      },
      {
        "@type": "Question",
        name: "What technologies do you specialize in?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "I'm a Software Engineer at GITS.id, building and integrating backend APIs for CMS and POS systems, plus mobile app integration. Tech-wise: Next.js, React, Laravel, .NET, PostgreSQL, and Docker.",
        },
      },
      {
        "@type": "Question",
        name: "Do you work with teams or prefer solo projects?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "I work in Agile/Scrum teams at GITS.id, and built thesis and client projects with code reviews and Git-based collaboration.",
        },
      },
      {
        "@type": "Question",
        name: "How can I contact you for a project?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Email athallaarli@gmail.com, or message me on LinkedIn. I typically respond within a day.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
