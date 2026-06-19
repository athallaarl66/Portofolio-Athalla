export const PersonSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Athalla Arli",
    url: "https://athalla.pages.dev",
    image: "https://athalla.pages.dev/projects/propil.jpg",
    sameAs: [
      "https://github.com/athallaarl66",
      "https://www.linkedin.com/in/athalla-arli-baa7b72b7/",
      "https://www.instagram.com/athallaarl/",
    ],
    jobTitle: "Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "GITS.id",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Telkom University",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bandung",
      addressCountry: "ID",
    },
    knowsAbout: [
      "Next.js",
      "React",
      ".NET",
      "C#",
      "Laravel",
      "TypeScript",
      "PostgreSQL",
      "Docker",
    ],
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
