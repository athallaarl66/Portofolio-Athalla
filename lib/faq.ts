export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "Are you available for freelance or full-time work?",
    answer:
      "I'm open to both. Send me the scope and a rough timeline, and I'll let you know if it's a good fit.",
  },
  {
    question: "What do you work on day to day?",
    answer:
      "I build admin tools for a POS system with Laravel and Filament, including account management and access control. I also work on a CMS whose APIs serve Android and iOS apps.",
  },
  {
    question: "Which technologies do you use?",
    answer:
      "At work, mostly Laravel and PostgreSQL. My projects also use Next.js, React, and .NET. You can see how I use each one in the projects above.",
  },
  {
    question: "Do you work solo or in a team?",
    answer:
      "Mostly in a team, with planning and code review. I work solo on side projects.",
  },
  {
    question: "How do I reach you?",
    answer:
      "Email me at athallaarli@gmail.com or reach out on LinkedIn. Both links are in the contact section.",
  },
];
