## Context

Current portfolio uses Vite + React SPA with client-side rendering, which means search engines see empty HTML (`<div id="root"></div>`). This makes the portfolio invisible to Google for personal branding keywords (athalla, athalla arli, athalla arli abhinaya). The portfolio contains dummy projects with GitHub links (open source), no services page, no testimonials, and is primarily for job hunting with freelance work as a bonus opportunity.

## Goals / Non-Goals

**Goals:**
- Migrate from Vite SPA to Next.js App Router for server-side rendering
- Implement SEO infrastructure for personal branding (name-based keywords)
- Add structured data (Person, CreativeWork, SoftwareSourceCode schemas)
- Enable proper metadata generation per page
- Generate sitemap.xml and robots.txt
- Maintain all existing functionality and visual design

**Non-Goals:**
- No services page (not needed for personal branding focus)
- No testimonials (user doesn't want them)
- No local SEO (Google Business Profile not needed)
- No content marketing/blogging (out of scope)
- No service keyword SEO (too competitive, not primary goal)

## Decisions

**Next.js App Router over Pages Router:**
- App Router is the modern Next.js pattern with better SEO features
- Server Components by default for better performance
- Better metadata API for dynamic SEO
- Simpler file-based routing

*Why App Router?* It's the recommended pattern for new Next.js projects, has better SEO capabilities, and future-proof.

**Fresh Next.js Project over In-place Migration:**
- Create new Next.js project from scratch
- Copy components over and adapt to Next.js patterns
- Clean migration without legacy Vite dependencies

*Why fresh project?* In-place migration from Vite to Next.js is complex and error-prone. Fresh start ensures clean architecture.

**Personal Branding SEO Focus:**
- Target keywords: athalla, athalla arli, athalla arli abhinaya, athalla dev
- JSON-LD schemas: Person (homepage/about), CreativeWork (projects), SoftwareSourceCode (GitHub links)
- No service keywords (too competitive, not primary goal)

*Why personal branding focus?* User's primary goal is job hunting. Personal branding has low competition and quick results (1-2 weeks). Service SEO is too competitive and requires long-term content marketing.

**Deployment to Vercel:**
- Vercel is the recommended platform for Next.js
- Automatic HTTPS, CDN, edge functions
- Built-in performance optimization
- Free tier available

*Why Vercel?* Best-in-class Next.js support, zero-config deployment, excellent performance.

**Component Migration Strategy:**
- Keep existing component structure where possible
- Convert inline styles to Tailwind classes where appropriate
- Adapt React Router hooks to Next.js navigation
- Convert client components to Server Components where possible

*Why this approach?* Minimizes breaking changes while leveraging Next.js benefits. Server Components for SEO-critical pages, Client Components for interactive elements.

## Risks / Trade-offs

**Risk:** Migration may break existing functionality during transition
**Mitigation:** Create new Next.js project alongside Vite version, test thoroughly before switching, keep Vite version as rollback option

**Risk:** Learning curve for Next.js App Router patterns
**Mitigation:** Follow Next.js documentation, use Server Components for SEO pages, Client Components for interactive elements

**Risk:** Deployment configuration changes (Vite build → Next.js build)
**Mitigation:** Use Vercel for seamless Next.js deployment, document deployment process

**Trade-off:** Complete migration takes 2-3 days
**Mitigation:** Phased approach - core migration first, SEO setup second, can pause between phases if needed

**Trade-off:** No service SEO (missing potential freelance opportunities)
**Mitigation:** Add services page later as optional enhancement, focus on personal branding first (quick wins)

## Migration Plan

1. **Phase 1: Core Migration** (2-3 days)
   - Create new Next.js project with App Router
   - Install dependencies (Tailwind, Radix UI, etc.)
   - Migrate layout components (Navbar, Footer)
   - Migrate page components (Home, About, Skills, Projects, ProjectDetail, Contact)
   - Convert React Router to Next.js routing
   - Test all functionality
   - Deploy to Vercel (staging)

2. **Phase 2: SEO Setup** (4-6 hours)
   - Add dynamic metadata per page
   - Implement JSON-LD schemas (Person, CreativeWork, SoftwareSourceCode)
   - Generate sitemap.xml
   - Add robots.txt
   - Add Open Graph tags
   - Test with Google Rich Results Test
   - Deploy to production

3. **Phase 3: Cleanup** (optional)
   - Remove Vite project
   - Update documentation
   - Archive old code

**Rollback strategy:** Keep Vite version running until Next.js version is fully tested and deployed. Domain can switch between versions via DNS or deployment platform.

## Open Questions

- Should we use TypeScript for the Next.js project? (Current Vite project uses some TypeScript)
- Should we migrate shadcn/ui integration to Next.js or handle separately? (shadcn-integration change exists but not started)
- Should we keep the same domain or use a subdomain for testing? (Recommend: use subdomain for staging, then switch main domain)
