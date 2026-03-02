// src/data/projectsData.js

export const projectsData = {
  "sundanese-learning": {
    title: "DiajarAksara - Sundanese Script Learning Platform",
    tagline:
      "Undergraduate thesis project: Web-based learning app for Sundanese script using User-Centered Design method",
    shortDesc:
      "A frontend and UI/UX project developed as part of my thesis at Telkom University, focused on making Sundanese script accessible through research-driven design and modern web tech.",

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

    tags: ["Next.js", "CSS Modules", "UI/UX Design", "UCD Method"],
    category: "Frontend & UI/UX",
    year: "2025",
    role: "UI/UX Designer & Frontend Developer",
    duration: "Jan 2025 – Aug 2025 (Undergraduate Thesis)",

    liveUrl: "https://diajar-aksara.vercel.app/dashboard",
    githubUrl: "https://github.com/athallaarl66/DiajarAksara",

    overview:
      "DiajarAksara is my undergraduate thesis project at Telkom University, built using the User-Centered Design (UCD) method. The research started by identifying real learning challenges faced by high school students at SMAN 24 Bandung when studying Sundanese script. From there, I designed user-centered UI prototypes, validated them with actual users, and developed the final web app based on those findings. The platform covers interactive script references, writing guidance, and a simple responsive interface aimed at beginner learners.",

    techStack: {
      frontend: ["Next.js", "React", "CSS Modules"],
      design: ["Figma", "User-Centered Design (UCD)"],
      deployment: ["Vercel"],
      tools: ["Git", "VS Code"],
    },

    keyFeatures: [
      "Interactive Aksara Sunda character reference with step-by-step visual guides",
      "Digital whiteboard for practicing Sundanese script writing",
      "Quiz system for knowledge assessment",
      "Responsive layout optimized for mobile and tablet",
      "Research-backed UI designed through UCD methodology",
      "Clean CSS Modules architecture for maintainable, modular styling",
    ],

    challenges: [
      {
        title: "Getting Real User Requirements from Schools",
        problem:
          "Gathering requirements from SMAN 24 Bandung was harder than expected — strict permission processes, scheduling conflicts, and multiple coordination rounds with school staff slowed things down.",
        solution:
          "Set up clear communication channels with school representatives early on, and switched to remote interviews when on-site visits weren't possible. This kept the process moving without losing the quality of insights needed to design the right solution.",
      },
      {
        title: "Rendering Sundanese Script Consistently",
        problem:
          "Sundanese characters have unique combinations and diacritical marks that behaved differently across screen sizes and devices.",
        solution:
          "Built a custom component structure with CSS Modules so each character rendered with precise spacing and alignment. Tested across multiple devices to make sure the visual consistency held up everywhere.",
      },
    ],

    results: [
      "Completed and passed as undergraduate thesis at Telkom University",
      "Deployed live and accessible to students and educators",
      "Validated through real user testing with high school students",
      "Contributed to regional language preservation through practical technology",
    ],
  },
  // RK Law Firm
  "law-firm-website": {
    title: "RK Law Firm - Corporate Website",
    tagline:
      "Internship project: Corporate website with online legal service features for a Jakarta-based law firm",
    shortDesc:
      "Built and customized the company profile website for RK Law Firm during internship, with added online legal service features and frontend components integrated into the full stack.",

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

    tags: ["HTML/CSS", "Laravel", "UI/UX Design", "Figma"],
    category: "Full Stack (UI/UX and Frontend Focused)",
    year: "2024",
    role: "Full Stack Developer (Intern)",
    duration: "Jul 2024 – Sep 2024 (Internship)",

    liveUrl: null,
    githubUrl:
      "https://github.com/athallaarl66/Firma-Hukum-Rantai-Khatulistiwa",
    figmaUrl:
      "https://www.figma.com/design/d57Pa0fm8GGVUv6ap3mxR7/RK?node-id=0-1&t=fXlDR6UorHchwpbe-1",

    overview:
      "During my internship at Firma Hukum Rantai Khatulistiwa in Jakarta, I developed and customized the company's profile website and implemented additional online legal service features. The work covered both frontend and backend — designing UI components in Figma, building them in React, and integrating them into the existing Laravel stack. Feature adjustments were done collaboratively with the team based on ongoing requirements from the firm.",

    techStack: {
      frontend: ["HTML", "CSS"],
      backend: ["Laravel", "PHP"],
      database: ["MySQL"],
      design: ["Figma"],
      tools: ["Git", "XAMPP"],
    },

    keyFeatures: [
      "Company profile website with professional legal services showcase",
      "Lawyer profile directory with expertise and credentials",
      "Online legal service features added on top of existing platform",
      "Consultation booking interface with form validation",
      "Frontend components designed in Figma and implemented in React",
      "Responsive layout for professional client engagement",
    ],

    challenges: [
      {
        title: "Aligning Design with Stakeholder Expectations",
        problem:
          "Design iterations went through multiple rounds of revisions due to differing preferences between internship supervisors and company stakeholders, which risked delaying the project.",
        solution:
          "Set up structured review sessions and documented each design decision with clear reasoning around user experience and business value. That transparency helped get approvals faster and kept everyone aligned without endless back-and-forth.",
      },
      {
        title: "Building a Professional Visual Identity",
        problem:
          "The design needed to feel trustworthy and professional for a law firm while still being modern enough to stand out from typical corporate sites.",
        solution:
          "Researched legal industry design patterns, prototyped multiple directions in Figma, and collected feedback before committing to implementation. The final design hit the right balance between authority and approachability.",
      },
    ],

    results: [
      "Delivered a working corporate website within the internship period",
      "Added functional online legal service features to the platform",
      "Strengthened skills in stakeholder communication and design iteration",
      "Gained hands-on experience integrating React frontend with Laravel backend",
    ],
  },
  "Crazwash-umkm-dashboard": {
    title: "Crazwash – Service Management & POS Web App",
    tagline:
      "Full-stack web app for managing service orders, customers, and transactions",

    shortDesc:
      "A full-stack web application built for a laundry UMKM. Includes public multi-step ordering, admin dashboard, manual payment confirmation via WhatsApp, and CSV export for reporting.",

    hero: "/projects3/Dashboard.png",
    thumbnail: "/projects3/Dashboard.png",

    screenshots: [
      {
        url: "/projects3/adminDashboard.png",
        caption: "Admin dashboard overview",
      },
      {
        url: "/projects3/Dashboard.png",
        caption: "Customer dashboard showing available services",
      },
      {
        url: "/projects3/admin-inventory.png",
        caption: "Inventory management for products and stock",
      },
      {
        url: "/projects3/admin-orders.png",
        caption: "Order management with status tracking",
      },
      {
        url: "/projects3/admin-customers.png",
        caption: "Customer data management",
      },
      {
        url: "/projects3/layanan.png",
        caption: "Service catalog displayed to customers",
      },
      {
        url: "/projects3/app-order1.png",
        caption: "Ordering flow – step 1: select service category",
      },
      {
        url: "/projects3/app-order2.png",
        caption: "Step 2: choose specific treatments",
      },
      {
        url: "/projects3/app-order3.png",
        caption: "Step 3: add items to cart",
      },
      {
        url: "/projects3/app-order4.png",
        caption: "Step 4: review order before submission",
      },
      {
        url: "/projects3/SuccesOrder.png",
        caption:
          "Order confirmation screen with payment instructions and WhatsApp link",
      },
    ],

    tags: ["Next.js", "Prisma", "PostgreSQL", "NextAuth", "TypeScript"],
    category: "Full Stack",
    year: "2025",
    role: "Full Stack Developer",
    duration: "Dec 2025 – Feb 2026",

    liveUrl: "https://crazwash.vercel.app/",
    githubUrl: "https://github.com/athallaarl66/Crazwash.git",

    overview:
      "Crazwash is a full-stack web application built for a laundry UMKM to manage daily service operations. Customers can browse available services and place orders through a public multi-step flow. Since the business doesn’t use a payment gateway, payments are confirmed manually via WhatsApp. On the admin side, there’s a dashboard to manage services, track orders, update payment status, and export reports as CSV. The application is built with Next.js App Router using SSR, Prisma ORM, PostgreSQL (Neon), and NextAuth for authentication.",

    techStack: {
      frontend: ["Next.js (App Router)", "React", "Tailwind CSS", "shadcn/ui"],
      backend: ["Next.js API Routes", "Prisma ORM", "NextAuth"],
      database: ["PostgreSQL (Neon)"],
      deployment: ["Vercel"],
      tools: ["TypeScript", "Prisma Studio"],
    },

    keyFeatures: [
      "Public multi-step ordering flow for customers",
      "Manual payment confirmation via WhatsApp (bank transfer / e-wallet)",
      "Admin dashboard for managing services, orders, and customers",
      "Authentication system using NextAuth",
      "CSV export for reporting",
      "Responsive UI with SSR using Next.js App Router",
      "Database schema designed with Prisma and PostgreSQL (Neon)",
    ],

    challenges: [
      {
        title: "Designing the Manual Payment Flow",
        problem:
          "The business does not use a payment gateway, so payments must be confirmed manually via WhatsApp. The flow needed to remain simple for customers while giving clear visibility to the admin.",
        solution:
          "Implemented a status-based order system where customers receive payment instructions and a direct WhatsApp link after submitting an order. The admin can then update payment and order status directly from the dashboard.",
      },
      {
        title: "Separating Public and Admin Access",
        problem:
          "The application required a public ordering system and a protected admin dashboard without adding unnecessary complexity.",
        solution:
          "Used NextAuth for session-based authentication and implemented role-based checks on API routes and server components to separate public and admin access cleanly.",
      },
    ],

    results: [
      "Completed and deployed within 2 months",
      "Covers the full operational flow from order creation to reporting",
      "Live deployment on Vercel",
      "Structured and maintainable TypeScript codebase",
    ],
  },
};

export const getProject = (id) => projectsData[id];

export const getAllProjects = () => {
  return Object.entries(projectsData).map(([id, data]) => ({
    id,
    ...data,
  }));
};
