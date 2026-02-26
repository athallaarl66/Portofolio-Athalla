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

    tags: ["React", "Laravel", "UI/UX Design", "Figma"],
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
      frontend: ["React", "Tailwind CSS"],
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
    title: "Crazwash - POS Web App for UMKM",
    tagline:
      "Full-stack POS system with online ordering, admin dashboard, and operational reporting",
    shortDesc:
      "A full-stack POS web app for a laundry UMKM — covers public multi-step ordering, admin management, manual payment flow via WhatsApp, and CSV export for reporting.",

    hero: "/projects3/adminDashboard.png",
    thumbnail: "/projects3/adminDashboard.png",
    screenshots: [
      {
        url: "/projects3/adminDashboard.png",
        caption: "Admin dashboard overview",
      },
      {
        url: "/projects3/Dashboard.png",
        caption: "Dashboard with operational insights and daily stats",
      },
      {
        url: "/projects3/admin-inventory.png",
        caption: "Inventory management — products and stock tracking",
      },
      {
        url: "/projects3/admin-orders.png",
        caption: "Order management — tracking status and customer purchases",
      },
      {
        url: "/projects3/admin-customers.png",
        caption: "Customer records for managing repeat buyers",
      },
      {
        url: "/projects3/layanan.png",
        caption: "Service catalog browsed by customers when ordering",
      },
      {
        url: "/projects3/app-order1.png",
        caption: "Public ordering flow — step 1: pick a service category",
      },
      {
        url: "/projects3/app-order2.png",
        caption: "Step 2: choose specific treatments or products",
      },
      {
        url: "/projects3/app-order3.png",
        caption: "Step 3: add items to cart",
      },
      {
        url: "/projects3/app-order4.png",
        caption: "Step 4: review order before submitting",
      },
      {
        url: "/projects3/SuccesOrder.png",
        caption:
          "Order confirmed — customer notified to confirm payment via WhatsApp",
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
      "Crazwash is a full-stack POS web app built for a laundry UMKM to handle their service operations end-to-end. Customers can place orders through a public multi-step ordering flow, then confirm payment (bank transfer or e-wallet) via WhatsApp to the admin. On the admin side, there's a dashboard for managing services, tracking orders, handling customer data, and exporting reports as CSV. Auth is handled with NextAuth, the database schema is managed with Prisma and PostgreSQL on Neon, and the whole thing runs on Next.js App Router with SSR and TypeScript.",

    techStack: {
      frontend: ["Next.js (App Router)", "React", "Tailwind CSS", "shadcn/ui"],
      backend: ["Next.js API Routes", "Prisma ORM", "NextAuth"],
      database: ["PostgreSQL (Neon)"],
      deployment: ["Vercel"],
      tools: ["TypeScript", "Prisma Studio"],
    },

    keyFeatures: [
      "Public multi-step ordering flow for customers to submit service requests online",
      "Manual payment confirmation workflow via WhatsApp (bank transfer / e-wallet)",
      "Admin dashboard for managing services, orders, and customers",
      "Authentication system using NextAuth",
      "CSV export for operational reporting and data management",
      "SSR-optimized responsive UI with Next.js App Router and TypeScript",
      "Database schema designed with Prisma and hosted on Neon PostgreSQL",
    ],

    challenges: [
      {
        title: "Designing the Manual Payment Flow",
        problem:
          "The business didn't use a payment gateway — customers confirm payments manually via WhatsApp. Needed to design a flow that felt smooth for customers while still giving the admin clear visibility on payment status.",
        solution:
          "Built a status-based order system where customers get a confirmation screen with payment instructions and a WhatsApp link to notify the admin. Admin can then manually update payment and order status from the dashboard. Simple, but it fits how the business actually operates.",
      },
      {
        title: "Auth and Role Management",
        problem:
          "Needed to separate the public ordering flow from the protected admin area without overcomplicating the setup.",
        solution:
          "Used NextAuth for session-based auth with role checks on API routes and server components. Kept it straightforward — public routes for ordering, protected routes for everything admin-side.",
      },
    ],

    results: [
      "Delivered a working full-stack POS app in 2 months",
      "Covers the full operation cycle: ordering, payment confirmation, admin management, and reporting",
      "Deployed on Vercel with live URL accessible to real users",
      "Clean, typed codebase with TypeScript that's maintainable and extendable",
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
