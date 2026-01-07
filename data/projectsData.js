// src/data/projectsData.js
// DATA ONLY - SEMUA PROJECT INFO DI SINI

export const projectsData = {
  "sundanese-learning": {
    // BASIC INFO
    title: "DiajarAksara - Sundanese Script Learning Platform",
    tagline:
      "Final year project: Interactive learning platform for preserving ancient Sundanese script",
    shortDesc:
      "A comprehensive UI/UX and frontend project focused on making Sundanese script accessible through modern web technologies with gamified learning experiences",

    // IMAGES
    hero: "/projects1/HOMEPAGE.png",
    thumbnail: "/projects1/HOMEPAGE.png",
    screenshots: [
      {
        url: "/projects1/HOMEPAGE.png",
        caption: "Homepage with course overview",
      },
      { url: "/projects1/BACA.png", caption: "Reading lesson interface" },
      {
        url: "/projects1/BacaAksara.png",
        caption: "Character recognition module",
      },
      {
        url: "/projects1/Nulisaksaara.png",
        caption: "Writing practice feature",
      },
    ],

    // META
    tags: ["Next.js", "CSS Modules", "UI/UX Design", "Frontend"],
    category: "Frontend & UI/UX",
    year: "2025",
    role: "UI/UX Designer & Frontend Developer",
    duration: "2 weeks (Final Year Project)",

    // LINKS
    liveUrl: "https://diajar-aksara.vercel.app/dashboard",
    githubUrl: "https://github.com/athallaarl66/DiajarAksara",

    // DETAIL INFO
    overview:
      "DiajarAksara is a final year project that combines UI/UX design principles with modern frontend development to create an engaging learning platform for Sundanese script (Aksara Sunda). The project focuses on user experience design, interactive learning flows, and clean frontend implementation using Next.js and CSS Modules. The platform was built to make ancient script learning accessible and engaging for modern learners through gamification and intuitive interface design.",

    techStack: {
      frontend: ["Next.js", "React", "CSS Modules"],
      design: ["Figma", "UI/UX Design Principles"],
      deployment: ["Vercel"],
      tools: ["Git", "VS Code"],
    },

    keyFeatures: [
      "Interactive character learning modules with visual step-by-step guides",
      "Digital whiteboard for practicing Sundanese script writing",
      "Interactive quiz system for knowledge assessment",
      "Comprehensive Aksara Sunda learning materials and references",
      "Responsive design optimized for mobile and tablet learning",
      "Clean, modular CSS architecture for maintainable styling",
    ],

    challenges: [
      {
        title: "User Requirements Gathering",
        problem:
          "Obtaining comprehensive user requirements from schools proved challenging due to strict permission protocols and scheduling conflicts, requiring multiple school visits and coordination with administrative staff.",
        solution:
          "Streamlined the data collection process by establishing clear communication channels with school representatives and conducting remote interviews when possible. This approach eliminated unnecessary back-and-forth visits while ensuring all user requirements were thoroughly documented and validated.",
      },
      {
        title: "Complex Script Rendering",
        problem:
          "Sundanese script characters have unique combinations and diacritical marks that needed consistent rendering across different devices and screen sizes.",
        solution:
          "Implemented custom component architecture with CSS Modules to ensure precise character rendering. Each script element was carefully styled with proper spacing and alignment, maintaining visual consistency across all platforms.",
      },
    ],

    results: [
      "Successfully completed as final year project with positive faculty feedback",
      "Deployed live platform accessible to students and educators",
      "Demonstrated strong UI/UX design and frontend development skills",
      "Created a foundation for cultural preservation through technology",
    ],
  },

  "law-firm-website": {
    // BASIC INFO
    title: "RK Law Firm - Corporate Website",
    tagline:
      "Professional legal services platform with integrated consultation system",
    shortDesc:
      "Full-stack corporate website project focused on UI/UX design and frontend implementation with consultation booking capabilities for a law firm",

    // IMAGES
    hero: "/projects2/homerk.jpg",
    thumbnail: "/projects2/homerk.jpg",
    screenshots: [
      { url: "/projects2/homerk.jpg", caption: "Homepage overview" },
      { url: "/projects2/fix.jpg", caption: "Service showcase section" },
      {
        url: "/projects2/kontak.jpg",
        caption: "Contact and consultation page",
      },
      {
        url: "/projects2/Kumpulan Profile Konsultasi hukum.jpg",
        caption: "Lawyer profiles directory",
      },
      {
        url: "/projects2/Profile Konsultasi hukum (OK).jpg",
        caption: "Individual lawyer profile",
      },
      {
        url: "/projects2/Sub Bidang hukum 14.jpg",
        caption: "Legal service areas overview",
      },
    ],

    // META
    tags: ["React", "Node.js", "UI/UX Design", "Figma"],
    category: "Full Stack (UI/UX and Frontend Focused)",
    year: "2024",
    role: "UI/UX Designer & Full Stack Developer",
    duration: "Internship Project (July - September 2024)",

    // LINKS
    liveUrl: null,
    githubUrl:
      "https://github.com/athallaarl66/Firma-Hukum-Rantai-Khatulistiwa",
    figmaUrl:
      "https://www.figma.com/design/d57Pa0fm8GGVUv6ap3mxR7/RK?node-id=0-1&t=fXlDR6UorHchwpbe-1",

    // DETAIL INFO
    overview:
      "A comprehensive corporate website project for RK Law Firm (Rantai Khatulistiwa), developed during an internship period. The project heavily emphasizes UI/UX design and frontend development, with backend functionality supporting core features like consultation booking. The platform showcases legal services, lawyer profiles, and streamlines client engagement through modern web design principles and professional user experience.",

    techStack: {
      frontend: ["React", "Tailwind CSS"],
      backend: ["Laravel", "PHP"],
      database: ["MySQL"],
      design: ["Figma", "UI/UX Design"],
      tools: ["Git", "XAMPP"],
    },

    keyFeatures: [
      "Professional UI/UX design crafted in Figma with modern aesthetics",
      "Comprehensive legal service showcase with detailed area descriptions",
      "Lawyer profile system with expertise tags and professional credentials",
      "Online consultation booking interface with form validation",
      "Responsive design optimized for professional client engagement",
    ],

    challenges: [
      {
        title: "Design Alignment and Stakeholder Communication",
        problem:
          "Achieving design consensus between internship supervisors and company stakeholders proved challenging. Initial design iterations faced multiple revision requests due to differing aesthetic preferences and functional requirements, creating potential project delays.",
        solution:
          "Established structured design review sessions with clear communication of design rationale. Documented each design decision with explanations of user experience benefits and business value. This transparent approach fostered mutual understanding and accelerated approval processes, resulting in a final design that satisfied all stakeholders while maintaining professional standards.",
      },
      {
        title: "Professional Visual Identity",
        problem:
          "Creating a visual identity that conveyed trust, professionalism, and legal expertise while remaining modern and approachable required careful balance of design elements.",
        solution:
          "Conducted research on legal industry design trends and implemented a sophisticated color palette, professional typography, and clean layouts. Used Figma to prototype multiple variations and gather feedback before implementation, ensuring the final design met professional standards.",
      },
    ],

    results: [
      "Successfully delivered professional corporate website during internship",
      "Developed strong stakeholder communication and design presentation skills",
      "Created comprehensive Figma design system for future development",
      "Demonstrated ability to balance aesthetic design with functional requirements",
    ],
  },

  "umkm-dashboard": {
    // BASIC INFO
    title: "UMKM Business Dashboard",
    tagline: "Modern admin dashboard for small business operations",
    shortDesc:
      "A modern admin dashboard built to simulate real-world UMKM business operations with a focus on scalability, clean architecture, and intuitive user experience.",

    // IMAGES
    hero: "/projects3/Dashboard.png",
    thumbnail: "/projects3/Dashboard.png",
    screenshots: [
      {
        url: "/projects3/Dashboard.png",
        caption:
          "Admin dashboard overview with product and inventory management",
      },
      {
        url: "/projects3/admin-dashboard.png",
        caption: "Admin dashboard interface",
      },
      {
        url: "/projects3/admin-inventory.png",
        caption: "Inventory management system",
      },
      {
        url: "/projects3/admin-orders.png",
        caption: "Order tracking and management",
      },
      {
        url: "/projects3/admin-customers.png",
        caption: "Customer database management",
      },
    ],

    // META
    tags: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    category: "Full Stack",
    year: "2026",
    role: "Fullstack Developer",
    duration: "4 days (Demo & Proof of Concept)",

    // LINKS
    liveUrl: "https://umkm-web-app.vercel.app",
    githubUrl: "https://github.com/athallaarl66/UMKM-Web-App",

    // DETAIL INFO
    overview:
      "This project is a demo and proof-of-concept dashboard designed to represent real-world UMKM business workflows. It focuses on system architecture, UI/UX, and scalability rather than being a finalized production system. The dashboard demonstrates how small businesses can manage products, services, and inventory through a modern web-based admin interface.",

    techStack: {
      frontend: ["Next.js (App Router)", "React", "Tailwind CSS", "shadcn/ui"],
      backend: ["Next.js API Routes", "Prisma ORM"],
      database: ["PostgreSQL (Neon)"],
      deployment: ["Vercel"],
      tools: ["TypeScript", "Prisma Studio"],
    },

    keyFeatures: [
      "Admin dashboard for managing products, services, and inventory",
      "Category-based product management (Basic, Premium, Deep, Treatment)",
      "Active and inactive product status control",
      "Clean and responsive UI optimized for desktop and tablet",
      "Cloud-hosted PostgreSQL database with Prisma ORM integration",
    ],

    challenges: [
      {
        title: "Database Configuration and ORM Integration",
        problem:
          "Setting up a cloud-based PostgreSQL database and integrating it with Prisma required careful configuration and understanding of migration workflows.",
        solution:
          "Implemented Prisma ORM with Neon PostgreSQL to establish a clear data layer, type safety, and structured migrations, ensuring the application remains maintainable and scalable.",
      },
    ],

    results: [
      "Successfully deployed as a demo and proof-of-concept project",
      "Demonstrates modern full-stack architecture with Next.js and Prisma",
      "Created to showcase practical application of modern web development tools",
    ],
  },
};

// Helper function untuk get single project
export const getProject = (id) => projectsData[id];

// Helper function untuk get all projects as array
export const getAllProjects = () => {
  return Object.entries(projectsData).map(([id, data]) => ({
    id,
    ...data,
  }));
};
