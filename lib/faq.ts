export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "Are you open to freelance work or a full-time role?",
    answer:
      "Both. Send me the scope and a rough timeline and I'll tell you honestly whether I'm the right fit. Replies usually land within a day.",
  },
  {
    question: "What do you actually work on?",
    answer:
      "Laravel and Filament for POS admin: account management, multi-store allocation, access control. Plus an enterprise CMS whose REST APIs are consumed by Android and iOS apps.",
  },
  {
    question: "What's your stack?",
    answer:
      "Laravel and PostgreSQL most days, Next.js and React when a project needs a UI, .NET when it fits. On the side I built an industrial IoT asset dashboard on MQTT and SignalR, and a CLI that drafts PRDs and feature specs for me.",
  },
  {
    question: "Do you work solo or in a team?",
    answer:
      "Team, mostly. Sprints in Taiga, spec written before code, review before merge. Side projects are where I work alone.",
  },
  {
    question: "How do I reach you?",
    answer:
      "athallaarli@gmail.com, or LinkedIn if that's easier. Email gets the faster answer.",
  },
];
