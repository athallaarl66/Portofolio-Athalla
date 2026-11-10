// src/components/layout/navItems.js
export const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "About", to: "/#about" },
  { label: "Services", to: "/#services" },
  { label: "Contact", to: "/#contact" },
];

export interface NavItem {
  label: string;
  to: string;
}
