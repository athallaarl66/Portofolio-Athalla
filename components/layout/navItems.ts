// src/components/layout/navItems.js
export const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/#about" },
  { label: "Skills", to: "/#skills" },
  { label: "Services", to: "/#services" },
  { label: "Projects", to: "/projects" },
  { label: "FAQ", to: "/#faq" },
  { label: "Contacts", to: "/#contact" },
];

export interface NavItem {
  label: string;
  to: string;
}
