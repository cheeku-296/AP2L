# AP2L Enterprise Software Platform - Developer Documentation

Welcome to the **AP2L** repository! This is a comprehensive guide designed to onboard new developers, explain the architectural decisions, and outline the best practices required to maintain and scale this Next.js enterprise web application.

---

## 📖 Table of Contents

1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Folder Structure & Architecture](#folder-structure--architecture)
4. [Getting Started (Local Development)](#getting-started-local-development)
3. [Recent Updates & Changelog](#recent-updates--changelog)
4. [Folder Structure & Architecture](#folder-structure--architecture)
5. [Getting Started (Local Development)](#getting-started-local-development)
6. [Design System & Typography](#design-system--typography)
7. [Component Guidelines](#component-guidelines)
8. [Routing & Pages (App Router)](#routing--pages-app-router)
9. [Animation & Framer Motion](#animation--framer-motion)
10. [SEO & Performance Best Practices](#seo--performance-best-practices)
11. [Deployment Guide](#deployment-guide)
12. [Troubleshooting & Maintenance](#troubleshooting--maintenance)

---

## Recent Updates & Changelog

### UI Standardization & Asset Generation
- **Navbar & Navigation:** Standardized the `Navbar` component, specifically standardizing the `Dropdown` menus for ShieldVUE and Cliqtest to follow the unified 2-column grid layout and backdrop blur aesthetic used across the rest of the application.
- **Dynamic Product Imagery:** Generated and integrated 7 distinct, premium dashboard mockups for the landing page `PlatformOverview` component. The component now dynamically loads product-specific imagery (`shieldvue.png`, `netraa.png`, etc.) instead of a generic placeholder, significantly enhancing the visual narrative.
- **Footer Cleanup:** Streamlined the `Footer` by removing obsolete links (Pricing, Book Demo) and routing the "About Us" link directly to the external `https://apmosys.com` corporate domain.

### Privacy & Compliance Integration
- **Cookie Consent Banner:** Implemented a global, client-side `<CookieBanner />` component that persists user consent states strictly on the frontend via `localStorage` (key: `cookieConsent`). The banner is injected into the root `app/layout.tsx` for site-wide coverage.
- **Legal Boilerplates:** Established and styled standard Markdown-like legal pages leveraging Next.js routing:
  - `/privacy-policy`
  - `/terms-of-service`
  - `/cookie-policy`

---

## 1. Project Overview

**AP2L** is a high-performance, AI-powered enterprise software showcase built for scale. The platform consists of various cutting-edge product suites, including:
- **Netraa** (AI Observability & Incident Analysis)
- **Cliqtest** (No-Code Test Automation)
- **ShieldVUE** (Cybersecurity & Governance)
- **Jupiter**, **Saransh**, and **Finxplore**.

This web application serves as the primary marketing and documentation hub for these products, utilizing dynamic 3D layouts, extensive parallax scrolling, and sleek, modern UI patterns (glassmorphism, bento grids).

---

## 2. Technology Stack

This project is built on a modern, highly optimized JavaScript ecosystem:

- **Framework:** [Next.js 14+](https://nextjs.org/) (utilizing the App Router)
- **Language:** TypeScript (Strict Mode)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (Utility-first CSS framework)
- **Animations:** [Framer Motion](https://www.framer.com/motion/) (Complex scroll & layout animations)
- **Icons:** [Lucide React](https://lucide.dev/)
- **State Management:** React Context (for Theming and Configs)
- **Fonts:** Next/Font (Google Fonts)

---

## 3. Folder Structure & Architecture

The repository follows a strict modular structure, separating routing logic (`app/`) from UI implementation (`src/`).

```text
ap2l/
├── app/                        # Next.js App Router (Pages, Layouts, SEO)
│   ├── products/               # Product landing pages (Netraa, Cliqtest, etc.)
│   ├── solutions/              # Solution verticals (DevOps, QA, Security)
│   ├── resources/              # Blogs, Case Studies, FAQs
│   ├── company/                # About Us, Contact, Careers
│   └── layout.tsx              # Root HTML layout & Global SEO metadata
│
├── src/                        # Source Code & Implementation
│   ├── components/             # Reusable UI Components
│   │   ├── common/             # Navbars, Footers, Buttons, CTA, ThemeBuilder
│   │   ├── Landing/            # Homepage specific sections (Hero, Features, Testimonials)
│   │   ├── Products/           # Product-specific sections isolated by product name
│   │   │   ├── Netraa/         # (Hero, KeyCapabilities, Data, etc.)
│   │   │   ├── Cliqtest/
│   │   │   └── ShieldVUE/
│   │   ├── solutions/          # Solution-specific UI blocks
│   │   └── resources/          # Resource-specific UI blocks
│   │
│   └── context/                # React Context Providers (ThemeConfigContext)
│
├── public/                     # Static assets (Images, Logos, Fonts, Manifests)
├── tailwind.config.ts          # Tailwind configuration & design tokens
└── tsconfig.json               # TypeScript compiler options
```

### Key Architectural Decisions:
- **Separation of Concerns:** `app/` files should contain minimal UI logic. They are responsible for fetching data, defining SEO (`generateMetadata`), and rendering the assembled components from `src/components/`.
- **Component Isolation:** Each product page (e.g., Netraa) has its own isolated component folder under `src/components/Products/Netraa/`. This prevents CSS/Animation conflicts between different product designs.

---

## 4. Getting Started (Local Development)

### Prerequisites
- Node.js (v18.17.0 or higher)
- npm, yarn, pnpm, or bun

### Installation
1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd AP2L
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
4. **Access the application:** Open [http://localhost:3000](http://localhost:3000)

---

## 5. Design System & Typography

AP2L relies on a sophisticated typographic scale and a unified color palette to maintain a premium enterprise feel.

### Typography
The project uses multiple fonts loaded via `next/font/google` for optimal performance without layout shifts (CLS):
- **Urbanist:** Primary Display Font (Headings, Heroes).
- **Inter:** Secondary Interface Font (Buttons, UI elements).
- **Manrope:** Primary Body Text (Paragraphs, descriptions).
- **Space Grotesk / Alata:** Accent fonts for specific technical or product branding (e.g., Cliqtest).

To use a font in a component, apply the corresponding Tailwind class (e.g., `font-urbanist`, `font-manrope`). These are mapped to CSS variables inside `app/layout.tsx`.

### Theming
The application supports both Light and Dark modes using `next-themes`. 
- Dark mode is the **default**.
- Colors are defined using semantic Tailwind classes (e.g., `text-slate-900 dark:text-slate-50`).
- Custom accent colors are often applied via arbitrary values for specific product branding (e.g., `text-[#6843B7]` for Cliqtest purple).

---

## 6. Component Guidelines

When creating or modifying components, please adhere to the following rules:

1. **Use Server Components by Default:** In the `app/` directory, everything is a Server Component unless you specify `"use client"`.
2. **"use client" Directive:** Only add `"use client"` at the top of files in `src/components/` that require interactivity (e.g., `useState`, `useEffect`, `onClick`, or `framer-motion` animations).
3. **Props Interface:** Always define a strict TypeScript interface for component props.
4. **Responsive Design:** Mobile-first approach. Use Tailwind's `md:`, `lg:`, and `xl:` prefixes.
5. **Avoid Hardcoding Data:** Move configuration arrays (like feature lists, pricing plans) into a separate `data.ts` file next to the component (e.g., `src/components/Products/Netraa/Hero/data.ts`).

---

## 7. Routing & Pages (App Router)

We use the Next.js App Router (`app/` directory).
- **Static Pages:** Just create a `page.tsx` in a new folder (e.g., `app/about/page.tsx` maps to `/about`).
- **Dynamic Routes:** Use bracket syntax (e.g., `app/blogs/[id]/page.tsx` maps to `/blogs/123`).
- **Layouts:** `layout.tsx` files wrap pages. The root `layout.tsx` contains the Navbar and Footer. If a specific section (like dashboard) needs a different layout, create a nested `layout.tsx` inside that folder.

---

## 8. Animation & Framer Motion

AP2L is highly dynamic. We use `framer-motion` for scroll reveals and micro-interactions.

**Best Practices for Animations:**
- Import `motion` from `framer-motion`.
- Use `whileInView` for scroll animations.
- Set `viewport={{ once: true }}` on most scroll animations so they don't repeatedly trigger and distract the user when scrolling up and down.
- Avoid animating layout properties (width, height, margin). Prefer animating `transform` (opacity, x, y, scale) for 60fps performance.

**Example Scroll Reveal:**
```tsx
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 0.2 }}
>
  <h1>Animated Title</h1>
</motion.div>
```

---

## 9. SEO & Performance Best Practices

To maintain our high Lighthouse scores, follow these critical performance rules:

1. **Next/Image:** NEVER use standard `<img>` tags. Always use `<Image />` from `next/image`. This guarantees automatic webp conversion, resizing, and lazy loading.
   ```tsx
   import Image from "next/image";
   <Image src="/logo.png" alt="Company Logo" width={200} height={100} priority={true} />
   ```
   *(Note: Use `priority` only for Above-The-Fold images like Hero backgrounds).*

2. **SEO Metadata:** Every page in `app/` should export a `metadata` object to optimize search engine ranking.
   ```tsx
   import { Metadata } from "next";
   export const metadata: Metadata = {
     title: "Netraa | Observability Platform",
     description: "AI-driven incident analysis.",
   };
   ```

3. **Avoid Unnecessary Re-renders:** Memoize expensive calculations. Do not pass large inline objects as props to Client Components.

---

## 10. Deployment Guide

The application is optimized for deployment on [Vercel](https://vercel.com).

### Pre-Deployment Checklist:
1. Run `npm run lint` to catch ESLint errors.
2. Run `npm run build` to ensure the project compiles successfully.
3. Verify all TypeScript types are correct. `next build` will fail if there are TS errors.

### Deploying to Vercel:
1. Connect the GitHub repository to your Vercel account.
2. The Build Command is `npm run build`.
3. Ensure any required Environment Variables are added in the Vercel Dashboard.
4. Vercel will automatically build and deploy `main` branch merges, and provide Preview Deployments for Pull Requests.

---

## 11. Troubleshooting & Maintenance

- **Font Loading Errors:** If a font like Clash Grotesk or Space Grotesk isn't loading, check `app/layout.tsx` to ensure the `<link>` tags or Google Font imports are correctly formatted and not causing hydration errors.
- **Hydration Mismatch:** If you see a warning about hydration mismatch, it usually means a Client Component rendered differently on the server than on the browser (e.g., using `window.innerWidth` without checking if `typeof window !== 'undefined'`).
- **Tailwind Classes Not Applying:** If you use dynamic string concatenation for Tailwind (e.g., `className={"bg-" + color}`), Tailwind's compiler won't see it. Always use full class names (e.g., `className={color === "red" ? "bg-red-500" : "bg-blue-500"}`) or use `clsx` / `tailwind-merge`.

---

*For further assistance or codebase walkthroughs, please refer to the Git commit history or reach out to the core engineering team.*
