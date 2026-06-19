## Why

Current codebase has custom UI components (buttons, cards, badges) implemented with manual CSS, inconsistent inline hover state management using onMouseEnter/onMouseLeave across 10+ files, and bugs in projectsData.js (inconsistent naming, null handling). Integrating shadcn/ui will provide consistent, accessible components, reduce custom CSS maintenance, and fix identified bugs for better code quality and maintainability.

## What Changes

- **Install and setup shadcn/ui**: Initialize shadcn/ui CLI, create components.json config, install required dependencies
- **Replace custom button components**: Replace btn-primary, btn-ghost, btn-accent CSS classes with shadcn Button component variants
- **Replace custom card components**: Replace custom card classes with shadcn Card component
- **Replace custom badge components**: Replace tag-pill, tag-pill-sage with shadcn Badge component
- **Replace custom separators**: Replace manual `<div className="h-px" />` with shadcn Separator component
- **Fix inline hover patterns**: Replace all inline onMouseEnter/onMouseLeave style manipulation with CSS hover states or Tailwind group-hover
- **Fix projectsData.js bugs**: Rename githubUrlBe to githubBackendUrl, add null handling for liveUrl, add input validation to helper functions
- **Add TypeScript types**: Convert projectsData.js to TypeScript with proper interfaces for type safety

## Capabilities

### New Capabilities

- `shadcn-components`: Integration of shadcn/ui component library (Button, Card, Badge, Separator)
- `css-hover-states`: Replace inline JavaScript hover with CSS-based hover states
- `typescript-data-layer`: Type-safe project data with TypeScript interfaces

### Modified Capabilities

None (no existing spec-level behavior changes)

## Impact

- **Affected code**: All components with custom buttons/cards/badges (HeroSection, ContactContainer, AboutSection, SkillsSection, ProjectSection, ProjectGallery, ProjectDetail, Navbar, Footer), index.css, projectsData.js
- **Dependencies**: Add shadcn/ui CLI, install shadcn component packages
- **Breaking changes**: None - component replacement maintains same visual output
- **Systems**: No backend changes, purely frontend component library integration
