## Context

Current codebase uses custom CSS classes for UI components (btn-primary, btn-ghost, btn-accent, tag-pill, custom cards) and inline JavaScript hover state manipulation (onMouseEnter/onMouseLeave) across 10+ files. This creates maintenance burden and inconsistent behavior. Additionally, projectsData.js has bugs (githubUrlBe naming inconsistency, null liveUrl without handling, no input validation) and lacks TypeScript types. The goal is to integrate shadcn/ui for consistent, accessible components and fix the identified bugs.

## Goals / Non-Goals

**Goals:**
- Install and configure shadcn/ui with proper Tailwind integration
- Replace all custom button classes with shadcn Button component
- Replace custom card classes with shadcn Card component
- Replace tag-pill classes with shadcn Badge component
- Replace manual separators with shadcn Separator component
- Eliminate all inline onMouseEnter/onMouseLeave patterns in favor of CSS hover
- Fix naming inconsistency (githubUrlBe → githubBackendUrl)
- Add null handling for liveUrl in components
- Add input validation to projectsData helper functions
- Convert projectsData.js to TypeScript with proper interfaces

**Non-Goals:**
- No visual design changes (components should look the same after replacement)
- No new features or functionality
- No backend or API changes
- No changes to component logic or behavior (only implementation)

## Decisions

**Shadcn/ui Integration Approach:**
- Use shadcn CLI to initialize: `npx shadcn@latest init`
- Configure components.json to use existing Tailwind setup
- Install only needed components: Button, Card, Badge, Separator
- Keep existing Tailwind config and CSS variables

*Why this approach?* shadcn/ui is built on Radix UI and Tailwind, which aligns with current stack. CLI initialization ensures proper configuration. Installing only needed components keeps bundle size minimal.

**Component Replacement Strategy:**
- Map btn-primary → Button variant="default" with custom gradient
- Map btn-ghost → Button variant="ghost" 
- Map btn-accent → Button variant="default" with sage background
- Map custom cards → Card component with CardHeader, CardContent
- Map tag-pill/tag-pill-sage → Badge with variant="outline" or custom styling
- Map manual div separators → Separator component

*Why this mapping?* Maintains visual consistency while leveraging shadcn's accessibility and built-in variants. Custom styling can be applied via className to match current design.

**CSS Hover State Replacement:**
- Replace all onMouseEnter/onMouseLeave with Tailwind group-hover or hover: classes
- Use CSS transitions instead of JavaScript state manipulation
- Leverage Tailwind's built-in hover states for consistency

*Why CSS over JavaScript?* CSS hover is more performant, reduces JavaScript overhead, and is the standard approach. Current inline style manipulation is an anti-pattern.

**TypeScript Migration for projectsData:**
- Create Project interface with all required fields
- Create ProjectData type as Record<string, Project>
- Add proper typing to helper functions (getProject, getAllProjects)
- Add runtime validation using Zod or similar (optional)

*Why TypeScript?* Provides type safety, catches bugs at compile time, and improves developer experience. The current JavaScript file has no type checking.

**Bug Fix Approach:**
- Rename githubUrlBe to githubBackendUrl for consistency
- Add optional chaining and null checks for liveUrl in components
- Add error handling to getProject function (throw or return null for invalid id)

*Why this approach?* Consistent naming improves code readability. Null handling prevents runtime errors. Input validation makes helper functions more robust.

## Risks / Trade-offs

**Risk:** shadcn component styling may not match current design exactly
**Mitigation:** Use custom className with Tailwind utilities to match current styling. Test each component replacement visually.

**Risk:** TypeScript migration may break existing imports
**Mitigation:** Update all import statements to use .ts extension. Run TypeScript compiler to catch errors early.

**Risk:** CSS hover replacement may not capture all interactive states
**Mitigation:** Test all hover interactions thoroughly. Use focus states for accessibility.

**Trade-off:** Adding TypeScript increases build complexity
**Mitigation:** TypeScript is already in the project (used in other files), so this aligns with existing patterns.

## Migration Plan

1. Install shadcn/ui CLI and initialize
2. Install required shadcn components (Button, Card, Badge, Separator)
3. Replace btn-primary, btn-ghost, btn-accent with shadcn Button
4. Replace custom card classes with shadcn Card
5. Replace tag-pill classes with shadcn Badge
6. Replace manual separators with shadcn Separator
7. Remove all inline onMouseEnter/onMouseLeave patterns
8. Replace with CSS hover states using Tailwind
9. Fix githubUrlBe → githubBackendUrl in projectsData.js
10. Add null handling for liveUrl in ProjectDetail and ProjectGallery
11. Add input validation to getProject helper function
12. Convert projectsData.js to projectsData.ts with interfaces
13. Update all imports to use .ts extension
14. Test all components visually and functionally
15. Run TypeScript compiler to verify no errors

**Rollback strategy:** Git commit after each major component replacement allows easy rollback if visual issues arise.

## Open Questions

- Should we use Zod for runtime validation in projectsData, or is TypeScript sufficient? (Currently planning TypeScript only)
- Should we keep the custom gradient on btn-primary, or use a solid shadcn variant? (Currently planning custom gradient via className)
- Should we migrate all components to TypeScript, or just projectsData? (Currently planning just projectsData for this change)
