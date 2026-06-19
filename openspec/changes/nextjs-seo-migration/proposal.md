## Why

Current Vite + React SPA has poor SEO because search engines see empty HTML (only `<div id="root"></div>`), making the portfolio invisible to Google for personal branding keywords (athalla, athalla arli, athalla arli abhinaya). Migrating to Next.js enables server-side rendering and proper SEO setup for job hunting and potential freelance opportunities.

## What Changes

- **Next.js migration**: Create new Next.js project with App Router, migrate all components from Vite, convert React Router to Next.js routing
- **SEO infrastructure**: Add dynamic metadata per page, JSON-LD structured data (Person, CreativeWork, SoftwareSourceCode schemas), sitemap.xml generation, robots.txt
- **Performance optimization**: Enable Next.js image optimization, font optimization, and built-in performance features
- **BREAKING**: Complete rewrite of build system and routing, all components need migration to Next.js patterns

## Capabilities

### New Capabilities

- `nextjs-framework`: Next.js App Router with server components for SEO-friendly rendering
- `seo-metadata`: Dynamic metadata generation per page with proper title, description, and Open Graph tags
- `structured-data`: JSON-LD schemas for Person (personal branding), CreativeWork (projects), and SoftwareSourceCode (GitHub repositories)
- `seo-infrastructure`: Sitemap.xml generation, robots.txt configuration, and search engine optimization setup

### Modified Capabilities

None (no existing spec-level behavior changes)

## Impact

- **Affected code**: All components (HeroSection, ContactContainer, AboutSection, SkillsSection, ProjectSection, ProjectGallery, ProjectDetail, Navbar, Footer), routing system, build configuration
- **Dependencies**: Add Next.js, React 18+, remove Vite, update build scripts
- **Breaking changes**: Complete migration from Vite SPA to Next.js SSR, routing pattern changes, component structure changes
- **Systems**: New build system, deployment configuration changes (Vercel or similar platform recommended)
