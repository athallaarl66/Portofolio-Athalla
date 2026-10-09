export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "Are you available for freelance or full-time opportunities?",
    answer:
      "Yes, I'm open to freelance projects and full-time opportunities. Contact me via email or LinkedIn.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "I'm a Software Engineer at GITS.id, building and integrating backend APIs for CMS and POS systems, plus mobile app integration. Tech-wise: Next.js, React, Laravel, .NET, PostgreSQL, and Docker.",
  },
  {
    question: "Do you work with teams or prefer solo projects?",
    answer:
      "I work in Agile/Scrum teams at GITS.id, and built thesis and client projects with code reviews and Git-based collaboration.",
  },
  {
    question: "How can I contact you for a project?",
    answer:
      "Email athallaarli@gmail.com, or message me on LinkedIn. I typically respond within a day.",
  },
];
