export interface FooterLink {
  title: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export const footerSections: FooterSection[] = [
  {
    title: "Platform",
    links: [
      { title: "ShieldVUE", href: "/products/shieldvue" },
      { title: "NETRAA AI-OPS", href: "/products/netraa" },
      { title: "cliQTest", href: "/products/cliqtest" },
      { title: "JUPITER", href: "/products/jupiter" },
      { title: "FINXPLORE", href: "/products/finxplore" },
      { title: "SWIKRUTI", href: "/products/swikruti" },
      { title: "SARANSH", href: "/products/saransh" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { title: "For QA Teams", href: "/solutions/qa-teams" },
      { title: "For DevOps", href: "/solutions/devops" },
      { title: "Security & Compliance", href: "/solutions/security-compliance" },
      { title: "For IT Support", href: "/solutions/it-support" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "FAQ", href: "/resources/faq" },
      { title: "Blog", href: "/resources/blog" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About Us", href: "/company" },
      { title: "Pricing", href: "/pricing" },
      { title: "Contact", href: "/contact" },
      { title: "Book Demo", href: "/contact" },
    ],
  },
];