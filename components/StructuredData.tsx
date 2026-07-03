export const PersonSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://athalla.pages.dev/#person",
    name: "Athalla Arli",
    url: "https://athalla.pages.dev",
    image: "https://athalla.pages.dev/projects/propil.jpg",
    sameAs: [
      "https://github.com/athallaarl66",
      "https://www.linkedin.com/in/athalla-arli-baa7b72b7/",
      "https://www.instagram.com/athallaarl/",
    ],
    jobTitle: "Full Stack Developer",
    description: "Full Stack Developer specializing in Next.js, React, .NET, and modern web technologies. Based in Bandung, Indonesia.",
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
      "@id": "https://athalla.pages.dev/#organization",
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
    url: "https://athalla.pages.dev",
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
    description: project.description,
    image: project.image,
    dateCreated: project.year,
    author: {
      "@type": "Person",
      name: "Athalla Arli",
    },
    keywords: project.tags.join(", "),
    applicationCategory: project.category,
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
    description: project.description,
    codeRepository: project.githubUrl || "https://github.com/athallaarl66",
    author: {
      "@type": "Person",
      name: "Athalla Arli",
    },
    programmingLanguage: project.tags.join(", "),
    runtimePlatform: "Web",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
