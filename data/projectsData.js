// src/data/projectsData.js

export const projectsData = {
  "sundanese-learning": {
    title: "DiajarAksara - Sundanese Script Learning Platform",
    tagline:
      "Thesis project — building a web app to make Sundanese script actually learnable",
    shortDesc:
      "Built for my undergraduate thesis at Telkom University. The goal was simple: make Sundanese script less intimidating for high school students through research-driven design and a clean web interface.",

    hero: "/projects1/HOMEPAGE.png",
    thumbnail: "/projects1/HOMEPAGE.png",
    screenshots: [
      { url: "/projects1/HOMEPAGE.png", caption: "Homepage" },
      { url: "/projects1/BACA.png", caption: "Reading module" },
      { url: "/projects1/BacaAksara.png", caption: "Character reference" },
      { url: "/projects1/Nulisaksaara.png", caption: "Writing practice" },
    ],

    tags: ["Next.js", "CSS Modules", "UI/UX Design", "UCD Method"],
    category: "Frontend & UI/UX",
    year: "2025",
    role: "UI/UX Designer & Frontend Developer",
    duration: "Jan 2025 – Aug 2025 (Undergraduate Thesis)",

    liveUrl: "https://diajar-aksara.vercel.app/dashboard",
    githubUrl: "https://github.com/athallaarl66/DiajarAksara",

    overview:
      "This started as a thesis at Telkom University and ended up being one of the most grounded projects I've worked on. I went to SMAN 24 Bandung, interviewed students, figured out where they were actually struggling with Sundanese script, then designed the app around those findings. The UCD process meant multiple rounds of prototyping and testing before a single line of code was written — which made the final result a lot more focused. The app covers character references, writing practice with a digital whiteboard, and a quiz system.",

    techStack: {
      frontend: ["Next.js", "React", "CSS Modules"],
      design: ["Figma", "User-Centered Design (UCD)"],
      deployment: ["Vercel"],
      tools: ["Git", "VS Code"],
    },

    keyFeatures: [
      "Aksara Sunda character reference with step-by-step visual breakdowns",
      "Digital whiteboard for freehand writing practice",
      "Quiz module for testing what you've learned",
      "Mobile and tablet friendly layout",
      "UI built directly from user research findings",
      "CSS Modules for clean, scoped styling across components",
    ],

    results: [
      "Passed and accepted as undergraduate thesis at Telkom University",
      "Deployed and live — accessible to students and teachers",
      "Tested with actual high school students during the research phase",
      "Small contribution to keeping Sundanese script relevant through tech",
    ],
  },

  "law-firm-website": {
    title: "RK Law Firm - Corporate Website",
    tagline:
      "Internship project — company profile site for a Jakarta law firm, built from the ground up",
    shortDesc:
      "Worked on this during a 3-month internship at Firma Hukum Rantai Khatulistiwa. Built the profile site and added online legal service features on top of an existing Laravel stack.",

    hero: "/projects2/homerk.jpg",
    thumbnail: "/projects2/homerk.jpg",
    screenshots: [
      { url: "/projects2/homerk.jpg", caption: "Homepage" },
      { url: "/projects2/fix.jpg", caption: "Services section" },
      { url: "/projects2/kontak.jpg", caption: "Contact page" },
      {
        url: "/projects2/Kumpulan Profile Konsultasi hukum.jpg",
        caption: "Lawyer directory",
      },
      {
        url: "/projects2/Profile Konsultasi hukum (OK).jpg",
        caption: "Individual lawyer profile",
      },
      {
        url: "/projects2/Sub Bidang hukum 14.jpg",
        caption: "Legal practice areas",
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
      "My internship at a Jakarta law firm. The job was to build out their company profile site and add some online service features — things like a lawyer directory, service pages, and a consultation booking form. Design was done in Figma first, then built out in HTML/CSS and wired into the existing Laravel backend. Most of the work involved a lot of back-and-forth with stakeholders to get the look and feel right for a legal brand — professional but not stiff.",

    techStack: {
      frontend: ["HTML", "CSS"],
      backend: ["Laravel", "PHP"],
      database: ["MySQL"],
      design: ["Figma"],
      tools: ["Git", "XAMPP"],
    },

    keyFeatures: [
      "Full company profile with services, team, and contact pages",
      "Lawyer directory with individual profile pages",
      "Consultation booking form with basic validation",
      "Design prototyped in Figma before implementation",
      "Integrated into existing Laravel backend",
      "Responsive across desktop and mobile",
    ],

    results: [
      "Delivered within the 3-month internship window",
      "Online service features working end-to-end",
      "Got comfortable working with real stakeholders and iterating on feedback",
      "First time integrating a frontend into someone else's existing backend",
    ],
  },

  "Crazwash-umkm-dashboard": {
    title: "Crazwash – Service Management & POS Web App",
    tagline:
      "Full-stack app for a laundry business — ordering, payments, and admin in one place",
    shortDesc:
      "Built for a laundry UMKM that needed a way to manage orders and customers without a complicated POS system. Customers order online, payments get confirmed via WhatsApp, and the owner handles everything from a dashboard.",

    hero: "/projects3/Dashboard.png",
    thumbnail: "/projects3/Dashboard.png",

    screenshots: [
      { url: "/projects3/adminDashboard.png", caption: "Admin dashboard" },
      {
        url: "/projects3/Dashboard.png",
        caption: "Customer-facing service page",
      },
      {
        url: "/projects3/admin-inventory.png",
        caption: "Inventory management",
      },
      { url: "/projects3/admin-orders.png", caption: "Order tracking" },
      { url: "/projects3/admin-customers.png", caption: "Customer list" },
      { url: "/projects3/layanan.png", caption: "Service catalog" },
      {
        url: "/projects3/app-order1.png",
        caption: "Order flow — pick a category",
      },
      {
        url: "/projects3/app-order2.png",
        caption: "Order flow — choose treatments",
      },
      { url: "/projects3/app-order3.png", caption: "Order flow — add to cart" },
      {
        url: "/projects3/app-order4.png",
        caption: "Order flow — review before submit",
      },
      {
        url: "/projects3/SuccesOrder.png",
        caption: "Order confirmed — payment instructions + WhatsApp link",
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
      "Crazwash came from a real need — a laundry business that was managing everything manually and needed something simple to run daily operations. Customers go through a multi-step ordering flow on the public side, then get payment instructions and a WhatsApp link to confirm. No payment gateway, just how the business actually works. The admin side covers everything: services, orders, customers, payment status, and CSV exports for reporting. Built with Next.js App Router, Prisma, PostgreSQL on Neon, and NextAuth for auth.",

    techStack: {
      frontend: ["Next.js (App Router)", "React", "Tailwind CSS", "shadcn/ui"],
      backend: ["Next.js API Routes", "Prisma ORM", "NextAuth"],
      database: ["PostgreSQL (Neon)"],
      deployment: ["Vercel"],
      tools: ["TypeScript", "Prisma Studio"],
    },

    keyFeatures: [
      "Multi-step ordering flow on the public side — no account needed",
      "WhatsApp-based payment confirmation (bank transfer / e-wallet)",
      "Admin dashboard for services, orders, customers, and payment status",
      "Auth with NextAuth — role-based access between public and admin",
      "CSV export for transaction reporting",
      "SSR with Next.js App Router throughout",
    ],

    results: [
      "Done and deployed in under 2 months",
      "Covers the full flow from order placement to payment confirmation",
      "Live on Vercel",
      "Clean TypeScript codebase that's easy to extend",
    ],
  },

  "money-tracker": {
    title: "AuditTracks – Personal Finance Tracker",
    tagline:
      "Personal project — tracking income, expenses, and budgets across multiple accounts",
    shortDesc:
      "A personal finance app I built to actually use. Spring Boot handles the backend with JWT auth, Next.js on the frontend with React Query and Recharts. Multi-account support, budget tracking, recurring transactions, and CSV export.",

    hero: "/Projects5/Dashboard.png",
    thumbnail: "/Projects5/Dashboard.png",
    screenshots: [
      { url: "/Projects5/login.png", caption: "Login" },
      {
        url: "/Projects5/Dashboard.png",
        caption: "Dashboard — balance overview and recent transactions",
      },
      {
        url: "/Projects5/Analytics1.png",
        caption: "Analytics — spending breakdown and monthly trends",
      },
      {
        url: "/Projects5/transaction.png",
        caption: "Transaction list with filters",
      },
      {
        url: "/Projects5/addBank.png",
        caption: "Add account — Bank, Cash, or E-Wallet",
      },
    ],

    tags: [
      "Next.js",
      "TypeScript",
      "Spring Boot",
      "PostgreSQL",
      "Java",
      "JWT",
      "React Query",
    ],
    category: "Full Stack",
    year: "2025",
    role: "Full Stack Developer",
    duration: "2025 (Personal Project)",

    liveUrl: "https://audit-tracks.vercel.app",
    githubUrl: "https://github.com/athallaarl66/money-tracker-frontend",
    githubUrlBe: "https://github.com/athallaarl66/money-tracker-backend",

    overview:
      "Built this because I wanted a finance tracker that worked the way I think about money — by account, not just by category. The backend is a Spring Boot REST API running on Java 21, secured with JWT and containerized with Docker on Koyeb. Frontend is Next.js 14 with TypeScript, React Query for data fetching, Zustand for auth state, and Recharts for the charts. This was my first time shipping a Spring Boot app to production, so a decent chunk of the work was figuring out deployment, CORS across two separate services, and keeping the auth flow clean.",

    techStack: {
      frontend: [
        "Next.js 14 (App Router)",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
        "React Query",
        "Zustand",
        "Recharts",
        "Axios",
      ],
      backend: [
        "Spring Boot 3",
        "Java 21",
        "Spring Security",
        "JWT",
        "JPA / Hibernate",
      ],
      database: ["PostgreSQL (Neon)"],
      deployment: ["Vercel (Frontend)", "Koyeb / Docker (Backend)"],
      tools: ["Git", "VS Code", "IntelliJ IDEA"],
    },

    keyFeatures: [
      "Register and login with JWT — stateless auth",
      "Multiple accounts — Bank, Cash, E-Wallet",
      "Full transaction CRUD with filters and pagination",
      "Analytics: spending by category, monthly trends, balance per account",
      "Budget tracking per category with progress bars",
      "Recurring transactions — set once, runs automatically",
      "CSV export for transaction history",
      "Works on mobile and desktop",
    ],

    results: [
      "Two separate services deployed and running — frontend on Vercel, backend on Koyeb",
      "First Spring Boot app I've shipped to production",
      "Learned Docker and Koyeb deployment hands-on",
      "Actually use this app to track my own finances",
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
