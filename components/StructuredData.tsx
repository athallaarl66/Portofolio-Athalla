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
    jobTitle: "Full Stack Developer",
    description:
      "Full Stack Developer specializing in Next.js, React, .NET, and modern web technologies. Based in Bandung, Indonesia.",
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
    email: "athalla.arli@email.com",
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
          text: "Yes, I'm open to freelance projects and full-time opportunities. Feel free to reach out to discuss your project requirements.",
        },
      },
      {
        "@type": "Question",
        name: "What technologies do you specialize in?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "I specialize in Full Stack development with Next.js, React, .NET, TypeScript, and modern web technologies. I also have experience with PostgreSQL, Docker, and cloud deployments on Vercel and Koyeb.",
        },
      },
      {
        "@type": "Question",
        name: "Do you work with teams or prefer solo projects?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "I enjoy both! I've worked effectively in team environments during internships and also handle solo projects well. I'm comfortable collaborating via Git, code reviews, and agile methodologies.",
        },
      },
      {
        "@type": "Question",
        name: "How can I contact you for a project?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can reach me via email at athalla.arli@email.com or connect with me on LinkedIn. I'm responsive and happy to discuss your project needs.",
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
